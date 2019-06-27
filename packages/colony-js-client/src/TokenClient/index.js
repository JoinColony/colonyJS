/* @flow */
/* eslint-disable import/no-cycle */

import BigNumber from 'bn.js';
import ContractClient from '@colony/colony-js-contract-client';
import CreateTokenAuthority from './senders/CreateTokenAuthority';
import GetTokenInfo from './callers/GetTokenInfo';

type Address = string;

type Approval = ContractClient.Event<{
  owner: Address, // The address that approved the allowance (the token `owner`).
  spender: Address, // The address that was approved for the allowance (the token `spender`).
  value: BigNumber, // The amount of tokens that were approved (the amount `allowed`).
}>;
type Burn = ContractClient.Event<{
  address: Address, // The address from which the tokens were burned.
  amount: BigNumber, // The amount of tokens that were burned.
}>;
type LogSetAuthority = ContractClient.Event<{
  authority: Address, // The address that was assigned an authority role.
}>;
type LogSetOwner = ContractClient.Event<{
  owner: Address, // The address that was assigned as the new owner.
}>;
type Mint = ContractClient.Event<{
  address: Address, // The address to which the minted tokens were sent.
  amount: BigNumber, // The amount of tokens that were minted.
}>;
type Transfer = ContractClient.Event<{
  from: Address, // The address of the account that sent tokens.
  to: Address, // The address of the account that received tokens.
  value: BigNumber, // The amount of tokens that were transferred.
}>;

export default class TokenClient extends ContractClient {
  events: {
    Approval: Approval,
    Burn: Burn,
    LogSetAuthority: LogSetAuthority,
    LogSetOwner: LogSetOwner,
    Mint: Mint,
    Transfer: Transfer,
  };

  /*
  Approve a token allowance. This function can only be called by the token `owner`. The allowance is the amount of tokens that the `spender` is authorized to transfer using the `transferFrom` function.
  */
  approve: TokenClient.Sender<
    {
      address: Address, // The address that will be approved for the allowance (the token `spender`).
      amount: BigNumber, // The amount of tokens that will be approved (the amount `allowed`).
    },
    {
      Approval: Approval,
    },
    TokenClient,
    {
      contract: 'base.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361',
      version: 'glider',
    },
  >;

  /*
  Burn tokens. This function can only be called by the token owner or an address with authority.
  */
  burn: TokenClient.Sender<
    {
      address: Address, // The address from which the tokens will be burned.
      amount: BigNumber, // The amount of tokens that will be burned.
    },
    {
      Burn: Burn,
    },
    TokenClient,
    {
      contract: 'Token.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/JoinColony/colonyToken/blob/8e5139586018fbaa53e9cf971e040b3ae2a4bb92/contracts',
      version: 'glider',
    },
  >;

  /*
  Deploy a TokenAuthority contract which can then be use to control the transfer of a token.
  */
  createTokenAuthority: TokenClient.Sender<
    {
      allowedToTransfer: Address[], // Additional addresses which are allowed to transfer the token while locked.
      colonyAddress: Address, // The address of the colony which should be allowed control of the token.
      tokenAddress: Address, // The address of the token for which this contract will operate.
    },
    {},
    TokenClient,
    {
      contract: 'Token.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/JoinColony/colonyToken/blob/8e5139586018fbaa53e9cf971e040b3ae2a4bb92/contracts',
      version: 'glider',
    },
  >;

  /*
  Get the token allowance of an address. The allowance is the amount of tokens that the `spender` is authorized to transfer using the `transferFrom` function.
  */
  getAllowance: TokenClient.Caller<
    {
      sourceAddress: Address, // The address that approved the allowance (the token `owner`).
      address: Address, // The address that was approved for the allowance (the token `spender`).
    },
    {
      amount: BigNumber, // The amount of tokens that were approved (the amount `allowed`).
    },
    TokenClient,
    {
      function: 'allowance',
      contract: 'base.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361',
      version: 'glider',
    },
  >;

  /*
  Get the the token balance of an address.
  */
  getBalanceOf: TokenClient.Caller<
    {
      sourceAddress: Address, // The address that will be checked.
    },
    {
      amount: BigNumber, // The balance of tokens for the address.
    },
    TokenClient,
    {
      function: 'balanceOf',
      contract: 'base.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361',
      version: 'glider',
    },
  >;

  /*
  Get information about the token.
  */
  getTokenInfo: TokenClient.Caller<
    {},
    {
      name: string, // The name of the token.
      symbol: string, // The symbol of the token.
      decimals: number, // The number of decimals.
    },
    TokenClient,
    {
      contract: 'Token.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/JoinColony/colonyToken/blob/8e5139586018fbaa53e9cf971e040b3ae2a4bb92/contracts',
      version: 'glider',
    },
  >;

  /*
  Get the total supply of the token.
  */
  getTotalSupply: TokenClient.Caller<
    {},
    {
      amount: BigNumber, // The total supply of the token.
    },
    TokenClient,
    {
      function: 'totalSupply',
      contract: 'base.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361',
      version: 'glider',
    },
  >;

  /*
  Get whether the token is locked.
  */
  isLocked: TokenClient.Caller<
    {},
    {
      locked: boolean, // Whether the token is locked.
    },
    TokenClient,
    {
      function: 'locked',
      contract: 'Token.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361',
      version: 'glider',
    },
  >;

  /*
  Mint new tokens. This function can only be called by the token owner or an address with authority.
  */
  mint: TokenClient.Sender<
    {
      address: Address, // The address that will receive the minted tokens.
      amount: BigNumber, // The amount of tokens that will be minted.
    },
    {
      Mint: Mint,
    },
    TokenClient,
    {
      contract: 'Token.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/JoinColony/colonyToken/blob/8e5139586018fbaa53e9cf971e040b3ae2a4bb92/contracts',
      version: 'glider',
    },
  >;

  /*
  Assign an account the token authority role within a colony.
  */
  setAuthority: TokenClient.Sender<
    {
      authority: Address, // The address that will be assigned the token authority role.
    },
    {
      LogSetAuthority: LogSetAuthority,
    },
    TokenClient,
    {
      contract: 'auth.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361',
      version: 'glider',
    },
  >;

  /*
  Set the `owner` of a token contract. This function can only be called by the current `owner` of the contract. In order to call token contract methods from within a colony, the token `owner` must be the address of the colony contract.
  */
  setOwner: TokenClient.Sender<
    {
      owner: Address, // The address that will be assigned as the new owner.
    },
    {
      LogSetOwner: LogSetOwner,
    },
    TokenClient,
    {
      contract: 'auth.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361',
      version: 'glider',
    },
  >;

  /*
  Transfer tokens from the address calling the function to another address. The current address must have a sufficient token balance.
  */
  transfer: TokenClient.Sender<
    {
      destinationAddress: Address, // The address to which tokens will be transferred.
      amount: BigNumber, // The amount of tokens that will be transferred.
    },
    {},
    TokenClient,
    {
      contract: 'base.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361',
      version: 'glider',
    },
  >;

  /*
  Transfer tokens from one address to another address. The address the tokens are transferred from must have a sufficient token balance and it must have a sufficient token allowance approved by the token owner.
  */
  transferFrom: TokenClient.Sender<
    {
      sourceAddress: Address, // The address from which tokens will be transferred.
      destinationAddress: Address, // The address to which tokens will be transferred.
      amount: BigNumber, // The amount of tokens that will be transferred.
    },
    {
      Transfer: Transfer,
    },
    TokenClient,
    {
      contract: 'base.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361',
      version: 'glider',
    },
  >;

  /*
  Unlock the token.
  */
  unlock: TokenClient.Sender<
    {},
    {},
    TokenClient,
    {
      contract: 'Token.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/JoinColony/colonyToken/blob/8e5139586018fbaa53e9cf971e040b3ae2a4bb92/contracts',
      version: 'glider',
    },
  >;

  static get defaultQuery() {
    return {
      contractName: 'Token',
    };
  }

  initializeContractMethods() {
    const amount = ['amount', 'bigNumber'];
    const sourceAddress = ['sourceAddress', 'address'];
    const destinationAddress = ['destinationAddress', 'address'];
    const address = ['address', 'address'];

    // Events
    this.addEvent('Transfer', [
      ['from', 'anyAddress'],
      ['to', 'anyAddress'],
      ['value', 'bigNumber'],
    ]);
    this.addEvent('Approval', [
      ['owner', 'anyAddress'],
      ['spender', 'anyAddress'],
      ['value', 'bigNumber'],
    ]);
    this.addEvent('Mint', [['address', 'anyAddress'], ['amount', 'bigNumber']]);
    this.addEvent('Burn', [['address', 'anyAddress'], ['amount', 'bigNumber']]);
    this.addEvent('LogSetOwner', [['owner', 'anyAddress']]);
    this.addEvent('LogSetAuthority', [['authority', 'anyAddress']]);

    // Callers
    this.getTokenInfo = new GetTokenInfo({ client: this });
    this.addCaller('getTotalSupply', {
      functionName: 'totalSupply',
      output: [amount],
    });
    this.addCaller('getBalanceOf', {
      functionName: 'balanceOf',
      input: [sourceAddress],
      output: [amount],
    });
    this.addCaller('getAllowance', {
      functionName: 'allowance',
      input: [sourceAddress, address],
      output: [amount],
    });
    this.addCaller('isLocked', {
      functionName: 'locked',
      output: [['locked', 'boolean']],
    });

    // Senders
    this.createTokenAuthority = new CreateTokenAuthority({ client: this });
    this.addSender('transfer', {
      input: [destinationAddress, amount],
    });
    this.addSender('transferFrom', {
      input: [sourceAddress, destinationAddress, amount],
    });
    this.addSender('approve', {
      input: [address, amount],
    });
    this.addSender('mint', {
      input: [address, amount],
    });
    this.addSender('burn', {
      input: [address, amount],
    });
    this.addSender('setOwner', {
      input: [['owner', 'address']],
    });
    this.addSender('setAuthority', {
      input: [['authority', 'address']],
    });
    this.addSender('unlock', {});
  }
}
