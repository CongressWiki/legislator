import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    font-family: fell, charter, Georgia, -apple-system, BlinkMacSystemFont, 'Segoe UI',  Cambria, "Times New Roman", Times, serif;
  }
  body {
    background: var(--color-background);
    transition: color 1s;

    color: var(--color-text);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  a {
    color: var(--color-secondary);
  }
`;

export default GlobalStyles;
