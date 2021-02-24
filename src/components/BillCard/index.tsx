import React from 'react';
import type { Bill as BillDataType } from '../../types/hasura';
import styled from 'styled-components';

export type BillCardProps = Pick<
  BillDataType,
  'id' | 'type' | 'number' | 'title' | 'subject' | 'sponsor' | 'updated_at'
> & {
  onClick?: () => void;
  className?: string;
};

const BillCard = ({
  onClick,
  type,
  number,
  title,
  subject,
  sponsor,
  updated_at,
  className,
}: BillCardProps) => {
  return (
    <Wrapper onClick={onClick} className={className}>
      <p className="bill-number">{`${type.toUpperCase()} ${number}`}</p>

      <p className="bill-title">{title}</p>

      <p className="bill-timestamp">{new Date(updated_at).toDateString()}</p>
    </Wrapper>
  );
};

export default BillCard;

const Wrapper = styled.div`
  max-width: none;
  width: 100%;
  margin: 0;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    '...... ...... id     ......    ......'
    'center center center center    center'
    '...... ...... ...... timestamp timestamp';

  overflow: hidden;

  border: 0;
  border-radius: 0;
  border-bottom: solid thin var(--color-gray300);

  text-align: center;
  align-items: center;

  p {
    font-family: century_supra_c4;
    line-height: 1.6em;
    max-width: 70ch;
    margin: 0;
  }

  :hover {
    cursor: pointer;
    background-color: var(--color-backgroundLite);
  }

  .bill-number {
    grid-area: id;
  }
  .bill-title {
    grid-area: center;
    max-width: min(70ch, calc(100% - 64px));
    justify-self: center;
    align-self: flex-start;
    text-align: left;
  }
  .bill-timestamp {
    grid-area: timestamp;
    text-align: right;
    align-self: flex-end;
    font-size: 0.8em;
    color: hsl(0deg, 0%, 70%);
    font-weight: 400;
  }
`;
