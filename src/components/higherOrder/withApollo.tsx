import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  split,
} from '@apollo/client';
import type { NormalizedCacheObject } from '@apollo/client';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import fetch from 'isomorphic-fetch';
import React from 'react';
import ws from 'ws';
import auth from '@utils/auth';
import { HASURA_GRAPHQL_URL } from '@constants';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const getHeaders = () => {
  return {
    Authorization: `Bearer ${auth.getAccessToken()}`,
  };
};

const createApolloClient = () => {
  if (apolloClient) {
    return apolloClient;
  }

  const httpLink = new HttpLink({
    uri: `https://${HASURA_GRAPHQL_URL}`,
    credentials: 'same-origin',
    headers: getHeaders(),
    fetch,
  });

  const wsForNode = typeof window === 'undefined' ? ws : null;

  const wsLink = new WebSocketLink(
    new SubscriptionClient(
      `wss://${HASURA_GRAPHQL_URL}`,
      {
        timeout: 30000,
        reconnect: true,
        connectionParams: () => ({
          credentials: 'same-origin',
          headers: getHeaders(),
        }),
      },
      wsForNode
    )
  );

  /*
   * Using the ability to split links, you can send data to each link
   * Depending on what kind of operation is being sent
   */
  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink
  );

  const client = new ApolloClient({ link, cache: new InMemoryCache() });
  return client;
};

// Export type withApolloProps = {
//   children: ReactNode;
// };

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
