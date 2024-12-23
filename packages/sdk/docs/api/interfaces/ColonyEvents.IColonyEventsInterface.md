# Interface: IColonyEventsInterface

[ColonyEvents](../modules/ColonyEvents.md).IColonyEventsInterface

## Hierarchy

- `Interface`

  ↳ **`IColonyEventsInterface`**

## Properties

### \_abiCoder

• `Readonly` **\_abiCoder**: `AbiCoder`

#### Inherited from

utils.Interface.\_abiCoder

___

### \_isInterface

• `Readonly` **\_isInterface**: `boolean`

#### Inherited from

utils.Interface.\_isInterface

___

### deploy

• `Readonly` **deploy**: `ConstructorFragment`

#### Inherited from

utils.Interface.deploy

___

### errors

• `Readonly` **errors**: `Object`

#### Index signature

▪ [name: `string`]: `ErrorFragment`

#### Inherited from

utils.Interface.errors

___

### events

• **events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Annotation(address,bytes32,string)` | `EventFragment` |
| `ArbitraryReputationUpdate(address,address,uint256,int256)` | `EventFragment` |
| `ArbitraryTransaction(address,address,bytes,bool)` | `EventFragment` |
| `ArbitraryTransaction(address,bytes,bool)` | `EventFragment` |
| `ColonyAdministrationRoleSet(address,bool)` | `EventFragment` |
| `ColonyArchitectureRoleSet(address,bool)` | `EventFragment` |
| `ColonyBootstrapped(address,address[],int256[])` | `EventFragment` |
| `ColonyBootstrapped(address[],int256[])` | `EventFragment` |
| `ColonyFundingRoleSet(address,bool)` | `EventFragment` |
| `ColonyFundsClaimed(address,address,uint256,uint256)` | `EventFragment` |
| `ColonyFundsClaimed(address,uint256,uint256)` | `EventFragment` |
| `ColonyFundsMovedBetweenFundingPots(address,uint256,uint256,uint256,address)` | `EventFragment` |
| `ColonyFundsMovedBetweenFundingPots(uint256,uint256,uint256,address)` | `EventFragment` |
| `ColonyInitialised(address,address)` | `EventFragment` |
| `ColonyInitialised(address,address,address)` | `EventFragment` |
| `ColonyMetadata(address,string)` | `EventFragment` |
| `ColonyMetadataDelta(address,string)` | `EventFragment` |
| `ColonyRewardInverseSet(address,uint256)` | `EventFragment` |
| `ColonyRewardInverseSet(uint256)` | `EventFragment` |
| `ColonyRoleSet(address,address,uint256,uint8,bool)` | `EventFragment` |
| `ColonyRoleSet(address,uint256,uint8,bool)` | `EventFragment` |
| `ColonyRootRoleSet(address,bool)` | `EventFragment` |
| `ColonyUpgraded(address,uint256,uint256)` | `EventFragment` |
| `ColonyUpgraded(uint256,uint256)` | `EventFragment` |
| `DomainAdded(address,uint256)` | `EventFragment` |
| `DomainAdded(uint256)` | `EventFragment` |
| `DomainDeprecated(address,uint256,bool)` | `EventFragment` |
| `DomainMetadata(address,uint256,string)` | `EventFragment` |
| `ExpenditureAdded(address,uint256)` | `EventFragment` |
| `ExpenditureAdded(uint256)` | `EventFragment` |
| `ExpenditureCancelled(address,uint256)` | `EventFragment` |
| `ExpenditureCancelled(uint256)` | `EventFragment` |
| `ExpenditureClaimDelaySet(address,uint256,uint256,uint256)` | `EventFragment` |
| `ExpenditureFinalized(address,uint256)` | `EventFragment` |
| `ExpenditureFinalized(uint256)` | `EventFragment` |
| `ExpenditureGlobalClaimDelaySet(address,uint256)` | `EventFragment` |
| `ExpenditureLocked(address,uint256)` | `EventFragment` |
| `ExpenditureMetadataSet(address,uint256,string)` | `EventFragment` |
| `ExpenditurePayoutModifierSet(address,uint256,uint256,int256)` | `EventFragment` |
| `ExpenditurePayoutSet(address,uint256,uint256,address,uint256)` | `EventFragment` |
| `ExpenditurePayoutSet(uint256,uint256,address,uint256)` | `EventFragment` |
| `ExpenditureRecipientSet(address,uint256,uint256,address)` | `EventFragment` |
| `ExpenditureRecipientSet(uint256,uint256,address)` | `EventFragment` |
| `ExpenditureSkillSet(address,uint256,uint256,uint256)` | `EventFragment` |
| `ExpenditureSkillSet(uint256,uint256,uint256)` | `EventFragment` |
| `ExpenditureStateChanged(address,uint256,uint256,bool[],bytes32[],bytes32)` | `EventFragment` |
| `ExpenditureTransferred(address,uint256,address)` | `EventFragment` |
| `ExpenditureTransferred(uint256,address)` | `EventFragment` |
| `FundingPotAdded(uint256)` | `EventFragment` |
| `LocalSkillAdded(address,uint256)` | `EventFragment` |
| `LocalSkillDeprecated(address,uint256,bool)` | `EventFragment` |
| `MetaTransactionExecuted(address,address,bytes)` | `EventFragment` |
| `PaymentAdded(address,uint256)` | `EventFragment` |
| `PaymentAdded(uint256)` | `EventFragment` |
| `PaymentFinalized(address,uint256)` | `EventFragment` |
| `PaymentPayoutSet(address,uint256,address,uint256)` | `EventFragment` |
| `PaymentRecipientSet(address,uint256,address)` | `EventFragment` |
| `PaymentSkillSet(address,uint256,uint256)` | `EventFragment` |
| `PayoutClaimed(address,uint256,address,uint256)` | `EventFragment` |
| `PayoutClaimed(address,uint256,uint256,address,uint256)` | `EventFragment` |
| `PayoutClaimed(uint256,address,uint256)` | `EventFragment` |
| `RecoveryModeEntered(address)` | `EventFragment` |
| `RecoveryModeExitApproved(address)` | `EventFragment` |
| `RecoveryModeExited(address)` | `EventFragment` |
| `RecoveryRoleSet(address,bool)` | `EventFragment` |
| `RecoveryStorageSlotSet(address,uint256,bytes32,bytes32)` | `EventFragment` |
| `RewardPayoutClaimed(uint256,address,uint256,uint256)` | `EventFragment` |
| `RewardPayoutCycleEnded(address,uint256)` | `EventFragment` |
| `RewardPayoutCycleEnded(uint256)` | `EventFragment` |
| `RewardPayoutCycleStarted(address,uint256)` | `EventFragment` |
| `RewardPayoutCycleStarted(uint256)` | `EventFragment` |
| `TaskAdded(address,uint256)` | `EventFragment` |
| `TaskAdded(uint256)` | `EventFragment` |
| `TaskBriefSet(uint256,bytes32)` | `EventFragment` |
| `TaskCanceled(uint256)` | `EventFragment` |
| `TaskChangedViaSignatures(address[])` | `EventFragment` |
| `TaskCompleted(address,uint256)` | `EventFragment` |
| `TaskCompleted(uint256)` | `EventFragment` |
| `TaskDeliverableSubmitted(address,uint256,bytes32)` | `EventFragment` |
| `TaskDeliverableSubmitted(uint256,bytes32)` | `EventFragment` |
| `TaskDomainSet(uint256,uint256)` | `EventFragment` |
| `TaskDueDateSet(uint256,uint256)` | `EventFragment` |
| `TaskFinalized(address,uint256)` | `EventFragment` |
| `TaskFinalized(uint256)` | `EventFragment` |
| `TaskPayoutSet(uint256,uint8,address,uint256)` | `EventFragment` |
| `TaskRoleUserSet(uint256,uint8,address)` | `EventFragment` |
| `TaskSkillSet(uint256,uint256)` | `EventFragment` |
| `TaskWorkRatingRevealed(address,uint256,uint8,uint8)` | `EventFragment` |
| `TaskWorkRatingRevealed(uint256,uint8,uint8)` | `EventFragment` |
| `TokenUnlocked()` | `EventFragment` |
| `TokenUnlocked(address)` | `EventFragment` |
| `TokensBurned(address,address,uint256)` | `EventFragment` |
| `TokensMinted(address,address,uint256)` | `EventFragment` |

#### Overrides

utils.Interface.events

___

### fragments

• `Readonly` **fragments**: readonly `Fragment`[]

#### Inherited from

utils.Interface.fragments

___

### functions

• **functions**: `Object`

#### Overrides

utils.Interface.functions

___

### structs

• `Readonly` **structs**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

utils.Interface.structs

## Methods

### \_decodeParams

▸ **_decodeParams**(`params`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | readonly `ParamType`[] |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Inherited from

utils.Interface.\_decodeParams

___

### \_encodeParams

▸ **_encodeParams**(`params`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | readonly `ParamType`[] |
| `values` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

utils.Interface.\_encodeParams

___

### decodeErrorResult

▸ **decodeErrorResult**(`fragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| `ErrorFragment` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Inherited from

utils.Interface.decodeErrorResult

___

### decodeEventLog

▸ **decodeEventLog**(`eventFragment`, `data`, `topics?`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| `EventFragment` |
| `data` | `BytesLike` |
| `topics?` | readonly `string`[] |

#### Returns

`Result`

#### Inherited from

utils.Interface.decodeEventLog

___

### decodeFunctionData

▸ **decodeFunctionData**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| `FunctionFragment` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Inherited from

utils.Interface.decodeFunctionData

___

### decodeFunctionResult

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| `FunctionFragment` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Inherited from

utils.Interface.decodeFunctionResult

___

### encodeDeploy

▸ **encodeDeploy**(`values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

utils.Interface.encodeDeploy

___

### encodeErrorResult

▸ **encodeErrorResult**(`fragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| `ErrorFragment` |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

utils.Interface.encodeErrorResult

___

### encodeEventLog

▸ **encodeEventLog**(`eventFragment`, `values`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| `EventFragment` |
| `values` | readonly `any`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `topics` | `string`[] |

#### Inherited from

utils.Interface.encodeEventLog

___

### encodeFilterTopics

▸ **encodeFilterTopics**(`eventFragment`, `values`): (`string` \| `string`[])[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| `EventFragment` |
| `values` | readonly `any`[] |

#### Returns

(`string` \| `string`[])[]

#### Inherited from

utils.Interface.encodeFilterTopics

___

### encodeFunctionData

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| `FunctionFragment` |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

utils.Interface.encodeFunctionData

___

### encodeFunctionResult

▸ **encodeFunctionResult**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| `FunctionFragment` |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

utils.Interface.encodeFunctionResult

___

### format

▸ **format**(`format?`): `string` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`string` \| `string`[]

#### Inherited from

utils.Interface.format

___

### getError

▸ **getError**(`nameOrSignatureOrSighash`): `ErrorFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrSighash` | `string` |

#### Returns

`ErrorFragment`

#### Inherited from

utils.Interface.getError

___

### getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyInitialised(address,address)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyInitialised(address,address,address)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyBootstrapped(address[],int256[])"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyBootstrapped(address,address[],int256[])"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyUpgraded(uint256,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyUpgraded(address,uint256,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyRoleSet(address,uint256,uint8,bool)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyRoleSet(address,address,uint256,uint8,bool)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyFundsMovedBetweenFundingPots(uint256,uint256,uint256,address)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyFundsMovedBetweenFundingPots(address,uint256,uint256,uint256,address)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyFundsClaimed(address,uint256,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyFundsClaimed(address,address,uint256,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"RewardPayoutCycleStarted(uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"RewardPayoutCycleStarted(address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"RewardPayoutCycleEnded(uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"RewardPayoutCycleEnded(address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"RewardPayoutClaimed"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"RewardPayoutClaimed(uint256,address,uint256,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyRewardInverseSet(uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyRewardInverseSet(address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PaymentAdded(uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PaymentAdded(address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskAdded(uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskAdded(address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskBriefSet"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskBriefSet(uint256,bytes32)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskDueDateSet"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskDueDateSet(uint256,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskDomainSet"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskDomainSet(uint256,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskSkillSet"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskSkillSet(uint256,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskRoleUserSet"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskRoleUserSet(uint256,uint8,address)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskPayoutSet"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskPayoutSet(uint256,uint8,address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskDeliverableSubmitted(uint256,bytes32)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskDeliverableSubmitted(address,uint256,bytes32)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskCompleted(uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskCompleted(address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskWorkRatingRevealed(uint256,uint8,uint8)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskWorkRatingRevealed(address,uint256,uint8,uint8)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskFinalized(uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskFinalized(address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PayoutClaimed(uint256,address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PayoutClaimed(address,uint256,address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PayoutClaimed(address,uint256,uint256,address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskCanceled"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskCanceled(uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"DomainAdded(uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"DomainAdded(address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"FundingPotAdded"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"FundingPotAdded(uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"RecoveryRoleSet"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"RecoveryRoleSet(address,bool)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureAdded(uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureAdded(address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureTransferred(uint256,address)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureTransferred(address,uint256,address)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureCancelled(uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureCancelled(address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureFinalized(uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureFinalized(address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureRecipientSet(uint256,uint256,address)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureRecipientSet(address,uint256,uint256,address)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureSkillSet(uint256,uint256,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureSkillSet(address,uint256,uint256,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditurePayoutSet(uint256,uint256,address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditurePayoutSet(address,uint256,uint256,address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Annotation"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Annotation(address,bytes32,string)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyMetadata"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyMetadata(address,string)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"DomainMetadata"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"DomainMetadata(address,uint256,string)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PaymentFinalized"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PaymentFinalized(address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PaymentPayoutSet"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PaymentPayoutSet(address,uint256,address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PaymentRecipientSet"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PaymentRecipientSet(address,uint256,address)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PaymentSkillSet"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"PaymentSkillSet(address,uint256,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"RecoveryModeEntered"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"RecoveryModeEntered(address)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"RecoveryModeExitApproved"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"RecoveryModeExitApproved(address)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"RecoveryModeExited"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"RecoveryModeExited(address)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"RecoveryStorageSlotSet"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"RecoveryStorageSlotSet(address,uint256,bytes32,bytes32)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskChangedViaSignatures"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TaskChangedViaSignatures(address[])"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TokenUnlocked()"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TokenUnlocked(address)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TokensBurned"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TokensBurned(address,address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TokensMinted"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TokensMinted(address,address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ArbitraryReputationUpdate"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ArbitraryReputationUpdate(address,address,uint256,int256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureClaimDelaySet"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureClaimDelaySet(address,uint256,uint256,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureGlobalClaimDelaySet"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureGlobalClaimDelaySet(address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureLocked"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureLocked(address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureMetadataSet"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureMetadataSet(address,uint256,string)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditurePayoutModifierSet"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditurePayoutModifierSet(address,uint256,uint256,int256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyMetadataDelta"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyMetadataDelta(address,string)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"DomainDeprecated"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"DomainDeprecated(address,uint256,bool)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"LocalSkillAdded"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"LocalSkillAdded(address,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"LocalSkillDeprecated"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"LocalSkillDeprecated(address,uint256,bool)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"MetaTransactionExecuted"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"MetaTransactionExecuted(address,address,bytes)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyFundingRoleSet"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyFundingRoleSet(address,bool)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyAdministrationRoleSet"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyAdministrationRoleSet(address,bool)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyArchitectureRoleSet"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyArchitectureRoleSet(address,bool)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyRootRoleSet"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ColonyRootRoleSet(address,bool)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureStateChanged"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ExpenditureStateChanged(address,uint256,uint256,bool[],bytes32[],bytes32)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ArbitraryTransaction(address,bytes,bool)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ArbitraryTransaction(address,address,bytes,bool)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

___

### getEventTopic

▸ **getEventTopic**(`eventFragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| `EventFragment` |

#### Returns

`string`

#### Inherited from

utils.Interface.getEventTopic

___

### getFunction

▸ **getFunction**(`nameOrSignatureOrSighash`): `FunctionFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrSighash` | `string` |

#### Returns

`FunctionFragment`

#### Inherited from

utils.Interface.getFunction

___

### getSighash

▸ **getSighash**(`fragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| `FunctionFragment` \| `ErrorFragment` |

#### Returns

`string`

#### Inherited from

utils.Interface.getSighash

___

### parseError

▸ **parseError**(`data`): `ErrorDescription`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `BytesLike` |

#### Returns

`ErrorDescription`

#### Inherited from

utils.Interface.parseError

___

### parseLog

▸ **parseLog**(`log`): `LogDescription`

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | `Object` |
| `log.data` | `string` |
| `log.topics` | `string`[] |

#### Returns

`LogDescription`

#### Inherited from

utils.Interface.parseLog

___

### parseTransaction

▸ **parseTransaction**(`tx`): `TransactionDescription`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Object` |
| `tx.data` | `string` |
| `tx.value?` | `BigNumberish` |

#### Returns

`TransactionDescription`

#### Inherited from

utils.Interface.parseTransaction
