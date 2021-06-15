import React from 'react';
import styled from 'styled-components';

export type BillTitleProps = {
  title: string;
  className?: string;
};

const BillTitle = ({ title, className }: BillTitleProps) => {
  return (
    <Wrapper title={title} className={className}>
      {title}
    </Wrapper>
  );
};

const Wrapper = styled.h1<BillTitleProps>`
  padding: 0;
  margin: 0;

  font-size: ${(properties) =>
    properties.title.length < 200 ? '2em' : '1.7em'};
  font-weight: 700;

  @media (max-width: 450px) {
    font-size: ${(properties) =>
      properties.title.length < 100 ? '1.3rem' : '1rem'};
  }
`;

export default BillTitle;
