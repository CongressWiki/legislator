import React, { useState } from 'react';
import styled from 'styled-components';

const fontFamily = 'advocate_c43_mid';

export type HorizontalDropdownProps = {
  options: string[];
  onOptionSelect: (option: string) => void;
  className?: string;
};

const HorizontalDropdown = ({
  options,
  onOptionSelect,
  className,
}: HorizontalDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value: string) => () => {
    setIsOpen(false);
    setSelectedOption(value);
    onOptionSelect(value);
  };

  const unselectedOptions = options.filter((o) => o !== selectedOption);
  const unselectedOptionsLength = unselectedOptions.join('').length;

  return (
    <Wrapper className={className}>
      <DropDownHeader onClick={toggling}>{selectedOption}</DropDownHeader>
      <DropDownListContainer
        isOpen={isOpen}
        unselectedOptionsLength={unselectedOptionsLength}
      >
        <DropDownList>
          {options.map((option) =>
            option === selectedOption ? null : (
              <ListItem key={option} onClick={onOptionClicked(option)}>
                {option}
              </ListItem>
            )
          )}
        </DropDownList>
      </DropDownListContainer>
    </Wrapper>
  );
};

export default HorizontalDropdown;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;

  display: flex;
  align-items: center;

  overflow: show;

  color: var(--color-gray500);
`;

const DropDownHeader = styled.div`
  position: relative;
  width: auto;

  margin: 0;
  padding: 0;

  display: inline-block;

  font-family: ${fontFamily};
  color: var(--color-gray500);
  white-space: nowrap;

  :hover {
    cursor: pointer;
    color: var(--color-secondary);
  }
`;

export type DropDownListContainerProps = {
  isOpen: boolean;
  unselectedOptionsLength: number;
};

const DropDownListContainer = styled.div<DropDownListContainerProps>`
  width: ${(properties) =>
    properties.isOpen
      ? `calc(${properties.unselectedOptionsLength} * 1ch );`
      : '0px'};

  margin: 0;
  padding: 0;

  overflow: hidden;
  transition: all 100ms ease-in;
`;

const DropDownList = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;
`;

const ListItem = styled.li`
  margin: 0;
  padding: 0;

  background-color: var(--color-background);
  display: inline;

  font-family: ${fontFamily};
  color: var(--color-gray500);
  white-space: nowrap;

  &:before {
    content: '|';
    position: relative;
  }

  &:hover {
    cursor: pointer;
    color: var(--color-secondary);
  }
`;
