import React from 'react';
import { createGlobalStyle } from 'styled-components';
import './advocate.css';
import './concourse.css';
import './century-supra.css';

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after, *::before, *::after {
    box-sizing: border-box;
    font-family: century_supra_t3, Georgia, Cambria, 'Times New Roman', Times, serif;
    font-weight: normal;
  }

  h1, h2, h3, h4, h5 {
    font-family: century_supra_c3, Georgia, Cambria, 'Times New Roman', Times, serif;
    font-weight: normal;
  }

  body {
    min-width: 370px;
    background: hsl(215, 51%, 10%);
    color: var(--color-text);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    margin: 0;
  }

  a {
    color: var(--color-secondary);
  }




`;

export default GlobalStyles;
