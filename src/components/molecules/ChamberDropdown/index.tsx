import React from 'react';
import styled from 'styled-components';
import HorizontalDropdown from '@components/atoms/HorizontalDropdown';

const options = ['All', 'House', 'Senate'];

export type ChamberDropdownProps = {
  handleSelection: (selection: string) => void;
  className?: string;
};

const ChamberDropdown = ({
  className,
  handleSelection,
}: ChamberDropdownProps) => {
  const handleOptionSelect = (option: string) => {
    handleSelection(option);
  };

  return (
    <HorizontalDropdown
      className={className}
      options={options}
      onOptionSelect={handleOptionSelect}
    />
  );
};

export default ChamberDropdown;
