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

### `generateSecret.call({ salt, value })`

Generate the rating secret used in task ratings. This function returns a keccak256 hash created from the `salt` and `value`.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|salt|string|The string that will be used to generate a secret.|
|value|number|The task rating that will be hidden (`1`, `2`, or `3`).|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|secret|Hex string|A keccak256 hash that keeps the task rating hidden.|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `getAuthority.call()`

Get the authority contract address associated with the colony.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|address|Address|The address of the authority contract associated with the colony.|

**Network Information**


  - Name: `authority`
  - Contract: `dappsys/auth.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `getDomain.call({ domainId })`

Get information about a domain.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|domainId|number|The numeric ID of the domain.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|localSkillId|number|The numeric ID of the local skill.|
|potId|number|The numeric ID of the funding pot.|

**Network Information**


  
  - Contract: `Colony.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `getDomainCount.call()`

Get the total number of domains in the colony. The return value is also the numeric ID of the last domain created.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|The total number of domains.|

**Network Information**


  
  - Contract: `Colony.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `getGlobalRewardPayoutCount.call()`

Get the total number of claimed and waived reward payout cycles in the colony.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|The total number of reward payout cycles.|

**Network Information**


  
  - Contract: `?`
  - Interface: `?`
  - Version: `0`
  

### `getNonRewardPotsTotal.call({ token })`

Get the total amount of funds that are not in the colony rewards pot. The total amount of funds that are not in the colony rewards pot is a value that keeps track of the total assets a colony has to work with, which may be split among several distinct pots associated with various domains and tasks.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|Token address|The address of the token contract (an empty address if Ether).|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|total|BigNumber|The total amount of funds that are not in the colony rewards pot.|

**Network Information**


  
  - Contract: `ColonyFunding.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `getPotBalance.call({ potId, token })`

Get the balance of a funding pot.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|potId|number|The numeric ID of the funding pot.|
|token|Token address|The address of the token contract (an empty address if Ether).|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|balance|BigNumber|The balance of tokens (or Ether) in the funding pot.|

**Network Information**


  
  - Contract: `ColonyFunding.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `getRecoveryRolesCount.call()`

Get the total number of users that are assigned a colony recovery role.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|The total number of users that are assigned a colony recovery role.|

**Network Information**


  
  - Contract: `?`
  - Interface: `?`
  - Version: `0`
  

### `getRewardInverse.call()`

Get the inverse amount of the reward. If the fee is 1% (or 0.01), the inverse amount will be 100.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|rewardInverse|BigNumber|The inverse amount of the reward.|

**Network Information**


  
  - Contract: `ColonyFunding.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `getRewardPayoutInfo.call({ payoutId })`

Get information about a reward payout cycle.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|payoutId|number|The ID of the reward payout cycle.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|blockNumber|number|The block number at the time the reward payout cycle started.|
|remainingTokenAmount|BigNumber|The remaining amount of unclaimed tokens (or Ether).|
|reputationRootHash|string|The reputation root hash at the time the reward payout cycle started.|
|token|Token address|The address of the token contract (an empty address if Ether).|
|totalTokenAmountForRewardPayout|BigNumber|The total amount of tokens set aside for the reward payout cycle.|
|totalTokens|BigNumber|The total amount of tokens at the time the reward payout cycle started.|

**Network Information**


  
  - Contract: `ColonyFunding.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `getTask.call({ taskId })`

Get information about a task.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|completionDate|Date (optional)|The date when the task deliverable was submitted.|
|deliverableHash|IPFS hash (optional)|The deliverable hash of the task (an IPFS hash).|
|domainId|number|The numeric ID of the domain.|
|dueDate|Date (optional)|The final date that the task deliverable can be submitted.|
|id|number|The numeric ID of the task.|
|payoutsWeCannotMake|number (optional)|The number of payouts that cannot be completed (`0` or `1`). If this value is `1`, it means that the funding pot associated with the task does not have enough funds to perform the task payouts, i.e. the total amount for the three task payouts is more than the total balance of the funding pot associated with the task.|
|potId|number (optional)|The numeric ID of the funding pot.|
|skillId|number|The numeric ID of the skill.|
|specificationHash|IPFS hash|The specification hash of the task (an IPFS hash).|
|status|undefined|The task status (`ACTIVE`, `CANCELLED` or `FINALIZED`).|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `getTaskCount.call()`

Get the total number of tasks in the colony. The return value is also the numeric ID of the last task created.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|The total number of tasks.|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `getTaskPayout.call({ taskId, role, token })`

Get the task payout amount assigned to a task role. Multiple tokens can be used for task payouts, therefore the token must be specified when calling this function. In order to get the task payout amount in Ether, `token` must be an empty address.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|role|Role|The task role (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|Token address|The address of the token contract (an empty address if Ether).|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|amount|BigNumber|The amount of tokens (or Ether) assigned to the task role as a payout.|

**Network Information**


  
  - Contract: `ColonyFunding.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `getTaskRole.call({ taskId, role })`

Get information about a task role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|role|Role|The role of the task (`MANAGER`, `EVALUATOR`, or `WORKER`).|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|address|Address|The address of the user that is assigned the task role.|
|rateFail|boolean|A boolean indicating whether or not the user failed to rate their counterpart.|
|rating|number|The rating that the user received (`1`, `2`, or `3`).|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `getTaskWorkRatings.call({ taskId })`

Get information about the ratings of a task.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|The total number of submitted ratings for a task.|
|date|Date|The date that the last rating was submitted.|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `getTaskWorkRatingSecret.call({ taskId, role })`

Get the secret of a rating that has been submitted. If a task is in the commit period of the rating process, the ratings are hidden in a keccak256 hash that was created from a `salt` and `value`. The rating secret can be retrieved but in order to reveal the secret, one would have to know both the `salt` and `value` used to generate the secret.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|role|Role|The role that submitted the rating (`MANAGER`, `EVALUATOR`, or `WORKER`).|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|secret|Hex string|A keccak256 hash that keeps the task rating hidden.|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `getToken.call()`

Get the address of the ERC20 token contract that is the native token assigned to the colony. The native token is the token used to calculate reputation scores, i.e. `1` token earned for completing a task with an adequate rating (`2`) will result in `1` reputation point earned.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|address|Address|The address of the ERC20 token contract.|

**Network Information**


  
  - Contract: `Colony.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `getTotalTaskPayout.call({ taskId, token })`

Get the total payout amount assigned to all task roles. Multiple tokens can be used for task payouts, therefore the token must be specified when calling this function. In order to get the task payout amount in Ether, `token` must be an empty address.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|token|Token address|The address of the token contract (an empty address if Ether).|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|amount|BigNumber|The total amount of tokens (or Ether) assigned to all task roles as payouts.|

**Network Information**


  
  - Contract: `ColonyFunding.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `getTransactionCount.call()`

Get the total number of transactions that the colony has made. The total number of transactions is equal to the ID of the last transaction.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|The total number of transactions that the colony has made.|

**Network Information**


  
  - Contract: `?`
  - Interface: `?`
  - Version: `0`
  

### `getUserRewardPayoutCount.call({ user })`

Get the total number of claimed and waived reward payout cycles for a given user in the colony.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|The address of the user.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|The total number of reward payout cycles.|

**Network Information**


  
  - Contract: `?`
  - Interface: `?`
  - Version: `0`
  

### `getVersion.call()`

Get the version number of the colony contract. The version number starts at `1` and is incremented by `1` with every new version.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|version|number|The version number of the colony contract.|

**Network Information**


  - Name: `version`
  - Contract: `Colony.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `hasUserRole.call({ user, role })`

Check whether a user has an authority role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|The address of the user that will be checked.|
|role|Authority Role|The authority role that will be checked (`FOUNDER` or `ADMIN`).|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|hasRole|boolean|A boolean indicating whether or not the user has the authority role.|

**Network Information**


  
  - Contract: `Colony.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `isInRecoveryMode.call()`

Check whether or not the colony is in recovery mode.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|inRecoveryMode|boolean|A boolean indicating whether or not the colony is in recovery mode.|

**Network Information**


  
  - Contract: `ContractRecovery.sol`
  - Interface: `IRecovery.sol`
  - Version: `0`
  

  
## Senders

**All senders return an instance of a `ContractResponse`.** Every `send()` method takes an `options` object as the second argument. For a reference please check [here](/colonyjs/docs-contractclient/#senders).
### `addDomain.send({ parentDomainId }, options)`

Add a domain to the colony. Adding new domains is currently retricted to one level, i.e. the `parentDomainId` must be the id of the root domain `1`, which represents the colony itself.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|parentDomainId|number|The numeric ID of the parent domain.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|domainId|number|The numeric ID of the domain that was added.|
|DomainAdded|object|Contains the data defined in [DomainAdded](#eventsdomainaddedaddlistener-domainid-------)|

**Network Information**


  
  - Contract: `Colony.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `approveExitRecovery.send(options)`

Indicate approval to exit colony recovery mode. This function can only be called by a user with a recovery role.


**Returns**

An instance of a `ContractResponse`



**Network Information**


  
  - Contract: `ContractRecovery.sol`
  - Interface: `IRecovery.sol`
  - Version: `0`
  

### `assignWorkRating.send({ taskId }, options)`

Assign the work rating for any task roles that did not receive a rating. In the event of a user not committing or revealing a work rating within the 10-day rating window (5-day maximum commit period and 5-day maximum reveal period), their counterpart is given the highest work rating possible (`3`) and the user who failed to commit or reveal their work rating will receive a reputation penalty.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|

**Returns**

An instance of a `ContractResponse`



**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `?`
  - Version: `0`
  

### `bootstrapColony.send({ users, amounts }, options)`

Bootstrap the colony by giving an initial amount of tokens and reputation to selected users. This function can only be called by the user assigned the `FOUNDER` authority role when the `taskCount` for the colony is equal to `0`.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|users|undefined|The array of users that will recieve an initial amount of tokens and reputation.|
|amounts|undefined|The array of corresponding token and reputation amounts each user will recieve.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|users|undefined|The array of users that received an initial amount of tokens and reputation.|
|amounts|undefined|The array of corresponding token and reputation amounts each user recieved.|
|ColonyBootstrapped|object|Contains the data defined in [ColonyBootstrapped](#eventscolonybootstrappedaddlistener-users-amounts-------)|

**Network Information**


  
  - Contract: `Colony.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `claimColonyFunds.send({ token }, options)`

Claim funds that the colony has received by adding them to the funding pot of the root domain. A small fee is deducted from the funds claimed and added to the colony rewards pot. No fee is deducted when tokens native to the colony are claimed.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|Token address|The address of the token contract (an empty address if Ether).|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|token|Address|The address of the token contract (an empty address if Ether).|
|fee|BigNumber|The fee deducted from the claim and added to the colony rewards pot.|
|payoutRemainder|BigNumber|The remaining funds (after the fee) moved to the top-level domain pot.|
|ColonyFundsClaimed|object|Contains the data defined in [ColonyFundsClaimed](#eventscolonyfundsclaimedaddlistener-token-fee-payoutremainder-------)|

**Network Information**


  
  - Contract: `ColonyFunding.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `claimPayout.send({ taskId, role, token }, options)`

Claim the payout assigned to a task role. This function can only be called by the user who is assigned a task role (`MANAGER`, `EVALUATOR`, or `WORKER`) after the task has been finalized.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|role|Role|The role that submitted the rating (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|Token address|The address of the token contract (an empty address if Ether).|

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

**Network Information**


  
  - Contract: `ColonyFunding.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `completeTask.send({ taskId }, options)`

Mark a task as complete. If the user assigned the `WORKER` task role fails to submit the task deliverable by the due date, this function must be called by the user assigned the `MANAGER` task role. This allows the task work to be rated and the task to be finalized.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was completed.|
|TaskCompleted|object|Contains the data defined in [TaskCompleted](#eventstaskcompletedaddlistener-taskid-------)|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `createTask.send({ specificationHash, domainId, skillId, dueDate }, options)`

Create a new task within the colony.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|specificationHash|IPFS hash|The specification hash of the task (an IPFS hash).|
|domainId|number|The numeric ID of the domain (optional with a default value of `1`).|
|skillId|number|The numeric ID of the skill (optional with a default value of `null`).|
|dueDate|Date|The due date of the task (optional with a default value of `30` days from now).|

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

**Network Information**


  - Name: `makeTask`
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `enterRecoveryMode.send(options)`

Enter colony recovery mode. This function can only be called by a user with a recovery role.


**Returns**

An instance of a `ContractResponse`



**Network Information**


  
  - Contract: `ContractRecovery.sol`
  - Interface: `IRecovery.sol`
  - Version: `0`
  

### `exitRecoveryMode.send(options)`

Exit colony recovery mode. This function can be called by anyone if enough whitelist approvals are given.


**Returns**

An instance of a `ContractResponse`



**Network Information**


  
  - Contract: `ContractRecovery.sol`
  - Interface: `IRecovery.sol`
  - Version: `0`
  

### `finalizeRewardPayout.send({ payoutId }, options)`

Finalize the reward payout cycle. This function can only be called when the reward payout cycle has finished, i.e. 60 days have passed since the creation of the reward payout cycle.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|payoutId|number|The numeric ID of the reward payout cycle.|

**Returns**

An instance of a `ContractResponse`



**Network Information**


  
  - Contract: `ColonyFunding.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `finalizeTask.send({ taskId }, options)`

Finalize a task. Once a task is finalized, each user assigned a task role can claim the payout assigned to their role and no further changes to the task can be made.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was finalized.|
|TaskFinalized|object|Contains the data defined in [TaskFinalized](#eventstaskfinalizedaddlistener-taskid-------)|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `mintTokens.send({ amount }, options)`

Mint new tokens. This function can only be called if the address of the colony contract is the owner of the token contract. If this is the case, then this function can only be called by the user assigned the `FOUNDER` authority role.

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
|from|Address|The address of the account that sent tokens.|
|to|Address|The address of the account that received tokens.|
|value|BigNumber|The amount of tokens that were transferred.|
|Mint|object|Contains the data defined in [Mint](#eventsmintaddlistener-address-amount-------)|
|Transfer|object|Contains the data defined in [Transfer](#eventstransferaddlistener-from-to-value-------)|

**Network Information**


  
  - Contract: `Colony.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `moveFundsBetweenPots.send({ fromPot, toPot, amount, token }, options)`

Move funds from one pot to another.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|fromPot|number|The numeric ID of the pot from which funds will be moved.|
|toPot|number|The numeric ID of the pot to which funds will be moved.|
|amount|BigNumber|The amount of funds that will be moved between pots.|
|token|Token address|The address of the token contract (an empty address if Ether).|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|fromPot|number|The numeric ID of the pot from which the funds were moved.|
|toPot|number|The numeric ID of the pot to which the funds were moved.|
|amount|BigNumber|The amount of funds that were moved between pots.|
|token|Address|The address of the token contract (an empty address if Ether).|
|ColonyFundsMovedBetweenFundingPots|object|Contains the data defined in [ColonyFundsMovedBetweenFundingPots](#eventscolonyfundsmovedbetweenfundingpotsaddlistener-frompot-topot-amount-token-------)|

**Network Information**


  
  - Contract: `ColonyFunding.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `registerColonyLabel.send({ colonyName, orbitDBPath }, options)`

Register an ENS label for the colony.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|colonyName|string|The ENS label that will be registered for the colony.|
|orbitDBPath|string|The path of the OrbitDB database associated with the colony.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|colony|Address|The address of the colony that was modified.|
|label|string|The label that was registered for the colony.|
|ColonyLabelRegistered|object|Contains the data defined in [ColonyLabelRegistered](#eventscolonylabelregisteredaddlistener-colony-label-------)|

**Network Information**


  
  - Contract: `Colony.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `removeAdminRole.send({ user }, options)`

Remove the `ADMIN` authority role from a user. This function can only be called by the user assigned the `FOUNDER` authroity role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|The address that we will be unassigned the `ADMIN` authority role.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|user|Address|The address that was unassigned the `ADMIN` authority role.|
|ColonyAdminRoleRemoved|object|Contains the data defined in [ColonyAdminRoleRemoved](#eventscolonyadminroleremovedaddlistener-user-------)|

**Network Information**


  
  - Contract: `Colony.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `removeRecoveryRole.send({ user }, options)`

Remove the colony recovery role from a user. This function can only be called by the `FOUNDER` authority role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|The address that will be unassigned a colony recovery role.|

**Returns**

An instance of a `ContractResponse`



**Network Information**


  
  - Contract: `ContractRecovery.sol`
  - Interface: `IRecovery.sol`
  - Version: `0`
  

### `revealTaskWorkRating.send({ taskId, role, rating, salt }, options)`

Reveal a submitted work rating. In order to reveal a work rating, the same `salt` and `value` used to generate the `secret` when the task work rating was submitted must be provided again here to reveal the task work rating.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|role|Role|The role that received the rating (`MANAGER` or `WORKER`).|
|rating|number|The rating that was submitted (`1`, `2`, or `3`).|
|salt|string|The string that was used to generate the secret.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that received the rating (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|rating|number|The value of the rating that was revealed (`1`, `2`, or `3`).|
|TaskWorkRatingRevealed|object|Contains the data defined in [TaskWorkRatingRevealed](#eventstaskworkratingrevealedaddlistener-taskid-role-rating-------)|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `setAdminRole.send({ user }, options)`

Assign the `ADMIN` authority role to a user. This function can only be called by the user assigned the `FOUNDER` authority role or a user assigned the `ADMIN` authority role. There is no limit to the number of users that can be assigned the `ADMIN` authority role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|The address that will be assigned the `ADMIN` authroity role.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|user|Address|The address that was assigned the `ADMIN` authority role.|
|ColonyAdminRoleSet|object|Contains the data defined in [ColonyAdminRoleSet](#eventscolonyadminrolesetaddlistener-user-------)|

**Network Information**


  
  - Contract: `Colony.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `setAllTaskPayouts.send({ taskId, token, managerAmount, evaluatorAmount, workerAmount }, options)`

Set the payouts for all task roles (`MANAGER`, `EVALUATOR`, and `WORKER`). This can only be called by the user assigned the `MANAGER` task role and only if the `EVALUATOR` and `WORKER` task roles are either not assigned or assigned to the same user as the `MANAGER` task role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|token|Token address|The address of the token contract (an empty address if Ether).|
|managerAmount|BigNumber|The payout amount in tokens (or Ether) for the `MANAGER` task role.|
|evaluatorAmount|BigNumber|The payout amount in tokens (or Ether) for the `EVALUATOR` task role.|
|workerAmount|BigNumber|The payout amount in tokens (or Ether) for the `WORKER` task role.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|Token address|The address of the token contract (an empty address if Ether).|
|amount|BigNumber|The task payout amount that was set.|
|TaskPayoutSet|object|Contains the data defined in [TaskPayoutSet](#eventstaskpayoutsetaddlistener-taskid-role-token-amount-------)|

**Network Information**


  
  - Contract: `ColonyFunding.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `setFounderRole.send({ user }, options)`

Assign the `FOUNDER` authority role to a user. This function can only be called by the user currently assigned the `FOUNDER` authority role. There can only be one address assigned to the `FOUNDER` authority role, therefore, the user currently assigned will forfeit their role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|The address that will be assigned the `FOUNDER` authority role.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|oldFounder|Address|The address that assigned the `FOUNDER` authority role (the old founder).|
|newFounder|Address|The address that was assigned the `FOUNDER` authority role (the new founder).|
|ColonyFounderRoleSet|object|Contains the data defined in [ColonyFounderRoleSet](#eventscolonyfounderrolesetaddlistener-oldfounder-newfounder-------)|

**Network Information**


  
  - Contract: `Colony.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `setRecoveryRole.send({ user }, options)`

Assign a colony recovery role to a user. This function can only be called by the `FOUNDER` authority role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|The address that will be assigned a colony recovery role.|

**Returns**

An instance of a `ContractResponse`



**Network Information**


  
  - Contract: `ContractRecovery.sol`
  - Interface: `IRecovery.sol`
  - Version: `0`
  

### `setStorageSlotRecovery.send({ slot, value }, options)`

Set the value for a storage slot while in recovery mode. This can only be called by a user with a recovery role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|slot|number|The numeric ID of the storage slot that will be modified.|
|value|Hex string|The hex string of data that will be set as the value.|

**Returns**

An instance of a `ContractResponse`



**Network Information**


  
  - Contract: `ContractRecovery.sol`
  - Interface: `IRecovery.sol`
  - Version: `0`
  

### `setToken.send({ token }, options)`

Set the native token for the colony. This function can only be called by the user assigned the `FOUNDER` authority role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|Address|The address of the token contract.|

**Returns**

An instance of a `ContractResponse`



**Network Information**


  
  - Contract: `?`
  - Interface: `?`
  - Version: `0`
  

### `startNextRewardPayout.send({ token }, options)`

Start the next reward payout cycle. All the funds in the colony rewards pot for the given token will become locked until reputation holders have either waived the reward payout cycle using `waiveRewardPayouts`, which means they forfeit a given number of reward payout cycles and unlock their share of tokens for those payout cycles, or reputation holders have claimed their rewards payout using `claimRewardPayout`, which means the payout was claimed and the tokens were transferred to their account.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|Token address|The address of the token contract (an empty address if Ether).|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|payoutId|number|The numeric ID of the payout cycle that started.|
|RewardPayoutCycleStarted|object|Contains the data defined in [RewardPayoutCycleStarted](#eventsrewardpayoutcyclestartedaddlistener-payoutid-------)|

**Network Information**


  
  - Contract: `ColonyFunding.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `submitTaskDeliverable.send({ taskId, deliverableHash }, options)`

Submit the task deliverable. This function can only be called by the user assigned the `WORKER` task role on or before the task due date. The submission cannot be overwritten, which means the deliverable cannot be changed once it has been submitted.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|deliverableHash|IPFS hash|The deliverable hash of the task (an IPFS hash).|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was completed.|
|taskId|number|The numeric ID of the task that was modified.|
|deliverableHash|IPFS hash|The deliverable hash that was submitted (an IPFS hash).|
|TaskCompleted|object|Contains the data defined in [TaskCompleted](#eventstaskcompletedaddlistener-taskid-------)|
|TaskDeliverableSubmitted|object|Contains the data defined in [TaskDeliverableSubmitted](#eventstaskdeliverablesubmittedaddlistener-taskid-deliverablehash-------)|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `submitTaskDeliverableAndRating.send({ taskId, deliverableHash, secret }, options)`

Submit the task deliverable and the work rating for the user assigned the `MANAGER` task role. This function can only be called by the user assigned the `WORKER` task role on or before the task due date. The submission cannot be overwritten, which means the deliverable cannot be changed once it has been submitted. In order to submit a rating, a `secret` must be generated using the `generateSecret` method, which keeps the rating hidden until all ratings have been submitted and revealed.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|deliverableHash|IPFS hash|The deliverable hash of the task (an IPFS hash).|
|secret|Hex string|A keccak256 hash that keeps the task rating hidden.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was completed.|
|taskId|number|The numeric ID of the task that was modified.|
|deliverableHash|IPFS hash|The deliverable hash that was submitted (an IPFS hash).|
|TaskCompleted|object|Contains the data defined in [TaskCompleted](#eventstaskcompletedaddlistener-taskid-------)|
|TaskDeliverableSubmitted|object|Contains the data defined in [TaskDeliverableSubmitted](#eventstaskdeliverablesubmittedaddlistener-taskid-deliverablehash-------)|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `submitTaskWorkRating.send({ taskId, role, secret }, options)`

Submit a work rating for a task. This function can only be called by the user assigned the `EVALUATOR` task role, who is submitting a rating for the user assigned the `WORKER` task role, or the user assigned the `WORKER` task role, who is submitting a rating for the user assigned the `MANAGER` task role. In order to submit a rating, a `secret` must be generated using the `generateSecret` method, which keeps the rating hidden until all ratings have been submitted and revealed.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|role|Role|The role that will receive the rating (`MANAGER` or `WORKER`).|
|secret|Hex string|A keccak256 hash that keeps the task rating hidden.|

**Returns**

An instance of a `ContractResponse`



**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `upgrade.send({ newVersion }, options)`

Upgrade the colony to a new contract version. The new version number must be higher than the current version. Downgrading to old contract versions is not permitted.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|newVersion|number|The version number of the colony contract.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|oldVersion|number|The old version number of the colony.|
|newVersion|number|The new version number of the colony.|
|ColonyUpgraded|object|Contains the data defined in [ColonyUpgraded](#eventscolonyupgradedaddlistener-oldversion-newversion-------)|

**Network Information**


  
  - Contract: `Colony.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `waiveRewardPayouts.send({ numPayouts }, options)`

Waive reward payout cycles. This unlocks tokens for a given number of reward payout cycles.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|numPayouts|number|The number of reward payout cycles that will be waived.|

**Returns**

An instance of a `ContractResponse`



**Network Information**


  
  - Contract: `?`
  - Interface: `?`
  - Version: `0`
  

  
## Task MultiSig

**All MultiSig functions return an instance of a `MultiSigOperation`.** For a reference please check [here](/colonyjs/docs-multisignature/).
### `cancelTask.startOperation({ taskId })`

Cancel a task. Once a task is cancelled, no further changes to the task can be made.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was canceled.|
|TaskCanceled|object|Contains the data defined in [TaskCanceled](#eventstaskcanceledaddlistener-taskid-------)|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `removeTaskEvaluatorRole.startOperation({ taskId })`

Remove the `EVALUATOR` task role assignment. This function can only be called before the task is complete, i.e. either before the deliverable has been submitted or the user assigned the `WORKER` task role has failed to meet the deadline and the user assigned the `MANAGER` task role has marked the task as complete.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|Address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleusersetaddlistener-taskid-role-user-------)|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `removeTaskWorkerRole.startOperation({ taskId })`

Remove the `WORKER` task role assignment. This function can only be called before the task is complete, i.e. either before the deliverable has been submitted or the user assigned the `WORKER` task role has failed to meet the deadline and the user assigned the `MANAGER` task role has marked the task as complete.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|Address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleusersetaddlistener-taskid-role-user-------)|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `setTaskBrief.startOperation({ taskId, specificationHash })`

Set the task specification. The task specification, or "task brief", is a description of the work that must be completed for the task. The description is hashed and stored with the task for future reference during the rating process or in the event of a dispute.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|specificationHash|IPFS hash|The specification hash of the task (an IPFS hash).|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|specificationHash|string|The specification hash that was set (an IPFS hash).|
|TaskBriefSet|object|Contains the data defined in [TaskBriefSet](#eventstaskbriefsetaddlistener-taskid-specificationhash-------)|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `setTaskDomain.startOperation({ taskId, domainId })`

Set the domain of a task. Every task must belong to a domain. This function can only be called by the user assigned the `MANAGER` task role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|domainId|number|The numeric ID of the domain.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|domainId|number|The numeric ID of the domain that was set.|
|TaskDomainSet|object|Contains the data defined in [TaskDomainSet](#eventstaskdomainsetaddlistener-taskid-domainid-------)|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `setTaskDueDate.startOperation({ taskId, dueDate })`

Set the due date of a task. The due date is the last day that the user assigned the `WORKER` task role can submit the task deliverable.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|dueDate|Date|The due date of the task.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|dueDate|Date|The due date that was set.|
|TaskDueDateSet|object|Contains the data defined in [TaskDueDateSet](#eventstaskduedatesetaddlistener-taskid-duedate-------)|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `setTaskEvaluatorRole.startOperation({ taskId, user })`

Assign the `EVALUATOR` task role to a user. This function can only be called before the task is finalized. The user assigned the `MANAGER` task role and the user being assigned the `EVALUATOR` task role must both sign the transaction before it can be executed.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|user|Address|The address that will be assigned the `EVALUATOR` task role.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|Address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleusersetaddlistener-taskid-role-user-------)|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `setTaskManagerRole.startOperation({ taskId, user })`

Assign the `MANAGER` task role to a user. This function can only be called before the task is finalized. The user currently assigned the `MANAGER` task role and the user being assigned the `MANAGER` task role must both sign the transaction before it can be executed.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|user|Address|The address that will be assigned the `MANANAGER` task role.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|Address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleusersetaddlistener-taskid-role-user-------)|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `setTaskSkill.startOperation({ taskId, skillId })`

Set the skill of a task. Only one skill can be assigned per task. The user assigned the `MANAGER` task role and the user assigned the `WORKER` task role must both sign this transaction before it can be executed.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|skillId|number|The numeric ID of the skill.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|skillId|number|The numeric ID of the skill that was set.|
|TaskSkillSet|object|Contains the data defined in [TaskSkillSet](#eventstaskskillsetaddlistener-taskid-skillid-------)|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `setTaskWorkerRole.startOperation({ taskId, user })`

Assign the `WORKER` task role to a user. This function can only be called before the task is finalized. The user assigned the `MANAGER` task role and the user being assigned the `WORKER` task role must both sign the transaction before it can be executed.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|user|Address|The address that will be assigned the `WORKER` task role.|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|Address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleusersetaddlistener-taskid-role-user-------)|

**Network Information**


  
  - Contract: `ColonyTask.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `setTaskManagerPayout.startOperation({ taskId, token, amount })`

Set the payout amount for the `MANAGER` task role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|token|Token address|The address of the token contract (an empty address if Ether).|
|amount|BigNumber|The payout amount in tokens (or Ether).|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|Token address|The address of the token contract (an empty address if Ether).|
|amount|BigNumber|The task payout amount that was set.|
|TaskPayoutSet|object|Contains the data defined in [TaskPayoutSet](#eventstaskpayoutsetaddlistener-taskid-role-token-amount-------)|

**Network Information**


  
  - Contract: `ColonyFunding.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `setTaskEvaluatorPayout.startOperation({ taskId, token, amount })`

Set the payout amount for the `EVALUATOR` task role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|token|Token address|The address of the token contract (an empty address if Ether).|
|amount|BigNumber|The payout amount in tokens (or Ether).|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|Token address|The address of the token contract (an empty address if Ether).|
|amount|BigNumber|The task payout amount that was set.|
|TaskPayoutSet|object|Contains the data defined in [TaskPayoutSet](#eventstaskpayoutsetaddlistener-taskid-role-token-amount-------)|

**Network Information**


  
  - Contract: `ColonyFunding.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

### `setTaskWorkerPayout.startOperation({ taskId, token, amount })`

Set the payout amount for the `WORKER` task role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task.|
|token|Token address|The address of the token contract (an empty address if Ether).|
|amount|BigNumber|The payout amount in tokens (or Ether).|

**Returns**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|Token address|The address of the token contract (an empty address if Ether).|
|amount|BigNumber|The task payout amount that was set.|
|TaskPayoutSet|object|Contains the data defined in [TaskPayoutSet](#eventstaskpayoutsetaddlistener-taskid-role-token-amount-------)|

**Network Information**


  
  - Contract: `ColonyFunding.sol`
  - Interface: `IColony.sol`
  - Version: `0`
  

  
## Events

Refer to the `ContractEvent` class [here](/colonyjs/docs-contractclient/#events) to interact with these events.


### `events.ColonyAdminRoleRemoved.addListener(({ user }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|The address that was unassigned the `ADMIN` authority role.|


### `events.ColonyAdminRoleSet.addListener(({ user }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|The address that was assigned the `ADMIN` authority role.|


### `events.ColonyBootstrapped.addListener(({ users, amounts }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|users|undefined|The array of users that received an initial amount of tokens and reputation.|
|amounts|undefined|The array of corresponding token and reputation amounts each user recieved.|


### `events.ColonyFounderRoleSet.addListener(({ oldFounder, newFounder }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|oldFounder|Address|The address that assigned the `FOUNDER` authority role (the old founder).|
|newFounder|Address|The address that was assigned the `FOUNDER` authority role (the new founder).|


### `events.ColonyFundsClaimed.addListener(({ token, fee, payoutRemainder }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|Address|The address of the token contract (an empty address if Ether).|
|fee|BigNumber|The fee deducted from the claim and added to the colony rewards pot.|
|payoutRemainder|BigNumber|The remaining funds (after the fee) moved to the top-level domain pot.|


### `events.ColonyFundsMovedBetweenFundingPots.addListener(({ fromPot, toPot, amount, token }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|fromPot|number|The numeric ID of the pot from which the funds were moved.|
|toPot|number|The numeric ID of the pot to which the funds were moved.|
|amount|BigNumber|The amount of funds that were moved between pots.|
|token|Address|The address of the token contract (an empty address if Ether).|


### `events.ColonyInitialised.addListener(({ colonyNetwork }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|colonyNetwork|Address|The address of the Colony Network.|


### `events.ColonyLabelRegistered.addListener(({ colony, label }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|colony|Address|The address of the colony that was modified.|
|label|string|The label that was registered for the colony.|


### `events.ColonyRewardInverseSet.addListener(({ rewardInverse }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|rewardInverse|BigNumber|The reward inverse value that was set.|


### `events.ColonyUpgraded.addListener(({ oldVersion, newVersion }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|oldVersion|number|The old version number of the colony.|
|newVersion|number|The new version number of the colony.|


### `events.DomainAdded.addListener(({ domainId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|domainId|number|The numeric ID of the domain that was added.|


### `events.Mint.addListener(({ address, amount }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|address|Address|The address that initiated the mint event.|
|amount|BigNumber|The amount of tokens that were minted.|


### `events.PotAdded.addListener(({ potId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|potId|number|The numeric ID of the pot that was added.|


### `events.RewardPayoutClaimed.addListener(({ rewardPayoutId, user, fee, payoutRemainder }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|rewardPayoutId|number|The numeric ID of the reward payout cycle.|
|user|Address|The address of the user who claimed the reward payout.|
|fee|BigNumber|The fee deducted from the claim and added to the colony rewards pot.|
|payoutRemainder|BigNumber|The remaining payout amount (after the fee) transferred to the user.|


### `events.RewardPayoutCycleEnded.addListener(({ payoutId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|payoutId|number|The numeric ID of the payout cycle that ended.|


### `events.RewardPayoutCycleStarted.addListener(({ payoutId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|payoutId|number|The numeric ID of the payout cycle that started.|


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


### `events.TaskCanceled.addListener(({ taskId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was canceled.|


### `events.TaskCompleted.addListener(({ taskId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was completed.|


### `events.TaskDeliverableSubmitted.addListener(({ taskId, deliverableHash }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|deliverableHash|IPFS hash|The deliverable hash that was submitted (an IPFS hash).|


### `events.TaskDomainSet.addListener(({ taskId, domainId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|domainId|number|The numeric ID of the domain that was set.|


### `events.TaskDueDateSet.addListener(({ taskId, dueDate }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|dueDate|Date|The due date that was set.|


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


### `events.TaskPayoutSet.addListener(({ taskId, role, token, amount }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|Token address|The address of the token contract (an empty address if Ether).|
|amount|BigNumber|The task payout amount that was set.|


### `events.TaskRoleUserSet.addListener(({ taskId, role, user }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|Address|The user that was assigned the task role.|


### `events.TaskSkillSet.addListener(({ taskId, skillId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|skillId|number|The numeric ID of the skill that was set.|


### `events.TaskWorkRatingRevealed.addListener(({ taskId, role, rating }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|taskId|number|The numeric ID of the task that was modified.|
|role|Role|The role of the task that received the rating (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|rating|number|The value of the rating that was revealed (`1`, `2`, or `3`).|


### `events.Transfer.addListener(({ from, to, value }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|from|Address|The address of the account that sent tokens.|
|to|Address|The address of the account that received tokens.|
|value|BigNumber|The amount of tokens that were transferred.|