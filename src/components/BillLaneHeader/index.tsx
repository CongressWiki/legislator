import React from 'react';
import styled from 'styled-components';
import ChamberDropdown from '@components/ChamberDropdown';
// import BillFeedOrderDropdown from '@components/BillFeedOrderDropdown';
import SortToggle from '@components/SortToggle';
import SearchInput from '@components/SearchInput';

export type BillLaneHeaderProps = {
  handleChamberSelection: (selection: string) => void;
  handleSearchInput: (value: string) => void;
  handleOrderAscToggle: (isAscending: boolean) => void;
  className?: string;
};

const BillLaneHeader = ({
  handleChamberSelection,
  handleSearchInput,
  handleOrderAscToggle,
  className,
}: BillLaneHeaderProps) => {
  return (
    <Wrapper className={className}>
      <ChamberDropdown
        className="chamber"
        handleSelection={handleChamberSelection}
      />
      <SearchInput className="SearchInput" handleInput={handleSearchInput} />
      <SortToggle className="sortBy" handleToggle={handleOrderAscToggle} />
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

  display: flex;
  justify-content: space-between;
  align-items: center;

  .chamber {
  }

  .sortBy {
  }

  .searchInput {
    justify-self: center;
  }
`;

export default BillLaneHeader;
