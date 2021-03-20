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
  const isDisabled = Boolean(focusedDecision && !isFocused);

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
  position: relative;
  height: auto;
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 8px;
  border: solid 2px ${(props) => props.color};
  border-radius: 25px;
  transition: all 0.3s ease-in-out;

  opacity: ${(props) => (props.isDisabled ? '0.5' : 1)};

  @media (max-width: 400px) {
    width: 45%;
    flex-wrap: nowrap;
    border-width: 1px;
    padding: 4px;
    min-height: 25px;
  }
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

  @media (max-width: 400px) {
    font-size: 0.7em;
  }
`;

const Count = styled.span`
  display: inline;
  margin: 0;
  margin-left: 1ch;
  padding: 0;

  font-weight: 700;

  @media (max-width: 400px) {
    font-size: 0.7em;
  }
`;
