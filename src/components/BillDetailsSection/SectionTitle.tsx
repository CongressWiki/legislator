import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.h2`
  position: absolute;
  right: 31ch;
  height: auto;
  margin: 0;
  padding: 0;
  padding-bottom: 2rem;

  align-self: right;
  text-align: center;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  color: var(--color-gold);
  font-family: advocate_c43_mid;
  font-size: 2.5rem;

  @media (max-width: 1400px) {
    right: unset;
  }
`;

export default SectionTitle;
