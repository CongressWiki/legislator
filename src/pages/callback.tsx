import React from 'react';
import auth from '@utils/Auth0';
import AnimatedTextLoader from '@components/AnimatedTextLoader';

const Auth0CallbackPage = () => {
  auth.handleAuthentication();

  return <AnimatedTextLoader />;
};

export default Auth0CallbackPage;
