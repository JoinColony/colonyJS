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

**All callers return promises which resolve to an object containing the given return values.** For a reference please check [here](/colonyjs/docs-contractclient/#callers).

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

### `isColony.call({ colony })`

Check if specific address is a Colony created on the Colony Network

**Arguments**

|Argument|Type|Description|
|---|---|---|
|colony|Address|Address of the colony|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|isColony|boolean|Whether specified address is a colony|

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

### `getChildSkillId.call({ skillId, childSkillIndex })`

Given the id of a particular skill, returns the child skill at the given index

**Arguments**

|Argument|Type|Description|
|---|---|---|
|skillId|number|Id of the skill|
|childSkillIndex|number|Index of the `skill.children` array to get|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|childSkillId|number|Id of the child skill|

### `getSkill.call({ skillId })`

Returns the number of parent and child skills associated with the provided skill

**Arguments**

|Argument|Type|Description|
|---|---|---|
|skillId|number|skillId to be checked|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|nParents|number|Number of parent skills|
|nChildren|number|Number of child skills|
|isGlobalSkill|boolean|Whether the specified skill is a global skill|

### `getSkillCount.call()`

Get the total number of skills in the network (both global and local skills)


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|The number of skills on the network|

### `getRootGlobalSkillId.call()`

Get the ID of the root global skill.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|skillId|number|The root global skill id|

### `getTokenLocking.call()`

Get the token locking contract address.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|lockingAddress|Address|Token locking contract address|

  
## Senders

**All senders return an instance of a `ContractResponse`.** Every `send()` method takes an `options` object as the second argument. For a reference please check [here](/colonyjs/docs-contractclient/#senders).
### `addSkill.send({ parentSkillId, globalSkill }, options)`

Adds a new skill to the global or local skills tree.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|parentSkillId|number|The skill under which the new skill will be added|
|globalSkill|boolean|Whether the new skill is global|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|skillId|number|Id of the added skill|
|parentSkillId|number|Id of the parent skill under which the new skill is added|

### `setTokenLocking.send({ tokenLockingAddress }, options)`

Sets the token locking address.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|tokenLockingAddress|Address|Address of the locking contract|

**Returns**

An instance of a `ContractResponse`



### `createMetaColony.send({ tokenAddress }, options)`

Create the Meta Colony, same as a normal Colony plus the root skill.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|tokenAddress|Address|Token to import. Note: the ownership of the token contract must be transferred to the newly-created Meta Colony.|

**Returns**

An instance of a `ContractResponse`



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
|ColonyAdded|object|Contains the data defined in [ColonyAdded](#events-ColonyAdded)|

### `addColonyVersion.send({ version, resolver }, options)`

Adds a new Colony contract version and the address of associated Resolver contract.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|version|number|The new Colony contract version|
|resolver|Address|Address of the Resolver contract|

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
|quantity|BigNumber|The amount of available tokens for auction|
|AuctionCreated|object|Contains the data defined in [AuctionCreated](#events-AuctionCreated)|

### `setupRegistrar.send({ ens, rootNode }, options)`

Setup registrar with ENS and root node.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|ens|Address|Address of ENS registrar|
|rootNode|string|Namehash of the root node for the domain|

**Returns**

An instance of a `ContractResponse`



### `registerUserLabel.send({ subnode }, options)`

Register a "user.joincolony.eth" label.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|subnode|string|The keccak256 hash of the label to register|

**Returns**

An instance of a `ContractResponse`



  
  
## Events

Refer to the `ContractEvent` class [here](/colonyjs/docs-contractclient/#events) to interact with these events.


### [events.ColonyAdded.addListener(({ colonyId, colonyAddress }) => { /* ... */ })](#events-ColonyAdded)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|colonyId|number|ID of the newly-created Colony|
|colonyAddress|Address|Address of the newly-created Colony|


### [events.SkillAdded.addListener(({ skillId, parentSkillId }) => { /* ... */ })](#events-SkillAdded)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|skillId|number||
|parentSkillId|number||


### [events.AuctionCreated.addListener(({ auction, token, quantity }) => { /* ... */ })](#events-AuctionCreated)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|auction|string|The address of the auction contract|
|token|Address|The address of the token being auctioned|
|quantity|BigNumber|The amount of available tokens for auction|