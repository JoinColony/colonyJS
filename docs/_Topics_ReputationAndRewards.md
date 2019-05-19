---
title: Reputation and Rewards
section: Topics
order: 5
---

Whenever a user earns native tokens from a colony by completing a task or receiving a payment, the address associated with the account earns a reputation score equivalent to the token amount. See [Reputation](https://docs.colony.io/colonynetwork/whitepaper-tldr-reputation/) as defined in the colonyNetwork documentation for more information.

## Get Reputation

Getting the reputation for an address is simple. You can use either the `ColonyClient` or `ColonyNetworkClient`.

```js

// Get reputation using colony client
await colonyClient.getReputation.send({
  skillId: 1,
  user: '0x0...',
});

// Get reputation using network client
await networkClient.getReputation.send({
  colonyAddress: '0x0...',
  skillId: 1,
  user: '0x0...',
});

```

*Note: Currently this method is only supported on rinkeby. We will be adding instructions for running the reputation miner and viewing reputation in a local environment in the near future.*
