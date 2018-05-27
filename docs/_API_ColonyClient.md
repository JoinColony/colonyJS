---
title: ColonyClient
section: API
order: 3
---

The `ColonyClient` class is a standard interface for interactions with the on-chain functions and events described in `IColony.sol`

These interactions are generally concerned with functions and events internal to a colony, such as creating a task, assigning a work rating, or moving funds between pots.

For functions and events that concern the colonyNetwork as a whole, refer to the [ColonyNetworkClient API](/colonyjs/api-colonynetworkclient/)

==TOC==

## Creating a new instance

You _could_ create a ColonyClient by using an adapter and a query: `new ColonyClient({ adapter, query })` and then `.init()` it but it is advised to ask the network client for a new instance:

```javascript
const colonyClient = await networkClient.getColonyClient({ key: 'My Colony' }); // This is already initialised
```

## Callers

**All callers return promises which resolve to an object containing the given return values.** For a reference please check [here](/colonyjs/docs-contract-client/#callers).

### `generateSecret.call({ salt, value })`

Helper function used to generate the rating secret used in task ratings. Accepts a salt value and a value to hide, and returns the keccak256 hash of both.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|salt|string|Salt value|
|value|number|Value to hide|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|secret|string|keccak256 hash of joint Salt and Value|

### `getDomainCount.call()`

Gets the total number of domains in a Colony. This number equals the last `domainId` created.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|Number of all domain in this Colony; == the last added domainId|

### `getGlobalRewardPayoutCount.call()`

Gets the total number of reward payout cycles.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|Number of reward payout cycles|

### `getUserRewardPayoutCount.call({ user })`

Gets the number of claimed and waived reward payouts for a given user.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|Address of user|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|Number of claimed and waived reward payouts|

### `getTaskCount.call()`

Gets the total number of tasks in a Colony. This number equals the last `taskId` created.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|Total number of tasks in this Colony|

### `getTask.call({ taskId })`

Gets a certain task defined by its integer taskId

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number||

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|cancelled|boolean|Boolean flag denoting whether the task is cancelled|
|deliverableDate|Date|Date when the deliverable is due|
|deliverableHash|string|Unique hash of the deliverable content|
|domainId|number|Integer Domain ID the task belongs to|
|dueDate|Date|When the task is due|
|finalized|boolean|Boolean flag denoting whether the task is finalized|
|id|number|Integer task ID|
|payoutsWeCannotMake|number|Number of payouts that cannot be completed with the current task funding|
|potId|number|Integer ID of funding pot for the task|
|skillId|number|Integer Skill ID the task is assigned to|
|specificationHash|string|Unique hash of the specification content|

### `getTaskPayout.call({ taskId, role, token })`

Given a specific task, a defined role for the task, and a token address, will return any payout attached to the task in the token specified.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|role|number|Role the payout is specified for|
|token|Address|Address of the token's contract|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|amount|number|Amount of specified tokens to payout for that task and a role|

### `getTaskRole.call({ taskId, role })`

Every task has three roles associated with it which determine permissions for editing the task, submitting work, and ratings for performance.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|role|number|Role|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|address|Address|Address of the user for the given role|
|rated|boolean|Has the user work been rated|
|rating|number|Rating the user received|

### `getTaskWorkRatings.call({ taskId })`

For a given task, will return the number of submitted ratings and the timestamp of their submission

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|Total number of submitted ratings for a task.|
|timestamp|number|Timestamp of the last submitted rating.|

### `getTaskWorkRatingSecret.call({ taskId, role })`

If ratings for a task are still in the commit period, their ratings will still be hidden, but the hashed value can still be returned.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|role|number|Role that submitted the rating|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|secret|string|the hashed rating (equivalent to the output of `keccak256(_salt, _rating)`).|

### `getPotBalance.call({ potId, token })`

Gets a balance for a certain token in a specific pot

**Arguments**

|Argument|Type|Description|
|---|---|---|
|potId|number|Integer potId|
|token|Address|Address of the token's contract|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|balance|number|Balance for token `token` in pot `potId`|

### `getNonRewardPotsTotal.call({ address })`

The `nonRewardPotsTotal` is a value that keeps track of the total assets a colony has to work with, which may be split among several distinct pots associated with various domains and tasks.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|address|Address|Address of the token's contract (token in question)|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|total|number|All tokens that are not within the colony's `rewards` pot.|

### `getRewardPayoutInfo.call({ payoutId })`

Given a specific payout, returns useful information about the payout.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|payoutId|number|Id of the reward payout|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|blockNumber|number|Block number at the time of creation|
|remainingTokenAmount|number|Remaining (unclaimed) amount of tokens|
|reputationRootHash|string|Reputation root hash at the time of creation|
|tokenAddress|Address|Token address|
|totalTokenAmountForRewardPayout|number|Total amount of tokens taken aside for reward payout|
|totalTokens|number|Total colony tokens at the time of creation|

### `getToken.call()`

Gets the address of the colony's official token contract


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|address|Address|The address of the colony's official deployed token contract|

### `getTransactionCount.call()`

Returns the total number of transactions the colony has made, == the `transactionId` of the last added transaction to the Colony.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|Number of all transactions in this Colony; == the last added transactionId|

## Senders

**All senders return an instance of a `ContractResponse`.** Every `send()` method takes an `options` object as the second argument. For a reference please check [here](/colonyjs/docs-contract-client/#senders).
### `createTask.send({ specificationHash, domainId }, options)`

Creates a new task by invoking `makeTask` on-chain.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|specificationHash|string|Hashed output of the task's work specification, stored so that it can later be referenced for task ratings or in the event of a dispute.|
|domainId|number|Domain in which the task has been created.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|taskId|number|Will return an integer taskId, from the `TaskAdded` event.|

### `setTaskDomain.send({ taskId, domainId }, options)`

Every task must belong to a single existing Domain.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|domainId|number|Integer domainId|

**Returns**

An instance of a `ContractResponse`



### `setTaskRoleUser.send({ taskId, role, user }, options)`

Set the user for role `_role` in task `_id`. Only allowed before the task is `finalized`, meaning that the value cannot be changed after the task is complete.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|role|number|MANAGER (`0`), EVALUATOR (`1`), or WORKER (`2`)|
|user|Address|address of the user|

**Returns**

An instance of a `ContractResponse`



### `setTaskSkill.send({ taskId, skillId }, options)`

Sets the skill tag associated with the task. Currently there is only one skill tag available per task, but additional skills for tasks are planned in future implementations.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|skillId|number|Integer skillId|

**Returns**

An instance of a `ContractResponse`



### `submitTaskDeliverable.send({ taskId, deliverableHash }, options)`

Submit the task deliverable, i.e. the output of the work performed for task `_id` Submission is allowed only to the assigned worker before the task due date. Submissions cannot be overwritten

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|deliverableHash|string|Hash of the work performed|

**Returns**

An instance of a `ContractResponse`



### `submitTaskWorkRating.send({ taskId, role, ratingSecret }, options)`

Submits a hidden work rating for a task. This is generated by generateSecret(_salt, _rating).

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|role|number|The role submitting their rating, either EVALUATOR (`1`) or WORKER (`2`)|
|ratingSecret|string|hidden work rating, generated as the output of `generateSecret(_salt, _rating)`, where `_rating` is a score from 0-50 (in increments of 10).|

**Returns**

An instance of a `ContractResponse`



### `revealTaskWorkRating.send({ taskId, role, rating, salt }, options)`

Reveals a previously submitted work rating, by proving that the `_rating` and `_salt` values result in the same `ratingSecret` submitted during the rating submission period. This is checked on-chain using the `generateSecret` function.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|role|number|Role revealing their rating submission, either EVALUATOR (`1`) or WORKER (`2`)|
|rating|number|Rating scored 0-50 in increments of 10 (e.g. 10, 20, 30, 40 or 50).|
|salt|string|`_salt` value to be used in `generateSecret`. A correct value will result in the same `ratingSecret` submitted during the work rating submission period.|

**Returns**

An instance of a `ContractResponse`



### `assignWorkRating.send({ taskId }, options)`

In the event of a user not committing or revealing within the 10 day rating window, their rating of their counterpart is assumed to be the highest possible and their own rating is decreased by 5 (e.g. 0.5 points). This function may be called by anyone after the taskWorkRatings period has ended.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|

**Returns**

An instance of a `ContractResponse`



### `cancelTask.send({ taskId }, options)`

Cancels a task.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|

**Returns**

An instance of a `ContractResponse`



### `finalizeTask.send({ taskId }, options)`

Finalizes a task, allowing roles to claim payouts and prohibiting all further changes to the task.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|

**Returns**

An instance of a `ContractResponse`



### `claimPayout.send({ taskId, role, token }, options)`

Claims the payout in `_token` denomination for work completed in task `_id` by contributor with role `_role`. Allowed only by the contributors themselves after task is finalized. Here the network receives its fee from each payout. Ether fees go straight to the Common Colony whereas Token fees go to the Network to be auctioned off.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|role|number|Role of the contributor claiming the payout.|
|token|Address|Address of the token contract|

**Returns**

An instance of a `ContractResponse`



### `addDomain.send({ parentSkillId }, options)`

Adds a domain to the Colony along with the new domain's respective local skill.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|parentSkillId|number|Id of the local skill under which the new skill will be added.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|skillId|number|A skillId for this domain|
|parentSkillId|number|The parent skill id|

### `addGlobalSkill.send({ parentSkillId }, options)`

Adds a global skill under a given parent SkillId. Can only be called from the Common Colony

**Arguments**

|Argument|Type|Description|
|---|---|---|
|parentSkillId|number|Integer id of the parent skill|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|skillId|number|Integer id of the newly created skill|
|parentSkillId|number|Integer id of the parent skill|

### `claimColonyFunds.send({ token }, options)`

Move any funds received by the colony in `token` denomination to the top-levl domain pot, siphoning off a small amount to the rewards pot. No fee is taken if called against a colony's own token.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|Address|Address of the token contract. `0x0` value indicates Ether.|

**Returns**

An instance of a `ContractResponse`



### `finalizeRewardPayout.send({ payoutId }, options)`

Finalises the reward payout and allows creation of next reward payout for token that has been used in `payoutId`. Can only be called when reward payout cycle is finished, i.e. 60 days from its creation.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|payoutId|number|Id of the reward payout.|

**Returns**

An instance of a `ContractResponse`



### `moveFundsBetweenPots.send({ fromPot, toPot, amount, address }, options)`

Move a given amount of `token` funds from one pot to another

**Arguments**

|Argument|Type|Description|
|---|---|---|
|fromPot|number|Origin pot Id|
|toPot|number|Destination pot Id|
|amount|number|Amount of funds to move|
|address|Address|Address of the token contract|

**Returns**

An instance of a `ContractResponse`



### `mintTokens.send({ amount }, options)`

The owner of a Colony may mint new tokens.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|amount|number|Amount of new tokens to be minted|

**Returns**

An instance of a `ContractResponse`



### `mintTokensForColonyNetwork.send({ amount }, options)`

In the case of the Colony Network, only the Common Colony may mint new tokens

**Arguments**

|Argument|Type|Description|
|---|---|---|
|amount|number|Amount of new tokens to be minted|

**Returns**

An instance of a `ContractResponse`



### `startNextRewardPayout.send({ token }, options)`

Start the next reward payout for `token`. All funds in the reward pot for `token` will become unavailable. All tokens will be locked, and can be unlocked by calling `waiveRewardPayout` or `claimRewardPayout`.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|Address|Address of token used for reward payout.|

**Returns**

An instance of a `ContractResponse`



### `waiveRewardPayouts.send({ numPayouts }, options)`

Waive reward payout. This unlocks the sender's tokens and increments the users reward payout counter, allowing them to claim the next reward payout.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|numPayouts|number|Number of payouts to waive|

**Returns**

An instance of a `ContractResponse`



## Task MultiSig

**All MultiSig functions return an instance of a `MultiSigOperation`.** For a reference please check [here](/colonyjs/docs-multisignature-transactions/).
### `setTaskBrief.startOperation({ taskId, specificationHash })`

The task brief, or specification, is a description of the tasks work specification. The description is hashed and stored with the task for future reference in ratings or in the event of a dispute.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|specificationHash|string|digest of the task's hashed specification.|

**Returns**

An instance of a `MultiSigOperation`



### `setTaskDueDate.startOperation({ taskId, dueDate })`

The task's due date determines when a worker may submit the task's deliverable(s)

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|dueDate|Date|Due date|

**Returns**

An instance of a `MultiSigOperation`



### `setTaskEvaluatorPayout.startOperation({ taskId, token, amount })`

Sets the payout given to the EVALUATOR role when the task is finalized.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|token|Address|Address of the token's ERC20 contract.|
|amount|number|Amount to be paid.|

**Returns**

An instance of a `MultiSigOperation`



### `setTaskManagerPayout.startOperation({ taskId, token, amount })`

Sets the payout given to the MANAGER role when the task is finalized.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|token|Address|Address of the token's ERC20 contract.|
|amount|number|Amount to be paid.|

**Returns**

An instance of a `MultiSigOperation`



### `setTaskWorkerPayout.startOperation({ taskId, token, amount })`

Sets the payout given to the WORKER role when the task is finalized.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|token|Address|Address of the token's ERC20 contract.|
|amount|number|Amount to be paid.|

**Returns**

An instance of a `MultiSigOperation`
