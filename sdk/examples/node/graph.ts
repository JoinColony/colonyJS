import { gql } from '@urql/core';

import { client } from '../../src/graph';

const QUERY = gql`
  query SubgraphEvents {
    events(orderDirection: asc, where: { name_contains: "Added" }) {
      id
      address
      associatedColony {
        colonyAddress: id
        id: colonyChainId
        token {
          address: id
          decimals
          symbol
        }
      }
      transaction {
        hash: id
        block {
          id
          timestamp
        }
      }
      name
      args
      timestamp
    }
  }
`;

client
  .query(QUERY)
  .toPromise()
  .then((result) => {
    console.info(result.data.events[0]);
  });
