/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Whitelist, WhitelistInterface } from "../Whitelist";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "AgreementSigned",
    type: "event",
  },
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
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "UserApproved",
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
        name: "",
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
        name: "",
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
        internalType: "bool",
        name: "_useApprovals",
        type: "bool",
      },
      {
        internalType: "string",
        name: "_agreementHash",
        type: "string",
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
        internalType: "address[]",
        name: "_users",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "approveUsers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_agreementHash",
        type: "string",
      },
    ],
    name: "signAgreement",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "isApproved",
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
    name: "getUseApprovals",
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
    name: "getAgreementHash",
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
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getApproval",
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
    name: "getSignature",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600180546001600160a01b031916339081179091556040517fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a2611b6b8061005e6000396000f3fe6080604052600436106101665760003560e01c8063696da921116100d1578063a30878601161008a578063bfd68ab711610064578063bfd68ab7146103e5578063da076a87146103fa578063fcd911041461041a578063fcf6ba931461042f57610166565b8063a308786014610390578063b3eac1d8146103b0578063bf7e214f146103d057610166565b8063696da921146102e45780637998a1c4146102f95780637a9e5e4b1461030e5780638da5cb5b1461032e5780639251cff414610350578063a11c1d511461037057610166565b80632dfbb083116101235780632dfbb083146102385780633408e47014610265578063340df28f1461027a57806354fd4d501461028f5780636281133d146102a4578063673448dd146102c457610166565b80630c53c51c1461016b5780630d638f301461019457806313af4035146101ab5780631bbfb009146101cb578063277fc0e9146101eb5780632a1b8f9b14610218575b600080fd5b61017e6101793660046112ff565b610444565b60405161018b91906117d8565b60405180910390f35b3480156101a057600080fd5b506101a96105a0565b005b3480156101b757600080fd5b506101a96101c63660046112e3565b6105e0565b3480156101d757600080fd5b506101a96101e63660046113f6565b610662565b3480156101f757600080fd5b5061020b6102063660046112e3565b610861565b60405161018b91906117a6565b34801561022457600080fd5b506101a96102333660046112e3565b610883565b34801561024457600080fd5b50610258610253366004611536565b610900565b60405161018b91906117b1565b34801561027157600080fd5b50610258610906565b34801561028657600080fd5b506101a961090b565b34801561029b57600080fd5b5061025861093f565b3480156102b057600080fd5b5061020b6102bf366004611371565b610944565b3480156102d057600080fd5b5061020b6102df3660046112e3565b610a14565b3480156102f057600080fd5b5061017e610aec565b34801561030557600080fd5b50610258610b82565b34801561031a57600080fd5b506101a96103293660046112e3565b610ba6565b34801561033a57600080fd5b50610343610c24565b60405161018b9190611701565b34801561035c57600080fd5b506101a961036b3660046114b0565b610c33565b34801561037c57600080fd5b506101a961038b36600461155e565b610c83565b34801561039c57600080fd5b506101a96103ab3660046114e8565b610e09565b3480156103bc57600080fd5b506102586103cb3660046112e3565b610f79565b3480156103dc57600080fd5b50610343610f94565b3480156103f157600080fd5b50610343610fa3565b34801561040657600080fd5b5061020b6104153660046112e3565b610fb2565b34801561042657600080fd5b5061020b610fd0565b34801561043b57600080fd5b5061020b610fe0565b60606104648661045388610f79565b61045b610906565b88888888610944565b6104895760405162461bcd60e51b8152600401610480906118f8565b60405180910390fd5b61049286610ff0565b60006060306001600160a01b0316877f02bcc191e283bfba76a1369ec8ba06566f33010645097c104c312753e04935e88a6040516020016104d5939291906115e1565b60408051601f19818403018152908290526104ef916115c5565b6000604051808303816000865af19150503d806000811461052c576040519150601f19603f3d011682016040523d82523d6000602084013e610531565b606091505b5091509150816105535760405162461bcd60e51b8152600401610480906117eb565b7f5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b8861057d611010565b8960405161058d93929190611744565b60405180910390a1979650505050505050565b6105b6336000356001600160e01b0319166110bf565b6105d25760405162461bcd60e51b81526004016104809061186a565b6003546001600160a01b0316ff5b6105f6336000356001600160e01b0319166110bf565b6106125760405162461bcd60e51b81526004016104809061186a565b600180546001600160a01b0319166001600160a01b0383811691909117918290556040519116907fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a250565b600354600160a81b900460ff168061068e57506004546002600019610100600184161502019091160415155b6106aa5760405162461bcd60e51b815260040161048090611a16565b600354600160a01b900460ff16156106d45760405162461bcd60e51b815260040161048090611a84565b600354600160a81b900460ff166106fd5760405162461bcd60e51b815260040161048090611898565b6003546001600160a01b031663ab2f7ae2610716611010565b600160066040518463ffffffff1660e01b815260040161073893929190611715565b60206040518083038186803b15801561075057600080fd5b505afa158015610764573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078891906114cc565b6107a45760405162461bcd60e51b8152600401610480906118c8565b60005b825181101561085c5781600560008584815181106107c157fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff02191690831515021790555082818151811061080c57fe5b60200260200101516001600160a01b03167f60dc44a8ff6f8c563265a9654c756ef7d51cb49658531b2c735ef754c74e8a348360405161084c91906117a6565b60405180910390a26001016107a7565b505050565b6001600160a01b03811660009081526006602052604090205460ff165b919050565b610899336000356001600160e01b0319166110bf565b6108b55760405162461bcd60e51b81526004016104809061186a565b6003546001600160a01b0316156108de5760405162461bcd60e51b815260040161048090611941565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b50600090565b465b90565b610921336000356001600160e01b0319166110bf565b61093d5760405162461bcd60e51b81526004016104809061186a565b565b600290565b60008061097c8830898960405160200161096194939291906116bb565b6040516020818303038152906040528051906020012061119b565b90506000600182858888604051600081526020016040526040516109a394939291906117ba565b6020604051602081039080840390855afa1580156109c5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166109f85760405162461bcd60e51b815260040161048090611a4d565b6001600160a01b038a8116911614915050979650505050505050565b600354600090600160a81b900460ff1680610a4357506004546002600019610100600184161502019091160415155b610a5f5760405162461bcd60e51b815260040161048090611a16565b600354600160a01b900460ff16158015610aa55750600354600160a81b900460ff161580610aa557506001600160a01b03821660009081526005602052604090205460ff165b8015610ae65750600454600260001961010060018416150201909116041580610ae657506001600160a01b03821660009081526006602052604090205460ff165b92915050565b60048054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610b785780601f10610b4d57610100808354040283529160200191610b78565b820191906000526020600020905b815481529060010190602001808311610b5b57829003601f168201915b5050505050905090565b7fc3d232a6c0e2fb343117f17a5ff344a1a84769265318c6d7a8d7d9b2f8bb49e390565b610bbc336000356001600160e01b0319166110bf565b610bd85760405162461bcd60e51b81526004016104809061186a565b600080546001600160a01b0319166001600160a01b03838116919091178083556040519116917f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada491a250565b6001546001600160a01b031681565b610c49336000356001600160e01b0319166110bf565b610c655760405162461bcd60e51b81526004016104809061186a565b60038054911515600160a01b0260ff60a01b19909216919091179055565b600354600160a81b900460ff1680610caf57506004546002600019610100600184161502019091160415155b610ccb5760405162461bcd60e51b815260040161048090611a16565b600354600160a01b900460ff1615610cf55760405162461bcd60e51b815260040161048090611a84565b60045460026000196101006001841615020190911604610d275760405162461bcd60e51b8152600401610480906119af565b80604051602001610d3891906115c5565b604051602081830303815290604052805190602001206004604051602001610d60919061161a565b6040516020818303038152906040528051906020012014610d935760405162461bcd60e51b815260040161048090611978565b600160066000610da1611010565b6001600160a01b031681526020810191909152604001600020805460ff1916911515919091179055610dd1611010565b6001600160a01b03167f5cca47fc45be2c2c68100afd7cd2431116c0c535c159e4f6c7e63934cf9f7aad60405160405180910390a250565b6003546001600160a01b031663ab2f7ae2610e22611010565b6001806040518463ffffffff1660e01b8152600401610e4393929190611715565b60206040518083038186803b158015610e5b57600080fd5b505afa158015610e6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9391906114cc565b610eaf5760405162461bcd60e51b8152600401610480906118c8565b600354600160a81b900460ff16158015610edc575060045460026000196101006001841615020190911604155b610ef85760405162461bcd60e51b815260040161048090611833565b8180610f05575060008151115b610f215760405162461bcd60e51b8152600401610480906119df565b6003805460ff60a81b1916600160a81b841515021790558051610f4b9060049060208401906111cb565b506040517f690c4b6201f6a4c703f9d21c205d98a08dff8461e7a71e49c6d47cc8b894850190600090a15050565b6001600160a01b031660009081526007602052604090205490565b6000546001600160a01b031681565b6003546001600160a01b031690565b6001600160a01b031660009081526005602052604090205460ff1690565b600354600160a81b900460ff1690565b600354600160a01b900460ff1690565b6001600160a01b0316600090815260076020526040902080546001019055565b6000363330148015611023575060348110155b156110b25760606000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505082810160131901519091507f02bcc191e283bfba76a1369ec8ba06566f33010645097c104c312753e04935e8811461109e57339350505050610908565b508101516001600160a01b031691506110bb565b33915050610908565b5090565b60006001600160a01b0383163014156110da57506001610ae6565b6001546001600160a01b03848116911614156110f857506001610ae6565b6000546001600160a01b031661111057506000610ae6565b60005460405163b700961360e01b81526001600160a01b039091169063b70096139061114490869030908790600401611779565b60206040518083038186803b15801561115c57600080fd5b505afa158015611170573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119491906114cc565b9392505050565b6000816040516020016111ae919061168a565b604051602081830303815290604052805190602001209050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061120c57805160ff1916838001178555611239565b82800160010185558215611239579182015b8281111561123957825182559160200191906001019061121e565b506110bb9291505b808211156110bb5760008155600101611241565b803561087e81611b0f565b803561087e81611b27565b600082601f83011261127b578081fd5b813567ffffffffffffffff81111561128f57fe5b6112a2601f8201601f1916602001611abb565b91508082528360208285010111156112b957600080fd5b8060208401602084013760009082016020015292915050565b803560ff8116811461087e57600080fd5b6000602082840312156112f4578081fd5b813561119481611b0f565b600080600080600060a08688031215611316578081fd5b853561132181611b0f565b9450602086013567ffffffffffffffff81111561133c578182fd5b6113488882890161126b565b9450506040860135925060608601359150611365608087016112d2565b90509295509295909350565b600080600080600080600060e0888a03121561138b578182fd5b873561139681611b0f565b96506020880135955060408801359450606088013567ffffffffffffffff8111156113bf578283fd5b6113cb8a828b0161126b565b9450506080880135925060a088013591506113e860c089016112d2565b905092959891949750929550565b60008060408385031215611408578182fd5b823567ffffffffffffffff8082111561141f578384fd5b818501915085601f830112611432578384fd5b81358181111561143e57fe5b60209150818102611450838201611abb565b8281528381019085850183870186018b101561146a578889fd5b8896505b848710156114935761147f81611255565b83526001969096019591850191850161146e565b5096506114a592505050858201611260565b925050509250929050565b6000602082840312156114c1578081fd5b813561119481611b27565b6000602082840312156114dd578081fd5b815161119481611b27565b600080604083850312156114fa578182fd5b823561150581611b27565b9150602083013567ffffffffffffffff811115611520578182fd5b61152c8582860161126b565b9150509250929050565b600060208284031215611547578081fd5b81356001600160e01b031981168114611194578182fd5b60006020828403121561156f578081fd5b813567ffffffffffffffff811115611585578182fd5b6115918482850161126b565b949350505050565b600081518084526115b1816020860160208601611adf565b601f01601f19169290920160200192915050565b600082516115d7818460208701611adf565b9190910192915050565b600084516115f3818460208901611adf565b919091019283525060601b6bffffffffffffffffffffffff19166020820152603401919050565b600080835460018082166000811461163957600181146116505761167f565b60ff198316865260028304607f168601935061167f565b600283048786526020808720875b838110156116775781548a82015290850190820161165e565b505050860193505b509195945050505050565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152601c810191909152603c0190565b60008582526bffffffffffffffffffffffff198560601b16602083015283603483015282516116f1816054850160208701611adf565b9190910160540195945050505050565b6001600160a01b0391909116815260200190565b6001600160a01b038416815260208101839052606081016008831061173657fe5b826040830152949350505050565b6001600160a01b0384811682528316602082015260606040820181905260009061177090830184611599565b95945050505050565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b901515815260200190565b90815260200190565b93845260ff9290921660208401526040830152606082015260800190565b6000602082526111946020830184611599565b60208082526028908201527f636f6c6f6e792d6d65746174782d66756e6374696f6e2d63616c6c2d756e737560408201526718d8d95cdcd99d5b60c21b606082015260800190565b6020808252601d908201527f77686974656c6973742d616c72656164792d696e697469616c69736564000000604082015260600190565b602080825260149082015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604082015260600190565b60208082526016908201527577686974656c6973742d6e6f2d617070726f76616c7360501b604082015260600190565b6020808252601690820152751dda1a5d195b1a5cdd0b5d5b985d5d1a1bdc9a5cd95960521b604082015260600190565b60208082526029908201527f6d6574617472616e73616374696f6e2d7369676e65722d7369676e617475726560408201526805adad2e6dac2e8c6d60bb1b606082015260800190565b6020808252601b908201527f657874656e73696f6e2d616c72656164792d696e7374616c6c65640000000000604082015260600190565b60208082526017908201527f77686974656c6973742d6261642d7369676e6174757265000000000000000000604082015260600190565b6020808252601690820152751dda1a5d195b1a5cdd0b5b9bcb5859dc99595b595b9d60521b604082015260600190565b6020808252601c908201527f77686974656c6973742d6261642d696e697469616c69736174696f6e00000000604082015260600190565b60208082526019908201527f77686974656c6973742d6e6f742d696e697469616c6973656400000000000000604082015260600190565b6020808252601f908201527f636f6c6f6e792d6d65746174782d696e76616c69642d7369676e617475726500604082015260600190565b6020808252601b908201527f636f6c6f6e792d657874656e73696f6e2d646570726563617465640000000000604082015260600190565b60405181810167ffffffffffffffff81118282101715611ad757fe5b604052919050565b60005b83811015611afa578181015183820152602001611ae2565b83811115611b09576000848401525b50505050565b6001600160a01b0381168114611b2457600080fd5b50565b8015158114611b2457600080fdfea2646970667358221220f293002c12f201d41cd7fa8633516d593348f19ccf776fd73d1ccbcc4661c75364736f6c63430007030033";

type WhitelistConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WhitelistConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Whitelist__factory extends ContractFactory {
  constructor(...args: WhitelistConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Whitelist";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Whitelist> {
    return super.deploy(overrides || {}) as Promise<Whitelist>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Whitelist {
    return super.attach(address) as Whitelist;
  }
  connect(signer: Signer): Whitelist__factory {
    return super.connect(signer) as Whitelist__factory;
  }
  static readonly contractName: "Whitelist";
  public readonly contractName: "Whitelist";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WhitelistInterface {
    return new utils.Interface(_abi) as WhitelistInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Whitelist {
    return new Contract(address, _abi, signerOrProvider) as Whitelist;
  }
}