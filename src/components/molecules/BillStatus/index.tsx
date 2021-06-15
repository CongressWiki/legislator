import React from 'react';
import styled from 'styled-components';
import type { Bill as BillType, Action } from '@type/hasura';
import ChamberStatusBox from '@components/atoms/ChamberStatusBox';

export type BillStatusProps = {
  bill: BillType;
  className?: string;
};

const BillStatus = ({ bill, className }: BillStatusProps) => {
  const secondChamber = bill.originalChamber === 'HOUSE' ? 'SENATE' : 'HOUSE';
  const originalChamberActions = getActionsForChamber(
    bill.actions,
    bill.originalChamber
  );
  const secondChamberActions = getActionsForChamber(
    bill.actions,
    secondChamber
  );

  return (
    <Wrapper className={className}>
      <ChamberStatusBox
        chamber={bill.originalChamber}
        actionText={originalChamberActions[0]?.text}
      />
      <ChamberStatusBox
        chamber={secondChamber}
        actionText={secondChamberActions[0]?.text}
      />
    </Wrapper>
  );
};

export default BillStatus;

const Wrapper = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
`;

const getActionsForChamber = (actions: Action[], chamber: string) => {
  return actions.filter((action) => action.chamber === chamber);
};
