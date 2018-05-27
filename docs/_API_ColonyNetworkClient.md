---
title: ColonyNetworkClient
section: API
order: 2
---

The `ColonyNetworkClient` is a standard interface for interactions with functions and events described in `IColonyNetwork.sol`.

These interactions are generally concerned with the colony network as a whole, rather than at the colony level. This includes operations like getting a count of all colonies on the network, querying for information about a parent skillId, or deposits/withdrawals of staked CLNY for use in the reputation system.

You can learn more about the solidity implementation from the [Colony Network Docs](/colonynetwork/docs-colony).

For interactions within a particular colony, see [the ColonyClient docs](/colonyjs/api-colonyclient/).

==TOC==

## Creating a new instance

Assuming you're inside an `async` function:

```javascript
const networkClient = new ColonyNetworkClient({ adapter });
await networkClient.init();
```

## Instance methods

**All instance methods return promises.**

### `createToken({ name, symbol, decimals })`

Deploys a new ERC20 compatible token contract for you to use with your Colony. You can also use your own token when creating a Colony.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|name|string|Name of the token to create (e.g. Cool Colony Token)|
|symbol|string|Symbol of the token to create (e.g. CCT)|
|decimals|string|Decimals of your token (default: 18).|

**Returns**

`Promise<Address>` The address of the newly deployed token contract

### `getColonyClientByAddress(contractAddress)`

Returns an initialized ColonyClient for the contract at address `contractAddress`

**Arguments**

|Argument|Type|Description|
|---|---|---|
|contractAddress|Adress|Address of a deployed Colony contract|

**Returns**

`Promise<ColonyClient>`. An instance of a `ColonyClient` associated with the given Colony contract

### `getColonyClient(id)`

Returns an initialized ColonyClient for the specified id of a deployed colony contract.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|key|string|Name of the Colony to get|
|id|number|Integer number of the Colony|

**Returns**

`Promise<ColonyClient>`. An instance of a `ColonyClient` associated with the given Colony contract

### `getColonyAddress(id)`

Get the address of a Colony for the specified id of a deployed colony contract.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|key|string|Name of the Colony to get|
|id|number|Integer number of the Colony|

**Returns**

`Promise<Address>`. The address of the given Colony contract

### `getMetaColonyClient()`

Gets the Meta Colony as an initialized ColonyClient

**Returns**

`Promise<ColonyClient>`. An instance of a `ColonyClient` associated with the MetaColony contract

## Callers

**All callers return promises which resolve to an object containing the given return values.** For a reference please check [here](/colonyjs/docs-contract-client/#callers).

### `getColony.call({ id })`

Returns the address of a colony when given the ID

**Arguments**

|Argument|Type|Description|
|---|---|---|
|id|number|Integer colony ID|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|address|Address|Address of the colony contract|

### `getMetaColonyAddress.call()`

Returns the address of the Meta Colony


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|address|Address|Address of the Meta Colony contract|

### `getColonyCount.call()`

Returns the number of colonies created on the Colony Network, i.e. the colonyId of the most recently created colony.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|colonyId of the most recently created colony|

### `getColonyVersionResolver.call({ version })`

Given a version of the colony contract, returns the address of the corresponding `Resolver` contract

**Arguments**

|Argument|Type|Description|
|---|---|---|
|version|number|The Colony contract version|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|address|Address|Address of the `Resolver` contract|

### `getCurrentColonyVersion.call()`

Returns the latest Colony contract version. This is the version used to create all new colonies.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|version|number|The current / latest Colony contract version|

### `getParentSkillId.call({ skillId, parentSkillIndex })`

Given the id of a particular skill, returns the skill's parent skill id

**Arguments**

|Argument|Type|Description|
|---|---|---|
|skillId|number|Id of the skill|
|parentSkillIndex|number|Index of the `skill.parents` array to get|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|parentSkillId|number|Id of the parent skill|

### `getReputationUpdateLogEntry.call({ id })`

Gets the `ReputationLogEntry` at a specified index for either ther currently active or inactive reputation update log

**Arguments**

|Argument|Type|Description|
|---|---|---|
|id|number|The reputation log members array index of the entry to get|

**Returns**

A promise which resolves to an object containing the following properties:

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


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|Length of Reputation update log array|

### `getSkill.call({ id })`

Returns the number of parent and child skills associated with the provided skill

**Arguments**

|Argument|Type|Description|
|---|---|---|
|id|number|skillId to be checked|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|nParents|number|Number of parent skills|
|nChildren|number|Number of child skills|

### `getSkillCount.call()`

Get the total number of skills in the network (both global and local skills)


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|The number of skills on the network|

### `getStakedBalance.call({ user })`

Get the amount of staked CLNY tokens for a given user address

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|Address of the user|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|balance|number|Amount of staked CLNY|

## Senders

**All senders return an instance of a `ContractResponse`.** Every `send()` method takes an `options` object as the second argument. For a reference please check [here](/colonyjs/docs-contract-client/#senders).
### `createColony.send({ tokenAddress }, options)`

Creates a new colony on the network.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|tokenAddress|Address|Token to import. Note: the ownership of the token contract must be transferred to the newly-created Colony.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|colonyId|number|ID of the newly-created Colony|
|colonyAddress|Address|Address of the newly-created Colony|

### `deposit.send({ amount }, options)`

Allow a reputation miner to stake an amount of CLNY tokens, which is required before they can submit a new reputation root hash via `ReputationMiningCycle.submitNewHash`

**Arguments**

|Argument|Type|Description|
|---|---|---|
|amount|number|Amount of CLNY to stake|

**Returns**

An instance of a `ContractResponse`



### `startTokenAuction.send({ tokenAddress }, options)`

Create and start a new Dutch Auction for the entire amount of a specified token owned by the Colony Network

**Arguments**

|Argument|Type|Description|
|---|---|---|
|tokenAddress|Address|Address of the token held by the network to be auctioned|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|auction|string|The address of the auction contract|
|token|Address|The address of the token being auctioned|
|quantity|number|The amount of available tokens for auction|

### `upgradeColony.send({ id, newVersion }, options)`

Upgrades a colony to a new Colony contract version.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|id|number|Colony ID to be upgraded|
|newVersion|number|The target version for the upgrade|

**Returns**

An instance of a `ContractResponse`



### `withdraw.send({ amount }, options)`

Allow a user who has staked CLNY to withdraw their stake

**Arguments**

|Argument|Type|Description|
|---|---|---|
|amount|number|Amount of CLNY to withdraw from stake|

**Returns**

An instance of a `ContractResponse`
