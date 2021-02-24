import React, { useState } from 'react';
import styled from 'styled-components';

const fontFamily = 'concourse_c6';
const fontSize = '1.4rem';

const DropDownContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const DropDownHeader = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  display: inline-block;

  font-family: ${fontFamily};
  font-size: ${fontSize};
  color: var(--color-gray500);
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    color: var(--color-secondary);
  }
`;

type DropDownListContainerProps = {
  isOpen: boolean;
  selectedOptionLength: number;
};

const DropDownListContainer = styled.div<DropDownListContainerProps>`
  width: ${(props) => (!!props.isOpen ? '400px' : '0px')};
  margin: 0;
  position: absolute;
  font-size: ${fontSize};
  left: ${(props) => props.selectedOptionLength + 2}ch;
  padding: 0;
  overflow: hidden;
  transition: all 500ms;
  background-color: var(--color-background);
`;

const DropDownList = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;

  color: var(--color-secondary);
  font-size: ${fontSize};
`;

const ListItem = styled.li`
  margin: 0;
  padding: 0;
  display: inline;

  font-family: ${fontFamily};
  white-space: nowrap;
  color: var(--color-gray500);

  &:before {
    content: '|';
    position: relative;
  }

  &:hover {
    cursor: pointer;
    color: var(--color-secondary);
  }
`;

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

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setIsOpen(false);
    setSelectedOption(value);
    onOptionSelect(value);
  };

  return (
    <DropDownContainer className={className}>
      <DropDownHeader onClick={toggling}>{selectedOption}</DropDownHeader>
      <DropDownListContainer
        isOpen={isOpen}
        selectedOptionLength={selectedOption.length}
      >
        <DropDownList>
          {options.map((option) =>
            option === selectedOption ? null : (
              <ListItem onClick={onOptionClicked(option)} key={option}>
                {option}
              </ListItem>
            )
          )}
        </DropDownList>
      </DropDownListContainer>
    </DropDownContainer>
  );
};

export default HorizontalDropdown;
