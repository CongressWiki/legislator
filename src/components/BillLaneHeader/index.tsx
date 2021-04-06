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
  billCount: number;
  className?: string;
};

const BillLaneHeader = ({
  handleChamberSelection,
  handleSearchInput,
  handleOrderAscToggle,
  billCount,
  className,
}: BillLaneHeaderProps) => {
  return (
    <Wrapper className={className}>
      <ChamberDropdown handleSelection={handleChamberSelection} />
      <SearchInput handleInput={handleSearchInput} />
      <BillCount>{billCount} Bills</BillCount>
      <OrderByToggle handleToggle={handleOrderAscToggle} />
    </Wrapper>
  );
};

export default BillLaneHeader;

const Wrapper = styled.div`
  z-index: 1000;
  width: 100%;
  height: 40.5px;
  background-color: var(--color-background);
  overflow: hidden;

  position: sticky;
  top: -0.5px;

  padding-left: 1em;
  padding-right: 1em;

  border-bottom: solid thin var(--color-gray300);

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: advocate_c43_mid;
  font-size: 1.4em;
`;

const BillCount = styled.p`
  padding: 0;
  margin: 0;
  white-space: nowrap;

  color: var(--color-gray500);
  font-family: advocate_c43_mid;
`;
