import React, { useEffect, useState } from 'react';
import UsaMapSVG from '@icons/misc/UsaMap';
import styled, { css } from 'styled-components';
import * as d3 from 'd3';
import type { RollCallVote } from '@type/hasura';
import StateVotesToolTip from '@components/atoms/StateVotesToolTip';
import { groupBy } from 'lodash';

export type Vote = RollCallVote & { color: string; decision: string };

export type UsaMapOfVotesProps = {
  /**
   * Unique id used to name and identify DOM elements associated with tooltip
   */
  id: string;
  votes: Vote[];
  filterByDecision?: string;
  className?: string;
};

const UsaMapOfVotes = ({
  votes,
  id,
  filterByDecision,
  className,
}: UsaMapOfVotesProps) => {
  const [hoveredState, setHoveredState] = useState('');

  useEffect(() => {
    const htmlMouseTip = d3.select(`.${id}-mousetooltip`);
    const usaMap = d3.select(`.${id}-map`);
    const states = usaMap.selectAll('path');

    states
      .on('mouseover', (event) => {
        setHoveredState(event.target.dataset.id);
      })
      .on('mousemove', (event) => {
        htmlMouseTip
          .style('top', event.offsetY + 10 + 'px')
          .style('left', event.offsetX + 10 + 'px');
      })
      .on('mouseout', () => {
        setHoveredState('');
      });
    return () => {
      states.interrupt();
      usaMap.interrupt();
      htmlMouseTip.interrupt();
    };
  }, [hoveredState]);

  if (filterByDecision) {
    votes = votes.filter((vote) => vote.decision === filterByDecision);
  }

  return (
    <Wrapper
      votes={votes}
      filterByDecision={filterByDecision}
      className={className}
    >
      <StateVotesToolTip
        className={`${id}-mousetooltip`}
        state={hoveredState}
        votes={getVotesOfState(votes, hoveredState)}
      />
      <UsaMap className={`${id}-map`} />
    </Wrapper>
  );
};

export default UsaMapOfVotes;

const getVotesOfState = (votes: Vote[], state: string) => {
  const stateVotes = votes?.filter((vote) => vote.state === state);

  const hasVotesInState = stateVotes.length > 0;
  if (hasVotesInState) {
    return stateVotes;
  }
};

const Wrapper = styled.div<{ votes: Vote[]; filterByDecision?: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: visible;
  display: flex;

  svg {
    path {
      opacity: 0.3;
    }

    path:hover {
      opacity: 1;
    }
  }

  ${styleStatesWithVotes}
`;

const UsaMap = styled(UsaMapSVG)`
  position: relative;
  margin: 0;
  padding: 0;
  overflow: visible;
  width: 100%;
  height: 100%;
`;

function styleStatesWithVotes({
  votes,
  filterByDecision,
}: {
  votes: Vote[];
  filterByDecision?: string;
}) {
  if (filterByDecision) {
    votes = votes.filter((vote) => vote.decision === filterByDecision);
  }

  const votesByState = groupBy(votes, 'state');
  const states = Object.keys(votesByState);

  let styles = '';
  for (const state of states) {
    const stateVotes = votesByState[state];

    const stateVoteColors = stateVotes.map((stateVote) => stateVote.color);

    styles += `
      path[data-id=${state}] {
        fill: ${findHighestOccurrenceAndNumber(stateVoteColors)};
        opacity: 0.9;
      }
    `;
  }

  return css`
    ${styles}
  `;
}

function findHighestOccurrenceAndNumber(strings: string[]) {
  const object: Record<string, any> = {};
  let maxNumber = '';
  let maxValue = '';
  for (const string of strings) {
    object[string] = ++object[string] || 1;
    if (maxValue === undefined || object[string] > maxValue) {
      maxNumber = string;
      maxValue = object[string];
    }
  }

  return maxNumber;
}
