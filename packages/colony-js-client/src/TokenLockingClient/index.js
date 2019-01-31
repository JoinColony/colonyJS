/* @flow */

import BigNumber from 'bn.js';

import ContractClient from '@colony/colony-js-contract-client';
// eslint-disable-next-line max-len
import type { ContractClientConstructorArgs } from '@colony/colony-js-contract-client';

import ColonyNetworkClient from '../ColonyNetworkClient/index';

type Address = string;
type TokenAddress = string;

type TokenLocked = ContractClient.Event<{
  token: TokenAddress, // The address of the token contract that was locked.
  lockCount: BigNumber, // The address of the token contract that was assigned.
}>;
type UserTokenDeposited = ContractClient.Event<{
  token: TokenAddress, // The address of the token contract receiving the deposit.
  user: Address, // The address of the user that deposited tokens.
}>;
type UserTokenUnlocked = ContractClient.Event<{
  token: TokenAddress, // The address of the token contract that was unlocked.
  user: Address, // The address of the user that the tokens were unlocked for.
  lockId: number, // The numeric ID of the lock that the was set for the user.
}>;
type UserTokenWithdrawn = ContractClient.Event<{
  token: TokenAddress, // The address of the token contract from which tokens were withdrawn.
  user: Address, // The address of the user that withdrew tokens.
}>;

export default class ColonyClient extends ContractClient {
  networkClient: ColonyNetworkClient;

  events: {
    TokenLocked: TokenLocked,
    UserTokenDeposited: UserTokenDeposited,
    UserTokenUnlocked: UserTokenUnlocked,
    UserTokenWithdrawn: UserTokenWithdrawn,
  };

  /*
  Deposit tokens. This function only be called if the tokens that the user is attempting to deposit are not locked and if the user has allowed the token locking contract to transfer the tokens.
  */
  deposit: ColonyClient.Sender<
    {
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
      amount: BigNumber, // The amount of tokens that will be deposited.
    },
    {
      UserTokenDeposited: UserTokenDeposited,
    },
    ColonyClient,
    {
      contract: 'TokenLocking.sol',
      interface: 'ITokenLocking.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Get the total number of locked tokens.
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
  Get the total number of locked tokens for a given user.
  */
  getUserLock: ColonyClient.Caller<
    {
      user: Address, // The address of the user.
    },
    {
      count: BigNumber, // The total number of locked tokens.
    },
    ColonyClient,
    {
      contract: 'TokenLocking.sol',
      interface: 'ITokenLocking.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Lock all tokens for a given token contract.
  */
  lockToken: ColonyClient.Sender<
    {
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
    },
    {
      TokenLocked: TokenLocked,
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
  /*
  Unlock all tokens for a user on a given token contract.
  */
  unlockTokenForUser: ColonyClient.Sender<
    {
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
      user: Address, // The address of the user.
      lockId: number, // The numeric ID of the lock count that will be set.
    },
    {
      UserTokenUnlocked: UserTokenUnlocked,
    },
    ColonyClient,
    {
      contract: 'TokenLocking.sol',
      interface: 'ITokenLocking.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Withdraw tokens. This function only be called if the tokens that the user is attempting to withdraw are not locked.
  */
  withdraw: ColonyClient.Sender<
    {
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
      amount: BigNumber, // The amount of tokens that will be deposited.
    },
    {
      UserTokenWithdrawn: UserTokenWithdrawn,
    },
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

    // Events
    this.addEvent('TokenLocked', [
      ['token', 'tokenAddress'],
      ['lockCount', 'bigNumber'],
    ]);
    this.addEvent('UserTokenDeposited', [
      ['token', 'tokenAddress'],
      ['user', 'address'],
    ]);
    this.addEvent('UserTokenUnlocked', [
      ['token', 'tokenAddress'],
      ['user', 'address'],
      ['lockId', 'number'],
    ]);
    this.addEvent('UserTokenWithdrawn', [
      ['token', 'tokenAddress'],
      ['user', 'address'],
    ]);

    // Senders
    this.addSender('deposit', {
      input: [['token', 'tokenAddress'], ['amount', 'bigNumber']],
    });
    this.addSender('incrementLockCounterTo', {
      input: [['token', 'tokenAddress'], ['lockId', 'number']],
    });
    this.addSender('lockToken', {
      input: [['token', 'tokenAddress']],
    });
    this.addSender('unlockTokenForUser', {
      input: [
        ['token', 'tokenAddress'],
        ['user', 'address'],
        ['lockCount', 'number'],
      ],
    });
    this.addSender('withdraw', {
      input: [['token', 'tokenAddress'], ['amount', 'bigNumber']],
    });
  }
}
