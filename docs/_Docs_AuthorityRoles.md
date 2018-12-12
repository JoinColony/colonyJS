---
title: Authority Roles
section: Docs
order: 2
---

In the current implementation of the colonyNetwork smart contracts, some events on-chain are not mediated by reputation scores as described in the [Whitepaper](https://colony.io/whitepaper.pdf). For now, certain actions within a colony that would ordinarily require some minimum reputation are assigned an "authority role".

There are two "authority roles": `FOUNDER` and `ADMIN`. Each "authority role" can call certain colonyNetwork methods, which are not permitted by addresses without an "authority role" defined. This includes actions such as minting new colony tokens, setting and removing "authority roles", adding domains, creating tasks, and much more.

*Note: The "authority roles" described here are distinct from "task roles" (`MANAGER`, `WORKER`, and `EVALUATOR`). You can learn more about "task roles" and their permissions in [Task Lifecycle](/colonyjs/docs-task-lifecycle).*

## Permissions for `ColonyClient` methods

|                                   | Founder       | Admin         |
|-----------------------------------|---------------|---------------|
| addNetworkColonyVersion           | X             |               |
| registerColonyLabel               | X             |               |
| bootstrapColony                   | X             |               |
| upgrade                           | X             |               |
| setToken                          | X             |               |
| setFounderRole                    | X             |               |
| setAdminRole                      | X             | X             |
| setRecoveryRole                   | X             |               |
| removeAdminRole                   | X             |               |
| removeRecoveryRole                | X             |               |
| mintTokens                        | X             |               |
| addDomain                         | X             | X             |
| createTask                        | X             | X             |
| moveFundsBetweenPots              | X             | X             |
| startNextRewardPayout             | X             | X             |
| setRewardInverse                  | X             |               |

*See [ColonyClient](/colonyjs/api-colonyclient) for more information about each method.*

## Permissions for `MetaColonyClient` methods

|                                   | Founder       | Admin         |
|-----------------------------------|---------------|---------------|
| addGlobalSkill                    | X             |               |
| mintTokensForColonyNetwork        | X             |               |
| setNetworkFeeInverse              | X             |               |

*See [MetaColonyClient](/colonyjs/api-metacolonyclient) for more information about each method.*
