import React, { useState } from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import Layout from '@components/Layouts/BillFeed';
import type { Bill as IBill, Official as IOfficial } from '../types/hasura';
import styled from 'styled-components';
import SEO from '@components/Seo';
import BillLane from '@components/BillLane';
import BillLaneHeader from '@components/BillLaneHeader';
import BillLaneFooter from '@components/BillLaneFooter';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

import BillCard from '@components/BillCard';

export type BillsAndCongressImagesQuery = {
  hasura: {
    bills: {
      nodes: Array<IBill & { elected_official_sponsor: IOfficial }>;
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

export default function Home() {
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
              width: 300
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
            bill_text
            sponsor
            congress
            actions
            status
            status_at
            type
            introduced_at
            updated_at
            created_at
            by_request
            elected_official_sponsor {
              born_at
              created_at
              district
              first_name
              gender
              house_terms
              id
              is_active
              last_name
              political_party
              position
              preferred_name
              rank
              senate_terms
              state
              term_end_at
              term_start_at
              updated_at
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
  const limitIncrement = 10;
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
      bill.elected_official_sponsor.preferred_name
        .toLocaleLowerCase()
        .includes(searchBy) ||
      bill.title.toLowerCase().includes(searchBy);

    if (isBillType && matchesSearchBy) return bill;
  });

  if (orderByAsc) filteredBills.reverse();

  const loadMore = () => setLimit(limit + limitIncrement);

  return (
    <>
      <SEO title="Keeping US-Accountable" />
      <Layout>
        <BillLane>
          <BillLaneHeader
            handleChamberSelection={handleChamberSelection}
            handleSearchInput={handleSearchInput}
            handleOrderAscToggle={handleOrderAscToggle}
          />
          {filteredBills.slice(offset, limit).map((bill) => (
            <BillCard
              key={bill.id}
              onClick={async () =>
                navigate(`${bill.congress}/${bill.type}${bill.number}`)
              }
              {...bill}
              sponsorImage={images.find((image) => image.name === bill.sponsor)}
            />
          ))}
        </BillLane>
        <BillLaneFooter
          disabled={limit > filteredBills.length}
          onClick={loadMore}
        />
        <NumberOfBills>{`${filteredBills.length} bills`}</NumberOfBills>
      </Layout>
    </>
  );
}

const NumberOfBills = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  font-size: 1rem;
  font-family: concourse_c2;
  color: var(--color-text);

  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
  background-color: var(--color-gray300);
`;
