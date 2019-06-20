---
title: Clients
section: Components
order: 1
---

Clients are aggregations of all the interactions possible with the colonyNetwork smart contracts that can be used to easily integrate Colony into your JavaScript application or service.

## Network Client

Use `getNetworkClient` to get an instance of [ColonyNetworkClient](/colonyjs/api-colonynetworkclient):

```js

// Import the getNetworkClient method
const { getNetworkClient } = require('@colony/colony-js-client');

```

```js

// Get the network client using the local network
const networkClient = getNetworkClient('local', wallet);

```

```js

// Get the network client using the goerli network
const networkClient = getNetworkClient('goerli', wallet);

```

```js

// Get the network client using the main network
const networkClient = getNetworkClient('mainnet', wallet);

```

If you would like to use a specific Infura Project ID, you can pass it in as a third parameter.

```js

// Get the network client using the main network using a Infura Project ID
const networkClient = getNetworkClient('mainnet', wallet, infuraProjectId);

```

If you are using this method with the `local` option, you will need to have [trufflepig](https://github.com/JoinColony/trufflepig) installed and running. We recommend using [purser](/purser/docs-overview) to get a wallet instance but you can also use [ethers](https://github.com/ethers-io/ethers.js/).

Alternatively, you can create an instance of [ColonyNetworkClient](/colonyjs/api-colonynetworkclient) by instantiating its class using an adapter and then initializing it using the `init` method:

```js

const networkClient = new ColonyNetworkClient({ adapter });

await networkClient.init();

```

See [Adapters](/colonyjs/components-adapters) for more information about adapters.

## Colony Client

Use `getColonyClient` to get an instance of [ColonyClient](/colonyjs/api-colonyclient):

```js

// Import the getColonyClient method
const { getColonyClient } = require('@colony/colony-js-client');

```

```js

// Get the colony client using the local network
const colonyClient = getColonyClient(colonyAddress, 'local', wallet);

```

```js

// Get the colony client using the goerli network
const colonyClient = getColonyClient(colonyAddress, 'goerli', wallet);

```

```js

// Get the colony client using the main network
const colonyClient = getColonyClient(colonyAddress, 'mainnet', wallet);

```

If you would like to use a specific Infura Project ID, you can pass it in as a fourth parameter.

```js

// Get the network client using the main network using a specific Infura Project ID
const networkClient = getColonyClient(
  colonyAddress,
  'mainnet',
  wallet,
  infuraProjectId,
);

```

If you are using this method with the `local` option, you will need to have [trufflepig](https://github.com/JoinColony/trufflepig) installed and running. We recommend using [purser](/purser/docs-overview) to get a wallet instance but you can also use [ethers](https://github.com/ethers-io/ethers.js/).

Alternatively, you can get an instance of [ColonyClient](/colonyjs/api-colonyclient) from the [ColonyNetworkClient](/colonyjs/api-colonynetworkclient):

```js

const colonyClient = await networkClient.getColonyClient(colonyId);

```

And like [ColonyNetworkClient](/colonyjs/api-colonynetworkclient), you can create an instance of [ColonyClient](/colonyjs/api-colonyclient) by instantiating the [ColonyClient](/colonyjs/api-colonyclient) class using an adapter and query and then initializing it using the `init` method:

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

## Colony Client (Meta Colony)

Ask the `NetworkClient` for an instance of [ColonyClient](/colonyjs/api-colonyclient) for the Meta Colony:

```js

const metaColonyClient = await networkClient.getMetaColonyClient();

```

Alternatively, you can create an instance of [ColonyClient](/colonyjs/api-colonyclient) by instantiating the [ColonyClient](/colonyjs/api-colonyclient) class using an adapter and query and then initializing it using the `init` method:

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

The `TokenClient` is initialized for you when you ask for a new instance of [ColonyClient](/colonyjs/api-colonyclient):

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

The `TokenLockingClient` is initialized for you when you ask for a new instance of [ColonyClient](/colonyjs/api-colonyclient):

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
