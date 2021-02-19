import React from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import Layout from '@components/Layouts/Home';
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
          limit: 30
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

      # allFile(filter: { sourceInstanceName: { eq: "congressImages" } }) {
      #   edges {
      #     node {
      #       extension
      #       dir
      #       modifiedTime
      #       name
      #       childImageSharp {
      #         fluid(maxWidth: 250) {
      #           ...GatsbyImageSharpFluid
      #         }
      #       }
      #     }
      #   }
      # }
    }
  `);

  const { hasura } = data;

  return (
    <Layout>
      <SEO title="Bills" />
      {hasura.bills_aggregate.nodes.map((bill) => (
        <BillCard
          key={bill.id}
          onClick={() => navigate(bill.id)}
          className={'card'}
          {...bill}
        />
      ))}
    </Layout>
  );
}
