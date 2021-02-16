import React from 'react';
import type { Bill as BillDataType } from '../../types/hasura';
import styled from 'styled-components';

export type BillCardProps = Pick<
  BillDataType,
  'id' | 'type' | 'number' | 'title' | 'subject' | 'sponsor' | 'updated_at'
> & {
  onClick: () => void;
};

const BillCard = ({
  onClick,
  type,
  number,
  title,
  subject,
  sponsor,
  updated_at,
}: BillCardProps) => {
  return (
    <BillPreview onClick={onClick}>
      <BillPreviewSection>
        <p>
          {type.toUpperCase()} {number}
        </p>
        <p>{subject}</p>
      </BillPreviewSection>
      <BillPreviewSection center>
        <p>{title}</p>
      </BillPreviewSection>
      <BillPreviewSection>
        <p>{new Date(updated_at).toDateString()}</p>
      </BillPreviewSection>
    </BillPreview>
  );
};

export default BillCard;

interface BillPreviewSectionProps {
  readonly center?: boolean;
}

export const BillPreviewSection = styled.div<BillPreviewSectionProps>`
  display: flex;
  width: 100%;
  justify-content: ${(props) => (props.center ? 'center' : 'space-between')};
  align-items: center;
  p {
    margin: 0;
    font-size: 1.2em;
  }
`;

const BillPreview = styled.div`
  padding: 15px;
  height: 30vh;
  width: 100%;
  overflow: hidden;
  border: 1px solid var(--color-secondary);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  :hover {
    cursor: pointer;
  }
`;
