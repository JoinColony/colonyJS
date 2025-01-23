[**API**](../README.md)

***

# Interface: VotingReputationClientV13

## Extends

- `AugmentedVotingReputation`\<`IVotingReputation`\>.`AugmentsV2`\<`IVotingReputation`\>.`AugmentsV3`\<`IVotingReputation`\>

## Properties

### \_deployedPromise

> **\_deployedPromise**: `Promise`\<`Contract`\>

#### Inherited from

`AugmentedVotingReputation._deployedPromise`

***

### \_runningEvents

> **\_runningEvents**: `object`

#### Index Signature

\[`eventTag`: `string`\]: `RunningEvent`

#### Inherited from

`AugmentedVotingReputation._runningEvents`

***

### \_wrappedEmits

> **\_wrappedEmits**: `object`

#### Index Signature

\[`eventTag`: `string`\]: (...`args`) => `void`

#### Inherited from

`AugmentedVotingReputation._wrappedEmits`

***

### address

> `readonly` **address**: `string`

#### Inherited from

`AugmentedVotingReputation.address`

***

### callStatic

> **callStatic**: `object`

#### claimMisalignedReward()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### claimMisalignedReward(uint256,uint256,uint256,address,uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### claimReward()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### claimReward(uint256,uint256,uint256,address,uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### createMotion()

##### Parameters

###### \_domainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_altTarget

`string`

###### \_action

`BytesLike`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### createMotion(uint256,uint256,address,bytes,bytes,bytes,uint256,bytes32\[\])()

##### Parameters

###### \_domainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_altTarget

`string`

###### \_action

`BytesLike`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### deprecate()

##### Parameters

###### \_deprecated

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### deprecate(bool)()

##### Parameters

###### \_deprecated

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### escalateMotion()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_newDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### escalateMotion(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_newDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### executeMetaTransaction()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### failingExecutionAllowed()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### failingExecutionAllowed(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### finalizeMotion()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### finalizeMotion(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### finalizeMotionWithoutFailure()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### finalizeMotionWithoutFailure(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### finishUpgrade()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### finishUpgrade()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### getActionSummary()

##### Parameters

###### \_action

`BytesLike`

###### \_altTarget

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`ActionSummaryStructOutput`\>

#### getActionSummary(bytes,address)()

##### Parameters

###### \_action

`BytesLike`

###### \_altTarget

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`ActionSummaryStructOutput`\>

#### getCapabilityRoles()

##### Parameters

###### \_sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getCapabilityRoles(bytes4)()

##### Parameters

###### \_sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getColony()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getColony()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getDeprecated()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### getDeprecated()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### getEscalationPeriod()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getEscalationPeriod()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getExpenditureMotionCount()

##### Parameters

###### \_structHash

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getExpenditureMotionCount(bytes32)()

##### Parameters

###### \_structHash

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getExpenditureMotionLock()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getExpenditureMotionLock(uint256)()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getExpenditurePastVote()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getExpenditurePastVote(uint256)()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getExpenditurePastVotes\_DEPRECATED()

##### Parameters

###### \_slotSignature

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getExpenditurePastVotes\_DEPRECATED(bytes32)()

##### Parameters

###### \_slotSignature

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMaxVoteFraction()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMaxVoteFraction()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMetatransactionNonce()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMetatransactionNonce(address)()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMotion()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`MotionStructOutput`\>

#### getMotion(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`MotionStructOutput`\>

#### getMotionCount()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMotionCount()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMotionState()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`number`\>

#### getMotionState(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`number`\>

#### getRevealPeriod()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getRevealPeriod()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getStake()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getStake(uint256,address,uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getStakePeriod()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getStakePeriod()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getStakerReward()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### getStakerReward(uint256,address,uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### getSubmitPeriod()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getSubmitPeriod()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getTotalStakeFraction()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getTotalStakeFraction()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getUserMinStakeFraction()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getUserMinStakeFraction()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getVoterReward()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_voterRep

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getVoterReward(uint256,uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_voterRep

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getVoterRewardFraction()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getVoterRewardFraction()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getVoterRewardRange()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_voterRep

`BigNumberish`

###### \_voterAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### getVoterRewardRange(uint256,uint256,address)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_voterRep

`BigNumberish`

###### \_voterAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### identifier()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### identifier()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### initialise()

##### Parameters

###### \_totalStakeFraction

`BigNumberish`

###### \_voterRewardFraction

`BigNumberish`

###### \_userMinStakeFraction

`BigNumberish`

###### \_maxVoteFraction

`BigNumberish`

###### \_stakePeriod

`BigNumberish`

###### \_submitPeriod

`BigNumberish`

###### \_revealPeriod

`BigNumberish`

###### \_escalationPeriod

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### initialise(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)()

##### Parameters

###### \_totalStakeFraction

`BigNumberish`

###### \_voterRewardFraction

`BigNumberish`

###### \_userMinStakeFraction

`BigNumberish`

###### \_maxVoteFraction

`BigNumberish`

###### \_stakePeriod

`BigNumberish`

###### \_submitPeriod

`BigNumberish`

###### \_revealPeriod

`BigNumberish`

###### \_escalationPeriod

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### install()

##### Parameters

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### install(address)()

##### Parameters

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### multicall()

##### Parameters

###### \_data

`BytesLike`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`[]\>

#### multicall(bytes\[\])()

##### Parameters

###### \_data

`BytesLike`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`[]\>

#### revealVote()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_salt

`BytesLike`

###### \_vote

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### revealVote(uint256,bytes32,uint256,bytes,bytes,uint256,bytes32\[\])()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_salt

`BytesLike`

###### \_vote

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### stakeMotion()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_vote

`BigNumberish`

###### \_amount

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### stakeMotion(uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_vote

`BigNumberish`

###### \_amount

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### submitVote()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_voteSecret

`BytesLike`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### submitVote(uint256,bytes32,bytes,bytes,uint256,bytes32\[\])()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_voteSecret

`BytesLike`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### uninstall()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### uninstall()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### version()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### version()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.callStatic`

***

### clientType

> **clientType**: [`VotingReputationClient`](../enumerations/ClientType.md#votingreputationclient)

#### Inherited from

`AugmentedVotingReputation.clientType`

***

### clientVersion

> **clientVersion**: `13`

#### Overrides

`AugmentedVotingReputation.clientVersion`

***

### colonyClient

> **colonyClient**: `AugmentedIColony`

An instance of the corresponding ColonyClient

#### Inherited from

`AugmentedVotingReputation.colonyClient`

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

`AugmentedVotingReputation.deployTransaction`

***

### estimateGas

> **estimateGas**: `VotingReputationEstimate`

#### Overrides

`AugmentedVotingReputation.estimateGas`

***

### filters

> **filters**: `object`

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

#### MotionCreated()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### creator?

`null`

###### domainId?

`null` | `BigNumberish`

##### Returns

`MotionCreatedEventFilter`

#### MotionCreated(uint256,address,uint256)()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### creator?

`null`

###### domainId?

`null` | `BigNumberish`

##### Returns

`MotionCreatedEventFilter`

#### MotionEscalated()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### escalator?

`null`

###### domainId?

`null` | `BigNumberish`

###### newDomainId?

`null` | `BigNumberish`

##### Returns

`MotionEscalatedEventFilter`

#### MotionEscalated(uint256,address,uint256,uint256)()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### escalator?

`null`

###### domainId?

`null` | `BigNumberish`

###### newDomainId?

`null` | `BigNumberish`

##### Returns

`MotionEscalatedEventFilter`

#### MotionEventSet()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### eventIndex?

`null`

##### Returns

`MotionEventSetEventFilter`

#### MotionEventSet(uint256,uint256)()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### eventIndex?

`null`

##### Returns

`MotionEventSetEventFilter`

#### MotionFinalized()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### action?

`null`

###### executed?

`null`

##### Returns

`MotionFinalizedEventFilter`

#### MotionFinalized(uint256,bytes,bool)()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### action?

`null`

###### executed?

`null`

##### Returns

`MotionFinalizedEventFilter`

#### MotionRewardClaimed()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### staker?

`null` | `string`

###### vote?

`null` | `BigNumberish`

###### amount?

`null`

##### Returns

`MotionRewardClaimedEventFilter`

#### MotionRewardClaimed(uint256,address,uint256,uint256)()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### staker?

`null` | `string`

###### vote?

`null` | `BigNumberish`

###### amount?

`null`

##### Returns

`MotionRewardClaimedEventFilter`

#### MotionStaked()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### staker?

`null` | `string`

###### vote?

`null` | `BigNumberish`

###### amount?

`null`

##### Returns

`MotionStakedEventFilter`

#### MotionStaked(uint256,address,uint256,uint256)()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### staker?

`null` | `string`

###### vote?

`null` | `BigNumberish`

###### amount?

`null`

##### Returns

`MotionStakedEventFilter`

#### MotionVoteRevealed()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### voter?

`null` | `string`

###### vote?

`null` | `BigNumberish`

##### Returns

`MotionVoteRevealedEventFilter`

#### MotionVoteRevealed(uint256,address,uint256)()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### voter?

`null` | `string`

###### vote?

`null` | `BigNumberish`

##### Returns

`MotionVoteRevealedEventFilter`

#### MotionVoteSubmitted()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### voter?

`null` | `string`

##### Returns

`MotionVoteSubmittedEventFilter`

#### MotionVoteSubmitted(uint256,address)()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### voter?

`null` | `string`

##### Returns

`MotionVoteSubmittedEventFilter`

#### Inherited from

`AugmentedVotingReputation.filters`

***

### functions

> **functions**: `object`

#### claimMisalignedReward()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### claimMisalignedReward(uint256,uint256,uint256,address,uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### claimReward()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### claimReward(uint256,uint256,uint256,address,uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### createMotion()

##### Parameters

###### \_domainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_altTarget

`string`

###### \_action

`BytesLike`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### createMotion(uint256,uint256,address,bytes,bytes,bytes,uint256,bytes32\[\])()

##### Parameters

###### \_domainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_altTarget

`string`

###### \_action

`BytesLike`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### deprecate()

##### Parameters

###### \_deprecated

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### deprecate(bool)()

##### Parameters

###### \_deprecated

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### escalateMotion()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_newDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### escalateMotion(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_newDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### executeMetaTransaction()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### failingExecutionAllowed()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\] & `object`\>

#### failingExecutionAllowed(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\] & `object`\>

#### finalizeMotion()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### finalizeMotion(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### finalizeMotionWithoutFailure()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### finalizeMotionWithoutFailure(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### finishUpgrade()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### finishUpgrade()()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### getActionSummary()

##### Parameters

###### \_action

`BytesLike`

###### \_altTarget

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`ActionSummaryStructOutput`\] & `object`\>

#### getActionSummary(bytes,address)()

##### Parameters

###### \_action

`BytesLike`

###### \_altTarget

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`ActionSummaryStructOutput`\] & `object`\>

#### getCapabilityRoles()

##### Parameters

###### \_sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getCapabilityRoles(bytes4)()

##### Parameters

###### \_sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getColony()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getColony()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getDeprecated()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\] & `object`\>

#### getDeprecated()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\] & `object`\>

#### getEscalationPeriod()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getEscalationPeriod()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getExpenditureMotionCount()

##### Parameters

###### \_structHash

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getExpenditureMotionCount(bytes32)()

##### Parameters

###### \_structHash

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getExpenditureMotionLock()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getExpenditureMotionLock(uint256)()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getExpenditurePastVote()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getExpenditurePastVote(uint256)()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getExpenditurePastVotes\_DEPRECATED()

##### Parameters

###### \_slotSignature

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getExpenditurePastVotes\_DEPRECATED(bytes32)()

##### Parameters

###### \_slotSignature

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMaxVoteFraction()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMaxVoteFraction()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMetatransactionNonce()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMetatransactionNonce(address)()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMotion()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`MotionStructOutput`\] & `object`\>

#### getMotion(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`MotionStructOutput`\] & `object`\>

#### getMotionCount()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMotionCount()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMotionState()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`number`\] & `object`\>

#### getMotionState(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`number`\] & `object`\>

#### getRevealPeriod()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getRevealPeriod()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getStake()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getStake(uint256,address,uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getStakePeriod()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getStakePeriod()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getStakerReward()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### getStakerReward(uint256,address,uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### getSubmitPeriod()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getSubmitPeriod()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getTotalStakeFraction()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getTotalStakeFraction()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getUserMinStakeFraction()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getUserMinStakeFraction()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getVoterReward()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_voterRep

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getVoterReward(uint256,uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_voterRep

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getVoterRewardFraction()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getVoterRewardFraction()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getVoterRewardRange()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_voterRep

`BigNumberish`

###### \_voterAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### getVoterRewardRange(uint256,uint256,address)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_voterRep

`BigNumberish`

###### \_voterAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### identifier()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### identifier()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### initialise()

##### Parameters

###### \_totalStakeFraction

`BigNumberish`

###### \_voterRewardFraction

`BigNumberish`

###### \_userMinStakeFraction

`BigNumberish`

###### \_maxVoteFraction

`BigNumberish`

###### \_stakePeriod

`BigNumberish`

###### \_submitPeriod

`BigNumberish`

###### \_revealPeriod

`BigNumberish`

###### \_escalationPeriod

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### initialise(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)()

##### Parameters

###### \_totalStakeFraction

`BigNumberish`

###### \_voterRewardFraction

`BigNumberish`

###### \_userMinStakeFraction

`BigNumberish`

###### \_maxVoteFraction

`BigNumberish`

###### \_stakePeriod

`BigNumberish`

###### \_submitPeriod

`BigNumberish`

###### \_revealPeriod

`BigNumberish`

###### \_escalationPeriod

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### install()

##### Parameters

###### \_colony

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### install(address)()

##### Parameters

###### \_colony

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### multicall()

##### Parameters

###### \_data

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### multicall(bytes\[\])()

##### Parameters

###### \_data

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### revealVote()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_salt

`BytesLike`

###### \_vote

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### revealVote(uint256,bytes32,uint256,bytes,bytes,uint256,bytes32\[\])()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_salt

`BytesLike`

###### \_vote

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### stakeMotion()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_vote

`BigNumberish`

###### \_amount

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### stakeMotion(uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_vote

`BigNumberish`

###### \_amount

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### submitVote()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_voteSecret

`BytesLike`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### submitVote(uint256,bytes32,bytes,bytes,uint256,bytes32\[\])()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_voteSecret

`BytesLike`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### uninstall()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### uninstall()()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### version()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### version()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### Inherited from

`AugmentedVotingReputation.functions`

***

### interface

> **interface**: `IVotingReputationInterface`

#### Inherited from

`AugmentedVotingReputation.interface`

***

### off

> **off**: `OnEvent`\<[`VotingReputationClientV13`](VotingReputationClientV13.md)\>

#### Inherited from

`AugmentedVotingReputation.off`

***

### on

> **on**: `OnEvent`\<[`VotingReputationClientV13`](VotingReputationClientV13.md)\>

#### Inherited from

`AugmentedVotingReputation.on`

***

### once

> **once**: `OnEvent`\<[`VotingReputationClientV13`](VotingReputationClientV13.md)\>

#### Inherited from

`AugmentedVotingReputation.once`

***

### populateTransaction

> **populateTransaction**: `object`

#### claimMisalignedReward()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### claimMisalignedReward(uint256,uint256,uint256,address,uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### claimReward()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### claimReward(uint256,uint256,uint256,address,uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### createMotion()

##### Parameters

###### \_domainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_altTarget

`string`

###### \_action

`BytesLike`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### createMotion(uint256,uint256,address,bytes,bytes,bytes,uint256,bytes32\[\])()

##### Parameters

###### \_domainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_altTarget

`string`

###### \_action

`BytesLike`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### deprecate()

##### Parameters

###### \_deprecated

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### deprecate(bool)()

##### Parameters

###### \_deprecated

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### escalateMotion()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_newDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### escalateMotion(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_newDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### executeMetaTransaction()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### failingExecutionAllowed()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### failingExecutionAllowed(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### finalizeMotion()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### finalizeMotion(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### finalizeMotionWithoutFailure()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### finalizeMotionWithoutFailure(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### finishUpgrade()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### finishUpgrade()()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getActionSummary()

##### Parameters

###### \_action

`BytesLike`

###### \_altTarget

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getActionSummary(bytes,address)()

##### Parameters

###### \_action

`BytesLike`

###### \_altTarget

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getCapabilityRoles()

##### Parameters

###### \_sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getCapabilityRoles(bytes4)()

##### Parameters

###### \_sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getColony()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getColony()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getDeprecated()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getDeprecated()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getEscalationPeriod()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getEscalationPeriod()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExpenditureMotionCount()

##### Parameters

###### \_structHash

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExpenditureMotionCount(bytes32)()

##### Parameters

###### \_structHash

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExpenditureMotionLock()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExpenditureMotionLock(uint256)()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExpenditurePastVote()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExpenditurePastVote(uint256)()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExpenditurePastVotes\_DEPRECATED()

##### Parameters

###### \_slotSignature

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExpenditurePastVotes\_DEPRECATED(bytes32)()

##### Parameters

###### \_slotSignature

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMaxVoteFraction()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMaxVoteFraction()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMetatransactionNonce()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMetatransactionNonce(address)()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMotion()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMotion(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMotionCount()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMotionCount()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMotionState()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMotionState(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getRevealPeriod()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getRevealPeriod()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStake()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStake(uint256,address,uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStakePeriod()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStakePeriod()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStakerReward()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStakerReward(uint256,address,uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_staker

`string`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getSubmitPeriod()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getSubmitPeriod()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getTotalStakeFraction()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getTotalStakeFraction()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getUserMinStakeFraction()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getUserMinStakeFraction()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getVoterReward()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_voterRep

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getVoterReward(uint256,uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_voterRep

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getVoterRewardFraction()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getVoterRewardFraction()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getVoterRewardRange()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_voterRep

`BigNumberish`

###### \_voterAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getVoterRewardRange(uint256,uint256,address)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_voterRep

`BigNumberish`

###### \_voterAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### identifier()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### identifier()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### initialise()

##### Parameters

###### \_totalStakeFraction

`BigNumberish`

###### \_voterRewardFraction

`BigNumberish`

###### \_userMinStakeFraction

`BigNumberish`

###### \_maxVoteFraction

`BigNumberish`

###### \_stakePeriod

`BigNumberish`

###### \_submitPeriod

`BigNumberish`

###### \_revealPeriod

`BigNumberish`

###### \_escalationPeriod

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### initialise(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)()

##### Parameters

###### \_totalStakeFraction

`BigNumberish`

###### \_voterRewardFraction

`BigNumberish`

###### \_userMinStakeFraction

`BigNumberish`

###### \_maxVoteFraction

`BigNumberish`

###### \_stakePeriod

`BigNumberish`

###### \_submitPeriod

`BigNumberish`

###### \_revealPeriod

`BigNumberish`

###### \_escalationPeriod

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### install()

##### Parameters

###### \_colony

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### install(address)()

##### Parameters

###### \_colony

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### multicall()

##### Parameters

###### \_data

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### multicall(bytes\[\])()

##### Parameters

###### \_data

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### revealVote()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_salt

`BytesLike`

###### \_vote

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### revealVote(uint256,bytes32,uint256,bytes,bytes,uint256,bytes32\[\])()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_salt

`BytesLike`

###### \_vote

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### stakeMotion()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_vote

`BigNumberish`

###### \_amount

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### stakeMotion(uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_vote

`BigNumberish`

###### \_amount

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### submitVote()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_voteSecret

`BytesLike`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### submitVote(uint256,bytes32,bytes,bytes,uint256,bytes32\[\])()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_voteSecret

`BytesLike`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### uninstall()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### uninstall()()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### version()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### version()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### Inherited from

`AugmentedVotingReputation.populateTransaction`

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

`AugmentedVotingReputation.provider`

***

### removeListener

> **removeListener**: `OnEvent`\<[`VotingReputationClientV13`](VotingReputationClientV13.md)\>

#### Inherited from

`AugmentedVotingReputation.removeListener`

***

### resolvedAddress

> `readonly` **resolvedAddress**: `Promise`\<`string`\>

#### Inherited from

`AugmentedVotingReputation.resolvedAddress`

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

`AugmentedVotingReputation.signer`

***

### votingReputationEvents

> **votingReputationEvents**: `IVotingReputationEvents`

The votingReputationsEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

#### Inherited from

`AugmentedVotingReputation.votingReputationEvents`

## Methods

### \_checkRunningEvents()

> **\_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

##### runningEvent

`RunningEvent`

#### Returns

`void`

#### Inherited from

`AugmentedVotingReputation._checkRunningEvents`

***

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<`Contract`\>

#### Parameters

##### blockTag?

`BlockTag`

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`AugmentedVotingReputation._deployed`

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

`AugmentedVotingReputation._wrapEvent`

***

### attach()

> **attach**(`addressOrName`): `this`

#### Parameters

##### addressOrName

`string`

#### Returns

`this`

#### Inherited from

`AugmentedVotingReputation.attach`

***

### claimMisalignedReward()

> **claimMisalignedReward**(`_motionId`, `_permissionDomainId`, `_childSkillIndex`, `_staker`, `_vote`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_staker

`string`

##### \_vote

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.claimMisalignedReward`

***

### claimMisalignedReward(uint256,uint256,uint256,address,uint256)()

> **claimMisalignedReward(uint256,uint256,uint256,address,uint256)**(`_motionId`, `_permissionDomainId`, `_childSkillIndex`, `_staker`, `_vote`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_staker

`string`

##### \_vote

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.claimMisalignedReward(uint256,uint256,uint256,address,uint256)`

***

### claimMisalignedRewardWithProofs()

> **claimMisalignedRewardWithProofs**(`_motionId`, `_staker`, `_vote`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [claimMisalignedReward](VotingReputationClientV13.md#claimmisalignedreward-18), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_staker

`string`

The staker whose reward is being claimed

##### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentsV3.claimMisalignedRewardWithProofs`

***

### claimReward()

> **claimReward**(`_motionId`, `_permissionDomainId`, `_childSkillIndex`, `_staker`, `_vote`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_staker

`string`

##### \_vote

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.claimReward`

***

### claimReward(uint256,uint256,uint256,address,uint256)()

> **claimReward(uint256,uint256,uint256,address,uint256)**(`_motionId`, `_permissionDomainId`, `_childSkillIndex`, `_staker`, `_vote`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_staker

`string`

##### \_vote

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.claimReward(uint256,uint256,uint256,address,uint256)`

***

### claimRewardWithProofs()

> **claimRewardWithProofs**(`_motionId`, `_staker`, `_vote`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [claimReward](VotingReputationClientV13.md#claimreward-18), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_staker

`string`

The staker whose reward is being claimed

##### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.claimRewardWithProofs`

***

### connect()

> **connect**(`signerOrProvider`): `this`

#### Parameters

##### signerOrProvider

`string` | `Signer` | `Provider`

#### Returns

`this`

#### Inherited from

`AugmentedVotingReputation.connect`

***

### createMotion()

> **createMotion**(`_domainId`, `_childSkillIndex`, `_altTarget`, `_action`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_domainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_altTarget

`string`

##### \_action

`BytesLike`

##### \_key

`BytesLike`

##### \_value

`BytesLike`

##### \_branchMask

`BigNumberish`

##### \_siblings

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.createMotion`

***

### createMotion(uint256,uint256,address,bytes,bytes,bytes,uint256,bytes32\[\])()

> **createMotion(uint256,uint256,address,bytes,bytes,bytes,uint256,bytes32\[\])**(`_domainId`, `_childSkillIndex`, `_altTarget`, `_action`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_domainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_altTarget

`string`

##### \_action

`BytesLike`

##### \_key

`BytesLike`

##### \_value

`BytesLike`

##### \_branchMask

`BigNumberish`

##### \_siblings

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.createMotion(uint256,uint256,address,bytes,bytes,bytes,uint256,bytes32[])`

***

### createMotionWithProofs()

> **createMotionWithProofs**(`_domainId`, `_altTarget`, `_action`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [createMotion](VotingReputationClientV13.md#createmotion-18), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_domainId

`BigNumberish`

The domain where we vote on the motion

##### \_altTarget

`string`

The contract to which we send the action (0x0 for the colony)

##### \_action

`BytesLike`

A bytes array encoding a function call

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentsV2.createMotionWithProofs`

***

### deployed()

> **deployed**(): `Promise`\<[`VotingReputationClientV13`](VotingReputationClientV13.md)\>

#### Returns

`Promise`\<[`VotingReputationClientV13`](VotingReputationClientV13.md)\>

#### Inherited from

`AugmentedVotingReputation.deployed`

***

### deprecate()

> **deprecate**(`_deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_deprecated

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.deprecate`

***

### deprecate(bool)()

> **deprecate(bool)**(`_deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_deprecated

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.deprecate(bool)`

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

`AugmentedVotingReputation.emit`

***

### escalateMotion()

> **escalateMotion**(`_motionId`, `_newDomainId`, `_childSkillIndex`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_newDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_key

`BytesLike`

##### \_value

`BytesLike`

##### \_branchMask

`BigNumberish`

##### \_siblings

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.escalateMotion`

***

### escalateMotion(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

> **escalateMotion(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])**(`_motionId`, `_newDomainId`, `_childSkillIndex`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_newDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_key

`BytesLike`

##### \_value

`BytesLike`

##### \_branchMask

`BigNumberish`

##### \_siblings

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.escalateMotion(uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])`

***

### escalateMotionWithProofs()

> **escalateMotionWithProofs**(`_motionId`, `_newDomainId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [escalateMotion](VotingReputationClientV13.md#escalatemotion-18), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_newDomainId

`BigNumberish`

The desired domain of escalation

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.escalateMotionWithProofs`

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

`AugmentedVotingReputation.executeMetaTransaction`

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

`AugmentedVotingReputation.executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)`

***

### failingExecutionAllowed()

> **failingExecutionAllowed**(`_motionId`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedVotingReputation.failingExecutionAllowed`

***

### failingExecutionAllowed(uint256)()

> **failingExecutionAllowed(uint256)**(`_motionId`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedVotingReputation.failingExecutionAllowed(uint256)`

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

##### overrides?

`TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

`AugmentedVotingReputation.fallback`

***

### finalizeMotion()

> **finalizeMotion**(`_motionId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.finalizeMotion`

***

### finalizeMotion(uint256)()

> **finalizeMotion(uint256)**(`_motionId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.finalizeMotion(uint256)`

***

### finalizeMotionWithoutFailure()

> **finalizeMotionWithoutFailure**(`_motionId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.finalizeMotionWithoutFailure`

***

### finalizeMotionWithoutFailure(uint256)()

> **finalizeMotionWithoutFailure(uint256)**(`_motionId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.finalizeMotionWithoutFailure(uint256)`

***

### finishUpgrade()

> **finishUpgrade**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.finishUpgrade`

***

### finishUpgrade()()

> **finishUpgrade()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.finishUpgrade()`

***

### getActionSummary()

> **getActionSummary**(`_action`, `_altTarget`, `overrides`?): `Promise`\<`ActionSummaryStructOutput`\>

#### Parameters

##### \_action

`BytesLike`

##### \_altTarget

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`ActionSummaryStructOutput`\>

#### Inherited from

`AugmentedVotingReputation.getActionSummary`

***

### getActionSummary(bytes,address)()

> **getActionSummary(bytes,address)**(`_action`, `_altTarget`, `overrides`?): `Promise`\<`ActionSummaryStructOutput`\>

#### Parameters

##### \_action

`BytesLike`

##### \_altTarget

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`ActionSummaryStructOutput`\>

#### Inherited from

`AugmentedVotingReputation.getActionSummary(bytes,address)`

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

`AugmentedVotingReputation.getCapabilityRoles`

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

`AugmentedVotingReputation.getCapabilityRoles(bytes4)`

***

### getColony()

> **getColony**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedVotingReputation.getColony`

***

### getColony()()

> **getColony()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedVotingReputation.getColony()`

***

### getDeprecated()

> **getDeprecated**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedVotingReputation.getDeprecated`

***

### getDeprecated()()

> **getDeprecated()**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedVotingReputation.getDeprecated()`

***

### getEscalationPeriod()

> **getEscalationPeriod**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getEscalationPeriod`

***

### getEscalationPeriod()()

> **getEscalationPeriod()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getEscalationPeriod()`

***

### getExpenditureMotionCount()

> **getExpenditureMotionCount**(`_structHash`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_structHash

`BytesLike`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getExpenditureMotionCount`

***

### getExpenditureMotionCount(bytes32)()

> **getExpenditureMotionCount(bytes32)**(`_structHash`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_structHash

`BytesLike`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getExpenditureMotionCount(bytes32)`

***

### getExpenditureMotionLock()

> **getExpenditureMotionLock**(`_expenditureId`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_expenditureId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getExpenditureMotionLock`

***

### getExpenditureMotionLock(uint256)()

> **getExpenditureMotionLock(uint256)**(`_expenditureId`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_expenditureId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getExpenditureMotionLock(uint256)`

***

### getExpenditurePastVote()

> **getExpenditurePastVote**(`_expenditureId`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_expenditureId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getExpenditurePastVote`

***

### getExpenditurePastVote(uint256)()

> **getExpenditurePastVote(uint256)**(`_expenditureId`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_expenditureId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getExpenditurePastVote(uint256)`

***

### getExpenditurePastVotes\_DEPRECATED()

> **getExpenditurePastVotes\_DEPRECATED**(`_slotSignature`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_slotSignature

`BytesLike`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getExpenditurePastVotes_DEPRECATED`

***

### getExpenditurePastVotes\_DEPRECATED(bytes32)()

> **getExpenditurePastVotes\_DEPRECATED(bytes32)**(`_slotSignature`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_slotSignature

`BytesLike`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getExpenditurePastVotes_DEPRECATED(bytes32)`

***

### getMaxVoteFraction()

> **getMaxVoteFraction**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getMaxVoteFraction`

***

### getMaxVoteFraction()()

> **getMaxVoteFraction()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getMaxVoteFraction()`

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

`AugmentedVotingReputation.getMetatransactionNonce`

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

`AugmentedVotingReputation.getMetatransactionNonce(address)`

***

### getMotion()

> **getMotion**(`_motionId`, `overrides`?): `Promise`\<`MotionStructOutput`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`MotionStructOutput`\>

#### Inherited from

`AugmentedVotingReputation.getMotion`

***

### getMotion(uint256)()

> **getMotion(uint256)**(`_motionId`, `overrides`?): `Promise`\<`MotionStructOutput`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`MotionStructOutput`\>

#### Inherited from

`AugmentedVotingReputation.getMotion(uint256)`

***

### getMotionCount()

> **getMotionCount**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getMotionCount`

***

### getMotionCount()()

> **getMotionCount()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getMotionCount()`

***

### getMotionState()

> **getMotionState**(`_motionId`, `overrides`?): `Promise`\<`number`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`number`\>

#### Inherited from

`AugmentedVotingReputation.getMotionState`

***

### getMotionState(uint256)()

> **getMotionState(uint256)**(`_motionId`, `overrides`?): `Promise`\<`number`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`number`\>

#### Inherited from

`AugmentedVotingReputation.getMotionState(uint256)`

***

### getRevealPeriod()

> **getRevealPeriod**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getRevealPeriod`

***

### getRevealPeriod()()

> **getRevealPeriod()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getRevealPeriod()`

***

### getStake()

> **getStake**(`_motionId`, `_staker`, `_vote`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_staker

`string`

##### \_vote

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getStake`

***

### getStake(uint256,address,uint256)()

> **getStake(uint256,address,uint256)**(`_motionId`, `_staker`, `_vote`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_staker

`string`

##### \_vote

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getStake(uint256,address,uint256)`

***

### getStakePeriod()

> **getStakePeriod**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getStakePeriod`

***

### getStakePeriod()()

> **getStakePeriod()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getStakePeriod()`

***

### getStakerReward()

> **getStakerReward**(`_motionId`, `_staker`, `_vote`, `overrides`?): `Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_staker

`string`

##### \_vote

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### Inherited from

`AugmentedVotingReputation.getStakerReward`

***

### getStakerReward(uint256,address,uint256)()

> **getStakerReward(uint256,address,uint256)**(`_motionId`, `_staker`, `_vote`, `overrides`?): `Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_staker

`string`

##### \_vote

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### Inherited from

`AugmentedVotingReputation.getStakerReward(uint256,address,uint256)`

***

### getSubmitPeriod()

> **getSubmitPeriod**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getSubmitPeriod`

***

### getSubmitPeriod()()

> **getSubmitPeriod()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getSubmitPeriod()`

***

### getTotalStakeFraction()

> **getTotalStakeFraction**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getTotalStakeFraction`

***

### getTotalStakeFraction()()

> **getTotalStakeFraction()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getTotalStakeFraction()`

***

### getUserMinStakeFraction()

> **getUserMinStakeFraction**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getUserMinStakeFraction`

***

### getUserMinStakeFraction()()

> **getUserMinStakeFraction()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getUserMinStakeFraction()`

***

### getVoterReward()

> **getVoterReward**(`_motionId`, `_voterRep`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_voterRep

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getVoterReward`

***

### getVoterReward(uint256,uint256)()

> **getVoterReward(uint256,uint256)**(`_motionId`, `_voterRep`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_voterRep

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getVoterReward(uint256,uint256)`

***

### getVoterRewardFraction()

> **getVoterRewardFraction**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getVoterRewardFraction`

***

### getVoterRewardFraction()()

> **getVoterRewardFraction()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getVoterRewardFraction()`

***

### getVoterRewardRange()

> **getVoterRewardRange**(`_motionId`, `_voterRep`, `_voterAddress`, `overrides`?): `Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_voterRep

`BigNumberish`

##### \_voterAddress

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### Inherited from

`AugmentedVotingReputation.getVoterRewardRange`

***

### getVoterRewardRange(uint256,uint256,address)()

> **getVoterRewardRange(uint256,uint256,address)**(`_motionId`, `_voterRep`, `_voterAddress`, `overrides`?): `Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_voterRep

`BigNumberish`

##### \_voterAddress

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### Inherited from

`AugmentedVotingReputation.getVoterRewardRange(uint256,uint256,address)`

***

### identifier()

> **identifier**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedVotingReputation.identifier`

***

### identifier()()

> **identifier()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedVotingReputation.identifier()`

***

### initialise()

> **initialise**(`_totalStakeFraction`, `_voterRewardFraction`, `_userMinStakeFraction`, `_maxVoteFraction`, `_stakePeriod`, `_submitPeriod`, `_revealPeriod`, `_escalationPeriod`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_totalStakeFraction

`BigNumberish`

##### \_voterRewardFraction

`BigNumberish`

##### \_userMinStakeFraction

`BigNumberish`

##### \_maxVoteFraction

`BigNumberish`

##### \_stakePeriod

`BigNumberish`

##### \_submitPeriod

`BigNumberish`

##### \_revealPeriod

`BigNumberish`

##### \_escalationPeriod

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.initialise`

***

### initialise(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)()

> **initialise(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)**(`_totalStakeFraction`, `_voterRewardFraction`, `_userMinStakeFraction`, `_maxVoteFraction`, `_stakePeriod`, `_submitPeriod`, `_revealPeriod`, `_escalationPeriod`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_totalStakeFraction

`BigNumberish`

##### \_voterRewardFraction

`BigNumberish`

##### \_userMinStakeFraction

`BigNumberish`

##### \_maxVoteFraction

`BigNumberish`

##### \_stakePeriod

`BigNumberish`

##### \_submitPeriod

`BigNumberish`

##### \_revealPeriod

`BigNumberish`

##### \_escalationPeriod

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.initialise(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)`

***

### install()

> **install**(`_colony`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_colony

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.install`

***

### install(address)()

> **install(address)**(`_colony`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_colony

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.install(address)`

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

##### eventName?

`string` | `EventFilter`

#### Returns

`number`

#### Inherited from

`AugmentedVotingReputation.listenerCount`

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

`AugmentedVotingReputation.listeners`

#### Call Signature

> **listeners**(`eventName`?): `Listener`[]

##### Parameters

###### eventName?

`string`

##### Returns

`Listener`[]

##### Inherited from

`AugmentedVotingReputation.listeners`

***

### multicall()

> **multicall**(`_data`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_data

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.multicall`

***

### multicall(bytes\[\])()

> **multicall(bytes\[\])**(`_data`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_data

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.multicall(bytes[])`

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

`AugmentedVotingReputation.queryFilter`

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

`AugmentedVotingReputation.removeAllListeners`

#### Call Signature

> **removeAllListeners**(`eventName`?): `this`

##### Parameters

###### eventName?

`string`

##### Returns

`this`

##### Inherited from

`AugmentedVotingReputation.removeAllListeners`

***

### revealVote()

> **revealVote**(`_motionId`, `_salt`, `_vote`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_salt

`BytesLike`

##### \_vote

`BigNumberish`

##### \_key

`BytesLike`

##### \_value

`BytesLike`

##### \_branchMask

`BigNumberish`

##### \_siblings

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.revealVote`

***

### revealVote(uint256,bytes32,uint256,bytes,bytes,uint256,bytes32\[\])()

> **revealVote(uint256,bytes32,uint256,bytes,bytes,uint256,bytes32\[\])**(`_motionId`, `_salt`, `_vote`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_salt

`BytesLike`

##### \_vote

`BigNumberish`

##### \_key

`BytesLike`

##### \_value

`BytesLike`

##### \_branchMask

`BigNumberish`

##### \_siblings

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.revealVote(uint256,bytes32,uint256,bytes,bytes,uint256,bytes32[])`

***

### stakeMotion()

> **stakeMotion**(`_motionId`, `_permissionDomainId`, `_childSkillIndex`, `_vote`, `_amount`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_vote

`BigNumberish`

##### \_amount

`BigNumberish`

##### \_key

`BytesLike`

##### \_value

`BytesLike`

##### \_branchMask

`BigNumberish`

##### \_siblings

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.stakeMotion`

***

### stakeMotion(uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

> **stakeMotion(uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])**(`_motionId`, `_permissionDomainId`, `_childSkillIndex`, `_vote`, `_amount`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_vote

`BigNumberish`

##### \_amount

`BigNumberish`

##### \_key

`BytesLike`

##### \_value

`BytesLike`

##### \_branchMask

`BigNumberish`

##### \_siblings

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.stakeMotion(uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])`

***

### stakeMotionWithProofs()

> **stakeMotionWithProofs**(`_motionId`, `_vote`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [stakeMotion](VotingReputationClientV13.md#stakemotion-18), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

##### \_amount

`BigNumberish`

The amount of tokens being staked

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.stakeMotionWithProofs`

***

### submitVote()

> **submitVote**(`_motionId`, `_voteSecret`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_voteSecret

`BytesLike`

##### \_key

`BytesLike`

##### \_value

`BytesLike`

##### \_branchMask

`BigNumberish`

##### \_siblings

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.submitVote`

***

### submitVote(uint256,bytes32,bytes,bytes,uint256,bytes32\[\])()

> **submitVote(uint256,bytes32,bytes,bytes,uint256,bytes32\[\])**(`_motionId`, `_voteSecret`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_voteSecret

`BytesLike`

##### \_key

`BytesLike`

##### \_value

`BytesLike`

##### \_branchMask

`BigNumberish`

##### \_siblings

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.submitVote(uint256,bytes32,bytes,bytes,uint256,bytes32[])`

***

### uninstall()

> **uninstall**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.uninstall`

***

### uninstall()()

> **uninstall()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.uninstall()`

***

### version()

> **version**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.version`

***

### version()()

> **version()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.version()`
