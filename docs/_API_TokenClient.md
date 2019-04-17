---
title: TokenClient
section: API
order: 3
---

The `TokenClient` is a standard interface for interactions with methods and events described in `Token.sol`. These interactions are extended from the ERC20 and DSToken standard token interfaces and are generally concerned with managing the native token assigned to a colony. This includes operations such as minting tokens, burning tokens, and transferring tokens.

See [Clients](/colonyjs/components-clients) for more information about initializing `TokenClient`.

See [ContractClient](/colonyjs/api-contractclient) for more information about the `ContractClient` superclass.

## Table of Contents

==TOC==

  
## Callers

**All callers return promises which resolve to an object containing the given return values.**

### `getAllowance.call({ sourceAddress, user })`

Get the token allowance of an address. The allowance is the amount of tokens that the `spender` is authorized to transfer using the `transferFrom` function.

**Input**

|Name|Type|Description|
|---|---|---|
|sourceAddress|address|The address that approved the allowance (the token `owner`).|
|user|address|The address that was approved for the allowance (the token `spender`).|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|amount|big number|The amount of tokens that were approved (the amount `allowed`).|

**Contract Information**


  Function: `allowance`
  
Contract: [erc20.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/erc20.sol)
  
  

### `getBalanceOf.call({ sourceAddress })`

Get the the token balance of an address.

**Input**

|Name|Type|Description|
|---|---|---|
|sourceAddress|address|The address that will be checked.|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|amount|big number|The balance of tokens for the address.|

**Contract Information**


  Function: `balanceOf`
  
Contract: [erc20.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/erc20.sol)
  
  

### `getTokenInfo.call()`

Get information about the token.


**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|name|string|The name of the token.|
|symbol|string|The symbol of the token.|
|decimals|number|The number of decimals.|

**Contract Information**


  
  
Contract: [Token.sol](https://github.com/JoinColony/colonyToken/blob/2dc3136d71c0af9adb9b05e187885dd9dcae94c8/contracts/Token.sol)
  
  

### `getTotalSupply.call()`

Get the total supply of the token.


**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|amount|big number|The total supply of the token.|

**Contract Information**


  Function: `totalSupply`
  
Contract: [erc20.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/erc20.sol)
  
  

  
## Senders

**All senders return an instance of a `ContractResponse`.** Every `send()` method takes an `options` object as the second argument.
### `approve.send({ user, amount }, options)`

Approve a token allowance. This function can only be called by the token `owner`. The allowance is the amount of tokens that the `spender` is authorized to transfer using the `transferFrom` function.

**Input**

|Name|Type|Description|
|---|---|---|
|user|address|The address that will be approved for the allowance (the token `spender`).|
|amount|big number|The amount of tokens that will be approved (the amount `allowed`).|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|owner|address|The address that approved the allowance (the token `owner`).|
|spender|address|The address that was approved for the allowance (the token `spender`).|
|value|big number|The amount of tokens that were approved (the amount `allowed`).|
|Approval|object|Contains the data defined in [Approval](#eventsapproval)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [erc20.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/erc20.sol)
  
  

### `burn.send({ user, amount }, options)`

Burn tokens. This is a `DSToken` function that can only be called by the token `owner`. When a colony contract address is assigned as the token `owner`, this function can only be called by the user assigned the `FOUNDER` authority role.

**Input**

|Name|Type|Description|
|---|---|---|
|user|address|The address from which the tokens will be burned.|
|amount|big number|The amount of tokens that will be burned.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|address|address|The address from which the tokens were burned.|
|amount|big number|The amount of tokens that were burned.|
|Burn|object|Contains the data defined in [Burn](#eventsburn)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [token.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/token.sol)
  
  

### `mint.send({ user, amount }, options)`

Mint new tokens. This is a `DSToken` function that can only be called by the token `owner`. When a colony contract address is assigned as the token `owner`, this function can only be called by the user assigned the `FOUNDER` authority role.

**Input**

|Name|Type|Description|
|---|---|---|
|user|address|The address that will receive the minted tokens.|
|amount|big number|The amount of tokens that will be minted.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|address|address|The address to which the minted tokens were sent.|
|amount|big number|The amount of tokens that were minted.|
|Mint|object|Contains the data defined in [Mint](#eventsmint)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [token.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/token.sol)
  
  

### `setAuthority.send({ authority }, options)`

Assign an account the `ADMIN` authority role within a colony.

**Input**

|Name|Type|Description|
|---|---|---|
|authority|address|The address that will be assigned the `ADMIN` authority role.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|authority|address|The address that was assigned an authority role.|
|LogSetAuthority|object|Contains the data defined in [LogSetAuthority](#eventslogsetauthority)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [auth.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/auth.sol)
  
  

### `setName.send({ name }, options)`

Set the `name` of a token contract. This function can only be called by the current `owner` of the contract. In order to call token contract methods from within a colony, the token `owner` must be the address of the colony contract.

**Input**

|Name|Type|Description|
|---|---|---|
|name|string|The name of the token that will be set.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [token.sol](https://github.com/dapphub/dappsys-monolithic/tree/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/token.sol)
  
  

### `setOwner.send({ owner }, options)`

Set the `owner` of a token contract. This function can only be called by the current `owner` of the contract. In order to call token contract methods from within a colony, the token `owner` must be the address of the colony contract.

**Input**

|Name|Type|Description|
|---|---|---|
|owner|address|The address that will be assigned as the new owner.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|owner|address|The address that was assigned as the new owner.|
|LogSetOwner|object|Contains the data defined in [LogSetOwner](#eventslogsetowner)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [auth.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/auth.sol)
  
  

### `transfer.send({ destinationAddress, amount }, options)`

Transfer tokens from the address calling the function to another address. The current address must have a sufficient token balance.

**Input**

|Name|Type|Description|
|---|---|---|
|destinationAddress|address|The address to which tokens will be transferred.|
|amount|big number|The amount of tokens that will be transferred.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [erc20.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/erc20.sol)
  
  

### `transferFrom.send({ sourceAddress, destinationAddress, amount }, options)`

Transfer tokens from one address to another address. The address the tokens are transferred from must have a sufficient token balance and it must have a sufficient token allowance approved by the token owner.

**Input**

|Name|Type|Description|
|---|---|---|
|sourceAddress|address|The address from which tokens will be transferred.|
|destinationAddress|address|The address to which tokens will be transferred.|
|amount|big number|The amount of tokens that will be transferred.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will eventually receive the following event data:

|Name|Type|Description|
|---|---|---|
|from|address|The address of the account that sent tokens.|
|to|address|The address of the account that received tokens.|
|value|big number|The amount of tokens that were transferred.|
|Transfer|object|Contains the data defined in [Transfer](#eventstransfer)|

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [Token.sol](https://github.com/JoinColony/colonyToken/blob/2dc3136d71c0af9adb9b05e187885dd9dcae94c8/contracts/Token.sol)
  
  

  
  
## Events


### `events.Approval`

**Methods**

`.addListener(({ owner, spender, value }) => { /* ... */ })`

`.removeListener(({ owner, spender, value }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|owner|address|The address that approved the allowance (the token `owner`).|
|spender|address|The address that was approved for the allowance (the token `spender`).|
|value|big number|The amount of tokens that were approved (the amount `allowed`).|


### `events.Burn`

**Methods**

`.addListener(({ address, amount }) => { /* ... */ })`

`.removeListener(({ address, amount }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|address|address|The address from which the tokens were burned.|
|amount|big number|The amount of tokens that were burned.|


### `events.LogSetAuthority`

**Methods**

`.addListener(({ authority }) => { /* ... */ })`

`.removeListener(({ authority }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|authority|address|The address that was assigned an authority role.|


### `events.LogSetOwner`

**Methods**

`.addListener(({ owner }) => { /* ... */ })`

`.removeListener(({ owner }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|owner|address|The address that was assigned as the new owner.|


### `events.Mint`

**Methods**

`.addListener(({ address, amount }) => { /* ... */ })`

`.removeListener(({ address, amount }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|address|address|The address to which the minted tokens were sent.|
|amount|big number|The amount of tokens that were minted.|


### `events.Transfer`

**Methods**

`.addListener(({ from, to, value }) => { /* ... */ })`

`.removeListener(({ from, to, value }) => { /* ... */ })`




**Event Data**

|Name|Type|Description|
|---|---|---|
|from|address|The address of the account that sent tokens.|
|to|address|The address of the account that received tokens.|
|value|big number|The amount of tokens that were transferred.|