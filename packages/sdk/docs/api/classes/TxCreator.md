# Class: TxCreator<C, M, E, MD\>

An umbrella API for all kinds of transactions

The `TxCreator` allows for a simple API to cover all the different cases of transactions within the Colony Network. This is the base class of the TxCreator that only supports the `force()` action and no metatransactions.

## Create a standard transaction ("force" in dApp)

- [TxCreator.tx](TxCreator.md#tx): force a Colony transaction, knowing you have the permissions to do so

Learn more about these functions in their individual documentation

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`BaseContract`](../interfaces/BaseContract.md) |
| `M` | extends keyof `C`[``"functions"``] |
| `E` | extends `EventData` |
| `MD` | extends [`MetadataType`](../enums/MetadataType.md) |

## Hierarchy

- **`TxCreator`**

  ↳ [`MetaTxCreator`](MetaTxCreator.md)

## Constructors

### constructor

• **new TxCreator**<`C`, `M`, `E`, `MD`\>(`__namedParameters`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`BaseContract`](../interfaces/BaseContract.md) |
| `M` | extends `string` \| `number` \| `symbol` |
| `E` | extends `EventData` |
| `MD` | extends [`MetadataType`](../enums/MetadataType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.args` | `unknown`[] \| () => `Promise`<`unknown`[]\> |
| `__namedParameters.colonyNetwork` | [`ColonyNetwork`](ColonyNetwork.md) |
| `__namedParameters.contract` | `C` |
| `__namedParameters.eventData?` | (`receipt`: `ContractReceipt`) => `Promise`<`E`\> |
| `__namedParameters.metadataType?` | `MD` |
| `__namedParameters.method` | `M` |
| `__namedParameters.txConfig?` | [`TxConfig`](../interfaces/TxConfig.md)<`MD`\> |

## Methods

### tx

▸ **tx**(): `Promise`<[`E`, `ContractReceipt`, () => `Promise`<`MetadataTypeMap`[`MD`]\>] \| [`E`, `ContractReceipt`]\>

Create a standard transaction ("force" in dApp)

**`Remarks`**

The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).

#### Returns

`Promise`<[`E`, `ContractReceipt`, () => `Promise`<`MetadataTypeMap`[`MD`]\>] \| [`E`, `ContractReceipt`]\>

A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)
