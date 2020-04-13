[@colony/colony-js](../README.md) › [Globals](../globals.md) › ["src/clients/Colony/ColonyVersionClient"](_src_clients_colony_colonyversionclient_.md)

# Module: "src/clients/Colony/ColonyVersionClient"

## Index

### Interfaces

* [ColonyVersionClient](../interfaces/_src_clients_colony_colonyversionclient_.colonyversionclient.md)

### Variables

* [abi](_src_clients_colony_colonyversionclient_.md#const-abi)

### Functions

* [getColonyVersionClient](_src_clients_colony_colonyversionclient_.md#getcolonyversionclient)

## Variables

### `Const` abi

• **abi**: *object[]* = [
  {
    constant: true,
    inputs: [],
    name: 'version',
    outputs: [
      {
        name: 'colonyVersion',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
]

*Defined in [src/clients/Colony/ColonyVersionClient.ts:11](https://github.com/JoinColony/colonyJS/blob/3e623ff/src/clients/Colony/ColonyVersionClient.ts#L11)*

## Functions

###  getColonyVersionClient

▸ **getColonyVersionClient**(`address`: string, `signerOrProvider`: Signer | Provider): *[ColonyVersionClient](../interfaces/_src_clients_colony_colonyversionclient_.colonyversionclient.md)*

*Defined in [src/clients/Colony/ColonyVersionClient.ts:28](https://github.com/JoinColony/colonyJS/blob/3e623ff/src/clients/Colony/ColonyVersionClient.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`signerOrProvider` | Signer &#124; Provider |

**Returns:** *[ColonyVersionClient](../interfaces/_src_clients_colony_colonyversionclient_.colonyversionclient.md)*
