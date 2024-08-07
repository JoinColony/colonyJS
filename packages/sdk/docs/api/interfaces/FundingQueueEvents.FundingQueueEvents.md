# Interface: FundingQueueEvents

[FundingQueueEvents](../modules/FundingQueueEvents.md).FundingQueueEvents

## Hierarchy

- `BaseContract`

  ↳ **`FundingQueueEvents`**

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
| `ExtensionInitialised` | () => [`ExtensionInitialisedEventFilter`](../modules/FundingQueueEvents.md#extensioninitialisedeventfilter) |
| `ExtensionInitialised()` | () => [`ExtensionInitialisedEventFilter`](../modules/FundingQueueEvents.md#extensioninitialisedeventfilter) |
| `LogSetAuthority` | (`authority?`: ``null`` \| `string`) => [`LogSetAuthorityEventFilter`](../modules/FundingQueueEvents.md#logsetauthorityeventfilter) |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `string`) => [`LogSetAuthorityEventFilter`](../modules/FundingQueueEvents.md#logsetauthorityeventfilter) |
| `LogSetOwner` | (`owner?`: ``null`` \| `string`) => [`LogSetOwnerEventFilter`](../modules/FundingQueueEvents.md#logsetownereventfilter) |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `string`) => [`LogSetOwnerEventFilter`](../modules/FundingQueueEvents.md#logsetownereventfilter) |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => [`MetaTransactionExecutedEventFilter`](../modules/FundingQueueEvents.md#metatransactionexecutedeventfilter) |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => [`MetaTransactionExecutedEventFilter`](../modules/FundingQueueEvents.md#metatransactionexecutedeventfilter) |
| `ProposalBacked` | (`id?`: ``null`` \| `BigNumberish`, `newPrevId?`: ``null`` \| `BigNumberish`, `user?`: ``null`` \| `string`, `backing?`: ``null``, `prevBacking?`: ``null``) => [`ProposalBackedEventFilter`](../modules/FundingQueueEvents.md#proposalbackedeventfilter) |
| `ProposalBacked(uint256,uint256,address,uint256,uint256)` | (`id?`: ``null`` \| `BigNumberish`, `newPrevId?`: ``null`` \| `BigNumberish`, `user?`: ``null`` \| `string`, `backing?`: ``null``, `prevBacking?`: ``null``) => [`ProposalBackedEventFilter`](../modules/FundingQueueEvents.md#proposalbackedeventfilter) |
| `ProposalCancelled` | (`id?`: ``null`` \| `BigNumberish`) => [`ProposalCancelledEventFilter`](../modules/FundingQueueEvents.md#proposalcancelledeventfilter) |
| `ProposalCancelled(uint256)` | (`id?`: ``null`` \| `BigNumberish`) => [`ProposalCancelledEventFilter`](../modules/FundingQueueEvents.md#proposalcancelledeventfilter) |
| `ProposalCompleted` | (`id?`: ``null`` \| `BigNumberish`) => [`ProposalCompletedEventFilter`](../modules/FundingQueueEvents.md#proposalcompletedeventfilter) |
| `ProposalCompleted(uint256)` | (`id?`: ``null`` \| `BigNumberish`) => [`ProposalCompletedEventFilter`](../modules/FundingQueueEvents.md#proposalcompletedeventfilter) |
| `ProposalCreated` | (`id?`: ``null``, `fromPot?`: ``null`` \| `BigNumberish`, `toPot?`: ``null`` \| `BigNumberish`, `token?`: ``null`` \| `string`, `amount?`: ``null``) => [`ProposalCreatedEventFilter`](../modules/FundingQueueEvents.md#proposalcreatedeventfilter) |
| `ProposalCreated(uint256,uint256,uint256,address,uint256)` | (`id?`: ``null``, `fromPot?`: ``null`` \| `BigNumberish`, `toPot?`: ``null`` \| `BigNumberish`, `token?`: ``null`` \| `string`, `amount?`: ``null``) => [`ProposalCreatedEventFilter`](../modules/FundingQueueEvents.md#proposalcreatedeventfilter) |
| `ProposalPinged` | (`id?`: ``null`` \| `BigNumberish`, `amount?`: ``null``) => [`ProposalPingedEventFilter`](../modules/FundingQueueEvents.md#proposalpingedeventfilter) |
| `ProposalPinged(uint256,uint256)` | (`id?`: ``null`` \| `BigNumberish`, `amount?`: ``null``) => [`ProposalPingedEventFilter`](../modules/FundingQueueEvents.md#proposalpingedeventfilter) |
| `ProposalStakeReclaimed` | (`id?`: ``null`` \| `BigNumberish`) => [`ProposalStakeReclaimedEventFilter`](../modules/FundingQueueEvents.md#proposalstakereclaimedeventfilter) |
| `ProposalStakeReclaimed(uint256)` | (`id?`: ``null`` \| `BigNumberish`) => [`ProposalStakeReclaimedEventFilter`](../modules/FundingQueueEvents.md#proposalstakereclaimedeventfilter) |
| `ProposalStaked` | (`id?`: ``null`` \| `BigNumberish`, `domainTotalRep?`: ``null``) => [`ProposalStakedEventFilter`](../modules/FundingQueueEvents.md#proposalstakedeventfilter) |
| `ProposalStaked(uint256,uint256)` | (`id?`: ``null`` \| `BigNumberish`, `domainTotalRep?`: ``null``) => [`ProposalStakedEventFilter`](../modules/FundingQueueEvents.md#proposalstakedeventfilter) |

#### Overrides

BaseContract.filters

___

### functions

• **functions**: `Object`

#### Overrides

BaseContract.functions

___

### interface

• **interface**: [`FundingQueueEventsInterface`](FundingQueueEvents.FundingQueueEventsInterface.md)

#### Overrides

BaseContract.interface

___

### off

• **off**: `OnEvent`<[`FundingQueueEvents`](FundingQueueEvents.FundingQueueEvents.md)\>

#### Overrides

BaseContract.off

___

### on

• **on**: `OnEvent`<[`FundingQueueEvents`](FundingQueueEvents.FundingQueueEvents.md)\>

#### Overrides

BaseContract.on

___

### once

• **once**: `OnEvent`<[`FundingQueueEvents`](FundingQueueEvents.FundingQueueEvents.md)\>

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

• **removeListener**: `OnEvent`<[`FundingQueueEvents`](FundingQueueEvents.FundingQueueEvents.md)\>

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

▸ **attach**(`addressOrName`): [`FundingQueueEvents`](FundingQueueEvents.FundingQueueEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`FundingQueueEvents`](FundingQueueEvents.FundingQueueEvents.md)

#### Overrides

BaseContract.attach

___

### connect

▸ **connect**(`signerOrProvider`): [`FundingQueueEvents`](FundingQueueEvents.FundingQueueEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`FundingQueueEvents`](FundingQueueEvents.FundingQueueEvents.md)

#### Overrides

BaseContract.connect

___

### deployed

▸ **deployed**(): `Promise`<[`FundingQueueEvents`](FundingQueueEvents.FundingQueueEvents.md)\>

#### Returns

`Promise`<[`FundingQueueEvents`](FundingQueueEvents.FundingQueueEvents.md)\>

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

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`FundingQueueEvents`](FundingQueueEvents.FundingQueueEvents.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`FundingQueueEvents`](FundingQueueEvents.FundingQueueEvents.md)

#### Overrides

BaseContract.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`FundingQueueEvents`](FundingQueueEvents.FundingQueueEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`FundingQueueEvents`](FundingQueueEvents.FundingQueueEvents.md)

#### Overrides

BaseContract.removeAllListeners
