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
//      eventData: { colonyId: 21 },
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
  },

  // Metadata for the transaction
  meta: {

    // The transaction receipt (received from the Adapter)
    receipt: {
      contractAddress: null,
      transactionIndex: 0,
      gasUsed: { _bn: '1f29f3' },
      logsBloom: '0x04000080000001000000000000000000000000000000220000000000000000000000000000008000000020030000000000000000000000080000040000000000000000000000000000000000001100020000000000080000000200000000000000000000000001000000000000000000000000000000000001000000000000024000000000000000088000000000000000000000000000000000000000000000000000000000000010000100000000000000000000000000000000000840000000040000000000000000000000000000000000000000000000020000000000000000000000000000000000000000008000000000008000000000000000000000',
      blockHash: '0x6e6eaac9f367c646278f313a48e02fba59c2e1ca9ccf9d96281e3ebd9614b0a2',
      transactionHash: '0x7c1f5b4481fc17f44cb3a42ce09d4fe05202719e411df8c6e7af455a79bbcca4',
      logs: [{
        transactionIndex: 0,
        blockNumber: 101,
        transactionHash: '0x7c1f5b4481fc17f44cb3a42ce09d4fe05202719e411df8c6e7af455a79bbcca4',
        address: '0xE972E2c54c8e9f1e3b95f703279D176562786132',
        topics: ['0xce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94', '0x00000000000000000000000076d508fa65654654ffdb334a3023353587112e09'],
        data: '0x00',
        logIndex: 0,
        blockHash: '0x6e6eaac9f367c646278f313a48e02fba59c2e1ca9ccf9d96281e3ebd9614b0a2',
        transactionLogIndex: 0,
      }, {
        transactionIndex: 0,
        blockNumber: 101,
        transactionHash: '0x7c1f5b4481fc17f44cb3a42ce09d4fe05202719e411df8c6e7af455a79bbcca4',
        address: '0x674C1995B9388c932815B235bA6dd1D347f2791c',
        topics: ['0xce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94', '0x00000000000000000000000076d508fa65654654ffdb334a3023353587112e09'],
        data: '0x00',
        logIndex: 1,
        blockHash: '0x6e6eaac9f367c646278f313a48e02fba59c2e1ca9ccf9d96281e3ebd9614b0a2',
        transactionLogIndex: 1,
      }, {
        transactionIndex: 0,
        blockNumber: 101,
        transactionHash: '0x7c1f5b4481fc17f44cb3a42ce09d4fe05202719e411df8c6e7af455a79bbcca4',
        address: '0xE972E2c54c8e9f1e3b95f703279D176562786132',
        topics: ['0x1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada4', '0x000000000000000000000000674c1995b9388c932815b235ba6dd1d347f2791c'],
        data: '0x00',
        logIndex: 2,
        blockHash: '0x6e6eaac9f367c646278f313a48e02fba59c2e1ca9ccf9d96281e3ebd9614b0a2',
        transactionLogIndex: 2,
      }, {
        transactionIndex: 0,
        blockNumber: 101,
        transactionHash: '0x7c1f5b4481fc17f44cb3a42ce09d4fe05202719e411df8c6e7af455a79bbcca4',
        address: '0x674C1995B9388c932815B235bA6dd1D347f2791c',
        topics: ['0xce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94', '0x000000000000000000000000b77d57f4959eafa0339424b83fcfaf9c15407461'],
        data: '0x00',
        logIndex: 3,
        blockHash: '0x6e6eaac9f367c646278f313a48e02fba59c2e1ca9ccf9d96281e3ebd9614b0a2',
        transactionLogIndex: 3,
      }, {
        transactionIndex: 0,
        blockNumber: 101,
        transactionHash: '0x7c1f5b4481fc17f44cb3a42ce09d4fe05202719e411df8c6e7af455a79bbcca4',
        address: '0x76D508Fa65654654Ffdb334a3023353587112e09',
        topics: ['0x94404e91997b5e56f90e1aa854c5d6014a015f9e957ede17caaf8627fad9252e', '0x0000000000000000000000000000000000000000000000000000000000000002'],
        data: '0x00',
        logIndex: 4,
        blockHash: '0x6e6eaac9f367c646278f313a48e02fba59c2e1ca9ccf9d96281e3ebd9614b0a2',
        transactionLogIndex: 4,
      }],
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
      data: '0x272da381436f6f6c6f6e792d313532363939393835333536340000000000000000000000000000000000000000000000aea18c570f252f6c4361b5f4cd9a630a220cad74',
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
      data: '0x272da381436f6f6c6f6e792d313532363939393835373333320000000000000000000000000000000000000000000000aea18c570f252f6c4361b5f4cd9a630a220cad74',
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
