/* @flow */

import ContractClient from '@colony/colony-js-contract-client';
// eslint-disable-next-line max-len
import type { ContractClientConstructorArgs } from '@colony/colony-js-contract-client';
import ColonyNetworkClient from '../ColonyNetworkClient/index';

type Address = string;
type TokenAddress = string;

export default class ColonyClient extends ContractClient {
  networkClient: ColonyNetworkClient;
  events: {};

  /*
  Get the total number of locked tokens in the colony.
  */
  getTotalLockCount: ColonyClient.Caller<
    {},
    {
      count: number, // The total number of locked tokens in the colony.
    },
    ColonyClient,
    {
      contract: 'TokenLocking.sol',
      interface: 'ITokenLocking.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Get the total number of locked tokens for a given user in the colony.
  */
  getUserLock: ColonyClient.Caller<
    {
      user: Address, // The address of the user.
    },
    {
      count: number, // The total number of locked tokens.
    },
    ColonyClient,
    {
      contract: 'TokenLocking.sol',
      interface: 'ITokenLocking.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Increment the token lock counter. This method allows users to waive reward payouts for past reward payout cycles, unlocking the tokens that were locked in previous reward payout cycles.
  */
  incrementLockCounterTo: ColonyClient.Sender<
    {
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
      lockId: number, // The numeric ID of the lock count that will be set.
    },
    {},
    ColonyClient,
    {
      contract: 'TokenLocking.sol',
      interface: 'ITokenLocking.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;

  static get defaultQuery() {
    return {
      contractName: 'ITokenLocking',
    };
  }

  constructor({
    adapter,
    networkClient,
    query,
  }: {
    networkClient?: ColonyNetworkClient,
  } & ContractClientConstructorArgs) {
    super({ adapter, query });
    if (!(networkClient instanceof ColonyNetworkClient))
      throw new Error(
        'A `networkClient` property must be supplied ' +
          '(an instance of `ColonyNetworkClient`)',
      );
    this.networkClient = networkClient;
    return this;
  }

  async init() {
    await super.init();
    return this;
  }

  initializeContractMethods() {
    // Callers
    this.addCaller('getTotalLockCount', {
      output: [['count', 'number']],
    });
    this.addCaller('getUserLock', {
      input: [['user', 'address']],
      output: [['count', 'number']],
    });

    // Senders
    this.addSender('incrementLockCounterTo', {
      input: [['token', 'tokenAddress'], ['lockId', 'number']],
    });
  }
}
