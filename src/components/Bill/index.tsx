import React from 'react';
import type { Bill as BillData } from '@type/hasura';
import styled from 'styled-components';
// import BillText from '@components/BillText';
import BillSummary from '@components/BillSummary';
import BillTitle from '@components/BillTitle';
import StampText from '@components/StampText';

export type BillProps = BillData & { className?: string };

export default function Bill({
  type,
  number,
  status,
  subject,
  title,
  bill_text,
  summary,
  className,
}: BillProps) {
  return (
    <Wrapper className={className}>
      <BillStatusStamp>{status}</BillStatusStamp>
      <BillHeader>
        <BillId>
          {type}-{number}
        </BillId>
      </BillHeader>
      <BillTitle title={title} />
      {summary === 'No summary available.' && bill_text ? null : ( // <BillText billText={bill_text} />
        <BillSummary summary={summary} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: min(70ch, calc(100% - 32px));
  padding: 2rem;
  padding-bottom: 6rem;
  margin: 0;
  margin-bottom: 30vh;

  /* https://www.css-gradient.com/?c1=2f2c28&c2=6c6051&gt=r&gd=dbb */
  background: hsl(35, 1%, 20%);
  background: -webkit-radial-gradient(
    bottom,
    hsl(40, 70%, 10%),
    hsl(40, 1%, 20%)
  );
  background: -moz-radial-gradient(bottom, hsl(40, 70%, 10%), hsl(40, 1%, 20%));
  background: radial-gradient(to top, hsl(40, 70%, 10%), hsl(40, 1%, 20%));

  border: 1px groove hsl(40, 1%, 15%);
  border-radius: 1px;

  -webkit-box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.75);

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const BillStatusStamp = styled(StampText)`
  margin-top: 1rem;
  transform: rotate(-10deg);
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
