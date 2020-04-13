[@colony/colony-js](../README.md) › [Globals](../globals.md) › ["clients/Colony/extensions/commonExtensions"](../modules/_clients_colony_extensions_commonextensions_.md) › [ColonyExtensions](_clients_colony_extensions_commonextensions_.colonyextensions.md)

# Interface: ColonyExtensions

## Hierarchy

* **ColonyExtensions**

  ↳ [ExtendedIColonyV2](_clients_colony_colonyclientv2_.extendedicolonyv2.md)

  ↳ [ColonyExtensionsV3](_clients_colony_extensions_extensionsv3_.colonyextensionsv3.md)

  ↳ [ExtendedIColonyV1](_clients_colony_colonyclientv1_.extendedicolonyv1.md)

## Index

### Properties

* [estimateWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#estimatewithproofs)
* [networkClient](_clients_colony_extensions_commonextensions_.colonyextensions.md#networkclient)

### Methods

* [addDomainWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#adddomainwithproofs)
* [addPaymentWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#addpaymentwithproofs)
* [finalizePaymentWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#finalizepaymentwithproofs)
* [makeTaskWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#maketaskwithproofs)
* [moveFundsBetweenPotsWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#movefundsbetweenpotswithproofs)
* [setAdministrationRoleWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#setadministrationrolewithproofs)
* [setArchitectureRoleWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#setarchitecturerolewithproofs)
* [setFundingRoleWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#setfundingrolewithproofs)
* [setPaymentPayoutWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#setpaymentpayoutwithproofs)
* [setPaymentRecipientWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#setpaymentrecipientwithproofs)
* [setPaymentSkillWithProofs](_clients_colony_extensions_commonextensions_.colonyextensions.md#setpaymentskillwithproofs)

## Properties

###  estimateWithProofs

• **estimateWithProofs**: *[ExtendedEstimate](_clients_colony_extensions_commonextensions_.extendedestimate.md)*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:162](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L162)*

___

###  networkClient

• **networkClient**: *[ExtendedIColonyNetwork](_clients_colonynetworkclient_.extendedicolonynetwork.md)*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:97](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L97)*

## Methods

###  addDomainWithProofs

▸ **addDomainWithProofs**(`_parentDomainId`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:116](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`_parentDomainId` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  addPaymentWithProofs

▸ **addPaymentWithProofs**(`_recipient`: string, `_token`: string, `_amount`: BigNumberish, `_domainId`: BigNumberish, `_skillId`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:120](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L120)*

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

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:128](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L128)*

**Parameters:**

Name | Type |
------ | ------ |
`_id` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  makeTaskWithProofs

▸ **makeTaskWithProofs**(`_specificationHash`: Arrayish, `_domainId`: BigNumberish, `_skillId`: BigNumberish, `_dueDate`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:148](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L148)*

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

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:155](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L155)*

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

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:110](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L110)*

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

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:98](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`_user` | string |
`_domainId` | BigNumberish |
`_setTo` | boolean |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  setFundingRoleWithProofs

▸ **setFundingRoleWithProofs**(`_user`: string, `_domainId`: BigNumberish, `_setTo`: boolean, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:104](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L104)*

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

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:142](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L142)*

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

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:132](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L132)*

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

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:137](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`_id` | BigNumberish |
`_skillId` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*
