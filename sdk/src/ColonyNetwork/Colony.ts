import {
  ColonyClientV8,
  ColonyNetworkClient,
  SignerOrProvider,
  Id,
} from '@colony/colony-js';

import type {
  DomainAddedEventObject,
  FundingPotAddedEventObject,
} from '@colony/colony-js/extras';
import type { BigNumberish } from 'ethers';

import { extractEvent } from '../utils';

type SupportedColonyClient = ColonyClientV8;

export class Colony {
  /** The currently supported Colony version. If a Colony is not on this version it has to be upgraded.
   * If this is not an option, ColonySDK might throw errors at certain points. Usage of ColonyJS is advised in these cases
   */
  static SupportedVersion: 8 = 8;

  private colonyClient: SupportedColonyClient;

  private networkClient: ColonyNetworkClient;

  private signerOrProvider: SignerOrProvider;

  /**
   * Creates a new instance to connect to an existing Colony
   * @internal
   *
   * @remarks
   * Do not use this method directly but use [[ColonyNetwork.getColony]]
   *
   * @param colonyClient A ColonyJS `ColonyClient` in the latest supported version
   * @returns A Colony abstaction instance
   */
  constructor(colonyClient: SupportedColonyClient) {
    this.colonyClient = colonyClient;
    this.networkClient = colonyClient.networkClient;
    this.signerOrProvider = colonyClient.signer || colonyClient.provider;
  }

  /**
   * Get a token balance for a specific token and team. Defaults to the Colony's native token and the `Root` team.
   *
   * @remarks
   * The function will automatically figure out the corresponding pot for the given domain, as this is what's usually expected.
   *
   * @example
   * Get the xDAI balance of the team number 2
   * ```typescript
   * import { constants, utils } from 'ethers';
   * // The `AddressZero` means ETH on mainnet and xDAI on Gnosis chain
   * const balance = await colony.getBalance(constants.AddressZero, 2);
   * // This will format the balance as a string in eth and not wei (i.e. 1.0 vs. 1000000000000000000)
   * console.info(utils.formatEther(balance));
   * ```
   *
   * @param tokenAddress The address of the token to get the balance for. Default is the Colony's native token
   * @param teamId The teamId (domainId) of the team to get the balance for. Default is the `Root` team
   * @returns A token balance in [wei](https://gwei.io/)
   */
  async getBalance(tokenAddress?: string, teamId?: BigNumberish) {
    let potId: BigNumberish = Id.RootPot;
    if (teamId) {
      const { fundingPotId } = await this.colonyClient.getDomain(teamId);
      potId = fundingPotId;
    }
    const token = tokenAddress || this.colonyClient.tokenClient.address;
    return this.colonyClient.getFundingPotBalance(potId, token);
  }

  /**
   * Create a team within a Colony
   *
   * @remarks
   * Currently you can only add domains within the `Root` domain. This restriction will be lifted soon
   *
   *
   * @returns A tupel of event data and contract receipt
   *
   * **Event data**
   * | Property | Description |
   * | :------ | :------ |
   * | `domainId` | integer domain id of the created team |
   * | `fundingPotId` | integer id of the corresponding funding pot |
   */
  async createTeam() {
    const tx = await this.colonyClient['addDomainWithProofs(uint256)'](
      Id.RootDomain,
    );
    const receipt = await tx.wait();

    const data = {
      ...extractEvent<DomainAddedEventObject>('DomainAdded', receipt),
      ...extractEvent<FundingPotAddedEventObject>('FundingPotAdded', receipt),
    };

    return [data, receipt] as [typeof data, typeof receipt];
  }
}
