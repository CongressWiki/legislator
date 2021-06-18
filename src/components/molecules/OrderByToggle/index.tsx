import React, { useState } from 'react';
import SortIcon from '@icons/buttons/Sort';
import styled from 'styled-components';
import ButtonCanvas from '@components/atoms/ButtonCanvas';

export type OrderByToggleProps = {
  /**
   * When a user specifies the sort order. Default is isAscending === false
   */
  handleToggle: (isAscending: boolean) => void;
  className?: string;
};

const OrderByToggle = ({ handleToggle, className }: OrderByToggleProps) => {
  const [isAscending, setIsAscending] = useState(false);

  const handleClick = () => {
    handleToggle(!isAscending);
    setIsAscending(!isAscending);
  };

  return (
    <ButtonCanvas className={className}>
      {/* using transient prop to workaround react/styled-components console warning */}
      <StyledSortIcon $isAscending={isAscending} onClick={handleClick} />
    </ButtonCanvas>
  );
};

export default OrderByToggle;

const StyledSortIcon = styled(SortIcon)<{ $isAscending: boolean }>`
  ${(props) => !props.$isAscending && 'transform: scaleY(-1);'}
`;
