import React from 'react';
import type { Bill as BillData } from '@type/hasura';
import styled from 'styled-components';
import UsaMapOfSponsors from '@components/molecules/UsaMapOfSponsors';
import BillSummary from '@components/molecules/BillSummary';
import BillTitle from '@components/atoms/BillTitle';

export type BillProps = BillData;

const Bill = ({
  type,
  number,
  subject,
  title,
  summary,
  sponsor,
  cosponsorships,
}: BillProps) => {
  return (
    <BillWrapper>
      <BillHeader>
        <BillId>
          {type.toUpperCase()}-{number}
        </BillId>
        <BillSubject>{subject}</BillSubject>
      </BillHeader>
      <BillTitle title={title} />
      <BillSummary summary={summary} />
      <UsaMapOfSponsors sponsor={sponsor} cosponsorships={cosponsorships} />
    </BillWrapper>
  );
};

export default Bill;

const BillWrapper = styled.div`
  margin-top: 1.4rem;
  margin-bottom: 30vh;
`;

const BillHeader = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

const BillId = styled.h2`
  margin: 0;
  font-weight: 600;
  white-space: nowrap;
`;

const BillSubject = styled.h3`
  margin: 0;
  font-weight: 400;
  text-align: right;
`;
