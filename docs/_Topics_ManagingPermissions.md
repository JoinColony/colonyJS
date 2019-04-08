---
title: Managing Permissions
section: Topics
order: 7
---

In the current implementation of the colonyNetwork smart contracts, some events on-chain are not mediated by reputation scores as described in the [Whitepaper](https://colony.io/whitepaper.pdf). For now, certain actions within a colony that would require some minimum reputation are instead assigned authority roles.

==TOC==

## Authority Roles

There are three "authority roles": `FOUNDER`,  `ADMIN`, and `RECOVERY`. Each authority role can call certain colonyNetwork methods, which are not permitted by addresses without an authority role. This includes actions such as minting new colony tokens, setting and removing authority roles, adding domains, creating tasks, and much more.

*Note: The "authority roles" described here are distinct from "task roles" (`MANAGER`, `WORKER`, and `EVALUATOR`). You can learn more about task roles and their permissions in [Task Lifecycle](/colonyjs/topics-task-lifecycle).*

### Permissions for `ColonyClient` methods

|                                   | Founder       | Admin         | Recovery      |
|-----------------------------------|---------------|---------------|---------------|
| addDomain                         | X             | X             |               |
| addNetworkColonyVersion           | X             |               |               |
| approveExitRecovery               |               |               | X             |
| bootstrapColony                   | X             |               |               |
| createTask                        | X             | X             |               |
| enterRecoveryMode                 |               |               | X             |
| exitRecoveryMode                  |               |               | X             |
| mintTokens                        | X             |               |               |
| moveFundsBetweenPots              | X             | X             |               |
| registerColonyLabel               | X             |               |               |
| removeAdminRole                   | X             |               |               |
| removeRecoveryRole                | X             |               |               |
| setAdminRole                      | X             | X             |               |
| setFounderRole                    | X             |               |               |
| setRecoveryRole                   | X             |               |               |
| setRewardInverse                  | X             |               |               |
| setStorageSlotRecovery            |               |               | X             |
| setToken                          | X             |               |               |
| startNextRewardPayout             | X             | X             |               |
| upgrade                           | X             |               |               |


*See [ColonyClient](/colonyjs/api-colonyclient) for more information about each method.*

### Permissions for `ColonyClient` methods (Meta Colony)

The following permissions are in addition to those defined above.

|                                   | Founder       | Admin         | Recovery      |
|-----------------------------------|---------------|---------------|---------------|
| addGlobalSkill                    | X             |               |               |
| mintTokensForColonyNetwork        | X             |               |               |
| setNetworkFeeInverse              | X             |               |               |

*See [ColonyClient](/colonyjs/api-colonyclient) for more information about each method.*

### Permissions for `ColonyNetworkClient` methods

|                                   | Founder       | Admin         | Recovery      |
|-----------------------------------|---------------|---------------|---------------|
| approveExitRecovery               |               |               | X             |
| enterRecoveryMode                 |               |               | X             |
| exitRecoveryMode                  |               |               | X             |
| removeRecoveryRole                | X             |               |               |
| setRecoveryRole                   | X             |               |               |
| setStorageSlotRecovery            |               |               | X             |

*See [ColonyNetworkClient](/colonyjs/api-colonynetworkclient) for more information about each method.*

## Authority Methods

### Set Admin Role

We can use an instance of the [ColonyClient](/colonyjs/api-colonyclient) to set a user's role to `ADMIN`:

```js

// Set admin role
await colonyClient.setAdminRole.send({ user })

```

### Remove Admin Role

We can use an instance of the [ColonyClient](/colonyjs/api-colonyclient) to remove a user's role as `ADMIN`:

```js

// Remove admin role
await colonyClient.removeAdminRole.send({ user })

```

### Set Recovery Role

We can use an instance of the [ColonyClient](/colonyjs/api-colonyclient) to set a user's role to `RECOVERY`:

```js

// Set admin role
await colonyClient.setRecoveryRole.send({ user })

```

### Remove Recovery Role

We can use an instance of the [ColonyClient](/colonyjs/api-colonyclient) to remove a user's role as `RECOVERY`:

```js

// Remove admin role
await colonyClient.removeRecoveryRole.send({ user })

```

### Set Founder Role

We can use an instance of the [ColonyClient](/colonyjs/api-colonyclient) to set a user's role to `FOUNDER`:

```js

// Set founder role
await colonyClient.setFounderRole.send({ user })

```

There can be only one `FOUNDER`, so setting a user to `FOUNDER` will remove the authority role of the current `FOUNDER`. Also, there is no `removeFounderRole` method because a colony must always have a `FOUNDER`.

### Check Authority Role

We can use an instance of the [ColonyClient](/colonyjs/api-colonyclient) to check the authority role of a user:

```js

// Check user role
await colonyClient.hasUserRole.call({
  user,
  role,
});

```
