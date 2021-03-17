import React from 'react';
import styled from 'styled-components';
import type { RollCallVote } from '@type/hasura';

export type StateVotesToolTipProps = {
  state?: string;
  votes?: RollCallVote[];
  className?: string;
};

const StateVotesToolTip = ({
  state,
  votes = [],
  className,
}: StateVotesToolTipProps) => {
  const hasVotes = votes.length > 0;
  return (
    <Wrapper className={className} hide={!hasVotes}>
      {hasVotes ? <ToolTip votes={votes} /> : null}
    </Wrapper>
  );
};

export default StateVotesToolTip;

const Wrapper = styled.div<{ hide?: boolean }>`
  position: absolute;
  text-align: left;
  padding: 0.5rem;
  z-index: 2000;
  /* let mouse events pass through */
  pointer-events: none;

  opacity: ${(props) => (props.hide ? 0 : 1)};
  /* transition: opacity 0.3s; */

  border: solid thin var(--color-backgroundAlt);
  border-radius: 5px;
  background-color: var(--color-backgroundAlt);
  text-shadow: 1px 1px 0px var(--color-gray300);
`;

export const ToolTip = ({ votes }: { votes: RollCallVote[] }) => {
  return (
    <VoteWrapper>
      <ToolTipHeader>Votes</ToolTipHeader>
      <ToolTipUnorderedList columns={Math.floor(votes.length / 10)}>
        {votes.map((vote, index) => (
          <ToolTipListItem key={index}>{vote.decision}</ToolTipListItem>
        ))}
      </ToolTipUnorderedList>
    </VoteWrapper>
  );
};

const VoteWrapper = styled.div`
  position: relative;
  max-height: 400px;
`;

const ToolTipHeader = styled.p`
  position: relative;
  margin: 0;
  padding: 0;
  padding-bottom: 0.5em;
  font-weight: 600;
`;

const ToolTipUnorderedList = styled.ul<{ columns?: number }>`
  position: relative;
  margin: 0;
  padding: 0;
  height: 100%;

  column-count: ${(props) => props.columns || 1};
  column-gap: 1.5em;

  list-style: none;
`;

const ToolTipListItem = styled.li<{ icon?: string }>`
  position: relative;
  margin: 0;
  padding: 0;
  padding-left: 1.5em;
  font-size: 0.8rem;
  white-space: nowrap;

  :before {
    content: '✓';
    position: absolute;
    left: 0;
  }
`;
