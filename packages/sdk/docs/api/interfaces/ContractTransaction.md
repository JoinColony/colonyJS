# Interface: ContractTransaction

## Hierarchy

- [`TransactionResponse`](TransactionResponse.md)

  ↳ **`ContractTransaction`**

## Properties

### accessList

• `Optional` **accessList**: `AccessList`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[accessList](TransactionResponse.md#accesslist)

___

### blockHash

• `Optional` **blockHash**: `string`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[blockHash](TransactionResponse.md#blockhash)

___

### blockNumber

• `Optional` **blockNumber**: `number`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[blockNumber](TransactionResponse.md#blocknumber)

___

### chainId

• **chainId**: `number`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[chainId](TransactionResponse.md#chainid)

___

### confirmations

• **confirmations**: `number`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[confirmations](TransactionResponse.md#confirmations)

___

### data

• **data**: `string`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[data](TransactionResponse.md#data)

___

### from

• **from**: `string`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[from](TransactionResponse.md#from)

___

### gasLimit

• **gasLimit**: `BigNumber`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[gasLimit](TransactionResponse.md#gaslimit)

___

### gasPrice

• `Optional` **gasPrice**: `BigNumber`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[gasPrice](TransactionResponse.md#gasprice)

___

### hash

• **hash**: `string`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[hash](TransactionResponse.md#hash)

___

### maxFeePerGas

• `Optional` **maxFeePerGas**: `BigNumber`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[maxFeePerGas](TransactionResponse.md#maxfeepergas)

___

### maxPriorityFeePerGas

• `Optional` **maxPriorityFeePerGas**: `BigNumber`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[maxPriorityFeePerGas](TransactionResponse.md#maxpriorityfeepergas)

___

### nonce

• **nonce**: `number`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[nonce](TransactionResponse.md#nonce)

___

### r

• `Optional` **r**: `string`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[r](TransactionResponse.md#r)

___

### raw

• `Optional` **raw**: `string`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[raw](TransactionResponse.md#raw)

___

### s

• `Optional` **s**: `string`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[s](TransactionResponse.md#s)

___

### timestamp

• `Optional` **timestamp**: `number`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[timestamp](TransactionResponse.md#timestamp)

___

### to

• `Optional` **to**: `string`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[to](TransactionResponse.md#to)

___

### type

• `Optional` **type**: ``null`` \| `number`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[type](TransactionResponse.md#type)

___

### v

• `Optional` **v**: `number`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[v](TransactionResponse.md#v)

___

### value

• **value**: `BigNumber`

#### Inherited from

[TransactionResponse](TransactionResponse.md).[value](TransactionResponse.md#value)

## Methods

### wait

▸ **wait**(`confirmations?`): `Promise`<[`ContractReceipt`](ContractReceipt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `confirmations?` | `number` |

#### Returns

`Promise`<[`ContractReceipt`](ContractReceipt.md)\>

#### Overrides

TransactionResponse.wait
