---
title: ContractMethodMultisigSender
section: API
order: 6
---

The `ContractMethodMultisigSender` (short `MutlisigSender`) class is a part of the `ContractClient` to create Multisignature transactions. They are usually created for a `ContractClient` class on its initialization (e.g. the [`ColonyClient`](/colonyjs/api-colonyclient)) and are associated with a method on the smart contract which requires more than one signature to be executed.

For more info see the [`Multisignature` docs](/colonyjs/docs-multisignature-transactions/). Please also check out the [`MultisigOperation` API docs](/colonyjs/api-multisigoperation/) for the signature handling API.

==TOC==

## Instance methods

### `startOperation(inputValues)`

Given named input values, it will generate the [`MultisigOperation` ](/colonyjs/api-multisigoperation/) needed to gather all signatures to send off this transation.

**Arguments**

**`inputValues`** `{ [string]: any }` - Any key value pair of contract input parameters

**Returns**

`Promise<MultisigOperation>` - Promise that resolves to a `MultisigOperation` instance.

### `restoreOperation(json)`

Given a serialized operation object as a valid json string, it restores the given operation.

**Arguments**

**`json`** `string` - A serialized operation created via a MultisigOperation instance's .toJSON() method

**Returns**

`Promise<MultisigOperation>` - Promise that resolves to a `MultisigOperation` instance.
