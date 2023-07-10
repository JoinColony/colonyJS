/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from "..";
import { OneTxPayment } from "../OneTxPayment";

export class OneTxPayment__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<OneTxPayment> {
    return super.deploy(overrides) as Promise<OneTxPayment>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): OneTxPayment {
    return super.attach(address) as OneTxPayment;
  }
  connect(signer: Signer): OneTxPayment__factory {
    return super.connect(signer) as OneTxPayment__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OneTxPayment {
    return new Contract(address, _abi, signerOrProvider) as OneTxPayment;
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
        internalType: "address",
        name: "agent",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fundamentalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nPayouts",
        type: "uint256",
      },
    ],
    name: "OneTxPaymentMade",
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
        name: "userAddress",
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
        internalType: "bytes4",
        name: "_sig",
        type: "bytes4",
      },
    ],
    name: "getCapabilityRoles",
    outputs: [
      {
        internalType: "bytes32",
        name: "_roles",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_permissionDomainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_childSkillIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_callerPermissionDomainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_callerChildSkillIndex",
        type: "uint256",
      },
      {
        internalType: "address payable[]",
        name: "_workers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_domainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_skillId",
        type: "uint256",
      },
    ],
    name: "makePayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_permissionDomainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_childSkillIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_callerPermissionDomainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_callerChildSkillIndex",
        type: "uint256",
      },
      {
        internalType: "address payable[]",
        name: "_workers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_domainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_skillId",
        type: "uint256",
      },
    ],
    name: "makePaymentFundedFromDomain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600180546001600160a01b031916339081179091556040517fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a261349c8061005e6000396000f3fe60806040526004361061011f5760003560e01c80636bf2dc43116100a0578063ac9650d811610064578063ac9650d814610329578063b3eac1d814610356578063bf7e214f1461038c578063bfd68ab7146103ac578063fcf6ba93146103ca57600080fd5b80636bf2dc431461025e5780637998a1c41461027e5780637a9e5e4b146102b15780638da5cb5b146102d15780639251cff41461030957600080fd5b80632dfbb083116100e75780632dfbb083146101c45780633408e470146101f2578063340df28f1461020557806354fd4d501461021a5780636281133d1461022e57600080fd5b80630c53c51c146101245780630d638f301461014d57806313af4035146101645780632a1b8f9b146101845780632a2678bb146101a4575b600080fd5b610137610132366004612a0e565b6103e9565b6040516101449190612ad1565b60405180910390f35b34801561015957600080fd5b506101626105d2565b005b34801561017057600080fd5b5061016261017f366004612aeb565b610612565b34801561019057600080fd5b5061016261019f366004612aeb565b61068e565b3480156101b057600080fd5b506101626101bf366004612c59565b61073b565b3480156101d057600080fd5b506101e46101df366004612d1b565b61119c565b604051908152602001610144565b3480156101fe57600080fd5b50466101e4565b34801561021157600080fd5b506101626111e7565b34801561022657600080fd5b5060056101e4565b34801561023a57600080fd5b5061024e610249366004612d45565b61121b565b6040519015158152602001610144565b34801561026a57600080fd5b50610162610279366004612c59565b61136f565b34801561028a57600080fd5b507fa89bc527362fca70a521a083b19b3b6bad9d33d24617254f625ef38bda0407cd6101e4565b3480156102bd57600080fd5b506101626102cc366004612aeb565b611e16565b3480156102dd57600080fd5b506001546102f1906001600160a01b031681565b6040516001600160a01b039091168152602001610144565b34801561031557600080fd5b50610162610324366004612dd9565b611e90565b34801561033557600080fd5b50610349610344366004612df6565b611ec5565b6040516101449190612e6a565b34801561036257600080fd5b506101e4610371366004612aeb565b6001600160a01b031660009081526004602052604090205490565b34801561039857600080fd5b506000546102f1906001600160a01b031681565b3480156103b857600080fd5b506003546001600160a01b03166102f1565b3480156103d657600080fd5b50600354600160a01b900460ff1661024e565b60606104188661040e886001600160a01b031660009081526004602052604090205490565b468888888861121b565b61047b5760405162461bcd60e51b815260206004820152602960248201527f6d6574617472616e73616374696f6e2d7369676e65722d7369676e617475726560448201526805adad2e6dac2e8c6d60bb1b60648201526084015b60405180910390fd5b6104848661215e565b600080306001600160a01b0316877f02bcc191e283bfba76a1369ec8ba06566f33010645097c104c312753e04935e88a6040516020016104c693929190612ecc565b60408051601f19818403018152908290526104e091612f05565b6000604051808303816000865af19150503d806000811461051d576040519150601f19603f3d011682016040523d82523d6000602084013e610522565b606091505b5091509150816105855760405162461bcd60e51b815260206004820152602860248201527f636f6c6f6e792d6d65746174782d66756e6374696f6e2d63616c6c2d756e737560448201526718d8d95cdcd99d5b60c21b6064820152608401610472565b7f5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b886105af61218a565b896040516105bf93929190612f21565b60405180910390a1979650505050505050565b6105e8336000356001600160e01b03191661222d565b6106045760405162461bcd60e51b815260040161047290612f56565b6003546001600160a01b0316ff5b610628336000356001600160e01b03191661222d565b6106445760405162461bcd60e51b815260040161047290612f56565b600180546001600160a01b0319166001600160a01b0383169081179091556040517fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a250565b6106a4336000356001600160e01b03191661222d565b6106c05760405162461bcd60e51b815260040161047290612f56565b6003546001600160a01b0316156107195760405162461bcd60e51b815260206004820152601b60248201527f657874656e73696f6e2d616c72656164792d696e7374616c6c656400000000006044820152606401610472565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b8351855114801561074d575082518551145b6107995760405162461bcd60e51b815260206004820152601c60248201527f6f6e652d74782d7061796d656e742d696e76616c69642d696e707574000000006044820152606401610472565b6003546001600160a01b0316633354f1386107b261218a565b8960058a876040518663ffffffff1660e01b81526004016107d7959493929190612fa6565b602060405180830381865afa1580156107f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108189190612fdd565b801561089e57506003546001600160a01b0316633354f13861083861218a565b8960068a876040518663ffffffff1660e01b815260040161085d959493929190612fa6565b602060405180830381865afa15801561087a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089e9190612fdd565b6108ea5760405162461bcd60e51b815260206004820152601d60248201527f6f6e652d74782d7061796d656e742d6e6f742d617574686f72697a65640000006044820152606401610472565b8451600103610c2f5760035485516000916001600160a01b031690634f8df643908c908c908a90869061091f5761091f612ffa565b60200260200101518960008151811061093a5761093a612ffa565b60200260200101518960008151811061095557610955612ffa565b602002602001015189896040518863ffffffff1660e01b81526004016109819796959493929190613010565b6020604051808303816000875af11580156109a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c4919061304c565b600354604051631940541b60e11b8152600481018390529192506000916001600160a01b0390911690633280a83690602401600060405180830381865afa158015610a13573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a3b9190810190613065565b6040908101516003549151630d3d4c7160e11b8152600481018790529092506000916001600160a01b031690631a7a98e2906024016040805180830381865afa158015610a8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab09190613163565b602001519050610af88c8c83858a600081518110610ad057610ad0612ffa565b60200260200101518c600081518110610aeb57610aeb612ffa565b602002602001015161230a565b6003546040516306cb0d2160e51b8152600481018e9052602481018d9052604481018590526001600160a01b039091169063d961a42090606401600060405180830381600087803b158015610b4c57600080fd5b505af1158015610b60573d6000803e3d6000fd5b505060035489516001600160a01b039091169250630f4c52f3915085908a90600090610b8e57610b8e612ffa565b60200260200101516040518363ffffffff1660e01b8152600401610bc59291909182526001600160a01b0316602082015260400190565b600060405180830381600087803b158015610bdf57600080fd5b505af1158015610bf3573d6000803e3d6000fd5b50505050600080516020613447833981519152610c0e61218a565b8951604051610c1f929187916131b1565b60405180910390a1505050611191565b60035460405163a5487a3760e01b8152600481018b9052602481018a9052604481018490526000916001600160a01b03169063a5487a37906064016020604051808303816000875af1158015610c89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cad919061304c565b6003546040516374b556c360e11b8152600481018390529192506000916001600160a01b039091169063e96aad869060240160c060405180830381865afa158015610cfc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2091906131d2565b6040908101516003549151630d3d4c7160e11b8152600481018790529092506000916001600160a01b031690631a7a98e2906024016040805180830381865afa158015610d71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d959190613163565b602001519050610da98c8c83858b8b612380565b6000805b895182101561115057811580610e11575089610dca600184613277565b81518110610dda57610dda612ffa565b60200260200101516001600160a01b03168a8381518110610dfd57610dfd612ffa565b60200260200101516001600160a01b031614155b15610fe157811580610e70575089610e2a600184613277565b81518110610e3a57610e3a612ffa565b60200260200101516001600160a01b03168a8381518110610e5d57610e5d612ffa565b60200260200101516001600160a01b0316115b610ebc5760405162461bcd60e51b815260206004820152601f60248201527f6f6e652d74782d7061796d656e742d6261642d776f726b65722d6f72646572006044820152606401610472565b80610ec68161328a565b6003548c519193506001600160a01b031691506317b46cb790879084908e9087908110610ef557610ef5612ffa565b60200260200101516040518463ffffffff1660e01b8152600401610f359392919092835260208301919091526001600160a01b0316604082015260600190565b600060405180830381600087803b158015610f4f57600080fd5b505af1158015610f63573d6000803e3d6000fd5b5050505085600014610fdc57600354604051637d09f6b960e11b81526004810187905260248101839052604481018890526001600160a01b039091169063fa13ed7290606401600060405180830381600087803b158015610fc357600080fd5b505af1158015610fd7573d6000803e3d6000fd5b505050505b61107e565b88610fed600184613277565b81518110610ffd57610ffd612ffa565b60200260200101516001600160a01b031689838151811061102057611020612ffa565b60200260200101516001600160a01b03161161107e5760405162461bcd60e51b815260206004820152601e60248201527f6f6e652d74782d7061796d656e742d6261642d746f6b656e2d6f7264657200006044820152606401610472565b60035489516001600160a01b039091169063476d1d0590879084908d90879081106110ab576110ab612ffa565b60200260200101518c87815181106110c5576110c5612ffa565b60200260200101516040518563ffffffff1660e01b815260040161110b949392919093845260208401929092526001600160a01b03166040830152606082015260800190565b600060405180830381600087803b15801561112557600080fd5b505af1158015611139573d6000803e3d6000fd5b5050505081806111489061328a565b925050610dad565b61115b858b8b612464565b60008051602061344783398151915261117261218a565b8b51604051611183929189916131b1565b60405180910390a150505050505b505050505050505050565b60006001600160e01b03198216636bf2dc4360e01b14806111cd57506001600160e01b03198216632a2678bb60e01b145b156111da57506060919050565b506000919050565b919050565b6111fd336000356001600160e01b03191661222d565b6112195760405162461bcd60e51b815260040161047290612f56565b565b6000806112988830898960405160200161123894939291906132a3565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b6040805160008082526020820180845284905260ff87169282019290925260608101889052608081018790529192509060019060a0016020604051602081039080840390855afa1580156112f0573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166113535760405162461bcd60e51b815260206004820152601f60248201527f636f6c6f6e792d6d65746174782d696e76616c69642d7369676e6174757265006044820152606401610472565b6001600160a01b038a8116911614915050979650505050505050565b83518551148015611381575082518551145b6113cd5760405162461bcd60e51b815260206004820152601c60248201527f6f6e652d74782d7061796d656e742d696e76616c69642d696e707574000000006044820152606401610472565b6003546001600160a01b0316633354f1386113e661218a565b600160058c876040518663ffffffff1660e01b815260040161140c959493929190612fa6565b602060405180830381865afa158015611429573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061144d9190612fdd565b80156114d357506003546001600160a01b0316633354f13861146d61218a565b8960068a876040518663ffffffff1660e01b8152600401611492959493929190612fa6565b602060405180830381865afa1580156114af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d39190612fdd565b61151f5760405162461bcd60e51b815260206004820152601d60248201527f6f6e652d74782d7061796d656e742d6e6f742d617574686f72697a65640000006044820152606401610472565b84516001036119225760035485516000916001600160a01b031690634f8df643906001908c908a90869061155557611555612ffa565b60200260200101518960008151811061157057611570612ffa565b6020026020010151600089896040518863ffffffff1660e01b815260040161159e9796959493929190613010565b6020604051808303816000875af11580156115bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115e1919061304c565b600354604051631940541b60e11b8152600481018390529192506000916001600160a01b0390911690633280a83690602401600060405180830381865afa158015611630573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526116589190810190613065565b604001519050600360009054906101000a90046001600160a01b03166001600160a01b031663c68d19ea60016000198d6001868b60008151811061169e5761169e612ffa565b60200260200101518d6000815181106116b9576116b9612ffa565b60200260200101516040518863ffffffff1660e01b81526004016116e397969594939291906132e9565b600060405180830381600087803b1580156116fd57600080fd5b505af1158015611711573d6000803e3d6000fd5b50505050600360009054906101000a90046001600160a01b03166001600160a01b03166354a9a08260018c858a60008151811061175057611750612ffa565b60200260200101518a60008151811061176b5761176b612ffa565b60200260200101516040518663ffffffff1660e01b81526004016117ba959493929190948552602085019390935260408401919091526001600160a01b03166060830152608082015260a00190565b600060405180830381600087803b1580156117d457600080fd5b505af11580156117e8573d6000803e3d6000fd5b50506003546040516306cb0d2160e51b815260016004820152602481018e9052604481018690526001600160a01b03909116925063d961a4209150606401600060405180830381600087803b15801561184057600080fd5b505af1158015611854573d6000803e3d6000fd5b505060035488516001600160a01b039091169250630f4c52f391508490899060009061188257611882612ffa565b60200260200101516040518363ffffffff1660e01b81526004016118b99291909182526001600160a01b0316602082015260400190565b600060405180830381600087803b1580156118d357600080fd5b505af11580156118e7573d6000803e3d6000fd5b5050505060008051602061344783398151915261190261218a565b8851604051611913929186916131b1565b60405180910390a15050611191565b60035460405163a5487a3760e01b815260016004820152602481018a9052604481018490526000916001600160a01b03169063a5487a37906064016020604051808303816000875af115801561197c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119a0919061304c565b6003546040516374b556c360e11b8152600481018390529192506000916001600160a01b039091169063e96aad869060240160c060405180830381865afa1580156119ef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a1391906131d2565b604001519050611a258a8288886125f6565b6000805b8851821015611dcc57811580611a8d575088611a46600184613277565b81518110611a5657611a56612ffa565b60200260200101516001600160a01b0316898381518110611a7957611a79612ffa565b60200260200101516001600160a01b031614155b15611c5d57811580611aec575088611aa6600184613277565b81518110611ab657611ab6612ffa565b60200260200101516001600160a01b0316898381518110611ad957611ad9612ffa565b60200260200101516001600160a01b0316115b611b385760405162461bcd60e51b815260206004820152601f60248201527f6f6e652d74782d7061796d656e742d6261642d776f726b65722d6f72646572006044820152606401610472565b80611b428161328a565b6003548b519193506001600160a01b031691506317b46cb790869084908d9087908110611b7157611b71612ffa565b60200260200101516040518463ffffffff1660e01b8152600401611bb19392919092835260208301919091526001600160a01b0316604082015260600190565b600060405180830381600087803b158015611bcb57600080fd5b505af1158015611bdf573d6000803e3d6000fd5b5050505084600014611c5857600354604051637d09f6b960e11b81526004810186905260248101839052604481018790526001600160a01b039091169063fa13ed7290606401600060405180830381600087803b158015611c3f57600080fd5b505af1158015611c53573d6000803e3d6000fd5b505050505b611cfa565b87611c69600184613277565b81518110611c7957611c79612ffa565b60200260200101516001600160a01b0316888381518110611c9c57611c9c612ffa565b60200260200101516001600160a01b031611611cfa5760405162461bcd60e51b815260206004820152601e60248201527f6f6e652d74782d7061796d656e742d6261642d746f6b656e2d6f7264657200006044820152606401610472565b60035488516001600160a01b039091169063476d1d0590869084908c9087908110611d2757611d27612ffa565b60200260200101518b8781518110611d4157611d41612ffa565b60200260200101516040518563ffffffff1660e01b8152600401611d87949392919093845260208401929092526001600160a01b03166040830152606082015260800190565b600060405180830381600087803b158015611da157600080fd5b505af1158015611db5573d6000803e3d6000fd5b505050508180611dc49061328a565b925050611a29565b611dd7848a8a612464565b600080516020613447833981519152611dee61218a565b8a51604051611dff929188916131b1565b60405180910390a150505050505050505050505050565b611e2c336000356001600160e01b03191661222d565b611e485760405162461bcd60e51b815260040161047290612f56565b600080546001600160a01b0319166001600160a01b038316908117825560405190917f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada491a250565b611ea6336000356001600160e01b03191661222d565b611ec25760405162461bcd60e51b815260040161047290612f56565b50565b60606000611ed161218a565b905060603330148015611eed57506001600160a01b0382163014155b15611f52577f02bcc191e283bfba76a1369ec8ba06566f33010645097c104c312753e04935e882604051602001611f4092919091825260601b6bffffffffffffffffffffffff1916602082015260340190565b60405160208183030381529060405290505b836001600160401b03811115611f6a57611f6a612912565b604051908082528060200260200182016040528015611f9d57816020015b6060815260200190600190039081611f885790505b50925060005b8481101561215557631592ca1b60e31b868683818110611fc557611fc5612ffa565b9050602002810190611fd79190613322565b611fe09161336f565b6001600160e01b031916036120415760405162461bcd60e51b815260206004820152602160248201527f636f6c6f6e792d6d756c746963616c6c2d63616e6e6f742d6d756c746963616c6044820152601b60fa1b6064820152608401610472565b6000803088888581811061205757612057612ffa565b90506020028101906120699190613322565b8660405160200161207c9392919061339f565b60408051601f198184030181529082905261209691612f05565b600060405180830381855af49150503d80600081146120d1576040519150601f19603f3d011682016040523d82523d6000602084013e6120d6565b606091505b509150915081612122576044815110156120ef57600080fd5b6004810190508080602001905181019061210991906133c6565b60405162461bcd60e51b81526004016104729190612ad1565b8086848151811061213557612135612ffa565b60200260200101819052505050808061214d9061328a565b915050611fa3565b50505092915050565b6001600160a01b03811660009081526004602052604081208054916121828361328a565b919050555050565b600036333014801561219d575060348110155b1561222657600080368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505082810160131901519091507f02bcc191e283bfba76a1369ec8ba06566f33010645097c104c312753e04935e881146122155733935050505090565b5001516001600160a01b0316919050565b3391505090565b6000306001600160a01b0384160361224757506001612304565b6001546001600160a01b039081169084160361226557506001612304565b6000546001600160a01b031661227d57506000612304565b60005460405163b700961360e01b81526001600160a01b0385811660048301523060248301526001600160e01b0319851660448301529091169063b700961390606401602060405180830381865afa1580156122dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123019190612fdd565b90505b92915050565b6003546040516363468cf560e11b81526001600160a01b039091169063c68d19ea90612346908990899081908a908a908a908a906004016132e9565b600060405180830381600087803b15801561236057600080fd5b505af1158015612374573d6000803e3d6000fd5b50505050505050505050565b600080600061238f85856126e8565b92509250925060005b8381101561237457600360009054906101000a90046001600160a01b03166001600160a01b031663c68d19ea8b8b8c8c8c8888815181106123db576123db612ffa565b60200260200101518a89815181106123f5576123f5612ffa565b60200260200101516040518863ffffffff1660e01b815260040161241f97969594939291906132e9565b600060405180830381600087803b15801561243957600080fd5b505af115801561244d573d6000803e3d6000fd5b50505050808061245c9061328a565b915050612398565b6003546040516359f3af6360e11b8152600481018590526001600160a01b039091169063b3e75ec690602401600060405180830381600087803b1580156124aa57600080fd5b505af11580156124be573d6000803e3d6000fd5b505050506000805b83518110156125ef5780158061252a5750836124e3600183613277565b815181106124f3576124f3612ffa565b60200260200101516001600160a01b031684828151811061251657612516612ffa565b60200260200101516001600160a01b031614155b1561253d57816125398161328a565b9250505b60035483516001600160a01b0390911690632fe96899908790859087908690811061256a5761256a612ffa565b60200260200101516040518463ffffffff1660e01b81526004016125aa9392919092835260208301919091526001600160a01b0316604082015260600190565b600060405180830381600087803b1580156125c457600080fd5b505af11580156125d8573d6000803e3d6000fd5b5050505080806125e79061328a565b9150506124c6565b5050505050565b600080600061260585856126e8565b92509250925060005b838110156126de57600360009054906101000a90046001600160a01b03166001600160a01b031663c68d19ea60016000198b60018c88888151811061265557612655612ffa565b60200260200101518a898151811061266f5761266f612ffa565b60200260200101516040518863ffffffff1660e01b815260040161269997969594939291906132e9565b600060405180830381600087803b1580156126b357600080fd5b505af11580156126c7573d6000803e3d6000fd5b5050505080806126d69061328a565b91505061260e565b5050505050505050565b600060608060008086516001600160401b0381111561270957612709612912565b604051908082528060200260200182016040528015612732578160200160208202803683370190505b509050600087516001600160401b0381111561275057612750612912565b604051908082528060200260200182016040528015612779578160200160208202803683370190505b50905060005b88518110156128ee576000805b8581108015612799575081155b15612843578481815181106127b0576127b0612ffa565b60200260200101516001600160a01b03168b84815181106127d3576127d3612ffa565b60200260200101516001600160a01b03160361283157600191508983815181106127ff576127ff612ffa565b602002602001015184828151811061281957612819612ffa565b6020026020010181815161282d9190613433565b9052505b8061283b8161328a565b91505061278c565b816128d9578a838151811061285a5761285a612ffa565b602002602001015185878151811061287457612874612ffa565b60200260200101906001600160a01b031690816001600160a01b0316815250508983815181106128a6576128a6612ffa565b60200260200101518487815181106128c0576128c0612ffa565b6020908102919091010152856128d58161328a565b9650505b505080806128e69061328a565b91505061277f565b50919450925090509250925092565b6001600160a01b0381168114611ec257600080fd5b634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b038111828210171561294a5761294a612912565b60405290565b604051601f8201601f191681016001600160401b038111828210171561297857612978612912565b604052919050565b60006001600160401b0382111561299957612999612912565b50601f01601f191660200190565b600082601f8301126129b857600080fd5b81356129cb6129c682612980565b612950565b8181528460208386010111156129e057600080fd5b816020850160208301376000918101602001919091529392505050565b803560ff811681146111e257600080fd5b600080600080600060a08688031215612a2657600080fd5b8535612a31816128fd565b945060208601356001600160401b03811115612a4c57600080fd5b612a58888289016129a7565b9450506040860135925060608601359150612a75608087016129fd565b90509295509295909350565b60005b83811015612a9c578181015183820152602001612a84565b50506000910152565b60008151808452612abd816020860160208601612a81565b601f01601f19169290920160200192915050565b602081526000612ae46020830184612aa5565b9392505050565b600060208284031215612afd57600080fd5b8135612ae4816128fd565b60006001600160401b03821115612b2157612b21612912565b5060051b60200190565b600082601f830112612b3c57600080fd5b81356020612b4c6129c683612b08565b82815260059290921b84018101918181019086841115612b6b57600080fd5b8286015b84811015612b8f578035612b82816128fd565b8352918301918301612b6f565b509695505050505050565b600082601f830112612bab57600080fd5b81356020612bbb6129c683612b08565b82815260059290921b84018101918181019086841115612bda57600080fd5b8286015b84811015612b8f578035612bf1816128fd565b8352918301918301612bde565b600082601f830112612c0f57600080fd5b81356020612c1f6129c683612b08565b82815260059290921b84018101918181019086841115612c3e57600080fd5b8286015b84811015612b8f5780358352918301918301612c42565b60008060008060008060008060006101208a8c031215612c7857600080fd5b8935985060208a0135975060408a0135965060608a0135955060808a01356001600160401b0380821115612cab57600080fd5b612cb78d838e01612b2b565b965060a08c0135915080821115612ccd57600080fd5b612cd98d838e01612b9a565b955060c08c0135915080821115612cef57600080fd5b50612cfc8c828d01612bfe565b93505060e08a013591506101008a013590509295985092959850929598565b600060208284031215612d2d57600080fd5b81356001600160e01b031981168114612ae457600080fd5b600080600080600080600060e0888a031215612d6057600080fd5b8735612d6b816128fd565b9650602088013595506040880135945060608801356001600160401b03811115612d9457600080fd5b612da08a828b016129a7565b9450506080880135925060a08801359150612dbd60c089016129fd565b905092959891949750929550565b8015158114611ec257600080fd5b600060208284031215612deb57600080fd5b8135612ae481612dcb565b60008060208385031215612e0957600080fd5b82356001600160401b0380821115612e2057600080fd5b818501915085601f830112612e3457600080fd5b813581811115612e4357600080fd5b8660208260051b8501011115612e5857600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015612ebf57603f19888603018452612ead858351612aa5565b94509285019290850190600101612e91565b5092979650505050505050565b60008451612ede818460208901612a81565b919091019283525060601b6bffffffffffffffffffffffff19166020820152603401919050565b60008251612f17818460208701612a81565b9190910192915050565b6001600160a01b03848116825283166020820152606060408201819052600090612f4d90830184612aa5565b95945050505050565b602080825260149082015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604082015260600190565b60088110612fa257634e487b7160e01b600052602160045260246000fd5b9052565b6001600160a01b03861681526020810185905260a08101612fca6040830186612f84565b6060820193909352608001529392505050565b600060208284031215612fef57600080fd5b8151612ae481612dcb565b634e487b7160e01b600052603260045260246000fd5b96875260208701959095526001600160a01b039384166040870152919092166060850152608084019190915260a083015260c082015260e00190565b60006020828403121561305e57600080fd5b5051919050565b6000602080838503121561307857600080fd5b82516001600160401b038082111561308f57600080fd5b9084019060a082870312156130a357600080fd5b6130ab612928565b82516130b6816128fd565b8152828401516130c581612dcb565b80858301525060408301516040820152606083015160608201526080830151828111156130f157600080fd5b80840193505086601f84011261310657600080fd5b825191506131166129c683612b08565b82815260059290921b8301840191848101908884111561313557600080fd5b938501935b838510156131535784518252938501939085019061313a565b6080830152509695505050505050565b60006040828403121561317557600080fd5b604051604081018181106001600160401b038211171561319757613197612912565b604052825181526020928301519281019290925250919050565b6001600160a01b039390931683526020830191909152604082015260600190565b600060c082840312156131e457600080fd5b60405160c081018181106001600160401b038211171561320657613206612912565b60405282516004811061321857600080fd5b81526020830151613228816128fd565b8060208301525060408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561230457612304613261565b60006001820161329c5761329c613261565b5060010190565b8481526bffffffffffffffffffffffff198460601b166020820152826034820152600082516132d9816054850160208701612a81565b9190910160540195945050505050565b968752602087019590955260408601939093526060850191909152608084015260a08301526001600160a01b031660c082015260e00190565b6000808335601e1984360301811261333957600080fd5b8301803591506001600160401b0382111561335357600080fd5b60200191503681900382131561336857600080fd5b9250929050565b6001600160e01b031981358181169160048510156133975780818660040360031b1b83161692505b505092915050565b8284823760008382016000815283516133bc818360208801612a81565b0195945050505050565b6000602082840312156133d857600080fd5b81516001600160401b038111156133ee57600080fd5b8201601f810184136133ff57600080fd5b805161340d6129c682612980565b81815285602083850101111561342257600080fd5b612f4d826020830160208601612a81565b808201808211156123045761230461326156fed9a1ad84578b017e90e4244baf045bcabf50583f51887a391bbe8183e8e34ecaa26469706673582212205d96d76903be5d51d56b4c1f991994d1e2634d9e80bb87c645ca3f34461df3ee64736f6c63430008140033";
