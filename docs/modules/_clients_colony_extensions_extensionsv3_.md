[@colony/colony-js](../README.md) › [Globals](../globals.md) › ["clients/Colony/extensions/extensionsV3"](_clients_colony_extensions_extensionsv3_.md)

# Module: "clients/Colony/extensions/extensionsV3"

## Index

### Interfaces

* [ColonyExtensionsV3](../interfaces/_clients_colony_extensions_extensionsv3_.colonyextensionsv3.md)
* [ExtendedEstimateV3](../interfaces/_clients_colony_extensions_extensionsv3_.extendedestimatev3.md)

### Type aliases

* [ExtensionRequiredIColonyV3](_clients_colony_extensions_extensionsv3_.md#extensionrequiredicolonyv3)
* [ExtensionRequiredTransactionsV3](_clients_colony_extensions_extensionsv3_.md#extensionrequiredtransactionsv3)

### Functions

* [addExtensions](_clients_colony_extensions_extensionsv3_.md#const-addextensions)
* [estimateSetArbitrationRoleWithProofs](_clients_colony_extensions_extensionsv3_.md#estimatesetarbitrationrolewithproofs)
* [setArbitrationRoleWithProofs](_clients_colony_extensions_extensionsv3_.md#setarbitrationrolewithproofs)

## Type aliases

###  ExtensionRequiredIColonyV3

Ƭ **ExtensionRequiredIColonyV3**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony) & Pick‹IColony, "setArbitrationRole"› & object*

*Defined in [src/clients/Colony/extensions/extensionsV3.ts:39](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/extensionsV3.ts#L39)*

___

###  ExtensionRequiredTransactionsV3

Ƭ **ExtensionRequiredTransactionsV3**: *[CommonExtensionRequiredTransactions](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredtransactions) | "setArbitrationRole"*

*Defined in [src/clients/Colony/extensions/extensionsV3.ts:35](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/extensionsV3.ts#L35)*

## Functions

### `Const` addExtensions

▸ **addExtensions**<**T**>(`instance`: T, `networkClient`: [ExtendedIColonyNetwork](../interfaces/_clients_colonynetworkclient_.extendedicolonynetwork.md)): *void*

*Defined in [src/clients/Colony/extensions/extensionsV3.ts:97](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/extensionsV3.ts#L97)*

**Type parameters:**

▪ **T**: *[ColonyExtensionsV3](../interfaces/_clients_colony_extensions_extensionsv3_.colonyextensionsv3.md) & [ExtensionRequiredIColonyV3](_clients_colony_extensions_extensionsv3_.md#extensionrequiredicolonyv3)*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | T |
`networkClient` | [ExtendedIColonyNetwork](../interfaces/_clients_colonynetworkclient_.extendedicolonynetwork.md) |

**Returns:** *void*

___

###  estimateSetArbitrationRoleWithProofs

▸ **estimateSetArbitrationRoleWithProofs**<**T**>(`this`: T, `_user`: string, `_domainId`: BigNumberish, `_setTo`: boolean): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/extensionsV3.ts:75](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/extensionsV3.ts#L75)*

**Type parameters:**

▪ **T**: *[ExtensionRequiredIColonyV3](_clients_colony_extensions_extensionsv3_.md#extensionrequiredicolonyv3)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_user` | string |
`_domainId` | BigNumberish |
`_setTo` | boolean |

**Returns:** *Promise‹BigNumber›*

___

###  setArbitrationRoleWithProofs

▸ **setArbitrationRoleWithProofs**<**T**>(`this`: T, `_user`: string, `_domainId`: BigNumberish, `_setTo`: boolean, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/extensionsV3.ts:44](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/extensionsV3.ts#L44)*

**Type parameters:**

▪ **T**: *[ExtensionRequiredIColonyV3](_clients_colony_extensions_extensionsv3_.md#extensionrequiredicolonyv3)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_user` | string |
`_domainId` | BigNumberish |
`_setTo` | boolean |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*
