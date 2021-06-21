/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from 'react';
import App from './src/components/App';
import { Auth0Provider } from '@auth0/auth0-react';
import { navigate } from 'gatsby';
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_AUDIENCE } from '@constants';

const onRedirectCallback = (appState) => {
  // Use Gatsby's navigate method to replace the url
  void navigate(appState?.returnTo || '/', { replace: true });
};

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      audience={AUTH0_AUDIENCE}
      redirectUri={window.location.origin}
      returnTo={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <App>{element}</App>
    </Auth0Provider>
  );
};
