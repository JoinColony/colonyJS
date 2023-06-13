---
description: A guide on how to create a Colony programmatically. The deployment of a Colony requires a handful of transactions for it to be up and running and fully usable. This guide explains how to go through the whole process using Colony SDK

sidebar_position: 2
---

# Creating a Colony

Even though deploying a Colony is technically just a matter of issuing one transaction, for the Colony to be properly set up and usable in the dApp, some extra steps are necessary. In this guide we'll walk you through the whole process of creating the right transactions and explain what happens on the way.

**Keep in mind that some of these transactions are optional and depend on your specific situation.**

For a full example see [here](https://github.com/JoinColony/colonyJS/blob/main/packages/sdk/examples/node/create.ts).

:::info
These examples assume that the user executing the transactions has funds in their wallet to pay for gas. If you'd like to use gasless transactions instead, use `metaTx()` instead of `tx()`.
:::

## Step 1 - Deploying the Colony contract (and optionally its token)

The most important step. Here the actualy Colony contract will be deployed. This happens by executing a contract method on the `ColonyNetwork` (as opposed to a deploy-transaction):

```typescript
import { providers } from 'ethers';
import { ColonyNetwork, ColonyRpcEndpoint, Wallet } from '@colony/sdk';

// Prepare your provider and signer (wallet)
const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.Gnosis);
const wallet = Wallet.createRandom().connect(provider);
// Instantiate Colony Network
const colonyNetwork = new ColonyNetwork(wallet);

// Create actual colony (deploys Colony contract) (do this in an async function)
const [{ colonyAddress, tokenAddress, tokenAuthorityAddress }] = await colonyNetwork
  .createColony({ name: 'Test token', symbol: 'TOT' }, 'colonytestname')
  .tx().mined();
```

One can specify the token name, its symbol and even its decimals (even though it's recommended to leave that at the default value). This will deploy a special ERC20 token that integrates well with Colony (e.g. it supports permissions, minting and gasless transactions out of the box). For its contract code see [here](https://github.com/JoinColony/colonyNetwork/blob/develop/contracts/metaTxToken/MetaTxToken.sol).

You can also use an already existing token. For that, instead of passing in the token's details as the first argument, just use the token's address (it needs to be in the same chain your Colony is deployed in), like so:

```typescript
// Use USDC on Gnosis chain as the native token
const [{ colonyAddress }] = await colonyNetwork
  .createColony('0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83', 'anothertestname')
  .tx().mined();
```

As the second argument a label for the Colony is assigned. These are unique, so pick one that's not already taken. The `createColony` method will check that. Alternatively, the `colonyNetwork.getColonyAddress(label)` function can be used. The label is used by the dApp as a short name and for looking up the Colony's address.

**If the own token was used and no extension installation is desired we would be done here. This is not recommended though, as one will at least need the `OneTxPayment` extension to properly use Colony at this stage.

## Step 2 - Instantiate the Colony for the first time

Let's instantiate the Colony (this is the code used to instantiate an existing Colony) and the token:

```typescript
const colony = await colonyNetwork.getColony(colonyAddress);
const { token } = colony;
```

## Step 3 - Set the Colony as owner of the token

The token authority is a contract that glues the token and the Colony together and makes it possible for the Colony to manage and move the token. The first transaction is needed to set the token's `authority` to the one that was just deployed. After that we set the Colony to one of the token's "owners", so that it has permissions to access extra token functions (like `mint`). If your token was newly created in step 1 you will want to do this! If the token does not support the `setAuthority` method, this step should be skipped. 

```typescript
// Set the token's authority to the freshly deployed one (see step 1)
await token.setAuthority(tokenAuthorityAddress).tx().mined();
// Set the token's owner (the Colony), to have permissions to execute authorized functions (like `mint`)
await colony.token.setOwner(colony.address).tx().mined();
```

## Step 4 - Install the `OneTxPayment` extension

As mentioned earlier, this step is technically optional as well but if the Colony is supposed to be used productively, a form of payment extension is needed. Currently only the `OneTxPayment` extension is supported. Install it like so:

```typescript
const [{ extensionId, version }] = await colony
  .installExtension(SupportedExtension.oneTx)
  .tx().mined();
await colony.updateExtensions();
const [{ user, setTo, role }] = await colony
  .setRoles(colony.ext.oneTx.address, [
    ColonyRole.Administration,
    ColonyRole.Funding,
  ])
  .tx().mined();
```

Here we install the extension using the `installExtension` method. This extension is an own contract that was deployed in this transaction. To get its address, we re-initialize the extensions on the Colony using `updateExtensions`. After that, `oneTx` will be available on `colony.ext`.
Finally, we assign the **Administration** and **Funding** roles of the Colony's `Root` team to the extension that we just deployed. The OneTxPayment extension needs these permissions to function properly.

## That's it!

We have successfully deployed a Colony that can be used from the dApp as well. Explore what's possible within a Colony using Colony SDK [here](../api/classes/Colony.md).
