[@colony/colony-js](../README.md) › [Globals](../globals.md) › ["clients/ColonyNetworkClient"](_clients_colonynetworkclient_.md)

# Module: "clients/ColonyNetworkClient"

## Index

### Interfaces

* [ExtendedIColonyNetwork](../interfaces/_clients_colonynetworkclient_.extendedicolonynetwork.md)

### Type aliases

* [AnyColonyClient](_clients_colonynetworkclient_.md#anycolonyclient)

### Functions

* [getColonyNetworkClient](_clients_colonynetworkclient_.md#const-getcolonynetworkclient)

## Type aliases

###  AnyColonyClient

Ƭ **AnyColonyClient**: *[ExtendedIColonyV1](../interfaces/_clients_colony_colonyclientv1_.extendedicolonyv1.md) | [ExtendedIColonyV2](../interfaces/_clients_colony_colonyclientv2_.extendedicolonyv2.md) | [ExtendedIColonyV3](../interfaces/_clients_colony_colonyclientv3_.extendedicolonyv3.md) | [ExtendedIColonyV4](../interfaces/_clients_colony_colonyclientv4_.extendedicolonyv4.md)*

*Defined in [src/clients/ColonyNetworkClient.ts:14](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/ColonyNetworkClient.ts#L14)*

## Functions

### `Const` getColonyNetworkClient

▸ **getColonyNetworkClient**(`network`: [Network](../enums/_constants_.network.md), `signerOrProvider`: Signer | Provider, `address?`: undefined | string): *[ExtendedIColonyNetwork](../interfaces/_clients_colonynetworkclient_.extendedicolonynetwork.md)*

*Defined in [src/clients/ColonyNetworkClient.ts:24](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/ColonyNetworkClient.ts#L24)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`network` | [Network](../enums/_constants_.network.md) | Network.Mainnet |
`signerOrProvider` | Signer &#124; Provider | - |
`address?` | undefined &#124; string | - |

**Returns:** *[ExtendedIColonyNetwork](../interfaces/_clients_colonynetworkclient_.extendedicolonynetwork.md)*
