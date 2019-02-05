---
title: ColonyClient
section: API
order: 1
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
