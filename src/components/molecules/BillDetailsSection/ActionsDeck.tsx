import React from 'react';
import styled from 'styled-components';
import type { Action as ActionType, RollCall } from '@type/hasura';
import RollCallSlide from '@components/molecules/RollCallSlide';
import Calendar from '@icons/misc/Calendar';

export type ActionsDeckProps = {
  actions: ActionWithRollCall[];
  className?: string;
};

export type ActionWithRollCall = ActionType & {
  roll_call?: RollCall;
};

const ActionsDeck = ({ actions, className }: ActionsDeckProps) => {
  const latestRollCall = actions.find((a: ActionWithRollCall) => a.roll_call);

  if (!latestRollCall) {
    return <StyledCalendar className={className} />;
  }

  return (
    <RollCallSlide rollCall={latestRollCall.roll_call} className={className} />
  );

  // return (
  //   <Wrapper className={className} >
  //     <Controls>
  //       {actions.map((action, idx) => {
  //         const acted_at = new Date(action.acted_at);
  //         const dd = acted_at.getDate();
  //         const mm = acted_at.getMonth() + 1;
  //         const yyyy = acted_at.getFullYear();
  //         const timestamp = `${mm}.${dd}.${yyyy}`;
  //         return (
  //           <SlideButton
  //             key={action.id}
  //             disabled={idx === actionIdx}
  //             active={idx === actionIdx}
  //             onClick={() => setActionIdx(idx)}
  //           >
  //             {`${action.type}`}
  //           </SlideButton>
  //         );
  //       })}
  //     </Controls>
  //   </Wrapper>
  // );
};

export default ActionsDeck;

const Wrapper = styled.div``;

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

const StyledCalendar = styled(Calendar)`
  width: 100%;
  height: auto;
  max-height: 50%;
  align-self: center;
  path {
    fill: var(--color-gray500);
  }
`;
