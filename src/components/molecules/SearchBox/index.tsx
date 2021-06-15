import React from 'react';
import styled from 'styled-components';
import SearchInput from '@components/atoms/SearchInput';

export type SearchBoxProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  autoFocus?: boolean;
  value?: string;
};

const SearchBox = ({ value = '', onChange }: SearchBoxProps) => {
  return (
    <Box>
      <SearchInput autoFocus value={value} onChange={onChange} />
    </Box>
  );
};

export default SearchBox;

const Box = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: solid thin var(--color-gray500);
  border-radius: 10px;
`;
