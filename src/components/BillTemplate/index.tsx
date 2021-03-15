import React from 'react';
import Layout from '@components/Layouts/BillView';
import type { Bill as BillData } from '@type/hasura';
import SEO from '@components/Seo';
import Bill from '@components/Bill';
import styled from 'styled-components';
import BillDetails from '@components/BillDetails';

export type BillTemplateProps = {
  pageContext: {
    slug: string;
    bill: BillData;
  };
};

const BillTemplate = ({ pageContext: { slug, bill } }: BillTemplateProps) => {
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
        <BillDetails sponsor={bill.sponsor} cosponsors={bill.cosponsorships} />
        <BillWrapper>
          <Bill className="bill" {...bill} />
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
  /* z-index: -100; */

  .bill {
    z-index: 1000;
    margin-bottom: 50vh;
    grid-area: bill;
    margin-top: 2rem;

    -webkit-box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 900px) {
    position: relative;
    margin: 0;
    width: 100%;
    top: unset;
    right: unset;
    left: unset;
    display: flex;
    justify-content: center;
  }
`;
