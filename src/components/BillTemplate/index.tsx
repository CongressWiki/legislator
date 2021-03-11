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
    sponsorImage: any;
    cosponsorImages: any[];
  };
};

const BillTemplate = ({
  pageContext: { slug, bill, sponsorImage, cosponsorImages },
}: BillTemplateProps) => {
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
          sponsorImage={sponsorImage}
          cosponsors={bill.cosponsorships.map(
            (cosponsorship) => cosponsorship.elected_official
          )}
          cosponsorImages={cosponsorImages}
        />
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
  z-index: 100;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'content bill';

  .bill {
    grid-area: bill;
    margin-top: 2rem;
  }

  @media (max-width: 600px) {
    position: relative;
    z-index: 0;
    margin: 0;
    width: 100%;
    top: unset;
    right: unset;
    left: unset;
    justify-content: center;
  }
`;
