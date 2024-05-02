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
| `DOMAIN_SEPARATOR()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `PERMIT_TYPEHASH` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `PERMIT_TYPEHASH()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `allowance` | (`src`: `string`, `guy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance(address,address)` | (`src`: `string`, `guy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `approve(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `balanceOf` | (`src`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOf(address)` | (`src`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `burn(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `burn(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getChainId()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `locked` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `locked()` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `mint(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `mint(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `nonces` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `nonces(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `permit(address,address,uint256,uint256,uint8,bytes32,bytes32)` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transfer(address,uint256)` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom(address,address,uint256)` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `unlock` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unlock()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verify` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Inherited from

[ColonyToken](ColonyToken.md).[callStatic](ColonyToken.md#callstatic)

___

### clientType

• **clientType**: [`TokenClient`](../enums/ClientTypeTokens.md#tokenclient)

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

[ColonyToken](ColonyToken.md).[deployTransaction](ColonyToken.md#deploytransaction)

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `DOMAIN_SEPARATOR()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `PERMIT_TYPEHASH` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `PERMIT_TYPEHASH()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance` | (`src`: `string`, `guy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance(address,address)` | (`src`: `string`, `guy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `approve(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`src`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOf(address)` | (`src`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `burn(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `burn(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getChainId()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `locked` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `locked()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `mint(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `mint(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `nonces` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `nonces(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `permit(address,address,uint256,uint256,uint8,bytes32,bytes32)` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `transfer(address,uint256)` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `transferFrom(address,address,uint256)` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `unlock` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `unlock()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `verify` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Inherited from

[ColonyToken](ColonyToken.md).[estimateGas](ColonyToken.md#estimategas)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`src?`: ``null`` \| `string`, `guy?`: ``null`` \| `string`, `wad?`: ``null``) => `ApprovalEventFilter` |
| `Approval(address,address,uint256)` | (`src?`: ``null`` \| `string`, `guy?`: ``null`` \| `string`, `wad?`: ``null``) => `ApprovalEventFilter` |
| `Burn` | (`guy?`: ``null`` \| `string`, `wad?`: ``null``) => `BurnEventFilter` |
| `Burn(address,uint256)` | (`guy?`: ``null`` \| `string`, `wad?`: ``null``) => `BurnEventFilter` |
| `LogSetAuthority` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetOwner` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `Mint` | (`guy?`: ``null`` \| `string`, `wad?`: ``null``) => `MintEventFilter` |
| `Mint(address,uint256)` | (`guy?`: ``null`` \| `string`, `wad?`: ``null``) => `MintEventFilter` |
| `Transfer` | (`src?`: ``null`` \| `string`, `dst?`: ``null`` \| `string`, `wad?`: ``null``) => `TransferEventFilter` |
| `Transfer(address,address,uint256)` | (`src?`: ``null`` \| `string`, `dst?`: ``null`` \| `string`, `wad?`: ``null``) => `TransferEventFilter` |

#### Inherited from

[ColonyToken](ColonyToken.md).[filters](ColonyToken.md#filters)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `DOMAIN_SEPARATOR()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `PERMIT_TYPEHASH` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `PERMIT_TYPEHASH()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `allowance` | (`src`: `string`, `guy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `allowance(address,address)` | (`src`: `string`, `guy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `approve(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `balanceOf` | (`src`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `balanceOf(address)` | (`src`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `burn(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `burn(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getChainId()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getMetatransactionNonce` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getMetatransactionNonce(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `locked` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `locked()` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `mint(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `mint(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `nonces` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `nonces(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `permit(address,address,uint256,uint256,uint8,bytes32,bytes32)` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `transfer(address,uint256)` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom(address,address,uint256)` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `unlock` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `unlock()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `verify` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |

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
| `DOMAIN_SEPARATOR()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `PERMIT_TYPEHASH` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `PERMIT_TYPEHASH()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `allowance` | (`src`: `string`, `guy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `allowance(address,address)` | (`src`: `string`, `guy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `approve(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`src`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf(address)` | (`src`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `burn(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `burn(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getChainId()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `locked` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `locked()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `mint(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `mint(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `nonces` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `nonces(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `permit(address,address,uint256,uint256,uint8,bytes32,bytes32)` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `transfer(address,uint256)` | (`dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom(address,address,uint256)` | (`src`: `string`, `dst`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `unlock` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `unlock()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `verify` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

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

### DOMAIN\_SEPARATOR()

▸ **DOMAIN_SEPARATOR()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[DOMAIN_SEPARATOR()](ColonyToken.md#domain_separator())

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

### PERMIT\_TYPEHASH()

▸ **PERMIT_TYPEHASH()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[PERMIT_TYPEHASH()](ColonyToken.md#permit_typehash())

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
| `src` | `string` |
| `guy` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[allowance](ColonyToken.md#allowance)

___

### allowance(address,address)

▸ **allowance(address,address)**(`src`, `guy`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `guy` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[allowance(address,address)](ColonyToken.md#allowance(address,address))

___

### approve

▸ **approve**(`guy`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guy` | `string` |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[approve](ColonyToken.md#approve)

___

### approve(address,uint256)

▸ **approve(address,uint256)**(`guy`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guy` | `string` |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[approve(address,uint256)](ColonyToken.md#approve(address,uint256))

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

### authority()

▸ **authority()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[authority()](ColonyToken.md#authority())

___

### balanceOf

▸ **balanceOf**(`src`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[balanceOf](ColonyToken.md#balanceof)

___

### balanceOf(address)

▸ **balanceOf(address)**(`src`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[balanceOf(address)](ColonyToken.md#balanceof(address))

___

### burn(address,uint256)

▸ **burn(address,uint256)**(`guy`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guy` | `string` |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

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
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

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
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

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

### decimals()

▸ **decimals()**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[decimals()](ColonyToken.md#decimals())

___

### deployed

▸ **deployed**(): `Promise`<[`ColonyTokenClient`](ColonyTokenClient.md)\>

#### Returns

`Promise`<[`ColonyTokenClient`](ColonyTokenClient.md)\>

#### Inherited from

[ColonyToken](ColonyToken.md).[deployed](ColonyToken.md#deployed)

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_payload` | `BytesLike` |
| `_sigR` | `BytesLike` |
| `_sigS` | `BytesLike` |
| `_sigV` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[executeMetaTransaction](ColonyToken.md#executemetatransaction)

___

### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)

▸ **executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)**(`_user`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_payload` | `BytesLike` |
| `_sigR` | `BytesLike` |
| `_sigS` | `BytesLike` |
| `_sigV` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)](ColonyToken.md#executemetatransaction(address,bytes,bytes32,bytes32,uint8))

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

### getChainId()

▸ **getChainId()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[getChainId()](ColonyToken.md#getchainid())

___

### getMetatransactionNonce

▸ **getMetatransactionNonce**(`_user`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[getMetatransactionNonce](ColonyToken.md#getmetatransactionnonce)

___

### getMetatransactionNonce(address)

▸ **getMetatransactionNonce(address)**(`_user`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[getMetatransactionNonce(address)](ColonyToken.md#getmetatransactionnonce(address))

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
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

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

### locked()

▸ **locked()**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[locked()](ColonyToken.md#locked())

___

### mint(address,uint256)

▸ **mint(address,uint256)**(`guy`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guy` | `string` |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

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
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

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

### name()

▸ **name()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[name()](ColonyToken.md#name())

___

### nonces

▸ **nonces**(`_user`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[nonces](ColonyToken.md#nonces)

___

### nonces(address)

▸ **nonces(address)**(`_user`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[nonces(address)](ColonyToken.md#nonces(address))

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

### owner()

▸ **owner()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[owner()](ColonyToken.md#owner())

___

### permit

▸ **permit**(`owner`, `spender`, `value`, `deadline`, `v`, `r`, `s`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `spender` | `string` |
| `value` | `BigNumberish` |
| `deadline` | `BigNumberish` |
| `v` | `BigNumberish` |
| `r` | `BytesLike` |
| `s` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[permit](ColonyToken.md#permit)

___

### permit(address,address,uint256,uint256,uint8,bytes32,bytes32)

▸ **permit(address,address,uint256,uint256,uint8,bytes32,bytes32)**(`owner`, `spender`, `value`, `deadline`, `v`, `r`, `s`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `spender` | `string` |
| `value` | `BigNumberish` |
| `deadline` | `BigNumberish` |
| `v` | `BigNumberish` |
| `r` | `BytesLike` |
| `s` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[permit(address,address,uint256,uint256,uint8,bytes32,bytes32)](ColonyToken.md#permit(address,address,uint256,uint256,uint8,bytes32,bytes32))

___

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

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
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

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
| `authority_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[setAuthority](ColonyToken.md#setauthority)

___

### setAuthority(address)

▸ **setAuthority(address)**(`authority_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authority_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[setAuthority(address)](ColonyToken.md#setauthority(address))

___

### setOwner

▸ **setOwner**(`owner_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[setOwner](ColonyToken.md#setowner)

___

### setOwner(address)

▸ **setOwner(address)**(`owner_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[setOwner(address)](ColonyToken.md#setowner(address))

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

### symbol()

▸ **symbol()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[symbol()](ColonyToken.md#symbol())

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

### totalSupply()

▸ **totalSupply()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[totalSupply()](ColonyToken.md#totalsupply())

___

### transfer

▸ **transfer**(`dst`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dst` | `string` |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[transfer](ColonyToken.md#transfer)

___

### transfer(address,uint256)

▸ **transfer(address,uint256)**(`dst`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dst` | `string` |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[transfer(address,uint256)](ColonyToken.md#transfer(address,uint256))

___

### transferFrom

▸ **transferFrom**(`src`, `dst`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[transferFrom](ColonyToken.md#transferfrom)

___

### transferFrom(address,address,uint256)

▸ **transferFrom(address,address,uint256)**(`src`, `dst`, `wad`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dst` | `string` |
| `wad` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[transferFrom(address,address,uint256)](ColonyToken.md#transferfrom(address,address,uint256))

___

### unlock

▸ **unlock**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[unlock](ColonyToken.md#unlock)

___

### unlock()

▸ **unlock()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[unlock()](ColonyToken.md#unlock())

___

### verify

▸ **verify**(`_user`, `_nonce`, `_chainId`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_nonce` | `BigNumberish` |
| `_chainId` | `BigNumberish` |
| `_payload` | `BytesLike` |
| `_sigR` | `BytesLike` |
| `_sigS` | `BytesLike` |
| `_sigV` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[verify](ColonyToken.md#verify)

___

### verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)

▸ **verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)**(`_user`, `_nonce`, `_chainId`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_nonce` | `BigNumberish` |
| `_chainId` | `BigNumberish` |
| `_payload` | `BytesLike` |
| `_sigR` | `BytesLike` |
| `_sigS` | `BytesLike` |
| `_sigV` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[ColonyToken](ColonyToken.md).[verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)](ColonyToken.md#verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8))
