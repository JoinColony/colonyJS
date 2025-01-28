# Interface: StagedExpenditureEventsInterface

## Extends

- `Interface`

## Properties

### \_abiCoder

> `readonly` **\_abiCoder**: `AbiCoder`

#### Inherited from

`utils.Interface._abiCoder`

***

### \_isInterface

> `readonly` **\_isInterface**: `boolean`

#### Inherited from

`utils.Interface._isInterface`

***

### deploy

> `readonly` **deploy**: `ConstructorFragment`

#### Inherited from

`utils.Interface.deploy`

***

### errors

> `readonly` **errors**: `object`

#### Index Signature

\[`name`: `string`\]: `ErrorFragment`

#### Inherited from

`utils.Interface.errors`

***

### events

> **events**: `object`

#### Annotation(address,bytes32,string)

> **Annotation(address,bytes32,string)**: `EventFragment`

#### ArbitraryReputationUpdate(address,address,uint256,int256)

> **ArbitraryReputationUpdate(address,address,uint256,int256)**: `EventFragment`

#### ArbitraryTransaction(address,address,bytes,bool)

> **ArbitraryTransaction(address,address,bytes,bool)**: `EventFragment`

#### ArbitraryTransaction(address,bytes,bool)

> **ArbitraryTransaction(address,bytes,bool)**: `EventFragment`

#### ColonyBootstrapped(address,address\[\],int256\[\])

> **ColonyBootstrapped(address,address\[\],int256\[\])**: `EventFragment`

#### ColonyFundsClaimed(address,address,uint256,uint256)

> **ColonyFundsClaimed(address,address,uint256,uint256)**: `EventFragment`

#### ColonyFundsMovedBetweenFundingPots(address,uint256,uint256,uint256,address)

> **ColonyFundsMovedBetweenFundingPots(address,uint256,uint256,uint256,address)**: `EventFragment`

#### ColonyInitialised(address,address,address)

> **ColonyInitialised(address,address,address)**: `EventFragment`

#### ColonyMetadata(address,string)

> **ColonyMetadata(address,string)**: `EventFragment`

#### ColonyMetadataDelta(address,string)

> **ColonyMetadataDelta(address,string)**: `EventFragment`

#### ColonyRewardInverseSet(address,uint256)

> **ColonyRewardInverseSet(address,uint256)**: `EventFragment`

#### ColonyRoleSet(address,address,uint256,uint8,bool)

> **ColonyRoleSet(address,address,uint256,uint8,bool)**: `EventFragment`

#### ColonyUpgraded(address,uint256,uint256)

> **ColonyUpgraded(address,uint256,uint256)**: `EventFragment`

#### DomainAdded(address,uint256)

> **DomainAdded(address,uint256)**: `EventFragment`

#### DomainDeprecated(address,uint256,bool)

> **DomainDeprecated(address,uint256,bool)**: `EventFragment`

#### DomainMetadata(address,uint256,string)

> **DomainMetadata(address,uint256,string)**: `EventFragment`

#### ExpenditureAdded(address,uint256)

> **ExpenditureAdded(address,uint256)**: `EventFragment`

#### ExpenditureCancelled(address,uint256)

> **ExpenditureCancelled(address,uint256)**: `EventFragment`

#### ExpenditureClaimDelaySet(address,uint256,uint256,uint256)

> **ExpenditureClaimDelaySet(address,uint256,uint256,uint256)**: `EventFragment`

#### ExpenditureFinalized(address,uint256)

> **ExpenditureFinalized(address,uint256)**: `EventFragment`

#### ExpenditureGlobalClaimDelaySet(address,uint256)

> **ExpenditureGlobalClaimDelaySet(address,uint256)**: `EventFragment`

#### ExpenditureLocked(address,uint256)

> **ExpenditureLocked(address,uint256)**: `EventFragment`

#### ExpenditureMadeStaged(address,uint256,bool)

> **ExpenditureMadeStaged(address,uint256,bool)**: `EventFragment`

#### ExpenditureMadeStaged(uint256,bool)

> **ExpenditureMadeStaged(uint256,bool)**: `EventFragment`

#### ExpenditureMetadataSet(address,uint256,string)

> **ExpenditureMetadataSet(address,uint256,string)**: `EventFragment`

#### ExpenditurePayoutModifierSet(address,uint256,uint256,int256)

> **ExpenditurePayoutModifierSet(address,uint256,uint256,int256)**: `EventFragment`

#### ExpenditurePayoutSet(address,uint256,uint256,address,uint256)

> **ExpenditurePayoutSet(address,uint256,uint256,address,uint256)**: `EventFragment`

#### ExpenditureRecipientSet(address,uint256,uint256,address)

> **ExpenditureRecipientSet(address,uint256,uint256,address)**: `EventFragment`

#### ExpenditureSkillSet(address,uint256,uint256,uint256)

> **ExpenditureSkillSet(address,uint256,uint256,uint256)**: `EventFragment`

#### ExpenditureStateChanged(address,uint256,uint256,bool\[\],bytes32\[\],bytes32)

> **ExpenditureStateChanged(address,uint256,uint256,bool\[\],bytes32\[\],bytes32)**: `EventFragment`

#### ExpenditureTransferred(address,uint256,address)

> **ExpenditureTransferred(address,uint256,address)**: `EventFragment`

#### ExtensionInitialised()

> **ExtensionInitialised()**: `EventFragment`

#### FundingPotAdded(uint256)

> **FundingPotAdded(uint256)**: `EventFragment`

#### LocalSkillAdded(address,uint256)

> **LocalSkillAdded(address,uint256)**: `EventFragment`

#### LocalSkillDeprecated(address,uint256,bool)

> **LocalSkillDeprecated(address,uint256,bool)**: `EventFragment`

#### LogSetAuthority(address)

> **LogSetAuthority(address)**: `EventFragment`

#### LogSetOwner(address)

> **LogSetOwner(address)**: `EventFragment`

#### MetaTransactionExecuted(address,address,bytes)

> **MetaTransactionExecuted(address,address,bytes)**: `EventFragment`

#### PaymentAdded(address,uint256)

> **PaymentAdded(address,uint256)**: `EventFragment`

#### PaymentFinalized(address,uint256)

> **PaymentFinalized(address,uint256)**: `EventFragment`

#### PaymentPayoutSet(address,uint256,address,uint256)

> **PaymentPayoutSet(address,uint256,address,uint256)**: `EventFragment`

#### PaymentRecipientSet(address,uint256,address)

> **PaymentRecipientSet(address,uint256,address)**: `EventFragment`

#### PaymentSkillSet(address,uint256,uint256)

> **PaymentSkillSet(address,uint256,uint256)**: `EventFragment`

#### PayoutClaimed(address,uint256,address,uint256)

> **PayoutClaimed(address,uint256,address,uint256)**: `EventFragment`

#### PayoutClaimed(address,uint256,uint256,address,uint256)

> **PayoutClaimed(address,uint256,uint256,address,uint256)**: `EventFragment`

#### RewardPayoutClaimed(uint256,address,uint256,uint256)

> **RewardPayoutClaimed(uint256,address,uint256,uint256)**: `EventFragment`

#### RewardPayoutCycleEnded(address,uint256)

> **RewardPayoutCycleEnded(address,uint256)**: `EventFragment`

#### RewardPayoutCycleStarted(address,uint256)

> **RewardPayoutCycleStarted(address,uint256)**: `EventFragment`

#### StagedPaymentReleased(address,uint256,uint256)

> **StagedPaymentReleased(address,uint256,uint256)**: `EventFragment`

#### StagedPaymentReleased(uint256,uint256)

> **StagedPaymentReleased(uint256,uint256)**: `EventFragment`

#### TaskAdded(address,uint256)

> **TaskAdded(address,uint256)**: `EventFragment`

#### TaskBriefSet(uint256,bytes32)

> **TaskBriefSet(uint256,bytes32)**: `EventFragment`

#### TaskCanceled(uint256)

> **TaskCanceled(uint256)**: `EventFragment`

#### TaskChangedViaSignatures(address\[\])

> **TaskChangedViaSignatures(address\[\])**: `EventFragment`

#### TaskCompleted(address,uint256)

> **TaskCompleted(address,uint256)**: `EventFragment`

#### TaskDeliverableSubmitted(address,uint256,bytes32)

> **TaskDeliverableSubmitted(address,uint256,bytes32)**: `EventFragment`

#### TaskDueDateSet(uint256,uint256)

> **TaskDueDateSet(uint256,uint256)**: `EventFragment`

#### TaskFinalized(address,uint256)

> **TaskFinalized(address,uint256)**: `EventFragment`

#### TaskPayoutSet(uint256,uint8,address,uint256)

> **TaskPayoutSet(uint256,uint8,address,uint256)**: `EventFragment`

#### TaskRoleUserSet(uint256,uint8,address)

> **TaskRoleUserSet(uint256,uint8,address)**: `EventFragment`

#### TaskSkillSet(uint256,uint256)

> **TaskSkillSet(uint256,uint256)**: `EventFragment`

#### TaskWorkRatingRevealed(address,uint256,uint8,uint8)

> **TaskWorkRatingRevealed(address,uint256,uint8,uint8)**: `EventFragment`

#### TokensBurned(address,address,uint256)

> **TokensBurned(address,address,uint256)**: `EventFragment`

#### TokensMinted(address,address,uint256)

> **TokensMinted(address,address,uint256)**: `EventFragment`

#### TokenUnlocked(address)

> **TokenUnlocked(address)**: `EventFragment`

#### Overrides

`utils.Interface.events`

***

### fragments

> `readonly` **fragments**: readonly `Fragment`[]

#### Inherited from

`utils.Interface.fragments`

***

### functions

> **functions**: `object`

#### Overrides

`utils.Interface.functions`

***

### structs

> `readonly` **structs**: `object`

#### Index Signature

\[`name`: `string`\]: `any`

#### Inherited from

`utils.Interface.structs`

## Methods

### \_decodeParams()

> **\_decodeParams**(`params`, `data`): `Result`

#### Parameters

##### params

readonly `ParamType`[]

##### data

`BytesLike`

#### Returns

`Result`

#### Inherited from

`utils.Interface._decodeParams`

***

### \_encodeParams()

> **\_encodeParams**(`params`, `values`): `string`

#### Parameters

##### params

readonly `ParamType`[]

##### values

readonly `any`[]

#### Returns

`string`

#### Inherited from

`utils.Interface._encodeParams`

***

### decodeErrorResult()

> **decodeErrorResult**(`fragment`, `data`): `Result`

#### Parameters

##### fragment

`string` | `ErrorFragment`

##### data

`BytesLike`

#### Returns

`Result`

#### Inherited from

`utils.Interface.decodeErrorResult`

***

### decodeEventLog()

> **decodeEventLog**(`eventFragment`, `data`, `topics`?): `Result`

#### Parameters

##### eventFragment

`string` | `EventFragment`

##### data

`BytesLike`

##### topics?

readonly `string`[]

#### Returns

`Result`

#### Inherited from

`utils.Interface.decodeEventLog`

***

### decodeFunctionData()

> **decodeFunctionData**(`functionFragment`, `data`): `Result`

#### Parameters

##### functionFragment

`string` | `FunctionFragment`

##### data

`BytesLike`

#### Returns

`Result`

#### Inherited from

`utils.Interface.decodeFunctionData`

***

### decodeFunctionResult()

> **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

##### functionFragment

`string` | `FunctionFragment`

##### data

`BytesLike`

#### Returns

`Result`

#### Inherited from

`utils.Interface.decodeFunctionResult`

***

### encodeDeploy()

> **encodeDeploy**(`values`?): `string`

#### Parameters

##### values?

readonly `any`[]

#### Returns

`string`

#### Inherited from

`utils.Interface.encodeDeploy`

***

### encodeErrorResult()

> **encodeErrorResult**(`fragment`, `values`?): `string`

#### Parameters

##### fragment

`string` | `ErrorFragment`

##### values?

readonly `any`[]

#### Returns

`string`

#### Inherited from

`utils.Interface.encodeErrorResult`

***

### encodeEventLog()

> **encodeEventLog**(`eventFragment`, `values`): `object`

#### Parameters

##### eventFragment

`string` | `EventFragment`

##### values

readonly `any`[]

#### Returns

`object`

##### data

> **data**: `string`

##### topics

> **topics**: `string`[]

#### Inherited from

`utils.Interface.encodeEventLog`

***

### encodeFilterTopics()

> **encodeFilterTopics**(`eventFragment`, `values`): (`string` \| `string`[])[]

#### Parameters

##### eventFragment

`string` | `EventFragment`

##### values

readonly `any`[]

#### Returns

(`string` \| `string`[])[]

#### Inherited from

`utils.Interface.encodeFilterTopics`

***

### encodeFunctionData()

> **encodeFunctionData**(`functionFragment`, `values`?): `string`

#### Parameters

##### functionFragment

`string` | `FunctionFragment`

##### values?

readonly `any`[]

#### Returns

`string`

#### Inherited from

`utils.Interface.encodeFunctionData`

***

### encodeFunctionResult()

> **encodeFunctionResult**(`functionFragment`, `values`?): `string`

#### Parameters

##### functionFragment

`string` | `FunctionFragment`

##### values?

readonly `any`[]

#### Returns

`string`

#### Inherited from

`utils.Interface.encodeFunctionResult`

***

### format()

> **format**(`format`?): `string` \| `string`[]

#### Parameters

##### format?

`string`

#### Returns

`string` \| `string`[]

#### Inherited from

`utils.Interface.format`

***

### getError()

> **getError**(`nameOrSignatureOrSighash`): `ErrorFragment`

#### Parameters

##### nameOrSignatureOrSighash

`string`

#### Returns

`ErrorFragment`

#### Inherited from

`utils.Interface.getError`

***

### getEvent()

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"Annotation"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"Annotation(address,bytes32,string)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ArbitraryReputationUpdate"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ArbitraryReputationUpdate(address,address,uint256,int256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ArbitraryTransaction(address,bytes,bool)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ArbitraryTransaction(address,address,bytes,bool)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyBootstrapped"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyBootstrapped(address,address[],int256[])"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyFundsClaimed"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyFundsClaimed(address,address,uint256,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyFundsMovedBetweenFundingPots"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyFundsMovedBetweenFundingPots(address,uint256,uint256,uint256,address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyInitialised"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyInitialised(address,address,address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyMetadata"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyMetadata(address,string)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyMetadataDelta"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyMetadataDelta(address,string)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyRewardInverseSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyRewardInverseSet(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyRoleSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyRoleSet(address,address,uint256,uint8,bool)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyUpgraded"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyUpgraded(address,uint256,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"DomainAdded"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"DomainAdded(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"DomainDeprecated"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"DomainDeprecated(address,uint256,bool)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"DomainMetadata"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"DomainMetadata(address,uint256,string)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureAdded"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureAdded(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureCancelled"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureCancelled(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureClaimDelaySet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureClaimDelaySet(address,uint256,uint256,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureFinalized"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureFinalized(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureGlobalClaimDelaySet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureGlobalClaimDelaySet(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureLocked"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureLocked(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureMadeStaged(uint256,bool)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureMadeStaged(address,uint256,bool)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureMetadataSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureMetadataSet(address,uint256,string)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditurePayoutModifierSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditurePayoutModifierSet(address,uint256,uint256,int256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditurePayoutSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditurePayoutSet(address,uint256,uint256,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureRecipientSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureRecipientSet(address,uint256,uint256,address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureSkillSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureSkillSet(address,uint256,uint256,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureStateChanged"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureStateChanged(address,uint256,uint256,bool[],bytes32[],bytes32)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureTransferred"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExpenditureTransferred(address,uint256,address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExtensionInitialised"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExtensionInitialised()"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"FundingPotAdded"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"FundingPotAdded(uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"LocalSkillAdded"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"LocalSkillAdded(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"LocalSkillDeprecated"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"LocalSkillDeprecated(address,uint256,bool)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"LogSetAuthority"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"LogSetAuthority(address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"LogSetOwner"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"LogSetOwner(address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"MetaTransactionExecuted"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"MetaTransactionExecuted(address,address,bytes)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"PaymentAdded"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"PaymentAdded(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"PaymentFinalized"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"PaymentFinalized(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"PaymentPayoutSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"PaymentPayoutSet(address,uint256,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"PaymentRecipientSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"PaymentRecipientSet(address,uint256,address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"PaymentSkillSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"PaymentSkillSet(address,uint256,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"PayoutClaimed(address,uint256,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"PayoutClaimed(address,uint256,uint256,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"RewardPayoutClaimed"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"RewardPayoutClaimed(uint256,address,uint256,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"RewardPayoutCycleEnded"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"RewardPayoutCycleEnded(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"RewardPayoutCycleStarted"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"RewardPayoutCycleStarted(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"StagedPaymentReleased(uint256,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"StagedPaymentReleased(address,uint256,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskAdded"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskAdded(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskBriefSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskBriefSet(uint256,bytes32)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskCanceled"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskCanceled(uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskChangedViaSignatures"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskChangedViaSignatures(address[])"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskCompleted"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskCompleted(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskDeliverableSubmitted"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskDeliverableSubmitted(address,uint256,bytes32)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskDueDateSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskDueDateSet(uint256,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskFinalized"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskFinalized(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskPayoutSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskPayoutSet(uint256,uint8,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskRoleUserSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskRoleUserSet(uint256,uint8,address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskSkillSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskSkillSet(uint256,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskWorkRatingRevealed"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TaskWorkRatingRevealed(address,uint256,uint8,uint8)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TokenUnlocked"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TokenUnlocked(address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TokensBurned"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TokensBurned(address,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TokensMinted"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TokensMinted(address,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

***

### getEventTopic()

> **getEventTopic**(`eventFragment`): `string`

#### Parameters

##### eventFragment

`string` | `EventFragment`

#### Returns

`string`

#### Inherited from

`utils.Interface.getEventTopic`

***

### getFunction()

> **getFunction**(`nameOrSignatureOrSighash`): `FunctionFragment`

#### Parameters

##### nameOrSignatureOrSighash

`string`

#### Returns

`FunctionFragment`

#### Inherited from

`utils.Interface.getFunction`

***

### getSighash()

> **getSighash**(`fragment`): `string`

#### Parameters

##### fragment

`string` | `FunctionFragment` | `ErrorFragment`

#### Returns

`string`

#### Inherited from

`utils.Interface.getSighash`

***

### parseError()

> **parseError**(`data`): `ErrorDescription`

#### Parameters

##### data

`BytesLike`

#### Returns

`ErrorDescription`

#### Inherited from

`utils.Interface.parseError`

***

### parseLog()

> **parseLog**(`log`): `LogDescription`

#### Parameters

##### log

###### data

`string`

###### topics

`string`[]

#### Returns

`LogDescription`

#### Inherited from

`utils.Interface.parseLog`

***

### parseTransaction()

> **parseTransaction**(`tx`): `TransactionDescription`

#### Parameters

##### tx

###### data

`string`

###### value

`BigNumberish`

#### Returns

`TransactionDescription`

#### Inherited from

`utils.Interface.parseTransaction`
