# Interface: StagedExpenditureEvents

[StagedExpenditureEvents](../modules/StagedExpenditureEvents.md).StagedExpenditureEvents

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
| `Annotation` | (`agent?`: ``null`` \| `string`, `txHash?`: ``null`` \| `BytesLike`, `metadata?`: ``null``) => [`AnnotationEventFilter`](../modules/StagedExpenditureEvents.md#annotationeventfilter) |
| `Annotation(address,bytes32,string)` | (`agent?`: ``null`` \| `string`, `txHash?`: ``null`` \| `BytesLike`, `metadata?`: ``null``) => [`AnnotationEventFilter`](../modules/StagedExpenditureEvents.md#annotationeventfilter) |
| `ArbitraryReputationUpdate` | (`agent?`: ``null``, `user?`: ``null``, `skillId?`: ``null``, `amount?`: ``null``) => [`ArbitraryReputationUpdateEventFilter`](../modules/StagedExpenditureEvents.md#arbitraryreputationupdateeventfilter) |
| `ArbitraryReputationUpdate(address,address,uint256,int256)` | (`agent?`: ``null``, `user?`: ``null``, `skillId?`: ``null``, `amount?`: ``null``) => [`ArbitraryReputationUpdateEventFilter`](../modules/StagedExpenditureEvents.md#arbitraryreputationupdateeventfilter) |
| `ArbitraryTransaction` | (`target?`: ``null``, `data?`: ``null``, `success?`: ``null``) => [`ArbitraryTransactionEventFilter`](../modules/StagedExpenditureEvents.md#arbitrarytransactioneventfilter) |
| `ArbitraryTransaction(address,bytes,bool)` | (`target?`: ``null``, `data?`: ``null``, `success?`: ``null``) => [`ArbitraryTransactionEventFilter`](../modules/StagedExpenditureEvents.md#arbitrarytransactioneventfilter) |
| `ColonyBootstrapped` | (`agent?`: ``null``, `users?`: ``null``, `amounts?`: ``null``) => [`ColonyBootstrappedEventFilter`](../modules/StagedExpenditureEvents.md#colonybootstrappedeventfilter) |
| `ColonyBootstrapped(address,address[],int256[])` | (`agent?`: ``null``, `users?`: ``null``, `amounts?`: ``null``) => [`ColonyBootstrappedEventFilter`](../modules/StagedExpenditureEvents.md#colonybootstrappedeventfilter) |
| `ColonyFundsClaimed` | (`agent?`: ``null``, `token?`: ``null``, `fee?`: ``null``, `payoutRemainder?`: ``null``) => [`ColonyFundsClaimedEventFilter`](../modules/StagedExpenditureEvents.md#colonyfundsclaimedeventfilter) |
| `ColonyFundsClaimed(address,address,uint256,uint256)` | (`agent?`: ``null``, `token?`: ``null``, `fee?`: ``null``, `payoutRemainder?`: ``null``) => [`ColonyFundsClaimedEventFilter`](../modules/StagedExpenditureEvents.md#colonyfundsclaimedeventfilter) |
| `ColonyFundsMovedBetweenFundingPots` | (`agent?`: ``null``, `fromPot?`: ``null`` \| `BigNumberish`, `toPot?`: ``null`` \| `BigNumberish`, `amount?`: ``null``, `token?`: ``null``) => [`ColonyFundsMovedBetweenFundingPotsEventFilter`](../modules/StagedExpenditureEvents.md#colonyfundsmovedbetweenfundingpotseventfilter) |
| `ColonyFundsMovedBetweenFundingPots(address,uint256,uint256,uint256,address)` | (`agent?`: ``null``, `fromPot?`: ``null`` \| `BigNumberish`, `toPot?`: ``null`` \| `BigNumberish`, `amount?`: ``null``, `token?`: ``null``) => [`ColonyFundsMovedBetweenFundingPotsEventFilter`](../modules/StagedExpenditureEvents.md#colonyfundsmovedbetweenfundingpotseventfilter) |
| `ColonyInitialised` | (`agent?`: ``null``, `colonyNetwork?`: ``null``, `token?`: ``null``) => [`ColonyInitialisedEventFilter`](../modules/StagedExpenditureEvents.md#colonyinitialisedeventfilter) |
| `ColonyInitialised(address,address,address)` | (`agent?`: ``null``, `colonyNetwork?`: ``null``, `token?`: ``null``) => [`ColonyInitialisedEventFilter`](../modules/StagedExpenditureEvents.md#colonyinitialisedeventfilter) |
| `ColonyMetadata` | (`agent?`: ``null``, `metadata?`: ``null``) => [`ColonyMetadataEventFilter`](../modules/StagedExpenditureEvents.md#colonymetadataeventfilter) |
| `ColonyMetadata(address,string)` | (`agent?`: ``null``, `metadata?`: ``null``) => [`ColonyMetadataEventFilter`](../modules/StagedExpenditureEvents.md#colonymetadataeventfilter) |
| `ColonyMetadataDelta` | (`agent?`: ``null``, `metadata?`: ``null``) => [`ColonyMetadataDeltaEventFilter`](../modules/StagedExpenditureEvents.md#colonymetadatadeltaeventfilter) |
| `ColonyMetadataDelta(address,string)` | (`agent?`: ``null``, `metadata?`: ``null``) => [`ColonyMetadataDeltaEventFilter`](../modules/StagedExpenditureEvents.md#colonymetadatadeltaeventfilter) |
| `ColonyRewardInverseSet` | (`agent?`: ``null``, `rewardInverse?`: ``null``) => [`ColonyRewardInverseSetEventFilter`](../modules/StagedExpenditureEvents.md#colonyrewardinverseseteventfilter) |
| `ColonyRewardInverseSet(address,uint256)` | (`agent?`: ``null``, `rewardInverse?`: ``null``) => [`ColonyRewardInverseSetEventFilter`](../modules/StagedExpenditureEvents.md#colonyrewardinverseseteventfilter) |
| `ColonyRoleSet` | (`agent?`: ``null``, `user?`: ``null`` \| `string`, `domainId?`: ``null`` \| `BigNumberish`, `role?`: ``null`` \| `BigNumberish`, `setTo?`: ``null``) => [`ColonyRoleSetEventFilter`](../modules/StagedExpenditureEvents.md#colonyroleseteventfilter) |
| `ColonyRoleSet(address,address,uint256,uint8,bool)` | (`agent?`: ``null``, `user?`: ``null`` \| `string`, `domainId?`: ``null`` \| `BigNumberish`, `role?`: ``null`` \| `BigNumberish`, `setTo?`: ``null``) => [`ColonyRoleSetEventFilter`](../modules/StagedExpenditureEvents.md#colonyroleseteventfilter) |
| `ColonyUpgraded` | (`agent?`: ``null``, `oldVersion?`: ``null``, `newVersion?`: ``null``) => [`ColonyUpgradedEventFilter`](../modules/StagedExpenditureEvents.md#colonyupgradedeventfilter) |
| `ColonyUpgraded(address,uint256,uint256)` | (`agent?`: ``null``, `oldVersion?`: ``null``, `newVersion?`: ``null``) => [`ColonyUpgradedEventFilter`](../modules/StagedExpenditureEvents.md#colonyupgradedeventfilter) |
| `DomainAdded` | (`agent?`: ``null``, `domainId?`: ``null``) => [`DomainAddedEventFilter`](../modules/StagedExpenditureEvents.md#domainaddedeventfilter) |
| `DomainAdded(address,uint256)` | (`agent?`: ``null``, `domainId?`: ``null``) => [`DomainAddedEventFilter`](../modules/StagedExpenditureEvents.md#domainaddedeventfilter) |
| `DomainDeprecated` | (`agent?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `deprecated?`: ``null``) => [`DomainDeprecatedEventFilter`](../modules/StagedExpenditureEvents.md#domaindeprecatedeventfilter) |
| `DomainDeprecated(address,uint256,bool)` | (`agent?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `deprecated?`: ``null``) => [`DomainDeprecatedEventFilter`](../modules/StagedExpenditureEvents.md#domaindeprecatedeventfilter) |
| `DomainMetadata` | (`agent?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => [`DomainMetadataEventFilter`](../modules/StagedExpenditureEvents.md#domainmetadataeventfilter) |
| `DomainMetadata(address,uint256,string)` | (`agent?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => [`DomainMetadataEventFilter`](../modules/StagedExpenditureEvents.md#domainmetadataeventfilter) |
| `ExpenditureAdded` | (`agent?`: ``null``, `expenditureId?`: ``null``) => [`ExpenditureAddedEventFilter`](../modules/StagedExpenditureEvents.md#expenditureaddedeventfilter) |
| `ExpenditureAdded(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null``) => [`ExpenditureAddedEventFilter`](../modules/StagedExpenditureEvents.md#expenditureaddedeventfilter) |
| `ExpenditureCancelled` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => [`ExpenditureCancelledEventFilter`](../modules/StagedExpenditureEvents.md#expenditurecancelledeventfilter) |
| `ExpenditureCancelled(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => [`ExpenditureCancelledEventFilter`](../modules/StagedExpenditureEvents.md#expenditurecancelledeventfilter) |
| `ExpenditureClaimDelaySet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `claimDelay?`: ``null``) => [`ExpenditureClaimDelaySetEventFilter`](../modules/StagedExpenditureEvents.md#expenditureclaimdelayseteventfilter) |
| `ExpenditureClaimDelaySet(address,uint256,uint256,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `claimDelay?`: ``null``) => [`ExpenditureClaimDelaySetEventFilter`](../modules/StagedExpenditureEvents.md#expenditureclaimdelayseteventfilter) |
| `ExpenditureFinalized` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => [`ExpenditureFinalizedEventFilter`](../modules/StagedExpenditureEvents.md#expenditurefinalizedeventfilter) |
| `ExpenditureFinalized(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => [`ExpenditureFinalizedEventFilter`](../modules/StagedExpenditureEvents.md#expenditurefinalizedeventfilter) |
| `ExpenditureGlobalClaimDelaySet` | (`agent?`: ``null``, `globalClaimDelay?`: ``null``) => [`ExpenditureGlobalClaimDelaySetEventFilter`](../modules/StagedExpenditureEvents.md#expenditureglobalclaimdelayseteventfilter) |
| `ExpenditureGlobalClaimDelaySet(address,uint256)` | (`agent?`: ``null``, `globalClaimDelay?`: ``null``) => [`ExpenditureGlobalClaimDelaySetEventFilter`](../modules/StagedExpenditureEvents.md#expenditureglobalclaimdelayseteventfilter) |
| `ExpenditureLocked` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => [`ExpenditureLockedEventFilter`](../modules/StagedExpenditureEvents.md#expenditurelockedeventfilter) |
| `ExpenditureLocked(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => [`ExpenditureLockedEventFilter`](../modules/StagedExpenditureEvents.md#expenditurelockedeventfilter) |
| `ExpenditureMadeStaged(address,uint256,bool)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `staged?`: ``null``) => [`ExpenditureMadeStaged_address_uint256_bool_EventFilter`](../modules/StagedExpenditureEvents.md#expendituremadestaged_address_uint256_bool_eventfilter) |
| `ExpenditureMadeStaged(uint256,bool)` | (`expenditureId?`: ``null`` \| `BigNumberish`, `staged?`: ``null``) => [`ExpenditureMadeStaged_uint256_bool_EventFilter`](../modules/StagedExpenditureEvents.md#expendituremadestaged_uint256_bool_eventfilter) |
| `ExpenditureMetadataSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => [`ExpenditureMetadataSetEventFilter`](../modules/StagedExpenditureEvents.md#expendituremetadataseteventfilter) |
| `ExpenditureMetadataSet(address,uint256,string)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => [`ExpenditureMetadataSetEventFilter`](../modules/StagedExpenditureEvents.md#expendituremetadataseteventfilter) |
| `ExpenditurePayoutModifierSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `payoutModifier?`: ``null``) => [`ExpenditurePayoutModifierSetEventFilter`](../modules/StagedExpenditureEvents.md#expenditurepayoutmodifierseteventfilter) |
| `ExpenditurePayoutModifierSet(address,uint256,uint256,int256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `payoutModifier?`: ``null``) => [`ExpenditurePayoutModifierSetEventFilter`](../modules/StagedExpenditureEvents.md#expenditurepayoutmodifierseteventfilter) |
| `ExpenditurePayoutSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `token?`: ``null`` \| `string`, `amount?`: ``null``) => [`ExpenditurePayoutSetEventFilter`](../modules/StagedExpenditureEvents.md#expenditurepayoutseteventfilter) |
| `ExpenditurePayoutSet(address,uint256,uint256,address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `token?`: ``null`` \| `string`, `amount?`: ``null``) => [`ExpenditurePayoutSetEventFilter`](../modules/StagedExpenditureEvents.md#expenditurepayoutseteventfilter) |
| `ExpenditureRecipientSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `recipient?`: ``null`` \| `string`) => [`ExpenditureRecipientSetEventFilter`](../modules/StagedExpenditureEvents.md#expenditurerecipientseteventfilter) |
| `ExpenditureRecipientSet(address,uint256,uint256,address)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `recipient?`: ``null`` \| `string`) => [`ExpenditureRecipientSetEventFilter`](../modules/StagedExpenditureEvents.md#expenditurerecipientseteventfilter) |
| `ExpenditureSkillSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => [`ExpenditureSkillSetEventFilter`](../modules/StagedExpenditureEvents.md#expenditureskillseteventfilter) |
| `ExpenditureSkillSet(address,uint256,uint256,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => [`ExpenditureSkillSetEventFilter`](../modules/StagedExpenditureEvents.md#expenditureskillseteventfilter) |
| `ExpenditureStateChanged` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `storageSlot?`: ``null`` \| `BigNumberish`, `mask?`: ``null``, `keys?`: ``null``, `value?`: ``null``) => [`ExpenditureStateChangedEventFilter`](../modules/StagedExpenditureEvents.md#expenditurestatechangedeventfilter) |
| `ExpenditureStateChanged(address,uint256,uint256,bool[],bytes32[],bytes32)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `storageSlot?`: ``null`` \| `BigNumberish`, `mask?`: ``null``, `keys?`: ``null``, `value?`: ``null``) => [`ExpenditureStateChangedEventFilter`](../modules/StagedExpenditureEvents.md#expenditurestatechangedeventfilter) |
| `ExpenditureTransferred` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `owner?`: ``null`` \| `string`) => [`ExpenditureTransferredEventFilter`](../modules/StagedExpenditureEvents.md#expendituretransferredeventfilter) |
| `ExpenditureTransferred(address,uint256,address)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `owner?`: ``null`` \| `string`) => [`ExpenditureTransferredEventFilter`](../modules/StagedExpenditureEvents.md#expendituretransferredeventfilter) |
| `ExtensionInitialised` | () => [`ExtensionInitialisedEventFilter`](../modules/StagedExpenditureEvents.md#extensioninitialisedeventfilter) |
| `ExtensionInitialised()` | () => [`ExtensionInitialisedEventFilter`](../modules/StagedExpenditureEvents.md#extensioninitialisedeventfilter) |
| `FundingPotAdded` | (`fundingPotId?`: ``null``) => [`FundingPotAddedEventFilter`](../modules/StagedExpenditureEvents.md#fundingpotaddedeventfilter) |
| `FundingPotAdded(uint256)` | (`fundingPotId?`: ``null``) => [`FundingPotAddedEventFilter`](../modules/StagedExpenditureEvents.md#fundingpotaddedeventfilter) |
| `LocalSkillAdded` | (`agent?`: ``null``, `localSkillId?`: ``null``) => [`LocalSkillAddedEventFilter`](../modules/StagedExpenditureEvents.md#localskilladdedeventfilter) |
| `LocalSkillAdded(address,uint256)` | (`agent?`: ``null``, `localSkillId?`: ``null``) => [`LocalSkillAddedEventFilter`](../modules/StagedExpenditureEvents.md#localskilladdedeventfilter) |
| `LocalSkillDeprecated` | (`agent?`: ``null``, `localSkillId?`: ``null``, `deprecated?`: ``null``) => [`LocalSkillDeprecatedEventFilter`](../modules/StagedExpenditureEvents.md#localskilldeprecatedeventfilter) |
| `LocalSkillDeprecated(address,uint256,bool)` | (`agent?`: ``null``, `localSkillId?`: ``null``, `deprecated?`: ``null``) => [`LocalSkillDeprecatedEventFilter`](../modules/StagedExpenditureEvents.md#localskilldeprecatedeventfilter) |
| `LogSetAuthority` | (`authority?`: ``null`` \| `string`) => [`LogSetAuthorityEventFilter`](../modules/StagedExpenditureEvents.md#logsetauthorityeventfilter) |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `string`) => [`LogSetAuthorityEventFilter`](../modules/StagedExpenditureEvents.md#logsetauthorityeventfilter) |
| `LogSetOwner` | (`owner?`: ``null`` \| `string`) => [`LogSetOwnerEventFilter`](../modules/StagedExpenditureEvents.md#logsetownereventfilter) |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `string`) => [`LogSetOwnerEventFilter`](../modules/StagedExpenditureEvents.md#logsetownereventfilter) |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => [`MetaTransactionExecutedEventFilter`](../modules/StagedExpenditureEvents.md#metatransactionexecutedeventfilter) |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => [`MetaTransactionExecutedEventFilter`](../modules/StagedExpenditureEvents.md#metatransactionexecutedeventfilter) |
| `PaymentAdded` | (`agent?`: ``null``, `paymentId?`: ``null``) => [`PaymentAddedEventFilter`](../modules/StagedExpenditureEvents.md#paymentaddedeventfilter) |
| `PaymentAdded(address,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null``) => [`PaymentAddedEventFilter`](../modules/StagedExpenditureEvents.md#paymentaddedeventfilter) |
| `PaymentFinalized` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`) => [`PaymentFinalizedEventFilter`](../modules/StagedExpenditureEvents.md#paymentfinalizedeventfilter) |
| `PaymentFinalized(address,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`) => [`PaymentFinalizedEventFilter`](../modules/StagedExpenditureEvents.md#paymentfinalizedeventfilter) |
| `PaymentPayoutSet` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => [`PaymentPayoutSetEventFilter`](../modules/StagedExpenditureEvents.md#paymentpayoutseteventfilter) |
| `PaymentPayoutSet(address,uint256,address,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => [`PaymentPayoutSetEventFilter`](../modules/StagedExpenditureEvents.md#paymentpayoutseteventfilter) |
| `PaymentRecipientSet` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `recipient?`: ``null``) => [`PaymentRecipientSetEventFilter`](../modules/StagedExpenditureEvents.md#paymentrecipientseteventfilter) |
| `PaymentRecipientSet(address,uint256,address)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `recipient?`: ``null``) => [`PaymentRecipientSetEventFilter`](../modules/StagedExpenditureEvents.md#paymentrecipientseteventfilter) |
| `PaymentSkillSet` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null``) => [`PaymentSkillSetEventFilter`](../modules/StagedExpenditureEvents.md#paymentskillseteventfilter) |
| `PaymentSkillSet(address,uint256,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null``) => [`PaymentSkillSetEventFilter`](../modules/StagedExpenditureEvents.md#paymentskillseteventfilter) |
| `PayoutClaimed(address,uint256,address,uint256)` | (`agent?`: ``null``, `fundingPotId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => [`PayoutClaimed_address_uint256_address_uint256_EventFilter`](../modules/StagedExpenditureEvents.md#payoutclaimed_address_uint256_address_uint256_eventfilter) |
| `PayoutClaimed(address,uint256,uint256,address,uint256)` | (`agent?`: ``null``, `id?`: ``null``, `slot?`: ``null``, `token?`: ``null``, `tokenPayout?`: ``null``) => [`PayoutClaimed_address_uint256_uint256_address_uint256_EventFilter`](../modules/StagedExpenditureEvents.md#payoutclaimed_address_uint256_uint256_address_uint256_eventfilter) |
| `RewardPayoutClaimed` | (`rewardPayoutId?`: ``null``, `user?`: ``null``, `fee?`: ``null``, `rewardRemainder?`: ``null``) => [`RewardPayoutClaimedEventFilter`](../modules/StagedExpenditureEvents.md#rewardpayoutclaimedeventfilter) |
| `RewardPayoutClaimed(uint256,address,uint256,uint256)` | (`rewardPayoutId?`: ``null``, `user?`: ``null``, `fee?`: ``null``, `rewardRemainder?`: ``null``) => [`RewardPayoutClaimedEventFilter`](../modules/StagedExpenditureEvents.md#rewardpayoutclaimedeventfilter) |
| `RewardPayoutCycleEnded` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => [`RewardPayoutCycleEndedEventFilter`](../modules/StagedExpenditureEvents.md#rewardpayoutcycleendedeventfilter) |
| `RewardPayoutCycleEnded(address,uint256)` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => [`RewardPayoutCycleEndedEventFilter`](../modules/StagedExpenditureEvents.md#rewardpayoutcycleendedeventfilter) |
| `RewardPayoutCycleStarted` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => [`RewardPayoutCycleStartedEventFilter`](../modules/StagedExpenditureEvents.md#rewardpayoutcyclestartedeventfilter) |
| `RewardPayoutCycleStarted(address,uint256)` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => [`RewardPayoutCycleStartedEventFilter`](../modules/StagedExpenditureEvents.md#rewardpayoutcyclestartedeventfilter) |
| `StagedPaymentReleased(address,uint256,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null``) => [`StagedPaymentReleased_address_uint256_uint256_EventFilter`](../modules/StagedExpenditureEvents.md#stagedpaymentreleased_address_uint256_uint256_eventfilter) |
| `StagedPaymentReleased(uint256,uint256)` | (`expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null``) => [`StagedPaymentReleased_uint256_uint256_EventFilter`](../modules/StagedExpenditureEvents.md#stagedpaymentreleased_uint256_uint256_eventfilter) |
| `TaskAdded` | (`agent?`: ``null``, `taskId?`: ``null``) => [`TaskAddedEventFilter`](../modules/StagedExpenditureEvents.md#taskaddedeventfilter) |
| `TaskAdded(address,uint256)` | (`agent?`: ``null``, `taskId?`: ``null``) => [`TaskAddedEventFilter`](../modules/StagedExpenditureEvents.md#taskaddedeventfilter) |
| `TaskBriefSet` | (`taskId?`: ``null`` \| `BigNumberish`, `specificationHash?`: ``null``) => [`TaskBriefSetEventFilter`](../modules/StagedExpenditureEvents.md#taskbriefseteventfilter) |
| `TaskBriefSet(uint256,bytes32)` | (`taskId?`: ``null`` \| `BigNumberish`, `specificationHash?`: ``null``) => [`TaskBriefSetEventFilter`](../modules/StagedExpenditureEvents.md#taskbriefseteventfilter) |
| `TaskCanceled` | (`taskId?`: ``null`` \| `BigNumberish`) => [`TaskCanceledEventFilter`](../modules/StagedExpenditureEvents.md#taskcanceledeventfilter) |
| `TaskCanceled(uint256)` | (`taskId?`: ``null`` \| `BigNumberish`) => [`TaskCanceledEventFilter`](../modules/StagedExpenditureEvents.md#taskcanceledeventfilter) |
| `TaskChangedViaSignatures` | (`reviewerAddresses?`: ``null``) => [`TaskChangedViaSignaturesEventFilter`](../modules/StagedExpenditureEvents.md#taskchangedviasignatureseventfilter) |
| `TaskChangedViaSignatures(address[])` | (`reviewerAddresses?`: ``null``) => [`TaskChangedViaSignaturesEventFilter`](../modules/StagedExpenditureEvents.md#taskchangedviasignatureseventfilter) |
| `TaskCompleted` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`) => [`TaskCompletedEventFilter`](../modules/StagedExpenditureEvents.md#taskcompletedeventfilter) |
| `TaskCompleted(address,uint256)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`) => [`TaskCompletedEventFilter`](../modules/StagedExpenditureEvents.md#taskcompletedeventfilter) |
| `TaskDeliverableSubmitted` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`, `deliverableHash?`: ``null``) => [`TaskDeliverableSubmittedEventFilter`](../modules/StagedExpenditureEvents.md#taskdeliverablesubmittedeventfilter) |
| `TaskDeliverableSubmitted(address,uint256,bytes32)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`, `deliverableHash?`: ``null``) => [`TaskDeliverableSubmittedEventFilter`](../modules/StagedExpenditureEvents.md#taskdeliverablesubmittedeventfilter) |
| `TaskDueDateSet` | (`taskId?`: ``null`` \| `BigNumberish`, `dueDate?`: ``null``) => [`TaskDueDateSetEventFilter`](../modules/StagedExpenditureEvents.md#taskduedateseteventfilter) |
| `TaskDueDateSet(uint256,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `dueDate?`: ``null``) => [`TaskDueDateSetEventFilter`](../modules/StagedExpenditureEvents.md#taskduedateseteventfilter) |
| `TaskFinalized` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`) => [`TaskFinalizedEventFilter`](../modules/StagedExpenditureEvents.md#taskfinalizedeventfilter) |
| `TaskFinalized(address,uint256)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`) => [`TaskFinalizedEventFilter`](../modules/StagedExpenditureEvents.md#taskfinalizedeventfilter) |
| `TaskPayoutSet` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => [`TaskPayoutSetEventFilter`](../modules/StagedExpenditureEvents.md#taskpayoutseteventfilter) |
| `TaskPayoutSet(uint256,uint8,address,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => [`TaskPayoutSetEventFilter`](../modules/StagedExpenditureEvents.md#taskpayoutseteventfilter) |
| `TaskRoleUserSet` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `user?`: ``null`` \| `string`) => [`TaskRoleUserSetEventFilter`](../modules/StagedExpenditureEvents.md#taskroleuserseteventfilter) |
| `TaskRoleUserSet(uint256,uint8,address)` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `user?`: ``null`` \| `string`) => [`TaskRoleUserSetEventFilter`](../modules/StagedExpenditureEvents.md#taskroleuserseteventfilter) |
| `TaskSkillSet` | (`taskId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => [`TaskSkillSetEventFilter`](../modules/StagedExpenditureEvents.md#taskskillseteventfilter) |
| `TaskSkillSet(uint256,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => [`TaskSkillSetEventFilter`](../modules/StagedExpenditureEvents.md#taskskillseteventfilter) |
| `TaskWorkRatingRevealed` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `rating?`: ``null``) => [`TaskWorkRatingRevealedEventFilter`](../modules/StagedExpenditureEvents.md#taskworkratingrevealedeventfilter) |
| `TaskWorkRatingRevealed(address,uint256,uint8,uint8)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `rating?`: ``null``) => [`TaskWorkRatingRevealedEventFilter`](../modules/StagedExpenditureEvents.md#taskworkratingrevealedeventfilter) |
| `TokenUnlocked` | (`agent?`: ``null``) => [`TokenUnlockedEventFilter`](../modules/StagedExpenditureEvents.md#tokenunlockedeventfilter) |
| `TokenUnlocked(address)` | (`agent?`: ``null``) => [`TokenUnlockedEventFilter`](../modules/StagedExpenditureEvents.md#tokenunlockedeventfilter) |
| `TokensBurned` | (`agent?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => [`TokensBurnedEventFilter`](../modules/StagedExpenditureEvents.md#tokensburnedeventfilter) |
| `TokensBurned(address,address,uint256)` | (`agent?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => [`TokensBurnedEventFilter`](../modules/StagedExpenditureEvents.md#tokensburnedeventfilter) |
| `TokensMinted` | (`agent?`: ``null``, `who?`: ``null``, `amount?`: ``null``) => [`TokensMintedEventFilter`](../modules/StagedExpenditureEvents.md#tokensmintedeventfilter) |
| `TokensMinted(address,address,uint256)` | (`agent?`: ``null``, `who?`: ``null``, `amount?`: ``null``) => [`TokensMintedEventFilter`](../modules/StagedExpenditureEvents.md#tokensmintedeventfilter) |

#### Overrides

BaseContract.filters

___

### functions

• **functions**: `Object`

#### Overrides

BaseContract.functions

___

### interface

• **interface**: [`StagedExpenditureEventsInterface`](StagedExpenditureEvents.StagedExpenditureEventsInterface.md)

#### Overrides

BaseContract.interface

___

### off

• **off**: `OnEvent`<[`StagedExpenditureEvents`](StagedExpenditureEvents.StagedExpenditureEvents.md)\>

#### Overrides

BaseContract.off

___

### on

• **on**: `OnEvent`<[`StagedExpenditureEvents`](StagedExpenditureEvents.StagedExpenditureEvents.md)\>

#### Overrides

BaseContract.on

___

### once

• **once**: `OnEvent`<[`StagedExpenditureEvents`](StagedExpenditureEvents.StagedExpenditureEvents.md)\>

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

• **removeListener**: `OnEvent`<[`StagedExpenditureEvents`](StagedExpenditureEvents.StagedExpenditureEvents.md)\>

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

▸ **attach**(`addressOrName`): [`StagedExpenditureEvents`](StagedExpenditureEvents.StagedExpenditureEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`StagedExpenditureEvents`](StagedExpenditureEvents.StagedExpenditureEvents.md)

#### Overrides

BaseContract.attach

___

### connect

▸ **connect**(`signerOrProvider`): [`StagedExpenditureEvents`](StagedExpenditureEvents.StagedExpenditureEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`StagedExpenditureEvents`](StagedExpenditureEvents.StagedExpenditureEvents.md)

#### Overrides

BaseContract.connect

___

### deployed

▸ **deployed**(): `Promise`<[`StagedExpenditureEvents`](StagedExpenditureEvents.StagedExpenditureEvents.md)\>

#### Returns

`Promise`<[`StagedExpenditureEvents`](StagedExpenditureEvents.StagedExpenditureEvents.md)\>

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

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`StagedExpenditureEvents`](StagedExpenditureEvents.StagedExpenditureEvents.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`StagedExpenditureEvents`](StagedExpenditureEvents.StagedExpenditureEvents.md)

#### Overrides

BaseContract.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`StagedExpenditureEvents`](StagedExpenditureEvents.StagedExpenditureEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`StagedExpenditureEvents`](StagedExpenditureEvents.StagedExpenditureEvents.md)

#### Overrides

BaseContract.removeAllListeners
