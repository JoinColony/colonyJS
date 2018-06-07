---
title: AuthorityClient
section: API
order: 4
---

The `AuthorityClient` is a standard interface for interactions with functions and events described in `Authority.sol`.

TODO write me

==TOC==

  
## Callers

**All callers return promises which resolve to an object containing the given return values.** For a reference please check [here](/colonyjs/docs-contractclient/#callers).

### `getUserRole.call({ user })`

Get the given user's role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address||

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|role|Authority Role||

### `hasUserRole.call({ user, role })`

For the given user's address and role, return true if the user has that role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address||
|role|Authority Role||

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|hasRole|boolean||

  
## Senders

**All senders return an instance of a `ContractResponse`.** Every `send()` method takes an `options` object as the second argument. For a reference please check [here](/colonyjs/docs-contractclient/#senders).
### `setUserRole.send({ user, role, enabled }, options)`

Enable or disable a particular role for a user's address (default behaviour: enable the role).

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address||
|role|Authority Role||
|enabled|boolean||

**Returns**

An instance of a `ContractResponse`