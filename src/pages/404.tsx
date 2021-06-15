import React from 'react';
import Layout from '@components/templates/layouts/Common';
import SEO from '@components/App/Seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" pathname="404" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist.</p>
  </Layout>
);

export default NotFoundPage;
