# Interface: TxCreatorConfig\<C, M, E, MD\>

## Type Parameters

• **C**

• **M**

• **E**

• **MD**

## Properties

### args

> **args**: `unknown`[] \| () => `Promise`\<`unknown`[]\>

***

### config

> **config**: `ContractConfig`

***

### contract

> **contract**: `C`

***

### eventData()?

> `optional` **eventData**: (`receipt`) => `Promise`\<`E`\>

#### Parameters

##### receipt

[`ContractReceipt`](ContractReceipt.md)

#### Returns

`Promise`\<`E`\>

***

### metadataType?

> `optional` **metadataType**: `MD`

***

### method

> **method**: `M`

***

### txConfig?

> `optional` **txConfig**: [`TxConfig`](TxConfig.md)\<`MD`\>
