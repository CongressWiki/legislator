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
    <Wrapper className={className}>
      <StyledInput
        type="text"
        aria-label="Search"
        placeholder="Search"
        onChange={handleInputChange}
      />
    </Wrapper>
  );
};

export default SearchInput;

const Wrapper = styled.form`
  height: 100%;
  width: auto;

  display: flex;
`;

const StyledInput = styled.input`
  height: 100%;
  width: 5em;

  padding: 0;
  margin: 0;

  background-color: var(--color-background);
  border: 0;

  display: flex;
  text-align: center;

  font-family: advocate_c43_mid;
  font-size: 1em;
  color: var(--color-text);

  ::placeholder {
    color: var(--color-gray500);
  }

  :focus {
    outline: none;

    ::placeholder {
      opacity: 0;
    }
  }
`;
