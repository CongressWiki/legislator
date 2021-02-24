import React from 'react';
import styled from 'styled-components';

const SiteTitle = () => {
  return (
    <Wrapper>
      <Header>USACounts</Header>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled.h1`
  margin: 0;
  display: inline-block;

  font-family: advocate_c43_mid;
  font-size: 64px;

  color: var(--color-secondary);
`;

export default SiteTitle;
