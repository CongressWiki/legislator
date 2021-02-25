import React from 'react';
import styled from 'styled-components';
import ChamberDropdown from '@components/ChamberDropdown';
// Import BillFeedOrderDropdown from '@components/BillFeedOrderDropdown';
import OrderByToggle from '@components/OrderByToggle';
import SearchInput from '@components/SearchInput';

export type BillLaneHeaderProps = {
  /**
   *  When a user specifies a Chamber
   */
  handleChamberSelection: (selection: string) => void;
  /**
   * When a user specifies a value to search by
   */
  handleSearchInput: (value: string) => void;
  /**
   * When a user specifies the sort order. Default is isAscending === false
   */
  handleOrderAscToggle: (isAscending: boolean) => void;
  className?: string;
};

const BillLaneHeader = ({
  handleChamberSelection,
  handleSearchInput,
  handleOrderAscToggle,
  className
}: BillLaneHeaderProps) => {
  return (
    <Wrapper className={className}>
      <ChamberDropdown
        className="chamber"
        handleSelection={handleChamberSelection}
      />
      <SearchInput className="searchInput" handleInput={handleSearchInput} />
      <OrderByToggle className="orderBy" handleToggle={handleOrderAscToggle} />
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

  padding-left: 1rem;
  padding-right: 1rem;

  border-bottom: solid thin var(--color-gray300);

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 'chamber searchInput orderBy';
  align-items: center;

  .chamber {
    grid-area: chamber;
  }

  .searchInput {
    grid-area: searchInput;
  }

  .orderBy {
    grid-area: orderBy;
    justify-self: end;
  }
`;

export default BillLaneHeader;
