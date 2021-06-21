import React from 'react';
import styled from 'styled-components';
import type { Action as ActionType } from '@type/hasura';

export type ActionProps = {
  action: ActionType;
  className?: string;
};

const ActionSlide = ({ action, className }: ActionProps) => {
  const actionType =
    `${action.type?.toUpperCase()}` +
    (action.vote_type ? ` - ${action.vote_type}` : '');
  const actionActedAt = new Date(action.acted_at).toDateString();

  return (
    <Wrapper className={className}>
      <h4>{actionType}</h4>
      <p>{action.text}</p>
      <p>{action.status}</p>
      <p>{actionActedAt}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4,
  p {
    font-family: advocate_c43;
  }
`;

export default ActionSlide;
