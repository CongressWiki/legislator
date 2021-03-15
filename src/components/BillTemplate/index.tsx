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

  .bill {
    z-index: 1000;
    grid-area: bill;
    margin-top: 2rem;
    margin-bottom: 50vh;
  }

  @media (max-width: 900px) {
    position: relative;
    margin-top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
