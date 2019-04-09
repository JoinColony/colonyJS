---
title: Clients
section: Components
order: 1
---

Clients are aggregations of all the interactions possible with the colonyNetwork smart contracts that can be used to easily integrate Colony into your JavaScript application or service.

## Network Client

Use `getNetworkClient` to get an instance of `ColonyNetworkClient`:

```js

// Get the network client using the rinkeby network
const networkClient = getNetworkClient('rinkeby', wallet);

```

```js

// Get the network client using the local network
const networkClient = getNetworkClient('local', wallet);

```

If you are using this method with the `local` option, you will need to have [TrufflePig](https://github.com/JoinColony/trufflepig) installed and running. We recommend using [Purser](/purser/docs-overview) to create a wallet instance but you can also use `ethers` (see the example in [Adapters](/colonyjs/components-adapters)).

Alternatively, you can create an instance of `ColonyNetworkClient` by instantiating the `ColonyNetworkClient` class using an adapter and then initializing it using the `init` method:

```js

const networkClient = new ColonyNetworkClient({ adapter });

await networkClient.init();

```

See [Adapters](/colonyjs/components-adapters) for more information about adapters.

## Colony Client

Ask the `ColonyNetworkClient` for an instance of `ColonyClient`:

```js

const colonyClient = await networkClient.getColonyClient(colonyId);

```

Alternatively, you can create an instance of `ColonyClient` by instantiating the `ColonyClient` class using an adapter and query and then initializing it using the `init` method:

```js

const colonyClient = new ColonyClient({
  adapter,
  query: {
    contractAddress: '0x0000000000000000000000000000000000000000',
  },
});

await colonyClient.init();

```

See [Adapters](/colonyjs/components-adapters) for more information about adapters.

## Colony Client [ Meta Colony ]

Ask the `NetworkClient` for an instance of `ColonyClient` for the Meta Colony:

```js

const metaColonyClient = await networkClient.getMetaColonyClient();

```

Alternatively, you can create an instance of `ColonyClient` by instantiating the `ColonyClient` class using an adapter and query and then initializing it using the `init` method:

```js

const metaColonyClient = new ColonyClient({
  adapter,
  query: {
    contractAddress: '0x0000000000000000000000000000000000000000',
  },
});

await metaColonyClient.init();

```

See [Adapters](/colonyjs/components-adapters) for more information about adapters.

## Token Client

The `TokenClient` is initialized for you when you ask for a new instance of `ColonyClient`:

```js

const tokenClient = colonyClient.tokenClient;

```

Alternatively, you can create an instance of `TokenClient` by instantiating the `TokenClient` class using an adapter and query and then initializing it using the `init` method:

```js

const tokenClient = new TokenClient({
  adapter,
  query: {
    contractAddress: '0x0000000000000000000000000000000000000000',
  },
});

await tokenClient.init();

```

See [Adapters](/colonyjs/components-adapters) for more information about adapters.

## Token Locking Client

The `TokenLockingClient` is initialized for you when you ask for a new instance of `ColonyClient`:

```js

const tokenLockingClient = colonyClient.tokenLockingClient;

```

Alternatively, you can create an instance of `TokenLockingClient` by instantiating the `TokenLockingClient` class using an adapter and query and then initializing it using the `init` method:

```js

const tokenLockingClient = new TokenLockingClient({
  adapter,
  query: {
    contractAddress: '0x0000000000000000000000000000000000000000',
  },
});

await tokenLockingClient.init();

```

See [Adapters](/colonyjs/components-adapters) for more information about adapters.
