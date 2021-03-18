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

  // Sort votes by the decision made
  votes = votes.sort(({ decision: a }, { decision: b }) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });

  return (
    <Wrapper className={className} hide={!hasVotes}>
      <ToolTip state={state} votes={votes} />
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
  background: hsl(215, 51%, 20%);
  border: solid thin var(--color-text);
  border-radius: 5px;
  text-shadow: 1px 1px 0px var(--color-gray300);
`;

export const ToolTip = ({
  state,
  votes,
}: {
  state?: string;
  votes: RollCallVote[];
}) => {
  return (
    <VoteWrapper>
      <ToolTipHeader>{state} Votes</ToolTipHeader>
      <ToolTipUnorderedList columns={Math.floor(votes.length / 12)}>
        {votes.map((vote, index) => (
          <ToolTipListItem key={index}>
            {vote.decision} - {vote.elected_official.preferred_name}
          </ToolTipListItem>
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
  column-gap: 1em;
  row-gap: 3.5em;

  list-style: none;
`;

const ToolTipListItem = styled.li<{ icon?: string }>`
  position: relative;
  margin: 0;
  padding: 0;
  padding-left: 1em;
  font-size: 0.8rem;
  white-space: nowrap;
`;
