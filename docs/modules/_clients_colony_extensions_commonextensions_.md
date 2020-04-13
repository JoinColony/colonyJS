[@colony/colony-js](../README.md) › [Globals](../globals.md) › ["clients/Colony/extensions/commonExtensions"](_clients_colony_extensions_commonextensions_.md)

# Module: "clients/Colony/extensions/commonExtensions"

## Index

### Interfaces

* [ColonyExtensions](../interfaces/_clients_colony_extensions_commonextensions_.colonyextensions.md)
* [ExtendedEstimate](../interfaces/_clients_colony_extensions_commonextensions_.extendedestimate.md)

### Type aliases

* [CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)
* [CommonExtensionRequiredMethods](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredmethods)
* [CommonExtensionRequiredTransactions](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredtransactions)
* [ExtendableIColony](_clients_colony_extensions_commonextensions_.md#extendableicolony)

### Functions

* [addDomainWithProofs](_clients_colony_extensions_commonextensions_.md#adddomainwithproofs)
* [addExtensions](_clients_colony_extensions_commonextensions_.md#const-addextensions)
* [addPaymentWithProofs](_clients_colony_extensions_commonextensions_.md#addpaymentwithproofs)
* [estimateAddDomainWithProofs](_clients_colony_extensions_commonextensions_.md#estimateadddomainwithproofs)
* [estimateAddPaymentWithProofs](_clients_colony_extensions_commonextensions_.md#estimateaddpaymentwithproofs)
* [estimateFinalizePaymentWithProofs](_clients_colony_extensions_commonextensions_.md#estimatefinalizepaymentwithproofs)
* [estimateMakeTaskWithProofs](_clients_colony_extensions_commonextensions_.md#estimatemaketaskwithproofs)
* [estimateMoveFundsBetweenPotsWithProofs](_clients_colony_extensions_commonextensions_.md#estimatemovefundsbetweenpotswithproofs)
* [estimateSetAdministrationRoleWithProofs](_clients_colony_extensions_commonextensions_.md#estimatesetadministrationrolewithproofs)
* [estimateSetArchitectureRoleWithProofs](_clients_colony_extensions_commonextensions_.md#estimatesetarchitecturerolewithproofs)
* [estimateSetFundingRoleWithProofs](_clients_colony_extensions_commonextensions_.md#estimatesetfundingrolewithproofs)
* [estimateSetPaymentPayoutWithProofs](_clients_colony_extensions_commonextensions_.md#estimatesetpaymentpayoutwithproofs)
* [estimateSetPaymentRecipientWithProofs](_clients_colony_extensions_commonextensions_.md#estimatesetpaymentrecipientwithproofs)
* [estimateSetPaymentSkillWithProofs](_clients_colony_extensions_commonextensions_.md#estimatesetpaymentskillwithproofs)
* [finalizePaymentWithProofs](_clients_colony_extensions_commonextensions_.md#finalizepaymentwithproofs)
* [getChildIndex](_clients_colony_extensions_commonextensions_.md#const-getchildindex)
* [getMoveFundsPermissionProofs](_clients_colony_extensions_commonextensions_.md#const-getmovefundspermissionproofs)
* [getPermissionProofs](_clients_colony_extensions_commonextensions_.md#const-getpermissionproofs)
* [getPotDomain](_clients_colony_extensions_commonextensions_.md#const-getpotdomain)
* [makeTaskWithProofs](_clients_colony_extensions_commonextensions_.md#maketaskwithproofs)
* [moveFundsBetweenPotsWithProofs](_clients_colony_extensions_commonextensions_.md#movefundsbetweenpotswithproofs)
* [setAdministrationRoleWithProofs](_clients_colony_extensions_commonextensions_.md#setadministrationrolewithproofs)
* [setArchitectureRoleWithProofs](_clients_colony_extensions_commonextensions_.md#setarchitecturerolewithproofs)
* [setFundingRoleWithProofs](_clients_colony_extensions_commonextensions_.md#setfundingrolewithproofs)
* [setPaymentPayoutWithProofs](_clients_colony_extensions_commonextensions_.md#setpaymentpayoutwithproofs)
* [setPaymentRecipientWithProofs](_clients_colony_extensions_commonextensions_.md#setpaymentrecipientwithproofs)
* [setPaymentSkillWithProofs](_clients_colony_extensions_commonextensions_.md#setpaymentskillwithproofs)

## Type aliases

###  CommonExtensionRequiredIColony

Ƭ **CommonExtensionRequiredIColony**: *[ExtendableIColony](_clients_colony_extensions_commonextensions_.md#extendableicolony) & Pick‹IColony, [CommonExtensionRequiredTransactions](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredtransactions)› & object*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:170](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L170)*

___

###  CommonExtensionRequiredMethods

Ƭ **CommonExtensionRequiredMethods**: *"getDomain" | "getFundingPot" | "getTask" | "getPayment" | "hasUserRole"*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:21](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L21)*

___

###  CommonExtensionRequiredTransactions

Ƭ **CommonExtensionRequiredTransactions**: *"setArchitectureRole" | "setFundingRole" | "setAdministrationRole" | "addDomain" | "addPayment" | "finalizePayment" | "setPaymentRecipient" | "setPaymentSkill" | "setPaymentPayout" | "makeTask" | "moveFundsBetweenPots"*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:28](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L28)*

___

###  ExtendableIColony

Ƭ **ExtendableIColony**: *Pick‹[ColonyExtensions](../interfaces/_clients_colony_extensions_commonextensions_.colonyextensions.md), "networkClient"› & Pick‹IColony, "signer"› & Pick‹IColony, [CommonExtensionRequiredMethods](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredmethods)›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:166](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L166)*

## Functions

###  addDomainWithProofs

▸ **addDomainWithProofs**<**T**>(`this`: T, `_parentDomainId`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:407](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L407)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_parentDomainId` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

### `Const` addExtensions

▸ **addExtensions**<**T**>(`instance`: T, `networkClient`: [ExtendedIColonyNetwork](../interfaces/_clients_colonynetworkclient_.extendedicolonynetwork.md)): *void*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:825](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L825)*

**Type parameters:**

▪ **T**: *[ColonyExtensions](../interfaces/_clients_colony_extensions_commonextensions_.colonyextensions.md) & [CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | T |
`networkClient` | [ExtendedIColonyNetwork](../interfaces/_clients_colonynetworkclient_.extendedicolonynetwork.md) |

**Returns:** *void*

___

###  addPaymentWithProofs

▸ **addPaymentWithProofs**<**T**>(`this`: T, `_recipient`: string, `_token`: string, `_amount`: BigNumberish, `_domainId`: BigNumberish, `_skillId`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:425](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L425)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_recipient` | string |
`_token` | string |
`_amount` | BigNumberish |
`_domainId` | BigNumberish |
`_skillId` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  estimateAddDomainWithProofs

▸ **estimateAddDomainWithProofs**<**T**>(`this`: T, `_parentDomainId`: BigNumberish): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:661](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L661)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_parentDomainId` | BigNumberish |

**Returns:** *Promise‹BigNumber›*

___

###  estimateAddPaymentWithProofs

▸ **estimateAddPaymentWithProofs**<**T**>(`this`: T, `_recipient`: string, `_token`: string, `_amount`: BigNumberish, `_domainId`: BigNumberish, `_skillId`: BigNumberish): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:676](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L676)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_recipient` | string |
`_token` | string |
`_amount` | BigNumberish |
`_domainId` | BigNumberish |
`_skillId` | BigNumberish |

**Returns:** *Promise‹BigNumber›*

___

###  estimateFinalizePaymentWithProofs

▸ **estimateFinalizePaymentWithProofs**<**T**>(`this`: T, `_id`: BigNumberish): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:702](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L702)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_id` | BigNumberish |

**Returns:** *Promise‹BigNumber›*

___

###  estimateMakeTaskWithProofs

▸ **estimateMakeTaskWithProofs**<**T**>(`this`: T, `_specificationHash`: Arrayish, `_domainId`: BigNumberish, `_skillId`: BigNumberish, `_dueDate`: BigNumberish): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:775](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L775)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_specificationHash` | Arrayish |
`_domainId` | BigNumberish |
`_skillId` | BigNumberish |
`_dueDate` | BigNumberish |

**Returns:** *Promise‹BigNumber›*

___

###  estimateMoveFundsBetweenPotsWithProofs

▸ **estimateMoveFundsBetweenPotsWithProofs**<**T**>(`this`: T, `_fromPot`: BigNumberish, `_toPot`: BigNumberish, `_amount`: BigNumberish, `_token`: string): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:799](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L799)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_fromPot` | BigNumberish |
`_toPot` | BigNumberish |
`_amount` | BigNumberish |
`_token` | string |

**Returns:** *Promise‹BigNumber›*

___

###  estimateSetAdministrationRoleWithProofs

▸ **estimateSetAdministrationRoleWithProofs**<**T**>(`this`: T, `_user`: string, `_domainId`: BigNumberish, `_setTo`: boolean): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:639](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L639)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_user` | string |
`_domainId` | BigNumberish |
`_setTo` | boolean |

**Returns:** *Promise‹BigNumber›*

___

###  estimateSetArchitectureRoleWithProofs

▸ **estimateSetArchitectureRoleWithProofs**<**T**>(`this`: T, `_user`: string, `_domainId`: BigNumberish, `_setTo`: boolean): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:595](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L595)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_user` | string |
`_domainId` | BigNumberish |
`_setTo` | boolean |

**Returns:** *Promise‹BigNumber›*

___

###  estimateSetFundingRoleWithProofs

▸ **estimateSetFundingRoleWithProofs**<**T**>(`this`: T, `_user`: string, `_domainId`: BigNumberish, `_setTo`: boolean): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:617](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L617)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_user` | string |
`_domainId` | BigNumberish |
`_setTo` | boolean |

**Returns:** *Promise‹BigNumber›*

___

###  estimateSetPaymentPayoutWithProofs

▸ **estimateSetPaymentPayoutWithProofs**<**T**>(`this`: T, `_id`: BigNumberish, `_token`: string, `_amount`: BigNumberish): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:752](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L752)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_id` | BigNumberish |
`_token` | string |
`_amount` | BigNumberish |

**Returns:** *Promise‹BigNumber›*

___

###  estimateSetPaymentRecipientWithProofs

▸ **estimateSetPaymentRecipientWithProofs**<**T**>(`this`: T, `_id`: BigNumberish, `_recipient`: string): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:718](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L718)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_id` | BigNumberish |
`_recipient` | string |

**Returns:** *Promise‹BigNumber›*

___

###  estimateSetPaymentSkillWithProofs

▸ **estimateSetPaymentSkillWithProofs**<**T**>(`this`: T, `_id`: BigNumberish, `_skillId`: BigNumberish): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:735](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L735)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_id` | BigNumberish |
`_skillId` | BigNumberish |

**Returns:** *Promise‹BigNumber›*

___

###  finalizePaymentWithProofs

▸ **finalizePaymentWithProofs**<**T**>(`this`: T, `_id`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:451](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L451)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_id` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

### `Const` getChildIndex

▸ **getChildIndex**(`contract`: [ExtendableIColony](_clients_colony_extensions_commonextensions_.md#extendableicolony), `parentDomainId`: BigNumberish, `domainId`: BigNumberish): *Promise‹number›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:204](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L204)*

**Parameters:**

Name | Type |
------ | ------ |
`contract` | [ExtendableIColony](_clients_colony_extensions_commonextensions_.md#extendableicolony) |
`parentDomainId` | BigNumberish |
`domainId` | BigNumberish |

**Returns:** *Promise‹number›*

___

### `Const` getMoveFundsPermissionProofs

▸ **getMoveFundsPermissionProofs**(`contract`: [CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony), `fromtPotId`: BigNumberish, `toPotId`: BigNumberish): *Promise‹[BigNumberish, BigNumberish, BigNumberish]›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:252](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L252)*

**Parameters:**

Name | Type |
------ | ------ |
`contract` | [CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony) |
`fromtPotId` | BigNumberish |
`toPotId` | BigNumberish |

**Returns:** *Promise‹[BigNumberish, BigNumberish, BigNumberish]›*

___

### `Const` getPermissionProofs

▸ **getPermissionProofs**(`contract`: [ExtendableIColony](_clients_colony_extensions_commonextensions_.md#extendableicolony), `domainId`: BigNumberish, `role`: [ColonyRole](../enums/_constants_.colonyrole.md), `customAddress?`: undefined | string): *Promise‹[BigNumberish, BigNumberish]›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:215](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L215)*

**Parameters:**

Name | Type |
------ | ------ |
`contract` | [ExtendableIColony](_clients_colony_extensions_commonextensions_.md#extendableicolony) |
`domainId` | BigNumberish |
`role` | [ColonyRole](../enums/_constants_.colonyrole.md) |
`customAddress?` | undefined &#124; string |

**Returns:** *Promise‹[BigNumberish, BigNumberish]›*

___

### `Const` getPotDomain

▸ **getPotDomain**(`contract`: [ExtendableIColony](_clients_colony_extensions_commonextensions_.md#extendableicolony), `potId`: BigNumberish): *Promise‹BigNumberish›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:175](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L175)*

**Parameters:**

Name | Type |
------ | ------ |
`contract` | [ExtendableIColony](_clients_colony_extensions_commonextensions_.md#extendableicolony) |
`potId` | BigNumberish |

**Returns:** *Promise‹BigNumberish›*

___

###  makeTaskWithProofs

▸ **makeTaskWithProofs**<**T**>(`this`: T, `_specificationHash`: Arrayish, `_domainId`: BigNumberish, `_skillId`: BigNumberish, `_dueDate`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:543](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L543)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_specificationHash` | Arrayish |
`_domainId` | BigNumberish |
`_skillId` | BigNumberish |
`_dueDate` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  moveFundsBetweenPotsWithProofs

▸ **moveFundsBetweenPotsWithProofs**<**T**>(`this`: T, `_fromPot`: BigNumberish, `_toPot`: BigNumberish, `_amount`: BigNumberish, `_token`: string, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:567](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L567)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_fromPot` | BigNumberish |
`_toPot` | BigNumberish |
`_amount` | BigNumberish |
`_token` | string |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  setAdministrationRoleWithProofs

▸ **setAdministrationRoleWithProofs**<**T**>(`this`: T, `_user`: string, `_domainId`: BigNumberish, `_setTo`: boolean, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:376](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L376)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_user` | string |
`_domainId` | BigNumberish |
`_setTo` | boolean |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  setArchitectureRoleWithProofs

▸ **setArchitectureRoleWithProofs**<**T**>(`this`: T, `_user`: string, `_domainId`: BigNumberish, `_setTo`: boolean, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:314](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L314)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_user` | string |
`_domainId` | BigNumberish |
`_setTo` | boolean |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  setFundingRoleWithProofs

▸ **setFundingRoleWithProofs**<**T**>(`this`: T, `_user`: string, `_domainId`: BigNumberish, `_setTo`: boolean, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:345](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L345)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_user` | string |
`_domainId` | BigNumberish |
`_setTo` | boolean |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  setPaymentPayoutWithProofs

▸ **setPaymentPayoutWithProofs**<**T**>(`this`: T, `_id`: BigNumberish, `_token`: string, `_amount`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:518](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L518)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_id` | BigNumberish |
`_token` | string |
`_amount` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  setPaymentRecipientWithProofs

▸ **setPaymentRecipientWithProofs**<**T**>(`this`: T, `_id`: BigNumberish, `_recipient`: string, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:472](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L472)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_id` | BigNumberish |
`_recipient` | string |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

###  setPaymentSkillWithProofs

▸ **setPaymentSkillWithProofs**<**T**>(`this`: T, `_id`: BigNumberish, `_skillId`: string, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/commonExtensions.ts:495](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/extensions/commonExtensions.ts#L495)*

**Type parameters:**

▪ **T**: *[CommonExtensionRequiredIColony](_clients_colony_extensions_commonextensions_.md#commonextensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_id` | BigNumberish |
`_skillId` | string |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*
