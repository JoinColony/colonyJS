/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CoinMachine, CoinMachineInterface } from "../CoinMachine";

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
        indexed: false,
        internalType: "address",
        name: "buyer",
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
        name: "",
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
        name: "",
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
        name: "",
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
        name: "",
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
        name: "",
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
        name: "",
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
        name: "",
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
        name: "",
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
        name: "",
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
        name: "",
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
        name: "",
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
        name: "",
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
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserLimit",
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
        name: "_user",
        type: "address",
      },
    ],
    name: "getMaxPurchase",
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
    name: "getWhitelist",
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
    name: "getEvolvePrice",
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
  "0x608060405234801561001057600080fd5b50600180546001600160a01b031916339081179091556040517fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a2611e518061005e6000396000f3fe6080604052600436106101f95760003560e01c80638469ddc71161010d578063bf7e214f116100a0578063e9587e861161006f578063e9587e86146104da578063eb91d37e146104fa578063f51361c71461050f578063f9f81e0914610524578063fcf6ba9314610546576101f9565b8063bf7e214f1461047b578063bfd68ab714610490578063c6ea3b0b146104a5578063d01f63f5146104c5576101f9565b8063a0e3ad26116100dc578063a0e3ad2614610427578063a5c56a2b1461043c578063a83627de14610451578063b5b2f1ef14610466576101f9565b80638469ddc7146103bd578063854cff2f146103d25780638da5cb5b146103f25780639251cff414610407576101f9565b80632a1b8f9b116101905780633610724e1161015f5780633610724e1461034b57806354fd4d501461035e5780637998a1c4146103735780637a9e5e4b1461038857806382b2e257146103a8576101f9565b80632a1b8f9b146102e15780632a85c366146103015780632dfbb08314610316578063340df28f14610336576101f9565b806313af4035116101cc57806313af4035146102825780631f7ea81f146102a257806321df0da7146102b757806329287b46146102cc576101f9565b80630a1e0c22146101fe5780630d638f3014610229578063114f67691461024057806312defc731461026d575b600080fd5b34801561020a57600080fd5b5061021361055b565b60405161022091906118e1565b60405180910390f35b34801561023557600080fd5b5061023e61056b565b005b34801561024c57600080fd5b5061026061025b366004611794565b61067d565b60405161022091906119ba565b34801561027957600080fd5b506102606106bf565b34801561028e57600080fd5b5061023e61029d366004611794565b6106c5565b3480156102ae57600080fd5b50610260610747565b3480156102c357600080fd5b5061021361074d565b3480156102d857600080fd5b5061026061075c565b3480156102ed57600080fd5b5061023e6102fc366004611794565b610762565b34801561030d57600080fd5b506102606107df565b34801561032257600080fd5b50610260610331366004611889565b6107e5565b34801561034257600080fd5b5061023e6107eb565b61023e6103593660046118b1565b6108fa565b34801561036a57600080fd5b50610260610cd6565b34801561037f57600080fd5b50610260610cdb565b34801561039457600080fd5b5061023e6103a3366004611794565b610cff565b3480156103b457600080fd5b50610260610d7d565b3480156103c957600080fd5b50610260610e03565b3480156103de57600080fd5b5061023e6103ed366004611794565b610e09565b3480156103fe57600080fd5b50610213610f2a565b34801561041357600080fd5b5061023e610422366004611851565b610f39565b34801561043357600080fd5b50610260610f97565b34801561044857600080fd5b50610260610f9d565b34801561045d57600080fd5b5061023e610fa3565b34801561047257600080fd5b506102606110ad565b34801561048757600080fd5b506102136110d6565b34801561049c57600080fd5b506102136110e5565b3480156104b157600080fd5b5061023e6104c03660046117cc565b6110f4565b3480156104d157600080fd5b50610213611398565b3480156104e657600080fd5b506102606104f5366004611794565b6113a7565b34801561050657600080fd5b5061026061141c565b34801561051b57600080fd5b506102606114c7565b34801561053057600080fd5b506105396114cd565b60405161022091906119af565b34801561055257600080fd5b506105396114dd565b6004546001600160a01b03165b90565b610581336000356001600160e01b0319166114ed565b6105a65760405162461bcd60e51b815260040161059d906119f2565b60405180910390fd5b6010546001600160a01b03161561066f5760006105c1610d7d565b9050801561066d5760105460035460405163a9059cbb60e01b81526001600160a01b039283169263a9059cbb926105ff929116908590600401611948565b602060405180830381600087803b15801561061957600080fd5b505af115801561062d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610651919061186d565b61066d5760405162461bcd60e51b815260040161059d90611ca0565b505b6003546001600160a01b0316ff5b600080610688610d7d565b905060006106946110ad565b905060006106a1856113a7565b90506106b6816106b185856115c9565b6115c9565b95945050505050565b600e5490565b6106db336000356001600160e01b0319166114ed565b6106f75760405162461bcd60e51b815260040161059d906119f2565b600180546001600160a01b0319166001600160a01b0383811691909117918290556040519116907fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a250565b60095490565b6010546001600160a01b031690565b600f5490565b610778336000356001600160e01b0319166114ed565b6107945760405162461bcd60e51b815260040161059d906119f2565b6003546001600160a01b0316156107bd5760405162461bcd60e51b815260040161059d90611b8d565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b60085490565b50600090565b610801336000356001600160e01b0319166114ed565b61081d5760405162461bcd60e51b815260040161059d906119f2565b600360009054906101000a90046001600160a01b03166001600160a01b03166321df0da76040518163ffffffff1660e01b815260040160206040518083038186803b15801561086b57600080fd5b505afa15801561087f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a391906117b0565b601080546001600160a01b0319166001600160a01b0392909216919091179055670de0b6b3a76400006012556108f860006108dc610d7d565b1180156108f35750600354600160a01b900460ff16155b6115e0565b565b600354600160a01b900460ff16156109245760405162461bcd60e51b815260040161059d90611db3565b61092c610fa3565b6011546001600160a01b031615806109bf575060115460405163673448dd60e01b81526001600160a01b039091169063673448dd9061096f9033906004016118e1565b60206040518083038186803b15801561098757600080fd5b505afa15801561099b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109bf919061186d565b6109db5760405162461bcd60e51b815260040161059d90611a4e565b60006109e63361067d565b905060006109f482846115c9565b90506000610a0482600c54611641565b905060008211610a1657505050610cd3565b610a22600e5482611665565b600e55600d54610a329083611665565b600d8190556009541015610a4257fe5b670de0b6b3a76400006012541015610a8e57610a6060135483611665565b60135533600090815260146020526040902054610a7d9083611665565b336000908152601460205260409020555b610a96610d7d565b8210610aa657610aa660006115e0565b6004546001600160a01b0316610b4f5780341015610ad65760405162461bcd60e51b815260040161059d90611c69565b80341115610b0f5760405133903483900380156108fc02916000818181858888f19350505050158015610b0d573d6000803e3d6000fd5b505b6003546040516001600160a01b039091169082156108fc029083906000818181858888f19350505050158015610b49573d6000803e3d6000fd5b50610bf4565b600480546003546040516323b872dd60e01b81526001600160a01b03928316936323b872dd93610b869333939116918791016118f5565b602060405180830381600087803b158015610ba057600080fd5b505af1158015610bb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd8919061186d565b610bf45760405162461bcd60e51b815260040161059d90611bc4565b60105460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb90610c269033908690600401611948565b602060405180830381600087803b158015610c4057600080fd5b505af1158015610c54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c78919061186d565b610c945760405162461bcd60e51b815260040161059d90611ca0565b7f8442948036198f1146d3a63c3db355d7e0295c2cc5676c755990445da4fdc1c9338383604051610cc793929190611961565b60405180910390a15050505b50565b600390565b7f9600bfe26d6984b5236952886f19c3d84b771865e505e2cb8f3a7137b7f3a46590565b610d15336000356001600160e01b0319166114ed565b610d315760405162461bcd60e51b815260040161059d906119f2565b600080546001600160a01b0319166001600160a01b03838116919091178083556040519116917f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada491a250565b6010546040516370a0823160e01b81526000916001600160a01b0316906370a0823190610dae9030906004016118e1565b60206040518083038186803b158015610dc657600080fd5b505afa158015610dda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dfe91906118c9565b905090565b60055490565b600354604051635597bd7160e11b81526001600160a01b039091169063ab2f7ae290610e3e9033906001908190600401611919565b60206040518083038186803b158015610e5657600080fd5b505afa158015610e6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8e919061186d565b610eaa5760405162461bcd60e51b815260040161059d90611d0e565b600354600160a01b900460ff1615610ed45760405162461bcd60e51b815260040161059d90611db3565b601180546001600160a01b0319166001600160a01b0383161790556040517f29d77446d0fb0dcebabf25ce79ea69ba1382a4525d4acf615a38c89c798aef7190610f1f9083906118e1565b60405180910390a150565b6001546001600160a01b031681565b610f4f336000356001600160e01b0319166114ed565b610f6b5760405162461bcd60e51b815260040161059d906119f2565b6003805482158015600160a01b0260ff60a01b1990921691909117909155610cd357610cd360006115e0565b60075490565b600b5490565b6000610fad611688565b600b54909150818110610fc15750506108f8565b601154600160a01b900460ff16610fe457600b829055610fe460006108dc610d7d565b81600b54101561107057610ffc600654600e54611641565b611014600654670de0b6b3a764000003600f54611641565b01600f556000600e819055600d55600b5482036000190180156110565761105261104a600654670de0b6b3a7640000038361169b565b600f54611641565b600f555b82600b8190555061106b600f546008546116b2565b600c55505b7f5b873fc01d45058fe77f3883a91020f46d5a7385baac6ceab19748d1d0ae464a81836040516110a1929190611dea565b60405180910390a15050565b6000610dfe6009546110bd611688565b600b5410156110cd5760006110d1565b600d545b6116c7565b6000546001600160a01b031681565b6003546001600160a01b031690565b600354604051635597bd7160e11b81526001600160a01b039091169063ab2f7ae2906111299033906001908190600401611919565b60206040518083038186803b15801561114157600080fd5b505afa158015611155573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611179919061186d565b6111955760405162461bcd60e51b815260040161059d90611d0e565b600b54156111b55760405162461bcd60e51b815260040161059d90611aea565b6001600160a01b0389166111db5760405162461bcd60e51b815260040161059d90611b1f565b600087116111fb5760405162461bcd60e51b815260040161059d90611d45565b6000861161121b5760405162461bcd60e51b815260040161059d90611a85565b6101ff86111561123d5760405162461bcd60e51b815260040161059d90611d7c565b6000851161125d5760405162461bcd60e51b815260040161059d90611bfb565b8484101561127d5760405162461bcd60e51b815260040161059d90611b56565b670de0b6b3a76400008311156112a55760405162461bcd60e51b815260040161059d90611cd7565b600083116112c55760405162461bcd60e51b815260040161059d90611c32565b601080546001600160a01b03808c166001600160a01b03199283161790925560048054928b169290911691909117905560058790556113086002600188016116b2565b6006556007869055600885905560098490556012839055600c82905561132c611688565b600b5560085461133c9083611641565b600f556001600160a01b038116156113575761135781610e09565b61136460006108dc610d7d565b6040517f690c4b6201f6a4c703f9d21c205d98a08dff8461e7a71e49c6d47cc8b894850190600090a1505050505050505050565b6011546001600160a01b031690565b6000670de0b6b3a764000060125414806113ca57506011546001600160a01b0316155b6114125761140d6113ef6113e76113df610d7d565b601354611665565b601254611641565b6001600160a01b0384166000908152601460205260409020546116c7565b611416565b6000195b92915050565b600080611427611688565b905080600b541015806114445750601154600160a01b900460ff16155b15611453575050600c54610568565b600f54600654600e546114669190611641565b61147c600654670de0b6b3a76400000383611641565b600b549101915082036000190180156114b1576114ae6114a8600654670de0b6b3a7640000038361169b565b83611641565b91505b6114bd826008546116b2565b9350505050610568565b600d5490565b601154600160a01b900460ff1690565b600354600160a01b900460ff1690565b60006001600160a01b03831630141561150857506001611416565b6001546001600160a01b038481169116141561152657506001611416565b6000546001600160a01b031661153e57506000611416565b60005460405163b700961360e01b81526001600160a01b039091169063b70096139061157290869030908790600401611982565b60206040518083038186803b15801561158a57600080fd5b505afa15801561159e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c2919061186d565b9392505050565b6000818311156115d957816115c2565b5090919050565b601160149054906101000a900460ff16151581151514610cd3576011805460ff60a01b1916600160a01b831515021790556040517f5b4e200daa1a93764a810c35f18f2fcfb14b5e95df6ae7ac1ffdc8eec425babc90610f1f9083906119af565b6000670de0b6b3a764000061165684846116ea565b8161165d57fe5b049392505050565b808201828110156114165760405162461bcd60e51b815260040161059d90611abc565b6000600554428161169557fe5b04905090565b6000633b9aca0061165684633b9aca000284611721565b60008161165684670de0b6b3a76400006116ea565b808203828111156114165760405162461bcd60e51b815260040161059d906119c3565b60008115806117055750508082028282828161170257fe5b04145b6114165760405162461bcd60e51b815260040161059d90611a20565b60006002820661173d576b033b2e3c9fd0803ce800000061173f565b825b90506002820491505b811561141657611758838461177b565b925060028206156117705761176d818461177b565b90505b600282049150611748565b60006b033b2e3c9fd0803ce800000061165684846116ea565b6000602082840312156117a5578081fd5b81356115c281611df8565b6000602082840312156117c1578081fd5b81516115c281611df8565b60008060008060008060008060006101208a8c0312156117ea578485fd5b89356117f581611df8565b985060208a013561180581611df8565b975060408a0135965060608a0135955060808a0135945060a08a0135935060c08a0135925060e08a013591506101008a013561184081611df8565b809150509295985092959850929598565b600060208284031215611862578081fd5b81356115c281611e0d565b60006020828403121561187e578081fd5b81516115c281611e0d565b60006020828403121561189a578081fd5b81356001600160e01b0319811681146115c2578182fd5b6000602082840312156118c2578081fd5b5035919050565b6000602082840312156118da578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b038416815260208101839052606081016008831061193a57fe5b826040830152949350505050565b6001600160a01b03929092168252602082015260400190565b6001600160a01b039390931683526020830191909152604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b901515815260200190565b90815260200190565b60208082526015908201527464732d6d6174682d7375622d756e646572666c6f7760581b604082015260600190565b602080825260149082015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604082015260600190565b60208082526014908201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604082015260600190565b60208082526019908201527f636f696e2d6d616368696e652d756e617574686f726973656400000000000000604082015260600190565b6020808252601d908201527f636f696e2d6d616368696e652d77696e646f772d746f6f2d736d616c6c000000604082015260600190565b60208082526014908201527364732d6d6174682d6164642d6f766572666c6f7760601b604082015260600190565b6020808252818101527f636f696e2d6d616368696e652d616c72656164792d696e697469616c69736564604082015260600190565b6020808252601a908201527f636f696e2d6d616368696e652d696e76616c69642d746f6b656e000000000000604082015260600190565b6020808252601a908201527f636f696e2d6d616368696e652d6d61782d746f6f2d736d616c6c000000000000604082015260600190565b6020808252601b908201527f657874656e73696f6e2d616c72656164792d696e7374616c6c65640000000000604082015260600190565b6020808252601c908201527f636f696e2d6d616368696e652d70757263686173652d6661696c656400000000604082015260600190565b6020808252601d908201527f636f696e2d6d616368696e652d7461726765742d746f6f2d736d616c6c000000604082015260600190565b6020808252601c908201527f636f696e2d6d616368696e652d6c696d69742d746f6f2d736d616c6c00000000604082015260600190565b6020808252601f908201527f636f696e2d6d616368696e652d696e73756666696369656e742d66756e647300604082015260600190565b6020808252601c908201527f636f696e2d6d616368696e652d7472616e736665722d6661696c656400000000604082015260600190565b6020808252601c908201527f636f696e2d6d616368696e652d6c696d69742d746f6f2d6c6172676500000000604082015260600190565b6020808252601c908201527f636f696e2d6d616368696e652d63616c6c65722d6e6f742d726f6f7400000000604082015260600190565b6020808252601d908201527f636f696e2d6d616368696e652d706572696f642d746f6f2d736d616c6c000000604082015260600190565b6020808252601d908201527f636f696e2d6d616368696e652d77696e646f772d746f6f2d6c61726765000000604082015260600190565b6020808252601b908201527f636f6c6f6e792d657874656e73696f6e2d646570726563617465640000000000604082015260600190565b918252602082015260400190565b6001600160a01b0381168114610cd357600080fd5b8015158114610cd357600080fdfea2646970667358221220622fb4cb516f18f99c245f4f29f0f37a49578cc09bac314142a3ca93a1c5189064736f6c63430007030033";

type CoinMachineConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CoinMachineConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CoinMachine__factory extends ContractFactory {
  constructor(...args: CoinMachineConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CoinMachine> {
    return super.deploy(overrides || {}) as Promise<CoinMachine>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CoinMachine {
    return super.attach(address) as CoinMachine;
  }
  override connect(signer: Signer): CoinMachine__factory {
    return super.connect(signer) as CoinMachine__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoinMachineInterface {
    return new utils.Interface(_abi) as CoinMachineInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoinMachine {
    return new Contract(address, _abi, signerOrProvider) as CoinMachine;
  }
}