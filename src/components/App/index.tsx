import React from 'react';
import { ThemeProvider } from '@components/ThemeContext';
import GlobalStyles from '@components/GlobalStyles';

export type AppProps = {
  children: React.ReactNode;
};

const App = ({ children }: AppProps) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default App;
