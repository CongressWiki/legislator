import React from 'react';
import Header, { HeaderSpacer } from '@components/organisms/Header';
import styled from 'styled-components';

export type MinimumLayoutProps = {
  children: React.ReactNode;
};

const MinimumLayout = ({ children }: MinimumLayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <HeaderSpacer />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default MinimumLayout;
