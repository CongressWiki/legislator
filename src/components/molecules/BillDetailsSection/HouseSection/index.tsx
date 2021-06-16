import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '@components/molecules/BillDetailsSection/SectionTitle';
import { RollCall, Action as ActionType } from '@type/hasura';
import { motion } from 'framer-motion';
import ActionSlide from '../Section/ActionSlide';
import RollCallSlide from '@components/molecules/RollCallSlide';

export type HouseSectionProps = {
  actions: ActionType[];
  rollCalls: RollCall[];
  className?: string;
};

const HouseSection = ({ actions, rollCalls, className }: HouseSectionProps) => {
  const hasActions = actions.length > 0;
  const [actionIdx, setActionIdx] = useState(0);
  const activeAction = actions[actionIdx];

  const ActionComponent = () => {
    if (!hasActions) {
      return <p>{JSON.stringify(actions, null, 2)}</p>;
    }

    if (activeAction.type === 'vote') {
      const rollCall = rollCalls.find(
        (rc) => rc.number === Number(activeAction.roll)
      );
      if (!rollCall) throw new Error('No roll call data');
      return <RollCallSlide rollCall={rollCall} />;
    }

    return <ActionSlide key={activeAction.id} action={activeAction} />;
  };

  return (
    // @ts-expect-error styled-components type requires className for an unknown reason
    <Wrapper className={className} variants={motionVariants}>
      <SectionTitle>House</SectionTitle>
      <Content>
        <ActionComponent />
        <Controls>
          {actions.map((action, idx) => {
            const acted_at = new Date(action.acted_at);
            const dd = acted_at.getDate();
            const mm = acted_at.getMonth() + 1;
            const yyyy = acted_at.getFullYear();
            const timestamp = `${dd}.${mm}.${yyyy}`;
            return (
              <SlideButton
                key={action.id}
                disabled={idx === actionIdx}
                active={idx === actionIdx}
                onClick={() => setActionIdx(idx)}
              >
                {`${timestamp} - ${action.type}`}
              </SlideButton>
            );
          })}
        </Controls>
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
  border-bottom: solid thin var(--color-gray300);
  /* border-left: solid thin var(--color-gray300); */
  outline: none;

  color: ${(props) =>
    props.active ? 'var(--color-secondary)' : 'var(--color-text)'};
  font-family: advocate_c43_mid;
`;

export default HouseSection;
