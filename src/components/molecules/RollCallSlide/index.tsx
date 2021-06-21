import React, { useState } from 'react';
import styled from 'styled-components';
import { RollCall, RollCallVote } from '@type/hasura';
import UsaMapOfVotes from '@components/molecules/UsaMapOfVotes';
import VoteCount from '@components/atoms/VoteCount';
import { groupBy } from 'lodash';
import type { Vote as MapVote } from '@components/molecules/UsaMapOfVotes';

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

  //  Shape decision votes and sort by vote count
  const votesByDecision = shapeVotesByDecision(
    votesGroupedByDecision,
    decisions
  );

  // Flatten votes and attach color, decision to each
  const usaMapVotes = flattenAndShapeVotesForUsaMap(votesByDecision);

  return (
    <Wrapper color={rollCallStatusColor} className={className}>
      <QuestionContainer
        expanded={isQuestionExpanded}
        onClick={() => {
          setIsQuestionExpanded(!isQuestionExpanded);
        }}
      >
        {question}
      </QuestionContainer>
      {votes ? (
        <VoteDetails>
          <UsaMapOfVotes
            id={chamber + number}
            votes={usaMapVotes}
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
                onClick={() => {
                  focusedDecision === decision
                    ? setFocusedDecision('')
                    : setFocusedDecision(decision);
                }}
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
  max-width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  max-height: calc(100% - 2rem);

  margin: 1rem;
  margin-left: 0;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;

  /* background-color: var(--color-ribbonCard);
  border: solid 1px ${(properties) => properties.color};
  border-radius: 10px;
  box-shadow: 0 0 10px 1px ${(properties) => properties.color}; */

  transition: all 0.3s ease-in-out;
`;

const QuestionContainer = styled.h3<{ expanded: boolean }>`
  position: absolute;
  z-index: 200;

  width: calc(100% - 1rem);
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: ${(properties) => (properties.expanded ? '3rem' : '1rem')};
  max-height: ${(properties) =>
    properties.expanded ? 'calc(100% - 1rem)' : '1.7rem'};
  margin: 0;

  ${(props) => props.expanded && 'background-color: var(--color-background);'}

  transition: all 0.3s ease-in-out;

  border-bottom: solid thin var(--color-gray300);

  text-align: center;
  overflow: hidden;

  font-weight: 600;
`;

const VoteDetails = styled.div`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  max-width: 100%;
  height: calc(100% - 2rem);
  max-height: calc(100% - 2rem);

  display: flex;

  @media (max-width: 450px) {
    max-height: 50%;
    flex-direction: column;
  }
`;

const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-left: 1rem;

  @media (max-width: 450px) {
    min-height: calc(100% - 2rem);
    width: 100%;
    height: 50%;
    padding: 0;

    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
  }
`;

const ResultText = styled.h4`
  padding: 0;
  margin: 0;
  text-align: center;
  font-weight: 600;

  @media (max-width: 450px) {
    width: 100%;
    font-size: 1rem;
    min-height: 10px;
  }
`;

const RequiresText = styled.p`
  padding: 0;
  margin: 0;
  text-align: center;
  font-weight: 400;

  @media (max-width: 450px) {
    width: 100%;
    font-size: 0.5rem;
    min-height: 10px;
  }
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
      decision,
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
    case 'Bill Passed':
    case 'Amendment Passed':
    case 'Concurrent Resolution Agreed to':
      return 'var(--color-yeaGreen)';
    case 'Nay':
    case 'No':
    case 'Not Guilty':
    case 'Concurrent Resolution Disagreed to':
      return 'var(--color-nayRed)';
    case 'Not Voting':
      return 'var(--color-gray700)';
    case 'Present':
      return 'orange';
    default:
      return UNIQUE_DECISION_COLORS.pop() || 'black';
  }
};

const flattenAndShapeVotesForUsaMap = (
  votesByDecisions: VotesByDecision[]
): MapVote[] => {
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
