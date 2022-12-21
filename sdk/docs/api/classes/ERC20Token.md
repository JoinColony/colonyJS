# Class: ERC20Token

## Hierarchy

- **`ERC20Token`**

  ↳ [`ColonyToken`](ColonyToken.md)

  ↳ [`ERC2612Token`](ERC2612Token.md)

## Constructors

### constructor

• **new ERC20Token**(`colonyNetwork`, `token`)

Creates a new instance of an ERC20 Token

**`Remarks`**

This does not deploy a new token, only connects to an exisiting one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colonyNetwork` | [`ColonyNetwork`](ColonyNetwork.md) | A [ColonyNetwork](ColonyNetwork.md) instance |
| `token` | `string` \| `TokenERC20` | A token address or a full contract (like on a colony token client) |

## Properties

### address

• **address**: `string`

## Methods

### approve

▸ **approve**(`amount`, `spender?`): [`TxCreator`](TxCreator.md)<`TokenERC20`, ``"approve"``, { `guy?`: `string` ; `src?`: `string` ; `wad?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

Approve `amount` of the wallet owners holdings of the specified token

In order for the wallet owner to stake tokens, that amount has to be approved and deposited into the Colony first. In the dapp the process is called "Activation" of a certain amount of the Colony's native token. The wallet must hold at least the amount of the token that will be approved.

**`Example`**

```typescript
import { w } from '@colony/sdk';

// Immediately executing async function
(async function() {
  // Approve 100 tokens to be "activated"
  await colony.token.approve(w`100`).force();
  // Deposit the tokens
  await colonyNetwork.locking.deposit(token.address, w`100`).force();
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BigNumberish` | Amount of the token to be approved |
| `spender?` | `string` | Spender to approve the amount for. Defaults to the Colony Network |

#### Returns

[`TxCreator`](TxCreator.md)<`TokenERC20`, ``"approve"``, { `guy?`: `string` ; `src?`: `string` ; `wad?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `src` | string | The address that approved the tokens from their wallet |
| `guy` | string | Address of the TokenLocking contract |
| `wad` | BigNumber | Amount that was approved |

___

### decimals

▸ **decimals**(): `Promise`<`number`\>

Gets the token's decimals

#### Returns

`Promise`<`number`\>

The token's decimals (e.g. 18)

___

### name

▸ **name**(): `Promise`<`string`\>

Gets the token's name

#### Returns

`Promise`<`string`\>

The token's name (e.g. Colony Network Token)

___

### symbol

▸ **symbol**(): `Promise`<`string`\>

Gets the token's symbol

#### Returns

`Promise`<`string`\>

The token's symbol (e.g. CLNY)
