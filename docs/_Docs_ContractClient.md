---
title: Contract Client
section: Docs
order: 4
---

The Contract Client is a superclass for all client implementations that access a Colony smart contract. It contains abstractions for callers and senders as well as certain tools for listening to events, providing information about the network state, and interacting with the reputation mining system.

The contract Client is split into two sub-classes, each of which interacts with a corresponding interface on-chain.

The on-chain interfaces are `IColonyNetwork.sol` and `IColony.sol`. For more information about these, please refer to the [Colony Network Documentation](../../colonynetwork/api-the-colony-network/)


## ColonyNetworkClient
The `ColonyNetworkClient` class is the standard interface for functions and events that interact described in `IColonyNetwork.sol`.

These interactions are generally concerned with the colony network as a whole, rather than at the colony level. This includes operations like getting a count of all colonies on the network, querying for information about skills, and interactions with the CLNY token and reputation system.

[ColonyNetworkClient API documentation](../_API_ColonyNetworkClient)

## ColonyClient
The `ColonyClient` class is a standard interface for interactions with the on-chain functions and events described in `IColony.sol`

These interactions are generally concerned with functions and events internal to a colony, such as creating a task, assigning a work rating, or moving funds between pots.

[ColonyClient API documentation](../_API_ColonyClient.md)

## Callers

**Callers** are functions that passively interact with objects on the
blockchain and do not need to produce transactions. Usually these will
expect certain parameters and will return an object or objects. They
always accept an object of named parameters (e.g. `taskId`) and always
return an object with named values (e.g. `dueDate`).

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

## Senders

**Senders** are functions that will eventually generate a transaction on the blockchain. A sender can either be used to call `send()`, which will parse a transaction and execute it on the underlying contract, or `estimate()`, which will simply return an estimate of the transaction gas cost.

```javascript
import ColonyClient from '@colony/colony-js-client';

// some clear example needed for *both* a transaction to be passed and for an estimate()

```


## Multisignature implementation (Tasks)

Some contract functions rely on what's known as a [Multisignature](https://en.wikipedia.org/wiki/Multisignature)
in order to process a transaction. The implementation for task functions in `colonyNetwork`
is based on [`simple-multisig`](https://github.com/christianlundkvist/simple-multisig).

In order to use these functions, we need to create contract data to call our target
contract function, gather parameters needed for executing the change on the contract,
find which addresses we need signatures from, get each party to sign a transaction
in a specific format, and finally, collate these signatures and send them off in
one single transaction.

Wow, that's convoluted!

Thankfully, the Contract Client makes this much simpler for us by providing the
`MultisigSender` and `MultisigOperation`, so we can turn this:

![Sad Vitalik Parrot](/img/sad_vitalik_parrot.gif)

into this:

![Cool Vitalik Parrot](/img/cool_vitalik_parrot.gif)

### MultisigSender

A `MultisigSender` is an extension of the `Sender`; it provides methods with which it's
possible to start and restore a `MultisigOperation`.

The basic idea is that we'll start an operation based on a particular function, with
certain parameters (e.g. setting the brief of task 1 to 'the new specification hash'),
then get that operation signed and sent off.

### Starting a MultisigOperation

An example of a `MultisigSender` on the Colony Client is `setTaskBrief`:

```js
const op = await colonyClient.setTaskBrief.startOperation({
  taskId: 1,
  specificationHash: 'the new specification hash',
});
// -> MultisigOperation
```

Let's break that down:

// const op = await colonyClient.setTaskBrief
//                               ^ The MultisigSender
//
// .startOperation(
// ^ Creates an MultisigOperation
//
// { taskId: 1, specificationHash: 'the new specification hash' }
// ^ The parameters we're calling the Sender with
//
// );
```

### Restoring a MultisigOperation

Sometimes it's necessary to restore a MultisigOperation that's already in progress
(for example, it has been signed by the Manager already, but not the Worker).

Firstly, we'll need some JSON from the `MultisigOperation` we want to restore:

```js
const json = op.toJSON();
// -> "{ "payload": {...}, "signers": {...} }"
```

And then we can restore it with the appropriate `MultisigSender`

```js
const op = colonyClient.setTaskBrief.restoreOperation(json);
// -> MultisigOperation
```

Now the other signature can be added, and we can probably send it!

```js
await op.sign();

console.log(op.missingSignees);
// -> []

const { successful } = await op.send();
// -> true
```
