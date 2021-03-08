import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  split,
} from '@apollo/client';
import React, { ReactNode } from 'react';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { WebSocketLink } from '@apollo/client/link/ws';
import fetch from 'isomorphic-fetch';
import { getMainDefinition } from '@apollo/client/utilities';
import ws from 'ws';
import auth from './Auth0';
import type { NormalizedCacheObject } from '@apollo/client';
import { isBrowser } from '@constants';

console.info('Initializing Apollo Wrapper');

const GATSBY_HASURA_GRAPHQL_ADMIN_SECRET =
  process.env.GATSBY_HASURA_GRAPHQL_ADMIN_SECRET;

let apolloClient: ApolloClient<NormalizedCacheObject>;

const getHeaders = () => {
  const headers: Record<string, any> = {};
  const token = auth.getIdToken();
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }

  if (!isBrowser) {
    headers['x-hasura-admin-secret'] = GATSBY_HASURA_GRAPHQL_ADMIN_SECRET;
  }

  return headers;
};

const createApolloClient = () => {
  if (apolloClient) {
    return apolloClient;
  }

  const httpLink = new HttpLink({
    uri: 'https://usacounts.com/v1/graphql',
    credentials: 'same-origin',
    headers: getHeaders(),
    fetch,
  });

  const wsForNode = typeof window === 'undefined' ? ws : null;

  const wsLink = new WebSocketLink(
    new SubscriptionClient(
      'wss://usacounts.com/v1/graphql',
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

// export type withApolloProps = {
//   children: ReactNode;
// };

const withApollo = <PageProps extends object>(
  PageComponent: React.ComponentType<PageProps>
) => {
  const WithApollo = (pageProps: PageProps) => {
    return (
      <ApolloProvider client={createApolloClient()}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  return WithApollo;
};

export default withApollo;
