[@colony/colony-js](../README.md) › [Globals](../globals.md) › ["clients/Colony/ColonyVersionClient"](../modules/_clients_colony_colonyversionclient_.md) › [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md)

# Interface: ColonyVersionClient

## Hierarchy

* Contract

  ↳ **ColonyVersionClient**

## Indexable

* \[ **name**: *string*\]: ContractFunction | any

## Index

### Constructors

* [constructor](_clients_colony_colonyversionclient_.colonyversionclient.md#constructor)

### Properties

* [address](_clients_colony_colonyversionclient_.colonyversionclient.md#address)
* [addressPromise](_clients_colony_colonyversionclient_.colonyversionclient.md#addresspromise)
* [deployTransaction](_clients_colony_colonyversionclient_.colonyversionclient.md#deploytransaction)
* [estimate](_clients_colony_colonyversionclient_.colonyversionclient.md#estimate)
* [filters](_clients_colony_colonyversionclient_.colonyversionclient.md#filters)
* [functions](_clients_colony_colonyversionclient_.colonyversionclient.md#functions)
* [interface](_clients_colony_colonyversionclient_.colonyversionclient.md#interface)
* [provider](_clients_colony_colonyversionclient_.colonyversionclient.md#provider)
* [signer](_clients_colony_colonyversionclient_.colonyversionclient.md#signer)

### Methods

* [_deployed](_clients_colony_colonyversionclient_.colonyversionclient.md#_deployed)
* [addListener](_clients_colony_colonyversionclient_.colonyversionclient.md#addlistener)
* [attach](_clients_colony_colonyversionclient_.colonyversionclient.md#attach)
* [connect](_clients_colony_colonyversionclient_.colonyversionclient.md#connect)
* [deployed](_clients_colony_colonyversionclient_.colonyversionclient.md#deployed)
* [emit](_clients_colony_colonyversionclient_.colonyversionclient.md#emit)
* [fallback](_clients_colony_colonyversionclient_.colonyversionclient.md#fallback)
* [listenerCount](_clients_colony_colonyversionclient_.colonyversionclient.md#listenercount)
* [listeners](_clients_colony_colonyversionclient_.colonyversionclient.md#listeners)
* [on](_clients_colony_colonyversionclient_.colonyversionclient.md#on)
* [once](_clients_colony_colonyversionclient_.colonyversionclient.md#once)
* [removeAllListeners](_clients_colony_colonyversionclient_.colonyversionclient.md#removealllisteners)
* [removeListener](_clients_colony_colonyversionclient_.colonyversionclient.md#removelistener)
* [version](_clients_colony_colonyversionclient_.colonyversionclient.md#version)
* [isIndexed](_clients_colony_colonyversionclient_.colonyversionclient.md#static-isindexed)

## Constructors

###  constructor

\+ **new ColonyVersionClient**(`addressOrName`: string, `contractInterface`: Array‹string | FunctionFragment | EventFragment | ParamType› | string | Interface, `signerOrProvider`: Signer | Provider): *[ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md)*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[constructor](_clients_colony_colonyversionclient_.colonyversionclient.md#constructor)*

Defined in node_modules/ethers/contract.d.ts:53

**Parameters:**

Name | Type |
------ | ------ |
`addressOrName` | string |
`contractInterface` | Array‹string &#124; FunctionFragment &#124; EventFragment &#124; ParamType› &#124; string &#124; Interface |
`signerOrProvider` | Signer &#124; Provider |

**Returns:** *[ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md)*

## Properties

###  address

• **address**: *string*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[address](_clients_colony_colonyversionclient_.colonyversionclient.md#address)*

Defined in node_modules/ethers/contract.d.ts:43

___

###  addressPromise

• **addressPromise**: *Promise‹string›*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[addressPromise](_clients_colony_colonyversionclient_.colonyversionclient.md#addresspromise)*

Defined in node_modules/ethers/contract.d.ts:51

___

###  deployTransaction

• **deployTransaction**: *TransactionResponse*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[deployTransaction](_clients_colony_colonyversionclient_.colonyversionclient.md#deploytransaction)*

Defined in node_modules/ethers/contract.d.ts:52

___

###  estimate

• **estimate**: *Bucket‹function›*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[estimate](_clients_colony_colonyversionclient_.colonyversionclient.md#estimate)*

Defined in node_modules/ethers/contract.d.ts:47

___

###  filters

• **filters**: *Bucket‹function›*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[filters](_clients_colony_colonyversionclient_.colonyversionclient.md#filters)*

Defined in node_modules/ethers/contract.d.ts:49

___

###  functions

• **functions**: *Bucket‹ContractFunction›*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[functions](_clients_colony_colonyversionclient_.colonyversionclient.md#functions)*

Defined in node_modules/ethers/contract.d.ts:48

___

###  interface

• **interface**: *Interface*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[interface](_clients_colony_colonyversionclient_.colonyversionclient.md#interface)*

Defined in node_modules/ethers/contract.d.ts:44

___

###  provider

• **provider**: *Provider*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[provider](_clients_colony_colonyversionclient_.colonyversionclient.md#provider)*

Defined in node_modules/ethers/contract.d.ts:46

___

###  signer

• **signer**: *Signer*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[signer](_clients_colony_colonyversionclient_.colonyversionclient.md#signer)*

Defined in node_modules/ethers/contract.d.ts:45

## Methods

###  _deployed

▸ **_deployed**(`blockTag?`: BlockTag): *Promise‹Contract›*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[_deployed](_clients_colony_colonyversionclient_.colonyversionclient.md#_deployed)*

Defined in node_modules/ethers/contract.d.ts:56

**Parameters:**

Name | Type |
------ | ------ |
`blockTag?` | BlockTag |

**Returns:** *Promise‹Contract›*

___

###  addListener

▸ **addListener**(`eventName`: EventFilter | string, `listener`: Listener): *Contract*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[addListener](_clients_colony_colonyversionclient_.colonyversionclient.md#addlistener)*

Defined in node_modules/ethers/contract.d.ts:66

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | EventFilter &#124; string |
`listener` | Listener |

**Returns:** *Contract*

___

###  attach

▸ **attach**(`addressOrName`: string): *Contract*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[attach](_clients_colony_colonyversionclient_.colonyversionclient.md#attach)*

Defined in node_modules/ethers/contract.d.ts:59

**Parameters:**

Name | Type |
------ | ------ |
`addressOrName` | string |

**Returns:** *Contract*

___

###  connect

▸ **connect**(`signerOrProvider`: Signer | Provider | string): *Contract*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[connect](_clients_colony_colonyversionclient_.colonyversionclient.md#connect)*

Defined in node_modules/ethers/contract.d.ts:58

**Parameters:**

Name | Type |
------ | ------ |
`signerOrProvider` | Signer &#124; Provider &#124; string |

**Returns:** *Contract*

___

###  deployed

▸ **deployed**(): *Promise‹Contract›*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[deployed](_clients_colony_colonyversionclient_.colonyversionclient.md#deployed)*

Defined in node_modules/ethers/contract.d.ts:55

**Returns:** *Promise‹Contract›*

___

###  emit

▸ **emit**(`eventName`: EventFilter | string, ...`args`: Array‹any›): *boolean*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[emit](_clients_colony_colonyversionclient_.colonyversionclient.md#emit)*

Defined in node_modules/ethers/contract.d.ts:67

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | EventFilter &#124; string |
`...args` | Array‹any› |

**Returns:** *boolean*

___

###  fallback

▸ **fallback**(`overrides?`: TransactionRequest): *Promise‹TransactionResponse›*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[fallback](_clients_colony_colonyversionclient_.colonyversionclient.md#fallback)*

Defined in node_modules/ethers/contract.d.ts:57

**Parameters:**

Name | Type |
------ | ------ |
`overrides?` | TransactionRequest |

**Returns:** *Promise‹TransactionResponse›*

___

###  listenerCount

▸ **listenerCount**(`eventName?`: EventFilter | string): *number*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[listenerCount](_clients_colony_colonyversionclient_.colonyversionclient.md#listenercount)*

Defined in node_modules/ethers/contract.d.ts:68

**Parameters:**

Name | Type |
------ | ------ |
`eventName?` | EventFilter &#124; string |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`eventName`: EventFilter | string): *Array‹Listener›*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[listeners](_clients_colony_colonyversionclient_.colonyversionclient.md#listeners)*

Defined in node_modules/ethers/contract.d.ts:69

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | EventFilter &#124; string |

**Returns:** *Array‹Listener›*

___

###  on

▸ **on**(`event`: EventFilter | string, `listener`: Listener): *Contract*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[on](_clients_colony_colonyversionclient_.colonyversionclient.md#on)*

Defined in node_modules/ethers/contract.d.ts:64

**Parameters:**

Name | Type |
------ | ------ |
`event` | EventFilter &#124; string |
`listener` | Listener |

**Returns:** *Contract*

___

###  once

▸ **once**(`event`: EventFilter | string, `listener`: Listener): *Contract*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[once](_clients_colony_colonyversionclient_.colonyversionclient.md#once)*

Defined in node_modules/ethers/contract.d.ts:65

**Parameters:**

Name | Type |
------ | ------ |
`event` | EventFilter &#124; string |
`listener` | Listener |

**Returns:** *Contract*

___

###  removeAllListeners

▸ **removeAllListeners**(`eventName`: EventFilter | string): *Contract*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[removeAllListeners](_clients_colony_colonyversionclient_.colonyversionclient.md#removealllisteners)*

Defined in node_modules/ethers/contract.d.ts:70

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | EventFilter &#124; string |

**Returns:** *Contract*

___

###  removeListener

▸ **removeListener**(`eventName`: any, `listener`: Listener): *Contract*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[removeListener](_clients_colony_colonyversionclient_.colonyversionclient.md#removelistener)*

Defined in node_modules/ethers/contract.d.ts:71

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | any |
`listener` | Listener |

**Returns:** *Contract*

___

###  version

▸ **version**(): *Promise‹BigNumber›*

*Defined in [src/clients/Colony/ColonyVersionClient.ts:8](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/clients/Colony/ColonyVersionClient.ts#L8)*

**Returns:** *Promise‹BigNumber›*

___

### `Static` isIndexed

▸ **isIndexed**(`value`: any): *value is Indexed*

*Inherited from [ColonyVersionClient](_clients_colony_colonyversionclient_.colonyversionclient.md).[isIndexed](_clients_colony_colonyversionclient_.colonyversionclient.md#static-isindexed)*

Defined in node_modules/ethers/contract.d.ts:60

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Indexed*
