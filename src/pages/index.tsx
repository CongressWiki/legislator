import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '@components/Layouts/BillFeed';
import type { Bill as IBill, Official as IOfficial } from '@type/hasura';
import SEO from '@components/Seo';
import BillLane from '@components/BillLane';
import BillLaneHeader from '@components/BillLaneHeader';
import BillLaneFooter from '@components/BillLaneFooter';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import withApollo from '@utils/withApollo';

import BillCard from '@components/BillCard';

export type BillsAndCongressImagesQuery = {
  hasura: {
    bills: {
      nodes: Array<IBill & { sponsor: IOfficial }>;
      aggregate: {
        count: number;
      };
    };
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

function Home() {
  const data: BillsAndCongressImagesQuery = useStaticQuery(graphql`
    query BillsAndCongressImages {
      congressImages: allFile(
        filter: { sourceInstanceName: { eq: "congressImages" } }
      ) {
        nodes {
          extension
          name
          modifiedTime
          childImageSharp {
            gatsbyImageData(
              width: 100
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      hasura {
        bills: bills_aggregate(order_by: { updated_at: desc }) {
          nodes {
            id
            number
            title
            subject
            summary
            congress
            status
            status_at
            type
            introduced_at
            updated_at
            created_at
            by_request
            related_bills
            short_title
            subjects
            sponsor {
              id
              born_at
              created_at
              district
              first_name
              gender
              house_terms
              is_active
              last_name
              political_party
              position
              preferred_name
              president_terms
              rank
              senate_terms
              state
              term_end_at
              term_start_at
              updated_at
              vice_president_terms
            }
            cosponsorships {
              id
              original_cosponsor
              sponsored_at
              state
              withdrawn_at
              district
              elected_official {
                id
                created_at
                district
                first_name
                gender
                house_terms
                is_active
                last_name
                political_party
                position
                president_terms
                preferred_name
                rank
                senate_terms
                state
              }
            }
            actions {
              id
              type
              acted_at
              action_code
              status
              text
              references
              vote_type
              how
              where
              roll
              result
              suspension
            }
          }
          aggregate {
            count
          }
        }
      }
    }
  `);

  const images = data.congressImages.nodes;
  const bills = data.hasura.bills.nodes;

  const [billTypes, setBillTypes] = useState<string[]>([]);
  const [searchBy, setSearchBy] = useState('');
  const [orderByAsc, setOrderByAsc] = useState(false);
  const limitIncrement = 15;
  const [limit, setLimit] = useState(limitIncrement);
  const offset = 0;

  const CHAMBER_BILL_TYPES = {
    House: ['hr', 'hres', 'hconres', 'hjres'],
    Senate: ['s', 'sres', 'sconres', 'sjres'],
    All: [],
  };

  const handleChamberSelection = (option: string) => {
    if (!(option in CHAMBER_BILL_TYPES)) {
      console.error(`No match for chamber selection: ${option}`);
    }

    // @ts-expect-error
    setBillTypes(CHAMBER_BILL_TYPES[option]);
  };

  const handleSearchInput = (value: string) => {
    setSearchBy(value.toLowerCase());
  };

  const handleOrderAscToggle = (isAscending: boolean) => {
    setOrderByAsc(isAscending);
  };

  const filteredBills = bills.filter((bill) => {
    const isBillType = billTypes.length === 0 || billTypes.includes(bill.type);

    const matchesSearchBy =
      !searchBy ||
      bill.id.toLowerCase().includes(searchBy) ||
      bill.sponsor.preferred_name.toLocaleLowerCase().includes(searchBy) ||
      bill.title.toLowerCase().includes(searchBy);

    if (isBillType && matchesSearchBy) return bill;
  });

  if (orderByAsc) filteredBills.reverse();

  const loadMore = () => setLimit(limit + limitIncrement);

  return (
    <>
      <SEO title="Latest Bills" pathname="/" />
      <Layout>
        <BillLane>
          <BillLaneHeader
            handleChamberSelection={handleChamberSelection}
            handleSearchInput={handleSearchInput}
            handleOrderAscToggle={handleOrderAscToggle}
            billCount={filteredBills.length || 0}
          />
          {filteredBills.slice(offset, limit).map((bill) => (
            <BillCard
              key={bill.id}
              sponsorImage={images.find(
                (image) => image.name === bill.sponsor.id
              )}
              {...bill}
            />
          ))}
        </BillLane>
        <BillLaneFooter
          disabled={limit > filteredBills.length}
          onClick={loadMore}
        />
      </Layout>
    </>
  );
}

export default withApollo(Home);
