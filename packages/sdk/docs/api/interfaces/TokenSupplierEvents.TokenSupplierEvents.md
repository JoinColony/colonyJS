# Interface: TokenSupplierEvents

[TokenSupplierEvents](../modules/TokenSupplierEvents.md).TokenSupplierEvents

## Hierarchy

- `BaseContract`

  ↳ **`TokenSupplierEvents`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployedPromise

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

BaseContract.\_runningEvents

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

BaseContract.\_wrappedEmits

___

### address

• `Readonly` **address**: `string`

#### Inherited from

BaseContract.address

___

### callStatic

• **callStatic**: `Object`

#### Overrides

BaseContract.callStatic

___

### deployTransaction

• `Readonly` **deployTransaction**: [`TransactionResponse`](TransactionResponse.md)

#### Inherited from

BaseContract.deployTransaction

___

### estimateGas

• **estimateGas**: `Object`

#### Overrides

BaseContract.estimateGas

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ExtensionInitialised` | () => [`ExtensionInitialisedEventFilter`](../modules/TokenSupplierEvents.md#extensioninitialisedeventfilter) |
| `ExtensionInitialised()` | () => [`ExtensionInitialisedEventFilter`](../modules/TokenSupplierEvents.md#extensioninitialisedeventfilter) |
| `LogSetAuthority` | (`authority?`: ``null`` \| `string`) => [`LogSetAuthorityEventFilter`](../modules/TokenSupplierEvents.md#logsetauthorityeventfilter) |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `string`) => [`LogSetAuthorityEventFilter`](../modules/TokenSupplierEvents.md#logsetauthorityeventfilter) |
| `LogSetOwner` | (`owner?`: ``null`` \| `string`) => [`LogSetOwnerEventFilter`](../modules/TokenSupplierEvents.md#logsetownereventfilter) |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `string`) => [`LogSetOwnerEventFilter`](../modules/TokenSupplierEvents.md#logsetownereventfilter) |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => [`MetaTransactionExecutedEventFilter`](../modules/TokenSupplierEvents.md#metatransactionexecutedeventfilter) |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => [`MetaTransactionExecutedEventFilter`](../modules/TokenSupplierEvents.md#metatransactionexecutedeventfilter) |
| `TokenIssuanceRateSet` | (`tokenIssuanceRate?`: ``null``) => [`TokenIssuanceRateSetEventFilter`](../modules/TokenSupplierEvents.md#tokenissuancerateseteventfilter) |
| `TokenIssuanceRateSet(uint256)` | (`tokenIssuanceRate?`: ``null``) => [`TokenIssuanceRateSetEventFilter`](../modules/TokenSupplierEvents.md#tokenissuancerateseteventfilter) |
| `TokenSupplyCeilingSet` | (`tokenSupplyCeiling?`: ``null``) => [`TokenSupplyCeilingSetEventFilter`](../modules/TokenSupplierEvents.md#tokensupplyceilingseteventfilter) |
| `TokenSupplyCeilingSet(uint256)` | (`tokenSupplyCeiling?`: ``null``) => [`TokenSupplyCeilingSetEventFilter`](../modules/TokenSupplierEvents.md#tokensupplyceilingseteventfilter) |
| `TokensIssued` | (`numTokens?`: ``null``) => [`TokensIssuedEventFilter`](../modules/TokenSupplierEvents.md#tokensissuedeventfilter) |
| `TokensIssued(uint256)` | (`numTokens?`: ``null``) => [`TokensIssuedEventFilter`](../modules/TokenSupplierEvents.md#tokensissuedeventfilter) |

#### Overrides

BaseContract.filters

___

### functions

• **functions**: `Object`

#### Overrides

BaseContract.functions

___

### interface

• **interface**: [`TokenSupplierEventsInterface`](TokenSupplierEvents.TokenSupplierEventsInterface.md)

#### Overrides

BaseContract.interface

___

### off

• **off**: `OnEvent`<[`TokenSupplierEvents`](TokenSupplierEvents.TokenSupplierEvents.md)\>

#### Overrides

BaseContract.off

___

### on

• **on**: `OnEvent`<[`TokenSupplierEvents`](TokenSupplierEvents.TokenSupplierEvents.md)\>

#### Overrides

BaseContract.on

___

### once

• **once**: `OnEvent`<[`TokenSupplierEvents`](TokenSupplierEvents.TokenSupplierEvents.md)\>

#### Overrides

BaseContract.once

___

### populateTransaction

• **populateTransaction**: `Object`

#### Overrides

BaseContract.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`TokenSupplierEvents`](TokenSupplierEvents.TokenSupplierEvents.md)\>

#### Overrides

BaseContract.removeListener

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

BaseContract.resolvedAddress

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

BaseContract.signer

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

BaseContract.\_checkRunningEvents

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

BaseContract.\_deployed

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

BaseContract.\_wrapEvent

___

### attach

▸ **attach**(`addressOrName`): [`TokenSupplierEvents`](TokenSupplierEvents.TokenSupplierEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`TokenSupplierEvents`](TokenSupplierEvents.TokenSupplierEvents.md)

#### Overrides

BaseContract.attach

___

### connect

▸ **connect**(`signerOrProvider`): [`TokenSupplierEvents`](TokenSupplierEvents.TokenSupplierEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`TokenSupplierEvents`](TokenSupplierEvents.TokenSupplierEvents.md)

#### Overrides

BaseContract.connect

___

### deployed

▸ **deployed**(): `Promise`<[`TokenSupplierEvents`](TokenSupplierEvents.TokenSupplierEvents.md)\>

#### Returns

`Promise`<[`TokenSupplierEvents`](TokenSupplierEvents.TokenSupplierEvents.md)\>

#### Overrides

BaseContract.deployed

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

BaseContract.emit

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<[`TransactionResponse`](TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<[`TransactionResponse`](TransactionResponse.md)\>

#### Inherited from

BaseContract.fallback

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

BaseContract.listenerCount

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

#### Overrides

BaseContract.listeners

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Overrides

BaseContract.listeners

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

#### Overrides

BaseContract.queryFilter

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`TokenSupplierEvents`](TokenSupplierEvents.TokenSupplierEvents.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`TokenSupplierEvents`](TokenSupplierEvents.TokenSupplierEvents.md)

#### Overrides

BaseContract.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`TokenSupplierEvents`](TokenSupplierEvents.TokenSupplierEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`TokenSupplierEvents`](TokenSupplierEvents.TokenSupplierEvents.md)

#### Overrides

BaseContract.removeAllListeners
