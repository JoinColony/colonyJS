---
title: ColonyClient
section: API
order: 4
---

The `ColonyClient` class is a standard interface for interactions with the on-chain functions and events described in `IColony.sol`

These interactions are generally concerned with functions and events internal to a colony, such as creating a task, assigning a work rating, or moving funds between pots.

For functions and events that concern the colonyNetwork as a whole, refer to the [ColonyNetworkClient API](/colonyjs/api-colonynetworkclient/).

==TOC==

## Create an instance

The easiest way to initialize the `ColonyClient` is to ask the `ColonyNetworkClient` for a new instance:

```js

const colonyClient = await networkClient.getColonyClient(colonyId);

```

You _could_ also create an instance of `ColonyClient` by providing an [adapter](/colonyjs/docs-adapters) and a query:

```js

const colonyClient = new ColonyClient({ adapter, query });

await colonyClient.init();

```

  
## Callers

**All callers return promises which resolve to an object containing the given return values.** For a reference please check [here](/colonyjs/docs-contractclient/#callers).

### `getRecoveryRolesCount.call()`

Returns the number of recovery roles.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|Number of users with the recovery role (excluding founder)|

### `isInRecoveryMode.call()`

Is the colony in recovery mode?


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|inRecoveryMode|boolean|Return true if recovery mode is active, false otherwise|

### `getAuthority.call()`

Gets the colony's Authority contract address


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|address|Address|The colony's Authority contract address|

### `hasUserRole.call({ user, role })`

For the given user's address and role, return true if the user has that role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|The user in question.|
|role|Authority Role|That user's role (`FOUNDER` or `ADMIN`).|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|hasRole|boolean|Whether the user has the given role|

### `getVersion.call()`

Gets the Colony contract version. This starts from 1 and is incremented with every deployed contract change.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|version|number|The version number.|

### `generateSecret.call({ salt, value })`

Helper function used to generate the rating secret used in task ratings. Accepts a salt value and a value to hide, and returns the keccak256 hash of both.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|salt|string|Salt value.|
|value|number|Value to hide (typically a rating of 1-3).|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|secret|Hex string|keccak256 hash of joint Salt and Value.|

### `getDomain.call({ domainId })`

Gets the selected domain's local skill ID and funding pot ID.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|domainId|number|ID of the domain.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|localSkillId|number|The domain's local skill ID.|
|potId|number|The domain's funding pot ID.|

### `getDomainCount.call()`

Gets the total number of domains in a Colony. This number equals the last `domainId` created.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|Number of all domain in this Colony; == the last added domainId.|

### `getGlobalRewardPayoutCount.call()`

Gets the total number of reward payout cycles.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|Number of reward payout cycles.|

### `getUserRewardPayoutCount.call({ user })`

Gets the number of claimed and waived reward payouts for a given user.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|Address of user.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|Number of claimed and waived reward payouts.|

### `getTaskCount.call()`

Gets the total number of tasks in a Colony. This number equals the last `taskId` created.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|Total number of tasks in this Colony.|

### `getTask.call({ taskId })`

Gets a certain task defined by its integer taskId.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number||

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|completionDate|Date (optional)|Date when the task was completed.|
|deliverableHash|IPFS hash (optional)|Unique hash of the deliverable content.|
|domainId|number|Integer Domain ID the task belongs to.|
|dueDate|Date (optional)|When the task is due.|
|id|number|Integer task ID.|
|payoutsWeCannotMake|number (optional)|Number of payouts that cannot be completed with the current task funding.|
|potId|number (optional)|Integer ID of funding pot for the task.|
|skillId|number|Integer Skill ID the task is assigned to.|
|specificationHash|IPFS hash|Unique hash of the specification content.|
|status|undefined|The task status (ACTIVE, CANCELLED or FINALIZED).|

### `getTaskPayout.call({ taskId, role, token })`

Given a specific task, a defined role for the task, and a token address, will return any payout attached to the task in the token specified.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|role|Role|Role the payout is specified for: MANAGER, EVALUATOR, or WORKER.|
|token|Token address|Address of the token's contract. `0x0` value indicates Ether.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|amount|BigNumber|Amount of specified tokens to payout for that task and a role.|

### `getTotalTaskPayout.call({ taskId, token })`

Given a specific task, and a token address, will return any payout attached to the task in the token specified (for all roles).

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|token|Token address|Address of the token's contract. `0x0` value indicates Ether.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|amount|BigNumber|Amount of specified tokens to payout for that task.|

### `getTaskRole.call({ taskId, role })`

Every task has three roles associated with it which determine permissions for editing the task, submitting work, and ratings for performance.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|role|Role|MANAGER, EVALUATOR, or WORKER.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|address|Address|Address of the user for the given role.|
|rateFail|boolean|Whether the user failed to rate their counterpart.|
|rating|number|Rating the user received (1-3).|

### `getTaskWorkRatings.call({ taskId })`

For a given task, will return the number of submitted ratings and the date of their submission.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|Total number of submitted ratings for a task.|
|date|Date|Date of the last submitted rating.|

### `getTaskWorkRatingSecret.call({ taskId, role })`

If ratings for a task are still in the commit period, their ratings will still be hidden, but the hashed value can still be returned.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|role|Role|Role that submitted the rating: MANAGER, EVALUATOR, or WORKER.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|secret|Hex string|the hashed rating (equivalent to the output of `keccak256(_salt, _rating)`).|

### `getPotBalance.call({ potId, token })`

Gets a balance for a certain token in a specific pot.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|potId|number|Integer potId.|
|token|Token address|Address to get funds from, such as the token contract address, or empty address (`0x0` for Ether)|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|balance|BigNumber|Balance for token `token` in pot `potId`.|

### `getNonRewardPotsTotal.call({ token })`

The `nonRewardPotsTotal` is a value that keeps track of the total assets a colony has to work with, which may be split among several distinct pots associated with various domains and tasks.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|Token address|Address of the token's contract. `0x0` value indicates Ether.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|total|BigNumber|All tokens that are not within the colony's `rewards` pot.|

### `getRewardPayoutInfo.call({ payoutId })`

Given a specific payout, returns useful information about the payout.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|payoutId|number|Id of the reward payout.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|blockNumber|number|Block number at the time of creation.|
|remainingTokenAmount|BigNumber|Remaining (unclaimed) amount of tokens.|
|reputationRootHash|string|Reputation root hash at the time of creation.|
|token|Token address|Token address (`0x0` value indicates Ether).|
|totalTokenAmountForRewardPayout|BigNumber|Total amount of tokens taken aside for reward payout.|
|totalTokens|BigNumber|Total colony tokens at the time of creation.|

### `getRewardInverse.call()`

Return 1 / the reward to pay out from revenue. e.g. if the fee is 1% (or 0.01), return 100


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|rewardInverse|BigNumber|The inverse of the reward|

### `getToken.call()`

Gets the address of the colony's official token contract.


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
|count|number|Number of all transactions in this Colony; == the last added transactionId.|

  
## Senders

**All senders return an instance of a `ContractResponse`.** Every `send()` method takes an `options` object as the second argument. For a reference please check [here](/colonyjs/docs-contractclient/#senders).
### `approveExitRecovery.send(options)`

Indicate approval to exit recovery mode. Can only be called by user with recovery role.


**Returns**

An instance of a `ContractResponse`



### `enterRecoveryMode.send(options)`

Put the colony into recovery mode. Can only be called by user with a recovery role.


**Returns**

An instance of a `ContractResponse`



### `exitRecoveryMode.send({ newVersion }, options)`

Exit recovery mode. Can be called by anyone if enough whitelist approvals are given.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|newVersion|number|Resolver version to upgrade to (>= current version)|

**Returns**

An instance of a `ContractResponse`



### `setRecoveryRole.send({ user }, options)`

Set new colony recovery role. Can only be called by the founder role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|The user we want to give a recovery role to.|

**Returns**

An instance of a `ContractResponse`



### `setRewardInverse.send({ rewardInverse }, options)`

Set the reward inverse to pay out from revenue. e.g. if the fee is 1% (or 0.01), set 100

**Arguments**

|Argument|Type|Description|
|---|---|---|
|rewardInverse|BigNumber|The inverse of the reward|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|rewardInverse|BigNumber|The reward inverse value that was set.|
|ColonyRewardInverseSet|object|Contains the data defined in [ColonyRewardInverseSet](#eventscolonyrewardinversesetaddlistener-rewardinverse-------)|

### `removeRecoveryRole.send({ user }, options)`

Remove colony recovery role. Can only be called by the founder role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|The user we want to remove the recovery role from.|

**Returns**

An instance of a `ContractResponse`



### `setStorageSlotRecovery.send({ slot, value }, options)`

Update the value of an arbitrary storage variable. This can only be called by a user with the recovery role. Certain critical variables are protected from editing in this function.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|slot|number|Address of storage slot to be updated.|
|value|Hex string|Word of data to be set.|

**Returns**

An instance of a `ContractResponse`



### `createTask.send({ specificationHash, domainId, skillId, dueDate }, options)`

Creates a new task by invoking `makeTask` on-chain.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|specificationHash|IPFS hash|Hashed output of the task's work specification, stored so that it can later be referenced for task ratings or in the event of a dispute.|
|domainId|number|Domain in which the task has been created (default value: `1`).|
|skillId|number|The skill associated with the task (optional)|
|dueDate|Date|The due date of the task (optional)|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was added.|
|potId|number|The numeric ID of the pot that was added.|
|domainId|number|The numeric ID of the domain that was added.|
|TaskAdded|object|Contains the data defined in [TaskAdded](#eventstaskaddedaddlistener-taskid-------)|
|PotAdded|object|Contains the data defined in [PotAdded](#eventspotaddedaddlistener-potid-------)|
|DomainAdded|object|Contains the data defined in [DomainAdded](#eventsdomainaddedaddlistener-domainid-------)|

### `completeTask.send({ taskId }, options)`

Mark a task as complete after the due date has passed. This allows the task to be rated and finalized (and funds recovered) even in the presence of a worker who has disappeared. Note that if the due date was not set, then this function will throw.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The task ID.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was completed.|
|TaskCompleted|object|Contains the data defined in [TaskCompleted](#eventstaskcompletedaddlistener-taskid-------)|

### `bootstrapColony.send({ users, amounts }, options)`

Bootstrap the colony by setting the given amounts of reputation and tokens to the given users. This function can only be called by the `FOUNDER` authority role when `taskCount` for the colony is `0`.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|users|undefined|An array of users that will receive an initial amount of tokens and reputation.|
|amounts|undefined|An array of values that represent the amount of tokens and reputation each user will reveive.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|users|undefined|The array of users that received an initial amount of tokens and reputation.|
|amounts|undefined|The array of corresponding token and reputation amounts each user recieved.|
|ColonyBootstrapped|object|Contains the data defined in [ColonyBootstrapped](#eventscolonybootstrappedaddlistener-users-amounts-------)|

### `registerColonyLabel.send({ colonyName, orbitDBPath }, options)`

Register the colony's ENS label.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|colonyName|string|The label to register|
|orbitDBPath|string|The path of the orbitDB database associated with the colony name|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|colony|Address|The address of the colony that was modified.|
|label|string|The label that was registered for the colony.|
|ColonyLabelRegistered|object|Contains the data defined in [ColonyLabelRegistered](#eventscolonylabelregisteredaddlistener-colony-label-------)|

### `setFounderRole.send({ user }, options)`

Set a new colony founder role. There can only be one address assigned to the founder role at a time. Whoever calls this function will lose their founder role. Can be called by founder role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|User we want to give a founder role to|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|oldFounder|Address|The address of the user that assigned the `FOUNDER` authority role (the old founder).|
|newFounder|Address|The address of the user that was assigned the `FOUNDER` authority role (the new founder).|
|ColonyFounderRoleSet|object|Contains the data defined in [ColonyFounderRoleSet](#eventscolonyfounderrolesetaddlistener-oldfounder-newfounder-------)|

### `setAdminRole.send({ user }, options)`

Set a new colony admin role. Can be called by a founder or admin role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|User we want to give an admin role to|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|user|Address|The address of the user that was assigned the `ADMIN` authority role.|
|ColonyAdminRoleSet|object|Contains the data defined in [ColonyAdminRoleSet](#eventscolonyadminrolesetaddlistener-user-------)|

### `setRecoveryRole.send({ user }, options)`

Set a new colony recovery role. Can be called by the founder role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|User we want to give a recovery role to|

**Returns**

An instance of a `ContractResponse`



### `removeAdminRole.send({ user }, options)`

Remove a colony admin role. Can only be called by the founder role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|User we want to remove an admin role from|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|user|Address|The address of the user that was unassigned the `ADMIN` authority role.|
|ColonyAdminRoleRemoved|object|Contains the data defined in [ColonyAdminRoleRemoved](#eventscolonyadminroleremovedaddlistener-user-------)|

### `setAllTaskPayouts.send({ taskId, token, managerAmount, evaluatorAmount, workerAmount }, options)`

Set the payouts for the task manager, evaluator and worker in one transaction, for a specific token address. This can only be called by the task manager, and only if the evaluator and worker roles are either unassigned or the same as the manager.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The task ID.|
|token|Address|Address of the token, `0x0` value indicates Ether.|
|managerAmount|BigNumber|Payout amount for the manager.|
|evaluatorAmount|BigNumber|Payout amount for the evaluator.|
|workerAmount|BigNumber|Payout amount for the worker.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|Token address|The address of the token contract (an empty address if Ether).|
|amount|BigNumber|The task payout amount that was set.|
|TaskPayoutSet|object|Contains the data defined in [TaskPayoutSet](#eventstaskpayoutsetaddlistener-taskid-role-token-amount-------)|

### `submitTaskDeliverable.send({ taskId, deliverableHash }, options)`

Submit the task deliverable, i.e. the output of the work performed for task `_id` Submission is allowed only to the assigned worker before the task due date. Submissions cannot be overwritten.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|deliverableHash|IPFS hash|IPFS hash of the work performed.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was completed.|
|taskId|number|The numeric ID of the task that was modified.|
|deliverableHash|IPFS hash|The deliverable hash that was submitted (an IPFS hash).|
|TaskCompleted|object|Contains the data defined in [TaskCompleted](#eventstaskcompletedaddlistener-taskid-------)|
|TaskDeliverableSubmitted|object|Contains the data defined in [TaskDeliverableSubmitted](#eventstaskdeliverablesubmittedaddlistener-taskid-deliverablehash-------)|

### `submitTaskWorkRating.send({ taskId, role, secret }, options)`

Submits a hidden work rating for a task. This is generated by `generateSecret(_salt, _rating)`.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|role|Role|Role that receives rating, either MANAGER or WORKER.|
|secret|Hex string|hidden work rating, generated as the output of `generateSecret(_salt, _rating)`, where `_rating` is a score from 1-3.|

**Returns**

An instance of a `ContractResponse`



### `submitTaskDeliverableAndRating.send({ taskId, deliverableHash, secret }, options)`

Submit the task deliverable for the worker and the rating for the manager.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The task ID.|
|deliverableHash|IPFS hash|IPFS hash of the work performed.|
|secret|Hex string|hidden work rating, generated as the output of `generateSecret(_salt, _rating)`, where `_rating` is a score from 1-3.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was completed.|
|taskId|number|The numeric ID of the task that was modified.|
|deliverableHash|IPFS hash|The deliverable hash that was submitted (an IPFS hash).|
|TaskCompleted|object|Contains the data defined in [TaskCompleted](#eventstaskcompletedaddlistener-taskid-------)|
|TaskDeliverableSubmitted|object|Contains the data defined in [TaskDeliverableSubmitted](#eventstaskdeliverablesubmittedaddlistener-taskid-deliverablehash-------)|

### `revealTaskWorkRating.send({ taskId, role, rating, salt }, options)`

Reveals a previously submitted work rating, by proving that the `_rating` and `_salt` values result in the same `secret` submitted during the rating submission period. This is checked on-chain using the `generateSecret` function.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|role|Role|Role whose rating submission gets revealed, either MANAGER or WORKER.|
|rating|number|Rating scored (1-3).|
|salt|string|`_salt` value to be used in `generateSecret`. A correct value will result in the same `secret` submitted during the work rating submission period.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that received the rating (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|rating|number|The value of the rating that was revealed (`1`, `2`, or `3`).|
|TaskWorkRatingRevealed|object|Contains the data defined in [TaskWorkRatingRevealed](#eventstaskworkratingrevealedaddlistener-taskid-role-rating-------)|

### `assignWorkRating.send({ taskId }, options)`

In the event of a user not committing or revealing within the 10 day rating window, their rating of their counterpart is assumed to be the highest possible and they will receive a reputation penalty.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|

**Returns**

An instance of a `ContractResponse`



### `finalizeTask.send({ taskId }, options)`

Finalizes a task, allowing roles to claim payouts and prohibiting all further changes to the task.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was finalized.|
|TaskFinalized|object|Contains the data defined in [TaskFinalized](#eventstaskfinalizedaddlistener-taskid-------)|

### `claimPayout.send({ taskId, role, token }, options)`

Claims the payout for `token` denomination for work completed in task `taskId` by contributor with role `role`. Allowed only by the contributors themselves after task is finalized. Here the network receives its fee from each payout. Ether fees go straight to the Meta Colony whereas Token fees go to the Network to be auctioned off.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|role|Role|Role of the contributor claiming the payout: MANAGER, EVALUATOR, or WORKER|
|token|Token address|Address to claim funds from, e.g. the token's contract address, or empty address (`0x0` for Ether)|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was assigned the task payout (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|Token address|The address of the token contract (an empty address if Ether).|
|amount|BigNumber|The task payout amount that was claimed.|
|from|Address|The address of the account that sent tokens.|
|to|Address|The address of the account that received tokens.|
|value|BigNumber|The amount of tokens that were transferred.|
|TaskPayoutClaimed|object|Contains the data defined in [TaskPayoutClaimed](#eventstaskpayoutclaimedaddlistener-taskid-role-token-amount-------)|
|Transfer|object|Contains the data defined in [Transfer](#eventstransferaddlistener-from-to-value-------)|

### `addDomain.send({ parentDomainId }, options)`

Adds a domain to the colony. Adding new domains is currently retricted to one level, i.e. `parentDomainId` has to be the id of the root domain (`parentDomainId: 1`).

**Arguments**

|Argument|Type|Description|
|---|---|---|
|parentDomainId|number|Id of the domain under which the new domain will be added.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|domainId|number|The numeric ID of the domain that was added.|
|DomainAdded|object|Contains the data defined in [DomainAdded](#eventsdomainaddedaddlistener-domainid-------)|

### `claimColonyFunds.send({ token }, options)`

Move any funds received by the colony for `token` denomination to the top-level domain pot, siphoning off a small amount to the rewards pot. No fee is taken if called against a colony's own token.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|Token address|Address to claim funds from; empty address (`0x0` for Ether)|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|token|Address|The address of the token contract (an empty address if Ether).|
|fee|BigNumber|The fee deducted from the claim and added to the colony rewards pot.|
|payoutRemainder|BigNumber|The remaining funds (after the fee) moved to the top-level domain pot.|
|ColonyFundsClaimed|object|Contains the data defined in [ColonyFundsClaimed](#eventscolonyfundsclaimedaddlistener-token-fee-payoutremainder-------)|

### `finalizeRewardPayout.send({ payoutId }, options)`

Finalises the reward payout and allows creation of next reward payout for token that has been used in `payoutId`. Can only be called when reward payout cycle is finished, i.e. 60 days from its creation.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|payoutId|number|Id of the reward payout.|

**Returns**

An instance of a `ContractResponse`



### `moveFundsBetweenPots.send({ fromPot, toPot, amount, token }, options)`

Move a given amount of `token` funds from one pot to another.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|fromPot|number|Origin pot Id.|
|toPot|number|Destination pot Id.|
|amount|BigNumber|Amount of funds to move.|
|token|Token address|Address of the token contract (`0x0` value indicates Ether).|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|fromPot|number|The numeric ID of the pot from which the funds were moved.|
|toPot|number|The numeric ID of the pot to which the funds were moved.|
|amount|BigNumber|The amount of funds that were moved between pots.|
|token|Address|The address of the token contract (an empty address if Ether).|
|ColonyFundsMovedBetweenFundingPots|object|Contains the data defined in [ColonyFundsMovedBetweenFundingPots](#eventscolonyfundsmovedbetweenfundingpotsaddlistener-frompot-topot-amount-token-------)|

### `mintTokens.send({ amount }, options)`

The founder of a Colony may mint new tokens.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|amount|BigNumber|Amount of new tokens to be minted.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|address|Address|The address that initiated the mint event.|
|amount|BigNumber|The amount of tokens that were minted.|
|from|Address|The address of the account that sent tokens.|
|to|Address|The address of the account that received tokens.|
|value|BigNumber|The amount of tokens that were transferred.|
|Mint|object|Contains the data defined in [Mint](#eventsmintaddlistener-address-amount-------)|
|Transfer|object|Contains the data defined in [Transfer](#eventstransferaddlistener-from-to-value-------)|

### `startNextRewardPayout.send({ token }, options)`

Start the next reward payout for `token`. All funds in the reward pot for `token` will become unavailable. All tokens will be locked, and can be unlocked by calling `waiveRewardPayout` or `claimRewardPayout`.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|Token address|Address of token used for reward payout (`0x0` value indicates Ether).|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|payoutId|number|The numeric ID of the payout cycle that started.|
|RewardPayoutCycleStarted|object|Contains the data defined in [RewardPayoutCycleStarted](#eventsrewardpayoutcyclestartedaddlistener-payoutid-------)|

### `waiveRewardPayouts.send({ numPayouts }, options)`

Waive reward payout. This unlocks the sender's tokens and increments the users reward payout counter, allowing them to claim the next reward payout.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|numPayouts|number|Number of payouts to waive.|

**Returns**

An instance of a `ContractResponse`



### `setToken.send({ token }, options)`

Set the colony token. Secured function to authorised members. Note that if the `mint` functionality is to be controlled through the colony, control has to be transferred to the colony after this call.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|Address|Address of the token contract to use.|

**Returns**

An instance of a `ContractResponse`



### `upgrade.send({ newVersion }, options)`

Upgrades the colony to a new Colony contract version. Downgrades are not allowed (i.e. `newVersion` should be higher than the currect colony version).

**Arguments**

|Argument|Type|Description|
|---|---|---|
|newVersion|number||

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|oldVersion|number|The old version number of the colony.|
|newVersion|number|The new version number of the colony.|
|ColonyUpgraded|object|Contains the data defined in [ColonyUpgraded](#eventscolonyupgradedaddlistener-oldversion-newversion-------)|

  
## Task MultiSig

**All MultiSig functions return an instance of a `MultiSigOperation`.** For a reference please check [here](/colonyjs/docs-multisignature/).
### `setTaskBrief.startOperation({ taskId, specificationHash })`

The task brief, or specification, is a description of the tasks work specification. The description is hashed and stored with the task for future reference in ratings or in the event of a dispute.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|specificationHash|IPFS hash|digest of the task's hashed specification.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|specificationHash|string|The specification hash that was set (an IPFS hash).|
|TaskBriefSet|object|Contains the data defined in [TaskBriefSet](#eventstaskbriefsetaddlistener-taskid-specificationhash-------)|

### `setTaskDomain.startOperation({ taskId, domainId })`

Every task must belong to a single existing Domain. This can only be called by the manager of the task.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|domainId|number|Integer domainId.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|domainId|number|The numeric ID of the domain that was set.|
|TaskDomainSet|object|Contains the data defined in [TaskDomainSet](#eventstaskdomainsetaddlistener-taskid-domainid-------)|

### `setTaskDueDate.startOperation({ taskId, dueDate })`

The task's due date determines when a worker may submit the task's deliverable(s).

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|dueDate|Date|Due date.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|dueDate|Date|The due date that was set.|
|TaskDueDateSet|object|Contains the data defined in [TaskDueDateSet](#eventstaskduedatesetaddlistener-taskid-duedate-------)|

### `setTaskManagerRole.startOperation({ taskId, user })`

Set the manager role for the address `user` in task `taskId`. Only allowed before the task is `finalized`, meaning that the value cannot be changed after the task is complete. The current manager and the user we want to assign this role to both need to sign this transaction.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|user|Address|address of the user.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|Address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleusersetaddlistener-taskid-role-user-------)|

### `setTaskWorkerRole.startOperation({ taskId, user })`

Set the worker role for the address `user` in task `taskId`. Only allowed before the task is `finalized`, meaning that the value cannot be changed after the task is complete. The current worker and the user we want to assign this role to both need to sign this transaction.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|user|Address|address of the user.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|Address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleusersetaddlistener-taskid-role-user-------)|

### `setTaskEvaluatorRole.startOperation({ taskId, user })`

Set the evaluator role for the address `user` in task `taskId`. Only allowed before the task is `finalized`, meaning that the value cannot be changed after the task is complete. The current evaluator and the user we want to assign this role to both need to sign this transaction.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|user|Address|address of the user.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|Address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleusersetaddlistener-taskid-role-user-------)|

### `setTaskSkill.startOperation({ taskId, skillId })`

Sets the skill tag associated with the task. Currently there is only one skill tag available per task, but additional skills for tasks are planned in future implementations. This can only be called by the manager and worker of the task.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|skillId|number|Integer skillId.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|skillId|number|The numeric ID of the skill that was set.|
|TaskSkillSet|object|Contains the data defined in [TaskSkillSet](#eventstaskskillsetaddlistener-taskid-skillid-------)|

### `setTaskEvaluatorPayout.startOperation({ taskId, token, amount })`

Sets the payout given to the EVALUATOR role when the task is finalized.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|token|Token address|Address to send funds from, e.g. the token's contract address, or empty address (`0x0` for Ether)|
|amount|BigNumber|Amount to be paid.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|Token address|The address of the token contract (an empty address if Ether).|
|amount|BigNumber|The task payout amount that was set.|
|TaskPayoutSet|object|Contains the data defined in [TaskPayoutSet](#eventstaskpayoutsetaddlistener-taskid-role-token-amount-------)|

### `setTaskManagerPayout.startOperation({ taskId, token, amount })`

Sets the payout given to the MANAGER role when the task is finalized. This MultisigSender only requires one signature (from the manager).

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|token|Token address|Address to send funds from, e.g. the token's contract address, or empty address (`0x0` for Ether)|
|amount|BigNumber|Amount to be paid.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|Token address|The address of the token contract (an empty address if Ether).|
|amount|BigNumber|The task payout amount that was set.|
|TaskPayoutSet|object|Contains the data defined in [TaskPayoutSet](#eventstaskpayoutsetaddlistener-taskid-role-token-amount-------)|

### `setTaskWorkerPayout.startOperation({ taskId, token, amount })`

Sets the payout given to the WORKER role when the task is finalized.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|token|Token address|Address to send funds from, e.g. the token's contract address, or empty address (`0x0` for Ether)|
|amount|BigNumber|Amount to be paid.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|Token address|The address of the token contract (an empty address if Ether).|
|amount|BigNumber|The task payout amount that was set.|
|TaskPayoutSet|object|Contains the data defined in [TaskPayoutSet](#eventstaskpayoutsetaddlistener-taskid-role-token-amount-------)|

### `removeTaskWorkerRole.startOperation({ taskId })`

Removes the worker role for the given task. Only allowed before the task is complete. Must be signed by the current worker and the manager.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|Address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleusersetaddlistener-taskid-role-user-------)|

### `removeTaskEvaluatorRole.startOperation({ taskId })`

Removes the worker role for the given task. Only allowed before the task is complete. Must be signed by the current evaluator and the manager.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|Address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleusersetaddlistener-taskid-role-user-------)|

### `cancelTask.startOperation({ taskId })`

Cancels a task.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was canceled.|
|TaskCanceled|object|Contains the data defined in [TaskCanceled](#eventstaskcanceledaddlistener-taskid-------)|

  
## Events

Refer to the `ContractEvent` class [here](/colonyjs/docs-contractclient/#events) to interact with these events.


### `events.DomainAdded.addListener(({ domainId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|domainId|number|The numeric ID of the domain that was added.|


### `events.PotAdded.addListener(({ potId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|potId|number|The numeric ID of the pot that was added.|


### `events.SkillAdded.addListener(({ skillId, parentSkillId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|skillId|number|The numeric ID of the skill that was added.|
|parentSkillId|number|The numeric ID of the parent skill.|


### `events.TaskAdded.addListener(({ taskId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was added.|


### `events.TaskBriefSet.addListener(({ taskId, specificationHash }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|specificationHash|string|The specification hash that was set (an IPFS hash).|


### `events.TaskCompleted.addListener(({ taskId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was completed.|


### `events.TaskDueDateSet.addListener(({ taskId, dueDate }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|dueDate|Date|The due date that was set.|


### `events.TaskDomainSet.addListener(({ taskId, domainId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|domainId|number|The numeric ID of the domain that was set.|


### `events.TaskSkillSet.addListener(({ taskId, skillId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|skillId|number|The numeric ID of the skill that was set.|


### `events.TaskRoleUserSet.addListener(({ taskId, role, user }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|Address|The user that was assigned the task role.|


### `events.TaskPayoutSet.addListener(({ taskId, role, token, amount }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|Token address|The address of the token contract (an empty address if Ether).|
|amount|BigNumber|The task payout amount that was set.|


### `events.TaskDeliverableSubmitted.addListener(({ taskId, deliverableHash }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|deliverableHash|IPFS hash|The deliverable hash that was submitted (an IPFS hash).|


### `events.TaskWorkRatingRevealed.addListener(({ taskId, role, rating }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that received the rating (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|rating|number|The value of the rating that was revealed (`1`, `2`, or `3`).|


### `events.TaskFinalized.addListener(({ taskId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was finalized.|


### `events.TaskPayoutClaimed.addListener(({ taskId, role, token, amount }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was assigned the task payout (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|Token address|The address of the token contract (an empty address if Ether).|
|amount|BigNumber|The task payout amount that was claimed.|


### `events.TaskCanceled.addListener(({ taskId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was canceled.|


### `events.RewardPayoutCycleStarted.addListener(({ payoutId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|payoutId|number|The numeric ID of the payout cycle that started.|


### `events.RewardPayoutCycleEnded.addListener(({ payoutId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|payoutId|number|The numeric ID of the payout cycle that ended.|


### `events.ColonyBootstrapped.addListener(({ users, amounts }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|users|undefined|The array of users that received an initial amount of tokens and reputation.|
|amounts|undefined|The array of corresponding token and reputation amounts each user recieved.|


### `events.ColonyLabelRegistered.addListener(({ colony, label }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|colony|Address|The address of the colony that was modified.|
|label|string|The label that was registered for the colony.|


### `events.Transfer.addListener(({ from, to, value }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|from|Address|The address of the account that sent tokens.|
|to|Address|The address of the account that received tokens.|
|value|BigNumber|The amount of tokens that were transferred.|


### `events.Mint.addListener(({ address, amount }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|address|Address|The address that initiated the mint event.|
|amount|BigNumber|The amount of tokens that were minted.|


### `events.ColonyFounderRoleSet.addListener(({ oldFounder, newFounder }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|oldFounder|Address|The address of the user that assigned the `FOUNDER` authority role (the old founder).|
|newFounder|Address|The address of the user that was assigned the `FOUNDER` authority role (the new founder).|


### `events.ColonyAdminRoleSet.addListener(({ user }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|The address of the user that was assigned the `ADMIN` authority role.|


### `events.ColonyAdminRoleRemoved.addListener(({ user }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|The address of the user that was unassigned the `ADMIN` authority role.|


### `events.ColonyFundsMovedBetweenFundingPots.addListener(({ fromPot, toPot, amount, token }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|fromPot|number|The numeric ID of the pot from which the funds were moved.|
|toPot|number|The numeric ID of the pot to which the funds were moved.|
|amount|BigNumber|The amount of funds that were moved between pots.|
|token|Address|The address of the token contract (an empty address if Ether).|


### `events.ColonyFundsClaimed.addListener(({ token, fee, payoutRemainder }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|Address|The address of the token contract (an empty address if Ether).|
|fee|BigNumber|The fee deducted from the claim and added to the colony rewards pot.|
|payoutRemainder|BigNumber|The remaining funds (after the fee) moved to the top-level domain pot.|


### `events.RewardPayoutClaimed.addListener(({ rewardPayoutId, user, fee, payoutRemainder }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|rewardPayoutId|number|The numeric ID of the reward payout.|
|user|Address|The address of the user who claimed the reward payout.|
|fee|BigNumber|The fee deducted from the claim and added to the colony rewards pot.|
|payoutRemainder|BigNumber|The remaining payout amount (after the fee) transferred to the user.|


### `events.ColonyRewardInverseSet.addListener(({ rewardInverse }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|rewardInverse|BigNumber|The reward inverse value that was set.|


### `events.ColonyInitialised.addListener(({ colonyNetwork }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|colonyNetwork|Address|The address of the Colony Network.|


### `events.ColonyUpgraded.addListener(({ oldVersion, newVersion }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|oldVersion|number|The old version number of the colony.|
|newVersion|number|The new version number of the colony.|