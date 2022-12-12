# Class: MetaTxCreator<C, M, E, MD\>

An umbrella API for all kinds of transactions

The `MetaTxCreator` allows for a simple API to cover all the different cases of transactions within the Colony Network. The `MetaTxCreator` supports sending a standard transaction ([MetaTxCreator.tx](MetaTxCreator.md#tx)) as well as metatransactions ([MetaTxCreator.metaTx](MetaTxCreator.md#metatx)).

## Create a standard transaction ("force" in dApp)

- [MetaTxCreator.tx](MetaTxCreator.md#tx): force a Colony transaction, knowing you have the permissions to do so
- [MetaTxCreator.metaTx](MetaTxCreator.md#metatx): same as `tx()`, but send as a gasless metatransaction

Learn more about these functions in their individual documentation

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`MetaTxBaseContract`](../interfaces/MetaTxBaseContract.md) |
| `M` | extends keyof `C`[``"functions"``] |
| `E` | extends `EventData` |
| `MD` | extends [`MetadataType`](../enums/MetadataType.md) |

## Hierarchy

- [`TxCreator`](TxCreator.md)<`C`, `M`, `E`, `MD`\>

  ↳ **`MetaTxCreator`**

  ↳↳ [`ColonyTxCreator`](ColonyTxCreator.md)

## Constructors

### constructor

• **new MetaTxCreator**<`C`, `M`, `E`, `MD`\>(`__namedParameters`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`MetaTxBaseContract`](../interfaces/MetaTxBaseContract.md) |
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

#### Inherited from

[TxCreator](TxCreator.md).[constructor](TxCreator.md#constructor)

## Methods

### metaTx

▸ **metaTx**(): `Promise`<[`E`, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md), () => `Promise`<`ReturnType`<{ `None`: () => `void` ; `annotation`: (`res`: `string`) => `string` = getAnnotationMsgFromResponse; `colony`: (`res`: `string`) => [`ColonyMetadata`](../interfaces/ColonyMetadata.md) = getColonyMetadataFromResponse; `decision`: (`res`: `string`) => `DecisionMetadata` = getDecisionDetailsFromResponse; `domain`: (`res`: `string`) => [`DomainMetadata`](../interfaces/DomainMetadata.md) = getDomainMetadataFromResponse; `misc`: (`res`: `string`) => `MiscMetadata` = getMiscDataFromResponse }[`MD`]\>\>] \| [`E`, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md)]\>

Forces an action using a gasless metatransaction

**`Remarks`**

The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).

#### Returns

`Promise`<[`E`, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md), () => `Promise`<`ReturnType`<{ `None`: () => `void` ; `annotation`: (`res`: `string`) => `string` = getAnnotationMsgFromResponse; `colony`: (`res`: `string`) => [`ColonyMetadata`](../interfaces/ColonyMetadata.md) = getColonyMetadataFromResponse; `decision`: (`res`: `string`) => `DecisionMetadata` = getDecisionDetailsFromResponse; `domain`: (`res`: `string`) => [`DomainMetadata`](../interfaces/DomainMetadata.md) = getDomainMetadataFromResponse; `misc`: (`res`: `string`) => `MiscMetadata` = getMiscDataFromResponse }[`MD`]\>\>] \| [`E`, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md)]\>

A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)

___

### tx

▸ **tx**(): `Promise`<[`E`, `ContractReceipt`, () => `Promise`<`ReturnType`<{ `None`: () => `void` ; `annotation`: (`res`: `string`) => `string` = getAnnotationMsgFromResponse; `colony`: (`res`: `string`) => [`ColonyMetadata`](../interfaces/ColonyMetadata.md) = getColonyMetadataFromResponse; `decision`: (`res`: `string`) => `DecisionMetadata` = getDecisionDetailsFromResponse; `domain`: (`res`: `string`) => [`DomainMetadata`](../interfaces/DomainMetadata.md) = getDomainMetadataFromResponse; `misc`: (`res`: `string`) => `MiscMetadata` = getMiscDataFromResponse }[`MD`]\>\>] \| [`E`, `ContractReceipt`]\>

Create a standard transaction ("force" in dApp)

**`Remarks`**

The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).

#### Returns

`Promise`<[`E`, `ContractReceipt`, () => `Promise`<`ReturnType`<{ `None`: () => `void` ; `annotation`: (`res`: `string`) => `string` = getAnnotationMsgFromResponse; `colony`: (`res`: `string`) => [`ColonyMetadata`](../interfaces/ColonyMetadata.md) = getColonyMetadataFromResponse; `decision`: (`res`: `string`) => `DecisionMetadata` = getDecisionDetailsFromResponse; `domain`: (`res`: `string`) => [`DomainMetadata`](../interfaces/DomainMetadata.md) = getDomainMetadataFromResponse; `misc`: (`res`: `string`) => `MiscMetadata` = getMiscDataFromResponse }[`MD`]\>\>] \| [`E`, `ContractReceipt`]\>

A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)

#### Inherited from

[TxCreator](TxCreator.md).[tx](TxCreator.md#tx)
