[**API**](../README.md)

***

# Function: getColonyNetworkClient()

> **getColonyNetworkClient**(`network`, `signerOrProvider`, `options`?): [`ColonyNetworkClient`](../interfaces/ColonyNetworkClient.md)

The main entry point for accessing the deployed colonyNetwork contracts

Specify a network and an ethers compatible singer or provider to get back an
initialized and extended (ethers) contract client for the colonyNetwork. From
here you can access different colonies, extensions, ENS and other features of Colony.

Example
```ts
import { getColonyNetworkClient, Network } = from '@colony/colony-js';
import { providers } from 'ethers';

// For local connections (run an Ethereum node on port 8545);
const provider = new providers.JsonRpcProvider();

// Just for reading data - to sign transactions we need to pass in a signer.
const networkClient = await getColonyNetworkClient(Network.Xdai, provider);
```

## Parameters

### network

[`Network`](../enumerations/Network.md)

One of the available options. See [Network](../enumerations/Network.md).

### signerOrProvider

[`SignerOrProvider`](../type-aliases/SignerOrProvider.md)

An [ethers](https://github.com/ethers-io/ethers.js/)
compatible signer or provider instance

### options?

[`NetworkClientOptions`](../interfaces/NetworkClientOptions.md)

Here you can supply options for accessing certain contracts
(mostly used in local/dev environments)

## Returns

[`ColonyNetworkClient`](../interfaces/ColonyNetworkClient.md)
