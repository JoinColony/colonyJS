---
description: A guide on how to create a colony programmatically. The deployment of a colony requires a handful of transactions for it to be up and running and fully usable. This guide explains how to go through the whole process using Colony SDK

sidebar_position: 1
---

# Creating a colony

Even though deploying a Colony is technically just a matter of issuing one transaction, for the colony to be properly set up and usable in the dApp, some extra steps are necessary. In this guide we'll walk you through the whole process of creating the right transactions and explain what happens on the way.

**Keep in mind that some of these transactions are optional and depend on your specific situation.**


For a full example see [here](https://github.com/JoinColony/colonySDK/blob/main/examples/node/create.ts).

:::info
These examples assume that the user executing the transactions has funds in their wallet to pay for gas. If you'd like to use gasless transactions instead, use `forceMeta()` instead of `force()`.
:::

## Step 1 (optional) - Creating a token

If you don't have a token contract deployed yet that you wish to use as the native token in your colony, deploying it using the Colony Network is highly recommended. That will give you a better integration and control over your token from your colony (e.g. using the `mintTokens` function on the colony).

To deploy a token, call the `deployToken` method on `ColonyNetwork`:

```typescript
// Create token to be used with Colony
const [{ tokenAddress }] = await colonyNetwork
  .deployToken('Test token', 'TOT')
  .tx();
console.info('Token address', tokenAddress);
```

One can specify the token name, its symbol and even its decimals (even though it's recommended to leave that at the default value). This will deploy a special ERC20 token that integrates well with Colony (e.g. it supports permissions, minting and gasless transactions out of the box). For its contract code see [here](https://github.com/JoinColony/colonyNetwork/blob/develop/contracts/metaTxToken/MetaTxToken.sol).

## Step 2 - Deploying the colony contract

The most important step. Here the actualy colony contract will be deployed. This happens by executing a contract method on the `ColonyNetwork` (as opposed to a deploy-transaction):

```typescript
// Create actual colony (deploys Colony contract)
const [{ colonyAddress }] = await colonyNetwork
  .createColony(tokenAddress, 'colonytestname')
  .tx();
```

Here a label for the colony can be assigned. These are unique, so pick one that's not already taken. The `createColony` method will check that. Alternatively, the `colonyNetwork.getColonyAddress(label)` function can be used.

**If the own token was used and no extension installation is desired we would be done here. This is not recommended though, as one will at least need the `OneTxPayment` extension to properly use Colony at this stage.

## Step 3 - Instantiate the Colony for the first time

Let's instantiate the colony (this is the code used to instantiate an existing colony) and the token:

```typescript
const colony = await colonyNetwork.getColony(colonyAddress);
const { token } = colony;
```

## Step 4 (optional) - Deploy the token authority

The token authority is a contract that glues the token and the colony together and makes it possible for the colony to manage and move the token. The token authority can be deployed using the `deployAuthority` method on the `Token`. After that, another transaction is needed to set the token's `authority` to the one that was just deployed. If the token does not support the `setAuthority` method, this step  should be skipped.

```typescript
// Deploy TokenAuthority
const [{ tokenAuthorityAddress }] = await token
  .deployAuthority([colonyAddress])
  .tx();
// Set the token's authority to the freshly deployed one
await token.setAuthority(tokenAuthorityAddress).force();
```


## Step 5 - Install the `OneTxPayment` extension

As mentioned earlier, this step is technically optional as well but if the colony is supposed to be used productively, a form of payment extension is needed. Currently only the `OneTxPayment` extension is supported. Install it like so:

```typescript
const [{ extensionId, version }] = await colony
  .installExtension(SupportedExtension.oneTx)
  .tx();
await colony.updateExtensions();
const [{ user, setTo, role }] = await colony
  .setRoles(colony.ext.oneTx.address, [
    ColonyRole.Administration,
    ColonyRole.Funding,
  ])
  .tx();
```

Here we install the extension using the `installExtension` method. This extension is an own contract that was deployed in this transaction. To get its address, we re-initialize the extensions on the colony using `updateExtensions`. After that, `oneTx` will be available on `colony.ext`.
Finally, we assign the **Administration** and **Funding** roles of the colony's `Root` team to the extension that we just deployed. The OneTxPayment extension needs these permissions to function properly.


## That's it!

We have successfully deployed a colony that can be used from the dApp as well. Explore what's possible within a colony using Colony SDK [here](../api/classes/Colony.md).
