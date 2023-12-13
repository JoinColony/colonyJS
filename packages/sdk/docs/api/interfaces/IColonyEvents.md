# Interface: IColonyEvents

## Hierarchy

- `BaseContract`

  ↳ **`IColonyEvents`**

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
| `Annotation` | (`agent?`: ``null`` \| `string`, `txHash?`: ``null`` \| `BytesLike`, `metadata?`: ``null``) => [`AnnotationEventFilter`](../README.md#annotationeventfilter) |
| `Annotation(address,bytes32,string)` | (`agent?`: ``null`` \| `string`, `txHash?`: ``null`` \| `BytesLike`, `metadata?`: ``null``) => [`AnnotationEventFilter`](../README.md#annotationeventfilter) |
| `ArbitraryReputationUpdate` | (`agent?`: ``null``, `user?`: ``null``, `skillId?`: ``null``, `amount?`: ``null``) => [`ArbitraryReputationUpdateEventFilter`](../README.md#arbitraryreputationupdateeventfilter) |
| `ArbitraryReputationUpdate(address,address,uint256,int256)` | (`agent?`: ``null``, `user?`: ``null``, `skillId?`: ``null``, `amount?`: ``null``) => [`ArbitraryReputationUpdateEventFilter`](../README.md#arbitraryreputationupdateeventfilter) |
| `ArbitraryTransaction` | (`target?`: ``null``, `data?`: ``null``, `success?`: ``null``) => [`ArbitraryTransactionEventFilter`](../README.md#arbitrarytransactioneventfilter) |
| `ArbitraryTransaction(address,bytes,bool)` | (`target?`: ``null``, `data?`: ``null``, `success?`: ``null``) => [`ArbitraryTransactionEventFilter`](../README.md#arbitrarytransactioneventfilter) |
| `ColonyAdministrationRoleSet` | (`user?`: ``null``, `setTo?`: ``null``) => [`ColonyAdministrationRoleSetEventFilter`](../README.md#colonyadministrationroleseteventfilter) |
| `ColonyAdministrationRoleSet(address,bool)` | (`user?`: ``null``, `setTo?`: ``null``) => [`ColonyAdministrationRoleSetEventFilter`](../README.md#colonyadministrationroleseteventfilter) |
| `ColonyArchitectureRoleSet` | (`user?`: ``null``, `setTo?`: ``null``) => [`ColonyArchitectureRoleSetEventFilter`](../README.md#colonyarchitectureroleseteventfilter) |
| `ColonyArchitectureRoleSet(address,bool)` | (`user?`: ``null``, `setTo?`: ``null``) => [`ColonyArchitectureRoleSetEventFilter`](../README.md#colonyarchitectureroleseteventfilter) |
| `ColonyBootstrapped(address,address[],int256[])` | (`agent?`: ``null``, `users?`: ``null``, `amounts?`: ``null``) => [`ColonyBootstrapped_address_address_array_int256_array_EventFilter`](../README.md#colonybootstrapped_address_address_array_int256_array_eventfilter) |
| `ColonyBootstrapped(address[],int256[])` | (`users?`: ``null``, `amounts?`: ``null``) => [`ColonyBootstrapped_address_array_int256_array_EventFilter`](../README.md#colonybootstrapped_address_array_int256_array_eventfilter) |
| `ColonyFundingRoleSet` | (`user?`: ``null``, `setTo?`: ``null``) => [`ColonyFundingRoleSetEventFilter`](../README.md#colonyfundingroleseteventfilter) |
| `ColonyFundingRoleSet(address,bool)` | (`user?`: ``null``, `setTo?`: ``null``) => [`ColonyFundingRoleSetEventFilter`](../README.md#colonyfundingroleseteventfilter) |
| `ColonyFundsClaimed(address,address,uint256,uint256)` | (`agent?`: ``null``, `token?`: ``null``, `fee?`: ``null``, `payoutRemainder?`: ``null``) => [`ColonyFundsClaimed_address_address_uint256_uint256_EventFilter`](../README.md#colonyfundsclaimed_address_address_uint256_uint256_eventfilter) |
| `ColonyFundsClaimed(address,uint256,uint256)` | (`token?`: ``null``, `fee?`: ``null``, `payoutRemainder?`: ``null``) => [`ColonyFundsClaimed_address_uint256_uint256_EventFilter`](../README.md#colonyfundsclaimed_address_uint256_uint256_eventfilter) |
| `ColonyFundsMovedBetweenFundingPots(address,uint256,uint256,uint256,address)` | (`agent?`: ``null``, `fromPot?`: ``null`` \| `BigNumberish`, `toPot?`: ``null`` \| `BigNumberish`, `amount?`: ``null``, `token?`: ``null``) => [`ColonyFundsMovedBetweenFundingPots_address_uint256_uint256_uint256_address_EventFilter`](../README.md#colonyfundsmovedbetweenfundingpots_address_uint256_uint256_uint256_address_eventfilter) |
| `ColonyFundsMovedBetweenFundingPots(uint256,uint256,uint256,address)` | (`fromPot?`: ``null`` \| `BigNumberish`, `toPot?`: ``null`` \| `BigNumberish`, `amount?`: ``null``, `token?`: ``null``) => [`ColonyFundsMovedBetweenFundingPots_uint256_uint256_uint256_address_EventFilter`](../README.md#colonyfundsmovedbetweenfundingpots_uint256_uint256_uint256_address_eventfilter) |
| `ColonyInitialised(address,address)` | (`colonyNetwork?`: ``null``, `token?`: ``null``) => [`ColonyInitialised_address_address_EventFilter`](../README.md#colonyinitialised_address_address_eventfilter) |
| `ColonyInitialised(address,address,address)` | (`agent?`: ``null``, `colonyNetwork?`: ``null``, `token?`: ``null``) => [`ColonyInitialised_address_address_address_EventFilter`](../README.md#colonyinitialised_address_address_address_eventfilter) |
| `ColonyMetadata` | (`agent?`: ``null``, `metadata?`: ``null``) => [`ColonyMetadataEventFilter`](../README.md#colonymetadataeventfilter) |
| `ColonyMetadata(address,string)` | (`agent?`: ``null``, `metadata?`: ``null``) => [`ColonyMetadataEventFilter`](../README.md#colonymetadataeventfilter) |
| `ColonyMetadataDelta` | (`agent?`: ``null``, `metadata?`: ``null``) => [`ColonyMetadataDeltaEventFilter`](../README.md#colonymetadatadeltaeventfilter) |
| `ColonyMetadataDelta(address,string)` | (`agent?`: ``null``, `metadata?`: ``null``) => [`ColonyMetadataDeltaEventFilter`](../README.md#colonymetadatadeltaeventfilter) |
| `ColonyRewardInverseSet(address,uint256)` | (`agent?`: ``null``, `rewardInverse?`: ``null``) => [`ColonyRewardInverseSet_address_uint256_EventFilter`](../README.md#colonyrewardinverseset_address_uint256_eventfilter) |
| `ColonyRewardInverseSet(uint256)` | (`rewardInverse?`: ``null``) => [`ColonyRewardInverseSet_uint256_EventFilter`](../README.md#colonyrewardinverseset_uint256_eventfilter) |
| `ColonyRoleSet(address,address,uint256,uint8,bool)` | (`agent?`: ``null``, `user?`: ``null`` \| `string`, `domainId?`: ``null`` \| `BigNumberish`, `role?`: ``null`` \| `BigNumberish`, `setTo?`: ``null``) => [`ColonyRoleSet_address_address_uint256_uint8_bool_EventFilter`](../README.md#colonyroleset_address_address_uint256_uint8_bool_eventfilter) |
| `ColonyRoleSet(address,uint256,uint8,bool)` | (`user?`: ``null`` \| `string`, `domainId?`: ``null`` \| `BigNumberish`, `role?`: ``null`` \| `BigNumberish`, `setTo?`: ``null``) => [`ColonyRoleSet_address_uint256_uint8_bool_EventFilter`](../README.md#colonyroleset_address_uint256_uint8_bool_eventfilter) |
| `ColonyRootRoleSet` | (`user?`: ``null``, `setTo?`: ``null``) => [`ColonyRootRoleSetEventFilter`](../README.md#colonyrootroleseteventfilter) |
| `ColonyRootRoleSet(address,bool)` | (`user?`: ``null``, `setTo?`: ``null``) => [`ColonyRootRoleSetEventFilter`](../README.md#colonyrootroleseteventfilter) |
| `ColonyUpgraded(address,uint256,uint256)` | (`agent?`: ``null``, `oldVersion?`: ``null``, `newVersion?`: ``null``) => [`ColonyUpgraded_address_uint256_uint256_EventFilter`](../README.md#colonyupgraded_address_uint256_uint256_eventfilter) |
| `ColonyUpgraded(uint256,uint256)` | (`oldVersion?`: ``null``, `newVersion?`: ``null``) => [`ColonyUpgraded_uint256_uint256_EventFilter`](../README.md#colonyupgraded_uint256_uint256_eventfilter) |
| `DomainAdded(address,uint256)` | (`agent?`: ``null``, `domainId?`: ``null``) => [`DomainAdded_address_uint256_EventFilter`](../README.md#domainadded_address_uint256_eventfilter) |
| `DomainAdded(uint256)` | (`domainId?`: ``null``) => [`DomainAdded_uint256_EventFilter`](../README.md#domainadded_uint256_eventfilter) |
| `DomainDeprecated` | (`agent?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `deprecated?`: ``null``) => [`DomainDeprecatedEventFilter`](../README.md#domaindeprecatedeventfilter) |
| `DomainDeprecated(address,uint256,bool)` | (`agent?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `deprecated?`: ``null``) => [`DomainDeprecatedEventFilter`](../README.md#domaindeprecatedeventfilter) |
| `DomainMetadata` | (`agent?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => [`DomainMetadataEventFilter`](../README.md#domainmetadataeventfilter) |
| `DomainMetadata(address,uint256,string)` | (`agent?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => [`DomainMetadataEventFilter`](../README.md#domainmetadataeventfilter) |
| `ExpenditureAdded(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null``) => [`ExpenditureAdded_address_uint256_EventFilter`](../README.md#expenditureadded_address_uint256_eventfilter) |
| `ExpenditureAdded(uint256)` | (`expenditureId?`: ``null``) => [`ExpenditureAdded_uint256_EventFilter`](../README.md#expenditureadded_uint256_eventfilter) |
| `ExpenditureCancelled(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => [`ExpenditureCancelled_address_uint256_EventFilter`](../README.md#expenditurecancelled_address_uint256_eventfilter) |
| `ExpenditureCancelled(uint256)` | (`expenditureId?`: ``null`` \| `BigNumberish`) => [`ExpenditureCancelled_uint256_EventFilter`](../README.md#expenditurecancelled_uint256_eventfilter) |
| `ExpenditureClaimDelaySet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `claimDelay?`: ``null``) => [`ExpenditureClaimDelaySetEventFilter`](../README.md#expenditureclaimdelayseteventfilter) |
| `ExpenditureClaimDelaySet(address,uint256,uint256,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `claimDelay?`: ``null``) => [`ExpenditureClaimDelaySetEventFilter`](../README.md#expenditureclaimdelayseteventfilter) |
| `ExpenditureFinalized(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => [`ExpenditureFinalized_address_uint256_EventFilter`](../README.md#expenditurefinalized_address_uint256_eventfilter) |
| `ExpenditureFinalized(uint256)` | (`expenditureId?`: ``null`` \| `BigNumberish`) => [`ExpenditureFinalized_uint256_EventFilter`](../README.md#expenditurefinalized_uint256_eventfilter) |
| `ExpenditureGlobalClaimDelaySet` | (`agent?`: ``null``, `globalClaimDelay?`: ``null``) => [`ExpenditureGlobalClaimDelaySetEventFilter`](../README.md#expenditureglobalclaimdelayseteventfilter) |
| `ExpenditureGlobalClaimDelaySet(address,uint256)` | (`agent?`: ``null``, `globalClaimDelay?`: ``null``) => [`ExpenditureGlobalClaimDelaySetEventFilter`](../README.md#expenditureglobalclaimdelayseteventfilter) |
| `ExpenditureLocked` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => [`ExpenditureLockedEventFilter`](../README.md#expenditurelockedeventfilter) |
| `ExpenditureLocked(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => [`ExpenditureLockedEventFilter`](../README.md#expenditurelockedeventfilter) |
| `ExpenditureMetadataSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => [`ExpenditureMetadataSetEventFilter`](../README.md#expendituremetadataseteventfilter) |
| `ExpenditureMetadataSet(address,uint256,string)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => [`ExpenditureMetadataSetEventFilter`](../README.md#expendituremetadataseteventfilter) |
| `ExpenditurePayoutModifierSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `payoutModifier?`: ``null``) => [`ExpenditurePayoutModifierSetEventFilter`](../README.md#expenditurepayoutmodifierseteventfilter) |
| `ExpenditurePayoutModifierSet(address,uint256,uint256,int256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `payoutModifier?`: ``null``) => [`ExpenditurePayoutModifierSetEventFilter`](../README.md#expenditurepayoutmodifierseteventfilter) |
| `ExpenditurePayoutSet(address,uint256,uint256,address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `token?`: ``null`` \| `string`, `amount?`: ``null``) => [`ExpenditurePayoutSet_address_uint256_uint256_address_uint256_EventFilter`](../README.md#expenditurepayoutset_address_uint256_uint256_address_uint256_eventfilter) |
| `ExpenditurePayoutSet(uint256,uint256,address,uint256)` | (`expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `token?`: ``null`` \| `string`, `amount?`: ``null``) => [`ExpenditurePayoutSet_uint256_uint256_address_uint256_EventFilter`](../README.md#expenditurepayoutset_uint256_uint256_address_uint256_eventfilter) |
| `ExpenditureRecipientSet(address,uint256,uint256,address)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `recipient?`: ``null`` \| `string`) => [`ExpenditureRecipientSet_address_uint256_uint256_address_EventFilter`](../README.md#expenditurerecipientset_address_uint256_uint256_address_eventfilter) |
| `ExpenditureRecipientSet(uint256,uint256,address)` | (`expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `recipient?`: ``null`` \| `string`) => [`ExpenditureRecipientSet_uint256_uint256_address_EventFilter`](../README.md#expenditurerecipientset_uint256_uint256_address_eventfilter) |
| `ExpenditureSkillSet(address,uint256,uint256,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => [`ExpenditureSkillSet_address_uint256_uint256_uint256_EventFilter`](../README.md#expenditureskillset_address_uint256_uint256_uint256_eventfilter) |
| `ExpenditureSkillSet(uint256,uint256,uint256)` | (`expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => [`ExpenditureSkillSet_uint256_uint256_uint256_EventFilter`](../README.md#expenditureskillset_uint256_uint256_uint256_eventfilter) |
| `ExpenditureStateChanged` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `storageSlot?`: ``null`` \| `BigNumberish`, `mask?`: ``null``, `keys?`: ``null``, `value?`: ``null``) => [`ExpenditureStateChangedEventFilter`](../README.md#expenditurestatechangedeventfilter) |
| `ExpenditureStateChanged(address,uint256,uint256,bool[],bytes32[],bytes32)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `storageSlot?`: ``null`` \| `BigNumberish`, `mask?`: ``null``, `keys?`: ``null``, `value?`: ``null``) => [`ExpenditureStateChangedEventFilter`](../README.md#expenditurestatechangedeventfilter) |
| `ExpenditureTransferred(address,uint256,address)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `owner?`: ``null`` \| `string`) => [`ExpenditureTransferred_address_uint256_address_EventFilter`](../README.md#expendituretransferred_address_uint256_address_eventfilter) |
| `ExpenditureTransferred(uint256,address)` | (`expenditureId?`: ``null`` \| `BigNumberish`, `owner?`: ``null`` \| `string`) => [`ExpenditureTransferred_uint256_address_EventFilter`](../README.md#expendituretransferred_uint256_address_eventfilter) |
| `FundingPotAdded` | (`fundingPotId?`: ``null``) => [`FundingPotAddedEventFilter`](../README.md#fundingpotaddedeventfilter) |
| `FundingPotAdded(uint256)` | (`fundingPotId?`: ``null``) => [`FundingPotAddedEventFilter`](../README.md#fundingpotaddedeventfilter) |
| `LocalSkillAdded` | (`agent?`: ``null``, `localSkillId?`: ``null``) => [`LocalSkillAddedEventFilter`](../README.md#localskilladdedeventfilter) |
| `LocalSkillAdded(address,uint256)` | (`agent?`: ``null``, `localSkillId?`: ``null``) => [`LocalSkillAddedEventFilter`](../README.md#localskilladdedeventfilter) |
| `LocalSkillDeprecated` | (`agent?`: ``null``, `localSkillId?`: ``null``, `deprecated?`: ``null``) => [`LocalSkillDeprecatedEventFilter`](../README.md#localskilldeprecatedeventfilter) |
| `LocalSkillDeprecated(address,uint256,bool)` | (`agent?`: ``null``, `localSkillId?`: ``null``, `deprecated?`: ``null``) => [`LocalSkillDeprecatedEventFilter`](../README.md#localskilldeprecatedeventfilter) |
| `MetaTransactionExecuted` | (`userAddress?`: ``null``, `relayerAddress?`: ``null``, `payload?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MetaTransactionExecuted(address,address,bytes)` | (`userAddress?`: ``null``, `relayerAddress?`: ``null``, `payload?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `PaymentAdded(address,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null``) => [`PaymentAdded_address_uint256_EventFilter`](../README.md#paymentadded_address_uint256_eventfilter) |
| `PaymentAdded(uint256)` | (`paymentId?`: ``null``) => [`PaymentAdded_uint256_EventFilter`](../README.md#paymentadded_uint256_eventfilter) |
| `PaymentFinalized` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`) => [`PaymentFinalizedEventFilter`](../README.md#paymentfinalizedeventfilter) |
| `PaymentFinalized(address,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`) => [`PaymentFinalizedEventFilter`](../README.md#paymentfinalizedeventfilter) |
| `PaymentPayoutSet` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => [`PaymentPayoutSetEventFilter`](../README.md#paymentpayoutseteventfilter) |
| `PaymentPayoutSet(address,uint256,address,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => [`PaymentPayoutSetEventFilter`](../README.md#paymentpayoutseteventfilter) |
| `PaymentRecipientSet` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `recipient?`: ``null``) => [`PaymentRecipientSetEventFilter`](../README.md#paymentrecipientseteventfilter) |
| `PaymentRecipientSet(address,uint256,address)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `recipient?`: ``null``) => [`PaymentRecipientSetEventFilter`](../README.md#paymentrecipientseteventfilter) |
| `PaymentSkillSet` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null``) => [`PaymentSkillSetEventFilter`](../README.md#paymentskillseteventfilter) |
| `PaymentSkillSet(address,uint256,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null``) => [`PaymentSkillSetEventFilter`](../README.md#paymentskillseteventfilter) |
| `PayoutClaimed(address,uint256,address,uint256)` | (`agent?`: ``null``, `fundingPotId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => [`PayoutClaimed_address_uint256_address_uint256_EventFilter`](../README.md#payoutclaimed_address_uint256_address_uint256_eventfilter) |
| `PayoutClaimed(address,uint256,uint256,address,uint256)` | (`agent?`: ``null``, `id?`: ``null``, `slot?`: ``null``, `token?`: ``null``, `tokenPayout?`: ``null``) => [`PayoutClaimed_address_uint256_uint256_address_uint256_EventFilter`](../README.md#payoutclaimed_address_uint256_uint256_address_uint256_eventfilter) |
| `PayoutClaimed(uint256,address,uint256)` | (`fundingPotId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => [`PayoutClaimed_uint256_address_uint256_EventFilter`](../README.md#payoutclaimed_uint256_address_uint256_eventfilter) |
| `RecoveryModeEntered` | (`user?`: ``null``) => `RecoveryModeEnteredEventFilter` |
| `RecoveryModeEntered(address)` | (`user?`: ``null``) => `RecoveryModeEnteredEventFilter` |
| `RecoveryModeExitApproved` | (`user?`: ``null``) => `RecoveryModeExitApprovedEventFilter` |
| `RecoveryModeExitApproved(address)` | (`user?`: ``null``) => `RecoveryModeExitApprovedEventFilter` |
| `RecoveryModeExited` | (`user?`: ``null``) => `RecoveryModeExitedEventFilter` |
| `RecoveryModeExited(address)` | (`user?`: ``null``) => `RecoveryModeExitedEventFilter` |
| `RecoveryRoleSet` | (`user?`: ``null`` \| `string`, `setTo?`: ``null``) => `RecoveryRoleSetEventFilter` |
| `RecoveryRoleSet(address,bool)` | (`user?`: ``null`` \| `string`, `setTo?`: ``null``) => `RecoveryRoleSetEventFilter` |
| `RecoveryStorageSlotSet` | (`user?`: ``null``, `slot?`: ``null``, `fromValue?`: ``null``, `toValue?`: ``null``) => `RecoveryStorageSlotSetEventFilter` |
| `RecoveryStorageSlotSet(address,uint256,bytes32,bytes32)` | (`user?`: ``null``, `slot?`: ``null``, `fromValue?`: ``null``, `toValue?`: ``null``) => `RecoveryStorageSlotSetEventFilter` |
| `RewardPayoutClaimed` | (`rewardPayoutId?`: ``null``, `user?`: ``null``, `fee?`: ``null``, `rewardRemainder?`: ``null``) => [`RewardPayoutClaimedEventFilter`](../README.md#rewardpayoutclaimedeventfilter) |
| `RewardPayoutClaimed(uint256,address,uint256,uint256)` | (`rewardPayoutId?`: ``null``, `user?`: ``null``, `fee?`: ``null``, `rewardRemainder?`: ``null``) => [`RewardPayoutClaimedEventFilter`](../README.md#rewardpayoutclaimedeventfilter) |
| `RewardPayoutCycleEnded(address,uint256)` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => [`RewardPayoutCycleEnded_address_uint256_EventFilter`](../README.md#rewardpayoutcycleended_address_uint256_eventfilter) |
| `RewardPayoutCycleEnded(uint256)` | (`rewardPayoutId?`: ``null``) => [`RewardPayoutCycleEnded_uint256_EventFilter`](../README.md#rewardpayoutcycleended_uint256_eventfilter) |
| `RewardPayoutCycleStarted(address,uint256)` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => [`RewardPayoutCycleStarted_address_uint256_EventFilter`](../README.md#rewardpayoutcyclestarted_address_uint256_eventfilter) |
| `RewardPayoutCycleStarted(uint256)` | (`rewardPayoutId?`: ``null``) => [`RewardPayoutCycleStarted_uint256_EventFilter`](../README.md#rewardpayoutcyclestarted_uint256_eventfilter) |
| `TaskAdded(address,uint256)` | (`agent?`: ``null``, `taskId?`: ``null``) => [`TaskAdded_address_uint256_EventFilter`](../README.md#taskadded_address_uint256_eventfilter) |
| `TaskAdded(uint256)` | (`taskId?`: ``null``) => [`TaskAdded_uint256_EventFilter`](../README.md#taskadded_uint256_eventfilter) |
| `TaskBriefSet` | (`taskId?`: ``null`` \| `BigNumberish`, `specificationHash?`: ``null``) => [`TaskBriefSetEventFilter`](../README.md#taskbriefseteventfilter) |
| `TaskBriefSet(uint256,bytes32)` | (`taskId?`: ``null`` \| `BigNumberish`, `specificationHash?`: ``null``) => [`TaskBriefSetEventFilter`](../README.md#taskbriefseteventfilter) |
| `TaskCanceled` | (`taskId?`: ``null`` \| `BigNumberish`) => [`TaskCanceledEventFilter`](../README.md#taskcanceledeventfilter) |
| `TaskCanceled(uint256)` | (`taskId?`: ``null`` \| `BigNumberish`) => [`TaskCanceledEventFilter`](../README.md#taskcanceledeventfilter) |
| `TaskChangedViaSignatures` | (`reviewerAddresses?`: ``null``) => [`TaskChangedViaSignaturesEventFilter`](../README.md#taskchangedviasignatureseventfilter) |
| `TaskChangedViaSignatures(address[])` | (`reviewerAddresses?`: ``null``) => [`TaskChangedViaSignaturesEventFilter`](../README.md#taskchangedviasignatureseventfilter) |
| `TaskCompleted(address,uint256)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`) => [`TaskCompleted_address_uint256_EventFilter`](../README.md#taskcompleted_address_uint256_eventfilter) |
| `TaskCompleted(uint256)` | (`taskId?`: ``null`` \| `BigNumberish`) => [`TaskCompleted_uint256_EventFilter`](../README.md#taskcompleted_uint256_eventfilter) |
| `TaskDeliverableSubmitted(address,uint256,bytes32)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`, `deliverableHash?`: ``null``) => [`TaskDeliverableSubmitted_address_uint256_bytes32_EventFilter`](../README.md#taskdeliverablesubmitted_address_uint256_bytes32_eventfilter) |
| `TaskDeliverableSubmitted(uint256,bytes32)` | (`taskId?`: ``null`` \| `BigNumberish`, `deliverableHash?`: ``null``) => [`TaskDeliverableSubmitted_uint256_bytes32_EventFilter`](../README.md#taskdeliverablesubmitted_uint256_bytes32_eventfilter) |
| `TaskDomainSet` | (`taskId?`: ``null`` \| `BigNumberish`, `domainId?`: ``null`` \| `BigNumberish`) => [`TaskDomainSetEventFilter`](../README.md#taskdomainseteventfilter) |
| `TaskDomainSet(uint256,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `domainId?`: ``null`` \| `BigNumberish`) => [`TaskDomainSetEventFilter`](../README.md#taskdomainseteventfilter) |
| `TaskDueDateSet` | (`taskId?`: ``null`` \| `BigNumberish`, `dueDate?`: ``null``) => [`TaskDueDateSetEventFilter`](../README.md#taskduedateseteventfilter) |
| `TaskDueDateSet(uint256,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `dueDate?`: ``null``) => [`TaskDueDateSetEventFilter`](../README.md#taskduedateseteventfilter) |
| `TaskFinalized(address,uint256)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`) => [`TaskFinalized_address_uint256_EventFilter`](../README.md#taskfinalized_address_uint256_eventfilter) |
| `TaskFinalized(uint256)` | (`taskId?`: ``null`` \| `BigNumberish`) => [`TaskFinalized_uint256_EventFilter`](../README.md#taskfinalized_uint256_eventfilter) |
| `TaskPayoutSet` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => [`TaskPayoutSetEventFilter`](../README.md#taskpayoutseteventfilter) |
| `TaskPayoutSet(uint256,uint8,address,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => [`TaskPayoutSetEventFilter`](../README.md#taskpayoutseteventfilter) |
| `TaskRoleUserSet` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `user?`: ``null`` \| `string`) => [`TaskRoleUserSetEventFilter`](../README.md#taskroleuserseteventfilter) |
| `TaskRoleUserSet(uint256,uint8,address)` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `user?`: ``null`` \| `string`) => [`TaskRoleUserSetEventFilter`](../README.md#taskroleuserseteventfilter) |
| `TaskSkillSet` | (`taskId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => [`TaskSkillSetEventFilter`](../README.md#taskskillseteventfilter) |
| `TaskSkillSet(uint256,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => [`TaskSkillSetEventFilter`](../README.md#taskskillseteventfilter) |
| `TaskWorkRatingRevealed(address,uint256,uint8,uint8)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `rating?`: ``null``) => [`TaskWorkRatingRevealed_address_uint256_uint8_uint8_EventFilter`](../README.md#taskworkratingrevealed_address_uint256_uint8_uint8_eventfilter) |
| `TaskWorkRatingRevealed(uint256,uint8,uint8)` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `rating?`: ``null``) => [`TaskWorkRatingRevealed_uint256_uint8_uint8_EventFilter`](../README.md#taskworkratingrevealed_uint256_uint8_uint8_eventfilter) |
| `TokenUnlocked()` | () => [`TokenUnlocked__EventFilter`](../README.md#tokenunlocked__eventfilter) |
| `TokenUnlocked(address)` | (`agent?`: ``null``) => [`TokenUnlocked_address_EventFilter`](../README.md#tokenunlocked_address_eventfilter) |
| `TokensBurned` | (`agent?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => [`TokensBurnedEventFilter`](../README.md#tokensburnedeventfilter) |
| `TokensBurned(address,address,uint256)` | (`agent?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => [`TokensBurnedEventFilter`](../README.md#tokensburnedeventfilter) |
| `TokensMinted` | (`agent?`: ``null``, `who?`: ``null``, `amount?`: ``null``) => [`TokensMintedEventFilter`](../README.md#tokensmintedeventfilter) |
| `TokensMinted(address,address,uint256)` | (`agent?`: ``null``, `who?`: ``null``, `amount?`: ``null``) => [`TokensMintedEventFilter`](../README.md#tokensmintedeventfilter) |

#### Overrides

BaseContract.filters

___

### functions

• **functions**: `Object`

#### Overrides

BaseContract.functions

___

### interface

• **interface**: [`IColonyEventsInterface`](IColonyEventsInterface.md)

#### Overrides

BaseContract.interface

___

### off

• **off**: `OnEvent`<[`IColonyEvents`](IColonyEvents.md)\>

#### Overrides

BaseContract.off

___

### on

• **on**: `OnEvent`<[`IColonyEvents`](IColonyEvents.md)\>

#### Overrides

BaseContract.on

___

### once

• **once**: `OnEvent`<[`IColonyEvents`](IColonyEvents.md)\>

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

• **removeListener**: `OnEvent`<[`IColonyEvents`](IColonyEvents.md)\>

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

▸ **attach**(`addressOrName`): [`IColonyEvents`](IColonyEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IColonyEvents`](IColonyEvents.md)

#### Overrides

BaseContract.attach

___

### connect

▸ **connect**(`signerOrProvider`): [`IColonyEvents`](IColonyEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IColonyEvents`](IColonyEvents.md)

#### Overrides

BaseContract.connect

___

### deployed

▸ **deployed**(): `Promise`<[`IColonyEvents`](IColonyEvents.md)\>

#### Returns

`Promise`<[`IColonyEvents`](IColonyEvents.md)\>

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

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IColonyEvents`](IColonyEvents.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IColonyEvents`](IColonyEvents.md)

#### Overrides

BaseContract.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`IColonyEvents`](IColonyEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IColonyEvents`](IColonyEvents.md)

#### Overrides

BaseContract.removeAllListeners
