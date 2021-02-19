import React from 'react';
import { ThemeContext } from '@components/ThemeContext';
import LibertyTorch from '../LibertyTorch';
import IconButton from '@material-ui/core/IconButton';

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  return (
    <IconButton
      aria-label="Toggle dark mode"
      color="inherit"
      onClick={() => {
        setColorMode(colorMode === 'light' ? 'dark' : 'light');
      }}
    >
      <LibertyTorch />
    </IconButton>
  );
};

export default DarkToggle;
