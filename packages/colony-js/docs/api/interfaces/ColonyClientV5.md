# Interface: ColonyClientV5

## Hierarchy

- `AugmentedIColony`<`IColony`\>

- `ColonyAugmentsV3`<`IColony`\>

- `ColonyAugmentsV4`<`IColony`\>

- `ColonyAugmentsV5`<`IColony`\>

- `AddDomainAugmentsB`<`IColony`\>

- `MoveFundsBetweenPotsAugmentsA`<`IColony`\>

- `SetExpenditureClaimDelayAugments`<`IColony`\>

- `SetExpenditurePayoutModifierAugments`<`IColony`\>

  ↳ **`ColonyClientV5`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

AugmentedIColony.\_deployedPromise

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

AugmentedIColony.\_runningEvents

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

AugmentedIColony.\_wrappedEmits

___

### address

• `Readonly` **address**: `string`

#### Inherited from

AugmentedIColony.address

___

### clientType

• **clientType**: [`ColonyClient`](../enums/ClientType.md#colonyclient)

#### Inherited from

AugmentedIColony.clientType

___

### clientVersion

• **clientVersion**: ``5``

#### Overrides

AugmentedIColony.clientVersion

___

### colonyEvents

• **colonyEvents**: `IColonyEvents`

The colonyEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

#### Inherited from

AugmentedIColony.colonyEvents

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

AugmentedIColony.deployTransaction

___

### estimateGas

• **estimateGas**: `ColonyClientV5Estimate`

#### Overrides

AugmentedIColony.estimateGas

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Annotation` | (`agent?`: ``null`` \| `PromiseOrValue`<`string`\>, `txHash?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `metadata?`: ``null``) => `AnnotationEventFilter` |
| `Annotation(address,bytes32,string)` | (`agent?`: ``null`` \| `PromiseOrValue`<`string`\>, `txHash?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `metadata?`: ``null``) => `AnnotationEventFilter` |
| `ColonyBootstrapped` | (`agent?`: ``null``, `users?`: ``null``, `amounts?`: ``null``) => `ColonyBootstrappedEventFilter` |
| `ColonyBootstrapped(address,address[],int256[])` | (`agent?`: ``null``, `users?`: ``null``, `amounts?`: ``null``) => `ColonyBootstrappedEventFilter` |
| `ColonyFundsClaimed` | (`agent?`: ``null``, `token?`: ``null``, `fee?`: ``null``, `payoutRemainder?`: ``null``) => `ColonyFundsClaimedEventFilter` |
| `ColonyFundsClaimed(address,address,uint256,uint256)` | (`agent?`: ``null``, `token?`: ``null``, `fee?`: ``null``, `payoutRemainder?`: ``null``) => `ColonyFundsClaimedEventFilter` |
| `ColonyFundsMovedBetweenFundingPots` | (`agent?`: ``null``, `fromPot?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `toPot?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `amount?`: ``null``, `token?`: ``null``) => `ColonyFundsMovedBetweenFundingPotsEventFilter` |
| `ColonyFundsMovedBetweenFundingPots(address,uint256,uint256,uint256,address)` | (`agent?`: ``null``, `fromPot?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `toPot?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `amount?`: ``null``, `token?`: ``null``) => `ColonyFundsMovedBetweenFundingPotsEventFilter` |
| `ColonyInitialised` | (`agent?`: ``null``, `colonyNetwork?`: ``null``, `token?`: ``null``) => `ColonyInitialisedEventFilter` |
| `ColonyInitialised(address,address,address)` | (`agent?`: ``null``, `colonyNetwork?`: ``null``, `token?`: ``null``) => `ColonyInitialisedEventFilter` |
| `ColonyMetadata` | (`agent?`: ``null``, `metadata?`: ``null``) => `ColonyMetadataEventFilter` |
| `ColonyMetadata(address,string)` | (`agent?`: ``null``, `metadata?`: ``null``) => `ColonyMetadataEventFilter` |
| `ColonyRewardInverseSet` | (`agent?`: ``null``, `rewardInverse?`: ``null``) => `ColonyRewardInverseSetEventFilter` |
| `ColonyRewardInverseSet(address,uint256)` | (`agent?`: ``null``, `rewardInverse?`: ``null``) => `ColonyRewardInverseSetEventFilter` |
| `ColonyRoleSet` | (`agent?`: ``null``, `user?`: ``null`` \| `PromiseOrValue`<`string`\>, `domainId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `role?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `setTo?`: ``null``) => `ColonyRoleSetEventFilter` |
| `ColonyRoleSet(address,address,uint256,uint8,bool)` | (`agent?`: ``null``, `user?`: ``null`` \| `PromiseOrValue`<`string`\>, `domainId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `role?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `setTo?`: ``null``) => `ColonyRoleSetEventFilter` |
| `ColonyUpgraded` | (`agent?`: ``null``, `oldVersion?`: ``null``, `newVersion?`: ``null``) => `ColonyUpgradedEventFilter` |
| `ColonyUpgraded(address,uint256,uint256)` | (`agent?`: ``null``, `oldVersion?`: ``null``, `newVersion?`: ``null``) => `ColonyUpgradedEventFilter` |
| `DomainAdded` | (`agent?`: ``null``, `domainId?`: ``null``) => `DomainAddedEventFilter` |
| `DomainAdded(address,uint256)` | (`agent?`: ``null``, `domainId?`: ``null``) => `DomainAddedEventFilter` |
| `DomainMetadata` | (`agent?`: ``null``, `domainId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `metadata?`: ``null``) => `DomainMetadataEventFilter` |
| `DomainMetadata(address,uint256,string)` | (`agent?`: ``null``, `domainId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `metadata?`: ``null``) => `DomainMetadataEventFilter` |
| `ExpenditureAdded` | (`agent?`: ``null``, `expenditureId?`: ``null``) => `ExpenditureAddedEventFilter` |
| `ExpenditureAdded(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null``) => `ExpenditureAddedEventFilter` |
| `ExpenditureCancelled` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `ExpenditureCancelledEventFilter` |
| `ExpenditureCancelled(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `ExpenditureCancelledEventFilter` |
| `ExpenditureFinalized` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `ExpenditureFinalizedEventFilter` |
| `ExpenditureFinalized(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `ExpenditureFinalizedEventFilter` |
| `ExpenditurePayoutSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `slot?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `token?`: ``null`` \| `PromiseOrValue`<`string`\>, `amount?`: ``null``) => `ExpenditurePayoutSetEventFilter` |
| `ExpenditurePayoutSet(address,uint256,uint256,address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `slot?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `token?`: ``null`` \| `PromiseOrValue`<`string`\>, `amount?`: ``null``) => `ExpenditurePayoutSetEventFilter` |
| `ExpenditureRecipientSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `slot?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `recipient?`: ``null`` \| `PromiseOrValue`<`string`\>) => `ExpenditureRecipientSetEventFilter` |
| `ExpenditureRecipientSet(address,uint256,uint256,address)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `slot?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `recipient?`: ``null`` \| `PromiseOrValue`<`string`\>) => `ExpenditureRecipientSetEventFilter` |
| `ExpenditureSkillSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `slot?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `skillId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `ExpenditureSkillSetEventFilter` |
| `ExpenditureSkillSet(address,uint256,uint256,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `slot?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `skillId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `ExpenditureSkillSetEventFilter` |
| `ExpenditureTransferred` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `owner?`: ``null`` \| `PromiseOrValue`<`string`\>) => `ExpenditureTransferredEventFilter` |
| `ExpenditureTransferred(address,uint256,address)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `owner?`: ``null`` \| `PromiseOrValue`<`string`\>) => `ExpenditureTransferredEventFilter` |
| `FundingPotAdded` | (`fundingPotId?`: ``null``) => `FundingPotAddedEventFilter` |
| `FundingPotAdded(uint256)` | (`fundingPotId?`: ``null``) => `FundingPotAddedEventFilter` |
| `PaymentAdded` | (`agent?`: ``null``, `paymentId?`: ``null``) => `PaymentAddedEventFilter` |
| `PaymentAdded(address,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null``) => `PaymentAddedEventFilter` |
| `PaymentFinalized` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `PaymentFinalizedEventFilter` |
| `PaymentFinalized(address,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `PaymentFinalizedEventFilter` |
| `PaymentPayoutSet` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `token?`: ``null``, `amount?`: ``null``) => `PaymentPayoutSetEventFilter` |
| `PaymentPayoutSet(address,uint256,address,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `token?`: ``null``, `amount?`: ``null``) => `PaymentPayoutSetEventFilter` |
| `PaymentRecipientSet` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `recipient?`: ``null``) => `PaymentRecipientSetEventFilter` |
| `PaymentRecipientSet(address,uint256,address)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `recipient?`: ``null``) => `PaymentRecipientSetEventFilter` |
| `PaymentSkillSet` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `skillId?`: ``null``) => `PaymentSkillSetEventFilter` |
| `PaymentSkillSet(address,uint256,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `skillId?`: ``null``) => `PaymentSkillSetEventFilter` |
| `PayoutClaimed` | (`agent?`: ``null``, `fundingPotId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `token?`: ``null``, `amount?`: ``null``) => `PayoutClaimedEventFilter` |
| `PayoutClaimed(address,uint256,address,uint256)` | (`agent?`: ``null``, `fundingPotId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `token?`: ``null``, `amount?`: ``null``) => `PayoutClaimedEventFilter` |
| `RecoveryModeEntered` | (`user?`: ``null``) => `RecoveryModeEnteredEventFilter` |
| `RecoveryModeEntered(address)` | (`user?`: ``null``) => `RecoveryModeEnteredEventFilter` |
| `RecoveryModeExitApproved` | (`user?`: ``null``) => `RecoveryModeExitApprovedEventFilter` |
| `RecoveryModeExitApproved(address)` | (`user?`: ``null``) => `RecoveryModeExitApprovedEventFilter` |
| `RecoveryModeExited` | (`user?`: ``null``) => `RecoveryModeExitedEventFilter` |
| `RecoveryModeExited(address)` | (`user?`: ``null``) => `RecoveryModeExitedEventFilter` |
| `RecoveryRoleSet` | (`user?`: ``null`` \| `PromiseOrValue`<`string`\>, `setTo?`: ``null``) => `RecoveryRoleSetEventFilter` |
| `RecoveryRoleSet(address,bool)` | (`user?`: ``null`` \| `PromiseOrValue`<`string`\>, `setTo?`: ``null``) => `RecoveryRoleSetEventFilter` |
| `RecoveryStorageSlotSet` | (`user?`: ``null``, `slot?`: ``null``, `fromValue?`: ``null``, `toValue?`: ``null``) => `RecoveryStorageSlotSetEventFilter` |
| `RecoveryStorageSlotSet(address,uint256,bytes32,bytes32)` | (`user?`: ``null``, `slot?`: ``null``, `fromValue?`: ``null``, `toValue?`: ``null``) => `RecoveryStorageSlotSetEventFilter` |
| `RewardPayoutClaimed` | (`rewardPayoutId?`: ``null``, `user?`: ``null``, `fee?`: ``null``, `rewardRemainder?`: ``null``) => `RewardPayoutClaimedEventFilter` |
| `RewardPayoutClaimed(uint256,address,uint256,uint256)` | (`rewardPayoutId?`: ``null``, `user?`: ``null``, `fee?`: ``null``, `rewardRemainder?`: ``null``) => `RewardPayoutClaimedEventFilter` |
| `RewardPayoutCycleEnded` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => `RewardPayoutCycleEndedEventFilter` |
| `RewardPayoutCycleEnded(address,uint256)` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => `RewardPayoutCycleEndedEventFilter` |
| `RewardPayoutCycleStarted` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => `RewardPayoutCycleStartedEventFilter` |
| `RewardPayoutCycleStarted(address,uint256)` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => `RewardPayoutCycleStartedEventFilter` |
| `TaskAdded` | (`agent?`: ``null``, `taskId?`: ``null``) => `TaskAddedEventFilter` |
| `TaskAdded(address,uint256)` | (`agent?`: ``null``, `taskId?`: ``null``) => `TaskAddedEventFilter` |
| `TaskBriefSet` | (`taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `specificationHash?`: ``null``) => `TaskBriefSetEventFilter` |
| `TaskBriefSet(uint256,bytes32)` | (`taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `specificationHash?`: ``null``) => `TaskBriefSetEventFilter` |
| `TaskCanceled` | (`taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `TaskCanceledEventFilter` |
| `TaskCanceled(uint256)` | (`taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `TaskCanceledEventFilter` |
| `TaskChangedViaSignatures` | (`reviewerAddresses?`: ``null``) => `TaskChangedViaSignaturesEventFilter` |
| `TaskChangedViaSignatures(address[])` | (`reviewerAddresses?`: ``null``) => `TaskChangedViaSignaturesEventFilter` |
| `TaskCompleted` | (`agent?`: ``null``, `taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `TaskCompletedEventFilter` |
| `TaskCompleted(address,uint256)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `TaskCompletedEventFilter` |
| `TaskDeliverableSubmitted` | (`agent?`: ``null``, `taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `deliverableHash?`: ``null``) => `TaskDeliverableSubmittedEventFilter` |
| `TaskDeliverableSubmitted(address,uint256,bytes32)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `deliverableHash?`: ``null``) => `TaskDeliverableSubmittedEventFilter` |
| `TaskDueDateSet` | (`taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `dueDate?`: ``null``) => `TaskDueDateSetEventFilter` |
| `TaskDueDateSet(uint256,uint256)` | (`taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `dueDate?`: ``null``) => `TaskDueDateSetEventFilter` |
| `TaskFinalized` | (`agent?`: ``null``, `taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `TaskFinalizedEventFilter` |
| `TaskFinalized(address,uint256)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `TaskFinalizedEventFilter` |
| `TaskPayoutSet` | (`taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `role?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => `TaskPayoutSetEventFilter` |
| `TaskPayoutSet(uint256,uint8,address,uint256)` | (`taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `role?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => `TaskPayoutSetEventFilter` |
| `TaskRoleUserSet` | (`taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `role?`: ``null``, `user?`: ``null`` \| `PromiseOrValue`<`string`\>) => `TaskRoleUserSetEventFilter` |
| `TaskRoleUserSet(uint256,uint8,address)` | (`taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `role?`: ``null``, `user?`: ``null`` \| `PromiseOrValue`<`string`\>) => `TaskRoleUserSetEventFilter` |
| `TaskSkillSet` | (`taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `skillId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `TaskSkillSetEventFilter` |
| `TaskSkillSet(uint256,uint256)` | (`taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `skillId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `TaskSkillSetEventFilter` |
| `TaskWorkRatingRevealed` | (`agent?`: ``null``, `taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `role?`: ``null``, `rating?`: ``null``) => `TaskWorkRatingRevealedEventFilter` |
| `TaskWorkRatingRevealed(address,uint256,uint8,uint8)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `role?`: ``null``, `rating?`: ``null``) => `TaskWorkRatingRevealedEventFilter` |
| `TokenUnlocked` | () => `TokenUnlockedEventFilter` |
| `TokenUnlocked()` | () => `TokenUnlockedEventFilter` |
| `TokensBurned` | (`agent?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => `TokensBurnedEventFilter` |
| `TokensBurned(address,address,uint256)` | (`agent?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => `TokensBurnedEventFilter` |
| `TokensMinted` | (`agent?`: ``null``, `who?`: ``null``, `amount?`: ``null``) => `TokensMintedEventFilter` |
| `TokensMinted(address,address,uint256)` | (`agent?`: ``null``, `who?`: ``null``, `amount?`: ``null``) => `TokensMintedEventFilter` |

#### Inherited from

AugmentedIColony.filters

___

### interface

• **interface**: `IColonyInterface`

#### Inherited from

AugmentedIColony.interface

___

### networkClient

• **networkClient**: [`ColonyNetworkClient`](ColonyNetworkClient.md)

An instance of the ColonyNetworkClient

#### Inherited from

AugmentedIColony.networkClient

___

### off

• **off**: `OnEvent`<[`ColonyClientV5`](ColonyClientV5.md)\>

#### Inherited from

AugmentedIColony.off

___

### on

• **on**: `OnEvent`<[`ColonyClientV5`](ColonyClientV5.md)\>

#### Inherited from

AugmentedIColony.on

___

### once

• **once**: `OnEvent`<[`ColonyClientV5`](ColonyClientV5.md)\>

#### Inherited from

AugmentedIColony.once

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

AugmentedIColony.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`ColonyClientV5`](ColonyClientV5.md)\>

#### Inherited from

AugmentedIColony.removeListener

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

AugmentedIColony.resolvedAddress

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

AugmentedIColony.signer

___

### tokenClient

• **tokenClient**: [`TokenClient`](../README.md#tokenclient)

An instance of the TokenClient for the Colony's native token

#### Inherited from

AugmentedIColony.tokenClient

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

AugmentedIColony.\_checkRunningEvents

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

AugmentedIColony.\_deployed

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

AugmentedIColony.\_wrapEvent

___

### addDomain(uint256,uint256,uint256)

▸ **addDomain(uint256,uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_parentDomainId`, `overrides?`): `Promise`<`ContractTransaction`\>

Adding new domains is currently retricted to one level only, i.e. `_parentDomainId` has to be the root domain id: `1`.
Add a colony domain, and its respective local skill under skill with id `_parentSkillId`. New funding pot is created and associated with the domain here.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_parentDomainId` | `PromiseOrValue`<`BigNumberish`\> | Id of the domain under which the new one will be added |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.addDomain(uint256,uint256,uint256)

___

### addDomain(uint256,uint256,uint256,string)

▸ **addDomain(uint256,uint256,uint256,string)**(`_permissionDomainId`, `_childSkillIndex`, `_parentDomainId`, `_metadata`, `overrides?`): `Promise`<`ContractTransaction`\>

Adding new domains is currently retricted to one level only, i.e. `_parentDomainId` has to be the root domain id: `1`.We expect this function to only be used by the dapp
Add a colony domain, and its respective local skill under skill with id `_parentSkillId`. New funding pot is created and associated with the domain here.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_parentDomainId` | `PromiseOrValue`<`BigNumberish`\> | Id of the domain under which the new one will be added |
| `_metadata` | `PromiseOrValue`<`string`\> | Metadata relating to the domain. Expected to be the IPFS hash of a JSON blob, but not enforced by the contracts. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.addDomain(uint256,uint256,uint256,string)

___

### addDomainWithProofs(uint256)

▸ **addDomainWithProofs(uint256)**(`_parentDomainId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [addDomain(uint256,uint256,uint256)](ColonyClientV5.md#adddomain(uint256,uint256,uint256)), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_parentDomainId` | `BigNumberish` | Id of the domain under which the new one will be added |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AddDomainAugmentsB.addDomainWithProofs(uint256)

___

### addDomainWithProofs(uint256,string)

▸ **addDomainWithProofs(uint256,string)**(`_parentDomainId`, `_metadata`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [addDomain(uint256,uint256,uint256,string)](ColonyClientV5.md#adddomain(uint256,uint256,uint256,string)), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_parentDomainId` | `BigNumberish` | Id of the domain under which the new one will be added |
| `_metadata` | `string` | Metadata relating to the domain. Expected to be the IPFS hash of a JSON blob, but not enforced by the contracts. |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AddDomainAugmentsB.addDomainWithProofs(uint256,string)

___

### addPayment

▸ **addPayment**(`_permissionDomainId`, `_childSkillIndex`, `_recipient`, `_token`, `_amount`, `_domainId`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Add a new payment in the colony. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId`, (only used if `_permissionDomainId` is different to `_domainId`) |
| `_recipient` | `PromiseOrValue`<`string`\> | Address of the payment recipient |
| `_token` | `PromiseOrValue`<`string`\> | Address of the token, `0x0` value indicates Ether |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | Payout amount |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | The domain where the payment belongs |
| `_skillId` | `PromiseOrValue`<`BigNumberish`\> | The skill associated with the payment |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.addPayment

___

### addPaymentWithProofs

▸ **addPaymentWithProofs**(`_recipient`, `_token`, `_amount`, `_domainId`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [addPayment](ColonyClientV5.md#addpayment), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_recipient` | `string` | Address of the payment recipient |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `_amount` | `BigNumberish` | Payout amount |
| `_domainId` | `BigNumberish` | The domain where the payment belongs |
| `_skillId` | `BigNumberish` | The skill associated with the payment |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.addPaymentWithProofs

___

### annotateTransaction

▸ **annotateTransaction**(`_txHash`, `_metadata`, `overrides?`): `Promise`<`ContractTransaction`\>

Emit a metadata string for a transaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_txHash` | `PromiseOrValue`<`BytesLike`\> | Hash of transaction being annotated (0x0 for current tx) |
| `_metadata` | `PromiseOrValue`<`string`\> | String of metadata for tx |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.annotateTransaction

___

### approveExitRecovery

▸ **approveExitRecovery**(`overrides?`): `Promise`<`ContractTransaction`\>

Indicate approval to exit recovery mode. Can only be called by user with recovery role.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.approveExitRecovery

___

### approveStake

▸ **approveStake**(`_approvee`, `_domainId`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Allow the _approvee to obligate some amount of tokens as a stake.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_approvee` | `PromiseOrValue`<`string`\> | Address of the account we are willing to let obligate us. |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | Domain in which we are willing to be obligated. |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | Amount of internal token up to which we are willing to be obligated. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.approveStake

___

### attach

▸ **attach**(`addressOrName`): [`ColonyClientV5`](ColonyClientV5.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ColonyClientV5`](ColonyClientV5.md)

#### Inherited from

AugmentedIColony.attach

___

### authority

▸ **authority**(`overrides?`): `Promise`<`string`\>

Get the `ColonyAuthority` for the colony.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedIColony.authority

___

### bootstrapColony

▸ **bootstrapColony**(`_users`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Only allowed to be called when `taskCount` is `0` by authorized addresses.
Allows the colony to bootstrap itself by having initial reputation and token `_amount` assigned to `_users`. This reputation is assigned in the colony-wide domain. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_users` | `PromiseOrValue`<`string`\>[] | Array of address to bootstrap with reputation |
| `_amount` | `PromiseOrValue`<`BigNumberish`\>[] | Amount of reputation/tokens for every address |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.bootstrapColony

___

### burnTokens

▸ **burnTokens**(`token`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Burn tokens held by the colony. Can only burn tokens held in the root funding pot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the token to burn |
| `amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of tokens to burn |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.burnTokens

___

### cancelExpenditure

▸ **cancelExpenditure**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

Cancels the expenditure and prevents further editing. Can only be called by expenditure owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Expenditure identifier |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.cancelExpenditure

___

### cancelTask

▸ **cancelTask**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the `task.status` property to `1`.
Cancel a task at any point before it is finalized. Secured function to authorised members. Any funds assigned to its funding pot can be moved back to the domain via `IColony.moveFundsBetweenPots`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.cancelTask

___

### checkNotAdditionalProtectedVariable

▸ **checkNotAdditionalProtectedVariable**(`_slot`, `overrides?`): `Promise`<`void`\>

No return value, but should throw if protected.This is external, but is only expected to be called from ContractRecovery; no need toexpose this to any users.
Check whether the supplied slot is a protected variable specific to this contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_slot` | `PromiseOrValue`<`BigNumberish`\> | The storage slot number to check. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`void`\>

#### Inherited from

AugmentedIColony.checkNotAdditionalProtectedVariable

___

### claimColonyFunds

▸ **claimColonyFunds**(`_token`, `overrides?`): `Promise`<`ContractTransaction`\>

Move any funds received by the colony in `_token` denomination to the top-level domain pot, siphoning off a small amount to the reward pot. If called against a colony's own token, no fee is taken.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `PromiseOrValue`<`string`\> | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.claimColonyFunds

___

### claimExpenditurePayout

▸ **claimExpenditurePayout**(`_id`, `_slot`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

Claim the payout for an expenditure slot. Here the network receives a fee from each payout.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Expenditure identifier |
| `_slot` | `PromiseOrValue`<`BigNumberish`\> | Number of the slot |
| `_token` | `PromiseOrValue`<`string`\> | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.claimExpenditurePayout

___

### claimPayment

▸ **claimPayment**(`_id`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

Claim the payout in `_token` denomination for payment `_id`. Here the network receives its fee from each payout. Same as for tasks, ether fees go straight to the Meta Colony whereas Token fees go to the Network to be auctioned off.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Payment identifier |
| `_token` | `PromiseOrValue`<`string`\> | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.claimPayment

___

### claimRewardPayout

▸ **claimRewardPayout**(`_payoutId`, `_squareRoots`, `key`, `value`, `branchMask`, `siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

Claim the reward payout at `_payoutId`. User needs to provide their reputation and colony-wide reputation which will be proven via Merkle proof inside this function. Can only be called if payout is active, i.e if 60 days have not passed from its creation. Can only be called if next in queue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_payoutId` | `PromiseOrValue`<`BigNumberish`\> | Id of the reward payout |
| `_squareRoots` | `PromiseOrValue`<`BigNumberish`\>[] | Square roots of values used in equation: `_squareRoots[0]` - square root of user reputation, `_squareRoots[1]` - square root of user tokens (deposited in TokenLocking), `_squareRoots[2]` - square root of total reputation, `_squareRoots[3]` - square root of total tokens, `_squareRoots[4]` - square root of numerator (user reputation * user tokens), `_squareRoots[5]` - square root of denominator (total reputation * total tokens), `_squareRoots[6]` - square root of payout amount. |
| `key` | `PromiseOrValue`<`BytesLike`\> | Some Reputation hash tree key |
| `value` | `PromiseOrValue`<`BytesLike`\> | Reputation value |
| `branchMask` | `PromiseOrValue`<`BigNumberish`\> | The branchmask of the proof |
| `siblings` | `PromiseOrValue`<`BytesLike`\>[] | The siblings of the proof |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.claimRewardPayout

___

### claimTaskPayout

▸ **claimTaskPayout**(`_id`, `_role`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

Claim the payout in `_token` denomination for work completed in task `_id` by contributor with role `_role`. Allowed only after task is finalized. Here the network receives its fee from each payout. Ether fees go straight to the Meta Colony whereas Token fees go to the Network to be auctioned off.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `_role` | `PromiseOrValue`<`BigNumberish`\> | Id of the role, as defined in TaskRole enum |
| `_token` | `PromiseOrValue`<`string`\> | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.claimTaskPayout

___

### completeTask

▸ **completeTask**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

Mark a task as complete after the due date has passed. This allows the task to be rated and finalized (and funds recovered) even in the presence of a worker who has disappeared. Note that if the due date was not set, then this function will throw.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.completeTask

___

### connect

▸ **connect**(`signerOrProvider`): [`ColonyClientV5`](ColonyClientV5.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Provider` \| `Signer` |

#### Returns

[`ColonyClientV5`](ColonyClientV5.md)

#### Inherited from

AugmentedIColony.connect

___

### deobligateStake

▸ **deobligateStake**(`_user`, `_domainId`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Deobligate the user some amount of tokens, releasing the stake.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | Address of the account we are deobligating. |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | Domain in which we are deobligating the user. |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | Amount of internal token we are deobligating. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.deobligateStake

___

### deployed

▸ **deployed**(): `Promise`<[`ColonyClientV5`](ColonyClientV5.md)\>

#### Returns

`Promise`<[`ColonyClientV5`](ColonyClientV5.md)\>

#### Inherited from

AugmentedIColony.deployed

___

### deprecateExtension

▸ **deprecateExtension**(`extensionId`, `deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the deprecation of an extension in a colony. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionId` | `PromiseOrValue`<`BytesLike`\> | keccak256 hash of the extension name, used as an indentifier |
| `deprecated` | `PromiseOrValue`<`boolean`\> | Whether to deprecate the extension or not |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.deprecateExtension

___

### editColony

▸ **editColony**(`_metadata`, `overrides?`): `Promise`<`ContractTransaction`\>

Called to change the metadata associated with a colony. Expected to be a IPFS hash of a JSON blob, but not enforced to any degree by the contracts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_metadata` | `PromiseOrValue`<`string`\> | IPFS hash of the metadata |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.editColony

___

### editDomain

▸ **editDomain**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_metadata`, `overrides?`): `Promise`<`ContractTransaction`\>

Add a colony domain, and its respective local skill under skill with id `_parentSkillId`. New funding pot is created and associated with the domain here.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | Id of the domain being edited |
| `_metadata` | `PromiseOrValue`<`string`\> | Metadata relating to the domain. Expected to be the IPFS hash of a JSON blob, but not enforced by the contracts. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.editDomain

___

### editDomainWithProofs

▸ **editDomainWithProofs**(`_domainId`, `_metadata`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [editDomain](ColonyClientV5.md#editdomain), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_domainId` | `BigNumberish` | Id of the domain being edited |
| `_metadata` | `string` | Metadata relating to the domain. Expected to be the IPFS hash of a JSON blob, but not enforced by the contracts. |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

ColonyAugmentsV5.editDomainWithProofs

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

AugmentedIColony.emit

___

### emitDomainReputationPenalty

▸ **emitDomainReputationPenalty**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_user`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Emit a negative domain reputation update. Available only to Arbitration role holders

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which I hold the Arbitration role |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | The domain where the user will lose reputation |
| `_user` | `PromiseOrValue`<`string`\> | The user who will lose reputation |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | The (negative) amount of reputation to lose |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.emitDomainReputationPenalty

___

### emitDomainReputationPenaltyWithProofs

▸ **emitDomainReputationPenaltyWithProofs**(`_domainId`, `_user`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [emitDomainReputationPenalty](ColonyClientV5.md#emitdomainreputationpenalty), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_domainId` | `BigNumberish` | The domain where the user will lose reputation |
| `_user` | `string` | The user who will lose reputation |
| `_amount` | `BigNumberish` | The (negative) amount of reputation to lose |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

ColonyAugmentsV5.emitDomainReputationPenaltyWithProofs

___

### emitDomainReputationReward

▸ **emitDomainReputationReward**(`_domainId`, `_user`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Emit a positive domain reputation update. Available only to Root role holders

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | The domain where the user will gain reputation |
| `_user` | `PromiseOrValue`<`string`\> | The user who will gain reputation |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | The (positive) amount of reputation to gain |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.emitDomainReputationReward

___

### emitSkillReputationPenalty

▸ **emitSkillReputationPenalty**(`_skillId`, `_user`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Emit a negative skill reputation update. Available only to Arbitration role holders in the root domain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_skillId` | `PromiseOrValue`<`BigNumberish`\> | The skill where the user will lose reputation |
| `_user` | `PromiseOrValue`<`string`\> | The user who will lose reputation |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | The (negative) amount of reputation to lose |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.emitSkillReputationPenalty

___

### emitSkillReputationReward

▸ **emitSkillReputationReward**(`_skillId`, `_user`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Emit a positive skill reputation update. Available only to Root role holders

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_skillId` | `PromiseOrValue`<`BigNumberish`\> | The skill where the user will gain reputation |
| `_user` | `PromiseOrValue`<`string`\> | The user who will gain reputation |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | The (positive) amount of reputation to gain |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.emitSkillReputationReward

___

### enterRecoveryMode

▸ **enterRecoveryMode**(`overrides?`): `Promise`<`ContractTransaction`\>

Put colony network mining into recovery mode. Can only be called by user with recovery role.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.enterRecoveryMode

___

### executeTaskChange

▸ **executeTaskChange**(`_sigV`, `_sigR`, `_sigS`, `_mode`, `_value`, `_data`, `overrides?`): `Promise`<`ContractTransaction`\>

The Colony functions which require approval and the task roles to review these are set in `IColony.initialiseColony` at colony creation. Upon successful execution the `taskChangeNonces` entry for the task is incremented.
Executes a task update transaction `_data` which is approved and signed by two of its roles (e.g. manager and worker) using the detached signatures for these users.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_sigV` | `PromiseOrValue`<`BigNumberish`\>[] | recovery id |
| `_sigR` | `PromiseOrValue`<`BytesLike`\>[] | r output of the ECDSA signature of the transaction |
| `_sigS` | `PromiseOrValue`<`BytesLike`\>[] | s output of the ECDSA signature of the transaction |
| `_mode` | `PromiseOrValue`<`BigNumberish`\>[] | How the signature was generated - 0 for Geth-style (usual), 1 for Trezor-style (only Trezor does this) |
| `_value` | `PromiseOrValue`<`BigNumberish`\> | The transaction value, i.e. number of wei to be sent when the transaction is executed Currently we only accept 0 value transactions but this is kept as a future option |
| `_data` | `PromiseOrValue`<`BytesLike`\> | The transaction data |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.executeTaskChange

___

### executeTaskRoleAssignment

▸ **executeTaskRoleAssignment**(`_sigV`, `_sigR`, `_sigS`, `_mode`, `_value`, `_data`, `overrides?`): `Promise`<`ContractTransaction`\>

Executes a task role update transaction `_data` which is approved and signed by two of addresses. depending of which function we are calling. Allowed functions are `setTaskManagerRole`, `setTaskEvaluatorRole` and `setTaskWorkerRole`. Upon successful execution the `taskChangeNonces` entry for the task is incremented.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_sigV` | `PromiseOrValue`<`BigNumberish`\>[] | recovery id |
| `_sigR` | `PromiseOrValue`<`BytesLike`\>[] | r output of the ECDSA signature of the transaction |
| `_sigS` | `PromiseOrValue`<`BytesLike`\>[] | s output of the ECDSA signature of the transaction |
| `_mode` | `PromiseOrValue`<`BigNumberish`\>[] | How the signature was generated - 0 for Geth-style (usual), 1 for Trezor-style (only Trezor does this) |
| `_value` | `PromiseOrValue`<`BigNumberish`\> | The transaction value, i.e. number of wei to be sent when the transaction is executed Currently we only accept 0 value transactions but this is kept as a future option |
| `_data` | `PromiseOrValue`<`BytesLike`\> | The transaction data |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.executeTaskRoleAssignment

___

### exitRecoveryMode

▸ **exitRecoveryMode**(`overrides?`): `Promise`<`ContractTransaction`\>

Exit recovery mode, can be called by anyone if enough whitelist approvals are given.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.exitRecoveryMode

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Inherited from

AugmentedIColony.fallback

___

### finalizeExpenditure

▸ **finalizeExpenditure**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

Finalizes the expenditure and prevents further editing. Can only be called by expenditure owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Expenditure identifier |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.finalizeExpenditure

___

### finalizePayment

▸ **finalizePayment**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `overrides?`): `Promise`<`ContractTransaction`\>

Finalizes the payment and logs the reputation log updates. Allowed to be called once after payment is fully funded. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Payment identifier |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.finalizePayment

___

### finalizePaymentWithProofs

▸ **finalizePaymentWithProofs**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [finalizePayment](ColonyClientV5.md#finalizepayment), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Payment identifier |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.finalizePaymentWithProofs

___

### finalizeRewardPayout

▸ **finalizeRewardPayout**(`_payoutId`, `overrides?`): `Promise`<`ContractTransaction`\>

Finalises the reward payout. Allows creation of next reward payouts for token that has been used in `_payoutId`. Can only be called when reward payout cycle is finished i.e when 60 days have passed from its creation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_payoutId` | `PromiseOrValue`<`BigNumberish`\> | Id of the reward payout |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.finalizeRewardPayout

___

### finalizeTask

▸ **finalizeTask**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the `task.finalized` property to true
Called after task work rating is complete which closes the task and logs the respective reputation log updates. Allowed to be called once per task. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.finalizeTask

___

### finishUpgrade

▸ **finishUpgrade**(`overrides?`): `Promise`<`ContractTransaction`\>

Can only be called by the colony itself, and only expected to be called as part of the `upgrade()` call. Required to be external so it can be an external call.
A function to be called after an upgrade has been done from v2 to v3.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.finishUpgrade

___

### generateSecret

▸ **generateSecret**(`_salt`, `_value`, `overrides?`): `Promise`<`string`\>

Helper function used to generage consistently the rating secret using salt value `_salt` and value to hide `_value`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_salt` | `PromiseOrValue`<`BytesLike`\> | Salt value |
| `_value` | `PromiseOrValue`<`BigNumberish`\> | Value to hide |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedIColony.generateSecret

___

### getApproval

▸ **getApproval**(`_user`, `_obligator`, `_domainId`, `overrides?`): `Promise`<`BigNumber`\>

View an approval to obligate tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | User allowing their tokens to be obligated. |
| `_obligator` | `PromiseOrValue`<`string`\> | Address of the account we are willing to let obligate us. |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | Domain in which we are willing to be obligated. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.getApproval

___

### getCapabilityRoles

▸ **getCapabilityRoles**(`_sig`, `overrides?`): `Promise`<`string`\>

Gets the bytes32 representation of the roles authorized to call a function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_sig` | `PromiseOrValue`<`BytesLike`\> | The function signature |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedIColony.getCapabilityRoles

___

### getColonyNetwork

▸ **getColonyNetwork**(`overrides?`): `Promise`<`string`\>

The colonyNetworkAddress we read here is set once, during `initialiseColony`.
Returns the colony network address set on the Colony.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedIColony.getColonyNetwork

___

### getDomain

▸ **getDomain**(`_id`, `overrides?`): `Promise`<`DomainStructOutput`\>

Get a domain by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the domain which details to get |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`DomainStructOutput`\>

#### Inherited from

AugmentedIColony.getDomain

___

### getDomainCount

▸ **getDomainCount**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of domains in the colony.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.getDomainCount

___

### getDomainFromFundingPot

▸ **getDomainFromFundingPot**(`_fundingPotId`, `overrides?`): `Promise`<`BigNumber`\>

Get the domain corresponding to a funding pot

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_fundingPotId` | `PromiseOrValue`<`BigNumberish`\> | Id of the funding pot |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.getDomainFromFundingPot

___

### getExpenditure

▸ **getExpenditure**(`_id`, `overrides?`): `Promise`<`ExpenditureStructOutput`\>

Returns an existing expenditure.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Expenditure identifier |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`ExpenditureStructOutput`\>

#### Inherited from

AugmentedIColony.getExpenditure

___

### getExpenditureCount

▸ **getExpenditureCount**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of expenditures in the colony.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.getExpenditureCount

___

### getExpenditureSlot

▸ **getExpenditureSlot**(`_id`, `_slot`, `overrides?`): `Promise`<`ExpenditureSlotStructOutput`\>

Returns an existing expenditure slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Expenditure identifier |
| `_slot` | `PromiseOrValue`<`BigNumberish`\> | Expenditure slot |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`ExpenditureSlotStructOutput`\>

#### Inherited from

AugmentedIColony.getExpenditureSlot

___

### getExpenditureSlotPayout

▸ **getExpenditureSlotPayout**(`_id`, `_slot`, `_token`, `overrides?`): `Promise`<`BigNumber`\>

Returns an existing expenditure slot's payout for a token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Expenditure identifier |
| `_slot` | `PromiseOrValue`<`BigNumberish`\> | Expenditure slot |
| `_token` | `PromiseOrValue`<`string`\> | Token address |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.getExpenditureSlotPayout

___

### getExtensionClient

▸ **getExtensionClient**<`E`\>(`extension`): `Promise`<`GetExtensionClientReturns`[`E`]\>

Get an instance of an extension client associated with this Colony.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Extension`](../enums/Extension.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extension` | `E` | An [Extension](../enums/Extension.md) |

#### Returns

`Promise`<`GetExtensionClientReturns`[`E`]\>

An instance of an intialized extension client for the desired extension

#### Inherited from

AugmentedIColony.getExtensionClient

___

### getFundingPot

▸ **getFundingPot**(`_id`, `overrides?`): `Promise`<[`number`, `BigNumber`, `BigNumber`] & { `associatedType`: `number` ; `associatedTypeId`: `BigNumber` ; `payoutsWeCannotMake`: `BigNumber`  }\>

For the reward funding pot (e.g. id: 0) this returns (0, 0, 0).
Get the non-mapping properties of a pot by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the pot which details to get |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`number`, `BigNumber`, `BigNumber`] & { `associatedType`: `number` ; `associatedTypeId`: `BigNumber` ; `payoutsWeCannotMake`: `BigNumber`  }\>

#### Inherited from

AugmentedIColony.getFundingPot

___

### getFundingPotBalance

▸ **getFundingPotBalance**(`_potId`, `_token`, `overrides?`): `Promise`<`BigNumber`\>

Get the `_token` balance of pot with id `_potId`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_potId` | `PromiseOrValue`<`BigNumberish`\> | Id of the funding pot |
| `_token` | `PromiseOrValue`<`string`\> | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.getFundingPotBalance

___

### getFundingPotCount

▸ **getFundingPotCount**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of funding pots in the colony.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.getFundingPotCount

___

### getFundingPotPayout

▸ **getFundingPotPayout**(`_potId`, `_token`, `overrides?`): `Promise`<`BigNumber`\>

Get the assigned `_token` payouts of pot with id `_potId`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_potId` | `PromiseOrValue`<`BigNumberish`\> | Id of the funding pot |
| `_token` | `PromiseOrValue`<`string`\> | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.getFundingPotPayout

___

### getMembersReputation

▸ **getMembersReputation**(`skillId`): `Promise`<{ `addresses`: `string`[]  }\>

Get all addresses that have reputation for a given skill.
If you need the skillId for a certain domain you can use the [getDomain](ColonyClientV5.md#getdomain) function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skillId` | `BigNumberish` | The skill id to get the reputation in |

#### Returns

`Promise`<{ `addresses`: `string`[]  }\>

All addresses that have a non-zero reputation for the given skill

#### Inherited from

AugmentedIColony.getMembersReputation

___

### getNonRewardPotsTotal

▸ **getNonRewardPotsTotal**(`_token`, `overrides?`): `Promise`<`BigNumber`\>

Get the total amount of tokens `_token` minus amount reserved to be paid to the reputation and token holders as rewards.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `PromiseOrValue`<`string`\> | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.getNonRewardPotsTotal

___

### getObligation

▸ **getObligation**(`_user`, `_obligator`, `_domainId`, `overrides?`): `Promise`<`BigNumber`\>

View an obligation of tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | User whose tokens are obligated. |
| `_obligator` | `PromiseOrValue`<`string`\> | Address of the account who obligated us. |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | Domain in which we are obligated. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.getObligation

___

### getPayment

▸ **getPayment**(`_id`, `overrides?`): `Promise`<`PaymentStructOutput`\>

Returns an exiting payment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Payment identifier |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`PaymentStructOutput`\>

#### Inherited from

AugmentedIColony.getPayment

___

### getPaymentCount

▸ **getPaymentCount**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of payments in the colony.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.getPaymentCount

___

### getReputation

▸ **getReputation**(`skillId`, `address`, `customRootHash?`): `Promise`<{ `branchMask`: `string` ; `key`: `string` ; `reputationAmount`: `BigNumber` ; `siblings`: `string`[] ; `value`: `string`  }\>

Get the reputation for an address and a certain skill.
If you need the skillId for a certain domain you can use the [getDomain](ColonyClientV5.md#getdomain) function.

**`Remarks`**

This function also retrieves the proofs (`branchMask`, `siblings`) that are needed to verify the reputation on chain.
If you don't need to do that (e.g. in order to proof the reputation when calling a contract method), you should probably just use
the [getReputationWithoutProofs](ColonyClientV5.md#getreputationwithoutproofs) method as it requires fewer computations

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skillId` | `BigNumberish` | The skill id to get the addresses reputation in |
| `address` | `string` | Wallet address to retrieve the reputation of |
| `customRootHash?` | `string` | The `customRootHash` can be set to retrieve the reputation at a certain block time in the past |

#### Returns

`Promise`<{ `branchMask`: `string` ; `key`: `string` ; `reputationAmount`: `BigNumber` ; `siblings`: `string`[] ; `value`: `string`  }\>

The reputation amount as well as the two proofs that are needed to verify the reputation on chain

#### Inherited from

AugmentedIColony.getReputation

___

### getReputationAcrossDomains

▸ **getReputationAcrossDomains**(`address`, `customRootHash?`): `Promise`<{ `domainId`: `number` ; `reputationAmount?`: `BigNumberish` ; `skillId`: `number`  }[]\>

Get the reputation for an address across all domains in a Colony.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | Wallet address to retrieve the reputation of |
| `customRootHash?` | `string` | The `customRootHash` can be set to retrieve the reputation at a certain block time in the past |

#### Returns

`Promise`<{ `domainId`: `number` ; `reputationAmount?`: `BigNumberish` ; `skillId`: `number`  }[]\>

The reputation amount

#### Inherited from

AugmentedIColony.getReputationAcrossDomains

___

### getReputationWithoutProofs

▸ **getReputationWithoutProofs**(`skillId`, `address`, `customRootHash?`): `Promise`<{ `key`: `string` ; `reputationAmount`: `BigNumber` ; `value`: `string`  }\>

Get the reputation for an address and a certain skill.
If you need the skillId for a certain domain you can use the [getDomain](ColonyClientV5.md#getdomain) function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skillId` | `BigNumberish` | The skill id to get the addresses reputation in |
| `address` | `string` | Wallet address to retrieve the reputation of |
| `customRootHash?` | `string` | The `customRootHash` can be set to retrieve the reputation at a certain block time in the past |

#### Returns

`Promise`<{ `key`: `string` ; `reputationAmount`: `BigNumber` ; `value`: `string`  }\>

The reputation amount

#### Inherited from

AugmentedIColony.getReputationWithoutProofs

___

### getRewardInverse

▸ **getRewardInverse**(`overrides?`): `Promise`<`BigNumber`\>

Return 1 / the reward to pay out from revenue. e.g. if the fee is 1% (or 0.01), return 100.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.getRewardInverse

___

### getRewardPayoutInfo

▸ **getRewardPayoutInfo**(`_payoutId`, `overrides?`): `Promise`<`RewardPayoutCycleStructOutput`\>

Get useful information about specific reward payout.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_payoutId` | `PromiseOrValue`<`BigNumberish`\> | Id of the reward payout |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`RewardPayoutCycleStructOutput`\>

#### Inherited from

AugmentedIColony.getRewardPayoutInfo

___

### getTask

▸ **getTask**(`_id`, `overrides?`): `Promise`<[`string`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`[]] & { `completionTimestamp`: `BigNumber` ; `deliverableHash`: `string` ; `domainId`: `BigNumber` ; `dueDate`: `BigNumber` ; `fundingPotId`: `BigNumber` ; `skillIds`: `BigNumber`[] ; `specificationHash`: `string` ; `status`: `number`  }\>

Get a task with id `_id`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`string`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`[]] & { `completionTimestamp`: `BigNumber` ; `deliverableHash`: `string` ; `domainId`: `BigNumber` ; `dueDate`: `BigNumber` ; `fundingPotId`: `BigNumber` ; `skillIds`: `BigNumber`[] ; `specificationHash`: `string` ; `status`: `number`  }\>

#### Inherited from

AugmentedIColony.getTask

___

### getTaskChangeNonce

▸ **getTaskChangeNonce**(`_id`, `overrides?`): `Promise`<`BigNumber`\>

Starts from 0 and is incremented on every co-reviewed task change via `executeTaskChange` call.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.getTaskChangeNonce

___

### getTaskCount

▸ **getTaskCount**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of tasks in the colony.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.getTaskCount

___

### getTaskPayout

▸ **getTaskPayout**(`_id`, `_role`, `_token`, `overrides?`): `Promise`<`BigNumber`\>

Get payout amount in `_token` denomination for role `_role` in task `_id`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `_role` | `PromiseOrValue`<`BigNumberish`\> | Id of the role, as defined in TaskRole enum |
| `_token` | `PromiseOrValue`<`string`\> | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.getTaskPayout

___

### getTaskRole

▸ **getTaskRole**(`_id`, `_role`, `overrides?`): `Promise`<`RoleStructOutput`\>

Get the `Role` properties back for role `_role` in task `_id`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `_role` | `PromiseOrValue`<`BigNumberish`\> | Id of the role, as defined in TaskRole enum |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`RoleStructOutput`\>

#### Inherited from

AugmentedIColony.getTaskRole

___

### getTaskWorkRatingSecret

▸ **getTaskWorkRatingSecret**(`_id`, `_role`, `overrides?`): `Promise`<`string`\>

Get the rating secret submitted for role `_role` in task `_id`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `_role` | `PromiseOrValue`<`BigNumberish`\> | Id of the role, as defined in TaskRole enum |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedIColony.getTaskWorkRatingSecret

___

### getTaskWorkRatingSecretsInfo

▸ **getTaskWorkRatingSecretsInfo**(`_id`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `lastSubmittedAt`: `BigNumber` ; `nSecrets`: `BigNumber`  }\>

Get the `ColonyStorage.RatingSecrets` information for task `_id`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `lastSubmittedAt`: `BigNumber` ; `nSecrets`: `BigNumber`  }\>

#### Inherited from

AugmentedIColony.getTaskWorkRatingSecretsInfo

___

### getToken

▸ **getToken**(`overrides?`): `Promise`<`string`\>

Get the colony token.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedIColony.getToken

___

### getUserRoles

▸ **getUserRoles**(`_user`, `_domain`, `overrides?`): `Promise`<`string`\>

Gets the bytes32 representation of the roles for a user in a given domain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | The user whose roles we want to get |
| `_domain` | `PromiseOrValue`<`BigNumberish`\> | The domain we want to get roles in |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedIColony.getUserRoles

___

### hasInheritedUserRole

▸ **hasInheritedUserRole**(`_user`, `_domainId`, `_role`, `_childSkillIndex`, `_childDomainId`, `overrides?`): `Promise`<`boolean`\>

Check whether a given user has a given role for the colony, in a child domain. Calls the function of the same name on the colony's authority contract and an internal inheritence validator function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | The user whose role we want to check |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | Domain in which the caller has the role |
| `_role` | `PromiseOrValue`<`BigNumberish`\> | The role we want to check for |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_childDomainId` is relative to `_domainId` |
| `_childDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domain where we want to use the role |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedIColony.hasInheritedUserRole

___

### hasInheritedUserRoleWithProofs

▸ **hasInheritedUserRoleWithProofs**(`_user`, `_domainId`, `_role`, `overrides?`): `Promise`<`boolean`\>

Same as [hasInheritedUserRole](ColonyClientV5.md#hasinheriteduserrole), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | The user whose role we want to check |
| `_domainId` | `BigNumberish` | Domain in which the caller has the role |
| `_role` | `BigNumberish` | The role we want to check for |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

ColonyAugmentsV4.hasInheritedUserRoleWithProofs

___

### hasUserRole

▸ **hasUserRole**(`_user`, `_domainId`, `_role`, `overrides?`): `Promise`<`boolean`\>

Check whether a given user has a given role for the colony. Calls the function of the same name on the colony's authority contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | The user whose role we want to check |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | The domain where we want to check for the role |
| `_role` | `PromiseOrValue`<`BigNumberish`\> | The role we want to check for |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedIColony.hasUserRole

___

### initialiseColony

▸ **initialiseColony**(`_colonyNetworkAddress`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the reward inverse to the uint max 2**256 - 1.
Called once when the colony is created to initialise certain storage slot values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_colonyNetworkAddress` | `PromiseOrValue`<`string`\> | Address of the colony network |
| `_token` | `PromiseOrValue`<`string`\> | Address of the colony ERC20 Token |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.initialiseColony

___

### installExtension

▸ **installExtension**(`extensionId`, `version`, `overrides?`): `Promise`<`ContractTransaction`\>

Install an extension to the colony. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionId` | `PromiseOrValue`<`BytesLike`\> | keccak256 hash of the extension name, used as an indentifier |
| `version` | `PromiseOrValue`<`BigNumberish`\> | The new extension version to install |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.installExtension

___

### installExtensionChecked

▸ **installExtensionChecked**(`extension`, `version?`, `overrides?`): `Promise`<`ContractTransaction`\>

Similar to [installExtension](ColonyClientV5.md#installextension), but first check whether the desired extension can be installed in this Colony
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extension` | [`Extension`](../enums/Extension.md) | A [Extension](../enums/Extension.md) name |
| `version?` | `number` | The desired version number of the extension you wish to install |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

ColonyAugmentsV5.installExtensionChecked

___

### isInRecoveryMode

▸ **isInRecoveryMode**(`overrides?`): `Promise`<`boolean`\>

Is colony network in recovery mode.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedIColony.isInRecoveryMode

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

AugmentedIColony.listenerCount

___

### listeners

▸ **listeners**<`TEvent`\>(`eventFilter?`): `TypedListener`<`TEvent`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | `TypedEventFilter`<`TEvent`\> |

#### Returns

`TypedListener`<`TEvent`\>[]

#### Inherited from

AugmentedIColony.listeners

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Inherited from

AugmentedIColony.listeners

___

### lockToken

▸ **lockToken**(`overrides?`): `Promise`<`ContractTransaction`\>

Lock the colony's token. Can only be called by a network-managed extension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.lockToken

___

### makeArbitraryTransaction

▸ **makeArbitraryTransaction**(`_to`, `_action`, `overrides?`): `Promise`<`ContractTransaction`\>

Execute arbitrary transaction on behalf of the Colony

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_to` | `PromiseOrValue`<`string`\> | Contract to receive the function call (cannot be network or token locking) |
| `_action` | `PromiseOrValue`<`BytesLike`\> | Bytes array encoding the function call and arguments |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.makeArbitraryTransaction

___

### makeExpenditure

▸ **makeExpenditure**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `overrides?`): `Promise`<`ContractTransaction`\>

Add a new expenditure in the colony. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId`, (only used if `_permissionDomainId` is different to `_domainId`) |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | The domain where the expenditure belongs |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.makeExpenditure

___

### makeExpenditureWithProofs

▸ **makeExpenditureWithProofs**(`_domainId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [makeExpenditure](ColonyClientV5.md#makeexpenditure), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_domainId` | `BigNumberish` | The domain where the expenditure belongs |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

ColonyAugmentsV4.makeExpenditureWithProofs

___

### makeTask

▸ **makeTask**(`_permissionDomainId`, `_childSkillIndex`, `_specificationHash`, `_domainId`, `_skillId`, `_dueDate`, `overrides?`): `Promise`<`ContractTransaction`\>

Make a new task in the colony. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_specificationHash` | `PromiseOrValue`<`BytesLike`\> | Database identifier where the task specification is stored |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | The domain where the task belongs |
| `_skillId` | `PromiseOrValue`<`BigNumberish`\> | The skill associated with the task, can set to `0` for no-op |
| `_dueDate` | `PromiseOrValue`<`BigNumberish`\> | The due date of the task, can set to `0` for no-op |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.makeTask

___

### makeTaskWithProofs

▸ **makeTaskWithProofs**(`_specificationHash`, `_domainId`, `_skillId`, `_dueDate`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [makeTask](ColonyClientV5.md#maketask), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_specificationHash` | `BytesLike` | Database identifier where the task specification is stored |
| `_domainId` | `BigNumberish` | The domain where the task belongs |
| `_skillId` | `BigNumberish` | The skill associated with the task, can set to `0` for no-op |
| `_dueDate` | `BigNumberish` | The due date of the task, can set to `0` for no-op |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.makeTaskWithProofs

___

### mintTokens

▸ **mintTokens**(`_wad`, `overrides?`): `Promise`<`ContractTransaction`\>

Mint `_wad` amount of colony tokens. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_wad` | `PromiseOrValue`<`BigNumberish`\> | Amount to mint |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.mintTokens

___

### mintTokensFor

▸ **mintTokensFor**(`_guy`, `_wad`, `overrides?`): `Promise`<`ContractTransaction`\>

Mint `_wad` amount of colony tokens and send to `_guy`. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_guy` | `PromiseOrValue`<`string`\> | Recipient of new tokens |
| `_wad` | `PromiseOrValue`<`BigNumberish`\> | Amount to mint |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.mintTokensFor

___

### moveFundsBetweenPots

▸ **moveFundsBetweenPots**(`_permissionDomainId`, `_fromChildSkillIndex`, `_toChildSkillIndex`, `_fromPot`, `_toPot`, `_amount`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

Move a given amount: `_amount` of `_token` funds from funding pot with id `_fromPot` to one with id `_toPot`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which I have the permission to take this action |
| `_fromChildSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The child index in `_permissionDomainId` where we can find the domain for `_fromPotId` |
| `_toChildSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The child index in `_permissionDomainId` where we can find the domain for `_toPotId` |
| `_fromPot` | `PromiseOrValue`<`BigNumberish`\> | Funding pot id providing the funds |
| `_toPot` | `PromiseOrValue`<`BigNumberish`\> | Funding pot id receiving the funds |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | Amount of funds |
| `_token` | `PromiseOrValue`<`string`\> | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.moveFundsBetweenPots

___

### moveFundsBetweenPotsWithProofs

▸ **moveFundsBetweenPotsWithProofs**(`_fromPot`, `_toPot`, `_amount`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

**`Deprecated`**

Same as [moveFundsBetweenPots](ColonyClientV5.md#movefundsbetweenpots), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_fromPot` | `BigNumberish` | Funding pot id providing the funds |
| `_toPot` | `BigNumberish` | Funding pot id receiving the funds |
| `_amount` | `BigNumberish` | Amount of funds |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

MoveFundsBetweenPotsAugmentsA.moveFundsBetweenPotsWithProofs

___

### numRecoveryRoles

▸ **numRecoveryRoles**(`overrides?`): `Promise`<`BigNumber`\>

Return number of recovery roles.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.numRecoveryRoles

___

### obligateStake

▸ **obligateStake**(`_user`, `_domainId`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Obligate the user some amount of tokens as a stake.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | Address of the account we are obligating. |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | Domain in which we are obligating the user. |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | Amount of internal token we are obligating. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.obligateStake

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

Used for testing.
Get the colony `owner` address. This should be address(0x0) at all times.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedIColony.owner

___

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TypedEventFilter`<`TEvent`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<`TEvent`[]\>

#### Inherited from

AugmentedIColony.queryFilter

___

### registerColonyLabel

▸ **registerColonyLabel**(`colonyName`, `orbitdb`, `overrides?`): `Promise`<`ContractTransaction`\>

Register colony's ENS label.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colonyName` | `PromiseOrValue`<`string`\> | The label to register. |
| `orbitdb` | `PromiseOrValue`<`string`\> | The path of the orbitDB database associated with the colony name |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.registerColonyLabel

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ColonyClientV5`](ColonyClientV5.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ColonyClientV5`](ColonyClientV5.md)

#### Inherited from

AugmentedIColony.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`ColonyClientV5`](ColonyClientV5.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ColonyClientV5`](ColonyClientV5.md)

#### Inherited from

AugmentedIColony.removeAllListeners

___

### removeRecoveryRole

▸ **removeRecoveryRole**(`_user`, `overrides?`): `Promise`<`ContractTransaction`\>

Remove colony recovery role. Can only be called by root role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | User we want to remove recovery role from |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.removeRecoveryRole

___

### removeTaskEvaluatorRole

▸ **removeTaskEvaluatorRole**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

Removing evaluator role. Agreed between manager and currently assigned evaluator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.removeTaskEvaluatorRole

___

### removeTaskWorkerRole

▸ **removeTaskWorkerRole**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

Removing worker role. Agreed between manager and currently assigned worker.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.removeTaskWorkerRole

___

### revealTaskWorkRating

▸ **revealTaskWorkRating**(`_id`, `_role`, `_rating`, `_salt`, `overrides?`): `Promise`<`ContractTransaction`\>

Compares the `keccak256(_salt, _rating)` output with the previously submitted rating secret and if they match, sets the task role properties `rated` to `true` and `rating` to `_rating`.
Reveal the secret rating submitted in `IColony.submitTaskWorkRating` for task `_id` and task role with id `_role`. Allowed within 5 days period starting which whichever is first from either both rating secrets being submitted (via `IColony.submitTaskWorkRating`) or the 5 day rating period expiring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `_role` | `PromiseOrValue`<`BigNumberish`\> | Id of the role, as defined in TaskRole enum |
| `_rating` | `PromiseOrValue`<`BigNumberish`\> | 0-50 rating score (in increments of 10, .e.g 0, 10, 20, 30, 40 or 50) |
| `_salt` | `PromiseOrValue`<`BytesLike`\> | Salt value used to generate the rating secret |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.revealTaskWorkRating

___

### setAdministrationRole

▸ **setAdministrationRole**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides?`): `Promise`<`ContractTransaction`\>

Set new colony admin role. Can be called by root role or architecture role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | Domain in which the caller has root/architecture role |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_user` | `PromiseOrValue`<`string`\> | User we want to give an admin role to |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | Domain in which we are giving user the role |
| `_setTo` | `PromiseOrValue`<`boolean`\> | The state of the role permission (true assign the permission, false revokes it) |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setAdministrationRole

___

### setAdministrationRoleWithProofs

▸ **setAdministrationRoleWithProofs**(`_user`, `_domainId`, `_setTo`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setAdministrationRole](ColonyClientV5.md#setadministrationrole), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | User we want to give an admin role to |
| `_domainId` | `BigNumberish` | Domain in which we are giving user the role |
| `_setTo` | `boolean` | The state of the role permission (true assign the permission, false revokes it) |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setAdministrationRoleWithProofs

___

### setAllTaskPayouts

▸ **setAllTaskPayouts**(`_id`, `_token`, `_managerAmount`, `_evaluatorAmount`, `_workerAmount`, `overrides?`): `Promise`<`ContractTransaction`\>

Can only call if evaluator and worker are unassigned or manager, otherwise need signature.
Set `_token` payout for all roles in task `_id` to the respective amounts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `_token` | `PromiseOrValue`<`string`\> | Address of the token, `0x0` value indicates Ether |
| `_managerAmount` | `PromiseOrValue`<`BigNumberish`\> | Payout amount for manager |
| `_evaluatorAmount` | `PromiseOrValue`<`BigNumberish`\> | Payout amount for evaluator |
| `_workerAmount` | `PromiseOrValue`<`BigNumberish`\> | Payout amount for worker |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setAllTaskPayouts

___

### setArbitrationRole

▸ **setArbitrationRole**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides?`): `Promise`<`ContractTransaction`\>

Set new colony arbitration role. Can be called by root role or architecture role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | Domain in which the caller has root role |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_user` | `PromiseOrValue`<`string`\> | User we want to give an arbitration role to |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | Domain in which we are giving user the role |
| `_setTo` | `PromiseOrValue`<`boolean`\> | The state of the role permission (true assign the permission, false revokes it) |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setArbitrationRole

___

### setArbitrationRoleWithProofs

▸ **setArbitrationRoleWithProofs**(`_user`, `_domainId`, `_setTo`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setArbitrationRole](ColonyClientV5.md#setarbitrationrole), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | User we want to give an arbitration role to |
| `_domainId` | `BigNumberish` | Domain in which we are giving user the role |
| `_setTo` | `boolean` | The state of the role permission (true assign the permission, false revokes it) |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

ColonyAugmentsV3.setArbitrationRoleWithProofs

___

### setArchitectureRole

▸ **setArchitectureRole**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides?`): `Promise`<`ContractTransaction`\>

Set new colony architecture role. Can be called by root role or architecture role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | Domain in which the caller has root/architecture role |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_user` | `PromiseOrValue`<`string`\> | User we want to give an architecture role to |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | Domain in which we are giving user the role |
| `_setTo` | `PromiseOrValue`<`boolean`\> | The state of the role permission (true assign the permission, false revokes it) |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setArchitectureRole

___

### setArchitectureRoleWithProofs

▸ **setArchitectureRoleWithProofs**(`_user`, `_domainId`, `_setTo`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setArchitectureRole](ColonyClientV5.md#setarchitecturerole), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | User we want to give an architecture role to |
| `_domainId` | `BigNumberish` | Domain in which we are giving user the role |
| `_setTo` | `boolean` | The state of the role permission (true assign the permission, false revokes it) |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setArchitectureRoleWithProofs

___

### setExpenditureClaimDelay

▸ **setExpenditureClaimDelay**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_slot`, `_claimDelay`, `overrides?`): `Promise`<`ContractTransaction`\>

This is now deprecated and will be removed in a future version
DEPRECATED Set the claim delay on an expenditure slot. Can only be called by Arbitration role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId`, (only used if `_permissionDomainId` is different to `_domainId`) |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Expenditure identifier |
| `_slot` | `PromiseOrValue`<`BigNumberish`\> | Number of the slot |
| `_claimDelay` | `PromiseOrValue`<`BigNumberish`\> | Time (in seconds) to delay claiming payout after finalization |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setExpenditureClaimDelay

___

### setExpenditureClaimDelayWithProofs

▸ **setExpenditureClaimDelayWithProofs**(`_id`, `_slot`, `_claimDelay`, `overrides?`): `Promise`<`ContractTransaction`\>

**`Deprecated`**

Same as [setExpenditureClaimDelay](ColonyClientV5.md#setexpenditureclaimdelay), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Expenditure identifier |
| `_slot` | `BigNumberish` | Number of the slot |
| `_claimDelay` | `BigNumberish` | Time (in seconds) to delay claiming payout after finalization |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

SetExpenditureClaimDelayAugments.setExpenditureClaimDelayWithProofs

___

### setExpenditurePayout

▸ **setExpenditurePayout**(`_id`, `_slot`, `_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the token payout on an expenditure slot. Can only be called by expenditure owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the expenditure |
| `_slot` | `PromiseOrValue`<`BigNumberish`\> | Number of the slot |
| `_token` | `PromiseOrValue`<`string`\> | Address of the token, `0x0` value indicates Ether |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | Payout amount |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setExpenditurePayout

___

### setExpenditurePayoutModifier

▸ **setExpenditurePayoutModifier**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_slot`, `_payoutModifier`, `overrides?`): `Promise`<`ContractTransaction`\>

This is now deprecated and will be removed in a future versionNote that when determining payouts the payoutModifier is incremented by WAD and converted into payoutScalar
DEPRECATED Set the payout modifier on an expenditure slot. Can only be called by Arbitration role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId`, (only used if `_permissionDomainId` is different to `_domainId`) |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Expenditure identifier |
| `_slot` | `PromiseOrValue`<`BigNumberish`\> | Number of the slot |
| `_payoutModifier` | `PromiseOrValue`<`BigNumberish`\> | Modifier to their payout (between -1 and 1, denominated in WADs, 0 means no modification) |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setExpenditurePayoutModifier

___

### setExpenditurePayoutModifierWithProofs

▸ **setExpenditurePayoutModifierWithProofs**(`_id`, `_slot`, `_payoutModifier`, `overrides?`): `Promise`<`ContractTransaction`\>

**`Deprecated`**

Same as [setExpenditurePayoutModifier](ColonyClientV5.md#setexpenditurepayoutmodifier), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Expenditure identifier |
| `_slot` | `BigNumberish` | Number of the slot |
| `_payoutModifier` | `BigNumberish` | Modifier to their payout (between -1 and 1, denominated in WADs, 0 means no modification) |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

SetExpenditurePayoutModifierAugments.setExpenditurePayoutModifierWithProofs

___

### setExpenditureRecipient

▸ **setExpenditureRecipient**(`_id`, `_slot`, `_recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the recipient on an expenditure slot. Can only be called by expenditure owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the expenditure |
| `_slot` | `PromiseOrValue`<`BigNumberish`\> | Slot for the recipient address |
| `_recipient` | `PromiseOrValue`<`string`\> | Address of the recipient |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setExpenditureRecipient

___

### setExpenditureSkill

▸ **setExpenditureSkill**(`_id`, `_slot`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the skill on an expenditure slot. Can only be called by expenditure owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Expenditure identifier |
| `_slot` | `PromiseOrValue`<`BigNumberish`\> | Number of the slot |
| `_skillId` | `PromiseOrValue`<`BigNumberish`\> | Id of the new skill to set |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setExpenditureSkill

___

### setExpenditureState

▸ **setExpenditureState**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_storageSlot`, `_mask`, `_keys`, `_value`, `overrides?`): `Promise`<`ContractTransaction`\>

Set arbitrary state on an expenditure slot. Can only be called by Arbitration role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId`, (only used if `_permissionDomainId` is different to `_domainId`) |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Expenditure identifier |
| `_storageSlot` | `PromiseOrValue`<`BigNumberish`\> | Number of the top-level storage slot (25, 26, or 27) |
| `_mask` | `PromiseOrValue`<`boolean`\>[] | Array of booleans indicated whether a key is a mapping (F) or an array index (T). |
| `_keys` | `PromiseOrValue`<`BytesLike`\>[] | Array of additional keys (for mappings & arrays) |
| `_value` | `PromiseOrValue`<`BytesLike`\> | Value to set at location |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setExpenditureState

___

### setExpenditureStateWithProofs

▸ **setExpenditureStateWithProofs**(`_id`, `_storageSlot`, `_mask`, `_keys`, `_value`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [editDomain](ColonyClientV5.md#editdomain), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Expenditure identifier |
| `_storageSlot` | `BigNumberish` | Number of the top-level storage slot (25, 26, or 27) |
| `_mask` | `boolean`[] | Array of booleans indicated whether a key is a mapping (F) or an array index (T). |
| `_keys` | `BytesLike`[] | Array of additional keys (for mappings & arrays) |
| `_value` | `BytesLike` | Value to set at location |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

ColonyAugmentsV5.setExpenditureStateWithProofs

___

### setFundingRole

▸ **setFundingRole**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides?`): `Promise`<`ContractTransaction`\>

Set new colony funding role. Can be called by root role or architecture role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | Domain in which the caller has root/architecture role |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_user` | `PromiseOrValue`<`string`\> | User we want to give an funding role to |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | Domain in which we are giving user the role |
| `_setTo` | `PromiseOrValue`<`boolean`\> | The state of the role permission (true assign the permission, false revokes it) |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setFundingRole

___

### setFundingRoleWithProofs

▸ **setFundingRoleWithProofs**(`_user`, `_domainId`, `_setTo`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setFundingRole](ColonyClientV5.md#setfundingrole), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | User we want to give an funding role to |
| `_domainId` | `BigNumberish` | Domain in which we are giving user the role |
| `_setTo` | `boolean` | The state of the role permission (true assign the permission, false revokes it) |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setFundingRoleWithProofs

___

### setPaymentPayout

▸ **setPaymentPayout**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the payout for a given token on an existing payment. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Payment identifier |
| `_token` | `PromiseOrValue`<`string`\> | Address of the token, `0x0` value indicates Ether |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | Payout amount |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setPaymentPayout

___

### setPaymentPayoutWithProofs

▸ **setPaymentPayoutWithProofs**(`_id`, `_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setPaymentPayout](ColonyClientV5.md#setpaymentpayout), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Payment identifier |
| `_token` | `BigNumberish` | Address of the token, `0x0` value indicates Ether |
| `_amount` | `BigNumberish` | Payout amount |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setPaymentPayoutWithProofs

___

### setPaymentRecipient

▸ **setPaymentRecipient**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the recipient on an existing payment. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Payment identifier |
| `_recipient` | `PromiseOrValue`<`string`\> | Address of the payment recipient |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setPaymentRecipient

___

### setPaymentRecipientWithProofs

▸ **setPaymentRecipientWithProofs**(`_id`, `_recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setPaymentRecipient](ColonyClientV5.md#setpaymentrecipient), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Payment identifier |
| `_recipient` | `string` | Address of the payment recipient |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setPaymentRecipientWithProofs

___

### setPaymentSkill

▸ **setPaymentSkill**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the skill on an existing payment. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Payment identifier |
| `_skillId` | `PromiseOrValue`<`BigNumberish`\> | Id of the new skill to set |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setPaymentSkill

___

### setPaymentSkillWithProofs

▸ **setPaymentSkillWithProofs**(`_id`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setPaymentSkill](ColonyClientV5.md#setpaymentskill), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Payment identifier |
| `_skillId` | `BigNumberish` | Id of the new skill to set |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setPaymentSkillWithProofs

___

### setRecoveryRole

▸ **setRecoveryRole**(`_user`, `overrides?`): `Promise`<`ContractTransaction`\>

Set new colony recovery role. Can be called by root.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | User we want to give a recovery role to |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setRecoveryRole

___

### setRewardInverse

▸ **setRewardInverse**(`_rewardInverse`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the reward inverse to pay out from revenue. e.g. if the fee is 1% (or 0.01), set 100.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_rewardInverse` | `PromiseOrValue`<`BigNumberish`\> | The inverse of the reward |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setRewardInverse

___

### setRootRole

▸ **setRootRole**(`_user`, `_setTo`, `overrides?`): `Promise`<`ContractTransaction`\>

Set new colony root role. Can be called by root role only.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | User we want to give an root role to |
| `_setTo` | `PromiseOrValue`<`boolean`\> | The state of the role permission (true assign the permission, false revokes it) |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setRootRole

___

### setStorageSlotRecovery

▸ **setStorageSlotRecovery**(`_slot`, `_value`, `overrides?`): `Promise`<`ContractTransaction`\>

certain critical variables are protected from editing in this function
Update value of arbitrary storage variable. Can only be called by user with recovery role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_slot` | `PromiseOrValue`<`BigNumberish`\> | Uint address of storage slot to be updated |
| `_value` | `PromiseOrValue`<`BytesLike`\> | word of data to be set |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setStorageSlotRecovery

___

### setTaskBrief

▸ **setTaskBrief**(`_id`, `_specificationHash`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the hash for the task brief, aka task work specification, which identifies the task brief content in ddb. Allowed before a task is finalized.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `_specificationHash` | `PromiseOrValue`<`BytesLike`\> | Unique hash of the task brief in ddb |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setTaskBrief

___

### setTaskDueDate

▸ **setTaskDueDate**(`_id`, `_dueDate`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the due date on task `_id`. Allowed before a task is finalized.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `_dueDate` | `PromiseOrValue`<`BigNumberish`\> | Due date as seconds since unix epoch |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setTaskDueDate

___

### setTaskEvaluatorPayout

▸ **setTaskEvaluatorPayout**(`_id`, `_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Set `_token` payout for evaluator in task `_id` to `_amount`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `_token` | `PromiseOrValue`<`string`\> | Address of the token, `0x0` value indicates Ether |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | Payout amount |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setTaskEvaluatorPayout

___

### setTaskEvaluatorRole

▸ **setTaskEvaluatorRole**(`_id`, `_user`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called through `executeTaskRoleAssignment`.
Assigning evaluator role. Can only be set if there is no one currently assigned to be an evaluator. Manager of the task and user we want to assign role to both need to agree. Managers can assign themselves to this role, if there is no one currently assigned to it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `_user` | `PromiseOrValue`<`string`\> | Address of the user we want to give a evaluator role to |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setTaskEvaluatorRole

___

### setTaskManagerPayout

▸ **setTaskManagerPayout**(`_id`, `_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Set `_token` payout for manager in task `_id` to `_amount`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `_token` | `PromiseOrValue`<`string`\> | Address of the token, `0x0` value indicates Ether |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | Payout amount |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setTaskManagerPayout

___

### setTaskManagerRole

▸ **setTaskManagerRole**(`_id`, `_user`, `_permissionDomainId`, `_childSkillIndex`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called through `executeTaskRoleAssignment`.
Assigning manager role. Current manager and user we want to assign role to both need to agree. User we want to set here also needs to be an admin. Note that the domain proof data comes at the end here to not interfere with the assembly argument unpacking.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `_user` | `PromiseOrValue`<`string`\> | Address of the user we want to give a manager role to |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domain ID in which _user has the Administration permission |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId` |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setTaskManagerRole

___

### setTaskSkill

▸ **setTaskSkill**(`_id`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Currently we only allow one skill per task although we have provisioned for an array of skills in `Task` struct. Allowed before a task is finalized.
Set the skill for task `_id`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `_skillId` | `PromiseOrValue`<`BigNumberish`\> | Id of the skill which has to be a global skill |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setTaskSkill

___

### setTaskWorkerPayout

▸ **setTaskWorkerPayout**(`_id`, `_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Set `_token` payout for worker in task `_id` to `_amount`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `_token` | `PromiseOrValue`<`string`\> | Address of the token, `0x0` value indicates Ether |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | Payout amount |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setTaskWorkerPayout

___

### setTaskWorkerRole

▸ **setTaskWorkerRole**(`_id`, `_user`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called through `executeTaskRoleAssignment`.
Assigning worker role. Can only be set if there is no one currently assigned to be a worker. Manager of the task and user we want to assign role to both need to agree.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `_user` | `PromiseOrValue`<`string`\> | Address of the user we want to give a worker role to |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setTaskWorkerRole

___

### setUserRoles

▸ **setUserRoles**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_roles`, `overrides?`): `Promise`<`ContractTransaction`\>

Set several roles in one transaction. Can be called by root role or architecture role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | Domain in which the caller has root/architecture role |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_user` | `PromiseOrValue`<`string`\> | User we want to give a role to |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | Domain in which we are giving user the role |
| `_roles` | `PromiseOrValue`<`BytesLike`\> | Byte array representing the desired role setting (1 for on, 0 for off) |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setUserRoles

___

### setUserRolesWithProofs

▸ **setUserRolesWithProofs**(`_user`, `_domainId`, `_roles`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setUserRoles](ColonyClientV5.md#setuserroles), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | User we want to give a role to |
| `_domainId` | `BigNumberish` | Domain in which we are giving user the role |
| `_roles` | `BytesLike` | Byte array representing the desired role setting (1 for on, 0 for off) |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

ColonyAugmentsV5.setUserRolesWithProofs

___

### startNextRewardPayout

▸ **startNextRewardPayout**(`_token`, `key`, `value`, `branchMask`, `siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

Start next reward payout for `_token`. All funds in the reward pot for `_token` will become unavailable.Add a new payment in the colony. Can only be called by users with root permission. All tokens will be locked, and can be unlocked by calling `waiveRewardPayout` or `claimRewardPayout`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `PromiseOrValue`<`string`\> | Address of the token used for reward payout |
| `key` | `PromiseOrValue`<`BytesLike`\> | Some Reputation hash tree key |
| `value` | `PromiseOrValue`<`BytesLike`\> | Reputation value |
| `branchMask` | `PromiseOrValue`<`BigNumberish`\> | The branchmask of the proof |
| `siblings` | `PromiseOrValue`<`BytesLike`\>[] | The siblings of the proof |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.startNextRewardPayout

___

### submitTaskDeliverable

▸ **submitTaskDeliverable**(`_id`, `_deliverableHash`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the `task.deliverableHash` and `task.completionTimestamp` properties.
Submit the task deliverable, i.e. the output of the work performed for task `_id`. Submission is allowed only to the assigned worker before the task due date. Submissions cannot be overwritten.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `_deliverableHash` | `PromiseOrValue`<`BytesLike`\> | Unique hash of the task deliverable content in ddb |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.submitTaskDeliverable

___

### submitTaskDeliverableAndRating

▸ **submitTaskDeliverableAndRating**(`_id`, `_deliverableHash`, `_ratingSecret`, `overrides?`): `Promise`<`ContractTransaction`\>

Internally call `submitTaskDeliverable` and `submitTaskWorkRating` in sequence.
Submit the task deliverable for Worker and rating for Manager.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `_deliverableHash` | `PromiseOrValue`<`BytesLike`\> | Unique hash of the task deliverable content in ddb |
| `_ratingSecret` | `PromiseOrValue`<`BytesLike`\> | Rating secret for manager |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.submitTaskDeliverableAndRating

___

### submitTaskWorkRating

▸ **submitTaskWorkRating**(`_id`, `_role`, `_ratingSecret`, `overrides?`): `Promise`<`ContractTransaction`\>

Submit a hashed secret of the rating for work in task `_id` which was performed by user with task role id `_role`. Allowed within 5 days period starting which whichever is first from either the deliverable being submitted or the dueDate been reached. Allowed only for evaluator to rate worker and for worker to rate manager performance. Once submitted ratings can not be changed or overwritten.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the task |
| `_role` | `PromiseOrValue`<`BigNumberish`\> | Id of the role, as defined in TaskRole enum |
| `_ratingSecret` | `PromiseOrValue`<`BytesLike`\> | `keccak256` hash of a salt and 0-50 rating score (in increments of 10, .e.g 0, 10, 20, 30, 40 or 50). Can be generated via `IColony.generateSecret` helper function. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.submitTaskWorkRating

___

### transferExpenditure

▸ **transferExpenditure**(`_id`, `_newOwner`, `overrides?`): `Promise`<`ContractTransaction`\>

Updates the expenditure owner. Can only be called by expenditure owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Expenditure identifier |
| `_newOwner` | `PromiseOrValue`<`string`\> | New owner of expenditure |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.transferExpenditure

___

### transferExpenditureViaArbitration

▸ **transferExpenditureViaArbitration**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_newOwner`, `overrides?`): `Promise`<`ContractTransaction`\>

This is now deprecated and will be removed in a future version
DEPRECATED Updates the expenditure owner. Can only be called by Arbitration role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId`, (only used if `_permissionDomainId` is different to `_domainId`) |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Expenditure identifier |
| `_newOwner` | `PromiseOrValue`<`string`\> | New owner of expenditure |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.transferExpenditureViaArbitration

___

### transferExpenditureViaArbitrationWithProofs

▸ **transferExpenditureViaArbitrationWithProofs**(`_id`, `_newOwner`, `overrides?`): `Promise`<`ContractTransaction`\>

**`Deprecated`**

Same as [transferExpenditureViaArbitration](ColonyClientV5.md#transferexpenditureviaarbitration), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Expenditure identifier |
| `_newOwner` | `string` | New owner of expenditure |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

ColonyAugmentsV4.transferExpenditureViaArbitrationWithProofs

___

### transferStake

▸ **transferStake**(`_permissionDomainId`, `_childSkillIndex`, `_obligator`, `_user`, `_domainId`, `_amount`, `_recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

Transfer some amount of obligated tokens. Can be called by the arbitration role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which I have the permission to take this action. |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The child index in `_permissionDomainId` where we can find `_domainId`. |
| `_obligator` | `PromiseOrValue`<`string`\> | Address of the account who set the obligation. |
| `_user` | `PromiseOrValue`<`string`\> | Address of the account we are transferring. |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | Domain in which we are transferring the tokens. |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | Amount of internal token we are transferring. |
| `_recipient` | `PromiseOrValue`<`string`\> | Recipient of the transferred tokens. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.transferStake

___

### transferStakeWithProofs

▸ **transferStakeWithProofs**(`_obligator`, `_user`, `_domainId`, `_amount`, `_recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [transferStake](ColonyClientV5.md#transferstake), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_obligator` | `string` | Address of the account who set the obligation. |
| `_user` | `string` | Address of the account we are transferring. |
| `_domainId` | `BigNumberish` | Domain in which we are transferring the tokens. |
| `_amount` | `BigNumberish` | Amount of internal token we are transferring. |
| `_recipient` | `string` | Recipient of the transferred tokens. |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

ColonyAugmentsV5.transferStakeWithProofs

___

### uninstallExtension

▸ **uninstallExtension**(`extensionId`, `overrides?`): `Promise`<`ContractTransaction`\>

This is a permanent action -- re-installing the extension will deploy a new contractIt is recommended to deprecate an extension before uninstalling to allow active objects to be resolved
Uninstall an extension from a colony. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionId` | `PromiseOrValue`<`BytesLike`\> | keccak256 hash of the extension name, used as an indentifier |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.uninstallExtension

___

### unlockToken

▸ **unlockToken**(`overrides?`): `Promise`<`ContractTransaction`\>

unlock the native colony token, if possible

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.unlockToken

___

### unlockTokenForUser

▸ **unlockTokenForUser**(`user`, `lockId`, `overrides?`): `Promise`<`ContractTransaction`\>

Unlock the colony's token for a user. Can only be called by a network-managed extension.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | `PromiseOrValue`<`string`\> | The user to unlock |
| `lockId` | `PromiseOrValue`<`BigNumberish`\> | The specific lock to unlock |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.unlockTokenForUser

___

### updateColonyOrbitDB

▸ **updateColonyOrbitDB**(`orbitdb`, `overrides?`): `Promise`<`ContractTransaction`\>

Update a colony's orbitdb address. Can only be called by a colony with a registered subdomain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orbitdb` | `PromiseOrValue`<`string`\> | The path of the orbitDB database to be associated with the colony |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.updateColonyOrbitDB

___

### upgrade

▸ **upgrade**(`_newVersion`, `overrides?`): `Promise`<`ContractTransaction`\>

Downgrades are not allowed, i.e. `_newVersion` should be higher than the currect colony version.
Upgrades a colony to a new Colony contract version `_newVersion`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_newVersion` | `PromiseOrValue`<`BigNumberish`\> | The target version for the upgrade |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.upgrade

___

### upgradeExtension

▸ **upgradeExtension**(`extensionId`, `newVersion`, `overrides?`): `Promise`<`ContractTransaction`\>

Upgrade an extension in a colony. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionId` | `PromiseOrValue`<`BytesLike`\> | keccak256 hash of the extension name, used as an indentifier |
| `newVersion` | `PromiseOrValue`<`BigNumberish`\> | The version to upgrade to (must be one larger than the current version) |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.upgradeExtension

___

### upgradeExtensionChecked

▸ **upgradeExtensionChecked**(`extension`, `newVersion?`, `overrides?`): `Promise`<`ContractTransaction`\>

Similar to [upgradeExtension](ColonyClientV5.md#upgradeextension), but first check whether the desired extension can be upgraded to the desired version in this Colony
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extension` | [`Extension`](../enums/Extension.md) | A [Extension](../enums/Extension.md) name |
| `newVersion?` | `number` | The desired version number of the extension you wish to upgrade |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

ColonyAugmentsV5.upgradeExtensionChecked

___

### userCanSetRoles

▸ **userCanSetRoles**(`_user`, `_domainId`, `_childSkillIndex`, `_childDomainId`, `overrides?`): `Promise`<`boolean`\>

Check whether a given user can modify roles in the target domain `_childDomainId`. Mostly a convenience function to provide a uniform interface for extension contracts validating permissions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | The user whose permissions we want to check |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | Domain in which the caller has the role (currently Root or Architecture) |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_childDomainId` is relative to `_domainId` |
| `_childDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domain where we want to edit roles |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedIColony.userCanSetRoles

___

### verifyReputationProof

▸ **verifyReputationProof**(`key`, `value`, `branchMask`, `siblings`, `overrides?`): `Promise`<`boolean`\>

For more detail about branchMask and siblings, examine the PatriciaTree implementation. While external, likely only to be used by the Colony contracts, as it checks that the user is proving their own reputation in the current colony. The `verifyProof` function can be used to verify any proof, though this function is not currently exposed on the Colony's EtherRouter.
Helper function that can be used by a client to verify the correctness of a patricia proof they have been supplied with.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `PromiseOrValue`<`BytesLike`\> | The key of the element the proof is for. |
| `value` | `PromiseOrValue`<`BytesLike`\> | The value of the element that the proof is for. |
| `branchMask` | `PromiseOrValue`<`BigNumberish`\> | The branchmask of the proof |
| `siblings` | `PromiseOrValue`<`BytesLike`\>[] | The siblings of the proof |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedIColony.verifyReputationProof

___

### version

▸ **version**(`overrides?`): `Promise`<`BigNumber`\>

Get the Colony contract version. Starts from 1 and is incremented with every deployed contract change.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.version
