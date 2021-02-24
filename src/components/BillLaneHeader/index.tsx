import React from 'react';
import styled from 'styled-components';
import ChamberDropdown from '@components/ChamberDropdown';
import BillFeedOrderDropdown from '@components/BillFeedOrderDropdown';
import SortToggle from '@components/SortToggle';

const BillLaneHeader = () => {
  return (
    <Wrapper>
      <ChamberDropdown className="chamber" />
      <SortToggle className="sortBy" onToggle={() => {}} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 40.5px;
  background-color: var(--color-background);
  overflow: hidden;

  position: sticky;
  top: -0.5px;

  padding-left: 15px;
  padding-right: 15px;

  border-bottom: solid thin var(--color-gray300);

  /* display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas: 'chamber . . . . sortBy'; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  .chamber {
    grid-area: chamber;
  }

  .sortBy {
    grid-area: sortBy;
  }
`;

export default BillLaneHeader;
