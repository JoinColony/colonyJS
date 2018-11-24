---
title: MetaColonyClient
section: API
order: 5
---

The `MetaColonyClient` class is a standard interface for interactions with the on-chain functions and events described in `IMetaColony.sol`.

These interactions are generally concerned with functions and events internal to the Meta Colony, such as adding global skills.

For functions and events that concern the colonyNetwork as a whole, refer to the [ColonyNetworkClient API](/colonyjs/api-colonynetworkclient/)

==TOC==

## Creating a new instance

You _could_ create a MetaColonyClient by using an adapter and a query: `new MetaColonyClient({ adapter, query })` and then `.init()` it but it is advised to ask the network client for a new instance:

```javascript
const metaColonyClient = await networkClient.getMetaColonyClient(colonyId); // This is already initialised
```

## Instance properties

### `networkClient`

The Meta Colony's [ColonyNetworkClient](/colonyjs/api-colonynetworkclient/) instance.

### `authority`

The Meta Colony's [AuthorityClient](/colonyjs/api-authorityclient/) instance.

### `token`

The Meta Colony's [TokenClient](/colonyjs/api-tokenclient/) instance.

  
## Callers

**All callers return promises which resolve to an object containing the given return values.** For a reference please check [here](/colonyjs/docs-contractclient/#callers).

### `getAuthority.call()`

Gets the colony's Authority contract address


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|address|Address|The colony's Authority contract address|

### `getToken.call()`

Gets the address of the colony's official token contract.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|address|Address|The address of the colony's official deployed token contract|

  
## Senders

**All senders return an instance of a `ContractResponse`.** Every `send()` method takes an `options` object as the second argument. For a reference please check [here](/colonyjs/docs-contractclient/#senders).
### `addGlobalSkill.send({ parentSkillId }, options)`

Adds a global skill under a given parent SkillId. This can only be called from the Meta Colony, and only by the Meta Colony owners.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|parentSkillId|number|Integer id of the parent skill.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|skillId|number|A skillId for this domain.|
|parentSkillId|number|The parent skill id.|
|SkillAdded|object|Contains the data defined in [SkillAdded](#events-SkillAdded)|

### `mintTokensForColonyNetwork.send({ amount }, options)`

In the case of the Colony Network, only the Meta Colony may mint new tokens.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|amount|BigNumber|Amount of new tokens to be minted.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|address|Address|The address that initiated the mint event.|
|amount|BigNumber|Event data indicating the amount of tokens minted.|
|Mint|object|Contains the data defined in [Mint](#events-Mint)|

### `setNetworkFeeInverse.send({ feeInverse }, options)`

Set the Colony Network fee inverse amount. This can only be called from the Meta Colony, and only by the Meta Colony owners.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|feeInverse|number|Integer id of the parent skill.|

**Returns**

An instance of a `ContractResponse`



  
  
## Events

Refer to the `ContractEvent` class [here](/colonyjs/docs-contractclient/#events) to interact with these events.


### [events.SkillAdded.addListener(({ skillId, parentSkillId }) => { /* ... */ })](#events-SkillAdded)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|skillId|number|A skillId for this domain.|
|parentSkillId|number|The parent skill id.|


### [events.Mint.addListener(({ address, amount }) => { /* ... */ })](#events-Mint)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|address|Address|The address that initiated the mint event.|
|amount|BigNumber|Event data indicating the amount of tokens minted.|