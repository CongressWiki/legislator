import React from 'react';
import auth from '@utils/Auth0';
import Layout from '@components/Layouts/Common';

const Auth0CallbackPage = () => {
  auth.handleAuthentication();

  return (
    <Layout>
      <div>
        <h2>{'Logging in'}</h2>
      </div>
    </Layout>
  );
};

export default Auth0CallbackPage;
