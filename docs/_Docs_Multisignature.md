---
title: Multisignature
section: Docs
order: 6
---

Some contract functions rely on what's known as a [Multisignature](https://en.wikipedia.org/wiki/Multisignature) in order to process a transaction. The implementation for some of the task-related functions in `colonyNetwork` is based on [`simple-multisig`](https://github.com/christianlundkvist/simple-multisig).

In order to use these functions, we need to create contract data to call our target contract function, gather parameters needed for executing the change on the contract, find which addresses we need signatures from, get each party to sign a transaction in a specific format, and finally, collate these signatures and send them off in one single transaction.

Wow, that's convoluted!

![Sad Vitalik](img/sad_vitalik.gif)

## Multisignature Support

Thankfully, the `ContractClient` makes this much simpler for us by providing the `MultisigSender` and `MultisigOperation`.

A `MultisigSender` is an extension of the `Sender`. It provides methods that makes it simple to start and restore a `MultisigOperation`.

The basic idea is that we'll start an operation for a particular function (for example, setting the task specification with `setTaskBrief`), then get that operation signed and sent off.

That's more like it!

![Cool Vitalik Parrot](img/cool_vitalik_parrot.gif)

## Example

An example of a `MultisigSender` on the Colony Client is `setTaskBrief`. We'll need signatures from the manager and worker roles in order to change the task specification.

### 1. Start Operation

```js

const operation = await colonyClient.setTaskBrief.startOperation({
  taskId,
  specificationHash,
});

```

Let's break that down:

```js

// const operation = await colonyClient
//
// .setTaskBrief
// ^ The MultisigSender
//
// .startOperation(
// ^ Creates a MultisigOperation
//
// { taskId: 1, specificationHash: 'the new specification hash' }
// ^ The parameters we're calling the Sender with
//
// );

```

### 2. Identify Signees

We can determine which wallets can sign the operation by checking the `requiredSignees` and `missingSignees` properties.

```js
console.log(operation.requiredSignees);
// -> ['0x123...', '0x987...'];
//    ^ Both of these addresses need to sign the operation...

console.log(operation.missingSignees);
// -> ['0x987...'];
//    ^ This address hasn't signed it yet!
```

### 3. Sign Operation

It's very simple to sign it:

```js

// This will sign the operation with the current wallet.
await operation.sign();

```

In order for the other wallet to sign it, we'll need to recreate the operation on another instance of your app.

You can skip the next step if you can simply change the current wallet on the same app instance.

### 4. Export Operation

First, we'll need to format the `MultisigOperation` as JSON:

```js

const operationJSON = operation.toJSON();
// -> "{ "nonce": 0, "payload": {...}, "signers": {...} }"

```

At this point, we'll need to store it somewhere. Where we store it is up to you.

### 5. Restore Operation

We can then retrieve the stored json and restore the operation with the `MultisigSender`:

```js

const operation = await colonyClient.setTaskBrief.restoreOperation(operationJSON);
// -> Our MultisigOperation with the same parameters and the first signature already in place

```

### 6. Sign Operation (Second Signature)

Now the other wallet needs to sign the operation and then we can send it!

```js

await operation.sign();

console.log(op.missingSignees);
// -> []
//    ^ We have all the signatures we need

```

### 7. Send Transaction

```js

// This works just like a regular Sender:
const { successful } = await operation.send();
// -> true

// We can also add transaction options as a parameter, e.g.:
// await operation.send({ gasLimit: 2500000 });

```

### 8. Confirm Changes

```js

const task = await colonyClient.getTask.call({ taskId });
// -> { id: 1, specificationHash: 'the new specification hash', ... }

```

## Contract State Changes

It's important to understand that the data that is used to create signed messages in these operations related to the contract state at a particular point in time.

While signatures are being collected, at least two things can happen that might cause the operation to fail:

* Another `MultisigOperation` is successfully sent on the contract, increasing the nonce value
* The wallets assigned to the manager/worker/evaluator roles for the task have changed

If the nonce value changes, the operation will need to be signed again by both wallets.

If one of the assigned roles for a task has changed, the new wallet will need to sign it and we no longer need the signature from the wallet that was previously assigned.

The `MultisigOperation` can refresh these values in order to help prevent sending a transaction that will fail.

```js

// Example: two operations with the same nonce:
console.log(firstOperation._nonce);
// -> 1
console.log(secondOperation._nonce);
// -> 1

// And no missing signees:
console.log(firstOperation.missingSignees);
// -> []
console.log(secondOperation.missingSignees);
// -> []

// We can send the first operation successfully:
await firstOperation.send();
// -> { successful: true }

// The second operation can be refreshed:
await secondOperation.refresh();

// The nonce should have been incremented:
console.log(secondOperation._nonce);
// -> 2

// And the signers should have been reset:
console.log(firstOperation.missingSignees);
// -> ['0x...', '0x...']

```

It's worth noting that starting a new operation or sending an existing operation will always trigger a refresh first, so this can reset the (now invalid) signers.

If desired, we can make the resetting of signers more explicit by attaching a callback:

```js

const op = await colonyClient.setTaskBrief.startOperation(
  {
    taskId: 1,
    specificationHash: 'the new specification hash',
  },
  {}, // The signers are empty in this case
  () => {
    console.log('The signers were reset!');
  },
);

```
