# Interface: DaiTokenClient

The SAI token. It requires special treatment as it's deprecated

## Hierarchy

- `TokenSAI`

  ↳ **`DaiTokenClient`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

TokenSAI.\_deployedPromise

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

TokenSAI.\_runningEvents

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

TokenSAI.\_wrappedEmits

___

### address

• `Readonly` **address**: `string`

#### Inherited from

TokenSAI.address

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`_owner`: `PromiseOrValue`<`string`\>, `_spender`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`_spender`: `PromiseOrValue`<`string`\>, `_value`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `balanceOf` | (`_owner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`_to`: `PromiseOrValue`<`string`\>, `_value`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`_from`: `PromiseOrValue`<`string`\>, `_to`: `PromiseOrValue`<`string`\>, `_value`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Inherited from

TokenSAI.callStatic

___

### clientType

• **clientType**: [`TokenClient`](../enums/ClientType.md#tokenclient)

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

TokenSAI.deployTransaction

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`_owner`: `PromiseOrValue`<`string`\>, `_spender`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`_spender`: `PromiseOrValue`<`string`\>, `_value`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`_owner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`_to`: `PromiseOrValue`<`string`\>, `_value`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`_from`: `PromiseOrValue`<`string`\>, `_to`: `PromiseOrValue`<`string`\>, `_value`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Inherited from

TokenSAI.estimateGas

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

TokenSAI.filters

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`_owner`: `PromiseOrValue`<`string`\>, `_spender`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`_spender`: `PromiseOrValue`<`string`\>, `_value`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOf` | (`_owner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `balance`: `BigNumber`  }\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`_to`: `PromiseOrValue`<`string`\>, `_value`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`_from`: `PromiseOrValue`<`string`\>, `_to`: `PromiseOrValue`<`string`\>, `_value`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Inherited from

TokenSAI.functions

___

### interface

• **interface**: `TokenSAIInterface`

#### Inherited from

TokenSAI.interface

___

### off

• **off**: `OnEvent`<[`DaiTokenClient`](DaiTokenClient.md)\>

#### Inherited from

TokenSAI.off

___

### on

• **on**: `OnEvent`<[`DaiTokenClient`](DaiTokenClient.md)\>

#### Inherited from

TokenSAI.on

___

### once

• **once**: `OnEvent`<[`DaiTokenClient`](DaiTokenClient.md)\>

#### Inherited from

TokenSAI.once

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`_owner`: `PromiseOrValue`<`string`\>, `_spender`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`_spender`: `PromiseOrValue`<`string`\>, `_value`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`_owner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`_to`: `PromiseOrValue`<`string`\>, `_value`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`_from`: `PromiseOrValue`<`string`\>, `_to`: `PromiseOrValue`<`string`\>, `_value`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

TokenSAI.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

TokenSAI.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`DaiTokenClient`](DaiTokenClient.md)\>

#### Inherited from

TokenSAI.removeListener

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

TokenSAI.resolvedAddress

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

TokenSAI.signer

___

### tokenClientType

• **tokenClientType**: [`Sai`](../enums/TokenClientType.md#sai)

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

TokenSAI.\_checkRunningEvents

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

TokenSAI.\_deployed

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

TokenSAI.\_wrapEvent

___

### allowance

▸ **allowance**(`_owner`, `_spender`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_owner` | `PromiseOrValue`<`string`\> |
| `_spender` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

TokenSAI.allowance

___

### approve

▸ **approve**(`_spender`, `_value`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_spender` | `PromiseOrValue`<`string`\> |
| `_value` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenSAI.approve

___

### attach

▸ **attach**(`addressOrName`): [`DaiTokenClient`](DaiTokenClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`DaiTokenClient`](DaiTokenClient.md)

#### Inherited from

TokenSAI.attach

___

### balanceOf

▸ **balanceOf**(`_owner`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_owner` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

TokenSAI.balanceOf

___

### connect

▸ **connect**(`signerOrProvider`): [`DaiTokenClient`](DaiTokenClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Provider` \| `Signer` |

#### Returns

[`DaiTokenClient`](DaiTokenClient.md)

#### Inherited from

TokenSAI.connect

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

TokenSAI.decimals

___

### deployed

▸ **deployed**(): `Promise`<[`DaiTokenClient`](DaiTokenClient.md)\>

#### Returns

`Promise`<[`DaiTokenClient`](DaiTokenClient.md)\>

#### Inherited from

TokenSAI.deployed

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

TokenSAI.emit

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

TokenSAI.fallback

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

TokenSAI.listenerCount

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

TokenSAI.listeners

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Inherited from

TokenSAI.listeners

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

TokenSAI.name

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

TokenSAI.queryFilter

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`DaiTokenClient`](DaiTokenClient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`DaiTokenClient`](DaiTokenClient.md)

#### Inherited from

TokenSAI.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`DaiTokenClient`](DaiTokenClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`DaiTokenClient`](DaiTokenClient.md)

#### Inherited from

TokenSAI.removeAllListeners

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

TokenSAI.symbol

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

TokenSAI.totalSupply

___

### transfer

▸ **transfer**(`_to`, `_value`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_to` | `PromiseOrValue`<`string`\> |
| `_value` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenSAI.transfer

___

### transferFrom

▸ **transferFrom**(`_from`, `_to`, `_value`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_from` | `PromiseOrValue`<`string`\> |
| `_to` | `PromiseOrValue`<`string`\> |
| `_value` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenSAI.transferFrom
