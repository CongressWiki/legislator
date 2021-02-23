import React from 'react';
import { ThemeContext } from '@components/ThemeContext';
import LibertyTorch from '@components/LibertyTorch';
import styled from 'styled-components';

export type ThemeToggleProps = {
  className?: string;
};
const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  return (
    <Wrapper
      className={className}
      onClick={() => {
        setColorMode(colorMode === 'light' ? 'dark' : 'light');
      }}
    >
      <LibertyTorch />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ThemeToggle;
