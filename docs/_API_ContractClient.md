---
title: ContractClient
section: API
order: 0
---

`ContractClient` is a superclass for all implementations of [Clients](/colonyjs/components-clients/). Each client contains abstractions such as `Caller`, `Sender`, and `MulitisigSender` which are inherited from the `ContractClient` superclass. The `ContractClient` superclass also contains tools for listening to events and interacting with the reputation mining system.

## Table of Contents

==TOC==

## Caller

The `Caller` class passively interacts with the blockchain and does not produce transactions. Each `Caller` method is associated with a single contract method. `Caller` methods may require certain input parameters and they always return a promise.

### `call(input)`

Given the input parameters for the named method, the `call` method performs the associated contract method and returns a promise that resolves to an object containing its return values.

**Input**

`{ [string]: any }` - An object containing the key value pairs of the input parameters.

**Response**

`Promise<{ [string]: any }>` - A promise that resolves to an object containing the key value pairs of the return values.

## Sender

The `Sender` class is used to estimate and create blockchain transactions. Each `Sender` method is associated with a single contract method. `Sender` methods may require certain input parameters and they always return a promise.

### `estimate(input)`

Given the input parameters for the named method, the `estimate` method performs an estimation of the gas cost to perform the associated smart contract method and returns a promise that resolves to a `BigNumber` object containing the estimate.

**Input**

`{ [string]: any }` - An object containing the key value pairs of the input parameters.

**Response**

`Promise<BigNumber>` - A promise that resolves to a `BigNumber` object containing the estimated gas cost.

### `send(input, options)`

Given the input parameters for the named method, the `send` method sends a transaction for the associated contract method and returns a promise that resolves to a `ContractResponse` object containing the transaction metadata and, if applicable, the event data for any events emitted when the transaction was mined.

**Input**

`{ [string]: any }` - An object containing the key value pairs of the input parameters.

**Options**

|Name|Type|Description|
|---|---|---|
|timeoutMs|number|The number of milliseconds to wait until this transaction will time out.|
|waitForMining|boolean|A boolean indicating whether or not to wait for the transaction to be mined before resolving the resulting promise. The default value is `true`.|
|gasLimit|BigNumber|The maximum gas limit for the transaction.|
|gasPrice|BigNumber|The price in wei per gas unit.|
|nonce|number|The transaction nonce.|
|value|BigNumber|The amount of ETH in wei that the transaction will send.|

**Response**

`Promise<ContractResponse>` - A promise that resolves to a `ContractResponse` object. The properties of the `ContractResponse` object vary based on whether the `waitForMining` option is set to `true` (the default setting) or `false`.

With `waitForMining` set to `true`:

|Name|Type|Description|
|---|---|---|
|successful|boolean|A boolean indicating whether or not the transaction was executed successfully.|
|eventData|Object|The event data emitted by the smart contract.|
|meta|Object|An object containing the `transaction` and a `receipt` object.|

With `waitForMining` set to `false`:

|Name|Type|Description|
|---|---|---|
|successfulPromise|Promise<boolean>|A promise that will resolve to a boolean that will indicate whether or not the transaction was executed successfully. The promise will be resolved when the transaction is mined.|
|eventDataPromise|Object|A promise that will resolve to event data that will be emitted by the smart contract. The promise will be resolved when the transaction is mined.|
|meta|Object|An object containing the `transaction` and a `receiptPromise`. The promise will be resolved when the transaction is mined.|

## MultisigSender

The `MutlisigSender` class is a used to start and restore instances of `MultisigOperation`. Each `MutlisigSender` method is associated with a single contract method which requires more than one signature to be executed.

### `startOperation(input)`

Given the input parameters for the named method, the `startOperation` method generates a `MultisigOperation` instance.

**Input**

`{ [string]: any }` - An object containing the key value pairs of the input parameters.

**Response**

`Promise<MultisigOperation>` - A promise that resolves to a `MultisigOperation` instance.

See [MultisigOperation](/api-multisigoperation/) for more information and [Using Multisignature](/topics-using-multisignature/) for examples.

### `restoreOperation(input)`

Given a `MultisigOperation` in JSON format, the `restoreOperation` method restores a `MultisigOperation` instance.

**Input**

`string` - A `MultisigOperation` serialized into JSON format.

**Response**

`Promise<MultisigOperation>` - A promise that resolves to a `MultisigOperation` instance.

See [MultisigOperation](/api-multisigoperation/) for more information and [Using Multisignature](/topics-using-multisignature/) for examples.
