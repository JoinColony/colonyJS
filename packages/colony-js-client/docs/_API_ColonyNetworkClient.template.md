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
