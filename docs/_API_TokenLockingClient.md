---
title: TokenLockingClient
section: API
order: 4
---

The `TokenLockingClient` is a standard interface for interactions with methods and events described in `ITokenLocking.sol`. These interactions are generally concerned token locking, such as locking and unlocking tokens.

==TOC==

## Initialize

The `TokenLockingClient` is initialized for you when you ask the `ColonyNetworkClient` for a new instance of `ColonyClient`:

```js

const tokenLockingClient = colonyClient.tokenLockingClient;

```

You _could_ create an instance of `TokenLockingClient` by providing an [adapter](/colonyjs/components-adapters) and a query:

```js

const tokenLockingClient = new TokenLockingClient({ adapter, query });

await tokenLockingClient.init();

```

  
## Callers

**All callers return promises which resolve to an object containing the given return values.**.

### `getTotalLockCount.call({ token })`

Get the total number of locked tokens.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|number|The total number of locked tokens in the colony.|

**Contract Information**


  
  - Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/f73dc84a41f5fc1962c999a24e13b15ba491b8a6/contracts/TokenLocking.sol)
  - Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/f73dc84a41f5fc1962c999a24e13b15ba491b8a6/contracts/ITokenLocking.sol)
  

### `getUserLock.call({ token, user })`

Get the total number of locked tokens for a given user.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|
|user|address|The address of the user.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|count|big number|The total number of locked tokens.|

**Contract Information**


  
  - Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/f73dc84a41f5fc1962c999a24e13b15ba491b8a6/contracts/TokenLocking.sol)
  - Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/f73dc84a41f5fc1962c999a24e13b15ba491b8a6/contracts/ITokenLocking.sol)
  

  
## Senders

**All senders return an instance of a `ContractResponse`.** Every `send()` method takes an `options` object as the second argument.
### `deposit.send({ token, amount }, options)`

Deposit tokens. This function only be called if the tokens that the user is attempting to deposit are not locked and if the user has allowed the token locking contract to transfer the tokens.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|
|amount|big number|The amount of tokens that will be deposited.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|token|address|The address of the token contract receiving the deposit.|
|user|address|The address of the user that deposited tokens.|
|amount|big number|The amount of tokens that were deposited.|
|timestamp|date|The timestamp when the tokens were deposited.|
|UserTokenDeposited|object|Contains the data defined in [UserTokenDeposited](#eventsusertokendepositedaddlistener-token-user-amount-timestamp-------)|

**Contract Information**


  
  - Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/f73dc84a41f5fc1962c999a24e13b15ba491b8a6/contracts/TokenLocking.sol)
  - Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/f73dc84a41f5fc1962c999a24e13b15ba491b8a6/contracts/ITokenLocking.sol)
  

### `lockToken.send({ token }, options)`

Lock all tokens for a given token contract.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|token|address|The address of the token contract that was locked.|
|lockCount|big number|The address of the token contract that was assigned.|
|TokenLocked|object|Contains the data defined in [TokenLocked](#eventstokenlockedaddlistener-token-lockcount-------)|

**Contract Information**


  
  - Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/f73dc84a41f5fc1962c999a24e13b15ba491b8a6/contracts/TokenLocking.sol)
  - Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/f73dc84a41f5fc1962c999a24e13b15ba491b8a6/contracts/ITokenLocking.sol)
  

### `incrementLockCounterTo.send({ token, lockId }, options)`

Increment the token lock counter. This method allows users to waive reward payouts for past reward payout cycles, unlocking the tokens that were locked in previous reward payout cycles.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|
|lockId|number|The numeric ID of the lock count that will be set.|

**Returns**

An instance of a `ContractResponse`



**Contract Information**


  
  - Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/f73dc84a41f5fc1962c999a24e13b15ba491b8a6/contracts/TokenLocking.sol)
  - Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/f73dc84a41f5fc1962c999a24e13b15ba491b8a6/contracts/ITokenLocking.sol)
  

### `unlockTokenForUser.send({ token, user, lockId }, options)`

Unlock all tokens for a user on a given token contract.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|
|user|address|The address of the user.|
|lockId|number|The numeric ID of the lock count that will be set.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|token|address|The address of the token contract that was unlocked.|
|user|address|The address of the user that the tokens were unlocked for.|
|lockId|number|The numeric ID of the lock that the was set for the user.|
|UserTokenUnlocked|object|Contains the data defined in [UserTokenUnlocked](#eventsusertokenunlockedaddlistener-token-user-lockid-------)|

**Contract Information**


  
  - Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/f73dc84a41f5fc1962c999a24e13b15ba491b8a6/contracts/TokenLocking.sol)
  - Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/f73dc84a41f5fc1962c999a24e13b15ba491b8a6/contracts/ITokenLocking.sol)
  

### `withdraw.send({ token, amount }, options)`

Withdraw tokens. This function only be called if the tokens that the user is attempting to withdraw are not locked.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|address|The address of the token contract (an empty address if Ether).|
|amount|big number|The amount of tokens that will be deposited.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|token|address|The address of the token contract from which tokens were withdrawn.|
|user|address|The address of the user that withdrew tokens.|
|amount|big number|The amount of tokens that were withdrawn.|
|UserTokenWithdrawn|object|Contains the data defined in [UserTokenWithdrawn](#eventsusertokenwithdrawnaddlistener-token-user-amount-------)|

**Contract Information**


  
  - Contract: [TokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/f73dc84a41f5fc1962c999a24e13b15ba491b8a6/contracts/TokenLocking.sol)
  - Interface: [ITokenLocking.sol](https://github.com/JoinColony/colonyNetwork/tree/f73dc84a41f5fc1962c999a24e13b15ba491b8a6/contracts/ITokenLocking.sol)
  

  
  
## Events


### `events.TokenLocked.addListener(({ token, lockCount }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|address|The address of the token contract that was locked.|
|lockCount|big number|The address of the token contract that was assigned.|


### `events.UserTokenDeposited.addListener(({ token, user, amount, timestamp }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|address|The address of the token contract receiving the deposit.|
|user|address|The address of the user that deposited tokens.|
|amount|big number|The amount of tokens that were deposited.|
|timestamp|date|The timestamp when the tokens were deposited.|


### `events.UserTokenUnlocked.addListener(({ token, user, lockId }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|address|The address of the token contract that was unlocked.|
|user|address|The address of the user that the tokens were unlocked for.|
|lockId|number|The numeric ID of the lock that the was set for the user.|


### `events.UserTokenWithdrawn.addListener(({ token, user, amount }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|address|The address of the token contract from which tokens were withdrawn.|
|user|address|The address of the user that withdrew tokens.|
|amount|big number|The amount of tokens that were withdrawn.|