import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header, { HeaderSpacer } from '@components/Header';
import styled from 'styled-components';

export type BillFeedLayoutProps = {
  children: React.ReactNode;
};

const BillFeedLayout = ({ children }: BillFeedLayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title} />
      <HeaderSpacer />
      <Wrapper id="layout-wrapper">{children}</Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr min(70ch, calc(100% - 64px)) 1fr;
  grid-column-gap: 32px;
  margin: 0;
  padding: 0;

  > * {
    grid-column: 2;
  }

  .left-side {
    grid-column: 1 / 2;
  }

  .right-side {
    grid-column: 3 / 4;
  }

  .full-bleed {
    grid-column: 1 / -1;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0;

    > * {
      grid-column: 1;
    }
  }
`;

export default BillFeedLayout;
