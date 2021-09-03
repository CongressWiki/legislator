import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client';
import type { NormalizedCacheObject } from '@apollo/client';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import fetch from 'isomorphic-fetch';
import ws from 'ws';
import { HASURA_GRAPHQL_URL } from '@constants';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const getHeaders = (accessToken?: string) => {
  if (!accessToken) {
    return {
      'X-Hasura-Role': 'anonymous-website-user',
    };
  }

  return {
    Authorization: `Bearer ${accessToken}`,
  };
};

const createApolloClient = (accessToken?: string) => {
  if (apolloClient) {
    return apolloClient;
  }

  const headers = getHeaders(accessToken);

  const httpLink = new HttpLink({
    uri: `https://${HASURA_GRAPHQL_URL}`,
    credentials: 'same-origin',
    headers,
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
          headers,
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

  apolloClient = new ApolloClient({ link, cache: new InMemoryCache() });
  return apolloClient;
};

export default createApolloClient;
