# Class: Colony

## Properties

### address

• **address**: `string`

___

### colonyNetwork

• **colonyNetwork**: [`ColonyNetwork`](ColonyNetwork.md)

___

### colonyToken

• `Optional` **colonyToken**: [`ColonyToken`](ColonyToken.md)

An instance of the Colony's native token

Currently only Tokens deployed via Colony are supported (no external, imported tokens) in Colony SDK. All other kinds will throw an error

___

### ext

• **ext**: [`SupportedExtensions`](../interfaces/SupportedExtensions.md)

___

### signerOrProvider

• **signerOrProvider**: `SignerOrProvider`

___

### version

• **version**: `number`

___

### supportedVersions

▪ `Static` **supportedVersions**: ``10``[]

The currently supported Colony version. If a Colony is not on this version it has to be upgraded.
If this is not an option, Colony SDK might throw errors at certain points. Usage of ColonyJS is advised in these cases

## Methods

### annotateTransaction

▸ **annotateTransaction**(`txHash`, `annotationMetadata`): [`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"annotateTransaction"``, { `agent?`: `string` ; `metadata?`: `string` ; `txHash?`: `string`  }, [`Annotation`](../enums/MetadataType.md#annotation)\>

Annotate a transaction with IPFS metadata to provide extra information

This will annotate a transaction with an arbitrary text message. This only really works for transactions that happened within this Colony. This will upload the text string to IPFS and connect the transaction to the IPFS hash accordingly.

**`Remarks`**

If [AnnotationMetadata](../interfaces/AnnotationMetadata.md) is provided directly (as opposed to a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file) this requires an [IpfsAdapter](../interfaces/IpfsAdapter.md) that can upload and pin to IPFS. See its documentation for more information. Keep in mind that **the annotation itself is a transaction**.

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
  ).force();
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txHash` | `string` | Transaction hash of the transaction to annotate (within the Colony) |
| `annotationMetadata` | `string` \| [`AnnotationMetadata`](../interfaces/AnnotationMetadata.md) | The annotation metadata you would like to annotate the transaction with (or an IPFS CID pointing to valid metadata) |

#### Returns

[`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"annotateTransaction"``, { `agent?`: `string` ; `metadata?`: `string` ; `txHash?`: `string`  }, [`Annotation`](../enums/MetadataType.md#annotation)\>

A [TxCreator](TxCreator.md)

**Event data**

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `txHash` | BigNumber | The hash of the annotated transaction |
| `metadata` | BigNumber | The IPFS hash (CID) of the metadata object |

___

### claimFunds

▸ **claimFunds**(`tokenAddress?`): [`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"claimColonyFunds"``, { `fee?`: `BigNumber` ; `payoutRemainder?`: `BigNumber` ; `token?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

Claim outstanding Colony funds

Anyone can call this function. Claims funds _for_ the Colony that have been sent to the Colony's contract address or minted funds of the Colony's native token. This function _has_ to be called in order for the funds to appear in the Colony's treasury. You can provide a token address for the token to be claimed. Otherwise it will claim the outstanding funds of the Colony's native token

**`Remarks`**

use `ethers.constants.AddressZero` to claim ETH.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenAddress?` | `string` | The address of the token to claim the funds for. Default is the Colony's native token |

#### Returns

[`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"claimColonyFunds"``, { `fee?`: `BigNumber` ; `payoutRemainder?`: `BigNumber` ; `token?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A [TxCreator](TxCreator.md)

**Event data**

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `token` | string | The token address |
| `fee` | BigNumber | The fee deducted for rewards |
| `payoutRemainder` | BigNumber | The remaining funds moved to the top-level domain pot |

___

### createTeam

▸ **createTeam**(`metadata`): [`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"addDomain(uint256,uint256,uint256,string)"``, { `domainId`: `BigNumber` ; `fundingPotId`: `BigNumber` ; `metadata`: `string`  }, [`Domain`](../enums/MetadataType.md#domain)\>

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
  }).force();
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadata` | `string` \| [`DomainMetadata`](../interfaces/DomainMetadata.md) | The team metadata you would like to add (or an IPFS CID pointing to valid metadata). If [DomainMetadata](../interfaces/DomainMetadata.md) is provided directly (as opposed to a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file) this requires an [IpfsAdapter](../interfaces/IpfsAdapter.md) that can upload and pin to IPFS (like the [PinataAdapter](PinataAdapter.md)). See its documentation for more information. |

#### Returns

[`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"addDomain(uint256,uint256,uint256,string)"``, { `domainId`: `BigNumber` ; `fundingPotId`: `BigNumber` ; `metadata`: `string`  }, [`Domain`](../enums/MetadataType.md#domain)\>

A [TxCreator](TxCreator.md)

**Event data**

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `domainId` | BigNumber | Integer domain id of the created team |
| `fundingPotId` | BigNumber | Integer id of the corresponding funding pot |
| `metadata` | string | IPFS CID of metadata attached to this transaction |

**Metadata** (can be obtained by calling and awaiting the `getMetadata` function)

| Property | Type | Description |
| :------ | :------ | :------ |
| `domainName` | string | The human readable name assigned to this team |
| `domainColor` | string | The color assigned to this team |
| `domainPurpose` | string | The purpose for this team (a broad description) |

▸ **createTeam**(): [`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"addDomain(uint256,uint256,uint256,string)"``, { `domainId`: `BigNumber` ; `fundingPotId`: `BigNumber` ; `metadata`: `undefined`  }, [`MetadataType`](../enums/MetadataType.md)\>

Create a team (domain) within a Colony with no metadata attached

**`Remarks`**

Currently you can only add domains within the `Root` domain. This restriction will be lifted soon

#### Returns

[`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"addDomain(uint256,uint256,uint256,string)"``, { `domainId`: `BigNumber` ; `fundingPotId`: `BigNumber` ; `metadata`: `undefined`  }, [`MetadataType`](../enums/MetadataType.md)\>

A [TxCreator](TxCreator.md)

**Event data**

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `domainId` | BigNumber | Integer domain id of the created team |
| `fundingPotId` | BigNumber | Integer id of the corresponding funding pot |

___

### deprecateTeam

▸ **deprecateTeam**(`teamId`, `deprecated`): [`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"deprecateDomain"``, { `agent?`: `string` ; `deprecated?`: `boolean` ; `domainId?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

Deprecate (remove) or undeprecate a team

Teams can be deprecated which will remove them from the UI. As they can't be deleted you can always undeprecate a team by passing `false` as the second argument.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `teamId` | `BigNumberish` | Team to be (un)deprecated |
| `deprecated` | `boolean` | `true`: Deprecate team; `false`: Undeprecate team |

#### Returns

[`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"deprecateDomain"``, { `agent?`: `string` ; `deprecated?`: `boolean` ; `domainId?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

A [TxCreator](TxCreator.md)

**Event data**

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `domainId` | BigNumber | The id of the team that was (un)deprecated |
| `deprecated` | bool | Whether the team was deprecated or not |

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

▸ **getReputationAcrossTeams**(`userAddress`): `Promise`<{ `domainId`: `number` ; `reputationAmount?`: `BigNumberish` ; `skillId`: `number`  }[]\>

Get the reputation for a user address across all teams in the Colony

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userAddress` | `string` | The address of the account to check the reputation for |

#### Returns

`Promise`<{ `domainId`: `number` ; `reputationAmount?`: `BigNumberish` ; `skillId`: `number`  }[]\>

An array of objects containing the following

| Property | Description |
| :------ | :------ |
| `domainId` | The domainId of the domain the user has reputation in |
| `skillId` | The corresponding skillId |
| `reputationAmount` | The reputation amount in that domain |

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

▸ **installExtension**(`extension`): [`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"installExtension"``, { `colony?`: `string` ; `extensionId?`: `string` ; `version?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

Install an extension for a colony

Valid extensions can be found here: [SupportedExtension](../enums/SupportedExtension.md)

**`Remarks`**

* Be aware that some extensions need some extra setup steps (like the `initialise` method on `VotingReputation`).
* After an extension was installed, `colony.updateExtensions()` needs to be called (see example)

**`Example`**

```typescript
// Immediately executing async function
(async function() {
  // Install the OneTxPayment extension for Colony
  // (forced transaction example)
  await colony.installExtension(
    SupportedExtension.oneTx,
  ).force();
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

[`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"installExtension"``, { `colony?`: `string` ; `extensionId?`: `string` ; `version?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

A [TxCreator](TxCreator.md)

**Event data**

| Property | Type | Description |
| :------ | :------ | :------ |
| `extensionId` | string | Id (name) of the extension (e.g. `OneTxPayment`) |
| `colony` | string | The address of the colony on which the extension was installed |
| `version` | BigNumber | The version of the extension that was installed |

___

### makeArbitraryTransaction

▸ **makeArbitraryTransaction**(`target`, `action`): [`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"makeArbitraryTransactions"``, `Record`<`string`, `unknown`\>, [`MetadataType`](../enums/MetadataType.md)\>

Execute an arbitrary transaction in the name of the Colony

This method can execute a transaction on any Ethereum Smart Contract with the Colony address as the sender. The action needs to be encoded function data (see https://docs.ethers.io/v5/api/utils/abi/interface/#Interface--encoding). We provide some common interfaces for you to make it even easier.

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
  ).force();
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `string` | Address of the contract to execute a method on |
| `action` | `BytesLike` | Encoded action to execute |

#### Returns

[`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"makeArbitraryTransactions"``, `Record`<`string`, `unknown`\>, [`MetadataType`](../enums/MetadataType.md)\>

A [TxCreator](TxCreator.md)

**No event data**

___

### moveFundsToTeam

▸ **moveFundsToTeam**(`amount`, `toTeam`, `fromTeam?`, `tokenAddress?`): [`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)"``, { `agent?`: `string` ; `amount?`: `BigNumber` ; `fromPot?`: `BigNumber` ; `toPot?`: `BigNumber` ; `token?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

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
  ).force();
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

[`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)"``, { `agent?`: `string` ; `amount?`: `BigNumber` ; `fromPot?`: `BigNumber` ; `toPot?`: `BigNumber` ; `token?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A [TxCreator](TxCreator.md)

**Event data**

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `fromPot` | BigNumber | The source funding pot |
| `toPot` | BigNumber | The target funding pot |
| `amount` | BigNumber | The amount that was transferred |
| `token` | string | The token address being transferred |

___

### setRoles

▸ **setRoles**(`address`, `roles`, `teamId?`): [`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"setUserRoles"``, { `agent?`: `string` ; `domainId?`: `BigNumber` ; `role?`: `number` ; `setTo?`: `boolean` ; `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

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
  ).force();
})();
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `address` | `string` | `undefined` | Address of the wallet or contract to give the roles to |
| `roles` | [`ColonyRole`](../enums/ColonyRole.md) \| [`ColonyRole`](../enums/ColonyRole.md)[] | `undefined` | Role or array of roles to award |
| `teamId` | `BigNumberish` | `Id.RootDomain` | Team to apply the role(s) in |

#### Returns

[`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"setUserRoles"``, { `agent?`: `string` ; `domainId?`: `BigNumber` ; `role?`: `number` ; `setTo?`: `boolean` ; `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A [TxCreator](TxCreator.md)

**Event data**
*Heads up!* This event is emitted for every role that was set

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `user` | string | Address of the user who was awarded the role |
| `domainId` | BigNumber | The team the role was awarded for |
| `role` | number | The number of the role that was awarded. Use `ColonyRole[role]` to get the title of the role |
| `setTo` | number | Whether the role was awarded or removed |

___

### unsetRoles

▸ **unsetRoles**(`address`, `roles`, `teamId?`): [`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"setUserRoles"``, { `agent?`: `string` ; `domainId?`: `BigNumber` ; `role?`: `number` ; `setTo?`: `boolean` ; `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

Unset (remove) roles from a user/contract

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `address` | `string` | `undefined` | Address of the wallet or contract to remove the roles from |
| `roles` | [`ColonyRole`](../enums/ColonyRole.md) \| [`ColonyRole`](../enums/ColonyRole.md)[] | `undefined` | Role or array of roles to remove |
| `teamId` | `BigNumberish` | `Id.RootDomain` | Team to apply the role(s) in |

#### Returns

[`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"setUserRoles"``, { `agent?`: `string` ; `domainId?`: `BigNumber` ; `role?`: `number` ; `setTo?`: `boolean` ; `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A [TxCreator](TxCreator.md)

**Event data**
*Heads up!* This event is emitted for every role that was unset

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

### getLatestSupportedVersion

▸ `Static` **getLatestSupportedVersion**(): ``10``

#### Returns

``10``

___

### init

▸ `Static` **init**(`colonyNetwork`, `colonyClient`): `Promise`<[`Colony`](Colony.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `colonyNetwork` | [`ColonyNetwork`](ColonyNetwork.md) |
| `colonyClient` | `ColonyClientV10` |

#### Returns

`Promise`<[`Colony`](Colony.md)\>
