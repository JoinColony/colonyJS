# Class: MotionCreator

MotionCreator

This is part of the [VotingReputation](VotingReputation.md) class and not to be meant to instantiated directly.
You can find an instance of this under `colony.ext.motions.create`

## Constructors

### constructor

• **new MotionCreator**(`colony`, `votingReputationClient`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `colony` | [`Colony`](Colony.md) |
| `votingReputationClient` | `VotingReputationClientV7` |

## Methods

### createTeam

▸ **createTeam**(`metadataCid?`): `Promise`<[{ `creator?`: `string` ; `domainId?`: `BigNumber` ; `motionId?`: `BigNumber`  }, `ContractReceipt`]\>

Create a motion to create a team within a Colony

For more information about the resulting action, see [Colony.createTeam](Colony.md#createteam).

**`Remarks`**

Currently you can only add domains within the `Root` domain. This restriction will be lifted soon

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataCid?` | `string` | An IPFS [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file containing the metadata described below. For now, we would like to keep it agnostic to any IPFS upload mechanism, so you have to upload the file manually and provide your own hash (by using, for example, [Pinata](https://docs.pinata.cloud/)) |

#### Returns

`Promise`<[{ `creator?`: `string` ; `domainId?`: `BigNumber` ; `motionId?`: `BigNumber`  }, `ContractReceipt`]\>

A tupel: `[eventData, ContractReceipt]`

**Motion event data**

| Property | Type | Description |
| :------ | :------ | :------ |
| `motionId` | BigNumber | ID of the motion created |
| `creator` | string | Address of the motion's creator |
| `domainId` | BigNumber | Team ID of the motion |

___

### makeArbitraryTransaction

▸ **makeArbitraryTransaction**(`target`, `action`): `Promise`<[{ `creator?`: `string` ; `domainId?`: `BigNumber` ; `motionId?`: `BigNumber`  }, `ContractReceipt`]\>

Create a motion to create an arbitrary transaction in the name of the Colony

For more information about the resulting action, see [Colony.makeArbitraryTransaction](Colony.md#makearbitrarytransaction).

This method can execute a transaction on any Ethereum Smart Contract with the Colony address as the sender. The action needs to be encoded function data (see https://docs.ethers.io/v5/api/utils/abi/interface/#Interface--encoding). We provide some common interfaces for you to make it even easier.

**`Example`**

Create a motion to mint an NFT from a Colony
```typescript
import { ERC721 } from '@colony/sdk';

// Mint a NFT for address 0xb794f5ea0ba39494ce839613fffba74279579268
const encodedAction = ERC721.encodeFunctionData(
 'mintTo',
 '0xb794f5ea0ba39494ce839613fffba74279579268',
);

// Immediately executing async function
(async function() {
  await colony.ext.motions.create.makeArbitraryTransaction(
     // NFT contract address
     '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
     // encoded transaction from above
     encodedAction
  );
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `string` | Address of the contract to execute a method on |
| `action` | `BytesLike` | Encoded action to execute |

#### Returns

`Promise`<[{ `creator?`: `string` ; `domainId?`: `BigNumber` ; `motionId?`: `BigNumber`  }, `ContractReceipt`]\>

A tupel of event data and contract receipt

**Motion event data**

| Property | Type | Description |
| :------ | :------ | :------ |
| `motionId` | BigNumber | ID of the motion created |
| `creator` | string | Address of the motion's creator |
| `domainId` | BigNumber | Team ID of the motion |

___

### moveFundsToTeam

▸ **moveFundsToTeam**(`amount`, `toTeam`, `fromTeam?`, `tokenAddress?`): `Promise`<[{ `creator?`: `string` ; `domainId?`: `BigNumber` ; `motionId?`: `BigNumber`  }, `ContractReceipt`]\>

Create a motion to move funds from one team to another

For more information about the resulting action, see [Colony.moveFundsToTeam](Colony.md#movefundstoteam).

After sending funds to and claiming funds for your Colony they will land in a special team, the root team. If you want to make payments from other teams (in order to award reputation in that team) you have to move the funds there first. Use this method to do so.

**`Example`**

```typescript
import { Tokens } from '@colony/sdk';

// Immediately executing async function
(async function() {
  // Move 10 of the native token from team 2 to team 3
  await colony.ext.motions.create.moveFundsToTeam(
     w`10`,
     2,
     3,
  );
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

`Promise`<[{ `creator?`: `string` ; `domainId?`: `BigNumber` ; `motionId?`: `BigNumber`  }, `ContractReceipt`]\>

A tupel of event data and contract receipt

**Motion event data**

| Property | Type | Description |
| :------ | :------ | :------ |
| `motionId` | BigNumber | ID of the motion created |
| `creator` | string | Address of the motion's creator |
| `domainId` | BigNumber | Team ID of the motion |

___

### pay

▸ **pay**(`recipient`, `amount`, `teamId?`, `tokenAddress?`): `Promise`<[{ `creator?`: `string` ; `domainId?`: `BigNumber` ; `motionId?`: `BigNumber`  }, `ContractReceipt`]\>

Create a motion to make a payment to a single address using a single token

For more information about the resulting action, see [Colony.pay](Colony.md#pay).

**`Remarks`**

Requires the `OneTxPayment` extension to be installed for the Colony (this is usually the case for Colonies created via the Dapp). Note that most tokens use 18 decimals, so add a bunch of zeros or use our `w` or `toWei` functions (see example)

**`Example`**

```typescript
import { Id, Tokens, w } from '@colony/sdk';

// Immediately executing async function
(async function() {
  // Pay 10 XDAI (on Gnosis chain) from the root domain to the following address
  await colony.ext.motions.create.pay(
     '0xb77D57F4959eAfA0339424b83FcFaf9c15407461',
     w`10`,
     Id.RootDomain,
     Tokens.Gnosis.XDAI,
  );
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recipient` | `string` | Wallet address of account to send the funds to (also awarded reputation when sending the native token) |
| `amount` | `BigNumberish` | Amount to pay in wei |
| `teamId?` | `BigNumberish` | The team to use to send the funds from. Has to have funding of at least the amount you need to send. See [Colony.moveFundsToTeam](Colony.md#movefundstoteam). Defaults to the Colony's root team |
| `tokenAddress?` | `string` | The address of the token to make the payment in. Default is the Colony's native token |

#### Returns

`Promise`<[{ `creator?`: `string` ; `domainId?`: `BigNumber` ; `motionId?`: `BigNumber`  }, `ContractReceipt`]\>

A tupel of event data and contract receipt

**Motion event data**

| Property | Type | Description |
| :------ | :------ | :------ |
| `motionId` | BigNumber | ID of the motion created |
| `creator` | string | Address of the motion's creator |
| `domainId` | BigNumber | Team ID of the motion |
