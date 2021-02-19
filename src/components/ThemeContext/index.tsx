import React from 'react';

import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from '../../constants';

export type ThemeContextType = React.Context<{
  colorMode: string;
  setColorMode: (color: 'light' | 'dark') => void;
}>;

const defaultState = {
  colorMode: 'dark',
  setColorMode: (color: 'light' | 'dark') => {
    console.warn('Attempted `setColorMode()` before context was set.');
  },
};

export const ThemeContext: ThemeContextType = React.createContext(defaultState);

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [colorMode, rawSetColorMode] = React.useState(defaultState.colorMode);

  React.useEffect(() => {
    const root = window.document.documentElement;

    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    );

    if (
      (initialColorValue && initialColorValue === 'light') ||
      initialColorValue === 'dark'
    ) {
      rawSetColorMode(initialColorValue);
    }
  }, []);

  const contextValue = React.useMemo(() => {
    function setColorMode(newValue: 'light' | 'dark') {
      const root = window.document.documentElement;

      localStorage.setItem(COLOR_MODE_KEY, newValue);

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;

        root.style.setProperty(cssVarName, colorByTheme[newValue]);
      });

      rawSetColorMode(newValue);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
