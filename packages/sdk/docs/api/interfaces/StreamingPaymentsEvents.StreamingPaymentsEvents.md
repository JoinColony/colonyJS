# Interface: StreamingPaymentsEvents

[StreamingPaymentsEvents](../modules/StreamingPaymentsEvents.md).StreamingPaymentsEvents

## Hierarchy

- `BaseContract`

  ↳ **`StreamingPaymentsEvents`**

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
| `ClaimWaived` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`) => [`ClaimWaivedEventFilter`](../modules/StreamingPaymentsEvents.md#claimwaivedeventfilter) |
| `ClaimWaived(address,uint256)` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`) => [`ClaimWaivedEventFilter`](../modules/StreamingPaymentsEvents.md#claimwaivedeventfilter) |
| `EndTimeSet` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`, `endTime?`: ``null``) => [`EndTimeSetEventFilter`](../modules/StreamingPaymentsEvents.md#endtimeseteventfilter) |
| `EndTimeSet(address,uint256,uint256)` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`, `endTime?`: ``null``) => [`EndTimeSetEventFilter`](../modules/StreamingPaymentsEvents.md#endtimeseteventfilter) |
| `ExtensionInitialised` | () => [`ExtensionInitialisedEventFilter`](../modules/StreamingPaymentsEvents.md#extensioninitialisedeventfilter) |
| `ExtensionInitialised()` | () => [`ExtensionInitialisedEventFilter`](../modules/StreamingPaymentsEvents.md#extensioninitialisedeventfilter) |
| `LogSetAuthority` | (`authority?`: ``null`` \| `string`) => [`LogSetAuthorityEventFilter`](../modules/StreamingPaymentsEvents.md#logsetauthorityeventfilter) |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `string`) => [`LogSetAuthorityEventFilter`](../modules/StreamingPaymentsEvents.md#logsetauthorityeventfilter) |
| `LogSetOwner` | (`owner?`: ``null`` \| `string`) => [`LogSetOwnerEventFilter`](../modules/StreamingPaymentsEvents.md#logsetownereventfilter) |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `string`) => [`LogSetOwnerEventFilter`](../modules/StreamingPaymentsEvents.md#logsetownereventfilter) |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => [`MetaTransactionExecutedEventFilter`](../modules/StreamingPaymentsEvents.md#metatransactionexecutedeventfilter) |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => [`MetaTransactionExecutedEventFilter`](../modules/StreamingPaymentsEvents.md#metatransactionexecutedeventfilter) |
| `PaymentTokenUpdated(address,uint256,address,uint256)` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => [`PaymentTokenUpdated_address_uint256_address_uint256_EventFilter`](../modules/StreamingPaymentsEvents.md#paymenttokenupdated_address_uint256_address_uint256_eventfilter) |
| `PaymentTokenUpdated(address,uint256,uint256)` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`, `amount?`: ``null``) => [`PaymentTokenUpdated_address_uint256_uint256_EventFilter`](../modules/StreamingPaymentsEvents.md#paymenttokenupdated_address_uint256_uint256_eventfilter) |
| `PaymentTokenUpdated(address,uint256,uint256,uint256)` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`, `amount?`: ``null``, `interval?`: ``null``) => [`PaymentTokenUpdated_address_uint256_uint256_uint256_EventFilter`](../modules/StreamingPaymentsEvents.md#paymenttokenupdated_address_uint256_uint256_uint256_eventfilter) |
| `StartTimeSet` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`, `startTime?`: ``null``) => [`StartTimeSetEventFilter`](../modules/StreamingPaymentsEvents.md#starttimeseteventfilter) |
| `StartTimeSet(address,uint256,uint256)` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`, `startTime?`: ``null``) => [`StartTimeSetEventFilter`](../modules/StreamingPaymentsEvents.md#starttimeseteventfilter) |
| `StreamingPaymentClaimed` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => [`StreamingPaymentClaimedEventFilter`](../modules/StreamingPaymentsEvents.md#streamingpaymentclaimedeventfilter) |
| `StreamingPaymentClaimed(address,uint256,address,uint256)` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => [`StreamingPaymentClaimedEventFilter`](../modules/StreamingPaymentsEvents.md#streamingpaymentclaimedeventfilter) |
| `StreamingPaymentCreated` | (`agent?`: ``null``, `streamingPaymentId?`: ``null``) => [`StreamingPaymentCreatedEventFilter`](../modules/StreamingPaymentsEvents.md#streamingpaymentcreatedeventfilter) |
| `StreamingPaymentCreated(address,uint256)` | (`agent?`: ``null``, `streamingPaymentId?`: ``null``) => [`StreamingPaymentCreatedEventFilter`](../modules/StreamingPaymentsEvents.md#streamingpaymentcreatedeventfilter) |

#### Overrides

BaseContract.filters

___

### functions

• **functions**: `Object`

#### Overrides

BaseContract.functions

___

### interface

• **interface**: [`StreamingPaymentsEventsInterface`](StreamingPaymentsEvents.StreamingPaymentsEventsInterface.md)

#### Overrides

BaseContract.interface

___

### off

• **off**: `OnEvent`<[`StreamingPaymentsEvents`](StreamingPaymentsEvents.StreamingPaymentsEvents.md)\>

#### Overrides

BaseContract.off

___

### on

• **on**: `OnEvent`<[`StreamingPaymentsEvents`](StreamingPaymentsEvents.StreamingPaymentsEvents.md)\>

#### Overrides

BaseContract.on

___

### once

• **once**: `OnEvent`<[`StreamingPaymentsEvents`](StreamingPaymentsEvents.StreamingPaymentsEvents.md)\>

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

• **removeListener**: `OnEvent`<[`StreamingPaymentsEvents`](StreamingPaymentsEvents.StreamingPaymentsEvents.md)\>

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

▸ **attach**(`addressOrName`): [`StreamingPaymentsEvents`](StreamingPaymentsEvents.StreamingPaymentsEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`StreamingPaymentsEvents`](StreamingPaymentsEvents.StreamingPaymentsEvents.md)

#### Overrides

BaseContract.attach

___

### connect

▸ **connect**(`signerOrProvider`): [`StreamingPaymentsEvents`](StreamingPaymentsEvents.StreamingPaymentsEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`StreamingPaymentsEvents`](StreamingPaymentsEvents.StreamingPaymentsEvents.md)

#### Overrides

BaseContract.connect

___

### deployed

▸ **deployed**(): `Promise`<[`StreamingPaymentsEvents`](StreamingPaymentsEvents.StreamingPaymentsEvents.md)\>

#### Returns

`Promise`<[`StreamingPaymentsEvents`](StreamingPaymentsEvents.StreamingPaymentsEvents.md)\>

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

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`StreamingPaymentsEvents`](StreamingPaymentsEvents.StreamingPaymentsEvents.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`StreamingPaymentsEvents`](StreamingPaymentsEvents.StreamingPaymentsEvents.md)

#### Overrides

BaseContract.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`StreamingPaymentsEvents`](StreamingPaymentsEvents.StreamingPaymentsEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`StreamingPaymentsEvents`](StreamingPaymentsEvents.StreamingPaymentsEvents.md)

#### Overrides

BaseContract.removeAllListeners
