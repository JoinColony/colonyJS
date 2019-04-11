---
title: ColonyNetworkClient
section: API
order: 2
---

The `ColonyNetworkClient` is a standard interface for interactions with methods and events described in `IColonyNetwork.sol`. These interactions are generally concerned with the colony network as a whole. This includes operations like getting a count of all colonies on the network, querying for information about a skill, or registering an ENS label for a user.

See [Clients](/colonyjs/components-clients) for more information about initializing `ColonyNetworkClient`.

See [ContractClient](/colonyjs/api-contractclient) for more information about the `ContractClient` superclass.

## Table of Contents

==TOC==

## Instance methods

**All instance methods return promises.**

### `getColonyAddress(id)`

Get the address of a Colony for the specified id of a deployed colony contract.

**Input**

|Property|Type|Description|
|---|---|---|
|key|string|Name of the Colony to get|
|id|number|Integer number of the Colony|

**Response**

`Promise<Address>`. The address of the given Colony contract

### `getColonyClient(id)`

Returns an initialized ColonyClient for the specified id of a deployed colony contract.

**Input**

|Property|Type|Description|
|---|---|---|
|key|string|Name of the Colony to get|
|id|number|Integer number of the Colony|

**Response**

`Promise<ColonyClient>`. An instance of a `ColonyClient` associated with the given Colony contract

### `getColonyClientByAddress(contractAddress)`

Returns an initialized ColonyClient for the contract at address `contractAddress`

**Input**

|Property|Type|Description|
|---|---|---|
|contractAddress|Adress|Address of a deployed Colony contract|

**Response**

`Promise<ColonyClient>`. An instance of a `ColonyClient` associated with the given Colony contract

### `getMetaColonyClient()`

Gets the Meta Colony as an initialized ColonyClient

**Response**

`Promise<ColonyClient>`. An instance of a `ColonyClient` associated with the MetaColony contract

  
## Callers

**All callers return promises which resolve to an object containing the given return values.**

### `ensSupportsInterface.call({ interfaceId })`

Check whether or not ENS supports a contract interface. A supported contract interface implements `interfaceId`.

**Input**

|Name|Type|Description|
|---|---|---|
|interfaceId|hex string|The hashed ID of the contract interface as specified in ERC-165.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|isSupported|boolean|A boolean indicating whether or not the contract interface is supported.|

**Contract Information**


  Function: `supportsInterface`
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `getAddressForENSHash.call({ nameHash })`

Get the address of a registered ENS label. This function will return an empty address if an ENS label has not been registered.

**Input**

|Name|Type|Description|
|---|---|---|
|nameHash|hex string|The hached ENS label that will be checked.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|ensAddress|address|The address associated with the ENS label.|

**Contract Information**


  Function: `addr`
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `getChildSkillId.call({ skillId, childSkillIndex })`

Get the ID of a child skill.

**Input**

|Name|Type|Description|
|---|---|---|
|skillId|number|The numberic ID of the skill that will be checked.|
|childSkillIndex|number|The index of the child skill array to be checked.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|childSkillId|number|The ID of the child skill.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `getColony.call({ id })`

Get the colony contract address for a colony.

**Input**

|Name|Type|Description|
|---|---|---|
|id|number|The ID of the colony.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|address|address|The address of the colony contract.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `getColonyCount.call()`

Get the total number of colonies on the network. The return value is also the ID of the last colony created.


**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|count|number|The total number of colonies.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `getColonyVersionResolver.call({ version })`

Get the address of the resolver contract for a specific colony version.

**Input**

|Name|Type|Description|
|---|---|---|
|version|number|The version number of the colony contract.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|address|address|The address of the resolver contract.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `getCurrentColonyVersion.call()`

Get the latest colony contract version. This is the version used to create all new colonies.


**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|version|number|The version number of the latest colony contract.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `getFeeInverse.call()`

Get the inverse amount of the network fee. If the fee is 1% (or 0.01), the inverse amount will be 100.


**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|feeInverse|big number|The inverse amount of the network fee.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `getMetaColonyAddress.call()`

Get the Meta Colony contract address.


**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|address|address|The address of the Meta Colony contract.|

**Contract Information**


  Function: `getMetaColony`
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `getParentSkillId.call({ skillId, parentSkillIndex })`

Get the ID of a parent skill.

**Input**

|Name|Type|Description|
|---|---|---|
|skillId|number|The numberic ID of the skill that will be checked.|
|parentSkillIndex|number|The index of the parent skill array to be checked.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|parentSkillId|number|The ID of the parent skill.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `getProfileDBAddress.call({ nameHash })`

Get the address of the OrbitDB database associaated with a user profile.

**Input**

|Name|Type|Description|
|---|---|---|
|nameHash|hex string|The hashed ENS label that was registered for the user.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|orbitDBAddress|string|The path of the OrbitDB database associated with the user profile.|

**Contract Information**


  
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `getRecoveryRolesCount.call()`

Get the total number of users that are assigned a network recovery role.


**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|count|number|The total number of users that are assigned a colony recovery role.|

**Contract Information**


  Function: `numRecoveryRoles`
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IRecovery.sol)
  

### `getRootGlobalSkillId.call()`

Get the ID of the root global skill.


**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|skillId|number|The ID of the root global skill.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `getSkill.call({ skillId })`

Get information about a domain.

**Input**

|Name|Type|Description|
|---|---|---|
|skillId|number|The ID of the skill.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|nParents|number|The total number of parent skills.|
|nChildren|number|The total number of child skills.|
|isGlobalSkill|boolean|A boolean indicating whether or not the skill is a global skill.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `getSkillCount.call()`

Get the total number of global and local skills in the network.


**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|count|number|The total number of global and local skills in the network.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `getTokenLocking.call()`

Get the token locking contract address.


**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|lockingAddress|address|The address of the token locking contract.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `isColony.call({ colony })`

Check whether or not an address is a colony contract.

**Input**

|Name|Type|Description|
|---|---|---|
|colony|address|The address that will be checked.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|isColony|boolean|A boolean indicating whether or not an address is a colony contract.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `isInRecoveryMode.call()`

Check whether or not the network is in recovery mode.


**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|inRecoveryMode|boolean|A boolean indicating whether or not the network is in recovery mode.|

**Contract Information**


  
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IRecovery.sol)
  

### `lookupRegisteredENSDomain.call({ ensAddress })`

Lookup the registed ENS label for an address. This function will return an empty string if the address does not have a registered ENS label.

**Input**

|Name|Type|Description|
|---|---|---|
|ensAddress|address|The address that will checked.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|domain|string|The ENS label associated with the address.|

**Contract Information**


  
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

  
## Senders

**All senders return an instance of a `ContractResponse`.** Every `send()` method takes an `options` object as the second argument.
### `addColonyVersion.send({ version, resolver }, options)`

Add a new colony contract version and set the address of the resolver contract.

**Input**

|Name|Type|Description|
|---|---|---|
|version|number|The versions number of the colony contract.|
|resolver|address|The address of the resolver contract.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|version|number|The version number of the colony contract that was added.|
|resolver|address|The address of the resolver contract.|
|ColonyVersionAdded|object|Contains the data defined in [ColonyVersionAdded](#eventscolonyversionadded)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `addSkill.send({ parentSkillId, globalSkill }, options)`

Add a new global or local skill to the skills tree.

**Input**

|Name|Type|Description|
|---|---|---|
|parentSkillId|number|The ID of the skill under which the new skill will be added.|
|globalSkill|boolean|A boolean indicating whether or not the skill will be a global skill.|

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


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `approveExitRecovery.send(options)`

Indicate approval to exit network recovery mode. This function can only be called by a user with a recovery role.


**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IRecovery.sol)
  

### `createColony.send({ tokenAddress }, options)`

Create a new colony on the network.

**Input**

|Name|Type|Description|
|---|---|---|
|tokenAddress|address|The address of the token contract.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|colonyId|number|The ID of the colony that was added.|
|colonyAddress|address|The address of the colony contract that was created.|
|tokenAddress|address|The address of the token contract that was assigned.|
|ColonyAdded|object|Contains the data defined in [ColonyAdded](#eventscolonyadded)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `createMetaColony.send({ tokenAddress }, options)`

Create the Meta Colony.

**Input**

|Name|Type|Description|
|---|---|---|
|tokenAddress|address|The address of the token contract.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|colonyAddress|number|The address of the Meta Colony.|
|tokenAddress|address|The address of the CLNY token contract.|
|rootSkillId|number|The ID of the root skill.|
|MetaColonyCreated|object|Contains the data defined in [MetaColonyCreated](#eventsmetacolonycreated)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `createToken.send({ symbol }, options)`

Create a new ERC20 token contract.

**Input**

|Name|Type|Description|
|---|---|---|
|symbol|string|The symbol of the token.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will receive a receipt with a `contractAddress` property.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [Token.sol](https://github.com/JoinColony/colonyToken/blob/7359eedaadacd55a1393c795964bd61513b2af33/contracts/Token.sol)
  
  

### `enterRecoveryMode.send(options)`

Enter network recovery mode. This function can only be called by a user with a recovery role.


**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IRecovery.sol)
  

### `exitRecoveryMode.send(options)`

Exit network recovery mode. This function can be called by anyone if enough whitelist approvals are given.


**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IRecovery.sol)
  

### `registerUserLabel.send({ username, orbitDBPath }, options)`

Register an ENS label for a user.

**Input**

|Name|Type|Description|
|---|---|---|
|username|string|The ENS label that will be registered for the user.|
|orbitDBPath|string|The path of the OrbitDB database associated with the user profile.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|user|address|The address of the user that registered a label.|
|label|string|The ENS label that was registered for the user.|
|UserLabelRegistered|object|Contains the data defined in [UserLabelRegistered](#eventsuserlabelregistered)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `removeRecoveryRole.send({ user }, options)`

Remove the network recovery role from a user. This function can only be called by the `FOUNDER` authority role.

**Input**

|Name|Type|Description|
|---|---|---|
|user|address|The address of the user that will be unassigned a network recovery role.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IRecovery.sol)
  

### `setFeeInverse.send({ feeInverse }, options)`

Set the inverse amount of the network fee. If the fee is 1% (or 0.01), the inverse amount will be 100.

**Input**

|Name|Type|Description|
|---|---|---|
|feeInverse|big number|The inverse amount of the network fee.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|feeInverse|big number|The inverse value of the network fee that was set.|
|NetworkFeeInverseSet|object|Contains the data defined in [NetworkFeeInverseSet](#eventsnetworkfeeinverseset)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `setRecoveryRole.send({ user }, options)`

Assign a network recovery role to a user. This function can only be called by the `FOUNDER` authority role.

**Input**

|Name|Type|Description|
|---|---|---|
|user|address|The address of the user that will be assigned a network recovery role.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IRecovery.sol)
  

### `setStorageSlotRecovery.send({ slot, value }, options)`

Set the value for a storage slot while in recovery mode. This can only be called by a user with a recovery role.

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


  
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IRecovery.sol)
  

### `setTokenLocking.send({ tokenLockingAddress }, options)`

Set the token locking address.

**Input**

|Name|Type|Description|
|---|---|---|
|tokenLockingAddress|address|The address of the locking contract.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|tokenLocking|address|The address of the token locking contract.|
|TokenLockingAddressSet|object|Contains the data defined in [TokenLockingAddressSet](#eventstokenlockingaddressset)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `setupRegistrar.send({ ens, rootNode }, options)`

Set up the registrar.

**Input**

|Name|Type|Description|
|---|---|---|
|ens|address|The adddress of the ENS registrar.|
|rootNode|string|The namehash of the root node for the domain.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

### `startTokenAuction.send({ tokenAddress }, options)`

Create and start an auction for a token owned by the Colony Network. The auction will be for the total amount of the specificed tokens that are owned by the Colony Network.

**Input**

|Name|Type|Description|
|---|---|---|
|tokenAddress|address|The address of the token contract.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|auction|string|The address of the auction contract that was created.|
|token|address|The address of the token contract that was assigned.|
|quantity|big number|The amount of tokens available for the auction.|
|AuctionCreated|object|Contains the data defined in [AuctionCreated](#eventsauctioncreated)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyNetworkAuction.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ColonyNetworkAuction.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/IColonyNetwork.sol)
  

  
  
## Events


### `events.AuctionCreated`

**Methods**

`.addListener(({ auction, token, quantity }) => { /* ... */ })`

`.removeListener(({ auction, token, quantity }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|auction|string|The address of the auction contract that was created.|
|token|address|The address of the token contract that was assigned.|
|quantity|big number|The amount of tokens available for the auction.|


### `events.ColonyAdded`

**Methods**

`.addListener(({ colonyId, colonyAddress, tokenAddress }) => { /* ... */ })`

`.removeListener(({ colonyId, colonyAddress, tokenAddress }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|colonyId|number|The ID of the colony that was added.|
|colonyAddress|address|The address of the colony contract that was created.|
|tokenAddress|address|The address of the token contract that was assigned.|


### `events.ColonyLabelRegistered`

**Methods**

`.addListener(({ colony, label }) => { /* ... */ })`

`.removeListener(({ colony, label }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|colony|address|The address of the colony that registered a label.|
|label|string|The ENS label that was registered for the colony.|


### `events.ColonyNetworkInitialised`

**Methods**

`.addListener(({ resolver }) => { /* ... */ })`

`.removeListener(({ resolver }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|resolver|address|The address of the resolver contract.|


### `events.ColonyVersionAdded`

**Methods**

`.addListener(({ version, resolver }) => { /* ... */ })`

`.removeListener(({ version, resolver }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|version|number|The version number of the colony contract that was added.|
|resolver|address|The address of the resolver contract.|


### `events.MetaColonyCreated`

**Methods**

`.addListener(({ colonyAddress, tokenAddress, rootSkillId }) => { /* ... */ })`

`.removeListener(({ colonyAddress, tokenAddress, rootSkillId }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|colonyAddress|number|The address of the Meta Colony.|
|tokenAddress|address|The address of the CLNY token contract.|
|rootSkillId|number|The ID of the root skill.|


### `events.MiningCycleResolverSet`

**Methods**

`.addListener(({ miningCycleResolver }) => { /* ... */ })`

`.removeListener(({ miningCycleResolver }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|miningCycleResolver|address|The address of the resolver contract for the reputation mining cycle contract.|


### `events.NetworkFeeInverseSet`

**Methods**

`.addListener(({ feeInverse }) => { /* ... */ })`

`.removeListener(({ feeInverse }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|feeInverse|big number|The inverse value of the network fee that was set.|


### `events.ReputationMiningCycleComplete`

**Methods**

`.addListener(({ hash, nNodes }) => { /* ... */ })`

`.removeListener(({ hash, nNodes }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|hash|hex string|The root hash of the reputation state that was accepted.|
|nNodes|number|The total number of nodes in the reputation state.|


### `events.ReputationMiningInitialised`

**Methods**

`.addListener(({ inactiveReputationMiningCycle }) => { /* ... */ })`

`.removeListener(({ inactiveReputationMiningCycle }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|inactiveReputationMiningCycle|address|The address of the reputation mining cycle that was initialized.|


### `events.ReputationRootHashSet`

**Methods**

`.addListener(({ newHash, newNNodes, stakers, reward }) => { /* ... */ })`

`.removeListener(({ newHash, newNNodes, stakers, reward }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|newHash|hex string|The reputation root hash that was set.|
|newNNodes|number|The total number of nodes in the reputation state.|
|stakers|array|The array of users who submitted or backed the accepted hash.|
|reward|array|The array of corresponding amounts of CLNY each user received.|


### `events.SkillAdded`

**Methods**

`.addListener(({ skillId, parentSkillId }) => { /* ... */ })`

`.removeListener(({ skillId, parentSkillId }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|skillId|number|The ID of the skill that was added.|
|parentSkillId|number|The ID of the parent skill.|


### `events.TokenLockingAddressSet`

**Methods**

`.addListener(({ tokenLocking }) => { /* ... */ })`

`.removeListener(({ tokenLocking }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|tokenLocking|address|The address of the token locking contract.|


### `events.UserLabelRegistered`

**Methods**

`.addListener(({ user, label }) => { /* ... */ })`

`.removeListener(({ user, label }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|user|address|The address of the user that registered a label.|
|label|string|The ENS label that was registered for the user.|