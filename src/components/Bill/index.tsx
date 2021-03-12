import React from 'react';
import type { Bill as BillData } from '@type/hasura';
import styled from 'styled-components';
import BillText from '@components/BillText';
import BillSummary from '@components/BillSummary';
import BillTitle from '@components/BillTitle';

export type BillProps = BillData & { className?: string };

export default function Bill({
  type,
  number,
  subject,
  title,
  bill_text,
  summary,
  className,
}: BillProps) {
  return (
    <Wrapper className={className}>
      <BillHeader>
        <BillId>
          {type.toUpperCase()}-{number}
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
  margin-bottom: 30vh;
  background-color: hsl(215, 51%, 17%);
  border: thin solid hsl(215, 51%, 17%);
  border-radius: 1px;
  padding: 2rem;
  padding-bottom: 6rem;
  /* box-shadow: 5px 3px 10px var(--color-gray300); */
  margin: 0;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const BillHeader = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
`;

const BillId = styled.h2`
  margin: 0;
  font-weight: 600;
  white-space: nowrap;
`;
