[@colony/colony-js](../README.md) › [Globals](../globals.md) › ["clients/Colony/extensions/extensionsV4"](_clients_colony_extensions_extensionsv4_.md)

# Module: "clients/Colony/extensions/extensionsV4"

## Index

### Interfaces

* [ColonyExtensionsV4](../interfaces/_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md)
* [ExtendedEstimatesV4](../interfaces/_clients_colony_extensions_extensionsv4_.extendedestimatesv4.md)

### Type aliases

* [ExtensionRequiredIColonyV4](_clients_colony_extensions_extensionsv4_.md#extensionrequiredicolonyv4)
* [ExtensionRequiredTransactionsV4](_clients_colony_extensions_extensionsv4_.md#extensionrequiredtransactionsv4)

### Functions

* [addExtensions](_clients_colony_extensions_extensionsv4_.md#const-addextensions)
* [estimateMakeExpenditureWithProofs](_clients_colony_extensions_extensionsv4_.md#estimatemakeexpenditurewithproofs)
* [estimateSetExpenditureClaimDelayWithProofs](_clients_colony_extensions_extensionsv4_.md#estimatesetexpenditureclaimdelaywithproofs)
* [estimateSetExpenditurePayoutModifierWithProofs](_clients_colony_extensions_extensionsv4_.md#estimatesetexpenditurepayoutmodifierwithproofs)
* [estimateTransferExpenditureViaArbitrationWithProofs](_clients_colony_extensions_extensionsv4_.md#estimatetransferexpenditureviaarbitrationwithproofs)
* [hasInheritedUserRoleWithProofs](_clients_colony_extensions_extensionsv4_.md#hasinheriteduserrolewithproofs)
* [makeExpenditureWithProofs](_clients_colony_extensions_extensionsv4_.md#makeexpenditurewithproofs)
* [setExpenditureClaimDelayWithProofs](_clients_colony_extensions_extensionsv4_.md#setexpenditureclaimdelaywithproofs)
* [setExpenditurePayoutModifierWithProofs](_clients_colony_extensions_extensionsv4_.md#setexpenditurepayoutmodifierwithproofs)
* [transferExpenditureViaArbitrationWithProofs](_clients_colony_extensions_extensionsv4_.md#transferexpenditureviaarbitrationwithproofs)

## Type aliases

###  ExtensionRequiredIColonyV4

Ƭ **ExtensionRequiredIColonyV4**: *[ExtensionRequiredIColonyV3](_clients_colony_extensions_extensionsv3_.md#extensionrequiredicolonyv3) & Pick‹IColony, "getExpenditure" | "hasInheritedUserRole" | [ExtensionRequiredTransactionsV4](_clients_colony_extensions_extensionsv4_.md#extensionrequiredtransactionsv4)› & object*

*Defined in [src/clients/Colony/extensions/extensionsV4.ts:72](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/extensionsV4.ts#L72)*

___

###  ExtensionRequiredTransactionsV4

Ƭ **ExtensionRequiredTransactionsV4**: *[ExtensionRequiredTransactionsV3](_clients_colony_extensions_extensionsv3_.md#extensionrequiredtransactionsv3) | "makeExpenditure" | "setExpenditureClaimDelay" | "setExpenditurePayoutModifier" | "transferExpenditureViaArbitration"*

*Defined in [src/clients/Colony/extensions/extensionsV4.ts:65](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/extensionsV4.ts#L65)*

## Functions

### `Const` addExtensions

▸ **addExtensions**<**T**>(`instance`: T, `networkClient`: [ExtendedIColonyNetwork](../interfaces/_clients_colonynetworkclient_.extendedicolonynetwork.md)): *void*

*Defined in [src/clients/Colony/extensions/extensionsV4.ts:272](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/extensionsV4.ts#L272)*

**Type parameters:**

▪ **T**: *[ColonyExtensionsV4](../interfaces/_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md) & [ExtensionRequiredIColonyV4](_clients_colony_extensions_extensionsv4_.md#extensionrequiredicolonyv4)*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | T |
`networkClient` | [ExtendedIColonyNetwork](../interfaces/_clients_colonynetworkclient_.extendedicolonynetwork.md) |

**Returns:** *void*

___

###  estimateMakeExpenditureWithProofs

▸ **estimateMakeExpenditureWithProofs**<**T**>(`this`: T, `_domainId`: BigNumberish): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/extensionsV4.ts:194](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/extensionsV4.ts#L194)*

**Type parameters:**

▪ **T**: *[ExtensionRequiredIColonyV4](_clients_colony_extensions_extensionsv4_.md#extensionrequiredicolonyv4)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_domainId` | BigNumberish |

**Returns:** *Promise‹BigNumber›*

___

###  estimateSetExpenditureClaimDelayWithProofs

▸ **estimateSetExpenditureClaimDelayWithProofs**<**T**>(`this`: T, `_id`: BigNumberish, `_slot`: BigNumberish, `_claimDelay`: BigNumberish): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/extensionsV4.ts:209](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/extensionsV4.ts#L209)*

**Type parameters:**

▪ **T**: *[ExtensionRequiredIColonyV4](_clients_colony_extensions_extensionsv4_.md#extensionrequiredicolonyv4)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_id` | BigNumberish |
`_slot` | BigNumberish |
`_claimDelay` | BigNumberish |

**Returns:** *Promise‹BigNumber›*

___

###  estimateSetExpenditurePayoutModifierWithProofs

▸ **estimateSetExpenditurePayoutModifierWithProofs**<**T**>(`this`: T, `_id`: BigNumberish, `_slot`: BigNumberish, `_payoutModifier`: BigNumberish): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/extensionsV4.ts:232](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/extensionsV4.ts#L232)*

**Type parameters:**

▪ **T**: *[ExtensionRequiredIColonyV4](_clients_colony_extensions_extensionsv4_.md#extensionrequiredicolonyv4)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_id` | BigNumberish |
`_slot` | BigNumberish |
`_payoutModifier` | BigNumberish |

**Returns:** *Promise‹BigNumber›*

___

###  estimateTransferExpenditureViaArbitrationWithProofs

▸ **estimateTransferExpenditureViaArbitrationWithProofs**<**T**>(`this`: T, `_newOwner`: string, `_id`: BigNumberish): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/extensionsV4.ts:255](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/extensionsV4.ts#L255)*

**Type parameters:**

▪ **T**: *[ExtensionRequiredIColonyV4](_clients_colony_extensions_extensionsv4_.md#extensionrequiredicolonyv4)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_newOwner` | string |
`_id` | BigNumberish |

**Returns:** *Promise‹BigNumber›*

___

###  hasInheritedUserRoleWithProofs

▸ **hasInheritedUserRoleWithProofs**<**T**>(`this`: T, `_user`: string, `_domainId`: BigNumberish, `_role`: [ColonyRole](../enums/_constants_.colonyrole.md)): *Promise‹boolean›*

*Defined in [src/clients/Colony/extensions/extensionsV4.ts:80](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/extensionsV4.ts#L80)*

**Type parameters:**

▪ **T**: *[ExtensionRequiredIColonyV4](_clients_colony_extensions_extensionsv4_.md#extensionrequiredicolonyv4)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_user` | string |
`_domainId` | BigNumberish |
`_role` | [ColonyRole](../enums/_constants_.colonyrole.md) |

**Returns:** *Promise‹boolean›*

___

###  makeExpenditureWithProofs

▸ **makeExpenditureWithProofs**<**T**>(`this`: T, `_domainId`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/extensionsV4.ts:103](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/extensionsV4.ts#L103)*

**Type parameters:**

▪ **T**: *[ExtensionRequiredIColonyV4](_clients_colony_extensions_extensionsv4_.md#extensionrequiredicolonyv4)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_domainId` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  setExpenditureClaimDelayWithProofs

▸ **setExpenditureClaimDelayWithProofs**<**T**>(`this`: T, `_id`: BigNumberish, `_slot`: BigNumberish, `_claimDelay`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/extensionsV4.ts:121](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/extensionsV4.ts#L121)*

**Type parameters:**

▪ **T**: *[ExtensionRequiredIColonyV4](_clients_colony_extensions_extensionsv4_.md#extensionrequiredicolonyv4)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_id` | BigNumberish |
`_slot` | BigNumberish |
`_claimDelay` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  setExpenditurePayoutModifierWithProofs

▸ **setExpenditurePayoutModifierWithProofs**<**T**>(`this`: T, `_id`: BigNumberish, `_slot`: BigNumberish, `_payoutModifier`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/extensionsV4.ts:146](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/extensionsV4.ts#L146)*

**Type parameters:**

▪ **T**: *[ExtensionRequiredIColonyV4](_clients_colony_extensions_extensionsv4_.md#extensionrequiredicolonyv4)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_id` | BigNumberish |
`_slot` | BigNumberish |
`_payoutModifier` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  transferExpenditureViaArbitrationWithProofs

▸ **transferExpenditureViaArbitrationWithProofs**<**T**>(`this`: T, `_id`: BigNumberish, `_newOwner`: string, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/extensionsV4.ts:171](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/extensionsV4.ts#L171)*

**Type parameters:**

▪ **T**: *[ExtensionRequiredIColonyV4](_clients_colony_extensions_extensionsv4_.md#extensionrequiredicolonyv4)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_id` | BigNumberish |
`_newOwner` | string |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*
