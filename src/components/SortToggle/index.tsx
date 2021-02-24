import styled from 'styled-components';
import React, { useState } from 'react';

import SortDescIcon from '@components/SortDescIcon';
import SortAscIcon from '@components/SortAscIcon';
import ButtonCanvas from '@components/ButtonCanvas';

export type SortToggleProps = {
  handleToggle: (isAscending: boolean) => void;
  className?: string;
};

const SortToggle = ({ handleToggle, className }: SortToggleProps) => {
  const [isAscending, setIsAscending] = useState(false);

  const handleClick = () => {
    setIsAscending(!isAscending);
    handleToggle(isAscending);
  };

  const Symbol = !!isAscending ? SortAscIcon : SortDescIcon;
  return (
    <ButtonCanvas>
      <Symbol className={className} onClick={handleClick} />
    </ButtonCanvas>
  );
};

export default SortToggle;
