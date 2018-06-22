---
title: ContractMethodSender
section: API
order: 5
---

The `ContractMethodSender` (short `Sender`) class is a part of the `ContractClient` to eventually create blockchain transactions. They are usually created for a `ContractClient` class on its initialization (e.g. the [`ColonyClient`](/colonyjs/api-colonyclient)) and are associated with one single method on the smart contract.

For more info see the [`ContractClient` docs](/colonyjs/docs-contractclient/).

==TOC==

## Instance methods

### `estimate(inputValues)`

Given named input values, it will estimate the Gas cost of the transaction generated for the associated smart contract method.

**Arguments**

**`inputValues`** `{ [string]: any }` - Any key value pair of contract input parameters

**Returns**

`Promise<BigNumber>` - Promise that resolves to a `BigNumber` object which represents the estimated Gas cost.

### `send(inputValues, options)`

Given named input values, signs and sends off the transaction using by calling the associated smart contract method with the input values using the provider attached to the `ContractClient`. It returns a `ContractResponse` object which may contain the transaction metadata as well as event data (if applicable). For more information see the [`ContractClient` docs](/colonyjs/docs-contractclient/#contractresponse).

**Arguments**

**`inputValues`** `{ [string]: any }` - Any key value pair of contract input parameters

**`options`** `SendOptions` - Custom options to use for this transaction. `SendOptions` being an object with the following possible properties:

|Option|Type|Description|
|---|---|---|
|timeoutMs|number|Milliseconds to wait until this transaction will time out|
|waitForMining|boolean|If true, it will wait for the transaction to be mined before resolving the resulting promise (default: true)|
|gasLimit|BigNumber|Sets the maximum gas limit for the transaction
|gasPrice|BigNumber|The price in wei per gas unit
|nonce|number|The transaction nonce
|value|BigNumber|The amount in wei that the transaction will send

**Returns**

`Promise<ContractResponse>` - With `ContractResponse` being an object with the following properties (see also [Senders](/colonyjs/docs-contractclient/#senders):

with `waitForMining: true`:

|Property|Type|Description|
|---|---|---|
|successful|boolean|Indicates whether the transaction was executed successfully|
|eventData|Object|Contains eventData emitted by the smart contract (see docs of the particular contract client)|
|meta|Object|Contains the `transaction` and a `receipt` object passed on by the used ethereum adapter|

with `waitForMining: false`:

|Property|Type|Description|
|---|---|---|
|successfulPromise|Promise<boolean>|Just like above but will only be resolved when mined|
|eventDataPromise|Object|Just like above but will only be resolved when event data is emitted|
|meta|Object|Just like above execpt the `receipt` is `receiptPromise` and will be resolved when mined|

