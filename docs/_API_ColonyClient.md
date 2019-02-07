---
title: ColonyClient
section: API
order: 1
tocdepth: 1
---

The `ColonyClient` class is a standard interface for interactions with the methods and events described in both `IColony.sol` and `IMetaColony.sol`. These interactions are generally concerned with actions within a colony, such as adding a new domain, creating a task, moving funds between pots, and managing permissions.

==TOC==

## Initialize

The easiest way to initialize the `ColonyClient` is to ask the `ColonyNetworkClient` for a new instance:

```js

const colonyClient = await networkClient.getColonyClient(colonyId);

```

You _could_ also create an instance of `ColonyClient` by providing an [adapter](/colonyjs/components-adapters) and a query:

```js

const colonyClient = new ColonyClient({ adapter, query });

await colonyClient.init();

```

  
## Callers

**All callers return promises which resolve to an object containing the given return values.**.

### `generateSecret.call({ salt, value })`

Generate the rating secret used in task ratings. This function returns a keccak256 hash created from the `salt` and `value`.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|salt|string|The string that will be used to generate a secret.|
|value|number|The task rating that will be hidden (`1`, `2`, or `3`).|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|secret|hex string|A keccak256 hash that keeps the task rating hidden.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getAuthority.call()`

Get the authority contract address associated with the colony.


#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|address|address|The address of the authority contract associated with the colony.|

#### Contract Information


<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Function: `authority`
  - Contract: [auth.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/auth.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  Function: `authority`
  
Contract: [auth.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/auth.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getDomain.call({ domainId })`

Get information about a domain.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|domainId|number|The ID of the domain.|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|localSkillId|number|The ID of the local skill.|
|potId|number|The ID of the funding pot.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/Colony.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getDomainCount.call()`

Get the total number of domains in the colony. The return value is also the ID of the last domain created.


#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|count|number|The total number of domains.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/Colony.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getNonRewardPotsTotal.call({ token })`

Get the total amount of funds that are not in the colony rewards pot. The total amount of funds that are not in the colony rewards pot is a value that keeps track of the total assets a colony has to work with, which may be split among several distinct pots associated with various domains and tasks.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|total|big number|The total amount of funds that are not in the colony rewards pot.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyFunding.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getFundingPot.call({ potId })`

Get information about a funding pot.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|potId|number|The numeric ID of the funding pot.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|associatedType|string|The associated type of the funding pot (`domain` or `task`).|
|associatedTypeId|number|The id of the associated type (`domainId` or `taskId`).|

**Contract Information**


  
  - Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyFunding.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
  

### `getFundingPotBalance.call({ potId, token })`

Get the balance of a funding pot.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|potId|number|The ID of the funding pot.|
|token|address|The address of the token contract (an empty address if Ether).|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|balance|big number|The balance of tokens (or Ether) in the funding pot.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyFunding.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
  

### `getFundingPotCount.call()`

Get the total number of funding pots.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|The total number of funding pots.|

**Contract Information**


  
  - Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyFunding.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getRecoveryRolesCount.call()`

Get the total number of users that are assigned a colony recovery role.


#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|count|number|The total number of users that are assigned a colony recovery role.|

#### Contract Information


<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Function: `numRecoveryRoles`
  - Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ContractRecovery.sol)
  - Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IRecovery.sol)
=======
  Function: `numRecoveryRoles`
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IRecovery.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getRewardInverse.call()`

Get the inverse amount of the reward. If the fee is 1% (or 0.01), the inverse amount will be 100.


#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|rewardInverse|big number|The inverse amount of the reward.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyFunding.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getRewardPayoutInfo.call({ payoutId })`

Get information about a reward payout cycle.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|payoutId|number|The ID of the reward payout cycle.|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|blockNumber|number|The block number at the time the reward payout cycle started.|
|remainingTokenAmount|big number|The remaining amount of unclaimed tokens (or Ether).|
|reputationRootHash|string|The reputation root hash at the time the reward payout cycle started.|
|token|address|The address of the token contract (an empty address if Ether).|
|totalTokenAmountForRewardPayout|big number|The total amount of tokens set aside for the reward payout cycle.|
|totalTokens|big number|The total amount of tokens at the time the reward payout cycle started.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyFunding.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getTask.call({ taskId })`

Get information about a task.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|completionDate|date|The date when the task deliverable was submitted.|
|deliverableHash|IPFS hash|The deliverable hash of the task (an IPFS hash).|
|domainId|number|The ID of the domain.|
|dueDate|date|The final date that the task deliverable can be submitted.|
|id|number|The ID of the task.|
|payoutsWeCannotMake|number|The number of payouts that cannot be completed (`0` or `1`). If this value is `1`, it means that the funding pot associated with the task does not have enough funds to perform the task payouts, i.e. the total amount for the three task payouts is more than the total balance of the funding pot associated with the task.|
|potId|number|The ID of the funding pot.|
|skillId|number|The ID of the skill.|
|specificationHash|IPFS hash|The specification hash of the task (an IPFS hash).|
|status|task status|The task status (`ACTIVE`, `CANCELLED` or `FINALIZED`).|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getTaskCount.call()`

Get the total number of tasks in the colony. The return value is also the ID of the last task created.


#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|count|number|The total number of tasks.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getTaskPayout.call({ taskId, role, token })`

Get the task payout amount assigned to a task role. Multiple tokens can be used for task payouts, therefore the token must be specified when calling this function. In order to get the task payout amount in Ether, `token` must be an empty address.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|role|task role|The task role (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|address|The address of the token contract (an empty address if Ether).|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|amount|big number|The amount of tokens (or Ether) assigned to the task role as a payout.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyFunding.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getTaskRole.call({ taskId, role })`

Get information about a task role.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|role|task role|The role of the task (`MANAGER`, `EVALUATOR`, or `WORKER`).|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|address|address|The address of the user that is assigned the task role.|
|rateFail|boolean|A boolean indicating whether or not the user failed to rate their counterpart.|
|rating|number|The rating that the user received (`1`, `2`, or `3`).|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getTaskWorkRatings.call({ taskId })`

Get information about the ratings of a task.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|count|number|The total number of submitted ratings for a task.|
|date|date|The date that the last rating was submitted.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getTaskWorkRatingSecret.call({ taskId, role })`

Get the secret of a rating that has been submitted. If a task is in the commit period of the rating process, the ratings are hidden in a keccak256 hash that was created from a `salt` and `value`. The rating secret can be retrieved but in order to reveal the secret, one would have to know both the `salt` and `value` used to generate the secret.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|role|task role|The role that submitted the rating (`MANAGER`, `EVALUATOR`, or `WORKER`).|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|secret|hex string|A keccak256 hash that keeps the task rating hidden.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getToken.call()`

Get the address of the token contract that is the native token assigned to the colony. The native token is the token used to calculate reputation scores, i.e. `1` token earned for completing a task with an adequate rating (`2`) will result in `1` reputation point earned.


#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|address|address|The address of the token contract.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/Colony.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getTotalTaskPayout.call({ taskId, token })`

Get the total payout amount assigned to all task roles. Multiple tokens can be used for task payouts, therefore the token must be specified when calling this function. In order to get the task payout amount in Ether, `token` must be an empty address.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|token|address|The address of the token contract (an empty address if Ether).|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|amount|big number|The total amount of tokens (or Ether) assigned to all task roles as payouts.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyFunding.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getVersion.call()`

Get the version number of the colony contract. The version number starts at `1` and is incremented by `1` with every new version.


#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|version|number|The version number of the colony contract.|

#### Contract Information


<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Function: `version`
  - Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/Colony.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  Function: `version`
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `hasUserRole.call({ user, role })`

Check whether a user has an authority role.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|user|address|The address of the user that will be checked.|
|role|authority role|The authority role that will be checked (`FOUNDER` or `ADMIN`).|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|hasRole|boolean|A boolean indicating whether or not the user has the authority role.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/Colony.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `isInRecoveryMode.call()`

Check whether or not the colony is in recovery mode.


#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|inRecoveryMode|boolean|A boolean indicating whether or not the colony is in recovery mode.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ContractRecovery.sol)
  - Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IRecovery.sol)
=======
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IRecovery.sol)
>>>>>>> Verious fixes to API docs and docgen
  

  
## Senders

**All senders return an instance of a `ContractResponse`.** Every `send()` method takes an `options` object as the second argument.
### `addDomain.send({ parentDomainId }, options)`

Add a domain to the colony. Adding new domains is currently retricted to one level, i.e. the `parentDomainId` must be the id of the root domain `1`, which represents the colony itself.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|parentDomainId|number|The ID of the parent domain.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|domainId|number|The ID of the domain that was added.|
|potId|number|The ID of the pot that was added.|
|skillId|number|The ID of the skill that was added.|
|parentSkillId|number|The ID of the parent skill.|
|DomainAdded|object|Contains the data defined in [DomainAdded](#eventsdomainaddedaddlistener-domainid-------)|
|FundingPotAdded|object|Contains the data defined in [FundingPotAdded](#eventsfundingpotaddedaddlistener-potid-------)|
|SkillAdded|object|Contains the data defined in [SkillAdded](#eventsskilladdedaddlistener-skillid-parentskillid-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/Colony.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `addGlobalSkill.send({ parentSkillId }, options)`

Add a new global skill to the skills tree. This can only be called from the Meta Colony and only by the user assigned the `FOUNDER` role.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|parentSkillId|number|The ID of the skill under which the new skill will be added.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|skillId|number|The ID of the skill that was added.|
|parentSkillId|number|The ID of the parent skill.|
|SkillAdded|object|Contains the data defined in [SkillAdded](#eventsskilladdedaddlistener-skillid-parentskillid-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/Colony.sol)
  - Interface: [IMetaColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IMetaColony.sol)
=======
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/Colony.sol)
  
Interface: [IMetaColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IMetaColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `approveExitRecovery.send(options)`

Indicate approval to exit colony recovery mode. This function can only be called by a user with a recovery role.


#### Response

An instance of a `ContractResponse`



#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ContractRecovery.sol)
  - Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IRecovery.sol)
=======
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IRecovery.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `bootstrapColony.send({ users, amounts }, options)`

Bootstrap the colony by giving an initial amount of tokens and reputation to selected users. This function can only be called by the user assigned the `FOUNDER` authority role when the `taskCount` for the colony is equal to `0`.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|users|array|The array of users that will recieve an initial amount of tokens and reputation.|
|amounts|array|The array of corresponding token and reputation amounts each user will recieve.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|users|array|The array of users that received an initial amount of tokens and reputation.|
|amounts|array|The array of corresponding token and reputation amounts each user recieved.|
|ColonyBootstrapped|object|Contains the data defined in [ColonyBootstrapped](#eventscolonybootstrappedaddlistener-users-amounts-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/Colony.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `claimColonyFunds.send({ token }, options)`

Claim funds that the colony has received by adding them to the funding pot of the root domain. A small fee is deducted from the funds claimed and added to the colony rewards pot. No fee is deducted when tokens native to the colony are claimed.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|
|fee|big number|The fee deducted from the claim and added to the colony rewards pot.|
|payoutRemainder|big number|The remaining funds (after the fee) moved to the top-level domain pot.|
|ColonyFundsClaimed|object|Contains the data defined in [ColonyFundsClaimed](#eventscolonyfundsclaimedaddlistener-token-fee-payoutremainder-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyFunding.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `claimPayout.send({ taskId, role, token }, options)`

Claim the payout assigned to a task role. This function can only be called by the user who is assigned a task role (`MANAGER`, `EVALUATOR`, or `WORKER`) after the task has been finalized.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|role|task role|The role that submitted the rating (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|address|The address of the token contract (an empty address if Ether).|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was assigned the task payout (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|address|The address of the token contract (an empty address if Ether).|
|amount|big number|The task payout amount that was claimed.|
|from|address|The address of the account that sent tokens.|
|to|address|The address of the account that received tokens.|
|value|big number|The amount of tokens that were transferred.|
|TaskPayoutClaimed|object|Contains the data defined in [TaskPayoutClaimed](#eventstaskpayoutclaimedaddlistener-taskid-role-token-amount-------)|
|Transfer|object|Contains the data defined in [Transfer](#eventstransferaddlistener-from-to-value-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyFunding.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `completeTask.send({ taskId }, options)`

Mark a task as complete. If the user assigned the `WORKER` task role fails to submit the task deliverable by the due date, this function must be called by the user assigned the `MANAGER` task role. This allows the task work to be rated and the task to be finalized.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was completed.|
|TaskCompleted|object|Contains the data defined in [TaskCompleted](#eventstaskcompletedaddlistener-taskid-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `createTask.send({ specificationHash, domainId, skillId, dueDate }, options)`

Create a new task within the colony.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|specificationHash|IPFS hash|The specification hash of the task (an IPFS hash).|
|domainId|number (optional)|The ID of the domain (default value of `1`).|
|skillId|number (optional)|The ID of the skill (default value of `null`).|
|dueDate|date (optional)|The due date of the task (default value of `30` days from creation).|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|potId|number|The ID of the pot that was added.|
|taskId|number|The ID of the task that was added.|
|skillId|number|The ID of the skill that was set.|
|dueDate|date|The due date that was set.|
|FundingPotAdded|object|Contains the data defined in [FundingPotAdded](#eventsfundingpotaddedaddlistener-potid-------)|
|TaskAdded|object|Contains the data defined in [TaskAdded](#eventstaskaddedaddlistener-taskid-------)|
|TaskSkillSet|object|Contains the data defined in [TaskSkillSet](#eventstaskskillsetaddlistener-taskid-skillid-------)|
|TaskDueDateSet|object|Contains the data defined in [TaskDueDateSet](#eventstaskduedatesetaddlistener-taskid-duedate-------)|

#### Contract Information


<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Function: `makeTask`
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  Function: `makeTask`
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `enterRecoveryMode.send(options)`

Enter colony recovery mode. This function can only be called by a user with a recovery role.


#### Response

An instance of a `ContractResponse`



#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ContractRecovery.sol)
  - Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IRecovery.sol)
=======
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IRecovery.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `exitRecoveryMode.send(options)`

Exit colony recovery mode. This function can be called by anyone if enough whitelist approvals are given.


#### Response

An instance of a `ContractResponse`



#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ContractRecovery.sol)
  - Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IRecovery.sol)
=======
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IRecovery.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `finalizeRewardPayout.send({ payoutId }, options)`

Finalize the reward payout cycle. This function can only be called when the reward payout cycle has finished, i.e. 60 days have passed since the creation of the reward payout cycle.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|payoutId|number|The ID of the reward payout cycle.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|payoutId|number|The ID of the payout cycle that ended.|
|RewardPayoutCycleEnded|object|Contains the data defined in [RewardPayoutCycleEnded](#eventsrewardpayoutcycleendedaddlistener-payoutid-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyFunding.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `finalizeTask.send({ taskId }, options)`

Finalize a task. Once a task is finalized, each user assigned a task role can claim the payout assigned to their role and no further changes to the task can be made.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was finalized.|
|TaskFinalized|object|Contains the data defined in [TaskFinalized](#eventstaskfinalizedaddlistener-taskid-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
  

### `makePayment.send({ worker, token, amount, domainId, skillId }, options)`

Make a payment. This function can only be called by the user assigned either the `FOUNDER` or `ADMIN` authority role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|worker|address||
|token|address||
|amount|big number||
|domainId|number||
|skillId|number||

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|potId|number|The numeric ID of the pot that was added.|
|taskId|number|The numeric ID of the task that was added.|
|taskId|number|The numeric ID of the task that was modified.|
|skillId|number|The numeric ID of the skill that was set.|
|taskId|number|The numeric ID of the task that was modified.|
|dueDate|date|The due date that was set.|
|taskId|number|The numeric ID of the task that was modified.|
|role|task role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|address|The user that was assigned the task role.|
|taskId|number|The numeric ID of the task that was modified.|
|role|task role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|address|The address of the token contract (an empty address if Ether).|
|amount|big number|The task payout amount that was set.|
|fromPot|number|The numeric ID of the pot from which the funds were moved.|
|toPot|number|The numeric ID of the pot to which the funds were moved.|
|amount|big number|The amount of funds that were moved between pots.|
|token|address|The address of the token contract (an empty address if Ether).|
|taskId|number|The numeric ID of the task that was modified.|
|role|task role|The role of the task that was assigned the task payout (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|address|The address of the token contract (an empty address if Ether).|
|amount|big number|The task payout amount that was claimed.|
|from|address|The address of the account that sent tokens.|
|to|address|The address of the account that received tokens.|
|value|big number|The amount of tokens that were transferred.|
|FundingPotAdded|object|Contains the data defined in [FundingPotAdded](#eventsfundingpotaddedaddlistener-potid-------)|
|TaskAdded|object|Contains the data defined in [TaskAdded](#eventstaskaddedaddlistener-taskid-------)|
|TaskSkillSet|object|Contains the data defined in [TaskSkillSet](#eventstaskskillsetaddlistener-taskid-skillid-------)|
|TaskDueDateSet|object|Contains the data defined in [TaskDueDateSet](#eventstaskduedatesetaddlistener-taskid-duedate-------)|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleusersetaddlistener-taskid-role-user-------)|
|TaskPayoutSet|object|Contains the data defined in [TaskPayoutSet](#eventstaskpayoutsetaddlistener-taskid-role-token-amount-------)|
|ColonyFundsMovedBetweenFundingPots|object|Contains the data defined in [ColonyFundsMovedBetweenFundingPots](#eventscolonyfundsmovedbetweenfundingpotsaddlistener-frompot-topot-amount-token-------)|
|TaskPayoutClaimed|object|Contains the data defined in [TaskPayoutClaimed](#eventstaskpayoutclaimedaddlistener-taskid-role-token-amount-------)|
|Transfer|object|Contains the data defined in [Transfer](#eventstransferaddlistener-from-to-value-------)|

**Contract Information**


  
  - Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ContractRecovery.sol)
  - Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IRecovery.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `mintTokens.send({ amount }, options)`

Mint new tokens. This function can only be called if the address of the colony contract is the owner of the token contract. If this is the case, then this function can only be called by the user assigned the `FOUNDER` authority role.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|amount|big number|The amount of new tokens that will be minted.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|address|address|The address that initiated the mint event.|
|amount|big number|The amount of tokens that were minted.|
|Mint|object|Contains the data defined in [Mint](#eventsmintaddlistener-address-amount-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/Colony.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `mintTokensForColonyNetwork.send({ amount }, options)`

Mint tokens for the Colony Network. This can only be called from the Meta Colony and only by the user assigned the `FOUNDER` role.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|amount|big number|The amount of new tokens that will be minted.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|address|address|The address that initiated the mint event.|
|amount|big number|The amount of tokens that were minted.|
|from|address|The address of the account that sent tokens.|
|to|address|The address of the account that received tokens.|
|value|big number|The amount of tokens that were transferred.|
|Mint|object|Contains the data defined in [Mint](#eventsmintaddlistener-address-amount-------)|
|Transfer|object|Contains the data defined in [Transfer](#eventstransferaddlistener-from-to-value-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/Colony.sol)
  - Interface: [IMetaColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IMetaColony.sol)
=======
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/Colony.sol)
  
Interface: [IMetaColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IMetaColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `moveFundsBetweenPots.send({ fromPot, toPot, amount, token }, options)`

Move funds from one pot to another.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|fromPot|number|The ID of the pot from which funds will be moved.|
|toPot|number|The ID of the pot to which funds will be moved.|
|amount|big number|The amount of funds that will be moved between pots.|
|token|address|The address of the token contract (an empty address if Ether).|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|fromPot|number|The ID of the pot from which the funds were moved.|
|toPot|number|The ID of the pot to which the funds were moved.|
|amount|big number|The amount of funds that were moved between pots.|
|token|address|The address of the token contract (an empty address if Ether).|
|ColonyFundsMovedBetweenFundingPots|object|Contains the data defined in [ColonyFundsMovedBetweenFundingPots](#eventscolonyfundsmovedbetweenfundingpotsaddlistener-frompot-topot-amount-token-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyFunding.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `registerColonyLabel.send({ colonyName, orbitDBPath }, options)`

Register an ENS label for the colony.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|colonyName|string|The ENS label that will be registered for the colony.|
|orbitDBPath|string|The path of the OrbitDB database associated with the colony.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|colony|address|The address of the colony that was modified.|
|label|string|The label that was registered for the colony.|
|ColonyLabelRegistered|object|Contains the data defined in [ColonyLabelRegistered](#eventscolonylabelregisteredaddlistener-colony-label-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/Colony.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `removeAdminRole.send({ user }, options)`

Remove the `ADMIN` authority role from a user. This function can only be called by the user assigned the `FOUNDER` authroity role.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|user|address|The address that we will be unassigned the `ADMIN` authority role.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|user|address|The address that was unassigned the `ADMIN` authority role.|
|ColonyAdminRoleRemoved|object|Contains the data defined in [ColonyAdminRoleRemoved](#eventscolonyadminroleremovedaddlistener-user-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/Colony.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `removeRecoveryRole.send({ user }, options)`

Remove the colony recovery role from a user. This function can only be called by the `FOUNDER` authority role.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|user|address|The address that will be unassigned a colony recovery role.|

#### Response

An instance of a `ContractResponse`



#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ContractRecovery.sol)
  - Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IRecovery.sol)
=======
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IRecovery.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `revealTaskWorkRating.send({ taskId, role, rating, salt }, options)`

Reveal a submitted work rating. In order to reveal a work rating, the same `salt` and `value` used to generate the `secret` when the task work rating was submitted must be provided again here to reveal the task work rating.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|role|task role|The role that received the rating (`MANAGER` or `WORKER`).|
|rating|number|The rating that was submitted (`1`, `2`, or `3`).|
|salt|string|The string that was used to generate the secret.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that received the rating (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|rating|number|The value of the rating that was revealed (`1`, `2`, or `3`).|
|TaskWorkRatingRevealed|object|Contains the data defined in [TaskWorkRatingRevealed](#eventstaskworkratingrevealedaddlistener-taskid-role-rating-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `setAdminRole.send({ user }, options)`

Assign the `ADMIN` authority role to a user. This function can only be called by the user assigned the `FOUNDER` authority role or a user assigned the `ADMIN` authority role. There is no limit to the number of users that can be assigned the `ADMIN` authority role.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|user|address|The address that will be assigned the `ADMIN` authroity role.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|user|address|The address that was assigned the `ADMIN` authority role.|
|ColonyAdminRoleSet|object|Contains the data defined in [ColonyAdminRoleSet](#eventscolonyadminrolesetaddlistener-user-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/Colony.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `setAllTaskPayouts.send({ taskId, token, managerAmount, evaluatorAmount, workerAmount }, options)`

Set the payouts for all task roles (`MANAGER`, `EVALUATOR`, and `WORKER`). This can only be called by the user assigned the `MANAGER` task role and only if the `EVALUATOR` and `WORKER` task roles are either not assigned or assigned to the same user as the `MANAGER` task role.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|token|address|The address of the token contract (an empty address if Ether).|
|managerAmount|big number|The payout amount in tokens (or Ether) for the `MANAGER` task role.|
|evaluatorAmount|big number|The payout amount in tokens (or Ether) for the `EVALUATOR` task role.|
|workerAmount|big number|The payout amount in tokens (or Ether) for the `WORKER` task role.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|address|The address of the token contract (an empty address if Ether).|
|amount|big number|The task payout amount that was set.|
|TaskPayoutSet|object|Contains the data defined in [TaskPayoutSet](#eventstaskpayoutsetaddlistener-taskid-role-token-amount-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyFunding.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `setFounderRole.send({ user }, options)`

Assign the `FOUNDER` authority role to a user. This function can only be called by the user currently assigned the `FOUNDER` authority role. There can only be one address assigned to the `FOUNDER` authority role, therefore, the user currently assigned will forfeit their role.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|user|address|The address that will be assigned the `FOUNDER` authority role.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|oldFounder|address|The address that assigned the `FOUNDER` authority role (the old founder).|
|newFounder|address|The address that was assigned the `FOUNDER` authority role (the new founder).|
|ColonyFounderRoleSet|object|Contains the data defined in [ColonyFounderRoleSet](#eventscolonyfounderrolesetaddlistener-oldfounder-newfounder-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/Colony.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `setNetworkFeeInverse.send({ feeInverse }, options)`

Set the inverse amount of the reward. This can only be called from the Meta Colony and only by the user assigned the `FOUNDER` role. If the fee is 1% (or 0.01), the inverse amount will be 100.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|feeInverse|number|The inverse amount that will be set.|

#### Response

An instance of a `ContractResponse`



#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/Colony.sol)
  - Interface: [IMetaColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IMetaColony.sol)
=======
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/Colony.sol)
  
Interface: [IMetaColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IMetaColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `setRecoveryRole.send({ user }, options)`

Assign a colony recovery role to a user. This function can only be called by the `FOUNDER` authority role.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|user|address|The address that will be assigned a colony recovery role.|

#### Response

An instance of a `ContractResponse`



#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ContractRecovery.sol)
  - Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IRecovery.sol)
=======
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IRecovery.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `setRewardInverse.send({ rewardInverse }, options)`

Set the inverse amount of the reward. If the fee is 1% (or 0.01), the inverse amount will be 100.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|rewardInverse|big number|The inverse amount of the reward.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|rewardInverse|big number|The reward inverse value that was set.|
|ColonyRewardInverseSet|object|Contains the data defined in [ColonyRewardInverseSet](#eventscolonyrewardinversesetaddlistener-rewardinverse-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyFunding.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `setStorageSlotRecovery.send({ slot, value }, options)`

Set the value for a storage slot while in recovery mode. This can only be called by a user with a recovery role.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|slot|number|The ID of the storage slot that will be modified.|
|value|hex string|The hex string of data that will be set as the value.|

#### Response

An instance of a `ContractResponse`



#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ContractRecovery.sol)
  - Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IRecovery.sol)
=======
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IRecovery.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `startNextRewardPayout.send({ token }, options)`

Start the next reward payout cycle. All the funds in the colony rewards pot for the given token will become locked until reputation holders have claimed their rewards payout using `claimRewardPayout`. Reputation holders can also waive their reward payout and unlock their tokens for past reward payout cycles by using `incrementLockCounterTo`.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|payoutId|number|The ID of the payout cycle that started.|
|token|address|The address of the token contract (an empty address if Ether).|
|lockCount|number|The total lock count for the token.|
|RewardPayoutCycleStarted|object|Contains the data defined in [RewardPayoutCycleStarted](#eventsrewardpayoutcyclestartedaddlistener-payoutid-------)|
|TokenLocked|object|Contains the data defined in [TokenLocked](#eventstokenlockedaddlistener-token-lockcount-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyFunding.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `submitTaskDeliverable.send({ taskId, deliverableHash }, options)`

Submit the task deliverable. This function can only be called by the user assigned the `WORKER` task role on or before the task due date. The submission cannot be overwritten, which means the deliverable cannot be changed once it has been submitted.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|deliverableHash|IPFS hash|The deliverable hash of the task (an IPFS hash).|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was completed.|
|deliverableHash|IPFS hash|The deliverable hash that was submitted (an IPFS hash).|
|TaskCompleted|object|Contains the data defined in [TaskCompleted](#eventstaskcompletedaddlistener-taskid-------)|
|TaskDeliverableSubmitted|object|Contains the data defined in [TaskDeliverableSubmitted](#eventstaskdeliverablesubmittedaddlistener-taskid-deliverablehash-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `submitTaskDeliverableAndRating.send({ taskId, deliverableHash, secret }, options)`

Submit the task deliverable and the work rating for the user assigned the `MANAGER` task role. This function can only be called by the user assigned the `WORKER` task role on or before the task due date. The submission cannot be overwritten, which means the deliverable cannot be changed once it has been submitted. In order to submit a rating, a `secret` must be generated using the `generateSecret` method, which keeps the rating hidden until all ratings have been submitted and revealed.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|deliverableHash|IPFS hash|The deliverable hash of the task (an IPFS hash).|
|secret|hex string|A keccak256 hash that keeps the task rating hidden.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was completed.|
|deliverableHash|IPFS hash|The deliverable hash that was submitted (an IPFS hash).|
|TaskCompleted|object|Contains the data defined in [TaskCompleted](#eventstaskcompletedaddlistener-taskid-------)|
|TaskDeliverableSubmitted|object|Contains the data defined in [TaskDeliverableSubmitted](#eventstaskdeliverablesubmittedaddlistener-taskid-deliverablehash-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `submitTaskWorkRating.send({ taskId, role, secret }, options)`

Submit a work rating for a task. This function can only be called by the user assigned the `EVALUATOR` task role, who is submitting a rating for the user assigned the `WORKER` task role, or the user assigned the `WORKER` task role, who is submitting a rating for the user assigned the `MANAGER` task role. In order to submit a rating, a `secret` must be generated using the `generateSecret` method, which keeps the rating hidden until all ratings have been submitted and revealed.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|role|task role|The role that will receive the rating (`MANAGER` or `WORKER`).|
|secret|hex string|A keccak256 hash that keeps the task rating hidden.|

#### Response

An instance of a `ContractResponse`



#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `upgrade.send({ newVersion }, options)`

Upgrade the colony to a new contract version. The new version number must be higher than the current version. Downgrading to old contract versions is not permitted.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|newVersion|number|The version number of the colony contract.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|oldVersion|number|The old version number of the colony.|
|newVersion|number|The new version number of the colony.|
|ColonyUpgraded|object|Contains the data defined in [ColonyUpgraded](#eventscolonyupgradedaddlistener-oldversion-newversion-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/Colony.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

  
## MultiSigSenders

**All MultiSig functions return an instance of a `MultiSigOperation`.**
### `cancelTask.startOperation({ taskId })`

Cancel a task. Once a task is cancelled, no further changes to the task can be made.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|

#### Response

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was canceled.|
|TaskCanceled|object|Contains the data defined in [TaskCanceled](#eventstaskcanceledaddlistener-taskid-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `removeTaskEvaluatorRole.startOperation({ taskId })`

Remove the `EVALUATOR` task role assignment. This function can only be called before the task is complete, i.e. either before the deliverable has been submitted or the user assigned the `WORKER` task role has failed to meet the deadline and the user assigned the `MANAGER` task role has marked the task as complete.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|

#### Response

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleusersetaddlistener-taskid-role-user-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `removeTaskWorkerRole.startOperation({ taskId })`

Remove the `WORKER` task role assignment. This function can only be called before the task is complete, i.e. either before the deliverable has been submitted or the user assigned the `WORKER` task role has failed to meet the deadline and the user assigned the `MANAGER` task role has marked the task as complete.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|

#### Response

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleusersetaddlistener-taskid-role-user-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `setTaskBrief.startOperation({ taskId, specificationHash })`

Set the task specification. The task specification, or "task brief", is a description of the work that must be completed for the task. The description is hashed and stored with the task for future reference during the rating process or in the event of a dispute.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|specificationHash|IPFS hash|The specification hash of the task (an IPFS hash).|

#### Response

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|specificationHash|string|The specification hash that was set (an IPFS hash).|
|TaskBriefSet|object|Contains the data defined in [TaskBriefSet](#eventstaskbriefsetaddlistener-taskid-specificationhash-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `setTaskDomain.startOperation({ taskId, domainId })`

Set the domain of a task. Every task must belong to a domain. This function can only be called by the user assigned the `MANAGER` task role.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|domainId|number|The ID of the domain.|

#### Response

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|domainId|number|The ID of the domain that was set.|
|TaskDomainSet|object|Contains the data defined in [TaskDomainSet](#eventstaskdomainsetaddlistener-taskid-domainid-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `setTaskDueDate.startOperation({ taskId, dueDate })`

Set the due date of a task. The due date is the last day that the user assigned the `WORKER` task role can submit the task deliverable.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|dueDate|date|The due date of the task.|

#### Response

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|dueDate|date|The due date that was set.|
|TaskDueDateSet|object|Contains the data defined in [TaskDueDateSet](#eventstaskduedatesetaddlistener-taskid-duedate-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `setTaskEvaluatorRole.startOperation({ taskId, user })`

Assign the `EVALUATOR` task role to a user. This function can only be called before the task is finalized. The user assigned the `MANAGER` task role and the user being assigned the `EVALUATOR` task role must both sign the transaction before it can be executed.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|user|address|The address that will be assigned the `EVALUATOR` task role.|

#### Response

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleusersetaddlistener-taskid-role-user-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `setTaskManagerRole.startOperation({ taskId, user })`

Assign the `MANAGER` task role to a user. This function can only be called before the task is finalized. The user currently assigned the `MANAGER` task role and the user being assigned the `MANAGER` task role must both sign the transaction before it can be executed.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|user|address|The address that will be assigned the `MANANAGER` task role.|

#### Response

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleusersetaddlistener-taskid-role-user-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `setTaskSkill.startOperation({ taskId, skillId })`

Set the skill of a task. Only one skill can be assigned per task. The user assigned the `MANAGER` task role and the user assigned the `WORKER` task role must both sign this transaction before it can be executed.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|skillId|number|The ID of the skill.|

#### Response

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|skillId|number|The ID of the skill that was set.|
|TaskSkillSet|object|Contains the data defined in [TaskSkillSet](#eventstaskskillsetaddlistener-taskid-skillid-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `setTaskWorkerRole.startOperation({ taskId, user })`

Assign the `WORKER` task role to a user. This function can only be called before the task is finalized. The user assigned the `MANAGER` task role and the user being assigned the `WORKER` task role must both sign the transaction before it can be executed.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|user|address|The address that will be assigned the `WORKER` task role.|

#### Response

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleusersetaddlistener-taskid-role-user-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyTask.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `setTaskManagerPayout.startOperation({ taskId, token, amount })`

Set the payout amount for the `MANAGER` task role.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|token|address|The address of the token contract (an empty address if Ether).|
|amount|big number|The payout amount in tokens (or Ether).|

#### Response

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|address|The address of the token contract (an empty address if Ether).|
|amount|big number|The task payout amount that was set.|
|TaskPayoutSet|object|Contains the data defined in [TaskPayoutSet](#eventstaskpayoutsetaddlistener-taskid-role-token-amount-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyFunding.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `setTaskEvaluatorPayout.startOperation({ taskId, token, amount })`

Set the payout amount for the `EVALUATOR` task role.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|token|address|The address of the token contract (an empty address if Ether).|
|amount|big number|The payout amount in tokens (or Ether).|

#### Response

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|address|The address of the token contract (an empty address if Ether).|
|amount|big number|The task payout amount that was set.|
|TaskPayoutSet|object|Contains the data defined in [TaskPayoutSet](#eventstaskpayoutsetaddlistener-taskid-role-token-amount-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyFunding.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `setTaskWorkerPayout.startOperation({ taskId, token, amount })`

Set the payout amount for the `WORKER` task role.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|token|address|The address of the token contract (an empty address if Ether).|
|amount|big number|The payout amount in tokens (or Ether).|

#### Response

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|address|The address of the token contract (an empty address if Ether).|
|amount|big number|The task payout amount that was set.|
|TaskPayoutSet|object|Contains the data defined in [TaskPayoutSet](#eventstaskpayoutsetaddlistener-taskid-role-token-amount-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyFunding.sol)
  - Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColony.sol)
=======
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColony.sol)
>>>>>>> Verious fixes to API docs and docgen
  

  
## Events


### `events.ColonyAdminRoleRemoved.addListener(({ user }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|user|address|The address that was unassigned the `ADMIN` authority role.|


### `events.ColonyAdminRoleSet.addListener(({ user }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|user|address|The address that was assigned the `ADMIN` authority role.|


### `events.ColonyBootstrapped.addListener(({ users, amounts }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|users|array|The array of users that received an initial amount of tokens and reputation.|
|amounts|array|The array of corresponding token and reputation amounts each user recieved.|


### `events.ColonyFounderRoleSet.addListener(({ oldFounder, newFounder }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|oldFounder|address|The address that assigned the `FOUNDER` authority role (the old founder).|
|newFounder|address|The address that was assigned the `FOUNDER` authority role (the new founder).|


### `events.ColonyFundsClaimed.addListener(({ token, fee, payoutRemainder }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|
|fee|big number|The fee deducted from the claim and added to the colony rewards pot.|
|payoutRemainder|big number|The remaining funds (after the fee) moved to the top-level domain pot.|


### `events.ColonyFundsMovedBetweenFundingPots.addListener(({ fromPot, toPot, amount, token }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|fromPot|number|The ID of the pot from which the funds were moved.|
|toPot|number|The ID of the pot to which the funds were moved.|
|amount|big number|The amount of funds that were moved between pots.|
|token|address|The address of the token contract (an empty address if Ether).|


### `events.ColonyInitialised.addListener(({ colonyNetwork }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|colonyNetwork|address|The address of the Colony Network.|


### `events.ColonyLabelRegistered.addListener(({ colony, label }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|colony|address|The address of the colony that was modified.|
|label|string|The label that was registered for the colony.|


### `events.ColonyRewardInverseSet.addListener(({ rewardInverse }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|rewardInverse|big number|The reward inverse value that was set.|


### `events.ColonyUpgraded.addListener(({ oldVersion, newVersion }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|oldVersion|number|The old version number of the colony.|
|newVersion|number|The new version number of the colony.|


### `events.DomainAdded.addListener(({ domainId }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|domainId|number|The ID of the domain that was added.|


### `events.Mint.addListener(({ address, amount }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|address|address|The address that initiated the mint event.|
|amount|big number|The amount of tokens that were minted.|


### `events.FundingPotAdded.addListener(({ potId }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|potId|number|The ID of the pot that was added.|


### `events.RewardPayoutClaimed.addListener(({ rewardPayoutId, user, fee, payoutRemainder }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|rewardPayoutId|number|The ID of the reward payout cycle.|
|user|address|The address of the user who claimed the reward payout.|
|fee|big number|The fee deducted from the claim and added to the colony rewards pot.|
|payoutRemainder|big number|The remaining payout amount (after the fee) transferred to the user.|


### `events.RewardPayoutCycleEnded.addListener(({ payoutId }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|payoutId|number|The ID of the payout cycle that ended.|


### `events.RewardPayoutCycleStarted.addListener(({ payoutId }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|payoutId|number|The ID of the payout cycle that started.|


### `events.SkillAdded.addListener(({ skillId, parentSkillId }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|skillId|number|The ID of the skill that was added.|
|parentSkillId|number|The ID of the parent skill.|


### `events.TaskAdded.addListener(({ taskId }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was added.|


### `events.TaskBriefSet.addListener(({ taskId, specificationHash }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|specificationHash|string|The specification hash that was set (an IPFS hash).|


### `events.TaskCanceled.addListener(({ taskId }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was canceled.|


### `events.TaskCompleted.addListener(({ taskId }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was completed.|


### `events.TaskDeliverableSubmitted.addListener(({ taskId, deliverableHash }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|deliverableHash|IPFS hash|The deliverable hash that was submitted (an IPFS hash).|


### `events.TaskDomainSet.addListener(({ taskId, domainId }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|domainId|number|The ID of the domain that was set.|


### `events.TaskDueDateSet.addListener(({ taskId, dueDate }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|dueDate|date|The due date that was set.|


### `events.TaskFinalized.addListener(({ taskId }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was finalized.|


### `events.TaskPayoutClaimed.addListener(({ taskId, role, token, amount }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was assigned the task payout (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|address|The address of the token contract (an empty address if Ether).|
|amount|big number|The task payout amount that was claimed.|


### `events.TaskPayoutSet.addListener(({ taskId, role, token, amount }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|address|The address of the token contract (an empty address if Ether).|
|amount|big number|The task payout amount that was set.|


### `events.TaskRoleUserSet.addListener(({ taskId, role, user }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|address|The user that was assigned the task role.|


### `events.TaskSkillSet.addListener(({ taskId, skillId }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|skillId|number|The ID of the skill that was set.|


### `events.TaskWorkRatingRevealed.addListener(({ taskId, role, rating }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that received the rating (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|rating|number|The value of the rating that was revealed (`1`, `2`, or `3`).|


### `events.TokenLocked.addListener(({ token, lockCount }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|
|lockCount|number|The total lock count for the token.|


### `events.Transfer.addListener(({ from, to, value }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|from|address|The address of the account that sent tokens.|
|to|address|The address of the account that received tokens.|
|value|big number|The amount of tokens that were transferred.|