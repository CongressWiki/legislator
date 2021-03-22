import React from 'react';
import styled from 'styled-components';

const SiteTitle = ({ title = 'USACounts' }) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled.h1`
  margin: 0;
  display: inline-block;

  font-family: advocate_c43_mid;
  font-size: 4rem;

  color: var(--color-primary);

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

export default SiteTitle;
