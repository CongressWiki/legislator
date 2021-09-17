import React from 'react';
import styled from 'styled-components';
import truncate from '@utils/truncate';

export type BillTableProps = {
  className?: string;
  bills: Array<{
    id: string;
    type: string;
    number: number;
    congress: number;
    introduced_at: string;
    short_title: string;
    title: string;
  }>;
};

const BillTable = ({ className, bills }: BillTableProps) => {
  return (
    <Wrapper className={className}>
      {bills?.map((bill) => (
        <Row key={bill.id} bill={bill} />
      ))}
    </Wrapper>
  );
};

export default BillTable;

const Wrapper = styled.div`
  position: relative;
  width: min(140ch, calc(100% - 64px));

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = ({
  className,
  bill,
}: {
  className?: string;
  bill: {
    id: string;
    type: string;
    number: number;
    congress: number;
    introduced_at: string;
    short_title: string;
    title: string;
  };
}) => {
  const name = `${bill.type.toUpperCase()} ${bill.number}`;

  return (
    <RowWrapper className={className}>
      <Cell width="100px" value={name} />
      <Cell width="800px" value={bill.title} />
    </RowWrapper>
  );
};

const RowWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 120px;

  overflow: hidden;

  border-bottom: 1px solid var(--color-gray500);

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Cell = ({
  className,
  width,
  value,
}: {
  className?: string;
  width: string;
  value: string;
}) => {
  return (
    <CellWrapper className={className} width={width}>
      <p>{truncate(value, 300)}</p>
    </CellWrapper>
  );
};

const CellWrapper = styled.div<{ width: string }>`
  position: relative;
  width: ${({ width }) => width};
  height: 100px;
  max-width: min(70ch);

  overflow: hidden;

  display: flex;
  align-items: center;
`;
