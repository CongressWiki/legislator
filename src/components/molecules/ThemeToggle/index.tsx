import React from 'react';
import { ThemeContext } from '@components/App/ThemeContext';
import LibertyTorchIcon from '@icons/misc/LibertyTorch';
import styled from 'styled-components';
import ButtonCanvas from '@components/atoms/ButtonCanvas';

export type ThemeToggleProps = {
  className?: string;
};
const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  return (
    <StyledButtonCanvas
      className={className}
      // @ts-expect-error styled-components type requires for an unknown reason
      onClick={() => {
        setColorMode(colorMode === 'light' ? 'dark' : 'light');
      }}
    >
      <LibertyTorchIcon />
    </StyledButtonCanvas>
  );
};

const StyledButtonCanvas = styled(ButtonCanvas)`
  height: 3rem;
  width: 3rem;
`;

export default ThemeToggle;
