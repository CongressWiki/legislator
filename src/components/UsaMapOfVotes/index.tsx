import React, { useEffect, useState } from 'react';
import { ReactComponent as UsaMapSVG } from '@static/images/USA_Map.svg';
import styled, { css } from 'styled-components';
import * as d3 from 'd3';
import type { RollCallVote } from '@type/hasura';
import StateVotesToolTip from '@components/StateVotesToolTip';

export type UsaMapOfVotesProps = {
  votes: RollCallVote[];
  className?: string;
};

const UsaMapOfVotes = ({ votes, className }: UsaMapOfVotesProps) => {
  const [hoveredState, setHoveredState] = useState('');
  useEffect(() => {
    const htmlMouseTip = d3.select('div.tooltip.mouse');
    const usaMap = d3.select('.usamap');
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

  const getVotesOfState = (state: string) => {
    const stateVotes = votes?.filter((vote) => vote.state === state);

    const hasVotesInState = stateVotes.length > 0;
    if (hasVotesInState) {
      return stateVotes;
    }
  };

  return (
    <Wrapper votes={votes} className={className}>
      <StateVotesToolTip
        className="mouse tooltip"
        state={hoveredState}
        votes={getVotesOfState(hoveredState)}
      />

      <UsaMap className="usamap" />
    </Wrapper>
  );
};

export default UsaMapOfVotes;

const Wrapper = styled.div<{ votes: RollCallVote[] }>`
  position: relative;
  width: 100%;
  overflow: visible;

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
  width: auto;
  height: 100%;
`;

function styleStatesWithVotes({ votes }: { votes: RollCallVote[] }) {
  let styles = ``;

  for (const vote of votes) {
    styles += `
      path[data-id=${vote.state}] {
        fill: #00bd00;
        opacity: 0.7;
      }
    `;
  }
  return css`
    ${styles}
  `;
}
