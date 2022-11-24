# Class: TxCreator<C, M, E, MD\>

An umbrella API for all kinds of transactions

The `TxCreator` allows for a simple API to cover all the different cases of transactions within Colony. Once a `TxCreator` is created using a method on the base contracts (e.g. [Colony](Colony.md) or extensions like [VotingReputation](VotingReputation.md)), there are four options available:

## Force a transaction

- [TxCreator.force](TxCreator.md#force): force a Colony transaction, knowing you have the permissions to do so
- [TxCreator.forceMeta](TxCreator.md#forcemeta): same as `force()`, but send as a gasless metatransaction

## Create a motion to trigger an action once it passes

- [TxCreator.motion](TxCreator.md#motion): create a motion (needs the motion's domain as a parameter)
- [TxCreator.forceMeta](TxCreator.md#forcemeta): same as `motion()`, but sends a gasless metatransaction

Learn more about these functions in their individual documentation

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `BaseContract` |
| `M` | extends keyof `C`[``"functions"``] |
| `E` | extends `EventData` |
| `MD` | extends [`MetadataType`](../enums/MetadataType.md) |

## Constructors

### constructor

• **new TxCreator**<`C`, `M`, `E`, `MD`\>(`__namedParameters`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `BaseContract` |
| `M` | extends `string` \| `number` \| `symbol` |
| `E` | extends `EventData` |
| `MD` | extends [`MetadataType`](../enums/MetadataType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.args` | `unknown`[] \| () => `Promise`<`unknown`[]\> |
| `__namedParameters.colony` | [`Colony`](Colony.md) |
| `__namedParameters.contract` | `C` |
| `__namedParameters.eventData?` | (`receipt`: `ContractReceipt`) => `Promise`<`E`\> |
| `__namedParameters.metadataType?` | `MD` |
| `__namedParameters.method` | `M` |
| `__namedParameters.permissionConfig?` | `PermissionConfig` |

## Methods

### force

▸ **force**(): `Promise`<[`E`, `ContractReceipt`, () => `Promise`<`ReturnType`<{ `None`: () => `void` ; `annotation`: (`res`: `string`) => `undefined` \| `string` = getAnnotationMsgFromResponse; `colony`: (`res`: `string`) => `undefined` \| `ColonyMetadata` = getColonyMetadataFromResponse; `decision`: (`res`: `string`) => `undefined` \| `DecisionMetadata` = getDecisionDetailsFromResponse; `domain`: (`res`: `string`) => `undefined` \| `DomainMetadata` = getDomainMetadataFromResponse; `misc`: (`res`: `string`) => `undefined` \| `MiscMetadata` = getMiscDataFromResponse }[`MD`]\>\>] \| [`E`, `ContractReceipt`]\>

Forces an action

**`Remarks`**

The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).

#### Returns

`Promise`<[`E`, `ContractReceipt`, () => `Promise`<`ReturnType`<{ `None`: () => `void` ; `annotation`: (`res`: `string`) => `undefined` \| `string` = getAnnotationMsgFromResponse; `colony`: (`res`: `string`) => `undefined` \| `ColonyMetadata` = getColonyMetadataFromResponse; `decision`: (`res`: `string`) => `undefined` \| `DecisionMetadata` = getDecisionDetailsFromResponse; `domain`: (`res`: `string`) => `undefined` \| `DomainMetadata` = getDomainMetadataFromResponse; `misc`: (`res`: `string`) => `undefined` \| `MiscMetadata` = getMiscDataFromResponse }[`MD`]\>\>] \| [`E`, `ContractReceipt`]\>

A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)

___

### forceMeta

▸ **forceMeta**(): `Promise`<[`E`, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md), () => `Promise`<`ReturnType`<{ `None`: () => `void` ; `annotation`: (`res`: `string`) => `undefined` \| `string` = getAnnotationMsgFromResponse; `colony`: (`res`: `string`) => `undefined` \| `ColonyMetadata` = getColonyMetadataFromResponse; `decision`: (`res`: `string`) => `undefined` \| `DecisionMetadata` = getDecisionDetailsFromResponse; `domain`: (`res`: `string`) => `undefined` \| `DomainMetadata` = getDomainMetadataFromResponse; `misc`: (`res`: `string`) => `undefined` \| `MiscMetadata` = getMiscDataFromResponse }[`MD`]\>\>] \| [`E`, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md)]\>

Forces an action using a gasless metatransaction

**`Remarks`**

The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).

#### Returns

`Promise`<[`E`, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md), () => `Promise`<`ReturnType`<{ `None`: () => `void` ; `annotation`: (`res`: `string`) => `undefined` \| `string` = getAnnotationMsgFromResponse; `colony`: (`res`: `string`) => `undefined` \| `ColonyMetadata` = getColonyMetadataFromResponse; `decision`: (`res`: `string`) => `undefined` \| `DecisionMetadata` = getDecisionDetailsFromResponse; `domain`: (`res`: `string`) => `undefined` \| `DomainMetadata` = getDomainMetadataFromResponse; `misc`: (`res`: `string`) => `undefined` \| `MiscMetadata` = getMiscDataFromResponse }[`MD`]\>\>] \| [`E`, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md)]\>

A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)

___

### motion

▸ **motion**(`motionDomain?`): `Promise`<[{ `creator?`: `string` ; `domainId?`: `BigNumber` ; `motionId?`: `BigNumber`  }, `ContractReceipt`]\>

Creates a motion for an action

You can specify a team (domain) this motion should be created in. It will be created in the Root team by default.

**`Remarks`**

This will only work if the [VotingReputation](VotingReputation.md) extension is installed for the Colony that's being acted on

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `motionDomain` | `BigNumberish` | `Id.RootDomain` |

#### Returns

`Promise`<[{ `creator?`: `string` ; `domainId?`: `BigNumber` ; `motionId?`: `BigNumber`  }, `ContractReceipt`]\>

A tupel of motion event data and contract receipt

___

### motionMeta

▸ **motionMeta**(`motionDomain?`): `Promise`<[{ `creator?`: `string` ; `domainId?`: `BigNumber` ; `motionId?`: `BigNumber`  }, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md)]\>

Creates a motion for an action

You can specify a team (domain) this motion should be created in. It will be created in the Root team by default.

**`Remarks`**

This will only work if the [VotingReputation](VotingReputation.md) extension is installed for the Colony that's being acted on

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `motionDomain` | `BigNumberish` | `Id.RootDomain` |

#### Returns

`Promise`<[{ `creator?`: `string` ; `domainId?`: `BigNumber` ; `motionId?`: `BigNumber`  }, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md)]\>

A tupel of motion event data and contract receipt
