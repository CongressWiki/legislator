import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '@components/molecules/BillDetailsSection/SectionTitle';
import { Action as ActionType, RollCall } from '@type/hasura';
import { motion } from 'framer-motion';
import ActionSlide from './ActionSlide';
import RollCallSlide from '@components/molecules/RollCallSlide';
import Calendar from '@icons/misc/Calendar';

export type SectionProps = {
  actions: ActionWithRollCall[];
  title: string;
  className?: string;
};

export type ActionWithRollCall = ActionType & {
  rollCall?: RollCall;
};

const Section = ({ actions, title, className }: SectionProps) => {
  const hasActions = actions.length > 0;
  const [actionIdx, setActionIdx] = useState(actions.length - 1);
  const activeAction = actions[actionIdx];
  const latestRollCall = actions.find((a) => a.roll_call);

  const ActionComponent = () => {
    // if (!hasActions) {
    //   return <p>{JSON.stringify(actions, null, 2)}</p>;
    // }

    if (latestRollCall) {
      return <RollCallSlide rollCall={latestRollCall.roll_call} />;
    }

    return <StyledCalendar />;
    // return <ActionSlide key={activeAction.id} action={activeAction} />;
  };

  return (
    <Wrapper className={className} variants={motionVariants}>
      <SectionTitle>{title}</SectionTitle>
      <Content>
        <ActionComponent />
        {/* <Controls>
          {actions.map((action, idx) => {
            const acted_at = new Date(action.acted_at);
            const dd = acted_at.getDate();
            const mm = acted_at.getMonth() + 1;
            const yyyy = acted_at.getFullYear();
            const timestamp = `${mm}.${dd}.${yyyy}`;
            return (
              <SlideButton
                key={action.id}
                disabled={idx === actionIdx}
                active={idx === actionIdx}
                onClick={() => setActionIdx(idx)}
              >
                {`${action.type}`}
              </SlideButton>
            );
          })}
        </Controls> */}
      </Content>
    </Wrapper>
  );
};

const motionVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Wrapper = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
  display: block;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Content = styled.div`
  position: relative;
  float: right;

  width: 100%;
  max-width: 710px;
  height: 100%;

  padding-left: 3rem;
  padding-bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Controls = styled.div``;

const SlideButton = styled.button<{ active: boolean }>`
  background: transparent;

  border: none;
  /* border-bottom: solid thin var(--color-gray300); */

  outline: none;

  color: ${(props) =>
    props.active ? 'var(--color-secondary)' : 'var(--color-text)'};
  font-family: advocate_c43_mid;

  :hover {
    color: var(--color-secondary);
  }
`;

export default Section;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  height: auto;
  max-height: 50%;
  align-self: center;
  path {
    fill: var(--color-gray500);
  }
`;
