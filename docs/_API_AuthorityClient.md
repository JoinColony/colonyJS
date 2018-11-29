---
title: AuthorityClient
section: API
order: 7
---

The `AuthorityClient` is a standard interface for interactions with functions and events described in `Authority.sol`.

In the current implementation of the Colony Network, some events on-chain are not mediated by reputation scores as described in the whitepaper. Rather, certain actions within a colony that would ordinarily require some minimum reputation are assigned an 'authority' of Colony Owner and Colony Admin. This includes colony-wide actions such as minting new colony tokens as well as the creation and finalization of tasks.

The roles of `OWNER` and `ADMIN` are able to call certain specific functions on the Colony Network, which are not permitted by addresses without an authorityRole defined.

|                                     | Role: `OWNER` | Role: `ADMIN` |
|-------------------------------------|---------------|---------------|
| `setToken`                          | X             |               |
| `mintTokens`                        | X             |               |
| `addGlobalSkill` (Meta Colony only) | X             |               |
| `addDomain`                         | X             | X             |
| `moveFundsBetweenPots`              | X             | X             |
| `startNextRewardPayout`             | X             | X             |
| `createTask`                        | X             | X             |
| `cancelTask`                        | X             | X             |
| `setAdmin`                          | X             | X             |
| `removeAdmin`                       | X             |               |

Note: these authority roles are distinct from the 'roles' assigned in a task (manager, worker, and evaluator). See the [task lifecycle](/colonyjs/docs-task-lifecycle/) for a summary of task roles.

==TOC==

  
## Callers

**All callers return promises which resolve to an object containing the given return values.** For a reference please check [here](/colonyjs/docs-contractclient/#callers).

### `getUserRole.call({ user })`

Get the given user's role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|The user in question.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|role|Authority Role|That user's authority role (`OWNER` or `ADMIN`).|

### `hasUserRole.call({ user, role })`

For the given user's address and role, return true if the user has that role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|The user in question|
|role|Authority Role|The role to be checked (`OWNER` or `ADMIN`).|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|hasRole|boolean|Whether or not the user has the role provided.|