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

const Wrapper = styled.div`
  height: 100%;
  min-width: 0;
  display: flex;
`;

const StyledInput = styled.input`
  margin: 0;
  padding: 0;
  height: 100%;
  min-width: 0;

  border: 0;
  display: flex;
  background-color: hsl(215, 51%, 10%);
  text-align: center;
  font-family: concourse_t4;
  font-size: 1.4rem;
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

export default SearchInput;
