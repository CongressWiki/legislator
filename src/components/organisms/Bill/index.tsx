import React from 'react';
import type { Bill as BillData } from '@type/hasura';
import styled from 'styled-components';
import BillSummary from '@components/molecules/BillSummary';
import StampText from '@components/atoms/StampText';

export type BillProps = Pick<
  BillData,
  'type' | 'number' | 'subject' | 'bill_text' | 'summary'
> & { className?: string };

const Bill = ({ summary, className }: BillProps) => {
  return (
    <Wrapper className={className}>
      <BillSummary summary={summary} />
    </Wrapper>
  );
};

export default Bill;

const Wrapper = styled.div`
  position: relative;
  padding-top: 2rem;
  padding-bottom: 6rem;
  margin: 0;
  margin-bottom: 30vh;
  overflow: hidden;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const BillStatusStamp = styled(StampText)`
  position: absolute;
  top: 3ch;
  left: 1ch;

  // Alternate stamp angle to give it a realistic behavior
  transform: ${() => (Math.random() < 0.5 ? 'rotate(3deg)' : 'rotate(-8deg)')};
`;

const BillHeader = styled.div`
  margin: 0;
  /* margin-top: 150px; */
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
`;

const BillId = styled.h2`
  margin: 0;
  font-weight: 600;
  white-space: nowrap;
  text-transform: uppercase;
`;
