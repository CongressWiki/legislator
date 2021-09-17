import React from 'react';
import Home from '@components/templates/Home';
import type { Bill, OfficialWithImage, Official } from '@type/hasura';
import { graphql, useStaticQuery } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

export type HomePageProps = {
  hasura: {
    bills: {
      nodes: Bill[];
      aggregate: {
        count: number;
      };
    };
    electedOfficials: Official[];
    featuredBills: Array<{
      id: string;
      bill_id: string;
      start_date: number;
      end_date: number;
      bill: {
        type: string;
        number: number;
        short_title: string;
        title: string;
        status: string;
        congress: string;
      };
    }>;
  };
  congressImages: {
    nodes: Array<{
      extension: string;
      name: string;
      modifiedTime: string;
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    }>;
  };
};

const HomePage = () => {
  const data: HomePageProps = useStaticQuery(graphql`
    query HomeQuery {
      congressImages: allFile(
        filter: { sourceInstanceName: { eq: "congressImages" } }
      ) {
        nodes {
          extension
          name
          modifiedTime
          childImageSharp {
            gatsbyImageData(
              height: 375
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      hasura {
        bills: bills_aggregate(order_by: { introduced_at: desc }) {
          nodes {
            id
            number
            title
            subject
            congress
            status
            status_at
            type
            introduced_at
            short_title
            sponsor_id
          }
          aggregate {
            count
          }
        }
        electedOfficials: elected_officials(order_by: { term_start_at: desc }) {
          id
          is_active
          political_party
          position
          preferred_name
          state
        }
        featuredBills: featured_bills(limit: 6) {
          id
          bill_id
          bill {
            type
            number
            short_title
            title
            congress
          }
        }
      }
    }
  `);

  const images = data.congressImages.nodes;
  let bills = data.hasura.bills.nodes;
  const { electedOfficials, featuredBills } = data.hasura;

  const findElectedOfficial = (elected_official_id: string) =>
    electedOfficials.find(
      (electedOfficial) => electedOfficial.id === elected_official_id
    );
  const findElectedOfficialImage = (elected_official_id: string) =>
    images.find((image) => image.name === elected_official_id);

  bills = bills.map((bill) => {
    const originalChamber = getOriginalChamber(bill.type);

    return {
      ...bill,
      originalChamber,
      status: normalizeBillStatus(bill.status, originalChamber),
      sponsor: {
        ...findElectedOfficial(bill.sponsor_id),
        image: findElectedOfficialImage(bill.sponsor_id),
      },
    };
  });

  return <Home bills={bills} featuredBills={featuredBills} />;
};

export default HomePage;

const getOriginalChamber = (type: string) => {
  const HOUSE = 'HOUSE';
  const SENATE = 'SENATE';

  switch (type.toLowerCase()) {
    case 's':
    case 'sres':
    case 'sjres':
      return SENATE;
    case 'hr':
    case 'hres':
    case 'hjres':
    default:
      return HOUSE;
  }
};

const normalizeBillStatus = (result: string, originalChamber: string) => {
  switch (result) {
    case 'INTRODUCED':
      return `INTRODUCED IN ${originalChamber}`;
    case 'PASSED':
      return 'PASSED';
    case 'REFERRED':
      return 'REFERRED TO COMMITTEES';
    case 'REPORTED':
      return `COMMITTEE REPORTED TO ${originalChamber}`;
    case 'PROV_KILL:SUSPENSIONFAILED':
      return 'FAILED';
    case 'PROV_KILL:CLOTUREFAILED':
      return 'FILIBUSTERED';
    case 'FAIL:ORIGINATING:HOUSE':
      return 'FAILED IN HOUSE';
    case 'FAIL:ORIGINATING:SENATE':
      return 'FAILED IN SENATE';
    case 'PASSED:SIMPLERES':
      return `PASSED IN ${originalChamber}`;
    case 'PASSED:CONSTAMEND':
      return 'PENDING STATE APPROVAL';
    case 'PASS_OVER:HOUSE':
      return 'PASSED IN HOUSE';
    case 'PASS_OVER:SENATE':
      return 'PASSED IN SENATE';
    case 'PASSED:CONCURRENTRES':
      return 'PASSED IN HOUSE AND SENATE';
    case 'FAIL:SECOND:HOUSE':
      return 'FAILED IN HOUSE';
    case 'FAIL:SECOND:SENATE':
      return 'FAILED IN SENATE';
    case 'PASS_BACK:HOUSE':
      return 'AMENDED BY HOUSE';
    case 'PASS_BACK:SENATE':
      return 'AMENDED BY SENATE';
    case 'PROV_KILL:PINGPONGFAIL':
      return 'AMENDMENTS DENIED';
    case 'PASSED:BILL':
      return 'PENDING PRESIDENT SIGNATURE';
    case 'CONFERENCE:PASSED:HOUSE':
      return 'CONFERENCE:PASSED:HOUSE';
    case 'CONFERENCE:PASSED:SENATE':
      return 'CONFERENCE:PASSED:SENATE';
    case 'ENACTED:SIGNED':
      return 'SIGNED BY PRESIDENT';
    case 'PROV_KILL:VETO':
      return 'VETOED BY PRESIDENT';
    case 'VETOED:POCKET':
      return 'PRESIDENT DID NOT SIGN BEFORE CONGRESS ADJOURNED';
    case 'VETOED:OVERRIDE_FAIL_ORIGINATING:HOUSE':
      return 'VETO OVERRIDE FAILED IN HOUSE';
    case 'VETOED:OVERRIDE_FAIL_ORIGINATING:SENATE':
      return 'VETO OVERRIDE FAILED IN SENATE';
    case 'VETOED:OVERRIDE_PASS_OVER:HOUSE':
      return 'VETO OVERRIDE PASSED IN HOUSE';
    case 'VETOED:OVERRIDE_PASS_OVER:SENATE':
      return 'VETO OVERRIDE PASSED IN SENATE';
    case 'VETOED:OVERRIDE_FAIL_SECOND:HOUSE':
      return 'VETO OVERRIDE FAILED IN HOUSE';
    case 'VETOED:OVERRIDE_FAIL_SECOND:SENATE':
      return 'VETO OVERRIDE FAILED IN SENATE';
    case 'ENACTED:VETO_OVERRIDE':
      return 'ENACTED';
    case 'ENACTED:TENDAYRULE':
      return 'ENACTED';
    default:
      return 'UNKNOWN';
  }
};
