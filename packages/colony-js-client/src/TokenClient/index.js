/* @flow */

import BigNumber from 'bn.js';
import ContractClient from '@colony/colony-js-contract-client';

type Address = string;

export default class TokenClient extends ContractClient {
  /*
  Get the total token supply.
  */
  getTotalSupply: TokenClient.Caller<
    {},
    {
      amount: BigNumber,
    },
    TokenClient,
  >;
  /*
  TODO write me
  */
  getBalanceOf: TokenClient.Caller<
    {
      sourceAddress: Address,
    },
    {
      amount: BigNumber,
    },
    TokenClient,
  >;
  /*
  TODO write me
  */
  getAllowance: TokenClient.Caller<
    {
      sourceAddress: Address,
      user: Address,
    },
    {
      amount: BigNumber,
    },
    TokenClient,
  >;
  /*
  TODO write me
  */
  transfer: TokenClient.Sender<
    {
      destinationAddress: Address,
      amount: BigNumber,
    },
    {},
    TokenClient,
  >;
  /*
  TODO write me
  */
  transferFrom: TokenClient.Sender<
    {
      sourceAddress: Address,
      destinationAddress: Address,
      amount: BigNumber,
    },
    {
      to: Address,
      value: BigNumber,
    },
    TokenClient,
  >;
  /*
  TODO write me
  */
  approve: TokenClient.Sender<
    {
      user: Address,
      amount: BigNumber,
    },
    {
      owner: Address,
      spender: Address,
      value: BigNumber,
    },
    TokenClient,
  >;
  /*
  TODO write me
  */
  mint: TokenClient.Sender<
    {
      amount: BigNumber,
    },
    {
      address: Address,
      amount: BigNumber,
    },
    TokenClient,
  >;
  /*
  TODO write me
  */
  burn: TokenClient.Sender<
    {
      amount: BigNumber,
    },
    {
      address: Address,
      amount: BigNumber,
    },
    TokenClient,
  >;
  /*
  TODO write me
  */
  setOwner: TokenClient.Sender<
    {
      owner: Address,
    },
    {
      owner: Address,
    },
    TokenClient,
  >;
  /*
  TODO write me
  */
  setAuthority: TokenClient.Sender<
    {
      authority: Address,
    },
    {
      authority: Address,
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
