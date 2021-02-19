import React from 'react';
import { ThemeContext } from '@components/ThemeContext';
import LibertyTorch from '@components/LibertyTorch';

const ThemeToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  return (
    <LibertyTorch
      onClick={() => {
        setColorMode(colorMode === 'light' ? 'dark' : 'light');
      }}
    />
  );
};

export default ThemeToggle;
