import React, { useState } from 'react';
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
  rollCall: { result, question, votes, requires, date, chamber, number },
  className,
}: RollCallSlideProps) => {
  const [isQuestionExpanded, setIsQuestionExpanded] = useState(false);
  const [focusedDecision, setFocusedDecision] = useState('');
  const rollCallStatusColor = getDecisionColor(result);

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
      <QuestionContainer
        onClick={() => setIsQuestionExpanded(!isQuestionExpanded)}
        expanded={isQuestionExpanded}
      >
        {question}
      </QuestionContainer>
      {votes ? (
        <VoteDetails>
          <UsaMapOfVotes
            id={chamber + number}
            votes={votesByState}
            filterByDecision={focusedDecision}
          />
          <Column>
            <ResultText>{result}</ResultText>
            {votesByDecision.map(({ decision, color, votes }) => (
              <VoteCount
                key={decision}
                className="count"
                decision={decision}
                count={votes.length}
                color={color}
                focusedDecision={focusedDecision}
                onClick={() =>
                  focusedDecision === decision
                    ? setFocusedDecision('')
                    : setFocusedDecision(decision)
                }
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
  padding: 0.5rem;

  display: flex;
  flex-direction: column;

  border: solid 1px ${(props) => props.color};
  border-radius: 10px;
  box-shadow: 0 0 10px 1px ${(props) => props.color};

  transition: all 0.3s ease-in-out;
`;

const VoteDetails = styled.div`
  position: relative;
  margin-top: 2rem;
  width: 100%;
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

const QuestionContainer = styled.h3<{ expanded: boolean }>`
  position: absolute;
  z-index: 200;

  width: calc(100% - 1rem);
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: ${(props) => (props.expanded ? '3rem' : '1rem')};
  max-height: ${(props) => (props.expanded ? 'calc(100% - 1rem)' : '1.8rem')};
  margin: 0;

  transition: all 0.3s ease-in-out;
  background-color: var(--color-ribbon);
  border-bottom: solid thin var(--color-gray300);

  text-align: center;
  overflow: hidden;
  font-weight: 600;
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
    case 'Guilty':
    case 'Passed':
      return 'lime';
    case 'Nay':
    case 'No':
    case 'Not Guilty':
      return 'red';
    case 'Not Voting':
      return 'white';
    case 'Present':
      return 'brown';
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
