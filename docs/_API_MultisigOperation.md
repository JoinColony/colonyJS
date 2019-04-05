---
title: MultisigOperation
section: API
order: 6
---

`MultisigOperation` is a special class associated with the [ContractClient](/colonyjs/api-contractclient) superclass. `MultisigOperation` is used to handle multisignature transactions. An instance of the `MultisigOperation` class can be created and restored using `MultisigSender` and each instance is associated with a single contract method.

For more information about creating and restoring an instance of `MultisigOperation` see [MultisigSender](/colonyjs/api-contractclient/#multisigsender).

## Table of Contents

==TOC==

## Properties

### `requiredSignees`

`[Address]` - Array of all addresses which are needed to sign off this transaction.

### `missingSignees`

`[Address]` - Array of all addresses which are still missing to sign off this transaction.

## Instance Methods

### `sign()`

Sign the message hash with the current wallet or provider and add the signature.

**Response**

`Promise<MultisigOperation>` - A promise that resolves to the updated `MultisigOperation` instance.

### `refresh()`

Refresh the nonce value, required signees, and message hash.

If there was no nonce value, a new nonce value will be set. If the nonce value changed, the nonce value will be updated and the signers will be reset. The signers are reset is because the signatures that were collected will no longer be valid once the nonce value has changed, therefore, the `MultisigOperation` will need to be signed again by all required signees.

**Response**

`Promise<MultisigOperation>` - A promise that resolves to the updated `MultisigOperation` instance.

### `addSignersFromJSON(input)`

Given the `MultisigOperation` serialized into JSON format, validate the parsed state and add in the signers.

**Input**

`string` - The `MultisigOperation` serialized into JSON format.

**Response**

`Promise<MultisigOperation>` - A promise that resolves to the updated `MultisigOperation` instance.

### `toJSON()`

Serialize the `MultisigOperation` into JSON format.

**Response**

`string` - The `MultisigOperation` serialized into JSON format.

### `send(input, options)`

This method is the same method used in the `ContractClient` superclass.

See [Sender](/colonyjs/api-contractclient/#sender) for more information about the input, options, and response.
