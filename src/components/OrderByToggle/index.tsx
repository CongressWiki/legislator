import styled from 'styled-components';
import React, { useState } from 'react';

import SortDescIcon from '@icons/misc/SortDesc';
import SortAscIcon from '@icons/misc/SortAsc';
import ButtonCanvas from '@components/ButtonCanvas';

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

  const Icon = isAscending ? SortAscIcon : SortDescIcon;
  return (
    <ButtonCanvas className={className}>
      <Icon onClick={handleClick} />
    </ButtonCanvas>
  );
};

export default OrderByToggle;
