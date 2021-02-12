import React from 'react';
import { ThemeProvider } from '@components/ThemeContext/ThemeContext';
import GlobalStyles from '@components/GlobalStyles/GlobalStyles';

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
