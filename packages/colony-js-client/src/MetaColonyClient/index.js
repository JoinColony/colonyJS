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

type Mint = ContractClient.Event<{
  address: Address, // The address that initiated the mint event.
  amount: BigNumber, // The amount of tokens that were minted.
}>;
type SkillAdded = ContractClient.Event<{
  skillId: number, // The numeric ID of the skill that was added.
  parentSkillId: number, // The numeric ID of the parent skill.
}>;

export default class MetaColonyClient extends ContractClient {
  networkClient: ColonyNetworkClient;
  token: TokenClient;

  events: {
    Mint: Mint,
    SkillAdded: SkillAdded,
  };

  /*
  Add a new global skill to the skills tree. This can only be called from the Meta Colony, and only by the user assigned the `FOUNDER` role.
  */
  addGlobalSkill: MetaColonyClient.Sender<
    {
      parentSkillId: number, // The numeric ID of the skill under which the new skill will be added.
    },
    {
      SkillAdded: SkillAdded,
    },
    MetaColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IMetaColony.sol',
      version: 0,
    },
  >;
  /*
  Get the authority contract address associated with the colony.
  */
  getAuthority: MetaColonyClient.Caller<
    {},
    {
      address: Address, // The address of the authority contract associated with the colony.
    },
    MetaColonyClient,
    {
      name: 'authority',
      contract: 'dappsys/auth.sol',
      interface: 'IColony.sol',
      version: 0,
    },
  >;
  /*
  Get the address of the ERC20 token contract that is the native token assigned to the Meta Colony.
  */
  getToken: MetaColonyClient.Caller<
    {},
    {
      address: Address, // The address of the ERC20 token contract.
    },
    MetaColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: 0,
    },
  >;
  /*
  Mint tokens for the Colony Network. This can only be called from the Meta Colony, and only by the user assigned the `FOUNDER` role.
  */
  mintTokensForColonyNetwork: MetaColonyClient.Sender<
    {
      amount: BigNumber, // The amount of new tokens that will be minted.
    },
    {
      Mint: Mint,
    },
    MetaColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IMetaColony.sol',
      version: 0,
    },
  >;
  /*
  Set the inverse amount of the reward. If the fee is 1% (or 0.01), the inverse amount will be 100. This can only be called from the Meta Colony, and only by the user assigned the `FOUNDER` role.
  */
  setNetworkFeeInverse: MetaColonyClient.Sender<
    {
      feeInverse: number, // The inverse amount that will be set.
    },
    {},
    MetaColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IMetaColony.sol',
      version: 0,
    },
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
