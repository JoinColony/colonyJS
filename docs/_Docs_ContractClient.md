---
title: ContractClient
section: Docs
order: 5
---

The `ContractClient` is a superclass for all client implementations that access a Colony smart contract. It contains abstractions for Callers and Senders as well as certain tools for listening to events, providing information about the network state, and interacting with the reputation mining system.

The `ContractClient` is split into two sub-classes, each of which interacts with a corresponding interface on-chain.

The on-chain interfaces are `IColonyNetwork.sol` and `IColony.sol`. For more information about these, please refer to the [Colony Network Documentation](/colonynetwork/api-the-colony-network/).


## ColonyNetworkClient
The `ColonyNetworkClient` class is the standard interface for functions and events that interact described in `IColonyNetwork.sol`.

These interactions are generally concerned with the colony network as a whole, rather than at the Colony level. This includes operations like getting a count of all Colonies on the network, querying for information about skills, and interactions with the CLNY token and reputation system.

[ColonyNetworkClient API documentation](/colonyjs/api-colonynetworkclient/)

## ColonyClient

The `ColonyClient` class is a standard interface for interactions with the on-chain functions and events described in `IColony.sol`.

These interactions are generally concerned with functions and events internal to a colony, such as creating a task, assigning a work rating, or moving funds between pots.

[ColonyClient API documentation](/colonyjs/api-colonyclient/)

## Callers

**Callers** are functions that passively interact with objects on the blockchain and do not need to produce transactions. Usually these will expect certain parameters and will return an object or objects. They usually accept an object of named parameters (e.g. `taskId`) and always return an object with named values (e.g. `dueDate`).

```js
// With parameters:
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

// Without parameters:
const tasks = await colonyClient.getTaskCount.call();
// -> { count: 201 }
```

## Senders

**Senders** are functions that will eventually generate a transaction on the blockchain. A sender can either be used to call `send()`, which will parse a transaction and execute it on the underlying contract, or `estimate()`, which will simply return an estimate of the transaction gas cost.

### Getting an estimate

```js
const estimate = await networkClient.createColony.estimate({
  name: 'My Little Colony',
  tokenAddress: '0x...',
});
// -> BigNumber(2501852)
```

### Sending a transaction

```js
const response = await networkClient.createColony.send({
  name: 'My Little Colony',
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

The response in this example is a [ContractResponse](/colonyjs/docs-contract-client/#contractresponse).

The `send` function also accepts `SendOptions` as an optional second parameter; see more on these options [here](/colonyjs/api-contractmethodsender/#sendinputvalues-options).

```js
// Sending with options
await networkClient.createColony.send({
  name: 'My Little Colony',
  tokenAddress: '0x...',
}, {
  gasLimit: new BigNumber(400000),
  timeoutMs: 1000 * 60 * 2, // two minutes
  waitForMining: true,
);
```

### ContractResponse

A `ContractResponse` is a plain object with certain properties, depending on whether it was called with the `waitForMining` option or not.

With `waitForMining: true` (the default behaviour):

```js
{
  // Boolean flag for whether the transaction was executed successfully or not
  successful: true,

  // Contains all of the data from events logged when the transaction
  // was executed.
  eventData: {
    colonyId: 2,
    colonyAddress: '0xe2D17cA03387f6DaFbA77FaA3De5F6cf41E371Fe',
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

And with `waitForMining: false`:

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
