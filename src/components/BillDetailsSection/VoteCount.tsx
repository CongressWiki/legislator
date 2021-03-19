import React from 'react';
import styled from 'styled-components';

export type VoteCountProps = {
  decision: string;
  count: number;
  color: string;
  focusedDecision?: string;
  onClick?: () => void;
  className?: string;
};

const VoteCount = ({
  decision,
  count,
  color,
  focusedDecision,
  onClick,
  className,
}: VoteCountProps) => {
  const isFocused = focusedDecision === decision;
  const isDisabled = focusedDecision && !isFocused;

  return (
    <Wrapper
      className={className}
      onClick={onClick}
      color={color}
      isDisabled={isDisabled}
    >
      <Decision>{decision}</Decision>
      <Count>{count}</Count>
    </Wrapper>
  );
};

export default VoteCount;

const Wrapper = styled.div<{ color: string; isDisabled: boolean }>`
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 8px;
  border: solid thin ${(props) => props.color};
  border-radius: 25px;
  transition: all 0.3s ease-in-out;

  opacity: ${(props) => (props.isDisabled ? '0.5' : 1)};

  color: var(--color-text);
`;

const Decision = styled.h4`
  font-size: 1rem;
  display: inline;
  margin: 0;
  padding: 0;
  font-weight: 700;
  white-space: nowrap;

  :after {
    content: ':';
  }
`;

const Count = styled.span`
  display: inline;
  margin: 0;
  padding: 0;
  margin-left: 1rem;

  font-weight: 700;
`;
