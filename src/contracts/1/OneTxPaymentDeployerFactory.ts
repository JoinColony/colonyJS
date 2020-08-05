/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { OneTxPaymentDeployer } from "./OneTxPaymentDeployer";

export class OneTxPaymentDeployerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<OneTxPaymentDeployer> {
    return super.deploy(overrides) as Promise<OneTxPaymentDeployer>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): OneTxPaymentDeployer {
    return super.attach(address) as OneTxPaymentDeployer;
  }
  connect(signer: Signer): OneTxPaymentDeployerFactory {
    return super.connect(signer) as OneTxPaymentDeployerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OneTxPaymentDeployer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OneTxPaymentDeployer;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "deployedExtensions",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "colonyNetwork",
        type: "address"
      },
      {
        indexed: false,
        name: "token",
        type: "address"
      }
    ],
    name: "ColonyInitialised",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "users",
        type: "address[]"
      },
      {
        indexed: false,
        name: "amounts",
        type: "int256[]"
      }
    ],
    name: "ColonyBootstrapped",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "oldVersion",
        type: "uint256"
      },
      {
        indexed: false,
        name: "newVersion",
        type: "uint256"
      }
    ],
    name: "ColonyUpgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        name: "setTo",
        type: "bool"
      }
    ],
    name: "ColonyFundingRoleSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        name: "setTo",
        type: "bool"
      }
    ],
    name: "ColonyAdministrationRoleSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        name: "setTo",
        type: "bool"
      }
    ],
    name: "ColonyArchitectureRoleSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        name: "setTo",
        type: "bool"
      }
    ],
    name: "ColonyRootRoleSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "fromPot",
        type: "uint256"
      },
      {
        indexed: true,
        name: "toPot",
        type: "uint256"
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        name: "token",
        type: "address"
      }
    ],
    name: "ColonyFundsMovedBetweenFundingPots",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        name: "fee",
        type: "uint256"
      },
      {
        indexed: false,
        name: "payoutRemainder",
        type: "uint256"
      }
    ],
    name: "ColonyFundsClaimed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "rewardPayoutId",
        type: "uint256"
      }
    ],
    name: "RewardPayoutCycleStarted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "rewardPayoutId",
        type: "uint256"
      }
    ],
    name: "RewardPayoutCycleEnded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "rewardPayoutId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        name: "fee",
        type: "uint256"
      },
      {
        indexed: false,
        name: "rewardRemainder",
        type: "uint256"
      }
    ],
    name: "RewardPayoutClaimed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "rewardInverse",
        type: "uint256"
      }
    ],
    name: "ColonyRewardInverseSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "paymentId",
        type: "uint256"
      }
    ],
    name: "PaymentAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "taskId",
        type: "uint256"
      }
    ],
    name: "TaskAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "specificationHash",
        type: "bytes32"
      }
    ],
    name: "TaskBriefSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "dueDate",
        type: "uint256"
      }
    ],
    name: "TaskDueDateSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      },
      {
        indexed: true,
        name: "domainId",
        type: "uint256"
      }
    ],
    name: "TaskDomainSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      },
      {
        indexed: true,
        name: "skillId",
        type: "uint256"
      }
    ],
    name: "TaskSkillSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "role",
        type: "uint8"
      },
      {
        indexed: true,
        name: "user",
        type: "address"
      }
    ],
    name: "TaskRoleUserSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "role",
        type: "uint8"
      },
      {
        indexed: false,
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256"
      }
    ],
    name: "TaskPayoutSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "deliverableHash",
        type: "bytes32"
      }
    ],
    name: "TaskDeliverableSubmitted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      }
    ],
    name: "TaskCompleted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "role",
        type: "uint8"
      },
      {
        indexed: false,
        name: "rating",
        type: "uint8"
      }
    ],
    name: "TaskWorkRatingRevealed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      }
    ],
    name: "TaskFinalized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "fundingPotId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256"
      }
    ],
    name: "PayoutClaimed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256"
      }
    ],
    name: "TaskCanceled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "domainId",
        type: "uint256"
      }
    ],
    name: "DomainAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "fundingPotId",
        type: "uint256"
      }
    ],
    name: "FundingPotAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_name",
        type: "string"
      },
      {
        indexed: false,
        name: "_colony",
        type: "address"
      },
      {
        indexed: false,
        name: "_extension",
        type: "address"
      }
    ],
    name: "ExtensionDeployed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_name",
        type: "string"
      },
      {
        indexed: false,
        name: "_colony",
        type: "address"
      }
    ],
    name: "ExtensionRemoved",
    type: "event"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_colony",
        type: "address"
      }
    ],
    name: "deployExtension",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_colony",
        type: "address"
      }
    ],
    name: "removeExtension",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506118b6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806321ee102b14610046578063b5ff06321461005b578063e574c0e41461006e575b600080fd5b61005961005436600461045f565b610097565b005b61005961006936600461045f565b610216565b61008161007c36600461045f565b61040c565b60405161008e91906105e8565b60405180910390f35b806001600160a01b031663bf7e214f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156100d057600080fd5b505afa1580156100e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506101089190810190610485565b6001600160a01b031663ab2f7ae2336001806040518463ffffffff1660e01b8152600401610138939291906105c0565b60206040518083038186803b15801561015057600080fd5b505afa158015610164573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061018891908101906104a3565b15156001146101b557604051600160e51b62461bcd0281526004016101ac90610606565b60405180910390fd5b6001600160a01b0381166000908152602081905260409081902080546001600160a01b0319169055517ff6f4f43826f45b8738c8500ec35a8a6403962e8c1120ea7ee073803369be88089061020b908390610616565b60405180910390a150565b806001600160a01b031663bf7e214f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561024f57600080fd5b505afa158015610263573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506102879190810190610485565b6001600160a01b031663ab2f7ae2336001806040518463ffffffff1660e01b81526004016102b7939291906105c0565b60206040518083038186803b1580156102cf57600080fd5b505afa1580156102e3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061030791908101906104a3565b151560011461032b57604051600160e51b62461bcd0281526004016101ac90610606565b6001600160a01b03818116600090815260208190526040902054161561036657604051600160e51b62461bcd0281526004016101ac906105f6565b60008160405161037590610427565b61037f91906105ac565b604051809103906000f08015801561039b573d6000803e3d6000fd5b506001600160a01b038381166000908152602081905260409081902080546001600160a01b03191692841692909217909155519091507fb5d6317883538e4f54168ac7c924a1b5fdb2105283169f5b922d4ff54a5bc650906104009084908490610635565b60405180910390a15050565b6000602081905290815260409020546001600160a01b031681565b6111d6806106a783390190565b6000610440823561066a565b9392505050565b6000610440825161066a565b60006104408251610684565b60006020828403121561047157600080fd5b600061047d8484610434565b949350505050565b60006020828403121561049757600080fd5b600061047d8484610447565b6000602082840312156104b557600080fd5b600061047d8484610453565b6104ca81610689565b82525050565b6104ca8161066a565b6104ca81610690565b6104ca8161069b565b60006104f8602183610661565b7f636f6c6f6e792d657874656e73696f6e2d616c72656164792d6465706c6f79658152600160fa1b601902602082015260400192915050565b600061053e601e83610661565b7f636f6c6f6e792d657874656e73696f6e2d757365722d6e6f742d726f6f740000815260200192915050565b6000610577600c83610661565b7f4f6e6554785061796d656e740000000000000000000000000000000000000000815260200192915050565b6104ca8161067e565b602081016105ba82846104d0565b92915050565b606081016105ce82866104c1565b6105db60208301856104e2565b61047d60408301846105a3565b602081016105ba82846104d9565b602080825281016105ba816104eb565b602080825281016105ba81610531565b604080825281016106268161056a565b90506105ba60208301846104d0565b606080825281016106458161056a565b905061065460208301856104d0565b61044060408301846104d0565b90815260200190565b60006001600160a01b0382166105ba565b90565b60ff1690565b151590565b60006105ba825b60006105ba8261066a565b60006105ba8261067b56fe60806040523480156200001157600080fd5b50604051602080620011d6833981018060405262000033919081019062000120565b600080546001600160a01b0319166001600160a01b038381169190911791829055604080517f4e5e839500000000000000000000000000000000000000000000000000000000815290519290911691634e5e839591600480820192602092909190829003018186803b158015620000a957600080fd5b505afa158015620000be573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250620000e4919081019062000120565b600180546001600160a01b0319166001600160a01b03929092169190911790555062000168565b600062000119825162000149565b9392505050565b6000602082840312156200013357600080fd5b60006200014184846200010b565b949350505050565b600062000156826200015c565b92915050565b6001600160a01b031690565b61105e80620001786000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f23efb5014610030575b600080fd5b61004361003e366004610a96565b610045565b005b610050878784610365565b60008054604051600160e01b634f8df6430281526001600160a01b0390911690634f8df64390610090908d908d908b908b908b908b908b90600401610ea5565b602060405180830381600087803b1580156100aa57600080fd5b505af11580156100be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506100e29190810190610a78565b90506100ec6107e9565b600054604051600160e11b631940541b0281526001600160a01b0390911690633280a8369061011f908590600401610e61565b60006040518083038186803b15801561013757600080fd5b505afa15801561014b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101739190810190610a43565b905061017d610823565b600054604051600160e11b630d3d4c710281526001600160a01b0390911690631a7a98e2906101b0908890600401610e61565b604080518083038186803b1580156101c757600080fd5b505afa1580156101db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506101ff9190810190610a25565b90506000809054906101000a90046001600160a01b03166001600160a01b031663c68d19ea8d8d8e856020015187604001518c8e6040518863ffffffff1660e01b81526004016102559796959493929190610f35565b600060405180830381600087803b15801561026f57600080fd5b505af1158015610283573d6000803e3d6000fd5b5050600054604051600160e51b6306cb0d210281526001600160a01b03909116925063d961a42091506102be908f908f908890600401610f0d565b600060405180830381600087803b1580156102d857600080fd5b505af11580156102ec573d6000803e3d6000fd5b5050600054604051600160e01b630f4c52f30281526001600160a01b039091169250630f4c52f391506103259086908b90600401610e6f565b600060405180830381600087803b15801561033f57600080fd5b505af1158015610353573d6000803e3d6000fd5b50505050505050505050505050505050565b6000809054906101000a90046001600160a01b03166001600160a01b031663bf7e214f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156103b257600080fd5b505afa1580156103c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506103ea91908101906109e1565b6001600160a01b0316639110fc8f33856000809054906101000a90046001600160a01b031660405161041b90610dc7565b60405190819003812063ffffffff861660e01b825261043f94939291600401610de3565b60206040518083038186803b15801561045757600080fd5b505afa15801561046b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061048f9190810190610a07565b6104b757604051600160e51b62461bcd0281526004016104ae90610e21565b60405180910390fd5b6000809054906101000a90046001600160a01b03166001600160a01b031663bf7e214f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561050457600080fd5b505afa158015610518573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061053c91908101906109e1565b6001600160a01b0316639110fc8f33856000809054906101000a90046001600160a01b031660405161056d90610dd8565b60405190819003812063ffffffff861660e01b825261059194939291600401610de3565b60206040518083038186803b1580156105a957600080fd5b505afa1580156105bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506105e19190810190610a07565b61060057604051600160e51b62461bcd0281526004016104ae90610e51565b8083146107e45760008054604051600160e11b630d3d4c710281526001600160a01b0390911690631a7a98e29061063b908790600401610e61565b604080518083038186803b15801561065257600080fd5b505afa158015610666573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061068a9190810190610a25565b5160008054604051600160e11b630d3d4c7102815292935090916001600160a01b0390911690631a7a98e2906106c4908690600401610e61565b604080518083038186803b1580156106db57600080fd5b505afa1580156106ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506107139190810190610a25565b5190508061073657604051600160e51b62461bcd0281526004016104ae90610e31565b600154604051600160e11b6304e8852f0281526000916001600160a01b0316906309d10a5e9061076c9086908990600401610e8a565b60206040518083038186803b15801561078457600080fd5b505afa158015610798573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506107bc9190810190610a78565b90508181146107e057604051600160e51b62461bcd0281526004016104ae90610e41565b5050505b505050565b6040518060a0016040528060006001600160a01b031681526020016000151581526020016000815260200160008152602001606081525090565b604051806040016040528060008152602001600081525090565b60006108498235610fe7565b9392505050565b60006108498251610fe7565b600082601f83011261086d57600080fd5b815161088061087b82610fb8565b610f91565b915081818352602084019350602081019050838560208402820111156108a557600080fd5b60005b838110156108d157816108bb88826109d5565b84525060209283019291909101906001016108a8565b5050505092915050565b6000610849825161100e565b6000604082840312156108f957600080fd5b6109036040610f91565b9050600061091184846109d5565b8252506020610922848483016109d5565b60208301525092915050565b600060a0828403121561094057600080fd5b61094a60a0610f91565b905060006109588484610850565b8252506020610969848483016108db565b602083015250604061097d848285016109d5565b6040830152506060610991848285016109d5565b606083015250608082015167ffffffffffffffff8111156109b157600080fd5b6109bd8482850161085c565b60808301525092915050565b6000610849823561100b565b6000610849825161100b565b6000602082840312156109f357600080fd5b60006109ff8484610850565b949350505050565b600060208284031215610a1957600080fd5b60006109ff84846108db565b600060408284031215610a3757600080fd5b60006109ff84846108e7565b600060208284031215610a5557600080fd5b815167ffffffffffffffff811115610a6c57600080fd5b6109ff8482850161092e565b600060208284031215610a8a57600080fd5b60006109ff84846109d5565b60008060008060008060008060006101208a8c031215610ab557600080fd5b6000610ac18c8c6109c9565b9950506020610ad28c828d016109c9565b9850506040610ae38c828d016109c9565b9750506060610af48c828d016109c9565b9650506080610b058c828d0161083d565b95505060a0610b168c828d0161083d565b94505060c0610b278c828d016109c9565b93505060e0610b388c828d016109c9565b925050610100610b4a8c828d016109c9565b9150509295985092959850929598565b610b6381611013565b82525050565b610b6381610fe7565b610b6381610ff2565b6000610b88604383610fe2565b7f6164645061796d656e742875696e743235362c75696e743235362c616464726581527f73732c616464726573732c75696e743235362c75696e743235362c75696e74326020820152600160e81b6235362902604082015260430192915050565b6000610bf6603383610fd9565b7f636f6c6f6e792d6f6e652d74782d7061796d656e742d61646d696e697374726181527f74696f6e2d6e6f742d617574686f72697a656400000000000000000000000000602082015260400192915050565b6000610c55604d83610fe2565b7f6d6f766546756e64734265747765656e506f74732875696e743235362c75696e81527f743235362c75696e743235362c75696e743235362c75696e743235362c75696e60208201527f743235362c6164647265737329000000000000000000000000000000000000006040820152604d0192915050565b6000610cda602383610fd9565b7f64732d617574682d6368696c642d646f6d61696e2d646f65732d6e6f742d65788152600160ea1b621a5cdd02602082015260400192915050565b6000610d22602583610fd9565b7f636f6c6f6e792d6f6e652d74782d7061796d656e742d6261642d6368696c642d8152600160da1b641cdada5b1b02602082015260400192915050565b6000610d6c602c83610fd9565b7f636f6c6f6e792d6f6e652d74782d7061796d656e742d66756e64696e672d6e6f81527f742d617574686f72697a65640000000000000000000000000000000000000000602082015260400192915050565b610b638161100b565b6000610dd282610b7b565b92915050565b6000610dd282610c48565b60808101610df18287610b5a565b610dfe6020830186610dbe565b610e0b6040830185610b69565b610e186060830184610b72565b95945050505050565b60208082528101610dd281610be9565b60208082528101610dd281610ccd565b60208082528101610dd281610d15565b60208082528101610dd281610d5f565b60208101610dd28284610dbe565b60408101610e7d8285610dbe565b6108496020830184610b69565b60408101610e988285610dbe565b6108496020830184610dbe565b60e08101610eb3828a610dbe565b610ec06020830189610dbe565b610ecd6040830188610b69565b610eda6060830187610b69565b610ee76080830186610dbe565b610ef460a0830185610dbe565b610f0160c0830184610dbe565b98975050505050505050565b60608101610f1b8286610dbe565b610f286020830185610dbe565b6109ff6040830184610dbe565b60e08101610f43828a610dbe565b610f506020830189610dbe565b610f5d6040830188610dbe565b610f6a6060830187610dbe565b610f776080830186610dbe565b610f8460a0830185610dbe565b610f0160c0830184610b69565b60405181810167ffffffffffffffff81118282101715610fb057600080fd5b604052919050565b600067ffffffffffffffff821115610fcf57600080fd5b5060209081020190565b90815260200190565b919050565b6000610dd282610fff565b6001600160e01b03191690565b6001600160a01b031690565b90565b151590565b6000610dd2826000610dd282610fe756fea265627a7a72305820a95d4d620c498c3ab9e99eaa69fb4eb82eeae7a2e0e808eff4da453e9b58afca6c6578706572696d656e74616cf50037a265627a7a723058204f05cc21a1c867c1875934b84df5f1b8ff6478bd3a1aa67ffa847d9672c047126c6578706572696d656e74616cf50037";
