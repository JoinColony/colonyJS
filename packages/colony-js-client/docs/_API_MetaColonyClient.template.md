---
title: MetaColonyClient
section: API
order: 5
---

The `MetaColonyClient` class is a standard interface for interactions with the on-chain functions and events described in `IMetaColony.sol`.

These interactions are generally concerned with functions and events internal to the Meta Colony, such as adding global skills.

For functions and events that concern the colonyNetwork as a whole, refer to the [ColonyNetworkClient API](/colonyjs/api-colonynetworkclient/)

==TOC==

## Creating a new instance

You _could_ create a MetaColonyClient by using an adapter and a query: `new MetaColonyClient({ adapter, query })` and then `.init()` it but it is advised to ask the network client for a new instance:

```javascript
const metaColonyClient = await networkClient.getMetaColonyClient(colonyId); // This is already initialised
```

## Instance properties

### `networkClient`

The Meta Colony's [ColonyNetworkClient](/colonyjs/api-colonynetworkclient/) instance.

### `authority`

The Meta Colony's [AuthorityClient](/colonyjs/api-authorityclient/) instance.

### `token`

The Meta Colony's [TokenClient](/colonyjs/api-tokenclient/) instance.
