[Colony SDK 🚀](../README.md) / [Modules](../modules.md) / [ColonyNetwork](../modules/ColonyNetwork.md) / ColonyToken

# Class: ColonyToken

[ColonyNetwork](../modules/ColonyNetwork.md).ColonyToken

## Table of contents

### Methods

- [mint](ColonyNetwork.ColonyToken.md#mint)
- [symbol](ColonyNetwork.ColonyToken.md#symbol)

## Methods

### mint

▸ **mint**(`amount`): `Promise`<[{}, `ContractReceipt`]\>

Mints `amount` of a Colony's native token.

**`remarks`**
Only works for tokens deployed with Colony (not imported tokens). Note that most tokens use 18 decimals, so add a bunch of zeros or use ethers' `parseUnits` function (see example). Also not that for tokens to be available in the Colony after funding, you need to call the [Colony.claimFunds](ColonyNetwork.Colony.md#claimfunds) method after minting.

**`example`**
```typescript
import { utils } from 'ethers';

const token = colony.getToken();
// Mint 100 tokens of the Colony's native token
await token.mint(utils.parseUnits('100'));
// Claim the minted tokens for the Colony
await colony.claimFunds();
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BigNumberish` |

#### Returns

`Promise`<[{}, `ContractReceipt`]\>

A tupel of event data and contract receipt

___

### symbol

▸ **symbol**(): `Promise`<`string`\>

Gets the token's symbol

#### Returns

`Promise`<`string`\>

The token's symbol (e.g. CLNY)
