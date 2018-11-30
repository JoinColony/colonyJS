---
title: MultisigOperation
section: API
order: 6
---

The `MultisigOperation` class is a part of the `ContractClient` to handle Multisignature transactions. They are usually created by a `MultisigSender` class and are associated with the sender which created them.

For more info see the [`Multisignature` docs](/colonyjs/docs-multisignature-transactions/). Please also check out the [`ContractMethodMultisigSender` API docs](/colonyjs/api-contractmethodmultisigsender/) to see how to create this.

==TOC==

## Properties

### `requiredSignees`

`[Address]` - Array of all addresses which are needed to sign off this transaction.

### `missingSignees`

`[Address]` - Array of all addresses which are still missing to sign off this transaction.

## Instance methods

### `sign()`

Sign the message hash with the current wallet or provider and add the signature. This method is asyncrhonous.

**Returns**

The `MultisigOperation` instance.

### `refresh()`

Refresh the nonce value, required signees, and message hash. This method is asyncrhonous.

If there was no nonce value, a new one will be set; otherwise, if the nonce value changed, the it will be updated, and the `_signers` will be reset. This is done because when the nonce values changes, the signatures that were collected will not work, and the operation will need to be re-signed by all parties.

**Returns**

The `MultisigOperation` instance.

### `addSignersFromJSON(json)`

Given the state of an operation as JSON, validate the parsed state and add in the signers.

**Arguments**

**`json`** `string` - A serialized `MultisigOperation`.

**Returns**

The `MultisigOperation` instance with the added signature(s).

### `toJSON()`

Serializes this operation.

**Returns**

`string` - The serialized `MultisigOperation`

### `send(inputValues, options)`

Given named input values it sends off the MultisigOperation to the contract. Has the same API and return values as [`ContractMethodSender.send()`](/colonyjs/api-contractmethodsender/#sendinputvalues-options).

**Arguments**

**`inputValues`** `{ [string]: any }` - Any key value pair of contract input parameters

**`options`** `SendOptions` - Custom options to use for this transaction. See [`ContractMethodSender.send()`](/colonyjs/api-contractmethodsender/#sendinputvalues-options)

**Returns**

`Promise<ContractResponse>` - See [`ContractMethodSender.send()`](/colonyjs/api-contractmethodsender/#sendinputvalues-options)
