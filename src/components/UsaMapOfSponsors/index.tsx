import React, { useEffect } from 'react';
import { ReactComponent as UsaMapSVG } from '@static/images/UsaMap.svg';
import styled, { css } from 'styled-components';
import * as d3 from 'd3';
import type {
  Cosponsorship as ICosponsorship,
  Official as IOfficial,
} from '../../types/hasura';

export type UsaMapOfSponsorsProps = {
  sponsor: IOfficial;
  cosponsorships: ICosponsorship[];
};

const UsaMapOfSponsors = ({
  sponsor,
  cosponsorships,
}: UsaMapOfSponsorsProps) => {
  useEffect(() => {
    var tooltip = d3.selectAll('.tooltip:not(.css)');
    var HTMLmouseTip = d3.select('div.tooltip.mouse');

    d3.select('.usamap')
      .selectAll('path')
      .on('mouseover', function (event) {
        const state = event.target.dataset.id;
        const stateCosponsorships = cosponsorships.filter(
          (cosponsorship) => cosponsorship.state === state
        );
        const isSponsorState = state === sponsor.state;
        const hasCosponsorsInState = stateCosponsorships.length > 0;
        if (!isSponsorState && !hasCosponsorsInState) {
          return;
        }

        let text = ``;
        if (isSponsorState) {
          if (isSponsorState) text += `Sponsor: ${sponsor.preferred_name}`;
        }
        if (hasCosponsorsInState) {
          const cosponsors = stateCosponsorships.map(
            (cosponsor) => cosponsor.elected_official.preferred_name
          );
          text += `\nCosponsors: ${cosponsors.join(', ')}`;
        }
        tooltip.style('opacity', '1');
        tooltip.text(text);
      })
      .on('mousemove', function (event) {
        HTMLmouseTip.style('left', Math.max(0, event.pageX - 50) + 'px').style(
          'top',
          event.pageY + 20 + 'px'
        );
      })
      .on('mouseout', function () {
        return tooltip.style('opacity', '0');
      });
  });
  return (
    <>
      <ToolTip className="mouse tooltip">Mouse-tracking HTML Tip</ToolTip>
      <UsaMap
        className="usamap"
        sponsor={sponsor}
        cosponsorships={cosponsorships}
      />
    </>
  );
};

const ToolTip = styled.div`
  pointer-events: none; /*let mouse events pass through*/
  opacity: 0;
  transition: opacity 0.3s;
  text-shadow: 1px 1px 0px var(--color-gray300);
  position: absolute;
  background-color: var(--color-backgroundLite);
  border: solid thin var(--color-text);
  border-radius: 5px;
  text-align: left;
  padding: 0.5rem;
`;

const UsaMap = styled(UsaMapSVG)<UsaMapOfSponsorsProps>`
  padding-top: 42px;
  margin: 0;
  overflow: visible;

  ${createCosponsorStatesCss}

  path {
    opacity: 0.3;
  }
  path[data-id=${(props) => props.sponsor.state}] {
    fill: #e8d803;
    opacity: 0.9;
  }

  path:hover {
    opacity: 1;
  }
`;

function createCosponsorStatesCss({ cosponsorships }: UsaMapOfSponsorsProps) {
  let styles = ``;

  for (const cosponsorship of cosponsorships) {
    styles += `
      path[data-id=${cosponsorship.state}] {
        fill: #00bd00;
        opacity: 0.7;
      }
    `;
  }
  return css`
    ${styles}
  `;
}

export default UsaMapOfSponsors;
