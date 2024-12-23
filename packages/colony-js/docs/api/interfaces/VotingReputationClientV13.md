# Interface: VotingReputationClientV13

## Hierarchy

- `AugmentedVotingReputation`<`IVotingReputation`\>

- `AugmentsV2`<`IVotingReputation`\>

- `AugmentsV3`<`IVotingReputation`\>

  ↳ **`VotingReputationClientV13`**

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
| `claimMisalignedReward` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimMisalignedReward(uint256,uint256,uint256,address,uint256)` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimReward` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimReward(uint256,uint256,uint256,address,uint256)` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `createMotion` | (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `createMotion(uint256,uint256,address,bytes,bytes,bytes,uint256,bytes32[])` | (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `escalateMotion` | (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `escalateMotion(uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])` | (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeMetaTransaction` | (`userAddress`: `string`, `payload`: `BytesLike`, `sigR`: `BytesLike`, `sigS`: `BytesLike`, `sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`userAddress`: `string`, `payload`: `BytesLike`, `sigR`: `BytesLike`, `sigS`: `BytesLike`, `sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `failingExecutionAllowed` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `failingExecutionAllowed(uint256)` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `finalizeMotion` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finalizeMotion(uint256)` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finalizeMotionWithoutFailure` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finalizeMotionWithoutFailure(uint256)` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finishUpgrade` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finishUpgrade()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getActionSummary` | (`_action`: `BytesLike`, `_altTarget`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`ActionSummaryStructOutput`\> |
| `getActionSummary(bytes,address)` | (`_action`: `BytesLike`, `_altTarget`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`ActionSummaryStructOutput`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getEscalationPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEscalationPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getExpenditureMotionCount` | (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getExpenditureMotionCount(bytes32)` | (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getExpenditureMotionLock` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getExpenditureMotionLock(uint256)` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getExpenditurePastVote` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getExpenditurePastVote(uint256)` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getExpenditurePastVotes_DEPRECATED` | (`_slotSignature`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getExpenditurePastVotes_DEPRECATED(bytes32)` | (`_slotSignature`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMaxVoteFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMaxVoteFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce(address)` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMotion` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`MotionStructOutput`\> |
| `getMotion(uint256)` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`MotionStructOutput`\> |
| `getMotionCount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMotionCount()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMotionState` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `getMotionState(uint256)` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `getRevealPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRevealPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStake` | (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStake(uint256,address,uint256)` | (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStakePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStakePeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStakerReward` | (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `_penalty`: `BigNumber` ; `_reward`: `BigNumber`  }\> |
| `getStakerReward(uint256,address,uint256)` | (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `_penalty`: `BigNumber` ; `_reward`: `BigNumber`  }\> |
| `getSubmitPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSubmitPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalStakeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUserMinStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUserMinStakeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getVoterReward` | (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getVoterReward(uint256,uint256)` | (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getVoterRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getVoterRewardFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getVoterRewardRange` | (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `_voterAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `_rewardMax`: `BigNumber` ; `_rewardMin`: `BigNumber`  }\> |
| `getVoterRewardRange(uint256,uint256,address)` | (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `_voterAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `_rewardMax`: `BigNumber` ; `_rewardMin`: `BigNumber`  }\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `initialise` | (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialise(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)` | (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `install` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `multicall` | (`_data`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `multicall(bytes[])` | (`_data`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `revealVote` | (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `revealVote(uint256,bytes32,uint256,bytes,bytes,uint256,bytes32[])` | (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `stakeMotion` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `stakeMotion(uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `submitVote` | (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `submitVote(uint256,bytes32,bytes,bytes,uint256,bytes32[])` | (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Inherited from

AugmentedVotingReputation.callStatic

___

### clientType

• **clientType**: [`VotingReputationClient`](../enums/ClientType.md#votingreputationclient)

#### Inherited from

AugmentedVotingReputation.clientType

___

### clientVersion

• **clientVersion**: ``13``

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
| `MetaTransactionExecuted` | (`userAddress?`: ``null``, `relayerAddress?`: ``null``, `payload?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MetaTransactionExecuted(address,address,bytes)` | (`userAddress?`: ``null``, `relayerAddress?`: ``null``, `payload?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MotionCreated` | (`motionId?`: ``null`` \| `BigNumberish`, `creator?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`) => `MotionCreatedEventFilter` |
| `MotionCreated(uint256,address,uint256)` | (`motionId?`: ``null`` \| `BigNumberish`, `creator?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`) => `MotionCreatedEventFilter` |
| `MotionEscalated` | (`motionId?`: ``null`` \| `BigNumberish`, `escalator?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `newDomainId?`: ``null`` \| `BigNumberish`) => `MotionEscalatedEventFilter` |
| `MotionEscalated(uint256,address,uint256,uint256)` | (`motionId?`: ``null`` \| `BigNumberish`, `escalator?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `newDomainId?`: ``null`` \| `BigNumberish`) => `MotionEscalatedEventFilter` |
| `MotionEventSet` | (`motionId?`: ``null`` \| `BigNumberish`, `eventIndex?`: ``null``) => `MotionEventSetEventFilter` |
| `MotionEventSet(uint256,uint256)` | (`motionId?`: ``null`` \| `BigNumberish`, `eventIndex?`: ``null``) => `MotionEventSetEventFilter` |
| `MotionFinalized` | (`motionId?`: ``null`` \| `BigNumberish`, `action?`: ``null``, `executed?`: ``null``) => `MotionFinalizedEventFilter` |
| `MotionFinalized(uint256,bytes,bool)` | (`motionId?`: ``null`` \| `BigNumberish`, `action?`: ``null``, `executed?`: ``null``) => `MotionFinalizedEventFilter` |
| `MotionRewardClaimed` | (`motionId?`: ``null`` \| `BigNumberish`, `staker?`: ``null`` \| `string`, `vote?`: ``null`` \| `BigNumberish`, `amount?`: ``null``) => `MotionRewardClaimedEventFilter` |
| `MotionRewardClaimed(uint256,address,uint256,uint256)` | (`motionId?`: ``null`` \| `BigNumberish`, `staker?`: ``null`` \| `string`, `vote?`: ``null`` \| `BigNumberish`, `amount?`: ``null``) => `MotionRewardClaimedEventFilter` |
| `MotionStaked` | (`motionId?`: ``null`` \| `BigNumberish`, `staker?`: ``null`` \| `string`, `vote?`: ``null`` \| `BigNumberish`, `amount?`: ``null``) => `MotionStakedEventFilter` |
| `MotionStaked(uint256,address,uint256,uint256)` | (`motionId?`: ``null`` \| `BigNumberish`, `staker?`: ``null`` \| `string`, `vote?`: ``null`` \| `BigNumberish`, `amount?`: ``null``) => `MotionStakedEventFilter` |
| `MotionVoteRevealed` | (`motionId?`: ``null`` \| `BigNumberish`, `voter?`: ``null`` \| `string`, `vote?`: ``null`` \| `BigNumberish`) => `MotionVoteRevealedEventFilter` |
| `MotionVoteRevealed(uint256,address,uint256)` | (`motionId?`: ``null`` \| `BigNumberish`, `voter?`: ``null`` \| `string`, `vote?`: ``null`` \| `BigNumberish`) => `MotionVoteRevealedEventFilter` |
| `MotionVoteSubmitted` | (`motionId?`: ``null`` \| `BigNumberish`, `voter?`: ``null`` \| `string`) => `MotionVoteSubmittedEventFilter` |
| `MotionVoteSubmitted(uint256,address)` | (`motionId?`: ``null`` \| `BigNumberish`, `voter?`: ``null`` \| `string`) => `MotionVoteSubmittedEventFilter` |

#### Inherited from

AugmentedVotingReputation.filters

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `claimMisalignedReward` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `claimMisalignedReward(uint256,uint256,uint256,address,uint256)` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `claimReward` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `claimReward(uint256,uint256,uint256,address,uint256)` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `createMotion` | (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `createMotion(uint256,uint256,address,bytes,bytes,bytes,uint256,bytes32[])` | (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `escalateMotion` | (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `escalateMotion(uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])` | (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction` | (`userAddress`: `string`, `payload`: `BytesLike`, `sigR`: `BytesLike`, `sigS`: `BytesLike`, `sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`userAddress`: `string`, `payload`: `BytesLike`, `sigR`: `BytesLike`, `sigS`: `BytesLike`, `sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `failingExecutionAllowed` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_allowed`: `boolean`  }\> |
| `failingExecutionAllowed(uint256)` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_allowed`: `boolean`  }\> |
| `finalizeMotion` | (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `finalizeMotion(uint256)` | (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `finalizeMotionWithoutFailure` | (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `finalizeMotionWithoutFailure(uint256)` | (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `getActionSummary` | (`_action`: `BytesLike`, `_altTarget`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`ActionSummaryStructOutput`] & { `_summary`: `ActionSummaryStructOutput`  }\> |
| `getActionSummary(bytes,address)` | (`_action`: `BytesLike`, `_altTarget`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`ActionSummaryStructOutput`] & { `_summary`: `ActionSummaryStructOutput`  }\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `roles`: `string`  }\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `roles`: `string`  }\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `colony`: `string`  }\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `colony`: `string`  }\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `deprecated`: `boolean`  }\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `deprecated`: `boolean`  }\> |
| `getEscalationPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_period`: `BigNumber`  }\> |
| `getEscalationPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_period`: `BigNumber`  }\> |
| `getExpenditureMotionCount` | (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_count`: `BigNumber`  }\> |
| `getExpenditureMotionCount(bytes32)` | (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_count`: `BigNumber`  }\> |
| `getExpenditureMotionLock` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_motionId`: `BigNumber`  }\> |
| `getExpenditureMotionLock(uint256)` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_motionId`: `BigNumber`  }\> |
| `getExpenditurePastVote` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_vote`: `BigNumber`  }\> |
| `getExpenditurePastVote(uint256)` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_vote`: `BigNumber`  }\> |
| `getExpenditurePastVotes_DEPRECATED` | (`_slotSignature`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_vote`: `BigNumber`  }\> |
| `getExpenditurePastVotes_DEPRECATED(bytes32)` | (`_slotSignature`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_vote`: `BigNumber`  }\> |
| `getMaxVoteFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_fraction`: `BigNumber`  }\> |
| `getMaxVoteFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_fraction`: `BigNumber`  }\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getMetatransactionNonce(address)` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getMotion` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`MotionStructOutput`] & { `_motion`: `MotionStructOutput`  }\> |
| `getMotion(uint256)` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`MotionStructOutput`] & { `_motion`: `MotionStructOutput`  }\> |
| `getMotionCount` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_count`: `BigNumber`  }\> |
| `getMotionCount()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_count`: `BigNumber`  }\> |
| `getMotionState` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`] & { `_motionState`: `number`  }\> |
| `getMotionState(uint256)` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`] & { `_motionState`: `number`  }\> |
| `getRevealPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_period`: `BigNumber`  }\> |
| `getRevealPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_period`: `BigNumber`  }\> |
| `getStake` | (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_stake`: `BigNumber`  }\> |
| `getStake(uint256,address,uint256)` | (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_stake`: `BigNumber`  }\> |
| `getStakePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_period`: `BigNumber`  }\> |
| `getStakePeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_period`: `BigNumber`  }\> |
| `getStakerReward` | (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `_penalty`: `BigNumber` ; `_reward`: `BigNumber`  }\> |
| `getStakerReward(uint256,address,uint256)` | (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `_penalty`: `BigNumber` ; `_reward`: `BigNumber`  }\> |
| `getSubmitPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_period`: `BigNumber`  }\> |
| `getSubmitPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_period`: `BigNumber`  }\> |
| `getTotalStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_fraction`: `BigNumber`  }\> |
| `getTotalStakeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_fraction`: `BigNumber`  }\> |
| `getUserMinStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_fraction`: `BigNumber`  }\> |
| `getUserMinStakeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_fraction`: `BigNumber`  }\> |
| `getVoterReward` | (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_reward`: `BigNumber`  }\> |
| `getVoterReward(uint256,uint256)` | (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_reward`: `BigNumber`  }\> |
| `getVoterRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_fraction`: `BigNumber`  }\> |
| `getVoterRewardFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_fraction`: `BigNumber`  }\> |
| `getVoterRewardRange` | (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `_voterAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `_rewardMax`: `BigNumber` ; `_rewardMin`: `BigNumber`  }\> |
| `getVoterRewardRange(uint256,uint256,address)` | (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `_voterAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `_rewardMax`: `BigNumber` ; `_rewardMin`: `BigNumber`  }\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `identifier`: `string`  }\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `identifier`: `string`  }\> |
| `initialise` | (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `initialise(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)` | (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `multicall` | (`_data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `multicall(bytes[])` | (`_data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `revealVote` | (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `revealVote(uint256,bytes32,uint256,bytes,bytes,uint256,bytes32[])` | (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `stakeMotion` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `stakeMotion(uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `submitVote` | (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `submitVote(uint256,bytes32,bytes,bytes,uint256,bytes32[])` | (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `uninstall()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `version`: `BigNumber`  }\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `version`: `BigNumber`  }\> |

#### Inherited from

AugmentedVotingReputation.functions

___

### interface

• **interface**: `IVotingReputationInterface`

#### Inherited from

AugmentedVotingReputation.interface

___

### off

• **off**: `OnEvent`<[`VotingReputationClientV13`](VotingReputationClientV13.md)\>

#### Inherited from

AugmentedVotingReputation.off

___

### on

• **on**: `OnEvent`<[`VotingReputationClientV13`](VotingReputationClientV13.md)\>

#### Inherited from

AugmentedVotingReputation.on

___

### once

• **once**: `OnEvent`<[`VotingReputationClientV13`](VotingReputationClientV13.md)\>

#### Inherited from

AugmentedVotingReputation.once

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `claimMisalignedReward` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `claimMisalignedReward(uint256,uint256,uint256,address,uint256)` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `claimReward` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `claimReward(uint256,uint256,uint256,address,uint256)` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `createMotion` | (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `createMotion(uint256,uint256,address,bytes,bytes,bytes,uint256,bytes32[])` | (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `escalateMotion` | (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `escalateMotion(uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])` | (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction` | (`userAddress`: `string`, `payload`: `BytesLike`, `sigR`: `BytesLike`, `sigS`: `BytesLike`, `sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`userAddress`: `string`, `payload`: `BytesLike`, `sigR`: `BytesLike`, `sigS`: `BytesLike`, `sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `failingExecutionAllowed` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `failingExecutionAllowed(uint256)` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `finalizeMotion` | (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `finalizeMotion(uint256)` | (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `finalizeMotionWithoutFailure` | (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `finalizeMotionWithoutFailure(uint256)` | (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `getActionSummary` | (`_action`: `BytesLike`, `_altTarget`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getActionSummary(bytes,address)` | (`_action`: `BytesLike`, `_altTarget`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getEscalationPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getEscalationPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExpenditureMotionCount` | (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExpenditureMotionCount(bytes32)` | (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExpenditureMotionLock` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExpenditureMotionLock(uint256)` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExpenditurePastVote` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExpenditurePastVote(uint256)` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExpenditurePastVotes_DEPRECATED` | (`_slotSignature`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExpenditurePastVotes_DEPRECATED(bytes32)` | (`_slotSignature`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMaxVoteFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMaxVoteFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce(address)` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMotion` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMotion(uint256)` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMotionCount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMotionCount()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMotionState` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMotionState(uint256)` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getRevealPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getRevealPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStake` | (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStake(uint256,address,uint256)` | (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStakePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStakePeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStakerReward` | (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStakerReward(uint256,address,uint256)` | (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSubmitPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSubmitPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTotalStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTotalStakeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getUserMinStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getUserMinStakeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getVoterReward` | (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getVoterReward(uint256,uint256)` | (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getVoterRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getVoterRewardFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getVoterRewardRange` | (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `_voterAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getVoterRewardRange(uint256,uint256,address)` | (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `_voterAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialise` | (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `initialise(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)` | (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `multicall` | (`_data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `multicall(bytes[])` | (`_data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `revealVote` | (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `revealVote(uint256,bytes32,uint256,bytes,bytes,uint256,bytes32[])` | (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `stakeMotion` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `stakeMotion(uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `submitVote` | (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `submitVote(uint256,bytes32,bytes,bytes,uint256,bytes32[])` | (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

AugmentedVotingReputation.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

AugmentedVotingReputation.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`VotingReputationClientV13`](VotingReputationClientV13.md)\>

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

• **votingReputationEvents**: `IVotingReputationEvents`

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

▸ **attach**(`addressOrName`): [`VotingReputationClientV13`](VotingReputationClientV13.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`VotingReputationClientV13`](VotingReputationClientV13.md)

#### Inherited from

AugmentedVotingReputation.attach

___

### claimMisalignedReward

▸ **claimMisalignedReward**(`_motionId`, `_permissionDomainId`, `_childSkillIndex`, `_staker`, `_vote`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_staker` | `string` |
| `_vote` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.claimMisalignedReward

___

### claimMisalignedReward(uint256,uint256,uint256,address,uint256)

▸ **claimMisalignedReward(uint256,uint256,uint256,address,uint256)**(`_motionId`, `_permissionDomainId`, `_childSkillIndex`, `_staker`, `_vote`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_staker` | `string` |
| `_vote` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.claimMisalignedReward(uint256,uint256,uint256,address,uint256)

___

### claimMisalignedRewardWithProofs

▸ **claimMisalignedRewardWithProofs**(`_motionId`, `_staker`, `_vote`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [claimMisalignedReward](VotingReputationClientV13.md#claimmisalignedreward), but let colonyJS figure out the permission proofs for you.
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

AugmentsV3.claimMisalignedRewardWithProofs

___

### claimReward

▸ **claimReward**(`_motionId`, `_permissionDomainId`, `_childSkillIndex`, `_staker`, `_vote`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_staker` | `string` |
| `_vote` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.claimReward

___

### claimReward(uint256,uint256,uint256,address,uint256)

▸ **claimReward(uint256,uint256,uint256,address,uint256)**(`_motionId`, `_permissionDomainId`, `_childSkillIndex`, `_staker`, `_vote`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_staker` | `string` |
| `_vote` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.claimReward(uint256,uint256,uint256,address,uint256)

___

### claimRewardWithProofs

▸ **claimRewardWithProofs**(`_motionId`, `_staker`, `_vote`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [claimReward](VotingReputationClientV13.md#claimreward), but let colonyJS figure out the permission proofs for you.
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

▸ **connect**(`signerOrProvider`): [`VotingReputationClientV13`](VotingReputationClientV13.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`VotingReputationClientV13`](VotingReputationClientV13.md)

#### Inherited from

AugmentedVotingReputation.connect

___

### createMotion

▸ **createMotion**(`_domainId`, `_childSkillIndex`, `_altTarget`, `_action`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_domainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_altTarget` | `string` |
| `_action` | `BytesLike` |
| `_key` | `BytesLike` |
| `_value` | `BytesLike` |
| `_branchMask` | `BigNumberish` |
| `_siblings` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.createMotion

___

### createMotion(uint256,uint256,address,bytes,bytes,bytes,uint256,bytes32[])

▸ **createMotion(uint256,uint256,address,bytes,bytes,bytes,uint256,bytes32[])**(`_domainId`, `_childSkillIndex`, `_altTarget`, `_action`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_domainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_altTarget` | `string` |
| `_action` | `BytesLike` |
| `_key` | `BytesLike` |
| `_value` | `BytesLike` |
| `_branchMask` | `BigNumberish` |
| `_siblings` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.createMotion(uint256,uint256,address,bytes,bytes,bytes,uint256,bytes32[])

___

### createMotionWithProofs

▸ **createMotionWithProofs**(`_domainId`, `_altTarget`, `_action`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [createMotion](VotingReputationClientV13.md#createmotion), but let colonyJS figure out the permission proofs for you.
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

### deployed

▸ **deployed**(): `Promise`<[`VotingReputationClientV13`](VotingReputationClientV13.md)\>

#### Returns

`Promise`<[`VotingReputationClientV13`](VotingReputationClientV13.md)\>

#### Inherited from

AugmentedVotingReputation.deployed

___

### deprecate

▸ **deprecate**(`_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_deprecated` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.deprecate

___

### deprecate(bool)

▸ **deprecate(bool)**(`_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_deprecated` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.deprecate(bool)

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_newDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_key` | `BytesLike` |
| `_value` | `BytesLike` |
| `_branchMask` | `BigNumberish` |
| `_siblings` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.escalateMotion

___

### escalateMotion(uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])

▸ **escalateMotion(uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])**(`_motionId`, `_newDomainId`, `_childSkillIndex`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_newDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_key` | `BytesLike` |
| `_value` | `BytesLike` |
| `_branchMask` | `BigNumberish` |
| `_siblings` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.escalateMotion(uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])

___

### escalateMotionWithProofs

▸ **escalateMotionWithProofs**(`_motionId`, `_newDomainId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [escalateMotion](VotingReputationClientV13.md#escalatemotion), but let colonyJS figure out the permission proofs for you.
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

### executeMetaTransaction

▸ **executeMetaTransaction**(`userAddress`, `payload`, `sigR`, `sigS`, `sigV`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userAddress` | `string` |
| `payload` | `BytesLike` |
| `sigR` | `BytesLike` |
| `sigS` | `BytesLike` |
| `sigV` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.executeMetaTransaction

___

### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)

▸ **executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)**(`userAddress`, `payload`, `sigR`, `sigS`, `sigV`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userAddress` | `string` |
| `payload` | `BytesLike` |
| `sigR` | `BytesLike` |
| `sigS` | `BytesLike` |
| `sigV` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)

___

### failingExecutionAllowed

▸ **failingExecutionAllowed**(`_motionId`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedVotingReputation.failingExecutionAllowed

___

### failingExecutionAllowed(uint256)

▸ **failingExecutionAllowed(uint256)**(`_motionId`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedVotingReputation.failingExecutionAllowed(uint256)

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
| `_motionId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.finalizeMotion

___

### finalizeMotion(uint256)

▸ **finalizeMotion(uint256)**(`_motionId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.finalizeMotion(uint256)

___

### finalizeMotionWithoutFailure

▸ **finalizeMotionWithoutFailure**(`_motionId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.finalizeMotionWithoutFailure

___

### finalizeMotionWithoutFailure(uint256)

▸ **finalizeMotionWithoutFailure(uint256)**(`_motionId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.finalizeMotionWithoutFailure(uint256)

___

### finishUpgrade

▸ **finishUpgrade**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.finishUpgrade

___

### finishUpgrade()

▸ **finishUpgrade()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.finishUpgrade()

___

### getActionSummary

▸ **getActionSummary**(`_action`, `_altTarget`, `overrides?`): `Promise`<`ActionSummaryStructOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_action` | `BytesLike` |
| `_altTarget` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`ActionSummaryStructOutput`\>

#### Inherited from

AugmentedVotingReputation.getActionSummary

___

### getActionSummary(bytes,address)

▸ **getActionSummary(bytes,address)**(`_action`, `_altTarget`, `overrides?`): `Promise`<`ActionSummaryStructOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_action` | `BytesLike` |
| `_altTarget` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`ActionSummaryStructOutput`\>

#### Inherited from

AugmentedVotingReputation.getActionSummary(bytes,address)

___

### getCapabilityRoles

▸ **getCapabilityRoles**(`_sig`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_sig` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedVotingReputation.getCapabilityRoles

___

### getCapabilityRoles(bytes4)

▸ **getCapabilityRoles(bytes4)**(`_sig`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_sig` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedVotingReputation.getCapabilityRoles(bytes4)

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

### getColony()

▸ **getColony()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedVotingReputation.getColony()

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

### getDeprecated()

▸ **getDeprecated()**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedVotingReputation.getDeprecated()

___

### getEscalationPeriod

▸ **getEscalationPeriod**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getEscalationPeriod

___

### getEscalationPeriod()

▸ **getEscalationPeriod()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getEscalationPeriod()

___

### getExpenditureMotionCount

▸ **getExpenditureMotionCount**(`_structHash`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_structHash` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getExpenditureMotionCount

___

### getExpenditureMotionCount(bytes32)

▸ **getExpenditureMotionCount(bytes32)**(`_structHash`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_structHash` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getExpenditureMotionCount(bytes32)

___

### getExpenditureMotionLock

▸ **getExpenditureMotionLock**(`_expenditureId`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_expenditureId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getExpenditureMotionLock

___

### getExpenditureMotionLock(uint256)

▸ **getExpenditureMotionLock(uint256)**(`_expenditureId`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_expenditureId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getExpenditureMotionLock(uint256)

___

### getExpenditurePastVote

▸ **getExpenditurePastVote**(`_expenditureId`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_expenditureId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getExpenditurePastVote

___

### getExpenditurePastVote(uint256)

▸ **getExpenditurePastVote(uint256)**(`_expenditureId`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_expenditureId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getExpenditurePastVote(uint256)

___

### getExpenditurePastVotes\_DEPRECATED

▸ **getExpenditurePastVotes_DEPRECATED**(`_slotSignature`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_slotSignature` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getExpenditurePastVotes\_DEPRECATED

___

### getExpenditurePastVotes\_DEPRECATED(bytes32)

▸ **getExpenditurePastVotes_DEPRECATED(bytes32)**(`_slotSignature`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_slotSignature` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getExpenditurePastVotes\_DEPRECATED(bytes32)

___

### getMaxVoteFraction

▸ **getMaxVoteFraction**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getMaxVoteFraction

___

### getMaxVoteFraction()

▸ **getMaxVoteFraction()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getMaxVoteFraction()

___

### getMetatransactionNonce

▸ **getMetatransactionNonce**(`userAddress`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userAddress` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getMetatransactionNonce

___

### getMetatransactionNonce(address)

▸ **getMetatransactionNonce(address)**(`userAddress`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userAddress` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getMetatransactionNonce(address)

___

### getMotion

▸ **getMotion**(`_motionId`, `overrides?`): `Promise`<`MotionStructOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`MotionStructOutput`\>

#### Inherited from

AugmentedVotingReputation.getMotion

___

### getMotion(uint256)

▸ **getMotion(uint256)**(`_motionId`, `overrides?`): `Promise`<`MotionStructOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`MotionStructOutput`\>

#### Inherited from

AugmentedVotingReputation.getMotion(uint256)

___

### getMotionCount

▸ **getMotionCount**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getMotionCount

___

### getMotionCount()

▸ **getMotionCount()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getMotionCount()

___

### getMotionState

▸ **getMotionState**(`_motionId`, `overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Inherited from

AugmentedVotingReputation.getMotionState

___

### getMotionState(uint256)

▸ **getMotionState(uint256)**(`_motionId`, `overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Inherited from

AugmentedVotingReputation.getMotionState(uint256)

___

### getRevealPeriod

▸ **getRevealPeriod**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getRevealPeriod

___

### getRevealPeriod()

▸ **getRevealPeriod()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getRevealPeriod()

___

### getStake

▸ **getStake**(`_motionId`, `_staker`, `_vote`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_staker` | `string` |
| `_vote` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getStake

___

### getStake(uint256,address,uint256)

▸ **getStake(uint256,address,uint256)**(`_motionId`, `_staker`, `_vote`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_staker` | `string` |
| `_vote` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getStake(uint256,address,uint256)

___

### getStakePeriod

▸ **getStakePeriod**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getStakePeriod

___

### getStakePeriod()

▸ **getStakePeriod()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getStakePeriod()

___

### getStakerReward

▸ **getStakerReward**(`_motionId`, `_staker`, `_vote`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `_penalty`: `BigNumber` ; `_reward`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_staker` | `string` |
| `_vote` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `_penalty`: `BigNumber` ; `_reward`: `BigNumber`  }\>

#### Inherited from

AugmentedVotingReputation.getStakerReward

___

### getStakerReward(uint256,address,uint256)

▸ **getStakerReward(uint256,address,uint256)**(`_motionId`, `_staker`, `_vote`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `_penalty`: `BigNumber` ; `_reward`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_staker` | `string` |
| `_vote` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `_penalty`: `BigNumber` ; `_reward`: `BigNumber`  }\>

#### Inherited from

AugmentedVotingReputation.getStakerReward(uint256,address,uint256)

___

### getSubmitPeriod

▸ **getSubmitPeriod**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getSubmitPeriod

___

### getSubmitPeriod()

▸ **getSubmitPeriod()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getSubmitPeriod()

___

### getTotalStakeFraction

▸ **getTotalStakeFraction**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getTotalStakeFraction

___

### getTotalStakeFraction()

▸ **getTotalStakeFraction()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getTotalStakeFraction()

___

### getUserMinStakeFraction

▸ **getUserMinStakeFraction**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getUserMinStakeFraction

___

### getUserMinStakeFraction()

▸ **getUserMinStakeFraction()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getUserMinStakeFraction()

___

### getVoterReward

▸ **getVoterReward**(`_motionId`, `_voterRep`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_voterRep` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getVoterReward

___

### getVoterReward(uint256,uint256)

▸ **getVoterReward(uint256,uint256)**(`_motionId`, `_voterRep`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_voterRep` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getVoterReward(uint256,uint256)

___

### getVoterRewardFraction

▸ **getVoterRewardFraction**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getVoterRewardFraction

___

### getVoterRewardFraction()

▸ **getVoterRewardFraction()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.getVoterRewardFraction()

___

### getVoterRewardRange

▸ **getVoterRewardRange**(`_motionId`, `_voterRep`, `_voterAddress`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `_rewardMax`: `BigNumber` ; `_rewardMin`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_voterRep` | `BigNumberish` |
| `_voterAddress` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `_rewardMax`: `BigNumber` ; `_rewardMin`: `BigNumber`  }\>

#### Inherited from

AugmentedVotingReputation.getVoterRewardRange

___

### getVoterRewardRange(uint256,uint256,address)

▸ **getVoterRewardRange(uint256,uint256,address)**(`_motionId`, `_voterRep`, `_voterAddress`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `_rewardMax`: `BigNumber` ; `_rewardMin`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_voterRep` | `BigNumberish` |
| `_voterAddress` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `_rewardMax`: `BigNumber` ; `_rewardMin`: `BigNumber`  }\>

#### Inherited from

AugmentedVotingReputation.getVoterRewardRange(uint256,uint256,address)

___

### identifier

▸ **identifier**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedVotingReputation.identifier

___

### identifier()

▸ **identifier()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedVotingReputation.identifier()

___

### initialise

▸ **initialise**(`_totalStakeFraction`, `_voterRewardFraction`, `_userMinStakeFraction`, `_maxVoteFraction`, `_stakePeriod`, `_submitPeriod`, `_revealPeriod`, `_escalationPeriod`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_totalStakeFraction` | `BigNumberish` |
| `_voterRewardFraction` | `BigNumberish` |
| `_userMinStakeFraction` | `BigNumberish` |
| `_maxVoteFraction` | `BigNumberish` |
| `_stakePeriod` | `BigNumberish` |
| `_submitPeriod` | `BigNumberish` |
| `_revealPeriod` | `BigNumberish` |
| `_escalationPeriod` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.initialise

___

### initialise(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)

▸ **initialise(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)**(`_totalStakeFraction`, `_voterRewardFraction`, `_userMinStakeFraction`, `_maxVoteFraction`, `_stakePeriod`, `_submitPeriod`, `_revealPeriod`, `_escalationPeriod`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_totalStakeFraction` | `BigNumberish` |
| `_voterRewardFraction` | `BigNumberish` |
| `_userMinStakeFraction` | `BigNumberish` |
| `_maxVoteFraction` | `BigNumberish` |
| `_stakePeriod` | `BigNumberish` |
| `_submitPeriod` | `BigNumberish` |
| `_revealPeriod` | `BigNumberish` |
| `_escalationPeriod` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.initialise(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)

___

### install

▸ **install**(`_colony`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_colony` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.install

___

### install(address)

▸ **install(address)**(`_colony`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_colony` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.install(address)

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
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

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

### multicall

▸ **multicall**(`_data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.multicall

___

### multicall(bytes[])

▸ **multicall(bytes[])**(`_data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.multicall(bytes[])

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

#### Inherited from

AugmentedVotingReputation.queryFilter

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`VotingReputationClientV13`](VotingReputationClientV13.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`VotingReputationClientV13`](VotingReputationClientV13.md)

#### Inherited from

AugmentedVotingReputation.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`VotingReputationClientV13`](VotingReputationClientV13.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`VotingReputationClientV13`](VotingReputationClientV13.md)

#### Inherited from

AugmentedVotingReputation.removeAllListeners

___

### revealVote

▸ **revealVote**(`_motionId`, `_salt`, `_vote`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_salt` | `BytesLike` |
| `_vote` | `BigNumberish` |
| `_key` | `BytesLike` |
| `_value` | `BytesLike` |
| `_branchMask` | `BigNumberish` |
| `_siblings` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.revealVote

___

### revealVote(uint256,bytes32,uint256,bytes,bytes,uint256,bytes32[])

▸ **revealVote(uint256,bytes32,uint256,bytes,bytes,uint256,bytes32[])**(`_motionId`, `_salt`, `_vote`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_salt` | `BytesLike` |
| `_vote` | `BigNumberish` |
| `_key` | `BytesLike` |
| `_value` | `BytesLike` |
| `_branchMask` | `BigNumberish` |
| `_siblings` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.revealVote(uint256,bytes32,uint256,bytes,bytes,uint256,bytes32[])

___

### stakeMotion

▸ **stakeMotion**(`_motionId`, `_permissionDomainId`, `_childSkillIndex`, `_vote`, `_amount`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_vote` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `_key` | `BytesLike` |
| `_value` | `BytesLike` |
| `_branchMask` | `BigNumberish` |
| `_siblings` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.stakeMotion

___

### stakeMotion(uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])

▸ **stakeMotion(uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])**(`_motionId`, `_permissionDomainId`, `_childSkillIndex`, `_vote`, `_amount`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_vote` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `_key` | `BytesLike` |
| `_value` | `BytesLike` |
| `_branchMask` | `BigNumberish` |
| `_siblings` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.stakeMotion(uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])

___

### stakeMotionWithProofs

▸ **stakeMotionWithProofs**(`_motionId`, `_vote`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [stakeMotion](VotingReputationClientV13.md#stakemotion), but let colonyJS figure out the permission proofs for you.
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

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_voteSecret` | `BytesLike` |
| `_key` | `BytesLike` |
| `_value` | `BytesLike` |
| `_branchMask` | `BigNumberish` |
| `_siblings` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.submitVote

___

### submitVote(uint256,bytes32,bytes,bytes,uint256,bytes32[])

▸ **submitVote(uint256,bytes32,bytes,bytes,uint256,bytes32[])**(`_motionId`, `_voteSecret`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionId` | `BigNumberish` |
| `_voteSecret` | `BytesLike` |
| `_key` | `BytesLike` |
| `_value` | `BytesLike` |
| `_branchMask` | `BigNumberish` |
| `_siblings` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.submitVote(uint256,bytes32,bytes,bytes,uint256,bytes32[])

___

### uninstall

▸ **uninstall**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.uninstall

___

### uninstall()

▸ **uninstall()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.uninstall()

___

### version

▸ **version**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.version

___

### version()

▸ **version()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedVotingReputation.version()
