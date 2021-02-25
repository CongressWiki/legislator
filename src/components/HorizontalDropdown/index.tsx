import React, {useState} from 'react';
import styled from 'styled-components';

const fontFamily = 'concourse_c4';
const fontSize = '1.4em';

const DropDownContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  color: var(--color-gray500);
`;

const DropDownHeader = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  display: inline-block;

  font-size: ${fontSize};
  font-family: ${fontFamily};
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
  width: ${(props) => (props.isOpen ? '180px' : '0px')};
  position: absolute;
  left: ${(props) => props.selectedOptionLength + 4}ch;
  margin: 0;
  padding: 0;

  overflow: hidden;
  transition: all 300ms ease-in;
`;

const DropDownList = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;
`;

const ListItem = styled.li`
  margin: 0;
  padding: 0;
  display: inline;

  font-family: ${fontFamily};
  font-size: ${fontSize};
  white-space: nowrap;
  color: var(--color-gray500);
  background-color: var(--color-background);

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
  className
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
              <ListItem key={option} onClick={onOptionClicked(option)}>
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
