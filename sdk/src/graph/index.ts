import {
  createClient,
  defaultExchanges,
  subscriptionExchange,
} from '@urql/core';
import fetch from 'cross-fetch';
import WebSocket from 'isomorphic-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';

const DEFAULT_ENDPOINT_HTTP =
  'https://xdai.colony.io/graph/subgraphs/name/joinColony/subgraph';
const DEFAULT_ENDPOINT_WS =
  'wss://xdai.colony.io/graph/subgraphs/name/joinColony/subgraph';

export interface SubgraphClientOptions {
  /** The GraphQL endpoint for HTTP connections */
  endpointHttp?: string;
  /** The GraphQL endpoint for Websocket connections */
  endpointWs?: string;
}

// TODO: (v2) remove this file from package.json as separate module

/**
 * Creates a Colony Subgraph client
 *
 * The Colony Subgraph client is nothing else than a ready-to-use [`urql`](https://formidable.com/open-source/urql/) client connected to the Colony Subgraph with subscriptions enabled. Please refer to the following references if you'd like to know more about [The Graph](https://thegraph.com/) or [GraphQL](https://graphql.org/) in general.
 *
 * The Colony Subgraph's schema and resolvers are kept up-to-date by the Colony team and can be explored here: [Colony Subgraph](https://thegraph.com/hosted-service/subgraph/joincolony/colony-xdai). There you can make test queries to the Colony Subgraph and explore it all the way down the rabbit hole :)
 *
 * @param options - Define configuration options to instantiate the client with
 * @returns A ready-to-use `urql` GraphQL client instance
 *
 * @example
 * Retrieve the 10 most recent "DomainAdded" events across all Colonies
 * ```typescript
 * import { createSubgraphClient, gql } from '@colony/sdk/graph';
 *
 * const colonySubgraph = createSubgraphClient();
 *
 * const QUERY = gql`
 *   query DomainAddedEvents {
 *     events(
 *       first: 10
 *       orderBy: timestamp
 *       orderDirection: desc
 *       where: { name_contains: "DomainAdded" }
 *     ) {
 *       id
 *       address
 *       associatedColony {
 *         colonyAddress: id
 *       }
 *       name
 *       args
 *       timestamp
 *     }
 *   }
 * `;
 *
 * colonySubgraph
 *   .query(QUERY)
 *   .toPromise()
 *   .then((result) => {
 *     console.info(result.data.events[0]);
 *   });
 * ```
 */
export const createSubgraphClient = (options?: SubgraphClientOptions) => {
  // Create a websocket client connecting to the Colony ws subgraph
  const subscriptionClient = new SubscriptionClient(
    options?.endpointWs || DEFAULT_ENDPOINT_WS,
    {
      reconnect: true,
    },
    WebSocket,
  );

  return createClient({
    fetch,
    url: options?.endpointHttp || DEFAULT_ENDPOINT_HTTP,
    exchanges: [
      ...defaultExchanges,
      subscriptionExchange({
        forwardSubscription: (operation) =>
          subscriptionClient.request(operation),
      }),
    ],
  });
};

// TODO: add createSubgraphClientWithSubscription (or something like that) which is basically the above and remove the subscription stuff from the above

/**
 * The `gql` interpolation function
 *
 * This is just the passed-down [`gql`](https://formidable.com/open-source/urql/docs/api/core/#gql) function from `urlq`. This function is used to parse GraphQL queries as strings and create query objects the GraphQL client can process. Please check out it's documentation to get to know more.
 */
export { gql } from '@urql/core';

export { default as ColonyGraph } from './ColonyGraph';
