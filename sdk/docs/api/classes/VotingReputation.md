# Class: VotingReputation

## `VotingReputation` (Motions & Disputes)

The `VotingReputation` extension allows any member of a Colony to propose a Motion to take an `action` that will pass after a security delay unless somebody Objects. This applies to all actions, such as creating an expenditure, managing funds, or managing teams.

### What is a Motion?

Within Colony a Motion is an on-chain proposal whose two sides (_Yay_ or _Nay_) can be supported by staking the Colony's native token for that side. Motions _always_ have an `action` attached to them which is a contract transaction that can take place in a Colony. For example, Motions could be created to move funds from one team to another, for paying someone that did work or minting new native tokens (even arbitrary transaction on any contract in the name of the Colony are supported!).
Motions that pass (the outcome is _Yay_) will execute the `action` once they are finalized. If the outcome is _Nay_, there is no action taking place.

### The Motion lifecycle

:::info

The exact lifecycle is determined by the parameters that were set when the `VotingReputation` extension was installed for the Colony. You can find a detailed explanation of all the parameters [here](https://colony.gitbook.io/colony/extensions/governance/parameters).

:::

#### Creating a Motion

See [ColonyTxCreator.motion](ColonyTxCreator.md#motion) or [ColonyTxCreator.metaMotion](ColonyTxCreator.md#metamotion).

Anyone within a Colony can start a motion. In Colony SDK, this is as easy as sending a transaction of the same kind. There the `action` (the contract transaction) for the Motion will be defined. This is essentially nothing else than an encoded contract function string alongside its parameters (see for detailed info [here](https://medium.com/linum-labs/a-technical-primer-on-using-encoded-function-calls-50e2b9939223) - but don't worry. In Colony SDK this will all be taken care of by the [ColonyTxCreator](ColonyTxCreator.md)).

 #### Staking

See [VotingReputation.stakeMotion](VotingReputation.md#stakemotion).

Once a motion is created, native tokens can be staked to support either of its sides (_Yay_ or _Nay_). A user can only stake as many tokens for either side as they have reputation in the team the motion is created in. A side can be staked by the motion creator and an arbitrary number of additional users as long as they adhere to the minimum stake per user that was defined in the extensions parameters. The maximum amount a user can stake is also determined by the amount of reputation in the team in which the Motion takes place.

:::caution Over-staking

Once a side of a Motion is activated, further attempts to stake tokens for that side will revert. It is not necessary or sensible to stake more tokens than needed. Keep in mind that both sides can be activated at the same time (see below for what happens then). You can use the [VotingReputation.getRemainingStakes](VotingReputation.md#getremainingstakes) method to see how many tokens need to be staked on each side for them to activate.

:::

After the staking phase (which has a predetermined runtime) one of these four cases can happen:

* **Case 1**: _Yay_ side reaches minimum stakes, _Nay_ side does not: the motion passed and can be finalized. All stakes are returned
* **Case 2**: _Nay_ side reaches minimum stakes, _Yay_ side does not: the motion failed and will not execute. All stakes are returned
* **Case 3**: Neither _Yay_ or _Nay_ side have reached minimum stakes: nothing happens. All stakes are returned.
* **Case 4**: Both _Yay_ and _Nay_ sides are activated. The Motion will go into _Voting_ immediately (and will not wait out the staking period).

#### Voting

See [VotingReputation.submitVote](VotingReputation.md#submitvote).

As soon as the voting phase starts, anyone with reputation in the team the Motion was created in can vote for a side. Votes are secret (i.e. they're encrypted using your private key), and weighted by reputation. Vote weight is proportional to the voter's reputation in the team in which the vote is occurring.

Voters receive a reward for voting proportional to their reputation in the team in which the vote is occurring. The reward comes from the stake provided by whichever side of the dispute loses. It doesn't matter whether the voter voters for the winning or the losing side, they are rewarded the same either way.

#### Revealing the votes

See [VotingReputation.revealVote](VotingReputation.md#revealvote).

After the voting period is complete, the Reveal phase starts. Votes must be Revealed in order to be counted, and for the voter to receive their voter reward. The Reveal phase ends when either the time runs out, or everyone who has voted reveals their vote, whichever comes first.

:::danger Staking penalties

If you staked tokens for the side that eventually lost you will lose some of your stake. The amount lost will be smaller the closer the decision ultimately ended up being.

:::

### The structure of a Motion

You can - at any point in the lifecycle inspect the current state of a Motion. Using the [VotingReputation.getMotion](VotingReputation.md#getmotion) method, the resulting object will have the following properties:

| Property | Types | Description |
| :------ | :------ | :------ |
| `events` | `[BigNumberish, BigNumberish, BigNumberish]` | Timestamps (in **seconds**) for when the phases for staking, voting and revealing end |
| `rootHash` | `BytesLike` | The root hash of the reputation tree at the time the motion was created |
| `domainId` | `BigNumberish` | The domain/team the Motion is in |
| `skillId`  | `BigNumberish` | The skillId associated with the domain |
| `skillRep` | `BigNumberish` | The total amount of reputation (among all users) that can vote for this motion |
| `repSubmitted` | `BigNumberish` | The amount of reputation that has submitted a vote |
| `paidVoterComp` | `BigNumberish` | Total compensation that was paid out to voters who revealed their votes |
| `pastVoterComp` | `[BigNumberish, BigNumberish]` | Keeps track of previous compensations when escalated |
| `stakes` | `[BigNumberish, BigNumberish]` | The amounts staked for each of the sides |
| `votes` | `[BigNumberish, BigNumberish]`  | The amount of reputation voted for each side |
| `escalated` | `boolean` | Whether a Motion was escelated to a higher team |
| `finalized` | `boolean` | Whether the motion is finalized (done) |
| `altTarget` | `string`  | A contract the motion should act on. Can be a Colony or an extension contract |
| `action` | `BytesLike`  | The data for the contract method that will be executed once the motion passes |

## Constructors

### constructor

• **new VotingReputation**(`colony`, `votingReputationClient`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `colony` | [`Colony`](Colony.md) |
| `votingReputationClient` | `VotingReputationClientV8` |

## Properties

### address

• **address**: `string`

___

### version

• **version**: `number`

___

### extensionType

▪ `Static` **extensionType**: [`IVotingReputation`](../enums/Extension.md#ivotingreputation) = `Extension.IVotingReputation`

___

### supportedVersions

▪ `Static` **supportedVersions**: ``8``[]

## Methods

### annotateDecision

▸ **annotateDecision**(`txHash`, `metadata`): [`MetaTxCreator`](MetaTxCreator.md)<`ColonyClientV12`, ``"annotateTransaction"``, { `agent?`: `string` ; `metadata?`: `string` ; `txHash?`: `string`  }, [`Decision`](../enums/MetadataType.md#decision)\>

Annotate a decision with IPFS metadata to provide extra information

This will annotate a decision with certain metadata (see below). This only really works for transactions that happened within this Colony. This will connect the decision to the (optionally generated) IPFS hash accordingly.

**`Remarks`**

If [DecisionMetadata](../interfaces/DecisionMetadata.md) is provided directly (as opposed to a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file) this requires an [IpfsAdapter](../interfaces/IpfsAdapter.md) that can upload and pin to IPFS. See its documentation for more information. Keep in mind that **the annotation itself is a transaction**.

**`Example`**

```typescript
// Immediately executing async function
(async function() {

  // Create a motion to pay 10 of the native token to some (maybe your own?) address
  const [, { transactionHash }] = await colony.ext.motions.createDecision().tx();
  // Annotate the decision transaction with important data
  // (forced transaction example)
  await colony.ext.motions.annotateDecision(
     transactionHash,
     {
       title: 'Should we make the naked-mole-rat our official mascot?',
       description: 'I think it is time',
     },
  ).tx();
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txHash` | `string` | Transaction hash of the transaction to annotate (within the Colony) |
| `metadata` | `string` \| [`DecisionMetadata`](../interfaces/DecisionMetadata.md) | The annotation metadata you would like to annotate the transaction with (or an IPFS CID pointing to valid metadata) |

#### Returns

[`MetaTxCreator`](MetaTxCreator.md)<`ColonyClientV12`, ``"annotateTransaction"``, { `agent?`: `string` ; `metadata?`: `string` ; `txHash?`: `string`  }, [`Decision`](../enums/MetadataType.md#decision)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `txHash` | string | The hash of the annotated transaction |
| `metadata` | string | The IPFS hash (CID) of the metadata object |

#### Metadata

(can be obtained by calling and awaiting the `getMetadata` function)

| Property | Type | Description |
| :------ | :------ | :------ |
| `title` | string | Title of the decision |
| `description` | string | Longer description of the decision |
| `motionDomainId` | number | Team the decision was created in |

___

### approveStake

▸ **approveStake**(`amount`, `teamId?`): [`MetaTxCreator`](MetaTxCreator.md)<`ColonyClientV12`, ``"approveStake"``, { `amount?`: `BigNumber` ; `approvedBy?`: `string` ; `token?`: `string` ; `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

Approve `amount` of the "activated" native tokens of a user for staking in a specific team
After a token was "activated" (approved and deposited via the native token interface) it can be used for staking motions. To stake a motion, the token amount for staking has to be approved for the domain the motion was created in. See also the example in [VotingReputation.stakeMotion](VotingReputation.md#stakemotion)

**`Remarks`**

This method can't be executed as a motion

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `amount` | `BigNumberish` | `undefined` | Amount of "activated" tokens to be approved for staking |
| `teamId` | `BigNumberish` | `Id.RootDomain` | Team that the approved tokens can be used in for staking motions |

#### Returns

[`MetaTxCreator`](MetaTxCreator.md)<`ColonyClientV12`, ``"approveStake"``, { `amount?`: `BigNumber` ; `approvedBy?`: `string` ; `token?`: `string` ; `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `token` | string | The address of the token that is approved for staking |
| `user` | string | The address of the VotingReputation contract |
| `approvedBy` | string | The address of the Colony |
| `amount` | BigNumber | Amount of the token that was approved for staking |

___

### createDecision

▸ **createDecision**(`team?`): [`MetaTxCreator`](MetaTxCreator.md)<`VotingReputationClientV8`, ``"createMotion"``, { `creator?`: `string` ; `domainId?`: `BigNumber` ; `motionId?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

Annotate a decision with IPFS metadata to provide extra information

Keep in mind that a decision is just a motion without an on-chain action that is being triggered once it finalizes

**`Remarks`**

If [DecisionMetadata](../interfaces/DecisionMetadata.md) is provided directly (as opposed to a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file) this requires an [IpfsAdapter](../interfaces/IpfsAdapter.md) that can upload and pin to IPFS. See its documentation for more information. Keep in mind that **the annotation itself is a transaction**.

**`Example`**

```typescript
// Immediately executing async function
(async function() {

  // Create an empty decision in the Root team
  const [, { transactionHash }] = await colony.ext.motions.createDecision().tx();
  // Annotate the decision transaction with important data
  // (forced transaction example)
  await colony.ext.motions.annotateDecision(
     transactionHash,
     {
       title: 'Should we make the naked-mole-rat our official mascot?',
       description: 'I think it is time',
     },
  ).tx();
})();
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `team` | `BigNumberish` | `Id.RootDomain` | Team id to create the decision in |

#### Returns

[`MetaTxCreator`](MetaTxCreator.md)<`VotingReputationClientV8`, ``"createMotion"``, { `creator?`: `string` ; `domainId?`: `BigNumber` ; `motionId?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `motionId` | BigNumber | Id of the decision (motion) |
| `creator` | string | Address of the user who created the decision |
| `domainId` | BigNumber | Team the decision was created in |

___

### escalateMotion

▸ **escalateMotion**(`motionId`, `newTeamId`): [`MetaTxCreator`](MetaTxCreator.md)<`VotingReputationClientV8`, ``"escalateMotion"``, { `domainId?`: `BigNumber` ; `escalator?`: `string` ; `motionId?`: `BigNumber` ; `newDomainId?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

Escalate a motion to a parent team

If all votes for a motion have been revealed but a user is not happy with the outcome, it can be escalated to a parent team (including grandparents, great-grandparents, etc.) as long as the escalation period has not passed yet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `motionId` | `BigNumberish` | The motionId of the motion to be escalated |
| `newTeamId` | `BigNumberish` | The id of the team the motion should be escalated to |

#### Returns

[`MetaTxCreator`](MetaTxCreator.md)<`VotingReputationClientV8`, ``"escalateMotion"``, { `domainId?`: `BigNumber` ; `escalator?`: `string` ; `motionId?`: `BigNumber` ; `newDomainId?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `motionId` | BigNumber | ID of the motion to be escalated |
| `newTeamId` | string | The ID of the team the motion should be escalated to (has to be a direct parent of the previous team) |

___

### finalizeMotion

▸ **finalizeMotion**(`motionId`): [`MetaTxCreator`](MetaTxCreator.md)<`VotingReputationClientV8`, ``"finalizeMotion"``, { `action?`: `string` ; `executed?`: `boolean` ; `motionId?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

Finalize a motion, executing its action

**`Remarks`**

* A motion cannot be finalized if:
  - The required Yay or Nay stake amount has not been reached
  - The staking period is not up yet
  - Voting is still in progress
  - The motion was already finalized
* This method can't be executed as a motion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `motionId` | `BigNumberish` | The motionId of the motion to be finalized |

#### Returns

[`MetaTxCreator`](MetaTxCreator.md)<`VotingReputationClientV8`, ``"finalizeMotion"``, { `action?`: `string` ; `executed?`: `boolean` ; `motionId?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `motionId` | BigNumber | ID of the motion created |
| `action` | string | The action that was executed in case Yay won |
| `exectued` | boolean | Whether the action was executed (Yay won)|

___

### getMinStake

▸ **getMinStake**(`motion`, `vote`): `Promise`<`BigNumber`\>

Get the minimum stake that has to be supplied for a motion and a certain vote (NOT for activation)

**`Remarks`**

To get the missing amount for activation, call [getRemainingStakes](VotingReputation.md#getremainingstakes)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `motion` | `MotionStructOutput` | A Motion struct object |
| `vote` | [`Vote`](../enums/Vote.md) | A vote for (Yay) or against (Nay) the motion |

#### Returns

`Promise`<`BigNumber`\>

The minimum stake amount

___

### getMotion

▸ **getMotion**(`motionId`): `Promise`<`MotionStructOutput`\>

Get a motion by its id

**`Remarks`**

Will throw if motionId does not exist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `motionId` | `BigNumberish` | The motionId to get the information for |

#### Returns

`Promise`<`MotionStructOutput`\>

A Motion object

___

### getMotionState

▸ **getMotionState**(`motionId`): `Promise`<`number`\>

Get the motion state as a number

Will be one of the following:

- `Staking` (= 1)
- `Submit` (= 2)
- `Reveal` (= 3)
- `Closed` (= 4)
- `Finalizable` (= 5)
- `Finalized` (= 6)
- `Failed` (= 7)

**`Example`**

You can show the state as a string like so
```typescript
import { MotionState } from '@colony/sdk';

// Immediately executing async function
(async function() {
  // Get state of Motion `1`
  const state = await colony.ext.motions.getMotionState(1);
  const stateStr = MotionState[state]; // `Staking` (or another of the above)
})();
```

**`Remarks`**

Will throw if motionId does not exist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `motionId` | `BigNumberish` | The motionId to get the state for |

#### Returns

`Promise`<`number`\>

The motion state

___

### getRemainingStakes

▸ **getRemainingStakes**(`motionId`): `Promise`<{ `remainingToFullyNayStaked`: `BigNumber` ; `remainingToFullyYayStaked`: `BigNumber`  }\>

Get the amounts remaining for Yay/Nay sides to be activated

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `motionId` | `BigNumberish` | The motionId of the motion |

#### Returns

`Promise`<{ `remainingToFullyNayStaked`: `BigNumber` ; `remainingToFullyYayStaked`: `BigNumber`  }\>

An object containing the remaining amounts

___

### revealVote

▸ **revealVote**(`motionId`, `vote?`): [`MetaTxCreator`](MetaTxCreator.md)<`VotingReputationClientV8`, ``"revealVote"``, { `motionId?`: `BigNumber` ; `vote?`: `BigNumber` ; `voter?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

Reveal a vote for a motion

**`Remarks`**

* In order for a vote to count it has to be revealed within the reveal period. Only then rewards can be paid out to the voter.
* This method can't be executed as a motion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `motionId` | `BigNumberish` | The motionId of the motion to be finalized |
| `vote?` | [`Vote`](../enums/Vote.md) | The vote that was cast. If not provided Colony SDK will try to find out which side was voted on (not recommended) |

#### Returns

[`MetaTxCreator`](MetaTxCreator.md)<`VotingReputationClientV8`, ``"revealVote"``, { `motionId?`: `BigNumber` ; `vote?`: `BigNumber` ; `voter?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `motionId` | BigNumber | ID of the motion to be revealed |
| `voter` | string | The address of the user who voted |
| `vote` | BigNumber | The vote that was cast (0 = Nay, 1 = Yay) |

___

### stakeMotion

▸ **stakeMotion**(`motionId`, `vote`, `amount`): [`MetaTxCreator`](MetaTxCreator.md)<`VotingReputationClientV8`, ``"stakeMotion"``, { `amount?`: `BigNumber` ; `eventIndex?`: `BigNumber` ; `motionId?`: `BigNumber` ; `staker?`: `string` ; `vote?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

Stake `amount` to support a motion with your vote

**`Remarks`**

* In order to stake a motion the amount to stake (or any amount higher than that) needs to be "activated" and approved for staking in the motion's team first. See below for a full example. Usually you would have more tokens "activated" or even approved for a domain than you would stake, to make this process more seamless
* This method can't be executed as a motion

**`Example`**

```typescript
import { Vote, w } from '@colony/sdk';

// Immediately executing async function
(async function() {
  const token = colony.getToken();
  // Approve 200 tokens to be "activated"
  await token.approve(w`200`);
  // Deposit all of approved the tokens
  await token.deposit(w`200`);
  // Approve 150 tokens for staking in the root domain (can only be forced)
  await colony.ext.motions.approveStake(w`150`).tx();
  // Stake 100 tokens for motion with id 3
  await colony.ext.motions.stakeMotion(3, Vote.Yay, w`100`);
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `motionId` | `BigNumberish` | - |
| `vote` | [`Vote`](../enums/Vote.md) | - |
| `amount` | `BigNumberish` | Amount of the token to be approved |

#### Returns

[`MetaTxCreator`](MetaTxCreator.md)<`VotingReputationClientV8`, ``"stakeMotion"``, { `amount?`: `BigNumber` ; `eventIndex?`: `BigNumber` ; `motionId?`: `BigNumber` ; `staker?`: `string` ; `vote?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `motionId` | BigNumber | ID of the motion to stake for |
| `staker` | string | The address that staked the tokens |
| `vote` | Vote | The vote that was staked for (Yay or Nay). See [Vote](../enums/Vote.md) |
| `amount` | BigNumber | The amount that was staked for that vote |
| `eventIndex` | BigNumber | If the stake triggered a motion event, this will contain its index |

___

### submitVote

▸ **submitVote**(`motionId`, `vote`): [`MetaTxCreator`](MetaTxCreator.md)<`VotingReputationClientV8`, ``"submitVote"``, { `motionId?`: `BigNumber` ; `voter?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

Submit a vote for a motion

**`Remarks`**

This method can't be executed as a motion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `motionId` | `BigNumberish` | The motionId of the motion to be finalized |
| `vote` | [`Vote`](../enums/Vote.md) | A vote for (Yay) or against (Nay) the motion |

#### Returns

[`MetaTxCreator`](MetaTxCreator.md)<`VotingReputationClientV8`, ``"submitVote"``, { `motionId?`: `BigNumber` ; `voter?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `motionId` | BigNumber | ID of the motion to submit a vote for |
| `voter` | string | The address of the user who voted |

___

### upgrade

▸ **upgrade**(`toVersion?`): [`ColonyTxCreator`](ColonyTxCreator.md)<`ColonyClientV12`, ``"upgradeExtension"``, { `colony?`: `string` ; `extensionId?`: `string` ; `version?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

Upgrade this extension to the next or a custom version

This method upgrades this extension to a specified version or, if no version is provided to the next higher version.

**`Remarks`**

* Only users with *Root* role are allowed to upgrade an extension (or another extension with appropriate permissions)
* Downgrading of extensions is not possible

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `toVersion?` | `BigNumberish` | Specify a custom version to upgrade the extension to |

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`ColonyClientV12`, ``"upgradeExtension"``, { `colony?`: `string` ; `extensionId?`: `string` ; `version?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `extensionId` | string | Extension id (name of the extension) that was upgraded |
| `oldVersion` | BigNumber | Version of the colony before the upgrade |
| `newVersion` | BigNumber | Version of the colony after the upgrade |

___

### getLatestSupportedVersion

▸ `Static` **getLatestSupportedVersion**(): ``8``

#### Returns

``8``
