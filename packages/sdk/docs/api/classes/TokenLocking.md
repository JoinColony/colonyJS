# Class: TokenLocking

## Constructors

### constructor

• **new TokenLocking**(`colonyNetwork`, `address`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `colonyNetwork` | [`ColonyNetwork`](ColonyNetwork.md) |
| `address` | `string` |

## Properties

### address

• **address**: `string`

## Methods

### deposit

▸ **deposit**(`tokenAddress`, `amount`): [`MetaTxCreator`](MetaTxCreator.md)<`TokenLockingClient`, ``"deposit(address,uint256,bool)"``, { `amount?`: `BigNumber` ; `token?`: `string` ; `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

Deposit `amount` of the wallet owners holdings of the Colony's native token into the Colony.

In order for the wallet owner to stake tokens, that amount has to be approved and deposited into the Colony first. In the dapp the process is called "Activation" of a certain amount of the Colony's native token. The wallet must hold at least the amount of the token that will be deposited.

**`Example`**

```typescript
import { w } from '@colony/sdk';

// Immediately executing async function
(async function() {
  const token = await colony.getToken();
  // Approve 100 tokens for the Colony Network to activate
  await token.approve(w`100`).tx().mined();
  // Deposit the tokens
  await colonyNetwork.locking.deposit(token.address, w`100`).tx().mined();
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenAddress` | `string` | Token to be deposited |
| `amount` | `BigNumberish` | Amount of the token to be deposited |

#### Returns

[`MetaTxCreator`](MetaTxCreator.md)<`TokenLockingClient`, ``"deposit(address,uint256,bool)"``, { `amount?`: `BigNumber` ; `token?`: `string` ; `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `token` | string | The address of the Colony's native token |
| `user` | string | The address that deposited the tokens from their wallet |
| `amount` | BigNumber | Amount that was deposited |

___

### getUserApproval

▸ **getUserApproval**(`tokenAddress`, `user`, `obligator`): `Promise`<`BigNumber`\>

Get the wallet owner's approved balance of the Colony's native token for an obliator (i.e. an extension)

This method will show the accumulated amount that was approved using the [approve](ColonyToken.md#approve) method

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenAddress` | `string` | Token to check |
| `user` | `string` | The wallet address that we want to check the approved amount of |
| `obligator` | `string` | The address that has been approved to obligate the funds. |

#### Returns

`Promise`<`BigNumber`\>

The currently approved balance of the Colony's native token for the obligator

___

### getUserDeposit

▸ **getUserDeposit**(`tokenAddress`, `user`): `Promise`<`BigNumber`\>

Get the wallet owner's deposited and locked balance of the Colony's native token.

This method will show the accumulated amount that was deposited using the [deposit](TokenLocking.md#deposit) method

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenAddress` | `string` | Token to check |
| `user` | `string` | The wallet address that we want to check the deposited amount of |

#### Returns

`Promise`<`BigNumber`\>

The currently deposited balance of the Colony's native token

___

### withdraw

▸ **withdraw**(`tokenAddress`, `amount`): [`MetaTxCreator`](MetaTxCreator.md)<`TokenLockingClient`, ``"withdraw(address,uint256,bool)"``, { `amount?`: `BigNumber` ; `token?`: `string` ; `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

Withdraw `amount` of the wallet owners holdings of the Colony's native token from the Colony.

Does the opposite of `deposit` and frees the deposited tokens back to the wallet address.

**`Example`**

```typescript
import { w } from '@colony/sdk';

// Immediately executing async function
(async function() {
  const token = await colony.getToken();
  // Withdraw 100 tokens that were previously deposited
  await colonyNetwork.locking.withdraw(token.address, w`100`).tx().mined();
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenAddress` | `string` | Token to be withdrawn |
| `amount` | `BigNumberish` | Amount of the token to be withdrawn |

#### Returns

[`MetaTxCreator`](MetaTxCreator.md)<`TokenLockingClient`, ``"withdraw(address,uint256,bool)"``, { `amount?`: `BigNumber` ; `token?`: `string` ; `user?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `token` | string | The address of the Colony's native token |
| `user` | string | The address that withdrew the tokens from their wallet |
| `amount` | BigNumber | Amount that was withdrawn |
