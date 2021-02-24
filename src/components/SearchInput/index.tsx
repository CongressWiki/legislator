import React from 'react';
import styled from 'styled-components';

export type SearchInputProps = {
  handleInput: (value: string) => void;
  className?: string;
};

const SearchInput = ({ className, handleInput }: SearchInputProps) => {
  const handleInputChange = (event: any) => {
    handleInput(event.target.value);
  };

  return (
    <StyledInput
      className={className}
      type="text"
      aria-label="Search"
      placeholder="Search"
      onChange={handleInputChange}
    />
  );
};

const StyledInput = styled.input`
  height: 100%;
  width: 50%;
  border: 0;
  background-color: var(--color-background);
  text-align: center;
  font-family: concourse_c4;
  font-size: 1.4rem;
  color: var(--color-text);

  ::placeholder {
    color: var(--color-gray500);
  }

  :focus {
    outline: none;
  }
`;

export default SearchInput;
