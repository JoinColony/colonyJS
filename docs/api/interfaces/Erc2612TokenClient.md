# Interface: Erc2612TokenClient

## Hierarchy

- [`ERC2612Token`](ERC2612Token.md)

  ↳ **`Erc2612TokenClient`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[_deployedPromise](ERC2612Token.md#_deployedpromise)

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

[ERC2612Token](ERC2612Token.md).[_runningEvents](ERC2612Token.md#_runningevents)

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

[ERC2612Token](ERC2612Token.md).[_wrappedEmits](ERC2612Token.md#_wrappedemits)

___

### address

• `Readonly` **address**: `string`

#### Inherited from

[ERC2612Token](ERC2612Token.md).[address](ERC2612Token.md#address)

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `allowance` | (`owner`: `PromiseOrValue`<`string`\>, `spender`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `balanceOf` | (`account`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `nonces` | (`owner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `permit` | (`owner`: `PromiseOrValue`<`string`\>, `spender`: `PromiseOrValue`<`string`\>, `value`: `PromiseOrValue`<`BigNumberish`\>, `deadline`: `PromiseOrValue`<`BigNumberish`\>, `v`: `PromiseOrValue`<`BigNumberish`\>, `r`: `PromiseOrValue`<`BytesLike`\>, `s`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Inherited from

[ERC2612Token](ERC2612Token.md).[callStatic](ERC2612Token.md#callstatic)

___

### clientType

• **clientType**: [`TokenClient`](../enums/ClientType.md#tokenclient)

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

[ERC2612Token](ERC2612Token.md).[deployTransaction](ERC2612Token.md#deploytransaction)

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance` | (`owner`: `PromiseOrValue`<`string`\>, `spender`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`account`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `nonces` | (`owner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `permit` | (`owner`: `PromiseOrValue`<`string`\>, `spender`: `PromiseOrValue`<`string`\>, `value`: `PromiseOrValue`<`BigNumberish`\>, `deadline`: `PromiseOrValue`<`BigNumberish`\>, `v`: `PromiseOrValue`<`BigNumberish`\>, `r`: `PromiseOrValue`<`BytesLike`\>, `s`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Inherited from

[ERC2612Token](ERC2612Token.md).[estimateGas](ERC2612Token.md#estimategas)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`owner?`: ``null`` \| `PromiseOrValue`<`string`\>, `spender?`: ``null`` \| `PromiseOrValue`<`string`\>, `value?`: ``null``) => `ApprovalEventFilter` |
| `Approval(address,address,uint256)` | (`owner?`: ``null`` \| `PromiseOrValue`<`string`\>, `spender?`: ``null`` \| `PromiseOrValue`<`string`\>, `value?`: ``null``) => `ApprovalEventFilter` |
| `Transfer` | (`from?`: ``null`` \| `PromiseOrValue`<`string`\>, `to?`: ``null`` \| `PromiseOrValue`<`string`\>, `value?`: ``null``) => `TransferEventFilter` |
| `Transfer(address,address,uint256)` | (`from?`: ``null`` \| `PromiseOrValue`<`string`\>, `to?`: ``null`` \| `PromiseOrValue`<`string`\>, `value?`: ``null``) => `TransferEventFilter` |

#### Inherited from

[ERC2612Token](ERC2612Token.md).[filters](ERC2612Token.md#filters)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `allowance` | (`owner`: `PromiseOrValue`<`string`\>, `spender`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`spender`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOf` | (`account`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `nonces` | (`owner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `permit` | (`owner`: `PromiseOrValue`<`string`\>, `spender`: `PromiseOrValue`<`string`\>, `value`: `PromiseOrValue`<`BigNumberish`\>, `deadline`: `PromiseOrValue`<`BigNumberish`\>, `v`: `PromiseOrValue`<`BigNumberish`\>, `r`: `PromiseOrValue`<`BytesLike`\>, `s`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Inherited from

[ERC2612Token](ERC2612Token.md).[functions](ERC2612Token.md#functions)

___

### interface

• **interface**: `TokenERC2612Interface`

#### Inherited from

[ERC2612Token](ERC2612Token.md).[interface](ERC2612Token.md#interface)

___

### off

• **off**: `OnEvent`<[`Erc2612TokenClient`](Erc2612TokenClient.md)\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[off](ERC2612Token.md#off)

___

### on

• **on**: `OnEvent`<[`Erc2612TokenClient`](Erc2612TokenClient.md)\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[on](ERC2612Token.md#on)

___

### once

• **once**: `OnEvent`<[`Erc2612TokenClient`](Erc2612TokenClient.md)\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[once](ERC2612Token.md#once)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `allowance` | (`owner`: `PromiseOrValue`<`string`\>, `spender`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`spender`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`account`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `nonces` | (`owner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `permit` | (`owner`: `PromiseOrValue`<`string`\>, `spender`: `PromiseOrValue`<`string`\>, `value`: `PromiseOrValue`<`BigNumberish`\>, `deadline`: `PromiseOrValue`<`BigNumberish`\>, `v`: `PromiseOrValue`<`BigNumberish`\>, `r`: `PromiseOrValue`<`BytesLike`\>, `s`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

[ERC2612Token](ERC2612Token.md).[populateTransaction](ERC2612Token.md#populatetransaction)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

[ERC2612Token](ERC2612Token.md).[provider](ERC2612Token.md#provider)

___

### removeListener

• **removeListener**: `OnEvent`<[`Erc2612TokenClient`](Erc2612TokenClient.md)\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[removeListener](ERC2612Token.md#removelistener)

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[resolvedAddress](ERC2612Token.md#resolvedaddress)

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

[ERC2612Token](ERC2612Token.md).[signer](ERC2612Token.md#signer)

___

### tokenClientType

• **tokenClientType**: [`Erc2612`](../enums/TokenClientType.md#erc2612)

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

[ERC2612Token](ERC2612Token.md).[DOMAIN_SEPARATOR](ERC2612Token.md#domain_separator)

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

[ERC2612Token](ERC2612Token.md).[_checkRunningEvents](ERC2612Token.md#_checkrunningevents)

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

[ERC2612Token](ERC2612Token.md).[_deployed](ERC2612Token.md#_deployed)

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

[ERC2612Token](ERC2612Token.md).[_wrapEvent](ERC2612Token.md#_wrapevent)

___

### allowance

▸ **allowance**(`owner`, `spender`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `PromiseOrValue`<`string`\> |
| `spender` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[allowance](ERC2612Token.md#allowance)

___

### approve

▸ **approve**(`spender`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `PromiseOrValue`<`string`\> |
| `amount` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[approve](ERC2612Token.md#approve)

___

### attach

▸ **attach**(`addressOrName`): [`Erc2612TokenClient`](Erc2612TokenClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Erc2612TokenClient`](Erc2612TokenClient.md)

#### Inherited from

[ERC2612Token](ERC2612Token.md).[attach](ERC2612Token.md#attach)

___

### balanceOf

▸ **balanceOf**(`account`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[balanceOf](ERC2612Token.md#balanceof)

___

### connect

▸ **connect**(`signerOrProvider`): [`Erc2612TokenClient`](Erc2612TokenClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Provider` \| `Signer` |

#### Returns

[`Erc2612TokenClient`](Erc2612TokenClient.md)

#### Inherited from

[ERC2612Token](ERC2612Token.md).[connect](ERC2612Token.md#connect)

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

[ERC2612Token](ERC2612Token.md).[decimals](ERC2612Token.md#decimals)

___

### deployed

▸ **deployed**(): `Promise`<[`Erc2612TokenClient`](Erc2612TokenClient.md)\>

#### Returns

`Promise`<[`Erc2612TokenClient`](Erc2612TokenClient.md)\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[deployed](ERC2612Token.md#deployed)

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

[ERC2612Token](ERC2612Token.md).[emit](ERC2612Token.md#emit)

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

[ERC2612Token](ERC2612Token.md).[fallback](ERC2612Token.md#fallback)

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

[ERC2612Token](ERC2612Token.md).[listenerCount](ERC2612Token.md#listenercount)

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

[ERC2612Token](ERC2612Token.md).[listeners](ERC2612Token.md#listeners)

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Inherited from

[ERC2612Token](ERC2612Token.md).[listeners](ERC2612Token.md#listeners)

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

[ERC2612Token](ERC2612Token.md).[name](ERC2612Token.md#name)

___

### nonces

▸ **nonces**(`owner`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[nonces](ERC2612Token.md#nonces)

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

[ERC2612Token](ERC2612Token.md).[permit](ERC2612Token.md#permit)

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

[ERC2612Token](ERC2612Token.md).[queryFilter](ERC2612Token.md#queryfilter)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`Erc2612TokenClient`](Erc2612TokenClient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`Erc2612TokenClient`](Erc2612TokenClient.md)

#### Inherited from

[ERC2612Token](ERC2612Token.md).[removeAllListeners](ERC2612Token.md#removealllisteners)

▸ **removeAllListeners**(`eventName?`): [`Erc2612TokenClient`](Erc2612TokenClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Erc2612TokenClient`](Erc2612TokenClient.md)

#### Inherited from

[ERC2612Token](ERC2612Token.md).[removeAllListeners](ERC2612Token.md#removealllisteners)

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

[ERC2612Token](ERC2612Token.md).[symbol](ERC2612Token.md#symbol)

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

[ERC2612Token](ERC2612Token.md).[totalSupply](ERC2612Token.md#totalsupply)

___

### transfer

▸ **transfer**(`to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `PromiseOrValue`<`string`\> |
| `amount` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[transfer](ERC2612Token.md#transfer)

___

### transferFrom

▸ **transferFrom**(`from`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `PromiseOrValue`<`string`\> |
| `to` | `PromiseOrValue`<`string`\> |
| `amount` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[transferFrom](ERC2612Token.md#transferfrom)
