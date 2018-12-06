---
title: Authority
section: Docs
order: 4
---

In the current implementation of the Colony Network, some events on-chain are not mediated by reputation scores as described in the whitepaper. Rather, certain actions within a colony that would ordinarily require some minimum reputation are assigned an "authority".

There are two "authority" roles: `FOUNDER` and `ADMIN`. This includes colony-wide actions such as minting new colony tokens as well as the creation and finalization of tasks. The roles of `FOUNDER` and `ADMIN` are able to call certain specific functions on the Colony Network, which are not permitted by addresses without an authority role defined.

Permissions for function using `ColonyClient`:

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

Additional permissions for function using `MetaColonyClient`:

|                                   | Founder       | Admin         |
|-----------------------------------|---------------|---------------|
| addGlobalSkill                    | X             |               |
| mintTokensForColonyNetwork        | X             |               |
| setNetworkFeeInverse              | X             |               |

Note: These authority roles are distinct from the "roles" assigned in a task (manager, worker, and evaluator). See the [Task Lifecycle](/colonyjs/docs-task-lifecycle/) docs for a summary of task roles.
