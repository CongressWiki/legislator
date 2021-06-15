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
              width: 50
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
      }
    }
  `);

  const images = data.congressImages.nodes;
  let bills = data.hasura.bills.nodes;
  const { electedOfficials } = data.hasura;

  const findElectedOfficial = (elected_official_id: string) =>
    electedOfficials.find(
      (electedOfficial) => electedOfficial.id === elected_official_id
    );
  const findElectedOfficialImage = (elected_official_id: string) =>
    images.find((image) => image.name === elected_official_id);

  // @ts-expect-error ignore type miss-match error
  bills = bills.map((bill) => ({
    ...bill,
    sponsor: {
      ...findElectedOfficial(bill.sponsor_id),
      image: findElectedOfficialImage(bill.sponsor_id),
    },
  }));

  return <Home bills={bills} />;
};

export default HomePage;
