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

### `generateSecret.call({ salt, value }, options)`

Helper function used to generate the rating secret used in task ratings. Accepts a salt value and a value to hide, and returns the keccak256 hash of both.

|Param|Type|Description|
|---|---|---|
|salt|string|Salt value|
|value|number|Value to hide|

|Return value|Type|Description|
|---|---|---|
|secret|string|keccak256 hash of joint Salt and Value|

### `getDomainCount.call(options)`

Gets the total number of domains in a Colony. This number equals the last `domainId` created.


|Return value|Type|Description|
|---|---|---|
|count|number|Number of all domain in this Colony; == the last added domainId|

### `getGlobalRewardPayoutCount.call(options)`

Gets the total number of reward payout cycles.


|Return value|Type|Description|
|---|---|---|
|count|number|Number of reward payout cycles|

### `getUserRewardPayoutCount.call({ user }, options)`

Gets the number of claimed and waived reward payouts for a given user.

|Param|Type|Description|
|---|---|---|
|user|Address|Address of user|

|Return value|Type|Description|
|---|---|---|
|count|number|Number of claimed and waived reward payouts|

### `getTaskCount.call(options)`

Gets the total number of tasks in a Colony. This number equals the last `taskId` created.


|Return value|Type|Description|
|---|---|---|
|count|number|Total number of tasks in this Colony|

### `getTask.call({ taskId }, options)`

Gets a certain task defined by its integer taskId

|Param|Type|Description|
|---|---|---|
|taskId|number||

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

### `getTaskPayout.call({ taskId, role, token }, options)`

Given a specific task, a defined role for the task, and a token address, will return any payout attached to the task in the token specified.

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|role|number|Role the payout is specified for|
|token|Address|Address of the token's contract|

|Return value|Type|Description|
|---|---|---|
|amount|number|Amount of specified tokens to payout for that task and a role|

### `getTaskRole.call({ taskId, role }, options)`

Every task has three roles associated with it which determine permissions for editing the task, submitting work, and ratings for performance.

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|role|number|Role|

|Return value|Type|Description|
|---|---|---|
|address|Address|Address of the user for the given role|
|rated|boolean|Has the user work been rated|
|rating|number|Rating the user received|

### `getTaskWorkRatings.call({ taskId }, options)`

For a given task, will return the number of submitted ratings and the timestamp of their submission

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|

|Return value|Type|Description|
|---|---|---|
|count|number|Total number of submitted ratings for a task.|
|timestamp|number|Timestamp of the last submitted rating.|

### `getTaskWorkRatingSecret.call({ taskId, role }, options)`

If ratings for a task are still in the commit period, their ratings will still be hidden, but the hashed value can still be returned.

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|role|number|Role that submitted the rating|

|Return value|Type|Description|
|---|---|---|
|secret|string|the hashed rating (equivalent to the output of `keccak256(_salt, _rating)`).|

### `getPotBalance.call({ potId, token }, options)`

Gets a balance for a certain token in a specific pot

|Param|Type|Description|
|---|---|---|
|potId|number|Integer potId|
|token|Address|Address of the token's contract|

|Return value|Type|Description|
|---|---|---|
|balance|number|Balance for token `token` in pot `potId`|

### `getNonRewardPotsTotal.call({ address }, options)`

The `nonRewardPotsTotal` is a value that keeps track of the total assets a colony has to work with, which may be split among several distinct pots associated with various domains and tasks.

|Param|Type|Description|
|---|---|---|
|address|Address|Address of the token's contract (token in question)|

|Return value|Type|Description|
|---|---|---|
|total|number|All tokens that are not within the colony's `rewards` pot.|

### `getRewardPayoutInfo.call({ payoutId }, options)`

Given a specific payout, returns useful information about the payout.

|Param|Type|Description|
|---|---|---|
|payoutId|number|Id of the reward payout|

|Return value|Type|Description|
|---|---|---|
|blockNumber|number|Block number at the time of creation|
|remainingTokenAmount|number|Remaining (unclaimed) amount of tokens|
|reputationRootHash|string|Reputation root hash at the time of creation|
|tokenAddress|Address|Token address|
|totalTokenAmountForRewardPayout|number|Total amount of tokens taken aside for reward payout|
|totalTokens|number|Total colony tokens at the time of creation|

### `getToken.call(options)`

Gets the address of the colony's official token contract


|Return value|Type|Description|
|---|---|---|
|address|Address|The address of the colony's official deployed token contract|

### `getTransactionCount.call(options)`

Returns the total number of transactions the colony has made, == the `transactionId` of the last added transaction to the Colony.


|Return value|Type|Description|
|---|---|---|
|count|number|Number of all transactions in this Colony; == the last added transactionId|

## Senders

### `createTask.send({ specificationHash, domainId }, options)`

Creates a new task by invoking `makeTask` on-chain.

|Param|Type|Description|
|---|---|---|
|specificationHash|string|Hashed output of the task's work specification, stored so that it can later be referenced for task ratings or in the event of a dispute.|
|domainId|number|Domain in which the task has been created.|

|Event data|Type|Description|
|---|---|---|
|taskId|number|Will return an integer taskId, from the `TaskAdded` event.|

### `setTaskDomain.send({ taskId, domainId }, options)`

Every task must belong to a single existing Domain.

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|domainId|number|Integer domainId|


### `setTaskRoleUser.send({ taskId, role, user }, options)`

Set the user for role `_role` in task `_id`. Only allowed before the task is `finalized`, meaning that the value cannot be changed after the task is complete.

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|role|number|MANAGER (`0`), EVALUATOR (`1`), or WORKER (`2`)|
|user|Address|address of the user|


### `setTaskSkill.send({ taskId, skillId }, options)`

Sets the skill tag associated with the task. Currently there is only one skill tag available per task, but additional skills for tasks are planned in future implementations.

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|skillId|number|Integer skillId|


### `submitTaskDeliverable.send({ taskId, deliverableHash }, options)`

Submit the task deliverable, i.e. the output of the work performed for task `_id` Submission is allowed only to the assigned worker before the task due date. Submissions cannot be overwritten

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|deliverableHash|string|Hash of the work performed|


### `submitTaskWorkRating.send({ taskId, role, ratingSecret }, options)`

Submits a hidden work rating for a task. This is generated by generateSecret(_salt, _rating).

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|role|number|The role submitting their rating, either EVALUATOR (`1`) or WORKER (`2`)|
|ratingSecret|string|hidden work rating, generated as the output of `generateSecret(_salt, _rating)`, where `_rating` is a score from 0-50 (in increments of 10).|


### `revealTaskWorkRating.send({ taskId, role, rating, salt }, options)`

Reveals a previously submitted work rating, by proving that the `_rating` and `_salt` values result in the same `ratingSecret` submitted during the rating submission period. This is checked on-chain using the `generateSecret` function.

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|role|number|Role revealing their rating submission, either EVALUATOR (`1`) or WORKER (`2`)|
|rating|number|Rating scored 0-50 in increments of 10 (e.g. 10, 20, 30, 40 or 50).|
|salt|string|`_salt` value to be used in `generateSecret`. A correct value will result in the same `ratingSecret` submitted during the work rating submission period.|


### `assignWorkRating.send({ taskId }, options)`

In the event of a user not committing or revealing within the 10 day rating window, their rating of their counterpart is assumed to be the highest possible and their own rating is decreased by 5 (e.g. 0.5 points). This function may be called by anyone after the taskWorkRatings period has ended.

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|


### `cancelTask.send({ taskId }, options)`

Cancels a task.

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|


### `finalizeTask.send({ taskId }, options)`

Finalizes a task, allowing roles to claim payouts and prohibiting all further changes to the task.

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|


### `claimPayout.send({ taskId, role, token }, options)`

Claims the payout in `_token` denomination for work completed in task `_id` by contributor with role `_role`. Allowed only by the contributors themselves after task is finalized. Here the network receives its fee from each payout. Ether fees go straight to the Common Colony whereas Token fees go to the Network to be auctioned off.

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|role|number|Role of the contributor claiming the payout.|
|token|Address|Address of the token contract|


### `addDomain.send({ parentSkillId }, options)`

Adds a domain to the Colony along with the new domain's respective local skill.

|Param|Type|Description|
|---|---|---|
|parentSkillId|number|Id of the local skill under which the new skill will be added.|

|Event data|Type|Description|
|---|---|---|
|skillId|number|A skillId for this domain|
|parentSkillId|number|The parent skill id|

### `addGlobalSkill.send({ parentSkillId }, options)`

Adds a global skill under a given parent SkillId. Can only be called from the Common Colony

|Param|Type|Description|
|---|---|---|
|parentSkillId|number|Integer id of the parent skill|

|Event data|Type|Description|
|---|---|---|
|skillId|number|Integer id of the newly created skill|
|parentSkillId|number|Integer id of the parent skill|

### `claimColonyFunds.send({ token }, options)`

Move any funds received by the colony in `token` denomination to the top-levl domain pot, siphoning off a small amount to the rewards pot. No fee is taken if called against a colony's own token.

|Param|Type|Description|
|---|---|---|
|token|Address|Address of the token contract. `0x0` value indicates Ether.|


### `finalizeRewardPayout.send({ payoutId }, options)`

Finalises the reward payout and allows creation of next reward payout for token that has been used in `payoutId`. Can only be called when reward payout cycle is finished, i.e. 60 days from its creation.

|Param|Type|Description|
|---|---|---|
|payoutId|number|Id of the reward payout.|


### `moveFundsBetweenPots.send({ fromPot, toPot, amount, address }, options)`

Move a given amount of `token` funds from one pot to another

|Param|Type|Description|
|---|---|---|
|fromPot|number|Origin pot Id|
|toPot|number|Destination pot Id|
|amount|number|Amount of funds to move|
|address|Address|Address of the token contract|


### `mintTokens.send({ amount }, options)`

The owner of a Colony may mint new tokens.

|Param|Type|Description|
|---|---|---|
|amount|number|Amount of new tokens to be minted|


### `mintTokensForColonyNetwork.send({ amount }, options)`

In the case of the Colony Network, only the Common Colony may mint new tokens

|Param|Type|Description|
|---|---|---|
|amount|number|Amount of new tokens to be minted|


### `startNextRewardPayout.send({ token }, options)`

Start the next reward payout for `token`. All funds in the reward pot for `token` will become unavailable. All tokens will be locked, and can be unlocked by calling `waiveRewardPayout` or `claimRewardPayout`.

|Param|Type|Description|
|---|---|---|
|token|Address|Address of token used for reward payout.|


### `waiveRewardPayouts.send({ numPayouts }, options)`

Waive reward payout. This unlocks the sender's tokens and increments the users reward payout counter, allowing them to claim the next reward payout.

|Param|Type|Description|
|---|---|---|
|numPayouts|number|Number of payouts to waive|


## Task MultiSig

### `setTaskBrief.send({ taskId, specificationHash }, options)`

The task brief, or specification, is a description of the tasks work specification. The description is hashed and stored with the task for future reference in ratings or in the event of a dispute.

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|specificationHash|string|digest of the task's hashed specification.|


### `setTaskDueDate.send({ taskId, dueDate }, options)`

The task's due date determines when a worker may submit the task's deliverable(s)

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|dueDate|Date|Due date|


### `setTaskEvaluatorPayout.send({ taskId, token, amount }, options)`

Sets the payout given to the EVALUATOR role when the task is finalized.

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|token|Address|Address of the token's ERC20 contract.|
|amount|number|Amount to be paid.|


### `setTaskManagerPayout.send({ taskId, token, amount }, options)`

Sets the payout given to the MANAGER role when the task is finalized.

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|token|Address|Address of the token's ERC20 contract.|
|amount|number|Amount to be paid.|


### `setTaskWorkerPayout.send({ taskId, token, amount }, options)`

Sets the payout given to the WORKER role when the task is finalized.

|Param|Type|Description|
|---|---|---|
|taskId|number|Integer taskId|
|token|Address|Address of the token's ERC20 contract.|
|amount|number|Amount to be paid.|
