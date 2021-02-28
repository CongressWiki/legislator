import React from 'react';
import styled from 'styled-components';

export type BillTitleProps = {
  title: string;
};

const BillTitle = ({ title }: BillTitleProps) => {
  return <Wrapper title={title}>{title}</Wrapper>;
};

const Wrapper = styled.h1<BillTitleProps>`
  font-size: ${(props) => (props.title.length < 100 ? '3rem' : '1.8rem')};
  /* line-height: 2rem; */
  /* letter-spacing: -0.011rem; */
  font-weight: 700;
  padding-top: 26px;
  margin: 0;

  @media (max-width: 450px) {
    font-size: ${(props) => (props.title.length < 100 ? '2rem' : '1.3rem')};
  }
`;

export default BillTitle;
