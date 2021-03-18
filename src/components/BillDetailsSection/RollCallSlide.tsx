import React from 'react';
import styled from 'styled-components';
import { RollCall, RollCallVote } from '@type/hasura';
import UsaMapOfVotes from '@components/UsaMapOfVotes';
import VoteCount from '@components/BillDetailsSection/VoteCount';
import { groupBy } from 'lodash';
import type { Vote as MapVote } from '@components/UsaMapOfVotes';

export type RollCallSlideProps = {
  rollCall: RollCall;
  className?: string;
};

const RollCallSlide = ({
  rollCall: { result, question, votes, requires },
  className,
}: RollCallSlideProps) => {
  const rollCallStatusColor = 'lime';

  // Group votes by decision
  const votesGroupedByDecision = groupBy(votes, 'decision');

  const decisions = Object.keys(votesGroupedByDecision);

  //  Shape and sort by vote count
  const votesByDecision = shapeVotesByDecision(
    votesGroupedByDecision,
    decisions
  );
  const votesByState = shapeVotesByState(votesByDecision);

  return (
    <Wrapper color={rollCallStatusColor} className={className}>
      <QuestionText>{question}</QuestionText>
      <ResultText>{result}</ResultText>
      {votes ? (
        <VoteDetails>
          <UsaMapOfVotes className="map" votes={votesByState} />
          <Column>
            {votesByDecision.map(({ decision, color, votes }) => (
              <VoteCount
                key={decision}
                className="count"
                decision={decision}
                count={votes.length}
                color={color}
              />
            ))}
            <RequiresText>{requires} majority to win</RequiresText>
          </Column>
        </VoteDetails>
      ) : (
        <p>No votes</p>
      )}
    </Wrapper>
  );
};
export default RollCallSlide;

const Wrapper = styled.div<{ color: string }>`
  position: relative;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  margin: 1rem;
  padding: 1rem;
  padding-top: 0.5rem;

  display: flex;
  flex-direction: column;

  border: solid 1px ${(props) => props.color};
  border-radius: 10px;
  box-shadow: 0 0 10px 1px ${(props) => props.color};

  transition: all 0.3s ease-in-out;
`;

const VoteDetails = styled.div`
  position: relative;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-left: 1rem;
`;

const QuestionText = styled.h3`
  display: block;
  margin: 0;
  text-align: center;
  width: 100%;
  height: fit-content;
  font-weight: 700;
  transition: color 0.3s ease-in-out;
`;

const ResultText = styled.h4`
  padding: 0;
  margin: 0;
  height: auto;
  text-align: center;
  font-weight: 600;
`;

const RequiresText = styled.p`
  padding: 0;
  margin: 0;
  text-align: center;
  font-weight: 400;
`;

export type VotesByDecision = {
  decision: string;
  color: string;
  votes: RollCallVote[];
};

const shapeVotesByDecision = (
  votesByDecision: Record<string, RollCallVote[]>,
  decisions: string[]
): VotesByDecision[] => {
  const decisionColors = decisions.map((decision) =>
    getDecisionColor(decision)
  );

  return decisions
    .map((decision, index) => ({
      decision: decision,
      color: decisionColors[index],
      votes: [...votesByDecision[decision]],
    }))
    .sort(({ votes: a }, { votes: b }) => b.length - a.length);
};

const UNIQUE_DECISION_COLORS = [
  'purple',
  'orange',
  'violetblue',
  'pink',
  'blue',
];

const getDecisionColor = (decision: string) => {
  switch (decision) {
    case 'Yea':
    case 'Yes':
      return 'lime';
    case 'Nay':
    case 'No':
      return 'red';
    case 'Not Voting':
    case 'Not Guilty':
      return 'white';
    case 'Present':
    case 'Guilty':
      return 'black';
    default:
      return UNIQUE_DECISION_COLORS.pop() || 'black';
  }
};

const shapeVotesByState = (votesByDecisions: VotesByDecision[]): MapVote[] => {
  let votes: MapVote[] = [];
  for (const votesByDecision of votesByDecisions) {
    votes = [
      ...votes,
      ...votesByDecision.votes.map((vote) => ({
        ...vote,
        decision: votesByDecision.decision,
        color: votesByDecision.color,
      })),
    ];
  }
  return votes;
};
