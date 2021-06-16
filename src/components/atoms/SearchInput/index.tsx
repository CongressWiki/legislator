import React from 'react';
import styled from 'styled-components';

export type SearchInputProps = {
  value: string | undefined;
  // eslint-disable-next-line react/boolean-prop-naming
  autoFocus?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const SearchInput = ({
  autoFocus = false,
  value,
  onChange,
}: SearchInputProps) => {
  return (
    <StyledInput
      autoFocus={autoFocus}
      type="text"
      aria-label="Search"
      placeholder="Search"
      // @ts-expect-error styled-components type requires value for an unknown reason
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;

const StyledInput = styled.input`
  height: 100%;
  width: 5em;

  padding: 0;
  margin: 0;

  background-color: transparent;
  border: 0;

  display: flex;
  text-align: center;

  font-family: advocate_c43_mid;
  font-size: 1.5rem;
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
