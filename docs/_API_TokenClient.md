---
title: TokenClient
section: API
order: 3
---

The `TokenClient` is a standard interface for interactions with functions and events described in `Token.sol`.

Upon creation, new colonies can either create or import existing token contracts. These contracts are expected to conform to the ERC20 or ERC20Extended token standard interface, the latter allowing for `mint` and `burn` functions. The token client is intended to help keep interactions with a colony's token straightforward.

Most functions are fairly self-explanatory and mirror their on-chain counterparts, but in some cases the function will return values passed from event data, rather than simple boolean expressions (which are returned from the contract on-chain).

==TOC==

## Create an instance

The `TokenClient` is initialized for you when you ask the `ColonyNetworkClient` for a new instance of `ColonyClient`:

```js

const tokenClient = colonyClient.token;

```

You _could_ create an instance of `TokenClient` by providing an [adapter](/colonyjs/docs-adapters) and a query:

```js

const tokenClient = new TokenClient({ adapter, query });

await tokenClient.init();

```

  
## Callers

**All callers return promises which resolve to an object containing the given return values.** For a reference please check [here](/colonyjs/docs-contractclient/#callers).

### `getAllowance.call({ sourceAddress, user })`

Get the token allowance of an address. The allowance is the amount of tokens that the `spender` is authorized to transfer using the `transferFrom` function.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|sourceAddress|address|The address that approved the allowance (the token `owner`).|
|user|address|The address that was approved for the allowance (the token `spender`).|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|amount|big number|The amount of tokens that were approved (the amount `allowed`).|

**Contract Information**


  - Function: `allowance`
  - Contract: [erc20.sol](https://github.com/dapphub/dappsys-monolithic/blob/002389d43cf54e8f0b919fee1fc364b20ebdf626/erc20.sol)
  
  

### `getBalanceOf.call({ sourceAddress })`

Get the the token balance of an address.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|sourceAddress|address|The address that will be checked.|

**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|amount|big number|The balance of tokens for the address.|

**Contract Information**


  - Function: `balanceOf`
  - Contract: [erc20.sol](https://github.com/dapphub/dappsys-monolithic/blob/002389d43cf54e8f0b919fee1fc364b20ebdf626/erc20.sol)
  
  

### `getTokenInfo.call()`

Get information about the token.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|name|string|The name of the token.|
|symbol|string|The symbol of the token.|
|decimals|number|The number of decimals.|

**Contract Information**


  
  - Contract: [Token.sol](https://github.com/JoinColony/colonyToken/blob/7359eedaadacd55a1393c795964bd61513b2af33/contracts/Token.sol)
  
  

### `getTotalSupply.call()`

Get the total supply of the token.


**Returns**

A promise which resolves to an object containing the following properties:

|Return value|Type|Description|
|---|---|---|
|amount|big number|The total supply of the token.|

**Contract Information**


  - Function: `totalSupply`
  - Contract: [erc20.sol](https://github.com/dapphub/dappsys-monolithic/blob/002389d43cf54e8f0b919fee1fc364b20ebdf626/erc20.sol)
  
  

  
## Senders

**All senders return an instance of a `ContractResponse`.** Every `send()` method takes an `options` object as the second argument. For a reference please check [here](/colonyjs/docs-contractclient/#senders).
### `approve.send({ user, amount }, options)`

Approve a token allowance. This function can only be called by the token `owner`. The allowance is the amount of tokens that the `spender` is authorized to transfer using the `transferFrom` function.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|user|address|The address that will be approved for the allowance (the token `spender`).|
|amount|big number|The amount of tokens that will be approved (the amount `allowed`).|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|owner|address|The address that approved the allowance (the token `owner`).|
|spender|address|The address that was approved for the allowance (the token `spender`).|
|value|big number|The amount of tokens that were approved (the amount `allowed`).|
|Approval|object|Contains the data defined in [Approval](#eventsapprovaladdlistener-owner-spender-value-------)|

**Contract Information**


  
  - Contract: [erc20.sol](https://github.com/dapphub/dappsys-monolithic/blob/002389d43cf54e8f0b919fee1fc364b20ebdf626/erc20.sol)
  
  

### `burn.send({ amount }, options)`

Burn tokens. This is an `ERC20Extended` function that can only be called by the token `owner`. When a colony contract address is assigned as the token `owner`, this function can only be called by the user assigned the `FOUNDER` authority role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|amount|big number|The amount of tokens that will be burned.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|address|address|The address that initiated the burn event.|
|amount|big number|The amount of tokens that were burned.|
|Burn|object|Contains the data defined in [Burn](#eventsburnaddlistener-address-amount-------)|

**Contract Information**


  
  - Contract: [ERC20Extended.sol](https://github.com/JoinColony/colonyToken/blob/7359eedaadacd55a1393c795964bd61513b2af33/contracts/ERC20Extended.sol)
  
  

### `mint.send({ amount }, options)`

Mint new tokens. This is an `ERC20Extended` function that can only be called by the token `owner`. When a colony contract address is assigned as the token `owner`, this function can only be called by the user assigned the `FOUNDER` authority role.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|amount|big number|The amount of tokens that will be minted.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|address|address|The address that initiated the mint event.|
|amount|big number|The amount of tokens that were minted.|
|Mint|object|Contains the data defined in [Mint](#eventsmintaddlistener-address-amount-------)|

**Contract Information**


  
  - Contract: [ERC20Extended.sol](https://github.com/JoinColony/colonyToken/blob/7359eedaadacd55a1393c795964bd61513b2af33/contracts/ERC20Extended.sol)
  
  

### `setAuthority.send({ authority }, options)`

Assign an account the `ADMIN` authority role within a colony.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|authority|address|The address that will be assigned the `ADMIN` authority role.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|authority|address|The address that was assigned an authority role.|
|LogSetAuthority|object|Contains the data defined in [LogSetAuthority](#eventslogsetauthorityaddlistener-authority-------)|

**Contract Information**


  
  - Contract: [auth.sol](https://github.com/dapphub/dappsys-monolithic/blob/002389d43cf54e8f0b919fee1fc364b20ebdf626/auth.sol)
  
  

### `setOwner.send({ owner }, options)`

Set the `owner` of a token contract. This function can only be called by the current `owner` of the contract. In order to call token contract methods from within a colony, the token `owner` must be the address of the colony contract.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|owner|address|The address that will be assigned as the new owner.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|owner|address|The address that was assigned as the new owner.|
|LogSetOwner|object|Contains the data defined in [LogSetOwner](#eventslogsetowneraddlistener-owner-------)|

**Contract Information**


  
  - Contract: [auth.sol](https://github.com/dapphub/dappsys-monolithic/blob/002389d43cf54e8f0b919fee1fc364b20ebdf626/auth.sol)
  
  

### `transfer.send({ destinationAddress, amount }, options)`

Transfer tokens from the address calling the function to another address. The current address must have a sufficient token balance.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|destinationAddress|address|The address to which tokens will be transferred.|
|amount|big number|The amount of tokens that will be transferred.|

**Returns**

An instance of a `ContractResponse`



**Contract Information**


  
  - Contract: [erc20.sol](https://github.com/dapphub/dappsys-monolithic/blob/002389d43cf54e8f0b919fee1fc364b20ebdf626/erc20.sol)
  
  

### `transferFrom.send({ sourceAddress, destinationAddress, amount }, options)`

Transfer tokens from one address to another address. The address the tokens are transferred from must have a sufficient token balance and it must have a sufficient token allowance approved by the token owner.

**Arguments**

|Argument|Type|Description|
|---|---|---|
|sourceAddress|address|The address from which tokens will be transferred.|
|destinationAddress|address|The address to which tokens will be transferred.|
|amount|big number|The amount of tokens that will be transferred.|

**Returns**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Event data|Type|Description|
|---|---|---|
|from|address|The address of the account that sent tokens.|
|to|address|The address of the account that received tokens.|
|value|big number|The amount of tokens that were transferred.|
|Transfer|object|Contains the data defined in [Transfer](#eventstransferaddlistener-from-to-value-------)|

**Contract Information**


  
  - Contract: [Token.sol](https://github.com/JoinColony/colonyToken/blob/7359eedaadacd55a1393c795964bd61513b2af33/contracts/Token.sol)
  
  

  
  
## Events

Refer to the `ContractEvent` class [here](/colonyjs/docs-contractclient/#events) to interact with these events.


### `events.Approval.addListener(({ owner, spender, value }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|owner|address|The address that approved the allowance (the token `owner`).|
|spender|address|The address that was approved for the allowance (the token `spender`).|
|value|big number|The amount of tokens that were approved (the amount `allowed`).|


### `events.Burn.addListener(({ address, amount }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|address|address|The address that initiated the burn event.|
|amount|big number|The amount of tokens that were burned.|


### `events.LogSetAuthority.addListener(({ authority }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|authority|address|The address that was assigned an authority role.|


### `events.LogSetOwner.addListener(({ owner }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|owner|address|The address that was assigned as the new owner.|


### `events.Mint.addListener(({ address, amount }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|address|address|The address that initiated the mint event.|
|amount|big number|The amount of tokens that were minted.|


### `events.TokenLocked.addListener(({ token, lockCount }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|token|address|The address of the token contract.|
|lockCount|number|The total lock count for the token.|


### `events.Transfer.addListener(({ from, to, value }) => { /* ... */ })`



**Arguments**

|Argument|Type|Description|
|---|---|---|
|from|address|The address of the account that sent tokens.|
|to|address|The address of the account that received tokens.|
|value|big number|The amount of tokens that were transferred.|