/* @flow */

import BigNumber from 'bn.js';

import ContractClient from '@colony/colony-js-contract-client';

type Address = string;
type AnyAddress = string;

type TokenLocked = ContractClient.Event<{
  token: AnyAddress, // The address of the token contract that was locked.
  lockCount: BigNumber, // The address of the token contract that was assigned.
}>;
type UserTokenDeposited = ContractClient.Event<{
  token: AnyAddress, // The address of the token contract receiving the deposit.
  user: Address, // The address of the user that deposited tokens.
  amount: BigNumber, // The amount of tokens that were deposited.
  timestamp: Date, // The timestamp when the tokens were deposited.
}>;
type UserTokenUnlocked = ContractClient.Event<{
  token: AnyAddress, // The address of the token contract that was unlocked.
  user: Address, // The address of the user that the tokens were unlocked for.
  lockId: number, // The ID of the lock that the was set for the user.
}>;
type UserTokenWithdrawn = ContractClient.Event<{
  token: AnyAddress, // The address of the token contract from which tokens were withdrawn.
  user: Address, // The address of the user that withdrew tokens.
  amount: BigNumber, // The amount of tokens that were withdrawn.
}>;

export default class TokenLockingClient extends ContractClient {
  events: {
    TokenLocked: TokenLocked,
    UserTokenDeposited: UserTokenDeposited,
    UserTokenUnlocked: UserTokenUnlocked,
    UserTokenWithdrawn: UserTokenWithdrawn,
  };

  /*
  Deposit tokens. This function only be called if the tokens that the user is attempting to deposit are not locked and if the user has allowed the token locking contract to transfer the tokens.
  */
  deposit: TokenLockingClient.Sender<
    {
      token: AnyAddress, // The address of the token contract (an empty address if Ether).
      amount: BigNumber, // The amount of tokens that will be deposited.
    },
    {
      UserTokenDeposited: UserTokenDeposited,
    },
    TokenLockingClient,
    {
      contract: 'TokenLocking.sol',
      interface: 'ITokenLocking.sol',
      version: 'glider',
    },
  >;

  /*
  Get the total number of locked tokens.
  */
  getTotalLockCount: TokenLockingClient.Caller<
    {
      token: AnyAddress, // The address of the token contract (an empty address if Ether).
    },
    {
      count: number, // The total number of locked tokens in the colony.
    },
    TokenLockingClient,
    {
      contract: 'TokenLocking.sol',
      interface: 'ITokenLocking.sol',
      version: 'glider',
    },
  >;

  /*
  Get the total number of locked tokens for a given user.
  */
  getUserLock: TokenLockingClient.Caller<
    {
      token: AnyAddress, // The address of the token contract (an empty address if Ether).
      user: Address, // The address of the user.
    },
    {
      lockCount: Number, // The user's lock count for the given token.
      amount: BigNumber, // The user's deposited amount of locked tokens.
      timestamp: Date, // The timestamp of deposit.
    },
    TokenLockingClient,
    {
      contract: 'TokenLocking.sol',
      interface: 'ITokenLocking.sol',
      version: 'glider',
    },
  >;

  /*
  Lock all tokens for a given token contract.
  */
  lockToken: TokenLockingClient.Sender<
    {
      token: AnyAddress, // The address of the token contract (an empty address if Ether).
    },
    {
      TokenLocked: TokenLocked,
    },
    TokenLockingClient,
    {
      contract: 'TokenLocking.sol',
      interface: 'ITokenLocking.sol',
      version: 'glider',
    },
  >;

  /*
  Increment the token lock counter. This method allows users to waive reward payouts for past reward payout cycles, unlocking the tokens that were locked in previous reward payout cycles.
  */
  incrementLockCounterTo: TokenLockingClient.Sender<
    {
      token: AnyAddress, // The address of the token contract (an empty address if Ether).
      lockId: number, // The ID of the lock count that will be set.
    },
    {},
    TokenLockingClient,
    {
      contract: 'TokenLocking.sol',
      interface: 'ITokenLocking.sol',
      version: 'glider',
    },
  >;

  /*
  Unlock all tokens for a user on a given token contract.
  */
  unlockTokenForUser: TokenLockingClient.Sender<
    {
      token: AnyAddress, // The address of the token contract (an empty address if Ether).
      user: Address, // The address of the user.
      lockId: number, // The ID of the lock count that will be set.
    },
    {
      UserTokenUnlocked: UserTokenUnlocked,
    },
    TokenLockingClient,
    {
      contract: 'TokenLocking.sol',
      interface: 'ITokenLocking.sol',
      version: 'glider',
    },
  >;

  /*
  Withdraw tokens. This function only be called if the tokens that the user is attempting to withdraw are not locked.
  */
  withdraw: TokenLockingClient.Sender<
    {
      token: AnyAddress, // The address of the token contract (an empty address if Ether).
      amount: BigNumber, // The amount of tokens that will be deposited.
    },
    {
      UserTokenWithdrawn: UserTokenWithdrawn,
    },
    TokenLockingClient,
    {
      contract: 'TokenLocking.sol',
      interface: 'ITokenLocking.sol',
      version: 'glider',
    },
  >;

  static get defaultQuery() {
    return {
      contractName: 'ITokenLocking',
    };
  }

  initializeContractMethods() {
    // Callers
    this.addCaller('getTotalLockCount', {
      input: [['token', 'anyAddress']],
      output: [['count', 'number']],
    });
    this.addCaller('getUserLock', {
      input: [['token', 'anyAddress'], ['user', 'address']],
      output: [
        ['lockCount', 'number'],
        ['amount', 'bigNumber'],
        ['timestamp', 'date'],
      ],
    });

    // Events
    this.addEvent('TokenLocked', [
      ['token', 'anyAddress'],
      ['lockCount', 'bigNumber'],
    ]);
    this.addEvent('UserTokenDeposited', [
      ['token', 'anyAddress'],
      ['user', 'address'],
      ['amount', 'bigNumber'],
      ['timestamp', 'date'],
    ]);
    this.addEvent('UserTokenUnlocked', [
      ['token', 'anyAddress'],
      ['user', 'address'],
      ['lockId', 'number'],
    ]);
    this.addEvent('UserTokenWithdrawn', [
      ['token', 'anyAddress'],
      ['user', 'address'],
      ['amount', 'bigNumber'],
    ]);

    // Senders
    this.addSender('deposit', {
      input: [['token', 'anyAddress'], ['amount', 'bigNumber']],
    });
    this.addSender('incrementLockCounterTo', {
      input: [['token', 'anyAddress'], ['lockId', 'number']],
    });
    this.addSender('lockToken', {
      input: [['token', 'anyAddress']],
    });
    this.addSender('unlockTokenForUser', {
      input: [
        ['token', 'anyAddress'],
        ['user', 'address'],
        ['lockId', 'number'],
      ],
    });
    this.addSender('withdraw', {
      input: [['token', 'anyAddress'], ['amount', 'bigNumber']],
    });
  }
}
