# Class: MetaTxCreator<C, M, E, MD\>

An umbrella API for all kinds of transactions

The `MetaTxCreator` allows for a simple API to cover all the different cases of transactions within the Colony Network. The `MetaTxCreator` supports sending a standard transaction ([tx](TxCreator.md#tx)) as well as metatransactions ([metaTx](MetaTxCreator.md#metatx)).

## Create a standard transaction ("force" in dApp)

- [tx](TxCreator.md#tx): force a Colony transaction, knowing you have the permissions to do so
- [metaTx](MetaTxCreator.md#metatx): same as `tx()`, but send as a gasless metatransaction

Learn more about these functions in their individual documentation

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`MetaTxBaseContract`](../interfaces/MetaTxBaseContract.md) |
| `M` | extends keyof `C`[``"functions"``] |
| `E` | extends [`EventData`](../interfaces/EventData.md) |
| `MD` | extends [`MetadataType`](../enums/MetadataType.md) |

## Hierarchy

- [`TxCreator`](TxCreator.md)<`C`, `M`, `E`, `MD`\>

  ↳ **`MetaTxCreator`**

  ↳↳ [`ColonyTxCreator`](ColonyTxCreator.md)

## Constructors

### constructor

• **new MetaTxCreator**<`C`, `M`, `E`, `MD`\>(`«destructured»`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`MetaTxBaseContract`](../interfaces/MetaTxBaseContract.md) |
| `M` | extends `string` \| `number` \| `symbol` |
| `E` | extends [`EventData`](../interfaces/EventData.md) |
| `MD` | extends [`MetadataType`](../enums/MetadataType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `args` | `unknown`[] \| () => `Promise`<`unknown`[]\> |
| › `colonyNetwork` | [`ColonyNetwork`](ColonyNetwork.md) |
| › `contract` | `C` |
| › `eventData?` | (`receipt`: [`ContractReceipt`](../interfaces/ContractReceipt.md)) => `Promise`<`E`\> |
| › `metadataType?` | `MD` |
| › `method` | `M` |
| › `txConfig?` | [`TxConfig`](../interfaces/TxConfig.md)<`MD`\> |

#### Inherited from

[TxCreator](TxCreator.md).[constructor](TxCreator.md#constructor)

## Methods

### metaTx

▸ **metaTx**(): [`ColonyMetaTransaction`](../interfaces/ColonyMetaTransaction.md)<[`TransactionResponse`](../interfaces/TransactionResponse.md), `E`, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md), `MD`\>

Create a gasless MetaTransaction ("force" in dApp)

After creation, you can then `send` the transaction or wait for it to be `mined`.
See also [tx](TxCreator.md#tx) and https://docs.colony.io/colonysdk/guides/transactions for more information

**`Remarks`**

The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).

#### Returns

[`ColonyMetaTransaction`](../interfaces/ColonyMetaTransaction.md)<[`TransactionResponse`](../interfaces/TransactionResponse.md), `E`, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md), `MD`\>

A transaction that can be `send` or `mined`.

___

### tx

▸ **tx**(): [`ColonyTransaction`](../interfaces/ColonyTransaction.md)<[`ContractTransaction`](../interfaces/ContractTransaction.md), `E`, [`ContractReceipt`](../interfaces/ContractReceipt.md), `MD`\>

Create a standard transaction ("force" in dApp)

See also [ColonyTransaction](../interfaces/ColonyTransaction.md) or https://docs.colony.io/colonysdk/guides/transactions for more information

**`Remarks`**

The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).

#### Returns

[`ColonyTransaction`](../interfaces/ColonyTransaction.md)<[`ContractTransaction`](../interfaces/ContractTransaction.md), `E`, [`ContractReceipt`](../interfaces/ContractReceipt.md), `MD`\>

A transaction that can be `send`, `mined` or `encode`d.

#### Inherited from

[TxCreator](TxCreator.md).[tx](TxCreator.md#tx)
