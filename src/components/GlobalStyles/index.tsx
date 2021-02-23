import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  // Font: Concourse c2 //
  @font-face {
    font-family: concourse_c2;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/C2/concourse_c2_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: concourse_c2;
    font-style: italic;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/C2/concourse_c2_italic.woff2') format('woff2');
  }

  // Font: Concourse c3 //
  @font-face {
    font-family: concourse_c3;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/C3/concourse_c3_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: concourse_c3;
    font-style: italic;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/C3/concourse_c3_italic.woff2') format('woff2');
  }

  // Font: Concourse c4 //
  @font-face {
    font-family: concourse_c4;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/C4/concourse_c4_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: concourse_c4;
    font-style: italic;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/C4/concourse_c4_italic.woff2') format('woff2');
  }

  // Font: Concourse c6 //
  @font-face {
    font-family: concourse_c6;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/C6/concourse_c6_regular.woff2') format('woff2');
  }

  // Font: Concourse c7 //
  @font-face {
    font-family: concourse_c7;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/C7/concourse_c7_regular.woff2') format('woff2');
  }

  // Font: Concourse c8 //
  @font-face {
    font-family: concourse_c8;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/C8/concourse_c8_regular.woff2') format('woff2');
  }

  // Font: Concourse t2 //
  @font-face {
    font-family: concourse_t2;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/T2/concourse_t2_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: concourse_t2;
    font-style: italic;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/T2/concourse_t2_italic.woff2') format('woff2');
  }
  @font-face {
    font-family: concourse_t2;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Concourse/T2/concourse_t2_bold.woff2') format('woff2');
  }
  @font-face {
    font-family: concourse_t2;
    font-style: italic;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Concourse/T2/concourse_t2_bold_italic.woff2') format('woff2');
  }

  // Font: Concourse T3 //
  @font-face {
    font-family: concourse_t3;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/T3/concourse_t3_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: concourse_t3;
    font-style: italic;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/T3/concourse_t3_italic.woff2') format('woff2');
  }
  @font-face {
    font-family: concourse_t3;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Concourse/T3/concourse_t3_bold.woff2') format('woff2');
  }
  @font-face {
    font-family: concourse_t3;
    font-style: italic;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Concourse/T3/concourse_t3_bold_italic.woff2') format('woff2');
  }

  // Font: Concourse t4 //
  @font-face {
    font-family: concourse_t4;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/T4/concourse_t4_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: concourse_t4;
    font-style: italic;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/T4/concourse_t4_italic.woff2') format('woff2');
  }
  @font-face {
    font-family: concourse_t4;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Concourse/T4/concourse_t4_bold.woff2') format('woff2');
  }
  @font-face {
    font-family: concourse_t4;
    font-style: italic;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Concourse/T4/concourse_t4_bold_italic.woff2') format('woff2');
  }

  // Font: Concourse t6 //
  @font-face {
    font-family: concourse_t6;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/T6/concourse_t6_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: concourse_t6;
    font-style: italic;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/T6/concourse_t6_italic.woff2') format('woff2');
  }

  // Font: Concourse t7 //
  @font-face {
    font-family: concourse_t7;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/T7/concourse_t7_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: concourse_t7;
    font-style: italic;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/T7/concourse_t7_italic.woff2') format('woff2');
  }

  // Font: Concourse t8 //
  @font-face {
    font-family: concourse_t8;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/T8/concourse_t8_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: concourse_t8;
    font-style: italic;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Concourse/T8/concourse_t8_italic.woff2') format('woff2');
  }

  // Font: Advocate base C41 //
  @font-face {
    font-family: advocate_c41;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Base/C41/advocate_c41_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_c41;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Base/C41/advocate_c41_bold.woff2') format('woff2');
  }

  // Font: Advocate base C43 //
  @font-face {
    font-family: advocate_c43;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Base/C43/advocate_c43_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_c43;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Base/C43/advocate_c43_bold.woff2') format('woff2');
  }

  // Font: Advocate base C45 //
  @font-face {
    font-family: advocate_c45;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Base/C45/advocate_c45_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_c45;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Base/C45/advocate_c45_bold.woff2') format('woff2');
  }

  // Font: Advocate base C51 //
  @font-face {
    font-family: advocate_c51;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Base/C51/advocate_c51_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_c51;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Base/C51/advocate_c51_bold.woff2') format('woff2');
  }

  // Font: Advocate base C53 //
  @font-face {
    font-family: advocate_c53;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Base/C53/advocate_c53_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_c53;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Base/C53/advocate_c53_bold.woff2') format('woff2');
  }

  // Font: Advocate base C55 //
  @font-face {
    font-family: advocate_c55;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Base/C55/advocate_c55_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_c55;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Base/C55/advocate_c55_bold.woff2') format('woff2');
  }

  // Font: Advocate base C61 //
  @font-face {
    font-family: advocate_c61;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Base/C61/advocate_c61_regular.woff2') format('woff2');
  }

  // Font: Advocate base C63 //
  @font-face {
    font-family: advocate_c63;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Base/C63/advocate_c63_regular.woff2') format('woff2');
  }

  // Font: Advocate base C65 //
  @font-face {
    font-family: advocate_c65;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Base/C65/advocate_c65_regular.woff2') format('woff2');
  }

  // Font: Advocate mid C41 //
  @font-face {
    font-family: advocate_c41_mid;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Mid/C41/advocate_c41_mid_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_c41_mid;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Mid/C41/advocate_c41_mid_bold.woff2') format('woff2');
  }

  // Font: Advocate mid C43 //
  @font-face {
    font-family: advocate_c43_mid;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Mid/C43/advocate_c43_mid_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_c43_mid;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Mid/C43/advocate_c43_mid_bold.woff2') format('woff2');
  }

  // Font: Advocate mid C45 //
  @font-face {
    font-family: advocate_c45_mid;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Mid/C45/advocate_c45_mid_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_c45_mid;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Mid/C45/advocate_c45_mid_bold.woff2') format('woff2');
  }

  // Font: Advocate mid C51 //
  @font-face {
    font-family: advocate_c51_mid;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Mid/C51/advocate_c51_mid_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_c51_mid;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Mid/C51/advocate_c51_mid_bold.woff2') format('woff2');
  }

  // Font: Advocate mid C53 //
  @font-face {
    font-family: advocate_c53_mid;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Mid/C53/advocate_c53_mid_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_c53_mid;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Mid/C53/advocate_c53_mid_bold.woff2') format('woff2');
  }

  // Font: Advocate mid C55 //
  @font-face {
    font-family: advocate_c55_mid;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Mid/C55/advocate_c55_mid_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_c55_mid;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Mid/C55/advocate_c55_mid_bold.woff2') format('woff2');
  }

  // Font: Advocate mid C61 //
  @font-face {
    font-family: advocate_c61_mid;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Mid/C61/advocate_c61_mid_regular.woff2') format('woff2');
  }

  // Font: Advocate mid C63 //
  @font-face {
    font-family: advocate_c63_mid;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Mid/C63/advocate_c63_mid_regular.woff2') format('woff2');
  }

  // Font: Advocate mid C65 //
  @font-face {
    font-family: advocate_c65_mid;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Mid/C65/advocate_c65_mid_regular.woff2') format('woff2');
  }


  // Font: Advocate slab C41 //
  @font-face {
    font-family: advocate_slab_c41;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab/C41/advocate_slab_c41_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_slab_c41;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab/C41/advocate_slab_c41_bold.woff2') format('woff2');
  }

  // Font: Advocate slab C43 //
  @font-face {
    font-family: advocate_slab_c43;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab/C43/advocate_slab_c43_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_slab_c43;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab/C43/advocate_slab_c43_bold.woff2') format('woff2');
  }

  // Font: Advocate slab C45 //
  @font-face {
    font-family: advocate_slab_c45;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab/C45/advocate_slab_c45_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_slab_c45;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab/C45/advocate_slab_c45_bold.woff2') format('woff2');
  }

  // Font: Advocate slab C51 //
  @font-face {
    font-family: advocate_slab_c51;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab/C51/advocate_slab_c51_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_slab_c51;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab/C51/advocate_slab_c51_bold.woff2') format('woff2');
  }

  // Font: Advocate slab C53 //
  @font-face {
    font-family: advocate_slab_c53;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab/C53/advocate_slab_c53_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_slab_c53;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab/C53/advocate_slab_c53_bold.woff2') format('woff2');
  }

  // Font: Advocate slab C55 //
  @font-face {
    font-family: advocate_slab_c55;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab/C55/advocate_slab_c55_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_slab_c55;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab/C55/advocate_slab_c55_bold.woff2') format('woff2');
  }

  // Font: Advocate slab C61 //
  @font-face {
    font-family: advocate_slab_c61;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab/C61/advocate_slab_c61_regular.woff2') format('woff2');
  }

  // Font: Advocate slab C63 //
  @font-face {
    font-family: advocate_slab_c63;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab/C63/advocate_slab_c63_regular.woff2') format('woff2');
  }

  // Font: Advocate slab C65 //
  @font-face {
    font-family: advocate_slab_c65;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab/C65/advocate_slab_c65_regular.woff2') format('woff2');
  }

  // Font: Advocate slab mid C41 //
  @font-face {
    font-family: advocate_slab_c41_mid;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab_Mid/C41/advocate_slab_c41_mid_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_slab_c41_mid;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab_Mid/C41/advocate_slab_c41_mid_bold.woff2') format('woff2');
  }

  // Font: Advocate slab mid C43 //
  @font-face {
    font-family: advocate_slab_c43_mid;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab_Mid/C43/advocate_slab_c43_mid_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_slab_c43_mid;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab_Mid/C43/advocate_slab_c43_mid_bold.woff2') format('woff2');
  }

  // Font: Advocate slab mid C45 //
  @font-face {
    font-family: advocate_slab_c45_mid;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab_Mid/C45/advocate_slab_c45_mid_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_slab_c45;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab_Mid/C45/advocate_slab_c45_mid_bold.woff2') format('woff2');
  }

  // Font: Advocate slab mid C51 //
  @font-face {
    font-family: advocate_slab_c51_mid;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab_Mid/C51/advocate_slab_c51_mid_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_slab_c51_mid;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab_Mid/C51/advocate_slab_c51_mid_bold.woff2') format('woff2');
  }

  // Font: Advocate slab mid C53 //
  @font-face {
    font-family: advocate_slab_c53_mid;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab_Mid/C53/advocate_slab_c53_mid_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_slab_c53_mid;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab_Mid/C53/advocate_slab_c53_mid_bold.woff2') format('woff2');
  }

  // Font: Advocate slab mid C55 //
  @font-face {
    font-family: advocate_slab_c55_mid;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab_Mid/C55/advocate_slab_c55_mid_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: advocate_slab_c55_mid;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab_Mid/C55/advocate_slab_c55_mid_bold.woff2') format('woff2');
  }

  // Font: Advocate slab mid C61 //
  @font-face {
    font-family: advocate_slab_c61_mid;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab_Mid/C61/advocate_slab_c61_mid_regular.woff2') format('woff2');
  }

  // Font: Advocate slab mid C63 //
  @font-face {
    font-family: advocate_slab_c63_mid;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab_Mid/C63/advocate_slab_c63_mid_regular.woff2') format('woff2');
  }

  // Font: Advocate slab mid C65 //
  @font-face {
    font-family: advocate_slab_c65_mid;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Advocate/Slab_Mid/C65/advocate_slab_c65_mid_regular.woff2') format('woff2');
  }



  // Font: Century Supra C3 //
  @font-face {
    font-family: century_supra_c3;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Century_Supra/C3/century_supra_c3_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: century_supra_c3;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Century_Supra/C3/century_supra_c3_bold.woff2') format('woff2');
  }

  // Font: Century Supra C4 //
  @font-face {
    font-family: century_supra_c4;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Century_Supra/C4/century_supra_c4_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: century_supra_c4;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Century_Supra/C4/century_supra_c4_bold.woff2') format('woff2');
  }

  // Font: Century Supra t3 //
  @font-face {
    font-family: century_supra_t3;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Century_Supra/T3/century_supra_t3_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: century_supra_t3;
    font-style: italic;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Century_Supra/T3/century_supra_t3_italic.woff2') format('woff2');
  }
  @font-face {
    font-family: century_supra_t3;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Century_Supra/T3/century_supra_t3_bold.woff2') format('woff2');
  }
  @font-face {
    font-family: century_supra_t3;
    font-style: italic;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Century_Supra/T3/century_supra_t3_bold_italic.woff2') format('woff2');
  }

  // Font: Century Supra t4 //
  @font-face {
    font-family: century_supra_t4;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Century_Supra/T4/century_supra_t4_regular.woff2') format('woff2');
  }
  @font-face {
    font-family: century_supra_t4;
    font-style: italic;
    font-weight: normal;
    font-stretch: normal;
    src: url('../../fonts/Century_Supra/T4/century_supra_t4_italic.woff2') format('woff2');
  }
  @font-face {
    font-family: century_supra_t4;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Century_Supra/T4/century_supra_t4_bold.woff2') format('woff2');
  }
  @font-face {
    font-family: century_supra_t4;
    font-style: italic;
    font-weight: bold;
    font-stretch: normal;
    src: url('../../fonts/Century_Supra/T4/century_supra_t4_bold_italic.woff2') format('woff2');
  }

  // Styles //

  *, *:before, *:after, *::before, *::after {
    box-sizing: border-box;
    font-family: concourse_t4, Georgia, Cambria, 'Times New Roman', Times, serif;
    font-weight: normal;
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
  }

  a {
    color: var(--color-secondary);
  }


`;

export default GlobalStyles;
