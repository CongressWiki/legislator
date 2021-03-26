import React from 'react';
import Layout from '@components/Layouts/BillView';
import type { Bill as BillType, OfficialWithImage } from '@type/hasura';
import SEO from '@components/Seo';
import Bill from '@components/Bill';
import styled from 'styled-components';
import BillDetails from '@components/BillDetails';
import { graphql } from 'gatsby';

export const query = graphql`
  query HasuraBillData($billId: String) {
    hasura {
      bills(where: { id: { _eq: $billId } }, limit: 1) {
        type
        congress
        number
        subject
        subjects
        title
        short_title
        summary
        sponsor_id
        by_request
        status
        status_at
        introduced_at
        created_at
        updated_at
        cosponsorships(
          order_by: { sponsored_at: desc }
          where: { withdrawn_at: { _is_null: true } }
        ) {
          id
          original_cosponsor
          state
          district
          sponsored_at
          withdrawn_at
          elected_official_id
        }
        roll_calls(order_by: { date: desc }) {
          id
          type
          chamber
          session
          congress
          number
          category
          question
          requires
          result
          result_text
          date
          subject
          nomination
          record_modified_at
          updated_at
          votes {
            id
            decision
            elected_official_id
            state
            date
            created_at
          }
        }
        actions(order_by: { acted_at: desc }) {
          acted_at
          action_code
          amendment_id
          bill_id
          how
          id
          references
          result
          roll
          status
          suspension
          text
          type
          vote_type
          where
        }
      }
    }
  }
`;

export type BillTemplateProps = {
  pageContext: {
    slug: string;
    billId: string;
    electedOfficials: OfficialWithImage[];
  };
  data: {
    hasura: {
      bills: BillType[];
    };
  };
};

const BillTemplate = ({
  pageContext: { slug, billId, electedOfficials },
  data,
}: BillTemplateProps) => {
  let bill = data.hasura.bills[0];

  if (!bill) {
    throw new Error(`No bill found where bill_id: ${billId}`);
  }

  // TODO: convert to curry function
  const findElectedOfficial = (elected_official_id: string) => {
    const match = electedOfficials.find(
      (electedOfficial) => electedOfficial.id === elected_official_id
    );
    if (!match) {
      throw new Error(
        `Elected Official not in memory where elected_official_id: ${elected_official_id}`
      );
    }
    return match;
  };

  // Inject Sponsor's elected_official data
  bill.sponsor = findElectedOfficial(bill.sponsor_id);

  // Inject Cosponsor's elected_official data
  bill.cosponsorships = bill.cosponsorships.map((cosponsorship) => ({
    ...cosponsorship,
    elected_official: findElectedOfficial(cosponsorship.elected_official_id),
  }));

  // Inject Roll call voter's elected_official data
  if (bill.roll_calls.length > 0) {
    bill.roll_calls = bill.roll_calls.map((roll_call) => ({
      ...roll_call,
      votes: roll_call.votes?.map((vote) => ({
        ...vote,
        elected_official: findElectedOfficial(vote.elected_official_id),
      })),
    }));
  }

  let allBillSubjects = [bill.subject];

  if (bill.subjects) {
    allBillSubjects = [...allBillSubjects, ...bill.subjects];
  }

  return (
    <>
      <SEO
        pathname={slug}
        title={`${bill.type.toUpperCase()}${bill.number}`}
        description={bill.title}
        keywords={allBillSubjects}
        billSocialCard
      />
      <Layout>
        <BillDetails
          sponsor={bill.sponsor}
          cosponsors={bill.cosponsorships}
          rollCalls={bill.roll_calls}
        />
        <BillWrapper>
          <Bill
            className="bill"
            type={bill.type}
            number={bill.number}
            status={bill.status}
            subject={bill.subject}
            title={bill.title}
            bill_text={bill.bill_text}
            summary={bill.summary}
          />
        </BillWrapper>
      </Layout>
    </>
  );
};

export default BillTemplate;

const BillWrapper = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'content bill';
  width: 100%;

  pointer-events: none;

  .bill {
    z-index: 1000;
    grid-area: bill;
    margin-top: 2rem;
    margin-bottom: 50vh;
    pointer-events: auto;

    @media (max-width: 450px) {
      margin-top: 0;
    }
  }

  @media (max-width: 900px) {
    position: relative;
    margin-top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
