---
title: Tokens and Funding
section: Topics
order: 2
---

Whether you brought your own token or created a new one, you can use an instance of [TokenClient](/colonyJS/api-tokenclient/) to call methods implemented in the ERC20 standard interface. If you set a colony contract address as the token contract owner, actions that you would normally be able to perform as the token owner can be performed by addresses assigned the `ROOT` colony role.

Once tokens have been minted or transferred to your colony, or Ether has been transferred to your colony, you can claim those funds, making them available in a funding pot associated with the root domain of your colony, which can then be allocated to funding pots associated with domains, tasks, and payments throughout your colony.

## Token Methods

### Create Token

You can create an ERC20 token using an instance of [ColonyNetworkClient](/colonyjs/api-colonynetworkclient):

```js

// Create a token
await networkClient.createToken.send({
  name: 'Token',
  symbol: 'TKN',
  decimals: 18,
});

```

### Set Token Owner

You can set the `owner` of the token contract using an instance of [TokenClient](/colonyjs/api-tokenclient):

```js

// Set token owner
await colonyClient.tokenClient.setOwner.send({
  owner: '0x0...',
});

```

*Note: You must be assigned the `owner` of the token contract to call this method.*

### Mint Tokens

If you have set the `owner` of the token contract to your colony contract address, you can mint tokens using an instance of [ColonyClient](/colonyjs/api-colonyclient):

```js

// Mint tokens
await colonyClient.mintTokens.send({
  amount: new BN('10000000000000000000'),
});

```

*Note: You must be assigned the `ROOT` role to call this method.*

Alternatively, if the colony contract is not the `owner` of the token contract or assigned the token authority role, you can mint tokens using an instance of [TokenClient](/colonyjs/api-tokenclient):

```js

// Mint tokens
await colonyClient.tokenClient.mint.send({
  address: '0x0...',
  amount: new BN('10000000000000000000'),
});

```

*Note: You must be the `owner` of the token contract or assigned the token authority role to call this method. The `address` is the address that will receive the minted tokens, ie the colony address.*

### Get Token Info

You can get information about the token using an instance of [TokenClient](/colonyjs/api-tokenclient):

```js

// Get token information
await colonyClient.tokenClient.getTokenInfo.call()

```

### Get Total Supply

You can get the total supply of the token using an instance of [TokenClient](/colonyjs/api-tokenclient):

```js

// Get total supply
await colonyClient.tokenClient.getTotalSupply.call();

```

## Funding Methods

### Claim Colony Funds

You can claim colony funds using an instance of [ColonyClient](/colonyjs/api-colonyclient):

```js

// Claim colony funds
await colonyClient.claimColonyFunds.send({
  token: '0x0...',
});

```

*Note: You must be assigned the `ROOT` role to call this method.*

### Move Funds Between Pots

You can move funds between pots using an instance of [ColonyClient](/colonyjs/api-colonyclient):

```js

// Move funds between pots
await colonyClient.moveFundsBetweenPots.send({
  fromPot: 1,
  toPot: 2,
  amount: new BN('1000000000000000000'),
  token: '0x0...',
});

```

*Note: You must be assigned the `ROOT` or `FUNDING` role to call this method.*

### Get Funding Pot

You can get information about a funding pot using an instance of [ColonyClient](/colonyjs/api-colonyclient):

```js

// Get funding pot information
await colonyClient.getFundingPot.call({
  potId: 1,
});

```

### Get Funding Pot Payout

You can get the payout for a funding pot using an instance of [ColonyClient](/colonyjs/api-colonyclient):

```js

// Get funding pot information
await colonyClient.getFundingPotPayout.call({
  potId: 1,
  token: '0x0...',
});

```

### Get Funding Pot Balance

You can get the balance of a funding pot using an instance of [ColonyClient](/colonyjs/api-colonyclient):

```js

// Get funding pot balance
await colonyClient.getFundingPotBalance.call({
  potId: 1,
  token: '0x0...',
});

```
