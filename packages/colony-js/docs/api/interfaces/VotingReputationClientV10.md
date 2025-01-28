# Interface: VotingReputationClientV10

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

Claim the staker's reward from a motion that was created with v4 of the extension, and is now missing and cannot be interacted with via the normal claim function.

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

###### \_staker

`string`

The staker whose reward is being claimed

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### claimMisalignedReward(uint256,uint256,uint256,address,uint256)()

Claim the staker's reward from a motion that was created with v4 of the extension, and is now missing and cannot be interacted with via the normal claim function.

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

###### \_staker

`string`

The staker whose reward is being claimed

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### claimReward()

Claim the staker's reward

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

###### \_staker

`string`

The staker whose reward is being claimed

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### claimReward(uint256,uint256,uint256,address,uint256)()

Claim the staker's reward

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

###### \_staker

`string`

The staker whose reward is being claimed

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### createMotion()

Create a motion

##### Parameters

###### \_domainId

`BigNumberish`

The domain where we vote on the motion

###### \_childSkillIndex

`BigNumberish`

The childSkillIndex pointing to the domain of the action

###### \_altTarget

`string`

The contract to which we send the action (0x0 for the colony)

###### \_action

`BytesLike`

A bytes array encoding a function call

###### \_key

`BytesLike`

Reputation tree key for the root domain

###### \_value

`BytesLike`

Reputation tree value for the root domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### createMotion(uint256,uint256,address,bytes,bytes,bytes,uint256,bytes32\[\])()

Create a motion

##### Parameters

###### \_domainId

`BigNumberish`

The domain where we vote on the motion

###### \_childSkillIndex

`BigNumberish`

The childSkillIndex pointing to the domain of the action

###### \_altTarget

`string`

The contract to which we send the action (0x0 for the colony)

###### \_action

`BytesLike`

A bytes array encoding a function call

###### \_key

`BytesLike`

Reputation tree key for the root domain

###### \_value

`BytesLike`

Reputation tree value for the root domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

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

Escalate a motion to a higher domain

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_newDomainId

`BigNumberish`

The desired domain of escalation

###### \_childSkillIndex

`BigNumberish`

For the current domain, relative to the escalated domain

###### \_key

`BytesLike`

Reputation tree key for the new domain

###### \_value

`BytesLike`

Reputation tree value for the new domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### escalateMotion(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

Escalate a motion to a higher domain

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_newDomainId

`BigNumberish`

The desired domain of escalation

###### \_childSkillIndex

`BigNumberish`

For the current domain, relative to the escalated domain

###### \_key

`BytesLike`

Reputation tree key for the new domain

###### \_value

`BytesLike`

Reputation tree value for the new domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### executeMetaTransaction()

Executes a metatransaction targeting this contract

##### Parameters

###### userAddress

`string`

The address of the user that signed the metatransaction

###### payload

`BytesLike`

The transaction data that will be executed if signature valid

###### sigR

`BytesLike`

The 'r' part of the signature

###### sigS

`BytesLike`

The 's' part of the signature

###### sigV

`BigNumberish`

The 'v' part of the signature

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

Executes a metatransaction targeting this contract

##### Parameters

###### userAddress

`string`

The address of the user that signed the metatransaction

###### payload

`BytesLike`

The transaction data that will be executed if signature valid

###### sigR

`BytesLike`

The 'r' part of the signature

###### sigS

`BytesLike`

The 's' part of the signature

###### sigV

`BigNumberish`

The 'v' part of the signature

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### failingExecutionAllowed()

We are only expecting this to be called from finalize motion in the contracts. It is marked as external only so that the frontend can use it.
Return whether a motion, assuming it's in the finalizable state, is allowed to finalize without the call executing successfully.

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### failingExecutionAllowed(uint256)()

We are only expecting this to be called from finalize motion in the contracts. It is marked as external only so that the frontend can use it.
Return whether a motion, assuming it's in the finalizable state, is allowed to finalize without the call executing successfully.

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### finalizeMotion()

Finalized a motion, executing its action if appropriate

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion to finalize

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### finalizeMotion(uint256)()

Finalized a motion, executing its action if appropriate

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion to finalize

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

Return a summary of the multicall action

##### Parameters

###### \_action

`BytesLike`

The id of the motion

###### \_altTarget

`string`

The address of the altTarget, or 0x0 if none exists

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`ActionSummaryStructOutput`\>

#### getActionSummary(bytes,address)()

Return a summary of the multicall action

##### Parameters

###### \_action

`BytesLike`

The id of the motion

###### \_altTarget

`string`

The address of the altTarget, or 0x0 if none exists

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

Get the escalation period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getEscalationPeriod()()

Get the escalation period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getExpenditureMotionCount()

DEPRECATED Get the count of active motions for an expenditure slot

##### Parameters

###### \_structHash

`BytesLike`

Hash of an expenditure id and slot

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getExpenditureMotionCount(bytes32)()

DEPRECATED Get the count of active motions for an expenditure slot

##### Parameters

###### \_structHash

`BytesLike`

Hash of an expenditure id and slot

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getExpenditureMotionLock()

Get the motion which holds the lock on an expenditure

##### Parameters

###### \_expenditureId

`BigNumberish`

The expenditureId

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getExpenditureMotionLock(uint256)()

Get the motion which holds the lock on an expenditure

##### Parameters

###### \_expenditureId

`BigNumberish`

The expenditureId

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getExpenditurePastVote()

The previous version of this function which took an actionHash has been deprecated
Get the largest past vote on an expenditure

##### Parameters

###### \_expenditureId

`BigNumberish`

The expenditureId

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getExpenditurePastVote(uint256)()

The previous version of this function which took an actionHash has been deprecated
Get the largest past vote on an expenditure

##### Parameters

###### \_expenditureId

`BigNumberish`

The expenditureId

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getExpenditurePastVotes\_DEPRECATED()

This is deprecated, and allows visibility on to this variable for any v9 motions that are still ongoing.
DEPRECATED Get the largest past vote on an expenditure

##### Parameters

###### \_slotSignature

`BytesLike`

The slot signature

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getExpenditurePastVotes\_DEPRECATED(bytes32)()

This is deprecated, and allows visibility on to this variable for any v9 motions that are still ongoing.
DEPRECATED Get the largest past vote on an expenditure

##### Parameters

###### \_slotSignature

`BytesLike`

The slot signature

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMaxVoteFraction()

Get the max vote fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMaxVoteFraction()()

Get the max vote fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMetatransactionNonce()

Gets the next metatransaction nonce for user that should be used targeting this contract

##### Parameters

###### userAddress

`string`

The address of the user that will sign the metatransaction

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMetatransactionNonce(address)()

Gets the next metatransaction nonce for user that should be used targeting this contract

##### Parameters

###### userAddress

`string`

The address of the user that will sign the metatransaction

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMotion()

Get the data for a single motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`MotionStructOutput`\>

#### getMotion(uint256)()

Get the data for a single motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`MotionStructOutput`\>

#### getMotionCount()

Get the total motion count

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMotionCount()()

Get the total motion count

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMotionState()

Get the current state of the motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`number`\>

#### getMotionState(uint256)()

Get the current state of the motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`number`\>

#### getRevealPeriod()

Get the reveal period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getRevealPeriod()()

Get the reveal period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getStake()

Get a user's stake on a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_staker

`string`

The staker address

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getStake(uint256,address,uint256)()

Get a user's stake on a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_staker

`string`

The staker address

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getStakePeriod()

Get the stake period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getStakePeriod()()

Get the stake period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getStakerReward()

Get the staker reward

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_staker

`string`

The staker's address

###### \_vote

`BigNumberish`

The vote (0 = NAY, 1 = YAY)

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### getStakerReward(uint256,address,uint256)()

Get the staker reward

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_staker

`string`

The staker's address

###### \_vote

`BigNumberish`

The vote (0 = NAY, 1 = YAY)

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### getSubmitPeriod()

Get the submit period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getSubmitPeriod()()

Get the submit period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getTotalStakeFraction()

Get the total stake fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getTotalStakeFraction()()

Get the total stake fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getUserMinStakeFraction()

Get the user min stake fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getUserMinStakeFraction()()

Get the user min stake fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getVoterReward()

This function will only return an accurate value if in the reveal state. Otherwise, use getVoterRewardRange
Get the voter reward

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_voterRep

`BigNumberish`

The reputation the voter has in the domain

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getVoterReward(uint256,uint256)()

This function will only return an accurate value if in the reveal state. Otherwise, use getVoterRewardRange
Get the voter reward

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_voterRep

`BigNumberish`

The reputation the voter has in the domain

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getVoterRewardFraction()

Get the voter reward fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getVoterRewardFraction()()

Get the voter reward fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getVoterRewardRange()

Get the range of potential rewards for a voter on a specific motion, intended to be used when the motion is in the reveal state. Once a motion is in the reveal state and the reward is known, getVoterReward should be used.

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_voterRep

`BigNumberish`

The reputation the voter has in the domain

###### \_voterAddress

`string`

The address the user will be voting as

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### getVoterRewardRange(uint256,uint256,address)()

Get the range of potential rewards for a voter on a specific motion, intended to be used when the motion is in the reveal state. Once a motion is in the reveal state and the reward is known, getVoterReward should be used.

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_voterRep

`BigNumberish`

The reputation the voter has in the domain

###### \_voterAddress

`string`

The address the user will be voting as

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

Initialise the extension

##### Parameters

###### \_totalStakeFraction

`BigNumberish`

The fraction of the domain's reputation we need to stake

###### \_voterRewardFraction

`BigNumberish`

The fraction of the total stake paid out to voters as rewards

###### \_userMinStakeFraction

`BigNumberish`

The minimum per-user stake as fraction of total stake

###### \_maxVoteFraction

`BigNumberish`

The fraction of the domain's reputation which must submit for quick-end

###### \_stakePeriod

`BigNumberish`

The length of the staking period in seconds

###### \_submitPeriod

`BigNumberish`

The length of the submit period in seconds

###### \_revealPeriod

`BigNumberish`

The length of the reveal period in seconds

###### \_escalationPeriod

`BigNumberish`

The length of the escalation period in seconds

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### initialise(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)()

Initialise the extension

##### Parameters

###### \_totalStakeFraction

`BigNumberish`

The fraction of the domain's reputation we need to stake

###### \_voterRewardFraction

`BigNumberish`

The fraction of the total stake paid out to voters as rewards

###### \_userMinStakeFraction

`BigNumberish`

The minimum per-user stake as fraction of total stake

###### \_maxVoteFraction

`BigNumberish`

The fraction of the domain's reputation which must submit for quick-end

###### \_stakePeriod

`BigNumberish`

The length of the staking period in seconds

###### \_submitPeriod

`BigNumberish`

The length of the submit period in seconds

###### \_revealPeriod

`BigNumberish`

The length of the reveal period in seconds

###### \_escalationPeriod

`BigNumberish`

The length of the escalation period in seconds

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

###### arg0

`BytesLike`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`[]\>

#### multicall(bytes\[\])()

##### Parameters

###### arg0

`BytesLike`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`[]\>

#### revealVote()

Reveal a vote secret for a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_salt

`BytesLike`

The salt used to hash the vote

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### \_key

`BytesLike`

Reputation tree key for the staker/domain

###### \_value

`BytesLike`

Reputation tree value for the staker/domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### revealVote(uint256,bytes32,uint256,bytes,bytes,uint256,bytes32\[\])()

Reveal a vote secret for a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_salt

`BytesLike`

The salt used to hash the vote

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### \_key

`BytesLike`

Reputation tree key for the staker/domain

###### \_value

`BytesLike`

Reputation tree value for the staker/domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### stakeMotion()

Stake on a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### \_amount

`BigNumberish`

The amount of tokens being staked

###### \_key

`BytesLike`

Reputation tree key for the staker/domain

###### \_value

`BytesLike`

Reputation tree value for the staker/domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### stakeMotion(uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

Stake on a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### \_amount

`BigNumberish`

The amount of tokens being staked

###### \_key

`BytesLike`

Reputation tree key for the staker/domain

###### \_value

`BytesLike`

Reputation tree value for the staker/domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### submitVote()

Submit a vote secret for a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_voteSecret

`BytesLike`

The hashed vote secret

###### \_key

`BytesLike`

Reputation tree key for the staker/domain

###### \_value

`BytesLike`

Reputation tree value for the staker/domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### submitVote(uint256,bytes32,bytes,bytes,uint256,bytes32\[\])()

Submit a vote secret for a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_voteSecret

`BytesLike`

The hashed vote secret

###### \_key

`BytesLike`

Reputation tree key for the staker/domain

###### \_value

`BytesLike`

Reputation tree value for the staker/domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

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

> **clientVersion**: `10`

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

Claim the staker's reward from a motion that was created with v4 of the extension, and is now missing and cannot be interacted with via the normal claim function.

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

###### \_staker

`string`

The staker whose reward is being claimed

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### claimMisalignedReward(uint256,uint256,uint256,address,uint256)()

Claim the staker's reward from a motion that was created with v4 of the extension, and is now missing and cannot be interacted with via the normal claim function.

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

###### \_staker

`string`

The staker whose reward is being claimed

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### claimReward()

Claim the staker's reward

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

###### \_staker

`string`

The staker whose reward is being claimed

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### claimReward(uint256,uint256,uint256,address,uint256)()

Claim the staker's reward

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

###### \_staker

`string`

The staker whose reward is being claimed

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### createMotion()

Create a motion

##### Parameters

###### \_domainId

`BigNumberish`

The domain where we vote on the motion

###### \_childSkillIndex

`BigNumberish`

The childSkillIndex pointing to the domain of the action

###### \_altTarget

`string`

The contract to which we send the action (0x0 for the colony)

###### \_action

`BytesLike`

A bytes array encoding a function call

###### \_key

`BytesLike`

Reputation tree key for the root domain

###### \_value

`BytesLike`

Reputation tree value for the root domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### createMotion(uint256,uint256,address,bytes,bytes,bytes,uint256,bytes32\[\])()

Create a motion

##### Parameters

###### \_domainId

`BigNumberish`

The domain where we vote on the motion

###### \_childSkillIndex

`BigNumberish`

The childSkillIndex pointing to the domain of the action

###### \_altTarget

`string`

The contract to which we send the action (0x0 for the colony)

###### \_action

`BytesLike`

A bytes array encoding a function call

###### \_key

`BytesLike`

Reputation tree key for the root domain

###### \_value

`BytesLike`

Reputation tree value for the root domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

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

Escalate a motion to a higher domain

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_newDomainId

`BigNumberish`

The desired domain of escalation

###### \_childSkillIndex

`BigNumberish`

For the current domain, relative to the escalated domain

###### \_key

`BytesLike`

Reputation tree key for the new domain

###### \_value

`BytesLike`

Reputation tree value for the new domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### escalateMotion(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

Escalate a motion to a higher domain

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_newDomainId

`BigNumberish`

The desired domain of escalation

###### \_childSkillIndex

`BigNumberish`

For the current domain, relative to the escalated domain

###### \_key

`BytesLike`

Reputation tree key for the new domain

###### \_value

`BytesLike`

Reputation tree value for the new domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### executeMetaTransaction()

Executes a metatransaction targeting this contract

##### Parameters

###### userAddress

`string`

The address of the user that signed the metatransaction

###### payload

`BytesLike`

The transaction data that will be executed if signature valid

###### sigR

`BytesLike`

The 'r' part of the signature

###### sigS

`BytesLike`

The 's' part of the signature

###### sigV

`BigNumberish`

The 'v' part of the signature

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

Executes a metatransaction targeting this contract

##### Parameters

###### userAddress

`string`

The address of the user that signed the metatransaction

###### payload

`BytesLike`

The transaction data that will be executed if signature valid

###### sigR

`BytesLike`

The 'r' part of the signature

###### sigS

`BytesLike`

The 's' part of the signature

###### sigV

`BigNumberish`

The 'v' part of the signature

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### failingExecutionAllowed()

We are only expecting this to be called from finalize motion in the contracts. It is marked as external only so that the frontend can use it.
Return whether a motion, assuming it's in the finalizable state, is allowed to finalize without the call executing successfully.

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\] & `object`\>

#### failingExecutionAllowed(uint256)()

We are only expecting this to be called from finalize motion in the contracts. It is marked as external only so that the frontend can use it.
Return whether a motion, assuming it's in the finalizable state, is allowed to finalize without the call executing successfully.

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\] & `object`\>

#### finalizeMotion()

Finalized a motion, executing its action if appropriate

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion to finalize

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### finalizeMotion(uint256)()

Finalized a motion, executing its action if appropriate

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion to finalize

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

Return a summary of the multicall action

##### Parameters

###### \_action

`BytesLike`

The id of the motion

###### \_altTarget

`string`

The address of the altTarget, or 0x0 if none exists

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`ActionSummaryStructOutput`\] & `object`\>

#### getActionSummary(bytes,address)()

Return a summary of the multicall action

##### Parameters

###### \_action

`BytesLike`

The id of the motion

###### \_altTarget

`string`

The address of the altTarget, or 0x0 if none exists

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

`Promise`\<\[`string`\]\>

#### getCapabilityRoles(bytes4)()

##### Parameters

###### \_sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### getColony()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### getColony()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### getDeprecated()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\]\>

#### getDeprecated()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\]\>

#### getEscalationPeriod()

Get the escalation period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getEscalationPeriod()()

Get the escalation period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getExpenditureMotionCount()

DEPRECATED Get the count of active motions for an expenditure slot

##### Parameters

###### \_structHash

`BytesLike`

Hash of an expenditure id and slot

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getExpenditureMotionCount(bytes32)()

DEPRECATED Get the count of active motions for an expenditure slot

##### Parameters

###### \_structHash

`BytesLike`

Hash of an expenditure id and slot

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getExpenditureMotionLock()

Get the motion which holds the lock on an expenditure

##### Parameters

###### \_expenditureId

`BigNumberish`

The expenditureId

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getExpenditureMotionLock(uint256)()

Get the motion which holds the lock on an expenditure

##### Parameters

###### \_expenditureId

`BigNumberish`

The expenditureId

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getExpenditurePastVote()

The previous version of this function which took an actionHash has been deprecated
Get the largest past vote on an expenditure

##### Parameters

###### \_expenditureId

`BigNumberish`

The expenditureId

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getExpenditurePastVote(uint256)()

The previous version of this function which took an actionHash has been deprecated
Get the largest past vote on an expenditure

##### Parameters

###### \_expenditureId

`BigNumberish`

The expenditureId

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getExpenditurePastVotes\_DEPRECATED()

This is deprecated, and allows visibility on to this variable for any v9 motions that are still ongoing.
DEPRECATED Get the largest past vote on an expenditure

##### Parameters

###### \_slotSignature

`BytesLike`

The slot signature

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getExpenditurePastVotes\_DEPRECATED(bytes32)()

This is deprecated, and allows visibility on to this variable for any v9 motions that are still ongoing.
DEPRECATED Get the largest past vote on an expenditure

##### Parameters

###### \_slotSignature

`BytesLike`

The slot signature

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMaxVoteFraction()

Get the max vote fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMaxVoteFraction()()

Get the max vote fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMetatransactionNonce()

Gets the next metatransaction nonce for user that should be used targeting this contract

##### Parameters

###### userAddress

`string`

The address of the user that will sign the metatransaction

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMetatransactionNonce(address)()

Gets the next metatransaction nonce for user that should be used targeting this contract

##### Parameters

###### userAddress

`string`

The address of the user that will sign the metatransaction

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMotion()

Get the data for a single motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`MotionStructOutput`\] & `object`\>

#### getMotion(uint256)()

Get the data for a single motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`MotionStructOutput`\] & `object`\>

#### getMotionCount()

Get the total motion count

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMotionCount()()

Get the total motion count

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMotionState()

Get the current state of the motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`number`\] & `object`\>

#### getMotionState(uint256)()

Get the current state of the motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`number`\] & `object`\>

#### getRevealPeriod()

Get the reveal period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getRevealPeriod()()

Get the reveal period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getStake()

Get a user's stake on a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_staker

`string`

The staker address

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getStake(uint256,address,uint256)()

Get a user's stake on a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_staker

`string`

The staker address

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getStakePeriod()

Get the stake period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getStakePeriod()()

Get the stake period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getStakerReward()

Get the staker reward

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_staker

`string`

The staker's address

###### \_vote

`BigNumberish`

The vote (0 = NAY, 1 = YAY)

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### getStakerReward(uint256,address,uint256)()

Get the staker reward

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_staker

`string`

The staker's address

###### \_vote

`BigNumberish`

The vote (0 = NAY, 1 = YAY)

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### getSubmitPeriod()

Get the submit period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getSubmitPeriod()()

Get the submit period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getTotalStakeFraction()

Get the total stake fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getTotalStakeFraction()()

Get the total stake fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getUserMinStakeFraction()

Get the user min stake fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getUserMinStakeFraction()()

Get the user min stake fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getVoterReward()

This function will only return an accurate value if in the reveal state. Otherwise, use getVoterRewardRange
Get the voter reward

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_voterRep

`BigNumberish`

The reputation the voter has in the domain

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getVoterReward(uint256,uint256)()

This function will only return an accurate value if in the reveal state. Otherwise, use getVoterRewardRange
Get the voter reward

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_voterRep

`BigNumberish`

The reputation the voter has in the domain

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getVoterRewardFraction()

Get the voter reward fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getVoterRewardFraction()()

Get the voter reward fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getVoterRewardRange()

Get the range of potential rewards for a voter on a specific motion, intended to be used when the motion is in the reveal state. Once a motion is in the reveal state and the reward is known, getVoterReward should be used.

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_voterRep

`BigNumberish`

The reputation the voter has in the domain

###### \_voterAddress

`string`

The address the user will be voting as

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### getVoterRewardRange(uint256,uint256,address)()

Get the range of potential rewards for a voter on a specific motion, intended to be used when the motion is in the reveal state. Once a motion is in the reveal state and the reward is known, getVoterReward should be used.

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_voterRep

`BigNumberish`

The reputation the voter has in the domain

###### \_voterAddress

`string`

The address the user will be voting as

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### identifier()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### identifier()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### initialise()

Initialise the extension

##### Parameters

###### \_totalStakeFraction

`BigNumberish`

The fraction of the domain's reputation we need to stake

###### \_voterRewardFraction

`BigNumberish`

The fraction of the total stake paid out to voters as rewards

###### \_userMinStakeFraction

`BigNumberish`

The minimum per-user stake as fraction of total stake

###### \_maxVoteFraction

`BigNumberish`

The fraction of the domain's reputation which must submit for quick-end

###### \_stakePeriod

`BigNumberish`

The length of the staking period in seconds

###### \_submitPeriod

`BigNumberish`

The length of the submit period in seconds

###### \_revealPeriod

`BigNumberish`

The length of the reveal period in seconds

###### \_escalationPeriod

`BigNumberish`

The length of the escalation period in seconds

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### initialise(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)()

Initialise the extension

##### Parameters

###### \_totalStakeFraction

`BigNumberish`

The fraction of the domain's reputation we need to stake

###### \_voterRewardFraction

`BigNumberish`

The fraction of the total stake paid out to voters as rewards

###### \_userMinStakeFraction

`BigNumberish`

The minimum per-user stake as fraction of total stake

###### \_maxVoteFraction

`BigNumberish`

The fraction of the domain's reputation which must submit for quick-end

###### \_stakePeriod

`BigNumberish`

The length of the staking period in seconds

###### \_submitPeriod

`BigNumberish`

The length of the submit period in seconds

###### \_revealPeriod

`BigNumberish`

The length of the reveal period in seconds

###### \_escalationPeriod

`BigNumberish`

The length of the escalation period in seconds

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

###### arg0

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### multicall(bytes\[\])()

##### Parameters

###### arg0

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### revealVote()

Reveal a vote secret for a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_salt

`BytesLike`

The salt used to hash the vote

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### \_key

`BytesLike`

Reputation tree key for the staker/domain

###### \_value

`BytesLike`

Reputation tree value for the staker/domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### revealVote(uint256,bytes32,uint256,bytes,bytes,uint256,bytes32\[\])()

Reveal a vote secret for a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_salt

`BytesLike`

The salt used to hash the vote

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### \_key

`BytesLike`

Reputation tree key for the staker/domain

###### \_value

`BytesLike`

Reputation tree value for the staker/domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### stakeMotion()

Stake on a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### \_amount

`BigNumberish`

The amount of tokens being staked

###### \_key

`BytesLike`

Reputation tree key for the staker/domain

###### \_value

`BytesLike`

Reputation tree value for the staker/domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### stakeMotion(uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

Stake on a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### \_amount

`BigNumberish`

The amount of tokens being staked

###### \_key

`BytesLike`

Reputation tree key for the staker/domain

###### \_value

`BytesLike`

Reputation tree value for the staker/domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### submitVote()

Submit a vote secret for a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_voteSecret

`BytesLike`

The hashed vote secret

###### \_key

`BytesLike`

Reputation tree key for the staker/domain

###### \_value

`BytesLike`

Reputation tree value for the staker/domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### submitVote(uint256,bytes32,bytes,bytes,uint256,bytes32\[\])()

Submit a vote secret for a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_voteSecret

`BytesLike`

The hashed vote secret

###### \_key

`BytesLike`

Reputation tree key for the staker/domain

###### \_value

`BytesLike`

Reputation tree value for the staker/domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

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

`Promise`\<\[`BigNumber`\]\>

#### version()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### Inherited from

`AugmentedVotingReputation.functions`

***

### interface

> **interface**: `IVotingReputationInterface`

#### Inherited from

`AugmentedVotingReputation.interface`

***

### off

> **off**: `OnEvent`\<[`VotingReputationClientV10`](VotingReputationClientV10.md)\>

#### Inherited from

`AugmentedVotingReputation.off`

***

### on

> **on**: `OnEvent`\<[`VotingReputationClientV10`](VotingReputationClientV10.md)\>

#### Inherited from

`AugmentedVotingReputation.on`

***

### once

> **once**: `OnEvent`\<[`VotingReputationClientV10`](VotingReputationClientV10.md)\>

#### Inherited from

`AugmentedVotingReputation.once`

***

### populateTransaction

> **populateTransaction**: `object`

#### claimMisalignedReward()

Claim the staker's reward from a motion that was created with v4 of the extension, and is now missing and cannot be interacted with via the normal claim function.

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

###### \_staker

`string`

The staker whose reward is being claimed

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### claimMisalignedReward(uint256,uint256,uint256,address,uint256)()

Claim the staker's reward from a motion that was created with v4 of the extension, and is now missing and cannot be interacted with via the normal claim function.

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

###### \_staker

`string`

The staker whose reward is being claimed

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### claimReward()

Claim the staker's reward

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

###### \_staker

`string`

The staker whose reward is being claimed

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### claimReward(uint256,uint256,uint256,address,uint256)()

Claim the staker's reward

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

###### \_staker

`string`

The staker whose reward is being claimed

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### createMotion()

Create a motion

##### Parameters

###### \_domainId

`BigNumberish`

The domain where we vote on the motion

###### \_childSkillIndex

`BigNumberish`

The childSkillIndex pointing to the domain of the action

###### \_altTarget

`string`

The contract to which we send the action (0x0 for the colony)

###### \_action

`BytesLike`

A bytes array encoding a function call

###### \_key

`BytesLike`

Reputation tree key for the root domain

###### \_value

`BytesLike`

Reputation tree value for the root domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### createMotion(uint256,uint256,address,bytes,bytes,bytes,uint256,bytes32\[\])()

Create a motion

##### Parameters

###### \_domainId

`BigNumberish`

The domain where we vote on the motion

###### \_childSkillIndex

`BigNumberish`

The childSkillIndex pointing to the domain of the action

###### \_altTarget

`string`

The contract to which we send the action (0x0 for the colony)

###### \_action

`BytesLike`

A bytes array encoding a function call

###### \_key

`BytesLike`

Reputation tree key for the root domain

###### \_value

`BytesLike`

Reputation tree value for the root domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

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

Escalate a motion to a higher domain

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_newDomainId

`BigNumberish`

The desired domain of escalation

###### \_childSkillIndex

`BigNumberish`

For the current domain, relative to the escalated domain

###### \_key

`BytesLike`

Reputation tree key for the new domain

###### \_value

`BytesLike`

Reputation tree value for the new domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### escalateMotion(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

Escalate a motion to a higher domain

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_newDomainId

`BigNumberish`

The desired domain of escalation

###### \_childSkillIndex

`BigNumberish`

For the current domain, relative to the escalated domain

###### \_key

`BytesLike`

Reputation tree key for the new domain

###### \_value

`BytesLike`

Reputation tree value for the new domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### executeMetaTransaction()

Executes a metatransaction targeting this contract

##### Parameters

###### userAddress

`string`

The address of the user that signed the metatransaction

###### payload

`BytesLike`

The transaction data that will be executed if signature valid

###### sigR

`BytesLike`

The 'r' part of the signature

###### sigS

`BytesLike`

The 's' part of the signature

###### sigV

`BigNumberish`

The 'v' part of the signature

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

Executes a metatransaction targeting this contract

##### Parameters

###### userAddress

`string`

The address of the user that signed the metatransaction

###### payload

`BytesLike`

The transaction data that will be executed if signature valid

###### sigR

`BytesLike`

The 'r' part of the signature

###### sigS

`BytesLike`

The 's' part of the signature

###### sigV

`BigNumberish`

The 'v' part of the signature

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### failingExecutionAllowed()

We are only expecting this to be called from finalize motion in the contracts. It is marked as external only so that the frontend can use it.
Return whether a motion, assuming it's in the finalizable state, is allowed to finalize without the call executing successfully.

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### failingExecutionAllowed(uint256)()

We are only expecting this to be called from finalize motion in the contracts. It is marked as external only so that the frontend can use it.
Return whether a motion, assuming it's in the finalizable state, is allowed to finalize without the call executing successfully.

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### finalizeMotion()

Finalized a motion, executing its action if appropriate

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion to finalize

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### finalizeMotion(uint256)()

Finalized a motion, executing its action if appropriate

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion to finalize

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

Return a summary of the multicall action

##### Parameters

###### \_action

`BytesLike`

The id of the motion

###### \_altTarget

`string`

The address of the altTarget, or 0x0 if none exists

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getActionSummary(bytes,address)()

Return a summary of the multicall action

##### Parameters

###### \_action

`BytesLike`

The id of the motion

###### \_altTarget

`string`

The address of the altTarget, or 0x0 if none exists

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

Get the escalation period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getEscalationPeriod()()

Get the escalation period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExpenditureMotionCount()

DEPRECATED Get the count of active motions for an expenditure slot

##### Parameters

###### \_structHash

`BytesLike`

Hash of an expenditure id and slot

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExpenditureMotionCount(bytes32)()

DEPRECATED Get the count of active motions for an expenditure slot

##### Parameters

###### \_structHash

`BytesLike`

Hash of an expenditure id and slot

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExpenditureMotionLock()

Get the motion which holds the lock on an expenditure

##### Parameters

###### \_expenditureId

`BigNumberish`

The expenditureId

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExpenditureMotionLock(uint256)()

Get the motion which holds the lock on an expenditure

##### Parameters

###### \_expenditureId

`BigNumberish`

The expenditureId

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExpenditurePastVote()

The previous version of this function which took an actionHash has been deprecated
Get the largest past vote on an expenditure

##### Parameters

###### \_expenditureId

`BigNumberish`

The expenditureId

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExpenditurePastVote(uint256)()

The previous version of this function which took an actionHash has been deprecated
Get the largest past vote on an expenditure

##### Parameters

###### \_expenditureId

`BigNumberish`

The expenditureId

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExpenditurePastVotes\_DEPRECATED()

This is deprecated, and allows visibility on to this variable for any v9 motions that are still ongoing.
DEPRECATED Get the largest past vote on an expenditure

##### Parameters

###### \_slotSignature

`BytesLike`

The slot signature

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExpenditurePastVotes\_DEPRECATED(bytes32)()

This is deprecated, and allows visibility on to this variable for any v9 motions that are still ongoing.
DEPRECATED Get the largest past vote on an expenditure

##### Parameters

###### \_slotSignature

`BytesLike`

The slot signature

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMaxVoteFraction()

Get the max vote fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMaxVoteFraction()()

Get the max vote fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMetatransactionNonce()

Gets the next metatransaction nonce for user that should be used targeting this contract

##### Parameters

###### userAddress

`string`

The address of the user that will sign the metatransaction

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMetatransactionNonce(address)()

Gets the next metatransaction nonce for user that should be used targeting this contract

##### Parameters

###### userAddress

`string`

The address of the user that will sign the metatransaction

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMotion()

Get the data for a single motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMotion(uint256)()

Get the data for a single motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMotionCount()

Get the total motion count

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMotionCount()()

Get the total motion count

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMotionState()

Get the current state of the motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMotionState(uint256)()

Get the current state of the motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getRevealPeriod()

Get the reveal period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getRevealPeriod()()

Get the reveal period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStake()

Get a user's stake on a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_staker

`string`

The staker address

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStake(uint256,address,uint256)()

Get a user's stake on a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_staker

`string`

The staker address

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStakePeriod()

Get the stake period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStakePeriod()()

Get the stake period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStakerReward()

Get the staker reward

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_staker

`string`

The staker's address

###### \_vote

`BigNumberish`

The vote (0 = NAY, 1 = YAY)

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStakerReward(uint256,address,uint256)()

Get the staker reward

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_staker

`string`

The staker's address

###### \_vote

`BigNumberish`

The vote (0 = NAY, 1 = YAY)

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getSubmitPeriod()

Get the submit period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getSubmitPeriod()()

Get the submit period

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getTotalStakeFraction()

Get the total stake fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getTotalStakeFraction()()

Get the total stake fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getUserMinStakeFraction()

Get the user min stake fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getUserMinStakeFraction()()

Get the user min stake fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getVoterReward()

This function will only return an accurate value if in the reveal state. Otherwise, use getVoterRewardRange
Get the voter reward

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_voterRep

`BigNumberish`

The reputation the voter has in the domain

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getVoterReward(uint256,uint256)()

This function will only return an accurate value if in the reveal state. Otherwise, use getVoterRewardRange
Get the voter reward

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_voterRep

`BigNumberish`

The reputation the voter has in the domain

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getVoterRewardFraction()

Get the voter reward fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getVoterRewardFraction()()

Get the voter reward fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getVoterRewardRange()

Get the range of potential rewards for a voter on a specific motion, intended to be used when the motion is in the reveal state. Once a motion is in the reveal state and the reward is known, getVoterReward should be used.

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_voterRep

`BigNumberish`

The reputation the voter has in the domain

###### \_voterAddress

`string`

The address the user will be voting as

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getVoterRewardRange(uint256,uint256,address)()

Get the range of potential rewards for a voter on a specific motion, intended to be used when the motion is in the reveal state. Once a motion is in the reveal state and the reward is known, getVoterReward should be used.

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_voterRep

`BigNumberish`

The reputation the voter has in the domain

###### \_voterAddress

`string`

The address the user will be voting as

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

Initialise the extension

##### Parameters

###### \_totalStakeFraction

`BigNumberish`

The fraction of the domain's reputation we need to stake

###### \_voterRewardFraction

`BigNumberish`

The fraction of the total stake paid out to voters as rewards

###### \_userMinStakeFraction

`BigNumberish`

The minimum per-user stake as fraction of total stake

###### \_maxVoteFraction

`BigNumberish`

The fraction of the domain's reputation which must submit for quick-end

###### \_stakePeriod

`BigNumberish`

The length of the staking period in seconds

###### \_submitPeriod

`BigNumberish`

The length of the submit period in seconds

###### \_revealPeriod

`BigNumberish`

The length of the reveal period in seconds

###### \_escalationPeriod

`BigNumberish`

The length of the escalation period in seconds

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### initialise(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)()

Initialise the extension

##### Parameters

###### \_totalStakeFraction

`BigNumberish`

The fraction of the domain's reputation we need to stake

###### \_voterRewardFraction

`BigNumberish`

The fraction of the total stake paid out to voters as rewards

###### \_userMinStakeFraction

`BigNumberish`

The minimum per-user stake as fraction of total stake

###### \_maxVoteFraction

`BigNumberish`

The fraction of the domain's reputation which must submit for quick-end

###### \_stakePeriod

`BigNumberish`

The length of the staking period in seconds

###### \_submitPeriod

`BigNumberish`

The length of the submit period in seconds

###### \_revealPeriod

`BigNumberish`

The length of the reveal period in seconds

###### \_escalationPeriod

`BigNumberish`

The length of the escalation period in seconds

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

###### arg0

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### multicall(bytes\[\])()

##### Parameters

###### arg0

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### revealVote()

Reveal a vote secret for a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_salt

`BytesLike`

The salt used to hash the vote

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### \_key

`BytesLike`

Reputation tree key for the staker/domain

###### \_value

`BytesLike`

Reputation tree value for the staker/domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### revealVote(uint256,bytes32,uint256,bytes,bytes,uint256,bytes32\[\])()

Reveal a vote secret for a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_salt

`BytesLike`

The salt used to hash the vote

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### \_key

`BytesLike`

Reputation tree key for the staker/domain

###### \_value

`BytesLike`

Reputation tree value for the staker/domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### stakeMotion()

Stake on a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### \_amount

`BigNumberish`

The amount of tokens being staked

###### \_key

`BytesLike`

Reputation tree key for the staker/domain

###### \_value

`BytesLike`

Reputation tree value for the staker/domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### stakeMotion(uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

Stake on a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

###### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

###### \_amount

`BigNumberish`

The amount of tokens being staked

###### \_key

`BytesLike`

Reputation tree key for the staker/domain

###### \_value

`BytesLike`

Reputation tree value for the staker/domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### submitVote()

Submit a vote secret for a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_voteSecret

`BytesLike`

The hashed vote secret

###### \_key

`BytesLike`

Reputation tree key for the staker/domain

###### \_value

`BytesLike`

Reputation tree value for the staker/domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### submitVote(uint256,bytes32,bytes,bytes,uint256,bytes32\[\])()

Submit a vote secret for a motion

##### Parameters

###### \_motionId

`BigNumberish`

The id of the motion

###### \_voteSecret

`BytesLike`

The hashed vote secret

###### \_key

`BytesLike`

Reputation tree key for the staker/domain

###### \_value

`BytesLike`

Reputation tree value for the staker/domain

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

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

> **removeListener**: `OnEvent`\<[`VotingReputationClientV10`](VotingReputationClientV10.md)\>

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

Claim the staker's reward from a motion that was created with v4 of the extension, and is now missing and cannot be interacted with via the normal claim function.

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

##### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

##### \_staker

`string`

The staker whose reward is being claimed

##### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.claimMisalignedReward`

***

### claimMisalignedReward(uint256,uint256,uint256,address,uint256)()

> **claimMisalignedReward(uint256,uint256,uint256,address,uint256)**(`_motionId`, `_permissionDomainId`, `_childSkillIndex`, `_staker`, `_vote`, `overrides`?): `Promise`\<`ContractTransaction`\>

Claim the staker's reward from a motion that was created with v4 of the extension, and is now missing and cannot be interacted with via the normal claim function.

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

##### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

##### \_staker

`string`

The staker whose reward is being claimed

##### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.claimMisalignedReward(uint256,uint256,uint256,address,uint256)`

***

### claimMisalignedRewardWithProofs()

> **claimMisalignedRewardWithProofs**(`_motionId`, `_staker`, `_vote`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [claimMisalignedReward](VotingReputationClientV10.md#claimmisalignedreward-18), but let colonyJS figure out the permission proofs for you.
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

Claim the staker's reward

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

##### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

##### \_staker

`string`

The staker whose reward is being claimed

##### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.claimReward`

***

### claimReward(uint256,uint256,uint256,address,uint256)()

> **claimReward(uint256,uint256,uint256,address,uint256)**(`_motionId`, `_permissionDomainId`, `_childSkillIndex`, `_staker`, `_vote`, `overrides`?): `Promise`\<`ContractTransaction`\>

Claim the staker's reward

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

##### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

##### \_staker

`string`

The staker whose reward is being claimed

##### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.claimReward(uint256,uint256,uint256,address,uint256)`

***

### claimRewardWithProofs()

> **claimRewardWithProofs**(`_motionId`, `_staker`, `_vote`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [claimReward](VotingReputationClientV10.md#claimreward-18), but let colonyJS figure out the permission proofs for you.
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

Create a motion

#### Parameters

##### \_domainId

`BigNumberish`

The domain where we vote on the motion

##### \_childSkillIndex

`BigNumberish`

The childSkillIndex pointing to the domain of the action

##### \_altTarget

`string`

The contract to which we send the action (0x0 for the colony)

##### \_action

`BytesLike`

A bytes array encoding a function call

##### \_key

`BytesLike`

Reputation tree key for the root domain

##### \_value

`BytesLike`

Reputation tree value for the root domain

##### \_branchMask

`BigNumberish`

The branchmask of the proof

##### \_siblings

`BytesLike`[]

The siblings of the proof

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.createMotion`

***

### createMotion(uint256,uint256,address,bytes,bytes,bytes,uint256,bytes32\[\])()

> **createMotion(uint256,uint256,address,bytes,bytes,bytes,uint256,bytes32\[\])**(`_domainId`, `_childSkillIndex`, `_altTarget`, `_action`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

Create a motion

#### Parameters

##### \_domainId

`BigNumberish`

The domain where we vote on the motion

##### \_childSkillIndex

`BigNumberish`

The childSkillIndex pointing to the domain of the action

##### \_altTarget

`string`

The contract to which we send the action (0x0 for the colony)

##### \_action

`BytesLike`

A bytes array encoding a function call

##### \_key

`BytesLike`

Reputation tree key for the root domain

##### \_value

`BytesLike`

Reputation tree value for the root domain

##### \_branchMask

`BigNumberish`

The branchmask of the proof

##### \_siblings

`BytesLike`[]

The siblings of the proof

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.createMotion(uint256,uint256,address,bytes,bytes,bytes,uint256,bytes32[])`

***

### createMotionWithProofs()

> **createMotionWithProofs**(`_domainId`, `_altTarget`, `_action`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [createMotion](VotingReputationClientV10.md#createmotion-18), but let colonyJS figure out the permission proofs for you.
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

> **deployed**(): `Promise`\<[`VotingReputationClientV10`](VotingReputationClientV10.md)\>

#### Returns

`Promise`\<[`VotingReputationClientV10`](VotingReputationClientV10.md)\>

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

Escalate a motion to a higher domain

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_newDomainId

`BigNumberish`

The desired domain of escalation

##### \_childSkillIndex

`BigNumberish`

For the current domain, relative to the escalated domain

##### \_key

`BytesLike`

Reputation tree key for the new domain

##### \_value

`BytesLike`

Reputation tree value for the new domain

##### \_branchMask

`BigNumberish`

The branchmask of the proof

##### \_siblings

`BytesLike`[]

The siblings of the proof

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.escalateMotion`

***

### escalateMotion(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

> **escalateMotion(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])**(`_motionId`, `_newDomainId`, `_childSkillIndex`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

Escalate a motion to a higher domain

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_newDomainId

`BigNumberish`

The desired domain of escalation

##### \_childSkillIndex

`BigNumberish`

For the current domain, relative to the escalated domain

##### \_key

`BytesLike`

Reputation tree key for the new domain

##### \_value

`BytesLike`

Reputation tree value for the new domain

##### \_branchMask

`BigNumberish`

The branchmask of the proof

##### \_siblings

`BytesLike`[]

The siblings of the proof

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.escalateMotion(uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])`

***

### escalateMotionWithProofs()

> **escalateMotionWithProofs**(`_motionId`, `_newDomainId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [escalateMotion](VotingReputationClientV10.md#escalatemotion-18), but let colonyJS figure out the permission proofs for you.
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

Executes a metatransaction targeting this contract

#### Parameters

##### userAddress

`string`

The address of the user that signed the metatransaction

##### payload

`BytesLike`

The transaction data that will be executed if signature valid

##### sigR

`BytesLike`

The 'r' part of the signature

##### sigS

`BytesLike`

The 's' part of the signature

##### sigV

`BigNumberish`

The 'v' part of the signature

##### overrides?

`PayableOverrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.executeMetaTransaction`

***

### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

> **executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)**(`userAddress`, `payload`, `sigR`, `sigS`, `sigV`, `overrides`?): `Promise`\<`ContractTransaction`\>

Executes a metatransaction targeting this contract

#### Parameters

##### userAddress

`string`

The address of the user that signed the metatransaction

##### payload

`BytesLike`

The transaction data that will be executed if signature valid

##### sigR

`BytesLike`

The 'r' part of the signature

##### sigS

`BytesLike`

The 's' part of the signature

##### sigV

`BigNumberish`

The 'v' part of the signature

##### overrides?

`PayableOverrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)`

***

### failingExecutionAllowed()

> **failingExecutionAllowed**(`_motionId`, `overrides`?): `Promise`\<`boolean`\>

We are only expecting this to be called from finalize motion in the contracts. It is marked as external only so that the frontend can use it.
Return whether a motion, assuming it's in the finalizable state, is allowed to finalize without the call executing successfully.

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedVotingReputation.failingExecutionAllowed`

***

### failingExecutionAllowed(uint256)()

> **failingExecutionAllowed(uint256)**(`_motionId`, `overrides`?): `Promise`\<`boolean`\>

We are only expecting this to be called from finalize motion in the contracts. It is marked as external only so that the frontend can use it.
Return whether a motion, assuming it's in the finalizable state, is allowed to finalize without the call executing successfully.

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

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

Finalized a motion, executing its action if appropriate

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion to finalize

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.finalizeMotion`

***

### finalizeMotion(uint256)()

> **finalizeMotion(uint256)**(`_motionId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Finalized a motion, executing its action if appropriate

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion to finalize

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.finalizeMotion(uint256)`

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

Return a summary of the multicall action

#### Parameters

##### \_action

`BytesLike`

The id of the motion

##### \_altTarget

`string`

The address of the altTarget, or 0x0 if none exists

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`ActionSummaryStructOutput`\>

#### Inherited from

`AugmentedVotingReputation.getActionSummary`

***

### getActionSummary(bytes,address)()

> **getActionSummary(bytes,address)**(`_action`, `_altTarget`, `overrides`?): `Promise`\<`ActionSummaryStructOutput`\>

Return a summary of the multicall action

#### Parameters

##### \_action

`BytesLike`

The id of the motion

##### \_altTarget

`string`

The address of the altTarget, or 0x0 if none exists

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

Get the escalation period

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

Get the escalation period

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

DEPRECATED Get the count of active motions for an expenditure slot

#### Parameters

##### \_structHash

`BytesLike`

Hash of an expenditure id and slot

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getExpenditureMotionCount`

***

### getExpenditureMotionCount(bytes32)()

> **getExpenditureMotionCount(bytes32)**(`_structHash`, `overrides`?): `Promise`\<`BigNumber`\>

DEPRECATED Get the count of active motions for an expenditure slot

#### Parameters

##### \_structHash

`BytesLike`

Hash of an expenditure id and slot

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getExpenditureMotionCount(bytes32)`

***

### getExpenditureMotionLock()

> **getExpenditureMotionLock**(`_expenditureId`, `overrides`?): `Promise`\<`BigNumber`\>

Get the motion which holds the lock on an expenditure

#### Parameters

##### \_expenditureId

`BigNumberish`

The expenditureId

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getExpenditureMotionLock`

***

### getExpenditureMotionLock(uint256)()

> **getExpenditureMotionLock(uint256)**(`_expenditureId`, `overrides`?): `Promise`\<`BigNumber`\>

Get the motion which holds the lock on an expenditure

#### Parameters

##### \_expenditureId

`BigNumberish`

The expenditureId

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getExpenditureMotionLock(uint256)`

***

### getExpenditurePastVote()

> **getExpenditurePastVote**(`_expenditureId`, `overrides`?): `Promise`\<`BigNumber`\>

The previous version of this function which took an actionHash has been deprecated
Get the largest past vote on an expenditure

#### Parameters

##### \_expenditureId

`BigNumberish`

The expenditureId

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getExpenditurePastVote`

***

### getExpenditurePastVote(uint256)()

> **getExpenditurePastVote(uint256)**(`_expenditureId`, `overrides`?): `Promise`\<`BigNumber`\>

The previous version of this function which took an actionHash has been deprecated
Get the largest past vote on an expenditure

#### Parameters

##### \_expenditureId

`BigNumberish`

The expenditureId

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getExpenditurePastVote(uint256)`

***

### getExpenditurePastVotes\_DEPRECATED()

> **getExpenditurePastVotes\_DEPRECATED**(`_slotSignature`, `overrides`?): `Promise`\<`BigNumber`\>

This is deprecated, and allows visibility on to this variable for any v9 motions that are still ongoing.
DEPRECATED Get the largest past vote on an expenditure

#### Parameters

##### \_slotSignature

`BytesLike`

The slot signature

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getExpenditurePastVotes_DEPRECATED`

***

### getExpenditurePastVotes\_DEPRECATED(bytes32)()

> **getExpenditurePastVotes\_DEPRECATED(bytes32)**(`_slotSignature`, `overrides`?): `Promise`\<`BigNumber`\>

This is deprecated, and allows visibility on to this variable for any v9 motions that are still ongoing.
DEPRECATED Get the largest past vote on an expenditure

#### Parameters

##### \_slotSignature

`BytesLike`

The slot signature

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getExpenditurePastVotes_DEPRECATED(bytes32)`

***

### getMaxVoteFraction()

> **getMaxVoteFraction**(`overrides`?): `Promise`\<`BigNumber`\>

Get the max vote fraction

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

Get the max vote fraction

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

Gets the next metatransaction nonce for user that should be used targeting this contract

#### Parameters

##### userAddress

`string`

The address of the user that will sign the metatransaction

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getMetatransactionNonce`

***

### getMetatransactionNonce(address)()

> **getMetatransactionNonce(address)**(`userAddress`, `overrides`?): `Promise`\<`BigNumber`\>

Gets the next metatransaction nonce for user that should be used targeting this contract

#### Parameters

##### userAddress

`string`

The address of the user that will sign the metatransaction

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getMetatransactionNonce(address)`

***

### getMotion()

> **getMotion**(`_motionId`, `overrides`?): `Promise`\<`MotionStructOutput`\>

Get the data for a single motion

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`MotionStructOutput`\>

#### Inherited from

`AugmentedVotingReputation.getMotion`

***

### getMotion(uint256)()

> **getMotion(uint256)**(`_motionId`, `overrides`?): `Promise`\<`MotionStructOutput`\>

Get the data for a single motion

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`MotionStructOutput`\>

#### Inherited from

`AugmentedVotingReputation.getMotion(uint256)`

***

### getMotionCount()

> **getMotionCount**(`overrides`?): `Promise`\<`BigNumber`\>

Get the total motion count

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

Get the total motion count

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

Get the current state of the motion

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`number`\>

#### Inherited from

`AugmentedVotingReputation.getMotionState`

***

### getMotionState(uint256)()

> **getMotionState(uint256)**(`_motionId`, `overrides`?): `Promise`\<`number`\>

Get the current state of the motion

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`number`\>

#### Inherited from

`AugmentedVotingReputation.getMotionState(uint256)`

***

### getRevealPeriod()

> **getRevealPeriod**(`overrides`?): `Promise`\<`BigNumber`\>

Get the reveal period

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

Get the reveal period

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

Get a user's stake on a motion

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_staker

`string`

The staker address

##### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getStake`

***

### getStake(uint256,address,uint256)()

> **getStake(uint256,address,uint256)**(`_motionId`, `_staker`, `_vote`, `overrides`?): `Promise`\<`BigNumber`\>

Get a user's stake on a motion

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_staker

`string`

The staker address

##### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getStake(uint256,address,uint256)`

***

### getStakePeriod()

> **getStakePeriod**(`overrides`?): `Promise`\<`BigNumber`\>

Get the stake period

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

Get the stake period

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

Get the staker reward

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_staker

`string`

The staker's address

##### \_vote

`BigNumberish`

The vote (0 = NAY, 1 = YAY)

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### Inherited from

`AugmentedVotingReputation.getStakerReward`

***

### getStakerReward(uint256,address,uint256)()

> **getStakerReward(uint256,address,uint256)**(`_motionId`, `_staker`, `_vote`, `overrides`?): `Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

Get the staker reward

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_staker

`string`

The staker's address

##### \_vote

`BigNumberish`

The vote (0 = NAY, 1 = YAY)

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### Inherited from

`AugmentedVotingReputation.getStakerReward(uint256,address,uint256)`

***

### getSubmitPeriod()

> **getSubmitPeriod**(`overrides`?): `Promise`\<`BigNumber`\>

Get the submit period

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

Get the submit period

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

Get the total stake fraction

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

Get the total stake fraction

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

Get the user min stake fraction

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

Get the user min stake fraction

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

This function will only return an accurate value if in the reveal state. Otherwise, use getVoterRewardRange
Get the voter reward

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_voterRep

`BigNumberish`

The reputation the voter has in the domain

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getVoterReward`

***

### getVoterReward(uint256,uint256)()

> **getVoterReward(uint256,uint256)**(`_motionId`, `_voterRep`, `overrides`?): `Promise`\<`BigNumber`\>

This function will only return an accurate value if in the reveal state. Otherwise, use getVoterRewardRange
Get the voter reward

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_voterRep

`BigNumberish`

The reputation the voter has in the domain

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedVotingReputation.getVoterReward(uint256,uint256)`

***

### getVoterRewardFraction()

> **getVoterRewardFraction**(`overrides`?): `Promise`\<`BigNumber`\>

Get the voter reward fraction

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

Get the voter reward fraction

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

Get the range of potential rewards for a voter on a specific motion, intended to be used when the motion is in the reveal state. Once a motion is in the reveal state and the reward is known, getVoterReward should be used.

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_voterRep

`BigNumberish`

The reputation the voter has in the domain

##### \_voterAddress

`string`

The address the user will be voting as

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### Inherited from

`AugmentedVotingReputation.getVoterRewardRange`

***

### getVoterRewardRange(uint256,uint256,address)()

> **getVoterRewardRange(uint256,uint256,address)**(`_motionId`, `_voterRep`, `_voterAddress`, `overrides`?): `Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

Get the range of potential rewards for a voter on a specific motion, intended to be used when the motion is in the reveal state. Once a motion is in the reveal state and the reward is known, getVoterReward should be used.

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_voterRep

`BigNumberish`

The reputation the voter has in the domain

##### \_voterAddress

`string`

The address the user will be voting as

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

Initialise the extension

#### Parameters

##### \_totalStakeFraction

`BigNumberish`

The fraction of the domain's reputation we need to stake

##### \_voterRewardFraction

`BigNumberish`

The fraction of the total stake paid out to voters as rewards

##### \_userMinStakeFraction

`BigNumberish`

The minimum per-user stake as fraction of total stake

##### \_maxVoteFraction

`BigNumberish`

The fraction of the domain's reputation which must submit for quick-end

##### \_stakePeriod

`BigNumberish`

The length of the staking period in seconds

##### \_submitPeriod

`BigNumberish`

The length of the submit period in seconds

##### \_revealPeriod

`BigNumberish`

The length of the reveal period in seconds

##### \_escalationPeriod

`BigNumberish`

The length of the escalation period in seconds

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.initialise`

***

### initialise(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)()

> **initialise(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)**(`_totalStakeFraction`, `_voterRewardFraction`, `_userMinStakeFraction`, `_maxVoteFraction`, `_stakePeriod`, `_submitPeriod`, `_revealPeriod`, `_escalationPeriod`, `overrides`?): `Promise`\<`ContractTransaction`\>

Initialise the extension

#### Parameters

##### \_totalStakeFraction

`BigNumberish`

The fraction of the domain's reputation we need to stake

##### \_voterRewardFraction

`BigNumberish`

The fraction of the total stake paid out to voters as rewards

##### \_userMinStakeFraction

`BigNumberish`

The minimum per-user stake as fraction of total stake

##### \_maxVoteFraction

`BigNumberish`

The fraction of the domain's reputation which must submit for quick-end

##### \_stakePeriod

`BigNumberish`

The length of the staking period in seconds

##### \_submitPeriod

`BigNumberish`

The length of the submit period in seconds

##### \_revealPeriod

`BigNumberish`

The length of the reveal period in seconds

##### \_escalationPeriod

`BigNumberish`

The length of the escalation period in seconds

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

> **multicall**(`arg0`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### arg0

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.multicall`

***

### multicall(bytes\[\])()

> **multicall(bytes\[\])**(`arg0`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### arg0

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

Reveal a vote secret for a motion

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_salt

`BytesLike`

The salt used to hash the vote

##### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

##### \_key

`BytesLike`

Reputation tree key for the staker/domain

##### \_value

`BytesLike`

Reputation tree value for the staker/domain

##### \_branchMask

`BigNumberish`

The branchmask of the proof

##### \_siblings

`BytesLike`[]

The siblings of the proof

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.revealVote`

***

### revealVote(uint256,bytes32,uint256,bytes,bytes,uint256,bytes32\[\])()

> **revealVote(uint256,bytes32,uint256,bytes,bytes,uint256,bytes32\[\])**(`_motionId`, `_salt`, `_vote`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

Reveal a vote secret for a motion

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_salt

`BytesLike`

The salt used to hash the vote

##### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

##### \_key

`BytesLike`

Reputation tree key for the staker/domain

##### \_value

`BytesLike`

Reputation tree value for the staker/domain

##### \_branchMask

`BigNumberish`

The branchmask of the proof

##### \_siblings

`BytesLike`[]

The siblings of the proof

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.revealVote(uint256,bytes32,uint256,bytes,bytes,uint256,bytes32[])`

***

### stakeMotion()

> **stakeMotion**(`_motionId`, `_permissionDomainId`, `_childSkillIndex`, `_vote`, `_amount`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

Stake on a motion

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

##### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

##### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

##### \_amount

`BigNumberish`

The amount of tokens being staked

##### \_key

`BytesLike`

Reputation tree key for the staker/domain

##### \_value

`BytesLike`

Reputation tree value for the staker/domain

##### \_branchMask

`BigNumberish`

The branchmask of the proof

##### \_siblings

`BytesLike`[]

The siblings of the proof

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.stakeMotion`

***

### stakeMotion(uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

> **stakeMotion(uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])**(`_motionId`, `_permissionDomainId`, `_childSkillIndex`, `_vote`, `_amount`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

Stake on a motion

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_permissionDomainId

`BigNumberish`

The domain where the extension has the arbitration permission

##### \_childSkillIndex

`BigNumberish`

For the domain in which the motion is occurring

##### \_vote

`BigNumberish`

The side being supported (0 = NAY, 1 = YAY)

##### \_amount

`BigNumberish`

The amount of tokens being staked

##### \_key

`BytesLike`

Reputation tree key for the staker/domain

##### \_value

`BytesLike`

Reputation tree value for the staker/domain

##### \_branchMask

`BigNumberish`

The branchmask of the proof

##### \_siblings

`BytesLike`[]

The siblings of the proof

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.stakeMotion(uint256,uint256,uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])`

***

### stakeMotionWithProofs()

> **stakeMotionWithProofs**(`_motionId`, `_vote`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [stakeMotion](VotingReputationClientV10.md#stakemotion-18), but let colonyJS figure out the permission proofs for you.
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

Submit a vote secret for a motion

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_voteSecret

`BytesLike`

The hashed vote secret

##### \_key

`BytesLike`

Reputation tree key for the staker/domain

##### \_value

`BytesLike`

Reputation tree value for the staker/domain

##### \_branchMask

`BigNumberish`

The branchmask of the proof

##### \_siblings

`BytesLike`[]

The siblings of the proof

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedVotingReputation.submitVote`

***

### submitVote(uint256,bytes32,bytes,bytes,uint256,bytes32\[\])()

> **submitVote(uint256,bytes32,bytes,bytes,uint256,bytes32\[\])**(`_motionId`, `_voteSecret`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

Submit a vote secret for a motion

#### Parameters

##### \_motionId

`BigNumberish`

The id of the motion

##### \_voteSecret

`BytesLike`

The hashed vote secret

##### \_key

`BytesLike`

Reputation tree key for the staker/domain

##### \_value

`BytesLike`

Reputation tree value for the staker/domain

##### \_branchMask

`BigNumberish`

The branchmask of the proof

##### \_siblings

`BytesLike`[]

The siblings of the proof

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
