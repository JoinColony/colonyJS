[**API**](../README.md)

***

# Class: TxCreator\<C, M, E, MD\>

An umbrella API for all kinds of transactions

The `TxCreator` allows for a simple API to cover all the different cases of transactions within the Colony Network. This is the base class of the TxCreator that only supports the `tx()` action and no metatransactions.

## Create a standard transaction ("force" in dApp)

- [TxCreator.tx](TxCreator.md#tx): force a Colony transaction, knowing you have the permissions to do so

Learn more about these functions in their individual documentation

## Extended by

- [`MetaTxCreator`](MetaTxCreator.md)

## Type Parameters

• **C** *extends* [`BaseContract`](../interfaces/BaseContract.md)

• **M** *extends* keyof `C`\[`"functions"`\]

• **E** *extends* [`EventData`](../interfaces/EventData.md)

• **MD** *extends* [`MetadataType`](../enumerations/MetadataType.md)

## Constructors

### new TxCreator()

> **new TxCreator**\<`C`, `M`, `E`, `MD`\>(`__namedParameters`): [`TxCreator`](TxCreator.md)\<`C`, `M`, `E`, `MD`\>

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

[`TxCreator`](TxCreator.md)\<`C`, `M`, `E`, `MD`\>

## Methods

### tx()

> **tx**(): [`ColonyTransaction`](../interfaces/ColonyTransaction.md)\<[`ContractTransaction`](../interfaces/ContractTransaction.md), `E`, [`ContractReceipt`](../interfaces/ContractReceipt.md), `MD`\>

Create a standard transaction ("force" in dApp)

See also [ColonyTransaction](../interfaces/ColonyTransaction.md) or https://docs.colony.io/colonysdk/guides/transactions for more information

#### Returns

[`ColonyTransaction`](../interfaces/ColonyTransaction.md)\<[`ContractTransaction`](../interfaces/ContractTransaction.md), `E`, [`ContractReceipt`](../interfaces/ContractReceipt.md), `MD`\>

A transaction that can be `send`, `mined` or `encode`d.

#### Remarks

The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).
