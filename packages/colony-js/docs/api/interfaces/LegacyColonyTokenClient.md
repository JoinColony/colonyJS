# Interface: LegacyColonyTokenClient

The "old", legacy Colony token without Metatransactions token

## Hierarchy

- [`Token`](Token.md)

  ↳ **`LegacyColonyTokenClient`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

[Token](Token.md).[_deployedPromise](Token.md#_deployedpromise)

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

[Token](Token.md).[_runningEvents](Token.md#_runningevents)

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

[Token](Token.md).[_wrappedEmits](Token.md#_wrappedemits)

___

### address

• `Readonly` **address**: `string`

#### Inherited from

[Token](Token.md).[address](Token.md#address)

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
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
| `locked` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `locked()` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `mint(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `mint(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
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

#### Inherited from

[Token](Token.md).[callStatic](Token.md#callstatic)

___

### clientType

• **clientType**: [`TokenClient`](../enums/ClientTypeTokens.md#tokenclient)

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

[Token](Token.md).[deployTransaction](Token.md#deploytransaction)

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
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
| `locked` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `locked()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `mint(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `mint(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
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

#### Inherited from

[Token](Token.md).[estimateGas](Token.md#estimategas)

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
| `Mint` | (`guy?`: ``null`` \| `string`, `wad?`: ``null``) => `MintEventFilter` |
| `Mint(address,uint256)` | (`guy?`: ``null`` \| `string`, `wad?`: ``null``) => `MintEventFilter` |
| `Transfer` | (`src?`: ``null`` \| `string`, `dst?`: ``null`` \| `string`, `wad?`: ``null``) => `TransferEventFilter` |
| `Transfer(address,address,uint256)` | (`src?`: ``null`` \| `string`, `dst?`: ``null`` \| `string`, `wad?`: ``null``) => `TransferEventFilter` |

#### Inherited from

[Token](Token.md).[filters](Token.md#filters)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
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
| `locked` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `locked()` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `mint(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `mint(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
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

#### Inherited from

[Token](Token.md).[functions](Token.md#functions)

___

### interface

• **interface**: `TokenInterface`

#### Inherited from

[Token](Token.md).[interface](Token.md#interface)

___

### off

• **off**: `OnEvent`<[`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)\>

#### Inherited from

[Token](Token.md).[off](Token.md#off)

___

### on

• **on**: `OnEvent`<[`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)\>

#### Inherited from

[Token](Token.md).[on](Token.md#on)

___

### once

• **once**: `OnEvent`<[`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)\>

#### Inherited from

[Token](Token.md).[once](Token.md#once)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
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
| `locked` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `locked()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `mint(address,uint256)` | (`guy`: `string`, `wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `mint(uint256)` | (`wad`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
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

#### Inherited from

[Token](Token.md).[populateTransaction](Token.md#populatetransaction)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

[Token](Token.md).[provider](Token.md#provider)

___

### removeListener

• **removeListener**: `OnEvent`<[`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)\>

#### Inherited from

[Token](Token.md).[removeListener](Token.md#removelistener)

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

[Token](Token.md).[resolvedAddress](Token.md#resolvedaddress)

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

[Token](Token.md).[signer](Token.md#signer)

___

### tokenClientType

• **tokenClientType**: [`ColonyLegacy`](../enums/TokenClientType.md#colonylegacy)

## Methods

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

#### Inherited from

[Token](Token.md).[_checkRunningEvents](Token.md#_checkrunningevents)

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

[Token](Token.md).[_deployed](Token.md#_deployed)

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

[Token](Token.md).[_wrapEvent](Token.md#_wrapevent)

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

[Token](Token.md).[allowance](Token.md#allowance)

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

[Token](Token.md).[allowance(address,address)](Token.md#allowance(address,address))

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

[Token](Token.md).[approve](Token.md#approve)

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

[Token](Token.md).[approve(address,uint256)](Token.md#approve(address,uint256))

___

### attach

▸ **attach**(`addressOrName`): [`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)

#### Inherited from

[Token](Token.md).[attach](Token.md#attach)

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

[Token](Token.md).[authority](Token.md#authority)

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

[Token](Token.md).[authority()](Token.md#authority())

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

[Token](Token.md).[balanceOf](Token.md#balanceof)

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

[Token](Token.md).[balanceOf(address)](Token.md#balanceof(address))

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

[Token](Token.md).[burn(address,uint256)](Token.md#burn(address,uint256))

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

[Token](Token.md).[burn(uint256)](Token.md#burn(uint256))

___

### connect

▸ **connect**(`signerOrProvider`): [`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)

#### Inherited from

[Token](Token.md).[connect](Token.md#connect)

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

[Token](Token.md).[decimals](Token.md#decimals)

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

[Token](Token.md).[decimals()](Token.md#decimals())

___

### deployed

▸ **deployed**(): `Promise`<[`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)\>

#### Returns

`Promise`<[`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)\>

#### Inherited from

[Token](Token.md).[deployed](Token.md#deployed)

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

[Token](Token.md).[emit](Token.md#emit)

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

[Token](Token.md).[fallback](Token.md#fallback)

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

[Token](Token.md).[listenerCount](Token.md#listenercount)

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

[Token](Token.md).[listeners](Token.md#listeners)

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Inherited from

[Token](Token.md).[listeners](Token.md#listeners)

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

[Token](Token.md).[locked](Token.md#locked)

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

[Token](Token.md).[locked()](Token.md#locked())

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

[Token](Token.md).[mint(address,uint256)](Token.md#mint(address,uint256))

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

[Token](Token.md).[mint(uint256)](Token.md#mint(uint256))

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

[Token](Token.md).[name](Token.md#name)

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

[Token](Token.md).[name()](Token.md#name())

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

[Token](Token.md).[owner](Token.md#owner)

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

[Token](Token.md).[owner()](Token.md#owner())

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

[Token](Token.md).[queryFilter](Token.md#queryfilter)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)

#### Inherited from

[Token](Token.md).[removeAllListeners](Token.md#removealllisteners)

▸ **removeAllListeners**(`eventName?`): [`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)

#### Inherited from

[Token](Token.md).[removeAllListeners](Token.md#removealllisteners)

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

[Token](Token.md).[setAuthority](Token.md#setauthority)

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

[Token](Token.md).[setAuthority(address)](Token.md#setauthority(address))

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

[Token](Token.md).[setOwner](Token.md#setowner)

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

[Token](Token.md).[setOwner(address)](Token.md#setowner(address))

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

[Token](Token.md).[symbol](Token.md#symbol)

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

[Token](Token.md).[symbol()](Token.md#symbol())

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

[Token](Token.md).[totalSupply](Token.md#totalsupply)

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

[Token](Token.md).[totalSupply()](Token.md#totalsupply())

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

[Token](Token.md).[transfer](Token.md#transfer)

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

[Token](Token.md).[transfer(address,uint256)](Token.md#transfer(address,uint256))

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

[Token](Token.md).[transferFrom](Token.md#transferfrom)

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

[Token](Token.md).[transferFrom(address,address,uint256)](Token.md#transferfrom(address,address,uint256))

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

[Token](Token.md).[unlock](Token.md#unlock)

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

[Token](Token.md).[unlock()](Token.md#unlock())
