---
title: ColonyNetworkClient
section: API
order: 2
---

The `ColonyNetworkClient` is a standard interface for interactions with methods and events described in `IColonyNetwork.sol`. These interactions are generally concerned with the colony network as a whole. This includes operations like getting a count of all colonies on the network, querying for information about a skill, or registering an ENS label for a user.

See [Clients](/colonyjs/components-clients) for more information about initializing `ColonyNetworkClient`.

See [ContractClient](/colonyjs/api-contractclient) for more information about the `ContractClient` superclass.

## Instance methods

### `getColonyAddress`

Get the address of a Colony for the specified id of a deployed colony contract.

```js

await colonyNetwork.getColonyAddress(id);

```

**Input**

|Property|Type|Description|
|---|---|---|
|id|number|The id of the colony|

**Response**

`Promise<Address>`. The address of the given Colony contract

### `getColonyClient`

Returns an initialized ColonyClient for the specified id of a deployed colony contract.

```js

await colonyNetwork.getColonyClient(id);

```

**Input**

|Property|Type|Description|
|---|---|---|
|id|number|The id of the colony|

**Response**

`Promise<ColonyClient>`. An instance of a `ColonyClient` associated with the given Colony contract

### `getColonyClientByAddress`

Returns an initialized ColonyClient for the contract at address `contractAddress`

```js

await colonyNetwork.getColonyClientByAddress(contractAddress);

```

**Input**

|Property|Type|Description|
|---|---|---|
|contractAddress|Adress|Address of a deployed Colony contract|

**Response**

`Promise<ColonyClient>`. An instance of a `ColonyClient` associated with the given Colony contract

### `getMetaColonyClient`

Gets the Meta Colony as an initialized ColonyClient

```js

await colonyNetwork.getMetaColonyClient();

```

**Response**

`Promise<ColonyClient>`. An instance of a `ColonyClient` associated with the MetaColony contract

  
## Callers


### `calculateMinerWeight`

Calculate the raw miner weight in WADs.

```js
await colonyNetworkClient.calculateMinerWeight.call({
  timeStaked,
  submissionIndexed,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|timeStaked|number|Amount of time (in seconds) that the miner has staked their CLNY.|
|submissionIndexed|number|The index of reputation hash submission (between `0` and `11`).|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|minerWeight|number|The weight of miner reward in WADs.|

**Contract Information**


  
  
Contract: [ColonyNetworkMining.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetworkMining.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IRecovery.sol)
  

### `ensSupportsInterface`

Check whether an ENS interface is supported.

```js
await colonyNetworkClient.ensSupportsInterface.call({
  interfaceId,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|interfaceId|hex string|The hashed ID of the contract interface as specified in ERC-165.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|isSupported|boolean|A boolean indicating whether or not the ENS interface is supported.|

**Contract Information**


  
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getAddressForENSHash`

Get the address of a registered ENS label. This function will return an empty address if an ENS label has not been registered.

```js
await colonyNetworkClient.getAddressForENSHash.call({
  nameHash,
});
```


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
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getChildSkillId`

Get the ID of a child skill.

```js
await colonyNetworkClient.getChildSkillId.call({
  skillId,
  childSkillIndex,
});
```


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


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getColony`

Get the colony contract address for a colony.

```js
await colonyNetworkClient.getColony.call({
  id,
});
```


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


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getColonyCount`

Get the total number of colonies on the network. The return value is also the ID of the last colony created.

```js
await colonyNetworkClient.getColonyCount.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|count|number|The total number of colonies.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getColonyVersionResolver`

Get the address of the resolver contract for a specific colony version.

```js
await colonyNetworkClient.getColonyVersionResolver.call({
  version,
});
```


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


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getCurrentColonyVersion`

Get the latest colony contract version. This is the version used to create all new colonies.

```js
await colonyNetworkClient.getCurrentColonyVersion.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|version|number|The version number of the latest colony contract.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getENSRegistrarAddress`

Get the address of the ENS registrar.

```js
await colonyNetworkClient.getENSRegistrarAddress.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|address|address|The address of the ENS registrar.|

**Contract Information**


  
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getFeeInverse`

Get the inverse amount of the network fee. If the fee is 1% (or 0.01), the inverse amount will be 100.

```js
await colonyNetworkClient.getFeeInverse.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|feeInverse|big number|The inverse amount of the network fee.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getMetaColonyAddress`

Get the Meta Colony contract address.

```js
await colonyNetworkClient.getMetaColonyAddress.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|address|address|The address of the Meta Colony contract.|

**Contract Information**


  Function: `getMetaColony`
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getMiningResolverAddress`

Get the address of the mining resolver.

```js
await colonyNetworkClient.getMiningResolverAddress.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|address|address|The address of the mining resolver.|

**Contract Information**


  Function: `getMiningResolver`
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getParentSkillId`

Get the ID of a parent skill.

```js
await colonyNetworkClient.getParentSkillId.call({
  skillId,
  parentSkillIndex,
});
```


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


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getProfileDBAddress`

Get the address of the OrbitDB database associaated with a user profile.

```js
await colonyNetworkClient.getProfileDBAddress.call({
  nameHash,
});
```


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


  
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getRecoveryRolesCount`

Get the total number of addresses that are assigned a `RECOVERY` role.

```js
await colonyNetworkClient.getRecoveryRolesCount.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|count|number|The total number of addresses that are assigned a `RECOVERY` role.|

**Contract Information**


  Function: `numRecoveryRoles`
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IRecovery.sol)
  

### `getReplacementReputationUpdateLogEntry`

Get replacement log entry that was set when the network was in recovery mode.

```js
await colonyNetworkClient.getReplacementReputationUpdateLogEntry.call({
  reputationMiningCycle,
  id,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|reputationMiningCycle|address||
|id|number||

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|user|address||
|amount|big number||
|skillId|number||
|colony|address||
|nUpdates|number||
|nPreviousUpdates|number||

**Contract Information**


  
  
Contract: [ColonyNetworkMining.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetworkMining.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getReplacementReputationUpdateLogsExist`

Get whether any replacement log entries have been set for the supplied reputation mining cycle.

```js
await colonyNetworkClient.getReplacementReputationUpdateLogsExist.call({
  reputationMiningCycle,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|reputationMiningCycle|address||

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|logsExist|boolean||

**Contract Information**


  
  
Contract: [ColonyNetworkMining.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetworkMining.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getReputationMiningCycle`

Get the address of either the active or inactive reputation mining cycle. The active reputation mining cycle is the one currently under consideration by reputation miners. The inactive reputation cycle is the one with the log that is being appended.

```js
await colonyNetworkClient.getReputationMiningCycle.call({
  active,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|active|boolean|A boolean indicating whether to get the active or inactive reputation mining cycle.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|address|address|The address of the reputation mining cycle.|

**Contract Information**


  
  
Contract: [ColonyNetworkMining.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetworkMining.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getReputationMiningSkillId`

Get the ID of the skill associated with reputation mining.

```js
await colonyNetworkClient.getReputationMiningSkillId.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|skillId|number|The ID of the skill associated with reputation mining.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getReputationRootHash`

Get the root hash of the current reputation state tree.

```js
await colonyNetworkClient.getReputationRootHash.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|rootHash|string|The root hash of the current reputation state tree.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getReputationRootHashNodeCount`

Get the number of nodes in the current reputation state tree.

```js
await colonyNetworkClient.getReputationRootHashNodeCount.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|nNodes|number|The number of nodes in the current reputation state tree.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getSkill`

Get information about a skill.

```js
await colonyNetworkClient.getSkill.call({
  skillId,
});
```


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
|parents|array|An array of parent skill ids.|
|children|array|An array of child skill ids.|
|isGlobalSkill|boolean|A boolean indicating whether or not the skill is a global skill.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getSkillCount`

Get the total number of global and local skills in the network.

```js
await colonyNetworkClient.getSkillCount.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|count|number|The total number of global and local skills in the network.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `getTokenLockingAddress`

Get the token locking contract address.

```js
await colonyNetworkClient.getTokenLockingAddress.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|address|address|The address of the token locking contract.|

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `isColony`

Check whether or not an address is a colony contract.

```js
await colonyNetworkClient.isColony.call({
  colony,
});
```


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


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `isInRecoveryMode`

Check whether or not the network is in recovery mode.

```js
await colonyNetworkClient.isInRecoveryMode.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|inRecoveryMode|boolean|A boolean indicating whether or not the network is in recovery mode.|

**Contract Information**


  
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IRecovery.sol)
  

### `lookupRegisteredENSDomain`

Lookup the registed ENS label for an address. This function will return an empty string if the address does not have a registered ENS label.

```js
await colonyNetworkClient.lookupRegisteredENSDomain.call({
  ensAddress,
});
```


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


  
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

  
## Senders


### `addColonyVersion`

Add a new colony contract version and set the address of the resolver contract.

```js
await colonyNetworkClient.addColonyVersion.send({
  version,
  resolver,
}, options);
```


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


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `addSkill`

Add a new global or local skill to the skills tree.

```js
await colonyNetworkClient.addSkill.send({
  parentSkillId,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|parentSkillId|number|The ID of the skill under which the new skill will be added.|

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


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `appendReputationUpdateLog`

Add a reputation update entry to the log.

```js
await colonyNetworkClient.appendReputationUpdateLog.send({
  user,
  amount,
  skillId,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|user|address||
|amount|big number||
|skillId|number||

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `approveExitRecovery`

Indicate approval to exit network recovery mode. This function can only be called by an address assigned the `RECOVERY` role.

```js
await colonyNetworkClient.approveExitRecovery.send(options);
```



**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IRecovery.sol)
  

### `createColony`

Create a new colony on the network.

```js
await colonyNetworkClient.createColony.send({
  tokenAddress,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|tokenAddress|address|The address of the token contract that will become the native token for the colony.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|skillId|number|The ID of the skill that was added.|
|parentSkillId|number|The ID of the parent skill.|
|colonyId|number|The ID of the colony that was added.|
|colonyAddress|address|The address of the colony contract that was created.|
|tokenAddress|address|The address of the token contract that was assigned.|
|SkillAdded|object|Contains the data defined in [SkillAdded](#eventsskilladded)|
|ColonyAdded|object|Contains the data defined in [ColonyAdded](#eventscolonyadded)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `createMetaColony`

Create the Meta Colony.

```js
await colonyNetworkClient.createMetaColony.send({
  tokenAddress,
}, options);
```


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
|skillId|number|The ID of the skill that was added.|
|parentSkillId|number|The ID of the parent skill.|
|colonyId|number|The ID of the colony that was added.|
|colonyAddress|address|The address of the colony contract that was created.|
|tokenAddress|address|The address of the token contract that was assigned.|
|rootSkillId|number|The ID of the root skill.|
|SkillAdded|object|Contains the data defined in [SkillAdded](#eventsskilladded)|
|ColonyAdded|object|Contains the data defined in [ColonyAdded](#eventscolonyadded)|
|MetaColonyCreated|object|Contains the data defined in [MetaColonyCreated](#eventsmetacolonycreated)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `createToken`

Create a new ERC20 token contract.

```js
await colonyNetworkClient.createToken.send({
  name,
  symbol,
  decimals,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|name|string|The name of the token.|
|symbol|string|The symbol of the token.|
|decimals|number (optional)|The number of decimals.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will receive a receipt with a `contractAddress` property.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [Token.sol](https://github.com/JoinColony/colonyToken/blob/8e5139586018fbaa53e9cf971e040b3ae2a4bb92/contracts/Token.sol)
  
  

### `deprecateSkill`

Deprecate a skill.

```js
await colonyNetworkClient.deprecateSkill.send({
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


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `enterRecoveryMode`

Enter network recovery mode. This function can only be called by an address assigned the `RECOVERY` role.

```js
await colonyNetworkClient.enterRecoveryMode.send(options);
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

Exit network recovery mode. This function can be called by anyone if enough whitelist approvals are given.

```js
await colonyNetworkClient.exitRecoveryMode.send(options);
```



**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IRecovery.sol)
  

### `initialiseReputationMining`

Create an initial inactive reputation mining cycle.

```js
await colonyNetworkClient.initialiseReputationMining.send(options);
```



**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyNetworkMining.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetworkMining.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `registerColonyLabel`

Register an ENS label for a colony.

```js
await colonyNetworkClient.registerColonyLabel.send({
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
|colony|address|The address of the colony that registered a label.|
|label|string|The ENS label that was registered for the colony.|
|ColonyLabelRegistered|object|Contains the data defined in [ColonyLabelRegistered](#eventscolonylabelregistered)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `registerUserLabel`

Register an ENS label for a user.

```js
await colonyNetworkClient.registerUserLabel.send({
  username,
  orbitDBPath,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|username|string|The ENS label that will be registered for the user.|
|orbitDBPath|string|The path of the OrbitDB database associated with the user.|

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


  
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `removeRecoveryRole`

Remove the `RECOVERY` role from an address. This function can only be called by an address assigned the `ROOT` role.

```js
await colonyNetworkClient.removeRecoveryRole.send({
  address,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|address|address|The address that will be unassigned a `RECOVERY` role.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IRecovery.sol)
  

### `setFeeInverse`

Set the inverse amount of the network fee. If the fee is 1% (or 0.01), the inverse amount will be 100.

```js
await colonyNetworkClient.setFeeInverse.send({
  feeInverse,
}, options);
```


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


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `setMiningResolver`

Set the address for the mining resolver.

```js
await colonyNetworkClient.setMiningResolver.send({
  miningResolverAddress,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|miningResolverAddress|address|The address that will be set for the mining resolver.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|miningCycleResolver|address|The address of the resolver contract for the reputation mining cycle contract.|
|MiningCycleResolverSet|object|Contains the data defined in [MiningCycleResolverSet](#eventsminingcycleresolverset)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `setRecoveryRole`

Assign a `RECOVERY` role to an address. This function can only be called by an address assigned the `ROOT` role.

```js
await colonyNetworkClient.setRecoveryRole.send({
  address,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|address|address|The address that will be assigned a `RECOVERY` role.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IRecovery.sol)
  

### `setReplacementReputationUpdateLogEntry`

Set replacement log entry when the network is in recovery mode.

```js
await colonyNetworkClient.setReplacementReputationUpdateLogEntry.send({
  reputationMiningCycle,
  id,
  user,
  amount,
  skillId,
  colony,
  nUpdates,
  nPreviousUpdates,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|reputationMiningCycle|address||
|id|number||
|user|address||
|amount|big number||
|skillId|number||
|colony|address||
|nUpdates|number||
|nPreviousUpdates|number||

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyNetworkMining.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetworkMining.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `setReputationRootHash`

Set the root hash of the reputation mining cycle.

```js
await colonyNetworkClient.setReputationRootHash.send({
  newHash,
  newNNodes,
  stakers,
  reward,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|newHash|string||
|newNNodes|number||
|stakers|array||
|reward|number||

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyNetworkMining.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetworkMining.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `setStorageSlotRecovery`

Set the value for a storage slot while in recovery mode. This can only be called by an address assigned the `RECOVERY` role.

```js
await colonyNetworkClient.setStorageSlotRecovery.send({
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
  

### `setTokenLocking`

Set the token locking address.

```js
await colonyNetworkClient.setTokenLocking.send({
  tokenLockingAddress,
}, options);
```


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


  
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `setupRegistrar`

Set up the registrar.

```js
await colonyNetworkClient.setupRegistrar.send({
  ens,
  rootNode,
}, options);
```


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


  
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `startNextMiningCycle`

Start the next reputation mining cycle.

```js
await colonyNetworkClient.startNextMiningCycle.send(options);
```



**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [ColonyNetworkMining.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetworkMining.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

### `startTokenAuction`

Create and start an auction for a token owned by the Colony Network. The auction will be for the total amount of the specificed tokens that are owned by the Colony Network.

```js
await colonyNetworkClient.startTokenAuction.send({
  tokenAddress,
}, options);
```


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


  
  
Contract: [ColonyNetworkAuction.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/ColonyNetworkAuction.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.3/contracts/IColonyNetwork.sol)
  

  
  
## Events


### `AuctionCreated`

**Event Handler**

```js
const eventHandler = ({
  auction,
  token,
  quantity,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyNetworkClient.events.AuctionCreated.addListener(eventHandler);
```

**Remove Listener**

```js
colonyNetworkClient.events.AuctionCreated.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|auction|string|The address of the auction contract that was created.|
|token|address|The address of the token contract that was assigned.|
|quantity|big number|The amount of tokens available for the auction.|


### `ColonyAdded`

**Event Handler**

```js
const eventHandler = ({
  colonyId,
  colonyAddress,
  tokenAddress,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyNetworkClient.events.ColonyAdded.addListener(eventHandler);
```

**Remove Listener**

```js
colonyNetworkClient.events.ColonyAdded.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|colonyId|number|The ID of the colony that was added.|
|colonyAddress|address|The address of the colony contract that was created.|
|tokenAddress|address|The address of the token contract that was assigned.|


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
colonyNetworkClient.events.ColonyLabelRegistered.addListener(eventHandler);
```

**Remove Listener**

```js
colonyNetworkClient.events.ColonyLabelRegistered.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|colony|address|The address of the colony that registered a label.|
|label|string|The ENS label that was registered for the colony.|


### `ColonyNetworkInitialised`

**Event Handler**

```js
const eventHandler = ({
  resolver,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyNetworkClient.events.ColonyNetworkInitialised.addListener(eventHandler);
```

**Remove Listener**

```js
colonyNetworkClient.events.ColonyNetworkInitialised.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|resolver|address|The address of the resolver contract.|


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
colonyNetworkClient.events.ColonyVersionAdded.addListener(eventHandler);
```

**Remove Listener**

```js
colonyNetworkClient.events.ColonyVersionAdded.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|version|number|The version number of the colony contract that was added.|
|resolver|address|The address of the resolver contract.|


### `MetaColonyCreated`

**Event Handler**

```js
const eventHandler = ({
  colonyAddress,
  tokenAddress,
  rootSkillId,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyNetworkClient.events.MetaColonyCreated.addListener(eventHandler);
```

**Remove Listener**

```js
colonyNetworkClient.events.MetaColonyCreated.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|colonyAddress|number|The address of the Meta Colony.|
|tokenAddress|address|The address of the CLNY token contract.|
|rootSkillId|number|The ID of the root skill.|


### `MiningCycleResolverSet`

**Event Handler**

```js
const eventHandler = ({
  miningCycleResolver,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyNetworkClient.events.MiningCycleResolverSet.addListener(eventHandler);
```

**Remove Listener**

```js
colonyNetworkClient.events.MiningCycleResolverSet.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|miningCycleResolver|address|The address of the resolver contract for the reputation mining cycle contract.|


### `NetworkFeeInverseSet`

**Event Handler**

```js
const eventHandler = ({
  feeInverse,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyNetworkClient.events.NetworkFeeInverseSet.addListener(eventHandler);
```

**Remove Listener**

```js
colonyNetworkClient.events.NetworkFeeInverseSet.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|feeInverse|big number|The inverse value of the network fee that was set.|


### `ReputationMiningCycleComplete`

**Event Handler**

```js
const eventHandler = ({
  hash,
  nNodes,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyNetworkClient.events.ReputationMiningCycleComplete.addListener(eventHandler);
```

**Remove Listener**

```js
colonyNetworkClient.events.ReputationMiningCycleComplete.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|hash|hex string|The root hash of the reputation state that was accepted.|
|nNodes|number|The total number of nodes in the reputation state.|


### `ReputationMiningInitialised`

**Event Handler**

```js
const eventHandler = ({
  inactiveReputationMiningCycle,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyNetworkClient.events.ReputationMiningInitialised.addListener(eventHandler);
```

**Remove Listener**

```js
colonyNetworkClient.events.ReputationMiningInitialised.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|inactiveReputationMiningCycle|address|The address of the reputation mining cycle that was initialized.|


### `ReputationRootHashSet`

**Event Handler**

```js
const eventHandler = ({
  newHash,
  newNNodes,
  stakers,
  reward,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyNetworkClient.events.ReputationRootHashSet.addListener(eventHandler);
```

**Remove Listener**

```js
colonyNetworkClient.events.ReputationRootHashSet.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|newHash|hex string|The reputation root hash that was set.|
|newNNodes|number|The total number of nodes in the reputation state.|
|stakers|array|The array of users who submitted or backed the accepted hash.|
|reward|array|The array of corresponding amounts of CLNY each user received.|


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
colonyNetworkClient.events.SkillAdded.addListener(eventHandler);
```

**Remove Listener**

```js
colonyNetworkClient.events.SkillAdded.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|skillId|number|The ID of the skill that was added.|
|parentSkillId|number|The ID of the parent skill.|


### `TokenLockingAddressSet`

**Event Handler**

```js
const eventHandler = ({
  tokenLocking,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyNetworkClient.events.TokenLockingAddressSet.addListener(eventHandler);
```

**Remove Listener**

```js
colonyNetworkClient.events.TokenLockingAddressSet.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|tokenLocking|address|The address of the token locking contract.|


### `UserLabelRegistered`

**Event Handler**

```js
const eventHandler = ({
  user,
  label,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
colonyNetworkClient.events.UserLabelRegistered.addListener(eventHandler);
```

**Remove Listener**

```js
colonyNetworkClient.events.UserLabelRegistered.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|user|address|The address of the user that registered a label.|
|label|string|The ENS label that was registered for the user.|