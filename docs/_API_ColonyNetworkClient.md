---
title: ColonyNetworkClient
section: API
order: 2
---

The `ColonyNetworkClient` is a standard interface for interactions with functions and events described in `IColonyNetwork.sol`.

These interactions are generally concerned with the colony network as a whole, rather than at the colony level. This includes operations like getting a count of all colonies on the network, querying for information about a parent skillId, or deposits/withdrawals of staked CLNY for use in the reputation system.

You can learn more about the solidity implementation from the [Colony Network Docs](/colonynetwork/docs-colony).

For interactions within a particular colony, see the [ColonyClient API](/colonyjs/api-colonyclient/).

==TOC==

## Create an instance

You can create an instance of `ColonyNetworkClient` by providing an [adapter](/colonyjs/docs-adapters):

```js

const networkClient = new ColonyNetworkClient({ adapter });

await networkClient.init();

```

## Instance methods

**All instance methods return promises.**

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

### `getRecoveryRolesCount.call()`

Returns the number of recovery roles.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|Number of users with the recovery role (excluding owner)|

### `isInRecoveryMode.call()`

Is the colony in recovery mode?


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|inRecoveryMode|boolean|Return true if recovery mode is active, false otherwise|

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

### `getProfileDBAddress.call({ nameHash })`

Returns the database address of a user when given the hashed ENS username

**Arguments**

|Argument|Type|Description|
|---|---|---|
|nameHash|Hex string|The hashed human-readable ENS name|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|orbitDBAddress|string|Address of the UserProfile DDB|

### `lookupRegisteredENSDomain.call({ ensAddress })`

Given an Ethereum address, returns a user's or colony's human-readable name, or an empty string if the address has no Colony-based ENS name

**Arguments**

|Argument|Type|Description|
|---|---|---|
|ensAddress|Address|The address we wish to find the corresponding ENS domain for (if any)|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|domain|string|A string containing the colony-based ENS name corresponding to `ensAddress`|

### `getAddressForENSHash.call({ nameHash })`

Given a hash of the ENS name, returns the Ethereum address registered with it

**Arguments**

|Argument|Type|Description|
|---|---|---|
|nameHash|Hex string|The hashed human-readable ENS name|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|ensAddress|Address|The registered ENS username for a colony or a user|

### `ensSupportsInterface.call({ interfaceId })`

Given an ENS interface, returns a boolean indicating whether the interface is supported

**Arguments**

|Argument|Type|Description|
|---|---|---|
|interfaceId|Hex string|The interface identifier, as specified in ERC-165|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|isSupported|boolean|Returns `true` if the contract implements `interfaceId`|

  
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



### `createToken.send({ name, symbol, decimals }, options)`

Deploys a new ERC20 compatible token contract for you to use with your Colony. You can also use your own token when creating a Colony.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|name|string|Name of the token to create|
|symbol|string|Symbol of the token (e.g. CLNY)|
|decimals|number|Decimals to use for your token|

**Returns**

An instance of a `ContractResponse` which will receive a receipt with a `contractAddress` property (the address of the newly-deployed contract)



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
|skillId|number|The numeric ID of the skill that was added.|
|parentSkillId|number|The numeric ID of the parent skill.|
|SkillAdded|object|Contains the data defined in [SkillAdded](#eventsskilladdedaddlistener-skillid-parentskillid-------)|

### `setTokenLocking.send({ tokenLockingAddress }, options)`

Sets the token locking address.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|tokenLockingAddress|Address|Address of the locking contract|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|tokenLocking|Address|The address of the token locking contract.|
|TokenLockingAddressSet|object|Contains the data defined in [TokenLockingAddressSet](#eventstokenlockingaddresssetaddlistener-tokenlocking-------)|

### `createMetaColony.send({ tokenAddress }, options)`

Create the Meta Colony, same as a normal Colony plus the root skill.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|tokenAddress|Address|Token to import. Note: the ownership of the token contract must be transferred to the newly-created Meta Colony.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|colonyAddress|number|The address of the Meta Colony.|
|tokenAddress|Address|The address of the CLNY token contract.|
|rootSkillId|number|The numeric ID of the root skill.|
|MetaColonyCreated|object|Contains the data defined in [MetaColonyCreated](#eventsmetacolonycreatedaddlistener-colonyaddress-tokenaddress-rootskillid-------)|

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
|colonyId|number|The numeric ID of the colony that was added.|
|colonyAddress|Address|The address of the colony contract that was created.|
|tokenAddress|Address|The address of the token contract that was assigned.|
|ColonyAdded|object|Contains the data defined in [ColonyAdded](#eventscolonyaddedaddlistener-colonyid-colonyaddress-tokenaddress-------)|

### `addColonyVersion.send({ version, resolver }, options)`

Adds a new Colony contract version and the address of associated Resolver contract.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|version|number|The new Colony contract version|
|resolver|Address|Address of the Resolver contract|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|version|number|The version number of the colony contract that was added.|
|resolver|Address|The address of the resolver contract.|
|ColonyVersionAdded|object|Contains the data defined in [ColonyVersionAdded](#eventscolonyversionaddedaddlistener-version-resolver-------)|

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
|auction|string|The address of the auction contract that was created.|
|token|Address|The address of the token contract that was assigned.|
|quantity|BigNumber|The amount of tokens available for the auction.|
|AuctionCreated|object|Contains the data defined in [AuctionCreated](#eventsauctioncreatedaddlistener-auction-token-quantity-------)|

### `setupRegistrar.send({ ens, rootNode }, options)`

Setup registrar with ENS and root node.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|ens|Address|Address of ENS registrar|
|rootNode|string|Namehash of the root node for the domain|

**Returns**

An instance of a `ContractResponse`



### `registerUserLabel.send({ username, orbitDBPath }, options)`

Register a "user.joincolony.eth" label.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|username|string|The label to register|
|orbitDBPath|string|The path of the OrbitDB database associated with the user profile|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|user|Address|The address of the user that registered a label.|
|label|string|The ENS label that was registered for the user.|
|UserLabelRegistered|object|Contains the data defined in [UserLabelRegistered](#eventsuserlabelregisteredaddlistener-user-label-------)|

  
  
## Events

Refer to the `ContractEvent` class [here](/colonyjs/docs-contractclient/#events) to interact with these events.


### `events.ColonyAdded.addListener(({ colonyId, colonyAddress, tokenAddress }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|colonyId|number|The numeric ID of the colony that was added.|
|colonyAddress|Address|The address of the colony contract that was created.|
|tokenAddress|Address|The address of the token contract that was assigned.|


### `events.SkillAdded.addListener(({ skillId, parentSkillId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|skillId|number|The numeric ID of the skill that was added.|
|parentSkillId|number|The numeric ID of the parent skill.|


### `events.AuctionCreated.addListener(({ auction, token, quantity }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|auction|string|The address of the auction contract that was created.|
|token|Address|The address of the token contract that was assigned.|
|quantity|BigNumber|The amount of tokens available for the auction.|


### `events.UserLabelRegistered.addListener(({ user, label }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|The address of the user that registered a label.|
|label|string|The ENS label that was registered for the user.|


### `events.ColonyLabelRegistered.addListener(({ colony, label }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|colony|Address|The address of the colony that registered a label.|
|label|string|The ENS label that was registered for the colony.|


### `events.ReputationMiningInitialised.addListener(({ inactiveReputationMiningCycle }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|inactiveReputationMiningCycle|Address|The address of the reputation mining cycle that was initialized.|


### `events.ReputationMiningCycleComplete.addListener(({ hash, nNodes }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|hash|Hex string|The root hash of the reputation state that was accepted.|
|nNodes|number|The total number of nodes in the reputation state.|


### `events.ReputationRootHashSet.addListener(({ newHash, newNNodes, stakers, reward }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|newHash|Hex string|The reputation root hash that was set.|
|newNNodes|number|The total number of nodes in the reputation state.|
|stakers|undefined|The array of users who submitted or backed the accepted hash.|
|reward|undefined|The array of corresponding amounts of CLNY each user received.|


### `events.TokenLockingAddressSet.addListener(({ tokenLocking }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|tokenLocking|Address|The address of the token locking contract.|


### `events.ColonyNetworkInitialised.addListener(({ resolver }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|resolver|Address|The address of the resolver contract.|


### `events.MiningCycleResolverSet.addListener(({ miningCycleResolver }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|miningCycleResolver|Address|The address of the resolver contract for the reputation mining cycle contract.|


### `events.NetworkFeeInverseSet.addListener(({ feeInverse }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|feeInverse|BigNumber|The inverse value of the network fee that was set.|


### `events.ColonyVersionAdded.addListener(({ version, resolver }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|version|number|The version number of the colony contract that was added.|
|resolver|Address|The address of the resolver contract.|


### `events.MetaColonyCreated.addListener(({ colonyAddress, tokenAddress, rootSkillId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|colonyAddress|number|The address of the Meta Colony.|
|tokenAddress|Address|The address of the CLNY token contract.|
|rootSkillId|number|The numeric ID of the root skill.|