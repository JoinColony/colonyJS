---
title: Managing Funds
section: Docs
order: 5
---

Whether you brought your own ERC20 token from an existing token contract or created a new token at the same time that you created a colony, you can use the [TokenClient](/colonyJS/api-tokenclient/) to call and send transactions associated with the token contract.

`TokenClient` handles all the functions in the ERC20 standard interface, as well as `mint` and `burn`. Functions that you would ordinarily be able to perform as the contract owner may be performed by anyone in the colony with either `FOUNDER` or `ADMIN` authority. You can learn more about authority in [Authority Roles](/colonyJS/docs-authority-roles/).

==TOC==

## Token Methods

The following methods are associated with the token contract.

### Create Token

Creating a new token is simple using an instance of the [ColonyNetworkClient](/colonyjs/api-colonynetworkclient):

```js

// Create a token
await networkClient.createToken.send({ name, symbol });

```

### Get Token Info

We can get the token info using an instance of the [TokenClient](/colonyjs/api-tokenclient):

```js

// View token
await colonyClient.token.getTokenInfo.call()

```

### Set Token Owner

If we want to call token contract methods such as `mint` and `burn` using the [ColonyClient](/colonyjs/api-colonyclient), we will need to set the `owner` of the token contract to the address of our colony contract. This is recommended if you created a new token specifically for your colony and you would like assigned `ADMIN` to have permission calling the token contract methods. This is not required and it will not be possible if you are using an existing token and you are not the `owner` of the token contract.

We can set the `owner` of the token contract using an instance of the [TokenClient](/colonyjs/api-tokenclient):

```js

// Set token owner
await colonyClient.token.setOwner.send({ owner });

```

*Note: You must be the `owner` of the token contract to call this method.*

### Mint Tokens

We can mint tokens using an instance of the [ColonyClient](/colonyjs/api-colonyclient):

```js

// Mint tokens
await colonyClient.mintTokens.send({ amount });

```

*Note: The colony must be the `owner` of the token contract and you must be a `FOUNDER` or `ADMIN` to call this method.*

### Burn Tokens

We can burn tokens using an instance of the [ColonyClient](/colonyjs/api-colonyclient):

```js

// Burn tokens
await colonyClient.burnTokens.send({ amount });

```

*Note: The colony must be the `owner` of the token contract and you must be a `FOUNDER` or `ADMIN` to call this method.*

### Get Total Supply

We can get the total supply of out token using an instance of the [TokenClient](/colonyjs/api-tokenclient):

```js

// Get total supply
await colonyClient.token.getTotalSupply.call();

```

## Colony Methods

The following methods are associated with the colony contract.

### Claim Colony Funds

We can claim colony funds using an instance of the [ColonyClient](/colonyjs/api-colonyclient):

```js

// Claim colony funds
await colonyClient.claimColonyFunds.send({ token })

```

### Move Funds Between Pots

We can move funds between pots using an instance of the [ColonyClient](/colonyjs/api-colonyclient):

```js

// Move funds between pots
await colonyClient.moveFundsBetweenPots.send({
  fromPot,
  toPot,
  amount,
  token,
})

```

*Note: You must be a `FOUNDER` or `ADMIN` to call this method.*

### Get Pot Balance

We can get the balance of a pot using an instance of the [ColonyClient](/colonyjs/api-colonyclient):

```js

// Get pot balance
await colonyClient.getPotBalance.call({
  potId,
  token,
})

```
