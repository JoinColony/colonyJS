[**API**](../README.md)

***

# Interface: ColonyClientV16

## Extends

- `AugmentedIColony`\<`IColony`\>.`ColonyAugmentsV3`\<`IColony`\>.`ColonyAugmentsV4`\<`IColony`\>.`ColonyAugmentsV5`\<`IColony`\>.`ColonyAugmentsV6`\<`IColony`\>.`ColonyAugmentsV7`\<`IColony`\>.`AddDomainAugmentsB`\<`IColony`\>.`MoveFundsBetweenPotsAugmentsB`\<`IColony`\>

## Properties

### \_deployedPromise

> **\_deployedPromise**: `Promise`\<`Contract`\>

#### Inherited from

`AugmentedIColony._deployedPromise`

***

### \_runningEvents

> **\_runningEvents**: `object`

#### Index Signature

\[`eventTag`: `string`\]: `RunningEvent`

#### Inherited from

`AugmentedIColony._runningEvents`

***

### \_wrappedEmits

> **\_wrappedEmits**: `object`

#### Index Signature

\[`eventTag`: `string`\]: (...`args`) => `void`

#### Inherited from

`AugmentedIColony._wrappedEmits`

***

### address

> `readonly` **address**: `string`

#### Inherited from

`AugmentedIColony.address`

***

### clientType

> **clientType**: [`ColonyClient`](../enumerations/ClientType.md#colonyclient)

#### Inherited from

`AugmentedIColony.clientType`

***

### clientVersion

> **clientVersion**: `16`

The version of the Colony the client is attached to

#### Overrides

`AugmentedIColony.clientVersion`

***

### colonyEvents

> **colonyEvents**: `IColonyEvents`

The colonyEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

#### Inherited from

`AugmentedIColony.colonyEvents`

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

`AugmentedIColony.deployTransaction`

***

### estimateGas

> **estimateGas**: `ColonyClientV16Estimate`

#### Overrides

`AugmentedIColony.estimateGas`

***

### filters

> **filters**: `object`

#### Annotation()

##### Parameters

###### agent?

`null` | `string`

###### txHash?

`null` | `BytesLike`

###### metadata?

`null`

##### Returns

`AnnotationEventFilter`

#### Annotation(address,bytes32,string)()

##### Parameters

###### agent?

`null` | `string`

###### txHash?

`null` | `BytesLike`

###### metadata?

`null`

##### Returns

`AnnotationEventFilter`

#### ArbitraryReputationUpdate()

##### Parameters

###### agent?

`null`

###### user?

`null`

###### skillId?

`null`

###### amount?

`null`

##### Returns

`ArbitraryReputationUpdateEventFilter`

#### ArbitraryReputationUpdate(address,address,uint256,int256)()

##### Parameters

###### agent?

`null`

###### user?

`null`

###### skillId?

`null`

###### amount?

`null`

##### Returns

`ArbitraryReputationUpdateEventFilter`

#### ArbitraryTransaction()

##### Parameters

###### target?

`null`

###### data?

`null`

###### success?

`null`

##### Returns

`ArbitraryTransactionEventFilter`

#### ArbitraryTransaction(address,bytes,bool)()

##### Parameters

###### target?

`null`

###### data?

`null`

###### success?

`null`

##### Returns

`ArbitraryTransactionEventFilter`

#### ColonyBootstrapped()

##### Parameters

###### agent?

`null`

###### users?

`null`

###### amounts?

`null`

##### Returns

`ColonyBootstrappedEventFilter`

#### ColonyBootstrapped(address,address\[\],int256\[\])()

##### Parameters

###### agent?

`null`

###### users?

`null`

###### amounts?

`null`

##### Returns

`ColonyBootstrappedEventFilter`

#### ColonyFundsClaimed()

##### Parameters

###### agent?

`null`

###### token?

`null`

###### fee?

`null`

###### payoutRemainder?

`null`

##### Returns

`ColonyFundsClaimedEventFilter`

#### ColonyFundsClaimed(address,address,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### token?

`null`

###### fee?

`null`

###### payoutRemainder?

`null`

##### Returns

`ColonyFundsClaimedEventFilter`

#### ColonyFundsMovedBetweenFundingPots()

##### Parameters

###### agent?

`null`

###### fromPot?

`null` | `BigNumberish`

###### toPot?

`null` | `BigNumberish`

###### amount?

`null`

###### token?

`null`

##### Returns

`ColonyFundsMovedBetweenFundingPotsEventFilter`

#### ColonyFundsMovedBetweenFundingPots(address,uint256,uint256,uint256,address)()

##### Parameters

###### agent?

`null`

###### fromPot?

`null` | `BigNumberish`

###### toPot?

`null` | `BigNumberish`

###### amount?

`null`

###### token?

`null`

##### Returns

`ColonyFundsMovedBetweenFundingPotsEventFilter`

#### ColonyInitialised()

##### Parameters

###### agent?

`null`

###### colonyNetwork?

`null`

###### token?

`null`

##### Returns

`ColonyInitialisedEventFilter`

#### ColonyInitialised(address,address,address)()

##### Parameters

###### agent?

`null`

###### colonyNetwork?

`null`

###### token?

`null`

##### Returns

`ColonyInitialisedEventFilter`

#### ColonyMetadata()

##### Parameters

###### agent?

`null`

###### metadata?

`null`

##### Returns

`ColonyMetadataEventFilter`

#### ColonyMetadata(address,string)()

##### Parameters

###### agent?

`null`

###### metadata?

`null`

##### Returns

`ColonyMetadataEventFilter`

#### ColonyMetadataDelta()

##### Parameters

###### agent?

`null`

###### metadata?

`null`

##### Returns

`ColonyMetadataDeltaEventFilter`

#### ColonyMetadataDelta(address,string)()

##### Parameters

###### agent?

`null`

###### metadata?

`null`

##### Returns

`ColonyMetadataDeltaEventFilter`

#### ColonyRewardInverseSet()

##### Parameters

###### agent?

`null`

###### rewardInverse?

`null`

##### Returns

`ColonyRewardInverseSetEventFilter`

#### ColonyRewardInverseSet(address,uint256)()

##### Parameters

###### agent?

`null`

###### rewardInverse?

`null`

##### Returns

`ColonyRewardInverseSetEventFilter`

#### ColonyRoleSet()

##### Parameters

###### agent?

`null`

###### user?

`null` | `string`

###### domainId?

`null` | `BigNumberish`

###### role?

`null` | `BigNumberish`

###### setTo?

`null`

##### Returns

`ColonyRoleSetEventFilter`

#### ColonyRoleSet(address,address,uint256,uint8,bool)()

##### Parameters

###### agent?

`null`

###### user?

`null` | `string`

###### domainId?

`null` | `BigNumberish`

###### role?

`null` | `BigNumberish`

###### setTo?

`null`

##### Returns

`ColonyRoleSetEventFilter`

#### ColonyUpgraded()

##### Parameters

###### agent?

`null`

###### oldVersion?

`null`

###### newVersion?

`null`

##### Returns

`ColonyUpgradedEventFilter`

#### ColonyUpgraded(address,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### oldVersion?

`null`

###### newVersion?

`null`

##### Returns

`ColonyUpgradedEventFilter`

#### DomainAdded()

##### Parameters

###### agent?

`null`

###### domainId?

`null`

##### Returns

`DomainAddedEventFilter`

#### DomainAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### domainId?

`null`

##### Returns

`DomainAddedEventFilter`

#### DomainDeprecated()

##### Parameters

###### agent?

`null`

###### domainId?

`null` | `BigNumberish`

###### deprecated?

`null`

##### Returns

`DomainDeprecatedEventFilter`

#### DomainDeprecated(address,uint256,bool)()

##### Parameters

###### agent?

`null`

###### domainId?

`null` | `BigNumberish`

###### deprecated?

`null`

##### Returns

`DomainDeprecatedEventFilter`

#### DomainMetadata()

##### Parameters

###### agent?

`null`

###### domainId?

`null` | `BigNumberish`

###### metadata?

`null`

##### Returns

`DomainMetadataEventFilter`

#### DomainMetadata(address,uint256,string)()

##### Parameters

###### agent?

`null`

###### domainId?

`null` | `BigNumberish`

###### metadata?

`null`

##### Returns

`DomainMetadataEventFilter`

#### ExpenditureAdded()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null`

##### Returns

`ExpenditureAddedEventFilter`

#### ExpenditureAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null`

##### Returns

`ExpenditureAddedEventFilter`

#### ExpenditureCancelled()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

`ExpenditureCancelledEventFilter`

#### ExpenditureCancelled(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

`ExpenditureCancelledEventFilter`

#### ExpenditureClaimDelaySet()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### claimDelay?

`null`

##### Returns

`ExpenditureClaimDelaySetEventFilter`

#### ExpenditureClaimDelaySet(address,uint256,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### claimDelay?

`null`

##### Returns

`ExpenditureClaimDelaySetEventFilter`

#### ExpenditureFinalized()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

`ExpenditureFinalizedEventFilter`

#### ExpenditureFinalized(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

`ExpenditureFinalizedEventFilter`

#### ExpenditureGlobalClaimDelaySet()

##### Parameters

###### agent?

`null`

###### globalClaimDelay?

`null`

##### Returns

`ExpenditureGlobalClaimDelaySetEventFilter`

#### ExpenditureGlobalClaimDelaySet(address,uint256)()

##### Parameters

###### agent?

`null`

###### globalClaimDelay?

`null`

##### Returns

`ExpenditureGlobalClaimDelaySetEventFilter`

#### ExpenditureLocked()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

`ExpenditureLockedEventFilter`

#### ExpenditureLocked(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

`ExpenditureLockedEventFilter`

#### ExpenditureMetadataSet()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### metadata?

`null`

##### Returns

`ExpenditureMetadataSetEventFilter`

#### ExpenditureMetadataSet(address,uint256,string)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### metadata?

`null`

##### Returns

`ExpenditureMetadataSetEventFilter`

#### ExpenditurePayoutModifierSet()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### payoutModifier?

`null`

##### Returns

`ExpenditurePayoutModifierSetEventFilter`

#### ExpenditurePayoutModifierSet(address,uint256,uint256,int256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### payoutModifier?

`null`

##### Returns

`ExpenditurePayoutModifierSetEventFilter`

#### ExpenditurePayoutSet()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### token?

`null` | `string`

###### amount?

`null`

##### Returns

`ExpenditurePayoutSetEventFilter`

#### ExpenditurePayoutSet(address,uint256,uint256,address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### token?

`null` | `string`

###### amount?

`null`

##### Returns

`ExpenditurePayoutSetEventFilter`

#### ExpenditureRecipientSet()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### recipient?

`null` | `string`

##### Returns

`ExpenditureRecipientSetEventFilter`

#### ExpenditureRecipientSet(address,uint256,uint256,address)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### recipient?

`null` | `string`

##### Returns

`ExpenditureRecipientSetEventFilter`

#### ExpenditureSkillSet()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### skillId?

`null` | `BigNumberish`

##### Returns

`ExpenditureSkillSetEventFilter`

#### ExpenditureSkillSet(address,uint256,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### skillId?

`null` | `BigNumberish`

##### Returns

`ExpenditureSkillSetEventFilter`

#### ExpenditureStateChanged()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### storageSlot?

`null` | `BigNumberish`

###### mask?

`null`

###### keys?

`null`

###### value?

`null`

##### Returns

`ExpenditureStateChangedEventFilter`

#### ExpenditureStateChanged(address,uint256,uint256,bool\[\],bytes32\[\],bytes32)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### storageSlot?

`null` | `BigNumberish`

###### mask?

`null`

###### keys?

`null`

###### value?

`null`

##### Returns

`ExpenditureStateChangedEventFilter`

#### ExpenditureTransferred()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### owner?

`null` | `string`

##### Returns

`ExpenditureTransferredEventFilter`

#### ExpenditureTransferred(address,uint256,address)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### owner?

`null` | `string`

##### Returns

`ExpenditureTransferredEventFilter`

#### FundingPotAdded()

##### Parameters

###### fundingPotId?

`null`

##### Returns

`FundingPotAddedEventFilter`

#### FundingPotAdded(uint256)()

##### Parameters

###### fundingPotId?

`null`

##### Returns

`FundingPotAddedEventFilter`

#### LocalSkillAdded()

##### Parameters

###### agent?

`null`

###### localSkillId?

`null`

##### Returns

`LocalSkillAddedEventFilter`

#### LocalSkillAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### localSkillId?

`null`

##### Returns

`LocalSkillAddedEventFilter`

#### LocalSkillDeprecated()

##### Parameters

###### agent?

`null`

###### localSkillId?

`null`

###### deprecated?

`null`

##### Returns

`LocalSkillDeprecatedEventFilter`

#### LocalSkillDeprecated(address,uint256,bool)()

##### Parameters

###### agent?

`null`

###### localSkillId?

`null`

###### deprecated?

`null`

##### Returns

`LocalSkillDeprecatedEventFilter`

#### MetaTransactionExecuted()

##### Parameters

###### userAddress?

`null`

###### relayerAddress?

`null`

###### payload?

`null`

##### Returns

`MetaTransactionExecutedEventFilter`

#### MetaTransactionExecuted(address,address,bytes)()

##### Parameters

###### userAddress?

`null`

###### relayerAddress?

`null`

###### payload?

`null`

##### Returns

`MetaTransactionExecutedEventFilter`

#### PaymentAdded()

##### Parameters

###### agent?

`null`

###### paymentId?

`null`

##### Returns

`PaymentAddedEventFilter`

#### PaymentAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null`

##### Returns

`PaymentAddedEventFilter`

#### PaymentFinalized()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

##### Returns

`PaymentFinalizedEventFilter`

#### PaymentFinalized(address,uint256)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

##### Returns

`PaymentFinalizedEventFilter`

#### PaymentPayoutSet()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### token?

`null`

###### amount?

`null`

##### Returns

`PaymentPayoutSetEventFilter`

#### PaymentPayoutSet(address,uint256,address,uint256)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### token?

`null`

###### amount?

`null`

##### Returns

`PaymentPayoutSetEventFilter`

#### PaymentRecipientSet()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### recipient?

`null`

##### Returns

`PaymentRecipientSetEventFilter`

#### PaymentRecipientSet(address,uint256,address)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### recipient?

`null`

##### Returns

`PaymentRecipientSetEventFilter`

#### PaymentSkillSet()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### skillId?

`null`

##### Returns

`PaymentSkillSetEventFilter`

#### PaymentSkillSet(address,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### skillId?

`null`

##### Returns

`PaymentSkillSetEventFilter`

#### PayoutClaimed(address,uint256,address,uint256)()

##### Parameters

###### agent?

`null`

###### fundingPotId?

`null` | `BigNumberish`

###### token?

`null`

###### amount?

`null`

##### Returns

`PayoutClaimed_address_uint256_address_uint256_EventFilter`

#### PayoutClaimed(address,uint256,uint256,address,uint256)()

##### Parameters

###### agent?

`null`

###### id?

`null`

###### slot?

`null`

###### token?

`null`

###### tokenPayout?

`null`

##### Returns

`PayoutClaimed_address_uint256_uint256_address_uint256_EventFilter`

#### RecoveryModeEntered()

##### Parameters

###### user?

`null`

##### Returns

`RecoveryModeEnteredEventFilter`

#### RecoveryModeEntered(address)()

##### Parameters

###### user?

`null`

##### Returns

`RecoveryModeEnteredEventFilter`

#### RecoveryModeExitApproved()

##### Parameters

###### user?

`null`

##### Returns

`RecoveryModeExitApprovedEventFilter`

#### RecoveryModeExitApproved(address)()

##### Parameters

###### user?

`null`

##### Returns

`RecoveryModeExitApprovedEventFilter`

#### RecoveryModeExited()

##### Parameters

###### user?

`null`

##### Returns

`RecoveryModeExitedEventFilter`

#### RecoveryModeExited(address)()

##### Parameters

###### user?

`null`

##### Returns

`RecoveryModeExitedEventFilter`

#### RecoveryRoleSet()

##### Parameters

###### user?

`null` | `string`

###### setTo?

`null`

##### Returns

`RecoveryRoleSetEventFilter`

#### RecoveryRoleSet(address,bool)()

##### Parameters

###### user?

`null` | `string`

###### setTo?

`null`

##### Returns

`RecoveryRoleSetEventFilter`

#### RecoveryStorageSlotSet()

##### Parameters

###### user?

`null`

###### slot?

`null`

###### fromValue?

`null`

###### toValue?

`null`

##### Returns

`RecoveryStorageSlotSetEventFilter`

#### RecoveryStorageSlotSet(address,uint256,bytes32,bytes32)()

##### Parameters

###### user?

`null`

###### slot?

`null`

###### fromValue?

`null`

###### toValue?

`null`

##### Returns

`RecoveryStorageSlotSetEventFilter`

#### RewardPayoutClaimed()

##### Parameters

###### rewardPayoutId?

`null`

###### user?

`null`

###### fee?

`null`

###### rewardRemainder?

`null`

##### Returns

`RewardPayoutClaimedEventFilter`

#### RewardPayoutClaimed(uint256,address,uint256,uint256)()

##### Parameters

###### rewardPayoutId?

`null`

###### user?

`null`

###### fee?

`null`

###### rewardRemainder?

`null`

##### Returns

`RewardPayoutClaimedEventFilter`

#### RewardPayoutCycleEnded()

##### Parameters

###### agent?

`null`

###### rewardPayoutId?

`null`

##### Returns

`RewardPayoutCycleEndedEventFilter`

#### RewardPayoutCycleEnded(address,uint256)()

##### Parameters

###### agent?

`null`

###### rewardPayoutId?

`null`

##### Returns

`RewardPayoutCycleEndedEventFilter`

#### RewardPayoutCycleStarted()

##### Parameters

###### agent?

`null`

###### rewardPayoutId?

`null`

##### Returns

`RewardPayoutCycleStartedEventFilter`

#### RewardPayoutCycleStarted(address,uint256)()

##### Parameters

###### agent?

`null`

###### rewardPayoutId?

`null`

##### Returns

`RewardPayoutCycleStartedEventFilter`

#### TaskAdded()

##### Parameters

###### agent?

`null`

###### taskId?

`null`

##### Returns

`TaskAddedEventFilter`

#### TaskAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### taskId?

`null`

##### Returns

`TaskAddedEventFilter`

#### TaskBriefSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### specificationHash?

`null`

##### Returns

`TaskBriefSetEventFilter`

#### TaskBriefSet(uint256,bytes32)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### specificationHash?

`null`

##### Returns

`TaskBriefSetEventFilter`

#### TaskCanceled()

##### Parameters

###### taskId?

`null` | `BigNumberish`

##### Returns

`TaskCanceledEventFilter`

#### TaskCanceled(uint256)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

##### Returns

`TaskCanceledEventFilter`

#### TaskChangedViaSignatures()

##### Parameters

###### reviewerAddresses?

`null`

##### Returns

`TaskChangedViaSignaturesEventFilter`

#### TaskChangedViaSignatures(address\[\])()

##### Parameters

###### reviewerAddresses?

`null`

##### Returns

`TaskChangedViaSignaturesEventFilter`

#### TaskCompleted()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

##### Returns

`TaskCompletedEventFilter`

#### TaskCompleted(address,uint256)()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

##### Returns

`TaskCompletedEventFilter`

#### TaskDeliverableSubmitted()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

###### deliverableHash?

`null`

##### Returns

`TaskDeliverableSubmittedEventFilter`

#### TaskDeliverableSubmitted(address,uint256,bytes32)()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

###### deliverableHash?

`null`

##### Returns

`TaskDeliverableSubmittedEventFilter`

#### TaskDueDateSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### dueDate?

`null`

##### Returns

`TaskDueDateSetEventFilter`

#### TaskDueDateSet(uint256,uint256)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### dueDate?

`null`

##### Returns

`TaskDueDateSetEventFilter`

#### TaskFinalized()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

##### Returns

`TaskFinalizedEventFilter`

#### TaskFinalized(address,uint256)()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

##### Returns

`TaskFinalizedEventFilter`

#### TaskPayoutSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### token?

`null`

###### amount?

`null`

##### Returns

`TaskPayoutSetEventFilter`

#### TaskPayoutSet(uint256,uint8,address,uint256)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### token?

`null`

###### amount?

`null`

##### Returns

`TaskPayoutSetEventFilter`

#### TaskRoleUserSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### user?

`null` | `string`

##### Returns

`TaskRoleUserSetEventFilter`

#### TaskRoleUserSet(uint256,uint8,address)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### user?

`null` | `string`

##### Returns

`TaskRoleUserSetEventFilter`

#### TaskSkillSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### skillId?

`null` | `BigNumberish`

##### Returns

`TaskSkillSetEventFilter`

#### TaskSkillSet(uint256,uint256)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### skillId?

`null` | `BigNumberish`

##### Returns

`TaskSkillSetEventFilter`

#### TaskWorkRatingRevealed()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### rating?

`null`

##### Returns

`TaskWorkRatingRevealedEventFilter`

#### TaskWorkRatingRevealed(address,uint256,uint8,uint8)()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### rating?

`null`

##### Returns

`TaskWorkRatingRevealedEventFilter`

#### TokensBurned()

##### Parameters

###### agent?

`null`

###### token?

`null`

###### amount?

`null`

##### Returns

`TokensBurnedEventFilter`

#### TokensBurned(address,address,uint256)()

##### Parameters

###### agent?

`null`

###### token?

`null`

###### amount?

`null`

##### Returns

`TokensBurnedEventFilter`

#### TokensMinted()

##### Parameters

###### agent?

`null`

###### who?

`null`

###### amount?

`null`

##### Returns

`TokensMintedEventFilter`

#### TokensMinted(address,address,uint256)()

##### Parameters

###### agent?

`null`

###### who?

`null`

###### amount?

`null`

##### Returns

`TokensMintedEventFilter`

#### TokenUnlocked()

##### Parameters

###### agent?

`null`

##### Returns

`TokenUnlockedEventFilter`

#### TokenUnlocked(address)()

##### Parameters

###### agent?

`null`

##### Returns

`TokenUnlockedEventFilter`

#### Inherited from

`AugmentedIColony.filters`

***

### interface

> **interface**: `IColonyInterface`

#### Inherited from

`AugmentedIColony.interface`

***

### networkClient

> **networkClient**: [`ColonyNetworkClient`](ColonyNetworkClient.md)

An instance of the ColonyNetworkClient

#### Inherited from

`AugmentedIColony.networkClient`

***

### off

> **off**: `OnEvent`\<[`ColonyClientV16`](ColonyClientV16.md)\>

#### Inherited from

`AugmentedIColony.off`

***

### on

> **on**: `OnEvent`\<[`ColonyClientV16`](ColonyClientV16.md)\>

#### Inherited from

`AugmentedIColony.on`

***

### once

> **once**: `OnEvent`\<[`ColonyClientV16`](ColonyClientV16.md)\>

#### Inherited from

`AugmentedIColony.once`

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

`AugmentedIColony.provider`

***

### removeListener

> **removeListener**: `OnEvent`\<[`ColonyClientV16`](ColonyClientV16.md)\>

#### Inherited from

`AugmentedIColony.removeListener`

***

### reputationClient

> **reputationClient**: [`ReputationClient`](../classes/ReputationClient.md)

A helper client to retrieve reputation

#### Inherited from

`AugmentedIColony.reputationClient`

***

### resolvedAddress

> `readonly` **resolvedAddress**: `Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.resolvedAddress`

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

`AugmentedIColony.signer`

***

### tokenClient

> **tokenClient**: [`TokenClient`](../type-aliases/TokenClient.md)

An instance of the TokenClient for the Colony's native token

#### Inherited from

`AugmentedIColony.tokenClient`

## Methods

### \_checkRunningEvents()

> **\_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

##### runningEvent

`RunningEvent`

#### Returns

`void`

#### Inherited from

`AugmentedIColony._checkRunningEvents`

***

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<`Contract`\>

#### Parameters

##### blockTag?

`BlockTag`

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`AugmentedIColony._deployed`

***

### \_wrapEvent()

> **\_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

##### runningEvent

`RunningEvent`

##### log

`Log`

##### listener

`Listener`

#### Returns

`Event`

#### Inherited from

`AugmentedIColony._wrapEvent`

***

### addDomain(uint256,uint256,uint256,string)()

> **addDomain(uint256,uint256,uint256,string)**(`_permissionDomainId`, `_childSkillIndex`, `_parentDomainId`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_parentDomainId

`BigNumberish`

##### \_metadata

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.addDomain(uint256,uint256,uint256,string)`

***

### addDomain(uint256,uint256,uint256)()

> **addDomain(uint256,uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_parentDomainId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_parentDomainId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.addDomain(uint256,uint256,uint256)`

***

### addDomainWithProofs(uint256,string)()

> **addDomainWithProofs(uint256,string)**(`_parentDomainId`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as ["addDomain(uint256,uint256,uint256,string)"](ColonyClientV16.md#adddomain(uint256,uint256,uint256,string)), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_parentDomainId

`BigNumberish`

Id of the domain under which the new one will be added

##### \_metadata

`string`

Metadata relating to the domain. Expected to be the IPFS hash of a JSON blob, but not enforced by the contracts.

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AddDomainAugmentsB.addDomainWithProofs(uint256,string)`

***

### addDomainWithProofs(uint256)()

> **addDomainWithProofs(uint256)**(`_parentDomainId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as ["addDomain(uint256,uint256,uint256)"](ColonyClientV16.md#adddomain(uint256,uint256,uint256)), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_parentDomainId

`BigNumberish`

Id of the domain under which the new one will be added

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AddDomainAugmentsB.addDomainWithProofs(uint256)`

***

### addLocalSkill()

> **addLocalSkill**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.addLocalSkill`

***

### addLocalSkill()()

> **addLocalSkill()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.addLocalSkill()`

***

### annotateTransaction()

> **annotateTransaction**(`_txHash`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_txHash

`BytesLike`

##### \_metadata

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.annotateTransaction`

***

### annotateTransaction(bytes32,string)()

> **annotateTransaction(bytes32,string)**(`_txHash`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_txHash

`BytesLike`

##### \_metadata

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.annotateTransaction(bytes32,string)`

***

### approveExitRecovery()

> **approveExitRecovery**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.approveExitRecovery`

***

### approveExitRecovery()()

> **approveExitRecovery()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.approveExitRecovery()`

***

### approveStake()

> **approveStake**(`_approvee`, `_domainId`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_approvee

`string`

##### \_domainId

`BigNumberish`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.approveStake`

***

### approveStake(address,uint256,uint256)()

> **approveStake(address,uint256,uint256)**(`_approvee`, `_domainId`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_approvee

`string`

##### \_domainId

`BigNumberish`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.approveStake(address,uint256,uint256)`

***

### attach()

> **attach**(`addressOrName`): `this`

#### Parameters

##### addressOrName

`string`

#### Returns

`this`

#### Inherited from

`AugmentedIColony.attach`

***

### authority()

> **authority**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.authority`

***

### authority()()

> **authority()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.authority()`

***

### bootstrapColony()

> **bootstrapColony**(`_users`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_users

`string`[]

##### \_amount

`BigNumberish`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.bootstrapColony`

***

### bootstrapColony(address\[\],int256\[\])()

> **bootstrapColony(address\[\],int256\[\])**(`_users`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_users

`string`[]

##### \_amount

`BigNumberish`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.bootstrapColony(address[],int256[])`

***

### burnTokens()

> **burnTokens**(`token`, `amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### token

`string`

##### amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.burnTokens`

***

### burnTokens(address,uint256)()

> **burnTokens(address,uint256)**(`token`, `amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### token

`string`

##### amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.burnTokens(address,uint256)`

***

### cancelExpenditure()

> **cancelExpenditure**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.cancelExpenditure`

***

### cancelExpenditure(uint256)()

> **cancelExpenditure(uint256)**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.cancelExpenditure(uint256)`

***

### cancelExpenditureViaArbitration()

> **cancelExpenditureViaArbitration**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.cancelExpenditureViaArbitration`

***

### cancelExpenditureViaArbitration(uint256,uint256,uint256)()

> **cancelExpenditureViaArbitration(uint256,uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.cancelExpenditureViaArbitration(uint256,uint256,uint256)`

***

### checkNotAdditionalProtectedVariable()

> **checkNotAdditionalProtectedVariable**(`_slot`, `overrides`?): `Promise`\<`void`\>

#### Parameters

##### \_slot

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`AugmentedIColony.checkNotAdditionalProtectedVariable`

***

### checkNotAdditionalProtectedVariable(uint256)()

> **checkNotAdditionalProtectedVariable(uint256)**(`_slot`, `overrides`?): `Promise`\<`void`\>

#### Parameters

##### \_slot

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`AugmentedIColony.checkNotAdditionalProtectedVariable(uint256)`

***

### claimColonyFunds()

> **claimColonyFunds**(`_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.claimColonyFunds`

***

### claimColonyFunds(address)()

> **claimColonyFunds(address)**(`_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.claimColonyFunds(address)`

***

### claimExpenditurePayout()

> **claimExpenditurePayout**(`_id`, `_slot`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slot

`BigNumberish`

##### \_token

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.claimExpenditurePayout`

***

### claimExpenditurePayout(uint256,uint256,address)()

> **claimExpenditurePayout(uint256,uint256,address)**(`_id`, `_slot`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slot

`BigNumberish`

##### \_token

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.claimExpenditurePayout(uint256,uint256,address)`

***

### claimRewardPayout()

> **claimRewardPayout**(`_payoutId`, `_squareRoots`, `key`, `value`, `branchMask`, `siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_payoutId

`BigNumberish`

##### \_squareRoots

`BigNumberish`[]

##### key

`BytesLike`

##### value

`BytesLike`

##### branchMask

`BigNumberish`

##### siblings

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.claimRewardPayout`

***

### claimRewardPayout(uint256,uint256\[7\],bytes,bytes,uint256,bytes32\[\])()

> **claimRewardPayout(uint256,uint256\[7\],bytes,bytes,uint256,bytes32\[\])**(`_payoutId`, `_squareRoots`, `key`, `value`, `branchMask`, `siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_payoutId

`BigNumberish`

##### \_squareRoots

`BigNumberish`[]

##### key

`BytesLike`

##### value

`BytesLike`

##### branchMask

`BigNumberish`

##### siblings

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.claimRewardPayout(uint256,uint256[7],bytes,bytes,uint256,bytes32[])`

***

### connect()

> **connect**(`signerOrProvider`): `this`

#### Parameters

##### signerOrProvider

`string` | `Signer` | `Provider`

#### Returns

`this`

#### Inherited from

`AugmentedIColony.connect`

***

### deobligateStake()

> **deobligateStake**(`_user`, `_domainId`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.deobligateStake`

***

### deobligateStake(address,uint256,uint256)()

> **deobligateStake(address,uint256,uint256)**(`_user`, `_domainId`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.deobligateStake(address,uint256,uint256)`

***

### deployed()

> **deployed**(): `Promise`\<[`ColonyClientV16`](ColonyClientV16.md)\>

#### Returns

`Promise`\<[`ColonyClientV16`](ColonyClientV16.md)\>

#### Inherited from

`AugmentedIColony.deployed`

***

### deprecateDomain()

> **deprecateDomain**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_domainId

`BigNumberish`

##### \_deprecated

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.deprecateDomain`

***

### deprecateDomain(uint256,uint256,uint256,bool)()

> **deprecateDomain(uint256,uint256,uint256,bool)**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_domainId

`BigNumberish`

##### \_deprecated

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.deprecateDomain(uint256,uint256,uint256,bool)`

***

### deprecateDomainWithProofs()

> **deprecateDomainWithProofs**(`_domainId`, `_deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [deprecateDomain](ColonyClientV16.md#deprecatedomain), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_domainId

`BigNumberish`

Id of the domain being deprecated

##### \_deprecated

`boolean`

Whether the domain should be deprecated (true) or undeprecated (false)

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV6.deprecateDomainWithProofs`

***

### deprecateExtension()

> **deprecateExtension**(`extensionId`, `deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### extensionId

`BytesLike`

##### deprecated

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.deprecateExtension`

***

### deprecateExtension(bytes32,bool)()

> **deprecateExtension(bytes32,bool)**(`extensionId`, `deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### extensionId

`BytesLike`

##### deprecated

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.deprecateExtension(bytes32,bool)`

***

### deprecateLocalSkill()

> **deprecateLocalSkill**(`localSkillId`, `deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### localSkillId

`BigNumberish`

##### deprecated

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.deprecateLocalSkill`

***

### deprecateLocalSkill(uint256,bool)()

> **deprecateLocalSkill(uint256,bool)**(`localSkillId`, `deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### localSkillId

`BigNumberish`

##### deprecated

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.deprecateLocalSkill(uint256,bool)`

***

### editColony()

> **editColony**(`_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_metadata

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.editColony`

***

### editColony(string)()

> **editColony(string)**(`_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_metadata

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.editColony(string)`

***

### editColonyByDelta()

> **editColonyByDelta**(`_metadataDelta`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_metadataDelta

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.editColonyByDelta`

***

### editColonyByDelta(string)()

> **editColonyByDelta(string)**(`_metadataDelta`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_metadataDelta

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.editColonyByDelta(string)`

***

### editDomain()

> **editDomain**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_domainId

`BigNumberish`

##### \_metadata

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.editDomain`

***

### editDomain(uint256,uint256,uint256,string)()

> **editDomain(uint256,uint256,uint256,string)**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_domainId

`BigNumberish`

##### \_metadata

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.editDomain(uint256,uint256,uint256,string)`

***

### editDomainWithProofs()

> **editDomainWithProofs**(`_domainId`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [editDomain](ColonyClientV16.md#editdomain), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_domainId

`BigNumberish`

Id of the domain being edited

##### \_metadata

`string`

Metadata relating to the domain. Expected to be the IPFS hash of a JSON blob, but not enforced by the contracts.

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV5.editDomainWithProofs`

***

### emit()

> **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

##### eventName

`string` | `EventFilter`

##### args

...`any`[]

#### Returns

`boolean`

#### Inherited from

`AugmentedIColony.emit`

***

### emitDomainReputationPenalty()

> **emitDomainReputationPenalty**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_user`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_domainId

`BigNumberish`

##### \_user

`string`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.emitDomainReputationPenalty`

***

### emitDomainReputationPenalty(uint256,uint256,uint256,address,int256)()

> **emitDomainReputationPenalty(uint256,uint256,uint256,address,int256)**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_user`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_domainId

`BigNumberish`

##### \_user

`string`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.emitDomainReputationPenalty(uint256,uint256,uint256,address,int256)`

***

### emitDomainReputationPenaltyWithProofs()

> **emitDomainReputationPenaltyWithProofs**(`_domainId`, `_user`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [emitDomainReputationPenalty](ColonyClientV16.md#emitdomainreputationpenalty), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_domainId

`BigNumberish`

The domain where the user will lose reputation

##### \_user

`string`

The user who will lose reputation

##### \_amount

`BigNumberish`

The (negative) amount of reputation to lose

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV5.emitDomainReputationPenaltyWithProofs`

***

### emitDomainReputationReward()

> **emitDomainReputationReward**(`_domainId`, `_user`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_domainId

`BigNumberish`

##### \_user

`string`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.emitDomainReputationReward`

***

### emitDomainReputationReward(uint256,address,int256)()

> **emitDomainReputationReward(uint256,address,int256)**(`_domainId`, `_user`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_domainId

`BigNumberish`

##### \_user

`string`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.emitDomainReputationReward(uint256,address,int256)`

***

### emitSkillReputationPenalty()

> **emitSkillReputationPenalty**(`_skillId`, `_user`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_skillId

`BigNumberish`

##### \_user

`string`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.emitSkillReputationPenalty`

***

### emitSkillReputationPenalty(uint256,address,int256)()

> **emitSkillReputationPenalty(uint256,address,int256)**(`_skillId`, `_user`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_skillId

`BigNumberish`

##### \_user

`string`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.emitSkillReputationPenalty(uint256,address,int256)`

***

### emitSkillReputationReward()

> **emitSkillReputationReward**(`_skillId`, `_user`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_skillId

`BigNumberish`

##### \_user

`string`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.emitSkillReputationReward`

***

### emitSkillReputationReward(uint256,address,int256)()

> **emitSkillReputationReward(uint256,address,int256)**(`_skillId`, `_user`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_skillId

`BigNumberish`

##### \_user

`string`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.emitSkillReputationReward(uint256,address,int256)`

***

### enterRecoveryMode()

> **enterRecoveryMode**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.enterRecoveryMode`

***

### enterRecoveryMode()()

> **enterRecoveryMode()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.enterRecoveryMode()`

***

### executeMetaTransaction()

> **executeMetaTransaction**(`userAddress`, `payload`, `sigR`, `sigS`, `sigV`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### userAddress

`string`

##### payload

`BytesLike`

##### sigR

`BytesLike`

##### sigS

`BytesLike`

##### sigV

`BigNumberish`

##### overrides?

`PayableOverrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.executeMetaTransaction`

***

### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

> **executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)**(`userAddress`, `payload`, `sigR`, `sigS`, `sigV`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### userAddress

`string`

##### payload

`BytesLike`

##### sigR

`BytesLike`

##### sigS

`BytesLike`

##### sigV

`BigNumberish`

##### overrides?

`PayableOverrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)`

***

### exitRecoveryMode()

> **exitRecoveryMode**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.exitRecoveryMode`

***

### exitRecoveryMode()()

> **exitRecoveryMode()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.exitRecoveryMode()`

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

##### overrides?

`TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

`AugmentedIColony.fallback`

***

### finalizeExpenditure()

> **finalizeExpenditure**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finalizeExpenditure`

***

### finalizeExpenditure(uint256)()

> **finalizeExpenditure(uint256)**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finalizeExpenditure(uint256)`

***

### finalizeExpenditureViaArbitration()

> **finalizeExpenditureViaArbitration**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finalizeExpenditureViaArbitration`

***

### finalizeExpenditureViaArbitration(uint256,uint256,uint256)()

> **finalizeExpenditureViaArbitration(uint256,uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finalizeExpenditureViaArbitration(uint256,uint256,uint256)`

***

### finalizePaymentWithProofs()

> **finalizePaymentWithProofs**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as finalizePayment, but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_id

`BigNumberish`

Payment identifier

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finalizePaymentWithProofs`

***

### finalizeRewardPayout()

> **finalizeRewardPayout**(`_payoutId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_payoutId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finalizeRewardPayout`

***

### finalizeRewardPayout(uint256)()

> **finalizeRewardPayout(uint256)**(`_payoutId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_payoutId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finalizeRewardPayout(uint256)`

***

### finishUpgrade()

> **finishUpgrade**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finishUpgrade`

***

### finishUpgrade()()

> **finishUpgrade()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finishUpgrade()`

***

### getApproval()

> **getApproval**(`_user`, `_obligator`, `_domainId`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_user

`string`

##### \_obligator

`string`

##### \_domainId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getApproval`

***

### getApproval(address,address,uint256)()

> **getApproval(address,address,uint256)**(`_user`, `_obligator`, `_domainId`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_user

`string`

##### \_obligator

`string`

##### \_domainId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getApproval(address,address,uint256)`

***

### getCapabilityRoles()

> **getCapabilityRoles**(`_sig`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_sig

`BytesLike`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getCapabilityRoles`

***

### getCapabilityRoles(bytes4)()

> **getCapabilityRoles(bytes4)**(`_sig`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_sig

`BytesLike`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getCapabilityRoles(bytes4)`

***

### getColonyNetwork()

> **getColonyNetwork**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getColonyNetwork`

***

### getColonyNetwork()()

> **getColonyNetwork()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getColonyNetwork()`

***

### getDomain()

> **getDomain**(`_id`, `overrides`?): `Promise`\<`DomainStructOutput`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`DomainStructOutput`\>

#### Inherited from

`AugmentedIColony.getDomain`

***

### getDomain(uint256)()

> **getDomain(uint256)**(`_id`, `overrides`?): `Promise`\<`DomainStructOutput`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`DomainStructOutput`\>

#### Inherited from

`AugmentedIColony.getDomain(uint256)`

***

### getDomainCount()

> **getDomainCount**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getDomainCount`

***

### getDomainCount()()

> **getDomainCount()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getDomainCount()`

***

### getDomainFromFundingPot()

> **getDomainFromFundingPot**(`_fundingPotId`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_fundingPotId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getDomainFromFundingPot`

***

### getDomainFromFundingPot(uint256)()

> **getDomainFromFundingPot(uint256)**(`_fundingPotId`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_fundingPotId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getDomainFromFundingPot(uint256)`

***

### getExpenditure()

> **getExpenditure**(`_id`, `overrides`?): `Promise`\<`ExpenditureStructOutput`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`ExpenditureStructOutput`\>

#### Inherited from

`AugmentedIColony.getExpenditure`

***

### getExpenditure(uint256)()

> **getExpenditure(uint256)**(`_id`, `overrides`?): `Promise`\<`ExpenditureStructOutput`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`ExpenditureStructOutput`\>

#### Inherited from

`AugmentedIColony.getExpenditure(uint256)`

***

### getExpenditureCount()

> **getExpenditureCount**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getExpenditureCount`

***

### getExpenditureCount()()

> **getExpenditureCount()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getExpenditureCount()`

***

### getExpenditureSlot()

> **getExpenditureSlot**(`_id`, `_slot`, `overrides`?): `Promise`\<`ExpenditureSlotStructOutput`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slot

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`ExpenditureSlotStructOutput`\>

#### Inherited from

`AugmentedIColony.getExpenditureSlot`

***

### getExpenditureSlot(uint256,uint256)()

> **getExpenditureSlot(uint256,uint256)**(`_id`, `_slot`, `overrides`?): `Promise`\<`ExpenditureSlotStructOutput`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slot

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`ExpenditureSlotStructOutput`\>

#### Inherited from

`AugmentedIColony.getExpenditureSlot(uint256,uint256)`

***

### getExpenditureSlotPayout()

> **getExpenditureSlotPayout**(`_id`, `_slot`, `_token`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slot

`BigNumberish`

##### \_token

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getExpenditureSlotPayout`

***

### getExpenditureSlotPayout(uint256,uint256,address)()

> **getExpenditureSlotPayout(uint256,uint256,address)**(`_id`, `_slot`, `_token`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slot

`BigNumberish`

##### \_token

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getExpenditureSlotPayout(uint256,uint256,address)`

***

### getExtensionClient()

> **getExtensionClient**\<`E`\>(`extension`): `Promise`\<`GetExtensionClientReturns`\[`E`\]\>

Get an instance of an extension client associated with this Colony.

#### Type Parameters

• **E** *extends* [`Extension`](../enumerations/Extension.md)

#### Parameters

##### extension

`E`

An [Extension](../enumerations/Extension.md)

#### Returns

`Promise`\<`GetExtensionClientReturns`\[`E`\]\>

An instance of an intialized extension client for the desired extension

#### Inherited from

`AugmentedIColony.getExtensionClient`

***

### getFundingPot()

> **getFundingPot**(`_id`, `overrides`?): `Promise`\<\[`number`, `BigNumber`, `BigNumber`\] & `object`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<\[`number`, `BigNumber`, `BigNumber`\] & `object`\>

#### Inherited from

`AugmentedIColony.getFundingPot`

***

### getFundingPot(uint256)()

> **getFundingPot(uint256)**(`_id`, `overrides`?): `Promise`\<\[`number`, `BigNumber`, `BigNumber`\] & `object`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<\[`number`, `BigNumber`, `BigNumber`\] & `object`\>

#### Inherited from

`AugmentedIColony.getFundingPot(uint256)`

***

### getFundingPotBalance()

> **getFundingPotBalance**(`_potId`, `_token`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_potId

`BigNumberish`

##### \_token

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getFundingPotBalance`

***

### getFundingPotBalance(uint256,address)()

> **getFundingPotBalance(uint256,address)**(`_potId`, `_token`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_potId

`BigNumberish`

##### \_token

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getFundingPotBalance(uint256,address)`

***

### getFundingPotCount()

> **getFundingPotCount**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getFundingPotCount`

***

### getFundingPotCount()()

> **getFundingPotCount()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getFundingPotCount()`

***

### getFundingPotPayout()

> **getFundingPotPayout**(`_potId`, `_token`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_potId

`BigNumberish`

##### \_token

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getFundingPotPayout`

***

### getFundingPotPayout(uint256,address)()

> **getFundingPotPayout(uint256,address)**(`_potId`, `_token`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_potId

`BigNumberish`

##### \_token

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getFundingPotPayout(uint256,address)`

***

### getMembersReputation()

> **getMembersReputation**(`skillId`): `Promise`\<\{ `addresses`: `string`[]; \}\>

Get all addresses that have reputation for a given skill.
If you need the skillId for a certain domain you can use the [getDomain](ColonyClientV16.md#getdomain) function.

#### Parameters

##### skillId

`BigNumberish`

The skill id to get the reputation in

#### Returns

`Promise`\<\{ `addresses`: `string`[]; \}\>

All addresses that have a non-zero reputation for the given skill

#### Inherited from

`AugmentedIColony.getMembersReputation`

***

### getMetatransactionNonce()

> **getMetatransactionNonce**(`userAddress`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### userAddress

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getMetatransactionNonce`

***

### getMetatransactionNonce(address)()

> **getMetatransactionNonce(address)**(`userAddress`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### userAddress

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getMetatransactionNonce(address)`

***

### getNonRewardPotsTotal()

> **getNonRewardPotsTotal**(`_token`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_token

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getNonRewardPotsTotal`

***

### getNonRewardPotsTotal(address)()

> **getNonRewardPotsTotal(address)**(`_token`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_token

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getNonRewardPotsTotal(address)`

***

### getObligation()

> **getObligation**(`_user`, `_obligator`, `_domainId`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_user

`string`

##### \_obligator

`string`

##### \_domainId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getObligation`

***

### getObligation(address,address,uint256)()

> **getObligation(address,address,uint256)**(`_user`, `_obligator`, `_domainId`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_user

`string`

##### \_obligator

`string`

##### \_domainId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getObligation(address,address,uint256)`

***

### getPayment()

> **getPayment**(`_id`, `overrides`?): `Promise`\<`PaymentStructOutput`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`PaymentStructOutput`\>

#### Inherited from

`AugmentedIColony.getPayment`

***

### getPayment(uint256)()

> **getPayment(uint256)**(`_id`, `overrides`?): `Promise`\<`PaymentStructOutput`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`PaymentStructOutput`\>

#### Inherited from

`AugmentedIColony.getPayment(uint256)`

***

### getPaymentCount()

> **getPaymentCount**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getPaymentCount`

***

### getPaymentCount()()

> **getPaymentCount()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getPaymentCount()`

***

### getReputation()

> **getReputation**(`skillId`, `address`, `customRootHash`?): `Promise`\<\{ `branchMask`: `string`; `key`: `string`; `reputationAmount`: `BigNumber`; `siblings`: `string`[]; `value`: `string`; \}\>

Get the reputation for an address and a certain skill.
If you need the skillId for a certain domain you can use the [getDomain](ColonyClientV16.md#getdomain) function.

#### Parameters

##### skillId

`BigNumberish`

The skill id to get the addresses reputation in

##### address

`string`

Wallet address to retrieve the reputation of

##### customRootHash?

`string`

The `customRootHash` can be set to retrieve the reputation at a certain block time in the past

#### Returns

`Promise`\<\{ `branchMask`: `string`; `key`: `string`; `reputationAmount`: `BigNumber`; `siblings`: `string`[]; `value`: `string`; \}\>

The reputation amount as well as the two proofs that are needed to verify the reputation on chain

#### Remarks

This function also retrieves the proofs (`branchMask`, `siblings`) that are needed to verify the reputation on chain.
If you don't need to do that (e.g. in order to proof the reputation when calling a contract method), you should probably just use
the [getReputationWithoutProofs](ColonyClientV16.md#getreputationwithoutproofs) method as it requires fewer computations

#### Inherited from

`AugmentedIColony.getReputation`

***

### getReputationAcrossDomains()

> **getReputationAcrossDomains**(`address`, `customRootHash`?): `Promise`\<`object`[]\>

Get the reputation for an address across all domains in a Colony.

#### Parameters

##### address

`string`

Wallet address to retrieve the reputation of

##### customRootHash?

`string`

The `customRootHash` can be set to retrieve the reputation at a certain block time in the past

#### Returns

`Promise`\<`object`[]\>

The reputation amount

#### Inherited from

`AugmentedIColony.getReputationAcrossDomains`

***

### getReputationWithoutProofs()

> **getReputationWithoutProofs**(`skillId`, `address`, `customRootHash`?): `Promise`\<\{ `key`: `string`; `reputationAmount`: `BigNumber`; `value`: `string`; \}\>

Get the reputation for an address and a certain skill.
If you need the skillId for a certain domain you can use the [getDomain](ColonyClientV16.md#getdomain) function.

#### Parameters

##### skillId

`BigNumberish`

The skill id to get the addresses reputation in

##### address

`string`

Wallet address to retrieve the reputation of

##### customRootHash?

`string`

The `customRootHash` can be set to retrieve the reputation at a certain block time in the past

#### Returns

`Promise`\<\{ `key`: `string`; `reputationAmount`: `BigNumber`; `value`: `string`; \}\>

The reputation amount

#### Inherited from

`AugmentedIColony.getReputationWithoutProofs`

***

### getRewardInverse()

> **getRewardInverse**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getRewardInverse`

***

### getRewardInverse()()

> **getRewardInverse()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getRewardInverse()`

***

### getRewardPayoutInfo()

> **getRewardPayoutInfo**(`_payoutId`, `overrides`?): `Promise`\<`RewardPayoutCycleStructOutput`\>

#### Parameters

##### \_payoutId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`RewardPayoutCycleStructOutput`\>

#### Inherited from

`AugmentedIColony.getRewardPayoutInfo`

***

### getRewardPayoutInfo(uint256)()

> **getRewardPayoutInfo(uint256)**(`_payoutId`, `overrides`?): `Promise`\<`RewardPayoutCycleStructOutput`\>

#### Parameters

##### \_payoutId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`RewardPayoutCycleStructOutput`\>

#### Inherited from

`AugmentedIColony.getRewardPayoutInfo(uint256)`

***

### getRootLocalSkill()

> **getRootLocalSkill**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getRootLocalSkill`

***

### getRootLocalSkill()()

> **getRootLocalSkill()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getRootLocalSkill()`

***

### getTask()

> **getTask**(`_id`, `overrides`?): `Promise`\<\[`string`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`[]\] & `object`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<\[`string`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`[]\] & `object`\>

#### Inherited from

`AugmentedIColony.getTask`

***

### getTask(uint256)()

> **getTask(uint256)**(`_id`, `overrides`?): `Promise`\<\[`string`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`[]\] & `object`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<\[`string`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`[]\] & `object`\>

#### Inherited from

`AugmentedIColony.getTask(uint256)`

***

### getTaskChangeNonce()

> **getTaskChangeNonce**(`_id`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getTaskChangeNonce`

***

### getTaskChangeNonce(uint256)()

> **getTaskChangeNonce(uint256)**(`_id`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getTaskChangeNonce(uint256)`

***

### getTaskCount()

> **getTaskCount**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getTaskCount`

***

### getTaskCount()()

> **getTaskCount()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getTaskCount()`

***

### getTaskRole()

> **getTaskRole**(`_id`, `_role`, `overrides`?): `Promise`\<`RoleStructOutput`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_role

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`RoleStructOutput`\>

#### Inherited from

`AugmentedIColony.getTaskRole`

***

### getTaskRole(uint256,uint8)()

> **getTaskRole(uint256,uint8)**(`_id`, `_role`, `overrides`?): `Promise`\<`RoleStructOutput`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_role

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`RoleStructOutput`\>

#### Inherited from

`AugmentedIColony.getTaskRole(uint256,uint8)`

***

### getTaskWorkRatingSecret()

> **getTaskWorkRatingSecret**(`_id`, `_role`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_role

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getTaskWorkRatingSecret`

***

### getTaskWorkRatingSecret(uint256,uint8)()

> **getTaskWorkRatingSecret(uint256,uint8)**(`_id`, `_role`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_role

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getTaskWorkRatingSecret(uint256,uint8)`

***

### getTaskWorkRatingSecretsInfo()

> **getTaskWorkRatingSecretsInfo**(`_id`, `overrides`?): `Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### Inherited from

`AugmentedIColony.getTaskWorkRatingSecretsInfo`

***

### getTaskWorkRatingSecretsInfo(uint256)()

> **getTaskWorkRatingSecretsInfo(uint256)**(`_id`, `overrides`?): `Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### Inherited from

`AugmentedIColony.getTaskWorkRatingSecretsInfo(uint256)`

***

### getToken()

> **getToken**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getToken`

***

### getToken()()

> **getToken()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getToken()`

***

### getTokenApproval()

> **getTokenApproval**(`token`, `spender`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### token

`string`

##### spender

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getTokenApproval`

***

### getTokenApproval(address,address)()

> **getTokenApproval(address,address)**(`token`, `spender`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### token

`string`

##### spender

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getTokenApproval(address,address)`

***

### getTotalTokenApproval()

> **getTotalTokenApproval**(`token`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### token

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getTotalTokenApproval`

***

### getTotalTokenApproval(address)()

> **getTotalTokenApproval(address)**(`token`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### token

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getTotalTokenApproval(address)`

***

### getUserRoles()

> **getUserRoles**(`_user`, `_domain`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_user

`string`

##### \_domain

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getUserRoles`

***

### getUserRoles(address,uint256)()

> **getUserRoles(address,uint256)**(`_user`, `_domain`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_user

`string`

##### \_domain

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getUserRoles(address,uint256)`

***

### hasInheritedUserRole()

> **hasInheritedUserRole**(`_user`, `_domainId`, `_role`, `_childSkillIndex`, `_childDomainId`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_role

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_childDomainId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.hasInheritedUserRole`

***

### hasInheritedUserRole(address,uint256,uint8,uint256,uint256)()

> **hasInheritedUserRole(address,uint256,uint8,uint256,uint256)**(`_user`, `_domainId`, `_role`, `_childSkillIndex`, `_childDomainId`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_role

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_childDomainId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.hasInheritedUserRole(address,uint256,uint8,uint256,uint256)`

***

### hasInheritedUserRoleWithProofs()

> **hasInheritedUserRoleWithProofs**(`_user`, `_domainId`, `_role`, `overrides`?): `Promise`\<`boolean`\>

Same as [hasInheritedUserRole](ColonyClientV16.md#hasinheriteduserrole), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_user

`string`

The user whose role we want to check

##### \_domainId

`BigNumberish`

Domain in which the caller has the role

##### \_role

`BigNumberish`

The role we want to check for

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`ColonyAugmentsV4.hasInheritedUserRoleWithProofs`

***

### hasUserRole()

> **hasUserRole**(`_user`, `_domainId`, `_role`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_role

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.hasUserRole`

***

### hasUserRole(address,uint256,uint8)()

> **hasUserRole(address,uint256,uint8)**(`_user`, `_domainId`, `_role`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_role

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.hasUserRole(address,uint256,uint8)`

***

### initialiseColony()

> **initialiseColony**(`_colonyNetworkAddress`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_colonyNetworkAddress

`string`

##### \_token

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.initialiseColony`

***

### initialiseColony(address,address)()

> **initialiseColony(address,address)**(`_colonyNetworkAddress`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_colonyNetworkAddress

`string`

##### \_token

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.initialiseColony(address,address)`

***

### initialiseRootLocalSkill()

> **initialiseRootLocalSkill**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.initialiseRootLocalSkill`

***

### initialiseRootLocalSkill()()

> **initialiseRootLocalSkill()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.initialiseRootLocalSkill()`

***

### installExtension()

> **installExtension**(`extensionId`, `version`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### extensionId

`BytesLike`

##### version

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.installExtension`

***

### installExtension(bytes32,uint256)()

> **installExtension(bytes32,uint256)**(`extensionId`, `version`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### extensionId

`BytesLike`

##### version

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.installExtension(bytes32,uint256)`

***

### installExtensionChecked()

> **installExtensionChecked**(`extension`, `version`?, `overrides`?): `Promise`\<`ContractTransaction`\>

Similar to [installExtension](ColonyClientV16.md#installextension), but first check whether the desired extension can be installed in this Colony
Always prefer this method, except when you have good reason not to.

#### Parameters

##### extension

[`Extension`](../enumerations/Extension.md)

A [Extension](../enumerations/Extension.md) name

##### version?

`number`

The desired version number of the extension you wish to install

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV5.installExtensionChecked`

***

### isInRecoveryMode()

> **isInRecoveryMode**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.isInRecoveryMode`

***

### isInRecoveryMode()()

> **isInRecoveryMode()**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.isInRecoveryMode()`

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

##### eventName?

`string` | `EventFilter`

#### Returns

`number`

#### Inherited from

`AugmentedIColony.listenerCount`

***

### listeners()

#### Call Signature

> **listeners**\<`TEvent`\>(`eventFilter`?): `TypedListener`\<`TEvent`\>[]

##### Type Parameters

• **TEvent** *extends* `TypedEvent`

##### Parameters

###### eventFilter?

`TypedEventFilter`\<`TEvent`\>

##### Returns

`TypedListener`\<`TEvent`\>[]

##### Inherited from

`AugmentedIColony.listeners`

#### Call Signature

> **listeners**(`eventName`?): `Listener`[]

##### Parameters

###### eventName?

`string`

##### Returns

`Listener`[]

##### Inherited from

`AugmentedIColony.listeners`

***

### lockExpenditure()

> **lockExpenditure**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.lockExpenditure`

***

### lockExpenditure(uint256)()

> **lockExpenditure(uint256)**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.lockExpenditure(uint256)`

***

### lockToken()

> **lockToken**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.lockToken`

***

### lockToken()()

> **lockToken()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.lockToken()`

***

### makeArbitraryTransaction()

> **makeArbitraryTransaction**(`_to`, `_action`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_to

`string`

##### \_action

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.makeArbitraryTransaction`

***

### makeArbitraryTransaction(address,bytes)()

> **makeArbitraryTransaction(address,bytes)**(`_to`, `_action`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_to

`string`

##### \_action

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.makeArbitraryTransaction(address,bytes)`

***

### makeArbitraryTransactions()

> **makeArbitraryTransactions**(`_targets`, `_actions`, `_strict`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_targets

`string`[]

##### \_actions

`BytesLike`[]

##### \_strict

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.makeArbitraryTransactions`

***

### makeArbitraryTransactions(address\[\],bytes\[\],bool)()

> **makeArbitraryTransactions(address\[\],bytes\[\],bool)**(`_targets`, `_actions`, `_strict`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_targets

`string`[]

##### \_actions

`BytesLike`[]

##### \_strict

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.makeArbitraryTransactions(address[],bytes[],bool)`

***

### makeExpenditure()

> **makeExpenditure**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_domainId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.makeExpenditure`

***

### makeExpenditure(uint256,uint256,uint256)()

> **makeExpenditure(uint256,uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_domainId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.makeExpenditure(uint256,uint256,uint256)`

***

### makeExpenditureWithProofs()

> **makeExpenditureWithProofs**(`_domainId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [makeExpenditure](ColonyClientV16.md#makeexpenditure), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_domainId

`BigNumberish`

The domain where the expenditure belongs

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV4.makeExpenditureWithProofs`

***

### makeSingleArbitraryTransaction()

> **makeSingleArbitraryTransaction**(`_target`, `_action`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_target

`string`

##### \_action

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.makeSingleArbitraryTransaction`

***

### makeSingleArbitraryTransaction(address,bytes)()

> **makeSingleArbitraryTransaction(address,bytes)**(`_target`, `_action`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_target

`string`

##### \_action

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.makeSingleArbitraryTransaction(address,bytes)`

***

### makeTaskWithProofs()

> **makeTaskWithProofs**(`_specificationHash`, `_domainId`, `_skillId`, `_dueDate`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as makeTask, but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_specificationHash

`BytesLike`

Database identifier where the task specification is stored

##### \_domainId

`BigNumberish`

The domain where the task belongs

##### \_skillId

`BigNumberish`

The skill associated with the task, can set to `0` for no-op

##### \_dueDate

`BigNumberish`

The due date of the task, can set to `0` for no-op

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.makeTaskWithProofs`

***

### mintTokens()

> **mintTokens**(`_wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_wad

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.mintTokens`

***

### mintTokens(uint256)()

> **mintTokens(uint256)**(`_wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_wad

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.mintTokens(uint256)`

***

### mintTokensFor()

> **mintTokensFor**(`_guy`, `_wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_guy

`string`

##### \_wad

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.mintTokensFor`

***

### mintTokensFor(address,uint256)()

> **mintTokensFor(address,uint256)**(`_guy`, `_wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_guy

`string`

##### \_wad

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.mintTokensFor(address,uint256)`

***

### moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)()

> **moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)**(`_permissionDomainId`, `_fromChildSkillIndex`, `_toChildSkillIndex`, `_fromPot`, `_toPot`, `_amount`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_fromChildSkillIndex

`BigNumberish`

##### \_toChildSkillIndex

`BigNumberish`

##### \_fromPot

`BigNumberish`

##### \_toPot

`BigNumberish`

##### \_amount

`BigNumberish`

##### \_token

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)`

***

### moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)()

> **moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_fromChildSkillIndex`, `_toChildSkillIndex`, `_fromPot`, `_toPot`, `_amount`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_domainId

`BigNumberish`

##### \_fromChildSkillIndex

`BigNumberish`

##### \_toChildSkillIndex

`BigNumberish`

##### \_fromPot

`BigNumberish`

##### \_toPot

`BigNumberish`

##### \_amount

`BigNumberish`

##### \_token

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)`

***

### ~~moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,address)()~~

> **moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,address)**(`_fromPot`, `_toPot`, `_amount`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_fromPot

`BigNumberish`

Funding pot id providing the funds

##### \_toPot

`BigNumberish`

Funding pot id receiving the funds

##### \_amount

`BigNumberish`

Amount of funds

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Deprecated

Same as ["moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)"](ColonyClientV16.md#movefundsbetweenpots(uint256,uint256,uint256,uint256,uint256,uint256,address)), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Inherited from

`MoveFundsBetweenPotsAugmentsB.moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,address)`

***

### moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,uint256,address)()

> **moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,uint256,address)**(`_domainId`, `_fromPot`, `_toPot`, `_amount`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as ["moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)"](ColonyClientV16.md#movefundsbetweenpots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_domainId

`BigNumberish`

The domain where I am taking this action, pointed to by _permissionDomainId and _childSkillIndex

##### \_fromPot

`BigNumberish`

Funding pot id providing the funds

##### \_toPot

`BigNumberish`

Funding pot id receiving the funds

##### \_amount

`BigNumberish`

Amount of funds

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`MoveFundsBetweenPotsAugmentsB.moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,uint256,address)`

***

### multicall()

> **multicall**(`data`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### data

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.multicall`

***

### multicall(bytes\[\])()

> **multicall(bytes\[\])**(`data`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### data

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.multicall(bytes[])`

***

### numRecoveryRoles()

> **numRecoveryRoles**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.numRecoveryRoles`

***

### numRecoveryRoles()()

> **numRecoveryRoles()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.numRecoveryRoles()`

***

### obligateStake()

> **obligateStake**(`_user`, `_domainId`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.obligateStake`

***

### obligateStake(address,uint256,uint256)()

> **obligateStake(address,uint256,uint256)**(`_user`, `_domainId`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.obligateStake(address,uint256,uint256)`

***

### owner()

> **owner**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.owner`

***

### owner()()

> **owner()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.owner()`

***

### queryFilter()

> **queryFilter**\<`TEvent`\>(`event`, `fromBlockOrBlockhash`?, `toBlock`?): `Promise`\<`TEvent`[]\>

#### Type Parameters

• **TEvent** *extends* `TypedEvent`

#### Parameters

##### event

`TypedEventFilter`\<`TEvent`\>

##### fromBlockOrBlockhash?

`string` | `number`

##### toBlock?

`string` | `number`

#### Returns

`Promise`\<`TEvent`[]\>

#### Inherited from

`AugmentedIColony.queryFilter`

***

### registerColonyLabel()

> **registerColonyLabel**(`colonyName`, `orbitdb`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### colonyName

`string`

##### orbitdb

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.registerColonyLabel`

***

### registerColonyLabel(string,string)()

> **registerColonyLabel(string,string)**(`colonyName`, `orbitdb`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### colonyName

`string`

##### orbitdb

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.registerColonyLabel(string,string)`

***

### removeAllListeners()

#### Call Signature

> **removeAllListeners**\<`TEvent`\>(`eventFilter`): `this`

##### Type Parameters

• **TEvent** *extends* `TypedEvent`

##### Parameters

###### eventFilter

`TypedEventFilter`\<`TEvent`\>

##### Returns

`this`

##### Inherited from

`AugmentedIColony.removeAllListeners`

#### Call Signature

> **removeAllListeners**(`eventName`?): `this`

##### Parameters

###### eventName?

`string`

##### Returns

`this`

##### Inherited from

`AugmentedIColony.removeAllListeners`

***

### removeRecoveryRole()

> **removeRecoveryRole**(`_user`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.removeRecoveryRole`

***

### removeRecoveryRole(address)()

> **removeRecoveryRole(address)**(`_user`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.removeRecoveryRole(address)`

***

### setAdministrationRole()

> **setAdministrationRole**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_setTo

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setAdministrationRole`

***

### setAdministrationRole(uint256,uint256,address,uint256,bool)()

> **setAdministrationRole(uint256,uint256,address,uint256,bool)**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_setTo

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setAdministrationRole(uint256,uint256,address,uint256,bool)`

***

### setAdministrationRoleWithProofs()

> **setAdministrationRoleWithProofs**(`_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [setAdministrationRole](ColonyClientV16.md#setadministrationrole), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_user

`string`

User we want to give an admin role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_setTo

`boolean`

The state of the role permission (true assign the permission, false revokes it)

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setAdministrationRoleWithProofs`

***

### setArbitrationRole()

> **setArbitrationRole**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_setTo

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setArbitrationRole`

***

### setArbitrationRole(uint256,uint256,address,uint256,bool)()

> **setArbitrationRole(uint256,uint256,address,uint256,bool)**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_setTo

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setArbitrationRole(uint256,uint256,address,uint256,bool)`

***

### setArbitrationRoleWithProofs()

> **setArbitrationRoleWithProofs**(`_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [setArbitrationRole](ColonyClientV16.md#setarbitrationrole), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_user

`string`

User we want to give an arbitration role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_setTo

`boolean`

The state of the role permission (true assign the permission, false revokes it)

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV3.setArbitrationRoleWithProofs`

***

### setArchitectureRole()

> **setArchitectureRole**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_setTo

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setArchitectureRole`

***

### setArchitectureRole(uint256,uint256,address,uint256,bool)()

> **setArchitectureRole(uint256,uint256,address,uint256,bool)**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_setTo

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setArchitectureRole(uint256,uint256,address,uint256,bool)`

***

### setArchitectureRoleWithProofs()

> **setArchitectureRoleWithProofs**(`_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [setArchitectureRole](ColonyClientV16.md#setarchitecturerole), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_user

`string`

User we want to give an architecture role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_setTo

`boolean`

The state of the role permission (true assign the permission, false revokes it)

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setArchitectureRoleWithProofs`

***

### setDefaultGlobalClaimDelay()

> **setDefaultGlobalClaimDelay**(`_globalClaimDelay`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_globalClaimDelay

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setDefaultGlobalClaimDelay`

***

### setDefaultGlobalClaimDelay(uint256)()

> **setDefaultGlobalClaimDelay(uint256)**(`_globalClaimDelay`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_globalClaimDelay

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setDefaultGlobalClaimDelay(uint256)`

***

### setExpenditureClaimDelay()

> **setExpenditureClaimDelay**(`_id`, `_slot`, `_claimDelay`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slot

`BigNumberish`

##### \_claimDelay

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureClaimDelay`

***

### setExpenditureClaimDelay(uint256,uint256,uint256)()

> **setExpenditureClaimDelay(uint256,uint256,uint256)**(`_id`, `_slot`, `_claimDelay`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slot

`BigNumberish`

##### \_claimDelay

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureClaimDelay(uint256,uint256,uint256)`

***

### setExpenditureClaimDelays()

> **setExpenditureClaimDelays**(`_id`, `_slots`, `_claimDelays`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slots

`BigNumberish`[]

##### \_claimDelays

`BigNumberish`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureClaimDelays`

***

### setExpenditureClaimDelays(uint256,uint256\[\],uint256\[\])()

> **setExpenditureClaimDelays(uint256,uint256\[\],uint256\[\])**(`_id`, `_slots`, `_claimDelays`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slots

`BigNumberish`[]

##### \_claimDelays

`BigNumberish`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureClaimDelays(uint256,uint256[],uint256[])`

***

### setExpenditureMetadata(uint256,string)()

> **setExpenditureMetadata(uint256,string)**(`_id`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_metadata

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureMetadata(uint256,string)`

***

### setExpenditureMetadata(uint256,uint256,uint256,string)()

> **setExpenditureMetadata(uint256,uint256,uint256,string)**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### \_metadata

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureMetadata(uint256,uint256,uint256,string)`

***

### setExpenditurePayout(uint256,uint256,address,uint256)()

> **setExpenditurePayout(uint256,uint256,address,uint256)**(`_id`, `_slot`, `_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slot

`BigNumberish`

##### \_token

`string`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditurePayout(uint256,uint256,address,uint256)`

***

### setExpenditurePayout(uint256,uint256,uint256,uint256,address,uint256)()

> **setExpenditurePayout(uint256,uint256,uint256,uint256,address,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_slot`, `_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### \_slot

`BigNumberish`

##### \_token

`string`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditurePayout(uint256,uint256,uint256,uint256,address,uint256)`

***

### setExpenditurePayoutModifiers()

> **setExpenditurePayoutModifiers**(`_id`, `_slots`, `_payoutModifiers`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slots

`BigNumberish`[]

##### \_payoutModifiers

`BigNumberish`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditurePayoutModifiers`

***

### setExpenditurePayoutModifiers(uint256,uint256\[\],int256\[\])()

> **setExpenditurePayoutModifiers(uint256,uint256\[\],int256\[\])**(`_id`, `_slots`, `_payoutModifiers`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slots

`BigNumberish`[]

##### \_payoutModifiers

`BigNumberish`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditurePayoutModifiers(uint256,uint256[],int256[])`

***

### setExpenditurePayouts()

> **setExpenditurePayouts**(`_id`, `_slots`, `_token`, `_amounts`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slots

`BigNumberish`[]

##### \_token

`string`

##### \_amounts

`BigNumberish`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditurePayouts`

***

### setExpenditurePayouts(uint256,uint256\[\],address,uint256\[\])()

> **setExpenditurePayouts(uint256,uint256\[\],address,uint256\[\])**(`_id`, `_slots`, `_token`, `_amounts`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slots

`BigNumberish`[]

##### \_token

`string`

##### \_amounts

`BigNumberish`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditurePayouts(uint256,uint256[],address,uint256[])`

***

### setExpenditurePayoutWithProofs()

> **setExpenditurePayoutWithProofs**(`_id`, `_slot`, `_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as the permissioned overload of ["setExpenditurePayout(uint256,uint256,uint256,uint256,address,uint256)"](ColonyClientV16.md#setexpenditurepayout(uint256,uint256,uint256,uint256,address,uint256)), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_id

`BigNumberish`

Id of the expenditure

##### \_slot

`BigNumberish`

Number of the slot

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### \_amount

`BigNumberish`

Payout amount

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV7.setExpenditurePayoutWithProofs`

***

### setExpenditureRecipient()

> **setExpenditureRecipient**(`_id`, `_slot`, `_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slot

`BigNumberish`

##### \_recipient

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureRecipient`

***

### setExpenditureRecipient(uint256,uint256,address)()

> **setExpenditureRecipient(uint256,uint256,address)**(`_id`, `_slot`, `_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slot

`BigNumberish`

##### \_recipient

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureRecipient(uint256,uint256,address)`

***

### setExpenditureRecipients()

> **setExpenditureRecipients**(`_id`, `_slots`, `_recipients`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slots

`BigNumberish`[]

##### \_recipients

`string`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureRecipients`

***

### setExpenditureRecipients(uint256,uint256\[\],address\[\])()

> **setExpenditureRecipients(uint256,uint256\[\],address\[\])**(`_id`, `_slots`, `_recipients`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slots

`BigNumberish`[]

##### \_recipients

`string`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureRecipients(uint256,uint256[],address[])`

***

### setExpenditureSkill()

> **setExpenditureSkill**(`_id`, `_slot`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slot

`BigNumberish`

##### \_skillId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureSkill`

***

### setExpenditureSkill(uint256,uint256,uint256)()

> **setExpenditureSkill(uint256,uint256,uint256)**(`_id`, `_slot`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slot

`BigNumberish`

##### \_skillId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureSkill(uint256,uint256,uint256)`

***

### setExpenditureSkills()

> **setExpenditureSkills**(`_id`, `_slots`, `_skillIds`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slots

`BigNumberish`[]

##### \_skillIds

`BigNumberish`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureSkills`

***

### setExpenditureSkills(uint256,uint256\[\],uint256\[\])()

> **setExpenditureSkills(uint256,uint256\[\],uint256\[\])**(`_id`, `_slots`, `_skillIds`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_slots

`BigNumberish`[]

##### \_skillIds

`BigNumberish`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureSkills(uint256,uint256[],uint256[])`

***

### setExpenditureState()

> **setExpenditureState**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_storageSlot`, `_mask`, `_keys`, `_value`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### \_storageSlot

`BigNumberish`

##### \_mask

`boolean`[]

##### \_keys

`BytesLike`[]

##### \_value

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureState`

***

### setExpenditureState(uint256,uint256,uint256,uint256,bool\[\],bytes32\[\],bytes32)()

> **setExpenditureState(uint256,uint256,uint256,uint256,bool\[\],bytes32\[\],bytes32)**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_storageSlot`, `_mask`, `_keys`, `_value`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### \_storageSlot

`BigNumberish`

##### \_mask

`boolean`[]

##### \_keys

`BytesLike`[]

##### \_value

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureState(uint256,uint256,uint256,uint256,bool[],bytes32[],bytes32)`

***

### setExpenditureStateWithProofs()

> **setExpenditureStateWithProofs**(`_id`, `_storageSlot`, `_mask`, `_keys`, `_value`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [editDomain](ColonyClientV16.md#editdomain), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_storageSlot

`BigNumberish`

Number of the top-level storage slot (25, 26, or 27)

##### \_mask

`boolean`[]

Array of booleans indicated whether a key is a mapping (F) or an array index (T).

##### \_keys

`BytesLike`[]

Array of additional keys (for mappings & arrays)

##### \_value

`BytesLike`

Value to set at location

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV5.setExpenditureStateWithProofs`

***

### setFundingRole()

> **setFundingRole**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_setTo

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setFundingRole`

***

### setFundingRole(uint256,uint256,address,uint256,bool)()

> **setFundingRole(uint256,uint256,address,uint256,bool)**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_setTo

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setFundingRole(uint256,uint256,address,uint256,bool)`

***

### setFundingRoleWithProofs()

> **setFundingRoleWithProofs**(`_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [setFundingRole](ColonyClientV16.md#setfundingrole), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_user

`string`

User we want to give an funding role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_setTo

`boolean`

The state of the role permission (true assign the permission, false revokes it)

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setFundingRoleWithProofs`

***

### setPaymentPayoutWithProofs()

> **setPaymentPayoutWithProofs**(`_id`, `_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as setPaymentPayout, but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_id

`BigNumberish`

Payment identifier

##### \_token

`BigNumberish`

Address of the token, `0x0` value indicates Ether

##### \_amount

`BigNumberish`

Payout amount

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setPaymentPayoutWithProofs`

***

### setPaymentRecipientWithProofs()

> **setPaymentRecipientWithProofs**(`_id`, `_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as setPaymentRecipient, but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_id

`BigNumberish`

Payment identifier

##### \_recipient

`string`

Address of the payment recipient

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setPaymentRecipientWithProofs`

***

### setPaymentSkillWithProofs()

> **setPaymentSkillWithProofs**(`_id`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as setPaymentSkill, but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_id

`BigNumberish`

Payment identifier

##### \_skillId

`BigNumberish`

Id of the new skill to set

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setPaymentSkillWithProofs`

***

### setRecoveryRole()

> **setRecoveryRole**(`_user`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setRecoveryRole`

***

### setRecoveryRole(address)()

> **setRecoveryRole(address)**(`_user`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setRecoveryRole(address)`

***

### setRewardInverse()

> **setRewardInverse**(`_rewardInverse`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_rewardInverse

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setRewardInverse`

***

### setRewardInverse(uint256)()

> **setRewardInverse(uint256)**(`_rewardInverse`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_rewardInverse

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setRewardInverse(uint256)`

***

### setRootRole()

> **setRootRole**(`_user`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### \_setTo

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setRootRole`

***

### setRootRole(address,bool)()

> **setRootRole(address,bool)**(`_user`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### \_setTo

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setRootRole(address,bool)`

***

### setStorageSlotRecovery()

> **setStorageSlotRecovery**(`_slot`, `_value`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_slot

`BigNumberish`

##### \_value

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setStorageSlotRecovery`

***

### setStorageSlotRecovery(uint256,bytes32)()

> **setStorageSlotRecovery(uint256,bytes32)**(`_slot`, `_value`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_slot

`BigNumberish`

##### \_value

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setStorageSlotRecovery(uint256,bytes32)`

***

### setUserRoles()

> **setUserRoles**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_roles`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_roles

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setUserRoles`

***

### setUserRoles(uint256,uint256,address,uint256,bytes32)()

> **setUserRoles(uint256,uint256,address,uint256,bytes32)**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_roles`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_roles

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setUserRoles(uint256,uint256,address,uint256,bytes32)`

***

### setUserRolesWithProofs()

> **setUserRolesWithProofs**(`_user`, `_domainId`, `_roles`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [setUserRoles](ColonyClientV16.md#setuserroles), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_user

`string`

User we want to give a role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_roles

`BytesLike`

Byte array representing the desired role setting (1 for on, 0 for off)

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV5.setUserRolesWithProofs`

***

### startNextRewardPayout()

> **startNextRewardPayout**(`_token`, `key`, `value`, `branchMask`, `siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### key

`BytesLike`

##### value

`BytesLike`

##### branchMask

`BigNumberish`

##### siblings

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.startNextRewardPayout`

***

### startNextRewardPayout(address,bytes,bytes,uint256,bytes32\[\])()

> **startNextRewardPayout(address,bytes,bytes,uint256,bytes32\[\])**(`_token`, `key`, `value`, `branchMask`, `siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### key

`BytesLike`

##### value

`BytesLike`

##### branchMask

`BigNumberish`

##### siblings

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.startNextRewardPayout(address,bytes,bytes,uint256,bytes32[])`

***

### transferExpenditure()

> **transferExpenditure**(`_id`, `_newOwner`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_newOwner

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.transferExpenditure`

***

### transferExpenditure(uint256,address)()

> **transferExpenditure(uint256,address)**(`_id`, `_newOwner`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### \_newOwner

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.transferExpenditure(uint256,address)`

***

### transferExpenditureViaArbitration()

> **transferExpenditureViaArbitration**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_newOwner`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### \_newOwner

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.transferExpenditureViaArbitration`

***

### transferExpenditureViaArbitration(uint256,uint256,uint256,address)()

> **transferExpenditureViaArbitration(uint256,uint256,uint256,address)**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_newOwner`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### \_newOwner

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.transferExpenditureViaArbitration(uint256,uint256,uint256,address)`

***

### ~~transferExpenditureViaArbitrationWithProofs()~~

> **transferExpenditureViaArbitrationWithProofs**(`_id`, `_newOwner`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_newOwner

`string`

New owner of expenditure

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Deprecated

Same as [transferExpenditureViaArbitration](ColonyClientV16.md#transferexpenditureviaarbitration), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Inherited from

`ColonyAugmentsV4.transferExpenditureViaArbitrationWithProofs`

***

### transferStake()

> **transferStake**(`_permissionDomainId`, `_childSkillIndex`, `_obligator`, `_user`, `_domainId`, `_amount`, `_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_obligator

`string`

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_amount

`BigNumberish`

##### \_recipient

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.transferStake`

***

### transferStake(uint256,uint256,address,address,uint256,uint256,address)()

> **transferStake(uint256,uint256,address,address,uint256,uint256,address)**(`_permissionDomainId`, `_childSkillIndex`, `_obligator`, `_user`, `_domainId`, `_amount`, `_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_obligator

`string`

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_amount

`BigNumberish`

##### \_recipient

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.transferStake(uint256,uint256,address,address,uint256,uint256,address)`

***

### transferStakeWithProofs()

> **transferStakeWithProofs**(`_obligator`, `_user`, `_domainId`, `_amount`, `_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [transferStake](ColonyClientV16.md#transferstake), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_obligator

`string`

Address of the account who set the obligation.

##### \_user

`string`

Address of the account we are transferring.

##### \_domainId

`BigNumberish`

Domain in which we are transferring the tokens.

##### \_amount

`BigNumberish`

Amount of internal token we are transferring.

##### \_recipient

`string`

Recipient of the transferred tokens.

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV5.transferStakeWithProofs`

***

### uninstallExtension()

> **uninstallExtension**(`extensionId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### extensionId

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.uninstallExtension`

***

### uninstallExtension(bytes32)()

> **uninstallExtension(bytes32)**(`extensionId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### extensionId

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.uninstallExtension(bytes32)`

***

### unlockToken()

> **unlockToken**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.unlockToken`

***

### unlockToken()()

> **unlockToken()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.unlockToken()`

***

### unlockTokenForUser()

> **unlockTokenForUser**(`user`, `lockId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### user

`string`

##### lockId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.unlockTokenForUser`

***

### unlockTokenForUser(address,uint256)()

> **unlockTokenForUser(address,uint256)**(`user`, `lockId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### user

`string`

##### lockId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.unlockTokenForUser(address,uint256)`

***

### updateApprovalAmount()

> **updateApprovalAmount**(`token`, `spender`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### token

`string`

##### spender

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.updateApprovalAmount`

***

### updateApprovalAmount(address,address)()

> **updateApprovalAmount(address,address)**(`token`, `spender`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### token

`string`

##### spender

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.updateApprovalAmount(address,address)`

***

### updateColonyOrbitDB()

> **updateColonyOrbitDB**(`orbitdb`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### orbitdb

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.updateColonyOrbitDB`

***

### updateColonyOrbitDB(string)()

> **updateColonyOrbitDB(string)**(`orbitdb`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### orbitdb

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.updateColonyOrbitDB(string)`

***

### upgrade()

> **upgrade**(`_newVersion`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_newVersion

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.upgrade`

***

### upgrade(uint256)()

> **upgrade(uint256)**(`_newVersion`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_newVersion

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.upgrade(uint256)`

***

### upgradeExtension()

> **upgradeExtension**(`extensionId`, `newVersion`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### extensionId

`BytesLike`

##### newVersion

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.upgradeExtension`

***

### upgradeExtension(bytes32,uint256)()

> **upgradeExtension(bytes32,uint256)**(`extensionId`, `newVersion`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### extensionId

`BytesLike`

##### newVersion

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.upgradeExtension(bytes32,uint256)`

***

### upgradeExtensionChecked()

> **upgradeExtensionChecked**(`extension`, `newVersion`?, `overrides`?): `Promise`\<`ContractTransaction`\>

Similar to [upgradeExtension](ColonyClientV16.md#upgradeextension), but first check whether the desired extension can be upgraded to the desired version in this Colony
Always prefer this method, except when you have good reason not to.

#### Parameters

##### extension

[`Extension`](../enumerations/Extension.md)

A [Extension](../enumerations/Extension.md) name

##### newVersion?

`number`

The desired version number of the extension you wish to upgrade

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV5.upgradeExtensionChecked`

***

### userCanSetRoles()

> **userCanSetRoles**(`_user`, `_domainId`, `_childSkillIndex`, `_childDomainId`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_childDomainId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.userCanSetRoles`

***

### userCanSetRoles(address,uint256,uint256,uint256)()

> **userCanSetRoles(address,uint256,uint256,uint256)**(`_user`, `_domainId`, `_childSkillIndex`, `_childDomainId`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_childDomainId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.userCanSetRoles(address,uint256,uint256,uint256)`

***

### validateDomainInheritance()

> **validateDomainInheritance**(`_permissionDomainId`, `_childSkillIndex`, `_childDomainId`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_childDomainId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.validateDomainInheritance`

***

### validateDomainInheritance(uint256,uint256,uint256)()

> **validateDomainInheritance(uint256,uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_childDomainId`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_childDomainId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.validateDomainInheritance(uint256,uint256,uint256)`

***

### verifyReputationProof()

> **verifyReputationProof**(`key`, `value`, `branchMask`, `siblings`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### key

`BytesLike`

##### value

`BytesLike`

##### branchMask

`BigNumberish`

##### siblings

`BytesLike`[]

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.verifyReputationProof`

***

### verifyReputationProof(bytes,bytes,uint256,bytes32\[\])()

> **verifyReputationProof(bytes,bytes,uint256,bytes32\[\])**(`key`, `value`, `branchMask`, `siblings`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### key

`BytesLike`

##### value

`BytesLike`

##### branchMask

`BigNumberish`

##### siblings

`BytesLike`[]

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.verifyReputationProof(bytes,bytes,uint256,bytes32[])`

***

### version()

> **version**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.version`

***

### version()()

> **version()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.version()`
