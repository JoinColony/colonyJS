[@colony/colony-js](../README.md) › [Globals](../globals.md) › ["contracts/2/ITokenLockingFactory"](_contracts_2_itokenlockingfactory_.md)

# Module: "contracts/2/ITokenLockingFactory"

## Index

### Classes

* [ITokenLockingFactory](../classes/_contracts_2_itokenlockingfactory_.itokenlockingfactory.md)

### Variables

* [_abi](_contracts_2_itokenlockingfactory_.md#const-_abi)

## Variables

### `Const` _abi

• **_abi**: *object | object | object[]* = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "colonyNetwork",
        type: "address"
      }
    ],
    name: "ColonyNetworkSet",
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
        name: "lockCount",
        type: "uint256"
      }
    ],
    name: "TokenLocked",
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
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        name: "lockId",
        type: "uint256"
      }
    ],
    name: "UserTokenUnlocked",
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
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        name: "timestamp",
        type: "uint256"
      }
    ],
    name: "UserTokenDeposited",
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
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256"
      }
    ],
    name: "UserTokenWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "miner",
        type: "address"
      },
      {
        indexed: false,
        name: "beneficiary",
        type: "address"
      },
      {
        indexed: false,
        name: "tokensLost",
        type: "uint256"
      }
    ],
    name: "ReputationMinerPenalised",
    type: "event"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_colonyNetwork",
        type: "address"
      }
    ],
    name: "setColonyNetwork",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getColonyNetwork",
    outputs: [
      {
        name: "networkAddress",
        type: "address"
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
        name: "_token",
        type: "address"
      }
    ],
    name: "lockToken",
    outputs: [
      {
        name: "lockCount",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_token",
        type: "address"
      },
      {
        name: "_user",
        type: "address"
      },
      {
        name: "_lockId",
        type: "uint256"
      }
    ],
    name: "unlockTokenForUser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_token",
        type: "address"
      },
      {
        name: "_lockId",
        type: "uint256"
      }
    ],
    name: "incrementLockCounterTo",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_token",
        type: "address"
      },
      {
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "deposit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_token",
        type: "address"
      },
      {
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_stakers",
        type: "address[]"
      },
      {
        name: "_beneficiary",
        type: "address"
      },
      {
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "punishStakers",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_token",
        type: "address"
      }
    ],
    name: "getTotalLockCount",
    outputs: [
      {
        name: "lockCount",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_token",
        type: "address"
      },
      {
        name: "_user",
        type: "address"
      }
    ],
    name: "getUserLock",
    outputs: [
      {
        components: [
          {
            name: "lockCount",
            type: "uint256"
          },
          {
            name: "balance",
            type: "uint256"
          },
          {
            name: "timestamp",
            type: "uint256"
          }
        ],
        name: "lock",
        type: "tuple"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
]

*Defined in [src/contracts/2/ITokenLockingFactory.ts:18](https://github.com/JoinColony/colonyJS/blob/8037c41/src/contracts/2/ITokenLockingFactory.ts#L18)*
