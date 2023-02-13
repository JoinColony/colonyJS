/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";

import { TransactionOverrides } from "..";
import { MetaTxToken } from "../MetaTxToken";

export class MetaTxToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<MetaTxToken> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      overrides
    ) as Promise<MetaTxToken>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_name, _symbol, _decimals, overrides);
  }
  attach(address: string): MetaTxToken {
    return super.attach(address) as MetaTxToken;
  }
  connect(signer: Signer): MetaTxToken__factory {
    return super.connect(signer) as MetaTxToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MetaTxToken {
    return new Contract(address, _abi, signerOrProvider) as MetaTxToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Burn",
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
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
    name: "PERMIT_TYPEHASH",
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
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "src",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
    name: "locked",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "_user",
        type: "address",
      },
    ],
    name: "getMetatransactionNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
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
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
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
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200229938038062002299833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b506040526020015191506000905080600181620001b4620003ba565b6001600160a01b03168152602081019190915260400160009081209190915555620001de620003ba565b600480546001600160a01b0319166001600160a01b039290921691909117905562000208620003ba565b6001600160a01b03167fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9460405160405180910390a282516200025290600690602086019062000470565b5081516200026890600590602085019062000470565b507fff0000000000000000000000000000000000000000000000000000000000000060f882901b166080526007805460ff191660019081179091556040516006805446937f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f9391829184916002600019928216156101000292909201160480156200032d5780601f106200030a5761010080835404028352918201916200032d565b820191906000526020600020905b81548152906001019060200180831162000318575b505060408051918290038220828201825260018352603160f81b602093840152815180840196909652858201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606086015260808501959095523060a08086019190915285518086038201815260c0909501909552835193019290922090925250620005029350505050565b6000363330148015620003ce575060348110155b15620004615760606000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505082810160131901519091507f02bcc191e283bfba76a1369ec8ba06566f33010645097c104c312753e04935e881146200044c573393505050506200046d565b508101516001600160a01b031691506200046b565b339150506200046d565b505b90565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620004b357805160ff1916838001178555620004e3565b82800160010185558215620004e3579182015b82811115620004e3578251825591602001919060010190620004c6565b506200046b9291505b808211156200046b5760008155600101620004ec565b60805160f81c60a051611d6b6200052e60003980610d3352806115de525080610d0b5250611d6b6000f3fe60806040526004361061019c5760003560e01c806370a08231116100ec578063a69df4b51161008a578063bf7e214f11610064578063bf7e214f14610715578063cf3090121461072a578063d505accf1461073f578063dd62ed3e1461079d5761019c565b8063a69df4b5146106c7578063a9059cbb146106dc578063b3eac1d8146105eb5761019c565b80638da5cb5b116100c65780638da5cb5b1461061e57806395d89b411461064f5780639dc29fac14610664578063a0712d681461069d5761019c565b806370a08231146105855780637a9e5e4b146105b85780637ecebe00146105eb5761019c565b806330adf81f116101595780633644e515116101335780633644e5151461043057806340c10f191461044557806342966c681461047e5780636281133d146104a85761019c565b806330adf81f146103db578063313ce567146103f05780633408e4701461041b5761019c565b806306fdde03146101a1578063095ea7b31461022b5780630c53c51c1461027857806313af40351461033c57806318160ddd1461037157806323b872dd14610398575b600080fd5b3480156101ad57600080fd5b506101b66107d8565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101f05781810151838201526020016101d8565b50505050905090810190601f16801561021d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561023757600080fd5b506102646004803603604081101561024e57600080fd5b506001600160a01b038135169060200135610866565b604080519115158252519081900360200190f35b6101b6600480360360a081101561028e57600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156102b957600080fd5b8201836020820111156102cb57600080fd5b803590602001918460018302840111640100000000831117156102ed57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550508235935050506020810135906040013560ff166108f7565b34801561034857600080fd5b5061036f6004803603602081101561035f57600080fd5b50356001600160a01b0316610bb0565b005b34801561037d57600080fd5b50610386610c65565b60408051918252519081900360200190f35b3480156103a457600080fd5b50610264600480360360608110156103bb57600080fd5b506001600160a01b03813581169160208101359091169060400135610c6c565b3480156103e757600080fd5b50610386610ce5565b3480156103fc57600080fd5b50610405610d09565b6040805160ff9092168252519081900360200190f35b34801561042757600080fd5b50610386610d2d565b34801561043c57600080fd5b50610386610d31565b34801561045157600080fd5b5061036f6004803603604081101561046857600080fd5b506001600160a01b038135169060200135610d55565b34801561048a57600080fd5b5061036f600480360360208110156104a157600080fd5b5035610e79565b3480156104b457600080fd5b50610264600480360360e08110156104cb57600080fd5b6001600160a01b03823516916020810135916040820135919081019060808101606082013564010000000081111561050257600080fd5b82018360208201111561051457600080fd5b8035906020019184600183028401116401000000008311171561053657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550508235935050506020810135906040013560ff16610e8d565b34801561059157600080fd5b50610386600480360360208110156105a857600080fd5b50356001600160a01b031661100c565b3480156105c457600080fd5b5061036f600480360360208110156105db57600080fd5b50356001600160a01b0316611027565b3480156105f757600080fd5b506103866004803603602081101561060e57600080fd5b50356001600160a01b03166110ca565b34801561062a57600080fd5b506106336110e5565b604080516001600160a01b039092168252519081900360200190f35b34801561065b57600080fd5b506101b66110f4565b34801561067057600080fd5b5061036f6004803603604081101561068757600080fd5b506001600160a01b03813516906020013561114f565b3480156106a957600080fd5b5061036f600480360360208110156106c057600080fd5b5035611389565b3480156106d357600080fd5b5061036f6113ed565b3480156106e857600080fd5b50610264600480360360408110156106ff57600080fd5b506001600160a01b03813516906020013561144c565b34801561072157600080fd5b50610633611467565b34801561073657600080fd5b50610264611476565b34801561074b57600080fd5b5061036f600480360360e081101561076257600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c0013561147f565b3480156107a957600080fd5b50610386600480360360408110156107c057600080fd5b506001600160a01b03813581169160200135166117b4565b6006805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561085e5780601f106108335761010080835404028352916020019161085e565b820191906000526020600020905b81548152906001019060200180831161084157829003601f168201915b505050505081565b600081600260006108756117df565b6001600160a01b03908116825260208083019390935260409182016000908120918816808252919093529120919091556108ad6117df565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35060015b92915050565b606061091786610906886110ca565b61090e610d2d565b88888888610e8d565b6109525760405162461bcd60e51b8152600401808060200182810382526029815260200180611d0d6029913960400191505060405180910390fd5b61095b8661188e565b60006060306001600160a01b0316877f02bcc191e283bfba76a1369ec8ba06566f33010645097c104c312753e04935e88a6040516020018084805190602001908083835b602083106109be5780518252601f19909201916020918201910161099f565b6001836020036101000a038019825116818451168082178552505050505050905001838152602001826001600160a01b031660601b815260140193505050506040516020818303038152906040526040518082805190602001908083835b60208310610a3b5780518252601f199092019160209182019101610a1c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610a9d576040519150601f19603f3d011682016040523d82523d6000602084013e610aa2565b606091505b509150915081610ae35760405162461bcd60e51b8152600401808060200182810382526028815260200180611ce56028913960400191505060405180910390fd5b7f5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b88610b0d6117df565b8960405180846001600160a01b03168152602001836001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610b69578181015183820152602001610b51565b50505050905090810190601f168015610b965780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1979650505050505050565b610bcd610bbb6117df565b6000356001600160e01b0319166118ae565b610c15576040805162461bcd60e51b8152602060048201526014602482015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604482015290519081900360640190fd5b600480546001600160a01b0319166001600160a01b0383811691909117918290556040519116907fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a250565b6000545b90565b60075460009060ff1615610cd257610c85610bbb6117df565b610cd2576040805162461bcd60e51b815260206004820152601960248201527818dbdb1bdb9e4b5d1bdad95b8b5d5b985d5d1a1bdc9a5cd959603a1b604482015290519081900360640190fd5b610cdd848484611995565b949350505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b7f000000000000000000000000000000000000000000000000000000000000000081565b4690565b7f000000000000000000000000000000000000000000000000000000000000000081565b610d60610bbb6117df565b610da8576040805162461bcd60e51b8152602060048201526014602482015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604482015290519081900360640190fd5b6001600160a01b038216600090815260016020526040902054610dcb9082611bf4565b6001600160a01b03831660009081526001602052604081209190915554610df29082611bf4565b6000556040805182815290516001600160a01b038416917f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885919081900360200190a26040805182815290516001600160a01b038416916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b610e8a610e846117df565b8261114f565b50565b600080610f2a8830898960405160200180858152602001846001600160a01b031660601b815260140183815260200182805190602001908083835b60208310610ee75780518252601f199092019160209182019101610ec8565b6001836020036101000a03801982511681845116808217855250505050505090500194505050505060405160208183030381529060405280519060200120611c43565b9050600060018285888860405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610f88573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610ff0576040805162461bcd60e51b815260206004820152601f60248201527f636f6c6f6e792d6d65746174782d696e76616c69642d7369676e617475726500604482015290519081900360640190fd5b6001600160a01b038a8116911614915050979650505050505050565b6001600160a01b031660009081526001602052604090205490565b611032610bbb6117df565b61107a576040805162461bcd60e51b8152602060048201526014602482015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604482015290519081900360640190fd5b600380546001600160a01b0319166001600160a01b0383811691909117918290556040519116907f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada490600090a250565b6001600160a01b031660009081526008602052604090205490565b6004546001600160a01b031681565b6005805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561085e5780601f106108335761010080835404028352916020019161085e565b6111576117df565b6001600160a01b0316826001600160a01b03161461128c576001600160a01b038216600090815260026020526040812082916111916117df565b6001600160a01b03166001600160a01b03168152602001908152602001600020541015611205576040805162461bcd60e51b815260206004820152601e60248201527f64732d746f6b656e2d696e73756666696369656e742d617070726f76616c0000604482015290519081900360640190fd5b6001600160a01b0382166000908152600260205260408120611250916112296117df565b6001600160a01b03166001600160a01b031681526020019081526020016000205482611c94565b6001600160a01b0383166000908152600260205260408120906112716117df565b6001600160a01b031681526020810191909152604001600020555b6001600160a01b0382166000908152600160205260409020548111156112f9576040805162461bcd60e51b815260206004820152601d60248201527f64732d746f6b656e2d696e73756666696369656e742d62616c616e6365000000604482015290519081900360640190fd5b6001600160a01b03821660009081526001602052604090205461131c9082611c94565b6001600160a01b038316600090815260016020526040812091909155546113439082611c94565b6000556040805182815290516001600160a01b038416917fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5919081900360200190a25050565b611394610bbb6117df565b6113dc576040805162461bcd60e51b8152602060048201526014602482015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604482015290519081900360640190fd5b610e8a6113e76117df565b82610d55565b6113f8610bbb6117df565b611440576040805162461bcd60e51b8152602060048201526014602482015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604482015290519081900360640190fd5b6007805460ff19169055565b60006114606114596117df565b8484610c6c565b9392505050565b6003546001600160a01b031681565b60075460ff1681565b60075460ff16156114e257611495610bbb6117df565b6114e2576040805162461bcd60e51b815260206004820152601960248201527818dbdb1bdb9e4b5d1bdad95b8b5d5b985d5d1a1bdc9a5cd959603a1b604482015290519081900360640190fd5b42841015611537576040805162461bcd60e51b815260206004820152601d60248201527f636f6c6f6e792d746f6b656e2d657870697265642d646561646c696e65000000604482015290519081900360640190fd5b6040805180820182526002815261190160f01b60208083019182526001600160a01b03808c1660008181526008845286812080546001810190915587517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98187015280890193909352928d166060830152608082018c905260a082019290925260c08082018b90528651808303909101815260e082019096528551959092019490942083517f0000000000000000000000000000000000000000000000000000000000000000939192610100019182918083835b6020831061162a5780518252601f19909201916020918201910161160b565b51815160209384036101000a6000190180199092169116179052920194855250838101929092525060408051808403830181528184018083528151918401919091206000918290526060850180845281905260ff8a16608086015260a0850189905260c085018890529151919550935060019260e08082019392601f1981019281900390910190855afa1580156116c5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906116fb5750886001600160a01b0316816001600160a01b0316145b61174c576040805162461bcd60e51b815260206004820152601e60248201527f636f6c6f6e792d746f6b656e2d696e76616c69642d7369676e61747572650000604482015290519081900360640190fd5b6001600160a01b03808a166000818152600260209081526040808320948d16808452948252918290208b905581518b815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050505050505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b60003633301480156117f2575060348110155b156118815760606000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505082810160131901519091507f02bcc191e283bfba76a1369ec8ba06566f33010645097c104c312753e04935e8811461186d57339350505050610c69565b508101516001600160a01b0316915061188a565b33915050610c69565b5090565b6001600160a01b0316600090815260086020526040902080546001019055565b60006001600160a01b0383163014156118c9575060016108f1565b6004546001600160a01b03848116911614156118e7575060016108f1565b6003546001600160a01b03166118ff575060006108f1565b6003546040805163b700961360e01b81526001600160a01b0386811660048301523060248301526001600160e01b0319861660448301529151919092169163b7009613916064808301926020929190829003018186803b15801561196257600080fd5b505afa158015611976573d6000803e3d6000fd5b505050506040513d602081101561198c57600080fd5b505190506108f1565b600061199f6117df565b6001600160a01b0316846001600160a01b031614611ad4576001600160a01b038416600090815260026020526040812083916119d96117df565b6001600160a01b03166001600160a01b03168152602001908152602001600020541015611a4d576040805162461bcd60e51b815260206004820152601e60248201527f64732d746f6b656e2d696e73756666696369656e742d617070726f76616c0000604482015290519081900360640190fd5b6001600160a01b0384166000908152600260205260408120611a9891611a716117df565b6001600160a01b03166001600160a01b031681526020019081526020016000205483611c94565b6001600160a01b038516600090815260026020526040812090611ab96117df565b6001600160a01b031681526020810191909152604001600020555b6001600160a01b038416600090815260016020526040902054821115611b41576040805162461bcd60e51b815260206004820152601d60248201527f64732d746f6b656e2d696e73756666696369656e742d62616c616e6365000000604482015290519081900360640190fd5b6001600160a01b038416600090815260016020526040902054611b649083611c94565b6001600160a01b038086166000908152600160205260408082209390935590851681522054611b939083611bf4565b6001600160a01b0380851660008181526001602090815260409182902094909455805186815290519193928816927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a35060019392505050565b808201828110156108f1576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fd5b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b808203828111156108f1576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fdfe636f6c6f6e792d6d65746174782d66756e6374696f6e2d63616c6c2d756e7375636365737366756c6d6574617472616e73616374696f6e2d7369676e65722d7369676e61747572652d6d69736d61746368a2646970667358221220ec27d29eeae9a5b68083c522a26d26a7262778f379635e68001ca079b164519e64736f6c63430007030033";
