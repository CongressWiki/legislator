import React from 'react';
import styled from 'styled-components';

export type SiteTitleProps = {
  title?: string;
};

const SiteTitle = ({ title = 'USACounts' }: SiteTitleProps) => {
  return <Header>{title}</Header>;
};

const Header = styled.p`
  margin: 0;
  padding: 0;

  line-height: 1;

  font-family: advocate_c43_mid;
  font-size: 4rem;

  color: var(--color-text);

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

export default SiteTitle;
