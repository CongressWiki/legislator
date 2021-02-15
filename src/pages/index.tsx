import React from 'react';
import { navigate, graphql, useStaticQuery } from 'gatsby';
import Layout from '@components/Layout/Layout';
import type { Bill as BillDataType } from '../types/hasura';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SEO from '@components/Seo/Seo';

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
        bills_aggregate(limit: 25, order_by: { updated_at: desc }) {
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

  const renderImage = (id: string) => {
    const image = allFile.edges.find(
      (edge: Record<string, any>) => edge.node.name === id
    );

    if (!image) return null;
    return (
      <SponsorAvatar>
        <Img fluid={image?.node.childImageSharp.fluid} />
      </SponsorAvatar>
    );
  };

  return (
    <Layout>
      <SEO title="Bills" />
      <Wrapper>
        <h4>{hasura.bills_aggregate.aggregate.count} recently updated bills</h4>
        {hasura.bills_aggregate.nodes.map((bill) => (
          <BillPreview key={bill.id} onClick={() => navigate(bill.id)}>
            <BillPreviewSection>
              <p>
                {bill.type.toUpperCase()} {bill.number}
              </p>
              <p>{bill.subject}</p>
              {renderImage(bill.sponsor)}
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

const SponsorAvatar = styled.div`
  border: thin solid red;
  border-radius: 100%;
  width: 50px;
  overflow: hidden;
  transform: all 1;

  :hover {
    transform: all 1s;
    -webkit-transform: scale(1.4);
    -moz-transform: scale(1.4);
    -o-transform: scale(1.4);
    -ms-transform: scale(1.4);
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 32px;
  /* grid-template-columns: 1fr min(70ch, calc(100% - 64px)) 1fr; */
`;

interface BillPreviewSectionProps {
  readonly center?: boolean;
}

export const BillPreviewSection = styled.div<BillPreviewSectionProps>`
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
  height: 30vh;
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
