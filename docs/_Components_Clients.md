---
title: Clients
section: Components
order: 1
---

Clients are aggregations of all the interactions possible with the colonyNetwork smart contracts that can be used to easily integrate Colony into your JavaScript application or service.

## ColonyNetworkClient

Create an instance of `ColonyNetworkClient` by providing an adapter:

```js

const networkClient = new ColonyNetworkClient({ adapter });

await networkClient.init();

```

See [Adapters](/colonyjs/components-adapters) for more information about setting up an adapter.

## ColonyClient

Ask the `ColonyNetworkClient` for an instance of `ColonyClient`:

```js

const colonyClient = await networkClient.getColonyClient(colonyId);

```

Or create an instance of `ColonyClient` by providing an adapter and the contract address:

```js

const colonyClient = new ColonyClient({
  adapter,
  query: {
    contractAddress: '0x0000000000000000000000000000000000000000',
  },
});

await colonyClient.init();

```

See [Adapters](/colonyjs/components-adapters) for more information about setting up an adapter.

## ColonyClient (Meta Colony)

Ask the `ColonyNetworkClient` for an instance of `ColonyClient` for the Meta Colony:

```js

const metaColonyClient = await networkClient.getMetaColonyClient();

```

Or create an instance of `ColonyClient` by providing an adapter and the contract address:

```js

const metaColonyClient = new ColonyClient({
  adapter,
  query: {
    contractAddress: '0x0000000000000000000000000000000000000000',
  },
});

await metaColonyClient.init();

```

See [Adapters](/colonyjs/components-adapters) for more information about setting up an adapter.

## TokenClient

The `TokenClient` is initialized for you when you ask for a new instance of `ColonyClient`:

```js

const tokenClient = colonyClient.tokenClient;

```

Or create an instance of `TokenClient` by providing an adapter and the contract address:

```js

const tokenClient = new TokenClient({
  adapter,
  query: {
    contractAddress: '0x0000000000000000000000000000000000000000',
  },
});

await tokenClient.init();

```

See [Adapters](/colonyjs/components-adapters) for more information about setting up an adapter.

## TokenLockingClient

The `TokenLockingClient` is initialized for you when you ask for a new instance of `ColonyClient`:

```js

const tokenLockingClient = colonyClient.tokenLockingClient;

```

Or create an instance of `TokenLockingClient` by providing an adapter and the contract address:

```js

const tokenLockingClient = new TokenLockingClient({
  adapter,
  query: {
    contractAddress: '0x0000000000000000000000000000000000000000',
  },
});

await tokenLockingClient.init();

```

See [Adapters](/colonyjs/components-adapters) for more information about setting up an adapter.
