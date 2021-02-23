import React from 'react';
import styled from 'styled-components';
import BrightTitle from '@components/BrightTitle';

const BillLaneHeader = () => {
  return (
    <Wrapper>
      <FeedTitle>{'House'}</FeedTitle>
    </Wrapper>
  );
};

const FeedTitle = styled.h3`
  margin: 0;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: -2px;
  display: inline-block;
  font-family: advocate_c45_mid;

  color: var(--color-secondary);
`;

const BillSearch = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--color-background);

  position: sticky;
  top: 0;

  padding-left: 15px;
  padding-right: 15px;

  /* border-top: solid thin var(--color-gray300); */
  border-bottom: solid thin var(--color-gray300);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default BillLaneHeader;
