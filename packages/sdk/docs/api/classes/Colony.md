# Class: Colony

## Properties

### address

• **address**: `string`

The colony's smart contract address

___

### colonyNetwork

• **colonyNetwork**: [`ColonyNetwork`](ColonyNetwork.md)

A shortcut to the [ColonyNetwork](ColonyNetwork.md) instance

___

### ext

• **ext**: [`SupportedExtensions`](../interfaces/SupportedExtensions.md)

Supported extensions

All of the installed (and supported) colony extensions live here

**`Example`**

```typescript
import { w } from '@colony/sdk';

// Immediately executing async function
(async function() {
  // Pay someone using the OneTransactionPayment extension
  // (forced transaction example)
  await colony.ext.oneTx.pay(
     '0xb77D57F4959eAfA0339424b83FcFaf9c15407461',
     w`10`,
  ).tx();
})();
```

___

### reputation

• **reputation**: `ReputationClient`

The client to fetch reputation for this Colony

___

### token

• **token**: [`Token`](../README.md#token)

An shortcut to the colony's native token instance

___

### version

• **version**: ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` \| ``11`` \| ``12``

Contract version

Colony contracts are upgradable! Here you'll finde the currently installed version of the contract

___

### supportedVersions

▪ `Static` **supportedVersions**: (``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` \| ``11`` \| ``12``)[]

The currently supported Colony version. If a Colony is not on this version it has to be upgraded.
If this is not an option, Colony SDK might throw errors at certain points. Usage of ColonyJS is advised in these cases

## Methods

### annotateTransaction

▸ **annotateTransaction**(`txHash`, `metadata`): [`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"annotateTransaction"``, { `agent?`: `string` ; `metadata?`: `string` ; `txHash?`: `string`  }, [`Annotation`](../enums/MetadataType.md#annotation)\>

Annotate a transaction with IPFS metadata to provide extra information

This will annotate a transaction with an arbitrary text message. This only really works for transactions that happened within this Colony. This will connect the transaction to the (optionally generated) IPFS hash accordingly.

**`Remarks`**

If AnnotationMetadata is provided directly (as opposed to a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file) this requires an [IpfsAdapter](../interfaces/IpfsAdapter.md) that can upload and pin to IPFS. See its documentation for more information. Keep in mind that **the annotation itself is a transaction**.

**`Example`**

```typescript
// Immediately executing async function
(async function() {

  // Create a motion to pay 10 of the native token to some (maybe your own?) address
  const [, { transactionHash }] = await colony.ext.oneTx.pay(
    '0xb77D57F4959eAfA0339424b83FcFaf9c15407461',
    w`10`,
  ).motion();
  // Annotate the motion transaction with a little explanation :)
  // (forced transaction example)
  await colony.annotateTransaction(
     transactionHash,
     { annotationMsg: 'I am creating this motion because I think I deserve a little bonus' },
  ).tx();
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txHash` | `string` | Transaction hash of the transaction to annotate (within the Colony) |
| `metadata` | `string` \| `AnnotationData` | The annotation metadata you would like to annotate the transaction with (or an IPFS CID pointing to valid metadata) |

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"annotateTransaction"``, { `agent?`: `string` ; `metadata?`: `string` ; `txHash?`: `string`  }, [`Annotation`](../enums/MetadataType.md#annotation)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `txHash` | BigNumber | The hash of the annotated transaction |
| `metadata` | BigNumber | The IPFS hash (CID) of the metadata object |

#### Metadata

(can be obtained by calling and awaiting the `getMetadata` function)

| Property | Type | Description |
| :------ | :------ | :------ |
| `annotationMsg` | string | Free form text message to annotate the transaction with |

___

### awardReputation

▸ **awardReputation**(`address`, `amount`, `team?`): [`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"emitDomainReputationReward"``, { `agent?`: `string` ; `amount?`: `BigNumber` ; `skillId?`: `BigNumber` ; `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

Award reputation to a user within a team

Use with care. An imbalance of native tokens and reputation might influence your governance process negatively

**`Remarks`**

Only users with *Root* role are allowed to award reputation

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `address` | `string` | `undefined` | Address of user to award reputation |
| `amount` | `BigNumberish` | `undefined` | Amount of reputation to award |
| `team` | `BigNumberish` | `Id.RootDomain` | Team to award reputation in (defaults to Root team) |

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"emitDomainReputationReward"``, { `agent?`: `string` ; `amount?`: `BigNumber` ; `skillId?`: `BigNumber` ; `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `user` | string | User who was awarded reputation |
| `skillId` | BigNumber | Corresponding skillId to the team |
| `amount` | BigNumber | Amount that was awarded |

___

### claimFunds

▸ **claimFunds**(`tokenAddress?`): [`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"claimColonyFunds"``, { `fee?`: `BigNumber` ; `payoutRemainder?`: `BigNumber` ; `token?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

Claim outstanding Colony funds

Anyone can call this function. Claims funds _for_ the Colony that have been sent to the Colony's contract address or minted funds of the Colony's native token. This function _has_ to be called in order for the funds to appear in the Colony's treasury. You can provide a token address for the token to be claimed. Otherwise it will claim the outstanding funds of the Colony's native token

**`Remarks`**

use `ethers.constants.AddressZero` to claim ETH.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenAddress?` | `string` | The address of the token to claim the funds for. Default is the Colony's native token |

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"claimColonyFunds"``, { `fee?`: `BigNumber` ; `payoutRemainder?`: `BigNumber` ; `token?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `token` | string | The token address |
| `fee` | BigNumber | The fee deducted for rewards |
| `payoutRemainder` | BigNumber | The remaining funds moved to the top-level domain pot |

___

### createTeam

▸ **createTeam**(`metadata`): [`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"addDomain(uint256,uint256,uint256,string)"``, { `domainId`: `BigNumber` ; `fundingPotId`: `BigNumber` ; `metadata`: `string`  }, [`Domain`](../enums/MetadataType.md#domain)\>

Create a team (domain) within a Colony with team details as metadata

**`Remarks`**

Currently you can only add domains within the `Root` domain. This restriction will be lifted soon

**`Example`**

```typescript
import { TeamColor } from '@colony/sdk';

// Immediately executing async function
(async function() {
  // Create team of the butter-passers
  // (forced transaction example)
  // (also notice that this requires an upload-capable IPFS adapter)
  await colony.createTeam({
    domainName: 'Butter-passers',
    domainColor: TeamColor.Gold,
    domainPurpose: 'To pass butter',
  }).tx();
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadata` | `string` \| `DomainData` | The team metadata you would like to add (or an IPFS CID pointing to valid metadata). If DomainMetadata is provided directly (as opposed to a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file) this requires an [IpfsAdapter](../interfaces/IpfsAdapter.md) that can upload and pin to IPFS (like the [PinataAdapter](PinataAdapter.md)). See its documentation for more information. |

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"addDomain(uint256,uint256,uint256,string)"``, { `domainId`: `BigNumber` ; `fundingPotId`: `BigNumber` ; `metadata`: `string`  }, [`Domain`](../enums/MetadataType.md#domain)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `domainId` | BigNumber | Integer domain id of the created team |
| `fundingPotId` | BigNumber | Integer id of the corresponding funding pot |
| `metadata` | string | IPFS CID of metadata attached to this transaction |

#### Metadata

(can be obtained by calling and awaiting the `getMetadata` function)

| Property | Type | Description |
| :------ | :------ | :------ |
| `domainName` | string | The human readable name assigned to this team |
| `domainColor` | string | The color assigned to this team |
| `domainPurpose` | string | The purpose for this team (a broad description) |

▸ **createTeam**(): [`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"addDomain(uint256,uint256,uint256,string)"``, { `domainId`: `BigNumber` ; `fundingPotId`: `BigNumber` ; `metadata`: `undefined`  }, [`MetadataType`](../enums/MetadataType.md)\>

Create a team (domain) within a Colony with no metadata attached

**`Remarks`**

Currently you can only add domains within the `Root` domain. This restriction will be lifted soon

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"addDomain(uint256,uint256,uint256,string)"``, { `domainId`: `BigNumber` ; `fundingPotId`: `BigNumber` ; `metadata`: `undefined`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `domainId` | BigNumber | Integer domain id of the created team |
| `fundingPotId` | BigNumber | Integer id of the corresponding funding pot |

___

### deployTokenAuthority

▸ **deployTokenAuthority**(`allowedToTransfer?`): [`MetaTxCreator`](MetaTxCreator.md)<`IColonyNetwork`, ``"deployTokenAuthority"``, { `tokenAuthorityAddress?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

Deploys the so called TokenAuthority for the colony's native token

The TokenAuthority determines which addresses are allowed to do certain token actions like minting, or transferring them even though they are locked.
By default only the Colony can transfer a locked token. In the first argument you can specify a list of additional (excluding the colony) addresses that are allowed to transfer a locked token

**`Remarks`**

Only works for native tokens deployed with Colony (not imported tokens).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `allowedToTransfer?` | `string`[] | List of addresses (excluding the colony) that can transfer the token when it's locked |

#### Returns

[`MetaTxCreator`](MetaTxCreator.md)<`IColonyNetwork`, ``"deployTokenAuthority"``, { `tokenAuthorityAddress?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `tokenAuthorityAddress` | string | The address of the newly deployed TokenAuthority contract |

___

### deprecateTeam

▸ **deprecateTeam**(`teamId`, `deprecated`): [`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"deprecateDomain"``, { `agent?`: `string` ; `deprecated?`: `boolean` ; `domainId?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

Deprecate (remove) or undeprecate a team

Teams can be deprecated which will remove them from the UI. As they can't be deleted you can always undeprecate a team by passing `false` as the second argument.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `teamId` | `BigNumberish` | Team to be (un)deprecated |
| `deprecated` | `boolean` | `true`: Deprecate team; `false`: Undeprecate team |

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"deprecateDomain"``, { `agent?`: `string` ; `deprecated?`: `boolean` ; `domainId?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `domainId` | BigNumber | The id of the team that was (un)deprecated |
| `deprecated` | bool | Whether the team was deprecated or not |

___

### edit

▸ **edit**(`metadata`): [`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"editColony"``, { `agent?`: `string` ; `metadata?`: `string`  }, [`Colony`](../enums/MetadataType.md#colony)\>

Edit a colony's metadata

**`Remarks`**

This will overwrite all exisiting metadata!

**`Example`**

```typescript
// Immediately executing async function
(async function() {
  // Edit the metadata of a colony
  // (forced transaction example)
  // (also notice that this requires an upload-capable IPFS adapter)
  await colony.edit({
    colonyDisplayName: 'My super cool Colony',
  }).tx();
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadata` | `string` \| `ColonyData` | The team metadata you would like to add (or an IPFS CID pointing to valid metadata). If ColonyMetadata is provided directly (as opposed to a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file) this requires an [IpfsAdapter](../interfaces/IpfsAdapter.md) that can upload and pin to IPFS (like the [PinataAdapter](PinataAdapter.md)). See its documentation for more information. |

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"editColony"``, { `agent?`: `string` ; `metadata?`: `string`  }, [`Colony`](../enums/MetadataType.md#colony)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `colonyId` | BigNumber | Auto-incremented integer id of the colony |
| `colonyAddress` | string | Address of the newly deployed colony contract |
| `token` | string | Address of the token that is used as the colony's native token |
| `metadata` | string | IPFS CID of metadata attached to this transaction |

#### Metadata

(can be obtained by calling and awaiting the `getMetadata` function)

| Property | Type | Description |
| :------ | :------ | :------ |
| `colonyDisplayName` | string | The name that should be displayed for the colony |
| `colonyAvatarHash` | string | An IPFS hash for a Colony logo (make it 200x200px) |
| `colonyTokens` | string[] | A list of additional tokens that should be in the colony's "address book" |

___

### editTeam

▸ **editTeam**(`metadata`): [`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"editDomain"``, { `agent?`: `string` ; `domainId?`: `BigNumber` ; `metadata?`: `string`  }, [`Domain`](../enums/MetadataType.md#domain)\>

Edit a team (domain) within a Colony with team details as metadata

**`Remarks`**

This will overwrite all exisiting metadata!

**`Example`**

```typescript
import { TeamColor } from '@colony/sdk';

// Immediately executing async function
(async function() {
  // Edit team of the butter-passers
  // (forced transaction example)
  // (also notice that this requires an upload-capable IPFS adapter)
  await colony.editTeam({
    domainName: 'Purple Butter-passers',
    domainColor: TeamColor.Purple,
    domainPurpose: 'To pass purple butter',
  }).tx();
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadata` | `string` \| `DomainData` | The team metadata you would like to add (or an IPFS CID pointing to valid metadata). If DomainMetadata is provided directly (as opposed to a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file) this requires an [IpfsAdapter](../interfaces/IpfsAdapter.md) that can upload and pin to IPFS (like the [PinataAdapter](PinataAdapter.md)). See its documentation for more information. |

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"editDomain"``, { `agent?`: `string` ; `domainId?`: `BigNumber` ; `metadata?`: `string`  }, [`Domain`](../enums/MetadataType.md#domain)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `domainId` | BigNumber | Integer domain id of the created team |
| `metadata` | string | IPFS CID of metadata attached to this transaction |

#### Metadata

(can be obtained by calling and awaiting the `getMetadata` function)

| Property | Type | Description |
| :------ | :------ | :------ |
| `domainName` | string | The human readable name assigned to this team |
| `domainColor` | string | The color assigned to this team |
| `domainPurpose` | string | The purpose for this team (a broad description) |

___

### enterRecoveryMode

▸ **enterRecoveryMode**(): [`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"enterRecoveryMode"``, { `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

Put the colony into Recovery Mode

In Recovery Mode, no actions are possible on the colony. Only users who have the special *Recovery* role can put a colony into this mode

**`Remarks`**

Be aware that to exit Recovery Mode a quorum of 50% is needed of all users who have the *Recovery* role

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"enterRecoveryMode"``, { `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `user` | string | The address of the user who activated Recovery Mode |

___

### exitRecoveryMode

▸ **exitRecoveryMode**(): [`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"exitRecoveryMode"``, { `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

Exit Recovery Mode

In Recovery Mode, no actions are possible on the colony. Only users who have the special *Recovery* role can execute this method. If you have multiple users with the *Recovery* role, at least 50% of the users have to execute this method for the Colony to leave Recovery Mode

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"exitRecoveryMode"``, { `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `user` | string | The address of the user who initiated the exit of Recovery Mode |

___

### getBalance

▸ **getBalance**(`tokenAddress?`, `teamId?`): `Promise`<`BigNumber`\>

Get a token balance for a specific token and team. Defaults to the Colony's native token and the `Root` team.

**`Remarks`**

The function will automatically figure out the corresponding pot for the given domain, as this is what's usually expected.

**`Example`**

Get the xDAI balance of the team number 2
```typescript
import { constants } from 'ethers';
import { toEth } from '@colony/sdk';
// The `AddressZero` means ETH on mainnet and xDAI on Gnosis chain
const balance = await colony.getBalance(constants.AddressZero, 2);
// This will format the balance as a string in eth and not wei (i.e. 1.0 vs. 1000000000000000000)
console.info(toEth(balance));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenAddress?` | `string` | The address of the token to get the balance for. Default is the Colony's native token |
| `teamId?` | `BigNumberish` | The teamId (domainId) of the team to get the balance for. Default is the `Root` team |

#### Returns

`Promise`<`BigNumber`\>

A token balance in [wei](https://gwei.io/)

___

### getReputation

▸ **getReputation**(`userAddress`, `teamId?`): `Promise`<`BigNumber`\>

Get the reputation for a user address within a team in the Colony

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `userAddress` | `string` | `undefined` | The address of the account to check the reputation for |
| `teamId` | [`Id`](../enums/Id.md) | `Id.RootDomain` | The teamId (domainId) of the team to get the reputation for. Default is the `Root` team |

#### Returns

`Promise`<`BigNumber`\>

A number quantifying the user addresses' reputation

___

### getReputationAcrossTeams

▸ **getReputationAcrossTeams**(`userAddress`): `Promise`<{ `domainId`: `number` ; `reputationAmount`: `undefined` \| `BigNumber` ; `skillId`: `number`  }[]\>

Get the reputation for a user address across all teams in the Colony

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userAddress` | `string` | The address of the account to check the reputation for |

#### Returns

`Promise`<{ `domainId`: `number` ; `reputationAmount`: `undefined` \| `BigNumber` ; `skillId`: `number`  }[]\>

An array of objects containing the following

| Property | Description |
| :------ | :------ |
| `domainId` | The domainId of the domain the user has reputation in |
| `skillId` | The corresponding skillId |
| `reputationAmount` | The reputation amount in that domain |

___

### getRoles

▸ **getRoles**(`address`, `teamId?`): `Promise`<[`ColonyRole`](../enums/ColonyRole.md)[]\>

Get roles for a user/contract/wallet in a Colony and domain

**`Example`**

```typescript
import { ColonyRole } from '@colony/sdk';

// Immediately executing async function
(async function() {
  // Get roles for the given user address for the team 2
  const roles = await colony.getRoles('0xb794f5ea0ba39494ce839613fffba74279579268', 2);
  // Check if user has 'Administration' role
  if (roles.includes(ColonyRole.Administration)) {
    console.log('Hoooray, user is admin');
  }
})();
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `address` | `string` | `undefined` | Address of the wallet or contract to check the roles of |
| `teamId` | `BigNumberish` | `Id.RootDomain` | Team in which to check the roles of given user |

#### Returns

`Promise`<[`ColonyRole`](../enums/ColonyRole.md)[]\>

An array of [ColonyRole](../enums/ColonyRole.md)s

___

### getTeam

▸ **getTeam**(`teamId`): `Promise`<`DomainStructOutput`\>

Gets the team for `teamId`

**`Remarks`**

Will throw if teamId does not exist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `teamId` | `BigNumberish` | The teamId to get the team information for |

#### Returns

`Promise`<`DomainStructOutput`\>

A Team object

___

### installExtension

▸ **installExtension**(`extension`): [`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"installExtension"``, { `colony?`: `string` ; `extensionId?`: `string` ; `version?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

Install an extension for a colony

Valid extensions can be found here: [SupportedExtension](../enums/SupportedExtension.md)

**`Remarks`**

Be aware that some extensions need some extra setup steps (like the `initialise` method on `VotingReputation`).
After an extension was installed, `colony.updateExtensions()` needs to be called (see example)

**`Example`**

```typescript
// Immediately executing async function
(async function() {
  // Install the OneTxPayment extension for Colony
  // (forced transaction example)
  await colony.installExtension(
    SupportedExtension.oneTx,
  ).tx();
  // Update the extensions in the colony
  await colony.updateExtensions();
  console.info(colony.ext.oneTx.address);
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extension` | [`SupportedExtension`](../enums/SupportedExtension.md) | Name of the extension you'd like to install |

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"installExtension"``, { `colony?`: `string` ; `extensionId?`: `string` ; `version?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `extensionId` | string | Id (name) of the extension (e.g. `OneTxPayment`) |
| `colony` | string | The address of the colony on which the extension was installed |
| `version` | BigNumber | The version of the extension that was installed |

___

### makeArbitraryTransaction

▸ **makeArbitraryTransaction**(`target`, `action`): [`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"makeArbitraryTransactions"``, { `data?`: `string` ; `success?`: `boolean` ; `target?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

Execute an arbitrary transaction in the name of the Colony

This method can execute a transaction on any Ethereum Smart Contract with the Colony address as the sender. The action needs to be encoded function data (see https://docs.ethers.io/v5/api/utils/abi/interface/#Interface--encoding). We provide some common interfaces for you to make it even easier.

**`Remarks`**

This method can't be executed as a MetaTransaction

**`Example`**

Mint an NFT from a Colony
```typescript
import { ERC721 } from '@colony/sdk';

// Mint an NFT for address 0xb794f5ea0ba39494ce839613fffba74279579268
// (forced transaction example)
const encodedAction = ERC721.encodeFunctionData(
 'mintTo',
 '0xb794f5ea0ba39494ce839613fffba74279579268',
);

// Immediately executing async function
(async function() {
  await colony.makeArbitraryTransaction(
     // NFT contract address
     '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
     // encoded transaction from above
     encodedAction
  ).tx();
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `string` | Address of the contract to execute a method on |
| `action` | `BytesLike` | Encoded action to execute |

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"makeArbitraryTransactions"``, { `data?`: `string` ; `success?`: `boolean` ; `target?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

**No event data**

___

### mint

▸ **mint**(`amount`): [`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"mintTokens"``, { `agent?`: `string` ; `amount?`: `BigNumber` ; `who?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

Mints `amount` of a Colony's native token.

**`Remarks`**

Only works for native tokens deployed with Colony (not imported tokens). Note that most tokens use 18 decimals, so add a bunch of zeros or use our `w` or `toWei` functions (see example). Also not that for tokens to be available in the Colony after funding, you need to call the [Colony.claimFunds](Colony.md#claimfunds) method after minting.

**`Example`**

```typescript
import { w } from '@colony/sdk';

// Immediately executing async function
(async function() {
  // Mint 100 tokens of the Colony's native token
  // (forced transaction example)
  await colony.mint(w`100`).tx();
  // Claim the minted tokens for the Colony
  // (forced transaction example)
  await colony.claimFunds().tx();
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BigNumberish` | Amount of the token to be minted |

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"mintTokens"``, { `agent?`: `string` ; `amount?`: `BigNumber` ; `who?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `who` | string | Address the tokens were minted for (usually the colony) |
| `amount` | BigNumber | Amount that was minted |

___

### moveFundsToTeam

▸ **moveFundsToTeam**(`amount`, `toTeam`, `fromTeam?`, `tokenAddress?`): [`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)"``, { `agent?`: `string` ; `amount?`: `BigNumber` ; `fromPot?`: `BigNumber` ; `toPot?`: `BigNumber` ; `token?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

Move funds from one team to another

After sending funds to and claiming funds for your Colony they will land in a special team, the root team. If you want to make payments from other teams (in order to award reputation in that team) you have to move the funds there first. Use this method to do so.

**`Remarks`**

Requires the `Funding` permission in the root team. As soon as teams can be nested, this requires the `Funding` permission in a team that is a parent of both teams in which funds are moved.

**`Example`**

```typescript
import { Tokens, w } from '@colony/sdk';

// Immediately executing async function
(async function() {
  // Move 10 of the native token from team 2 to team 3
  // (forced transaction example)
  await colony.moveFundsToTeam(
     w`10`,
     2,
     3,
  ).tx();
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BigNumberish` | Amount to transfer between the teams |
| `toTeam` | `BigNumberish` | The team to transfer the funds to |
| `fromTeam?` | `BigNumberish` | The team to transfer the funds from. Default is the Root team |
| `tokenAddress?` | `string` | The address of the token to be transferred. Default is the Colony's native token |

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)"``, { `agent?`: `string` ; `amount?`: `BigNumber` ; `fromPot?`: `BigNumber` ; `toPot?`: `BigNumber` ; `token?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `fromPot` | BigNumber | The source funding pot |
| `toPot` | BigNumber | The target funding pot |
| `amount` | BigNumber | The amount that was transferred |
| `token` | string | The token address being transferred |

___

### setRoles

▸ **setRoles**(`address`, `roles`, `teamId?`): [`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"setUserRoles"``, { `agent?`: `string` ; `domainId?`: `BigNumber` ; `role?`: `number` ; `setTo?`: `boolean` ; `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

Set (award) roles to a user/contract

**`Remarks`**

Existing roles will be kept. Use [unsetRoles](Colony.md#unsetroles) to remove roles

**`Example`**

```typescript
import { ColonyRole } from '@colony/sdk';

// Immediately executing async function
(async function() {
  // Give Administration and Root role to address 0xb794f5ea0ba39494ce839613fffba74279579268 (in Root team)
  // (forced transaction example)
  await colony.setRoles(
    '0xb794f5ea0ba39494ce839613fffba74279579268',
    [ColonyRole.Administration, ColonyRole.Root],
  ).tx();
})();
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `address` | `string` | `undefined` | Address of the wallet or contract to give the roles to |
| `roles` | [`ColonyRole`](../enums/ColonyRole.md) \| [`ColonyRole`](../enums/ColonyRole.md)[] | `undefined` | Role or array of roles to award |
| `teamId` | `BigNumberish` | `Id.RootDomain` | Team to apply the role(s) in |

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"setUserRoles"``, { `agent?`: `string` ; `domainId?`: `BigNumber` ; `role?`: `number` ; `setTo?`: `boolean` ; `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

Heads up!* This event is emitted for every role that was set

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `user` | string | Address of the user who was awarded the role |
| `domainId` | BigNumber | The team the role was awarded for |
| `role` | number | The number of the role that was awarded. Use `ColonyRole[role]` to get the title of the role |
| `setTo` | number | Whether the role was awarded or removed |

___

### smiteReputation

▸ **smiteReputation**(`address`, `amount`, `team?`): [`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"emitDomainReputationPenalty"``, { `agent?`: `string` ; `amount?`: `BigNumber` ; `skillId?`: `BigNumber` ; `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

Smite (remove) reputation from a user within a team

Use with care. An imbalance of native tokens and reputation might influence your governance process negatively

**`Remarks`**

Only users with *Arbitration* role are allowed to award reputation

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `address` | `string` | `undefined` | Address of user to smite reputation |
| `amount` | `BigNumberish` | `undefined` | Amount of reputation to remove |
| `team` | `BigNumberish` | `Id.RootDomain` | Team to remove reputation in (defaults to Root team) |

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"emitDomainReputationPenalty"``, { `agent?`: `string` ; `amount?`: `BigNumber` ; `skillId?`: `BigNumber` ; `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `user` | string | User who was awarded reputation |
| `skillId` | BigNumber | Corresponding skillId to the team |
| `amount` | BigNumber | Amount that was removed (will be negative) |

___

### unsetRoles

▸ **unsetRoles**(`address`, `roles`, `teamId?`): [`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"setUserRoles"``, { `agent?`: `string` ; `domainId?`: `BigNumber` ; `role?`: `number` ; `setTo?`: `boolean` ; `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

Unset (remove) roles from a user/contract

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `address` | `string` | `undefined` | Address of the wallet or contract to remove the roles from |
| `roles` | [`ColonyRole`](../enums/ColonyRole.md) \| [`ColonyRole`](../enums/ColonyRole.md)[] | `undefined` | Role or array of roles to remove |
| `teamId` | `BigNumberish` | `Id.RootDomain` | Team to apply the role(s) in |

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"setUserRoles"``, { `agent?`: `string` ; `domainId?`: `BigNumber` ; `role?`: `number` ; `setTo?`: `boolean` ; `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

Heads up!* This event is emitted for every role that was unset

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `user` | string | Address of the user of which the role was removed |
| `domainId` | BigNumber | The team the role was removed for |
| `role` | number | The number of the role that was removed. Use `ColonyRole[role]` to get the title of the role |
| `setTo` | number | Whether the role was awarded or removed |

___

### updateExtensions

▸ **updateExtensions**(): `Promise`<`void`\>

Refresh colony extensions

Call this function after a new extension was installed.
It will then become available under `colony.ext`

#### Returns

`Promise`<`void`\>

___

### upgrade

▸ **upgrade**(`toVersion?`): [`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"upgrade"``, { `newVersion?`: `BigNumber` ; `oldVersion?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

Upgrade a colony to the next or a custom version

This method upgrades the colony to a specified version or, if no version is provided to the next higher version.

**`Remarks`**

* Only users with *Root* role are allowed to upgrade a colony (or an extension with appropriate permissions)
* Downgrading of colonies is not possible

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `toVersion?` | `BigNumberish` | Specify a custom version to upgrade the colony to |

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`IColony`, ``"upgrade"``, { `newVersion?`: `BigNumber` ; `oldVersion?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `oldVersion` | BigNumber | Version of the colony before the upgrade |
| `newVersion` | BigNumber | Version of the colony after the upgrade |

___

### connect

▸ `Static` **connect**(`colonyNetwork`, `address`): `Promise`<[`Colony`](Colony.md)\>

Create an instance of a Colony client and connect the Network to it

Only supports the latest version of the Colony contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colonyNetwork` | [`ColonyNetwork`](ColonyNetwork.md) | The ColonyNetwork instance |
| `address` | `string` | The Colony's address |

#### Returns

`Promise`<[`Colony`](Colony.md)\>

A connected Colony instance

___

### getLatestSupportedVersion

▸ `Static` **getLatestSupportedVersion**(): ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` \| ``11`` \| ``12``

#### Returns

``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` \| ``11`` \| ``12``
