[**API**](../README.md)

***

# Class: MetaTxCreator\<C, M, E, MD\>

An umbrella API for all kinds of transactions

The `MetaTxCreator` allows for a simple API to cover all the different cases of transactions within the Colony Network. The `MetaTxCreator` supports sending a standard transaction ([MetaTxCreator.tx](MetaTxCreator.md#tx)) as well as metatransactions ([MetaTxCreator.metaTx](MetaTxCreator.md#metatx)).

## Create a standard transaction ("force" in dApp)

- [MetaTxCreator.tx](MetaTxCreator.md#tx): force a Colony transaction, knowing you have the permissions to do so
- [MetaTxCreator.metaTx](MetaTxCreator.md#metatx): same as `tx()`, but send as a gasless metatransaction

Learn more about these functions in their individual documentation

## Extends

- [`TxCreator`](TxCreator.md)\<`C`, `M`, `E`, `MD`\>

## Extended by

- [`ColonyTxCreator`](ColonyTxCreator.md)

## Type Parameters

• **C** *extends* [`MetaTxBaseContract`](../interfaces/MetaTxBaseContract.md)

• **M** *extends* keyof `C`\[`"functions"`\]

• **E** *extends* [`EventData`](../interfaces/EventData.md)

• **MD** *extends* [`MetadataType`](../enumerations/MetadataType.md) = [`DEFAULT`](../enumerations/MetadataType.md#default)

## Constructors

### new MetaTxCreator()

> **new MetaTxCreator**\<`C`, `M`, `E`, `MD`\>(`__namedParameters`): [`MetaTxCreator`](MetaTxCreator.md)\<`C`, `M`, `E`, `MD`\>

#### Parameters

##### \_\_namedParameters

###### args

`unknown`[] \| () => `Promise`\<`unknown`[]\>

###### config

`ContractConfig`

###### contract

`C`

###### eventData

(`receipt`) => `Promise`\<`E`\>

###### metadataType

`MD`

###### method

`M`

###### txConfig

[`TxConfig`](../interfaces/TxConfig.md)\<`MD`\>

#### Returns

[`MetaTxCreator`](MetaTxCreator.md)\<`C`, `M`, `E`, `MD`\>

#### Inherited from

[`TxCreator`](TxCreator.md).[`constructor`](TxCreator.md#constructors)

## Methods

### metaTx()

> **metaTx**(): [`ColonyMetaTransaction`](../interfaces/ColonyMetaTransaction.md)\<[`TransactionResponse`](../interfaces/TransactionResponse.md), `E`, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md), `MD`\>

Create a gasless MetaTransaction ("force" in dApp)

After creation, you can then `send` the transaction or wait for it to be `mined`.
See also [TxCreator.tx](TxCreator.md#tx) and https://docs.colony.io/colonysdk/guides/transactions for more information

#### Returns

[`ColonyMetaTransaction`](../interfaces/ColonyMetaTransaction.md)\<[`TransactionResponse`](../interfaces/TransactionResponse.md), `E`, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md), `MD`\>

A transaction that can be `send` or `mined`.

#### Remarks

The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).

***

### tx()

> **tx**(): [`ColonyTransaction`](../interfaces/ColonyTransaction.md)\<[`ContractTransaction`](../interfaces/ContractTransaction.md), `E`, [`ContractReceipt`](../interfaces/ContractReceipt.md), `MD`\>

Create a standard transaction ("force" in dApp)

See also [ColonyTransaction](../interfaces/ColonyTransaction.md) or https://docs.colony.io/colonysdk/guides/transactions for more information

#### Returns

[`ColonyTransaction`](../interfaces/ColonyTransaction.md)\<[`ContractTransaction`](../interfaces/ContractTransaction.md), `E`, [`ContractReceipt`](../interfaces/ContractReceipt.md), `MD`\>

A transaction that can be `send`, `mined` or `encode`d.

#### Remarks

The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).

#### Inherited from

[`TxCreator`](TxCreator.md).[`tx`](TxCreator.md#tx)
