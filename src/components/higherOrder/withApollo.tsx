import { ApolloProvider } from '@apollo/client';
import React from 'react';
import createApolloClient from '@utils/ApolloClient';

const withApollo = <PageProperties extends Record<string, unknown>>(
  PageComponent: React.ComponentType<PageProperties>
) => {
  const WithApollo = (pageProperties: PageProperties) => {
    return (
      <ApolloProvider client={createApolloClient()}>
        <PageComponent {...pageProperties} />
      </ApolloProvider>
    );
  };

  return WithApollo;
};

export default withApollo;
