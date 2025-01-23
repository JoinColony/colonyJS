[**API**](../README.md)

***

# Interface: ContractTransaction

## Extends

- [`TransactionResponse`](TransactionResponse.md)

## Properties

### accessList?

> `optional` **accessList**: `AccessList`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`accessList`](TransactionResponse.md#accesslist)

***

### blockHash?

> `optional` **blockHash**: `string`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`blockHash`](TransactionResponse.md#blockhash)

***

### blockNumber?

> `optional` **blockNumber**: `number`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`blockNumber`](TransactionResponse.md#blocknumber)

***

### chainId

> **chainId**: `number`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`chainId`](TransactionResponse.md#chainid)

***

### confirmations

> **confirmations**: `number`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`confirmations`](TransactionResponse.md#confirmations)

***

### data

> **data**: `string`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`data`](TransactionResponse.md#data)

***

### from

> **from**: `string`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`from`](TransactionResponse.md#from)

***

### gasLimit

> **gasLimit**: `BigNumber`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`gasLimit`](TransactionResponse.md#gaslimit)

***

### gasPrice?

> `optional` **gasPrice**: `BigNumber`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`gasPrice`](TransactionResponse.md#gasprice)

***

### hash

> **hash**: `string`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`hash`](TransactionResponse.md#hash)

***

### maxFeePerGas?

> `optional` **maxFeePerGas**: `BigNumber`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`maxFeePerGas`](TransactionResponse.md#maxfeepergas)

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas**: `BigNumber`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`maxPriorityFeePerGas`](TransactionResponse.md#maxpriorityfeepergas)

***

### nonce

> **nonce**: `number`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`nonce`](TransactionResponse.md#nonce)

***

### r?

> `optional` **r**: `string`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`r`](TransactionResponse.md#r)

***

### raw?

> `optional` **raw**: `string`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`raw`](TransactionResponse.md#raw)

***

### s?

> `optional` **s**: `string`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`s`](TransactionResponse.md#s)

***

### timestamp?

> `optional` **timestamp**: `number`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`timestamp`](TransactionResponse.md#timestamp)

***

### to?

> `optional` **to**: `string`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`to`](TransactionResponse.md#to)

***

### type?

> `optional` **type**: `null` \| `number`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`type`](TransactionResponse.md#type)

***

### v?

> `optional` **v**: `number`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`v`](TransactionResponse.md#v)

***

### value

> **value**: `BigNumber`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`value`](TransactionResponse.md#value)

## Methods

### wait()

> **wait**(`confirmations`?): `Promise`\<[`ContractReceipt`](ContractReceipt.md)\>

#### Parameters

##### confirmations?

`number`

#### Returns

`Promise`\<[`ContractReceipt`](ContractReceipt.md)\>

#### Overrides

`TransactionResponse.wait`
