/*
 * A basic subscription within the Colony Subgraph. See urql's documentation here: https://formidable.com/open-source/urql/docs/advanced/subscriptions/#one-off-subscriptions for more information
 */
import { pipe, subscribe } from 'wonka';

import { createSubgraphClient, gql } from '../../src/graph/index.js';

const colonySubgraph = createSubgraphClient();

// Get the latest DomainAddedEvents across all Colonies
const QUERY = gql`
  subscription DomainAddedEvents {
    events(
      orderDirection: desc
      orderBy: timestamp
      first: 1
      where: { name_contains: "DomainAdded" }
    ) {
      id
      address
      associatedColony {
        colonyAddress: id
      }
      name
      args
      timestamp
    }
  }
`;

console.info('Listening to new `DomainAdded` events...');
pipe(
  colonySubgraph.subscription(QUERY),
  subscribe((result) => {
    console.info(result.data.events[0]);
  }),
);
