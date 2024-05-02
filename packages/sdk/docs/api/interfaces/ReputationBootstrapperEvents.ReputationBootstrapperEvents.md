# Interface: ReputationBootstrapperEvents

[ReputationBootstrapperEvents](../modules/ReputationBootstrapperEvents.md).ReputationBootstrapperEvents

## Hierarchy

- `BaseContract`

  ↳ **`ReputationBootstrapperEvents`**

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
| `ExtensionInitialised` | () => [`ExtensionInitialisedEventFilter`](../modules/ReputationBootstrapperEvents.md#extensioninitialisedeventfilter) |
| `ExtensionInitialised()` | () => [`ExtensionInitialisedEventFilter`](../modules/ReputationBootstrapperEvents.md#extensioninitialisedeventfilter) |
| `GrantClaimed` | (`recipient?`: ``null``, `reputationAmount?`: ``null``, `paid?`: ``null``) => [`GrantClaimedEventFilter`](../modules/ReputationBootstrapperEvents.md#grantclaimedeventfilter) |
| `GrantClaimed(address,uint256,bool)` | (`recipient?`: ``null``, `reputationAmount?`: ``null``, `paid?`: ``null``) => [`GrantClaimedEventFilter`](../modules/ReputationBootstrapperEvents.md#grantclaimedeventfilter) |
| `GrantSet` | (`paid?`: ``null``, `hashedSecret?`: ``null``, `reputationAmount?`: ``null``) => [`GrantSetEventFilter`](../modules/ReputationBootstrapperEvents.md#grantseteventfilter) |
| `GrantSet(bool,bytes32,uint256)` | (`paid?`: ``null``, `hashedSecret?`: ``null``, `reputationAmount?`: ``null``) => [`GrantSetEventFilter`](../modules/ReputationBootstrapperEvents.md#grantseteventfilter) |
| `LogSetAuthority` | (`authority?`: ``null`` \| `string`) => [`LogSetAuthorityEventFilter`](../modules/ReputationBootstrapperEvents.md#logsetauthorityeventfilter) |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `string`) => [`LogSetAuthorityEventFilter`](../modules/ReputationBootstrapperEvents.md#logsetauthorityeventfilter) |
| `LogSetOwner` | (`owner?`: ``null`` \| `string`) => [`LogSetOwnerEventFilter`](../modules/ReputationBootstrapperEvents.md#logsetownereventfilter) |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `string`) => [`LogSetOwnerEventFilter`](../modules/ReputationBootstrapperEvents.md#logsetownereventfilter) |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => [`MetaTransactionExecutedEventFilter`](../modules/ReputationBootstrapperEvents.md#metatransactionexecutedeventfilter) |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => [`MetaTransactionExecutedEventFilter`](../modules/ReputationBootstrapperEvents.md#metatransactionexecutedeventfilter) |

#### Overrides

BaseContract.filters

___

### functions

• **functions**: `Object`

#### Overrides

BaseContract.functions

___

### interface

• **interface**: [`ReputationBootstrapperEventsInterface`](ReputationBootstrapperEvents.ReputationBootstrapperEventsInterface.md)

#### Overrides

BaseContract.interface

___

### off

• **off**: `OnEvent`<[`ReputationBootstrapperEvents`](ReputationBootstrapperEvents.ReputationBootstrapperEvents.md)\>

#### Overrides

BaseContract.off

___

### on

• **on**: `OnEvent`<[`ReputationBootstrapperEvents`](ReputationBootstrapperEvents.ReputationBootstrapperEvents.md)\>

#### Overrides

BaseContract.on

___

### once

• **once**: `OnEvent`<[`ReputationBootstrapperEvents`](ReputationBootstrapperEvents.ReputationBootstrapperEvents.md)\>

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

• **removeListener**: `OnEvent`<[`ReputationBootstrapperEvents`](ReputationBootstrapperEvents.ReputationBootstrapperEvents.md)\>

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

▸ **attach**(`addressOrName`): [`ReputationBootstrapperEvents`](ReputationBootstrapperEvents.ReputationBootstrapperEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ReputationBootstrapperEvents`](ReputationBootstrapperEvents.ReputationBootstrapperEvents.md)

#### Overrides

BaseContract.attach

___

### connect

▸ **connect**(`signerOrProvider`): [`ReputationBootstrapperEvents`](ReputationBootstrapperEvents.ReputationBootstrapperEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ReputationBootstrapperEvents`](ReputationBootstrapperEvents.ReputationBootstrapperEvents.md)

#### Overrides

BaseContract.connect

___

### deployed

▸ **deployed**(): `Promise`<[`ReputationBootstrapperEvents`](ReputationBootstrapperEvents.ReputationBootstrapperEvents.md)\>

#### Returns

`Promise`<[`ReputationBootstrapperEvents`](ReputationBootstrapperEvents.ReputationBootstrapperEvents.md)\>

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

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ReputationBootstrapperEvents`](ReputationBootstrapperEvents.ReputationBootstrapperEvents.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ReputationBootstrapperEvents`](ReputationBootstrapperEvents.ReputationBootstrapperEvents.md)

#### Overrides

BaseContract.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`ReputationBootstrapperEvents`](ReputationBootstrapperEvents.ReputationBootstrapperEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ReputationBootstrapperEvents`](ReputationBootstrapperEvents.ReputationBootstrapperEvents.md)

#### Overrides

BaseContract.removeAllListeners
