[ColonyJS](../README.md) / [Exports](../modules.md) / ColonyClientV2

# Interface: ColonyClientV2

## Hierarchy

- `AugmentedIColony`<`IColony`\>

- `AddDomainAugmentsA`<`IColony`\>

- `SetPaymentDomainAugments`<`IColony`\>

- `MoveFundsBetweenPotsAugmentsA`<`IColony`\>

  ↳ **`ColonyClientV2`**

## Table of contents

### Properties

- [\_deployedPromise](ColonyClientV2.md#_deployedpromise)
- [\_runningEvents](ColonyClientV2.md#_runningevents)
- [\_wrappedEmits](ColonyClientV2.md#_wrappedemits)
- [address](ColonyClientV2.md#address)
- [callStatic](ColonyClientV2.md#callstatic)
- [clientType](ColonyClientV2.md#clienttype)
- [clientVersion](ColonyClientV2.md#clientversion)
- [colonyEvents](ColonyClientV2.md#colonyevents)
- [deployTransaction](ColonyClientV2.md#deploytransaction)
- [estimateGas](ColonyClientV2.md#estimategas)
- [filters](ColonyClientV2.md#filters)
- [functions](ColonyClientV2.md#functions)
- [interface](ColonyClientV2.md#interface)
- [networkClient](ColonyClientV2.md#networkclient)
- [off](ColonyClientV2.md#off)
- [on](ColonyClientV2.md#on)
- [once](ColonyClientV2.md#once)
- [populateTransaction](ColonyClientV2.md#populatetransaction)
- [provider](ColonyClientV2.md#provider)
- [removeListener](ColonyClientV2.md#removelistener)
- [resolvedAddress](ColonyClientV2.md#resolvedaddress)
- [signer](ColonyClientV2.md#signer)
- [tokenClient](ColonyClientV2.md#tokenclient)

### Methods

- [\_checkRunningEvents](ColonyClientV2.md#_checkrunningevents)
- [\_deployed](ColonyClientV2.md#_deployed)
- [\_wrapEvent](ColonyClientV2.md#_wrapevent)
- [addDomain](ColonyClientV2.md#adddomain)
- [addDomainWithProofs](ColonyClientV2.md#adddomainwithproofs)
- [addPayment](ColonyClientV2.md#addpayment)
- [addPaymentWithProofs](ColonyClientV2.md#addpaymentwithproofs)
- [approveExitRecovery](ColonyClientV2.md#approveexitrecovery)
- [attach](ColonyClientV2.md#attach)
- [authority](ColonyClientV2.md#authority)
- [bootstrapColony](ColonyClientV2.md#bootstrapcolony)
- [cancelTask](ColonyClientV2.md#canceltask)
- [checkNotAdditionalProtectedVariable](ColonyClientV2.md#checknotadditionalprotectedvariable)
- [claimColonyFunds](ColonyClientV2.md#claimcolonyfunds)
- [claimPayment](ColonyClientV2.md#claimpayment)
- [claimRewardPayout](ColonyClientV2.md#claimrewardpayout)
- [claimTaskPayout](ColonyClientV2.md#claimtaskpayout)
- [completeTask](ColonyClientV2.md#completetask)
- [connect](ColonyClientV2.md#connect)
- [deployed](ColonyClientV2.md#deployed)
- [emit](ColonyClientV2.md#emit)
- [enterRecoveryMode](ColonyClientV2.md#enterrecoverymode)
- [executeTaskChange](ColonyClientV2.md#executetaskchange)
- [executeTaskRoleAssignment](ColonyClientV2.md#executetaskroleassignment)
- [exitRecoveryMode](ColonyClientV2.md#exitrecoverymode)
- [fallback](ColonyClientV2.md#fallback)
- [finalizePayment](ColonyClientV2.md#finalizepayment)
- [finalizePaymentWithProofs](ColonyClientV2.md#finalizepaymentwithproofs)
- [finalizeRewardPayout](ColonyClientV2.md#finalizerewardpayout)
- [finalizeTask](ColonyClientV2.md#finalizetask)
- [generateSecret](ColonyClientV2.md#generatesecret)
- [getColonyNetwork](ColonyClientV2.md#getcolonynetwork)
- [getDomain](ColonyClientV2.md#getdomain)
- [getDomainCount](ColonyClientV2.md#getdomaincount)
- [getExtensionClient](ColonyClientV2.md#getextensionclient)
- [getFundingPot](ColonyClientV2.md#getfundingpot)
- [getFundingPotBalance](ColonyClientV2.md#getfundingpotbalance)
- [getFundingPotCount](ColonyClientV2.md#getfundingpotcount)
- [getFundingPotPayout](ColonyClientV2.md#getfundingpotpayout)
- [getMembersReputation](ColonyClientV2.md#getmembersreputation)
- [getNonRewardPotsTotal](ColonyClientV2.md#getnonrewardpotstotal)
- [getPayment](ColonyClientV2.md#getpayment)
- [getPaymentCount](ColonyClientV2.md#getpaymentcount)
- [getReputation](ColonyClientV2.md#getreputation)
- [getReputationAcrossDomains](ColonyClientV2.md#getreputationacrossdomains)
- [getReputationWithoutProofs](ColonyClientV2.md#getreputationwithoutproofs)
- [getRewardInverse](ColonyClientV2.md#getrewardinverse)
- [getRewardPayoutInfo](ColonyClientV2.md#getrewardpayoutinfo)
- [getTask](ColonyClientV2.md#gettask)
- [getTaskChangeNonce](ColonyClientV2.md#gettaskchangenonce)
- [getTaskCount](ColonyClientV2.md#gettaskcount)
- [getTaskPayout](ColonyClientV2.md#gettaskpayout)
- [getTaskRole](ColonyClientV2.md#gettaskrole)
- [getTaskWorkRatingSecret](ColonyClientV2.md#gettaskworkratingsecret)
- [getTaskWorkRatingSecretsInfo](ColonyClientV2.md#gettaskworkratingsecretsinfo)
- [getToken](ColonyClientV2.md#gettoken)
- [hasUserRole](ColonyClientV2.md#hasuserrole)
- [initialiseColony](ColonyClientV2.md#initialisecolony)
- [isInRecoveryMode](ColonyClientV2.md#isinrecoverymode)
- [listenerCount](ColonyClientV2.md#listenercount)
- [listeners](ColonyClientV2.md#listeners)
- [makeTask](ColonyClientV2.md#maketask)
- [makeTaskWithProofs](ColonyClientV2.md#maketaskwithproofs)
- [mintTokens](ColonyClientV2.md#minttokens)
- [moveFundsBetweenPots](ColonyClientV2.md#movefundsbetweenpots)
- [moveFundsBetweenPotsWithProofs](ColonyClientV2.md#movefundsbetweenpotswithproofs)
- [numRecoveryRoles](ColonyClientV2.md#numrecoveryroles)
- [owner](ColonyClientV2.md#owner)
- [queryFilter](ColonyClientV2.md#queryfilter)
- [registerColonyLabel](ColonyClientV2.md#registercolonylabel)
- [removeAllListeners](ColonyClientV2.md#removealllisteners)
- [removeRecoveryRole](ColonyClientV2.md#removerecoveryrole)
- [removeTaskEvaluatorRole](ColonyClientV2.md#removetaskevaluatorrole)
- [removeTaskWorkerRole](ColonyClientV2.md#removetaskworkerrole)
- [revealTaskWorkRating](ColonyClientV2.md#revealtaskworkrating)
- [setAdministrationRole](ColonyClientV2.md#setadministrationrole)
- [setAdministrationRoleWithProofs](ColonyClientV2.md#setadministrationrolewithproofs)
- [setAllTaskPayouts](ColonyClientV2.md#setalltaskpayouts)
- [setArchitectureRole](ColonyClientV2.md#setarchitecturerole)
- [setArchitectureRoleWithProofs](ColonyClientV2.md#setarchitecturerolewithproofs)
- [setFundingRole](ColonyClientV2.md#setfundingrole)
- [setFundingRoleWithProofs](ColonyClientV2.md#setfundingrolewithproofs)
- [setPaymentDomain](ColonyClientV2.md#setpaymentdomain)
- [setPaymentDomainWithProofs](ColonyClientV2.md#setpaymentdomainwithproofs)
- [setPaymentPayout](ColonyClientV2.md#setpaymentpayout)
- [setPaymentPayoutWithProofs](ColonyClientV2.md#setpaymentpayoutwithproofs)
- [setPaymentRecipient](ColonyClientV2.md#setpaymentrecipient)
- [setPaymentRecipientWithProofs](ColonyClientV2.md#setpaymentrecipientwithproofs)
- [setPaymentSkill](ColonyClientV2.md#setpaymentskill)
- [setPaymentSkillWithProofs](ColonyClientV2.md#setpaymentskillwithproofs)
- [setRecoveryRole](ColonyClientV2.md#setrecoveryrole)
- [setRewardInverse](ColonyClientV2.md#setrewardinverse)
- [setRootRole](ColonyClientV2.md#setrootrole)
- [setStorageSlotRecovery](ColonyClientV2.md#setstorageslotrecovery)
- [setTaskBrief](ColonyClientV2.md#settaskbrief)
- [setTaskDomain](ColonyClientV2.md#settaskdomain)
- [setTaskDueDate](ColonyClientV2.md#settaskduedate)
- [setTaskEvaluatorPayout](ColonyClientV2.md#settaskevaluatorpayout)
- [setTaskEvaluatorRole](ColonyClientV2.md#settaskevaluatorrole)
- [setTaskManagerPayout](ColonyClientV2.md#settaskmanagerpayout)
- [setTaskManagerRole](ColonyClientV2.md#settaskmanagerrole)
- [setTaskSkill](ColonyClientV2.md#settaskskill)
- [setTaskWorkerPayout](ColonyClientV2.md#settaskworkerpayout)
- [setTaskWorkerRole](ColonyClientV2.md#settaskworkerrole)
- [startNextRewardPayout](ColonyClientV2.md#startnextrewardpayout)
- [submitTaskDeliverable](ColonyClientV2.md#submittaskdeliverable)
- [submitTaskDeliverableAndRating](ColonyClientV2.md#submittaskdeliverableandrating)
- [submitTaskWorkRating](ColonyClientV2.md#submittaskworkrating)
- [upgrade](ColonyClientV2.md#upgrade)
- [verifyReputationProof](ColonyClientV2.md#verifyreputationproof)
- [version](ColonyClientV2.md#version)

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

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addDomain` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_parentDomainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addPayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_recipient`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approveExitRecovery` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `bootstrapColony` | (`_users`: `string`[], `_amount`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelTask` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `checkNotAdditionalProtectedVariable` | (`_slot`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimColonyFunds` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimPayment` | (`_id`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimRewardPayout` | (`_payoutId`: `BigNumberish`, `_squareRoots`: `BigNumberish`[], `key`: `BytesLike`, `value`: `BytesLike`, `branchMask`: `BigNumberish`, `siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimTaskPayout` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `completeTask` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `enterRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeTaskChange` | (`_sigV`: `BigNumberish`[], `_sigR`: `BytesLike`[], `_sigS`: `BytesLike`[], `_mode`: `BigNumberish`[], `_value`: `BigNumberish`, `_data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeTaskRoleAssignment` | (`_sigV`: `BigNumberish`[], `_sigR`: `BytesLike`[], `_sigS`: `BytesLike`[], `_mode`: `BigNumberish`[], `_value`: `BigNumberish`, `_data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `exitRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finalizePayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finalizeRewardPayout` | (`_payoutId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finalizeTask` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `generateSecret` | (`_salt`: `BytesLike`, `_value`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColonyNetwork` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getDomain` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `fundingPotId`: `BigNumber` ; `skillId`: `BigNumber`  }\> |
| `getDomainCount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getFundingPot` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`] & { `associatedType`: `number` ; `associatedTypeId`: `BigNumber` ; `payoutsWeCannotMake`: `BigNumber`  }\> |
| `getFundingPotBalance` | (`_potId`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getFundingPotCount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getFundingPotPayout` | (`_potId`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getNonRewardPotsTotal` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPayment` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`[]] & { `domainId`: `BigNumber` ; `finalized`: `boolean` ; `fundingPotId`: `BigNumber` ; `recipient`: `string` ; `skills`: `BigNumber`[]  }\> |
| `getPaymentCount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRewardInverse` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRewardPayoutInfo` | (`_payoutId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `BigNumber`] & { `amount`: `BigNumber` ; `blockTimestamp`: `BigNumber` ; `colonyWideReputation`: `BigNumber` ; `reputationState`: `string` ; `tokenAddress`: `string` ; `totalTokens`: `BigNumber`  }\> |
| `getTask` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`[]] & { `completionTimestamp`: `BigNumber` ; `deliverableHash`: `string` ; `domainId`: `BigNumber` ; `dueDate`: `BigNumber` ; `fundingPotId`: `BigNumber` ; `skillIds`: `BigNumber`[] ; `specificationHash`: `string` ; `status`: `number`  }\> |
| `getTaskChangeNonce` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTaskCount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTaskPayout` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTaskRole` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `boolean`, `number`] & { `rateFail`: `boolean` ; `rating`: `number` ; `user`: `string`  }\> |
| `getTaskWorkRatingSecret` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getTaskWorkRatingSecretsInfo` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `lastSubmittedAt`: `BigNumber` ; `nSecrets`: `BigNumber`  }\> |
| `getToken` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `hasUserRole` | (`_user`: `string`, `_domainId`: `BigNumberish`, `_role`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `initialiseColony` | (`_colonyNetworkAddress`: `string`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isInRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `makeTask` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_specificationHash`: `BytesLike`, `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `_dueDate`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `mintTokens` | (`_wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `moveFundsBetweenPots` | (`_permissionDomainId`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_fromPot`: `BigNumberish`, `_toPot`: `BigNumberish`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `numRecoveryRoles` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `registerColonyLabel` | (`colonyName`: `string`, `orbitdb`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `removeRecoveryRole` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `removeTaskEvaluatorRole` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `removeTaskWorkerRole` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `revealTaskWorkRating` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_rating`: `BigNumberish`, `_salt`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAdministrationRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAllTaskPayouts` | (`_id`: `BigNumberish`, `_token`: `string`, `_managerAmount`: `BigNumberish`, `_evaluatorAmount`: `BigNumberish`, `_workerAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setArchitectureRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setFundingRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setPaymentDomain` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_domainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setPaymentPayout` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setPaymentRecipient` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setPaymentSkill` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setRecoveryRole` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setRewardInverse` | (`_rewardInverse`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setRootRole` | (`_user`: `string`, `_setTo`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setStorageSlotRecovery` | (`_slot`: `BigNumberish`, `_value`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTaskBrief` | (`_id`: `BigNumberish`, `_specificationHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTaskDomain` | (`_id`: `BigNumberish`, `_domainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTaskDueDate` | (`_id`: `BigNumberish`, `_dueDate`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTaskEvaluatorPayout` | (`_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTaskEvaluatorRole` | (`_id`: `BigNumberish`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTaskManagerPayout` | (`_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTaskManagerRole` | (`_id`: `BigNumberish`, `_user`: `string`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTaskSkill` | (`_id`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTaskWorkerPayout` | (`_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTaskWorkerRole` | (`_id`: `BigNumberish`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `startNextRewardPayout` | (`_token`: `string`, `key`: `BytesLike`, `value`: `BytesLike`, `branchMask`: `BigNumberish`, `siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `submitTaskDeliverable` | (`_id`: `BigNumberish`, `_deliverableHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `submitTaskDeliverableAndRating` | (`_id`: `BigNumberish`, `_deliverableHash`: `BytesLike`, `_ratingSecret`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `submitTaskWorkRating` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_ratingSecret`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `upgrade` | (`_newVersion`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verifyReputationProof` | (`key`: `BytesLike`, `value`: `BytesLike`, `branchMask`: `BigNumberish`, `siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Inherited from

AugmentedIColony.callStatic

___

### clientType

• **clientType**: [`ColonyClient`](../enums/ClientType.md#colonyclient)

#### Inherited from

AugmentedIColony.clientType

___

### clientVersion

• **clientVersion**: ``2``

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

• **estimateGas**: `ColonyClientV2Estimate`

#### Overrides

AugmentedIColony.estimateGas

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ColonyBootstrapped` | (`users?`: ``null``, `amounts?`: ``null``) => `ColonyBootstrappedEventFilter` |
| `ColonyBootstrapped(address[],int256[])` | (`users?`: ``null``, `amounts?`: ``null``) => `ColonyBootstrappedEventFilter` |
| `ColonyFundsClaimed` | (`token?`: ``null``, `fee?`: ``null``, `payoutRemainder?`: ``null``) => `ColonyFundsClaimedEventFilter` |
| `ColonyFundsClaimed(address,uint256,uint256)` | (`token?`: ``null``, `fee?`: ``null``, `payoutRemainder?`: ``null``) => `ColonyFundsClaimedEventFilter` |
| `ColonyFundsMovedBetweenFundingPots` | (`fromPot?`: ``null`` \| `BigNumberish`, `toPot?`: ``null`` \| `BigNumberish`, `amount?`: ``null``, `token?`: ``null``) => `ColonyFundsMovedBetweenFundingPotsEventFilter` |
| `ColonyFundsMovedBetweenFundingPots(uint256,uint256,uint256,address)` | (`fromPot?`: ``null`` \| `BigNumberish`, `toPot?`: ``null`` \| `BigNumberish`, `amount?`: ``null``, `token?`: ``null``) => `ColonyFundsMovedBetweenFundingPotsEventFilter` |
| `ColonyInitialised` | (`colonyNetwork?`: ``null``, `token?`: ``null``) => `ColonyInitialisedEventFilter` |
| `ColonyInitialised(address,address)` | (`colonyNetwork?`: ``null``, `token?`: ``null``) => `ColonyInitialisedEventFilter` |
| `ColonyRewardInverseSet` | (`rewardInverse?`: ``null``) => `ColonyRewardInverseSetEventFilter` |
| `ColonyRewardInverseSet(uint256)` | (`rewardInverse?`: ``null``) => `ColonyRewardInverseSetEventFilter` |
| `ColonyRoleSet` | (`user?`: ``null`` \| `string`, `domainId?`: ``null`` \| `BigNumberish`, `role?`: ``null`` \| `BigNumberish`, `setTo?`: ``null``) => `ColonyRoleSetEventFilter` |
| `ColonyRoleSet(address,uint256,uint8,bool)` | (`user?`: ``null`` \| `string`, `domainId?`: ``null`` \| `BigNumberish`, `role?`: ``null`` \| `BigNumberish`, `setTo?`: ``null``) => `ColonyRoleSetEventFilter` |
| `ColonyUpgraded` | (`oldVersion?`: ``null``, `newVersion?`: ``null``) => `ColonyUpgradedEventFilter` |
| `ColonyUpgraded(uint256,uint256)` | (`oldVersion?`: ``null``, `newVersion?`: ``null``) => `ColonyUpgradedEventFilter` |
| `DomainAdded` | (`domainId?`: ``null``) => `DomainAddedEventFilter` |
| `DomainAdded(uint256)` | (`domainId?`: ``null``) => `DomainAddedEventFilter` |
| `FundingPotAdded` | (`fundingPotId?`: ``null``) => `FundingPotAddedEventFilter` |
| `FundingPotAdded(uint256)` | (`fundingPotId?`: ``null``) => `FundingPotAddedEventFilter` |
| `PaymentAdded` | (`paymentId?`: ``null``) => `PaymentAddedEventFilter` |
| `PaymentAdded(uint256)` | (`paymentId?`: ``null``) => `PaymentAddedEventFilter` |
| `PayoutClaimed` | (`fundingPotId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => `PayoutClaimedEventFilter` |
| `PayoutClaimed(uint256,address,uint256)` | (`fundingPotId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => `PayoutClaimedEventFilter` |
| `RewardPayoutClaimed` | (`rewardPayoutId?`: ``null``, `user?`: ``null``, `fee?`: ``null``, `rewardRemainder?`: ``null``) => `RewardPayoutClaimedEventFilter` |
| `RewardPayoutClaimed(uint256,address,uint256,uint256)` | (`rewardPayoutId?`: ``null``, `user?`: ``null``, `fee?`: ``null``, `rewardRemainder?`: ``null``) => `RewardPayoutClaimedEventFilter` |
| `RewardPayoutCycleEnded` | (`rewardPayoutId?`: ``null``) => `RewardPayoutCycleEndedEventFilter` |
| `RewardPayoutCycleEnded(uint256)` | (`rewardPayoutId?`: ``null``) => `RewardPayoutCycleEndedEventFilter` |
| `RewardPayoutCycleStarted` | (`rewardPayoutId?`: ``null``) => `RewardPayoutCycleStartedEventFilter` |
| `RewardPayoutCycleStarted(uint256)` | (`rewardPayoutId?`: ``null``) => `RewardPayoutCycleStartedEventFilter` |
| `TaskAdded` | (`taskId?`: ``null``) => `TaskAddedEventFilter` |
| `TaskAdded(uint256)` | (`taskId?`: ``null``) => `TaskAddedEventFilter` |
| `TaskBriefSet` | (`taskId?`: ``null`` \| `BigNumberish`, `specificationHash?`: ``null``) => `TaskBriefSetEventFilter` |
| `TaskBriefSet(uint256,bytes32)` | (`taskId?`: ``null`` \| `BigNumberish`, `specificationHash?`: ``null``) => `TaskBriefSetEventFilter` |
| `TaskCanceled` | (`taskId?`: ``null`` \| `BigNumberish`) => `TaskCanceledEventFilter` |
| `TaskCanceled(uint256)` | (`taskId?`: ``null`` \| `BigNumberish`) => `TaskCanceledEventFilter` |
| `TaskCompleted` | (`taskId?`: ``null`` \| `BigNumberish`) => `TaskCompletedEventFilter` |
| `TaskCompleted(uint256)` | (`taskId?`: ``null`` \| `BigNumberish`) => `TaskCompletedEventFilter` |
| `TaskDeliverableSubmitted` | (`taskId?`: ``null`` \| `BigNumberish`, `deliverableHash?`: ``null``) => `TaskDeliverableSubmittedEventFilter` |
| `TaskDeliverableSubmitted(uint256,bytes32)` | (`taskId?`: ``null`` \| `BigNumberish`, `deliverableHash?`: ``null``) => `TaskDeliverableSubmittedEventFilter` |
| `TaskDomainSet` | (`taskId?`: ``null`` \| `BigNumberish`, `domainId?`: ``null`` \| `BigNumberish`) => `TaskDomainSetEventFilter` |
| `TaskDomainSet(uint256,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `domainId?`: ``null`` \| `BigNumberish`) => `TaskDomainSetEventFilter` |
| `TaskDueDateSet` | (`taskId?`: ``null`` \| `BigNumberish`, `dueDate?`: ``null``) => `TaskDueDateSetEventFilter` |
| `TaskDueDateSet(uint256,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `dueDate?`: ``null``) => `TaskDueDateSetEventFilter` |
| `TaskFinalized` | (`taskId?`: ``null`` \| `BigNumberish`) => `TaskFinalizedEventFilter` |
| `TaskFinalized(uint256)` | (`taskId?`: ``null`` \| `BigNumberish`) => `TaskFinalizedEventFilter` |
| `TaskPayoutSet` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => `TaskPayoutSetEventFilter` |
| `TaskPayoutSet(uint256,uint8,address,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => `TaskPayoutSetEventFilter` |
| `TaskRoleUserSet` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `user?`: ``null`` \| `string`) => `TaskRoleUserSetEventFilter` |
| `TaskRoleUserSet(uint256,uint8,address)` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `user?`: ``null`` \| `string`) => `TaskRoleUserSetEventFilter` |
| `TaskSkillSet` | (`taskId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => `TaskSkillSetEventFilter` |
| `TaskSkillSet(uint256,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => `TaskSkillSetEventFilter` |
| `TaskWorkRatingRevealed` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `rating?`: ``null``) => `TaskWorkRatingRevealedEventFilter` |
| `TaskWorkRatingRevealed(uint256,uint8,uint8)` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `rating?`: ``null``) => `TaskWorkRatingRevealedEventFilter` |

#### Inherited from

AugmentedIColony.filters

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addDomain` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_parentDomainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addPayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_recipient`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `approveExitRecovery` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `colonyAuthority`: `string`  }\> |
| `bootstrapColony` | (`_users`: `string`[], `_amount`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelTask` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `checkNotAdditionalProtectedVariable` | (`_slot`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`void`]\> |
| `claimColonyFunds` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claimPayment` | (`_id`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claimRewardPayout` | (`_payoutId`: `BigNumberish`, `_squareRoots`: `BigNumberish`[], `key`: `BytesLike`, `value`: `BytesLike`, `branchMask`: `BigNumberish`, `siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claimTaskPayout` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `completeTask` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `enterRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `executeTaskChange` | (`_sigV`: `BigNumberish`[], `_sigR`: `BytesLike`[], `_sigS`: `BytesLike`[], `_mode`: `BigNumberish`[], `_value`: `BigNumberish`, `_data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `executeTaskRoleAssignment` | (`_sigV`: `BigNumberish`[], `_sigR`: `BytesLike`[], `_sigS`: `BytesLike`[], `_mode`: `BigNumberish`[], `_value`: `BigNumberish`, `_data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `exitRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finalizePayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finalizeRewardPayout` | (`_payoutId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finalizeTask` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `generateSecret` | (`_salt`: `BytesLike`, `_value`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `secret`: `string`  }\> |
| `getColonyNetwork` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `colonyNetwork`: `string`  }\> |
| `getDomain` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[[`BigNumber`, `BigNumber`] & { `fundingPotId`: `BigNumber` ; `skillId`: `BigNumber`  }] & { `domain`: [`BigNumber`, `BigNumber`] & { `fundingPotId`: `BigNumber` ; `skillId`: `BigNumber`  }  }\> |
| `getDomainCount` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `count`: `BigNumber`  }\> |
| `getFundingPot` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`] & { `associatedType`: `number` ; `associatedTypeId`: `BigNumber` ; `payoutsWeCannotMake`: `BigNumber`  }\> |
| `getFundingPotBalance` | (`_potId`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `balance`: `BigNumber`  }\> |
| `getFundingPotCount` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `count`: `BigNumber`  }\> |
| `getFundingPotPayout` | (`_potId`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `payout`: `BigNumber`  }\> |
| `getNonRewardPotsTotal` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `amount`: `BigNumber`  }\> |
| `getPayment` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`[]] & { `domainId`: `BigNumber` ; `finalized`: `boolean` ; `fundingPotId`: `BigNumber` ; `recipient`: `string` ; `skills`: `BigNumber`[]  }] & { `payment`: [`string`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`[]] & { `domainId`: `BigNumber` ; `finalized`: `boolean` ; `fundingPotId`: `BigNumber` ; `recipient`: `string` ; `skills`: `BigNumber`[]  }  }\> |
| `getPaymentCount` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `count`: `BigNumber`  }\> |
| `getRewardInverse` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `rewardInverse`: `BigNumber`  }\> |
| `getRewardPayoutInfo` | (`_payoutId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `BigNumber`] & { `amount`: `BigNumber` ; `blockTimestamp`: `BigNumber` ; `colonyWideReputation`: `BigNumber` ; `reputationState`: `string` ; `tokenAddress`: `string` ; `totalTokens`: `BigNumber`  }] & { `rewardPayoutCycle`: [`string`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `BigNumber`] & { `amount`: `BigNumber` ; `blockTimestamp`: `BigNumber` ; `colonyWideReputation`: `BigNumber` ; `reputationState`: `string` ; `tokenAddress`: `string` ; `totalTokens`: `BigNumber`  }  }\> |
| `getTask` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`[]] & { `completionTimestamp`: `BigNumber` ; `deliverableHash`: `string` ; `domainId`: `BigNumber` ; `dueDate`: `BigNumber` ; `fundingPotId`: `BigNumber` ; `skillIds`: `BigNumber`[] ; `specificationHash`: `string` ; `status`: `number`  }\> |
| `getTaskChangeNonce` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getTaskCount` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `count`: `BigNumber`  }\> |
| `getTaskPayout` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `amount`: `BigNumber`  }\> |
| `getTaskRole` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[[`string`, `boolean`, `number`] & { `rateFail`: `boolean` ; `rating`: `number` ; `user`: `string`  }] & { `role`: [`string`, `boolean`, `number`] & { `rateFail`: `boolean` ; `rating`: `number` ; `user`: `string`  }  }\> |
| `getTaskWorkRatingSecret` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `secret`: `string`  }\> |
| `getTaskWorkRatingSecretsInfo` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `lastSubmittedAt`: `BigNumber` ; `nSecrets`: `BigNumber`  }\> |
| `getToken` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `tokenAddress`: `string`  }\> |
| `hasUserRole` | (`_user`: `string`, `_domainId`: `BigNumberish`, `_role`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `hasRole`: `boolean`  }\> |
| `initialiseColony` | (`_colonyNetworkAddress`: `string`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isInRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `inRecoveryMode`: `boolean`  }\> |
| `makeTask` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_specificationHash`: `BytesLike`, `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `_dueDate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mintTokens` | (`_wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `moveFundsBetweenPots` | (`_permissionDomainId`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_fromPot`: `BigNumberish`, `_toPot`: `BigNumberish`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `numRecoveryRoles` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `numRoles`: `BigNumber`  }\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `colonyOwner`: `string`  }\> |
| `registerColonyLabel` | (`colonyName`: `string`, `orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeRecoveryRole` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeTaskEvaluatorRole` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeTaskWorkerRole` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `revealTaskWorkRating` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_rating`: `BigNumberish`, `_salt`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setAdministrationRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setAllTaskPayouts` | (`_id`: `BigNumberish`, `_token`: `string`, `_managerAmount`: `BigNumberish`, `_evaluatorAmount`: `BigNumberish`, `_workerAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setArchitectureRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setFundingRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setPaymentDomain` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_domainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setPaymentPayout` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setPaymentRecipient` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setPaymentSkill` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setRecoveryRole` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setRewardInverse` | (`_rewardInverse`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setRootRole` | (`_user`: `string`, `_setTo`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setStorageSlotRecovery` | (`_slot`: `BigNumberish`, `_value`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTaskBrief` | (`_id`: `BigNumberish`, `_specificationHash`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTaskDomain` | (`_id`: `BigNumberish`, `_domainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTaskDueDate` | (`_id`: `BigNumberish`, `_dueDate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTaskEvaluatorPayout` | (`_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTaskEvaluatorRole` | (`_id`: `BigNumberish`, `_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTaskManagerPayout` | (`_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTaskManagerRole` | (`_id`: `BigNumberish`, `_user`: `string`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTaskSkill` | (`_id`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTaskWorkerPayout` | (`_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTaskWorkerRole` | (`_id`: `BigNumberish`, `_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `startNextRewardPayout` | (`_token`: `string`, `key`: `BytesLike`, `value`: `BytesLike`, `branchMask`: `BigNumberish`, `siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `submitTaskDeliverable` | (`_id`: `BigNumberish`, `_deliverableHash`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `submitTaskDeliverableAndRating` | (`_id`: `BigNumberish`, `_deliverableHash`: `BytesLike`, `_ratingSecret`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `submitTaskWorkRating` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_ratingSecret`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `upgrade` | (`_newVersion`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `verifyReputationProof` | (`key`: `BytesLike`, `value`: `BytesLike`, `branchMask`: `BigNumberish`, `siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `isValid`: `boolean`  }\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `colonyVersion`: `BigNumber`  }\> |

#### Inherited from

AugmentedIColony.functions

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

• **off**: `OnEvent`<[`ColonyClientV2`](ColonyClientV2.md)\>

#### Inherited from

AugmentedIColony.off

___

### on

• **on**: `OnEvent`<[`ColonyClientV2`](ColonyClientV2.md)\>

#### Inherited from

AugmentedIColony.on

___

### once

• **once**: `OnEvent`<[`ColonyClientV2`](ColonyClientV2.md)\>

#### Inherited from

AugmentedIColony.once

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addDomain` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_parentDomainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addPayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_recipient`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `approveExitRecovery` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `bootstrapColony` | (`_users`: `string`[], `_amount`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelTask` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `checkNotAdditionalProtectedVariable` | (`_slot`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `claimColonyFunds` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claimPayment` | (`_id`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claimRewardPayout` | (`_payoutId`: `BigNumberish`, `_squareRoots`: `BigNumberish`[], `key`: `BytesLike`, `value`: `BytesLike`, `branchMask`: `BigNumberish`, `siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claimTaskPayout` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `completeTask` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `enterRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `executeTaskChange` | (`_sigV`: `BigNumberish`[], `_sigR`: `BytesLike`[], `_sigS`: `BytesLike`[], `_mode`: `BigNumberish`[], `_value`: `BigNumberish`, `_data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `executeTaskRoleAssignment` | (`_sigV`: `BigNumberish`[], `_sigR`: `BytesLike`[], `_sigS`: `BytesLike`[], `_mode`: `BigNumberish`[], `_value`: `BigNumberish`, `_data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `exitRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finalizePayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finalizeRewardPayout` | (`_payoutId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finalizeTask` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `generateSecret` | (`_salt`: `BytesLike`, `_value`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColonyNetwork` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDomain` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDomainCount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getFundingPot` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getFundingPotBalance` | (`_potId`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getFundingPotCount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getFundingPotPayout` | (`_potId`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getNonRewardPotsTotal` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPayment` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPaymentCount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getRewardInverse` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getRewardPayoutInfo` | (`_payoutId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTask` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTaskChangeNonce` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTaskCount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTaskPayout` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTaskRole` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTaskWorkRatingSecret` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTaskWorkRatingSecretsInfo` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getToken` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `hasUserRole` | (`_user`: `string`, `_domainId`: `BigNumberish`, `_role`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialiseColony` | (`_colonyNetworkAddress`: `string`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isInRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `makeTask` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_specificationHash`: `BytesLike`, `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `_dueDate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mintTokens` | (`_wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `moveFundsBetweenPots` | (`_permissionDomainId`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_fromPot`: `BigNumberish`, `_toPot`: `BigNumberish`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `numRecoveryRoles` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `registerColonyLabel` | (`colonyName`: `string`, `orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeRecoveryRole` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeTaskEvaluatorRole` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeTaskWorkerRole` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `revealTaskWorkRating` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_rating`: `BigNumberish`, `_salt`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setAdministrationRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setAllTaskPayouts` | (`_id`: `BigNumberish`, `_token`: `string`, `_managerAmount`: `BigNumberish`, `_evaluatorAmount`: `BigNumberish`, `_workerAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setArchitectureRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setFundingRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setPaymentDomain` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_domainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setPaymentPayout` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setPaymentRecipient` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setPaymentSkill` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setRecoveryRole` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setRewardInverse` | (`_rewardInverse`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setRootRole` | (`_user`: `string`, `_setTo`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setStorageSlotRecovery` | (`_slot`: `BigNumberish`, `_value`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTaskBrief` | (`_id`: `BigNumberish`, `_specificationHash`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTaskDomain` | (`_id`: `BigNumberish`, `_domainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTaskDueDate` | (`_id`: `BigNumberish`, `_dueDate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTaskEvaluatorPayout` | (`_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTaskEvaluatorRole` | (`_id`: `BigNumberish`, `_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTaskManagerPayout` | (`_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTaskManagerRole` | (`_id`: `BigNumberish`, `_user`: `string`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTaskSkill` | (`_id`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTaskWorkerPayout` | (`_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTaskWorkerRole` | (`_id`: `BigNumberish`, `_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `startNextRewardPayout` | (`_token`: `string`, `key`: `BytesLike`, `value`: `BytesLike`, `branchMask`: `BigNumberish`, `siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `submitTaskDeliverable` | (`_id`: `BigNumberish`, `_deliverableHash`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `submitTaskDeliverableAndRating` | (`_id`: `BigNumberish`, `_deliverableHash`: `BytesLike`, `_ratingSecret`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `submitTaskWorkRating` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_ratingSecret`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `upgrade` | (`_newVersion`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `verifyReputationProof` | (`key`: `BytesLike`, `value`: `BytesLike`, `branchMask`: `BigNumberish`, `siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

AugmentedIColony.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

AugmentedIColony.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`ColonyClientV2`](ColonyClientV2.md)\>

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

• **tokenClient**: [`TokenClient`](../modules.md#tokenclient)

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

### addDomain

▸ **addDomain**(`_permissionDomainId`, `_childSkillIndex`, `_parentDomainId`, `overrides?`): `Promise`<`ContractTransaction`\>

Adding new domains is currently retricted to one level only, i.e. `_parentDomainId` has to be the root domain id: `1`.
Add a colony domain, and its respective local skill under skill with id `_parentSkillId`. New funding pot is created and associated with the domain here.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `BigNumberish` | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_parentDomainId` | `BigNumberish` | Id of the domain under which the new one will be added |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.addDomain

___

### addDomainWithProofs

▸ **addDomainWithProofs**(`_parentDomainId`, `overrides?`): `Promise`<`ContractTransaction`\>

**`deprecated`**

Same as [addDomain](ColonyClientV2.md#adddomain), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_parentDomainId` | `BigNumberish` | Id of the domain under which the new one will be added |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AddDomainAugmentsA.addDomainWithProofs

___

### addPayment

▸ **addPayment**(`_permissionDomainId`, `_childSkillIndex`, `_recipient`, `_token`, `_amount`, `_domainId`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Add a new payment in the colony. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `BigNumberish` | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId`, (only used if `_permissionDomainId` is different to `_domainId`) |
| `_recipient` | `string` | Address of the payment recipient |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `_amount` | `BigNumberish` | Payout amount |
| `_domainId` | `BigNumberish` | The domain where the payment belongs |
| `_skillId` | `BigNumberish` | The skill associated with the payment |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

paymentId Identifier of the newly created payment

#### Inherited from

AugmentedIColony.addPayment

___

### addPaymentWithProofs

▸ **addPaymentWithProofs**(`_recipient`, `_token`, `_amount`, `_domainId`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [addPayment](ColonyClientV2.md#addpayment), but let colonyJS figure out the permission proofs for you.
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

### approveExitRecovery

▸ **approveExitRecovery**(`overrides?`): `Promise`<`ContractTransaction`\>

Indicate approval to exit recovery mode. Can only be called by user with recovery role.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.approveExitRecovery

___

### attach

▸ **attach**(`addressOrName`): [`ColonyClientV2`](ColonyClientV2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ColonyClientV2`](ColonyClientV2.md)

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

colonyAuthority The `ColonyAuthority` contract address

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
| `_users` | `string`[] | Array of address to bootstrap with reputation |
| `_amount` | `BigNumberish`[] | Amount of reputation/tokens for every address |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.bootstrapColony

___

### cancelTask

▸ **cancelTask**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the `task.status` property to `1`.
Cancel a task at any point before it is finalized. Secured function to authorised members. Any funds assigned to its funding pot can be moved back to the domain via `IColony.moveFundsBetweenPots`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Id of the task |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.cancelTask

___

### checkNotAdditionalProtectedVariable

▸ **checkNotAdditionalProtectedVariable**(`_slot`, `overrides?`): `Promise`<`void`\>

No return value, but should throw if protected.This is public, but is only expected to be called from ContractRecovery; no need toexpose this to any users.
Check whether the supplied slot is a protected variable specific to this contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_slot` | `BigNumberish` | The storage slot number to check. |
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
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.claimColonyFunds

___

### claimPayment

▸ **claimPayment**(`_id`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

Claim the payout in `_token` denomination for payment `_id`. Here the network receives its fee from each payout. Same as for tasks, ether fees go straight to the Meta Colony whereas Token fees go to the Network to be auctioned off.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Payment identifier |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_payoutId` | `BigNumberish` | Id of the reward payout |
| `_squareRoots` | `BigNumberish`[] | Square roots of values used in equation: `_squareRoots[0]` - square root of user reputation, `_squareRoots[1]` - square root of user tokens, `_squareRoots[2]` - square root of total reputation, `_squareRoots[3]` - square root of total tokens, `_squareRoots[4]` - square root of numerator (user reputation * user tokens), `_squareRoots[5]` - square root of denominator (total reputation * total tokens), `_squareRoots[6]` - square root of payout amount. |
| `key` | `BytesLike` | Some Reputation hash tree key |
| `value` | `BytesLike` | Reputation value |
| `branchMask` | `BigNumberish` | The branchmask of the proof |
| `siblings` | `BytesLike`[] | The siblings of the proof |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_id` | `BigNumberish` | Id of the task |
| `_role` | `BigNumberish` | Id of the role, as defined in TaskRole enum |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_id` | `BigNumberish` | Id of the task |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.completeTask

___

### connect

▸ **connect**(`signerOrProvider`): [`ColonyClientV2`](ColonyClientV2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ColonyClientV2`](ColonyClientV2.md)

#### Inherited from

AugmentedIColony.connect

___

### deployed

▸ **deployed**(): `Promise`<[`ColonyClientV2`](ColonyClientV2.md)\>

#### Returns

`Promise`<[`ColonyClientV2`](ColonyClientV2.md)\>

#### Inherited from

AugmentedIColony.deployed

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

### enterRecoveryMode

▸ **enterRecoveryMode**(`overrides?`): `Promise`<`ContractTransaction`\>

Put colony network mining into recovery mode. Can only be called by user with recovery role.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

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
| `_sigV` | `BigNumberish`[] | recovery id |
| `_sigR` | `BytesLike`[] | r output of the ECDSA signature of the transaction |
| `_sigS` | `BytesLike`[] | s output of the ECDSA signature of the transaction |
| `_mode` | `BigNumberish`[] | How the signature was generated - 0 for Geth-style (usual), 1 for Trezor-style (only Trezor does this) |
| `_value` | `BigNumberish` | The transaction value, i.e. number of wei to be sent when the transaction is executed Currently we only accept 0 value transactions but this is kept as a future option |
| `_data` | `BytesLike` | The transaction data |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_sigV` | `BigNumberish`[] | recovery id |
| `_sigR` | `BytesLike`[] | r output of the ECDSA signature of the transaction |
| `_sigS` | `BytesLike`[] | s output of the ECDSA signature of the transaction |
| `_mode` | `BigNumberish`[] | How the signature was generated - 0 for Geth-style (usual), 1 for Trezor-style (only Trezor does this) |
| `_value` | `BigNumberish` | The transaction value, i.e. number of wei to be sent when the transaction is executed Currently we only accept 0 value transactions but this is kept as a future option |
| `_data` | `BytesLike` | The transaction data |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

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

### finalizePayment

▸ **finalizePayment**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `overrides?`): `Promise`<`ContractTransaction`\>

Finalizes the payment and logs the reputation log updates. Allowed to be called once after payment is fully funded. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `BigNumberish` | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_id` | `BigNumberish` | Payment identifier |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.finalizePayment

___

### finalizePaymentWithProofs

▸ **finalizePaymentWithProofs**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [finalizePayment](ColonyClientV2.md#finalizepayment), but let colonyJS figure out the permission proofs for you.
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
| `_payoutId` | `BigNumberish` | Id of the reward payout |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_id` | `BigNumberish` | Id of the task |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.finalizeTask

___

### generateSecret

▸ **generateSecret**(`_salt`, `_value`, `overrides?`): `Promise`<`string`\>

Helper function used to generage consistently the rating secret using salt value `_salt` and value to hide `_value`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_salt` | `BytesLike` | Salt value |
| `_value` | `BigNumberish` | Value to hide |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

secret `keccak256` hash of joint _salt and _value

#### Inherited from

AugmentedIColony.generateSecret

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

colonyNetwork The address of Colony Network instance

#### Inherited from

AugmentedIColony.getColonyNetwork

___

### getDomain

▸ **getDomain**(`_id`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `fundingPotId`: `BigNumber` ; `skillId`: `BigNumber`  }\>

Get a domain by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Id of the domain which details to get |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `fundingPotId`: `BigNumber` ; `skillId`: `BigNumber`  }\>

domain The domain

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

count The domain count. Min 1 as the root domain is created at the same time as the colony

#### Inherited from

AugmentedIColony.getDomainCount

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
| `_id` | `BigNumberish` | Id of the pot which details to get |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`number`, `BigNumber`, `BigNumber`] & { `associatedType`: `number` ; `associatedTypeId`: `BigNumber` ; `payoutsWeCannotMake`: `BigNumber`  }\>

associatedType The FundingPotAssociatedType value of the current funding pot, e.g. Domain, Task, PayoutassociatedTypeId Id of the associated type, e.g. if associatedType = FundingPotAssociatedType.Domain, this refers to the domainIdpayoutsWeCannotMake Number of payouts that cannot be completed with the current funding

#### Inherited from

AugmentedIColony.getFundingPot

___

### getFundingPotBalance

▸ **getFundingPotBalance**(`_potId`, `_token`, `overrides?`): `Promise`<`BigNumber`\>

Get the `_token` balance of pot with id `_potId`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_potId` | `BigNumberish` | Id of the funding pot |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

balance Funding pot supply balance

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

count The funding pots count

#### Inherited from

AugmentedIColony.getFundingPotCount

___

### getFundingPotPayout

▸ **getFundingPotPayout**(`_potId`, `_token`, `overrides?`): `Promise`<`BigNumber`\>

Get the assigned `_token` payouts of pot with id `_potId`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_potId` | `BigNumberish` | Id of the funding pot |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

payout Funding pot payout amount

#### Inherited from

AugmentedIColony.getFundingPotPayout

___

### getMembersReputation

▸ **getMembersReputation**(`skillId`): `Promise`<{ `addresses`: `string`[]  }\>

Get all addresses that have reputation for a given skill.
If you need the skillId for a certain domain you can use the [getDomain](ColonyClientV2.md#getdomain) function.

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
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

amount Total amount of tokens in funding pots other than the rewards pot (id 0)

#### Inherited from

AugmentedIColony.getNonRewardPotsTotal

___

### getPayment

▸ **getPayment**(`_id`, `overrides?`): `Promise`<[`string`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`[]] & { `domainId`: `BigNumber` ; `finalized`: `boolean` ; `fundingPotId`: `BigNumber` ; `recipient`: `string` ; `skills`: `BigNumber`[]  }\>

Returns an exiting payment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Payment identifier |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`string`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`[]] & { `domainId`: `BigNumber` ; `finalized`: `boolean` ; `fundingPotId`: `BigNumber` ; `recipient`: `string` ; `skills`: `BigNumber`[]  }\>

payment The Payment data structure

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

count The payment count

#### Inherited from

AugmentedIColony.getPaymentCount

___

### getReputation

▸ **getReputation**(`skillId`, `address`, `customRootHash?`): `Promise`<{ `branchMask`: `string` ; `key`: `string` ; `reputationAmount`: `BigNumber` ; `siblings`: `string`[] ; `value`: `string`  }\>

Get the reputation for an address and a certain skill.
If you need the skillId for a certain domain you can use the [getDomain](ColonyClientV2.md#getdomain) function.

**`remarks`**
This function also retrieves the proofs (`branchMask`, `siblings`) that are needed to verify the reputation on chain.
If you don't need to do that (e.g. in order to proof the reputation when calling a contract method), you should probably just use
the [getReputationWithoutProofs](ColonyClientV2.md#getreputationwithoutproofs) method as it requires fewer computations

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
If you need the skillId for a certain domain you can use the [getDomain](ColonyClientV2.md#getdomain) function.

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

rewardInverse The inverse of the reward

#### Inherited from

AugmentedIColony.getRewardInverse

___

### getRewardPayoutInfo

▸ **getRewardPayoutInfo**(`_payoutId`, `overrides?`): `Promise`<[`string`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `BigNumber`] & { `amount`: `BigNumber` ; `blockTimestamp`: `BigNumber` ; `colonyWideReputation`: `BigNumber` ; `reputationState`: `string` ; `tokenAddress`: `string` ; `totalTokens`: `BigNumber`  }\>

Get useful information about specific reward payout.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_payoutId` | `BigNumberish` | Id of the reward payout |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`string`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `BigNumber`] & { `amount`: `BigNumber` ; `blockTimestamp`: `BigNumber` ; `colonyWideReputation`: `BigNumber` ; `reputationState`: `string` ; `tokenAddress`: `string` ; `totalTokens`: `BigNumber`  }\>

rewardPayoutCycle RewardPayoutCycle, containing propertes:  `reputationState` Reputation root hash at the time of creation,  `colonyWideReputation` Colony wide reputation in `reputationState`,  `totalTokens` Total colony tokens at the time of creation,  `amount` Total amount of tokens taken aside for reward payout,  `tokenAddress` Token address,  `blockTimestamp` Block number at the time of creation.

#### Inherited from

AugmentedIColony.getRewardPayoutInfo

___

### getTask

▸ **getTask**(`_id`, `overrides?`): `Promise`<[`string`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`[]] & { `completionTimestamp`: `BigNumber` ; `deliverableHash`: `string` ; `domainId`: `BigNumber` ; `dueDate`: `BigNumber` ; `fundingPotId`: `BigNumber` ; `skillIds`: `BigNumber`[] ; `specificationHash`: `string` ; `status`: `number`  }\>

Get a task with id `_id`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Id of the task |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`string`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`[]] & { `completionTimestamp`: `BigNumber` ; `deliverableHash`: `string` ; `domainId`: `BigNumber` ; `dueDate`: `BigNumber` ; `fundingPotId`: `BigNumber` ; `skillIds`: `BigNumber`[] ; `specificationHash`: `string` ; `status`: `number`  }\>

specificationHash Task brief hashdeliverableHash Task deliverable hashstatus TaskStatus property. 0 - Active. 1 - Cancelled. 2 - FinalizeddueDate Due datefundingPotId Id of funding pot for taskcompletionTimestamp Task completion timestampdomainId Task domain id, default is root colony domain with id 1skillIds Array of global skill ids assigned to task

#### Inherited from

AugmentedIColony.getTask

___

### getTaskChangeNonce

▸ **getTaskChangeNonce**(`_id`, `overrides?`): `Promise`<`BigNumber`\>

Starts from 0 and is incremented on every co-reviewed task change via `executeTaskChange` call.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Id of the task |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

nonce The current task change nonce value

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

count The task count

#### Inherited from

AugmentedIColony.getTaskCount

___

### getTaskPayout

▸ **getTaskPayout**(`_id`, `_role`, `_token`, `overrides?`): `Promise`<`BigNumber`\>

Get payout amount in `_token` denomination for role `_role` in task `_id`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Id of the task |
| `_role` | `BigNumberish` | Id of the role, as defined in TaskRole enum |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

amount Payout amount

#### Inherited from

AugmentedIColony.getTaskPayout

___

### getTaskRole

▸ **getTaskRole**(`_id`, `_role`, `overrides?`): `Promise`<[`string`, `boolean`, `number`] & { `rateFail`: `boolean` ; `rating`: `number` ; `user`: `string`  }\>

Get the `Role` properties back for role `_role` in task `_id`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Id of the task |
| `_role` | `BigNumberish` | Id of the role, as defined in TaskRole enum |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`string`, `boolean`, `number`] & { `rateFail`: `boolean` ; `rating`: `number` ; `user`: `string`  }\>

role The Role

#### Inherited from

AugmentedIColony.getTaskRole

___

### getTaskWorkRatingSecret

▸ **getTaskWorkRatingSecret**(`_id`, `_role`, `overrides?`): `Promise`<`string`\>

Get the rating secret submitted for role `_role` in task `_id`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Id of the task |
| `_role` | `BigNumberish` | Id of the role, as defined in TaskRole enum |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

secret Rating secret `bytes32` value

#### Inherited from

AugmentedIColony.getTaskWorkRatingSecret

___

### getTaskWorkRatingSecretsInfo

▸ **getTaskWorkRatingSecretsInfo**(`_id`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`] & { `lastSubmittedAt`: `BigNumber` ; `nSecrets`: `BigNumber`  }\>

Get the `ColonyStorage.RatingSecrets` information for task `_id`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Id of the task |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`] & { `lastSubmittedAt`: `BigNumber` ; `nSecrets`: `BigNumber`  }\>

nSecrets Number of secretslastSubmittedAt Timestamp of the last submitted rating secret

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

tokenAddress Address of the token contract

#### Inherited from

AugmentedIColony.getToken

___

### hasUserRole

▸ **hasUserRole**(`_user`, `_domainId`, `_role`, `overrides?`): `Promise`<`boolean`\>

Check whether a given user has a given role for the colony. Calls the function of the same name on the colony's authority contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | The user whose role we want to check |
| `_domainId` | `BigNumberish` | The domain where we want to check for the role |
| `_role` | `BigNumberish` | The role we want to check for |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

hasRole Boolean indicating whether the given user has the given role in domain

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
| `_colonyNetworkAddress` | `string` | Address of the colony network |
| `_token` | `string` | Address of the colony ERC20 Token |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.initialiseColony

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

inRecoveryMode Return true if recovery mode is active, false otherwise

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

### makeTask

▸ **makeTask**(`_permissionDomainId`, `_childSkillIndex`, `_specificationHash`, `_domainId`, `_skillId`, `_dueDate`, `overrides?`): `Promise`<`ContractTransaction`\>

Make a new task in the colony. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `BigNumberish` | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_specificationHash` | `BytesLike` | Database identifier where the task specification is stored |
| `_domainId` | `BigNumberish` | The domain where the task belongs |
| `_skillId` | `BigNumberish` | The skill associated with the task, can set to `0` for no-op |
| `_dueDate` | `BigNumberish` | The due date of the task, can set to `0` for no-op |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.makeTask

___

### makeTaskWithProofs

▸ **makeTaskWithProofs**(`_specificationHash`, `_domainId`, `_skillId`, `_dueDate`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [makeTask](ColonyClientV2.md#maketask), but let colonyJS figure out the permission proofs for you.
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
| `_wad` | `BigNumberish` | Amount to mint |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.mintTokens

___

### moveFundsBetweenPots

▸ **moveFundsBetweenPots**(`_permissionDomainId`, `_fromChildSkillIndex`, `_toChildSkillIndex`, `_fromPot`, `_toPot`, `_amount`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

Move a given amount: `_amount` of `_token` funds from funding pot with id `_fromPot` to one with id `_toPot`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `BigNumberish` | The domainId in which I have the permission to take this action |
| `_fromChildSkillIndex` | `BigNumberish` | The child index in `_permissionDomainId` where we can find the domain for `_fromPotId` |
| `_toChildSkillIndex` | `BigNumberish` | The child index in `_permissionDomainId` where we can find the domain for `_toPotId` |
| `_fromPot` | `BigNumberish` | Funding pot id providing the funds |
| `_toPot` | `BigNumberish` | Funding pot id receiving the funds |
| `_amount` | `BigNumberish` | Amount of funds |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.moveFundsBetweenPots

___

### moveFundsBetweenPotsWithProofs

▸ **moveFundsBetweenPotsWithProofs**(`_fromPot`, `_toPot`, `_amount`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

**`deprecated`**

Same as [moveFundsBetweenPots](ColonyClientV2.md#movefundsbetweenpots), but let colonyJS figure out the permission proofs for you.
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

numRoles Number of users with the recovery role.

#### Inherited from

AugmentedIColony.numRecoveryRoles

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

colonyOwner Address of the colony owner

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
| `colonyName` | `string` | The label to register. |
| `orbitdb` | `string` | The path of the orbitDB database associated with the colony name |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.registerColonyLabel

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ColonyClientV2`](ColonyClientV2.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ColonyClientV2`](ColonyClientV2.md)

#### Inherited from

AugmentedIColony.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`ColonyClientV2`](ColonyClientV2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ColonyClientV2`](ColonyClientV2.md)

#### Inherited from

AugmentedIColony.removeAllListeners

___

### removeRecoveryRole

▸ **removeRecoveryRole**(`_user`, `overrides?`): `Promise`<`ContractTransaction`\>

Remove colony recovery role. Can only be called by root role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | User we want to remove recovery role from |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_id` | `BigNumberish` | Id of the task |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_id` | `BigNumberish` | Id of the task |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_id` | `BigNumberish` | Id of the task |
| `_role` | `BigNumberish` | Id of the role, as defined in TaskRole enum |
| `_rating` | `BigNumberish` | 0-50 rating score (in increments of 10, .e.g 0, 10, 20, 30, 40 or 50) |
| `_salt` | `BytesLike` | Salt value used to generate the rating secret |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_permissionDomainId` | `BigNumberish` | Domain in which the caller has root/architecture role |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_user` | `string` | User we want to give an admin role to |
| `_domainId` | `BigNumberish` | Domain in which we are giving user the role |
| `_setTo` | `boolean` | The state of the role permission (true assign the permission, false revokes it) |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setAdministrationRole

___

### setAdministrationRoleWithProofs

▸ **setAdministrationRoleWithProofs**(`_user`, `_domainId`, `_setTo`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setAdministrationRole](ColonyClientV2.md#setadministrationrole), but let colonyJS figure out the permission proofs for you.
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
| `_id` | `BigNumberish` | Id of the task |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `_managerAmount` | `BigNumberish` | Payout amount for manager |
| `_evaluatorAmount` | `BigNumberish` | Payout amount for evaluator |
| `_workerAmount` | `BigNumberish` | Payout amount for worker |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setAllTaskPayouts

___

### setArchitectureRole

▸ **setArchitectureRole**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides?`): `Promise`<`ContractTransaction`\>

Set new colony architecture role. Can be called by root role or architecture role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `BigNumberish` | Domain in which the caller has root/architecture role |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_user` | `string` | User we want to give an architecture role to |
| `_domainId` | `BigNumberish` | Domain in which we are giving user the role |
| `_setTo` | `boolean` | The state of the role permission (true assign the permission, false revokes it) |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setArchitectureRole

___

### setArchitectureRoleWithProofs

▸ **setArchitectureRoleWithProofs**(`_user`, `_domainId`, `_setTo`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setArchitectureRole](ColonyClientV2.md#setarchitecturerole), but let colonyJS figure out the permission proofs for you.
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

### setFundingRole

▸ **setFundingRole**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides?`): `Promise`<`ContractTransaction`\>

Set new colony funding role. Can be called by root role or architecture role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `BigNumberish` | Domain in which the caller has root/architecture role |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_user` | `string` | User we want to give an funding role to |
| `_domainId` | `BigNumberish` | Domain in which we are giving user the role |
| `_setTo` | `boolean` | The state of the role permission (true assign the permission, false revokes it) |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setFundingRole

___

### setFundingRoleWithProofs

▸ **setFundingRoleWithProofs**(`_user`, `_domainId`, `_setTo`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setFundingRole](ColonyClientV2.md#setfundingrole), but let colonyJS figure out the permission proofs for you.
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

### setPaymentDomain

▸ **setPaymentDomain**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_domainId`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the domain on an existing payment. Secured function to authorised members

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `BigNumberish` | The domainId in which I have the permission to take this action. |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_id` | `BigNumberish` | Payment identifier |
| `_domainId` | `BigNumberish` | Id of the new domain to set |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setPaymentDomain

___

### setPaymentDomainWithProofs

▸ **setPaymentDomainWithProofs**(`_id`, `_domainId`, `overrides?`): `Promise`<`ContractTransaction`\>

**`deprecated`**

Same as [setPaymentDomain](ColonyClientV2.md#setpaymentdomain), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Payment identifier |
| `_domainId` | `BigNumberish` | Id of the new domain to set |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

SetPaymentDomainAugments.setPaymentDomainWithProofs

___

### setPaymentPayout

▸ **setPaymentPayout**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the payout for a given token on an existing payment. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `BigNumberish` | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_id` | `BigNumberish` | Payment identifier |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `_amount` | `BigNumberish` | Payout amount |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setPaymentPayout

___

### setPaymentPayoutWithProofs

▸ **setPaymentPayoutWithProofs**(`_id`, `_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setPaymentPayout](ColonyClientV2.md#setpaymentpayout), but let colonyJS figure out the permission proofs for you.
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
| `_permissionDomainId` | `BigNumberish` | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_id` | `BigNumberish` | Payment identifier |
| `_recipient` | `string` | Address of the payment recipient |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setPaymentRecipient

___

### setPaymentRecipientWithProofs

▸ **setPaymentRecipientWithProofs**(`_id`, `_recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setPaymentRecipient](ColonyClientV2.md#setpaymentrecipient), but let colonyJS figure out the permission proofs for you.
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
| `_permissionDomainId` | `BigNumberish` | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_id` | `BigNumberish` | Payment identifier |
| `_skillId` | `BigNumberish` | Id of the new skill to set |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setPaymentSkill

___

### setPaymentSkillWithProofs

▸ **setPaymentSkillWithProofs**(`_id`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setPaymentSkill](ColonyClientV2.md#setpaymentskill), but let colonyJS figure out the permission proofs for you.
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
| `_user` | `string` | User we want to give a recovery role to |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_rewardInverse` | `BigNumberish` | The inverse of the reward |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_user` | `string` | User we want to give an root role to |
| `_setTo` | `boolean` | The state of the role permission (true assign the permission, false revokes it) |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_slot` | `BigNumberish` | Uint address of storage slot to be updated |
| `_value` | `BytesLike` | word of data to be set |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_id` | `BigNumberish` | Id of the task |
| `_specificationHash` | `BytesLike` | Unique hash of the task brief in ddb |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setTaskBrief

___

### setTaskDomain

▸ **setTaskDomain**(`_id`, `_domainId`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the domain for task `_id`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Id of the task |
| `_domainId` | `BigNumberish` | Id of the domain |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setTaskDomain

___

### setTaskDueDate

▸ **setTaskDueDate**(`_id`, `_dueDate`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the due date on task `_id`. Allowed before a task is finalized.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Id of the task |
| `_dueDate` | `BigNumberish` | Due date as seconds since unix epoch |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_id` | `BigNumberish` | Id of the task |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `_amount` | `BigNumberish` | Payout amount |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_id` | `BigNumberish` | Id of the task |
| `_user` | `string` | Address of the user we want to give a evaluator role to |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_id` | `BigNumberish` | Id of the task |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `_amount` | `BigNumberish` | Payout amount |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_id` | `BigNumberish` | Id of the task |
| `_user` | `string` | Address of the user we want to give a manager role to |
| `_permissionDomainId` | `BigNumberish` | The domain ID in which _user has the Administration permission |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_id` | `BigNumberish` | Id of the task |
| `_skillId` | `BigNumberish` | Id of the skill which has to be a global skill |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_id` | `BigNumberish` | Id of the task |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `_amount` | `BigNumberish` | Payout amount |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_id` | `BigNumberish` | Id of the task |
| `_user` | `string` | Address of the user we want to give a worker role to |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setTaskWorkerRole

___

### startNextRewardPayout

▸ **startNextRewardPayout**(`_token`, `key`, `value`, `branchMask`, `siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

Start next reward payout for `_token`. All funds in the reward pot for `_token` will become unavailable.Add a new payment in the colony. Can only be called by users with root permission. All tokens will be locked, and can be unlocked by calling `waiveRewardPayout` or `claimRewardPayout`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `string` | Address of the token used for reward payout |
| `key` | `BytesLike` | Some Reputation hash tree key |
| `value` | `BytesLike` | Reputation value |
| `branchMask` | `BigNumberish` | The branchmask of the proof |
| `siblings` | `BytesLike`[] | The siblings of the proof |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_id` | `BigNumberish` | Id of the task |
| `_deliverableHash` | `BytesLike` | Unique hash of the task deliverable content in ddb |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_id` | `BigNumberish` | Id of the task |
| `_deliverableHash` | `BytesLike` | Unique hash of the task deliverable content in ddb |
| `_ratingSecret` | `BytesLike` | Rating secret for manager |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_id` | `BigNumberish` | Id of the task |
| `_role` | `BigNumberish` | Id of the role, as defined in TaskRole enum |
| `_ratingSecret` | `BytesLike` | `keccak256` hash of a salt and 0-50 rating score (in increments of 10, .e.g 0, 10, 20, 30, 40 or 50). Can be generated via `IColony.generateSecret` helper function. |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.submitTaskWorkRating

___

### upgrade

▸ **upgrade**(`_newVersion`, `overrides?`): `Promise`<`ContractTransaction`\>

Downgrades are not allowed, i.e. `_newVersion` should be higher than the currect colony version.
Upgrades a colony to a new Colony contract version `_newVersion`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_newVersion` | `BigNumberish` | The target version for the upgrade |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.upgrade

___

### verifyReputationProof

▸ **verifyReputationProof**(`key`, `value`, `branchMask`, `siblings`, `overrides?`): `Promise`<`boolean`\>

For more detail about branchMask and siblings, examine the PatriciaTree implementation. While public, likely only to be used by the Colony contracts, as it checks that the user is proving their own reputation in the current colony. The `verifyProof` function can be used to verify any proof, though this function is not currently exposed on the Colony's EtherRouter.
Helper function that can be used by a client to verify the correctness of a patricia proof they have been supplied with.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `BytesLike` | The key of the element the proof is for. |
| `value` | `BytesLike` | The value of the element that the proof is for. |
| `branchMask` | `BigNumberish` | The branchmask of the proof |
| `siblings` | `BytesLike`[] | The siblings of the proof |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

isValid True if the proof is valid, false otherwise.

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

colonyVersion Version number

#### Inherited from

AugmentedIColony.version
