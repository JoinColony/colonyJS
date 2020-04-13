[@colony/colony-js](../README.md) › [Globals](../globals.md) › ["clients/Colony/extensions/commonExtensions"](../modules/_clients_colony_extensions_commonextensions_.md) › [ExtendedEstimate](_clients_colony_extensions_commonextensions_.extendedestimate.md)

# Interface: ExtendedEstimate

## Hierarchy

* **ExtendedEstimate**

  ↳ [ExtendedEstimateV3](_clients_colony_extensions_extensionsv3_.extendedestimatev3.md)

## Index

### Methods

* [addDomain](_clients_colony_extensions_commonextensions_.extendedestimate.md#adddomain)
* [addPayment](_clients_colony_extensions_commonextensions_.extendedestimate.md#addpayment)
* [finalizePayment](_clients_colony_extensions_commonextensions_.extendedestimate.md#finalizepayment)
* [makeTask](_clients_colony_extensions_commonextensions_.extendedestimate.md#maketask)
* [moveFundsBetweenPots](_clients_colony_extensions_commonextensions_.extendedestimate.md#movefundsbetweenpots)
* [setAdministrationRole](_clients_colony_extensions_commonextensions_.extendedestimate.md#setadministrationrole)
* [setArchitectureRole](_clients_colony_extensions_commonextensions_.extendedestimate.md#setarchitecturerole)
* [setFundingRole](_clients_colony_extensions_commonextensions_.extendedestimate.md#setfundingrole)
* [setPaymentPayout](_clients_colony_extensions_commonextensions_.extendedestimate.md#setpaymentpayout)
* [setPaymentRecipient](_clients_colony_extensions_commonextensions_.extendedestimate.md#setpaymentrecipient)
* [setPaymentSkill](_clients_colony_extensions_commonextensions_.extendedestimate.md#setpaymentskill)

## Methods

###  addDomain

▸ **addDomain**(`_parentDomainId`: BigNumberish): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:57](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`_parentDomainId` | BigNumberish |

**Returns:** *Promise‹BigNumber›*

___

###  addPayment

▸ **addPayment**(`_recipient`: string, `_token`: string, `_amount`: BigNumberish, `_domainId`: BigNumberish, `_skillId`: BigNumberish): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:58](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`_recipient` | string |
`_token` | string |
`_amount` | BigNumberish |
`_domainId` | BigNumberish |
`_skillId` | BigNumberish |

**Returns:** *Promise‹BigNumber›*

___

###  finalizePayment

▸ **finalizePayment**(`_id`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:65](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`_id` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹BigNumber›*

___

###  makeTask

▸ **makeTask**(`_specificationHash`: Arrayish, `_domainId`: BigNumberish, `_skillId`: BigNumberish, `_dueDate`: BigNumberish): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:82](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`_specificationHash` | Arrayish |
`_domainId` | BigNumberish |
`_skillId` | BigNumberish |
`_dueDate` | BigNumberish |

**Returns:** *Promise‹BigNumber›*

___

###  moveFundsBetweenPots

▸ **moveFundsBetweenPots**(`_fromPot`: BigNumberish, `_toPot`: BigNumberish, `_amount`: BigNumberish, `_token`: string): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:88](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`_fromPot` | BigNumberish |
`_toPot` | BigNumberish |
`_amount` | BigNumberish |
`_token` | string |

**Returns:** *Promise‹BigNumber›*

___

###  setAdministrationRole

▸ **setAdministrationRole**(`_user`: string, `_domainId`: BigNumberish, `_setTo`: boolean): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:52](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`_user` | string |
`_domainId` | BigNumberish |
`_setTo` | boolean |

**Returns:** *Promise‹BigNumber›*

___

###  setArchitectureRole

▸ **setArchitectureRole**(`_user`: string, `_domainId`: BigNumberish, `_setTo`: boolean): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:42](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`_user` | string |
`_domainId` | BigNumberish |
`_setTo` | boolean |

**Returns:** *Promise‹BigNumber›*

___

###  setFundingRole

▸ **setFundingRole**(`_user`: string, `_domainId`: BigNumberish, `_setTo`: boolean): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:47](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`_user` | string |
`_domainId` | BigNumberish |
`_setTo` | boolean |

**Returns:** *Promise‹BigNumber›*

___

###  setPaymentPayout

▸ **setPaymentPayout**(`_id`: BigNumberish, `_token`: BigNumberish, `_amount`: BigNumberish): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:77](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`_id` | BigNumberish |
`_token` | BigNumberish |
`_amount` | BigNumberish |

**Returns:** *Promise‹BigNumber›*

___

###  setPaymentRecipient

▸ **setPaymentRecipient**(`_id`: BigNumberish, `_recipient`: string): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:69](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`_id` | BigNumberish |
`_recipient` | string |

**Returns:** *Promise‹BigNumber›*

___

###  setPaymentSkill

▸ **setPaymentSkill**(`_id`: BigNumberish, `_skillId`: BigNumberish): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:73](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`_id` | BigNumberish |
`_skillId` | BigNumberish |

**Returns:** *Promise‹BigNumber›*
