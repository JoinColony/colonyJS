# Interface: StagedExpenditureEvents

## Hierarchy

- `BaseContract`

  ↳ **`StagedExpenditureEvents`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployedPromise

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

BaseContract.\_runningEvents

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

BaseContract.\_wrappedEmits

___

### address

• `Readonly` **address**: `string`

#### Inherited from

BaseContract.address

___

### callStatic

• **callStatic**: `Object`

#### Overrides

BaseContract.callStatic

___

### deployTransaction

• `Readonly` **deployTransaction**: [`TransactionResponse`](TransactionResponse.md)

#### Inherited from

BaseContract.deployTransaction

___

### estimateGas

• **estimateGas**: `Object`

#### Overrides

BaseContract.estimateGas

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Annotation` | (`agent?`: ``null`` \| `string`, `txHash?`: ``null`` \| `BytesLike`, `metadata?`: ``null``) => `AnnotationEventFilter` |
| `Annotation(address,bytes32,string)` | (`agent?`: ``null`` \| `string`, `txHash?`: ``null`` \| `BytesLike`, `metadata?`: ``null``) => `AnnotationEventFilter` |
| `ArbitraryReputationUpdate` | (`agent?`: ``null``, `user?`: ``null``, `skillId?`: ``null``, `amount?`: ``null``) => `ArbitraryReputationUpdateEventFilter` |
| `ArbitraryReputationUpdate(address,address,uint256,int256)` | (`agent?`: ``null``, `user?`: ``null``, `skillId?`: ``null``, `amount?`: ``null``) => `ArbitraryReputationUpdateEventFilter` |
| `ArbitraryTransaction` | (`target?`: ``null``, `data?`: ``null``, `success?`: ``null``) => `ArbitraryTransactionEventFilter` |
| `ArbitraryTransaction(address,bytes,bool)` | (`target?`: ``null``, `data?`: ``null``, `success?`: ``null``) => `ArbitraryTransactionEventFilter` |
| `ColonyBootstrapped` | (`agent?`: ``null``, `users?`: ``null``, `amounts?`: ``null``) => `ColonyBootstrappedEventFilter` |
| `ColonyBootstrapped(address,address[],int256[])` | (`agent?`: ``null``, `users?`: ``null``, `amounts?`: ``null``) => `ColonyBootstrappedEventFilter` |
| `ColonyFundsClaimed` | (`agent?`: ``null``, `token?`: ``null``, `fee?`: ``null``, `payoutRemainder?`: ``null``) => `ColonyFundsClaimedEventFilter` |
| `ColonyFundsClaimed(address,address,uint256,uint256)` | (`agent?`: ``null``, `token?`: ``null``, `fee?`: ``null``, `payoutRemainder?`: ``null``) => `ColonyFundsClaimedEventFilter` |
| `ColonyFundsMovedBetweenFundingPots` | (`agent?`: ``null``, `fromPot?`: ``null`` \| `BigNumberish`, `toPot?`: ``null`` \| `BigNumberish`, `amount?`: ``null``, `token?`: ``null``) => `ColonyFundsMovedBetweenFundingPotsEventFilter` |
| `ColonyFundsMovedBetweenFundingPots(address,uint256,uint256,uint256,address)` | (`agent?`: ``null``, `fromPot?`: ``null`` \| `BigNumberish`, `toPot?`: ``null`` \| `BigNumberish`, `amount?`: ``null``, `token?`: ``null``) => `ColonyFundsMovedBetweenFundingPotsEventFilter` |
| `ColonyInitialised` | (`agent?`: ``null``, `colonyNetwork?`: ``null``, `token?`: ``null``) => `ColonyInitialisedEventFilter` |
| `ColonyInitialised(address,address,address)` | (`agent?`: ``null``, `colonyNetwork?`: ``null``, `token?`: ``null``) => `ColonyInitialisedEventFilter` |
| `ColonyMetadata` | (`agent?`: ``null``, `metadata?`: ``null``) => `ColonyMetadataEventFilter` |
| `ColonyMetadata(address,string)` | (`agent?`: ``null``, `metadata?`: ``null``) => `ColonyMetadataEventFilter` |
| `ColonyMetadataDelta` | (`agent?`: ``null``, `metadata?`: ``null``) => `ColonyMetadataDeltaEventFilter` |
| `ColonyMetadataDelta(address,string)` | (`agent?`: ``null``, `metadata?`: ``null``) => `ColonyMetadataDeltaEventFilter` |
| `ColonyRewardInverseSet` | (`agent?`: ``null``, `rewardInverse?`: ``null``) => `ColonyRewardInverseSetEventFilter` |
| `ColonyRewardInverseSet(address,uint256)` | (`agent?`: ``null``, `rewardInverse?`: ``null``) => `ColonyRewardInverseSetEventFilter` |
| `ColonyRoleSet` | (`agent?`: ``null``, `user?`: ``null`` \| `string`, `domainId?`: ``null`` \| `BigNumberish`, `role?`: ``null`` \| `BigNumberish`, `setTo?`: ``null``) => `ColonyRoleSetEventFilter` |
| `ColonyRoleSet(address,address,uint256,uint8,bool)` | (`agent?`: ``null``, `user?`: ``null`` \| `string`, `domainId?`: ``null`` \| `BigNumberish`, `role?`: ``null`` \| `BigNumberish`, `setTo?`: ``null``) => `ColonyRoleSetEventFilter` |
| `ColonyUpgraded` | (`agent?`: ``null``, `oldVersion?`: ``null``, `newVersion?`: ``null``) => `ColonyUpgradedEventFilter` |
| `ColonyUpgraded(address,uint256,uint256)` | (`agent?`: ``null``, `oldVersion?`: ``null``, `newVersion?`: ``null``) => `ColonyUpgradedEventFilter` |
| `DomainAdded` | (`agent?`: ``null``, `domainId?`: ``null``) => `DomainAddedEventFilter` |
| `DomainAdded(address,uint256)` | (`agent?`: ``null``, `domainId?`: ``null``) => `DomainAddedEventFilter` |
| `DomainDeprecated` | (`agent?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `deprecated?`: ``null``) => `DomainDeprecatedEventFilter` |
| `DomainDeprecated(address,uint256,bool)` | (`agent?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `deprecated?`: ``null``) => `DomainDeprecatedEventFilter` |
| `DomainMetadata` | (`agent?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => `DomainMetadataEventFilter` |
| `DomainMetadata(address,uint256,string)` | (`agent?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => `DomainMetadataEventFilter` |
| `ExpenditureAdded` | (`agent?`: ``null``, `expenditureId?`: ``null``) => `ExpenditureAddedEventFilter` |
| `ExpenditureAdded(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null``) => `ExpenditureAddedEventFilter` |
| `ExpenditureCancelled` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => `ExpenditureCancelledEventFilter` |
| `ExpenditureCancelled(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => `ExpenditureCancelledEventFilter` |
| `ExpenditureClaimDelaySet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `claimDelay?`: ``null``) => `ExpenditureClaimDelaySetEventFilter` |
| `ExpenditureClaimDelaySet(address,uint256,uint256,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `claimDelay?`: ``null``) => `ExpenditureClaimDelaySetEventFilter` |
| `ExpenditureFinalized` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => `ExpenditureFinalizedEventFilter` |
| `ExpenditureFinalized(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => `ExpenditureFinalizedEventFilter` |
| `ExpenditureGlobalClaimDelaySet` | (`agent?`: ``null``, `globalClaimDelay?`: ``null``) => `ExpenditureGlobalClaimDelaySetEventFilter` |
| `ExpenditureGlobalClaimDelaySet(address,uint256)` | (`agent?`: ``null``, `globalClaimDelay?`: ``null``) => `ExpenditureGlobalClaimDelaySetEventFilter` |
| `ExpenditureLocked` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => `ExpenditureLockedEventFilter` |
| `ExpenditureLocked(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => `ExpenditureLockedEventFilter` |
| `ExpenditureMadeStaged` | (`expenditureId?`: ``null`` \| `BigNumberish`, `staged?`: ``null``) => `ExpenditureMadeStagedEventFilter` |
| `ExpenditureMadeStaged(uint256,bool)` | (`expenditureId?`: ``null`` \| `BigNumberish`, `staged?`: ``null``) => `ExpenditureMadeStagedEventFilter` |
| `ExpenditureMetadataSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => `ExpenditureMetadataSetEventFilter` |
| `ExpenditureMetadataSet(address,uint256,string)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => `ExpenditureMetadataSetEventFilter` |
| `ExpenditurePayoutModifierSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `payoutModifier?`: ``null``) => `ExpenditurePayoutModifierSetEventFilter` |
| `ExpenditurePayoutModifierSet(address,uint256,uint256,int256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `payoutModifier?`: ``null``) => `ExpenditurePayoutModifierSetEventFilter` |
| `ExpenditurePayoutSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `token?`: ``null`` \| `string`, `amount?`: ``null``) => `ExpenditurePayoutSetEventFilter` |
| `ExpenditurePayoutSet(address,uint256,uint256,address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `token?`: ``null`` \| `string`, `amount?`: ``null``) => `ExpenditurePayoutSetEventFilter` |
| `ExpenditureRecipientSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `recipient?`: ``null`` \| `string`) => `ExpenditureRecipientSetEventFilter` |
| `ExpenditureRecipientSet(address,uint256,uint256,address)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `recipient?`: ``null`` \| `string`) => `ExpenditureRecipientSetEventFilter` |
| `ExpenditureSkillSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => `ExpenditureSkillSetEventFilter` |
| `ExpenditureSkillSet(address,uint256,uint256,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => `ExpenditureSkillSetEventFilter` |
| `ExpenditureStateChanged` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `storageSlot?`: ``null`` \| `BigNumberish`, `mask?`: ``null``, `keys?`: ``null``, `value?`: ``null``) => `ExpenditureStateChangedEventFilter` |
| `ExpenditureStateChanged(address,uint256,uint256,bool[],bytes32[],bytes32)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `storageSlot?`: ``null`` \| `BigNumberish`, `mask?`: ``null``, `keys?`: ``null``, `value?`: ``null``) => `ExpenditureStateChangedEventFilter` |
| `ExpenditureTransferred` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `owner?`: ``null`` \| `string`) => `ExpenditureTransferredEventFilter` |
| `ExpenditureTransferred(address,uint256,address)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `owner?`: ``null`` \| `string`) => `ExpenditureTransferredEventFilter` |
| `ExtensionInitialised` | () => `ExtensionInitialisedEventFilter` |
| `ExtensionInitialised()` | () => `ExtensionInitialisedEventFilter` |
| `FundingPotAdded` | (`fundingPotId?`: ``null``) => `FundingPotAddedEventFilter` |
| `FundingPotAdded(uint256)` | (`fundingPotId?`: ``null``) => `FundingPotAddedEventFilter` |
| `LocalSkillAdded` | (`agent?`: ``null``, `localSkillId?`: ``null``) => `LocalSkillAddedEventFilter` |
| `LocalSkillAdded(address,uint256)` | (`agent?`: ``null``, `localSkillId?`: ``null``) => `LocalSkillAddedEventFilter` |
| `LocalSkillDeprecated` | (`agent?`: ``null``, `localSkillId?`: ``null``, `deprecated?`: ``null``) => `LocalSkillDeprecatedEventFilter` |
| `LocalSkillDeprecated(address,uint256,bool)` | (`agent?`: ``null``, `localSkillId?`: ``null``, `deprecated?`: ``null``) => `LocalSkillDeprecatedEventFilter` |
| `LogSetAuthority` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetOwner` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `PaymentAdded` | (`agent?`: ``null``, `paymentId?`: ``null``) => `PaymentAddedEventFilter` |
| `PaymentAdded(address,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null``) => `PaymentAddedEventFilter` |
| `PaymentFinalized` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`) => `PaymentFinalizedEventFilter` |
| `PaymentFinalized(address,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`) => `PaymentFinalizedEventFilter` |
| `PaymentPayoutSet` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => `PaymentPayoutSetEventFilter` |
| `PaymentPayoutSet(address,uint256,address,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => `PaymentPayoutSetEventFilter` |
| `PaymentRecipientSet` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `recipient?`: ``null``) => `PaymentRecipientSetEventFilter` |
| `PaymentRecipientSet(address,uint256,address)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `recipient?`: ``null``) => `PaymentRecipientSetEventFilter` |
| `PaymentSkillSet` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null``) => `PaymentSkillSetEventFilter` |
| `PaymentSkillSet(address,uint256,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null``) => `PaymentSkillSetEventFilter` |
| `PayoutClaimed(address,uint256,address,uint256)` | (`agent?`: ``null``, `fundingPotId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => `PayoutClaimed_address_uint256_address_uint256_EventFilter` |
| `PayoutClaimed(address,uint256,uint256,address,uint256)` | (`agent?`: ``null``, `id?`: ``null``, `slot?`: ``null``, `token?`: ``null``, `tokenPayout?`: ``null``) => `PayoutClaimed_address_uint256_uint256_address_uint256_EventFilter` |
| `RewardPayoutClaimed` | (`rewardPayoutId?`: ``null``, `user?`: ``null``, `fee?`: ``null``, `rewardRemainder?`: ``null``) => `RewardPayoutClaimedEventFilter` |
| `RewardPayoutClaimed(uint256,address,uint256,uint256)` | (`rewardPayoutId?`: ``null``, `user?`: ``null``, `fee?`: ``null``, `rewardRemainder?`: ``null``) => `RewardPayoutClaimedEventFilter` |
| `RewardPayoutCycleEnded` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => `RewardPayoutCycleEndedEventFilter` |
| `RewardPayoutCycleEnded(address,uint256)` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => `RewardPayoutCycleEndedEventFilter` |
| `RewardPayoutCycleStarted` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => `RewardPayoutCycleStartedEventFilter` |
| `RewardPayoutCycleStarted(address,uint256)` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => `RewardPayoutCycleStartedEventFilter` |
| `StagedPaymentReleased` | (`expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null``) => `StagedPaymentReleasedEventFilter` |
| `StagedPaymentReleased(uint256,uint256)` | (`expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null``) => `StagedPaymentReleasedEventFilter` |
| `TaskAdded` | (`agent?`: ``null``, `taskId?`: ``null``) => `TaskAddedEventFilter` |
| `TaskAdded(address,uint256)` | (`agent?`: ``null``, `taskId?`: ``null``) => `TaskAddedEventFilter` |
| `TaskBriefSet` | (`taskId?`: ``null`` \| `BigNumberish`, `specificationHash?`: ``null``) => `TaskBriefSetEventFilter` |
| `TaskBriefSet(uint256,bytes32)` | (`taskId?`: ``null`` \| `BigNumberish`, `specificationHash?`: ``null``) => `TaskBriefSetEventFilter` |
| `TaskCanceled` | (`taskId?`: ``null`` \| `BigNumberish`) => `TaskCanceledEventFilter` |
| `TaskCanceled(uint256)` | (`taskId?`: ``null`` \| `BigNumberish`) => `TaskCanceledEventFilter` |
| `TaskChangedViaSignatures` | (`reviewerAddresses?`: ``null``) => `TaskChangedViaSignaturesEventFilter` |
| `TaskChangedViaSignatures(address[])` | (`reviewerAddresses?`: ``null``) => `TaskChangedViaSignaturesEventFilter` |
| `TaskCompleted` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`) => `TaskCompletedEventFilter` |
| `TaskCompleted(address,uint256)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`) => `TaskCompletedEventFilter` |
| `TaskDeliverableSubmitted` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`, `deliverableHash?`: ``null``) => `TaskDeliverableSubmittedEventFilter` |
| `TaskDeliverableSubmitted(address,uint256,bytes32)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`, `deliverableHash?`: ``null``) => `TaskDeliverableSubmittedEventFilter` |
| `TaskDueDateSet` | (`taskId?`: ``null`` \| `BigNumberish`, `dueDate?`: ``null``) => `TaskDueDateSetEventFilter` |
| `TaskDueDateSet(uint256,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `dueDate?`: ``null``) => `TaskDueDateSetEventFilter` |
| `TaskFinalized` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`) => `TaskFinalizedEventFilter` |
| `TaskFinalized(address,uint256)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`) => `TaskFinalizedEventFilter` |
| `TaskPayoutSet` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => `TaskPayoutSetEventFilter` |
| `TaskPayoutSet(uint256,uint8,address,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => `TaskPayoutSetEventFilter` |
| `TaskRoleUserSet` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `user?`: ``null`` \| `string`) => `TaskRoleUserSetEventFilter` |
| `TaskRoleUserSet(uint256,uint8,address)` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `user?`: ``null`` \| `string`) => `TaskRoleUserSetEventFilter` |
| `TaskSkillSet` | (`taskId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => `TaskSkillSetEventFilter` |
| `TaskSkillSet(uint256,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => `TaskSkillSetEventFilter` |
| `TaskWorkRatingRevealed` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `rating?`: ``null``) => `TaskWorkRatingRevealedEventFilter` |
| `TaskWorkRatingRevealed(address,uint256,uint8,uint8)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `rating?`: ``null``) => `TaskWorkRatingRevealedEventFilter` |
| `TokenUnlocked` | (`agent?`: ``null``) => `TokenUnlockedEventFilter` |
| `TokenUnlocked(address)` | (`agent?`: ``null``) => `TokenUnlockedEventFilter` |
| `TokensBurned` | (`agent?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => `TokensBurnedEventFilter` |
| `TokensBurned(address,address,uint256)` | (`agent?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => `TokensBurnedEventFilter` |
| `TokensMinted` | (`agent?`: ``null``, `who?`: ``null``, `amount?`: ``null``) => `TokensMintedEventFilter` |
| `TokensMinted(address,address,uint256)` | (`agent?`: ``null``, `who?`: ``null``, `amount?`: ``null``) => `TokensMintedEventFilter` |

#### Overrides

BaseContract.filters

___

### functions

• **functions**: `Object`

#### Overrides

BaseContract.functions

___

### interface

• **interface**: `StagedExpenditureEventsInterface`

#### Overrides

BaseContract.interface

___

### off

• **off**: `OnEvent`<[`StagedExpenditureEvents`](StagedExpenditureEvents.md)\>

#### Overrides

BaseContract.off

___

### on

• **on**: `OnEvent`<[`StagedExpenditureEvents`](StagedExpenditureEvents.md)\>

#### Overrides

BaseContract.on

___

### once

• **once**: `OnEvent`<[`StagedExpenditureEvents`](StagedExpenditureEvents.md)\>

#### Overrides

BaseContract.once

___

### populateTransaction

• **populateTransaction**: `Object`

#### Overrides

BaseContract.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`StagedExpenditureEvents`](StagedExpenditureEvents.md)\>

#### Overrides

BaseContract.removeListener

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

BaseContract.resolvedAddress

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

BaseContract.signer

## Methods

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

#### Inherited from

BaseContract.\_checkRunningEvents

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployed

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |
| `log` | `Log` |
| `listener` | `Listener` |

#### Returns

`Event`

#### Inherited from

BaseContract.\_wrapEvent

___

### attach

▸ **attach**(`addressOrName`): [`StagedExpenditureEvents`](StagedExpenditureEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`StagedExpenditureEvents`](StagedExpenditureEvents.md)

#### Overrides

BaseContract.attach

___

### connect

▸ **connect**(`signerOrProvider`): [`StagedExpenditureEvents`](StagedExpenditureEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`StagedExpenditureEvents`](StagedExpenditureEvents.md)

#### Overrides

BaseContract.connect

___

### deployed

▸ **deployed**(): `Promise`<[`StagedExpenditureEvents`](StagedExpenditureEvents.md)\>

#### Returns

`Promise`<[`StagedExpenditureEvents`](StagedExpenditureEvents.md)\>

#### Overrides

BaseContract.deployed

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

BaseContract.emit

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<[`TransactionResponse`](TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<[`TransactionResponse`](TransactionResponse.md)\>

#### Inherited from

BaseContract.fallback

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `EventFilter` |

#### Returns

`number`

#### Inherited from

BaseContract.listenerCount

___

### listeners

▸ **listeners**<`TEvent`\>(`eventFilter?`): `TypedListener`<`TEvent`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | `TypedEventFilter`<`TEvent`\> |

#### Returns

`TypedListener`<`TEvent`\>[]

#### Overrides

BaseContract.listeners

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Overrides

BaseContract.listeners

___

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TypedEventFilter`<`TEvent`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<`TEvent`[]\>

#### Overrides

BaseContract.queryFilter

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`StagedExpenditureEvents`](StagedExpenditureEvents.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`StagedExpenditureEvents`](StagedExpenditureEvents.md)

#### Overrides

BaseContract.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`StagedExpenditureEvents`](StagedExpenditureEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`StagedExpenditureEvents`](StagedExpenditureEvents.md)

#### Overrides

BaseContract.removeAllListeners
