# Interface: ColonyTokenClient

A ColonyToken has special abilities that go beyond the capabilities of an ERC20 token

## Hierarchy

- [`ColonyToken`](ColonyToken.md)

  ↳ **`ColonyTokenClient`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[_deployedPromise](ColonyToken.md#_deployedpromise)

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

[ColonyToken](ColonyToken.md).[_runningEvents](ColonyToken.md#_runningevents)

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

[ColonyToken](ColonyToken.md).[_wrappedEmits](ColonyToken.md#_wrappedemits)

___

### address

• `Readonly` **address**: `string`

#### Inherited from

[ColonyToken](ColonyToken.md).[address](ColonyToken.md#address)

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `PERMIT_TYPEHASH` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `allowance` | (`src`: `PromiseOrValue`<`string`\>, `guy`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `balanceOf` | (`src`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `burn(address,uint256)` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `burn(uint256)` | (`wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `executeMetaTransaction` | (`_user`: `PromiseOrValue`<`string`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `locked` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `mint(address,uint256)` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `mint(uint256)` | (`wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `permit` | (`owner`: `PromiseOrValue`<`string`\>, `spender`: `PromiseOrValue`<`string`\>, `value`: `PromiseOrValue`<`BigNumberish`\>, `deadline`: `PromiseOrValue`<`BigNumberish`\>, `v`: `PromiseOrValue`<`BigNumberish`\>, `r`: `PromiseOrValue`<`BytesLike`\>, `s`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`dst`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`src`: `PromiseOrValue`<`string`\>, `dst`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `unlock` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verify` | (`_owner`: `PromiseOrValue`<`string`\>, `_nonce`: `PromiseOrValue`<`BigNumberish`\>, `_chainId`: `PromiseOrValue`<`BigNumberish`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Inherited from

[ColonyToken](ColonyToken.md).[callStatic](ColonyToken.md#callstatic)

___

### clientType

• **clientType**: [`TokenClient`](../enums/ClientType.md#tokenclient)

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

[ColonyToken](ColonyToken.md).[deployTransaction](ColonyToken.md#deploytransaction)

___

### estimateGas

• **estimateGas**: { `DOMAIN_SEPARATOR`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `PERMIT_TYPEHASH`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `allowance`: (`src`: `PromiseOrValue`<`string`\>, `guy`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `approve`: (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> ; `authority`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `balanceOf`: (`src`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `burn(address,uint256)`: (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> ; `burn(uint256)`: (`wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> ; `decimals`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `executeMetaTransaction`: (`_user`: `PromiseOrValue`<`string`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> ; `getChainId`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `getMetatransactionNonce`: (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `locked`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `mint(address,uint256)`: (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> ; `mint(uint256)`: (`wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> ; `name`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `owner`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `permit`: (`owner`: `PromiseOrValue`<`string`\>, `spender`: `PromiseOrValue`<`string`\>, `value`: `PromiseOrValue`<`BigNumberish`\>, `deadline`: `PromiseOrValue`<`BigNumberish`\>, `v`: `PromiseOrValue`<`BigNumberish`\>, `r`: `PromiseOrValue`<`BytesLike`\>, `s`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setAuthority`: (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> ; `setOwner`: (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> ; `symbol`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `totalSupply`: (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> ; `transfer`: (`dst`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> ; `transferFrom`: (`src`: `PromiseOrValue`<`string`\>, `dst`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> ; `unlock`: (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> ; `verify`: (`_owner`: `PromiseOrValue`<`string`\>, `_nonce`: `PromiseOrValue`<`BigNumberish`\>, `_chainId`: `PromiseOrValue`<`BigNumberish`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\>  } & { `deployTokenAuthority`: (`allowedToMint`: `string`, `allowedToTransfer`: `string`[], `overrides?`: `TxOverrides`) => `Promise`<`BigNumber`\>  }

#### Overrides

[ColonyToken](ColonyToken.md).[estimateGas](ColonyToken.md#estimategas)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`src?`: ``null`` \| `PromiseOrValue`<`string`\>, `guy?`: ``null`` \| `PromiseOrValue`<`string`\>, `wad?`: ``null``) => `ApprovalEventFilter` |
| `Approval(address,address,uint256)` | (`src?`: ``null`` \| `PromiseOrValue`<`string`\>, `guy?`: ``null`` \| `PromiseOrValue`<`string`\>, `wad?`: ``null``) => `ApprovalEventFilter` |
| `Burn` | (`guy?`: ``null`` \| `PromiseOrValue`<`string`\>, `wad?`: ``null``) => `BurnEventFilter` |
| `Burn(address,uint256)` | (`guy?`: ``null`` \| `PromiseOrValue`<`string`\>, `wad?`: ``null``) => `BurnEventFilter` |
| `LogSetAuthority` | (`authority?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetAuthorityEventFilter` |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetAuthorityEventFilter` |
| `LogSetOwner` | (`owner?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetOwnerEventFilter` |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetOwnerEventFilter` |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `Mint` | (`guy?`: ``null`` \| `PromiseOrValue`<`string`\>, `wad?`: ``null``) => `MintEventFilter` |
| `Mint(address,uint256)` | (`guy?`: ``null`` \| `PromiseOrValue`<`string`\>, `wad?`: ``null``) => `MintEventFilter` |
| `Transfer` | (`src?`: ``null`` \| `PromiseOrValue`<`string`\>, `dst?`: ``null`` \| `PromiseOrValue`<`string`\>, `wad?`: ``null``) => `TransferEventFilter` |
| `Transfer(address,address,uint256)` | (`src?`: ``null`` \| `PromiseOrValue`<`string`\>, `dst?`: ``null`` \| `PromiseOrValue`<`string`\>, `wad?`: ``null``) => `TransferEventFilter` |

#### Inherited from

[ColonyToken](ColonyToken.md).[filters](ColonyToken.md#filters)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `PERMIT_TYPEHASH` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `allowance` | (`src`: `PromiseOrValue`<`string`\>, `guy`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `balanceOf` | (`src`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `burn(address,uint256)` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `burn(uint256)` | (`wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `executeMetaTransaction` | (`_user`: `PromiseOrValue`<`string`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getMetatransactionNonce` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `locked` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `mint(address,uint256)` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mint(uint256)` | (`wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `permit` | (`owner`: `PromiseOrValue`<`string`\>, `spender`: `PromiseOrValue`<`string`\>, `value`: `PromiseOrValue`<`BigNumberish`\>, `deadline`: `PromiseOrValue`<`BigNumberish`\>, `v`: `PromiseOrValue`<`BigNumberish`\>, `r`: `PromiseOrValue`<`BytesLike`\>, `s`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`dst`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`src`: `PromiseOrValue`<`string`\>, `dst`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unlock` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `verify` | (`_owner`: `PromiseOrValue`<`string`\>, `_nonce`: `PromiseOrValue`<`BigNumberish`\>, `_chainId`: `PromiseOrValue`<`BigNumberish`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |

#### Inherited from

[ColonyToken](ColonyToken.md).[functions](ColonyToken.md#functions)

___

### interface

• **interface**: `MetaTxTokenInterface`

#### Inherited from

[ColonyToken](ColonyToken.md).[interface](ColonyToken.md#interface)

___

### off

• **off**: `OnEvent`<[`ColonyTokenClient`](ColonyTokenClient.md)\>

#### Inherited from

[ColonyToken](ColonyToken.md).[off](ColonyToken.md#off)

___

### on

• **on**: `OnEvent`<[`ColonyTokenClient`](ColonyTokenClient.md)\>

#### Inherited from

[ColonyToken](ColonyToken.md).[on](ColonyToken.md#on)

___

### once

• **once**: `OnEvent`<[`ColonyTokenClient`](ColonyTokenClient.md)\>

#### Inherited from

[ColonyToken](ColonyToken.md).[once](ColonyToken.md#once)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `PERMIT_TYPEHASH` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `allowance` | (`src`: `PromiseOrValue`<`string`\>, `guy`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`src`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `burn(address,uint256)` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `burn(uint256)` | (`wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction` | (`_user`: `PromiseOrValue`<`string`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `locked` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `mint(address,uint256)` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mint(uint256)` | (`wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `permit` | (`owner`: `PromiseOrValue`<`string`\>, `spender`: `PromiseOrValue`<`string`\>, `value`: `PromiseOrValue`<`BigNumberish`\>, `deadline`: `PromiseOrValue`<`BigNumberish`\>, `v`: `PromiseOrValue`<`BigNumberish`\>, `r`: `PromiseOrValue`<`BytesLike`\>, `s`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`dst`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`src`: `PromiseOrValue`<`string`\>, `dst`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unlock` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `verify` | (`_owner`: `PromiseOrValue`<`string`\>, `_nonce`: `PromiseOrValue`<`BigNumberish`\>, `_chainId`: `PromiseOrValue`<`BigNumberish`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

[ColonyToken](ColonyToken.md).[populateTransaction](ColonyToken.md#populatetransaction)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

[ColonyToken](ColonyToken.md).[provider](ColonyToken.md#provider)

___

### removeListener

• **removeListener**: `OnEvent`<[`ColonyTokenClient`](ColonyTokenClient.md)\>

#### Inherited from

[ColonyToken](ColonyToken.md).[removeListener](ColonyToken.md#removelistener)

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[resolvedAddress](ColonyToken.md#resolvedaddress)

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

[ColonyToken](ColonyToken.md).[signer](ColonyToken.md#signer)

___

### tokenClientType

• **tokenClientType**: [`Colony`](../enums/TokenClientType.md#colony)

## Methods

### DOMAIN\_SEPARATOR

▸ **DOMAIN_SEPARATOR**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[DOMAIN_SEPARATOR](ColonyToken.md#domain_separator)

___

### PERMIT\_TYPEHASH

▸ **PERMIT_TYPEHASH**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[PERMIT_TYPEHASH](ColonyToken.md#permit_typehash)

___

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

#### Inherited from

[ColonyToken](ColonyToken.md).[_checkRunningEvents](ColonyToken.md#_checkrunningevents)

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[_deployed](ColonyToken.md#_deployed)

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |
| `log` | `Log` |
| `listener` | `Listener` |

#### Returns

`Event`

#### Inherited from

[ColonyToken](ColonyToken.md).[_wrapEvent](ColonyToken.md#_wrapevent)

___

### allowance

▸ **allowance**(`src`, `guy`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `PromiseOrValue`<`string`\> |
| `guy` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[allowance](ColonyToken.md#allowance)

___

### approve

▸ **approve**(`guy`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guy` | `PromiseOrValue`<`string`\> |
| `wad` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[approve](ColonyToken.md#approve)

___

### attach

▸ **attach**(`addressOrName`): [`ColonyTokenClient`](ColonyTokenClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ColonyTokenClient`](ColonyTokenClient.md)

#### Inherited from

[ColonyToken](ColonyToken.md).[attach](ColonyToken.md#attach)

___

### authority

▸ **authority**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[authority](ColonyToken.md#authority)

___

### balanceOf

▸ **balanceOf**(`src`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[balanceOf](ColonyToken.md#balanceof)

___

### burn(address,uint256)

▸ **burn(address,uint256)**(`guy`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guy` | `PromiseOrValue`<`string`\> |
| `wad` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[burn(address,uint256)](ColonyToken.md#burn(address,uint256))

___

### burn(uint256)

▸ **burn(uint256)**(`wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wad` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[burn(uint256)](ColonyToken.md#burn(uint256))

___

### connect

▸ **connect**(`signerOrProvider`): [`ColonyTokenClient`](ColonyTokenClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Provider` \| `Signer` |

#### Returns

[`ColonyTokenClient`](ColonyTokenClient.md)

#### Inherited from

[ColonyToken](ColonyToken.md).[connect](ColonyToken.md#connect)

___

### decimals

▸ **decimals**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[decimals](ColonyToken.md#decimals)

___

### deployTokenAuthority

▸ **deployTokenAuthority**(`allowedToMint`, `allowedToTransfer`, `overrides?`): `Promise`<`ContractTransaction`\>

Deploy a TokenAuthority contract for a specific token
The TokenAuthority enables certain addresses to transfer the tokens, even if it's locked
It also enables an assigned address to mint tokens

**`Remarks`**

Only works with tokens that allow for an authority to be set (e.g. tokens deployed with Colony)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `allowedToMint` | `string` | Address that is allowed to mint tokens (in most cases this is the Colony) |
| `allowedToTransfer` | `string`[] | Addresses that are allowed to transfer the token, even if it's locked |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

___

### deployed

▸ **deployed**(): `Promise`<[`ColonyTokenClient`](ColonyTokenClient.md)\>

#### Returns

`Promise`<[`ColonyTokenClient`](ColonyTokenClient.md)\>

#### Inherited from

[ColonyToken](ColonyToken.md).[deployed](ColonyToken.md#deployed)

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[ColonyToken](ColonyToken.md).[emit](ColonyToken.md#emit)

___

### executeMetaTransaction

▸ **executeMetaTransaction**(`_user`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`ContractTransaction`\>

Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | Address of user trying to do meta transaction |
| `_payload` | `PromiseOrValue`<`BytesLike`\> | Function call to make via meta transaction |
| `_sigR` | `PromiseOrValue`<`BytesLike`\> | R part of the signature |
| `_sigS` | `PromiseOrValue`<`BytesLike`\> | S part of the signature |
| `_sigV` | `PromiseOrValue`<`BigNumberish`\> | V part of the signature |
| `overrides?` | `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[executeMetaTransaction](ColonyToken.md#executemetatransaction)

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[fallback](ColonyToken.md#fallback)

___

### getChainId

▸ **getChainId**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[getChainId](ColonyToken.md#getchainid)

___

### getMetatransactionNonce

▸ **getMetatransactionNonce**(`_user`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[getMetatransactionNonce](ColonyToken.md#getmetatransactionnonce)

___

### getTokenInfo

▸ **getTokenInfo**(): `Promise`<`TokenInfo`\>

Get the standard ERC20 token information

#### Returns

`Promise`<`TokenInfo`\>

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `EventFilter` |

#### Returns

`number`

#### Inherited from

[ColonyToken](ColonyToken.md).[listenerCount](ColonyToken.md#listenercount)

___

### listeners

▸ **listeners**<`TEvent`\>(`eventFilter?`): `TypedListener`<`TEvent`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | `TypedEventFilter`<`TEvent`\> |

#### Returns

`TypedListener`<`TEvent`\>[]

#### Inherited from

[ColonyToken](ColonyToken.md).[listeners](ColonyToken.md#listeners)

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Inherited from

[ColonyToken](ColonyToken.md).[listeners](ColonyToken.md#listeners)

___

### locked

▸ **locked**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[locked](ColonyToken.md#locked)

___

### mint(address,uint256)

▸ **mint(address,uint256)**(`guy`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guy` | `PromiseOrValue`<`string`\> |
| `wad` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[mint(address,uint256)](ColonyToken.md#mint(address,uint256))

___

### mint(uint256)

▸ **mint(uint256)**(`wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wad` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[mint(uint256)](ColonyToken.md#mint(uint256))

___

### name

▸ **name**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[name](ColonyToken.md#name)

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[owner](ColonyToken.md#owner)

___

### permit

▸ **permit**(`owner`, `spender`, `value`, `deadline`, `v`, `r`, `s`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `PromiseOrValue`<`string`\> |
| `spender` | `PromiseOrValue`<`string`\> |
| `value` | `PromiseOrValue`<`BigNumberish`\> |
| `deadline` | `PromiseOrValue`<`BigNumberish`\> |
| `v` | `PromiseOrValue`<`BigNumberish`\> |
| `r` | `PromiseOrValue`<`BytesLike`\> |
| `s` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[permit](ColonyToken.md#permit)

___

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TypedEventFilter`<`TEvent`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<`TEvent`[]\>

#### Inherited from

[ColonyToken](ColonyToken.md).[queryFilter](ColonyToken.md#queryfilter)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ColonyTokenClient`](ColonyTokenClient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ColonyTokenClient`](ColonyTokenClient.md)

#### Inherited from

[ColonyToken](ColonyToken.md).[removeAllListeners](ColonyToken.md#removealllisteners)

▸ **removeAllListeners**(`eventName?`): [`ColonyTokenClient`](ColonyTokenClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ColonyTokenClient`](ColonyTokenClient.md)

#### Inherited from

[ColonyToken](ColonyToken.md).[removeAllListeners](ColonyToken.md#removealllisteners)

___

### setAuthority

▸ **setAuthority**(`authority_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authority_` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[setAuthority](ColonyToken.md#setauthority)

___

### setOwner

▸ **setOwner**(`owner_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[setOwner](ColonyToken.md#setowner)

___

### symbol

▸ **symbol**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[symbol](ColonyToken.md#symbol)

___

### totalSupply

▸ **totalSupply**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[totalSupply](ColonyToken.md#totalsupply)

___

### transfer

▸ **transfer**(`dst`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dst` | `PromiseOrValue`<`string`\> |
| `wad` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[transfer](ColonyToken.md#transfer)

___

### transferFrom

▸ **transferFrom**(`src`, `dst`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `PromiseOrValue`<`string`\> |
| `dst` | `PromiseOrValue`<`string`\> |
| `wad` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[transferFrom](ColonyToken.md#transferfrom)

___

### unlock

▸ **unlock**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[unlock](ColonyToken.md#unlock)

___

### verify

▸ **verify**(`_owner`, `_nonce`, `_chainId`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_owner` | `PromiseOrValue`<`string`\> |
| `_nonce` | `PromiseOrValue`<`BigNumberish`\> |
| `_chainId` | `PromiseOrValue`<`BigNumberish`\> |
| `_payload` | `PromiseOrValue`<`BytesLike`\> |
| `_sigR` | `PromiseOrValue`<`BytesLike`\> |
| `_sigS` | `PromiseOrValue`<`BytesLike`\> |
| `_sigV` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[verify](ColonyToken.md#verify)
