import { BigNumber, type BigNumberish, constants } from 'ethers';

import { Network, ReputationOracleEndpoint } from '../constants.js';
import { type CommonColony, type CommonNetwork } from './types.js';

interface ReputationClientOptions {
  customEndpointUrl?: string;
  network?: Network;
}

interface ReputationResponse {
  key: string;
  value: string;
  reputationAmount: string;
}

interface ReputationResponseWithProofs extends ReputationResponse {
  branchMask: string;
  siblings: string[];
}

interface ReputationAcrossDomainsResponse {
  reputations: {
    skill_id: number;
    reputationAmount: string;
  }[];
}

interface MembersReputationResponse {
  addresses: string[];
}

const { AddressZero } = constants;

export class ReputationClient {
  static async fetchReputation<T>(url: string) {
    const response = await fetch(url);
    if (response.ok) {
      return response.json() as T;
    }
    throw new Error(`No reputation entry found for query ${url}`);
  }

  private colony: CommonColony;

  private network: CommonNetwork;

  private endpointUrl: string;

  constructor(
    network: CommonNetwork,
    colony: CommonColony,
    config?: ReputationClientOptions,
  ) {
    this.colony = colony;
    this.network = network;

    const networkName = config?.network || Network.ArbitrumOne;
    this.endpointUrl =
      config?.customEndpointUrl || ReputationOracleEndpoint[networkName];
  }

  private async getRootHash(customRootHash?: string) {
    const rootHash =
      customRootHash || (await this.network.getReputationRootHash());
    if (BigNumber.from(rootHash).isZero()) {
      throw new Error('No reputation for given rootHash found (yet)');
    }
    return rootHash;
  }

  private async getBaseEndpoint(customRootHash?: string) {
    const rootHash = await this.getRootHash(customRootHash);
    return `${this.endpointUrl}/${rootHash}/${this.colony.address}`;
  }

  /**
   * Get reputation with no proofs
   *
   * Simply fetches the reputation for a user and a certain skillId.
   * Get the skillId for a domain first to check reputation in a domain.
   *
   * @example
   * ```typescript
   * const reputation = new ReputationClient(networkContract, colonyContract);
   * // Immediately executing async function
   * (async function() {
   *   // Use Id.RootDomain as domainId for Colony-wide reputation
   *   const { skillId } = await colonyContract.getDomain(domainId);
   *   const { reputationAmount } = reputation.getReputation(skillId, walletAddress);
   * })();
   * ```
   *
   * @param skillId - Skill (for corresponding domain) to check reputation in
   * @param address - User address to check reputation for
   * @param customRootHash - Optionally define a root hash in the reputation tree (historic point in time)
   *
   * @returns Reputation data
   */
  async getReputation(
    skillId: BigNumberish,
    address: string,
    customRootHash?: string,
  ) {
    const baseEndpoint = await this.getBaseEndpoint(customRootHash);
    const skillIdString = BigNumber.from(skillId || 0).toString();
    const url = `${baseEndpoint}/${skillIdString}/${address}/noProof`;
    const result = await ReputationClient.fetchReputation<ReputationResponse>(
      url,
    );
    return {
      ...result,
      reputationAmount: BigNumber.from(result.reputationAmount || 0),
    };
  }

  /**
   * Get reputation with proofs (e.g. to check against on-chain data)
   *
   * @param skillId - Skill (for corresponding domain) to check reputation in
   * @param address - User address to check reputation for
   * @param customRootHash - Optionally define a root hash in the reputation tree (historic point in time)
   *
   * @returns Reputation data
   */
  async getReputationWithProofs(
    skillId: BigNumberish,
    address: string,
    customRootHash?: string,
  ) {
    const baseEndpoint = await this.getBaseEndpoint(customRootHash);
    const skillIdString = BigNumber.from(skillId || 0).toString();
    const url = `${baseEndpoint}/${skillIdString}/${address}`;
    const result =
      await ReputationClient.fetchReputation<ReputationResponseWithProofs>(url);
    return {
      ...result,
      reputationAmount: BigNumber.from(result.reputationAmount || 0),
    };
  }

  /**
   * Get reputation for an address across all Colony domains
   *
   * @param address - User address to check reputation for
   * @param customRootHash - Optionally define a root hash in the reputation tree (historic point in time)
   *
   * @returns Reputation data
   */
  async getReputationAcrossDomains(address: string, customRootHash?: string) {
    const baseEndpoint = await this.getBaseEndpoint(customRootHash);
    const url = `${baseEndpoint}/${address}/all`;
    const result =
      await ReputationClient.fetchReputation<ReputationAcrossDomainsResponse>(
        url,
      );

    const domainCount = await this.colony.getDomainCount();
    const allColonyDomains =
      (await Promise.all(
        Array.from(new Array(domainCount.toNumber())).map(async (_, index) => {
          const domainId = index + 1;
          const domain = await this.colony.getDomain(domainId);
          return {
            domainId,
            skillId: domain.skillId.toNumber(),
          };
        }),
      )) || [];

    return allColonyDomains.map((domain) => {
      let reputationAmount;
      const skillAssignedToDomain = (result?.reputations || []).find(
        ({ skill_id: skillId }) => skillId === domain.skillId,
      );
      if (skillAssignedToDomain) {
        reputationAmount = skillAssignedToDomain?.reputationAmount;
      }
      return {
        ...domain,
        reputationAmount: reputationAmount
          ? BigNumber.from(reputationAmount)
          : undefined,
      };
    });
  }

  /**
   * Get a list of all users who have reputation in a team
   *
   * @param skillId - Skill (for corresponding domain) to check reputation in
   * @param customRootHash - Optionally define a root hash in the reputation tree (historic point in time)
   *
   * @returns Reputation data
   */
  async getMembersReputation(skillId: BigNumberish, customRootHash?: string) {
    const baseEndpoint = await this.getBaseEndpoint(customRootHash);
    const skillIdString = BigNumber.from(skillId || 0).toString();
    const url = `${baseEndpoint}/${skillIdString}`;
    return ReputationClient.fetchReputation<MembersReputationResponse>(url);
  }

  /**
   * Get the total amount of reputation points that currently are in a team
   *
   * @param skillId - Skill (for corresponding domain) to check reputation in
   * @param customRootHash - Optionally define a root hash in the reputation tree (historic point in time)
   *
   * @returns Reputation data
   */
  async getTotalReputation(skillId: BigNumberish, customRootHash?: string) {
    const baseEndpoint = await this.getBaseEndpoint(customRootHash);
    const skillIdString = BigNumber.from(skillId || 0).toString();
    const url = `${baseEndpoint}/${skillIdString}/${AddressZero}/noProof`;
    const result = await ReputationClient.fetchReputation<ReputationResponse>(
      url,
    );
    return {
      ...result,
      reputationAmount: BigNumber.from(result.reputationAmount || 0),
    };
  }

  /**
   * Get the reputation fraction for a user address within a team in the Colony
   *
   * 1.000 = user has 100% of the reputation
   * 0.050 = user has 5% of the reputation
   *
   * @param skillId - Skill (for corresponding domain) to check reputation in
   * @param customRootHash - Optionally define a root hash in the reputation tree (historic point in time)
   *
   * @returns Fraction of reputation a user has in a team
   */
  async getReputationFraction(
    skillId: BigNumberish,
    address: string,
    customRootHash?: string,
    decimalPoints = 3,
  ) {
    const { reputationAmount } = await this.getReputation(
      skillId,
      address,
      customRootHash,
    );
    const { reputationAmount: totalReputation } = await this.getTotalReputation(
      skillId,
      customRootHash,
    );

    const repAmountScaled = reputationAmount.mul(
      BigNumber.from(10).pow(decimalPoints),
    );

    return (
      repAmountScaled.div(totalReputation).toNumber() / 10 ** decimalPoints
    );
  }
}
