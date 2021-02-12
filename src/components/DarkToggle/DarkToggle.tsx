import React from 'react';
import { ThemeContext } from '@components/ThemeContext/ThemeContext';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import IconButton from '@material-ui/core/IconButton';

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode || !setColorMode) {
    return null;
  }

  return (
    <IconButton aria-label="Toggle dark mode" color="inherit">
      <Brightness4OutlinedIcon
        fontSize="inherit"
        onClick={() => {
          setColorMode(colorMode === 'light' ? 'dark' : 'light');
        }}
      />
    </IconButton>
  );
};

export default DarkToggle;
