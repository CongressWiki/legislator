import { createGlobalStyle } from 'styled-components';
import './advocate.css';
import './century-supra.css';

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after, *::before, *::after {
    box-sizing: border-box;
    font-family: century_supra_t3, Georgia, Cambria, 'Times New Roman', Times, serif;
    font-weight: normal;
    line-height:  1.5;
  }

  h1, h2, h3, h4, h5 {
    font-family: century_supra_c3, Georgia, Cambria, 'Times New Roman', Times, serif;
    font-weight: normal;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    margin: 0;
  }

  a {
    color: unset;
    text-decoration: unset;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.5) !important;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-text);
    border-radius: 10px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-gray500);
  }

  .noScroll {
    overflow: hidden;
  }
`;

export default GlobalStyles;
