import React from 'react';
import styled from 'styled-components';
import { RollCall } from '@type/hasura';
import UsaMapOfVotes from '@components/UsaMapOfVotes';
import VoteCount from '@components/BillDetailsSection/VoteCount';
import { groupBy } from 'lodash';

export type RollCallSlideProps = {
  rollCall: RollCall;
  toolTipOffsetX: number;
  toolTipOffsetY: number;
  className?: string;
};

const RollCallSlide = ({
  rollCall: { result, question, votes },
  toolTipOffsetX,
  toolTipOffsetY,
  className,
}: RollCallSlideProps) => {
  const decisionVoteCounts = groupBy(votes, 'decision');
  const statusColor = getRollCallStatusColor(result);

  return (
    <Wrapper color={statusColor} className={className}>
      <Question>{question}</Question>
      {votes ? (
        <VoteDetails>
          <UsaMapOfVotes
            className="map"
            votes={votes}
            toolTipOffsetX={toolTipOffsetX}
            toolTipOffsetY={toolTipOffsetY}
          />
          <Column>
            {Object.keys(decisionVoteCounts)
              .map((decision) => ({
                decision: decision,
                votes: [...decisionVoteCounts[decision]],
              }))
              .sort(
                ({ votes: aVotes }, { votes: bVotes }) =>
                  bVotes.length - aVotes.length
              )
              .map(({ decision, votes }) => (
                <VoteCount
                  key={decision}
                  className="count"
                  decision={decision}
                  count={votes.length}
                  color={statusColor}
                />
              ))}
          </Column>
        </VoteDetails>
      ) : (
        <p>No votes</p>
      )}
    </Wrapper>
  );
};
export default RollCallSlide;

const getRollCallStatusColor = (result: string) => {
  return result === 'Passed'
    ? 'lime'
    : result === 'Failed'
    ? 'red'
    : 'lightBlue';
};

const Wrapper = styled.div<{ color: string }>`
  position: relative;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  margin: 1rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  border: solid 1px lime;
  border-color: ${(props) => props.color};
  border-radius: 10px;
  box-shadow: 0 0 10px 1px ${(props) => props.color};

  transition: all 0.3s ease-in-out;

  :hover {
    transition: all 0.3s ease-in-out;

    border-color: hsl(45, 81%, 53%);
    box-shadow: 0 0 10px 1px hsl(45, 81%, 53%);

    h3 {
      color: hsl(45, 81%, 53%);
    }
  }
`;

const VoteDetails = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: 'map map map count';

  .map {
    grid-area: map;
  }

  .count {
    grid-area: count;
  }
`;

const Question = styled.h3`
  margin: 0;
  text-align: center;
  width: 100%;
  padding: 1rem;
  height: fit-content;
  font-weight: 700;
  transition: color 0.3s ease-in-out;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;
