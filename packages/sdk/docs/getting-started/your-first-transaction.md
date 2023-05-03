---
description: In this guide we look at a more involved example. We create a team within a colony and inspect the results of this transaction.

sidebar_position: 0
---

# Creating your first transaction

In this example we're going through the process of creating a team (domain) within a colony using only Colony SDK. It is meant to run inside a browser with the MetaMask extension installed. If you need a template (with build system) to start from, take a look at [colonyStarter](https://github.com/JoinColony/colonyStarter).

## Connecting to an existing colony

For this example we assume that you want to connect to a Colony that already exists and the MetaMask account we are using has the appropriate permissions (*Architecture* role in the Root team).

```typescript
import { providers } from 'ethers';
import { ColonyNetwork } from '@colony/sdk';

// If MetaMask is installed there will be an `ethereum` object on the `window`
// NOTE: Make sure MetaMask is connected to Gnosis chain (see https://docs.gnosischain.com/tools/wallets/metamask)
const provider = new providers.Web3Provider(window.ethereum);

// We are calling a bunch of async functions so we are creating this wrapper function
const start = async () => {
  // This will try to connect the page to MetaMask
  await provider.send('eth_requestAccounts', []);
  // Create a new connection to the Colony Network contracts using the MetaMask "wallet"
  const colonyNetwork = new ColonyNetwork(provider.getSigner());
  // Connect to a colony (replace the address with the address of the colony you'd like to use)
  // This is the devdemo colony (https://xdai.colony.io/colony/devdemo)
  const colony = await colonyNetwork.getColony('0x364B3153A24bb9ECa28B8c7aCeB15E3942eb4fc5');
};

start();
```

## Creating the team's metadata object

Let's prepare some metadata for the colony details. We created a `DomainData` object and stored it under the IPFS hash [`QmTwksWE2Zn4icTvk5E7QZb1vucGNuu5GUCFZ361r8gKXM`](https://gateway.pinata.cloud/ipfs/QmTwksWE2Zn4icTvk5E7QZb1vucGNuu5GUCFZ361r8gKXM):

```json
{
  "version": 2,
  "name": "domain",
  "data": {
    "domainName": "A-Team",
    "domainColor": 0,
    "domainPurpose": "Pass Butter"
  }
}
```

:::info
Storing data on chain is expensive. Metadata is stored on IPFS and our solution to enrich on-chain data with additional information and only used in very few methods around Colony. **We also provide ways to automatically create and store metadata for your transaction.** See [Metadata](../guides/metadata.md) for more information.
:::

## Creating the team

Let's imagine we continue in our async function `start` from above:

```typescript
const [{ domainId }, receipt, getMetadata] = await colony.createTeam('QmTwksWE2Zn4icTvk5E7QZb1vucGNuu5GUCFZ361r8gKXM').tx();
```

You can see that calling the `tx()` function on the [`TxCreator`](../api/classes/TxCreator.md) returns a tuple with three entries:

### Event data

The first entry is the Ethereum event data, emitted by the contract transaction, already parsed by ethers, so that you can directly access it on the object. To find out what event data is returned by a transaction you can either rely on the TypeScript types or look up the relevant [Event data](../api/classes/Colony.md#event-data-3) section in the documentation of the corresponding method. This entry exists on all methods that emit events on contracts (almost all of them).

### Contract receipt

The second entry is a receipt object. This is the `ethers` `ContractReceipt` (see [the ethers docs](https://docs.ethers.org/v5/api/providers/types/#providers-TransactionReceipt)) that was issues during the transaction.

### Metadata getter function

The third entry is a function that can be called to get that metadata that was created or attached to the transaction events. This is usually not very interesting in this context as we just stored the metadata. Note that this is only available in very few functions that have metadata attached to them. Here's how you'd use this function:

```typescript
const { data: { domainName, domainColor, domainPurpose } } = await getMetadata();
```

Read more about metadata within Colony [here](../guides/metadata.md).

## Where to go from here?

Congrats on creating your first transaction with Colony SDK! This is just the beginning!

Make sure you're making yourself familiar with [how transactions work in Colony SDK](../guides/transactions.md) and then feel free to check out the [Colony API docs](../api/classes/Colony.md). There's lots to explore there!

:::tip Examples! Examples! Examples!
Yes, we have plenty of examples for you to explore on how to do all sorts of things in Colony SDK. Want to create a motion or decision? Want to see how reputation works? Check out our [browser examples](https://github.com/JoinColony/colonySDK/tree/main/examples/browser/src) or if you prefer to run things on the server side, we also have [NodeJS based examples](https://github.com/JoinColony/colonySDK/tree/main/examples/node). By the way, we have deployed the browser based examples [here](https://joincolony.github.io/colonySDK/) for you to try them immediately.
:::
