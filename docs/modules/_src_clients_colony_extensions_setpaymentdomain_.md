[@colony/colony-js](../README.md) › [Globals](../globals.md) › ["src/clients/Colony/extensions/SetPaymentDomain"](_src_clients_colony_extensions_setpaymentdomain_.md)

# Module: "src/clients/Colony/extensions/SetPaymentDomain"

## Index

### Interfaces

* [SetPaymentDomainEstimate](../interfaces/_src_clients_colony_extensions_setpaymentdomain_.setpaymentdomainestimate.md)
* [SetPaymentDomainExtensions](../interfaces/_src_clients_colony_extensions_setpaymentdomain_.setpaymentdomainextensions.md)

### Type aliases

* [ExtensionRequiredTransactions](_src_clients_colony_extensions_setpaymentdomain_.md#extensionrequiredtransactions)
* [SetPaymentDomainRequiredIColony](_src_clients_colony_extensions_setpaymentdomain_.md#setpaymentdomainrequiredicolony)

### Functions

* [estimateSetPaymentDomainWithProofs](_src_clients_colony_extensions_setpaymentdomain_.md#estimatesetpaymentdomainwithproofs)
* [setPaymentDomainWithProofs](_src_clients_colony_extensions_setpaymentdomain_.md#setpaymentdomainwithproofs)

## Type aliases

###  ExtensionRequiredTransactions

Ƭ **ExtensionRequiredTransactions**: *"setPaymentDomain"*

*Defined in [src/clients/Colony/extensions/SetPaymentDomain.ts:9](https://github.com/JoinColony/colonyJS/blob/3e623ff/src/clients/Colony/extensions/SetPaymentDomain.ts#L9)*

___

###  SetPaymentDomainRequiredIColony

Ƭ **SetPaymentDomainRequiredIColony**: *[ExtendableIColony](_src_clients_colony_extensions_commonextensions_.md#extendableicolony) & Pick‹IColony, [ExtensionRequiredTransactions](_src_clients_colony_extensions_setpaymentdomain_.md#extensionrequiredtransactions)› & object*

*Defined in [src/clients/Colony/extensions/SetPaymentDomain.ts:26](https://github.com/JoinColony/colonyJS/blob/3e623ff/src/clients/Colony/extensions/SetPaymentDomain.ts#L26)*

## Functions

###  estimateSetPaymentDomainWithProofs

▸ **estimateSetPaymentDomainWithProofs**<**T**>(`this`: T, `_id`: BigNumberish, `_domainId`: BigNumberish): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/extensions/SetPaymentDomain.ts:54](https://github.com/JoinColony/colonyJS/blob/3e623ff/src/clients/Colony/extensions/SetPaymentDomain.ts#L54)*

**Type parameters:**

▪ **T**: *[SetPaymentDomainRequiredIColony](_src_clients_colony_extensions_setpaymentdomain_.md#setpaymentdomainrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_id` | BigNumberish |
`_domainId` | BigNumberish |

**Returns:** *Promise‹BigNumber›*

___

###  setPaymentDomainWithProofs

▸ **setPaymentDomainWithProofs**<**T**>(`this`: T, `_id`: BigNumberish, `_domainId`: string, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/extensions/SetPaymentDomain.ts:31](https://github.com/JoinColony/colonyJS/blob/3e623ff/src/clients/Colony/extensions/SetPaymentDomain.ts#L31)*

**Type parameters:**

▪ **T**: *[SetPaymentDomainRequiredIColony](_src_clients_colony_extensions_setpaymentdomain_.md#setpaymentdomainrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_id` | BigNumberish |
`_domainId` | string |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*
