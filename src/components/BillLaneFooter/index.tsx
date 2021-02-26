import React from 'react';
import styled from 'styled-components';

export type BillLaneFooterProps = {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

const BillLaneFooter = ({
  onClick,
  disabled,
  className,
}: BillLaneFooterProps) => {
  return (
    <Wrapper className={className}>
      <LoadMoreButton disabled={disabled} onClick={onClick}>
        load more bills
      </LoadMoreButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;

  margin-top: 10vh;
  margin-bottom: 25vh;
  padding-left: 15px;
  padding-right: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadMoreButton = styled.button<BillLaneFooterProps>`
  padding: 0.4rem;
  display: ${(props) => (props.disabled ? 'none' : 'inline-block')};
  border: solid thin var(--color-gray500);
  border-radius: 10px;
  outline: none;
  background-color: var(--color-background);
  color: var(--color-text);

  font-family: concourse_c2;
  font-size: 1.4rem;

  :hover {
    cursor: pointer;
    background-color: var(--color-backgroundLite);
    border-color: var(--color-secondary);
    color: var(--color-secondary);
  }
`;

export default BillLaneFooter;
