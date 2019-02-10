---
title: ColonyNetworkClient
section: API
order: 2
---

The `ColonyNetworkClient` is a standard interface for interactions with methods and events described in `IColonyNetwork.sol`. These interactions are generally concerned with the colony network as a whole. This includes operations like getting a count of all colonies on the network, querying for information about a skill, or registering an ENS label for a user.

See [Clients](/colonyjs/components-clients) for information about initializing `ColonyNetworkClient`.

==TOC==

## Instance methods

**All instance methods return promises.**

### `getColonyAddress(id)`

Get the address of a Colony for the specified id of a deployed colony contract.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|key|string|Name of the Colony to get|
|id|number|Integer number of the Colony|

#### Response

`Promise<Address>`. The address of the given Colony contract

### `getColonyClient(id)`

Returns an initialized ColonyClient for the specified id of a deployed colony contract.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|key|string|Name of the Colony to get|
|id|number|Integer number of the Colony|

#### Response

`Promise<ColonyClient>`. An instance of a `ColonyClient` associated with the given Colony contract

### `getColonyClientByAddress(contractAddress)`

Returns an initialized ColonyClient for the contract at address `contractAddress`

#### Arguments

|Argument|Type|Description|
|---|---|---|
|contractAddress|Adress|Address of a deployed Colony contract|

#### Response

`Promise<ColonyClient>`. An instance of a `ColonyClient` associated with the given Colony contract

### `getMetaColonyClient()`

Gets the Meta Colony as an initialized ColonyClient

#### Response

`Promise<ColonyClient>`. An instance of a `ColonyClient` associated with the MetaColony contract

  
## Callers

**All callers return promises which resolve to an object containing the given return values.**.

### `ensSupportsInterface.call({ interfaceId })`

Check whether or not ENS supports a contract interface. A supported contract interface implements `interfaceId`.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|interfaceId|hex string|The hashed ID of the contract interface as specified in ERC-165.|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|isSupported|boolean|A boolean indicating whether or not the contract interface is supported.|

#### Contract Information


<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Function: `supportsInterface`
  - Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetworkENS.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  Function: `supportsInterface`
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getAddressForENSHash.call({ nameHash })`

Get the address of a registered ENS label. This function will return an empty address if an ENS label has not been registered.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|nameHash|hex string|The hached ENS label that will be checked.|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|ensAddress|address|The address associated with the ENS label.|

#### Contract Information


<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Function: `addr`
  - Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetworkENS.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  Function: `addr`
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getChildSkillId.call({ skillId, childSkillIndex })`

Get the ID of a child skill.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|skillId|number|The numberic ID of the skill that will be checked.|
|childSkillIndex|number|The index of the child skill array to be checked.|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|childSkillId|number|The ID of the child skill.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetwork.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getColony.call({ id })`

Get the colony contract address for a colony.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|id|number|The ID of the colony.|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|address|address|The address of the colony contract.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetwork.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getColonyCount.call()`

Get the total number of colonies on the network. The return value is also the ID of the last colony created.


#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|count|number|The total number of colonies.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetwork.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getColonyVersionResolver.call({ version })`

Get the address of the resolver contract for a specific colony version.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|version|number|The version number of the colony contract.|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|address|address|The address of the resolver contract.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetwork.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getCurrentColonyVersion.call()`

Get the latest colony contract version. This is the version used to create all new colonies.


#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|version|number|The version number of the latest colony contract.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetwork.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getFeeInverse.call()`

Get the inverse amount of the network fee. If the fee is 1% (or 0.01), the inverse amount will be 100.


#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|feeInverse|big number|The inverse amount of the network fee.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetwork.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getMetaColonyAddress.call()`

Get the Meta Colony contract address.


#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|address|address|The address of the Meta Colony contract.|

#### Contract Information


<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Function: `getMetaColony`
  - Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetwork.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  Function: `getMetaColony`
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getParentSkillId.call({ skillId, parentSkillIndex })`

Get the ID of a parent skill.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|skillId|number|The numberic ID of the skill that will be checked.|
|parentSkillIndex|number|The index of the parent skill array to be checked.|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|parentSkillId|number|The ID of the parent skill.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetwork.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getProfileDBAddress.call({ nameHash })`

Get the address of the OrbitDB database associaated with a user profile.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|nameHash|hex string|The hashed ENS label that was registered for the user.|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|orbitDBAddress|string|The path of the OrbitDB database associated with the user profile.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetworkENS.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getRecoveryRolesCount.call()`

Get the total number of users that are assigned a network recovery role.


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
  

### `getRootGlobalSkillId.call()`

Get the ID of the root global skill.


#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|skillId|number|The ID of the root global skill.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetwork.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getSkill.call({ skillId })`

Get information about a domain.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|skillId|number|The ID of the skill.|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|nParents|number|The total number of parent skills.|
|nChildren|number|The total number of child skills.|
|isGlobalSkill|boolean|A boolean indicating whether or not the skill is a global skill.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetwork.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getSkillCount.call()`

Get the total number of global and local skills in the network.


#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|count|number|The total number of global and local skills in the network.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetwork.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `getTokenLocking.call()`

Get the token locking contract address.


#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|lockingAddress|address|The address of the token locking contract.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetwork.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `isColony.call({ colony })`

Check whether or not an address is a colony contract.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|colony|address|The address that will be checked.|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|isColony|boolean|A boolean indicating whether or not an address is a colony contract.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetwork.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `isInRecoveryMode.call()`

Check whether or not the network is in recovery mode.


#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|inRecoveryMode|boolean|A boolean indicating whether or not the network is in recovery mode.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ContractRecovery.sol)
  - Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IRecovery.sol)
=======
  
Contract: [ContractRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ContractRecovery.sol)
  
Interface: [IRecovery.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IRecovery.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `lookupRegisteredENSDomain.call({ ensAddress })`

Lookup the registed ENS label for an address. This function will return an empty string if the address does not have a registered ENS label.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|ensAddress|address|The address that will checked.|

#### Return Values

A promise which resolves to an object containing the following properties:

|Return Value|Type|Description|
|---|---|---|
|domain|string|The ENS label associated with the address.|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetworkENS.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

  
## Senders

**All senders return an instance of a `ContractResponse`.** Every `send()` method takes an `options` object as the second argument.
### `addColonyVersion.send({ version, resolver }, options)`

Add a new colony contract version and set the address of the resolver contract.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|version|number|The versions number of the colony contract.|
|resolver|address|The address of the resolver contract.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|version|number|The version number of the colony contract that was added.|
|resolver|address|The address of the resolver contract.|
|ColonyVersionAdded|object|Contains the data defined in [ColonyVersionAdded](#eventscolonyversionaddedaddlistener-version-resolver-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetwork.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `addSkill.send({ parentSkillId, globalSkill }, options)`

Add a new global or local skill to the skills tree.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|parentSkillId|number|The ID of the skill under which the new skill will be added.|
|globalSkill|boolean|A boolean indicating whether or not the skill will be a global skill.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|skillId|number|The ID of the skill that was added.|
|parentSkillId|number|The ID of the parent skill.|
|SkillAdded|object|Contains the data defined in [SkillAdded](#eventsskilladdedaddlistener-skillid-parentskillid-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetwork.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `approveExitRecovery.send(options)`

Indicate approval to exit network recovery mode. This function can only be called by a user with a recovery role.


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
  

### `createColony.send({ tokenAddress }, options)`

Create a new colony on the network.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|tokenAddress|address|The address of the token contract.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|colonyId|number|The ID of the colony that was added.|
|colonyAddress|address|The address of the colony contract that was created.|
|tokenAddress|address|The address of the token contract that was assigned.|
|ColonyAdded|object|Contains the data defined in [ColonyAdded](#eventscolonyaddedaddlistener-colonyid-colonyaddress-tokenaddress-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetwork.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `createMetaColony.send({ tokenAddress }, options)`

Create the Meta Colony.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|tokenAddress|address|The address of the token contract.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|colonyAddress|number|The address of the Meta Colony.|
|tokenAddress|address|The address of the CLNY token contract.|
|rootSkillId|number|The ID of the root skill.|
|MetaColonyCreated|object|Contains the data defined in [MetaColonyCreated](#eventsmetacolonycreatedaddlistener-colonyaddress-tokenaddress-rootskillid-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetwork.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `createToken.send({ symbol }, options)`

Create a new ERC20 token contract.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|symbol|string|The symbol of the token.|

#### Response

An instance of a `ContractResponse` which will receive a receipt with a `contractAddress` property (the address of the newly-deployed contract)



#### Contract Information


  
  
Contract: [Token.sol](https://github.com/JoinColony/colonyToken/blob/7359eedaadacd55a1393c795964bd61513b2af33/contracts/Token.sol)
  
  

### `enterRecoveryMode.send(options)`

Enter network recovery mode. This function can only be called by a user with a recovery role.


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

Exit network recovery mode. This function can be called by anyone if enough whitelist approvals are given.


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
  

### `registerUserLabel.send({ username, orbitDBPath }, options)`

Register an ENS label for a user.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|username|string|The ENS label that will be registered for the user.|
|orbitDBPath|string|The path of the OrbitDB database associated with the user profile.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|user|address|The address of the user that registered a label.|
|label|string|The ENS label that was registered for the user.|
|UserLabelRegistered|object|Contains the data defined in [UserLabelRegistered](#eventsuserlabelregisteredaddlistener-user-label-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetworkENS.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `removeRecoveryRole.send({ user }, options)`

Remove the network recovery role from a user. This function can only be called by the `FOUNDER` authority role.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|user|address|The address of the user that will be unassigned a network recovery role.|

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
  

### `setFeeInverse.send({ feeInverse }, options)`

Set the inverse amount of the network fee. If the fee is 1% (or 0.01), the inverse amount will be 100.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|feeInverse|big number|The inverse amount of the network fee.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|feeInverse|big number|The inverse value of the network fee that was set.|
|NetworkFeeInverseSet|object|Contains the data defined in [NetworkFeeInverseSet](#eventsnetworkfeeinversesetaddlistener-feeinverse-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetwork.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `setRecoveryRole.send({ user }, options)`

Assign a network recovery role to a user. This function can only be called by the `FOUNDER` authority role.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|user|address|The address of the user that will be assigned a network recovery role.|

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
  

### `setTokenLocking.send({ tokenLockingAddress }, options)`

Set the token locking address.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|tokenLockingAddress|address|The address of the locking contract.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|tokenLocking|address|The address of the token locking contract.|
|TokenLockingAddressSet|object|Contains the data defined in [TokenLockingAddressSet](#eventstokenlockingaddresssetaddlistener-tokenlocking-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetwork.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetwork.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `setupRegistrar.send({ ens, rootNode }, options)`

Set up the registrar.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|ens|address|The adddress of the ENS registrar.|
|rootNode|string|The namehash of the root node for the domain.|

#### Response

An instance of a `ContractResponse`



#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetworkENS.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetworkENS.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetworkENS.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

### `startTokenAuction.send({ tokenAddress }, options)`

Create and start an auction for a token owned by the Colony Network. The auction will be for the total amount of the specificed tokens that are owned by the Colony Network.

#### Arguments

|Argument|Type|Description|
|---|---|---|
|tokenAddress|address|The address of the token contract.|

#### Response

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event Data|Type|Description|
|---|---|---|
|auction|string|The address of the auction contract that was created.|
|token|address|The address of the token contract that was assigned.|
|quantity|big number|The amount of tokens available for the auction.|
|AuctionCreated|object|Contains the data defined in [AuctionCreated](#eventsauctioncreatedaddlistener-auction-token-quantity-------)|

#### Contract Information


  
<<<<<<< e7e38b90f1bcea9e7d63ce2b9356f0f987a69536
  - Contract: [ColonyNetworkAuction.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ColonyNetworkAuction.sol)
  - Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/IColonyNetwork.sol)
=======
  
Contract: [ColonyNetworkAuction.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/ColonyNetworkAuction.sol)
  
Interface: [IColonyNetwork.sol](https://github.com/JoinColony/colonyNetwork/tree/396b6bb4762dcd111daad153aa54cd76184afa53/contracts/IColonyNetwork.sol)
>>>>>>> Verious fixes to API docs and docgen
  

  
  
## Events


### `events.AuctionCreated.addListener(({ auction, token, quantity }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|auction|string|The address of the auction contract that was created.|
|token|address|The address of the token contract that was assigned.|
|quantity|big number|The amount of tokens available for the auction.|


### `events.ColonyAdded.addListener(({ colonyId, colonyAddress, tokenAddress }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|colonyId|number|The ID of the colony that was added.|
|colonyAddress|address|The address of the colony contract that was created.|
|tokenAddress|address|The address of the token contract that was assigned.|


### `events.ColonyLabelRegistered.addListener(({ colony, label }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|colony|address|The address of the colony that registered a label.|
|label|string|The ENS label that was registered for the colony.|


### `events.ColonyNetworkInitialised.addListener(({ resolver }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|resolver|address|The address of the resolver contract.|


### `events.ColonyVersionAdded.addListener(({ version, resolver }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|version|number|The version number of the colony contract that was added.|
|resolver|address|The address of the resolver contract.|


### `events.MetaColonyCreated.addListener(({ colonyAddress, tokenAddress, rootSkillId }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|colonyAddress|number|The address of the Meta Colony.|
|tokenAddress|address|The address of the CLNY token contract.|
|rootSkillId|number|The ID of the root skill.|


### `events.MiningCycleResolverSet.addListener(({ miningCycleResolver }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|miningCycleResolver|address|The address of the resolver contract for the reputation mining cycle contract.|


### `events.NetworkFeeInverseSet.addListener(({ feeInverse }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|feeInverse|big number|The inverse value of the network fee that was set.|


### `events.ReputationMiningCycleComplete.addListener(({ hash, nNodes }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|hash|hex string|The root hash of the reputation state that was accepted.|
|nNodes|number|The total number of nodes in the reputation state.|


### `events.ReputationMiningInitialised.addListener(({ inactiveReputationMiningCycle }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|inactiveReputationMiningCycle|address|The address of the reputation mining cycle that was initialized.|


### `events.ReputationRootHashSet.addListener(({ newHash, newNNodes, stakers, reward }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|newHash|hex string|The reputation root hash that was set.|
|newNNodes|number|The total number of nodes in the reputation state.|
|stakers|array|The array of users who submitted or backed the accepted hash.|
|reward|array|The array of corresponding amounts of CLNY each user received.|


### `events.SkillAdded.addListener(({ skillId, parentSkillId }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|skillId|number|The ID of the skill that was added.|
|parentSkillId|number|The ID of the parent skill.|


### `events.TokenLockingAddressSet.addListener(({ tokenLocking }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|tokenLocking|address|The address of the token locking contract.|


### `events.UserLabelRegistered.addListener(({ user, label }) => { /* ... */ })`



#### Arguments

|Argument|Type|Description|
|---|---|---|
|user|address|The address of the user that registered a label.|
|label|string|The ENS label that was registered for the user.|