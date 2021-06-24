import React from 'react';
import Header, { HeaderSpacer } from '@components/organisms/Header';
import styled from 'styled-components';

export type CommonLayoutProps = {
  children: React.ReactNode;
};

const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <>
      <Header />
      <HeaderSpacer />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr min(70ch, calc(100% - 64px)) 1fr;
  grid-column-gap: 32px;

  > * {
    grid-column: 2;
  }

  .left-side {
    grid-column: 1 / 2;

    @media (max-width: 900px) {
      display: none;
    }
  }

  .right-side {
    grid-column: 3 / 4;

    @media (max-width: 900px) {
      display: none;
    }
  }

  .full-bleed {
    grid-column: 1 / -1;
  }
`;

export default CommonLayout;
