import React from 'react';
import { ThemeContext } from '@components/ThemeContext';
import LibertyTorchIcon from '@components/icons/LibertyTorch';
import styled from 'styled-components';
import ButtonCanvas from '@components/ButtonCanvas';

export type ThemeToggleProps = {
  className?: string;
};
const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  return (
    <StyledButtonCanvas
      className={className}
      onClick={() => {
        setColorMode(colorMode === 'light' ? 'dark' : 'light');
      }}
    >
      <LibertyTorchIcon />
    </StyledButtonCanvas>
  );
};

const StyledButtonCanvas = styled(ButtonCanvas)`
  height: 4rem;
  width: 4rem;
`;

export default ThemeToggle;
