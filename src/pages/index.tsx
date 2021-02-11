import React from 'react';
import { navigate, graphql, useStaticQuery } from 'gatsby';
import Layout from '@components/Layout';
import type { Bill as BillData } from '../types/hasura';
import styled from 'styled-components';
import BrightTitle from '@components/BrightTitle';

export type BillsQuery = {
  hasura: {
    bills_aggregate: {
      nodes: BillData[];
      aggregate: {
        count: number;
      };
    };
  };
};

export default function Home() {
  const data: BillsQuery = useStaticQuery(graphql`
    query BillAggregateQuery {
      hasura {
        bills_aggregate(limit: 100, order_by: { updated_at: desc }) {
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

  return (
    <Layout>
      <BrightTitle>Bills & Amendments</BrightTitle>
      <Wrapper>
        <h4>{data.hasura.bills_aggregate.aggregate.count} Bills</h4>
        {data.hasura.bills_aggregate.nodes.map((bill) => (
          <BillPreview key={bill.id} onClick={() => navigate(bill.id)}>
            <BillPreviewSection>
              <p>
                {bill.type.toUpperCase()} {bill.number}
              </p>
              <p>{bill.subject}</p>
            </BillPreviewSection>
            <BillPreviewSection center>
              <p>{bill.title}</p>
            </BillPreviewSection>
            <BillPreviewSection>
              <p>{new Date(bill.updated_at).toDateString()}</p>
            </BillPreviewSection>
          </BillPreview>
        ))}
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 32px;
  /* grid-template-columns: 1fr min(70ch, calc(100% - 64px)) 1fr; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const BillPreviewSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) => (props.center ? 'center' : 'space-between')};
  align-items: center;

  p {
    margin: 0;
    font-size: 1.2em;
  }
`;

const BillPreview = styled.div`
  padding: 15px;
  height: 25vh;
  width: 100%;
  overflow: hidden;
  border: 1px solid var(--color-secondary);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  :hover {
    cursor: pointer;
  }
`;
