---
title: TokenLockingClient
section: API
order: 4
---

The `TokenLockingClient` is a standard interface for interactions with methods and events described in `ITokenLocking.sol`. These interactions are generally concerned token locking, such as locking and unlocking tokens.

See [Clients](/colonyjs/components-clients) for information about initializing `TokenLockingClient`.

See [ContractClient](/colonyjs/api-contractclient) for information about the `ContractClient` class.

## Table of Contents

==TOC==

  
## Callers

**All callers return promises which resolve to an object containing the given return values.**.

### `getTotalLockCount.call({ token })`

Get the total number of locked tokens.

**Arguments**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|count|number|The total number of locked tokens in the colony.|

**Contract Information**


  
  
Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/TokenLocking.sol)
  
Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ITokenLocking.sol)
  

### `getUserLock.call({ token, user })`

Get the total number of locked tokens for a given user.

**Arguments**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|
|user|address|The address of the user.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|count|big number|The total number of locked tokens.|

**Contract Information**


  
  
Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/TokenLocking.sol)
  
Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ITokenLocking.sol)
  

  
## Senders

**All senders return an instance of a `ContractResponse`.** Every `send()` method takes an `options` object as the second argument.
### `deposit.send({ token, amount }, options)`

Deposit tokens. This function only be called if the tokens that the user is attempting to deposit are not locked and if the user has allowed the token locking contract to transfer the tokens.

**Arguments**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|
|amount|big number|The amount of tokens that will be deposited.|

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract receiving the deposit.|
|user|address|The address of the user that deposited tokens.|
|amount|big number|The amount of tokens that were deposited.|
|timestamp|date|The timestamp when the tokens were deposited.|
|UserTokenDeposited|object|Contains the data defined in [UserTokenDeposited](#eventsusertokendepositedaddlistener-token-user-amount-timestamp-------)|

**Contract Information**


  
  
Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/TokenLocking.sol)
  
Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ITokenLocking.sol)
  

### `lockToken.send({ token }, options)`

Lock all tokens for a given token contract.

**Arguments**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract that was locked.|
|lockCount|big number|The address of the token contract that was assigned.|
|TokenLocked|object|Contains the data defined in [TokenLocked](#eventstokenlockedaddlistener-token-lockcount-------)|

**Contract Information**


  
  
Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/TokenLocking.sol)
  
Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ITokenLocking.sol)
  

### `incrementLockCounterTo.send({ token, lockId }, options)`

Increment the token lock counter. This method allows users to waive reward payouts for past reward payout cycles, unlocking the tokens that were locked in previous reward payout cycles.

**Arguments**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|
|lockId|number|The ID of the lock count that will be set.|

**Response**

An instance of a `ContractResponse`



**Contract Information**


  
  
Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/TokenLocking.sol)
  
Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ITokenLocking.sol)
  

### `unlockTokenForUser.send({ token, user, lockId }, options)`

Unlock all tokens for a user on a given token contract.

**Arguments**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|
|user|address|The address of the user.|
|lockId|number|The ID of the lock count that will be set.|

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract that was unlocked.|
|user|address|The address of the user that the tokens were unlocked for.|
|lockId|number|The ID of the lock that the was set for the user.|
|UserTokenUnlocked|object|Contains the data defined in [UserTokenUnlocked](#eventsusertokenunlockedaddlistener-token-user-lockid-------)|

**Contract Information**


  
  
Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/TokenLocking.sol)
  
Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ITokenLocking.sol)
  

### `withdraw.send({ token, amount }, options)`

Withdraw tokens. This function only be called if the tokens that the user is attempting to withdraw are not locked.

**Arguments**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|
|amount|big number|The amount of tokens that will be deposited.|

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract from which tokens were withdrawn.|
|user|address|The address of the user that withdrew tokens.|
|amount|big number|The amount of tokens that were withdrawn.|
|UserTokenWithdrawn|object|Contains the data defined in [UserTokenWithdrawn](#eventsusertokenwithdrawnaddlistener-token-user-amount-------)|

**Contract Information**


  
  
Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/TokenLocking.sol)
  
Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/9bba127b0286708d4f8919526a943b0e916cfd7c/contracts/ITokenLocking.sol)
  

  
  
## Events


### `events.TokenLocked.addListener(({ token, lockCount }) => { /* ... */ })`



**Arguments**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract that was locked.|
|lockCount|big number|The address of the token contract that was assigned.|


### `events.UserTokenDeposited.addListener(({ token, user, amount, timestamp }) => { /* ... */ })`



**Arguments**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract receiving the deposit.|
|user|address|The address of the user that deposited tokens.|
|amount|big number|The amount of tokens that were deposited.|
|timestamp|date|The timestamp when the tokens were deposited.|


### `events.UserTokenUnlocked.addListener(({ token, user, lockId }) => { /* ... */ })`



**Arguments**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract that was unlocked.|
|user|address|The address of the user that the tokens were unlocked for.|
|lockId|number|The ID of the lock that the was set for the user.|


### `events.UserTokenWithdrawn.addListener(({ token, user, amount }) => { /* ... */ })`



**Arguments**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract from which tokens were withdrawn.|
|user|address|The address of the user that withdrew tokens.|
|amount|big number|The amount of tokens that were withdrawn.|