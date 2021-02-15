import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '@components/Header/Header';
import styled from 'styled-components';

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <HeaderSpacer />
      {children}
      <HeaderSpacer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr min(70ch, calc(100% - 64px)) 1fr;
  grid-column-gap: 32px;

  > * {
    grid-column: 2;
  }

  .right-side {
    grid-column: 3 / 4;
    background: var(--color-background);
    color: var(--color-text);

    @media (max-width: 900px) {
      display: none;
    }
  }

  .full-bleed {
    grid-column: 1 / -1;
  }
`;

const HeaderSpacer = styled.div`
  top: 0;
  margin: 0;
  padding: 0;
  height: 0;
  padding-bottom: 115px;
`;

export default Layout;
