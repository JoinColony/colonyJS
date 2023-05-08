import { Client, gql } from '@urql/core';
import { DomainData, MetadataType } from '@colony/event-metadata';

import { Colony } from '../ColonyNetwork';

export interface GraphDomain extends DomainData {
  id: number;
  name: string;
  metadata: string;
}

export default class ColonyGraph {
  private colony: Colony;

  private graphClient: Client;

  /**
   * Do not instantiate manually. Use the `graph` property on a Colony to access this class
   */
  constructor(colony: Colony, graphClient: Client) {
    this.colony = colony;
    this.graphClient = graphClient;
  }

  /**
   * Fetch all teams of a Colony including their Metadata
   *
   * @deprecated - will be replaced when new Colony GraphQL server is public
   *
   * This queries the Colony graph database for all teams including their metadata. The metadata is fetched from IPFS
   */
  async getTeamsWithMetadata() {
    const query = gql`
      query Domains($colonyAddress: String!) {
        domains(where: { colonyAddress: $colonyAddress }) {
          id: domainChainId
          name
          metadata
        }
      }
    `;
    const colonyAddress = this.colony.address.toLowerCase();
    const result = await this.graphClient
      .query(query, { colonyAddress })
      .toPromise();
    if (result && result.data) {
      const metadataPromises = result.data.domains.map(
        (domain: GraphDomain) => {
          if (!domain.metadata) {
            return Promise.resolve({});
          }
          return this.colony.colonyNetwork.ipfs.getMetadata(
            domain.metadata,
            MetadataType.Domain,
          );
        },
      );
      const metadata = await Promise.all(metadataPromises);
      return result.data.domains.map((domain: GraphDomain, idx: number) => ({
        ...domain,
        ...metadata[idx],
        id: parseInt(domain.id as unknown as string, 10),
      })) as GraphDomain[];
    }

    return null;
  }
}
