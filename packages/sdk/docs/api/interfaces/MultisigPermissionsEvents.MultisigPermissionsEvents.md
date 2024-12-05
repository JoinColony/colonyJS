# Interface: MultisigPermissionsEvents

[MultisigPermissionsEvents](../modules/MultisigPermissionsEvents.md).MultisigPermissionsEvents

## Hierarchy

- `BaseContract`

  ↳ **`MultisigPermissionsEvents`**

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
| `Annotation` | (`agent?`: ``null`` \| `string`, `txHash?`: ``null`` \| `BytesLike`, `metadata?`: ``null``) => [`AnnotationEventFilter`](../modules/MultisigPermissionsEvents.md#annotationeventfilter) |
| `Annotation(address,bytes32,string)` | (`agent?`: ``null`` \| `string`, `txHash?`: ``null`` \| `BytesLike`, `metadata?`: ``null``) => [`AnnotationEventFilter`](../modules/MultisigPermissionsEvents.md#annotationeventfilter) |
| `ApprovalChanged` | (`agent?`: ``null``, `motionId?`: ``null``, `role?`: ``null``, `approval?`: ``null``) => [`ApprovalChangedEventFilter`](../modules/MultisigPermissionsEvents.md#approvalchangedeventfilter) |
| `ApprovalChanged(address,uint256,uint8,bool)` | (`agent?`: ``null``, `motionId?`: ``null``, `role?`: ``null``, `approval?`: ``null``) => [`ApprovalChangedEventFilter`](../modules/MultisigPermissionsEvents.md#approvalchangedeventfilter) |
| `ArbitraryReputationUpdate` | (`agent?`: ``null``, `user?`: ``null``, `skillId?`: ``null``, `amount?`: ``null``) => [`ArbitraryReputationUpdateEventFilter`](../modules/MultisigPermissionsEvents.md#arbitraryreputationupdateeventfilter) |
| `ArbitraryReputationUpdate(address,address,uint256,int256)` | (`agent?`: ``null``, `user?`: ``null``, `skillId?`: ``null``, `amount?`: ``null``) => [`ArbitraryReputationUpdateEventFilter`](../modules/MultisigPermissionsEvents.md#arbitraryreputationupdateeventfilter) |
| `ArbitraryTransaction(address,address,bytes,bool)` | (`agent?`: ``null``, `target?`: ``null``, `data?`: ``null``, `success?`: ``null``) => [`ArbitraryTransaction_address_address_bytes_bool_EventFilter`](../modules/MultisigPermissionsEvents.md#arbitrarytransaction_address_address_bytes_bool_eventfilter) |
| `ArbitraryTransaction(address,bytes,bool)` | (`target?`: ``null``, `data?`: ``null``, `success?`: ``null``) => [`ArbitraryTransaction_address_bytes_bool_EventFilter`](../modules/MultisigPermissionsEvents.md#arbitrarytransaction_address_bytes_bool_eventfilter) |
| `ColonyBootstrapped` | (`agent?`: ``null``, `users?`: ``null``, `amounts?`: ``null``) => [`ColonyBootstrappedEventFilter`](../modules/MultisigPermissionsEvents.md#colonybootstrappedeventfilter) |
| `ColonyBootstrapped(address,address[],int256[])` | (`agent?`: ``null``, `users?`: ``null``, `amounts?`: ``null``) => [`ColonyBootstrappedEventFilter`](../modules/MultisigPermissionsEvents.md#colonybootstrappedeventfilter) |
| `ColonyFundsClaimed` | (`agent?`: ``null``, `token?`: ``null``, `fee?`: ``null``, `payoutRemainder?`: ``null``) => [`ColonyFundsClaimedEventFilter`](../modules/MultisigPermissionsEvents.md#colonyfundsclaimedeventfilter) |
| `ColonyFundsClaimed(address,address,uint256,uint256)` | (`agent?`: ``null``, `token?`: ``null``, `fee?`: ``null``, `payoutRemainder?`: ``null``) => [`ColonyFundsClaimedEventFilter`](../modules/MultisigPermissionsEvents.md#colonyfundsclaimedeventfilter) |
| `ColonyFundsMovedBetweenFundingPots` | (`agent?`: ``null``, `fromPot?`: ``null`` \| `BigNumberish`, `toPot?`: ``null`` \| `BigNumberish`, `amount?`: ``null``, `token?`: ``null``) => [`ColonyFundsMovedBetweenFundingPotsEventFilter`](../modules/MultisigPermissionsEvents.md#colonyfundsmovedbetweenfundingpotseventfilter) |
| `ColonyFundsMovedBetweenFundingPots(address,uint256,uint256,uint256,address)` | (`agent?`: ``null``, `fromPot?`: ``null`` \| `BigNumberish`, `toPot?`: ``null`` \| `BigNumberish`, `amount?`: ``null``, `token?`: ``null``) => [`ColonyFundsMovedBetweenFundingPotsEventFilter`](../modules/MultisigPermissionsEvents.md#colonyfundsmovedbetweenfundingpotseventfilter) |
| `ColonyInitialised` | (`agent?`: ``null``, `colonyNetwork?`: ``null``, `token?`: ``null``) => [`ColonyInitialisedEventFilter`](../modules/MultisigPermissionsEvents.md#colonyinitialisedeventfilter) |
| `ColonyInitialised(address,address,address)` | (`agent?`: ``null``, `colonyNetwork?`: ``null``, `token?`: ``null``) => [`ColonyInitialisedEventFilter`](../modules/MultisigPermissionsEvents.md#colonyinitialisedeventfilter) |
| `ColonyMetadata` | (`agent?`: ``null``, `metadata?`: ``null``) => [`ColonyMetadataEventFilter`](../modules/MultisigPermissionsEvents.md#colonymetadataeventfilter) |
| `ColonyMetadata(address,string)` | (`agent?`: ``null``, `metadata?`: ``null``) => [`ColonyMetadataEventFilter`](../modules/MultisigPermissionsEvents.md#colonymetadataeventfilter) |
| `ColonyMetadataDelta` | (`agent?`: ``null``, `metadata?`: ``null``) => [`ColonyMetadataDeltaEventFilter`](../modules/MultisigPermissionsEvents.md#colonymetadatadeltaeventfilter) |
| `ColonyMetadataDelta(address,string)` | (`agent?`: ``null``, `metadata?`: ``null``) => [`ColonyMetadataDeltaEventFilter`](../modules/MultisigPermissionsEvents.md#colonymetadatadeltaeventfilter) |
| `ColonyRewardInverseSet` | (`agent?`: ``null``, `rewardInverse?`: ``null``) => [`ColonyRewardInverseSetEventFilter`](../modules/MultisigPermissionsEvents.md#colonyrewardinverseseteventfilter) |
| `ColonyRewardInverseSet(address,uint256)` | (`agent?`: ``null``, `rewardInverse?`: ``null``) => [`ColonyRewardInverseSetEventFilter`](../modules/MultisigPermissionsEvents.md#colonyrewardinverseseteventfilter) |
| `ColonyRoleSet` | (`agent?`: ``null``, `user?`: ``null`` \| `string`, `domainId?`: ``null`` \| `BigNumberish`, `role?`: ``null`` \| `BigNumberish`, `setTo?`: ``null``) => [`ColonyRoleSetEventFilter`](../modules/MultisigPermissionsEvents.md#colonyroleseteventfilter) |
| `ColonyRoleSet(address,address,uint256,uint8,bool)` | (`agent?`: ``null``, `user?`: ``null`` \| `string`, `domainId?`: ``null`` \| `BigNumberish`, `role?`: ``null`` \| `BigNumberish`, `setTo?`: ``null``) => [`ColonyRoleSetEventFilter`](../modules/MultisigPermissionsEvents.md#colonyroleseteventfilter) |
| `ColonyUpgraded` | (`agent?`: ``null``, `oldVersion?`: ``null``, `newVersion?`: ``null``) => [`ColonyUpgradedEventFilter`](../modules/MultisigPermissionsEvents.md#colonyupgradedeventfilter) |
| `ColonyUpgraded(address,uint256,uint256)` | (`agent?`: ``null``, `oldVersion?`: ``null``, `newVersion?`: ``null``) => [`ColonyUpgradedEventFilter`](../modules/MultisigPermissionsEvents.md#colonyupgradedeventfilter) |
| `DomainAdded` | (`agent?`: ``null``, `domainId?`: ``null``) => [`DomainAddedEventFilter`](../modules/MultisigPermissionsEvents.md#domainaddedeventfilter) |
| `DomainAdded(address,uint256)` | (`agent?`: ``null``, `domainId?`: ``null``) => [`DomainAddedEventFilter`](../modules/MultisigPermissionsEvents.md#domainaddedeventfilter) |
| `DomainDeprecated` | (`agent?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `deprecated?`: ``null``) => [`DomainDeprecatedEventFilter`](../modules/MultisigPermissionsEvents.md#domaindeprecatedeventfilter) |
| `DomainDeprecated(address,uint256,bool)` | (`agent?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `deprecated?`: ``null``) => [`DomainDeprecatedEventFilter`](../modules/MultisigPermissionsEvents.md#domaindeprecatedeventfilter) |
| `DomainMetadata` | (`agent?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => [`DomainMetadataEventFilter`](../modules/MultisigPermissionsEvents.md#domainmetadataeventfilter) |
| `DomainMetadata(address,uint256,string)` | (`agent?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => [`DomainMetadataEventFilter`](../modules/MultisigPermissionsEvents.md#domainmetadataeventfilter) |
| `DomainSkillThresholdSet` | (`domainSkillId?`: ``null``, `threshold?`: ``null``) => [`DomainSkillThresholdSetEventFilter`](../modules/MultisigPermissionsEvents.md#domainskillthresholdseteventfilter) |
| `DomainSkillThresholdSet(uint256,uint256)` | (`domainSkillId?`: ``null``, `threshold?`: ``null``) => [`DomainSkillThresholdSetEventFilter`](../modules/MultisigPermissionsEvents.md#domainskillthresholdseteventfilter) |
| `ExpenditureAdded` | (`agent?`: ``null``, `expenditureId?`: ``null``) => [`ExpenditureAddedEventFilter`](../modules/MultisigPermissionsEvents.md#expenditureaddedeventfilter) |
| `ExpenditureAdded(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null``) => [`ExpenditureAddedEventFilter`](../modules/MultisigPermissionsEvents.md#expenditureaddedeventfilter) |
| `ExpenditureCancelled` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => [`ExpenditureCancelledEventFilter`](../modules/MultisigPermissionsEvents.md#expenditurecancelledeventfilter) |
| `ExpenditureCancelled(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => [`ExpenditureCancelledEventFilter`](../modules/MultisigPermissionsEvents.md#expenditurecancelledeventfilter) |
| `ExpenditureClaimDelaySet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `claimDelay?`: ``null``) => [`ExpenditureClaimDelaySetEventFilter`](../modules/MultisigPermissionsEvents.md#expenditureclaimdelayseteventfilter) |
| `ExpenditureClaimDelaySet(address,uint256,uint256,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `claimDelay?`: ``null``) => [`ExpenditureClaimDelaySetEventFilter`](../modules/MultisigPermissionsEvents.md#expenditureclaimdelayseteventfilter) |
| `ExpenditureFinalized` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => [`ExpenditureFinalizedEventFilter`](../modules/MultisigPermissionsEvents.md#expenditurefinalizedeventfilter) |
| `ExpenditureFinalized(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => [`ExpenditureFinalizedEventFilter`](../modules/MultisigPermissionsEvents.md#expenditurefinalizedeventfilter) |
| `ExpenditureGlobalClaimDelaySet` | (`agent?`: ``null``, `globalClaimDelay?`: ``null``) => [`ExpenditureGlobalClaimDelaySetEventFilter`](../modules/MultisigPermissionsEvents.md#expenditureglobalclaimdelayseteventfilter) |
| `ExpenditureGlobalClaimDelaySet(address,uint256)` | (`agent?`: ``null``, `globalClaimDelay?`: ``null``) => [`ExpenditureGlobalClaimDelaySetEventFilter`](../modules/MultisigPermissionsEvents.md#expenditureglobalclaimdelayseteventfilter) |
| `ExpenditureLocked` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => [`ExpenditureLockedEventFilter`](../modules/MultisigPermissionsEvents.md#expenditurelockedeventfilter) |
| `ExpenditureLocked(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => [`ExpenditureLockedEventFilter`](../modules/MultisigPermissionsEvents.md#expenditurelockedeventfilter) |
| `ExpenditureMetadataSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => [`ExpenditureMetadataSetEventFilter`](../modules/MultisigPermissionsEvents.md#expendituremetadataseteventfilter) |
| `ExpenditureMetadataSet(address,uint256,string)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => [`ExpenditureMetadataSetEventFilter`](../modules/MultisigPermissionsEvents.md#expendituremetadataseteventfilter) |
| `ExpenditurePayoutModifierSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `payoutModifier?`: ``null``) => [`ExpenditurePayoutModifierSetEventFilter`](../modules/MultisigPermissionsEvents.md#expenditurepayoutmodifierseteventfilter) |
| `ExpenditurePayoutModifierSet(address,uint256,uint256,int256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `payoutModifier?`: ``null``) => [`ExpenditurePayoutModifierSetEventFilter`](../modules/MultisigPermissionsEvents.md#expenditurepayoutmodifierseteventfilter) |
| `ExpenditurePayoutSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `token?`: ``null`` \| `string`, `amount?`: ``null``) => [`ExpenditurePayoutSetEventFilter`](../modules/MultisigPermissionsEvents.md#expenditurepayoutseteventfilter) |
| `ExpenditurePayoutSet(address,uint256,uint256,address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `token?`: ``null`` \| `string`, `amount?`: ``null``) => [`ExpenditurePayoutSetEventFilter`](../modules/MultisigPermissionsEvents.md#expenditurepayoutseteventfilter) |
| `ExpenditureRecipientSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `recipient?`: ``null`` \| `string`) => [`ExpenditureRecipientSetEventFilter`](../modules/MultisigPermissionsEvents.md#expenditurerecipientseteventfilter) |
| `ExpenditureRecipientSet(address,uint256,uint256,address)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `recipient?`: ``null`` \| `string`) => [`ExpenditureRecipientSetEventFilter`](../modules/MultisigPermissionsEvents.md#expenditurerecipientseteventfilter) |
| `ExpenditureSkillSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => [`ExpenditureSkillSetEventFilter`](../modules/MultisigPermissionsEvents.md#expenditureskillseteventfilter) |
| `ExpenditureSkillSet(address,uint256,uint256,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => [`ExpenditureSkillSetEventFilter`](../modules/MultisigPermissionsEvents.md#expenditureskillseteventfilter) |
| `ExpenditureStateChanged` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `storageSlot?`: ``null`` \| `BigNumberish`, `mask?`: ``null``, `keys?`: ``null``, `value?`: ``null``) => [`ExpenditureStateChangedEventFilter`](../modules/MultisigPermissionsEvents.md#expenditurestatechangedeventfilter) |
| `ExpenditureStateChanged(address,uint256,uint256,bool[],bytes32[],bytes32)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `storageSlot?`: ``null`` \| `BigNumberish`, `mask?`: ``null``, `keys?`: ``null``, `value?`: ``null``) => [`ExpenditureStateChangedEventFilter`](../modules/MultisigPermissionsEvents.md#expenditurestatechangedeventfilter) |
| `ExpenditureTransferred` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `owner?`: ``null`` \| `string`) => [`ExpenditureTransferredEventFilter`](../modules/MultisigPermissionsEvents.md#expendituretransferredeventfilter) |
| `ExpenditureTransferred(address,uint256,address)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `owner?`: ``null`` \| `string`) => [`ExpenditureTransferredEventFilter`](../modules/MultisigPermissionsEvents.md#expendituretransferredeventfilter) |
| `ExtensionInitialised` | () => [`ExtensionInitialisedEventFilter`](../modules/MultisigPermissionsEvents.md#extensioninitialisedeventfilter) |
| `ExtensionInitialised()` | () => [`ExtensionInitialisedEventFilter`](../modules/MultisigPermissionsEvents.md#extensioninitialisedeventfilter) |
| `FundingPotAdded` | (`fundingPotId?`: ``null``) => [`FundingPotAddedEventFilter`](../modules/MultisigPermissionsEvents.md#fundingpotaddedeventfilter) |
| `FundingPotAdded(uint256)` | (`fundingPotId?`: ``null``) => [`FundingPotAddedEventFilter`](../modules/MultisigPermissionsEvents.md#fundingpotaddedeventfilter) |
| `GlobalThresholdSet` | (`globalThreshold?`: ``null``) => [`GlobalThresholdSetEventFilter`](../modules/MultisigPermissionsEvents.md#globalthresholdseteventfilter) |
| `GlobalThresholdSet(uint256)` | (`globalThreshold?`: ``null``) => [`GlobalThresholdSetEventFilter`](../modules/MultisigPermissionsEvents.md#globalthresholdseteventfilter) |
| `LocalSkillAdded` | (`agent?`: ``null``, `localSkillId?`: ``null``) => [`LocalSkillAddedEventFilter`](../modules/MultisigPermissionsEvents.md#localskilladdedeventfilter) |
| `LocalSkillAdded(address,uint256)` | (`agent?`: ``null``, `localSkillId?`: ``null``) => [`LocalSkillAddedEventFilter`](../modules/MultisigPermissionsEvents.md#localskilladdedeventfilter) |
| `LocalSkillDeprecated` | (`agent?`: ``null``, `localSkillId?`: ``null``, `deprecated?`: ``null``) => [`LocalSkillDeprecatedEventFilter`](../modules/MultisigPermissionsEvents.md#localskilldeprecatedeventfilter) |
| `LocalSkillDeprecated(address,uint256,bool)` | (`agent?`: ``null``, `localSkillId?`: ``null``, `deprecated?`: ``null``) => [`LocalSkillDeprecatedEventFilter`](../modules/MultisigPermissionsEvents.md#localskilldeprecatedeventfilter) |
| `LogSetAuthority` | (`authority?`: ``null`` \| `string`) => [`LogSetAuthorityEventFilter`](../modules/MultisigPermissionsEvents.md#logsetauthorityeventfilter) |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `string`) => [`LogSetAuthorityEventFilter`](../modules/MultisigPermissionsEvents.md#logsetauthorityeventfilter) |
| `LogSetOwner` | (`owner?`: ``null`` \| `string`) => [`LogSetOwnerEventFilter`](../modules/MultisigPermissionsEvents.md#logsetownereventfilter) |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `string`) => [`LogSetOwnerEventFilter`](../modules/MultisigPermissionsEvents.md#logsetownereventfilter) |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => [`MetaTransactionExecutedEventFilter`](../modules/MultisigPermissionsEvents.md#metatransactionexecutedeventfilter) |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => [`MetaTransactionExecutedEventFilter`](../modules/MultisigPermissionsEvents.md#metatransactionexecutedeventfilter) |
| `MotionCancelled` | (`agent?`: ``null``, `motionId?`: ``null``) => [`MotionCancelledEventFilter`](../modules/MultisigPermissionsEvents.md#motioncancelledeventfilter) |
| `MotionCancelled(address,uint256)` | (`agent?`: ``null``, `motionId?`: ``null``) => [`MotionCancelledEventFilter`](../modules/MultisigPermissionsEvents.md#motioncancelledeventfilter) |
| `MotionCreated` | (`agent?`: ``null``, `motionId?`: ``null``) => [`MotionCreatedEventFilter`](../modules/MultisigPermissionsEvents.md#motioncreatedeventfilter) |
| `MotionCreated(address,uint256)` | (`agent?`: ``null``, `motionId?`: ``null``) => [`MotionCreatedEventFilter`](../modules/MultisigPermissionsEvents.md#motioncreatedeventfilter) |
| `MotionExecuted` | (`agent?`: ``null``, `motionId?`: ``null``, `success?`: ``null``) => [`MotionExecutedEventFilter`](../modules/MultisigPermissionsEvents.md#motionexecutedeventfilter) |
| `MotionExecuted(address,uint256,bool)` | (`agent?`: ``null``, `motionId?`: ``null``, `success?`: ``null``) => [`MotionExecutedEventFilter`](../modules/MultisigPermissionsEvents.md#motionexecutedeventfilter) |
| `MultisigRoleSet` | (`agent?`: ``null``, `user?`: ``null``, `domainId?`: ``null``, `roleId?`: ``null``, `setTo?`: ``null``) => [`MultisigRoleSetEventFilter`](../modules/MultisigPermissionsEvents.md#multisigroleseteventfilter) |
| `MultisigRoleSet(address,address,uint256,uint256,bool)` | (`agent?`: ``null``, `user?`: ``null``, `domainId?`: ``null``, `roleId?`: ``null``, `setTo?`: ``null``) => [`MultisigRoleSetEventFilter`](../modules/MultisigPermissionsEvents.md#multisigroleseteventfilter) |
| `PaymentAdded` | (`agent?`: ``null``, `paymentId?`: ``null``) => [`PaymentAddedEventFilter`](../modules/MultisigPermissionsEvents.md#paymentaddedeventfilter) |
| `PaymentAdded(address,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null``) => [`PaymentAddedEventFilter`](../modules/MultisigPermissionsEvents.md#paymentaddedeventfilter) |
| `PaymentFinalized` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`) => [`PaymentFinalizedEventFilter`](../modules/MultisigPermissionsEvents.md#paymentfinalizedeventfilter) |
| `PaymentFinalized(address,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`) => [`PaymentFinalizedEventFilter`](../modules/MultisigPermissionsEvents.md#paymentfinalizedeventfilter) |
| `PaymentPayoutSet` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => [`PaymentPayoutSetEventFilter`](../modules/MultisigPermissionsEvents.md#paymentpayoutseteventfilter) |
| `PaymentPayoutSet(address,uint256,address,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => [`PaymentPayoutSetEventFilter`](../modules/MultisigPermissionsEvents.md#paymentpayoutseteventfilter) |
| `PaymentRecipientSet` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `recipient?`: ``null``) => [`PaymentRecipientSetEventFilter`](../modules/MultisigPermissionsEvents.md#paymentrecipientseteventfilter) |
| `PaymentRecipientSet(address,uint256,address)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `recipient?`: ``null``) => [`PaymentRecipientSetEventFilter`](../modules/MultisigPermissionsEvents.md#paymentrecipientseteventfilter) |
| `PaymentSkillSet` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null``) => [`PaymentSkillSetEventFilter`](../modules/MultisigPermissionsEvents.md#paymentskillseteventfilter) |
| `PaymentSkillSet(address,uint256,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null``) => [`PaymentSkillSetEventFilter`](../modules/MultisigPermissionsEvents.md#paymentskillseteventfilter) |
| `PayoutClaimed(address,uint256,address,uint256)` | (`agent?`: ``null``, `fundingPotId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => [`PayoutClaimed_address_uint256_address_uint256_EventFilter`](../modules/MultisigPermissionsEvents.md#payoutclaimed_address_uint256_address_uint256_eventfilter) |
| `PayoutClaimed(address,uint256,uint256,address,uint256)` | (`agent?`: ``null``, `id?`: ``null``, `slot?`: ``null``, `token?`: ``null``, `tokenPayout?`: ``null``) => [`PayoutClaimed_address_uint256_uint256_address_uint256_EventFilter`](../modules/MultisigPermissionsEvents.md#payoutclaimed_address_uint256_uint256_address_uint256_eventfilter) |
| `RejectionChanged` | (`agent?`: ``null``, `motionId?`: ``null``, `role?`: ``null``, `approval?`: ``null``) => [`RejectionChangedEventFilter`](../modules/MultisigPermissionsEvents.md#rejectionchangedeventfilter) |
| `RejectionChanged(address,uint256,uint8,bool)` | (`agent?`: ``null``, `motionId?`: ``null``, `role?`: ``null``, `approval?`: ``null``) => [`RejectionChangedEventFilter`](../modules/MultisigPermissionsEvents.md#rejectionchangedeventfilter) |
| `RewardPayoutClaimed` | (`rewardPayoutId?`: ``null``, `user?`: ``null``, `fee?`: ``null``, `rewardRemainder?`: ``null``) => [`RewardPayoutClaimedEventFilter`](../modules/MultisigPermissionsEvents.md#rewardpayoutclaimedeventfilter) |
| `RewardPayoutClaimed(uint256,address,uint256,uint256)` | (`rewardPayoutId?`: ``null``, `user?`: ``null``, `fee?`: ``null``, `rewardRemainder?`: ``null``) => [`RewardPayoutClaimedEventFilter`](../modules/MultisigPermissionsEvents.md#rewardpayoutclaimedeventfilter) |
| `RewardPayoutCycleEnded` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => [`RewardPayoutCycleEndedEventFilter`](../modules/MultisigPermissionsEvents.md#rewardpayoutcycleendedeventfilter) |
| `RewardPayoutCycleEnded(address,uint256)` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => [`RewardPayoutCycleEndedEventFilter`](../modules/MultisigPermissionsEvents.md#rewardpayoutcycleendedeventfilter) |
| `RewardPayoutCycleStarted` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => [`RewardPayoutCycleStartedEventFilter`](../modules/MultisigPermissionsEvents.md#rewardpayoutcyclestartedeventfilter) |
| `RewardPayoutCycleStarted(address,uint256)` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => [`RewardPayoutCycleStartedEventFilter`](../modules/MultisigPermissionsEvents.md#rewardpayoutcyclestartedeventfilter) |
| `TaskAdded` | (`agent?`: ``null``, `taskId?`: ``null``) => [`TaskAddedEventFilter`](../modules/MultisigPermissionsEvents.md#taskaddedeventfilter) |
| `TaskAdded(address,uint256)` | (`agent?`: ``null``, `taskId?`: ``null``) => [`TaskAddedEventFilter`](../modules/MultisigPermissionsEvents.md#taskaddedeventfilter) |
| `TaskBriefSet` | (`taskId?`: ``null`` \| `BigNumberish`, `specificationHash?`: ``null``) => [`TaskBriefSetEventFilter`](../modules/MultisigPermissionsEvents.md#taskbriefseteventfilter) |
| `TaskBriefSet(uint256,bytes32)` | (`taskId?`: ``null`` \| `BigNumberish`, `specificationHash?`: ``null``) => [`TaskBriefSetEventFilter`](../modules/MultisigPermissionsEvents.md#taskbriefseteventfilter) |
| `TaskCanceled` | (`taskId?`: ``null`` \| `BigNumberish`) => [`TaskCanceledEventFilter`](../modules/MultisigPermissionsEvents.md#taskcanceledeventfilter) |
| `TaskCanceled(uint256)` | (`taskId?`: ``null`` \| `BigNumberish`) => [`TaskCanceledEventFilter`](../modules/MultisigPermissionsEvents.md#taskcanceledeventfilter) |
| `TaskChangedViaSignatures` | (`reviewerAddresses?`: ``null``) => [`TaskChangedViaSignaturesEventFilter`](../modules/MultisigPermissionsEvents.md#taskchangedviasignatureseventfilter) |
| `TaskChangedViaSignatures(address[])` | (`reviewerAddresses?`: ``null``) => [`TaskChangedViaSignaturesEventFilter`](../modules/MultisigPermissionsEvents.md#taskchangedviasignatureseventfilter) |
| `TaskCompleted` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`) => [`TaskCompletedEventFilter`](../modules/MultisigPermissionsEvents.md#taskcompletedeventfilter) |
| `TaskCompleted(address,uint256)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`) => [`TaskCompletedEventFilter`](../modules/MultisigPermissionsEvents.md#taskcompletedeventfilter) |
| `TaskDeliverableSubmitted` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`, `deliverableHash?`: ``null``) => [`TaskDeliverableSubmittedEventFilter`](../modules/MultisigPermissionsEvents.md#taskdeliverablesubmittedeventfilter) |
| `TaskDeliverableSubmitted(address,uint256,bytes32)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`, `deliverableHash?`: ``null``) => [`TaskDeliverableSubmittedEventFilter`](../modules/MultisigPermissionsEvents.md#taskdeliverablesubmittedeventfilter) |
| `TaskDueDateSet` | (`taskId?`: ``null`` \| `BigNumberish`, `dueDate?`: ``null``) => [`TaskDueDateSetEventFilter`](../modules/MultisigPermissionsEvents.md#taskduedateseteventfilter) |
| `TaskDueDateSet(uint256,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `dueDate?`: ``null``) => [`TaskDueDateSetEventFilter`](../modules/MultisigPermissionsEvents.md#taskduedateseteventfilter) |
| `TaskFinalized` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`) => [`TaskFinalizedEventFilter`](../modules/MultisigPermissionsEvents.md#taskfinalizedeventfilter) |
| `TaskFinalized(address,uint256)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`) => [`TaskFinalizedEventFilter`](../modules/MultisigPermissionsEvents.md#taskfinalizedeventfilter) |
| `TaskPayoutSet` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => [`TaskPayoutSetEventFilter`](../modules/MultisigPermissionsEvents.md#taskpayoutseteventfilter) |
| `TaskPayoutSet(uint256,uint8,address,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => [`TaskPayoutSetEventFilter`](../modules/MultisigPermissionsEvents.md#taskpayoutseteventfilter) |
| `TaskRoleUserSet` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `user?`: ``null`` \| `string`) => [`TaskRoleUserSetEventFilter`](../modules/MultisigPermissionsEvents.md#taskroleuserseteventfilter) |
| `TaskRoleUserSet(uint256,uint8,address)` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `user?`: ``null`` \| `string`) => [`TaskRoleUserSetEventFilter`](../modules/MultisigPermissionsEvents.md#taskroleuserseteventfilter) |
| `TaskSkillSet` | (`taskId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => [`TaskSkillSetEventFilter`](../modules/MultisigPermissionsEvents.md#taskskillseteventfilter) |
| `TaskSkillSet(uint256,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => [`TaskSkillSetEventFilter`](../modules/MultisigPermissionsEvents.md#taskskillseteventfilter) |
| `TaskWorkRatingRevealed` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `rating?`: ``null``) => [`TaskWorkRatingRevealedEventFilter`](../modules/MultisigPermissionsEvents.md#taskworkratingrevealedeventfilter) |
| `TaskWorkRatingRevealed(address,uint256,uint8,uint8)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `rating?`: ``null``) => [`TaskWorkRatingRevealedEventFilter`](../modules/MultisigPermissionsEvents.md#taskworkratingrevealedeventfilter) |
| `TokenUnlocked` | (`agent?`: ``null``) => [`TokenUnlockedEventFilter`](../modules/MultisigPermissionsEvents.md#tokenunlockedeventfilter) |
| `TokenUnlocked(address)` | (`agent?`: ``null``) => [`TokenUnlockedEventFilter`](../modules/MultisigPermissionsEvents.md#tokenunlockedeventfilter) |
| `TokensBurned` | (`agent?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => [`TokensBurnedEventFilter`](../modules/MultisigPermissionsEvents.md#tokensburnedeventfilter) |
| `TokensBurned(address,address,uint256)` | (`agent?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => [`TokensBurnedEventFilter`](../modules/MultisigPermissionsEvents.md#tokensburnedeventfilter) |
| `TokensMinted` | (`agent?`: ``null``, `who?`: ``null``, `amount?`: ``null``) => [`TokensMintedEventFilter`](../modules/MultisigPermissionsEvents.md#tokensmintedeventfilter) |
| `TokensMinted(address,address,uint256)` | (`agent?`: ``null``, `who?`: ``null``, `amount?`: ``null``) => [`TokensMintedEventFilter`](../modules/MultisigPermissionsEvents.md#tokensmintedeventfilter) |

#### Overrides

BaseContract.filters

___

### functions

• **functions**: `Object`

#### Overrides

BaseContract.functions

___

### interface

• **interface**: [`MultisigPermissionsEventsInterface`](MultisigPermissionsEvents.MultisigPermissionsEventsInterface.md)

#### Overrides

BaseContract.interface

___

### off

• **off**: `OnEvent`<[`MultisigPermissionsEvents`](MultisigPermissionsEvents.MultisigPermissionsEvents.md)\>

#### Overrides

BaseContract.off

___

### on

• **on**: `OnEvent`<[`MultisigPermissionsEvents`](MultisigPermissionsEvents.MultisigPermissionsEvents.md)\>

#### Overrides

BaseContract.on

___

### once

• **once**: `OnEvent`<[`MultisigPermissionsEvents`](MultisigPermissionsEvents.MultisigPermissionsEvents.md)\>

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

• **removeListener**: `OnEvent`<[`MultisigPermissionsEvents`](MultisigPermissionsEvents.MultisigPermissionsEvents.md)\>

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

▸ **attach**(`addressOrName`): [`MultisigPermissionsEvents`](MultisigPermissionsEvents.MultisigPermissionsEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`MultisigPermissionsEvents`](MultisigPermissionsEvents.MultisigPermissionsEvents.md)

#### Overrides

BaseContract.attach

___

### connect

▸ **connect**(`signerOrProvider`): [`MultisigPermissionsEvents`](MultisigPermissionsEvents.MultisigPermissionsEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`MultisigPermissionsEvents`](MultisigPermissionsEvents.MultisigPermissionsEvents.md)

#### Overrides

BaseContract.connect

___

### deployed

▸ **deployed**(): `Promise`<[`MultisigPermissionsEvents`](MultisigPermissionsEvents.MultisigPermissionsEvents.md)\>

#### Returns

`Promise`<[`MultisigPermissionsEvents`](MultisigPermissionsEvents.MultisigPermissionsEvents.md)\>

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

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`MultisigPermissionsEvents`](MultisigPermissionsEvents.MultisigPermissionsEvents.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`MultisigPermissionsEvents`](MultisigPermissionsEvents.MultisigPermissionsEvents.md)

#### Overrides

BaseContract.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`MultisigPermissionsEvents`](MultisigPermissionsEvents.MultisigPermissionsEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`MultisigPermissionsEvents`](MultisigPermissionsEvents.MultisigPermissionsEvents.md)

#### Overrides

BaseContract.removeAllListeners
