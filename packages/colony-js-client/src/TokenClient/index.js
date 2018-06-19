/* @flow */

import BigNumber from 'bn.js';
import ContractClient from '@colony/colony-js-contract-client';
import GetTokenInfo from './callers/GetTokenInfo';

type Address = string;

export default class TokenClient extends ContractClient {
  /*
    Get information about the ERC20 token itself
  */
  getTokenInfo: TokenClient.Caller<
    {},
    {
      name: string, // The token's name (e.g. Cool Colony Token)
      symbol: string, // The token's symbol (e.g. CCT)
      decimals: number, // The token's decimals
    },
    TokenClient,
  >;
  /*
  Get the total token supply.
  */
  getTotalSupply: TokenClient.Caller<
    {},
    {
      amount: BigNumber, // The total token supply.
    },
    TokenClient,
  >;
  /*
  Returns the token balance of a given address.
  */
  getBalanceOf: TokenClient.Caller<
    {
      sourceAddress: Address, // The address in question.
    },
    {
      amount: BigNumber, // The balance of tokens associated with the address.
    },
    TokenClient,
  >;
  /*
  Given a token owner address and a spender, will return the amount of tokens approved by the owner that can be transferred to the spender's account.
  */
  getAllowance: TokenClient.Caller<
    {
      sourceAddress: Address, // Address of the token owner.
      user: Address, // Address of the approved spender.
    },
    {
      amount: BigNumber, // The approved amount of tokens the spender may transfer.
    },
    TokenClient,
  >;
  /*
  Transfer an amount of tokens from a token owner's account to a specified destination address.
  */
  transfer: TokenClient.Sender<
    {
      destinationAddress: Address, // The account to recieve the tokens.
      amount: BigNumber, // The amount to transfer.
    },
    {},
    TokenClient,
  >;
  /*
  Transfer tokens from a specified account to a destination account. Token transfer must have a sufficient balance and `allowance` set by the source account for the destination address.
  */
  transferFrom: TokenClient.Sender<
    {
      sourceAddress: Address, // 'from' address, or the token owner account.
      destinationAddress: Address, // 'to' address, or the destination with sufficient ``allowance` for transfer.
      amount: BigNumber, // Amount to transfer.
    },
    {
      to: Address, // Event data indicating the 'to' address.
      value: BigNumber, // Event data indicating the amount transferred.
    },
    TokenClient,
  >;
  /*
  The owner of a token can approve an `allowance` that a spender is authorized to transfer using the `transferFrom` function.
  */
  approve: TokenClient.Sender<
    {
      user: Address, // The spending account allowed to transfer tokens with `transferFrom`.
      amount: BigNumber, // The maximum `allowance` that the spending account may transfer from the owner to the spender.
    },
    {
      owner: Address, // Event data indicating the token owner ('from' address).
      spender: Address, // Event data indicating the spender (who is given the `allowance`).
      value: BigNumber, // Event data indicating the new value of allowed transfer.
    },
    TokenClient,
  >;
  /*
  ERC20Extended functionality to `mint` new tokens and add to the total supply. In colony these functions are subject to authority restrictions.
  */
  mint: TokenClient.Sender<
    {
      amount: BigNumber, // The amount of new tokens to mint.
    },
    {
      address: Address, // The address that initiated the mint event.
      amount: BigNumber, // Event data indicating the amount of tokens minted.
    },
    TokenClient,
  >;
  /*
  ERC20Extended functionality to `burn` un-owned tokens and subtract from the total token supply. In colony these functions are subject to authority restrictions.
  */
  burn: TokenClient.Sender<
    {
      amount: BigNumber, // The amount of unspent tokens to burn.
    },
    {
      address: Address, // The address that initiated the burn event.
      amount: BigNumber, // Event data indicating the amount burned.
    },
    TokenClient,
  >;
  /*
  Sets the owner of a given token contract. In most situations this should be the colony's own address.
  */
  setOwner: TokenClient.Sender<
    {
      owner: Address, // The address of the new owner.
    },
    {
      owner: Address, // Event data indicating the new owner.
    },
    TokenClient,
  >;
  /*
  Give a particular account special authority (admin) within a colony.
  */
  setAuthority: TokenClient.Sender<
    {
      authority: Address, // The address to be given admin authority.
    },
    {
      authority: Address, // Event data indicating the address given authority.
    },
    TokenClient,
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

    const Transfer = {
      contract: this.contract,
      handler({ to, value }: { to: Address, value: BigNumber }) {
        return {
          to,
          value,
        };
      },
    };
    const Approval = {
      contract: this.contract,
      handler({
        owner,
        spender,
        value,
      }: {
        owner: Address,
        spender: Address,
        value: BigNumber,
      }) {
        return {
          owner,
          spender,
          value,
        };
      },
    };
    const Mint = {
      contract: this.contract,
      handler({ guy, wad }: { guy: Address, wad: BigNumber }) {
        return {
          address: guy,
          amount: wad,
        };
      },
    };
    const Burn = Object.assign({}, Mint);
    const LogSetOwner = {
      contract: this.contract,
      handler({ owner }: { owner: Address }) {
        return {
          owner,
        };
      },
    };
    const LogSetAuthority = {
      contract: this.contract,
      handler({ authority }: { authority: Address }) {
        return {
          authority,
        };
      },
    };

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

    this.addSender('transfer', {
      input: [destinationAddress, amount],
      eventHandlers: { Transfer },
    });

    this.addSender('transferFrom', {
      input: [sourceAddress, destinationAddress, amount],
      eventHandlers: { Transfer },
    });

    this.addSender('approve', {
      input: [user, amount],
      eventHandlers: { Approval },
    });

    this.addSender('mint', {
      input: [amount],
      eventHandlers: { Mint },
    });

    this.addSender('burn', {
      input: [amount],
      eventHandlers: { Burn },
    });

    this.addSender('setOwner', {
      input: [['owner', 'address']],
      eventHandlers: { LogSetOwner },
    });

    this.addSender('setAuthority', {
      input: [['authority', 'address']],
      eventHandlers: { LogSetAuthority },
    });
  }
}
