---
title: MetaColonyClient
section: API
order: 5
---

The `MetaColonyClient` class is a standard interface for interactions with the on-chain functions and events described in `IMetaColony.sol`.

These interactions are generally concerned with functions and events internal to the Meta Colony, such as adding global skills.

For functions and events that concern the colonyNetwork as a whole, refer to the [ColonyNetworkClient API](/colonyjs/api-colonynetworkclient/).

==TOC==

## Create an instance

The easiest way to initialize the `MetaColonyClient` is to ask the `ColonyNetworkClient` for a new instance:

```js

const metaColonyClient = await networkClient.getMetaColonyClient();

```

You _could_ create an instance of `MetaColonyClient` by providing an [adapter](/colonyjs/docs-adapters) and a query:

```js

const metaColonyClient = new MetaColonyClient({ adapter, query });

await metaColonyClient.init();

```
