# Class: TxCreator<C, M, E, MD\>

An umbrella API for all kinds of transactions

The `TxCreator` allows for a simple API to cover all the different cases of transactions within the Colony Network. This is the base class of the TxCreator that only supports the `tx()` action and no metatransactions.

## Create a standard transaction ("force" in dApp)

- [tx](TxCreator.md#tx): force a Colony transaction, knowing you have the permissions to do so

Learn more about these functions in their individual documentation

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`BaseContract`](../interfaces/BaseContract.md) |
| `M` | extends keyof `C`[``"functions"``] |
| `E` | extends [`EventData`](../interfaces/EventData.md) |
| `MD` | extends [`MetadataType`](../enums/MetadataType.md) |

## Hierarchy

- **`TxCreator`**

  ↳ [`MetaTxCreator`](MetaTxCreator.md)

## Constructors

### constructor

• **new TxCreator**<`C`, `M`, `E`, `MD`\>(`«destructured»`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`BaseContract`](../interfaces/BaseContract.md) |
| `M` | extends `string` \| `number` \| `symbol` |
| `E` | extends [`EventData`](../interfaces/EventData.md) |
| `MD` | extends [`MetadataType`](../enums/MetadataType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `args` | `unknown`[] \| () => `Promise`<`unknown`[]\> |
| › `config` | `ContractConfig` |
| › `contract` | `C` |
| › `eventData?` | (`receipt`: [`ContractReceipt`](../interfaces/ContractReceipt.md)) => `Promise`<`E`\> |
| › `metadataType?` | `MD` |
| › `method` | `M` |
| › `txConfig?` | [`TxConfig`](../interfaces/TxConfig.md)<`MD`\> |

## Methods

### tx

▸ **tx**(): [`ColonyTransaction`](../interfaces/ColonyTransaction.md)<[`ContractTransaction`](../interfaces/ContractTransaction.md), `E`, [`ContractReceipt`](../interfaces/ContractReceipt.md), `MD`\>

Create a standard transaction ("force" in dApp)

See also [ColonyTransaction](../interfaces/ColonyTransaction.md) or https://docs.colony.io/colonysdk/guides/transactions for more information

**`Remarks`**

The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).

#### Returns

[`ColonyTransaction`](../interfaces/ColonyTransaction.md)<[`ContractTransaction`](../interfaces/ContractTransaction.md), `E`, [`ContractReceipt`](../interfaces/ContractReceipt.md), `MD`\>

A transaction that can be `send`, `mined` or `encode`d.
