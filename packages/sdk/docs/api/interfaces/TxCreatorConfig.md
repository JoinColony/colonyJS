# Interface: TxCreatorConfig<C, M, E, MD\>

## Type parameters

| Name |
| :------ |
| `C` |
| `M` |
| `E` |
| `MD` |

## Properties

### args

• **args**: `unknown`[] \| () => `Promise`<`unknown`[]\>

___

### colonyNetwork

• **colonyNetwork**: [`ColonyNetwork`](../classes/ColonyNetwork.md)

___

### contract

• **contract**: `C`

___

### eventData

• `Optional` **eventData**: (`receipt`: `ContractReceipt`) => `Promise`<`E`\>

#### Type declaration

▸ (`receipt`): `Promise`<`E`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `receipt` | `ContractReceipt` |

##### Returns

`Promise`<`E`\>

___

### metadataType

• `Optional` **metadataType**: `MD`

___

### method

• **method**: `M`

___

### txConfig

• `Optional` **txConfig**: [`TxConfig`](TxConfig.md)<`MD`\>
