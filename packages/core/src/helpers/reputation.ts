import fetch from 'cross-fetch';
import { BigNumber, BigNumberish } from 'ethers';

import { Network, ReputationOracleEndpoint } from '../constants';
import { CommonColony, CommonNetwork } from './types';

interface ReputationClientOptions {
  customEndpointUrl?: string;
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
    networkId: Network,
    config?: ReputationClientOptions,
  ) {
    this.colony = colony;
    this.network = network;

    this.endpointUrl =
      config?.customEndpointUrl || ReputationOracleEndpoint[networkId];
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

  async getMembersReputation(skillId: BigNumberish, customRootHash?: string) {
    const baseEndpoint = await this.getBaseEndpoint(customRootHash);
    const skillIdString = BigNumber.from(skillId || 0).toString();
    const url = `${baseEndpoint}/${skillIdString}`;
    return ReputationClient.fetchReputation<MembersReputationResponse>(url);
  }
}
