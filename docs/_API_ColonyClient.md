---
title: ColonyClient
section: API
order: 1
---

The `ColonyClient` class is a standard interface for interactions with the methods and events described in `IColony.sol` and `IMetaColony.sol`. These interactions are generally concerned with actions within a colony, such as adding a new domain, creating a task, moving funds between pots, and managing permissions.

See [Clients](/colonyjs/components-clients) for more information about initializing `ColonyClient`.

See [ContractClient](/colonyjs/api-contractclient) for more information about the `ContractClient` superclass.

  
## Callers


### `generateSecret`

Generate a secret for task ratings. This function returns a keccak256 hash created from the input parameters.

```js
await colonyClient.generateSecret.call({
  salt,
  value,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|salt|string|The string that will be used to generate a secret.|
|value|number|The task rating that will be hidden (`1`, `2`, or `3`).|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|secret|hex string|A keccak256 hash that keeps the task rating hidden.|

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getAuthorityAddress`

Get the address of the authority contract associated with the colony contract.

```js
await colonyClient.getAuthorityAddress.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|address|address|The address of the authority contract associated with the colony contract.|

**Contract Information**


  Function: `authority`
  
Contract: [auth.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/auth.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getColonyNetworkAddress`

Get the address of the Colony Network contract.

```js
await colonyClient.getColonyNetworkAddress.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|address|address|The address of the Colony Network contract.|

**Contract Information**


  Function: `getColonyNetwork`
  
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getDomain`

Get information about a domain.

```js
await colonyClient.getDomain.call({
  domainId,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|domainId|number|The ID of the domain.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|skillId|number|The ID of the local skill.|
|potId|number|The ID of the funding pot.|

**Contract Information**


  
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getDomainCount`

Get the total number of domains in the colony. The return value is also the ID of the last domain created.

```js
await colonyClient.getDomainCount.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|count|number|The total number of domains.|

**Contract Information**


  
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getExtensionAddress`

Get the address of an extension contract associated with the colony address.

```js
await colonyClient.getExtensionAddress.call({
  contractName,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|contractName|string|The name of the extension contract.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|address|address|The address of the extension contract.|

**Contract Information**


  
  
  
  

### `getFundingPot`

Get information about a funding pot.

```js
await colonyClient.getFundingPot.call({
  potId,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|potId|number|The ID of the funding pot.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|type|undefined|The associated type of the funding pot (`DOMAIN`, `TASK`, `PAYMENT`, or `UNASSIGNED`).|
|typeId|number|The id of the associated type (`domainId`, `taskId`, or `paymentId`).|
|payoutsWeCannotMake|number|The total number of payouts that the funding pot cannot make.|

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getFundingPotBalance`

Get the balance of a funding pot.

```js
await colonyClient.getFundingPotBalance.call({
  potId,
  token,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|potId|number|The ID of the funding pot.|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|balance|big number|The balance of tokens (or Ether) in the funding pot.|

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getFundingPotCount`

Get the total number of funding pots.

```js
await colonyClient.getFundingPotCount.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|count|number|The total number of funding pots.|

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getFundingPotPayout`

Get the payout of a funding pot.

```js
await colonyClient.getFundingPotPayout.call({
  potId,
  token,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|potId|number|The ID of the funding pot.|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|payout|big number|The payout of tokens (or Ether) for the funding pot.|

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getNonRewardPotsTotal`

Get the total amount of funds that are not in the colony rewards pot. This is a value that keeps track of the total assets a colony has to work with, which may be split among several distinct pots associated with various domains and tasks.

```js
await colonyClient.getNonRewardPotsTotal.call({
  token,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|total|big number|The total amount of funds that are not in the colony rewards pot.|

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getOwnerAddress`

Get the address of the owner of the colony contract.

```js
await colonyClient.getOwnerAddress.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|address|address|The address of the owner of the colony contract.|

**Contract Information**


  Function: `owner`
  
Contract: [auth.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/auth.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getPayment`

Get information about a payment.

```js
await colonyClient.getPayment.call({
  paymentId,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|paymentId|number|The ID of the payment.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|recipient|address|The address of the assigned recipient.|
|finalized|boolean|A boolean indicating whether or not the payment has been finalized.|
|potId|number|The ID of the funding pot.|
|domainId|number|The ID of the domain.|
|skills|array|An array of skill IDs.|

**Contract Information**


  
  
Contract: [ColonyPayment.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyPayment.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getPaymentCount`

Get the total number of payments.

```js
await colonyClient.getPaymentCount.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|count|number|The total number of payments.|

**Contract Information**


  
  
Contract: [ColonyPayment.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyPayment.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getRecoveryRolesCount`

Get the total number of addresses that are assigned the colony `RECOVERY` role.

```js
await colonyClient.getRecoveryRolesCount.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|count|number|The total number of addresses that are assigned the colony `RECOVERY` role.|

**Contract Information**


  Function: `numRecoveryRoles`
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IRecovery.sol)
  

### `getRewardInverse`

Get the inverse amount of the reward. If the fee is 1% (or 0.01), the inverse amount will be 100.

```js
await colonyClient.getRewardInverse.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|rewardInverse|big number|The inverse amount of the reward.|

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getRewardPayoutInfo`

Get information about a reward payout cycle.

```js
await colonyClient.getRewardPayoutInfo.call({
  payoutId,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|payoutId|number|The ID of the reward payout cycle.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|reputationState|string|The reputation root hash at the time the reward payout was created.|
|colonyWideReputation|big number|The total reputation score throughout the colony.|
|totalTokens|big number|The total amount of tokens at the time the reward payout was created.|
|amount|big number|The total amount of tokens allocated for the reward payout.|
|tokenAddress|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|blockTimestamp|date|The timestamp at the time the reward payout was created.|

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getTask`

Get information about a task.

```js
await colonyClient.getTask.call({
  taskId,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|specificationHash|IPFS hash|The specification hash of the task (an IPFS hash).|
|deliverableHash|IPFS hash|The deliverable hash of the task (an IPFS hash).|
|status|task status|The task status (`ACTIVE`, `CANCELLED` or `FINALIZED`).|
|dueDate|date|The final date that the task deliverable can be submitted.|
|potId|number|The ID of the funding pot.|
|completionDate|date|The date when the task deliverable was submitted.|
|domainId|number|The ID of the domain.|
|skillId|number|The ID of the skill.|

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getTaskCount`

Get the total number of tasks in the colony. The return value is also the ID of the last task created.

```js
await colonyClient.getTaskCount.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|count|number|The total number of tasks.|

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getTaskPayout`

Get the task payout amount assigned to a task role. Multiple tokens can be used for task payouts, therefore the token must be specified when calling this function. In order to get the task payout amount in Ether, `token` must be an empty address.

```js
await colonyClient.getTaskPayout.call({
  taskId,
  role,
  token,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|role|task role|The task role (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|amount|big number|The amount of tokens (or Ether) assigned to the task role as a payout.|

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getTaskRole`

Get information about a task role.

```js
await colonyClient.getTaskRole.call({
  taskId,
  role,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|role|task role|The role of the task (`MANAGER`, `EVALUATOR`, or `WORKER`).|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|address|address|The address that is assigned the task role.|
|rateFail|boolean|A boolean indicating whether or not the assigned address failed to submit a rating.|
|rating|number|The rating that the assigned address received (`1`, `2`, or `3`).|

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getTaskWorkRatingSecret`

Get the secret of a task work rating that has been submitted. If a task is in the commit period of the rating process, the work ratings are hidden in a keccak256 hash that was created from a `salt` and `value`. The rating secret can be retrieved but in order to reveal the secret, one would have to know both the `salt` and `value` used to generate the secret.

```js
await colonyClient.getTaskWorkRatingSecret.call({
  taskId,
  role,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|role|task role|The role that submitted the rating (`MANAGER`, `EVALUATOR`, or `WORKER`).|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|secret|hex string|A keccak256 hash that keeps the task rating hidden.|

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getTaskWorkRatingSecretsInfo`

Get information about the secrets of the task work ratings.

```js
await colonyClient.getTaskWorkRatingSecretsInfo.call({
  taskId,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|count|number|The total number of secrets.|
|lastSubmitted|date|The date when the last secret was submitted.|

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getTokenAddress`

Get the address of the token contract that is the native token assigned to the colony. The native token is the token used to calculate reputation scores, i.e. `1` token earned for completing a task with a satisfactory rating (`2`) will result in `1` reputation point earned.

```js
await colonyClient.getTokenAddress.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|address|address|The address of the token contract assigned as the native token for the colony.|

**Contract Information**


  
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `getVersion`

Get the version number of the colony contract. The version number starts at `1` and is incremented by `1` with every new version.

```js
await colonyClient.getVersion.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|version|number|The version number of the colony contract.|

**Contract Information**


  Function: `version`
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `hasColonyRole`

Check whether an address has a role assigned.

```js
await colonyClient.hasColonyRole.call({
  address,
  domainId,
  role,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|address|address|The address that will be checked for the role.|
|domainId|number|The ID of the domain that the role is assigned.|
|role|undefined|The role that will be checked (`RECOVERY`, `ROOT`, `ARCHITECTURE`, `ARCHITECTURE_SUBDOMAIN`, `ADMINISTRATION`, `FUNDING`).|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|hasRole|boolean|A boolean indicating whether or not the address has the role assigned.|

**Contract Information**


  Function: `hasUserRole`
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `isInRecoveryMode`

Check whether or not the colony is in recovery mode.

```js
await colonyClient.isInRecoveryMode.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|inRecoveryMode|boolean|A boolean indicating whether or not the colony is in recovery mode.|

**Contract Information**


  
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IRecovery.sol)
  

### `verifyReputationProof`

Verify the correctness of a patricia proof associated with reputation.

```js
await colonyClient.verifyReputationProof.call({
  key,
  value,
  branchMask,
  siblings,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|key|string|The key of the element that the proof is for.|
|value|string|The value of the element that the proof is for.|
|branchMask|number|The branchmask of the proof.|
|siblings|array|The siblings of the proof.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|isValid|boolean|A boolean indicating whether ot not the proof is valid.|

**Contract Information**


  
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

  
## Senders


### `addNetworkColonyVersion`

Add a colony contract version. This can only be called from the Meta Colony and only by the address assigned the colony `ROOT` role.

```js
await colonyClient.addNetworkColonyVersion.send({
  version,
  resolver,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|version|number|The colony contract version that will be added.|
|resolver|number|The address of the `Resolver` contract which will be used with the underlying `EtherRouter` contract.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|version|number|The colony contract version that was added.|
|resolver|address|The address of the `Resolver` contract which will be used with the underlying `EtherRouter` contract.|
|ColonyVersionAdded|object|Contains the data defined in [ColonyVersionAdded](#eventscolonyversionadded)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IMetaColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IMetaColony.sol)
  

### `addDomain`

Add a domain to the colony.

```js
await colonyClient.addDomain.send({
  parentDomainId,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|parentDomainId|number|The ID of the parent domain.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|skillId|number|The ID of the skill that was added.|
|parentSkillId|number|The ID of the parent skill.|
|domainId|number|The ID of the domain that was added.|
|potId|number|The ID of the pot that was added.|
|SkillAdded|object|Contains the data defined in [SkillAdded](#eventsskilladded)|
|DomainAdded|object|Contains the data defined in [DomainAdded](#eventsdomainadded)|
|FundingPotAdded|object|Contains the data defined in [FundingPotAdded](#eventsfundingpotadded)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `addExtension`

Add an extension contract.

```js
await colonyClient.addExtension.send({
  contractName,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|contractName|string|The name of the extension contract (`OneTxPayment` or `OldRoles`).|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
  
  

### `addGlobalSkill`

Add a global skill. This can only be called from the Meta Colony and only by the address assigned the colony `ROOT` role.

```js
await colonyClient.addGlobalSkill.send(options);
```



**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|skillId|number|The ID of the skill that was added.|
|parentSkillId|number|The ID of the parent skill.|
|SkillAdded|object|Contains the data defined in [SkillAdded](#eventsskilladded)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IMetaColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IMetaColony.sol)
  

### `addPayment`

Add a payment to the colony.

```js
await colonyClient.addPayment.send({
  recipient,
  token,
  amount,
  domainId,
  skillId,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|recipient|address|The address that will receive the payment.|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|amount|big number|The amount of tokens (or Ether) for the payment.|
|domainId|number|The ID of the domain.|
|skillId|number|The ID of the skill.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|potId|number|The ID of the pot that was added.|
|paymentId|number|The ID of the payment that was added.|
|FundingPotAdded|object|Contains the data defined in [FundingPotAdded](#eventsfundingpotadded)|
|PaymentAdded|object|Contains the data defined in [PaymentAdded](#eventspaymentadded)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyPayment.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyPayment.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `addTask`

Add a new task within the colony.

```js
await colonyClient.addTask.send({
  specificationHash,
  domainId,
  skillId,
  dueDate,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|specificationHash|IPFS hash|The specification hash of the task (an IPFS hash).|
|domainId|number (optional)|The ID of the domain (default value of `1`).|
|skillId|number (optional)|The ID of the skill (default value of `null`).|
|dueDate|date (optional)|The due date of the task (default value of `30` days from creation).|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|skillId|number|The ID of the skill that was set.|
|dueDate|date|The due date that was set.|
|potId|number|The ID of the pot that was added.|
|TaskSkillSet|object|Contains the data defined in [TaskSkillSet](#eventstaskskillset)|
|TaskDueDateSet|object|Contains the data defined in [TaskDueDateSet](#eventstaskduedateset)|
|FundingPotAdded|object|Contains the data defined in [FundingPotAdded](#eventsfundingpotadded)|
|TaskAdded|object|Contains the data defined in [TaskAdded](#eventstaskadded)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  Function: `makeTask`
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `approveExitRecovery`

Indicate approval to exit colony recovery mode. This function can only be called by an address assigned the colony `RECOVERY` role.

```js
await colonyClient.approveExitRecovery.send(options);
```



**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IRecovery.sol)
  

### `bootstrapColony`

Bootstrap the colony by giving an initial amount of tokens and reputation to selected addresses. This function can only be called by the address assigned the colony `ROOT` role when the `taskCount` for the colony is equal to `0`.

```js
await colonyClient.bootstrapColony.send({
  addresses,
  amounts,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|addresses|array|The array of users that will recieve an initial amount of tokens and reputation.|
|amounts|array|The array of corresponding token and reputation amounts each user will recieve.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|addresses|array|The array of users that received an initial amount of tokens and reputation.|
|amounts|array|The array of corresponding token and reputation amounts each user recieved.|
|from|address|The address of the account that sent tokens.|
|to|address|The address of the account that received tokens.|
|value|big number|The amount of tokens that were transferred.|
|ColonyBootstrapped|object|Contains the data defined in [ColonyBootstrapped](#eventscolonybootstrapped)|
|Transfer|object|Contains the data defined in [Transfer](#eventstransfer)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `claimColonyFunds`

Claim funds that the colony has received by adding them to the funding pot of the root domain. A set fee is deducted from the funds claimed and added to the colony rewards pot. No fee is deducted when tokens native to the colony are claimed.

```js
await colonyClient.claimColonyFunds.send({
  token,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|fee|big number|The fee deducted from the claim and added to the colony rewards pot.|
|payoutRemainder|big number|The remaining funds (after the fee) moved to the top-level domain pot.|
|ColonyFundsClaimed|object|Contains the data defined in [ColonyFundsClaimed](#eventscolonyfundsclaimed)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `claimPayment`

Claim a payment.

```js
await colonyClient.claimPayment.send({
  paymentId,
  token,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|paymentId|number|The ID of the payment.|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|potId|number|The ID of the pot that was modified.|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|amount|big number|The task payout amount that was claimed.|
|from|address|The address of the account that sent tokens.|
|to|address|The address of the account that received tokens.|
|value|big number|The amount of tokens that were transferred.|
|PayoutClaimed|object|Contains the data defined in [PayoutClaimed](#eventspayoutclaimed)|
|Transfer|object|Contains the data defined in [Transfer](#eventstransfer)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `claimRewardPayout`

Claim a reward payout.

```js
await colonyClient.claimRewardPayout.send({
  payoutId,
  squareRoots,
  key,
  value,
  branchMask,
  siblings,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|payoutId|number|The ID of the payout.|
|squareRoots|array|The square roots of values used in the equation.|
|key|string|The key of the element that the proof is for.|
|value|string|The value of the element that the proof is for.|
|branchMask|number|The branchmask of the proof.|
|siblings|array|The siblings of the proof.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|rewardPayoutId|number|The ID of the reward payout cycle.|
|user|address|The address of the user who claimed the reward payout.|
|fee|big number|The fee deducted from the claim and added to the colony rewards pot.|
|payoutRemainder|big number|The remaining payout amount (after the fee) transferred to the user.|
|from|address|The address of the account that sent tokens.|
|to|address|The address of the account that received tokens.|
|value|big number|The amount of tokens that were transferred.|
|RewardPayoutClaimed|object|Contains the data defined in [RewardPayoutClaimed](#eventsrewardpayoutclaimed)|
|Transfer|object|Contains the data defined in [Transfer](#eventstransfer)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `claimTaskPayout`

Claim a payout assigned to a task role (`MANAGER`, `EVALUATOR`, or `WORKER`). This function can only be called by the address assigned the given task role after the task has been finalized.

```js
await colonyClient.claimTaskPayout.send({
  taskId,
  role,
  token,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|role|task role|The task role that is claiming the payout (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|potId|number|The ID of the pot that was modified.|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|amount|big number|The task payout amount that was claimed.|
|from|address|The address of the account that sent tokens.|
|to|address|The address of the account that received tokens.|
|value|big number|The amount of tokens that were transferred.|
|PayoutClaimed|object|Contains the data defined in [PayoutClaimed](#eventspayoutclaimed)|
|Transfer|object|Contains the data defined in [Transfer](#eventstransfer)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `completeTask`

Mark a task as complete. If the address assigned the task `WORKER` role fails to submit the task deliverable by the due date, this function must be called by the address assigned the task `MANAGER` role. This allows the task work to be rated and the task to be finalized.

```js
await colonyClient.completeTask.send({
  taskId,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was completed.|
|TaskCompleted|object|Contains the data defined in [TaskCompleted](#eventstaskcompleted)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `deprecateGlobalSkill`

Deprecate a global skill. This can only be called from the Meta Colony and only by the address assigned the colony `ROOT` role.

```js
await colonyClient.deprecateGlobalSkill.send({
  skillId,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|skillId|number|The ID of the skill that will be deprecated.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IMetaColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IMetaColony.sol)
  

### `enterRecoveryMode`

Enter colony recovery mode. This function can only be called by a user assigned the colony `RECOVERY` role.

```js
await colonyClient.enterRecoveryMode.send(options);
```



**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IRecovery.sol)
  

### `exitRecoveryMode`

Exit colony recovery mode. This function can be called by anyone if enough whitelist approvals are given.

```js
await colonyClient.exitRecoveryMode.send(options);
```



**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IRecovery.sol)
  

### `finalizePayment`

Finalize a payment. Once a payment is finalized, no further changes to the payment can be made and the address that is assigned the payment can claim the payment.

```js
await colonyClient.finalizePayment.send({
  paymentId,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|paymentId|number|The ID of the payment.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyPayment.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyPayment.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `finalizeRewardPayout`

Finalize a reward payout cycle. This function can only be called when the reward payout cycle has finished, i.e. 60 days have passed since the creation of the reward payout cycle.

```js
await colonyClient.finalizeRewardPayout.send({
  payoutId,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|payoutId|number|The ID of the reward payout cycle.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|payoutId|number|The ID of the payout cycle that ended.|
|RewardPayoutCycleEnded|object|Contains the data defined in [RewardPayoutCycleEnded](#eventsrewardpayoutcycleended)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `finalizeTask`

Finalize a task. Once a task is finalized, no further changes to the task can be made and each user assigned a task role can claim the payout assigned to their role.

```js
await colonyClient.finalizeTask.send({
  taskId,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was finalized.|
|TaskFinalized|object|Contains the data defined in [TaskFinalized](#eventstaskfinalized)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `makePayment`

Make a payment in one transaction. This function is not included in the core contracts but instead it comes from the `OneTxPayment` extension contract. The `OneTxPayment` extension contract and the sender must both be assigned the colony `ADMINISTRATION` role.

```js
await colonyClient.makePayment.send({
  recipient,
  token,
  amount,
  domainId,
  skillId,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|recipient|address|The address that will receive the payment.|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|amount|big number|The amount of tokens (or Ether) for the payment.|
|domainId|number|The ID of the domain.|
|skillId|number|The ID of the skill.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|potId|number|The ID of the pot that was added.|
|paymentId|number|The ID of the payment that was added.|
|fromPot|number|The ID of the pot from which the funds were moved.|
|toPot|number|The ID of the pot to which the funds were moved.|
|amount|big number|The amount of funds that were moved between pots.|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|from|address|The address of the account that sent tokens.|
|to|address|The address of the account that received tokens.|
|value|big number|The amount of tokens that were transferred.|
|FundingPotAdded|object|Contains the data defined in [FundingPotAdded](#eventsfundingpotadded)|
|PaymentAdded|object|Contains the data defined in [PaymentAdded](#eventspaymentadded)|
|ColonyFundsMovedBetweenFundingPots|object|Contains the data defined in [ColonyFundsMovedBetweenFundingPots](#eventscolonyfundsmovedbetweenfundingpots)|
|Transfer|object|Contains the data defined in [Transfer](#eventstransfer)|
|PayoutClaimed|object|Contains the data defined in [PayoutClaimed](#eventspayoutclaimed)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [OneTxPayment.sol](https://github.com/JoinColony/colonyNetwork/blob/glider-rc.3/contracts/extensions/OneTxPayment.sol/OneTxPayment.sol)
  
  

### `mintTokens`

Mint new tokens. This function can only be called if the address of the colony contract is the owner of the token contract. If this is the case, then this function can only be called by the address assigned the colony `ROOT` role.

```js
await colonyClient.mintTokens.send({
  amount,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|amount|big number|The amount of new tokens that will be minted.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|address|address|The address that initiated the mint event.|
|amount|big number|The amount of tokens that were minted.|
|Mint|object|Contains the data defined in [Mint](#eventsmint)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `mintTokensForColonyNetwork`

Mint tokens for the Colony Network. This can only be called from the Meta Colony and only by the address assigned the colony `ROOT` role.

```js
await colonyClient.mintTokensForColonyNetwork.send({
  amount,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|amount|big number|The amount of new tokens that will be minted.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|address|address|The address that initiated the mint event.|
|amount|big number|The amount of tokens that were minted.|
|from|address|The address of the account that sent tokens.|
|to|address|The address of the account that received tokens.|
|value|big number|The amount of tokens that were transferred.|
|Mint|object|Contains the data defined in [Mint](#eventsmint)|
|Transfer|object|Contains the data defined in [Transfer](#eventstransfer)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IMetaColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IMetaColony.sol)
  

### `moveFundsBetweenPots`

Move funds from one pot to another.

```js
await colonyClient.moveFundsBetweenPots.send({
  fromPot,
  toPot,
  amount,
  token,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|fromPot|number|The ID of the pot from which funds will be moved.|
|toPot|number|The ID of the pot to which funds will be moved.|
|amount|big number|The amount of funds that will be moved between pots.|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|fromPot|number|The ID of the pot from which the funds were moved.|
|toPot|number|The ID of the pot to which the funds were moved.|
|amount|big number|The amount of funds that were moved between pots.|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|ColonyFundsMovedBetweenFundingPots|object|Contains the data defined in [ColonyFundsMovedBetweenFundingPots](#eventscolonyfundsmovedbetweenfundingpots)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `registerColonyLabel`

Register an ENS label for the colony.

```js
await colonyClient.registerColonyLabel.send({
  colonyName,
  orbitDBPath,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|colonyName|string|The ENS label that will be registered for the colony.|
|orbitDBPath|string|The path of the OrbitDB database associated with the colony.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|colony|address|The address of the colony that was modified.|
|label|string|The label that was registered for the colony.|
|ColonyLabelRegistered|object|Contains the data defined in [ColonyLabelRegistered](#eventscolonylabelregistered)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `removeExtension`

Remove an extension contract.

```js
await colonyClient.removeExtension.send({
  contractName,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|contractName|string|The name of the extension contract (`OneTxPayment` or `OldRoles`).|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
  
  

### `removeRecoveryRole`

Remove the colony `RECOVERY` role from an address. This function can only be called by the colony `ROOT` role.

```js
await colonyClient.removeRecoveryRole.send({
  address,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|address|address|The address that will be unassigned the colony `RECOVERY` role.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IRecovery.sol)
  

### `revealTaskWorkRating`

Reveal a submitted work rating. In order to reveal a work rating, the same `salt` and `value` used to generate the `secret` when the task work rating was submitted must be provided again here to reveal the task work rating.

```js
await colonyClient.revealTaskWorkRating.send({
  taskId,
  role,
  rating,
  salt,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|role|task role|The role that received the rating (`MANAGER` or `WORKER`).|
|rating|number|The rating that was submitted (`1`, `2`, or `3`).|
|salt|string|The string that was used to generate the secret.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that received the rating (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|rating|number|The value of the rating that was revealed (`1`, `2`, or `3`).|
|TaskWorkRatingRevealed|object|Contains the data defined in [TaskWorkRatingRevealed](#eventstaskworkratingrevealed)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setAdminRole`

Assign the colony `ADMIN` role to an address. This function is not included in the core contracts but instead it comes from the `OldRoles` extension contract. This function can only be called by an address assigned the colony `ROOT` (`FOUNDER`) role or an address assigned the colony `ADMIN` (`ARCHITECTURE`) role. There is no limit to the number of addresses that can be assigned the colony `ADMIN` role.

```js
await colonyClient.setAdminRole.send({
  address,
  setTo,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|address|address|The address that will be assigned the colony `ADMIN` role.|
|setTo|boolean|A boolean indicating whether the address will be assigned or unassigned the colony `ADMIN` role.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|address|address||
|domainId|number||
|role|undefined||
|setTo|boolean||
|ColonyRoleSet|object|Contains the data defined in [ColonyRoleSet](#eventscolonyroleset)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [OldRoles.sol](https://github.com/JoinColony/colonyNetwork/blob/glider-rc.3/contracts/extensions/OldRoles.sol/OldRoles.sol)
  
  

### `setAdministrationRole`

Assign the colony `ADMINISTRATION` role to an address. The address calling the method must have permission within the domain that permission is being granted or a parent domain to the domain that permission is being granted. The address calling the method must already be assigned either the colony `ROOT` or `ARCHITECTURE` role within the domain or parent domain.

```js
await colonyClient.setAdministrationRole.send({
  address,
  domainId,
  setTo,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|address|address|The address that will be assigned or unassigned the colony `ADMINISTRATION` role.|
|domainId|number|The ID of the domain that the colony `ADMINISTRATION` role will be assigned or unassigned.|
|setTo|boolean|A boolean indicating whether the address will be assigned or unassigned the colony `ADMINISTRATION` role.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|address|address||
|domainId|number||
|role|undefined||
|setTo|boolean||
|ColonyRoleSet|object|Contains the data defined in [ColonyRoleSet](#eventscolonyroleset)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setAllTaskPayouts`

Set the payouts for all task roles. This can only be called by the address assigned the task `MANAGER` role and only if the task `EVALUATOR` role and `WORKER` task role are not assigned or they are assigned to the same address that is currently assigned the task `MANAGER` role.

```js
await colonyClient.setAllTaskPayouts.send({
  taskId,
  token,
  managerAmount,
  evaluatorAmount,
  workerAmount,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|managerAmount|big number|The payout amount in tokens (or Ether) for the task `MANAGER` role.|
|evaluatorAmount|big number|The payout amount in tokens (or Ether) for the task `EVALUATOR` role.|
|workerAmount|big number|The payout amount in tokens (or Ether) for the task `WORKER` role.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|amount|big number|The task payout amount that was set.|
|TaskPayoutSet|object|Contains the data defined in [TaskPayoutSet](#eventstaskpayoutset)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setArchitectureRole`

Assign the colony `ARCHITECTURE` role to an address. The address calling the method must have permission within the domain that permission is being granted or a parent domain to the domain that permission is being granted. The address calling the method must already be assigned either the colony `ROOT` or `ARCHITECTURE` role within the domain or parent domain.

```js
await colonyClient.setArchitectureRole.send({
  address,
  domainId,
  setTo,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|address|address|The address that will be assigned or unassigned the colony `ARCHITECTURE` role.|
|domainId|number|The ID of the domain that the colony `ARCHITECTURE` role will be assigned or unassigned.|
|setTo|boolean|A boolean indicating whether the address will be assigned or unassigned the colony `ARCHITECTURE` role.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|address|address||
|domainId|number||
|role|undefined||
|setTo|boolean||
|ColonyRoleSet|object|Contains the data defined in [ColonyRoleSet](#eventscolonyroleset)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setFounderRole`

Assign the colony `FOUNDER` role to an address. This function is not included in the core contracts but instead it comes from the `OldRoles` extension contract. This function can only be called by an address assigned the colony `ROOT` (`FOUNDER`) role. There can only be one address assigned to the colony `ROOT` (`FOUNDER`) role, therefore, the address currently assigned will forfeit the role.

```js
await colonyClient.setFounderRole.send({
  address,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|address|address|The address that will be assigned the colony `FOUNDER` role.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|address|address||
|domainId|number||
|role|undefined||
|setTo|boolean||
|ColonyRoleSet|object|Contains the data defined in [ColonyRoleSet](#eventscolonyroleset)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [OldRoles.sol](https://github.com/JoinColony/colonyNetwork/blob/glider-rc.3/contracts/extensions/OldRoles.sol/OldRoles.sol)
  
  

### `setFundingRole`

Assign the colony `FUNDING` role to an address. The address calling the method must have permission within the domain that permission is being granted or a parent domain to the domain that permission is being granted. The address calling the method must already be assigned either the colony `ROOT` or `ARCHITECTURE` role within the domain or parent domain.

```js
await colonyClient.setFundingRole.send({
  address,
  domainId,
  setTo,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|address|address|The address that will be assigned or unassigned the colony `FUNDING` role.|
|domainId|number|The ID of the domain that the colony `FUNDING` role will be assigned or unassigned.|
|setTo|boolean|A boolean indicating whether the address will be assigned or unassigned the colony `FUNDING` role.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|address|address||
|domainId|number||
|role|undefined||
|setTo|boolean||
|ColonyRoleSet|object|Contains the data defined in [ColonyRoleSet](#eventscolonyroleset)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setNetworkFeeInverse`

Set the inverse amount of the reward. This can only be called from the Meta Colony and only by the address assigned the colony `ROOT` role. If the fee is 1% (or 0.01), the inverse amount will be 100.

```js
await colonyClient.setNetworkFeeInverse.send({
  feeInverse,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|feeInverse|number|The inverse amount that will be set.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IMetaColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IMetaColony.sol)
  

### `setPaymentDomain`

Set the payment domain.

```js
await colonyClient.setPaymentDomain.send({
  paymentId,
  domainId,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|paymentId|number|The ID of the payment.|
|domainId|address|The ID of the domain.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyPayment.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyPayment.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setPaymentPayout`

Set the payment payout.

```js
await colonyClient.setPaymentPayout.send({
  paymentId,
  token,
  amount,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|paymentId|number|The ID of the payment.|
|token|address|The address of the token contract (an empty address if Ether).|
|amount|big number|The amount of the payment.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setPaymentRecipient`

Set the payment recipient.

```js
await colonyClient.setPaymentRecipient.send({
  paymentId,
  recipient,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|paymentId|number|The ID of the payment.|
|recipient|address|The address that will receive the payment.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyPayment.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyPayment.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setPaymentSkill`

Set the payment skill.

```js
await colonyClient.setPaymentSkill.send({
  paymentId,
  skillId,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|paymentId|number|The ID of the payment.|
|skillId|address|The ID of the skill.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyPayment.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyPayment.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setRecoveryRole`

Assign the colony `RECOVERY` role to an address. This function can only be called by the colony `ROOT` role.

```js
await colonyClient.setRecoveryRole.send({
  address,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|address|address|The address that will be assigned the colony `RECOVERY` role.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IRecovery.sol)
  

### `setRewardInverse`

Set the inverse amount of the reward. This function can only be called by the address currently assigned the colony `ROOT` role. If the fee is 1% (or 0.01), the inverse amount will be 100.

```js
await colonyClient.setRewardInverse.send({
  rewardInverse,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|rewardInverse|big number|The inverse amount of the reward.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|rewardInverse|big number|The reward inverse value that was set.|
|ColonyRewardInverseSet|object|Contains the data defined in [ColonyRewardInverseSet](#eventscolonyrewardinverseset)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setRootRole`

Assign the colony `ROOT` role to an address. This function can only be called by an address currently assigned the colony `ROOT` role.

```js
await colonyClient.setRootRole.send({
  address,
  setTo,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|address|address|The address that will either be assigned or unassigned the colony `ROOT` role.|
|setTo|boolean|A boolean indicating whether the address will be assigned or unassigned the colony `ROOT` role.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|address|address||
|domainId|number||
|role|undefined||
|setTo|boolean||
|ColonyRoleSet|object|Contains the data defined in [ColonyRoleSet](#eventscolonyroleset)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setStorageSlotRecovery`

Set the value for a storage slot while in recovery mode. This can only be called by a user assigned the colony `RECOVERY` role.

```js
await colonyClient.setStorageSlotRecovery.send({
  slot,
  value,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|slot|number|The ID of the storage slot that will be modified.|
|value|hex string|The hex string of data that will be set as the value.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IRecovery.sol)
  

### `startNextRewardPayout`

Start the next reward payout cycle. All the funds in the colony rewards pot for the given token will become locked until reputation holders have claimed their rewards payout using `claimRewardPayout`. Reputation holders can also waive their reward payout and unlock their tokens for past reward payout cycles by using `incrementLockCounterTo`.

```js
await colonyClient.startNextRewardPayout.send({
  token,
  key,
  value,
  branchMask,
  siblings,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|key|string|The key of the element that the proof is for.|
|value|string|The value of the element that the proof is for.|
|branchMask|number|The branchmask of the proof.|
|siblings|array|The siblings of the proof.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|lockCount|number|The total lock count for the token.|
|payoutId|number|The ID of the payout cycle that started.|
|TokenLocked|object|Contains the data defined in [TokenLocked](#eventstokenlocked)|
|RewardPayoutCycleStarted|object|Contains the data defined in [RewardPayoutCycleStarted](#eventsrewardpayoutcyclestarted)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `submitTaskDeliverable`

Submit the task deliverable. This function can only be called by the address assigned the task `WORKER` role on or before the task due date. The submission cannot be overwritten, which means the deliverable cannot be changed once it has been submitted.

```js
await colonyClient.submitTaskDeliverable.send({
  taskId,
  deliverableHash,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|deliverableHash|IPFS hash|The deliverable hash of the task (an IPFS hash).|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was completed.|
|deliverableHash|IPFS hash|The deliverable hash that was submitted (an IPFS hash).|
|TaskCompleted|object|Contains the data defined in [TaskCompleted](#eventstaskcompleted)|
|TaskDeliverableSubmitted|object|Contains the data defined in [TaskDeliverableSubmitted](#eventstaskdeliverablesubmitted)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `submitTaskDeliverableAndRating`

Submit the task deliverable and the work rating for the address assigned the task `MANAGER` role. This function can only be called by the address assigned the task `WORKER` role on or before the task due date. The submission cannot be overwritten, which means the deliverable cannot be changed once it has been submitted. In order to submit a rating, a `secret` must be generated using the `generateSecret` method, which keeps the rating hidden until all ratings have been submitted and revealed.

```js
await colonyClient.submitTaskDeliverableAndRating.send({
  taskId,
  deliverableHash,
  secret,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|deliverableHash|IPFS hash|The deliverable hash of the task (an IPFS hash).|
|secret|hex string|A keccak256 hash that keeps the task rating hidden.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was completed.|
|deliverableHash|IPFS hash|The deliverable hash that was submitted (an IPFS hash).|
|TaskCompleted|object|Contains the data defined in [TaskCompleted](#eventstaskcompleted)|
|TaskDeliverableSubmitted|object|Contains the data defined in [TaskDeliverableSubmitted](#eventstaskdeliverablesubmitted)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `submitTaskWorkRating`

Submit a work rating for a task. This function can only be called by the address assigned the task `EVALUATOR` role, who is submitting a rating for the address assigned the task `WORKER` role, or the address assigned the task `WORKER` role, who is submitting a rating for the address assigned the task `MANAGER` role. In order to submit a rating, a `secret` must be generated using the `generateSecret` method, which keeps the rating hidden until all ratings have been submitted and revealed.

```js
await colonyClient.submitTaskWorkRating.send({
  taskId,
  role,
  secret,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|role|task role|The role that will receive the rating (`MANAGER` or `WORKER`).|
|secret|hex string|A keccak256 hash that keeps the task rating hidden.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `upgrade`

Upgrade the colony to a new colony contract version. The new version must be higher than the current version. Downgrading to old versions is not permitted.

```js
await colonyClient.upgrade.send({
  newVersion,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|newVersion|number|The new colony contract version that will be applied to the colony.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|oldVersion|number|The old version number of the colony.|
|newVersion|number|The new version number of the colony.|
|ColonyUpgraded|object|Contains the data defined in [ColonyUpgraded](#eventscolonyupgraded)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [Colony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/Colony.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

  
## MultiSigSenders


### `cancelTask`

Cancel a task. Once a task is cancelled, no further changes to the task can be made.

```js
await colonyClient.cancelTask.startOperation({
  taskId,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|

**Response**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was canceled.|
|TaskCanceled|object|Contains the data defined in [TaskCanceled](#eventstaskcanceled)|

See [MutisigOperation](/colonyjs/api-multisigoperation/) for more information.

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `removeTaskEvaluatorRole`

Remove the task `EVALUATOR` role from an address. This function can only be called before the task is complete, i.e. either before the deliverable has been submitted or the address assigned the task `WORKER` role has failed to meet the deadline and the address assigned the task `MANAGER` role has marked the task as complete.

```js
await colonyClient.removeTaskEvaluatorRole.startOperation({
  taskId,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|

**Response**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleuserset)|

See [MutisigOperation](/colonyjs/api-multisigoperation/) for more information.

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `removeTaskWorkerRole`

Remove the task `WORKER` role from an address. This function can only be called before the task is complete, i.e. either before the deliverable has been submitted or the address assigned the task `WORKER` role has failed to meet the deadline and the address assigned the task `MANAGER` role has marked the task as complete.

```js
await colonyClient.removeTaskWorkerRole.startOperation({
  taskId,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|

**Response**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleuserset)|

See [MutisigOperation](/colonyjs/api-multisigoperation/) for more information.

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setTaskBrief`

Set the task specification. The task specification, or "task brief", is a description of the work that must be completed for the task. The description is hashed and stored with the task for future reference during the rating process or in the event of a dispute.

```js
await colonyClient.setTaskBrief.startOperation({
  taskId,
  specificationHash,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|specificationHash|IPFS hash|The specification hash of the task (an IPFS hash).|

**Response**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|specificationHash|IPFS hash|The specification hash that was set (an IPFS hash).|
|TaskBriefSet|object|Contains the data defined in [TaskBriefSet](#eventstaskbriefset)|

See [MutisigOperation](/colonyjs/api-multisigoperation/) for more information.

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setTaskDomain`

Set the domain of a task. Every task must belong to a domain. This function can only be called by the address assigned the task `MANAGER` role.

```js
await colonyClient.setTaskDomain.startOperation({
  taskId,
  domainId,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|domainId|number|The ID of the domain.|

**Response**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|domainId|number|The ID of the domain that was set.|
|TaskDomainSet|object|Contains the data defined in [TaskDomainSet](#eventstaskdomainset)|

See [MutisigOperation](/colonyjs/api-multisigoperation/) for more information.

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setTaskDueDate`

Set the due date of a task. The due date is the last day that the address assigned the task `WORKER` role can submit the task deliverable.

```js
await colonyClient.setTaskDueDate.startOperation({
  taskId,
  dueDate,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|dueDate|date|The due date of the task.|

**Response**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|dueDate|date|The due date that was set.|
|TaskDueDateSet|object|Contains the data defined in [TaskDueDateSet](#eventstaskduedateset)|

See [MutisigOperation](/colonyjs/api-multisigoperation/) for more information.

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setTaskEvaluatorPayout`

Set the payout amount for the task `EVALUATOR` role.

```js
await colonyClient.setTaskEvaluatorPayout.startOperation({
  taskId,
  token,
  amount,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|amount|big number|The payout amount in tokens (or Ether).|

**Response**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|amount|big number|The task payout amount that was set.|
|TaskPayoutSet|object|Contains the data defined in [TaskPayoutSet](#eventstaskpayoutset)|

See [MutisigOperation](/colonyjs/api-multisigoperation/) for more information.

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setTaskEvaluatorRole`

Assign the task `EVALUATOR` role to an address. This function can only be called before the task is finalized. The address assigned the task `MANAGER` role and the address being assigned the task `EVALUATOR` role must both sign the transaction before it can be executed.

```js
await colonyClient.setTaskEvaluatorRole.startOperation({
  taskId,
  address,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|address|address|The address that will be assigned the task `EVALUATOR` role.|

**Response**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleuserset)|

See [MutisigOperation](/colonyjs/api-multisigoperation/) for more information.

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setTaskManagerPayout`

Set the payout amount for the task `MANAGER` role.

```js
await colonyClient.setTaskManagerPayout.startOperation({
  taskId,
  token,
  amount,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|amount|big number|The payout amount in tokens (or Ether).|

**Response**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|amount|big number|The task payout amount that was set.|
|TaskPayoutSet|object|Contains the data defined in [TaskPayoutSet](#eventstaskpayoutset)|

See [MutisigOperation](/colonyjs/api-multisigoperation/) for more information.

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setTaskManagerRole`

Assign the task `MANAGER` role to an address. This function can only be called before the task is finalized. The address currently assigned the task `MANAGER` role and the address being assigned the task `MANAGER` role must both sign the transaction before it can be executed.

```js
await colonyClient.setTaskManagerRole.startOperation({
  taskId,
  address,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|address|address|The address that will be assigned the task `MANAGER` role.|

**Response**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleuserset)|

See [MutisigOperation](/colonyjs/api-multisigoperation/) for more information.

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setTaskSkill`

Set the skill of a task. Only one skill can be assigned per task. The user assigned the task `MANAGER` role and the address assigned the task `WORKER` role must both sign this transaction before it can be executed.

```js
await colonyClient.setTaskSkill.startOperation({
  taskId,
  skillId,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|skillId|number|The ID of the skill.|

**Response**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|skillId|number|The ID of the skill that was set.|
|TaskSkillSet|object|Contains the data defined in [TaskSkillSet](#eventstaskskillset)|

See [MutisigOperation](/colonyjs/api-multisigoperation/) for more information.

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setTaskWorkerPayout`

Set the payout amount for the task `WORKER` role.

```js
await colonyClient.setTaskWorkerPayout.startOperation({
  taskId,
  token,
  amount,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|amount|big number|The payout amount in tokens (or Ether).|

**Response**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|amount|big number|The task payout amount that was set.|
|TaskPayoutSet|object|Contains the data defined in [TaskPayoutSet](#eventstaskpayoutset)|

See [MutisigOperation](/colonyjs/api-multisigoperation/) for more information.

**Contract Information**


  
  
Contract: [ColonyFunding.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyFunding.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

### `setTaskWorkerRole`

Assign the task `WORKER` role to an address. This function can only be called before the task is finalized. The address assigned the task `MANAGER` role and the address being assigned the task `WORKER` role must both sign the transaction before it can be executed.

```js
await colonyClient.setTaskWorkerRole.startOperation({
  taskId,
  address,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task.|
|address|address|The address that will be assigned the task `WORKER` role.|

**Response**

An instance of a `MultiSigOperation` whose sender will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|address|The user that was assigned the task role.|
|TaskRoleUserSet|object|Contains the data defined in [TaskRoleUserSet](#eventstaskroleuserset)|

See [MutisigOperation](/colonyjs/api-multisigoperation/) for more information.

**Contract Information**


  
  
Contract: [ColonyTask.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyTask.sol)
  
Interface: [IColony.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColony.sol)
  

  
## Events


### `ColonyAdministrationRoleSet`

**Event Handler**

```js
const eventHandler = ({
  address,
  setTo,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.ColonyAdministrationRoleSet.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.ColonyAdministrationRoleSet.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|address|address|The address that was either assigned or unassigned the colony `ADMINISTRATION` role.|
|setTo|boolean|A boolean indicating whether the address was assigned or unassigned the colony `ADMINISTRATION` role.|


### `ColonyArchitectureRoleSet`

**Event Handler**

```js
const eventHandler = ({
  address,
  setTo,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.ColonyArchitectureRoleSet.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.ColonyArchitectureRoleSet.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|address|address|The address that was either assigned or unassigned the colony `ARCHITECTURE` role.|
|setTo|boolean|A boolean indicating whether the address was assigned or unassigned the colony `ARCHITECTURE` role.|


### `ColonyBootstrapped`

**Event Handler**

```js
const eventHandler = ({
  addresses,
  amounts,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.ColonyBootstrapped.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.ColonyBootstrapped.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|addresses|array|The array of users that received an initial amount of tokens and reputation.|
|amounts|array|The array of corresponding token and reputation amounts each user recieved.|


### `ColonyFundingRoleSet`

**Event Handler**

```js
const eventHandler = ({
  address,
  setTo,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.ColonyFundingRoleSet.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.ColonyFundingRoleSet.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|address|address|The address that was either assigned or unassigned the colony `FUNDING` role.|
|setTo|boolean|A boolean indicating whether the address was assigned or unassigned the colony `FUNDING` role.|


### `ColonyFundsClaimed`

**Event Handler**

```js
const eventHandler = ({
  token,
  fee,
  payoutRemainder,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.ColonyFundsClaimed.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.ColonyFundsClaimed.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|fee|big number|The fee deducted from the claim and added to the colony rewards pot.|
|payoutRemainder|big number|The remaining funds (after the fee) moved to the top-level domain pot.|


### `ColonyFundsMovedBetweenFundingPots`

**Event Handler**

```js
const eventHandler = ({
  fromPot,
  toPot,
  amount,
  token,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.ColonyFundsMovedBetweenFundingPots.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.ColonyFundsMovedBetweenFundingPots.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|fromPot|number|The ID of the pot from which the funds were moved.|
|toPot|number|The ID of the pot to which the funds were moved.|
|amount|big number|The amount of funds that were moved between pots.|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|


### `ColonyInitialised`

**Event Handler**

```js
const eventHandler = ({
  colonyNetwork,
  token,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.ColonyInitialised.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.ColonyInitialised.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|colonyNetwork|address|The address of the Colony Network.|
|token|address (0x0 included)|The address of the token contract.|


### `ColonyLabelRegistered`

**Event Handler**

```js
const eventHandler = ({
  colony,
  label,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.ColonyLabelRegistered.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.ColonyLabelRegistered.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|colony|address|The address of the colony that was modified.|
|label|string|The label that was registered for the colony.|


### `ColonyRewardInverseSet`

**Event Handler**

```js
const eventHandler = ({
  rewardInverse,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.ColonyRewardInverseSet.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.ColonyRewardInverseSet.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|rewardInverse|big number|The reward inverse value that was set.|


### `ColonyRoleSet`

**Event Handler**

```js
const eventHandler = ({
  address,
  domainId,
  role,
  setTo,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.ColonyRoleSet.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.ColonyRoleSet.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|address|address||
|domainId|number||
|role|undefined||
|setTo|boolean||


### `ColonyRootRoleSet`

**Event Handler**

```js
const eventHandler = ({
  address,
  setTo,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.ColonyRootRoleSet.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.ColonyRootRoleSet.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|address|address|The address that was either assigned or unassigned the colony `ROOT` role.|
|setTo|boolean|A boolean indicating whether the address was assigned or unassigned the colony `ROOT` role.|


### `ColonyUpgraded`

**Event Handler**

```js
const eventHandler = ({
  oldVersion,
  newVersion,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.ColonyUpgraded.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.ColonyUpgraded.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|oldVersion|number|The old version number of the colony.|
|newVersion|number|The new version number of the colony.|


### `ColonyVersionAdded`

**Event Handler**

```js
const eventHandler = ({
  version,
  resolver,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.ColonyVersionAdded.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.ColonyVersionAdded.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|version|number|The colony contract version that was added.|
|resolver|address|The address of the `Resolver` contract which will be used with the underlying `EtherRouter` contract.|


### `DomainAdded`

**Event Handler**

```js
const eventHandler = ({
  domainId,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.DomainAdded.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.DomainAdded.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|domainId|number|The ID of the domain that was added.|


### `FundingPotAdded`

**Event Handler**

```js
const eventHandler = ({
  potId,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.FundingPotAdded.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.FundingPotAdded.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|potId|number|The ID of the pot that was added.|


### `Mint`

**Event Handler**

```js
const eventHandler = ({
  address,
  amount,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.Mint.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.Mint.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|address|address|The address that initiated the mint event.|
|amount|big number|The amount of tokens that were minted.|


### `PaymentAdded`

**Event Handler**

```js
const eventHandler = ({
  paymentId,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.PaymentAdded.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.PaymentAdded.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|paymentId|number|The ID of the payment that was added.|


### `PayoutClaimed`

**Event Handler**

```js
const eventHandler = ({
  potId,
  token,
  amount,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.PayoutClaimed.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.PayoutClaimed.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|potId|number|The ID of the pot that was modified.|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|amount|big number|The task payout amount that was claimed.|


### `RewardPayoutClaimed`

**Event Handler**

```js
const eventHandler = ({
  rewardPayoutId,
  user,
  fee,
  payoutRemainder,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.RewardPayoutClaimed.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.RewardPayoutClaimed.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|rewardPayoutId|number|The ID of the reward payout cycle.|
|user|address|The address of the user who claimed the reward payout.|
|fee|big number|The fee deducted from the claim and added to the colony rewards pot.|
|payoutRemainder|big number|The remaining payout amount (after the fee) transferred to the user.|


### `RewardPayoutCycleEnded`

**Event Handler**

```js
const eventHandler = ({
  payoutId,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.RewardPayoutCycleEnded.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.RewardPayoutCycleEnded.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|payoutId|number|The ID of the payout cycle that ended.|


### `RewardPayoutCycleStarted`

**Event Handler**

```js
const eventHandler = ({
  payoutId,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.RewardPayoutCycleStarted.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.RewardPayoutCycleStarted.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|payoutId|number|The ID of the payout cycle that started.|


### `SkillAdded`

**Event Handler**

```js
const eventHandler = ({
  skillId,
  parentSkillId,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.SkillAdded.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.SkillAdded.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|skillId|number|The ID of the skill that was added.|
|parentSkillId|number|The ID of the parent skill.|


### `TaskAdded`

**Event Handler**

```js
const eventHandler = ({
  taskId,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.TaskAdded.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.TaskAdded.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was added.|


### `TaskBriefSet`

**Event Handler**

```js
const eventHandler = ({
  taskId,
  specificationHash,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.TaskBriefSet.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.TaskBriefSet.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|specificationHash|IPFS hash|The specification hash that was set (an IPFS hash).|


### `TaskCanceled`

**Event Handler**

```js
const eventHandler = ({
  taskId,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.TaskCanceled.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.TaskCanceled.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was canceled.|


### `TaskCompleted`

**Event Handler**

```js
const eventHandler = ({
  taskId,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.TaskCompleted.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.TaskCompleted.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was completed.|


### `TaskDeliverableSubmitted`

**Event Handler**

```js
const eventHandler = ({
  taskId,
  deliverableHash,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.TaskDeliverableSubmitted.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.TaskDeliverableSubmitted.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|deliverableHash|IPFS hash|The deliverable hash that was submitted (an IPFS hash).|


### `TaskDomainSet`

**Event Handler**

```js
const eventHandler = ({
  taskId,
  domainId,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.TaskDomainSet.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.TaskDomainSet.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|domainId|number|The ID of the domain that was set.|


### `TaskDueDateSet`

**Event Handler**

```js
const eventHandler = ({
  taskId,
  dueDate,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.TaskDueDateSet.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.TaskDueDateSet.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|dueDate|date|The due date that was set.|


### `TaskFinalized`

**Event Handler**

```js
const eventHandler = ({
  taskId,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.TaskFinalized.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.TaskFinalized.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was finalized.|


### `TaskPayoutSet`

**Event Handler**

```js
const eventHandler = ({
  taskId,
  role,
  token,
  amount,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.TaskPayoutSet.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.TaskPayoutSet.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|amount|big number|The task payout amount that was set.|


### `TaskRoleUserSet`

**Event Handler**

```js
const eventHandler = ({
  taskId,
  role,
  user,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.TaskRoleUserSet.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.TaskRoleUserSet.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|user|address|The user that was assigned the task role.|


### `TaskSkillSet`

**Event Handler**

```js
const eventHandler = ({
  taskId,
  skillId,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.TaskSkillSet.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.TaskSkillSet.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|skillId|number|The ID of the skill that was set.|


### `TaskWorkRatingRevealed`

**Event Handler**

```js
const eventHandler = ({
  taskId,
  role,
  rating,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.TaskWorkRatingRevealed.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.TaskWorkRatingRevealed.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|taskId|number|The ID of the task that was modified.|
|role|task role|The role of the task that received the rating (`MANAGER`, `EVALUATOR`, or `WORKER`).|
|rating|number|The value of the rating that was revealed (`1`, `2`, or `3`).|


### `TokenLocked`

**Event Handler**

```js
const eventHandler = ({
  token,
  lockCount,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.TokenLocked.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.TokenLocked.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|token|address (0x0 included)|The address of the token contract (an empty address if Ether).|
|lockCount|number|The total lock count for the token.|


### `Transfer`

**Event Handler**

```js
const eventHandler = ({
  from,
  to,
  value,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyClient.events.Transfer.addListener(eventHandler);
```

**Remove Listener**

```js
colonyClient.events.Transfer.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|from|address|The address of the account that sent tokens.|
|to|address|The address of the account that received tokens.|
|value|big number|The amount of tokens that were transferred.|