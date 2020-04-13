[@colony/colony-js](../README.md) › [Globals](../globals.md) › ["contracts/4/IRecoveryFactory"](_contracts_4_irecoveryfactory_.md)

# Module: "contracts/4/IRecoveryFactory"

## Index

### Classes

* [IRecoveryFactory](../classes/_contracts_4_irecoveryfactory_.irecoveryfactory.md)

### Variables

* [_abi](_contracts_4_irecoveryfactory_.md#const-_abi)

## Variables

### `Const` _abi

• **_abi**: *object | object | object[]* = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        name: "setTo",
        type: "bool"
      }
    ],
    name: "RecoveryRoleSet",
    type: "event"
  },
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

*Defined in [src/contracts/4/IRecoveryFactory.ts:18](https://github.com/JoinColony/colonyJS/blob/8037c41/src/contracts/4/IRecoveryFactory.ts#L18)*
