import React from 'react';
import type { Bill as BillData } from '@type/hasura';
import styled from 'styled-components';
// Import BillText from '@components/BillText';
import BillSummary from '@components/molecules/BillSummary';
import BillTitle from '@components/atoms/BillTitle';
import StampText from '@components/atoms/StampText';

export type BillProps = Pick<
  BillData,
  'type' | 'number' | 'status' | 'subject' | 'title' | 'bill_text' | 'summary'
> & { className?: string };

const Bill = ({
  type,
  number,
  status,
  // Subject,
  title,
  // Bill_text,
  summary,
  className,
}: BillProps) => {
  return (
    <Wrapper className={className}>
      <BillStatusStamp>{status}</BillStatusStamp>
      <BillHeader>
        <BillId>
          {type}-{number}
        </BillId>
      </BillHeader>
      <BillTitle title={title} />
      <BillSummary summary={summary} />
    </Wrapper>
  );
};

export default Bill;

const Wrapper = styled.div`
  position: relative;
  width: min(70ch, calc(100% - 32px));
  padding: 2rem;
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
  margin-top: 0.25rem;

  // Alternate stamp angle to give it a realistic behavior
  transform: ${() => (Math.random() < 0.5 ? 'rotate(3deg)' : 'rotate(-8deg)')};

  @media (max-width: 450px) {
    margin-top: unset;
    max-width: 200px;
  }
`;

const BillHeader = styled.div`
  margin: 0;
  margin-top: 150px;
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
