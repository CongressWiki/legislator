import React from 'react';
import { action } from '@storybook/addon-actions';
// import { ThemeContext } from '@components/ThemeContext';
// import App from '@components/App';
import { ThemeProvider } from '@components/ThemeContext';
import GlobalStyles from '@components/GlobalStyles';
import { COLORS, COLOR_MODE_KEY } from '../src/constants';

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = '/';
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: ['light', 'dark'],
    },
  },
};

const withThemeProvider = (Story, context) => {
  // Copied from ThemeContext.tsx
  function setColorMode(newValue) {
    const root = window.document.documentElement;

    localStorage.setItem(COLOR_MODE_KEY, newValue);

    Object.entries(COLORS).forEach(([name, colorByTheme]) => {
      const cssVarName = `--color-${name}`;

      root.style.setProperty(cssVarName, colorByTheme[newValue]);
    });
  }
  setColorMode(context.globals.theme);
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
