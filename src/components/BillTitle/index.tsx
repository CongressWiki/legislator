import React from 'react';
import styled from 'styled-components';

export type BillTitleProps = {
  title: string;
};

const BillTitle = ({ title }: BillTitleProps) => {
  return <Wrapper title={title}>{title}</Wrapper>;
};

const Wrapper = styled.h1<BillTitleProps>`
  padding: 0;
  margin: 0;

  font-size: ${(properties) =>
    properties.title.length < 100 ? '2rem' : '1.5rem'};
  /* line-height: 2rem; */
  /* letter-spacing: -0.011rem; */
  font-weight: 700;

  @media (max-width: 450px) {
    font-size: ${(properties) =>
      properties.title.length < 100 ? '1.3rem' : '1rem'};
  }
`;

export default BillTitle;
