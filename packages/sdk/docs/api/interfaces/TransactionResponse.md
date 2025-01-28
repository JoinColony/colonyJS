# Interface: TransactionResponse

## Extends

- `Transaction`

## Extended by

- [`ContractTransaction`](ContractTransaction.md)

## Properties

### accessList?

> `optional` **accessList**: `AccessList`

#### Inherited from

`Transaction.accessList`

***

### blockHash?

> `optional` **blockHash**: `string`

***

### blockNumber?

> `optional` **blockNumber**: `number`

***

### chainId

> **chainId**: `number`

#### Inherited from

`Transaction.chainId`

***

### confirmations

> **confirmations**: `number`

***

### data

> **data**: `string`

#### Inherited from

`Transaction.data`

***

### from

> **from**: `string`

#### Overrides

`Transaction.from`

***

### gasLimit

> **gasLimit**: `BigNumber`

#### Inherited from

`Transaction.gasLimit`

***

### gasPrice?

> `optional` **gasPrice**: `BigNumber`

#### Inherited from

`Transaction.gasPrice`

***

### hash

> **hash**: `string`

#### Overrides

`Transaction.hash`

***

### maxFeePerGas?

> `optional` **maxFeePerGas**: `BigNumber`

#### Inherited from

`Transaction.maxFeePerGas`

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas**: `BigNumber`

#### Inherited from

`Transaction.maxPriorityFeePerGas`

***

### nonce

> **nonce**: `number`

#### Inherited from

`Transaction.nonce`

***

### r?

> `optional` **r**: `string`

#### Inherited from

`Transaction.r`

***

### raw?

> `optional` **raw**: `string`

***

### s?

> `optional` **s**: `string`

#### Inherited from

`Transaction.s`

***

### timestamp?

> `optional` **timestamp**: `number`

***

### to?

> `optional` **to**: `string`

#### Inherited from

`Transaction.to`

***

### type?

> `optional` **type**: `null` \| `number`

#### Inherited from

`Transaction.type`

***

### v?

> `optional` **v**: `number`

#### Inherited from

`Transaction.v`

***

### value

> **value**: `BigNumber`

#### Inherited from

`Transaction.value`

***

### wait()

> **wait**: (`confirmations`?) => `Promise`\<`TransactionReceipt`\>

#### Parameters

##### confirmations?

`number`

#### Returns

`Promise`\<`TransactionReceipt`\>
