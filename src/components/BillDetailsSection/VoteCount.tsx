import React from 'react';
import styled from 'styled-components';

export type VoteCountProps = {
  decision: string;
  count: number;
  color: string;
  className?: string;
};

const VoteCount = ({ decision, count, color, className }: VoteCountProps) => {
  return (
    <Wrapper className={className} color={color}>
      <Decision>{decision}</Decision>
      <Count>{count}</Count>
    </Wrapper>
  );
};

export default VoteCount;

const Wrapper = styled.div<{ color: string }>`
  width: 100%;
  height: fit-content;
  word-wrap: nowrap;

  display: flex;
  justify-content: space-between;
  padding: 8px;

  border: solid thin ${(props) => props.color};
  border-radius: 25px;
  transition: all 0.3s ease-in-out;

  color: var(--color-text);

  :hover {
    transition: all 0.3s ease-in-out;

    color: hsl(45, 81%, 53%);
    border-color: hsl(45, 81%, 53%);
  }
`;

const Decision = styled.h4`
  font-size: 1rem;
  display: inline;
  margin: 0;
  padding: 0;
  font-weight: 700;

  :after {
    content: ': ';
  }
`;

const Count = styled.p`
  display: inline;
  margin: 0;
  padding: 0;
  font-weight: 700;
`;
