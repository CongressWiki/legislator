import React, { useState } from 'react';
import styled from 'styled-components';

export type action = {
  id: string;
  acted_at: string;
  action_code: string;
  references: Record<string, any>;
  text: string;
  type?: string;
  status?: string;
  how?: string;
  result?: string;
  vote_type?: string;
  where?: string;
  roll?: string;
  suspension?: string;
};

export type ActionsStepperProps = {
  actions: action[];
  className?: string;
};

const ActionsStepper = ({ actions, className }: ActionsStepperProps) => {
  const [activeStepId, setActiveStepId] = useState(actions[0]?.id);

  return (
    <Wrapper className={`steps ${className}`}>
      {actions.map((action, index) => (
        <Step
          key={index}
          isActive={action.id === activeStepId}
          minimized={action.id !== activeStepId}
          onClick={() => setActiveStepId(action.id)}
        >
          <StepLabel>
            <div className="header">{action.text}</div>
            <div className="subheader">
              {new Date(action.acted_at).toDateString()}
            </div>
          </StepLabel>
          <StepContent minimized={action.id !== activeStepId}>
            {action.text}
          </StepContent>
        </Step>
      ))}
    </Wrapper>
  );
};

export default ActionsStepper;

const Wrapper = styled.div`
  position: relative;
  margin-top: 10vh;
  width: 100%;
  min-width: 270px;
  max-width: 20vw;
  box-shadow: 0px 10px 15px -5px rgba(0, 0, 0, 0.3);
  background-color: var(--color-background);
  padding: 0;
`;

const Step = styled.div<{ isActive?: boolean; minimized?: boolean }>`
  position: relative;
  padding: 0 20px 24px 50px;
  transition: all 0.4s ease-in-out;
  background-color: var(--color-background);

  ::before {
    position: absolute;
    content: '';
    height: 13px;
    width: 13px;
    background-color: ${(props) =>
      props.isActive ? 'var(--color-secondary)' : 'rgb(198, 198, 198)'};
    border-radius: 15px;
    left: calc(50px / 2);
    transform: translateX(-45%);
    z-index: 2;
  }

  ::after {
    position: absolute;
    content: '';
    height: 100%;
    width: 1px;
    background-color: rgb(198, 198, 198);
    left: calc(50px / 2);
    top: 0;
    z-index: 1;
  }

  ${(props) => {
    if (props.minimized) {
      return `
        transition: background-color 0.3s ease-in-out;
        // background-color: green;
        cursor: pointer;

        :hover {
          background-color: rgba(0, 0, 0, 0.06);
        }
        `;
    }
  }}
`;

const StepLabel = styled.div`
  .header {
    background: var(--color-background);
    color: var(--color-text);
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-family: concourse_t4;
    user-select: none;
    font-size: 1rem;
    font-weight: 600;
  }

  .subheader {
    user-select: none;
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

const StepContent = styled.div<{ minimized?: boolean }>`
  position: relative;
  height: 160px;
  width: 100%;
  margin-top: 10px;

  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background-color: var(--color-background);
  border-radius: 4px;

  font-family: concourse_t2;
  ${(props) => {
    if (props.minimized) {
      return `
        height: 0px;
      `;
    }
  }};
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 0;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: var(--color-secondary);
  box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  transform: translate(-50%, -50%);

  :hover {
    background-color: rgba(255, 0, 0, 0.6);
  }

  :focus {
    outline: 0;
  }
`;
