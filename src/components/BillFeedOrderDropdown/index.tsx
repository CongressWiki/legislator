import React, {useState} from 'react';
import styled from 'styled-components';
import HorizontalDropdown from '@components/HorizontalDropdown';

const options = ['Latest', 'Introduced-at'];

export type BillFeedOrderDropdownProps = {
  className?: string;
};

const BillFeedOrderDropdown = ({className}: BillFeedOrderDropdownProps) => {
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

export default BillFeedOrderDropdown;
