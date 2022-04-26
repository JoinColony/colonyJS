[Colony SDK 🚀](../README.md) / [Modules](../modules.md) / [ColonyNetwork](../modules/ColonyNetwork.md) / Colony

# Class: Colony

[ColonyNetwork](../modules/ColonyNetwork.md).Colony

## Table of contents

### Properties

- [SupportedVersions](ColonyNetwork.Colony.md#supportedversions)

### Methods

- [createTeam](ColonyNetwork.Colony.md#createteam)
- [getBalance](ColonyNetwork.Colony.md#getbalance)

## Properties

### SupportedVersions

▪ `Static` **SupportedVersions**: (``8`` \| ``9``)[]

The currently supported Colony version. If a Colony is not on this version it has to be upgraded.
If this is not an option, ColonySDK might throw errors at certain points. Usage of ColonyJS is advised in these cases

## Methods

### createTeam

▸ **createTeam**(): `Promise`<[{ `agent?`: `string` ; `domainId?`: `BigNumber` ; `fundingPotId?`: `BigNumber`  }, `ContractReceipt`]\>

Create a team within a Colony

**`remarks`**
Currently you can only add domains within the `Root` domain. This restriction will be lifted soon

#### Returns

`Promise`<[{ `agent?`: `string` ; `domainId?`: `BigNumber` ; `fundingPotId?`: `BigNumber`  }, `ContractReceipt`]\>

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
