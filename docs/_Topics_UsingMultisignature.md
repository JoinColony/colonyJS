---
title: Using Multisignature
section: Topics
order: 9
---

Important changes to a task within a colony must be approved by multiple "task roles". Most of the methods that modify a task require multiple signatures before the modification will take affect and the transaction will be executed. We achieve this process with something known as "multisgnature".

==TOC==

## Multisignature Example

An example of a task method that uses multisignature is `setTaskBrief`. In order for this transaction to be executed, we need signatures from both the `MANAGER` and the `WORKER` assigned to the task.

### Start Operation

First, we need to start the multisignature operation:

```js

const operation = await colonyClient.setTaskBrief.startOperation({
  taskId,
  specificationHash,
});

```

This method will return an instance of the multisgnature operation. We can determine which wallets need to sign the operation by checking the `requiredSignees` and `missingSignees` properties:

```js

console.log(operation.requiredSignees);
// -> ['0x123...', '0x987...'];
//    ^ Both of these addresses need to sign the operation...

console.log(operation.missingSignees);
// -> ['0x123...', '0x987...'];
//    ^ Both of these addresses have not signed the operation...

```

### Sign Operation

Assuming that we are the first missing signature and the `MANAGER` of the task, we can simply sign the operation using the `sign` method, which is included in the operation instance:

```js

await operation.sign();

```

We can now check the operation again for the `requiredSignees` and `missingSignees`:

```js

console.log(operation.requiredSignees);
// -> ['0x123...', '0x987...'];
//    ^ Both of these addresses need to sign the operation...

console.log(operation.missingSignees);
// -> ['0x987...'];
//    ^ Only this address has not signed the operation...

```

### Export Operation

In order for another wallet to sign it, we'll need to store the operation and then restore it in another instance of your application or service.

First, we'll need to format the multisgnature operation as JSON:

```js

const operationJSON = operation.toJSON();

```

Then, we'll need to store the operation somewhere so that we can restore it later.

### Restore Operation

We can retrieve the stored JSON and restore the operation with `restoreOperation`:

```js

const operation = await colonyClient.setTaskBrief.restoreOperation(operationJSON);

```

### Sign Operation (Second Signature)

Assuming that we are now using the wallet for the second missing signature, the `WORKER` of the task, we can sign the operation:

```js

await operation.sign();

```

We can now check the operation again for the `requiredSignees` and `missingSignees`:

```js

console.log(operation.requiredSignees);
// -> ['0x123...', '0x987...'];
//    ^ Both of these addresses need to sign the operation...

console.log(operation.missingSignees);
// -> [];
//    ^ The two required addresses have signed the operation...

```

### Send Transaction

Now we just need to send the transaction:

```js

await operation.send();

```

## Contract State Changes

It's important to understand that the contract data used to create signed messages is related to the contract state at a particular point in time. While the required signatures are being collected, there are at least two things can happen that might cause the operation to fail:

* The addresses assigned to the manager/worker/evaluator roles have changed.
* Another operation is successfully sent on the given contract, increasing the nonce value.

If one of the assigned roles for a task has changed, the new wallet will need to sign it and we no longer need the signature from the wallet that was previously assigned. If the nonce value changes, the operation will need to be signed again by both wallets.

These values can be refreshed to help prevent sending a transaction that will fail.

```js

await operation.refresh();

```

The `refresh` method will update the nonce value if another operation was successfully sent before this operation was able to collect of all the required signatures, which can be used to prevent errors.
