[ColonyJS](../README.md) / [Exports](../modules.md) / VotingReputationClientV1

# Interface: VotingReputationClientV1

## Hierarchy

- `AugmentedVotingReputation`<`VotingReputation`\>

  ↳ **`VotingReputationClientV1`**

## Table of contents

### Properties

- [\_deployedPromise](VotingReputationClientV1.md#_deployedpromise)
- [\_runningEvents](VotingReputationClientV1.md#_runningevents)
- [\_wrappedEmits](VotingReputationClientV1.md#_wrappedemits)
- [address](VotingReputationClientV1.md#address)
- [callStatic](VotingReputationClientV1.md#callstatic)
- [clientType](VotingReputationClientV1.md#clienttype)
- [clientVersion](VotingReputationClientV1.md#clientversion)
- [colonyClient](VotingReputationClientV1.md#colonyclient)
- [deployTransaction](VotingReputationClientV1.md#deploytransaction)
- [estimateGas](VotingReputationClientV1.md#estimategas)
- [filters](VotingReputationClientV1.md#filters)
- [functions](VotingReputationClientV1.md#functions)
- [interface](VotingReputationClientV1.md#interface)
- [off](VotingReputationClientV1.md#off)
- [on](VotingReputationClientV1.md#on)
- [once](VotingReputationClientV1.md#once)
- [populateTransaction](VotingReputationClientV1.md#populatetransaction)
- [provider](VotingReputationClientV1.md#provider)
- [removeListener](VotingReputationClientV1.md#removelistener)
- [resolvedAddress](VotingReputationClientV1.md#resolvedaddress)
- [signer](VotingReputationClientV1.md#signer)
- [votingReputationEvents](VotingReputationClientV1.md#votingreputationevents)

### Methods

- [\_checkRunningEvents](VotingReputationClientV1.md#_checkrunningevents)
- [\_deployed](VotingReputationClientV1.md#_deployed)
- [\_wrapEvent](VotingReputationClientV1.md#_wrapevent)
- [attach](VotingReputationClientV1.md#attach)
- [authority](VotingReputationClientV1.md#authority)
- [claimReward](VotingReputationClientV1.md#claimreward)
- [claimRewardWithProofs](VotingReputationClientV1.md#claimrewardwithproofs)
- [connect](VotingReputationClientV1.md#connect)
- [createClaimDelayAction](VotingReputationClientV1.md#createclaimdelayaction)
- [createDomainMotion](VotingReputationClientV1.md#createdomainmotion)
- [createDomainMotionWithProofs](VotingReputationClientV1.md#createdomainmotionwithproofs)
- [createRootMotion](VotingReputationClientV1.md#createrootmotion)
- [deployed](VotingReputationClientV1.md#deployed)
- [deprecate](VotingReputationClientV1.md#deprecate)
- [emit](VotingReputationClientV1.md#emit)
- [escalateMotion](VotingReputationClientV1.md#escalatemotion)
- [escalateMotionWithProofs](VotingReputationClientV1.md#escalatemotionwithproofs)
- [fallback](VotingReputationClientV1.md#fallback)
- [finalizeMotion](VotingReputationClientV1.md#finalizemotion)
- [finishUpgrade](VotingReputationClientV1.md#finishupgrade)
- [getColony](VotingReputationClientV1.md#getcolony)
- [getDeprecated](VotingReputationClientV1.md#getdeprecated)
- [getEscalationPeriod](VotingReputationClientV1.md#getescalationperiod)
- [getExpenditureMotionCount](VotingReputationClientV1.md#getexpendituremotioncount)
- [getExpenditurePastVote](VotingReputationClientV1.md#getexpenditurepastvote)
- [getMaxVoteFraction](VotingReputationClientV1.md#getmaxvotefraction)
- [getMotion](VotingReputationClientV1.md#getmotion)
- [getMotionCount](VotingReputationClientV1.md#getmotioncount)
- [getMotionState](VotingReputationClientV1.md#getmotionstate)
- [getRevealPeriod](VotingReputationClientV1.md#getrevealperiod)
- [getStake](VotingReputationClientV1.md#getstake)
- [getStakePeriod](VotingReputationClientV1.md#getstakeperiod)
- [getStakerReward](VotingReputationClientV1.md#getstakerreward)
- [getSubmitPeriod](VotingReputationClientV1.md#getsubmitperiod)
- [getTotalStakeFraction](VotingReputationClientV1.md#gettotalstakefraction)
- [getUserMinStakeFraction](VotingReputationClientV1.md#getuserminstakefraction)
- [getVoterReward](VotingReputationClientV1.md#getvoterreward)
- [getVoterRewardFraction](VotingReputationClientV1.md#getvoterrewardfraction)
- [identifier](VotingReputationClientV1.md#identifier)
- [initialise](VotingReputationClientV1.md#initialise)
- [install](VotingReputationClientV1.md#install)
- [listenerCount](VotingReputationClientV1.md#listenercount)
- [listeners](VotingReputationClientV1.md#listeners)
- [owner](VotingReputationClientV1.md#owner)
- [queryFilter](VotingReputationClientV1.md#queryfilter)
- [removeAllListeners](VotingReputationClientV1.md#removealllisteners)
- [revealVote](VotingReputationClientV1.md#revealvote)
- [setAuthority](VotingReputationClientV1.md#setauthority)
- [setOwner](VotingReputationClientV1.md#setowner)
- [stakeMotion](VotingReputationClientV1.md#stakemotion)
- [stakeMotionWithProofs](VotingReputationClientV1.md#stakemotionwithproofs)
- [submitVote](VotingReputationClientV1.md#submitvote)
- [uninstall](VotingReputationClientV1.md#uninstall)
- [version](VotingReputationClientV1.md#version)

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
| `claimReward` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `createClaimDelayAction` | (`action`: `BytesLike`, `value`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `createDomainMotion` | (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `createRootMotion` | (`_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `escalateMotion` | (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finalizeMotion` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finishUpgrade` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getEscalationPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getExpenditureMotionCount` | (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getExpenditurePastVote` | (`_actionHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMaxVoteFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMotion` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`MotionStructOutput`\> |
| `getMotionCount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMotionState` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `getRevealPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStake` | (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStakePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStakerReward` | (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getSubmitPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUserMinStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getVoterReward` | (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getVoterRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `initialise` | (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `install` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `revealVote` | (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `stakeMotion` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `submitVote` | (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
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

• **clientVersion**: ``1``

#### Overrides

AugmentedVotingReputation.clientVersion

___

### colonyClient

• **colonyClient**: `AugmentedIColony`<`AnyIColony`\>

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

• **estimateGas**: { `authority`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `claimReward`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createClaimDelayAction`: (`action`: `BytesLike`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createDomainMotion`: (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createRootMotion`: (`_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `deprecate`: (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `escalateMotion`: (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finalizeMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finishUpgrade`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `getColony`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getDeprecated`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getEscalationPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditureMotionCount`: (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditurePastVote`: (`_actionHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMaxVoteFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionCount`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionState`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getRevealPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStake`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakePeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakerReward`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getSubmitPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getTotalStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getUserMinStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterReward`: (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterRewardFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `identifier`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `initialise`: (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `install`: (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `owner`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `revealVote`: (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setAuthority`: (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setOwner`: (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `stakeMotion`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `submitVote`: (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `uninstall`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `version`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\>  } & { `authority`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `claimReward`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createClaimDelayAction`: (`action`: `BytesLike`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createDomainMotion`: (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createRootMotion`: (`_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `deprecate`: (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `escalateMotion`: (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finalizeMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finishUpgrade`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `getColony`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getDeprecated`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getEscalationPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditureMotionCount`: (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditurePastVote`: (`_actionHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMaxVoteFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionCount`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionState`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getRevealPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStake`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakePeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakerReward`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getSubmitPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getTotalStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getUserMinStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterReward`: (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterRewardFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `identifier`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `initialise`: (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `install`: (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `owner`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `revealVote`: (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setAuthority`: (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setOwner`: (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `stakeMotion`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `submitVote`: (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `uninstall`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `version`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\>  } & { `claimRewardWithProofs`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `TxOverrides`) => `Promise`<`BigNumber`\> ; `createDomainMotionWithProofs`: (`_domainId`: `BigNumberish`, `_action`: `BytesLike`, `overrides?`: `TxOverrides`) => `Promise`<`BigNumber`\> ; `escalateMotionWithProofs`: (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `overrides?`: `TxOverrides`) => `Promise`<`BigNumber`\> ; `stakeMotionWithProofs`: (`_motionId`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `TxOverrides`) => `Promise`<`BigNumber`\>  } & { `authority`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `claimReward`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createClaimDelayAction`: (`action`: `BytesLike`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createDomainMotion`: (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createRootMotion`: (`_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `deprecate`: (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `escalateMotion`: (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finalizeMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finishUpgrade`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `getColony`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getDeprecated`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getEscalationPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditureMotionCount`: (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditurePastVote`: (`_actionHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMaxVoteFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionCount`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionState`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getRevealPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStake`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakePeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakerReward`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getSubmitPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getTotalStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getUserMinStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterReward`: (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterRewardFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `identifier`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `initialise`: (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `install`: (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `owner`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `revealVote`: (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setAuthority`: (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setOwner`: (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `stakeMotion`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `submitVote`: (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `uninstall`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `version`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\>  } & { `authority`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `claimReward`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createClaimDelayAction`: (`action`: `BytesLike`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createDomainMotion`: (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createRootMotion`: (`_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `deprecate`: (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `escalateMotion`: (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finalizeMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finishUpgrade`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `getColony`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getDeprecated`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getEscalationPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditureMotionCount`: (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditurePastVote`: (`_actionHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMaxVoteFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionCount`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionState`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getRevealPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStake`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakePeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakerReward`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getSubmitPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getTotalStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getUserMinStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterReward`: (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterRewardFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `identifier`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `initialise`: (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `install`: (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `owner`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `revealVote`: (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setAuthority`: (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setOwner`: (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `stakeMotion`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `submitVote`: (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `uninstall`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `version`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\>  } & { `authority`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `claimReward`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createClaimDelayAction`: (`action`: `BytesLike`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createDomainMotion`: (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createMotion`: (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createRootMotion`: (`_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `deprecate`: (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `escalateMotion`: (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finalizeMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finishUpgrade`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `getCapabilityRoles`: (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getColony`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getDeprecated`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getEscalationPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditureMotionCount`: (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditurePastVote`: (`_actionHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMaxVoteFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionCount`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionState`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getRevealPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStake`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakePeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakerReward`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getSubmitPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getTotalStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getUserMinStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterReward`: (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterRewardFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterRewardRange`: (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `_voterAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `identifier`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `initialise`: (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `install`: (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `owner`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `revealVote`: (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setAuthority`: (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setOwner`: (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `stakeMotion`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `submitVote`: (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `uninstall`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `version`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\>  } & { `claimRewardWithProofs`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `TxOverrides`) => `Promise`<`BigNumber`\> ; `createDomainMotionWithProofs`: (`_domainId`: `BigNumberish`, `_action`: `BytesLike`, `overrides?`: `TxOverrides`) => `Promise`<`BigNumber`\> ; `escalateMotionWithProofs`: (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `overrides?`: `TxOverrides`) => `Promise`<`BigNumber`\> ; `stakeMotionWithProofs`: (`_motionId`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `TxOverrides`) => `Promise`<`BigNumber`\>  } & { `authority`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `claimReward`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createClaimDelayAction`: (`action`: `BytesLike`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createDomainMotion`: (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createRootMotion`: (`_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `deprecate`: (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `escalateMotion`: (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finalizeMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finishUpgrade`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `getColony`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getDeprecated`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getEscalationPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditureMotionCount`: (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditurePastVote`: (`_actionHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMaxVoteFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionCount`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionState`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getRevealPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStake`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakePeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakerReward`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getSubmitPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getTotalStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getUserMinStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterReward`: (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterRewardFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `identifier`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `initialise`: (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `install`: (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `owner`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `revealVote`: (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setAuthority`: (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setOwner`: (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `stakeMotion`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `submitVote`: (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `uninstall`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `version`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\>  } & { `authority`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `claimReward`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createClaimDelayAction`: (`action`: `BytesLike`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createDomainMotion`: (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createRootMotion`: (`_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `deprecate`: (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `escalateMotion`: (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finalizeMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finishUpgrade`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `getColony`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getDeprecated`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getEscalationPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditureMotionCount`: (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditurePastVote`: (`_actionHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMaxVoteFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionCount`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionState`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getRevealPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStake`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakePeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakerReward`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getSubmitPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getTotalStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getUserMinStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterReward`: (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterRewardFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `identifier`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `initialise`: (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `install`: (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `owner`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `revealVote`: (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setAuthority`: (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setOwner`: (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `stakeMotion`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `submitVote`: (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `uninstall`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `version`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\>  } & { `authority`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `claimReward`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createClaimDelayAction`: (`action`: `BytesLike`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createDomainMotion`: (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createMotion`: (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createRootMotion`: (`_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `deprecate`: (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `escalateMotion`: (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `failingExecutionAllowed`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `finalizeMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finishUpgrade`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `getCapabilityRoles`: (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getColony`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getDeprecated`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getEscalationPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditureMotionCount`: (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditurePastVote`: (`_actionHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMaxVoteFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionCount`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionState`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getRevealPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStake`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakePeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakerReward`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getSubmitPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getTotalStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getUserMinStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterReward`: (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterRewardFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterRewardRange`: (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `_voterAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `identifier`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `initialise`: (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `install`: (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `owner`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `revealVote`: (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setAuthority`: (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setOwner`: (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `stakeMotion`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `submitVote`: (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `uninstall`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `version`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\>  } & { `claimRewardWithProofs`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `TxOverrides`) => `Promise`<`BigNumber`\> ; `createDomainMotionWithProofs`: (`_domainId`: `BigNumberish`, `_action`: `BytesLike`, `overrides?`: `TxOverrides`) => `Promise`<`BigNumber`\> ; `escalateMotionWithProofs`: (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `overrides?`: `TxOverrides`) => `Promise`<`BigNumber`\> ; `stakeMotionWithProofs`: (`_motionId`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `TxOverrides`) => `Promise`<`BigNumber`\>  } & { `authority`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `claimReward`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createClaimDelayAction`: (`action`: `BytesLike`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createDomainMotion`: (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createRootMotion`: (`_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `deprecate`: (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `escalateMotion`: (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finalizeMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finishUpgrade`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `getColony`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getDeprecated`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getEscalationPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditureMotionCount`: (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditurePastVote`: (`_actionHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMaxVoteFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionCount`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionState`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getRevealPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStake`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakePeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakerReward`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getSubmitPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getTotalStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getUserMinStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterReward`: (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterRewardFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `identifier`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `initialise`: (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `install`: (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `owner`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `revealVote`: (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setAuthority`: (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setOwner`: (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `stakeMotion`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `submitVote`: (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `uninstall`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `version`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\>  } & { `authority`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `claimReward`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createClaimDelayAction`: (`action`: `BytesLike`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createDomainMotion`: (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createRootMotion`: (`_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `deprecate`: (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `escalateMotion`: (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finalizeMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finishUpgrade`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `getColony`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getDeprecated`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getEscalationPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditureMotionCount`: (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditurePastVote`: (`_actionHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMaxVoteFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionCount`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionState`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getRevealPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStake`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakePeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakerReward`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getSubmitPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getTotalStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getUserMinStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterReward`: (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterRewardFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `identifier`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `initialise`: (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `install`: (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `owner`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `revealVote`: (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setAuthority`: (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setOwner`: (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `stakeMotion`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `submitVote`: (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `uninstall`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `version`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\>  } & { `authority`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `claimReward`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createClaimDelayAction`: (`action`: `BytesLike`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createDomainMotion`: (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createMotion`: (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `createRootMotion`: (`_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `deprecate`: (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `escalateMotion`: (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `executeMetaTransaction`: (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `failingExecutionAllowed`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `finalizeMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `finishUpgrade`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `getCapabilityRoles`: (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getChainId`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getColony`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getDeprecated`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getEscalationPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditureMotionCount`: (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getExpenditurePastVote`: (`_actionHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMaxVoteFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMetatransactionNonce`: (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotion`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionCount`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMotionState`: (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getRevealPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStake`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakePeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getStakerReward`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getSubmitPeriod`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getTotalStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getUserMinStakeFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterReward`: (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterRewardFraction`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getVoterRewardRange`: (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `_voterAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `identifier`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `initialise`: (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `install`: (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `owner`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `revealVote`: (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setAuthority`: (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setOwner`: (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `stakeMotion`: (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `submitVote`: (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `uninstall`: (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> ; `verify`: (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `version`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\>  } & { `claimRewardWithProofs`: (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `TxOverrides`) => `Promise`<`BigNumber`\> ; `createDomainMotionWithProofs`: (`_domainId`: `BigNumberish`, `_action`: `BytesLike`, `overrides?`: `TxOverrides`) => `Promise`<`BigNumber`\> ; `escalateMotionWithProofs`: (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `overrides?`: `TxOverrides`) => `Promise`<`BigNumber`\> ; `stakeMotionWithProofs`: (`_motionId`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `TxOverrides`) => `Promise`<`BigNumber`\>  }

#### Inherited from

AugmentedVotingReputation.estimateGas

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ExtensionInitialised` | () => `ExtensionInitialisedEventFilter` |
| `ExtensionInitialised()` | () => `ExtensionInitialisedEventFilter` |
| `LogSetAuthority` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetOwner` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
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
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `claimReward` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createClaimDelayAction` | (`action`: `BytesLike`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createDomainMotion` | (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createRootMotion` | (`_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `escalateMotion` | (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finalizeMotion` | (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getEscalationPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getExpenditureMotionCount` | (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getExpenditurePastVote` | (`_actionHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getMaxVoteFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getMotion` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`MotionStructOutput`] & { `motion`: `MotionStructOutput`  }\> |
| `getMotionCount` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getMotionState` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `getRevealPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getStake` | (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getStakePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getStakerReward` | (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`]\> |
| `getSubmitPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTotalStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getUserMinStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getVoterReward` | (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getVoterRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `initialise` | (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `revealVote` | (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `stakeMotion` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `submitVote` | (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
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

• **off**: `OnEvent`<[`VotingReputationClientV1`](VotingReputationClientV1.md)\>

#### Inherited from

AugmentedVotingReputation.off

___

### on

• **on**: `OnEvent`<[`VotingReputationClientV1`](VotingReputationClientV1.md)\>

#### Inherited from

AugmentedVotingReputation.on

___

### once

• **once**: `OnEvent`<[`VotingReputationClientV1`](VotingReputationClientV1.md)\>

#### Inherited from

AugmentedVotingReputation.once

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `claimReward` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createClaimDelayAction` | (`action`: `BytesLike`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createDomainMotion` | (`_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createRootMotion` | (`_altTarget`: `string`, `_action`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `escalateMotion` | (`_motionId`: `BigNumberish`, `_newDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finalizeMotion` | (`_motionId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getEscalationPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExpenditureMotionCount` | (`_structHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExpenditurePastVote` | (`_actionHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMaxVoteFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMotion` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMotionCount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMotionState` | (`_motionId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getRevealPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStake` | (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStakePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStakerReward` | (`_motionId`: `BigNumberish`, `_staker`: `string`, `_vote`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSubmitPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTotalStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getUserMinStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getVoterReward` | (`_motionId`: `BigNumberish`, `_voterRep`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getVoterRewardFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialise` | (`_totalStakeFraction`: `BigNumberish`, `_voterRewardFraction`: `BigNumberish`, `_userMinStakeFraction`: `BigNumberish`, `_maxVoteFraction`: `BigNumberish`, `_stakePeriod`: `BigNumberish`, `_submitPeriod`: `BigNumberish`, `_revealPeriod`: `BigNumberish`, `_escalationPeriod`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `revealVote` | (`_motionId`: `BigNumberish`, `_salt`: `BytesLike`, `_vote`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `stakeMotion` | (`_motionId`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_vote`: `BigNumberish`, `_amount`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `submitVote` | (`_motionId`: `BigNumberish`, `_voteSecret`: `BytesLike`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
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

• **removeListener**: `OnEvent`<[`VotingReputationClientV1`](VotingReputationClientV1.md)\>

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

▸ **attach**(`addressOrName`): [`VotingReputationClientV1`](VotingReputationClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`VotingReputationClientV1`](VotingReputationClientV1.md)

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
| `_motionId` | `BigNumberish` | The id of the motion |
| `_permissionDomainId` | `BigNumberish` | The domain where the extension has the arbitration permission |
| `_childSkillIndex` | `BigNumberish` | For the domain in which the motion is occurring |
| `_staker` | `string` | The staker whose reward is being claimed |
| `_vote` | `BigNumberish` | The side being supported (0 = NAY, 1 = YAY) |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.claimReward

___

### claimRewardWithProofs

▸ **claimRewardWithProofs**(`_motionId`, `_staker`, `_vote`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [claimReward](VotingReputationClientV1.md#claimreward), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_motionId` | `BigNumberish` | The id of the motion |
| `_staker` | `string` | The staker whose reward is being claimed |
| `_vote` | `BigNumberish` | The side being supported (0 = NAY, 1 = YAY) |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.claimRewardWithProofs

___

### connect

▸ **connect**(`signerOrProvider`): [`VotingReputationClientV1`](VotingReputationClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`VotingReputationClientV1`](VotingReputationClientV1.md)

#### Inherited from

AugmentedVotingReputation.connect

___

### createClaimDelayAction

▸ **createClaimDelayAction**(`action`, `value`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `BytesLike` |
| `value` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.createClaimDelayAction

___

### createDomainMotion

▸ **createDomainMotion**(`_domainId`, `_childSkillIndex`, `_action`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

Create a motion in any domain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_domainId` | `BigNumberish` | The domain where we vote on the motion |
| `_childSkillIndex` | `BigNumberish` | The childSkillIndex pointing to the domain of the action |
| `_action` | `BytesLike` | A bytes array encoding a function call |
| `_key` | `BytesLike` | Reputation tree key for the domain |
| `_value` | `BytesLike` | Reputation tree value for the domain |
| `_branchMask` | `BigNumberish` | The branchmask of the proof |
| `_siblings` | `BytesLike`[] | The siblings of the proof |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.createDomainMotion

___

### createDomainMotionWithProofs

▸ **createDomainMotionWithProofs**(`_domainId`, `_action`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [createDomainMotion](VotingReputationClientV1.md#createdomainmotion), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_domainId` | `BigNumberish` | The domain where we vote on the motion |
| `_action` | `BytesLike` | A bytes array encoding a function call |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.createDomainMotionWithProofs

___

### createRootMotion

▸ **createRootMotion**(`_altTarget`, `_action`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

Create a motion in the root domain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_altTarget` | `string` | The contract to which we send the action (0x0 for the colony) |
| `_action` | `BytesLike` | A bytes array encoding a function call |
| `_key` | `BytesLike` | Reputation tree key for the root domain |
| `_value` | `BytesLike` | Reputation tree value for the root domain |
| `_branchMask` | `BigNumberish` | The branchmask of the proof |
| `_siblings` | `BytesLike`[] | The siblings of the proof |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.createRootMotion

___

### deployed

▸ **deployed**(): `Promise`<[`VotingReputationClientV1`](VotingReputationClientV1.md)\>

#### Returns

`Promise`<[`VotingReputationClientV1`](VotingReputationClientV1.md)\>

#### Inherited from

AugmentedVotingReputation.deployed

___

### deprecate

▸ **deprecate**(`_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

Called when deprecating (or undeprecating) the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `_deprecated` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.deprecate

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

AugmentedVotingReputation.emit

___

### escalateMotion

▸ **escalateMotion**(`_motionId`, `_newDomainId`, `_childSkillIndex`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

Escalate a motion to a higher domain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_motionId` | `BigNumberish` | The id of the motion |
| `_newDomainId` | `BigNumberish` | The desired domain of escalation |
| `_childSkillIndex` | `BigNumberish` | For the current domain, relative to the escalated domain |
| `_key` | `BytesLike` | Reputation tree key for the new domain |
| `_value` | `BytesLike` | Reputation tree value for the new domain |
| `_branchMask` | `BigNumberish` | The branchmask of the proof |
| `_siblings` | `BytesLike`[] | The siblings of the proof |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.escalateMotion

___

### escalateMotionWithProofs

▸ **escalateMotionWithProofs**(`_motionId`, `_newDomainId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [escalateMotion](VotingReputationClientV1.md#escalatemotion), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_motionId` | `BigNumberish` | The id of the motion |
| `_newDomainId` | `BigNumberish` | The desired domain of escalation |
| `overrides?` | `TxOverrides` | - |

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
| `_motionId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

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
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.finishUpgrade

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
| `_structHash` | `BytesLike` | The hash of the expenditureId or expenditureId*expenditureSlot |
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
| `_actionHash` | `BytesLike` | The hash of the particular expenditure action |
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
| `_motionId` | `BigNumberish` | The id of the motion |
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
| `_motionId` | `BigNumberish` |
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
| `_motionId` | `BigNumberish` | The id of the motion |
| `_staker` | `string` | The staker address |
| `_vote` | `BigNumberish` | The side being supported (0 = NAY, 1 = YAY) |
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
| `_motionId` | `BigNumberish` | The id of the motion |
| `_staker` | `string` | The staker's address |
| `_vote` | `BigNumberish` | The vote (0 = NAY, 1 = YAY) |
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

Get the voter reward

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_motionId` | `BigNumberish` | The id of the motion |
| `_voterRep` | `BigNumberish` | The reputation the voter has in the domain |
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
| `_totalStakeFraction` | `BigNumberish` | The fraction of the domain's reputation we need to stake |
| `_voterRewardFraction` | `BigNumberish` | The fraction of the total stake paid out to voters as rewards |
| `_userMinStakeFraction` | `BigNumberish` | The minimum per-user stake as fraction of total stake |
| `_maxVoteFraction` | `BigNumberish` | The fraction of the domain's reputation which must submit for quick-end |
| `_stakePeriod` | `BigNumberish` | The length of the staking period in seconds |
| `_submitPeriod` | `BigNumberish` | The length of the submit period in seconds |
| `_revealPeriod` | `BigNumberish` | The length of the reveal period in seconds |
| `_escalationPeriod` | `BigNumberish` | The length of the escalation period in seconds |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_colony` | `string` | Base colony for the installation |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`VotingReputationClientV1`](VotingReputationClientV1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`VotingReputationClientV1`](VotingReputationClientV1.md)

#### Inherited from

AugmentedVotingReputation.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`VotingReputationClientV1`](VotingReputationClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`VotingReputationClientV1`](VotingReputationClientV1.md)

#### Inherited from

AugmentedVotingReputation.removeAllListeners

___

### revealVote

▸ **revealVote**(`_motionId`, `_salt`, `_vote`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

Reveal a vote secret for a motion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_motionId` | `BigNumberish` | The id of the motion |
| `_salt` | `BytesLike` | The salt used to hash the vote |
| `_vote` | `BigNumberish` | The side being supported (0 = NAY, 1 = YAY) |
| `_key` | `BytesLike` | Reputation tree key for the staker/domain |
| `_value` | `BytesLike` | Reputation tree value for the staker/domain |
| `_branchMask` | `BigNumberish` | The branchmask of the proof |
| `_siblings` | `BytesLike`[] | The siblings of the proof |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `authority_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

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
| `owner_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

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
| `_motionId` | `BigNumberish` | The id of the motion |
| `_permissionDomainId` | `BigNumberish` | The domain where the extension has the arbitration permission |
| `_childSkillIndex` | `BigNumberish` | For the domain in which the motion is occurring |
| `_vote` | `BigNumberish` | The side being supported (0 = NAY, 1 = YAY) |
| `_amount` | `BigNumberish` | The amount of tokens being staked |
| `_key` | `BytesLike` | Reputation tree key for the staker/domain |
| `_value` | `BytesLike` | Reputation tree value for the staker/domain |
| `_branchMask` | `BigNumberish` | The branchmask of the proof |
| `_siblings` | `BytesLike`[] | The siblings of the proof |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedVotingReputation.stakeMotion

___

### stakeMotionWithProofs

▸ **stakeMotionWithProofs**(`_motionId`, `_vote`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [stakeMotion](VotingReputationClientV1.md#stakemotion), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_motionId` | `BigNumberish` | The id of the motion |
| `_vote` | `BigNumberish` | The side being supported (0 = NAY, 1 = YAY) |
| `_amount` | `BigNumberish` | The amount of tokens being staked |
| `overrides?` | `TxOverrides` | - |

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
| `_motionId` | `BigNumberish` | The id of the motion |
| `_voteSecret` | `BytesLike` | The hashed vote secret |
| `_key` | `BytesLike` | Reputation tree key for the staker/domain |
| `_value` | `BytesLike` | Reputation tree value for the staker/domain |
| `_branchMask` | `BigNumberish` | The branchmask of the proof |
| `_siblings` | `BytesLike`[] | The siblings of the proof |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

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
