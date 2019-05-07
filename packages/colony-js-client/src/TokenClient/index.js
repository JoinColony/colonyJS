/* @flow */

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
      user: Address, // The address that will be approved for the allowance (the token `spender`).
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Burn tokens. This is a `DSToken` function that can only be called by the token `owner`. When a colony contract address is assigned as the token `owner`, this function can only be called by the user assigned the `FOUNDER` authority role.
  */
  burn: TokenClient.Sender<
    {
      user: Address, // The address from which the tokens will be burned.
      amount: BigNumber, // The amount of tokens that will be burned.
    },
    {
      Burn: Burn,
    },
    TokenClient,
    {
      contract: 'Token.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/JoinColony/colonyToken/blob/7cc7d6b5bf3e94e6d97cd65583e3da38a994753f/contracts',
      version: '8d3a50719cd51459db153006b5bd56c031e9d169',
    },
  >;
  /*
  Get the token allowance of an address. The allowance is the amount of tokens that the `spender` is authorized to transfer using the `transferFrom` function.
  */
  getAllowance: TokenClient.Caller<
    {
      sourceAddress: Address, // The address that approved the allowance (the token `owner`).
      user: Address, // The address that was approved for the allowance (the token `spender`).
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      contractPath: 'https://github.com/JoinColony/colonyToken/blob/7cc7d6b5bf3e94e6d97cd65583e3da38a994753f/contracts',
      version: '8d3a50719cd51459db153006b5bd56c031e9d169',
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Mint new tokens. This is a `DSToken` function that can only be called by the token `owner`. When a colony contract address is assigned as the token `owner`, this function can only be called by the user assigned the `FOUNDER` authority role.
  */
  mint: TokenClient.Sender<
    {
      user: Address, // The address that will receive the minted tokens.
      amount: BigNumber, // The amount of tokens that will be minted.
    },
    {
      Mint: Mint,
    },
    TokenClient,
    {
      contract: 'Token.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/JoinColony/colonyToken/blob/7cc7d6b5bf3e94e6d97cd65583e3da38a994753f/contracts',
      version: '8d3a50719cd51459db153006b5bd56c031e9d169',
    },
  >;
  /*
  Assign an account the `ADMIN` authority role within a colony.
  */
  setAuthority: TokenClient.Sender<
    {
      authority: Address, // The address that will be assigned the `ADMIN` authority role.
    },
    {
      LogSetAuthority: LogSetAuthority,
    },
    TokenClient,
    {
      contract: 'auth.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      version: '8d3a50719cd51459db153006b5bd56c031e9d169',
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
      contractPath: 'https://github.com/JoinColony/colonyToken/blob/7cc7d6b5bf3e94e6d97cd65583e3da38a994753f/contracts',
      version: '8d3a50719cd51459db153006b5bd56c031e9d169',
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
    const user = ['user', 'address'];

    // Events
    this.addEvent('Transfer', [
      ['from', 'tokenAddress'],
      ['to', 'tokenAddress'],
      ['value', 'bigNumber'],
    ]);
    this.addEvent('Approval', [
      ['owner', 'tokenAddress'],
      ['spender', 'tokenAddress'],
      ['value', 'bigNumber'],
    ]);
    this.addEvent('Mint', [
      ['address', 'tokenAddress'],
      ['amount', 'bigNumber'],
    ]);
    this.addEvent('Burn', [
      ['address', 'tokenAddress'],
      ['amount', 'bigNumber'],
    ]);
    this.addEvent('LogSetOwner', [['owner', 'tokenAddress']]);
    this.addEvent('LogSetAuthority', [['authority', 'tokenAddress']]);

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
      input: [sourceAddress, user],
      output: [amount],
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
      input: [user, amount],
    });
    this.addSender('mint', {
      input: [user, amount],
    });
    this.addSender('burn', {
      input: [user, amount],
    });
    this.addSender('setOwner', {
      input: [['owner', 'address']],
    });
    this.addSender('setAuthority', {
      input: [['authority', 'address']],
    });
  }
}
