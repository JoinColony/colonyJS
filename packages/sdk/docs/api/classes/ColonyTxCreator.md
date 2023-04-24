# Class: ColonyTxCreator<C, M, E, MD\>

An umbrella API for all kinds of transactions within colonies

The `ColonyTxCreator` allows for a simple API to cover all the different cases of transactions within a colony. Once a `ColonyTxCreator` is created using a method on the base contracts (e.g. [Colony](Colony.md) or extensions like [VotingReputation](VotingReputation.md)), there are four options available:

## Create a standard transaction ("force" in dApp)

- [ColonyTxCreator.tx](ColonyTxCreator.md#tx): force a Colony transaction, knowing you have the permissions to do so
- [ColonyTxCreator.metaTx](ColonyTxCreator.md#metatx): same as `tx()`, but send as a gasless metatransaction

## Create a motion to trigger an action once it passes

- [ColonyTxCreator.motion](ColonyTxCreator.md#motion): create a motion (needs the motion's domain as a parameter)
- [ColonyTxCreator.metaMotion](ColonyTxCreator.md#metamotion): same as `motion()`, but sends a gasless metatransaction

Learn more about these functions in their individual documentation

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`MetaTxBaseContract`](../interfaces/MetaTxBaseContract.md) |
| `M` | extends keyof `C`[``"functions"``] |
| `E` | extends `EventData` |
| `MD` | extends [`MetadataType`](../enums/MetadataType.md) |

## Hierarchy

- [`MetaTxCreator`](MetaTxCreator.md)<`C`, `M`, `E`, `MD`\>

  ↳ **`ColonyTxCreator`**

## Constructors

### constructor

• **new ColonyTxCreator**<`C`, `M`, `E`, `MD`\>(`config`)

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
| `config` | `MetaMotionsConfig`<`C`, `M`, `E`, `MD`\> |

#### Overrides

[MetaTxCreator](MetaTxCreator.md).[constructor](MetaTxCreator.md#constructor)

## Methods

### metaMotion

▸ **metaMotion**(`motionDomain?`): `Promise`<[{ `creator?`: `string` ; `domainId?`: `BigNumber` ; `motionId?`: `BigNumber`  }, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md)]\>

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

___

### metaTx

▸ **metaTx**(): `Promise`<[`E`, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md), () => `Promise`<`ReturnType`<{ `None`: () => `void` ; `annotation`: (`res`: `string`) => `string` = getAnnotationMsgFromResponse; `colony`: (`res`: `string`) => [`ColonyMetadata`](../interfaces/ColonyMetadata.md) = getColonyMetadataFromResponse; `decision`: (`res`: `string`) => [`DecisionMetadata`](../interfaces/DecisionMetadata.md) = getDecisionDetailsFromResponse; `domain`: (`res`: `string`) => [`DomainMetadata`](../interfaces/DomainMetadata.md) = getDomainMetadataFromResponse; `misc`: (`res`: `string`) => `MiscMetadata` = getMiscDataFromResponse }[`MD`]\>\>] \| [`E`, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md)]\>

Forces an action using a gasless metatransaction

**`Remarks`**

The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).

#### Returns

`Promise`<[`E`, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md), () => `Promise`<`ReturnType`<{ `None`: () => `void` ; `annotation`: (`res`: `string`) => `string` = getAnnotationMsgFromResponse; `colony`: (`res`: `string`) => [`ColonyMetadata`](../interfaces/ColonyMetadata.md) = getColonyMetadataFromResponse; `decision`: (`res`: `string`) => [`DecisionMetadata`](../interfaces/DecisionMetadata.md) = getDecisionDetailsFromResponse; `domain`: (`res`: `string`) => [`DomainMetadata`](../interfaces/DomainMetadata.md) = getDomainMetadataFromResponse; `misc`: (`res`: `string`) => `MiscMetadata` = getMiscDataFromResponse }[`MD`]\>\>] \| [`E`, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md)]\>

A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)

#### Inherited from

[MetaTxCreator](MetaTxCreator.md).[metaTx](MetaTxCreator.md#metatx)

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

### tx

▸ **tx**(): `Promise`<[`E`, `ContractReceipt`, () => `Promise`<`ReturnType`<{ `None`: () => `void` ; `annotation`: (`res`: `string`) => `string` = getAnnotationMsgFromResponse; `colony`: (`res`: `string`) => [`ColonyMetadata`](../interfaces/ColonyMetadata.md) = getColonyMetadataFromResponse; `decision`: (`res`: `string`) => [`DecisionMetadata`](../interfaces/DecisionMetadata.md) = getDecisionDetailsFromResponse; `domain`: (`res`: `string`) => [`DomainMetadata`](../interfaces/DomainMetadata.md) = getDomainMetadataFromResponse; `misc`: (`res`: `string`) => `MiscMetadata` = getMiscDataFromResponse }[`MD`]\>\>] \| [`E`, `ContractReceipt`]\>

Create a standard transaction ("force" in dApp)

**`Remarks`**

The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).

#### Returns

`Promise`<[`E`, `ContractReceipt`, () => `Promise`<`ReturnType`<{ `None`: () => `void` ; `annotation`: (`res`: `string`) => `string` = getAnnotationMsgFromResponse; `colony`: (`res`: `string`) => [`ColonyMetadata`](../interfaces/ColonyMetadata.md) = getColonyMetadataFromResponse; `decision`: (`res`: `string`) => [`DecisionMetadata`](../interfaces/DecisionMetadata.md) = getDecisionDetailsFromResponse; `domain`: (`res`: `string`) => [`DomainMetadata`](../interfaces/DomainMetadata.md) = getDomainMetadataFromResponse; `misc`: (`res`: `string`) => `MiscMetadata` = getMiscDataFromResponse }[`MD`]\>\>] \| [`E`, `ContractReceipt`]\>

A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)

#### Inherited from

[MetaTxCreator](MetaTxCreator.md).[tx](MetaTxCreator.md#tx)
