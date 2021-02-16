import React from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import Layout from '@components/Layout';
import type { Bill as BillDataType } from '../types/hasura';
import styled from 'styled-components';
import SEO from '@components/Seo';
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
          limit: 25
          order_by: { updated_at: desc }
          where: {
            bill_text: { _is_null: true }
            summary: { _neq: "No summary available." }
          }
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

      allFile(filter: { sourceInstanceName: { eq: "congressImages" } }) {
        edges {
          node {
            extension
            dir
            modifiedTime
            name
            childImageSharp {
              fluid(maxWidth: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const { hasura, allFile } = data;

  return (
    <Layout>
      <SEO title="Bills" />
      <Wrapper>
        <h4>{hasura.bills_aggregate.aggregate.count} recently updated bills</h4>
        {hasura.bills_aggregate.nodes.map((bill) => (
          <BillCard key={bill.id} onClick={() => navigate(bill.id)} {...bill} />
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
