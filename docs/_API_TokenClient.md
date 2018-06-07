---
title: TokenClient
section: API
order: 3
---

The `TokenClient` is a standard interface for interactions with functions and events described in `Token.sol`.

TODO write me

==TOC==

  
## Callers

**All callers return promises which resolve to an object containing the given return values.** For a reference please check [here](/colonyjs/docs-contractclient/#callers).

### `getTotalSupply.call()`

Get the total token supply.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|amount|BigNumber||

### `getBalanceOf.call({ sourceAddress })`

TODO write me

**Arguments**

|Argument|Type|Description|
|---|---|---|
|sourceAddress|Address||

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|amount|BigNumber||

### `getAllowance.call({ sourceAddress, user })`

TODO write me

**Arguments**

|Argument|Type|Description|
|---|---|---|
|sourceAddress|Address||
|user|Address||

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|amount|BigNumber||

  
## Senders

**All senders return an instance of a `ContractResponse`.** Every `send()` method takes an `options` object as the second argument. For a reference please check [here](/colonyjs/docs-contractclient/#senders).
### `transfer.send({ destinationAddress, amount }, options)`

TODO write me

**Arguments**

|Argument|Type|Description|
|---|---|---|
|destinationAddress|Address||
|amount|BigNumber||

**Returns**

An instance of a `ContractResponse`



### `transferFrom.send({ sourceAddress, destinationAddress, amount }, options)`

TODO write me

**Arguments**

|Argument|Type|Description|
|---|---|---|
|sourceAddress|Address||
|destinationAddress|Address||
|amount|BigNumber||

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|to|Address||
|value|BigNumber||

### `approve.send({ user, amount }, options)`

TODO write me

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|Address||
|amount|BigNumber||

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|owner|Address||
|spender|Address||
|value|BigNumber||

### `mint.send({ amount }, options)`

TODO write me

**Arguments**

|Argument|Type|Description|
|---|---|---|
|amount|BigNumber||

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|address|Address||
|amount|BigNumber||

### `burn.send({ amount }, options)`

TODO write me

**Arguments**

|Argument|Type|Description|
|---|---|---|
|amount|BigNumber||

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|address|Address||
|amount|BigNumber||

### `setOwner.send({ owner }, options)`

TODO write me

**Arguments**

|Argument|Type|Description|
|---|---|---|
|owner|Address||

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|owner|Address||

### `setAuthority.send({ authority }, options)`

TODO write me

**Arguments**

|Argument|Type|Description|
|---|---|---|
|authority|Address||

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|authority|Address||