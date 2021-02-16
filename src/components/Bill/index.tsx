import React from 'react';
import type { Bill as BillData } from '../../types/hasura';
import styled from 'styled-components';
import USStates from '@components/UsStates';
import BillText from '@components/BillText';
import BillSummary from '@components/BillSummary';
import BillTitle from '@components/BillTitle';

export type BillProps = BillData;

export default function Bill({
  type,
  number,
  subject,
  title,
  bill_text,
  summary,
}: BillData) {
  return (
    <BillWrapper>
      <BillHeader>
        <BillId>
          {type.toUpperCase()}-{number}
        </BillId>
        <BillSubject>{subject}</BillSubject>
      </BillHeader>
      <BillTitle title={title} />
      {summary === 'No summary available.' && bill_text ? (
        <BillText billText={bill_text} billTitle={title} />
      ) : (
        <BillSummary summary={summary} />
      )}
      <USStates />
    </BillWrapper>
  );
}

const BillWrapper = styled.div``;

const BillHeader = styled.div`
  padding-top: 19px;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

const BillId = styled.h2`
  padding-top: 19px;
  margin: 0;
  font-weight: normal;
`;

const BillSubject = styled.h2`
  padding-top: 19px;
  margin: 0;
  font-weight: normal;
`;
