# Interface: VotingReputationClientV2

## Hierarchy

- `AugmentedVotingReputation`<`VotingReputation`\>

- `AugmentsV2`<`VotingReputation`\>

- `CreateDomainMotionAugments`<`VotingReputation`\>

  ↳ **`VotingReputationClientV2`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

AugmentedVotingReputation.\_deployedPromise

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

AugmentedVotingReputation.\_runningEvents

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

AugmentedVotingReputation.\_wrappedEmits

___

### address

• `Readonly` **address**: `string`

#### Inherited from

AugmentedVotingReputation.address

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `claimReward` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_staker`: `PromiseOrValue`<`string`\>, `_vote`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `createClaimDelayAction` | (`action`: `PromiseOrValue`<`BytesLike`\>, `value`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `createDomainMotion` | (`_domainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_action`: `PromiseOrValue`<`BytesLike`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `createMotion` | (`_domainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_altTarget`: `PromiseOrValue`<`string`\>, `_action`: `PromiseOrValue`<`BytesLike`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `createRootMotion` | (`_altTarget`: `PromiseOrValue`<`string`\>, `_action`: `PromiseOrValue`<`BytesLike`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecate` | (`_deprecated`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `escalateMotion` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_newDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finalizeMotion` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finishUpgrade` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getCapabilityRoles` | (`_sig`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getEscalationPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getExpenditureMotionCount` | (`_structHash`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getExpenditurePastVote` | (`_actionHash`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMaxVoteFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMotion` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`MotionStructOutput`\> |
| `getMotionCount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMotionState` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `getRevealPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStake` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_staker`: `PromiseOrValue`<`string`\>, `_vote`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStakePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStakerReward` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_staker`: `PromiseOrValue`<`string`\>, `_vote`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getSubmitPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUserMinStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getVoterReward` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_voterRep`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getVoterRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getVoterRewardRange` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_voterRep`: `PromiseOrValue`<`BigNumberish`\>, `_voterAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `initialise` | (`_totalStakeFraction`: `PromiseOrValue`<`BigNumberish`\>, `_voterRewardFraction`: `PromiseOrValue`<`BigNumberish`\>, `_userMinStakeFraction`: `PromiseOrValue`<`BigNumberish`\>, `_maxVoteFraction`: `PromiseOrValue`<`BigNumberish`\>, `_stakePeriod`: `PromiseOrValue`<`BigNumberish`\>, `_submitPeriod`: `PromiseOrValue`<`BigNumberish`\>, `_revealPeriod`: `PromiseOrValue`<`BigNumberish`\>, `_escalationPeriod`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `install` | (`_colony`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `revealVote` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_salt`: `PromiseOrValue`<`BytesLike`\>, `_vote`: `PromiseOrValue`<`BigNumberish`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `stakeMotion` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_vote`: `PromiseOrValue`<`BigNumberish`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `submitVote` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_voteSecret`: `PromiseOrValue`<`BytesLike`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Inherited from

AugmentedVotingReputation.callStatic

___

### clientType

• **clientType**: [`VotingReputationClient`](../enums/ClientType.md#votingreputationclient)

#### Inherited from

AugmentedVotingReputation.clientType

___

### clientVersion

• **clientVersion**: ``2``

#### Overrides

AugmentedVotingReputation.clientVersion

___

### colonyClient

• **colonyClient**: `AugmentedIColony`

An instance of the corresponding ColonyClient

#### Inherited from

AugmentedVotingReputation.colonyClient

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

AugmentedVotingReputation.deployTransaction

___

### estimateGas

• **estimateGas**: `VotingReputationEstimate`

#### Overrides

AugmentedVotingReputation.estimateGas

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ExtensionInitialised` | () => `ExtensionInitialisedEventFilter` |
| `ExtensionInitialised()` | () => `ExtensionInitialisedEventFilter` |
| `LogSetAuthority` | (`authority?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetAuthorityEventFilter` |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetAuthorityEventFilter` |
| `LogSetOwner` | (`owner?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetOwnerEventFilter` |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetOwnerEventFilter` |
| `MotionCreated` | (`motionId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `creator?`: ``null``, `domainId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `MotionCreatedEventFilter` |
| `MotionCreated(uint256,address,uint256)` | (`motionId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `creator?`: ``null``, `domainId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `MotionCreatedEventFilter` |
| `MotionEscalated` | (`motionId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `escalator?`: ``null``, `domainId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `newDomainId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `MotionEscalatedEventFilter` |
| `MotionEscalated(uint256,address,uint256,uint256)` | (`motionId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `escalator?`: ``null``, `domainId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `newDomainId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `MotionEscalatedEventFilter` |
| `MotionEventSet` | (`motionId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `eventIndex?`: ``null``) => `MotionEventSetEventFilter` |
| `MotionEventSet(uint256,uint256)` | (`motionId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `eventIndex?`: ``null``) => `MotionEventSetEventFilter` |
| `MotionFinalized` | (`motionId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `action?`: ``null``, `executed?`: ``null``) => `MotionFinalizedEventFilter` |
| `MotionFinalized(uint256,bytes,bool)` | (`motionId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `action?`: ``null``, `executed?`: ``null``) => `MotionFinalizedEventFilter` |
| `MotionRewardClaimed` | (`motionId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `staker?`: ``null`` \| `PromiseOrValue`<`string`\>, `vote?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `amount?`: ``null``) => `MotionRewardClaimedEventFilter` |
| `MotionRewardClaimed(uint256,address,uint256,uint256)` | (`motionId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `staker?`: ``null`` \| `PromiseOrValue`<`string`\>, `vote?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `amount?`: ``null``) => `MotionRewardClaimedEventFilter` |
| `MotionStaked` | (`motionId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `staker?`: ``null`` \| `PromiseOrValue`<`string`\>, `vote?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `amount?`: ``null``) => `MotionStakedEventFilter` |
| `MotionStaked(uint256,address,uint256,uint256)` | (`motionId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `staker?`: ``null`` \| `PromiseOrValue`<`string`\>, `vote?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `amount?`: ``null``) => `MotionStakedEventFilter` |
| `MotionVoteRevealed` | (`motionId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `voter?`: ``null`` \| `PromiseOrValue`<`string`\>, `vote?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `MotionVoteRevealedEventFilter` |
| `MotionVoteRevealed(uint256,address,uint256)` | (`motionId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `voter?`: ``null`` \| `PromiseOrValue`<`string`\>, `vote?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>) => `MotionVoteRevealedEventFilter` |
| `MotionVoteSubmitted` | (`motionId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `voter?`: ``null`` \| `PromiseOrValue`<`string`\>) => `MotionVoteSubmittedEventFilter` |
| `MotionVoteSubmitted(uint256,address)` | (`motionId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `voter?`: ``null`` \| `PromiseOrValue`<`string`\>) => `MotionVoteSubmittedEventFilter` |

#### Inherited from

AugmentedVotingReputation.filters

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `claimReward` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_staker`: `PromiseOrValue`<`string`\>, `_vote`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createClaimDelayAction` | (`action`: `PromiseOrValue`<`BytesLike`\>, `value`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createDomainMotion` | (`_domainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_action`: `PromiseOrValue`<`BytesLike`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createMotion` | (`_domainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_altTarget`: `PromiseOrValue`<`string`\>, `_action`: `PromiseOrValue`<`BytesLike`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createRootMotion` | (`_altTarget`: `PromiseOrValue`<`string`\>, `_action`: `PromiseOrValue`<`BytesLike`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deprecate` | (`_deprecated`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `escalateMotion` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_newDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finalizeMotion` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getCapabilityRoles` | (`_sig`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getEscalationPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getExpenditureMotionCount` | (`_structHash`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getExpenditurePastVote` | (`_actionHash`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getMaxVoteFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getMotion` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`MotionStructOutput`] & { `motion`: `MotionStructOutput`  }\> |
| `getMotionCount` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getMotionState` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `getRevealPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getStake` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_staker`: `PromiseOrValue`<`string`\>, `_vote`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getStakePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getStakerReward` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_staker`: `PromiseOrValue`<`string`\>, `_vote`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getSubmitPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTotalStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getUserMinStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getVoterReward` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_voterRep`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getVoterRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getVoterRewardRange` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_voterRep`: `PromiseOrValue`<`BigNumberish`\>, `_voterAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `initialise` | (`_totalStakeFraction`: `PromiseOrValue`<`BigNumberish`\>, `_voterRewardFraction`: `PromiseOrValue`<`BigNumberish`\>, `_userMinStakeFraction`: `PromiseOrValue`<`BigNumberish`\>, `_maxVoteFraction`: `PromiseOrValue`<`BigNumberish`\>, `_stakePeriod`: `PromiseOrValue`<`BigNumberish`\>, `_submitPeriod`: `PromiseOrValue`<`BigNumberish`\>, `_revealPeriod`: `PromiseOrValue`<`BigNumberish`\>, `_escalationPeriod`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `install` | (`_colony`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `revealVote` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_salt`: `PromiseOrValue`<`BytesLike`\>, `_vote`: `PromiseOrValue`<`BigNumberish`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `stakeMotion` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_vote`: `PromiseOrValue`<`BigNumberish`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `submitVote` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_voteSecret`: `PromiseOrValue`<`BytesLike`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |

#### Inherited from

AugmentedVotingReputation.functions

___

### interface

• **interface**: `VotingReputationInterface`

#### Inherited from

AugmentedVotingReputation.interface

___

### off

• **off**: `OnEvent`<[`VotingReputationClientV2`](VotingReputationClientV2.md)\>

#### Inherited from

AugmentedVotingReputation.off

___

### on

• **on**: `OnEvent`<[`VotingReputationClientV2`](VotingReputationClientV2.md)\>

#### Inherited from

AugmentedVotingReputation.on

___

### once

• **once**: `OnEvent`<[`VotingReputationClientV2`](VotingReputationClientV2.md)\>

#### Inherited from

AugmentedVotingReputation.once

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `claimReward` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_staker`: `PromiseOrValue`<`string`\>, `_vote`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createClaimDelayAction` | (`action`: `PromiseOrValue`<`BytesLike`\>, `value`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createDomainMotion` | (`_domainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_action`: `PromiseOrValue`<`BytesLike`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createMotion` | (`_domainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_altTarget`: `PromiseOrValue`<`string`\>, `_action`: `PromiseOrValue`<`BytesLike`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createRootMotion` | (`_altTarget`: `PromiseOrValue`<`string`\>, `_action`: `PromiseOrValue`<`BytesLike`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecate` | (`_deprecated`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `escalateMotion` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_newDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finalizeMotion` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles` | (`_sig`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getEscalationPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExpenditureMotionCount` | (`_structHash`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExpenditurePastVote` | (`_actionHash`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMaxVoteFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMotion` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMotionCount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMotionState` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getRevealPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStake` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_staker`: `PromiseOrValue`<`string`\>, `_vote`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStakePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStakerReward` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_staker`: `PromiseOrValue`<`string`\>, `_vote`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSubmitPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTotalStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getUserMinStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getVoterReward` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_voterRep`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getVoterRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getVoterRewardRange` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_voterRep`: `PromiseOrValue`<`BigNumberish`\>, `_voterAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialise` | (`_totalStakeFraction`: `PromiseOrValue`<`BigNumberish`\>, `_voterRewardFraction`: `PromiseOrValue`<`BigNumberish`\>, `_userMinStakeFraction`: `PromiseOrValue`<`BigNumberish`\>, `_maxVoteFraction`: `PromiseOrValue`<`BigNumberish`\>, `_stakePeriod`: `PromiseOrValue`<`BigNumberish`\>, `_submitPeriod`: `PromiseOrValue`<`BigNumberish`\>, `_revealPeriod`: `PromiseOrValue`<`BigNumberish`\>, `_escalationPeriod`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `install` | (`_colony`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `revealVote` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_salt`: `PromiseOrValue`<`BytesLike`\>, `_vote`: `PromiseOrValue`<`BigNumberish`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `stakeMotion` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_vote`: `PromiseOrValue`<`BigNumberish`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `submitVote` | (`_motionId`: `PromiseOrValue`<`BigNumberish`\>, `_voteSecret`: `PromiseOrValue`<`BytesLike`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

AugmentedVotingReputation.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

AugmentedVotingReputation.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`VotingReputationClientV2`](VotingReputationClientV2.md)\>

#### Inherited from

AugmentedVotingReputation.removeListener

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

AugmentedVotingReputation.resolvedAddress

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

AugmentedVotingReputation.signer

___

### votingReputationEvents

• **votingReputationEvents**: `VotingReputationEvents`

The votingReputationsEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

#### Inherited from

AugmentedVotingReputation.votingReputationEvents

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

AugmentedVotingReputation.\_checkRunningEvents

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

AugmentedVotingReputation.\_deployed

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

AugmentedVotingReputation.\_wrapEvent

___

### attach

▸ **attach**(`addressOrName`): [`VotingReputationClientV2`](VotingReputationClientV2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`VotingReputationClientV2`](VotingReputationClientV2.md)

#### Inherited from

AugmentedVotingReputation.attach

___

### authority

▸ **authority**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedVotingReputation.authority

___

### claimReward

▸ **claimReward**(`_motionId`, `_permissionDomainId`, `_childSkillIndex`, `_staker`, `_vote`, `overrides?`): `Promise`<`ContractTransaction`\>

Claim the staker's reward

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_motionId` | `PromiseOrValue`<`BigNumberish`\> | The id of the motion |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domain where the extension has the arbitration permission |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | For the domain in which the motion is occurring |
| `_staker` | `PromiseOrValue`<`string`\> | The staker whose reward is being claimed |
| `_vote` | `PromiseOrValue`<`BigNumberish`\> | The side being supported (0 = NAY, 1 = YAY) |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.claimReward

___

### claimRewardWithProofs

▸ **claimRewardWithProofs**(`_motionId`, `_staker`, `_vote`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [claimReward](VotingReputationClientV2.md#claimreward), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_motionId` | `BigNumberish` | The id of the motion |
| `_staker` | `string` | The staker whose reward is being claimed |
| `_vote` | `BigNumberish` | The side being supported (0 = NAY, 1 = YAY) |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.claimRewardWithProofs

___

### connect

▸ **connect**(`signerOrProvider`): [`VotingReputationClientV2`](VotingReputationClientV2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`VotingReputationClientV2`](VotingReputationClientV2.md)

#### Inherited from

AugmentedVotingReputation.connect

___

### createClaimDelayAction

▸ **createClaimDelayAction**(`action`, `value`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `PromiseOrValue`<`BytesLike`\> |
| `value` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.createClaimDelayAction

___

### createDomainMotion

▸ **createDomainMotion**(`_domainId`, `_childSkillIndex`, `_action`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

Create a motion in any domain (DEPRECATED)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | The domain where we vote on the motion |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The childSkillIndex pointing to the domain of the action |
| `_action` | `PromiseOrValue`<`BytesLike`\> | A bytes array encoding a function call |
| `_key` | `PromiseOrValue`<`BytesLike`\> | Reputation tree key for the domain |
| `_value` | `PromiseOrValue`<`BytesLike`\> | Reputation tree value for the domain |
| `_branchMask` | `PromiseOrValue`<`BigNumberish`\> | The branchmask of the proof |
| `_siblings` | `PromiseOrValue`<`BytesLike`\>[] | The siblings of the proof |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.createDomainMotion

___

### createDomainMotionWithProofs

▸ **createDomainMotionWithProofs**(`_domainId`, `_action`, `overrides?`): `Promise`<`ContractTransaction`\>

**`Deprecated`**

Same as [createDomainMotion](VotingReputationClientV2.md#createdomainmotion), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_domainId` | `BigNumberish` | The domain where we vote on the motion |
| `_action` | `BytesLike` | A bytes array encoding a function call |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

CreateDomainMotionAugments.createDomainMotionWithProofs

___

### createMotion

▸ **createMotion**(`_domainId`, `_childSkillIndex`, `_altTarget`, `_action`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

Create a motion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | The domain where we vote on the motion |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The childSkillIndex pointing to the domain of the action |
| `_altTarget` | `PromiseOrValue`<`string`\> | The contract to which we send the action (0x0 for the colony) |
| `_action` | `PromiseOrValue`<`BytesLike`\> | A bytes array encoding a function call |
| `_key` | `PromiseOrValue`<`BytesLike`\> | Reputation tree key for the root domain |
| `_value` | `PromiseOrValue`<`BytesLike`\> | Reputation tree value for the root domain |
| `_branchMask` | `PromiseOrValue`<`BigNumberish`\> | The branchmask of the proof |
| `_siblings` | `PromiseOrValue`<`BytesLike`\>[] | The siblings of the proof |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.createMotion

___

### createMotionWithProofs

▸ **createMotionWithProofs**(`_domainId`, `_altTarget`, `_action`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [createMotion](VotingReputationClientV2.md#createmotion), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_domainId` | `BigNumberish` | The domain where we vote on the motion |
| `_altTarget` | `string` | The contract to which we send the action (0x0 for the colony) |
| `_action` | `BytesLike` | A bytes array encoding a function call |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentsV2.createMotionWithProofs

___

### createRootMotion

▸ **createRootMotion**(`_altTarget`, `_action`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

Create a motion in the root domain (DEPRECATED)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_altTarget` | `PromiseOrValue`<`string`\> | The contract to which we send the action (0x0 for the colony) |
| `_action` | `PromiseOrValue`<`BytesLike`\> | A bytes array encoding a function call |
| `_key` | `PromiseOrValue`<`BytesLike`\> | Reputation tree key for the root domain |
| `_value` | `PromiseOrValue`<`BytesLike`\> | Reputation tree value for the root domain |
| `_branchMask` | `PromiseOrValue`<`BigNumberish`\> | The branchmask of the proof |
| `_siblings` | `PromiseOrValue`<`BytesLike`\>[] | The siblings of the proof |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.createRootMotion

___

### deployed

▸ **deployed**(): `Promise`<[`VotingReputationClientV2`](VotingReputationClientV2.md)\>

#### Returns

`Promise`<[`VotingReputationClientV2`](VotingReputationClientV2.md)\>

#### Inherited from

AugmentedVotingReputation.deployed

___

### deprecate

▸ **deprecate**(`_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

Called when deprecating (or undeprecating) the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `_deprecated` | `PromiseOrValue`<`boolean`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.deprecate

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

AugmentedVotingReputation.emit

___

### escalateMotion

▸ **escalateMotion**(`_motionId`, `_newDomainId`, `_childSkillIndex`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

Escalate a motion to a higher domain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_motionId` | `PromiseOrValue`<`BigNumberish`\> | The id of the motion |
| `_newDomainId` | `PromiseOrValue`<`BigNumberish`\> | The desired domain of escalation |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | For the current domain, relative to the escalated domain |
| `_key` | `PromiseOrValue`<`BytesLike`\> | Reputation tree key for the new domain |
| `_value` | `PromiseOrValue`<`BytesLike`\> | Reputation tree value for the new domain |
| `_branchMask` | `PromiseOrValue`<`BigNumberish`\> | The branchmask of the proof |
| `_siblings` | `PromiseOrValue`<`BytesLike`\>[] | The siblings of the proof |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.escalateMotion

___

### escalateMotionWithProofs

▸ **escalateMotionWithProofs**(`_motionId`, `_newDomainId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [escalateMotion](VotingReputationClientV2.md#escalatemotion), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_motionId` | `BigNumberish` | The id of the motion |
| `_newDomainId` | `BigNumberish` | The desired domain of escalation |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.escalateMotionWithProofs

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

AugmentedVotingReputation.fallback

___

### finalizeMotion

▸ **finalizeMotion**(`_motionId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.finalizeMotion

___

### finishUpgrade

▸ **finishUpgrade**(`overrides?`): `Promise`<`ContractTransaction`\>

Called when upgrading the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.finishUpgrade

___

### getCapabilityRoles

▸ **getCapabilityRoles**(`_sig`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_sig` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedVotingReputation.getCapabilityRoles

___

### getColony

▸ **getColony**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedVotingReputation.getColony

___

### getDeprecated

▸ **getDeprecated**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedVotingReputation.getDeprecated

___

### getEscalationPeriod

▸ **getEscalationPeriod**(`overrides?`): `Promise`<`BigNumber`\>

Get the escalation period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getEscalationPeriod

___

### getExpenditureMotionCount

▸ **getExpenditureMotionCount**(`_structHash`, `overrides?`): `Promise`<`BigNumber`\>

Get the number of ongoing motions for a single expenditure / expenditure slot

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_structHash` | `PromiseOrValue`<`BytesLike`\> | The hash of the expenditureId or expenditureId*expenditureSlot |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getExpenditureMotionCount

___

### getExpenditurePastVote

▸ **getExpenditurePastVote**(`_actionHash`, `overrides?`): `Promise`<`BigNumber`\>

Get the largest past vote on a single expenditure variable

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_actionHash` | `PromiseOrValue`<`BytesLike`\> | The hash of the particular expenditure action |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getExpenditurePastVote

___

### getMaxVoteFraction

▸ **getMaxVoteFraction**(`overrides?`): `Promise`<`BigNumber`\>

Get the max vote fraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getMaxVoteFraction

___

### getMotion

▸ **getMotion**(`_motionId`, `overrides?`): `Promise`<`MotionStructOutput`\>

Get the data for a single motion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_motionId` | `PromiseOrValue`<`BigNumberish`\> | The id of the motion |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`MotionStructOutput`\>

#### Inherited from

AugmentedVotingReputation.getMotion

___

### getMotionCount

▸ **getMotionCount**(`overrides?`): `Promise`<`BigNumber`\>

Get the total motion count

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getMotionCount

___

### getMotionState

▸ **getMotionState**(`_motionId`, `overrides?`): `Promise`<`number`\>

Get the current state of the motion

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Inherited from

AugmentedVotingReputation.getMotionState

___

### getRevealPeriod

▸ **getRevealPeriod**(`overrides?`): `Promise`<`BigNumber`\>

Get the reveal period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getRevealPeriod

___

### getStake

▸ **getStake**(`_motionId`, `_staker`, `_vote`, `overrides?`): `Promise`<`BigNumber`\>

Get a user's stake on a motion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_motionId` | `PromiseOrValue`<`BigNumberish`\> | The id of the motion |
| `_staker` | `PromiseOrValue`<`string`\> | The staker address |
| `_vote` | `PromiseOrValue`<`BigNumberish`\> | The side being supported (0 = NAY, 1 = YAY) |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getStake

___

### getStakePeriod

▸ **getStakePeriod**(`overrides?`): `Promise`<`BigNumber`\>

Get the stake period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getStakePeriod

___

### getStakerReward

▸ **getStakerReward**(`_motionId`, `_staker`, `_vote`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`]\>

Get the staker reward

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_motionId` | `PromiseOrValue`<`BigNumberish`\> | The id of the motion |
| `_staker` | `PromiseOrValue`<`string`\> | The staker's address |
| `_vote` | `PromiseOrValue`<`BigNumberish`\> | The vote (0 = NAY, 1 = YAY) |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`]\>

#### Inherited from

AugmentedVotingReputation.getStakerReward

___

### getSubmitPeriod

▸ **getSubmitPeriod**(`overrides?`): `Promise`<`BigNumber`\>

Get the submit period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getSubmitPeriod

___

### getTotalStakeFraction

▸ **getTotalStakeFraction**(`overrides?`): `Promise`<`BigNumber`\>

Get the total stake fraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getTotalStakeFraction

___

### getUserMinStakeFraction

▸ **getUserMinStakeFraction**(`overrides?`): `Promise`<`BigNumber`\>

Get the user min stake fraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getUserMinStakeFraction

___

### getVoterReward

▸ **getVoterReward**(`_motionId`, `_voterRep`, `overrides?`): `Promise`<`BigNumber`\>

Get the voter reward NB This function will only return a meaningful value if in the reveal state. Prior to the reveal state, getVoterRewardRange should be used.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_motionId` | `PromiseOrValue`<`BigNumberish`\> | The id of the motion |
| `_voterRep` | `PromiseOrValue`<`BigNumberish`\> | The reputation the voter has in the domain |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getVoterReward

___

### getVoterRewardFraction

▸ **getVoterRewardFraction**(`overrides?`): `Promise`<`BigNumber`\>

Get the voter reward fraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getVoterRewardFraction

___

### getVoterRewardRange

▸ **getVoterRewardRange**(`_motionId`, `_voterRep`, `_voterAddress`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`]\>

Get the range of potential rewards for a voter on a specific motion, intended to be used when the motion is in the reveal state. Once a motion is in the reveal state the reward is known, and getVoterRewardRange should be used.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_motionId` | `PromiseOrValue`<`BigNumberish`\> | The id of the motion |
| `_voterRep` | `PromiseOrValue`<`BigNumberish`\> | The reputation the voter has in the domain |
| `_voterAddress` | `PromiseOrValue`<`string`\> | The address the user will be voting as |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`]\>

#### Inherited from

AugmentedVotingReputation.getVoterRewardRange

___

### identifier

▸ **identifier**(`overrides?`): `Promise`<`string`\>

Returns the identifier of the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedVotingReputation.identifier

___

### initialise

▸ **initialise**(`_totalStakeFraction`, `_voterRewardFraction`, `_userMinStakeFraction`, `_maxVoteFraction`, `_stakePeriod`, `_submitPeriod`, `_revealPeriod`, `_escalationPeriod`, `overrides?`): `Promise`<`ContractTransaction`\>

Initialise the extension

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_totalStakeFraction` | `PromiseOrValue`<`BigNumberish`\> | The fraction of the domain's reputation we need to stake |
| `_voterRewardFraction` | `PromiseOrValue`<`BigNumberish`\> | The fraction of the total stake paid out to voters as rewards |
| `_userMinStakeFraction` | `PromiseOrValue`<`BigNumberish`\> | The minimum per-user stake as fraction of total stake |
| `_maxVoteFraction` | `PromiseOrValue`<`BigNumberish`\> | The fraction of the domain's reputation which must submit for quick-end |
| `_stakePeriod` | `PromiseOrValue`<`BigNumberish`\> | The length of the staking period in seconds |
| `_submitPeriod` | `PromiseOrValue`<`BigNumberish`\> | The length of the submit period in seconds |
| `_revealPeriod` | `PromiseOrValue`<`BigNumberish`\> | The length of the reveal period in seconds |
| `_escalationPeriod` | `PromiseOrValue`<`BigNumberish`\> | The length of the escalation period in seconds |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.initialise

___

### install

▸ **install**(`_colony`, `overrides?`): `Promise`<`ContractTransaction`\>

Install the extension

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_colony` | `PromiseOrValue`<`string`\> | Base colony for the installation |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.install

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

AugmentedVotingReputation.listenerCount

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

AugmentedVotingReputation.listeners

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Inherited from

AugmentedVotingReputation.listeners

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedVotingReputation.owner

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

AugmentedVotingReputation.queryFilter

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`VotingReputationClientV2`](VotingReputationClientV2.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`VotingReputationClientV2`](VotingReputationClientV2.md)

#### Inherited from

AugmentedVotingReputation.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`VotingReputationClientV2`](VotingReputationClientV2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`VotingReputationClientV2`](VotingReputationClientV2.md)

#### Inherited from

AugmentedVotingReputation.removeAllListeners

___

### revealVote

▸ **revealVote**(`_motionId`, `_salt`, `_vote`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

Reveal a vote secret for a motion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_motionId` | `PromiseOrValue`<`BigNumberish`\> | The id of the motion |
| `_salt` | `PromiseOrValue`<`BytesLike`\> | The salt used to hash the vote |
| `_vote` | `PromiseOrValue`<`BigNumberish`\> | The side being supported (0 = NAY, 1 = YAY) |
| `_key` | `PromiseOrValue`<`BytesLike`\> | Reputation tree key for the staker/domain |
| `_value` | `PromiseOrValue`<`BytesLike`\> | Reputation tree value for the staker/domain |
| `_branchMask` | `PromiseOrValue`<`BigNumberish`\> | The branchmask of the proof |
| `_siblings` | `PromiseOrValue`<`BytesLike`\>[] | The siblings of the proof |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.revealVote

___

### setAuthority

▸ **setAuthority**(`authority_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authority_` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.setAuthority

___

### setOwner

▸ **setOwner**(`owner_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.setOwner

___

### stakeMotion

▸ **stakeMotion**(`_motionId`, `_permissionDomainId`, `_childSkillIndex`, `_vote`, `_amount`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

Stake on a motion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_motionId` | `PromiseOrValue`<`BigNumberish`\> | The id of the motion |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domain where the extension has the arbitration permission |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | For the domain in which the motion is occurring |
| `_vote` | `PromiseOrValue`<`BigNumberish`\> | The side being supported (0 = NAY, 1 = YAY) |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of tokens being staked |
| `_key` | `PromiseOrValue`<`BytesLike`\> | Reputation tree key for the staker/domain |
| `_value` | `PromiseOrValue`<`BytesLike`\> | Reputation tree value for the staker/domain |
| `_branchMask` | `PromiseOrValue`<`BigNumberish`\> | The branchmask of the proof |
| `_siblings` | `PromiseOrValue`<`BytesLike`\>[] | The siblings of the proof |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.stakeMotion

___

### stakeMotionWithProofs

▸ **stakeMotionWithProofs**(`_motionId`, `_vote`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [stakeMotion](VotingReputationClientV2.md#stakemotion), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_motionId` | `BigNumberish` | The id of the motion |
| `_vote` | `BigNumberish` | The side being supported (0 = NAY, 1 = YAY) |
| `_amount` | `BigNumberish` | The amount of tokens being staked |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.stakeMotionWithProofs

___

### submitVote

▸ **submitVote**(`_motionId`, `_voteSecret`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

Submit a vote secret for a motion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_motionId` | `PromiseOrValue`<`BigNumberish`\> | The id of the motion |
| `_voteSecret` | `PromiseOrValue`<`BytesLike`\> | The hashed vote secret |
| `_key` | `PromiseOrValue`<`BytesLike`\> | Reputation tree key for the staker/domain |
| `_value` | `PromiseOrValue`<`BytesLike`\> | Reputation tree value for the staker/domain |
| `_branchMask` | `PromiseOrValue`<`BigNumberish`\> | The branchmask of the proof |
| `_siblings` | `PromiseOrValue`<`BytesLike`\>[] | The siblings of the proof |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.submitVote

___

### uninstall

▸ **uninstall**(`overrides?`): `Promise`<`ContractTransaction`\>

Called when uninstalling the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.uninstall

___

### version

▸ **version**(`overrides?`): `Promise`<`BigNumber`\>

Return the version number

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.version
