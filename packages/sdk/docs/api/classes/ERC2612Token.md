# Class: ERC2612Token

## Hierarchy

- [`ERC20Token`](ERC20Token.md)

  ↳ **`ERC2612Token`**

## Constructors

### constructor

• **new ERC2612Token**(`colonyNetwork`, `token`)

Creates a new instance of an ERC2612 token (ERC20 with Permit extension)

**`Remarks`**

This does not deploy a new token, only connects to an exisiting one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colonyNetwork` | [`ColonyNetwork`](ColonyNetwork.md) | A [ColonyNetwork](ColonyNetwork.md) instance |
| `token` | `string` \| `TokenERC2612` | A token address or a full contract (like on a colony token client) |

#### Overrides

[ERC20Token](ERC20Token.md).[constructor](ERC20Token.md#constructor)

## Properties

### address

• **address**: `string`

#### Inherited from

[ERC20Token](ERC20Token.md).[address](ERC20Token.md#address)

## Methods

### allowance

▸ **allowance**(`owner`, `spender`): `Promise`<`BigNumber`\>

Returns the amount which `spender` is still allowed to withdraw from `owner`

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `spender` | `string` |

#### Returns

`Promise`<`BigNumber`\>

The allowance amount

#### Inherited from

[ERC20Token](ERC20Token.md).[allowance](ERC20Token.md#allowance)

___

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
  await colony.token.approve(w`100`).tx().mined();
  // Deposit the tokens
  await colonyNetwork.locking.deposit(token.address, w`100`).tx().mined();
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

#### Inherited from

[ERC20Token](ERC20Token.md).[approve](ERC20Token.md#approve)

___

### balanceOf

▸ **balanceOf**(`owner`): `Promise`<`BigNumber`\>

Returns the account balance of another account with address `owner`

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |

#### Returns

`Promise`<`BigNumber`\>

The account balance of the corresponding address

#### Inherited from

[ERC20Token](ERC20Token.md).[balanceOf](ERC20Token.md#balanceof)

___

### decimals

▸ **decimals**(): `Promise`<`number`\>

Returns the token's decimals

#### Returns

`Promise`<`number`\>

The token's decimals (e.g. 18)

#### Inherited from

[ERC20Token](ERC20Token.md).[decimals](ERC20Token.md#decimals)

___

### name

▸ **name**(): `Promise`<`string`\>

Returns the token's name

#### Returns

`Promise`<`string`\>

The token's name (e.g. Colony Network Token)

#### Inherited from

[ERC20Token](ERC20Token.md).[name](ERC20Token.md#name)

___

### permit

▸ **permit**(`amount`, `spender?`): `EIP2612TxCreator`<{ `guy?`: `string` ; `src?`: `string` ; `wad?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

Permit `amount` of the wallet owners holdings of the specified token.

This is the same as [approve](ERC20Token.md#approve) but works only for gasless metatransactions. If you have a Colony-deployed token, use `approve`. This is mainly to support gasless transactions for BYOT (bring-your-own-token).

This follows the EIP-2612 "Permit" specification. See https://eips.ethereum.org/EIPS/eip-2612.

In order for the wallet owner to stake tokens, that amount has to be approved and deposited into the Colony first. In the dapp the process is called "Activation" of a certain amount of the Colony's native token. The wallet must hold at least the amount of the token that will be approved.

**`Remarks`**

Note that the arguments are turned around when comparing with the EIP2612 format.

**`Example`**

```typescript
import { w } from '@colony/sdk';

// Immediately executing async function
(async function() {
  // Permit 100 tokens to be "activated"
  await colony.token.permit(w`100`).metaTx().mined();
  // Deposit the tokens
  await colonyNetwork.locking.deposit(token.address, w`100`).metaTx().mined();
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BigNumberish` | Amount of the token to be approved |
| `spender?` | `string` | Spender to approve the amount for. Defaults to the Colony Network |

#### Returns

`EIP2612TxCreator`<{ `guy?`: `string` ; `src?`: `string` ; `wad?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `src` | string | The address that approved the tokens from their wallet |
| `guy` | string | Address of the TokenLocking contract |
| `wad` | BigNumber | Amount that was approved |

___

### symbol

▸ **symbol**(): `Promise`<`string`\>

Returns the token's symbol

#### Returns

`Promise`<`string`\>

The token's symbol (e.g. CLNY)

#### Inherited from

[ERC20Token](ERC20Token.md).[symbol](ERC20Token.md#symbol)

___

### totalSupply

▸ **totalSupply**(): `Promise`<`BigNumber`\>

Returns the total token supply

#### Returns

`Promise`<`BigNumber`\>

The token's total supply

#### Inherited from

[ERC20Token](ERC20Token.md).[totalSupply](ERC20Token.md#totalsupply)

___

### transfer

▸ **transfer**(`to`, `value`): [`TxCreator`](TxCreator.md)<`TokenERC20`, ``"transfer"``, { `dst?`: `string` ; `src?`: `string` ; `wad?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

Transfers `value` amount of tokens to address `to` from the currently used wallet

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `value` | `BigNumberish` |

#### Returns

[`TxCreator`](TxCreator.md)<`TokenERC20`, ``"transfer"``, { `dst?`: `string` ; `src?`: `string` ; `wad?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `src` | string | The address that transferred the tokens from their wallet |
| `dst` | string | Address of the recipient of the tokens |
| `wad` | BigNumber | Amount that was transferred |

#### Inherited from

[ERC20Token](ERC20Token.md).[transfer](ERC20Token.md#transfer)

___

### transferFrom

▸ **transferFrom**(`from`, `to`, `value`): [`TxCreator`](TxCreator.md)<`TokenERC20`, ``"transferFrom"``, { `dst?`: `string` ; `src?`: `string` ; `wad?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

Transfers `value` amount of tokens from address `from` to address `to`

The transferFrom method is used for a withdraw workflow, allowing contracts to transfer tokens on your behalf. This can be used for example to allow a contract to transfer tokens on your behalf and/or to charge fees in sub-currencies

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `value` | `BigNumberish` |

#### Returns

[`TxCreator`](TxCreator.md)<`TokenERC20`, ``"transferFrom"``, { `dst?`: `string` ; `src?`: `string` ; `wad?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `src` | string | The address that transferred the tokens from their wallet |
| `dst` | string | Address of the recipient of the tokens |
| `wad` | BigNumber | Amount that was transferred |

#### Inherited from

[ERC20Token](ERC20Token.md).[transferFrom](ERC20Token.md#transferfrom)
