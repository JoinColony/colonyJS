/* @flow */

import BigNumber from 'bn.js';

import ContractClient from '@colony/colony-js-contract-client';

type Address = string;
type TokenAddress = string;

type TokenLocked = ContractClient.Event<{
  token: TokenAddress, // The address of the token contract that was locked.
  lockCount: BigNumber, // The address of the token contract that was assigned.
}>;
type UserTokenDeposited = ContractClient.Event<{
  token: TokenAddress, // The address of the token contract receiving the deposit.
  user: Address, // The address of the user that deposited tokens.
  amount: BigNumber, // The amount of tokens that were deposited.
  timestamp: Date, // The timestamp when the tokens were deposited.
}>;
type UserTokenUnlocked = ContractClient.Event<{
  token: TokenAddress, // The address of the token contract that was unlocked.
  user: Address, // The address of the user that the tokens were unlocked for.
  lockId: number, // The ID of the lock that the was set for the user.
}>;
type UserTokenWithdrawn = ContractClient.Event<{
  token: TokenAddress, // The address of the token contract from which tokens were withdrawn.
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
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
      amount: BigNumber, // The amount of tokens that will be deposited.
    },
    {
      UserTokenDeposited: UserTokenDeposited,
    },
    TokenLockingClient,
    {
      contract: 'TokenLocking.sol',
      interface: 'ITokenLocking.sol',
      version: '15397d7aa99208b6fd916373aac9acb93596a9d7',
    },
  >;
  /*
  Get the total number of locked tokens.
  */
  getTotalLockCount: TokenLockingClient.Caller<
    {
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
    },
    {
      count: number, // The total number of locked tokens in the colony.
    },
    TokenLockingClient,
    {
      contract: 'TokenLocking.sol',
      interface: 'ITokenLocking.sol',
      version: '15397d7aa99208b6fd916373aac9acb93596a9d7',
    },
  >;
  /*
  Get the total number of locked tokens for a given user.
  */
  getUserLock: TokenLockingClient.Caller<
    {
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
      user: Address, // The address of the user.
    },
    {
      count: BigNumber, // The total number of locked tokens.
    },
    TokenLockingClient,
    {
      contract: 'TokenLocking.sol',
      interface: 'ITokenLocking.sol',
      version: '15397d7aa99208b6fd916373aac9acb93596a9d7',
    },
  >;
  /*
  Lock all tokens for a given token contract.
  */
  lockToken: TokenLockingClient.Sender<
    {
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
    },
    {
      TokenLocked: TokenLocked,
    },
    TokenLockingClient,
    {
      contract: 'TokenLocking.sol',
      interface: 'ITokenLocking.sol',
      version: '15397d7aa99208b6fd916373aac9acb93596a9d7',
    },
  >;
  /*
  Increment the token lock counter. This method allows users to waive reward payouts for past reward payout cycles, unlocking the tokens that were locked in previous reward payout cycles.
  */
  incrementLockCounterTo: TokenLockingClient.Sender<
    {
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
      lockId: number, // The ID of the lock count that will be set.
    },
    {},
    TokenLockingClient,
    {
      contract: 'TokenLocking.sol',
      interface: 'ITokenLocking.sol',
      version: '15397d7aa99208b6fd916373aac9acb93596a9d7',
    },
  >;
  /*
  Unlock all tokens for a user on a given token contract.
  */
  unlockTokenForUser: TokenLockingClient.Sender<
    {
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
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
      version: '15397d7aa99208b6fd916373aac9acb93596a9d7',
    },
  >;
  /*
  Withdraw tokens. This function only be called if the tokens that the user is attempting to withdraw are not locked.
  */
  withdraw: TokenLockingClient.Sender<
    {
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
      amount: BigNumber, // The amount of tokens that will be deposited.
    },
    {
      UserTokenWithdrawn: UserTokenWithdrawn,
    },
    TokenLockingClient,
    {
      contract: 'TokenLocking.sol',
      interface: 'ITokenLocking.sol',
      version: '15397d7aa99208b6fd916373aac9acb93596a9d7',
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
      input: [['token', 'tokenAddress']],
      output: [['count', 'number']],
    });
    this.addCaller('getUserLock', {
      input: [['token', 'tokenAddress'], ['user', 'address']],
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
      ['amount', 'bigNumber'],
      ['timestamp', 'date'],
    ]);
    this.addEvent('UserTokenUnlocked', [
      ['token', 'tokenAddress'],
      ['user', 'address'],
      ['lockId', 'number'],
    ]);
    this.addEvent('UserTokenWithdrawn', [
      ['token', 'tokenAddress'],
      ['user', 'address'],
      ['amount', 'bigNumber'],
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
        ['lockId', 'number'],
      ],
    });
    this.addSender('withdraw', {
      input: [['token', 'tokenAddress'], ['amount', 'bigNumber']],
    });
  }
}
