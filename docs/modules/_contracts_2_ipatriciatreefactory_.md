[@colony/colony-js](../README.md) › [Globals](../globals.md) › ["contracts/2/IPatriciaTreeFactory"](_contracts_2_ipatriciatreefactory_.md)

# Module: "contracts/2/IPatriciaTreeFactory"

## Index

### Classes

* [IPatriciaTreeFactory](../classes/_contracts_2_ipatriciatreefactory_.ipatriciatreefactory.md)

### Variables

* [_abi](_contracts_2_ipatriciatreefactory_.md#const-_abi)

## Variables

### `Const` _abi

• **_abi**: *object | object | object[]* = [
  {
    constant: true,
    inputs: [
      {
        name: "hash",
        type: "bytes32"
      }
    ],
    name: "getNode",
    outputs: [
      {
        components: [
          {
            components: [
              {
                name: "node",
                type: "bytes32"
              },
              {
                components: [
                  {
                    name: "data",
                    type: "bytes32"
                  },
                  {
                    name: "length",
                    type: "uint256"
                  }
                ],
                name: "label",
                type: "tuple"
              }
            ],
            name: "children",
            type: "tuple[2]"
          }
        ],
        name: "n",
        type: "tuple"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getRootHash",
    outputs: [
      {
        name: "rootHash",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getRootEdge",
    outputs: [
      {
        components: [
          {
            name: "node",
            type: "bytes32"
          },
          {
            components: [
              {
                name: "data",
                type: "bytes32"
              },
              {
                name: "length",
                type: "uint256"
              }
            ],
            name: "label",
            type: "tuple"
          }
        ],
        name: "e",
        type: "tuple"
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
        name: "key",
        type: "bytes"
      },
      {
        name: "value",
        type: "bytes"
      }
    ],
    name: "insert",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "key",
        type: "bytes"
      }
    ],
    name: "getProof",
    outputs: [
      {
        name: "branchMask",
        type: "uint256"
      },
      {
        name: "_siblings",
        type: "bytes32[]"
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
        name: "key",
        type: "bytes"
      },
      {
        name: "value",
        type: "bytes"
      },
      {
        name: "branchMask",
        type: "uint256"
      },
      {
        name: "siblings",
        type: "bytes32[]"
      }
    ],
    name: "getImpliedRoot",
    outputs: [
      {
        name: "rootHash",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  }
]

*Defined in [src/contracts/2/IPatriciaTreeFactory.ts:18](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/contracts/2/IPatriciaTreeFactory.ts#L18)*
