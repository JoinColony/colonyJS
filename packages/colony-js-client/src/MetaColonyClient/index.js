/* @flow */

import assert from 'assert';

import type BigNumber from 'bn.js';

import ContractClient from '@colony/colony-js-contract-client';
import { isValidAddress } from '@colony/colony-js-utils';
// eslint-disable-next-line max-len
import type { ContractClientConstructorArgs } from '@colony/colony-js-contract-client';

import ColonyNetworkClient from '../ColonyNetworkClient/index';
import TokenClient from '../TokenClient/index';

type Address = string;

type SkillAdded = ContractClient.Event<{
  skillId: number, // A skillId for this domain.
  parentSkillId: number, // The parent skill id.
}>;
type Mint = ContractClient.Event<{
  address: Address, // The address that initiated the mint event.
  amount: BigNumber, // Event data indicating the amount of tokens minted.
}>;

export default class MetaColonyClient extends ContractClient {
  networkClient: ColonyNetworkClient;
  token: TokenClient;

  events: {
    Mint: Mint,
    SkillAdded: SkillAdded,
  };

  /*
  Gets the colony's Authority contract address
  */
  getAuthority: MetaColonyClient.Caller<
    {},
    {
      address: Address, // The colony's Authority contract address
    },
    MetaColonyClient,
  >;
  /*
  Gets the address of the colony's official token contract.
  */
  getToken: MetaColonyClient.Caller<
    {},
    {
      address: Address, // The address of the colony's official deployed token contract
    },
    MetaColonyClient,
  >;
  /*
  Adds a global skill under a given parent SkillId. This can only be called from the Meta Colony, and only by the Meta Colony owners.
  */
  addGlobalSkill: MetaColonyClient.Sender<
    {
      parentSkillId: number, // Integer id of the parent skill.
    },
    { SkillAdded: SkillAdded },
    MetaColonyClient,
  >;
  /*
  In the case of the Colony Network, only the Meta Colony may mint new tokens.
  */
  mintTokensForColonyNetwork: MetaColonyClient.Sender<
    {
      amount: BigNumber, // Amount of new tokens to be minted.
    },
    { Mint: Mint },
    MetaColonyClient,
  >;
  /*
  Set the Colony Network fee inverse amount. This can only be called from the Meta Colony, and only by the Meta Colony owners.
  */
  setNetworkFeeInverse: MetaColonyClient.Sender<
    {
      feeInverse: number, // Integer id of the parent skill.
    },
    {},
    MetaColonyClient,
  >;

  static get defaultQuery() {
    return {
      contractName: 'IMetaColony',
    };
  }

  constructor({
    adapter,
    networkClient,
    query,
    token,
  }: {
    networkClient?: ColonyNetworkClient,
    token?: TokenClient,
  } & ContractClientConstructorArgs) {
    super({ adapter, query });

    if (!(networkClient instanceof ColonyNetworkClient))
      throw new Error(
        'A `networkClient` property must be supplied ' +
          '(an instance of `ColonyNetworkClient`)',
      );

    this.networkClient = networkClient;
    if (token) this.token = token;

    return this;
  }

  async init() {
    await super.init();

    const { address: tokenAddress } = await this.getToken.call();
    if (!(this.token instanceof TokenClient)) {
      this.token = new TokenClient({
        adapter: this.adapter,
        query: { contractAddress: tokenAddress },
      });
      await this.token.init();
    }
  }

  initializeContractMethods() {
    // XXX The SkillAdded event (and its underlying interface) are defined on
    // the network client. `MetaColonyClient.addGlobalSkill` will cause the
    // event to be logged; this workaround copies the event definition here so
    // that it can be parsed correctly.
    /* eslint-disable max-len */
    this.events.SkillAdded = this.networkClient.events.SkillAdded;
    this.contract.interface.events.SkillAdded = this.networkClient.contract.interface.events.SkillAdded;

    // XXX Similarly, the `Mint` event from the token contract need to be
    // defined here, since it is emitted from various methods.
    if (this.token) {
      this.events.Mint = this.token.events.Mint;
      this.contract.interface.events.Mint = this.token.contract.interface.events.Mint;
    }
    /* eslint-enable max-len */

    // Callers
    this.addCaller('getAuthority', {
      functionName: 'authority',
      output: [['address', 'address']],
    });
    this.addCaller('getToken', {
      output: [['address', 'address']],
    });

    // Senders
    this.addSender('addGlobalSkill', {
      input: [['parentSkillId', 'number']],
    });
    this.addSender('mintTokensForColonyNetwork', {
      input: [['amount', 'bigNumber']],
    });
  }

  async getReputation({
    skillId = 1,
    user,
  }: {
    skillId: number,
    user: Address,
  } = {}) {
    assert(Number.isFinite(skillId), 'skillId must be a number');
    assert(isValidAddress(user), 'user must be an address');

    if (this.network !== 'rinkeby')
      throw new Error(
        'Reputation is currently only supported for contracts on Rinkeby',
      );

    const response = await fetch(
      `https://colony.io/reputation/${this.network}/${
        this.contract.address
      }]/${skillId}/${user}`,
    );
    return response.json();
  }
}
