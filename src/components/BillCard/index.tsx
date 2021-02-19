import React from 'react';
import type { Bill as BillDataType } from '../../types/hasura';
import styled from 'styled-components';

export type BillCardProps = Pick<
  BillDataType,
  'id' | 'type' | 'number' | 'title' | 'subject' | 'sponsor' | 'updated_at'
> & {
  onClick: () => void;
  className: string;
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
      <p className="item-number">
        {type.toUpperCase()} {number}
      </p>

      {/* <p className="item-subject">{subject}</p> */}

      <p className="item-title">{title}</p>

      <p className="item-timestamp">{new Date(updated_at).toDateString()}</p>
    </Wrapper>
  );
};

export default BillCard;

const Wrapper = styled.div`
  max-width: min(70ch, calc(100% - 64px));
  margin: auto;

  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    '...... id .'
    'center center center'
    '...... timestamp timestamp';

  padding: 22px;
  overflow: hidden;

  border: thin solid var(--color-primary);
  border-radius: 5px;

  text-align: center;
  align-items: center;
  /* justify-content: center; */

  font-size: 1em;

  .item-number {
    grid-area: id;
    font-weight: 600;
  }
  .item-subject {
    grid-area: subject;
    text-align: right;
  }
  .item-title {
    grid-area: center;
    max-width: min(70ch, calc(100% - 64px));
    justify-self: center;
    align-self: flex-start;
    text-align: left;
    font-size: 22px;
  }
  .item-timestamp {
    grid-area: timestamp;
    text-align: right;
    align-self: flex-end;
    font-size: 0.8em;
  }

  p {
    margin: 0;
    font-family: concourse_t2;
  }

  :hover {
    cursor: pointer;
  }
`;
