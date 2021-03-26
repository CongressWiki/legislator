import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  split,
} from '@apollo/client';
import React from 'react';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { WebSocketLink } from '@apollo/client/link/ws';
import fetch from 'isomorphic-fetch';
import { getMainDefinition } from '@apollo/client/utilities';
import ws from 'ws';
import type { NormalizedCacheObject } from '@apollo/client';

const GATSBY_HASURA_GRAPHQL_URL = process.env.GATSBY_HASURA_GRAPHQL_URL;

let apolloClient: ApolloClient<NormalizedCacheObject>;

const getHeaders = () => {
  const headers: Record<string, any> = {};
  return headers;
};

const createApolloClient = () => {
  if (apolloClient) {
    return apolloClient;
  }

  const httpLink = new HttpLink({
    uri: `https://${GATSBY_HASURA_GRAPHQL_URL}`,
    credentials: 'same-origin',
    headers: getHeaders(),
    fetch,
  });

  const wsForNode = typeof window === 'undefined' ? ws : null;

  const wsLink = new WebSocketLink(
    new SubscriptionClient(
      `wss://${GATSBY_HASURA_GRAPHQL_URL}`,
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
