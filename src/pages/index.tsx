import React, { useState } from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import Layout from '@components/Layouts/Common';
import type { Bill as BillDataType } from '../types/hasura';
import styled from 'styled-components';
import SEO from '@components/Seo';
import BillLane from '@components/BillLane';
import BillLaneHeader from '@components/BillLaneHeader';
import BillLaneFooter from '@components/BillLaneFooter';

import BillCard from '@components/BillCard';

export type HomeQuery = {
  hasura: {
    bills_aggregate: {
      nodes: BillDataType[];
      aggregate: {
        count: number;
      };
    };
  };

  allFile: Record<string, any>;
};

export default function Home() {
  const data: HomeQuery = useStaticQuery(graphql`
    query billAndImageQuery {
      hasura {
        bills_aggregate(
          order_by: { updated_at: desc }
          where: { summary: { _neq: "No summary available." } }
        ) {
          nodes {
            id
            number
            title
            subject
            summary
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
          }
          aggregate {
            count
          }
        }
      }
    }
  `);

  const bills = data.hasura.bills_aggregate.nodes;

  const [billTypes, setBillTypes] = useState<string[]>([]);
  const [searchBy, setSearchBy] = useState('');
  const [orderByAsc, setOrderByAsc] = useState(false);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const CHAMBER_BILL_TYPES = {
    House: ['hr', 'hres', 'hconres', 'hjres'],
    Senate: ['s', 'sres', 'sconres', 'sjres'],
    All: [],
  };

  const handleChamberSelection = (option: string) => {
    if (!(option in CHAMBER_BILL_TYPES)) {
      console.error(`No match for chamber selection: ${option}`);
    }
    // @ts-ignore
    setBillTypes(CHAMBER_BILL_TYPES[option]);
  };

  const handleSearchInput = (value: string) => setSearchBy(value.toLowerCase());

  const handleOrderAscToggle = (isAscending: boolean) =>
    setOrderByAsc(isAscending);

  const filteredBills = bills.filter((bill) => {
    const isBillType = billTypes.length === 0 || billTypes.includes(bill.type);

    const matchesSearchBy =
      !searchBy ||
      bill.id.toLowerCase().includes(searchBy) ||
      bill.title.toLowerCase().includes(searchBy);

    if (isBillType && matchesSearchBy) return bill;
  });

  if (orderByAsc) {
    filteredBills.reverse();
  }

  const loadMore = () => setLimit(limit + 10);

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
              onClick={() =>
                navigate(`${bill.congress}/${bill.type}${bill.number}`)
              }
              {...bill}
            />
          ))}
        </BillLane>
        <BillLaneFooter
          onClick={loadMore}
          disabled={limit > filteredBills.length}
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
  font-size: 1.4em;
  font-family: concourse_c2;
  color: var(--color-gray500);

  @media (max-width: 920px) {
    width: 50px;
  }
`;
