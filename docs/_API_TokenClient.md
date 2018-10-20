---
title: TokenClient
section: API
order: 3
---

The `TokenClient` is a standard interface for interactions with functions and events described in `Token.sol`.

Upon creation, new colonies can either create or import existing token contracts. These contracts are expected to conform to the ERC20 or ERC20Extended token standard interface, the latter allowing for `mint` and `burn` functions. The token client is intended to help keep interactions with a colony's token straightforward.

Most functions are fairly self-explanatory and mirror their on-chain counterparts, but in some cases the function will return values passed from event data, rather than simple boolean expressions (which are returned from the contract on-chain). 

==TOC==

  
## Callers

**All callers return promises which resolve to an object containing the given return values.** For a reference please check [here](/colonyjs/docs-contractclient/#callers).

### `getTokenInfo.call()`

Get information about the ERC20 token itself


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|name|string|The token's name (e.g. Cool Colony Token)|
|symbol|string|The token's symbol (e.g. CCT)|
|decimals|number|The token's decimals|

### `getTotalSupply.call()`

Get the total token supply.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|amount|BigNumber|The total token supply.|

### `getBalanceOf.call({ sourceAddress })`

Returns the token balance of a given address.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|sourceAddress|Address|The address in question.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|amount|BigNumber|The balance of tokens associated with the address.|

### `getAllowance.call({ sourceAddress, user })`

Given a token owner address and a spender, will return the amount of tokens approved by the owner that can be transferred to the spender's account.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|sourceAddress|Address|Address of the token owner.|
|user|Address|Address of the approved spender.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|amount|BigNumber|The approved amount of tokens the spender may transfer.|

  
## Senders

**All senders return an instance of a `ContractResponse`.** Every `send()` method takes an `options` object as the second argument. For a reference please check [here](/colonyjs/docs-contractclient/#senders).
### `transfer.send({ destinationAddress, amount }, options)`

Transfer an amount of tokens from a token owner's account to a specified destination address.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|destinationAddress|Address|The account to recieve the tokens.|
|amount|BigNumber|The amount to transfer.|

**Returns**

An instance of a `ContractResponse`



### `transferFrom.send({ sourceAddress, destinationAddress, amount }, options)`

Transfer tokens from a specified account to a destination account. Token transfer must have a sufficient balance and `allowance` set by the source account for the destination address.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|sourceAddress|Address|'from' address, or the token owner account.|
|destinationAddress|Address|'to' address, or the destination with sufficient ``allowance` for transfer.|
|amount|BigNumber|Amount to transfer.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|from|Address|Event data indicating the 'from' address.|
|to|Address|Event data indicating the 'to' address.|
|value|BigNumber|Event data indicating the amount transferred.|
|Transfer|object|Contains the data defined in [Transfer](#events-Transfer)|

### `approve.send({ user, amount }, options)`

The owner of a token can approve an `allowance` that a spender is authorized to transfer using the `transferFrom` function.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address|The spending account allowed to transfer tokens with `transferFrom`.|
|amount|BigNumber|The maximum `allowance` that the spending account may transfer from the owner to the spender.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|owner|Address|Event data indicating the token owner ('from' address).|
|spender|Address|Event data indicating the spender (who is given the `allowance`).|
|value|BigNumber|Event data indicating the new value of allowed transfer.|
|Approval|object|Contains the data defined in [Approval](#events-Approval)|

### `mint.send({ amount }, options)`

ERC20Extended functionality to `mint` new tokens and add to the total supply. In colony these functions are subject to authority restrictions.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|amount|BigNumber|The amount of new tokens to mint.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|address|Address|The address that initiated the mint event.|
|amount|BigNumber|Event data indicating the amount of tokens minted.|
|Mint|object|Contains the data defined in [Mint](#events-Mint)|

### `burn.send({ amount }, options)`

ERC20Extended functionality to `burn` un-owned tokens and subtract from the total token supply. In colony these functions are subject to authority restrictions.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|amount|BigNumber|The amount of unspent tokens to burn.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|address|Address|The address that initiated the burn event.|
|amount|BigNumber|Event data indicating the amount burned.|
|Burn|object|Contains the data defined in [Burn](#events-Burn)|

### `setOwner.send({ owner }, options)`

Sets the owner of a given token contract. In most situations this should be the colony's own address.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|owner|Address|The address of the new owner.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|owner|Address|Event data indicating the new owner.|
|LogSetOwner|object|Contains the data defined in [LogSetOwner](#events-LogSetOwner)|

### `setAuthority.send({ authority }, options)`

Give a particular account special authority (admin) within a colony.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|authority|Address|The address to be given admin authority.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|authority|Address|Event data indicating the address given authority.|
|LogSetAuthority|object|Contains the data defined in [LogSetAuthority](#events-LogSetAuthority)|

  
  
## Events

Refer to the `ContractEvent` class [here](/colonyjs/docs-contractclient/#events) to interact with these events.


### [events.Transfer.addListener(({ from, to, value }) => { /* ... */ })](#events-Transfer)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|from|Address|Event data indicating the 'from' address.|
|to|Address|Event data indicating the 'to' address.|
|value|BigNumber|Event data indicating the amount transferred.|


### [events.Approval.addListener(({ owner, spender, value }) => { /* ... */ })](#events-Approval)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|owner|Address|Event data indicating the token owner ('from' address).|
|spender|Address|Event data indicating the spender (who is given the `allowance`).|
|value|BigNumber|Event data indicating the new value of allowed transfer.|


### [events.Burn.addListener(({ address, amount }) => { /* ... */ })](#events-Burn)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|address|Address|The address that initiated the burn event.|
|amount|BigNumber|Event data indicating the amount burned.|


### [events.LogSetAuthority.addListener(({ authority }) => { /* ... */ })](#events-LogSetAuthority)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|authority|Address|Event data indicating the address given authority.|


### [events.LogSetOwner.addListener(({ owner }) => { /* ... */ })](#events-LogSetOwner)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|owner|Address|Event data indicating the new owner.|


### [events.Mint.addListener(({ address, amount }) => { /* ... */ })](#events-Mint)



**Arguments**

|Argument|Type|Description|
|---|---|---|
|address|Address|The address that initiated the mint event.|
|amount|BigNumber|Event data indicating the amount of tokens minted.|