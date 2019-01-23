---
title: MetaColonyClient
section: API
order: 5
---

The `MetaColonyClient` class is a standard interface for interactions with the on-chain functions and events described in `IMetaColony.sol`.

These interactions are generally concerned with functions and events internal to the Meta Colony, such as adding global skills.

For functions and events that concern the colonyNetwork as a whole, refer to the [ColonyNetworkClient API](/colonyjs/api-colonynetworkclient/).

==TOC==

## Create an instance

The easiest way to initialize the `MetaColonyClient` is to ask the `ColonyNetworkClient` for a new instance:

```js

const metaColonyClient = await networkClient.getMetaColonyClient();

```

You _could_ create an instance of `MetaColonyClient` by providing an [adapter](/colonyjs/docs-adapters) and a query:

```js

const metaColonyClient = new MetaColonyClient({ adapter, query });

await metaColonyClient.init();

```

  
## Callers

**All callers return promises which resolve to an object containing the given return values.** For a reference please check [here](/colonyjs/docs-contractclient/#callers).

### `getAuthority.call()`

Get the authority contract address associated with the colony.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|address|Address|The address of the authority contract associated with the colony.|

### `getToken.call()`

Get the address of the ERC20 token contract that is the native token assigned to the Meta Colony.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|address|Address|The address of the ERC20 token contract.|

  
## Senders

**All senders return an instance of a `ContractResponse`.** Every `send()` method takes an `options` object as the second argument. For a reference please check [here](/colonyjs/docs-contractclient/#senders).
### `addGlobalSkill.send({ parentSkillId }, options)`

Add a new global skill to the skills tree. This can only be called from the Meta Colony, and only by the user assigned the `FOUNDER` role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|parentSkillId|number|The numeric ID of the skill under which the new skill will be added.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|skillId|number|The numeric ID of the skill that was added.|
|parentSkillId|number|The numeric ID of the parent skill.|
|SkillAdded|object|Contains the data defined in [SkillAdded](#eventsskilladdedaddlistener-skillid-parentskillid-------)|

### `mintTokensForColonyNetwork.send({ amount }, options)`

Mint tokens for the Colony Network. This can only be called from the Meta Colony, and only by the user assigned the `FOUNDER` role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|amount|BigNumber|The amount of new tokens that will be minted.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|address|Address|The address that initiated the mint event.|
|amount|BigNumber|The amount of tokens that were minted.|
|Mint|object|Contains the data defined in [Mint](#eventsmintaddlistener-address-amount-------)|

### `setNetworkFeeInverse.send({ feeInverse }, options)`

Set the inverse amount of the reward. If the fee is 1% (or 0.01), the inverse amount will be 100. This can only be called from the Meta Colony, and only by the user assigned the `FOUNDER` role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|feeInverse|number|The inverse amount that will be set.|

**Returns**

An instance of a `ContractResponse`



  
  
## Events

Refer to the `ContractEvent` class [here](/colonyjs/docs-contractclient/#events) to interact with these events.


### `events.Mint.addListener(({ address, amount }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|address|Address|The address that initiated the mint event.|
|amount|BigNumber|The amount of tokens that were minted.|


### `events.SkillAdded.addListener(({ skillId, parentSkillId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|skillId|number|The numeric ID of the skill that was added.|
|parentSkillId|number|The numeric ID of the parent skill.|