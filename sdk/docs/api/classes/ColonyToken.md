# Class: ColonyToken

## Properties

### address

• **address**: `string`

___

### tokenLockingClient

• **tokenLockingClient**: `TokenLockingClient`

## Methods

### approve

▸ **approve**(`amount`): `Promise`<[{ `guy?`: `string` ; `src?`: `string` ; `wad?`: `BigNumber`  }, `ContractReceipt`]\>

Approve `amount` of the wallet owners holdings of the Colony's native token.

In order for the wallet owner to stake tokens, that amount has to be approved and deposited into the Colony first. In the dapp the process is called "Activation" of a certain amount of the Colony's native token. The wallet must hold at least the amount of the token that will be approved.

**`Example`**

```typescript
import { w } from '@colony/sdk';

// Immediately executing async function
(async function() {
  const token = await colony.getToken();
  // Approve 100 tokens to be "activated"
  await token.approve(w`100`);
  // Deposit the tokens
  await token.deposit(w`100`);
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BigNumberish` | Amount of the token to be approved |

#### Returns

`Promise`<[{ `guy?`: `string` ; `src?`: `string` ; `wad?`: `BigNumber`  }, `ContractReceipt`]\>

A tupel of event data and contract receipt

**Event data**

| Property | Type | Description |
| :------ | :------ | :------ |
| `src` | string | The address that approved the tokens from their wallet |
| `guy` | string | Address of the TokenLocking contract |
| `wad` | BigNumber | Amount that was approved |

___

### deployAuthority

▸ **deployAuthority**(`allowedToTransfer?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `allowedToTransfer?` | `string`[] |

#### Returns

`Promise`<`string`\>

___

### deposit

▸ **deposit**(`amount`): `Promise`<[{ `amount?`: `BigNumber` ; `token?`: `string` ; `user?`: `string`  }, `ContractReceipt`]\>

Deposit `amount` of the wallet owners holdings of the Colony's native token into the Colony.

In order for the wallet owner to stake tokens, that amount has to be approved and deposited into the Colony first. In the dapp the process is called "Activation" of a certain amount of the Colony's native token. The wallet must hold at least the amount of the token that will be deposited.

**`Example`**

```typescript
import { w } from '@colony/sdk';

// Immediately executing async function
(async function() {
  const token = await colony.getToken();
  // Approve 100 tokens to be "activated"
  await token.approve(w`100`);
  // Deposit the tokens
  await token.deposit(w`100`);
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BigNumberish` | Amount of the token to be deposited |

#### Returns

`Promise`<[{ `amount?`: `BigNumber` ; `token?`: `string` ; `user?`: `string`  }, `ContractReceipt`]\>

A tupel of event data and contract receipt

**Event data**

| Property | Type | Description |
| :------ | :------ | :------ |
| `token` | string | The address of the Colony's native token |
| `user` | string | The address that deposited the tokens from their wallet |
| `amount` | BigNumber | Amount that was deposited |

___

### getUserApproval

▸ **getUserApproval**(`user`, `obligator`): `Promise`<`BigNumber`\>

Get the wallet owner's approved balance of the Colony's native token for an obliator (i.e. an extension)

This method will show the accumulated amount that was approved using the [ColonyToken.approve](ColonyToken.md#approve) method

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | `string` | The wallet address that we want to check the approved amount of |
| `obligator` | `string` | The address that has been approved to obligate the funds. |

#### Returns

`Promise`<`BigNumber`\>

The currently approved balance of the Colony's native token for the obligator

___

### getUserDeposit

▸ **getUserDeposit**(`user`): `Promise`<`BigNumber`\>

Get the wallet owner's deposited and locked balance of the Colony's native token.

This method will show the accumulated amount that was deposited using the [ColonyToken.deposit](ColonyToken.md#deposit) method

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | `string` | The wallet address that we want to check the deposited amount of |

#### Returns

`Promise`<`BigNumber`\>

The currently deposited balance of the Colony's native token

___

### mint

▸ **mint**(`amount`): [`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"mintTokens"``, `Record`<`string`, `unknown`\>, [`MetadataType`](../enums/MetadataType.md)\>

Mints `amount` of a Colony's native token.

**`Remarks`**

Only works for tokens deployed with Colony (not imported tokens). Note that most tokens use 18 decimals, so add a bunch of zeros or use our `w` or `toWei` functions (see example). Also not that for tokens to be available in the Colony after funding, you need to call the [Colony.claimFunds](Colony.md#claimfunds) method after minting.

**`Example`**

```typescript
import { w } from '@colony/sdk';

// Immediately executing async function
(async function() {
  const token = await colony.getToken();
  // Mint 100 tokens of the Colony's native token
  // (forced transaction example)
  await token.mint(w`100`).force();
  // Claim the minted tokens for the Colony
  // (forced transaction example)
  await colony.claimFunds().force();
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BigNumberish` | Amount of the token to be minted |

#### Returns

[`TxCreator`](TxCreator.md)<`ColonyClientV10`, ``"mintTokens"``, `Record`<`string`, `unknown`\>, [`MetadataType`](../enums/MetadataType.md)\>

A [TxCreator](TxCreator.md)

___

### setAuthority

▸ **setAuthority**(`tokenAuthorityAddress`): `Promise`<[`TxCreator`](TxCreator.md)<`ColonyTokenClient`, ``"setAuthority"``, `Record`<`string`, `unknown`\>, [`MetadataType`](../enums/MetadataType.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAuthorityAddress` | `string` |

#### Returns

`Promise`<[`TxCreator`](TxCreator.md)<`ColonyTokenClient`, ``"setAuthority"``, `Record`<`string`, `unknown`\>, [`MetadataType`](../enums/MetadataType.md)\>\>

___

### setupColonyAsOwner

▸ **setupColonyAsOwner**(): `Promise`<[`TxCreator`](TxCreator.md)<`ColonyTokenClient`, ``"setOwner"``, `Record`<`string`, `unknown`\>, [`MetadataType`](../enums/MetadataType.md)\>\>

#### Returns

`Promise`<[`TxCreator`](TxCreator.md)<`ColonyTokenClient`, ``"setOwner"``, `Record`<`string`, `unknown`\>, [`MetadataType`](../enums/MetadataType.md)\>\>

___

### symbol

▸ **symbol**(): `Promise`<`string`\>

Gets the token's symbol

#### Returns

`Promise`<`string`\>

The token's symbol (e.g. CLNY)

___

### withdraw

▸ **withdraw**(`amount`): `Promise`<[{ `amount?`: `BigNumber` ; `token?`: `string` ; `user?`: `string`  }, `ContractReceipt`]\>

Withdraw `amount` of the wallet owners holdings of the Colony's native token from the Colony.

Does the opposite of `deposit` and frees the deposited tokens back to the wallet address.

**`Example`**

```typescript
import { w } from '@colony/sdk';

// Immediately executing async function
(async function() {
  const token = await colony.getToken();
  // Withdraw 100 tokens that were previously deposited
  await token.withdraw(w`100`);
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BigNumberish` | Amount of the token to be withdrawn |

#### Returns

`Promise`<[{ `amount?`: `BigNumber` ; `token?`: `string` ; `user?`: `string`  }, `ContractReceipt`]\>

A tupel of event data and contract receipt

**Event data**

| Property | Type | Description |
| :------ | :------ | :------ |
| `token` | string | The address of the Colony's native token |
| `user` | string | The address that withdrew the tokens from their wallet |
| `amount` | BigNumber | Amount that was withdrawn |
