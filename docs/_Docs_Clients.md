---
title: Clients
section: Docs
order: 8
---

Clients are aggregations of all the interactions possible with the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts that can be used to easily integrate Colony into your JavaScript application or service.

## Initializing the `ColonyNetworkClient`

You can create an instance of `ColonyNetworkClient` by providing an [adapter](/colonyjs/docs-adapters):

```js

const networkClient = new ColonyNetworkClient({ adapter });
await networkClient.init();

```

## Initializing the `ColonyClient`

The easiest way to initialize the `ColonyClient` is to ask the `ColonyNetworkClient` for a new instance:

```js

const colonyClient = await networkClient.getColonyClient(colonyId);

```

You _could_ also create an instance of `ColonyClient` by providing an [adapter](/colonyjs/docs-adapters) and a query but this is not recommended:

```js

const colonyClient = new ColonyClient({ adapter, query });
await colonyClient.init();

```

## Initializing the `MetaColonyClient`

The easiest way to initialize the `MetaColonyClient` is to ask the `ColonyNetworkClient` for a new instance:

```js

const metaColonyClient = await networkClient.getMetaColonyClient();

```

You _could_ create an instance of `MetaColonyClient` by providing an [adapter](/colonyjs/docs-adapters) and a query but this is not recommended:

```js

const metaColonyClient = new MetaColonyClient({ adapter, query });
await metaColonyClient.init();

```

## Initializing the `TokenClient`

The `TokenClient` is initialized for you when you ask the `ColonyNetworkClient` for a new instance of `ColonyClient`:

```js

const tokenClient = colonyClient.token;

```

You _could_ create an instance of `TokenClient` by providing an [adapter](/colonyjs/docs-adapters) and a query but this is not recommended:

```js

const tokenClient = new TokenClient({ adapter, query });
await tokenClient.init();

```
