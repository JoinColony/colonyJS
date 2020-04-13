[@colony/colony-js](../README.md) › [Globals](../globals.md) › ["clients/Colony/extensions/extensionsV4"](../modules/_clients_colony_extensions_extensionsv4_.md) › [ColonyExtensionsV4](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md)

# Interface: ColonyExtensionsV4

## Hierarchy

  ↳ [ColonyExtensionsV3](_clients_colony_extensions_extensionsv3_.colonyextensionsv3.md)

  ↳ **ColonyExtensionsV4**

  ↳ [ExtendedIColonyV4](_clients_colony_colonyclientv4_.extendedicolonyv4.md)

## Index

### Properties

* [estimateWithProofs](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md#estimatewithproofs)
* [networkClient](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md#networkclient)

### Methods

* [addDomainWithProofs](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md#adddomainwithproofs)
* [addPaymentWithProofs](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md#addpaymentwithproofs)
* [finalizePaymentWithProofs](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md#finalizepaymentwithproofs)
* [hasInheritedUserRoleWithProofs](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md#hasinheriteduserrolewithproofs)
* [makeExpenditureWithProofs](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md#makeexpenditurewithproofs)
* [makeTaskWithProofs](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md#maketaskwithproofs)
* [moveFundsBetweenPotsWithProofs](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md#movefundsbetweenpotswithproofs)
* [setAdministrationRoleWithProofs](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md#setadministrationrolewithproofs)
* [setArbitrationRoleWithProofs](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md#setarbitrationrolewithproofs)
* [setArchitectureRoleWithProofs](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md#setarchitecturerolewithproofs)
* [setExpenditureClaimDelayWithProofs](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md#setexpenditureclaimdelaywithproofs)
* [setExpenditurePayoutModifierWithProofs](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md#setexpenditurepayoutmodifierwithproofs)
* [setFundingRoleWithProofs](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md#setfundingrolewithproofs)
* [setPaymentPayoutWithProofs](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md#setpaymentpayoutwithproofs)
* [setPaymentRecipientWithProofs](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md#setpaymentrecipientwithproofs)
* [setPaymentSkillWithProofs](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md#setpaymentskillwithproofs)
* [transferExpenditureViaArbitrationWithProofs](_clients_colony_extensions_extensionsv4_.colonyextensionsv4.md#transferexpenditureviaarbitrationwithproofs)

## Properties

###  estimateWithProofs

• **estimateWithProofs**: *[ExtendedEstimatesV4](_clients_colony_extensions_extensionsv4_.extendedestimatesv4.md)*

*Overrides [ColonyExtensionsV3](_clients_colony_extensions_extensionsv3_.colonyextensionsv3.md).[estimateWithProofs](_clients_colony_extensions_extensionsv3_.colonyextensionsv3.md#estimatewithproofs)*

*Defined in [src/clients/Colony/extensions/extensionsV4.ts:62](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/extensionsV4.ts#L62)*

___

###  networkClient

• **networkClient**: *[ExtendedIColonyNetwork](_clients_colonynetworkclient_.extendedicolonynetwork.md)*

*Inherited from [ColonyExtensions](_clients_colony_extensions_commonextensions_.colonyextensions.md).[networkClient](_clients_colony_extensions_commonextensions_.colonyextensions.md#networkclient)*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:97](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/commonExtensions.ts#L97)*

## Methods

###  addDomainWithProofs

▸ **addDomainWithProofs**(`_parentDomainId`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Inherited from [ColonyExtensions](_clients_colony_extensions_commonextensions_.colonyextensions.md).[addDomainWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#adddomainwithproofs)*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:116](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/commonExtensions.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`_parentDomainId` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  addPaymentWithProofs

▸ **addPaymentWithProofs**(`_recipient`: string, `_token`: string, `_amount`: BigNumberish, `_domainId`: BigNumberish, `_skillId`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Inherited from [ColonyExtensions](_clients_colony_extensions_commonextensions_.colonyextensions.md).[addPaymentWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#addpaymentwithproofs)*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:120](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/commonExtensions.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`_recipient` | string |
`_token` | string |
`_amount` | BigNumberish |
`_domainId` | BigNumberish |
`_skillId` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  finalizePaymentWithProofs

▸ **finalizePaymentWithProofs**(`_id`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Inherited from [ColonyExtensions](_clients_colony_extensions_commonextensions_.colonyextensions.md).[finalizePaymentWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#finalizepaymentwithproofs)*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:128](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/commonExtensions.ts#L128)*

**Parameters:**

Name | Type |
------ | ------ |
`_id` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  hasInheritedUserRoleWithProofs

▸ **hasInheritedUserRoleWithProofs**(`_user`: string, `_domainId`: BigNumberish, `_role`: BigNumberish): *Promise‹boolean›*

*Defined in [src/clients/Colony/extensions/extensionsV4.ts:36](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/extensionsV4.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`_user` | string |
`_domainId` | BigNumberish |
`_role` | BigNumberish |

**Returns:** *Promise‹boolean›*

___

###  makeExpenditureWithProofs

▸ **makeExpenditureWithProofs**(`_domainId`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/extensionsV4.ts:41](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/extensionsV4.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`_domainId` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  makeTaskWithProofs

▸ **makeTaskWithProofs**(`_specificationHash`: Arrayish, `_domainId`: BigNumberish, `_skillId`: BigNumberish, `_dueDate`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Inherited from [ColonyExtensions](_clients_colony_extensions_commonextensions_.colonyextensions.md).[makeTaskWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#maketaskwithproofs)*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:148](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/commonExtensions.ts#L148)*

**Parameters:**

Name | Type |
------ | ------ |
`_specificationHash` | Arrayish |
`_domainId` | BigNumberish |
`_skillId` | BigNumberish |
`_dueDate` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  moveFundsBetweenPotsWithProofs

▸ **moveFundsBetweenPotsWithProofs**(`_fromPot`: BigNumberish, `_toPot`: BigNumberish, `_amount`: BigNumberish, `_token`: string, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Inherited from [ColonyExtensions](_clients_colony_extensions_commonextensions_.colonyextensions.md).[moveFundsBetweenPotsWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#movefundsbetweenpotswithproofs)*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:155](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/commonExtensions.ts#L155)*

**Parameters:**

Name | Type |
------ | ------ |
`_fromPot` | BigNumberish |
`_toPot` | BigNumberish |
`_amount` | BigNumberish |
`_token` | string |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  setAdministrationRoleWithProofs

▸ **setAdministrationRoleWithProofs**(`_user`: string, `_domainId`: BigNumberish, `_setTo`: boolean, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Inherited from [ColonyExtensions](_clients_colony_extensions_commonextensions_.colonyextensions.md).[setAdministrationRoleWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#setadministrationrolewithproofs)*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:110](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/commonExtensions.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`_user` | string |
`_domainId` | BigNumberish |
`_setTo` | boolean |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  setArbitrationRoleWithProofs

▸ **setArbitrationRoleWithProofs**(`_user`: string, `_domainId`: BigNumberish, `_setTo`: boolean, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Inherited from [ColonyExtensionsV3](_clients_colony_extensions_extensionsv3_.colonyextensionsv3.md).[setArbitrationRoleWithProofs](_clients_colony_extensions_extensionsv3_.colonyextensionsv3.md#setarbitrationrolewithproofs)*

*Defined in [src/clients/Colony/extensions/extensionsV3.ts:26](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/extensionsV3.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`_user` | string |
`_domainId` | BigNumberish |
`_setTo` | boolean |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  setArchitectureRoleWithProofs

▸ **setArchitectureRoleWithProofs**(`_user`: string, `_domainId`: BigNumberish, `_setTo`: boolean, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Inherited from [ColonyExtensions](_clients_colony_extensions_commonextensions_.colonyextensions.md).[setArchitectureRoleWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#setarchitecturerolewithproofs)*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:98](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/commonExtensions.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`_user` | string |
`_domainId` | BigNumberish |
`_setTo` | boolean |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  setExpenditureClaimDelayWithProofs

▸ **setExpenditureClaimDelayWithProofs**(`_id`: BigNumberish, `_slot`: BigNumberish, `_claimDelay`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/extensionsV4.ts:45](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/extensionsV4.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`_id` | BigNumberish |
`_slot` | BigNumberish |
`_claimDelay` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  setExpenditurePayoutModifierWithProofs

▸ **setExpenditurePayoutModifierWithProofs**(`_id`: BigNumberish, `_slot`: BigNumberish, `_payoutModifier`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/extensionsV4.ts:51](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/extensionsV4.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`_id` | BigNumberish |
`_slot` | BigNumberish |
`_payoutModifier` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  setFundingRoleWithProofs

▸ **setFundingRoleWithProofs**(`_user`: string, `_domainId`: BigNumberish, `_setTo`: boolean, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Inherited from [ColonyExtensions](_clients_colony_extensions_commonextensions_.colonyextensions.md).[setFundingRoleWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#setfundingrolewithproofs)*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:104](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/commonExtensions.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`_user` | string |
`_domainId` | BigNumberish |
`_setTo` | boolean |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  setPaymentPayoutWithProofs

▸ **setPaymentPayoutWithProofs**(`_id`: BigNumberish, `_token`: BigNumberish, `_amount`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Inherited from [ColonyExtensions](_clients_colony_extensions_commonextensions_.colonyextensions.md).[setPaymentPayoutWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#setpaymentpayoutwithproofs)*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:142](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/commonExtensions.ts#L142)*

**Parameters:**

Name | Type |
------ | ------ |
`_id` | BigNumberish |
`_token` | BigNumberish |
`_amount` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  setPaymentRecipientWithProofs

▸ **setPaymentRecipientWithProofs**(`_id`: BigNumberish, `_recipient`: string, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Inherited from [ColonyExtensions](_clients_colony_extensions_commonextensions_.colonyextensions.md).[setPaymentRecipientWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#setpaymentrecipientwithproofs)*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:132](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/commonExtensions.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`_id` | BigNumberish |
`_recipient` | string |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  setPaymentSkillWithProofs

▸ **setPaymentSkillWithProofs**(`_id`: BigNumberish, `_skillId`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Inherited from [ColonyExtensions](_clients_colony_extensions_commonextensions_.colonyextensions.md).[setPaymentSkillWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#setpaymentskillwithproofs)*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:137](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/commonExtensions.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`_id` | BigNumberish |
`_skillId` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  transferExpenditureViaArbitrationWithProofs

▸ **transferExpenditureViaArbitrationWithProofs**(`_id`: BigNumberish, `_newOwner`: string, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/extensionsV4.ts:57](https://github.com/JoinColony/colonyJS/blob/8037c41/src/clients/Colony/extensions/extensionsV4.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`_id` | BigNumberish |
`_newOwner` | string |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*
