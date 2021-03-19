import React, { useEffect, useState } from 'react';
import { ReactComponent as UsaMapSVG } from '@static/images/USA_Map.svg';
import styled, { css } from 'styled-components';
import * as d3 from 'd3';
import type { RollCallVote } from '@type/hasura';
import StateVotesToolTip from '@components/StateVotesToolTip';
import { groupBy } from 'lodash';

export type Vote = RollCallVote & { color: string; decision: string };

export type UsaMapOfVotesProps = {
  /**
   * Unique id used to name and identify DOM elements associated with tooltip
   */
  id: string;
  votes: Vote[];
  className?: string;
};

const UsaMapOfVotes = ({ votes, id, className }: UsaMapOfVotesProps) => {
  const [hoveredState, setHoveredState] = useState('');

  useEffect(() => {
    const htmlMouseTip = d3.select(`.${id}-mousetooltip`);
    const usaMap = d3.select(`.${id}-map`);
    const states = usaMap.selectAll('path');

    states
      .on('mouseover', function (event) {
        setHoveredState(event.target.dataset.id);
      })
      .on('mousemove', function (event) {
        htmlMouseTip
          .style('top', event.offsetY + 10 + 'px')
          .style('left', event.offsetX + 10 + 'px');
      })
      .on('mouseout', function () {
        setHoveredState('');
      });
    return () => {
      states.interrupt();
      usaMap.interrupt();
      htmlMouseTip.interrupt();
    };
  }, [hoveredState]);

  return (
    <Wrapper votes={votes} className={className}>
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

const Wrapper = styled.div<{ votes: Vote[] }>`
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

function styleStatesWithVotes({ votes }: { votes: Vote[] }) {
  let styles = ``;

  const votesByState = groupBy(votes, 'state');
  const states = Object.keys(votesByState);

  for (const state of states) {
    const stateVotes = votesByState[state];
    const stateVoteColors = stateVotes.map((stateVote) => stateVote.color);

    styles += `
      path[data-id=${state}] {
        fill: ${findHighestOccurrenceAndNum(stateVoteColors)};
        opacity: 0.7;
      }
    `;
  }

  return css`
    ${styles}
  `;
}

function findHighestOccurrenceAndNum(strings: string[]) {
  let obj: Record<string, any> = {};
  let maxNum: string = '';
  let maxVal: string = '';
  for (let str of strings) {
    obj[str] = ++obj[str] || 1;
    if (maxVal === undefined || obj[str] > maxVal) {
      maxNum = str;
      maxVal = obj[str];
    }
  }

  return maxNum;
}
