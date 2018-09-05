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
const colonyClient = await networkClient.getColonyClient(colonyId); // This is already initialised
```

## Instance properties

### `authority`

The Colony's [AuthorityClient](/colonyjs/api-authorityclient/) instance.

### `token`

The Colony's [TokenClient](/colonyjs/api-tokenclient/) instance.

  
## Callers

**All callers return promises which resolve to an object containing the given return values.** For a reference please check [here](/colonyjs/docs-contractclient/#callers).

### `getAuthority.call()`

Gets the colony's Authority contract address


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|address|Address|The colony's Authority contract address|

### `getRecoveryRolesCount.call()`

Returns the number of recovery roles.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|Number of users with the recovery role (excluding owner)|

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
|cancelled|boolean|Boolean flag denoting whether the task is cancelled.|
|deliverableDate|Date (optional)|Date when the deliverable is due.|
|deliverableHash|IPFS hash (optional)|Unique hash of the deliverable content.|
|domainId|number|Integer Domain ID the task belongs to.|
|dueDate|Date (optional)|When the task is due.|
|finalized|boolean|Boolean flag denoting whether the task is finalized.|
|id|number|Integer task ID.|
|payoutsWeCannotMake|number (optional)|Number of payouts that cannot be completed with the current task funding.|
|potId|number (optional)|Integer ID of funding pot for the task.|
|skillId|number|Integer Skill ID the task is assigned to.|
|specificationHash|IPFS hash|Unique hash of the specification content.|

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
|rated|boolean|Has the user work been rated.|
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
|taskId|number|The task ID.|
|potId|number|The ID of the funding pot that was added.|
|domainId|number|The ID of the domain that was added.|
|TaskAdded|object|Contains the data defined in [TaskAdded](#events-TaskAdded)|
|PotAdded|object|Contains the data defined in [PotAdded](#events-PotAdded)|
|DomainAdded|object|Contains the data defined in [DomainAdded](#events-DomainAdded)|

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



### `registerColonyLabel.send({ subnode }, options)`

Register the colony's ENS label.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|subnode|string|The keccak256 hash of the label to register|

**Returns**

An instance of a `ContractResponse`



### `setOwnerRole.send({ user }, options)`

Set a new colony owner role. There can only be one address assigned to owner role at a time. Whoever calls this function will lose their owner role. Can be called by owner role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|User we want to give an owner role to|

**Returns**

An instance of a `ContractResponse`



### `setAdminRole.send({ user }, options)`

Set a new colony admin role. Can be called by an owner or admin role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|User we want to give an admin role to|

**Returns**

An instance of a `ContractResponse`



### `setRecoveryRole.send({ user }, options)`

Set a new colony recovery role. Can be called by an owner role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|User we want to give a recovery role to|

**Returns**

An instance of a `ContractResponse`



### `removeAdminRole.send({ user }, options)`

Remove a colony admin role. Can only be called by an owner role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|User we want to remove an admin role from|

**Returns**

An instance of a `ContractResponse`



### `removeRecoveryRole.send({ user }, options)`

Remove a colony recovery role. Can only be called by an owner role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|User we want to remove a recovery role from|

**Returns**

An instance of a `ContractResponse`



### `setTaskDomain.send({ taskId, domainId }, options)`

Every task must belong to a single existing Domain. This can only be called by the manager of the task.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|domainId|number|Integer domainId.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|taskId|number|The task ID.|
|domainId|number|The task's new domain ID.|
|TaskDomainChanged|object|Contains the data defined in [TaskDomainChanged](#events-TaskDomainChanged)|

### `setTaskSkill.send({ taskId, skillId }, options)`

Sets the skill tag associated with the task. Currently there is only one skill tag available per task, but additional skills for tasks are planned in future implementations. This can only be called by the manager of the task.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|skillId|number|Integer skillId.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|taskId|number|The task ID.|
|skillId|number|The task's new skill ID.|
|TaskSkillChanged|object|Contains the data defined in [TaskSkillChanged](#events-TaskSkillChanged)|

### `setTaskManagerPayout.send({ taskId, token, amount }, options)`

Sets the payout given to the MANAGER role when the task is finalized. This Sender can only be called by the manager for the task in question.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|token|Token address|Address to send funds from, e.g. the token's contract address, or empty address (`0x0` for Ether)|
|amount|BigNumber|Amount to be paid.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|taskId|number|The task ID.|
|token|Token address|The token address (0x indicates ether).|
|amount|number|The token amount.|
|TaskWorkerPayoutChanged|object|Contains the data defined in [TaskWorkerPayoutChanged](#events-TaskWorkerPayoutChanged)|

### `submitTaskDeliverable.send({ taskId, deliverableHash }, options)`

Submit the task deliverable, i.e. the output of the work performed for task `_id` Submission is allowed only to the assigned worker before the task due date. Submissions cannot be overwritten.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|deliverableHash|IPFS hash|Hash of the work performed.|

**Returns**

An instance of a `ContractResponse`



### `submitTaskWorkRating.send({ taskId, role, secret }, options)`

Submits a hidden work rating for a task. This is generated by generateSecret(_salt, _rating).

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|role|Role|Role that receives rating, either MANAGER or WORKER.|
|secret|Hex string|hidden work rating, generated as the output of `generateSecret(_salt, _rating)`, where `_rating` is a score from 1-3.|

**Returns**

An instance of a `ContractResponse`



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

An instance of a `ContractResponse`



### `assignWorkRating.send({ taskId }, options)`

In the event of a user not committing or revealing within the 10 day rating window, their rating of their counterpart is assumed to be the highest possible and they will receive a reputation penalty.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|

**Returns**

An instance of a `ContractResponse`



### `cancelTask.send({ taskId }, options)`

Cancels a task.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|taskId|number|The task ID of the task that was canceled.|
|TaskCanceled|object|Contains the data defined in [TaskCanceled](#events-TaskCanceled)|

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
|taskId|number|The task ID of the task that was finalized.|
|TaskFinalized|object|Contains the data defined in [TaskFinalized](#events-TaskFinalized)|

### `claimPayout.send({ taskId, role, token }, options)`

Claims the payout for `token` denomination for work completed in task `taskId` by contributor with role `role`. Allowed only by the contributors themselves after task is finalized. Here the network receives its fee from each payout. Ether fees go straight to the Meta Colony whereas Token fees go to the Network to be auctioned off.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|role|Role|Role of the contributor claiming the payout: MANAGER, EVALUATOR, or WORKER|
|token|Token address|Address to claim funds from, e.g. the token's contract address, or empty address (`0x0` for Ether)|

**Returns**

An instance of a `ContractResponse`



### `addDomain.send({ parentSkillId }, options)`

Adds a domain to the Colony along with the new domain's respective local skill (with id `parentSkillId`). This can only be called by owners of the colony. Adding new domains is currently retricted to one level only, i.e. `parentSkillId` has to be the root domain (id: 1).

**Arguments**

|Argument|Type|Description|
|---|---|---|
|parentSkillId|number|Id of the local skill under which the new skill will be added.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|skillId|number|A skillId for this domain.|
|parentSkillId|number|The parent skill id.|
|SkillAdded|object|Contains the data defined in [SkillAdded](#events-SkillAdded)|

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

### `claimColonyFunds.send({ token }, options)`

Move any funds received by the colony for `token` denomination to the top-levl domain pot, siphoning off a small amount to the rewards pot. No fee is taken if called against a colony's own token.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|Token address|Address to claim funds from; empty address (`0x0` for Ether)|

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

An instance of a `ContractResponse`



### `mintTokens.send({ amount }, options)`

The owner of a Colony may mint new tokens.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|amount|BigNumber|Amount of new tokens to be minted.|

**Returns**

An instance of a `ContractResponse`



### `mintTokensForColonyNetwork.send({ amount }, options)`

In the case of the Colony Network, only the Meta Colony may mint new tokens.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|amount|BigNumber|Amount of new tokens to be minted.|

**Returns**

An instance of a `ContractResponse`



### `startNextRewardPayout.send({ token }, options)`

Start the next reward payout for `token`. All funds in the reward pot for `token` will become unavailable. All tokens will be locked, and can be unlocked by calling `waiveRewardPayout` or `claimRewardPayout`.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|Token address|Address of token used for reward payout (`0x0` value indicates Ether).|

**Returns**

An instance of a `ContractResponse`



### `waiveRewardPayouts.send({ numPayouts }, options)`

Waive reward payout. This unlocks the sender's tokens and increments the users reward payout counter, allowing them to claim the next reward payout.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|numPayouts|number|Number of payouts to waive.|

**Returns**

An instance of a `ContractResponse`



  
## Task MultiSig

**All MultiSig functions return an instance of a `MultiSigOperation`.** For a reference please check [here](/colonyjs/docs-multisignature-transactions/).
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
|taskId|number|The task ID.|
|specificationHash|string|The IPFS hash of the task's new specification.|
|TaskBriefChanged|object|Contains the data defined in [TaskBriefChanged](#events-TaskBriefChanged)|

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
|taskId|number|The task ID.|
|dueDate|Date|The task's new due date.|
|TaskDueDateChanged|object|Contains the data defined in [TaskDueDateChanged](#events-TaskDueDateChanged)|

### `setTaskManagerRole.startOperation({ taskId, user })`

Set the manager role for the address `user` in task `taskId`. Only allowed before the task is `finalized`, meaning that the value cannot be changed after the task is complete. The current manager and the user we want to assign role to both need to sign this transaction.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|Integer taskId.|
|user|Address|address of the user.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The task ID.|
|role|number|The role that changed for the task.|
|user|Address|The user with the role that changed for the task.|
|TaskRoleUserChanged|object|Contains the data defined in [TaskRoleUserChanged](#events-TaskRoleUserChanged)|

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
|taskId|number|The task ID.|
|token|Token address|The token address (0x indicates ether).|
|amount|number|The token amount.|
|TaskWorkerPayoutChanged|object|Contains the data defined in [TaskWorkerPayoutChanged](#events-TaskWorkerPayoutChanged)|

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
|taskId|number|The task ID.|
|token|Token address|The token address (0x indicates ether).|
|amount|number|The token amount.|
|TaskWorkerPayoutChanged|object|Contains the data defined in [TaskWorkerPayoutChanged](#events-TaskWorkerPayoutChanged)|

  
## Events

Refer to the `ContractEvent` class [here](/colonyjs/docs-contractclient/#events) to interact with these events.


### [events.DomainAdded.addListener(({ domainId }) => { /* ... */ })](#events-DomainAdded)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|domainId|number|The ID of the domain that was added.|


### [events.PotAdded.addListener(({ potId }) => { /* ... */ })](#events-PotAdded)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|potId|number|The ID of the funding pot that was added.|


### [events.SkillAdded.addListener(({ skillId, parentSkillId }) => { /* ... */ })](#events-SkillAdded)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|skillId|number|A skillId for this domain.|
|parentSkillId|number|The parent skill id.|


### [events.TaskAdded.addListener(({ taskId }) => { /* ... */ })](#events-TaskAdded)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The task ID.|


### [events.TaskBriefChanged.addListener(({ taskId, specificationHash }) => { /* ... */ })](#events-TaskBriefChanged)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The task ID.|
|specificationHash|string|The IPFS hash of the task's new specification.|


### [events.TaskDueDateChanged.addListener(({ taskId, dueDate }) => { /* ... */ })](#events-TaskDueDateChanged)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The task ID.|
|dueDate|Date|The task's new due date.|


### [events.TaskDomainChanged.addListener(({ taskId, domainId }) => { /* ... */ })](#events-TaskDomainChanged)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The task ID.|
|domainId|number|The task's new domain ID.|


### [events.TaskSkillChanged.addListener(({ taskId, skillId }) => { /* ... */ })](#events-TaskSkillChanged)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The task ID.|
|skillId|number|The task's new skill ID.|


### [events.TaskRoleUserChanged.addListener(({ taskId, role, user }) => { /* ... */ })](#events-TaskRoleUserChanged)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The task ID.|
|role|number|The role that changed for the task.|
|user|Address|The user with the role that changed for the task.|


### [events.TaskWorkerPayoutChanged.addListener(({ taskId, token, amount }) => { /* ... */ })](#events-TaskWorkerPayoutChanged)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The task ID.|
|token|Token address|The token address (0x indicates ether).|
|amount|number|The token amount.|


### [events.TaskFinalized.addListener(({ taskId }) => { /* ... */ })](#events-TaskFinalized)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The task ID of the task that was finalized.|


### [events.TaskCanceled.addListener(({ taskId }) => { /* ... */ })](#events-TaskCanceled)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The task ID of the task that was canceled.|