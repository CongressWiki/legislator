import React, { useEffect, useState } from 'react';
import { ReactComponent as UsaMapSVG } from '@static/images/UsaMap.svg';
import styled, { css } from 'styled-components';
import * as d3 from 'd3';
import type {
  Cosponsorship as ICosponsorship,
  Official as IOfficial,
} from '@type/hasura';
import StateSponsorsToolTip from '@components/StateSponsorsToolTip';

export type UsaMapOfSponsorsProps = {
  sponsor: IOfficial;
  cosponsorships: ICosponsorship[];
};

const UsaMapOfSponsors = ({
  sponsor,
  cosponsorships,
}: UsaMapOfSponsorsProps) => {
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
          .style('left', Math.max(0, event.pageX - 50) + 'px')
          .style('top', event.pageY + 20 + 'px');
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

  const getSponsorOfState = (state: string) => {
    const isSponsorState = state === sponsor.state;
    if (isSponsorState) return sponsor;
  };

  const getCosponsorsOfState = (state: string) => {
    const stateCosponsorships = cosponsorships.filter(
      (cosponsorship) => cosponsorship.state === state
    );

    const hasCosponsorsInState = stateCosponsorships.length > 0;
    if (hasCosponsorsInState) {
      return stateCosponsorships;
    }
  };

  return (
    <Wrapper
      sponsorState={sponsor.state}
      cosponsorStates={cosponsorships.map(
        (cosponsorship) => cosponsorship.state
      )}
    >
      <StyledToolTip
        className="mouse tooltip"
        state={hoveredState}
        sponsor={getSponsorOfState(hoveredState)}
        cosponsors={getCosponsorsOfState(hoveredState)}
      />

      <UsaMap className="usamap" />
    </Wrapper>
  );
};

export default UsaMapOfSponsors;

const Wrapper = styled.div<{ sponsorState: string; cosponsorStates: string[] }>`
  ${styleCosponsorStates}

  svg {
    path {
      opacity: 0.3;
    }

    path[data-id=${(props) => props.sponsorState}] {
      fill: #e8d803;
      opacity: 0.9;
    }

    path:hover {
      opacity: 1;
    }
  }
`;

const StyledToolTip = styled(StateSponsorsToolTip)`
  pointer-events: none; /*let mouse events pass through*/
`;

const UsaMap = styled(UsaMapSVG)`
  padding-top: 42px;
  margin: 0;
  overflow: visible;
`;

function styleCosponsorStates({
  cosponsorStates,
}: {
  cosponsorStates: string[];
}) {
  let styles = ``;

  for (const cosponsorState of cosponsorStates) {
    styles += `
      path[data-id=${cosponsorState}] {
        fill: #00bd00;
        opacity: 0.7;
      }
    `;
  }
  return css`
    ${styles}
  `;
}
