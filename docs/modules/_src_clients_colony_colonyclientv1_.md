[@colony/colony-js](../README.md) › [Globals](../globals.md) › ["src/clients/Colony/ColonyClientV1"](_src_clients_colony_colonyclientv1_.md)

# Module: "src/clients/Colony/ColonyClientV1"

## Index

### Interfaces

* [ColonyExtensions](../interfaces/_src_clients_colony_colonyclientv1_.colonyextensions.md)
* [ExtendedEstimates](../interfaces/_src_clients_colony_colonyclientv1_.extendedestimates.md)
* [ExtendedIColony](../interfaces/_src_clients_colony_colonyclientv1_.extendedicolony.md)

### Type aliases

* [ExtensionRequiredIColony](_src_clients_colony_colonyclientv1_.md#extensionrequiredicolony)
* [ExtensionRequiredMethods](_src_clients_colony_colonyclientv1_.md#extensionrequiredmethods)
* [ExtensionRequiredTransactions](_src_clients_colony_colonyclientv1_.md#extensionrequiredtransactions)

### Functions

* [addDomainWithProofs](_src_clients_colony_colonyclientv1_.md#adddomainwithproofs)
* [addExtensions](_src_clients_colony_colonyclientv1_.md#const-addextensions)
* [estimateAddDomainWithProofs](_src_clients_colony_colonyclientv1_.md#estimateadddomainwithproofs)
* [getColonyClient](_src_clients_colony_colonyclientv1_.md#const-getcolonyclient)
* [getPermissionProofs](_src_clients_colony_colonyclientv1_.md#const-getpermissionproofs)

## Type aliases

###  ExtensionRequiredIColony

Ƭ **ExtensionRequiredIColony**: *Pick‹IColony, [ExtensionRequiredMethods](_src_clients_colony_colonyclientv1_.md#extensionrequiredmethods)› & Pick‹IColony, [ExtensionRequiredTransactions](_src_clients_colony_colonyclientv1_.md#extensionrequiredtransactions)› & object*

*Defined in [src/clients/Colony/ColonyClientV1.ts:25](https://github.com/JoinColony/colonyJS/blob/c5d5ff4/src/clients/Colony/ColonyClientV1.ts#L25)*

___

###  ExtensionRequiredMethods

Ƭ **ExtensionRequiredMethods**: *"hasUserRole"*

*Defined in [src/clients/Colony/ColonyClientV1.ts:10](https://github.com/JoinColony/colonyJS/blob/c5d5ff4/src/clients/Colony/ColonyClientV1.ts#L10)*

___

###  ExtensionRequiredTransactions

Ƭ **ExtensionRequiredTransactions**: *"addDomain"*

*Defined in [src/clients/Colony/ColonyClientV1.ts:11](https://github.com/JoinColony/colonyJS/blob/c5d5ff4/src/clients/Colony/ColonyClientV1.ts#L11)*

## Functions

###  addDomainWithProofs

▸ **addDomainWithProofs**<**T**>(`this`: T, `_parentDomainId`: BigNumberish, `overrides?`: TransactionOverrides): *Promise‹ContractTransaction›*

*Defined in [src/clients/Colony/ColonyClientV1.ts:43](https://github.com/JoinColony/colonyJS/blob/c5d5ff4/src/clients/Colony/ColonyClientV1.ts#L43)*

**Type parameters:**

▪ **T**: *[ExtensionRequiredIColony](_src_clients_colony_colonyclientv1_.md#extensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_parentDomainId` | BigNumberish |
`overrides?` | TransactionOverrides |

**Returns:** *Promise‹ContractTransaction›*

___

### `Const` addExtensions

▸ **addExtensions**<**T**>(`instance`: T): *void*

*Defined in [src/clients/Colony/ColonyClientV1.ts:77](https://github.com/JoinColony/colonyJS/blob/c5d5ff4/src/clients/Colony/ColonyClientV1.ts#L77)*

**Type parameters:**

▪ **T**: *[ColonyExtensions](../interfaces/_src_clients_colony_colonyclientv1_.colonyextensions.md) & [ExtensionRequiredIColony](_src_clients_colony_colonyclientv1_.md#extensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | T |

**Returns:** *void*

___

###  estimateAddDomainWithProofs

▸ **estimateAddDomainWithProofs**<**T**>(`this`: T, `_parentDomainId`: BigNumberish): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/ColonyClientV1.ts:61](https://github.com/JoinColony/colonyJS/blob/c5d5ff4/src/clients/Colony/ColonyClientV1.ts#L61)*

**Type parameters:**

▪ **T**: *[ExtensionRequiredIColony](_src_clients_colony_colonyclientv1_.md#extensionrequiredicolony)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`_parentDomainId` | BigNumberish |

**Returns:** *Promise‹BigNumber›*

___

### `Const` getColonyClient

▸ **getColonyClient**(`address`: string, `signerOrProvider`: Signer | Provider): *[ExtendedIColony](../interfaces/_src_clients_colony_colonyclientv1_.extendedicolony.md)*

*Defined in [src/clients/Colony/ColonyClientV1.ts:92](https://github.com/JoinColony/colonyJS/blob/c5d5ff4/src/clients/Colony/ColonyClientV1.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`signerOrProvider` | Signer &#124; Provider |

**Returns:** *[ExtendedIColony](../interfaces/_src_clients_colony_colonyclientv1_.extendedicolony.md)*

___

### `Const` getPermissionProofs

▸ **getPermissionProofs**(`contract`: [ExtensionRequiredIColony](_src_clients_colony_colonyclientv1_.md#extensionrequiredicolony), `domainId`: BigNumberish, `permission`: [ColonyRole](../enums/_src_constants_.colonyrole.md)): *[number, number]*

*Defined in [src/clients/Colony/ColonyClientV1.ts:30](https://github.com/JoinColony/colonyJS/blob/c5d5ff4/src/clients/Colony/ColonyClientV1.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`contract` | [ExtensionRequiredIColony](_src_clients_colony_colonyclientv1_.md#extensionrequiredicolony) |
`domainId` | BigNumberish |
`permission` | [ColonyRole](../enums/_src_constants_.colonyrole.md) |

**Returns:** *[number, number]*
