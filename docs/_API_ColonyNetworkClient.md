---
title: ColonyNetworkClient
section: API
order: 2
---

The ColonyNetworkClient is a standard interface for interactions with functions and events described in `IColonyNetwork.sol`.  

These interactions are generally concerned with the colony network as a whole, rather than at the colony level. This includes operations like getting a count of all colonies on the network, querying for information about a parent skillId, or deposits/withdrawals of staked CLNY for use in the reputation system.

You can learn more about the solidity implementation from the [colonyNetwork docs](link to colonyNetwork docs).

For interactions within a particular colony, see [the ColonyClient docs](./_API_ColonyClient.md).

==TOC==

## Callers

### `getColonyById.call({ id }, options)`



|Param|Type|Description|
|---|---|---|
|id|number||

|Return value|Type|Description|
|---|---|---|
|address|string||

### `getColonyByKey.call({ key }, options)`



|Param|Type|Description|
|---|---|---|
|key|string||

|Return value|Type|Description|
|---|---|---|
|address|string||

### `getColonyCount.call(options)`




|Return value|Type|Description|
|---|---|---|
|count|number||

### `getColonyVersionResolver.call({ version }, options)`



|Param|Type|Description|
|---|---|---|
|version|number||

|Return value|Type|Description|
|---|---|---|
|address|string||

### `getCurrentColonyVersion.call(options)`




|Return value|Type|Description|
|---|---|---|
|version|number||

### `getParentSkillId.call({ skillId, parentSkillIndex }, options)`



|Param|Type|Description|
|---|---|---|
|skillId|number||
|parentSkillIndex|number||

|Return value|Type|Description|
|---|---|---|
|parentSkillId|number||

### `getReputationUpdateLogEntry.call({ id }, options)`



|Param|Type|Description|
|---|---|---|
|id|number||

|Return value|Type|Description|
|---|---|---|
|amount|number||
|colony|string||
|nPreviousUpdates|number||
|nUpdates|number||
|skillId|number||
|user|string||

### `getReputationUpdateLogLength.call(options)`




|Return value|Type|Description|
|---|---|---|
|count|number||

### `getSkill.call({ id }, options)`



|Param|Type|Description|
|---|---|---|
|id|number||

|Return value|Type|Description|
|---|---|---|
|nParents|number||
|nChildren|number||

### `getSkillCount.call(options)`




|Return value|Type|Description|
|---|---|---|
|count|number||

## Senders

### `createColony.send({ name, tokenName, tokenSymbol, tokenDecimals }, options)`



|Param|Type|Description|
|---|---|---|
|name|string||
|tokenName|string||
|tokenSymbol|string||
|tokenDecimals|number||

|Event data|Type|Description|
|---|---|---|
|colonyId|number||

### `deposit.send({ amount }, options)`



|Param|Type|Description|
|---|---|---|
|amount|number||


### `upgradeColony.send({ key, newVersion }, options)`



|Param|Type|Description|
|---|---|---|
|key|string||
|newVersion|number||


### `withdraw.send({ amount }, options)`



|Param|Type|Description|
|---|---|---|
|amount|number||
