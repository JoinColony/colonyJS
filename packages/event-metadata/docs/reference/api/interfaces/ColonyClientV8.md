[ColonyJS](../README.md) / ColonyClientV8

# Interface: ColonyClientV8

## Hierarchy

- `AugmentedIColony`<`IColony`\>

- `ColonyAugmentsV3`<`IColony`\>

- `ColonyAugmentsV4`<`IColony`\>

- `ColonyAugmentsV5`<`IColony`\>

- `AddDomainAugmentsB`<`IColony`\>

- `MoveFundsBetweenPotsAugmentsB`<`IColony`\>

  ↳ **`ColonyClientV8`**

## Table of contents

### Properties

- [\_deployedPromise](ColonyClientV8.md#_deployedpromise)
- [\_runningEvents](ColonyClientV8.md#_runningevents)
- [\_wrappedEmits](ColonyClientV8.md#_wrappedemits)
- [address](ColonyClientV8.md#address)
- [callStatic](ColonyClientV8.md#callstatic)
- [clientType](ColonyClientV8.md#clienttype)
- [clientVersion](ColonyClientV8.md#clientversion)
- [colonyEvents](ColonyClientV8.md#colonyevents)
- [deployTransaction](ColonyClientV8.md#deploytransaction)
- [estimateGas](ColonyClientV8.md#estimategas)
- [filters](ColonyClientV8.md#filters)
- [functions](ColonyClientV8.md#functions)
- [interface](ColonyClientV8.md#interface)
- [networkClient](ColonyClientV8.md#networkclient)
- [off](ColonyClientV8.md#off)
- [on](ColonyClientV8.md#on)
- [once](ColonyClientV8.md#once)
- [populateTransaction](ColonyClientV8.md#populatetransaction)
- [provider](ColonyClientV8.md#provider)
- [removeListener](ColonyClientV8.md#removelistener)
- [resolvedAddress](ColonyClientV8.md#resolvedaddress)
- [signer](ColonyClientV8.md#signer)
- [tokenClient](ColonyClientV8.md#tokenclient)

### Methods

- [\_checkRunningEvents](ColonyClientV8.md#_checkrunningevents)
- [\_deployed](ColonyClientV8.md#_deployed)
- [\_wrapEvent](ColonyClientV8.md#_wrapevent)
- [addDomain(uint256,uint256,uint256)](ColonyClientV8.md#adddomain(uint256,uint256,uint256))
- [addDomain(uint256,uint256,uint256,string)](ColonyClientV8.md#adddomain(uint256,uint256,uint256,string))
- [addDomainWithProofs(uint256)](ColonyClientV8.md#adddomainwithproofs(uint256))
- [addDomainWithProofs(uint256,string)](ColonyClientV8.md#adddomainwithproofs(uint256,string))
- [addPayment](ColonyClientV8.md#addpayment)
- [addPaymentWithProofs](ColonyClientV8.md#addpaymentwithproofs)
- [annotateTransaction](ColonyClientV8.md#annotatetransaction)
- [approveExitRecovery](ColonyClientV8.md#approveexitrecovery)
- [approveStake](ColonyClientV8.md#approvestake)
- [attach](ColonyClientV8.md#attach)
- [authority](ColonyClientV8.md#authority)
- [bootstrapColony](ColonyClientV8.md#bootstrapcolony)
- [burnTokens](ColonyClientV8.md#burntokens)
- [cancelExpenditure](ColonyClientV8.md#cancelexpenditure)
- [cancelTask](ColonyClientV8.md#canceltask)
- [checkNotAdditionalProtectedVariable](ColonyClientV8.md#checknotadditionalprotectedvariable)
- [claimColonyFunds](ColonyClientV8.md#claimcolonyfunds)
- [claimExpenditurePayout](ColonyClientV8.md#claimexpenditurepayout)
- [claimPayment](ColonyClientV8.md#claimpayment)
- [claimRewardPayout](ColonyClientV8.md#claimrewardpayout)
- [claimTaskPayout](ColonyClientV8.md#claimtaskpayout)
- [completeTask](ColonyClientV8.md#completetask)
- [connect](ColonyClientV8.md#connect)
- [deobligateStake](ColonyClientV8.md#deobligatestake)
- [deployed](ColonyClientV8.md#deployed)
- [deprecateExtension](ColonyClientV8.md#deprecateextension)
- [editColony](ColonyClientV8.md#editcolony)
- [editDomain](ColonyClientV8.md#editdomain)
- [editDomainWithProofs](ColonyClientV8.md#editdomainwithproofs)
- [emit](ColonyClientV8.md#emit)
- [emitDomainReputationPenalty](ColonyClientV8.md#emitdomainreputationpenalty)
- [emitDomainReputationPenaltyWithProofs](ColonyClientV8.md#emitdomainreputationpenaltywithproofs)
- [emitDomainReputationReward](ColonyClientV8.md#emitdomainreputationreward)
- [emitSkillReputationPenalty](ColonyClientV8.md#emitskillreputationpenalty)
- [emitSkillReputationReward](ColonyClientV8.md#emitskillreputationreward)
- [enterRecoveryMode](ColonyClientV8.md#enterrecoverymode)
- [executeTaskChange](ColonyClientV8.md#executetaskchange)
- [executeTaskRoleAssignment](ColonyClientV8.md#executetaskroleassignment)
- [exitRecoveryMode](ColonyClientV8.md#exitrecoverymode)
- [fallback](ColonyClientV8.md#fallback)
- [finalizeExpenditure](ColonyClientV8.md#finalizeexpenditure)
- [finalizePayment](ColonyClientV8.md#finalizepayment)
- [finalizePaymentWithProofs](ColonyClientV8.md#finalizepaymentwithproofs)
- [finalizeRewardPayout](ColonyClientV8.md#finalizerewardpayout)
- [finalizeTask](ColonyClientV8.md#finalizetask)
- [finishUpgrade](ColonyClientV8.md#finishupgrade)
- [generateSecret](ColonyClientV8.md#generatesecret)
- [getApproval](ColonyClientV8.md#getapproval)
- [getCapabilityRoles](ColonyClientV8.md#getcapabilityroles)
- [getColonyNetwork](ColonyClientV8.md#getcolonynetwork)
- [getDomain](ColonyClientV8.md#getdomain)
- [getDomainCount](ColonyClientV8.md#getdomaincount)
- [getDomainFromFundingPot](ColonyClientV8.md#getdomainfromfundingpot)
- [getExpenditure](ColonyClientV8.md#getexpenditure)
- [getExpenditureCount](ColonyClientV8.md#getexpenditurecount)
- [getExpenditureSlot](ColonyClientV8.md#getexpenditureslot)
- [getExpenditureSlotPayout](ColonyClientV8.md#getexpenditureslotpayout)
- [getExtensionClient](ColonyClientV8.md#getextensionclient)
- [getFundingPot](ColonyClientV8.md#getfundingpot)
- [getFundingPotBalance](ColonyClientV8.md#getfundingpotbalance)
- [getFundingPotCount](ColonyClientV8.md#getfundingpotcount)
- [getFundingPotPayout](ColonyClientV8.md#getfundingpotpayout)
- [getMembersReputation](ColonyClientV8.md#getmembersreputation)
- [getNonRewardPotsTotal](ColonyClientV8.md#getnonrewardpotstotal)
- [getObligation](ColonyClientV8.md#getobligation)
- [getPayment](ColonyClientV8.md#getpayment)
- [getPaymentCount](ColonyClientV8.md#getpaymentcount)
- [getReputation](ColonyClientV8.md#getreputation)
- [getReputationAcrossDomains](ColonyClientV8.md#getreputationacrossdomains)
- [getReputationWithoutProofs](ColonyClientV8.md#getreputationwithoutproofs)
- [getRewardInverse](ColonyClientV8.md#getrewardinverse)
- [getRewardPayoutInfo](ColonyClientV8.md#getrewardpayoutinfo)
- [getTask](ColonyClientV8.md#gettask)
- [getTaskChangeNonce](ColonyClientV8.md#gettaskchangenonce)
- [getTaskCount](ColonyClientV8.md#gettaskcount)
- [getTaskPayout](ColonyClientV8.md#gettaskpayout)
- [getTaskRole](ColonyClientV8.md#gettaskrole)
- [getTaskWorkRatingSecret](ColonyClientV8.md#gettaskworkratingsecret)
- [getTaskWorkRatingSecretsInfo](ColonyClientV8.md#gettaskworkratingsecretsinfo)
- [getToken](ColonyClientV8.md#gettoken)
- [getTokenApproval](ColonyClientV8.md#gettokenapproval)
- [getTotalTokenApproval](ColonyClientV8.md#gettotaltokenapproval)
- [getUserRoles](ColonyClientV8.md#getuserroles)
- [hasInheritedUserRole](ColonyClientV8.md#hasinheriteduserrole)
- [hasInheritedUserRoleWithProofs](ColonyClientV8.md#hasinheriteduserrolewithproofs)
- [hasUserRole](ColonyClientV8.md#hasuserrole)
- [initialiseColony](ColonyClientV8.md#initialisecolony)
- [installExtension](ColonyClientV8.md#installextension)
- [installExtensionChecked](ColonyClientV8.md#installextensionchecked)
- [isInRecoveryMode](ColonyClientV8.md#isinrecoverymode)
- [listenerCount](ColonyClientV8.md#listenercount)
- [listeners](ColonyClientV8.md#listeners)
- [lockExpenditure](ColonyClientV8.md#lockexpenditure)
- [lockToken](ColonyClientV8.md#locktoken)
- [makeArbitraryTransaction](ColonyClientV8.md#makearbitrarytransaction)
- [makeArbitraryTransactions](ColonyClientV8.md#makearbitrarytransactions)
- [makeExpenditure](ColonyClientV8.md#makeexpenditure)
- [makeExpenditureWithProofs](ColonyClientV8.md#makeexpenditurewithproofs)
- [makeSingleArbitraryTransaction](ColonyClientV8.md#makesinglearbitrarytransaction)
- [makeTask](ColonyClientV8.md#maketask)
- [makeTaskWithProofs](ColonyClientV8.md#maketaskwithproofs)
- [mintTokens](ColonyClientV8.md#minttokens)
- [mintTokensFor](ColonyClientV8.md#minttokensfor)
- [moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)](ColonyClientV8.md#movefundsbetweenpots(uint256,uint256,uint256,uint256,uint256,uint256,address))
- [moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)](ColonyClientV8.md#movefundsbetweenpots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address))
- [moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,address)](ColonyClientV8.md#movefundsbetweenpotswithproofs(uint256,uint256,uint256,address))
- [moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,uint256,address)](ColonyClientV8.md#movefundsbetweenpotswithproofs(uint256,uint256,uint256,uint256,address))
- [numRecoveryRoles](ColonyClientV8.md#numrecoveryroles)
- [obligateStake](ColonyClientV8.md#obligatestake)
- [owner](ColonyClientV8.md#owner)
- [queryFilter](ColonyClientV8.md#queryfilter)
- [registerColonyLabel](ColonyClientV8.md#registercolonylabel)
- [removeAllListeners](ColonyClientV8.md#removealllisteners)
- [removeRecoveryRole](ColonyClientV8.md#removerecoveryrole)
- [removeTaskEvaluatorRole](ColonyClientV8.md#removetaskevaluatorrole)
- [removeTaskWorkerRole](ColonyClientV8.md#removetaskworkerrole)
- [revealTaskWorkRating](ColonyClientV8.md#revealtaskworkrating)
- [setAdministrationRole](ColonyClientV8.md#setadministrationrole)
- [setAdministrationRoleWithProofs](ColonyClientV8.md#setadministrationrolewithproofs)
- [setAllTaskPayouts](ColonyClientV8.md#setalltaskpayouts)
- [setArbitrationRole](ColonyClientV8.md#setarbitrationrole)
- [setArbitrationRoleWithProofs](ColonyClientV8.md#setarbitrationrolewithproofs)
- [setArchitectureRole](ColonyClientV8.md#setarchitecturerole)
- [setArchitectureRoleWithProofs](ColonyClientV8.md#setarchitecturerolewithproofs)
- [setDefaultGlobalClaimDelay](ColonyClientV8.md#setdefaultglobalclaimdelay)
- [setExpenditureClaimDelay](ColonyClientV8.md#setexpenditureclaimdelay)
- [setExpenditureClaimDelays](ColonyClientV8.md#setexpenditureclaimdelays)
- [setExpenditureMetadata(uint256,string)](ColonyClientV8.md#setexpendituremetadata(uint256,string))
- [setExpenditureMetadata(uint256,uint256,uint256,string)](ColonyClientV8.md#setexpendituremetadata(uint256,uint256,uint256,string))
- [setExpenditurePayout](ColonyClientV8.md#setexpenditurepayout)
- [setExpenditurePayoutModifiers](ColonyClientV8.md#setexpenditurepayoutmodifiers)
- [setExpenditurePayouts](ColonyClientV8.md#setexpenditurepayouts)
- [setExpenditureRecipient](ColonyClientV8.md#setexpenditurerecipient)
- [setExpenditureRecipients](ColonyClientV8.md#setexpenditurerecipients)
- [setExpenditureSkill](ColonyClientV8.md#setexpenditureskill)
- [setExpenditureSkills](ColonyClientV8.md#setexpenditureskills)
- [setExpenditureState](ColonyClientV8.md#setexpenditurestate)
- [setExpenditureStateWithProofs](ColonyClientV8.md#setexpenditurestatewithproofs)
- [setFundingRole](ColonyClientV8.md#setfundingrole)
- [setFundingRoleWithProofs](ColonyClientV8.md#setfundingrolewithproofs)
- [setPaymentPayout](ColonyClientV8.md#setpaymentpayout)
- [setPaymentPayoutWithProofs](ColonyClientV8.md#setpaymentpayoutwithproofs)
- [setPaymentRecipient](ColonyClientV8.md#setpaymentrecipient)
- [setPaymentRecipientWithProofs](ColonyClientV8.md#setpaymentrecipientwithproofs)
- [setPaymentSkill](ColonyClientV8.md#setpaymentskill)
- [setPaymentSkillWithProofs](ColonyClientV8.md#setpaymentskillwithproofs)
- [setRecoveryRole](ColonyClientV8.md#setrecoveryrole)
- [setRewardInverse](ColonyClientV8.md#setrewardinverse)
- [setRootRole](ColonyClientV8.md#setrootrole)
- [setStorageSlotRecovery](ColonyClientV8.md#setstorageslotrecovery)
- [setTaskBrief](ColonyClientV8.md#settaskbrief)
- [setTaskDueDate](ColonyClientV8.md#settaskduedate)
- [setTaskEvaluatorPayout](ColonyClientV8.md#settaskevaluatorpayout)
- [setTaskEvaluatorRole](ColonyClientV8.md#settaskevaluatorrole)
- [setTaskManagerPayout](ColonyClientV8.md#settaskmanagerpayout)
- [setTaskManagerRole](ColonyClientV8.md#settaskmanagerrole)
- [setTaskSkill](ColonyClientV8.md#settaskskill)
- [setTaskWorkerPayout](ColonyClientV8.md#settaskworkerpayout)
- [setTaskWorkerRole](ColonyClientV8.md#settaskworkerrole)
- [setUserRoles](ColonyClientV8.md#setuserroles)
- [setUserRolesWithProofs](ColonyClientV8.md#setuserroleswithproofs)
- [startNextRewardPayout](ColonyClientV8.md#startnextrewardpayout)
- [submitTaskDeliverable](ColonyClientV8.md#submittaskdeliverable)
- [submitTaskDeliverableAndRating](ColonyClientV8.md#submittaskdeliverableandrating)
- [submitTaskWorkRating](ColonyClientV8.md#submittaskworkrating)
- [transferExpenditure](ColonyClientV8.md#transferexpenditure)
- [transferExpenditureViaArbitration](ColonyClientV8.md#transferexpenditureviaarbitration)
- [transferExpenditureViaArbitrationWithProofs](ColonyClientV8.md#transferexpenditureviaarbitrationwithproofs)
- [transferStake](ColonyClientV8.md#transferstake)
- [transferStakeWithProofs](ColonyClientV8.md#transferstakewithproofs)
- [uninstallExtension](ColonyClientV8.md#uninstallextension)
- [unlockToken](ColonyClientV8.md#unlocktoken)
- [unlockTokenForUser](ColonyClientV8.md#unlocktokenforuser)
- [updateApprovalAmount](ColonyClientV8.md#updateapprovalamount)
- [updateColonyOrbitDB](ColonyClientV8.md#updatecolonyorbitdb)
- [upgrade](ColonyClientV8.md#upgrade)
- [upgradeExtension](ColonyClientV8.md#upgradeextension)
- [upgradeExtensionChecked](ColonyClientV8.md#upgradeextensionchecked)
- [userCanSetRoles](ColonyClientV8.md#usercansetroles)
- [verifyReputationProof](ColonyClientV8.md#verifyreputationproof)
- [version](ColonyClientV8.md#version)

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
| `addDomain(uint256,uint256,uint256)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_parentDomainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addDomain(uint256,uint256,uint256,string)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_parentDomainId`: `BigNumberish`, `_metadata`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addPayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_recipient`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `annotateTransaction` | (`_txHash`: `BytesLike`, `_metadata`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `approveExitRecovery` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `approveStake` | (`_approvee`: `string`, `_domainId`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `bootstrapColony` | (`_users`: `string`[], `_amount`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `burnTokens` | (`token`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelExpenditure` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelTask` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `checkNotAdditionalProtectedVariable` | (`_slot`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimColonyFunds` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimExpenditurePayout` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimPayment` | (`_id`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimRewardPayout` | (`_payoutId`: `BigNumberish`, `_squareRoots`: `BigNumberish`[], `key`: `BytesLike`, `value`: `BytesLike`, `branchMask`: `BigNumberish`, `siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimTaskPayout` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `completeTask` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deobligateStake` | (`_user`: `string`, `_domainId`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecateExtension` | (`extensionId`: `BytesLike`, `deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `editColony` | (`_metadata`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `editDomain` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_metadata`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `emitDomainReputationPenalty` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `emitDomainReputationReward` | (`_domainId`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `emitSkillReputationPenalty` | (`_skillId`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `emitSkillReputationReward` | (`_skillId`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `enterRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeTaskChange` | (`_sigV`: `BigNumberish`[], `_sigR`: `BytesLike`[], `_sigS`: `BytesLike`[], `_mode`: `BigNumberish`[], `_value`: `BigNumberish`, `_data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeTaskRoleAssignment` | (`_sigV`: `BigNumberish`[], `_sigR`: `BytesLike`[], `_sigS`: `BytesLike`[], `_mode`: `BigNumberish`[], `_value`: `BigNumberish`, `_data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `exitRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finalizeExpenditure` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finalizePayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finalizeRewardPayout` | (`_payoutId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finalizeTask` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finishUpgrade` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `generateSecret` | (`_salt`: `BytesLike`, `_value`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getApproval` | (`_user`: `string`, `_obligator`: `string`, `_domainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColonyNetwork` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getDomain` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`DomainStructOutput`\> |
| `getDomainCount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getDomainFromFundingPot` | (`_fundingPotId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getExpenditure` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`ExpenditureStructOutput`\> |
| `getExpenditureCount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getExpenditureSlot` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`ExpenditureSlotStructOutput`\> |
| `getExpenditureSlotPayout` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getFundingPot` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`] & { `associatedType`: `number` ; `associatedTypeId`: `BigNumber` ; `payoutsWeCannotMake`: `BigNumber`  }\> |
| `getFundingPotBalance` | (`_potId`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getFundingPotCount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getFundingPotPayout` | (`_potId`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getNonRewardPotsTotal` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getObligation` | (`_user`: `string`, `_obligator`: `string`, `_domainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPayment` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PaymentStructOutput`\> |
| `getPaymentCount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRewardInverse` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRewardPayoutInfo` | (`_payoutId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`RewardPayoutCycleStructOutput`\> |
| `getTask` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`[]] & { `completionTimestamp`: `BigNumber` ; `deliverableHash`: `string` ; `domainId`: `BigNumber` ; `dueDate`: `BigNumber` ; `fundingPotId`: `BigNumber` ; `skillIds`: `BigNumber`[] ; `specificationHash`: `string` ; `status`: `number`  }\> |
| `getTaskChangeNonce` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTaskCount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTaskPayout` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTaskRole` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`RoleStructOutput`\> |
| `getTaskWorkRatingSecret` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getTaskWorkRatingSecretsInfo` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `lastSubmittedAt`: `BigNumber` ; `nSecrets`: `BigNumber`  }\> |
| `getToken` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getTokenApproval` | (`token`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalTokenApproval` | (`token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUserRoles` | (`_user`: `string`, `_domain`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `hasInheritedUserRole` | (`_user`: `string`, `_domainId`: `BigNumberish`, `_role`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_childDomainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `hasUserRole` | (`_user`: `string`, `_domainId`: `BigNumberish`, `_role`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `initialiseColony` | (`_colonyNetworkAddress`: `string`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `installExtension` | (`extensionId`: `BytesLike`, `version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isInRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `lockExpenditure` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `lockToken` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `makeArbitraryTransaction` | (`_to`: `string`, `_action`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `makeArbitraryTransactions` | (`_targets`: `string`[], `_actions`: `BytesLike`[], `_strict`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `makeExpenditure` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `makeSingleArbitraryTransaction` | (`_target`: `string`, `_action`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `makeTask` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_specificationHash`: `BytesLike`, `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `_dueDate`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `mintTokens` | (`_wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `mintTokensFor` | (`_guy`: `string`, `_wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)` | (`_permissionDomainId`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_fromPot`: `BigNumberish`, `_toPot`: `BigNumberish`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_fromPot`: `BigNumberish`, `_toPot`: `BigNumberish`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `numRecoveryRoles` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `obligateStake` | (`_user`: `string`, `_domainId`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `registerColonyLabel` | (`colonyName`: `string`, `orbitdb`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `removeRecoveryRole` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `removeTaskEvaluatorRole` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `removeTaskWorkerRole` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `revealTaskWorkRating` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_rating`: `BigNumberish`, `_salt`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAdministrationRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAllTaskPayouts` | (`_id`: `BigNumberish`, `_token`: `string`, `_managerAmount`: `BigNumberish`, `_evaluatorAmount`: `BigNumberish`, `_workerAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setArbitrationRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setArchitectureRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setDefaultGlobalClaimDelay` | (`_globalClaimDelay`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setExpenditureClaimDelay` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `_claimDelay`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setExpenditureClaimDelays` | (`_id`: `BigNumberish`, `_slots`: `BigNumberish`[], `_claimDelays`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setExpenditureMetadata(uint256,string)` | (`_id`: `BigNumberish`, `_metadata`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setExpenditureMetadata(uint256,uint256,uint256,string)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_metadata`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setExpenditurePayout` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setExpenditurePayoutModifiers` | (`_id`: `BigNumberish`, `_slots`: `BigNumberish`[], `_payoutModifiers`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setExpenditurePayouts` | (`_id`: `BigNumberish`, `_slots`: `BigNumberish`[], `_token`: `string`, `_amounts`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setExpenditureRecipient` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setExpenditureRecipients` | (`_id`: `BigNumberish`, `_slots`: `BigNumberish`[], `_recipients`: `string`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setExpenditureSkill` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setExpenditureSkills` | (`_id`: `BigNumberish`, `_slots`: `BigNumberish`[], `_skillIds`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setExpenditureState` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_storageSlot`: `BigNumberish`, `_mask`: `boolean`[], `_keys`: `BytesLike`[], `_value`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setFundingRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setPaymentPayout` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setPaymentRecipient` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setPaymentSkill` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setRecoveryRole` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setRewardInverse` | (`_rewardInverse`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setRootRole` | (`_user`: `string`, `_setTo`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setStorageSlotRecovery` | (`_slot`: `BigNumberish`, `_value`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTaskBrief` | (`_id`: `BigNumberish`, `_specificationHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTaskDueDate` | (`_id`: `BigNumberish`, `_dueDate`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTaskEvaluatorPayout` | (`_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTaskEvaluatorRole` | (`_id`: `BigNumberish`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTaskManagerPayout` | (`_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTaskManagerRole` | (`_id`: `BigNumberish`, `_user`: `string`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTaskSkill` | (`_id`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTaskWorkerPayout` | (`_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTaskWorkerRole` | (`_id`: `BigNumberish`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setUserRoles` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_roles`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `startNextRewardPayout` | (`_token`: `string`, `key`: `BytesLike`, `value`: `BytesLike`, `branchMask`: `BigNumberish`, `siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `submitTaskDeliverable` | (`_id`: `BigNumberish`, `_deliverableHash`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `submitTaskDeliverableAndRating` | (`_id`: `BigNumberish`, `_deliverableHash`: `BytesLike`, `_ratingSecret`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `submitTaskWorkRating` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_ratingSecret`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferExpenditure` | (`_id`: `BigNumberish`, `_newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferExpenditureViaArbitration` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferStake` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_obligator`: `string`, `_user`: `string`, `_domainId`: `BigNumberish`, `_amount`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstallExtension` | (`extensionId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unlockToken` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unlockTokenForUser` | (`user`: `string`, `lockId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateApprovalAmount` | (`token`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateColonyOrbitDB` | (`orbitdb`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `upgrade` | (`_newVersion`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `upgradeExtension` | (`extensionId`: `BytesLike`, `newVersion`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `userCanSetRoles` | (`_user`: `string`, `_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_childDomainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
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

• **clientVersion**: ``8``

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

• **estimateGas**: `ColonyClientV8Estimate`

#### Overrides

AugmentedIColony.estimateGas

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Annotation` | (`agent?`: ``null`` \| `string`, `txHash?`: ``null`` \| `BytesLike`, `metadata?`: ``null``) => `AnnotationEventFilter` |
| `Annotation(address,bytes32,string)` | (`agent?`: ``null`` \| `string`, `txHash?`: ``null`` \| `BytesLike`, `metadata?`: ``null``) => `AnnotationEventFilter` |
| `ArbitraryReputationUpdate` | (`agent?`: ``null``, `user?`: ``null``, `skillId?`: ``null``, `amount?`: ``null``) => `ArbitraryReputationUpdateEventFilter` |
| `ArbitraryReputationUpdate(address,address,uint256,int256)` | (`agent?`: ``null``, `user?`: ``null``, `skillId?`: ``null``, `amount?`: ``null``) => `ArbitraryReputationUpdateEventFilter` |
| `ColonyBootstrapped` | (`agent?`: ``null``, `users?`: ``null``, `amounts?`: ``null``) => `ColonyBootstrappedEventFilter` |
| `ColonyBootstrapped(address,address[],int256[])` | (`agent?`: ``null``, `users?`: ``null``, `amounts?`: ``null``) => `ColonyBootstrappedEventFilter` |
| `ColonyFundsClaimed` | (`agent?`: ``null``, `token?`: ``null``, `fee?`: ``null``, `payoutRemainder?`: ``null``) => `ColonyFundsClaimedEventFilter` |
| `ColonyFundsClaimed(address,address,uint256,uint256)` | (`agent?`: ``null``, `token?`: ``null``, `fee?`: ``null``, `payoutRemainder?`: ``null``) => `ColonyFundsClaimedEventFilter` |
| `ColonyFundsMovedBetweenFundingPots` | (`agent?`: ``null``, `fromPot?`: ``null`` \| `BigNumberish`, `toPot?`: ``null`` \| `BigNumberish`, `amount?`: ``null``, `token?`: ``null``) => `ColonyFundsMovedBetweenFundingPotsEventFilter` |
| `ColonyFundsMovedBetweenFundingPots(address,uint256,uint256,uint256,address)` | (`agent?`: ``null``, `fromPot?`: ``null`` \| `BigNumberish`, `toPot?`: ``null`` \| `BigNumberish`, `amount?`: ``null``, `token?`: ``null``) => `ColonyFundsMovedBetweenFundingPotsEventFilter` |
| `ColonyInitialised` | (`agent?`: ``null``, `colonyNetwork?`: ``null``, `token?`: ``null``) => `ColonyInitialisedEventFilter` |
| `ColonyInitialised(address,address,address)` | (`agent?`: ``null``, `colonyNetwork?`: ``null``, `token?`: ``null``) => `ColonyInitialisedEventFilter` |
| `ColonyMetadata` | (`agent?`: ``null``, `metadata?`: ``null``) => `ColonyMetadataEventFilter` |
| `ColonyMetadata(address,string)` | (`agent?`: ``null``, `metadata?`: ``null``) => `ColonyMetadataEventFilter` |
| `ColonyRewardInverseSet` | (`agent?`: ``null``, `rewardInverse?`: ``null``) => `ColonyRewardInverseSetEventFilter` |
| `ColonyRewardInverseSet(address,uint256)` | (`agent?`: ``null``, `rewardInverse?`: ``null``) => `ColonyRewardInverseSetEventFilter` |
| `ColonyRoleSet` | (`agent?`: ``null``, `user?`: ``null`` \| `string`, `domainId?`: ``null`` \| `BigNumberish`, `role?`: ``null`` \| `BigNumberish`, `setTo?`: ``null``) => `ColonyRoleSetEventFilter` |
| `ColonyRoleSet(address,address,uint256,uint8,bool)` | (`agent?`: ``null``, `user?`: ``null`` \| `string`, `domainId?`: ``null`` \| `BigNumberish`, `role?`: ``null`` \| `BigNumberish`, `setTo?`: ``null``) => `ColonyRoleSetEventFilter` |
| `ColonyUpgraded` | (`agent?`: ``null``, `oldVersion?`: ``null``, `newVersion?`: ``null``) => `ColonyUpgradedEventFilter` |
| `ColonyUpgraded(address,uint256,uint256)` | (`agent?`: ``null``, `oldVersion?`: ``null``, `newVersion?`: ``null``) => `ColonyUpgradedEventFilter` |
| `DomainAdded` | (`agent?`: ``null``, `domainId?`: ``null``) => `DomainAddedEventFilter` |
| `DomainAdded(address,uint256)` | (`agent?`: ``null``, `domainId?`: ``null``) => `DomainAddedEventFilter` |
| `DomainMetadata` | (`agent?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => `DomainMetadataEventFilter` |
| `DomainMetadata(address,uint256,string)` | (`agent?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => `DomainMetadataEventFilter` |
| `ExpenditureAdded` | (`agent?`: ``null``, `expenditureId?`: ``null``) => `ExpenditureAddedEventFilter` |
| `ExpenditureAdded(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null``) => `ExpenditureAddedEventFilter` |
| `ExpenditureCancelled` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => `ExpenditureCancelledEventFilter` |
| `ExpenditureCancelled(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => `ExpenditureCancelledEventFilter` |
| `ExpenditureClaimDelaySet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `claimDelay?`: ``null``) => `ExpenditureClaimDelaySetEventFilter` |
| `ExpenditureClaimDelaySet(address,uint256,uint256,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `claimDelay?`: ``null``) => `ExpenditureClaimDelaySetEventFilter` |
| `ExpenditureFinalized` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => `ExpenditureFinalizedEventFilter` |
| `ExpenditureFinalized(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => `ExpenditureFinalizedEventFilter` |
| `ExpenditureGlobalClaimDelaySet` | (`agent?`: ``null``, `globalClaimDelay?`: ``null``) => `ExpenditureGlobalClaimDelaySetEventFilter` |
| `ExpenditureGlobalClaimDelaySet(address,uint256)` | (`agent?`: ``null``, `globalClaimDelay?`: ``null``) => `ExpenditureGlobalClaimDelaySetEventFilter` |
| `ExpenditureLocked` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => `ExpenditureLockedEventFilter` |
| `ExpenditureLocked(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`) => `ExpenditureLockedEventFilter` |
| `ExpenditureMetadataSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => `ExpenditureMetadataSetEventFilter` |
| `ExpenditureMetadataSet(address,uint256,string)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `metadata?`: ``null``) => `ExpenditureMetadataSetEventFilter` |
| `ExpenditurePayoutModifierSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `payoutModifier?`: ``null``) => `ExpenditurePayoutModifierSetEventFilter` |
| `ExpenditurePayoutModifierSet(address,uint256,uint256,int256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `payoutModifier?`: ``null``) => `ExpenditurePayoutModifierSetEventFilter` |
| `ExpenditurePayoutSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `token?`: ``null`` \| `string`, `amount?`: ``null``) => `ExpenditurePayoutSetEventFilter` |
| `ExpenditurePayoutSet(address,uint256,uint256,address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `token?`: ``null`` \| `string`, `amount?`: ``null``) => `ExpenditurePayoutSetEventFilter` |
| `ExpenditureRecipientSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `recipient?`: ``null`` \| `string`) => `ExpenditureRecipientSetEventFilter` |
| `ExpenditureRecipientSet(address,uint256,uint256,address)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `recipient?`: ``null`` \| `string`) => `ExpenditureRecipientSetEventFilter` |
| `ExpenditureSkillSet` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => `ExpenditureSkillSetEventFilter` |
| `ExpenditureSkillSet(address,uint256,uint256,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `slot?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => `ExpenditureSkillSetEventFilter` |
| `ExpenditureTransferred` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `owner?`: ``null`` \| `string`) => `ExpenditureTransferredEventFilter` |
| `ExpenditureTransferred(address,uint256,address)` | (`agent?`: ``null``, `expenditureId?`: ``null`` \| `BigNumberish`, `owner?`: ``null`` \| `string`) => `ExpenditureTransferredEventFilter` |
| `FundingPotAdded` | (`fundingPotId?`: ``null``) => `FundingPotAddedEventFilter` |
| `FundingPotAdded(uint256)` | (`fundingPotId?`: ``null``) => `FundingPotAddedEventFilter` |
| `PaymentAdded` | (`agent?`: ``null``, `paymentId?`: ``null``) => `PaymentAddedEventFilter` |
| `PaymentAdded(address,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null``) => `PaymentAddedEventFilter` |
| `PaymentFinalized` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`) => `PaymentFinalizedEventFilter` |
| `PaymentFinalized(address,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`) => `PaymentFinalizedEventFilter` |
| `PaymentPayoutSet` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => `PaymentPayoutSetEventFilter` |
| `PaymentPayoutSet(address,uint256,address,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => `PaymentPayoutSetEventFilter` |
| `PaymentRecipientSet` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `recipient?`: ``null``) => `PaymentRecipientSetEventFilter` |
| `PaymentRecipientSet(address,uint256,address)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `recipient?`: ``null``) => `PaymentRecipientSetEventFilter` |
| `PaymentSkillSet` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null``) => `PaymentSkillSetEventFilter` |
| `PaymentSkillSet(address,uint256,uint256)` | (`agent?`: ``null``, `paymentId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null``) => `PaymentSkillSetEventFilter` |
| `PayoutClaimed` | (`agent?`: ``null``, `fundingPotId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => `PayoutClaimedEventFilter` |
| `PayoutClaimed(address,uint256,address,uint256)` | (`agent?`: ``null``, `fundingPotId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => `PayoutClaimedEventFilter` |
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
| `RewardPayoutClaimed` | (`rewardPayoutId?`: ``null``, `user?`: ``null``, `fee?`: ``null``, `rewardRemainder?`: ``null``) => `RewardPayoutClaimedEventFilter` |
| `RewardPayoutClaimed(uint256,address,uint256,uint256)` | (`rewardPayoutId?`: ``null``, `user?`: ``null``, `fee?`: ``null``, `rewardRemainder?`: ``null``) => `RewardPayoutClaimedEventFilter` |
| `RewardPayoutCycleEnded` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => `RewardPayoutCycleEndedEventFilter` |
| `RewardPayoutCycleEnded(address,uint256)` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => `RewardPayoutCycleEndedEventFilter` |
| `RewardPayoutCycleStarted` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => `RewardPayoutCycleStartedEventFilter` |
| `RewardPayoutCycleStarted(address,uint256)` | (`agent?`: ``null``, `rewardPayoutId?`: ``null``) => `RewardPayoutCycleStartedEventFilter` |
| `TaskAdded` | (`agent?`: ``null``, `taskId?`: ``null``) => `TaskAddedEventFilter` |
| `TaskAdded(address,uint256)` | (`agent?`: ``null``, `taskId?`: ``null``) => `TaskAddedEventFilter` |
| `TaskBriefSet` | (`taskId?`: ``null`` \| `BigNumberish`, `specificationHash?`: ``null``) => `TaskBriefSetEventFilter` |
| `TaskBriefSet(uint256,bytes32)` | (`taskId?`: ``null`` \| `BigNumberish`, `specificationHash?`: ``null``) => `TaskBriefSetEventFilter` |
| `TaskCanceled` | (`taskId?`: ``null`` \| `BigNumberish`) => `TaskCanceledEventFilter` |
| `TaskCanceled(uint256)` | (`taskId?`: ``null`` \| `BigNumberish`) => `TaskCanceledEventFilter` |
| `TaskChangedViaSignatures` | (`reviewerAddresses?`: ``null``) => `TaskChangedViaSignaturesEventFilter` |
| `TaskChangedViaSignatures(address[])` | (`reviewerAddresses?`: ``null``) => `TaskChangedViaSignaturesEventFilter` |
| `TaskCompleted` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`) => `TaskCompletedEventFilter` |
| `TaskCompleted(address,uint256)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`) => `TaskCompletedEventFilter` |
| `TaskDeliverableSubmitted` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`, `deliverableHash?`: ``null``) => `TaskDeliverableSubmittedEventFilter` |
| `TaskDeliverableSubmitted(address,uint256,bytes32)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`, `deliverableHash?`: ``null``) => `TaskDeliverableSubmittedEventFilter` |
| `TaskDueDateSet` | (`taskId?`: ``null`` \| `BigNumberish`, `dueDate?`: ``null``) => `TaskDueDateSetEventFilter` |
| `TaskDueDateSet(uint256,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `dueDate?`: ``null``) => `TaskDueDateSetEventFilter` |
| `TaskFinalized` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`) => `TaskFinalizedEventFilter` |
| `TaskFinalized(address,uint256)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`) => `TaskFinalizedEventFilter` |
| `TaskPayoutSet` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => `TaskPayoutSetEventFilter` |
| `TaskPayoutSet(uint256,uint8,address,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => `TaskPayoutSetEventFilter` |
| `TaskRoleUserSet` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `user?`: ``null`` \| `string`) => `TaskRoleUserSetEventFilter` |
| `TaskRoleUserSet(uint256,uint8,address)` | (`taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `user?`: ``null`` \| `string`) => `TaskRoleUserSetEventFilter` |
| `TaskSkillSet` | (`taskId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => `TaskSkillSetEventFilter` |
| `TaskSkillSet(uint256,uint256)` | (`taskId?`: ``null`` \| `BigNumberish`, `skillId?`: ``null`` \| `BigNumberish`) => `TaskSkillSetEventFilter` |
| `TaskWorkRatingRevealed` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `rating?`: ``null``) => `TaskWorkRatingRevealedEventFilter` |
| `TaskWorkRatingRevealed(address,uint256,uint8,uint8)` | (`agent?`: ``null``, `taskId?`: ``null`` \| `BigNumberish`, `role?`: ``null``, `rating?`: ``null``) => `TaskWorkRatingRevealedEventFilter` |
| `TokenUnlocked` | () => `TokenUnlockedEventFilter` |
| `TokenUnlocked()` | () => `TokenUnlockedEventFilter` |
| `TokensBurned` | (`agent?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => `TokensBurnedEventFilter` |
| `TokensBurned(address,address,uint256)` | (`agent?`: ``null``, `token?`: ``null``, `amount?`: ``null``) => `TokensBurnedEventFilter` |
| `TokensMinted` | (`agent?`: ``null``, `who?`: ``null``, `amount?`: ``null``) => `TokensMintedEventFilter` |
| `TokensMinted(address,address,uint256)` | (`agent?`: ``null``, `who?`: ``null``, `amount?`: ``null``) => `TokensMintedEventFilter` |

#### Inherited from

AugmentedIColony.filters

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addDomain(uint256,uint256,uint256)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_parentDomainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addDomain(uint256,uint256,uint256,string)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_parentDomainId`: `BigNumberish`, `_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addPayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_recipient`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `annotateTransaction` | (`_txHash`: `BytesLike`, `_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `approveExitRecovery` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `approveStake` | (`_approvee`: `string`, `_domainId`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `colonyAuthority`: `string`  }\> |
| `bootstrapColony` | (`_users`: `string`[], `_amount`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `burnTokens` | (`token`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelExpenditure` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelTask` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `checkNotAdditionalProtectedVariable` | (`_slot`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`void`]\> |
| `claimColonyFunds` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claimExpenditurePayout` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claimPayment` | (`_id`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claimRewardPayout` | (`_payoutId`: `BigNumberish`, `_squareRoots`: `BigNumberish`[], `key`: `BytesLike`, `value`: `BytesLike`, `branchMask`: `BigNumberish`, `siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claimTaskPayout` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `completeTask` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deobligateStake` | (`_user`: `string`, `_domainId`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deprecateExtension` | (`extensionId`: `BytesLike`, `deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `editColony` | (`_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `editDomain` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `emitDomainReputationPenalty` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `emitDomainReputationReward` | (`_domainId`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `emitSkillReputationPenalty` | (`_skillId`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `emitSkillReputationReward` | (`_skillId`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `enterRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `executeTaskChange` | (`_sigV`: `BigNumberish`[], `_sigR`: `BytesLike`[], `_sigS`: `BytesLike`[], `_mode`: `BigNumberish`[], `_value`: `BigNumberish`, `_data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `executeTaskRoleAssignment` | (`_sigV`: `BigNumberish`[], `_sigR`: `BytesLike`[], `_sigS`: `BytesLike`[], `_mode`: `BigNumberish`[], `_value`: `BigNumberish`, `_data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `exitRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finalizeExpenditure` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finalizePayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finalizeRewardPayout` | (`_payoutId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finalizeTask` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `generateSecret` | (`_salt`: `BytesLike`, `_value`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `secret`: `string`  }\> |
| `getApproval` | (`_user`: `string`, `_obligator`: `string`, `_domainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `approval`: `BigNumber`  }\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `roles`: `string`  }\> |
| `getColonyNetwork` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `colonyNetwork`: `string`  }\> |
| `getDomain` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`DomainStructOutput`] & { `domain`: `DomainStructOutput`  }\> |
| `getDomainCount` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `count`: `BigNumber`  }\> |
| `getDomainFromFundingPot` | (`_fundingPotId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `domainId`: `BigNumber`  }\> |
| `getExpenditure` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`ExpenditureStructOutput`] & { `expenditure`: `ExpenditureStructOutput`  }\> |
| `getExpenditureCount` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `count`: `BigNumber`  }\> |
| `getExpenditureSlot` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`ExpenditureSlotStructOutput`] & { `expenditureSlot`: `ExpenditureSlotStructOutput`  }\> |
| `getExpenditureSlotPayout` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `amount`: `BigNumber`  }\> |
| `getFundingPot` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`number`, `BigNumber`, `BigNumber`] & { `associatedType`: `number` ; `associatedTypeId`: `BigNumber` ; `payoutsWeCannotMake`: `BigNumber`  }\> |
| `getFundingPotBalance` | (`_potId`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `balance`: `BigNumber`  }\> |
| `getFundingPotCount` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `count`: `BigNumber`  }\> |
| `getFundingPotPayout` | (`_potId`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `payout`: `BigNumber`  }\> |
| `getNonRewardPotsTotal` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `amount`: `BigNumber`  }\> |
| `getObligation` | (`_user`: `string`, `_obligator`: `string`, `_domainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `obligation`: `BigNumber`  }\> |
| `getPayment` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`PaymentStructOutput`] & { `payment`: `PaymentStructOutput`  }\> |
| `getPaymentCount` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `count`: `BigNumber`  }\> |
| `getRewardInverse` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `rewardInverse`: `BigNumber`  }\> |
| `getRewardPayoutInfo` | (`_payoutId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`RewardPayoutCycleStructOutput`] & { `rewardPayoutCycle`: `RewardPayoutCycleStructOutput`  }\> |
| `getTask` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`[]] & { `completionTimestamp`: `BigNumber` ; `deliverableHash`: `string` ; `domainId`: `BigNumber` ; `dueDate`: `BigNumber` ; `fundingPotId`: `BigNumber` ; `skillIds`: `BigNumber`[] ; `specificationHash`: `string` ; `status`: `number`  }\> |
| `getTaskChangeNonce` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getTaskCount` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `count`: `BigNumber`  }\> |
| `getTaskPayout` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `amount`: `BigNumber`  }\> |
| `getTaskRole` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`RoleStructOutput`] & { `role`: `RoleStructOutput`  }\> |
| `getTaskWorkRatingSecret` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `secret`: `string`  }\> |
| `getTaskWorkRatingSecretsInfo` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `lastSubmittedAt`: `BigNumber` ; `nSecrets`: `BigNumber`  }\> |
| `getToken` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `tokenAddress`: `string`  }\> |
| `getTokenApproval` | (`token`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `amount`: `BigNumber`  }\> |
| `getTotalTokenApproval` | (`token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `amount`: `BigNumber`  }\> |
| `getUserRoles` | (`_user`: `string`, `_domain`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `roles`: `string`  }\> |
| `hasInheritedUserRole` | (`_user`: `string`, `_domainId`: `BigNumberish`, `_role`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_childDomainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `hasRole`: `boolean`  }\> |
| `hasUserRole` | (`_user`: `string`, `_domainId`: `BigNumberish`, `_role`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `hasRole`: `boolean`  }\> |
| `initialiseColony` | (`_colonyNetworkAddress`: `string`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `installExtension` | (`extensionId`: `BytesLike`, `version`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isInRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `inRecoveryMode`: `boolean`  }\> |
| `lockExpenditure` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `lockToken` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `makeArbitraryTransaction` | (`_to`: `string`, `_action`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `makeArbitraryTransactions` | (`_targets`: `string`[], `_actions`: `BytesLike`[], `_strict`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `makeExpenditure` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `makeSingleArbitraryTransaction` | (`_target`: `string`, `_action`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `makeTask` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_specificationHash`: `BytesLike`, `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `_dueDate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mintTokens` | (`_wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mintTokensFor` | (`_guy`: `string`, `_wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)` | (`_permissionDomainId`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_fromPot`: `BigNumberish`, `_toPot`: `BigNumberish`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_fromPot`: `BigNumberish`, `_toPot`: `BigNumberish`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `numRecoveryRoles` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `numRoles`: `BigNumber`  }\> |
| `obligateStake` | (`_user`: `string`, `_domainId`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `colonyOwner`: `string`  }\> |
| `registerColonyLabel` | (`colonyName`: `string`, `orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeRecoveryRole` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeTaskEvaluatorRole` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeTaskWorkerRole` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `revealTaskWorkRating` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_rating`: `BigNumberish`, `_salt`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setAdministrationRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setAllTaskPayouts` | (`_id`: `BigNumberish`, `_token`: `string`, `_managerAmount`: `BigNumberish`, `_evaluatorAmount`: `BigNumberish`, `_workerAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setArbitrationRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setArchitectureRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setDefaultGlobalClaimDelay` | (`_globalClaimDelay`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setExpenditureClaimDelay` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `_claimDelay`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setExpenditureClaimDelays` | (`_id`: `BigNumberish`, `_slots`: `BigNumberish`[], `_claimDelays`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setExpenditureMetadata(uint256,string)` | (`_id`: `BigNumberish`, `_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setExpenditureMetadata(uint256,uint256,uint256,string)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setExpenditurePayout` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setExpenditurePayoutModifiers` | (`_id`: `BigNumberish`, `_slots`: `BigNumberish`[], `_payoutModifiers`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setExpenditurePayouts` | (`_id`: `BigNumberish`, `_slots`: `BigNumberish`[], `_token`: `string`, `_amounts`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setExpenditureRecipient` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setExpenditureRecipients` | (`_id`: `BigNumberish`, `_slots`: `BigNumberish`[], `_recipients`: `string`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setExpenditureSkill` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setExpenditureSkills` | (`_id`: `BigNumberish`, `_slots`: `BigNumberish`[], `_skillIds`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setExpenditureState` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_storageSlot`: `BigNumberish`, `_mask`: `boolean`[], `_keys`: `BytesLike`[], `_value`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setFundingRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setPaymentPayout` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setPaymentRecipient` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setPaymentSkill` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setRecoveryRole` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setRewardInverse` | (`_rewardInverse`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setRootRole` | (`_user`: `string`, `_setTo`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setStorageSlotRecovery` | (`_slot`: `BigNumberish`, `_value`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTaskBrief` | (`_id`: `BigNumberish`, `_specificationHash`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTaskDueDate` | (`_id`: `BigNumberish`, `_dueDate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTaskEvaluatorPayout` | (`_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTaskEvaluatorRole` | (`_id`: `BigNumberish`, `_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTaskManagerPayout` | (`_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTaskManagerRole` | (`_id`: `BigNumberish`, `_user`: `string`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTaskSkill` | (`_id`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTaskWorkerPayout` | (`_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTaskWorkerRole` | (`_id`: `BigNumberish`, `_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setUserRoles` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_roles`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `startNextRewardPayout` | (`_token`: `string`, `key`: `BytesLike`, `value`: `BytesLike`, `branchMask`: `BigNumberish`, `siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `submitTaskDeliverable` | (`_id`: `BigNumberish`, `_deliverableHash`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `submitTaskDeliverableAndRating` | (`_id`: `BigNumberish`, `_deliverableHash`: `BytesLike`, `_ratingSecret`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `submitTaskWorkRating` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_ratingSecret`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferExpenditure` | (`_id`: `BigNumberish`, `_newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferExpenditureViaArbitration` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferStake` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_obligator`: `string`, `_user`: `string`, `_domainId`: `BigNumberish`, `_amount`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `uninstallExtension` | (`extensionId`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unlockToken` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unlockTokenForUser` | (`user`: `string`, `lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateApprovalAmount` | (`token`: `string`, `spender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateColonyOrbitDB` | (`orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `upgrade` | (`_newVersion`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `upgradeExtension` | (`extensionId`: `BytesLike`, `newVersion`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `userCanSetRoles` | (`_user`: `string`, `_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_childDomainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `canSet`: `boolean`  }\> |
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

• **off**: `OnEvent`<[`ColonyClientV8`](ColonyClientV8.md)\>

#### Inherited from

AugmentedIColony.off

___

### on

• **on**: `OnEvent`<[`ColonyClientV8`](ColonyClientV8.md)\>

#### Inherited from

AugmentedIColony.on

___

### once

• **once**: `OnEvent`<[`ColonyClientV8`](ColonyClientV8.md)\>

#### Inherited from

AugmentedIColony.once

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addDomain(uint256,uint256,uint256)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_parentDomainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addDomain(uint256,uint256,uint256,string)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_parentDomainId`: `BigNumberish`, `_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addPayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_recipient`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `annotateTransaction` | (`_txHash`: `BytesLike`, `_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `approveExitRecovery` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `approveStake` | (`_approvee`: `string`, `_domainId`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `bootstrapColony` | (`_users`: `string`[], `_amount`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `burnTokens` | (`token`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelExpenditure` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelTask` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `checkNotAdditionalProtectedVariable` | (`_slot`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `claimColonyFunds` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claimExpenditurePayout` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claimPayment` | (`_id`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claimRewardPayout` | (`_payoutId`: `BigNumberish`, `_squareRoots`: `BigNumberish`[], `key`: `BytesLike`, `value`: `BytesLike`, `branchMask`: `BigNumberish`, `siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claimTaskPayout` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `completeTask` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deobligateStake` | (`_user`: `string`, `_domainId`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecateExtension` | (`extensionId`: `BytesLike`, `deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `editColony` | (`_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `editDomain` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `emitDomainReputationPenalty` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `emitDomainReputationReward` | (`_domainId`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `emitSkillReputationPenalty` | (`_skillId`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `emitSkillReputationReward` | (`_skillId`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `enterRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `executeTaskChange` | (`_sigV`: `BigNumberish`[], `_sigR`: `BytesLike`[], `_sigS`: `BytesLike`[], `_mode`: `BigNumberish`[], `_value`: `BigNumberish`, `_data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `executeTaskRoleAssignment` | (`_sigV`: `BigNumberish`[], `_sigR`: `BytesLike`[], `_sigS`: `BytesLike`[], `_mode`: `BigNumberish`[], `_value`: `BigNumberish`, `_data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `exitRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finalizeExpenditure` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finalizePayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finalizeRewardPayout` | (`_payoutId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finalizeTask` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `generateSecret` | (`_salt`: `BytesLike`, `_value`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getApproval` | (`_user`: `string`, `_obligator`: `string`, `_domainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColonyNetwork` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDomain` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDomainCount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDomainFromFundingPot` | (`_fundingPotId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExpenditure` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExpenditureCount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExpenditureSlot` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExpenditureSlotPayout` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getFundingPot` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getFundingPotBalance` | (`_potId`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getFundingPotCount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getFundingPotPayout` | (`_potId`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getNonRewardPotsTotal` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getObligation` | (`_user`: `string`, `_obligator`: `string`, `_domainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
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
| `getTokenApproval` | (`token`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTotalTokenApproval` | (`token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getUserRoles` | (`_user`: `string`, `_domain`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `hasInheritedUserRole` | (`_user`: `string`, `_domainId`: `BigNumberish`, `_role`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_childDomainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `hasUserRole` | (`_user`: `string`, `_domainId`: `BigNumberish`, `_role`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialiseColony` | (`_colonyNetworkAddress`: `string`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `installExtension` | (`extensionId`: `BytesLike`, `version`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isInRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `lockExpenditure` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `lockToken` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `makeArbitraryTransaction` | (`_to`: `string`, `_action`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `makeArbitraryTransactions` | (`_targets`: `string`[], `_actions`: `BytesLike`[], `_strict`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `makeExpenditure` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `makeSingleArbitraryTransaction` | (`_target`: `string`, `_action`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `makeTask` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_specificationHash`: `BytesLike`, `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `_dueDate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mintTokens` | (`_wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mintTokensFor` | (`_guy`: `string`, `_wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)` | (`_permissionDomainId`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_fromPot`: `BigNumberish`, `_toPot`: `BigNumberish`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_fromPot`: `BigNumberish`, `_toPot`: `BigNumberish`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `numRecoveryRoles` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `obligateStake` | (`_user`: `string`, `_domainId`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `registerColonyLabel` | (`colonyName`: `string`, `orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeRecoveryRole` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeTaskEvaluatorRole` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeTaskWorkerRole` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `revealTaskWorkRating` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_rating`: `BigNumberish`, `_salt`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setAdministrationRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setAllTaskPayouts` | (`_id`: `BigNumberish`, `_token`: `string`, `_managerAmount`: `BigNumberish`, `_evaluatorAmount`: `BigNumberish`, `_workerAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setArbitrationRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setArchitectureRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setDefaultGlobalClaimDelay` | (`_globalClaimDelay`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setExpenditureClaimDelay` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `_claimDelay`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setExpenditureClaimDelays` | (`_id`: `BigNumberish`, `_slots`: `BigNumberish`[], `_claimDelays`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setExpenditureMetadata(uint256,string)` | (`_id`: `BigNumberish`, `_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setExpenditureMetadata(uint256,uint256,uint256,string)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setExpenditurePayout` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setExpenditurePayoutModifiers` | (`_id`: `BigNumberish`, `_slots`: `BigNumberish`[], `_payoutModifiers`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setExpenditurePayouts` | (`_id`: `BigNumberish`, `_slots`: `BigNumberish`[], `_token`: `string`, `_amounts`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setExpenditureRecipient` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setExpenditureRecipients` | (`_id`: `BigNumberish`, `_slots`: `BigNumberish`[], `_recipients`: `string`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setExpenditureSkill` | (`_id`: `BigNumberish`, `_slot`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setExpenditureSkills` | (`_id`: `BigNumberish`, `_slots`: `BigNumberish`[], `_skillIds`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setExpenditureState` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_storageSlot`: `BigNumberish`, `_mask`: `boolean`[], `_keys`: `BytesLike`[], `_value`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setFundingRole` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_setTo`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setPaymentPayout` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setPaymentRecipient` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setPaymentSkill` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setRecoveryRole` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setRewardInverse` | (`_rewardInverse`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setRootRole` | (`_user`: `string`, `_setTo`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setStorageSlotRecovery` | (`_slot`: `BigNumberish`, `_value`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTaskBrief` | (`_id`: `BigNumberish`, `_specificationHash`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTaskDueDate` | (`_id`: `BigNumberish`, `_dueDate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTaskEvaluatorPayout` | (`_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTaskEvaluatorRole` | (`_id`: `BigNumberish`, `_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTaskManagerPayout` | (`_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTaskManagerRole` | (`_id`: `BigNumberish`, `_user`: `string`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTaskSkill` | (`_id`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTaskWorkerPayout` | (`_id`: `BigNumberish`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTaskWorkerRole` | (`_id`: `BigNumberish`, `_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setUserRoles` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_user`: `string`, `_domainId`: `BigNumberish`, `_roles`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `startNextRewardPayout` | (`_token`: `string`, `key`: `BytesLike`, `value`: `BytesLike`, `branchMask`: `BigNumberish`, `siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `submitTaskDeliverable` | (`_id`: `BigNumberish`, `_deliverableHash`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `submitTaskDeliverableAndRating` | (`_id`: `BigNumberish`, `_deliverableHash`: `BytesLike`, `_ratingSecret`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `submitTaskWorkRating` | (`_id`: `BigNumberish`, `_role`: `BigNumberish`, `_ratingSecret`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferExpenditure` | (`_id`: `BigNumberish`, `_newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferExpenditureViaArbitration` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferStake` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_obligator`: `string`, `_user`: `string`, `_domainId`: `BigNumberish`, `_amount`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstallExtension` | (`extensionId`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unlockToken` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unlockTokenForUser` | (`user`: `string`, `lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateApprovalAmount` | (`token`: `string`, `spender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateColonyOrbitDB` | (`orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `upgrade` | (`_newVersion`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `upgradeExtension` | (`extensionId`: `BytesLike`, `newVersion`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `userCanSetRoles` | (`_user`: `string`, `_domainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_childDomainId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
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

• **removeListener**: `OnEvent`<[`ColonyClientV8`](ColonyClientV8.md)\>

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
| `_permissionDomainId` | `BigNumberish` | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_parentDomainId` | `BigNumberish` | Id of the domain under which the new one will be added |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_permissionDomainId` | `BigNumberish` | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_parentDomainId` | `BigNumberish` | Id of the domain under which the new one will be added |
| `_metadata` | `string` | Metadata relating to the domain. Expected to be the IPFS hash of a JSON blob, but not enforced by the contracts. |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.addDomain(uint256,uint256,uint256,string)

___

### addDomainWithProofs(uint256)

▸ **addDomainWithProofs(uint256)**(`_parentDomainId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [addDomain(uint256,uint256,uint256)](ColonyClientV8.md#adddomain(uint256,uint256,uint256)), but let colonyJS figure out the permission proofs for you.
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

Same as [addDomain(uint256,uint256,uint256,string)](ColonyClientV8.md#adddomain(uint256,uint256,uint256,string)), but let colonyJS figure out the permission proofs for you.
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

#### Inherited from

AugmentedIColony.addPayment

___

### addPaymentWithProofs

▸ **addPaymentWithProofs**(`_recipient`, `_token`, `_amount`, `_domainId`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [addPayment](ColonyClientV8.md#addpayment), but let colonyJS figure out the permission proofs for you.
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
| `_txHash` | `BytesLike` | Hash of transaction being annotated (0x0 for current tx) |
| `_metadata` | `string` | String of metadata for tx |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

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
| `_approvee` | `string` | Address of the account we are willing to let obligate us. |
| `_domainId` | `BigNumberish` | Domain in which we are willing to be obligated. |
| `_amount` | `BigNumberish` | Amount of internal token up to which we are willing to be obligated. |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.approveStake

___

### attach

▸ **attach**(`addressOrName`): [`ColonyClientV8`](ColonyClientV8.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ColonyClientV8`](ColonyClientV8.md)

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
| `_users` | `string`[] | Array of address to bootstrap with reputation |
| `_amount` | `BigNumberish`[] | Amount of reputation/tokens for every address |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `token` | `string` | The address of the token to burn |
| `amount` | `BigNumberish` | The amount of tokens to burn |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_id` | `BigNumberish` | Expenditure identifier |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_id` | `BigNumberish` | Id of the task |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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

### claimExpenditurePayout

▸ **claimExpenditurePayout**(`_id`, `_slot`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

Claim the payout for an expenditure slot. Here the network receives a fee from each payout.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Expenditure identifier |
| `_slot` | `BigNumberish` | Number of the slot |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_squareRoots` | `BigNumberish`[] | Square roots of values used in equation: `_squareRoots[0]` - square root of user reputation, `_squareRoots[1]` - square root of user tokens (deposited in TokenLocking), `_squareRoots[2]` - square root of total reputation, `_squareRoots[3]` - square root of total tokens, `_squareRoots[4]` - square root of numerator (user reputation * user tokens), `_squareRoots[5]` - square root of denominator (total reputation * total tokens), `_squareRoots[6]` - square root of payout amount. |
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

▸ **connect**(`signerOrProvider`): [`ColonyClientV8`](ColonyClientV8.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ColonyClientV8`](ColonyClientV8.md)

#### Inherited from

AugmentedIColony.connect

___

### deobligateStake

▸ **deobligateStake**(`_user`, `_domainId`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Deobligate the user some amount of tokens, releasing the stake.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | Address of the account we are deobligating. |
| `_domainId` | `BigNumberish` | Domain in which we are deobligating the user. |
| `_amount` | `BigNumberish` | Amount of internal token we are deobligating. |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.deobligateStake

___

### deployed

▸ **deployed**(): `Promise`<[`ColonyClientV8`](ColonyClientV8.md)\>

#### Returns

`Promise`<[`ColonyClientV8`](ColonyClientV8.md)\>

#### Inherited from

AugmentedIColony.deployed

___

### deprecateExtension

▸ **deprecateExtension**(`extensionId`, `deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the deprecation of an extension in a colony. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `deprecated` | `boolean` | Whether to deprecate the extension or not |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_metadata` | `string` | IPFS hash of the metadata |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_permissionDomainId` | `BigNumberish` | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_domainId` | `BigNumberish` | Id of the domain being edited |
| `_metadata` | `string` | Metadata relating to the domain. Expected to be the IPFS hash of a JSON blob, but not enforced by the contracts. |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.editDomain

___

### editDomainWithProofs

▸ **editDomainWithProofs**(`_domainId`, `_metadata`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [editDomain](ColonyClientV8.md#editdomain), but let colonyJS figure out the permission proofs for you.
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
| `_permissionDomainId` | `BigNumberish` | The domainId in which I hold the Arbitration role |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_domainId` | `BigNumberish` | The domain where the user will lose reputation |
| `_user` | `string` | The user who will lose reputation |
| `_amount` | `BigNumberish` | The (negative) amount of reputation to lose |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.emitDomainReputationPenalty

___

### emitDomainReputationPenaltyWithProofs

▸ **emitDomainReputationPenaltyWithProofs**(`_domainId`, `_user`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [emitDomainReputationPenalty](ColonyClientV8.md#emitdomainreputationpenalty), but let colonyJS figure out the permission proofs for you.
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
| `_domainId` | `BigNumberish` | The domain where the user will gain reputation |
| `_user` | `string` | The user who will gain reputation |
| `_amount` | `BigNumberish` | The (positive) amount of reputation to gain |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_skillId` | `BigNumberish` | The skill where the user will lose reputation |
| `_user` | `string` | The user who will lose reputation |
| `_amount` | `BigNumberish` | The (negative) amount of reputation to lose |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_skillId` | `BigNumberish` | The skill where the user will gain reputation |
| `_user` | `string` | The user who will gain reputation |
| `_amount` | `BigNumberish` | The (positive) amount of reputation to gain |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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

### finalizeExpenditure

▸ **finalizeExpenditure**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

Finalizes the expenditure and allows for funds to be claimed. Can only be called by expenditure owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Expenditure identifier |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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

Same as [finalizePayment](ColonyClientV8.md#finalizepayment), but let colonyJS figure out the permission proofs for you.
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

### finishUpgrade

▸ **finishUpgrade**(`overrides?`): `Promise`<`ContractTransaction`\>

Can only be called by the colony itself, and only expected to be called as part of the `upgrade()` call. Required to be external so it can be an external call.
A function to be called after an upgrade has been done from v2 to v3.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

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
| `_salt` | `BytesLike` | Salt value |
| `_value` | `BigNumberish` | Value to hide |
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
| `_user` | `string` | User allowing their tokens to be obligated. |
| `_obligator` | `string` | Address of the account we are willing to let obligate us. |
| `_domainId` | `BigNumberish` | Domain in which we are willing to be obligated. |
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
| `_sig` | `BytesLike` | The function signature |
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
| `_id` | `BigNumberish` | Id of the domain which details to get |
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
| `_fundingPotId` | `BigNumberish` | Id of the funding pot |
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
| `_id` | `BigNumberish` | Expenditure identifier |
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
| `_id` | `BigNumberish` | Expenditure identifier |
| `_slot` | `BigNumberish` | Expenditure slot |
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
| `_id` | `BigNumberish` | Expenditure identifier |
| `_slot` | `BigNumberish` | Expenditure slot |
| `_token` | `string` | Token address |
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
| `_id` | `BigNumberish` | Id of the pot which details to get |
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
| `_potId` | `BigNumberish` | Id of the funding pot |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
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
| `_potId` | `BigNumberish` | Id of the funding pot |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.getFundingPotPayout

___

### getMembersReputation

▸ **getMembersReputation**(`skillId`): `Promise`<{ `addresses`: `string`[]  }\>

Get all addresses that have reputation for a given skill.
If you need the skillId for a certain domain you can use the [getDomain](ColonyClientV8.md#getdomain) function.

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

#### Inherited from

AugmentedIColony.getNonRewardPotsTotal

___

### getObligation

▸ **getObligation**(`_user`, `_obligator`, `_domainId`, `overrides?`): `Promise`<`BigNumber`\>

View an obligation of tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | User whose tokens are obligated. |
| `_obligator` | `string` | Address of the account who obligated us. |
| `_domainId` | `BigNumberish` | Domain in which we are obligated. |
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
| `_id` | `BigNumberish` | Payment identifier |
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
If you need the skillId for a certain domain you can use the [getDomain](ColonyClientV8.md#getdomain) function.

**`remarks`**
This function also retrieves the proofs (`branchMask`, `siblings`) that are needed to verify the reputation on chain.
If you don't need to do that (e.g. in order to proof the reputation when calling a contract method), you should probably just use
the [getReputationWithoutProofs](ColonyClientV8.md#getreputationwithoutproofs) method as it requires fewer computations

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
If you need the skillId for a certain domain you can use the [getDomain](ColonyClientV8.md#getdomain) function.

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
| `_payoutId` | `BigNumberish` | Id of the reward payout |
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
| `_id` | `BigNumberish` | Id of the task |
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
| `_id` | `BigNumberish` | Id of the task |
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
| `_id` | `BigNumberish` | Id of the task |
| `_role` | `BigNumberish` | Id of the role, as defined in TaskRole enum |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
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
| `_id` | `BigNumberish` | Id of the task |
| `_role` | `BigNumberish` | Id of the role, as defined in TaskRole enum |
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
| `_id` | `BigNumberish` | Id of the task |
| `_role` | `BigNumberish` | Id of the role, as defined in TaskRole enum |
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
| `_id` | `BigNumberish` | Id of the task |
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

### getTokenApproval

▸ **getTokenApproval**(`token`, `spender`, `overrides?`): `Promise`<`BigNumber`\>

Get the current approval amount

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | The address of the token which was approved |
| `spender` | `string` | The account we have approved |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.getTokenApproval

___

### getTotalTokenApproval

▸ **getTotalTokenApproval**(`token`, `overrides?`): `Promise`<`BigNumber`\>

Get the current total approval amount across all spenders

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | The address of the token which was approved |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedIColony.getTotalTokenApproval

___

### getUserRoles

▸ **getUserRoles**(`_user`, `_domain`, `overrides?`): `Promise`<`string`\>

Gets the bytes32 representation of the roles for a user in a given domain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | The user whose roles we want to get |
| `_domain` | `BigNumberish` | The domain we want to get roles in |
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
| `_user` | `string` | The user whose role we want to check |
| `_domainId` | `BigNumberish` | Domain in which the caller has the role |
| `_role` | `BigNumberish` | The role we want to check for |
| `_childSkillIndex` | `BigNumberish` | The index that the `_childDomainId` is relative to `_domainId` |
| `_childDomainId` | `BigNumberish` | The domain where we want to use the role |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedIColony.hasInheritedUserRole

___

### hasInheritedUserRoleWithProofs

▸ **hasInheritedUserRoleWithProofs**(`_user`, `_domainId`, `_role`, `overrides?`): `Promise`<`boolean`\>

Same as [hasInheritedUserRole](ColonyClientV8.md#hasinheriteduserrole), but let colonyJS figure out the permission proofs for you.
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
| `_user` | `string` | The user whose role we want to check |
| `_domainId` | `BigNumberish` | The domain where we want to check for the role |
| `_role` | `BigNumberish` | The role we want to check for |
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
| `_colonyNetworkAddress` | `string` | Address of the colony network |
| `_token` | `string` | Address of the colony ERC20 Token |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `version` | `BigNumberish` | The new extension version to install |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.installExtension

___

### installExtensionChecked

▸ **installExtensionChecked**(`extension`, `version?`, `overrides?`): `Promise`<`ContractTransaction`\>

Similar to [installExtension](ColonyClientV8.md#installextension), but first check whether the desired extension can be installed in this Colony
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

### lockExpenditure

▸ **lockExpenditure**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

Locks the expenditure and prevents further editing. Can only be called by expenditure owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Expenditure identifier |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.lockExpenditure

___

### lockToken

▸ **lockToken**(`overrides?`): `Promise`<`ContractTransaction`\>

Lock the colony's token. Can only be called by a network-managed extension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.lockToken

___

### makeArbitraryTransaction

▸ **makeArbitraryTransaction**(`_to`, `_action`, `overrides?`): `Promise`<`ContractTransaction`\>

Execute arbitrary transaction on behalf of the Colony DEPRECATED

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_to` | `string` | Contract to receive the function call (cannot be this contract, network or token locking) |
| `_action` | `BytesLike` | Bytes array encoding the function call and arguments |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.makeArbitraryTransaction

___

### makeArbitraryTransactions

▸ **makeArbitraryTransactions**(`_targets`, `_actions`, `_strict`, `overrides?`): `Promise`<`ContractTransaction`\>

Execute arbitrary transactions on behalf of the Colony in series

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_targets` | `string`[] | Array of addressed to be targeted |
| `_actions` | `BytesLike`[] | Array of Bytes arrays encoding the function calls and arguments |
| `_strict` | `boolean` | Boolean indicating whether if one transaction fails, the whole call to this function should fail. |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.makeArbitraryTransactions

___

### makeExpenditure

▸ **makeExpenditure**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `overrides?`): `Promise`<`ContractTransaction`\>

Add a new expenditure in the colony. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `BigNumberish` | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId`, (only used if `_permissionDomainId` is different to `_domainId`) |
| `_domainId` | `BigNumberish` | The domain where the expenditure belongs |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.makeExpenditure

___

### makeExpenditureWithProofs

▸ **makeExpenditureWithProofs**(`_domainId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [makeExpenditure](ColonyClientV8.md#makeexpenditure), but let colonyJS figure out the permission proofs for you.
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

### makeSingleArbitraryTransaction

▸ **makeSingleArbitraryTransaction**(`_target`, `_action`, `overrides?`): `Promise`<`ContractTransaction`\>

Only callable by the colony itself. If you wish to use this functionality, you should use the makeAbitraryTransactions function
Executes a single arbitrary transaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_target` | `string` | Contract to receive the function call |
| `_action` | `BytesLike` | Bytes array encoding the function call and arguments |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.makeSingleArbitraryTransaction

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

Same as [makeTask](ColonyClientV8.md#maketask), but let colonyJS figure out the permission proofs for you.
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

### mintTokensFor

▸ **mintTokensFor**(`_guy`, `_wad`, `overrides?`): `Promise`<`ContractTransaction`\>

Mint `_wad` amount of colony tokens and send to `_guy`. Secured function to authorised members.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_guy` | `string` | Recipient of new tokens |
| `_wad` | `BigNumberish` | Amount to mint |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.mintTokensFor

___

### moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)

▸ **moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)**(`_permissionDomainId`, `_fromChildSkillIndex`, `_toChildSkillIndex`, `_fromPot`, `_toPot`, `_amount`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

DEPRECATEDMove a given amount: `_amount` of `_token` funds from funding pot with id `_fromPot` to one with id `_toPot`.

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

AugmentedIColony.moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)

___

### moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)

▸ **moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_fromChildSkillIndex`, `_toChildSkillIndex`, `_fromPot`, `_toPot`, `_amount`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

Move a given amount: `_amount` of `_token` funds from funding pot with id `_fromPot` to one with id `_toPot`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `BigNumberish` | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `BigNumberish` | The child index in _permissionDomainId where I will be taking this action |
| `_domainId` | `BigNumberish` | The domain where I am taking this action, pointed to by _permissionDomainId and _childSkillIndex |
| `_fromChildSkillIndex` | `BigNumberish` | In the array of child skills for the skill associated with the domain pointed to by _permissionDomainId + _childSkillIndex,         the index of the skill associated with the domain that contains _fromPot |
| `_toChildSkillIndex` | `BigNumberish` | The same, but for the _toPot which the funds are being moved to |
| `_fromPot` | `BigNumberish` | Funding pot id providing the funds |
| `_toPot` | `BigNumberish` | Funding pot id receiving the funds |
| `_amount` | `BigNumberish` | Amount of funds |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)

___

### moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,address)

▸ **moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,address)**(`_fromPot`, `_toPot`, `_amount`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

**`deprecated`**

Same as [moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)](ColonyClientV8.md#movefundsbetweenpots(uint256,uint256,uint256,uint256,uint256,uint256,address)), but let colonyJS figure out the permission proofs for you.
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

MoveFundsBetweenPotsAugmentsB.moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,address)

___

### moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,uint256,address)

▸ **moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,uint256,address)**(`_domainId`, `_fromPot`, `_toPot`, `_amount`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)](ColonyClientV8.md#movefundsbetweenpots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_domainId` | `BigNumberish` | The domain where I am taking this action, pointed to by _permissionDomainId and _childSkillIndex |
| `_fromPot` | `BigNumberish` | Funding pot id providing the funds |
| `_toPot` | `BigNumberish` | Funding pot id receiving the funds |
| `_amount` | `BigNumberish` | Amount of funds |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

MoveFundsBetweenPotsAugmentsB.moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,uint256,address)

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
| `_user` | `string` | Address of the account we are obligating. |
| `_domainId` | `BigNumberish` | Domain in which we are obligating the user. |
| `_amount` | `BigNumberish` | Amount of internal token we are obligating. |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `colonyName` | `string` | The label to register. |
| `orbitdb` | `string` | The path of the orbitDB database associated with the colony name |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.registerColonyLabel

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ColonyClientV8`](ColonyClientV8.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ColonyClientV8`](ColonyClientV8.md)

#### Inherited from

AugmentedIColony.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`ColonyClientV8`](ColonyClientV8.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ColonyClientV8`](ColonyClientV8.md)

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

Same as [setAdministrationRole](ColonyClientV8.md#setadministrationrole), but let colonyJS figure out the permission proofs for you.
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

### setArbitrationRole

▸ **setArbitrationRole**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides?`): `Promise`<`ContractTransaction`\>

Set new colony arbitration role. Can be called by root role or architecture role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `BigNumberish` | Domain in which the caller has root role |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_user` | `string` | User we want to give an arbitration role to |
| `_domainId` | `BigNumberish` | Domain in which we are giving user the role |
| `_setTo` | `boolean` | The state of the role permission (true assign the permission, false revokes it) |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setArbitrationRole

___

### setArbitrationRoleWithProofs

▸ **setArbitrationRoleWithProofs**(`_user`, `_domainId`, `_setTo`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setArbitrationRole](ColonyClientV8.md#setarbitrationrole), but let colonyJS figure out the permission proofs for you.
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

Same as [setArchitectureRole](ColonyClientV8.md#setarchitecturerole), but let colonyJS figure out the permission proofs for you.
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

### setDefaultGlobalClaimDelay

▸ **setDefaultGlobalClaimDelay**(`_globalClaimDelay`, `overrides?`): `Promise`<`ContractTransaction`\>

Update the default global claim delay for expenditures

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_globalClaimDelay` | `BigNumberish` | The new default global claim delay |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setDefaultGlobalClaimDelay

___

### setExpenditureClaimDelay

▸ **setExpenditureClaimDelay**(`_id`, `_slot`, `_claimDelay`, `overrides?`): `Promise`<`ContractTransaction`\>

DeprecatedSets the claim delay on an expenditure slot. Can only be called by expenditure owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Expenditure identifier |
| `_slot` | `BigNumberish` | Number of the slot |
| `_claimDelay` | `BigNumberish` | Duration of time (in seconds) to delay |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setExpenditureClaimDelay

___

### setExpenditureClaimDelays

▸ **setExpenditureClaimDelays**(`_id`, `_slots`, `_claimDelays`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the claim delays in given expenditure slots. Can only be called by expenditure owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Expenditure identifier |
| `_slots` | `BigNumberish`[] | Array of slots to set claim delays |
| `_claimDelays` | `BigNumberish`[] | Durations of time (in seconds) to delay |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setExpenditureClaimDelays

___

### setExpenditureMetadata(uint256,string)

▸ **setExpenditureMetadata(uint256,string)**(`_id`, `_metadata`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the metadata for an expenditure. Can only be called by expenditure owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Id of the expenditure |
| `_metadata` | `string` | IPFS hash of the metadata |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setExpenditureMetadata(uint256,string)

___

### setExpenditureMetadata(uint256,uint256,uint256,string)

▸ **setExpenditureMetadata(uint256,uint256,uint256,string)**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_metadata`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the metadata for an expenditure. Can only be called by Arbitration role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `BigNumberish` | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId`, |
| `_id` | `BigNumberish` | Id of the expenditure |
| `_metadata` | `string` | IPFS hash of the metadata |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setExpenditureMetadata(uint256,uint256,uint256,string)

___

### setExpenditurePayout

▸ **setExpenditurePayout**(`_id`, `_slot`, `_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

DeprecatedSet the token payout on an expenditure slot. Can only be called by expenditure owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Id of the expenditure |
| `_slot` | `BigNumberish` | Number of the slot |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `_amount` | `BigNumberish` | Payout amount |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setExpenditurePayout

___

### setExpenditurePayoutModifiers

▸ **setExpenditurePayoutModifiers**(`_id`, `_slots`, `_payoutModifiers`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the payout modifiers in given expenditure slots. Can only be called by expenditure owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Expenditure identifier |
| `_slots` | `BigNumberish`[] | Array of slots to set payout modifiers |
| `_payoutModifiers` | `BigNumberish`[] | Values (between +/- WAD) to modify the payout & reputation bonus |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setExpenditurePayoutModifiers

___

### setExpenditurePayouts

▸ **setExpenditurePayouts**(`_id`, `_slots`, `_token`, `_amounts`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the token payouts in given expenditure slots. Can only be called by expenditure owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Id of the expenditure |
| `_slots` | `BigNumberish`[] | Array of slots to set payouts |
| `_token` | `string` | Address of the token, `0x0` value indicates Ether |
| `_amounts` | `BigNumberish`[] | Payout amounts |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setExpenditurePayouts

___

### setExpenditureRecipient

▸ **setExpenditureRecipient**(`_id`, `_slot`, `_recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

DeprecatedSets the recipient on an expenditure slot. Can only be called by expenditure owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Id of the expenditure |
| `_slot` | `BigNumberish` | Slot for the recipient address |
| `_recipient` | `string` | Address of the recipient |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setExpenditureRecipient

___

### setExpenditureRecipients

▸ **setExpenditureRecipients**(`_id`, `_slots`, `_recipients`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the recipients in given expenditure slots. Can only be called by expenditure owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Id of the expenditure |
| `_slots` | `BigNumberish`[] | Array of slots to set recipients |
| `_recipients` | `string`[] | Addresses of the recipients |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setExpenditureRecipients

___

### setExpenditureSkill

▸ **setExpenditureSkill**(`_id`, `_slot`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

DeprecatedSets the skill on an expenditure slot. Can only be called by expenditure owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Expenditure identifier |
| `_slot` | `BigNumberish` | Number of the slot |
| `_skillId` | `BigNumberish` | Id of the new skill to set |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setExpenditureSkill

___

### setExpenditureSkills

▸ **setExpenditureSkills**(`_id`, `_slots`, `_skillIds`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the skill on an expenditure slot. Can only be called by expenditure owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Expenditure identifier |
| `_slots` | `BigNumberish`[] | Array of slots to set skills |
| `_skillIds` | `BigNumberish`[] | Ids of the new skills to set |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setExpenditureSkills

___

### setExpenditureState

▸ **setExpenditureState**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_storageSlot`, `_mask`, `_keys`, `_value`, `overrides?`): `Promise`<`ContractTransaction`\>

Set arbitrary state on an expenditure slot. Can only be called by Arbitration role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `BigNumberish` | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId`, (only used if `_permissionDomainId` is different to `_domainId`) |
| `_id` | `BigNumberish` | Expenditure identifier |
| `_storageSlot` | `BigNumberish` | Number of the top-level storage slot (25, 26, or 27) |
| `_mask` | `boolean`[] | Array of booleans indicated whether a key is a mapping (F) or an array index (T). |
| `_keys` | `BytesLike`[] | Array of additional keys (for mappings & arrays) |
| `_value` | `BytesLike` | Value to set at location |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setExpenditureState

___

### setExpenditureStateWithProofs

▸ **setExpenditureStateWithProofs**(`_id`, `_storageSlot`, `_mask`, `_keys`, `_value`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [editDomain](ColonyClientV8.md#editdomain), but let colonyJS figure out the permission proofs for you.
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

Same as [setFundingRole](ColonyClientV8.md#setfundingrole), but let colonyJS figure out the permission proofs for you.
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

Same as [setPaymentPayout](ColonyClientV8.md#setpaymentpayout), but let colonyJS figure out the permission proofs for you.
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

Same as [setPaymentRecipient](ColonyClientV8.md#setpaymentrecipient), but let colonyJS figure out the permission proofs for you.
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

Same as [setPaymentSkill](ColonyClientV8.md#setpaymentskill), but let colonyJS figure out the permission proofs for you.
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

### setUserRoles

▸ **setUserRoles**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_roles`, `overrides?`): `Promise`<`ContractTransaction`\>

Set several roles in one transaction. Can be called by root role or architecture role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `BigNumberish` | Domain in which the caller has root/architecture role |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_user` | `string` | User we want to give a role to |
| `_domainId` | `BigNumberish` | Domain in which we are giving user the role |
| `_roles` | `BytesLike` | Byte array representing the desired role setting (1 for on, 0 for off) |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.setUserRoles

___

### setUserRolesWithProofs

▸ **setUserRolesWithProofs**(`_user`, `_domainId`, `_roles`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setUserRoles](ColonyClientV8.md#setuserroles), but let colonyJS figure out the permission proofs for you.
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

### transferExpenditure

▸ **transferExpenditure**(`_id`, `_newOwner`, `overrides?`): `Promise`<`ContractTransaction`\>

Updates the expenditure owner. Can only be called by expenditure owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Expenditure identifier |
| `_newOwner` | `string` | New owner of expenditure |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_permissionDomainId` | `BigNumberish` | The domainId in which I have the permission to take this action |
| `_childSkillIndex` | `BigNumberish` | The index that the `_domainId` is relative to `_permissionDomainId`, (only used if `_permissionDomainId` is different to `_domainId`) |
| `_id` | `BigNumberish` | Expenditure identifier |
| `_newOwner` | `string` | New owner of expenditure |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.transferExpenditureViaArbitration

___

### transferExpenditureViaArbitrationWithProofs

▸ **transferExpenditureViaArbitrationWithProofs**(`_id`, `_newOwner`, `overrides?`): `Promise`<`ContractTransaction`\>

**`deprecated`**

Same as [transferExpenditureViaArbitration](ColonyClientV8.md#transferexpenditureviaarbitration), but let colonyJS figure out the permission proofs for you.
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
| `_permissionDomainId` | `BigNumberish` | The domainId in which I have the permission to take this action. |
| `_childSkillIndex` | `BigNumberish` | The child index in `_permissionDomainId` where we can find `_domainId`. |
| `_obligator` | `string` | Address of the account who set the obligation. |
| `_user` | `string` | Address of the account we are transferring. |
| `_domainId` | `BigNumberish` | Domain in which we are transferring the tokens. |
| `_amount` | `BigNumberish` | Amount of internal token we are transferring. |
| `_recipient` | `string` | Recipient of the transferred tokens. |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.transferStake

___

### transferStakeWithProofs

▸ **transferStakeWithProofs**(`_obligator`, `_user`, `_domainId`, `_amount`, `_recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [transferStake](ColonyClientV8.md#transferstake), but let colonyJS figure out the permission proofs for you.
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
| `extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

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
| `user` | `string` | The user to unlock |
| `lockId` | `BigNumberish` | The specific lock to unlock |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.unlockTokenForUser

___

### updateApprovalAmount

▸ **updateApprovalAmount**(`token`, `spender`, `overrides?`): `Promise`<`ContractTransaction`\>

Update the internal bookkeeping around external ERC20 approvals

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | The address of the token which was approved |
| `spender` | `string` | The account we have approved |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.updateApprovalAmount

___

### updateColonyOrbitDB

▸ **updateColonyOrbitDB**(`orbitdb`, `overrides?`): `Promise`<`ContractTransaction`\>

Update a colony's orbitdb address. Can only be called by a colony with a registered subdomain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orbitdb` | `string` | The path of the orbitDB database to be associated with the colony |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `_newVersion` | `BigNumberish` | The target version for the upgrade |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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
| `extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `newVersion` | `BigNumberish` | The version to upgrade to (must be one larger than the current version) |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedIColony.upgradeExtension

___

### upgradeExtensionChecked

▸ **upgradeExtensionChecked**(`extension`, `newVersion?`, `overrides?`): `Promise`<`ContractTransaction`\>

Similar to [upgradeExtension](ColonyClientV8.md#upgradeextension), but first check whether the desired extension can be upgraded to the desired version in this Colony
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
| `_user` | `string` | The user whose permissions we want to check |
| `_domainId` | `BigNumberish` | Domain in which the caller has the role (currently Root or Architecture) |
| `_childSkillIndex` | `BigNumberish` | The index that the `_childDomainId` is relative to `_domainId` |
| `_childDomainId` | `BigNumberish` | The domain where we want to edit roles |
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
| `key` | `BytesLike` | The key of the element the proof is for. |
| `value` | `BytesLike` | The value of the element that the proof is for. |
| `branchMask` | `BigNumberish` | The branchmask of the proof |
| `siblings` | `BytesLike`[] | The siblings of the proof |
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
