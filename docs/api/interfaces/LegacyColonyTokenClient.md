# Interface: LegacyColonyTokenClient

The "old", legacy Colony token without Metatransactions token

## Hierarchy

- [`Token`](latest.Token.md)

  ↳ **`LegacyColonyTokenClient`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

[Token](latest.Token.md).[_deployedPromise](latest.Token.md#_deployedpromise)

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

[Token](latest.Token.md).[_runningEvents](latest.Token.md#_runningevents)

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

[Token](latest.Token.md).[_wrappedEmits](latest.Token.md#_wrappedemits)

___

### address

• `Readonly` **address**: `string`

#### Inherited from

[Token](latest.Token.md).[address](latest.Token.md#address)

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`src`: `PromiseOrValue`<`string`\>, `guy`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `balanceOf` | (`src`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `burn(address,uint256)` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `burn(uint256)` | (`wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `locked` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `mint(address,uint256)` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `mint(uint256)` | (`wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`dst`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`src`: `PromiseOrValue`<`string`\>, `dst`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `unlock` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Inherited from

[Token](latest.Token.md).[callStatic](latest.Token.md#callstatic)

___

### clientType

• **clientType**: [`TokenClient`](../enums/ClientType.md#tokenclient)

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

[Token](latest.Token.md).[deployTransaction](latest.Token.md#deploytransaction)

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`src`: `PromiseOrValue`<`string`\>, `guy`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`src`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `burn(address,uint256)` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `burn(uint256)` | (`wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `locked` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `mint(address,uint256)` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `mint(uint256)` | (`wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`dst`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`src`: `PromiseOrValue`<`string`\>, `dst`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unlock` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Inherited from

[Token](latest.Token.md).[estimateGas](latest.Token.md#estimategas)

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
| `Mint` | (`guy?`: ``null`` \| `PromiseOrValue`<`string`\>, `wad?`: ``null``) => `MintEventFilter` |
| `Mint(address,uint256)` | (`guy?`: ``null`` \| `PromiseOrValue`<`string`\>, `wad?`: ``null``) => `MintEventFilter` |
| `Transfer` | (`src?`: ``null`` \| `PromiseOrValue`<`string`\>, `dst?`: ``null`` \| `PromiseOrValue`<`string`\>, `wad?`: ``null``) => `TransferEventFilter` |
| `Transfer(address,address,uint256)` | (`src?`: ``null`` \| `PromiseOrValue`<`string`\>, `dst?`: ``null`` \| `PromiseOrValue`<`string`\>, `wad?`: ``null``) => `TransferEventFilter` |

#### Inherited from

[Token](latest.Token.md).[filters](latest.Token.md#filters)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`src`: `PromiseOrValue`<`string`\>, `guy`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `balanceOf` | (`src`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `burn(address,uint256)` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `burn(uint256)` | (`wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `locked` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `mint(address,uint256)` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mint(uint256)` | (`wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`dst`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`src`: `PromiseOrValue`<`string`\>, `dst`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unlock` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Inherited from

[Token](latest.Token.md).[functions](latest.Token.md#functions)

___

### interface

• **interface**: `TokenInterface`

#### Inherited from

[Token](latest.Token.md).[interface](latest.Token.md#interface)

___

### off

• **off**: `OnEvent`<[`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)\>

#### Inherited from

[Token](latest.Token.md).[off](latest.Token.md#off)

___

### on

• **on**: `OnEvent`<[`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)\>

#### Inherited from

[Token](latest.Token.md).[on](latest.Token.md#on)

___

### once

• **once**: `OnEvent`<[`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)\>

#### Inherited from

[Token](latest.Token.md).[once](latest.Token.md#once)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`src`: `PromiseOrValue`<`string`\>, `guy`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`src`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `burn(address,uint256)` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `burn(uint256)` | (`wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `locked` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `mint(address,uint256)` | (`guy`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mint(uint256)` | (`wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`dst`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`src`: `PromiseOrValue`<`string`\>, `dst`: `PromiseOrValue`<`string`\>, `wad`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unlock` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

[Token](latest.Token.md).[populateTransaction](latest.Token.md#populatetransaction)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

[Token](latest.Token.md).[provider](latest.Token.md#provider)

___

### removeListener

• **removeListener**: `OnEvent`<[`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)\>

#### Inherited from

[Token](latest.Token.md).[removeListener](latest.Token.md#removelistener)

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

[Token](latest.Token.md).[resolvedAddress](latest.Token.md#resolvedaddress)

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

[Token](latest.Token.md).[signer](latest.Token.md#signer)

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

[Token](latest.Token.md).[_checkRunningEvents](latest.Token.md#_checkrunningevents)

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

[Token](latest.Token.md).[_deployed](latest.Token.md#_deployed)

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

[Token](latest.Token.md).[_wrapEvent](latest.Token.md#_wrapevent)

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

[Token](latest.Token.md).[allowance](latest.Token.md#allowance)

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

[Token](latest.Token.md).[approve](latest.Token.md#approve)

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

[Token](latest.Token.md).[attach](latest.Token.md#attach)

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

[Token](latest.Token.md).[authority](latest.Token.md#authority)

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

[Token](latest.Token.md).[balanceOf](latest.Token.md#balanceof)

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

[Token](latest.Token.md).[burn(address,uint256)](latest.Token.md#burn(address,uint256))

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

[Token](latest.Token.md).[burn(uint256)](latest.Token.md#burn(uint256))

___

### connect

▸ **connect**(`signerOrProvider`): [`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Provider` \| `Signer` |

#### Returns

[`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)

#### Inherited from

[Token](latest.Token.md).[connect](latest.Token.md#connect)

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

[Token](latest.Token.md).[decimals](latest.Token.md#decimals)

___

### deployed

▸ **deployed**(): `Promise`<[`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)\>

#### Returns

`Promise`<[`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)\>

#### Inherited from

[Token](latest.Token.md).[deployed](latest.Token.md#deployed)

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

[Token](latest.Token.md).[emit](latest.Token.md#emit)

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

[Token](latest.Token.md).[fallback](latest.Token.md#fallback)

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

[Token](latest.Token.md).[listenerCount](latest.Token.md#listenercount)

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

[Token](latest.Token.md).[listeners](latest.Token.md#listeners)

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Inherited from

[Token](latest.Token.md).[listeners](latest.Token.md#listeners)

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

[Token](latest.Token.md).[locked](latest.Token.md#locked)

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

[Token](latest.Token.md).[mint(address,uint256)](latest.Token.md#mint(address,uint256))

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

[Token](latest.Token.md).[mint(uint256)](latest.Token.md#mint(uint256))

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

[Token](latest.Token.md).[name](latest.Token.md#name)

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

[Token](latest.Token.md).[owner](latest.Token.md#owner)

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

[Token](latest.Token.md).[queryFilter](latest.Token.md#queryfilter)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)

#### Inherited from

[Token](latest.Token.md).[removeAllListeners](latest.Token.md#removealllisteners)

▸ **removeAllListeners**(`eventName?`): [`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`LegacyColonyTokenClient`](LegacyColonyTokenClient.md)

#### Inherited from

[Token](latest.Token.md).[removeAllListeners](latest.Token.md#removealllisteners)

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

[Token](latest.Token.md).[setAuthority](latest.Token.md#setauthority)

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

[Token](latest.Token.md).[setOwner](latest.Token.md#setowner)

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

[Token](latest.Token.md).[symbol](latest.Token.md#symbol)

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

[Token](latest.Token.md).[totalSupply](latest.Token.md#totalsupply)

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

[Token](latest.Token.md).[transfer](latest.Token.md#transfer)

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

[Token](latest.Token.md).[transferFrom](latest.Token.md#transferfrom)

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

[Token](latest.Token.md).[unlock](latest.Token.md#unlock)
