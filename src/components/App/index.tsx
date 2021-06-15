import React from 'react';
import { ThemeProvider } from '@components/App/ThemeContext';
import GlobalStyles from '@components/App/GlobalStyles';

export type AppProps = {
  children: React.ReactNode;
};

const App = ({ children }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};

export default App;
