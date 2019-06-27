---
title: TokenClient
section: API
order: 3
---

The `TokenClient` is a standard interface for interactions with methods and events described in `Token.sol`. These interactions are extended from the ERC20 and DSToken standard token interfaces and are generally concerned with managing the native token assigned to a colony. This includes operations such as minting tokens, burning tokens, and transferring tokens.

See [Clients](/colonyjs/components-clients) for more information about initializing `TokenClient`.

See [ContractClient](/colonyjs/api-contractclient) for more information about the `ContractClient` superclass.

  
## Callers


### `getAllowance`

Get the token allowance of an address. The allowance is the amount of tokens that the `spender` is authorized to transfer using the `transferFrom` function.

```js
await tokenClient.getAllowance.call({
  sourceAddress,
  address,
});
```


**Input**

|Name|Type|Description|
|---|---|---|
|sourceAddress|address|The address that approved the allowance (the token `owner`).|
|address|address|The address that was approved for the allowance (the token `spender`).|

**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|amount|big number|The amount of tokens that were approved (the amount `allowed`).|

**Contract Information**


  Function: `allowance`
  
Contract: [base.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/base.sol)
  
  

### `getBalanceOf`

Get the the token balance of an address.

```js
await tokenClient.getBalanceOf.call({
  sourceAddress,
});
```


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
  
Contract: [base.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/base.sol)
  
  

### `getTokenInfo`

Get information about the token.

```js
await tokenClient.getTokenInfo.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|name|string|The name of the token.|
|symbol|string|The symbol of the token.|
|decimals|number|The number of decimals.|

**Contract Information**


  
  
Contract: [Token.sol](https://github.com/JoinColony/colonyToken/blob/8e5139586018fbaa53e9cf971e040b3ae2a4bb92/contracts/Token.sol)
  
  

### `getTotalSupply`

Get the total supply of the token.

```js
await tokenClient.getTotalSupply.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|amount|big number|The total supply of the token.|

**Contract Information**


  Function: `totalSupply`
  
Contract: [base.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/base.sol)
  
  

### `isLocked`

Get whether the token is locked.

```js
await tokenClient.isLocked.call();
```



**Response**

A promise which resolves to an object containing the following properties:

|Name|Type|Description|
|---|---|---|
|locked|boolean|Whether the token is locked.|

**Contract Information**


  Function: `locked`
  
Contract: [Token.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/Token.sol)
  
  

  
## Senders


### `approve`

Approve a token allowance. This function can only be called by the token `owner`. The allowance is the amount of tokens that the `spender` is authorized to transfer using the `transferFrom` function.

```js
await tokenClient.approve.send({
  address,
  amount,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|address|address|The address that will be approved for the allowance (the token `spender`).|
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


  
  
Contract: [base.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/base.sol)
  
  

### `burn`

Burn tokens. This function can only be called by the token owner or an address with authority.

```js
await tokenClient.burn.send({
  address,
  amount,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|address|address|The address from which the tokens will be burned.|
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


  
  
Contract: [Token.sol](https://github.com/JoinColony/colonyToken/blob/8e5139586018fbaa53e9cf971e040b3ae2a4bb92/contracts/Token.sol)
  
  

### `createTokenAuthority`

Deploy a TokenAuthority contract which can then be use to control the transfer of a token.

```js
await tokenClient.createTokenAuthority.send({
  allowedToTransfer,
  colonyAddress,
  tokenAddress,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|allowedToTransfer|undefined|Additional addresses which are allowed to transfer the token while locked.|
|colonyAddress|address|The address of the colony which should be allowed control of the token.|
|tokenAddress|address|The address of the token for which this contract will operate.|

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse` which will receive a receipt with a `contractAddress` property.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [Token.sol](https://github.com/JoinColony/colonyToken/blob/8e5139586018fbaa53e9cf971e040b3ae2a4bb92/contracts/Token.sol)
  
  

### `mint`

Mint new tokens. This function can only be called by the token owner or an address with authority.

```js
await tokenClient.mint.send({
  address,
  amount,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|address|address|The address that will receive the minted tokens.|
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


  
  
Contract: [Token.sol](https://github.com/JoinColony/colonyToken/blob/8e5139586018fbaa53e9cf971e040b3ae2a4bb92/contracts/Token.sol)
  
  

### `setAuthority`

Assign an account the token authority role within a colony.

```js
await tokenClient.setAuthority.send({
  authority,
}, options);
```


**Input**

|Name|Type|Description|
|---|---|---|
|authority|address|The address that will be assigned the token authority role.|

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
  
  

### `setOwner`

Set the `owner` of a token contract. This function can only be called by the current `owner` of the contract. In order to call token contract methods from within a colony, the token `owner` must be the address of the colony contract.

```js
await tokenClient.setOwner.send({
  owner,
}, options);
```


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
  
  

### `transfer`

Transfer tokens from the address calling the function to another address. The current address must have a sufficient token balance.

```js
await tokenClient.transfer.send({
  destinationAddress,
  amount,
}, options);
```


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


  
  
Contract: [base.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/base.sol)
  
  

### `transferFrom`

Transfer tokens from one address to another address. The address the tokens are transferred from must have a sufficient token balance and it must have a sufficient token allowance approved by the token owner.

```js
await tokenClient.transferFrom.send({
  sourceAddress,
  destinationAddress,
  amount,
}, options);
```


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


  
  
Contract: [base.sol](https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361/base.sol)
  
  

### `unlock`

Unlock the token.

```js
await tokenClient.unlock.send(options);
```



**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a `ContractResponse`.



See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about `ContractResponse`.

**Contract Information**


  
  
Contract: [Token.sol](https://github.com/JoinColony/colonyToken/blob/8e5139586018fbaa53e9cf971e040b3ae2a4bb92/contracts/Token.sol)
  
  

  
  
## Events


### `Approval`

**Event Handler**

```js
const eventHandler = ({
  owner,
  spender,
  value,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
tokenClient.events.Approval.addListener(eventHandler);
```

**Remove Listener**

```js
tokenClient.events.Approval.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|owner|address|The address that approved the allowance (the token `owner`).|
|spender|address|The address that was approved for the allowance (the token `spender`).|
|value|big number|The amount of tokens that were approved (the amount `allowed`).|


### `Burn`

**Event Handler**

```js
const eventHandler = ({
  address,
  amount,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
tokenClient.events.Burn.addListener(eventHandler);
```

**Remove Listener**

```js
tokenClient.events.Burn.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|address|address|The address from which the tokens were burned.|
|amount|big number|The amount of tokens that were burned.|


### `LogSetAuthority`

**Event Handler**

```js
const eventHandler = ({
  authority,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
tokenClient.events.LogSetAuthority.addListener(eventHandler);
```

**Remove Listener**

```js
tokenClient.events.LogSetAuthority.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|authority|address|The address that was assigned an authority role.|


### `LogSetOwner`

**Event Handler**

```js
const eventHandler = ({
  owner,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
tokenClient.events.LogSetOwner.addListener(eventHandler);
```

**Remove Listener**

```js
tokenClient.events.LogSetOwner.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|owner|address|The address that was assigned as the new owner.|


### `Mint`

**Event Handler**

```js
const eventHandler = ({
  address,
  amount,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
tokenClient.events.Mint.addListener(eventHandler);
```

**Remove Listener**

```js
tokenClient.events.Mint.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|address|address|The address to which the minted tokens were sent.|
|amount|big number|The amount of tokens that were minted.|


### `Transfer`

**Event Handler**

```js
const eventHandler = ({
  from,
  to,
  value,
}) => {
  // perform an action using the event data
};
```

**Add Listener**

```js
tokenClient.events.Transfer.addListener(eventHandler);
```

**Remove Listener**

```js
tokenClient.events.Transfer.removeListener(eventHandler);
```




**Event Data**

|Name|Type|Description|
|---|---|---|
|from|address|The address of the account that sent tokens.|
|to|address|The address of the account that received tokens.|
|value|big number|The amount of tokens that were transferred.|