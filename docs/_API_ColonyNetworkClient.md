---
title: ColonyNetworkClient
section: API
order: 2
---

The ColonyNetworkClient is a standard interface for interactions with functions and events described in `IColonyNetwork.sol`.

These interactions are generally concerned with the colony network as a whole, rather than at the colony level. This includes operations like getting a count of all colonies on the network, querying for information about a parent skillId, or deposits/withdrawals of staked CLNY for use in the reputation system.

You can learn more about the solidity implementation from the [Colony Network Docs](../../colonynetwork/docs-colony).

For interactions within a particular colony, see [the ColonyClient docs](../_API_ColonyClient.md).

==TOC==

## Creating a new instance

Assuming you're inside an `async` function:

```javascript
const networkClient = new ColonyNetworkClient({ adapter });
await networkClient.init();
```

## Instance methods

Every `send()` method takes an `options` object as the second argument. For a reference please check [here](/colonyjs/docs-contract-client/#senders).

## Callers

### `getColonyById.call({ id })`

Returns the address of a colony when given the colonyId

|Param|Type|Description|
|---|---|---|
|id|number|Integer colonyId|

|Return value|Type|Description|
|---|---|---|
|address|Address|Address of the colony contract|

### `getColonyByKey.call({ key })`

Returns the address of a colony when given the colony's name (a.k.a its unique "key")

|Param|Type|Description|
|---|---|---|
|key|string|The colony's unique key|

|Return value|Type|Description|
|---|---|---|
|address|Address|Address of the colony contract|

### `getColonyCount.call()`

Returns the number of colonies created on the Colony Network, i.e. the colonyId of the most recently created colony.


|Return value|Type|Description|
|---|---|---|
|count|number|colonyId of the most recently created colony|

### `getColonyVersionResolver.call({ version })`

Given a version of the colony contract, returns the address of the corresponding `Resolver` contract

|Param|Type|Description|
|---|---|---|
|version|number|The Colony contract version|

|Return value|Type|Description|
|---|---|---|
|address|Address|Address of the `Resolver` contract|

### `getCurrentColonyVersion.call()`

Returns the latest Colony contract version. This is the version used to create all new colonies.


|Return value|Type|Description|
|---|---|---|
|version|number|The current / latest Colony contract version|

### `getParentSkillId.call({ skillId, parentSkillIndex })`

Given the id of a particular skill, returns the skill's parent skill id

|Param|Type|Description|
|---|---|---|
|skillId|number|Id of the skill|
|parentSkillIndex|number|Index of the `skill.parents` array to get|

|Return value|Type|Description|
|---|---|---|
|parentSkillId|number|Id of the parent skill|

### `getReputationUpdateLogEntry.call({ id })`

Gets the `ReputationLogEntry` at a specified index for either ther currently active or inactive reputation update log

|Param|Type|Description|
|---|---|---|
|id|number|The reputation log members array index of the entry to get|

|Return value|Type|Description|
|---|---|---|
|amount|number|amount|
|colony|Address|Address of the colony|
|nPreviousUpdates|number|number of previous updates|
|nUpdates|number|number of updates|
|skillId|number|skill Id|
|user|Address|user address|

### `getReputationUpdateLogLength.call()`

Gets the length of the reputation update log for either the current active or inactive log


|Return value|Type|Description|
|---|---|---|
|count|number|Length of Reputation update log array|

### `getSkill.call({ id })`

Returns the number of parent and child skills associated with the provided skill

|Param|Type|Description|
|---|---|---|
|id|number|skillId to be checked|

|Return value|Type|Description|
|---|---|---|
|nParents|number|Number of parent skills|
|nChildren|number|Number of child skills|

### `getSkillCount.call()`

Get the total number of skills in the network (both global and local skills)


|Return value|Type|Description|
|---|---|---|
|count|number|The number of skills on the network|

### `getStakedBalance.call({ user })`

Get the amount of staked CLNY tokens for a given user address

|Param|Type|Description|
|---|---|---|
|user|Address|Address of the user|

|Return value|Type|Description|
|---|---|---|
|balance|number|Amount of staked CLNY|

## Senders

### `createColony.send({ name, tokenAddress }, options)`

Creates a new colony on the network. TODO: check whether it returns a colonyId

|Param|Type|Description|
|---|---|---|
|name|string|Unique name for the colony. Will return an error if there already exists a colony with the specified name|
|tokenAddress|Address|Token to import. Note: the ownership of the token contract must be transferred to the newly created colony.|

|Event data|Type|Description|
|---|---|---|
|colonyId|number|Id of the newly created colony|

### `deposit.send({ amount }, options)`

Allow a reputation miner to stake an amount of CLNY tokens, which is required before they can submit a new reputation root hash via `ReputationMiningCycle.submitNewHash`

|Param|Type|Description|
|---|---|---|
|amount|number|Amount of CLNY to stake|


### `startTokenAuction.send({ tokenAddress }, options)`

Create and start a new Dutch Auction for the entire amount of a specified token owned by the Colony Network

|Param|Type|Description|
|---|---|---|
|tokenAddress|Address|Address of the token held by the network to be auctioned|

|Event data|Type|Description|
|---|---|---|
|auction|string|The address of the auction contract|
|token|Address|The address of the token being auctioned|
|quantity|number|The amount of available tokens for auction|

### `upgradeColony.send({ key, newVersion }, options)`

Upgrades a colony to a new Colony contract version.

|Param|Type|Description|
|---|---|---|
|key|string|Unique colony 'key' to be upgraded|
|newVersion|number|The target version for the upgrade|


### `withdraw.send({ amount }, options)`

Allow a user who has staked CLNY to withdraw their stake

|Param|Type|Description|
|---|---|---|
|amount|number|Amount of CLNY to withdraw from stake|
