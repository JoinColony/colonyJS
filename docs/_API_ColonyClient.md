---
title: ColonyClient
section: API
order: 3
---

The ColonyClient class is a standard interface for interactions with the on-chain functions and events described in `IColony.sol`

These interactions are generally concerned with functions and events internal to a colony, such as creating a task, assigning a work rating, or moving funds between pots.

For functions and events that concern the colonyNetwork as a whole, refer to the [ColonyNetworkClient API](./_API_ColonyNetworkClient.md)

==TOC==

## Class methods

### `ColonyClient.create(adapter, contractName, loaderOptions, networkClient)`

returns `Promise<ColonyClient>`

## Instance methods

Every instance method takes an `options` object as the second argument which looks like this:

```javascript
options = {
  timeoutMs: int // sets the timeout for the rpc call. defaults to 60000ms
}
```

## Callers

### `getTaskCount.call(options)`

Gets the total number of tasks in a Colony. This number equals the last `taskId` created.


|Return value|Type|Description|
|---|---|---|
|count|number|Total number of tasks in this Colony|

### `getTaskPayout.call({ taskId, role, token }, options)`

Get's the amount of payout for for a specific (task)[glossary#task], a defined role (see (roles)[glossary#roles]) and a specific
    token defined by it's address (see (tokens)[glossary#tokens])

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|role|number|Role the payout is specified for|
|token|address|Adress of the token's ERC20 contract|

|Return value|Type|Description|
|---|---|---|
|amount|number|Amount of specified tokens to payout for that task and a role|

### `getTaskRole.call({ taskId, role }, options)`

(TODO: find out what this is all about)
    Get information about a certain role of a task

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|role|number|Role (see [roles](glossary.html#roles))|

|Return value|Type|Description|
|---|---|---|
|address|address|Address of the user for the given role|
|rated|boolean|Has the user work been rated|
|rating|number|Rating the user received|

### `getTaskWorkRatings.call({ taskId }, options)`

TODO: I'm not entirely sure what this does (see)

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|

|Return value|Type|Description|
|---|---|---|
|count|number|Total number of secrets|
|timestamp|number|Timestamp of the last submitted rating secret|

### `getTaskWorkRatingSecret.call({ taskId, role }, options)`



|Param|Type|Description|
|---|---|---|
|taskId|number||
|role|number||

|Return value|Type|Description|
|---|---|---|
|secret|string||

### `getPotBalance.call({ potId, token }, options)`

Gets a balance for a certain token in a specific pot

|Param|Type|Description|
|---|---|---|
|potId|number|Integer potId|
|token|address|Adress of the token's ERC20 contract|

|Return value|Type|Description|
|---|---|---|
|balance|number|Balance for token `token` in pot `potId`|

### `getNonRewardPotsTotal.call({ address }, options)`

(TODO: this has to be explained better, what are the implications and why is this even important?)
    This keeps track of how much of the colony's funds that it owns have been moved into pots other than pot 0,
    which (by definition) have also had the reward amount siphoned off and put in to pot 0
    (see also [pots](glossary.html#pots))

|Param|Type|Description|
|---|---|---|
|address|address|Adress of the token's ERC20 contract (token in question)|

|Return value|Type|Description|
|---|---|---|
|total|number|All tokens that are not reserved for network fees (TODO: this is most likely wrong)|

### `getToken.call(options)`

Gets the address of the Colony's official ERC20 token contract


|Return value|Type|Description|
|---|---|---|
|address|string|The address of the Colony's official deployed ERC20 token contract|

### `getTransactionCount.call(options)`

Returns the number of all transactions in this Colony


|Return value|Type|Description|
|---|---|---|
|count|number|Number of all transactions in this Colony|

## Senders

### `createTask.send({ specificationHash, domainId }, options)`



|Param|Type|Description|
|---|---|---|
|specificationHash|string||
|domainId|number||

|Event data|Type|Description|
|---|---|---|
|taskId|number||

### `setTaskBrief.send({ taskId, specificationHash }, options)`



|Param|Type|Description|
|---|---|---|
|taskId|number||
|specificationHash|string||


### `setTaskDomain.send({ taskId, domainId }, options)`



|Param|Type|Description|
|---|---|---|
|taskId|number||
|domainId|number||


### `setTaskDueDate.send({ taskId, dueDate }, options)`



|Param|Type|Description|
|---|---|---|
|taskId|number||
|dueDate|number||


### `setTaskRoleUser.send({ taskId, role, user }, options)`



|Param|Type|Description|
|---|---|---|
|taskId|number||
|role|number||
|user|string||


### `setTaskSkill.send({ taskId, skillId }, options)`



|Param|Type|Description|
|---|---|---|
|taskId|number||
|skillId|number||


### `setTaskEvaluatorPayout.send({ taskId, token, amount }, options)`



|Param|Type|Description|
|---|---|---|
|taskId|number||
|token|string||
|amount|number||


### `setTaskManagerPayout.send({ taskId, token, amount }, options)`



|Param|Type|Description|
|---|---|---|
|taskId|number||
|token|string||
|amount|number||


### `setTaskWorkerPayout.send({ taskId, token, amount }, options)`



|Param|Type|Description|
|---|---|---|
|taskId|number||
|token|string||
|amount|number||


### `submitTaskDeliverable.send({ taskId, deliverableHash }, options)`



|Param|Type|Description|
|---|---|---|
|taskId|number||
|deliverableHash|string||


### `submitTaskWorkRating.send({ taskId, role, ratingSecret }, options)`



|Param|Type|Description|
|---|---|---|
|taskId|number||
|role|number||
|ratingSecret|string||


### `revealTaskWorkRating.send({ taskId, role, rating, salt }, options)`



|Param|Type|Description|
|---|---|---|
|taskId|number||
|role|number||
|rating|number||
|salt|string||


### `approveTaskChange.send({ transactionId, role }, options)`

Approves a task change. TODO: Please elaborate.

|Param|Type|Description|
|---|---|---|
|transactionId|number|TODO: transactionId of what?|
|role|number|TODO: Why is this necessary? Can we find out?|


### `assignWorkRating.send({ taskId, rating }, options)`



|Param|Type|Description|
|---|---|---|
|taskId|number||
|rating|number||


### `cancelTask.send({ taskId }, options)`



|Param|Type|Description|
|---|---|---|
|taskId|number||


### `finalizeTask.send({ taskId }, options)`



|Param|Type|Description|
|---|---|---|
|taskId|number||


### `claimPayout.send({ taskId, role, token }, options)`



|Param|Type|Description|
|---|---|---|
|taskId|number||
|role|number||
|token|string||


### `addDomain.send({ parentSkillId }, options)`

TODO: Adds a domain to this Colony. Please verify all input and output values. We should probably explain why this requires skill ids

|Param|Type|Description|
|---|---|---|
|parentSkillId|number|TODO: Why do I have to define a skill for a domain? No idea|

|Event data|Type|Description|
|---|---|---|
|skillId|number|A skillId for this domain|
|parentSkillId|number|The parent skill id|

### `addGlobalSkill.send({ parentSkillId }, options)`

TODO: Adds a global skill. Whatever that means.

|Param|Type|Description|
|---|---|---|
|parentSkillId|number|Integer id of the parent skill|

|Event data|Type|Description|
|---|---|---|
|skillId|number|Integer id of the newly created skill|
|parentSkillId|number|Integer id of the parent skill|

### `claimColonyFunds.send({ token }, options)`



|Param|Type|Description|
|---|---|---|
|token|string||


### `moveFundsBetweenPots.send({ fromPot, toPot, amount, address }, options)`



|Param|Type|Description|
|---|---|---|
|fromPot|number||
|toPot|number||
|amount|number||
|address|string||


### `mintTokens.send({ amount }, options)`



|Param|Type|Description|
|---|---|---|
|amount|number||


### `mintTokensForColonyNetwork.send({ amount }, options)`



|Param|Type|Description|
|---|---|---|
|amount|number||
