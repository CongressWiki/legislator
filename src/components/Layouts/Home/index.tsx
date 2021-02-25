import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Header, {HeaderSpacer} from '@components/Header';
import styled from 'styled-components';

export type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({children}: HomeLayoutProps) => {
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <HeaderSpacer />
      <Wrapper>
        {children}
        <HeaderSpacer />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-areas:
    '. . capital capital capital capital capital . .'
    'hheader ..... ..... resolved resolved resolved ...... ...... sheader'
    'hheader house house resolved resolved resolved senate senate sheader';
  grid-column-gap: 32px;
  color: var(--color-text);

  > * {
    grid-column: 3 / 6;
  }

  .house-header {
    grid-area: hheader;
    /* display: fixed; */
    writing-mode: vertical-rl;
  }

  .senate-header {
    grid-area: sheader;
    /* display: fixed; */

    writing-mode: vertical-rl;
    display: flex;
    align-items: flex-end;
  }

  .house {
    grid-area: house;
  }

  .senate {
    grid-area: senate;
  }

  .resolved {
    grid-area: resolved;
  }

  .capital {
    grid-area: capital;
  }

  .left-side {
    grid-column: 2;
  }

  .right-side {
    grid-column: 6;
  }

  .main-bleed {
    grid-column: 2 / 7;
  }

  .full-bleed {
    grid-column: 1 / -1;
  }
  /*
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);

    > * {
      grid-column: 2;
    }
    .left-side {
      grid-column: 1;
    }
    .right-side {
      grid-column: 3;
    }
  } */
`;

export default HomeLayout;
