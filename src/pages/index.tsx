import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "@components/Layout";
import type { Bill as BillData } from "../types/hasura";
import styled from "styled-components";
import BrightTitle from "@components/BrightTitle";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export type BillsQuery = {
  hasura: {
    bills_aggregate: {
      nodes: Array<BillData>;
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
      <Container>
        <h4>{data.hasura.bills_aggregate.aggregate.count} Bills</h4>
        {data.hasura.bills_aggregate.nodes.map((bill) => (
          <div key={bill.id}>
            <Link to={bill.id}>
              <h4>
                {bill.type.toUpperCase()} {bill.number}
              </h4>
            </Link>
            <p>
              {bill.subject} — {new Date(bill.updated_at).toDateString()}
            </p>
          </div>
        ))}
      </Container>
    </Layout>
  );
}
