# Interface: StagedExpenditureEvents

## Extends

- `BaseContract`

## Properties

### \_deployedPromise

> **\_deployedPromise**: `Promise`\<`Contract`\>

#### Inherited from

`BaseContract._deployedPromise`

***

### \_runningEvents

> **\_runningEvents**: `object`

#### Index Signature

\[`eventTag`: `string`\]: `RunningEvent`

#### Inherited from

`BaseContract._runningEvents`

***

### \_wrappedEmits

> **\_wrappedEmits**: `object`

#### Index Signature

\[`eventTag`: `string`\]: (...`args`) => `void`

#### Inherited from

`BaseContract._wrappedEmits`

***

### address

> `readonly` **address**: `string`

#### Inherited from

`BaseContract.address`

***

### callStatic

> **callStatic**: `object`

#### Overrides

`BaseContract.callStatic`

***

### deployTransaction

> `readonly` **deployTransaction**: [`TransactionResponse`](../../../interfaces/TransactionResponse.md)

#### Inherited from

`BaseContract.deployTransaction`

***

### estimateGas

> **estimateGas**: `object`

#### Overrides

`BaseContract.estimateGas`

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

[`AnnotationEventFilter`](../type-aliases/AnnotationEventFilter.md)

#### Annotation(address,bytes32,string)()

##### Parameters

###### agent?

`null` | `string`

###### txHash?

`null` | `BytesLike`

###### metadata?

`null`

##### Returns

[`AnnotationEventFilter`](../type-aliases/AnnotationEventFilter.md)

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

[`ArbitraryReputationUpdateEventFilter`](../type-aliases/ArbitraryReputationUpdateEventFilter.md)

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

[`ArbitraryReputationUpdateEventFilter`](../type-aliases/ArbitraryReputationUpdateEventFilter.md)

#### ArbitraryTransaction(address,address,bytes,bool)()

##### Parameters

###### agent?

`null`

###### target?

`null`

###### data?

`null`

###### success?

`null`

##### Returns

[`ArbitraryTransaction_address_address_bytes_bool_EventFilter`](../type-aliases/ArbitraryTransaction_address_address_bytes_bool_EventFilter.md)

#### ArbitraryTransaction(address,bytes,bool)()

##### Parameters

###### target?

`null`

###### data?

`null`

###### success?

`null`

##### Returns

[`ArbitraryTransaction_address_bytes_bool_EventFilter`](../type-aliases/ArbitraryTransaction_address_bytes_bool_EventFilter.md)

#### ColonyBootstrapped()

##### Parameters

###### agent?

`null`

###### users?

`null`

###### amounts?

`null`

##### Returns

[`ColonyBootstrappedEventFilter`](../type-aliases/ColonyBootstrappedEventFilter.md)

#### ColonyBootstrapped(address,address\[\],int256\[\])()

##### Parameters

###### agent?

`null`

###### users?

`null`

###### amounts?

`null`

##### Returns

[`ColonyBootstrappedEventFilter`](../type-aliases/ColonyBootstrappedEventFilter.md)

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

[`ColonyFundsClaimedEventFilter`](../type-aliases/ColonyFundsClaimedEventFilter.md)

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

[`ColonyFundsClaimedEventFilter`](../type-aliases/ColonyFundsClaimedEventFilter.md)

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

[`ColonyFundsMovedBetweenFundingPotsEventFilter`](../type-aliases/ColonyFundsMovedBetweenFundingPotsEventFilter.md)

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

[`ColonyFundsMovedBetweenFundingPotsEventFilter`](../type-aliases/ColonyFundsMovedBetweenFundingPotsEventFilter.md)

#### ColonyInitialised()

##### Parameters

###### agent?

`null`

###### colonyNetwork?

`null`

###### token?

`null`

##### Returns

[`ColonyInitialisedEventFilter`](../type-aliases/ColonyInitialisedEventFilter.md)

#### ColonyInitialised(address,address,address)()

##### Parameters

###### agent?

`null`

###### colonyNetwork?

`null`

###### token?

`null`

##### Returns

[`ColonyInitialisedEventFilter`](../type-aliases/ColonyInitialisedEventFilter.md)

#### ColonyMetadata()

##### Parameters

###### agent?

`null`

###### metadata?

`null`

##### Returns

[`ColonyMetadataEventFilter`](../type-aliases/ColonyMetadataEventFilter.md)

#### ColonyMetadata(address,string)()

##### Parameters

###### agent?

`null`

###### metadata?

`null`

##### Returns

[`ColonyMetadataEventFilter`](../type-aliases/ColonyMetadataEventFilter.md)

#### ColonyMetadataDelta()

##### Parameters

###### agent?

`null`

###### metadata?

`null`

##### Returns

[`ColonyMetadataDeltaEventFilter`](../type-aliases/ColonyMetadataDeltaEventFilter.md)

#### ColonyMetadataDelta(address,string)()

##### Parameters

###### agent?

`null`

###### metadata?

`null`

##### Returns

[`ColonyMetadataDeltaEventFilter`](../type-aliases/ColonyMetadataDeltaEventFilter.md)

#### ColonyRewardInverseSet()

##### Parameters

###### agent?

`null`

###### rewardInverse?

`null`

##### Returns

[`ColonyRewardInverseSetEventFilter`](../type-aliases/ColonyRewardInverseSetEventFilter.md)

#### ColonyRewardInverseSet(address,uint256)()

##### Parameters

###### agent?

`null`

###### rewardInverse?

`null`

##### Returns

[`ColonyRewardInverseSetEventFilter`](../type-aliases/ColonyRewardInverseSetEventFilter.md)

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

[`ColonyRoleSetEventFilter`](../type-aliases/ColonyRoleSetEventFilter.md)

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

[`ColonyRoleSetEventFilter`](../type-aliases/ColonyRoleSetEventFilter.md)

#### ColonyUpgraded()

##### Parameters

###### agent?

`null`

###### oldVersion?

`null`

###### newVersion?

`null`

##### Returns

[`ColonyUpgradedEventFilter`](../type-aliases/ColonyUpgradedEventFilter.md)

#### ColonyUpgraded(address,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### oldVersion?

`null`

###### newVersion?

`null`

##### Returns

[`ColonyUpgradedEventFilter`](../type-aliases/ColonyUpgradedEventFilter.md)

#### DomainAdded()

##### Parameters

###### agent?

`null`

###### domainId?

`null`

##### Returns

[`DomainAddedEventFilter`](../type-aliases/DomainAddedEventFilter.md)

#### DomainAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### domainId?

`null`

##### Returns

[`DomainAddedEventFilter`](../type-aliases/DomainAddedEventFilter.md)

#### DomainDeprecated()

##### Parameters

###### agent?

`null`

###### domainId?

`null` | `BigNumberish`

###### deprecated?

`null`

##### Returns

[`DomainDeprecatedEventFilter`](../type-aliases/DomainDeprecatedEventFilter.md)

#### DomainDeprecated(address,uint256,bool)()

##### Parameters

###### agent?

`null`

###### domainId?

`null` | `BigNumberish`

###### deprecated?

`null`

##### Returns

[`DomainDeprecatedEventFilter`](../type-aliases/DomainDeprecatedEventFilter.md)

#### DomainMetadata()

##### Parameters

###### agent?

`null`

###### domainId?

`null` | `BigNumberish`

###### metadata?

`null`

##### Returns

[`DomainMetadataEventFilter`](../type-aliases/DomainMetadataEventFilter.md)

#### DomainMetadata(address,uint256,string)()

##### Parameters

###### agent?

`null`

###### domainId?

`null` | `BigNumberish`

###### metadata?

`null`

##### Returns

[`DomainMetadataEventFilter`](../type-aliases/DomainMetadataEventFilter.md)

#### ExpenditureAdded()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null`

##### Returns

[`ExpenditureAddedEventFilter`](../type-aliases/ExpenditureAddedEventFilter.md)

#### ExpenditureAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null`

##### Returns

[`ExpenditureAddedEventFilter`](../type-aliases/ExpenditureAddedEventFilter.md)

#### ExpenditureCancelled()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

[`ExpenditureCancelledEventFilter`](../type-aliases/ExpenditureCancelledEventFilter.md)

#### ExpenditureCancelled(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

[`ExpenditureCancelledEventFilter`](../type-aliases/ExpenditureCancelledEventFilter.md)

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

[`ExpenditureClaimDelaySetEventFilter`](../type-aliases/ExpenditureClaimDelaySetEventFilter.md)

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

[`ExpenditureClaimDelaySetEventFilter`](../type-aliases/ExpenditureClaimDelaySetEventFilter.md)

#### ExpenditureFinalized()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

[`ExpenditureFinalizedEventFilter`](../type-aliases/ExpenditureFinalizedEventFilter.md)

#### ExpenditureFinalized(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

[`ExpenditureFinalizedEventFilter`](../type-aliases/ExpenditureFinalizedEventFilter.md)

#### ExpenditureGlobalClaimDelaySet()

##### Parameters

###### agent?

`null`

###### globalClaimDelay?

`null`

##### Returns

[`ExpenditureGlobalClaimDelaySetEventFilter`](../type-aliases/ExpenditureGlobalClaimDelaySetEventFilter.md)

#### ExpenditureGlobalClaimDelaySet(address,uint256)()

##### Parameters

###### agent?

`null`

###### globalClaimDelay?

`null`

##### Returns

[`ExpenditureGlobalClaimDelaySetEventFilter`](../type-aliases/ExpenditureGlobalClaimDelaySetEventFilter.md)

#### ExpenditureLocked()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

[`ExpenditureLockedEventFilter`](../type-aliases/ExpenditureLockedEventFilter.md)

#### ExpenditureLocked(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

[`ExpenditureLockedEventFilter`](../type-aliases/ExpenditureLockedEventFilter.md)

#### ExpenditureMadeStaged(address,uint256,bool)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### staged?

`null`

##### Returns

[`ExpenditureMadeStaged_address_uint256_bool_EventFilter`](../type-aliases/ExpenditureMadeStaged_address_uint256_bool_EventFilter.md)

#### ExpenditureMadeStaged(uint256,bool)()

##### Parameters

###### expenditureId?

`null` | `BigNumberish`

###### staged?

`null`

##### Returns

[`ExpenditureMadeStaged_uint256_bool_EventFilter`](../type-aliases/ExpenditureMadeStaged_uint256_bool_EventFilter.md)

#### ExpenditureMetadataSet()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### metadata?

`null`

##### Returns

[`ExpenditureMetadataSetEventFilter`](../type-aliases/ExpenditureMetadataSetEventFilter.md)

#### ExpenditureMetadataSet(address,uint256,string)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### metadata?

`null`

##### Returns

[`ExpenditureMetadataSetEventFilter`](../type-aliases/ExpenditureMetadataSetEventFilter.md)

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

[`ExpenditurePayoutModifierSetEventFilter`](../type-aliases/ExpenditurePayoutModifierSetEventFilter.md)

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

[`ExpenditurePayoutModifierSetEventFilter`](../type-aliases/ExpenditurePayoutModifierSetEventFilter.md)

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

[`ExpenditurePayoutSetEventFilter`](../type-aliases/ExpenditurePayoutSetEventFilter.md)

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

[`ExpenditurePayoutSetEventFilter`](../type-aliases/ExpenditurePayoutSetEventFilter.md)

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

[`ExpenditureRecipientSetEventFilter`](../type-aliases/ExpenditureRecipientSetEventFilter.md)

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

[`ExpenditureRecipientSetEventFilter`](../type-aliases/ExpenditureRecipientSetEventFilter.md)

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

[`ExpenditureSkillSetEventFilter`](../type-aliases/ExpenditureSkillSetEventFilter.md)

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

[`ExpenditureSkillSetEventFilter`](../type-aliases/ExpenditureSkillSetEventFilter.md)

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

[`ExpenditureStateChangedEventFilter`](../type-aliases/ExpenditureStateChangedEventFilter.md)

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

[`ExpenditureStateChangedEventFilter`](../type-aliases/ExpenditureStateChangedEventFilter.md)

#### ExpenditureTransferred()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### owner?

`null` | `string`

##### Returns

[`ExpenditureTransferredEventFilter`](../type-aliases/ExpenditureTransferredEventFilter.md)

#### ExpenditureTransferred(address,uint256,address)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### owner?

`null` | `string`

##### Returns

[`ExpenditureTransferredEventFilter`](../type-aliases/ExpenditureTransferredEventFilter.md)

#### ExtensionInitialised()

##### Returns

[`ExtensionInitialisedEventFilter`](../type-aliases/ExtensionInitialisedEventFilter.md)

#### ExtensionInitialised()()

##### Returns

[`ExtensionInitialisedEventFilter`](../type-aliases/ExtensionInitialisedEventFilter.md)

#### FundingPotAdded()

##### Parameters

###### fundingPotId?

`null`

##### Returns

[`FundingPotAddedEventFilter`](../type-aliases/FundingPotAddedEventFilter.md)

#### FundingPotAdded(uint256)()

##### Parameters

###### fundingPotId?

`null`

##### Returns

[`FundingPotAddedEventFilter`](../type-aliases/FundingPotAddedEventFilter.md)

#### LocalSkillAdded()

##### Parameters

###### agent?

`null`

###### localSkillId?

`null`

##### Returns

[`LocalSkillAddedEventFilter`](../type-aliases/LocalSkillAddedEventFilter.md)

#### LocalSkillAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### localSkillId?

`null`

##### Returns

[`LocalSkillAddedEventFilter`](../type-aliases/LocalSkillAddedEventFilter.md)

#### LocalSkillDeprecated()

##### Parameters

###### agent?

`null`

###### localSkillId?

`null`

###### deprecated?

`null`

##### Returns

[`LocalSkillDeprecatedEventFilter`](../type-aliases/LocalSkillDeprecatedEventFilter.md)

#### LocalSkillDeprecated(address,uint256,bool)()

##### Parameters

###### agent?

`null`

###### localSkillId?

`null`

###### deprecated?

`null`

##### Returns

[`LocalSkillDeprecatedEventFilter`](../type-aliases/LocalSkillDeprecatedEventFilter.md)

#### LogSetAuthority()

##### Parameters

###### authority?

`null` | `string`

##### Returns

[`LogSetAuthorityEventFilter`](../type-aliases/LogSetAuthorityEventFilter.md)

#### LogSetAuthority(address)()

##### Parameters

###### authority?

`null` | `string`

##### Returns

[`LogSetAuthorityEventFilter`](../type-aliases/LogSetAuthorityEventFilter.md)

#### LogSetOwner()

##### Parameters

###### owner?

`null` | `string`

##### Returns

[`LogSetOwnerEventFilter`](../type-aliases/LogSetOwnerEventFilter.md)

#### LogSetOwner(address)()

##### Parameters

###### owner?

`null` | `string`

##### Returns

[`LogSetOwnerEventFilter`](../type-aliases/LogSetOwnerEventFilter.md)

#### MetaTransactionExecuted()

##### Parameters

###### user?

`null`

###### relayerAddress?

`null`

###### functionSignature?

`null`

##### Returns

[`MetaTransactionExecutedEventFilter`](../type-aliases/MetaTransactionExecutedEventFilter.md)

#### MetaTransactionExecuted(address,address,bytes)()

##### Parameters

###### user?

`null`

###### relayerAddress?

`null`

###### functionSignature?

`null`

##### Returns

[`MetaTransactionExecutedEventFilter`](../type-aliases/MetaTransactionExecutedEventFilter.md)

#### PaymentAdded()

##### Parameters

###### agent?

`null`

###### paymentId?

`null`

##### Returns

[`PaymentAddedEventFilter`](../type-aliases/PaymentAddedEventFilter.md)

#### PaymentAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null`

##### Returns

[`PaymentAddedEventFilter`](../type-aliases/PaymentAddedEventFilter.md)

#### PaymentFinalized()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

##### Returns

[`PaymentFinalizedEventFilter`](../type-aliases/PaymentFinalizedEventFilter.md)

#### PaymentFinalized(address,uint256)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

##### Returns

[`PaymentFinalizedEventFilter`](../type-aliases/PaymentFinalizedEventFilter.md)

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

[`PaymentPayoutSetEventFilter`](../type-aliases/PaymentPayoutSetEventFilter.md)

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

[`PaymentPayoutSetEventFilter`](../type-aliases/PaymentPayoutSetEventFilter.md)

#### PaymentRecipientSet()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### recipient?

`null`

##### Returns

[`PaymentRecipientSetEventFilter`](../type-aliases/PaymentRecipientSetEventFilter.md)

#### PaymentRecipientSet(address,uint256,address)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### recipient?

`null`

##### Returns

[`PaymentRecipientSetEventFilter`](../type-aliases/PaymentRecipientSetEventFilter.md)

#### PaymentSkillSet()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### skillId?

`null`

##### Returns

[`PaymentSkillSetEventFilter`](../type-aliases/PaymentSkillSetEventFilter.md)

#### PaymentSkillSet(address,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### skillId?

`null`

##### Returns

[`PaymentSkillSetEventFilter`](../type-aliases/PaymentSkillSetEventFilter.md)

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

[`PayoutClaimed_address_uint256_address_uint256_EventFilter`](../type-aliases/PayoutClaimed_address_uint256_address_uint256_EventFilter.md)

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

[`PayoutClaimed_address_uint256_uint256_address_uint256_EventFilter`](../type-aliases/PayoutClaimed_address_uint256_uint256_address_uint256_EventFilter.md)

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

[`RewardPayoutClaimedEventFilter`](../type-aliases/RewardPayoutClaimedEventFilter.md)

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

[`RewardPayoutClaimedEventFilter`](../type-aliases/RewardPayoutClaimedEventFilter.md)

#### RewardPayoutCycleEnded()

##### Parameters

###### agent?

`null`

###### rewardPayoutId?

`null`

##### Returns

[`RewardPayoutCycleEndedEventFilter`](../type-aliases/RewardPayoutCycleEndedEventFilter.md)

#### RewardPayoutCycleEnded(address,uint256)()

##### Parameters

###### agent?

`null`

###### rewardPayoutId?

`null`

##### Returns

[`RewardPayoutCycleEndedEventFilter`](../type-aliases/RewardPayoutCycleEndedEventFilter.md)

#### RewardPayoutCycleStarted()

##### Parameters

###### agent?

`null`

###### rewardPayoutId?

`null`

##### Returns

[`RewardPayoutCycleStartedEventFilter`](../type-aliases/RewardPayoutCycleStartedEventFilter.md)

#### RewardPayoutCycleStarted(address,uint256)()

##### Parameters

###### agent?

`null`

###### rewardPayoutId?

`null`

##### Returns

[`RewardPayoutCycleStartedEventFilter`](../type-aliases/RewardPayoutCycleStartedEventFilter.md)

#### StagedPaymentReleased(address,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null`

##### Returns

[`StagedPaymentReleased_address_uint256_uint256_EventFilter`](../type-aliases/StagedPaymentReleased_address_uint256_uint256_EventFilter.md)

#### StagedPaymentReleased(uint256,uint256)()

##### Parameters

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null`

##### Returns

[`StagedPaymentReleased_uint256_uint256_EventFilter`](../type-aliases/StagedPaymentReleased_uint256_uint256_EventFilter.md)

#### TaskAdded()

##### Parameters

###### agent?

`null`

###### taskId?

`null`

##### Returns

[`TaskAddedEventFilter`](../type-aliases/TaskAddedEventFilter.md)

#### TaskAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### taskId?

`null`

##### Returns

[`TaskAddedEventFilter`](../type-aliases/TaskAddedEventFilter.md)

#### TaskBriefSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### specificationHash?

`null`

##### Returns

[`TaskBriefSetEventFilter`](../type-aliases/TaskBriefSetEventFilter.md)

#### TaskBriefSet(uint256,bytes32)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### specificationHash?

`null`

##### Returns

[`TaskBriefSetEventFilter`](../type-aliases/TaskBriefSetEventFilter.md)

#### TaskCanceled()

##### Parameters

###### taskId?

`null` | `BigNumberish`

##### Returns

[`TaskCanceledEventFilter`](../type-aliases/TaskCanceledEventFilter.md)

#### TaskCanceled(uint256)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

##### Returns

[`TaskCanceledEventFilter`](../type-aliases/TaskCanceledEventFilter.md)

#### TaskChangedViaSignatures()

##### Parameters

###### reviewerAddresses?

`null`

##### Returns

[`TaskChangedViaSignaturesEventFilter`](../type-aliases/TaskChangedViaSignaturesEventFilter.md)

#### TaskChangedViaSignatures(address\[\])()

##### Parameters

###### reviewerAddresses?

`null`

##### Returns

[`TaskChangedViaSignaturesEventFilter`](../type-aliases/TaskChangedViaSignaturesEventFilter.md)

#### TaskCompleted()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

##### Returns

[`TaskCompletedEventFilter`](../type-aliases/TaskCompletedEventFilter.md)

#### TaskCompleted(address,uint256)()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

##### Returns

[`TaskCompletedEventFilter`](../type-aliases/TaskCompletedEventFilter.md)

#### TaskDeliverableSubmitted()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

###### deliverableHash?

`null`

##### Returns

[`TaskDeliverableSubmittedEventFilter`](../type-aliases/TaskDeliverableSubmittedEventFilter.md)

#### TaskDeliverableSubmitted(address,uint256,bytes32)()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

###### deliverableHash?

`null`

##### Returns

[`TaskDeliverableSubmittedEventFilter`](../type-aliases/TaskDeliverableSubmittedEventFilter.md)

#### TaskDueDateSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### dueDate?

`null`

##### Returns

[`TaskDueDateSetEventFilter`](../type-aliases/TaskDueDateSetEventFilter.md)

#### TaskDueDateSet(uint256,uint256)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### dueDate?

`null`

##### Returns

[`TaskDueDateSetEventFilter`](../type-aliases/TaskDueDateSetEventFilter.md)

#### TaskFinalized()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

##### Returns

[`TaskFinalizedEventFilter`](../type-aliases/TaskFinalizedEventFilter.md)

#### TaskFinalized(address,uint256)()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

##### Returns

[`TaskFinalizedEventFilter`](../type-aliases/TaskFinalizedEventFilter.md)

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

[`TaskPayoutSetEventFilter`](../type-aliases/TaskPayoutSetEventFilter.md)

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

[`TaskPayoutSetEventFilter`](../type-aliases/TaskPayoutSetEventFilter.md)

#### TaskRoleUserSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### user?

`null` | `string`

##### Returns

[`TaskRoleUserSetEventFilter`](../type-aliases/TaskRoleUserSetEventFilter.md)

#### TaskRoleUserSet(uint256,uint8,address)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### user?

`null` | `string`

##### Returns

[`TaskRoleUserSetEventFilter`](../type-aliases/TaskRoleUserSetEventFilter.md)

#### TaskSkillSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### skillId?

`null` | `BigNumberish`

##### Returns

[`TaskSkillSetEventFilter`](../type-aliases/TaskSkillSetEventFilter.md)

#### TaskSkillSet(uint256,uint256)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### skillId?

`null` | `BigNumberish`

##### Returns

[`TaskSkillSetEventFilter`](../type-aliases/TaskSkillSetEventFilter.md)

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

[`TaskWorkRatingRevealedEventFilter`](../type-aliases/TaskWorkRatingRevealedEventFilter.md)

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

[`TaskWorkRatingRevealedEventFilter`](../type-aliases/TaskWorkRatingRevealedEventFilter.md)

#### TokensBurned()

##### Parameters

###### agent?

`null`

###### token?

`null`

###### amount?

`null`

##### Returns

[`TokensBurnedEventFilter`](../type-aliases/TokensBurnedEventFilter.md)

#### TokensBurned(address,address,uint256)()

##### Parameters

###### agent?

`null`

###### token?

`null`

###### amount?

`null`

##### Returns

[`TokensBurnedEventFilter`](../type-aliases/TokensBurnedEventFilter.md)

#### TokensMinted()

##### Parameters

###### agent?

`null`

###### who?

`null`

###### amount?

`null`

##### Returns

[`TokensMintedEventFilter`](../type-aliases/TokensMintedEventFilter.md)

#### TokensMinted(address,address,uint256)()

##### Parameters

###### agent?

`null`

###### who?

`null`

###### amount?

`null`

##### Returns

[`TokensMintedEventFilter`](../type-aliases/TokensMintedEventFilter.md)

#### TokenUnlocked()

##### Parameters

###### agent?

`null`

##### Returns

[`TokenUnlockedEventFilter`](../type-aliases/TokenUnlockedEventFilter.md)

#### TokenUnlocked(address)()

##### Parameters

###### agent?

`null`

##### Returns

[`TokenUnlockedEventFilter`](../type-aliases/TokenUnlockedEventFilter.md)

#### Overrides

`BaseContract.filters`

***

### functions

> **functions**: `object`

#### Overrides

`BaseContract.functions`

***

### interface

> **interface**: [`StagedExpenditureEventsInterface`](StagedExpenditureEventsInterface.md)

#### Overrides

`BaseContract.interface`

***

### off

> **off**: `OnEvent`\<[`StagedExpenditureEvents`](StagedExpenditureEvents.md)\>

#### Overrides

`BaseContract.off`

***

### on

> **on**: `OnEvent`\<[`StagedExpenditureEvents`](StagedExpenditureEvents.md)\>

#### Overrides

`BaseContract.on`

***

### once

> **once**: `OnEvent`\<[`StagedExpenditureEvents`](StagedExpenditureEvents.md)\>

#### Overrides

`BaseContract.once`

***

### populateTransaction

> **populateTransaction**: `object`

#### Overrides

`BaseContract.populateTransaction`

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

`BaseContract.provider`

***

### removeListener

> **removeListener**: `OnEvent`\<[`StagedExpenditureEvents`](StagedExpenditureEvents.md)\>

#### Overrides

`BaseContract.removeListener`

***

### resolvedAddress

> `readonly` **resolvedAddress**: `Promise`\<`string`\>

#### Inherited from

`BaseContract.resolvedAddress`

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

`BaseContract.signer`

## Methods

### \_checkRunningEvents()

> **\_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

##### runningEvent

`RunningEvent`

#### Returns

`void`

#### Inherited from

`BaseContract._checkRunningEvents`

***

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<`Contract`\>

#### Parameters

##### blockTag?

`BlockTag`

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`BaseContract._deployed`

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

`BaseContract._wrapEvent`

***

### attach()

> **attach**(`addressOrName`): `this`

#### Parameters

##### addressOrName

`string`

#### Returns

`this`

#### Overrides

`BaseContract.attach`

***

### connect()

> **connect**(`signerOrProvider`): `this`

#### Parameters

##### signerOrProvider

`string` | `Signer` | `Provider`

#### Returns

`this`

#### Overrides

`BaseContract.connect`

***

### deployed()

> **deployed**(): `Promise`\<[`StagedExpenditureEvents`](StagedExpenditureEvents.md)\>

#### Returns

`Promise`\<[`StagedExpenditureEvents`](StagedExpenditureEvents.md)\>

#### Overrides

`BaseContract.deployed`

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

`BaseContract.emit`

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<[`TransactionResponse`](../../../interfaces/TransactionResponse.md)\>

#### Parameters

##### overrides?

`TransactionRequest`

#### Returns

`Promise`\<[`TransactionResponse`](../../../interfaces/TransactionResponse.md)\>

#### Inherited from

`BaseContract.fallback`

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

##### eventName?

`string` | `EventFilter`

#### Returns

`number`

#### Inherited from

`BaseContract.listenerCount`

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

##### Overrides

`BaseContract.listeners`

#### Call Signature

> **listeners**(`eventName`?): `Listener`[]

##### Parameters

###### eventName?

`string`

##### Returns

`Listener`[]

##### Overrides

`BaseContract.listeners`

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

#### Overrides

`BaseContract.queryFilter`

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

##### Overrides

`BaseContract.removeAllListeners`

#### Call Signature

> **removeAllListeners**(`eventName`?): `this`

##### Parameters

###### eventName?

`string`

##### Returns

`this`

##### Overrides

`BaseContract.removeAllListeners`
