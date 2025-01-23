[**API**](../../../README.md)

***

# Interface: IColonyEvents

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

#### ColonyAdministrationRoleSet()

##### Parameters

###### user?

`null`

###### setTo?

`null`

##### Returns

[`ColonyAdministrationRoleSetEventFilter`](../type-aliases/ColonyAdministrationRoleSetEventFilter.md)

#### ColonyAdministrationRoleSet(address,bool)()

##### Parameters

###### user?

`null`

###### setTo?

`null`

##### Returns

[`ColonyAdministrationRoleSetEventFilter`](../type-aliases/ColonyAdministrationRoleSetEventFilter.md)

#### ColonyArchitectureRoleSet()

##### Parameters

###### user?

`null`

###### setTo?

`null`

##### Returns

[`ColonyArchitectureRoleSetEventFilter`](../type-aliases/ColonyArchitectureRoleSetEventFilter.md)

#### ColonyArchitectureRoleSet(address,bool)()

##### Parameters

###### user?

`null`

###### setTo?

`null`

##### Returns

[`ColonyArchitectureRoleSetEventFilter`](../type-aliases/ColonyArchitectureRoleSetEventFilter.md)

#### ColonyBootstrapped(address,address\[\],int256\[\])()

##### Parameters

###### agent?

`null`

###### users?

`null`

###### amounts?

`null`

##### Returns

[`ColonyBootstrapped_address_address_array_int256_array_EventFilter`](../type-aliases/ColonyBootstrapped_address_address_array_int256_array_EventFilter.md)

#### ColonyBootstrapped(address\[\],int256\[\])()

##### Parameters

###### users?

`null`

###### amounts?

`null`

##### Returns

[`ColonyBootstrapped_address_array_int256_array_EventFilter`](../type-aliases/ColonyBootstrapped_address_array_int256_array_EventFilter.md)

#### ColonyFundingRoleSet()

##### Parameters

###### user?

`null`

###### setTo?

`null`

##### Returns

[`ColonyFundingRoleSetEventFilter`](../type-aliases/ColonyFundingRoleSetEventFilter.md)

#### ColonyFundingRoleSet(address,bool)()

##### Parameters

###### user?

`null`

###### setTo?

`null`

##### Returns

[`ColonyFundingRoleSetEventFilter`](../type-aliases/ColonyFundingRoleSetEventFilter.md)

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

[`ColonyFundsClaimed_address_address_uint256_uint256_EventFilter`](../type-aliases/ColonyFundsClaimed_address_address_uint256_uint256_EventFilter.md)

#### ColonyFundsClaimed(address,uint256,uint256)()

##### Parameters

###### token?

`null`

###### fee?

`null`

###### payoutRemainder?

`null`

##### Returns

[`ColonyFundsClaimed_address_uint256_uint256_EventFilter`](../type-aliases/ColonyFundsClaimed_address_uint256_uint256_EventFilter.md)

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

[`ColonyFundsMovedBetweenFundingPots_address_uint256_uint256_uint256_address_EventFilter`](../type-aliases/ColonyFundsMovedBetweenFundingPots_address_uint256_uint256_uint256_address_EventFilter.md)

#### ColonyFundsMovedBetweenFundingPots(uint256,uint256,uint256,address)()

##### Parameters

###### fromPot?

`null` | `BigNumberish`

###### toPot?

`null` | `BigNumberish`

###### amount?

`null`

###### token?

`null`

##### Returns

[`ColonyFundsMovedBetweenFundingPots_uint256_uint256_uint256_address_EventFilter`](../type-aliases/ColonyFundsMovedBetweenFundingPots_uint256_uint256_uint256_address_EventFilter.md)

#### ColonyInitialised(address,address,address)()

##### Parameters

###### agent?

`null`

###### colonyNetwork?

`null`

###### token?

`null`

##### Returns

[`ColonyInitialised_address_address_address_EventFilter`](../type-aliases/ColonyInitialised_address_address_address_EventFilter.md)

#### ColonyInitialised(address,address)()

##### Parameters

###### colonyNetwork?

`null`

###### token?

`null`

##### Returns

[`ColonyInitialised_address_address_EventFilter`](../type-aliases/ColonyInitialised_address_address_EventFilter.md)

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

#### ColonyRewardInverseSet(address,uint256)()

##### Parameters

###### agent?

`null`

###### rewardInverse?

`null`

##### Returns

[`ColonyRewardInverseSet_address_uint256_EventFilter`](../type-aliases/ColonyRewardInverseSet_address_uint256_EventFilter.md)

#### ColonyRewardInverseSet(uint256)()

##### Parameters

###### rewardInverse?

`null`

##### Returns

[`ColonyRewardInverseSet_uint256_EventFilter`](../type-aliases/ColonyRewardInverseSet_uint256_EventFilter.md)

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

[`ColonyRoleSet_address_address_uint256_uint8_bool_EventFilter`](../type-aliases/ColonyRoleSet_address_address_uint256_uint8_bool_EventFilter.md)

#### ColonyRoleSet(address,uint256,uint8,bool)()

##### Parameters

###### user?

`null` | `string`

###### domainId?

`null` | `BigNumberish`

###### role?

`null` | `BigNumberish`

###### setTo?

`null`

##### Returns

[`ColonyRoleSet_address_uint256_uint8_bool_EventFilter`](../type-aliases/ColonyRoleSet_address_uint256_uint8_bool_EventFilter.md)

#### ColonyRootRoleSet()

##### Parameters

###### user?

`null`

###### setTo?

`null`

##### Returns

[`ColonyRootRoleSetEventFilter`](../type-aliases/ColonyRootRoleSetEventFilter.md)

#### ColonyRootRoleSet(address,bool)()

##### Parameters

###### user?

`null`

###### setTo?

`null`

##### Returns

[`ColonyRootRoleSetEventFilter`](../type-aliases/ColonyRootRoleSetEventFilter.md)

#### ColonyUpgraded(address,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### oldVersion?

`null`

###### newVersion?

`null`

##### Returns

[`ColonyUpgraded_address_uint256_uint256_EventFilter`](../type-aliases/ColonyUpgraded_address_uint256_uint256_EventFilter.md)

#### ColonyUpgraded(uint256,uint256)()

##### Parameters

###### oldVersion?

`null`

###### newVersion?

`null`

##### Returns

[`ColonyUpgraded_uint256_uint256_EventFilter`](../type-aliases/ColonyUpgraded_uint256_uint256_EventFilter.md)

#### DomainAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### domainId?

`null`

##### Returns

[`DomainAdded_address_uint256_EventFilter`](../type-aliases/DomainAdded_address_uint256_EventFilter.md)

#### DomainAdded(uint256)()

##### Parameters

###### domainId?

`null`

##### Returns

[`DomainAdded_uint256_EventFilter`](../type-aliases/DomainAdded_uint256_EventFilter.md)

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

#### ExpenditureAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null`

##### Returns

[`ExpenditureAdded_address_uint256_EventFilter`](../type-aliases/ExpenditureAdded_address_uint256_EventFilter.md)

#### ExpenditureAdded(uint256)()

##### Parameters

###### expenditureId?

`null`

##### Returns

[`ExpenditureAdded_uint256_EventFilter`](../type-aliases/ExpenditureAdded_uint256_EventFilter.md)

#### ExpenditureCancelled(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

[`ExpenditureCancelled_address_uint256_EventFilter`](../type-aliases/ExpenditureCancelled_address_uint256_EventFilter.md)

#### ExpenditureCancelled(uint256)()

##### Parameters

###### expenditureId?

`null` | `BigNumberish`

##### Returns

[`ExpenditureCancelled_uint256_EventFilter`](../type-aliases/ExpenditureCancelled_uint256_EventFilter.md)

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

#### ExpenditureFinalized(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

[`ExpenditureFinalized_address_uint256_EventFilter`](../type-aliases/ExpenditureFinalized_address_uint256_EventFilter.md)

#### ExpenditureFinalized(uint256)()

##### Parameters

###### expenditureId?

`null` | `BigNumberish`

##### Returns

[`ExpenditureFinalized_uint256_EventFilter`](../type-aliases/ExpenditureFinalized_uint256_EventFilter.md)

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

[`ExpenditurePayoutSet_address_uint256_uint256_address_uint256_EventFilter`](../type-aliases/ExpenditurePayoutSet_address_uint256_uint256_address_uint256_EventFilter.md)

#### ExpenditurePayoutSet(uint256,uint256,address,uint256)()

##### Parameters

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### token?

`null` | `string`

###### amount?

`null`

##### Returns

[`ExpenditurePayoutSet_uint256_uint256_address_uint256_EventFilter`](../type-aliases/ExpenditurePayoutSet_uint256_uint256_address_uint256_EventFilter.md)

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

[`ExpenditureRecipientSet_address_uint256_uint256_address_EventFilter`](../type-aliases/ExpenditureRecipientSet_address_uint256_uint256_address_EventFilter.md)

#### ExpenditureRecipientSet(uint256,uint256,address)()

##### Parameters

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### recipient?

`null` | `string`

##### Returns

[`ExpenditureRecipientSet_uint256_uint256_address_EventFilter`](../type-aliases/ExpenditureRecipientSet_uint256_uint256_address_EventFilter.md)

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

[`ExpenditureSkillSet_address_uint256_uint256_uint256_EventFilter`](../type-aliases/ExpenditureSkillSet_address_uint256_uint256_uint256_EventFilter.md)

#### ExpenditureSkillSet(uint256,uint256,uint256)()

##### Parameters

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### skillId?

`null` | `BigNumberish`

##### Returns

[`ExpenditureSkillSet_uint256_uint256_uint256_EventFilter`](../type-aliases/ExpenditureSkillSet_uint256_uint256_uint256_EventFilter.md)

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

#### ExpenditureTransferred(address,uint256,address)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### owner?

`null` | `string`

##### Returns

[`ExpenditureTransferred_address_uint256_address_EventFilter`](../type-aliases/ExpenditureTransferred_address_uint256_address_EventFilter.md)

#### ExpenditureTransferred(uint256,address)()

##### Parameters

###### expenditureId?

`null` | `BigNumberish`

###### owner?

`null` | `string`

##### Returns

[`ExpenditureTransferred_uint256_address_EventFilter`](../type-aliases/ExpenditureTransferred_uint256_address_EventFilter.md)

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

#### MetaTransactionExecuted()

##### Parameters

###### userAddress?

`null`

###### relayerAddress?

`null`

###### payload?

`null`

##### Returns

[`MetaTransactionExecutedEventFilter`](../type-aliases/MetaTransactionExecutedEventFilter.md)

#### MetaTransactionExecuted(address,address,bytes)()

##### Parameters

###### userAddress?

`null`

###### relayerAddress?

`null`

###### payload?

`null`

##### Returns

[`MetaTransactionExecutedEventFilter`](../type-aliases/MetaTransactionExecutedEventFilter.md)

#### PaymentAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null`

##### Returns

[`PaymentAdded_address_uint256_EventFilter`](../type-aliases/PaymentAdded_address_uint256_EventFilter.md)

#### PaymentAdded(uint256)()

##### Parameters

###### paymentId?

`null`

##### Returns

[`PaymentAdded_uint256_EventFilter`](../type-aliases/PaymentAdded_uint256_EventFilter.md)

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

#### PayoutClaimed(uint256,address,uint256)()

##### Parameters

###### fundingPotId?

`null` | `BigNumberish`

###### token?

`null`

###### amount?

`null`

##### Returns

[`PayoutClaimed_uint256_address_uint256_EventFilter`](../type-aliases/PayoutClaimed_uint256_address_uint256_EventFilter.md)

#### RecoveryModeEntered()

##### Parameters

###### user?

`null`

##### Returns

[`RecoveryModeEnteredEventFilter`](../type-aliases/RecoveryModeEnteredEventFilter.md)

#### RecoveryModeEntered(address)()

##### Parameters

###### user?

`null`

##### Returns

[`RecoveryModeEnteredEventFilter`](../type-aliases/RecoveryModeEnteredEventFilter.md)

#### RecoveryModeExitApproved()

##### Parameters

###### user?

`null`

##### Returns

[`RecoveryModeExitApprovedEventFilter`](../type-aliases/RecoveryModeExitApprovedEventFilter.md)

#### RecoveryModeExitApproved(address)()

##### Parameters

###### user?

`null`

##### Returns

[`RecoveryModeExitApprovedEventFilter`](../type-aliases/RecoveryModeExitApprovedEventFilter.md)

#### RecoveryModeExited()

##### Parameters

###### user?

`null`

##### Returns

[`RecoveryModeExitedEventFilter`](../type-aliases/RecoveryModeExitedEventFilter.md)

#### RecoveryModeExited(address)()

##### Parameters

###### user?

`null`

##### Returns

[`RecoveryModeExitedEventFilter`](../type-aliases/RecoveryModeExitedEventFilter.md)

#### RecoveryRoleSet()

##### Parameters

###### user?

`null` | `string`

###### setTo?

`null`

##### Returns

[`RecoveryRoleSetEventFilter`](../type-aliases/RecoveryRoleSetEventFilter.md)

#### RecoveryRoleSet(address,bool)()

##### Parameters

###### user?

`null` | `string`

###### setTo?

`null`

##### Returns

[`RecoveryRoleSetEventFilter`](../type-aliases/RecoveryRoleSetEventFilter.md)

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

[`RecoveryStorageSlotSetEventFilter`](../type-aliases/RecoveryStorageSlotSetEventFilter.md)

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

[`RecoveryStorageSlotSetEventFilter`](../type-aliases/RecoveryStorageSlotSetEventFilter.md)

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

#### RewardPayoutCycleEnded(address,uint256)()

##### Parameters

###### agent?

`null`

###### rewardPayoutId?

`null`

##### Returns

[`RewardPayoutCycleEnded_address_uint256_EventFilter`](../type-aliases/RewardPayoutCycleEnded_address_uint256_EventFilter.md)

#### RewardPayoutCycleEnded(uint256)()

##### Parameters

###### rewardPayoutId?

`null`

##### Returns

[`RewardPayoutCycleEnded_uint256_EventFilter`](../type-aliases/RewardPayoutCycleEnded_uint256_EventFilter.md)

#### RewardPayoutCycleStarted(address,uint256)()

##### Parameters

###### agent?

`null`

###### rewardPayoutId?

`null`

##### Returns

[`RewardPayoutCycleStarted_address_uint256_EventFilter`](../type-aliases/RewardPayoutCycleStarted_address_uint256_EventFilter.md)

#### RewardPayoutCycleStarted(uint256)()

##### Parameters

###### rewardPayoutId?

`null`

##### Returns

[`RewardPayoutCycleStarted_uint256_EventFilter`](../type-aliases/RewardPayoutCycleStarted_uint256_EventFilter.md)

#### TaskAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### taskId?

`null`

##### Returns

[`TaskAdded_address_uint256_EventFilter`](../type-aliases/TaskAdded_address_uint256_EventFilter.md)

#### TaskAdded(uint256)()

##### Parameters

###### taskId?

`null`

##### Returns

[`TaskAdded_uint256_EventFilter`](../type-aliases/TaskAdded_uint256_EventFilter.md)

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

#### TaskCompleted(address,uint256)()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

##### Returns

[`TaskCompleted_address_uint256_EventFilter`](../type-aliases/TaskCompleted_address_uint256_EventFilter.md)

#### TaskCompleted(uint256)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

##### Returns

[`TaskCompleted_uint256_EventFilter`](../type-aliases/TaskCompleted_uint256_EventFilter.md)

#### TaskDeliverableSubmitted(address,uint256,bytes32)()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

###### deliverableHash?

`null`

##### Returns

[`TaskDeliverableSubmitted_address_uint256_bytes32_EventFilter`](../type-aliases/TaskDeliverableSubmitted_address_uint256_bytes32_EventFilter.md)

#### TaskDeliverableSubmitted(uint256,bytes32)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### deliverableHash?

`null`

##### Returns

[`TaskDeliverableSubmitted_uint256_bytes32_EventFilter`](../type-aliases/TaskDeliverableSubmitted_uint256_bytes32_EventFilter.md)

#### TaskDomainSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### domainId?

`null` | `BigNumberish`

##### Returns

[`TaskDomainSetEventFilter`](../type-aliases/TaskDomainSetEventFilter.md)

#### TaskDomainSet(uint256,uint256)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### domainId?

`null` | `BigNumberish`

##### Returns

[`TaskDomainSetEventFilter`](../type-aliases/TaskDomainSetEventFilter.md)

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

#### TaskFinalized(address,uint256)()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

##### Returns

[`TaskFinalized_address_uint256_EventFilter`](../type-aliases/TaskFinalized_address_uint256_EventFilter.md)

#### TaskFinalized(uint256)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

##### Returns

[`TaskFinalized_uint256_EventFilter`](../type-aliases/TaskFinalized_uint256_EventFilter.md)

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

[`TaskWorkRatingRevealed_address_uint256_uint8_uint8_EventFilter`](../type-aliases/TaskWorkRatingRevealed_address_uint256_uint8_uint8_EventFilter.md)

#### TaskWorkRatingRevealed(uint256,uint8,uint8)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### rating?

`null`

##### Returns

[`TaskWorkRatingRevealed_uint256_uint8_uint8_EventFilter`](../type-aliases/TaskWorkRatingRevealed_uint256_uint8_uint8_EventFilter.md)

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

#### TokenUnlocked()()

##### Returns

[`TokenUnlocked__EventFilter`](../type-aliases/TokenUnlocked__EventFilter.md)

#### TokenUnlocked(address)()

##### Parameters

###### agent?

`null`

##### Returns

[`TokenUnlocked_address_EventFilter`](../type-aliases/TokenUnlocked_address_EventFilter.md)

#### Overrides

`BaseContract.filters`

***

### functions

> **functions**: `object`

#### Overrides

`BaseContract.functions`

***

### interface

> **interface**: [`IColonyEventsInterface`](IColonyEventsInterface.md)

#### Overrides

`BaseContract.interface`

***

### off

> **off**: `OnEvent`\<[`IColonyEvents`](IColonyEvents.md)\>

#### Overrides

`BaseContract.off`

***

### on

> **on**: `OnEvent`\<[`IColonyEvents`](IColonyEvents.md)\>

#### Overrides

`BaseContract.on`

***

### once

> **once**: `OnEvent`\<[`IColonyEvents`](IColonyEvents.md)\>

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

> **removeListener**: `OnEvent`\<[`IColonyEvents`](IColonyEvents.md)\>

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

> **deployed**(): `Promise`\<[`IColonyEvents`](IColonyEvents.md)\>

#### Returns

`Promise`\<[`IColonyEvents`](IColonyEvents.md)\>

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
