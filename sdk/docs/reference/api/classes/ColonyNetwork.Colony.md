[Colony SDK 🚀](../README.md) / [Modules](../modules.md) / [ColonyNetwork](../modules/ColonyNetwork.md) / Colony

# Class: Colony

[ColonyNetwork](../modules/ColonyNetwork.md).Colony

## Table of contents

### Properties

- [address](ColonyNetwork.Colony.md#address)
- [version](ColonyNetwork.Colony.md#version)
- [SupportedVersions](ColonyNetwork.Colony.md#supportedversions)

### Methods

- [claimFunds](ColonyNetwork.Colony.md#claimfunds)
- [createTeam](ColonyNetwork.Colony.md#createteam)
- [getBalance](ColonyNetwork.Colony.md#getbalance)
- [getReputation](ColonyNetwork.Colony.md#getreputation)
- [getToken](ColonyNetwork.Colony.md#gettoken)
- [pay](ColonyNetwork.Colony.md#pay)

## Properties

### address

• **address**: `string`

___

### version

• **version**: `number`

___

### SupportedVersions

▪ `Static` **SupportedVersions**: (``8`` \| ``9``)[]

The currently supported Colony version. If a Colony is not on this version it has to be upgraded.
If this is not an option, ColonySDK might throw errors at certain points. Usage of ColonyJS is advised in these cases

## Methods

### claimFunds

▸ **claimFunds**(`tokenAddress?`): `Promise`<[{ `fee?`: `BigNumber` ; `payoutRemainder?`: `BigNumber` ; `token?`: `string`  }, `ContractReceipt`]\>

Claim outstanding Colony funds.

Anyone can call this function. Claims funds _for_ the Colony that have been sent to the Colony's contract address or minted funds of the Colony's native token. This function _has_ to be called in order for the funds to appear in the Colony's treasury. You can provide a token address for the token to be claimed. Otherwise it will claim the outstanding funds of the Colony's native token

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenAddress` | `string` | The address of the token to claim the funds for. Default is the Colony's native token |

#### Returns

`Promise`<[{ `fee?`: `BigNumber` ; `payoutRemainder?`: `BigNumber` ; `token?`: `string`  }, `ContractReceipt`]\>

A tupel of event data and contract receipt

**Event data**
| Property | Description |
| :------ | :------ |
| `agent` | The address that is responsible for triggering this event |
| `token` | The token address |
| `fee` | The fee deducted for rewards |
| `payoutRemainder` | The remaining funds moved to the top-level domain pot |

___

### createTeam

▸ **createTeam**(): `Promise`<[{ `domainId?`: `BigNumber` ; `fundingPotId?`: `BigNumber`  }, `ContractReceipt`]\>

Create a team within a Colony

**`remarks`**
Currently you can only add domains within the `Root` domain. This restriction will be lifted soon

#### Returns

`Promise`<[{ `domainId?`: `BigNumber` ; `fundingPotId?`: `BigNumber`  }, `ContractReceipt`]\>

A tupel of event data and contract receipt

**Event data**
| Property | Description |
| :------ | :------ |
| `agent` | The address that is responsible for triggering this event |
| `domainId` | Integer domain id of the created team |
| `fundingPotId` | Integer id of the corresponding funding pot |

___

### getBalance

▸ **getBalance**(`tokenAddress?`, `teamId?`): `Promise`<`BigNumber`\>

Get a token balance for a specific token and team. Defaults to the Colony's native token and the `Root` team.

**`remarks`**
The function will automatically figure out the corresponding pot for the given domain, as this is what's usually expected.

**`example`**
Get the xDAI balance of the team number 2
```typescript
import { constants, utils } from 'ethers';
// The `AddressZero` means ETH on mainnet and xDAI on Gnosis chain
const balance = await colony.getBalance(constants.AddressZero, 2);
// This will format the balance as a string in eth and not wei (i.e. 1.0 vs. 1000000000000000000)
console.info(utils.formatEther(balance));
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
| `teamId` | [`Id`](../enums/constants.Id.md) | `Id.RootDomain` | The teamId (domainId) of the team to get the reputation for. Default is the `Root` team |

#### Returns

`Promise`<`BigNumber`\>

A number quantifying the user addresses' reputation

___

### getToken

▸ **getToken**(): `ColonyToken`

Get a new instance of a Colony's native Token

**`remarks`**
Currently only Tokens deployed via Colony are supported (no external, imported tokens) in Colony SDK. All other kinds will throw an error

#### Returns

`ColonyToken`

A [[Token]] abstaction instance

___

### pay

▸ **pay**(`recipient`, `amount`, `tokenAddress?`, `teamId?`): `Promise`<[{}, `ContractReceipt`]\>

Make a payment to a single address using a single token

**`remarks`** Requires the `OneTxPayment` extension to be installed for the Colony (this is usually the case for Colonies created via the Dapp). Note that most tokens use 18 decimals, so add a bunch of zeros or use ethers' `parseUnits` function (see example)

**`example`**
```typescript
import { utils } from 'ethers';
import { Tokens } from '@colony/sdk';

// Immediately executing async function
(async function() {
  // Pay 10 XDAI (on Gnosis chain) to the following address
  await colony.pay(
     '0xb77D57F4959eAfA0339424b83FcFaf9c15407461',
     utils.parseUnits('10'),
     Tokens.Gnosis.XDAI,
  );
})();
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `recipient` | `string` | `undefined` | Wallet address of account to send the funds to (also awarded reputation when sending the native token) |
| `amount` | `BigNumberish` | `undefined` | Amount to pay in wei |
| `tokenAddress` | `string` | `undefined` | The address of the token to make the payment in. Default is the Colony's native token |
| `teamId` | `number` | `Id.RootDomain` | The team to use to send the funds from. Has to have funding of at least the amount you need to send. See [[Colony.moveFundsBetweenTeams]]. Defaults to the Colony's root team |

#### Returns

`Promise`<[{}, `ContractReceipt`]\>

A tupel of event data and contract receipt

**Event data**
| Property | Description |
| :------ | :------ |
| `agent` | The address that is responsible for triggering this event |
| `paymentId` | The newly added payment id |
