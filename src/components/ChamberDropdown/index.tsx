import React from 'react';
import styled from 'styled-components';
import HorizontalDropdown from '@components/HorizontalDropdown';

const options = ['All', 'House', 'Senate', 'President'];

export type ChamberDropdownProps = {
  className?: string;
};

const ChamberDropdown = ({ className }: ChamberDropdownProps) => {
  const handleOptionSelect = (option: string) => {
    console.log(option);
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
