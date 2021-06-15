import React from 'react';
import styled from 'styled-components';
import Seo from '@components/App/Seo';
import BillCardFeed from '@components/organisms/BillCardFeed';
import type { Bill, OfficialWithImage } from '@type/hasura';
import Header, { HeaderSpacer } from '@components/organisms/Header';

export type HomeProps = {
  bills: Array<Bill & { sponsor?: OfficialWithImage }>;
};

const Home = ({ bills }: HomeProps) => {
  return (
    <>
      <Header />
      <HeaderSpacer />
      <Layout>
        <Seo title="Bills" pathname="/" />
        <BillCardFeed bills={bills} />
      </Layout>
    </>
  );
};

export default Home;

const Layout = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr min(70ch, calc(100% - 64px)) 1fr;

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

  margin-bottom: 50vh;
`;
