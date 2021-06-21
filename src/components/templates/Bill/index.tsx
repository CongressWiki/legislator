import React from 'react';
import styled from 'styled-components';
import type { Bill as BillType } from '@type/hasura';
import Seo from '@components/App/Seo';
import Bill from '@components/organisms/BillV2';
import BillDetails from '@components/organisms/BillDetails';
import type { ActionWithRollCall } from '@components/molecules/BillDetailsSection/Section';
import Header, { HeaderSpacer } from '@components/organisms/Header';

export type BillTemplateProps = {
  pageContext: {
    slug: string;
    bill: BillType;
  };
};

const BillTemplate = ({ pageContext: { slug, bill } }: BillTemplateProps) => {
  let allBillSubjects = [bill.subject];

  if (bill.subjects) {
    allBillSubjects = [...allBillSubjects, ...bill.subjects];
  }

  const houseActions: ActionWithRollCall[] = bill.actions.filter(
    (a) => a.chamber === 'HOUSE'
  );
  const senateActions: ActionWithRollCall[] = bill.actions.filter(
    (a) => a.chamber === 'SENATE'
  );
  const presidentActions: ActionWithRollCall[] = bill.actions.filter(
    (a) => a.chamber === 'PRESIDENT'
  );

  return (
    <>
      <Seo
        billSocialCard
        pathname={slug}
        title={`${bill.type.toUpperCase()}${bill.number}`}
        description={bill.title}
        keywords={allBillSubjects}
      />
      <Header />
      <HeaderSpacer />
      <Layout>
        <BillDetails
          className="details"
          sponsor={bill.sponsor}
          cosponsors={bill.cosponsorships}
          houseActions={houseActions}
          senateActions={senateActions}
          presidentActions={presidentActions}
        />
        <Bill
          className="bill"
          type={bill.type}
          number={bill.number}
          subject={bill.subject}
          summary={bill.summary}
          title={bill.title}
          status={bill.status}
        />
      </Layout>
    </>
  );
};

export default BillTemplate;

const Layout = styled.div`
  position: relative;
  flex-direction: column;
  width: 100%;

  // Prevent horizontal scroll bar from appearing when ribbons are sliding in
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'details bill';

  .details {
    grid-area: details;
  }

  .bill {
    grid-area: bill;
  }

  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
