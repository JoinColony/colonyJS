# Interface: TransactionResponse

## Hierarchy

- `Transaction`

  ↳ **`TransactionResponse`**

  ↳↳ [`ContractTransaction`](ContractTransaction.md)

## Properties

### accessList

• `Optional` **accessList**: `AccessList`

#### Inherited from

Transaction.accessList

___

### blockHash

• `Optional` **blockHash**: `string`

___

### blockNumber

• `Optional` **blockNumber**: `number`

___

### chainId

• **chainId**: `number`

#### Inherited from

Transaction.chainId

___

### confirmations

• **confirmations**: `number`

___

### data

• **data**: `string`

#### Inherited from

Transaction.data

___

### from

• **from**: `string`

#### Overrides

Transaction.from

___

### gasLimit

• **gasLimit**: `BigNumber`

#### Inherited from

Transaction.gasLimit

___

### gasPrice

• `Optional` **gasPrice**: `BigNumber`

#### Inherited from

Transaction.gasPrice

___

### hash

• **hash**: `string`

#### Overrides

Transaction.hash

___

### maxFeePerGas

• `Optional` **maxFeePerGas**: `BigNumber`

#### Inherited from

Transaction.maxFeePerGas

___

### maxPriorityFeePerGas

• `Optional` **maxPriorityFeePerGas**: `BigNumber`

#### Inherited from

Transaction.maxPriorityFeePerGas

___

### nonce

• **nonce**: `number`

#### Inherited from

Transaction.nonce

___

### r

• `Optional` **r**: `string`

#### Inherited from

Transaction.r

___

### raw

• `Optional` **raw**: `string`

___

### s

• `Optional` **s**: `string`

#### Inherited from

Transaction.s

___

### timestamp

• `Optional` **timestamp**: `number`

___

### to

• `Optional` **to**: `string`

#### Inherited from

Transaction.to

___

### type

• `Optional` **type**: ``null`` \| `number`

#### Inherited from

Transaction.type

___

### v

• `Optional` **v**: `number`

#### Inherited from

Transaction.v

___

### value

• **value**: `BigNumber`

#### Inherited from

Transaction.value

___

### wait

• **wait**: (`confirmations?`: `number`) => `Promise`<`TransactionReceipt`\>

#### Type declaration

▸ (`confirmations?`): `Promise`<`TransactionReceipt`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `confirmations?` | `number` |

##### Returns

`Promise`<`TransactionReceipt`\>
