import { createSubgraphClient, gql } from '../../src/graph/index.js';

const colonySubgraph = createSubgraphClient();

// This query fetches the latest DomainAdded event and prints all kinds of information about it
const QUERY = gql`
  query SubgraphEvents {
    events(first: 10, where: { name_contains: "DomainAdded" }) {
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

colonySubgraph
  .query(QUERY)
  .toPromise()
  .then((result) => {
    console.info(result.data.events[0]);
  });
