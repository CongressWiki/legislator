/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from 'react';
import App from './src/components/App';

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
