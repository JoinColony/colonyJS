/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from "..";
import { CoinMachine } from "../CoinMachine";

export class CoinMachine__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<CoinMachine> {
    return super.deploy(overrides) as Promise<CoinMachine>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): CoinMachine {
    return super.attach(address) as CoinMachine;
  }
  connect(signer: Signer): CoinMachine__factory {
    return super.connect(signer) as CoinMachine__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoinMachine {
    return new Contract(address, _abi, signerOrProvider) as CoinMachine;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "ExtensionInitialised",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authority",
        type: "address",
      },
    ],
    name: "LogSetAuthority",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "LogSetOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "relayerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
    ],
    name: "MetaTransactionExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "activePeriod",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentPeriod",
        type: "uint256",
      },
    ],
    name: "PeriodUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "evolvePrice",
        type: "bool",
      },
    ],
    name: "PriceEvolutionSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numTokens",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalCost",
        type: "uint256",
      },
    ],
    name: "TokensBought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "whitelist",
        type: "address",
      },
    ],
    name: "WhitelistSet",
    type: "event",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract DSAuthority",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_sigR",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_sigS",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "_sigV",
        type: "uint8",
      },
    ],
    name: "executeMetaTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_sig",
        type: "bytes4",
      },
    ],
    name: "getCapabilityRoles",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getColony",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeprecated",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract DSAuthority",
        name: "authority_",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_sigR",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_sigS",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "_sigV",
        type: "uint8",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "getMetatransactionNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "identifier",
    outputs: [
      {
        internalType: "bytes32",
        name: "_identifier",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "_version",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_colony",
        type: "address",
      },
    ],
    name: "install",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finishUpgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_deprecated",
        type: "bool",
      },
    ],
    name: "deprecate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uninstall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_purchaseToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_periodLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_windowSize",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetPerPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxPerPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_userLimitFraction",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startingPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_whitelist",
        type: "address",
      },
    ],
    name: "initialise",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_whitelist",
        type: "address",
      },
    ],
    name: "setWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numTokens",
        type: "uint256",
      },
    ],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "updatePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPurchaseToken",
    outputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getToken",
    outputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getActivePeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "_period",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getActiveSold",
    outputs: [
      {
        internalType: "uint256",
        name: "_sold",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getActiveIntake",
    outputs: [
      {
        internalType: "uint256",
        name: "_intake",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEMAIntake",
    outputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPeriodLength",
    outputs: [
      {
        internalType: "uint256",
        name: "_length",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWindowSize",
    outputs: [
      {
        internalType: "uint256",
        name: "_size",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTargetPerPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "_target",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxPerPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "_max",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSellableTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "_remaining",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "_max",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getMaxPurchase",
    outputs: [
      {
        internalType: "uint256",
        name: "_max",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWhitelist",
    outputs: [
      {
        internalType: "address",
        name: "_whitelist",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEvolvePrice",
    outputs: [
      {
        internalType: "bool",
        name: "_evolve",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600180546001600160a01b031916339081179091556040517fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a2612ad08061005e6000396000f3fe6080604052600436106102305760003560e01c806382b2e2571161012e578063b5b2f1ef116100ab578063e9587e861161006f578063e9587e86146105c0578063eb91d37e146105e0578063f51361c7146105f5578063f9f81e091461060a578063fcf6ba931461061f57610230565b8063b5b2f1ef1461054c578063bf7e214f14610561578063bfd68ab714610576578063c6ea3b0b1461058b578063d01f63f5146105ab57610230565b8063a0e3ad26116100f2578063a0e3ad26146104c0578063a5c56a2b146104d5578063a83627de146104ea578063ac9650d8146104ff578063b3eac1d81461052c57610230565b806382b2e257146104415780638469ddc714610456578063854cff2f1461046b5780638da5cb5b1461048b5780639251cff4146104a057610230565b80632a1b8f9b116101bc5780633610724e116101805780633610724e146103b757806354fd4d50146103ca5780636281133d146103df5780637998a1c41461040c5780637a9e5e4b1461042157610230565b80632a1b8f9b146103385780632a85c366146103585780632dfbb0831461036d5780633408e4701461038d578063340df28f146103a257610230565b806312defc731161020357806312defc73146102c457806313af4035146102d95780631f7ea81f146102f957806321df0da71461030e57806329287b461461032357610230565b80630a1e0c22146102355780630c53c51c146102605780630d638f3014610280578063114f676914610297575b600080fd5b34801561024157600080fd5b5061024a610634565b6040516102579190612319565b60405180910390f35b61027361026e366004611f72565b610644565b60405161025791906124a5565b34801561028c57600080fd5b506102956107a0565b005b3480156102a357600080fd5b506102b76102b2366004611eb5565b6108a9565b604051610257919061247e565b3480156102d057600080fd5b506102b76108ed565b3480156102e557600080fd5b506102956102f4366004611eb5565b6108f3565b34801561030557600080fd5b506102b7610975565b34801561031a57600080fd5b5061024a61097b565b34801561032f57600080fd5b506102b761098a565b34801561034457600080fd5b50610295610353366004611eb5565b610990565b34801561036457600080fd5b506102b7610a0d565b34801561037957600080fd5b506102b7610388366004612110565b610a13565b34801561039957600080fd5b506102b7610a19565b3480156103ae57600080fd5b50610295610a1d565b6102956103c53660046121ab565b610b2c565b3480156103d657600080fd5b506102b7610fcc565b3480156103eb57600080fd5b506103ff6103fa366004611fe4565b610fd1565b6040516102579190612473565b34801561041857600080fd5b506102b76110a1565b34801561042d57600080fd5b5061029561043c366004611eb5565b6110c5565b34801561044d57600080fd5b506102b7611143565b34801561046257600080fd5b506102b76111c9565b34801561047757600080fd5b50610295610486366004611eb5565b6111cf565b34801561049757600080fd5b5061024a6112f5565b3480156104ac57600080fd5b506102956104bb3660046120d8565b611304565b3480156104cc57600080fd5b506102b7611362565b3480156104e157600080fd5b506102b7611368565b3480156104f657600080fd5b5061029561136e565b34801561050b57600080fd5b5061051f61051a366004612069565b611479565b6040516102579190612413565b34801561053857600080fd5b506102b7610547366004611eb5565b61164b565b34801561055857600080fd5b506102b7611666565b34801561056d57600080fd5b5061024a61168f565b34801561058257600080fd5b5061024a61169e565b34801561059757600080fd5b506102956105a6366004611eed565b6116ad565b3480156105b757600080fd5b5061024a611956565b3480156105cc57600080fd5b506102b76105db366004611eb5565b611965565b3480156105ec57600080fd5b506102b76119da565b34801561060157600080fd5b506102b7611a89565b34801561061657600080fd5b506103ff611a8f565b34801561062b57600080fd5b506103ff611a9f565b6004546001600160a01b03165b90565b6060610664866106538861164b565b61065b610a19565b88888888610fd1565b6106895760405162461bcd60e51b81526004016106809061265c565b60405180910390fd5b61069286611aaf565b60006060306001600160a01b0316877f02bcc191e283bfba76a1369ec8ba06566f33010645097c104c312753e04935e88a6040516020016106d593929190612269565b60408051601f19818403018152908290526106ef9161224d565b6000604051808303816000865af19150503d806000811461072c576040519150601f19603f3d011682016040523d82523d6000602084013e610731565b606091505b5091509150816107535760405162461bcd60e51b8152600401610680906124e7565b7f5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b8861077d611acf565b8960405161078d93929190612399565b60405180910390a1979650505050505050565b6107b6336000356001600160e01b031916611b7a565b6107d25760405162461bcd60e51b81526004016106809061252f565b6010546001600160a01b03161561089b5760006107ed611143565b905080156108995760105460035460405163a9059cbb60e01b81526001600160a01b039283169263a9059cbb9261082b929116908590600401612380565b602060405180830381600087803b15801561084557600080fd5b505af1158015610859573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087d91906120f4565b6108995760405162461bcd60e51b815260040161068090612826565b505b6003546001600160a01b0316ff5b6000806108b4611143565b905060006108c0611666565b905060006108cd85611965565b90506108e2816108dd8585611c56565b611c56565b93505050505b919050565b600e5490565b610909336000356001600160e01b031916611b7a565b6109255760405162461bcd60e51b81526004016106809061252f565b600180546001600160a01b0319166001600160a01b0383811691909117918290556040519116907fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a250565b60095490565b6010546001600160a01b031690565b600f5490565b6109a6336000356001600160e01b031916611b7a565b6109c25760405162461bcd60e51b81526004016106809061252f565b6003546001600160a01b0316156109eb5760405162461bcd60e51b815260040161068090612713565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b60085490565b50600090565b4690565b610a33336000356001600160e01b031916611b7a565b610a4f5760405162461bcd60e51b81526004016106809061252f565b600360009054906101000a90046001600160a01b03166001600160a01b03166321df0da76040518163ffffffff1660e01b815260040160206040518083038186803b158015610a9d57600080fd5b505afa158015610ab1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad59190611ed1565b601080546001600160a01b0319166001600160a01b0392909216919091179055670de0b6b3a7640000601255610b2a6000610b0e611143565b118015610b255750600354600160a01b900460ff16155b611c6d565b565b600354600160a01b900460ff1615610b565760405162461bcd60e51b815260040161068090612970565b610b5e61136e565b6011546001600160a01b03161580610bf657506011546001600160a01b031663673448dd610b8a611acf565b6040518263ffffffff1660e01b8152600401610ba69190612319565b60206040518083038186803b158015610bbe57600080fd5b505afa158015610bd2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf691906120f4565b610c125760405162461bcd60e51b81526004016106809061258b565b6000610c1f6102b2611acf565b90506000610c2d8284611c56565b90506000610c3d82600c54611cce565b905060008211610c97573415610c8f57610c55611acf565b6001600160a01b03166108fc349081150290604051600060405180830381858888f19350505050158015610c8d573d6000803e3d6000fd5b505b505050610fc9565b610ca3600e5482611cf2565b600e55600d54610cb39083611cf2565b600d8190556009541015610cc357fe5b670de0b6b3a76400006012541015610d4157610ce160135483611cf2565b601355610d1a60146000610cf3611acf565b6001600160a01b03166001600160a01b031681526020019081526020016000205483611cf2565b60146000610d26611acf565b6001600160a01b031681526020810191909152604001600020555b610d49611143565b8210610d5957610d596000611c6d565b6004546001600160a01b0316610e155780341015610d895760405162461bcd60e51b8152600401610680906127ef565b80341115610dd557610d99611acf565b6001600160a01b03166108fc8234039081150290604051600060405180830381858888f19350505050158015610dd3573d6000803e3d6000fd5b505b6003546040516001600160a01b039091169082156108fc029083906000818181858888f19350505050158015610e0f573d6000803e3d6000fd5b50610ecc565b6004546001600160a01b03166323b872dd610e2e611acf565b6003546040516001600160e01b031960e085901b168152610e5e92916001600160a01b031690869060040161232d565b602060405180830381600087803b158015610e7857600080fd5b505af1158015610e8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb091906120f4565b610ecc5760405162461bcd60e51b81526004016106809061274a565b6010546001600160a01b031663a9059cbb610ee5611acf565b846040518363ffffffff1660e01b8152600401610f03929190612380565b602060405180830381600087803b158015610f1d57600080fd5b505af1158015610f31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5591906120f4565b610f715760405162461bcd60e51b815260040161068090612826565b610f79611acf565b6010546040516001600160a01b03928316927fc244d500136edffae7025aaf7fbd7a07193ac544a1d0cc3132cf2a32452d340c92610fbd92911690869086906123f2565b60405180910390a25050505b50565b600790565b60008061100988308989604051602001610fee94939291906122d3565b60405160208183030381529060405280519060200120611d15565b90506000600182858888604051600081526020016040526040516110309493929190612487565b6020604051602081039080840390855afa158015611052573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166110855760405162461bcd60e51b8152600401610680906128cb565b6001600160a01b038a8116911614915050979650505050505050565b7f9600bfe26d6984b5236952886f19c3d84b771865e505e2cb8f3a7137b7f3a46590565b6110db336000356001600160e01b031916611b7a565b6110f75760405162461bcd60e51b81526004016106809061252f565b600080546001600160a01b0319166001600160a01b03838116919091178083556040519116917f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada491a250565b6010546040516370a0823160e01b81526000916001600160a01b0316906370a0823190611174903090600401612319565b60206040518083038186803b15801561118c57600080fd5b505afa1580156111a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c491906121c3565b905090565b60055490565b6003546001600160a01b031663ab2f7ae26111e8611acf565b6001806040518463ffffffff1660e01b815260040161120993929190612351565b60206040518083038186803b15801561122157600080fd5b505afa158015611235573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061125991906120f4565b6112755760405162461bcd60e51b815260040161068090612894565b600354600160a01b900460ff161561129f5760405162461bcd60e51b815260040161068090612970565b601180546001600160a01b0319166001600160a01b0383161790556040517f29d77446d0fb0dcebabf25ce79ea69ba1382a4525d4acf615a38c89c798aef71906112ea908390612319565b60405180910390a150565b6001546001600160a01b031681565b61131a336000356001600160e01b031916611b7a565b6113365760405162461bcd60e51b81526004016106809061252f565b6003805482158015600160a01b0260ff60a01b1990921691909117909155610fc957610fc96000611c6d565b60075490565b600b5490565b6000611378611d45565b600b5490915081811061138c575050610b2a565b601154600160a01b900460ff166113af57600b8290556113af6000610b0e611143565b81600b541015611431576113c7600654600e54611cce565b6113df600654670de0b6b3a764000003600f54611cce565b01600f55600b5482036000190180156114175761141361140b600654670de0b6b3a76400000383611d58565b600f54611cce565b600f555b82600b8190555061142c600f54600854611d6f565b600c55505b6000600e819055600d556040517f5b873fc01d45058fe77f3883a91020f46d5a7385baac6ceab19748d1d0ae464a9061146d90839085906129a7565b60405180910390a15050565b60606000611485611acf565b9050606033301480156114a157506001600160a01b0382163014155b156114eb577f02bcc191e283bfba76a1369ec8ba06566f33010645097c104c312753e04935e8826040516020016114d9929190612207565b60405160208183030381529060405290505b8367ffffffffffffffff8111801561150257600080fd5b5060405190808252806020026020018201604052801561153657816020015b60608152602001906001900390816115215790505b50925060005b8481101561164257600060603088888581811061155557fe5b905060200281019061156791906129b5565b8660405160200161157a93929190612227565b60408051601f19818403018152908290526115949161224d565b600060405180830381855af49150503d80600081146115cf576040519150601f19603f3d011682016040523d82523d6000602084013e6115d4565b606091505b509150915081611620576044815110156115ed57600080fd5b600481019050808060200190518101906116079190612138565b60405162461bcd60e51b815260040161068091906124a5565b8086848151811061162d57fe5b6020908102919091010152505060010161153c565b50505092915050565b6001600160a01b031660009081526015602052604090205490565b60006111c4600954611676611d45565b600b54101561168657600061168a565b600d545b611d84565b6000546001600160a01b031681565b6003546001600160a01b031690565b6003546001600160a01b031663ab2f7ae26116c6611acf565b6001806040518463ffffffff1660e01b81526004016116e793929190612351565b60206040518083038186803b1580156116ff57600080fd5b505afa158015611713573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061173791906120f4565b6117535760405162461bcd60e51b815260040161068090612894565b600b54156117735760405162461bcd60e51b815260040161068090612627565b6001600160a01b0389166117995760405162461bcd60e51b8152600401610680906126a5565b600087116117b95760405162461bcd60e51b815260040161068090612902565b600086116117d95760405162461bcd60e51b8152600401610680906125c2565b6101ff8611156117fb5760405162461bcd60e51b815260040161068090612939565b6000851161181b5760405162461bcd60e51b815260040161068090612781565b8484101561183b5760405162461bcd60e51b8152600401610680906126dc565b670de0b6b3a76400008311156118635760405162461bcd60e51b81526004016106809061285d565b600083116118835760405162461bcd60e51b8152600401610680906127b8565b601080546001600160a01b03808c166001600160a01b03199283161790925560048054928b169290911691909117905560058790556118c6600260018801611d6f565b6006556007869055600885905560098490556012839055600c8290556118ea611d45565b600b556008546118fa9083611cce565b600f556001600160a01b0381161561191557611915816111cf565b6119226000610b0e611143565b6040517f690c4b6201f6a4c703f9d21c205d98a08dff8461e7a71e49c6d47cc8b894850190600090a1505050505050505050565b6011546001600160a01b031690565b6000670de0b6b3a7640000601254148061198857506011546001600160a01b0316155b6119d0576119cb6119ad6119a561199d611143565b601354611cf2565b601254611cce565b6001600160a01b038416600090815260146020526040902054611d84565b6119d4565b6000195b92915050565b6000806119e5611d45565b905080600b54101580611a025750601154600160a01b900460ff16155b15611a11575050600c54610641565b600f54600654600e54611a249190611cce565b611a3a600654670de0b6b3a76400000383611cce565b600b54910191508203600019018015611a6f57611a6c611a66600654670de0b6b3a76400000383611d58565b83611cce565b91505b611a7b82600854611d6f565b9350505050610641565b5090565b600d5490565b601154600160a01b900460ff1690565b600354600160a01b900460ff1690565b6001600160a01b0316600090815260156020526040902080546001019055565b6000363330148015611ae2575060348110155b15611b715760606000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505082810160131901519091507f02bcc191e283bfba76a1369ec8ba06566f33010645097c104c312753e04935e88114611b5d57339350505050610641565b508101516001600160a01b03169150611a85565b33915050610641565b60006001600160a01b038316301415611b95575060016119d4565b6001546001600160a01b0384811691161415611bb3575060016119d4565b6000546001600160a01b0316611bcb575060006119d4565b60005460405163b700961360e01b81526001600160a01b039091169063b700961390611bff908690309087906004016123c5565b60206040518083038186803b158015611c1757600080fd5b505afa158015611c2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c4f91906120f4565b9392505050565b600081831115611c665781611c4f565b5090919050565b601160149054906101000a900460ff16151581151514610fc9576011805460ff60a01b1916600160a01b831515021790556040517f5b4e200daa1a93764a810c35f18f2fcfb14b5e95df6ae7ac1ffdc8eec425babc906112ea908390612473565b6000670de0b6b3a7640000611ce38484611da7565b81611cea57fe5b049392505050565b808201828110156119d45760405162461bcd60e51b8152600401610680906125f9565b600081604051602001611d2891906122a2565b604051602081830303815290604052805190602001209050919050565b60006005544281611d5257fe5b04905090565b6000633b9aca00611ce384633b9aca000284611dde565b600081611ce384670de0b6b3a7640000611da7565b808203828111156119d45760405162461bcd60e51b8152600401610680906124b8565b6000811580611dc257505080820282828281611dbf57fe5b04145b6119d45760405162461bcd60e51b81526004016106809061255d565b600060028206611dfa576b033b2e3c9fd0803ce8000000611dfc565b825b90506002820491505b81156119d457611e158384611e38565b92506002820615611e2d57611e2a8184611e38565b90505b600282049150611e05565b60006b033b2e3c9fd0803ce8000000611ce38484611da7565b600082601f830112611e61578081fd5b8135611e74611e6f82612a25565b612a01565b9150808252836020828501011115611e8b57600080fd5b8060208401602084013760009082016020015292915050565b803560ff811681146108e857600080fd5b600060208284031215611ec6578081fd5b8135611c4f81612a77565b600060208284031215611ee2578081fd5b8151611c4f81612a77565b60008060008060008060008060006101208a8c031215611f0b578485fd5b8935611f1681612a77565b985060208a0135611f2681612a77565b975060408a0135965060608a0135955060808a0135945060a08a0135935060c08a0135925060e08a013591506101008a0135611f6181612a77565b809150509295985092959850929598565b600080600080600060a08688031215611f89578081fd5b8535611f9481612a77565b9450602086013567ffffffffffffffff811115611faf578182fd5b611fbb88828901611e51565b9450506040860135925060608601359150611fd860808701611ea4565b90509295509295909350565b600080600080600080600060e0888a031215611ffe578283fd5b873561200981612a77565b96506020880135955060408801359450606088013567ffffffffffffffff811115612032578384fd5b61203e8a828b01611e51565b9450506080880135925060a0880135915061205b60c08901611ea4565b905092959891949750929550565b6000806020838503121561207b578182fd5b823567ffffffffffffffff80821115612092578384fd5b818501915085601f8301126120a5578384fd5b8135818111156120b3578485fd5b86602080830285010111156120c6578485fd5b60209290920196919550909350505050565b6000602082840312156120e9578081fd5b8135611c4f81612a8c565b600060208284031215612105578081fd5b8151611c4f81612a8c565b600060208284031215612121578081fd5b81356001600160e01b031981168114611c4f578182fd5b600060208284031215612149578081fd5b815167ffffffffffffffff81111561215f578182fd5b8201601f8101841361216f578182fd5b805161217d611e6f82612a25565b818152856020838501011115612191578384fd5b6121a2826020830160208601612a47565b95945050505050565b6000602082840312156121bc578081fd5b5035919050565b6000602082840312156121d4578081fd5b5051919050565b600081518084526121f3816020860160208601612a47565b601f01601f19169290920160200192915050565b91825260601b6bffffffffffffffffffffffff1916602082015260340190565b6000838583378382018181528351612243818360208801612a47565b0195945050505050565b6000825161225f818460208701612a47565b9190910192915050565b6000845161227b818460208901612a47565b919091019283525060601b6bffffffffffffffffffffffff19166020820152603401919050565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152601c810191909152603c0190565b60008582526bffffffffffffffffffffffff198560601b1660208301528360348301528251612309816054850160208701612a47565b9190910160540195945050505050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b038416815260208101839052606081016008831061237257fe5b826040830152949350505050565b6001600160a01b03929092168252602082015260400190565b6001600160a01b038481168252831660208201526060604082018190526000906121a2908301846121db565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b6001600160a01b039390931683526020830191909152604082015260600190565b6000602080830181845280855180835260408601915060408482028701019250838701855b8281101561246657603f198886030184526124548583516121db565b94509285019290850190600101612438565b5092979650505050505050565b901515815260200190565b90815260200190565b93845260ff9290921660208401526040830152606082015260800190565b600060208252611c4f60208301846121db565b60208082526015908201527464732d6d6174682d7375622d756e646572666c6f7760581b604082015260600190565b60208082526028908201527f636f6c6f6e792d6d65746174782d66756e6374696f6e2d63616c6c2d756e737560408201526718d8d95cdcd99d5b60c21b606082015260800190565b602080825260149082015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604082015260600190565b60208082526014908201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604082015260600190565b60208082526019908201527f636f696e2d6d616368696e652d756e617574686f726973656400000000000000604082015260600190565b6020808252601d908201527f636f696e2d6d616368696e652d77696e646f772d746f6f2d736d616c6c000000604082015260600190565b60208082526014908201527364732d6d6174682d6164642d6f766572666c6f7760601b604082015260600190565b6020808252818101527f636f696e2d6d616368696e652d616c72656164792d696e697469616c69736564604082015260600190565b60208082526029908201527f6d6574617472616e73616374696f6e2d7369676e65722d7369676e617475726560408201526805adad2e6dac2e8c6d60bb1b606082015260800190565b6020808252601a908201527f636f696e2d6d616368696e652d696e76616c69642d746f6b656e000000000000604082015260600190565b6020808252601a908201527f636f696e2d6d616368696e652d6d61782d746f6f2d736d616c6c000000000000604082015260600190565b6020808252601b908201527f657874656e73696f6e2d616c72656164792d696e7374616c6c65640000000000604082015260600190565b6020808252601c908201527f636f696e2d6d616368696e652d70757263686173652d6661696c656400000000604082015260600190565b6020808252601d908201527f636f696e2d6d616368696e652d7461726765742d746f6f2d736d616c6c000000604082015260600190565b6020808252601c908201527f636f696e2d6d616368696e652d6c696d69742d746f6f2d736d616c6c00000000604082015260600190565b6020808252601f908201527f636f696e2d6d616368696e652d696e73756666696369656e742d66756e647300604082015260600190565b6020808252601c908201527f636f696e2d6d616368696e652d7472616e736665722d6661696c656400000000604082015260600190565b6020808252601c908201527f636f696e2d6d616368696e652d6c696d69742d746f6f2d6c6172676500000000604082015260600190565b6020808252601c908201527f636f696e2d6d616368696e652d63616c6c65722d6e6f742d726f6f7400000000604082015260600190565b6020808252601f908201527f636f6c6f6e792d6d65746174782d696e76616c69642d7369676e617475726500604082015260600190565b6020808252601d908201527f636f696e2d6d616368696e652d706572696f642d746f6f2d736d616c6c000000604082015260600190565b6020808252601d908201527f636f696e2d6d616368696e652d77696e646f772d746f6f2d6c61726765000000604082015260600190565b6020808252601b908201527f636f6c6f6e792d657874656e73696f6e2d646570726563617465640000000000604082015260600190565b918252602082015260400190565b6000808335601e198436030181126129cb578283fd5b83018035915067ffffffffffffffff8211156129e5578283fd5b6020019150368190038213156129fa57600080fd5b9250929050565b60405181810167ffffffffffffffff81118282101715612a1d57fe5b604052919050565b600067ffffffffffffffff821115612a3957fe5b50601f01601f191660200190565b60005b83811015612a62578181015183820152602001612a4a565b83811115612a71576000848401525b50505050565b6001600160a01b0381168114610fc957600080fd5b8015158114610fc957600080fdfea2646970667358221220b0ce6454071dcd3a9581aa6ce405ebf9043c7ff2c490477593225bfe70c80fb664736f6c63430007030033";
