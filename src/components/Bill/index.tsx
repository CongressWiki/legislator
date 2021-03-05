import React from 'react';
import type { Bill as BillData } from '@type/hasura';
import styled from 'styled-components';
import UsaMapOfSponsors from '@components/UsaMapOfSponsors';
import BillText from '@components/BillText';
import BillSummary from '@components/BillSummary';
import BillTitle from '@components/BillTitle';

export type BillProps = BillData & { congressImages: any[] };

export default function Bill({
  type,
  number,
  subject,
  title,
  bill_text,
  summary,
  sponsor,
  cosponsorships,
  congressImages,
}: BillProps) {
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
        <BillText billText={bill_text} />
      ) : (
        <BillSummary summary={summary} />
      )}
      <UsaMapOfSponsors
        sponsor={sponsor}
        cosponsorships={cosponsorships}
        congressImages={congressImages}
      />
    </BillWrapper>
  );
}

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
