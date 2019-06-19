---
title: Reputation and Rewards
section: Topics
order: 5
---

When an address earns tokens from a task payout or payment and the tokens earned are native to the colony, the address earns a reputation score equivalent to the number of tokens.

A set fee for every task payout and payment is collected and stored within the rewards pot of the colony, which can then be distributed based on reputation to colony members as a reward.

## Reputation

### Get Reputation

To get the reputation score for a given address within a particular domain or skill, you can use an instance of [ColonyClient](/colonyjs/api-colonyclient) or [ColonyNetworkClient](/colonyjs/api-colonynetworkclient).

```js

// Get reputation using colony client
await colonyClient.getReputation.send({
  skillId: 1,
  address: '0x0...',
});

```

```js

// Get reputation using network client
await networkClient.getReputation.send({
  colonyAddress: '0x0...',
  skillId: 1,
  address: '0x0...',
});

```

*Note: Currently this method is only supported on goerli and mainnet.*
