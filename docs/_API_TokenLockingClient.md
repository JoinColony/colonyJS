---
title: TokenLockingClient
section: API
order: 4
---

The `TokenLockingClient` is a standard interface for interactions with methods and events described in `ITokenLocking.sol`. These interactions are generally concerned token locking, such as locking and unlocking tokens.

See [Clients](/colonyjs/components-clients) for more information about initializing `TokenLockingClient`.

See [ContractClient](/colonyjs/api-contractclient) for more information about the `ContractClient` superclass.

## Table of Contents

==TOC==

  
## Callers

**All callers return promises which resolve to an object containing the given return values.**

### `getTotalLockCount.call({ token })`

Get the total number of locked tokens.

**Input**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|count|number|The total number of locked tokens in the colony.|

**Contract Information**


  
  
Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/TokenLocking.sol)
  
Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ITokenLocking.sol)
  

### `getUserLock.call({ token, user })`

Get the total number of locked tokens for a given user.

**Input**

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


  
  
Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/TokenLocking.sol)
  
Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ITokenLocking.sol)
  

  
## Senders

**All senders return an instance of a `ContractResponse`.** Every `send()` method takes an `options` object as the second argument.
### `deposit.send({ token, amount }, options)`

Deposit tokens. This function only be called if the tokens that the user is attempting to deposit are not locked and if the user has allowed the token locking contract to transfer the tokens.

**Input**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|
|amount|big number|The amount of tokens that will be deposited.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract receiving the deposit.|
|user|address|The address of the user that deposited tokens.|
|amount|big number|The amount of tokens that were deposited.|
|timestamp|date|The timestamp when the tokens were deposited.|
|UserTokenDeposited|object|Contains the data defined in [UserTokenDeposited](#eventsusertokendeposited)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/TokenLocking.sol)
  
Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ITokenLocking.sol)
  

### `lockToken.send({ token }, options)`

Lock all tokens for a given token contract.

**Input**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract that was locked.|
|lockCount|big number|The address of the token contract that was assigned.|
|TokenLocked|object|Contains the data defined in [TokenLocked](#eventstokenlocked)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/TokenLocking.sol)
  
Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ITokenLocking.sol)
  

### `incrementLockCounterTo.send({ token, lockId }, options)`

Increment the token lock counter. This method allows users to waive reward payouts for past reward payout cycles, unlocking the tokens that were locked in previous reward payout cycles.

**Input**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|
|lockId|number|The ID of the lock count that will be set.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/TokenLocking.sol)
  
Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ITokenLocking.sol)
  

### `unlockTokenForUser.send({ token, user, lockId }, options)`

Unlock all tokens for a user on a given token contract.

**Input**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|
|user|address|The address of the user.|
|lockId|number|The ID of the lock count that will be set.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract that was unlocked.|
|user|address|The address of the user that the tokens were unlocked for.|
|lockId|number|The ID of the lock that the was set for the user.|
|UserTokenUnlocked|object|Contains the data defined in [UserTokenUnlocked](#eventsusertokenunlocked)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/TokenLocking.sol)
  
Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ITokenLocking.sol)
  

### `withdraw.send({ token, amount }, options)`

Withdraw tokens. This function only be called if the tokens that the user is attempting to withdraw are not locked.

**Input**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|
|amount|big number|The amount of tokens that will be deposited.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract from which tokens were withdrawn.|
|user|address|The address of the user that withdrew tokens.|
|amount|big number|The amount of tokens that were withdrawn.|
|UserTokenWithdrawn|object|Contains the data defined in [UserTokenWithdrawn](#eventsusertokenwithdrawn)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/TokenLocking.sol)
  
Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/15397d7aa99208b6fd916373aac9acb93596a9d7/contracts/ITokenLocking.sol)
  

  
  
## Events


### `events.TokenLocked`

**Methods**

`.addListener(({ token, lockCount }) => { /* ... */ })`

`.removeListener(({ token, lockCount }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract that was locked.|
|lockCount|big number|The address of the token contract that was assigned.|


### `events.UserTokenDeposited`

**Methods**

`.addListener(({ token, user, amount, timestamp }) => { /* ... */ })`

`.removeListener(({ token, user, amount, timestamp }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract receiving the deposit.|
|user|address|The address of the user that deposited tokens.|
|amount|big number|The amount of tokens that were deposited.|
|timestamp|date|The timestamp when the tokens were deposited.|


### `events.UserTokenUnlocked`

**Methods**

`.addListener(({ token, user, lockId }) => { /* ... */ })`

`.removeListener(({ token, user, lockId }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract that was unlocked.|
|user|address|The address of the user that the tokens were unlocked for.|
|lockId|number|The ID of the lock that the was set for the user.|


### `events.UserTokenWithdrawn`

**Methods**

`.addListener(({ token, user, amount }) => { /* ... */ })`

`.removeListener(({ token, user, amount }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|token|address|The address of the token contract from which tokens were withdrawn.|
|user|address|The address of the user that withdrew tokens.|
|amount|big number|The amount of tokens that were withdrawn.|