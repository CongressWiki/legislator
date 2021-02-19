import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  // Font: Concourse t2 //
  @font-face {
    font-family: concourse_t2;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse_T2/concourse_t2_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: concourse_t2;
    font-style: italic;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse_T2/concourse_t2_italic.woff2') format('woff2');
  }
  @font-face {
    font-family: concourse_t2;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Concourse_T2/concourse_t2_bold.woff2') format('woff2');
  }
  @font-face {
    font-family: concourse_t2;
    font-style: italic;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Concourse_T2/concourse_t2_bold_italic.woff2') format('woff2');
  }

  // Font Advocate C45 mid
  @font-face {
    font-family: advocate_c45_mid;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/advocate_c45_mid_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_c45_mid;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/advocate_c45_mid_bold.woff2') format('woff2');
  }

  // Font: Century Supra t3 //
  @font-face {
    font-family: century_supra_t3;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Century_Supra/century_supra_t3_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: century_supra_t3;
    font-style: italic;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Century_Supra/century_supra_t3_italic.woff2') format('woff2');
  }
  @font-face {
    font-family: century_supra_t3;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Century_Supra/century_supra_t3_bold.woff2') format('woff2');
  }
  @font-face {
    font-family: century_supra_t3;
    font-style: italic;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Century_Supra/century_supra_t3_bold_italic.woff2') format('woff2');
  }

  // Styles //

  *, *:before, *:after, *::before, *::after {
    box-sizing: border-box;
    font-family: century_supra_t3, Georgia, Cambria, 'Times New Roman', Times, serif;
    font-weight: normal;
  }

  h1, h2, h3, h4, h5 {
    font-family: concourse_t2, Georgia, Cambria, 'Times New Roman', Times, serif;
    font-weight: normal;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: var(--color-secondary);
  }


`;

export default GlobalStyles;
