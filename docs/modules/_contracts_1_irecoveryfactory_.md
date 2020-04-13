[@colony/colony-js](../README.md) › [Globals](../globals.md) › ["contracts/1/IRecoveryFactory"](_contracts_1_irecoveryfactory_.md)

# Module: "contracts/1/IRecoveryFactory"

## Index

### Classes

* [IRecoveryFactory](../classes/_contracts_1_irecoveryfactory_.irecoveryfactory.md)

### Variables

* [_abi](_contracts_1_irecoveryfactory_.md#const-_abi)

## Variables

### `Const` _abi

• **_abi**: *object | object[]* = [
  {
    constant: false,
    inputs: [],
    name: "enterRecoveryMode",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "exitRecoveryMode",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "approveExitRecovery",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "isInRecoveryMode",
    outputs: [
      {
        name: "inRecoveryMode",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_user",
        type: "address"
      }
    ],
    name: "setRecoveryRole",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_user",
        type: "address"
      }
    ],
    name: "removeRecoveryRole",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "numRecoveryRoles",
    outputs: [
      {
        name: "numRoles",
        type: "uint64"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_slot",
        type: "uint256"
      },
      {
        name: "_value",
        type: "bytes32"
      }
    ],
    name: "setStorageSlotRecovery",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_slot",
        type: "uint256"
      }
    ],
    name: "checkNotAdditionalProtectedVariable",
    outputs: [],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
]

*Defined in [src/contracts/1/IRecoveryFactory.ts:18](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/contracts/1/IRecoveryFactory.ts#L18)*
