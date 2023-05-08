---
sidebar_position: 1
description: A stupidly short guide to get started with Colony development
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Start Building

## Prerequisites

* NodeJS v 16.15.0 is installed on your system (use [`nvm`](https://github.com/nvm-sh/nvm) for changing NodeJS versions on the fly)
* A JavaScript/TypeScript project with a `package.json` and the `@colony/sdk` and `ethers` packages installed.

:::tip
To get started even faster, use our [**`Colony Starter`**](https://github.com/JoinColony/colonyStarter) template. It's just a matter of cloning the repository and running `npm run serve` to get to the first working example. Follow the guide after the link for more information.
:::

## Installation

It's as easy as

```bash
npm install ethers @colony/sdk
```

You'll need `ethers` v5.x as a dependency in your project.

## Connecting to Colony on Gnosis Chain

<Tabs>
<TabItem value="browser" label="In the browser (using MetaMask)" default>

:::info
For browser based projects, consider using a build system like [esbuild](https://esbuild.github.io/) that can understand the `import` commands and will bundle all necessary libraries into one file. Again, feel free to just use the [colonyStarter](https://github.com/JoinColony/colonyStarter) template which has this already set up for you.
:::

```javascript
import { providers } from 'ethers';
import { ColonyNetwork, toEth } from '@colony/sdk';

// If MetaMask is installed there will be an `ethereum` object on the `window`
// NOTE: Make sure MetaMask is connected to Gnosis chain (see https://docs.gnosischain.com/tools/wallets/metamask)
const provider = new providers.Web3Provider(window.ethereum);

// Get the Colony's XDAI funding in the ROOT pot (id 1)
const start = async () => {
  // This will try to connect the page to MetaMask
  await provider.send('eth_requestAccounts', []);
  // Create a new connection to the Colony Network contracts using the MetaMask "wallet"
  const colonyNetwork = new ColonyNetwork(provider.getSigner());
  // Connect to the MetaColony (this could be replaced with your own colony using `colonyNetwork.getColony(COLONY_ADDRESS)`)
  const metaColony = await colonyNetwork.getMetaColony();
  // Get the CLNY funding for the MetaColony (CLNY is it's native token)
  const funding = await metaColony.getBalance();
  // The funding will be in wei (x * 10^18), so we format into a readable string using the `toEth` function
  alert('MetaColony balance is ' + toEth(funding) + ' CLNY');
};

start();
```

Include the resulting bundle in an HTML file and open it in you favorite browser. It should connect to MetaMask and alert you with the current MetaColony CLNY balance.

</TabItem>
<TabItem value="nodejs" label="In NodeJS">

```javascript
const { providers, Wallet } = require('ethers');
const { ColonyNetwork } = require('@colony/sdk');

const provider = new providers.JsonRpcProvider('https://xdai.colony.io/rpc/');
const wallet = Wallet.createRandom().connect(provider);

// Get the Colony's XDAI funding in the ROOT pot (id 1)
const start = async () => {
  // Create a new connection to the Colony Network contracts using the MetaMask "wallet"
  const colonyNetwork = new ColonyNetwork(wallet);
  // Connect to the MetaColony (this could be replaced with your own colony using `colonyNetwork.getColony(COLONY_ADDRESS)`)
  const metaColony = await colonyNetwork.getMetaColony();
  // Get the CLNY funding for the MetaColony (CLNY is it's native token)
  const funding = await metaColony.getBalance();
  // The funding will be in wei (x * 10^18), so we format into a readable string using the `toEth` function
  console.log('MetaColony balance is ' + toEth(funding) + ' CLNY')
};

start();
```

Run this file by executing `node index.js` and carefully observe the output. The last line should be something like

```
MetaColony balance is 2.125319999999999999 CLNY
```

</TabItem>
</Tabs>
