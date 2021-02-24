import styled from 'styled-components';
import React, { useState } from 'react';

import SortDescSymbol from '@components/SortDescSymbol';
import SortAscSymbol from '@components/SortAscSymbol';

export type SortToggleProps = {
  onToggle: (isAscending: boolean) => void;

  className?: string;
};

const SortToggle = ({ onToggle, className }: SortToggleProps) => {
  const [isAscending, setIsAscending] = useState(false);

  const handleClick = () => {
    setIsAscending(!isAscending);
    onToggle(isAscending);
  };

  const Symbol = isAscending ? SortAscSymbol : SortDescSymbol;
  return <Symbol className={className} onClick={handleClick} />;
};

const SortToggleStyled = styled(SortToggle)`
  :hover {
    cursor: pointer;
  }
`;

export default SortToggleStyled;
