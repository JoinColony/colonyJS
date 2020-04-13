[@colony/colony-js](../README.md) › [Globals](../globals.md) › ["contracts/1/IPatriciaTreeBaseFactory"](_contracts_1_ipatriciatreebasefactory_.md)

# Module: "contracts/1/IPatriciaTreeBaseFactory"

## Index

### Classes

* [IPatriciaTreeBaseFactory](../classes/_contracts_1_ipatriciatreebasefactory_.ipatriciatreebasefactory.md)

### Variables

* [_abi](_contracts_1_ipatriciatreebasefactory_.md#const-_abi)

## Variables

### `Const` _abi

• **_abi**: *object | object | object[]* = [
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
  }
]

*Defined in [src/contracts/1/IPatriciaTreeBaseFactory.ts:18](https://github.com/JoinColony/colonyJS/blob/8037c41/src/contracts/1/IPatriciaTreeBaseFactory.ts#L18)*
