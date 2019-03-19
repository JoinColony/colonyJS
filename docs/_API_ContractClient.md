---
title: ContractClient
section: API
order: 0
---

`ContractClient` is a superclass for all implementations of [clients](/colonyjs/components-clients/). Each client contains abstractions such as `Caller`, `Sender`, and `MulitisigSender` which are inherited from the `ContractClient` superclass. The `ContractClient` superclass also contains tools for listening to events and interacting with the reputation mining system.

==TOC==

## Callers

Callers passively interacts with objects on the blockchain and do not produce transactions. They are associated with a single contract method. Callers will usually expect certain parameters and return a promise that resolves to an object.

### `call(input)`

The `call` method performs the associated call method on the contract and returns the output values.

#### Input Values

`{ [string]: any }` - An object containing the key value pairs of the required input parameters.

#### Output Values

`Promise<{ [string]: any }>` - A promise that resolves to an object containing the key value pairs of the output.

#### Example

Callers usually accept an object of named parameters (e.g. `taskId`) and return an object with named values (e.g. `dueDate`).

```js

const task = await colonyClient.getTask.call({ taskId: 1 });

// -> {
//      cancelled: false,
//      deliverableDate: Date(...),
//      deliverableHash: '0x...',
//      domainId: 1,
//      dueDate: Date(...),
//      finalized: false,
//      id: 1,
//      skillId: 4,
//      specificationHash: '0x...',
//    }

```

Some callers do not accept an object of named parameters.

```js

const tasks = await colonyClient.getTaskCount.call();

// -> { count: 201 }

```

## Senders

Senders are used to create blockchain transactions. Like callers, they associated with a single contract method. A sender can either be used to call `send()`, which will parse a transaction and execute it on the underlying contract, or `estimate()`, which will simply return an estimate of the transaction gas cost.


### `estimate(input)`

The `estimate` method will estimate the Gas cost of the transaction for the associated smart contract method.

#### Input Values

`{ [string]: any }` - An object containing the key value pairs of the required input parameters.

#### Output Values

`Promise<BigNumber>` - A promise that resolves to a `BigNumber` object which represents the estimated gas cost.

#### Example

```js

const estimate = await networkClient.createColony.estimate({
  tokenAddress: '0x...',
});

// -> BigNumber(2501852)

```

### `send(input, options)`

The `send` method signs and sends off a transaction for the associated contract method. It returns a `ContractResponse` object which contains the transaction metadata as well as event data (if applicable).

#### Input Values

**input**

`{ [string]: any }` - An object containing the key value pairs of the required input parameters.

**options**

|Option|Type|Description|
|---|---|---|
|timeoutMs|number|Milliseconds to wait until this transaction will time out|
|waitForMining|boolean|If true, it will wait for the transaction to be mined before resolving the resulting promise (default: true)|
|gasLimit|BigNumber|Sets the maximum gas limit for the transaction
|gasPrice|BigNumber|The price in wei per gas unit
|nonce|number|The transaction nonce
|value|BigNumber|The amount in wei that the transaction will send

#### Output Values

`Promise<ContractResponse>` - With [ContractResponse](#contractresponse) being an object with the following properties:

with `waitForMining` set to `true`:

|Property|Type|Description|
|---|---|---|
|successful|boolean|Indicates whether the transaction was executed successfully|
|eventData|Object|Contains eventData emitted by the smart contract (see docs of the particular contract client)|
|meta|Object|Contains the `transaction` and a `receipt` object passed on by the used ethereum adapter|

with `waitForMining` set to `false`:

|Property|Type|Description|
|---|---|---|
|successfulPromise|Promise<boolean>|Just like above but will only be resolved when mined|
|eventDataPromise|Object|Just like above but will only be resolved when event data is emitted|
|meta|Object|Just like above execpt the `receipt` is `receiptPromise` and will be resolved when mined|

#### Example

```js

const response = await networkClient.createColony.send({
  tokenAddress: '0x...',
});

// -> {
//      successful: true,
//      eventData: { colonyId: 21, colonyAddress: '0x...' },
//      meta: {
//        receipt: { /* ...receipt properties  */ },
//        transaction: { /* ...transaction properties  */ },
//      },
//    }

```

The `send` method also accepts `options` as an optional second parameter.

```js

await networkClient.createColony.send({
  tokenAddress: '0x...',
}, {
  gasLimit: 400000,
  timeoutMs: 1000 * 60 * 2,
  waitForMining: true,
});

// -> {
//      successful: true,
//      eventData: { colonyId: 21, colonyAddress: '0x...' },
//      meta: {
//        receipt: { /* ...receipt properties  */ },
//        transaction: { /* ...transaction properties  */ },
//      },
//    }

```

## MultisigSender

The `MutlisigSender` class is a used to create multisignature transactions. They are associated with a method on the smart contract which requires more than one signature to be executed. For more information see [Using Multisignature](/colonyjs/topics-usingmultisignature/).

### `startOperation(input)`

Given named input values, it will generate the `MultisigOperation` needed to gather all signatures to send off this transaction.

#### Input Values

**`input`** `{ [string]: any }` - Any key value pair of contract input parameters

#### Output Values

`Promise<MultisigOperation>` - Promise that resolves to a `MultisigOperation` instance.

### `restoreOperation(json)`

Given a serialized operation object as a valid json string, it restores the given operation.

#### Input Values

**`json`** `string` - A serialized operation created via a MultisigOperation instance's .toJSON() method

#### Output Values

`Promise<MultisigOperation>` - Promise that resolves to a `MultisigOperation` instance.

## MultisigOperation

The `MultisigOperation` class is a part of the `ContractClient` to handle Multisignature transactions. They are usually created by a `MultisigSender` class and are associated with the sender which created them.

### `requiredSignees`

`[Address]` - Array of all addresses which are needed to sign off this transaction.

### `missingSignees`

`[Address]` - Array of all addresses which are still missing to sign off this transaction.

### `sign()`

Sign the message hash with the current wallet or provider and add the signature. This method is asynchronous.

#### Output Values

The `MultisigOperation` instance.

### `refresh()`

Refresh the nonce value, required signees, and message hash. This method is asyncrhonous.

If there was no nonce value, a new one will be set; otherwise, if the nonce value changed, the it will be updated, and the `_signers` will be reset. This is done because when the nonce values changes, the signatures that were collected will not work, and the operation will need to be re-signed by all parties.

#### Output Values

The `MultisigOperation` instance.

### `addSignersFromJSON(json)`

Given the state of an operation as JSON, validate the parsed state and add in the signers.

#### Input Values

**`json`** `string` - A serialized `MultisigOperation`.

#### Output Values

The `MultisigOperation` instance with the added signature(s).

### `toJSON()`

Serializes this operation.

#### Output Values

`string` - The serialized `MultisigOperation`

### `send(input, options)`

Given named input values it sends off the MultisigOperation to the contract. Has the same API and return values as [`ContractMethodSender.send()`](/colonyjs/api-contractmethodsender/#sendinputvalues-options).

#### Input Values

**`input`** `{ [string]: any }` - Any key value pair of contract input parameters

**`options`** `SendOptions` - Custom options to use for this transaction. See [`ContractMethodSender.send()`](/colonyjs/api-contractmethodsender/#sendinputvalues-options)

#### Output Values

`Promise<ContractResponse>` - See [`ContractMethodSender.send()`](/colonyjs/api-contractmethodsender/#sendinputvalues-options)

## ContractResponse

A `ContractResponse` is an object with properties that vary based on the `waitForMining` option.

With `waitForMining` set to `true` (the default behavior):

```js

{
  // Boolean flag for whether the transaction was executed successfully or not
  successful: true,

  // Contains all of the data from events logged when the transaction
  // was executed.
  eventData: {
    colonyId: 2,
    colonyAddress: '0xe2D17cA03387f6DaFbA77FaA3De5F6cf41E371Fe',
    ColonyAdded: {
        colonyId: 2,
        colonyAddress: '0xe2D17cA03387f6DaFbA77FaA3De5F6cf41E371Fe',
    },
  },

  // Metadata for the transaction
  meta: {

    // The transaction receipt (received from the Adapter)
    receipt: {
      contractAddress: null,
      transactionIndex: 0,
      gasUsed: { _bn: '1f29f3' },
      logsBloom: '0x...',
      blockHash: '0x6e6eaac9f367c646278f313a48e02fba59c2e1ca9ccf9d96281e3ebd9614b0a2',
      transactionHash: '0x7c1f5b4481fc17f44cb3a42ce09d4fe05202719e411df8c6e7af455a79bbcca4',
      logs: [ /* series of logs */ ],
      blockNumber: 101,
      cumulativeGasUsed: { _bn: '1f29f3' },
      status: 1,
      byzantium: true,
    },

    // The transaction that was sent (received from the Adapter)
    transaction: {
      nonce: 100,
      gasPrice: { _bn: '4a817c800' },
      gasLimit: { _bn: '2625a0' },
      to: '0x76D508Fa65654654Ffdb334a3023353587112e09',
      value: { _bn: 0 },
      data: '0x...',
      v: 38,
      r: '0xd7d6078c30635e86ca025f382c04592556b0ab77e78abcd04bc3c95c55260698',
      s: '0x4656efd201b0032c0b7eb5feb9952927e9914aed0bbfe335d71c3af4fd7a08c1',
      chainId: 1,
      from: '0xb77D57F4959eAfA0339424b83FcFaf9c15407461',
      hash: '0x7c1f5b4481fc17f44cb3a42ce09d4fe05202719e411df8c6e7af455a79bbcca4',
    },
  }
}

```

With `waitForMining` set to `false`:

```js

{
  // Resolves to the `successful` value above
  successfulPromise: Promise,

  // Resolves to the `eventData` value above
  eventDataPromise: Promise,

  meta: {
    // Resolves to the `receipt` value above
    receiptPromise: Promise,

    // The same as the `transaction` value above
    transaction: {
      nonce: 101,
      gasPrice: {
        _bn: '4a817c800',
      },
      gasLimit: {
        _bn: '2625a0',
      },
      to: '0x76D508Fa65654654Ffdb334a3023353587112e09',
      value: {
        _bn: 0,
      },
      data: '0x...',
      v: 37,
      r: '0x5043a8f99914e6a24e768b367f6286bbf98539fe0fa67ce4d8f19dba7194067f',
      s: '0x783e96b415e4684c6b96041273c37e847eb9dad0a41a4f4fa468da07139d6a3a',
      chainId: 1,
      from: '0xb77D57F4959eAfA0339424b83FcFaf9c15407461',
      hash: '0x952ed7494e8867c9bbc8cf1c6bf9946df1a5ba691596835096e8795248a5db51',
    },
  },
}

```
