[@colony/colony-js](../README.md) › [Globals](../globals.md) › ["src/clients/ColonyNetworkClient"](_src_clients_colonynetworkclient_.md)

# Module: "src/clients/ColonyNetworkClient"

## Index

### Interfaces

* [ExtendedIColonyNetwork](../interfaces/_src_clients_colonynetworkclient_.extendedicolonynetwork.md)

### Type aliases

* [AnyColonyClient](_src_clients_colonynetworkclient_.md#anycolonyclient)

### Functions

* [getColonyNetworkClient](_src_clients_colonynetworkclient_.md#const-getcolonynetworkclient)

## Type aliases

###  AnyColonyClient

Ƭ **AnyColonyClient**: *[ExtendedIColonyV1](../interfaces/_src_clients_colony_colonyclientv1_.extendedicolonyv1.md) | [ExtendedIColonyV2](../interfaces/_src_clients_colony_colonyclientv2_.extendedicolonyv2.md)*

*Defined in [src/clients/ColonyNetworkClient.ts:15](https://github.com/JoinColony/colonyJS/blob/3e623ff/src/clients/ColonyNetworkClient.ts#L15)*

## Functions

### `Const` getColonyNetworkClient

▸ **getColonyNetworkClient**(`network`: [Network](../enums/_src_constants_.network.md), `signerOrProvider`: Signer | Provider, `address?`: undefined | string): *[ExtendedIColonyNetwork](../interfaces/_src_clients_colonynetworkclient_.extendedicolonynetwork.md)*

*Defined in [src/clients/ColonyNetworkClient.ts:21](https://github.com/JoinColony/colonyJS/blob/3e623ff/src/clients/ColonyNetworkClient.ts#L21)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`network` | [Network](../enums/_src_constants_.network.md) | Network.mainnet |
`signerOrProvider` | Signer &#124; Provider | - |
`address?` | undefined &#124; string | - |

**Returns:** *[ExtendedIColonyNetwork](../interfaces/_src_clients_colonynetworkclient_.extendedicolonynetwork.md)*
