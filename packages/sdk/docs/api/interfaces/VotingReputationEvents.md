# Interface: VotingReputationEvents

## Hierarchy

- `BaseContract`

  ↳ **`VotingReputationEvents`**

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
| `ExtensionInitialised` | () => `ExtensionInitialisedEventFilter` |
| `ExtensionInitialised()` | () => `ExtensionInitialisedEventFilter` |
| `LogSetAuthority` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetOwner` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MotionCreated` | (`motionId?`: ``null`` \| `BigNumberish`, `creator?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`) => [`MotionCreatedEventFilter`](../README.md#motioncreatedeventfilter) |
| `MotionCreated(uint256,address,uint256)` | (`motionId?`: ``null`` \| `BigNumberish`, `creator?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`) => [`MotionCreatedEventFilter`](../README.md#motioncreatedeventfilter) |
| `MotionEscalated` | (`motionId?`: ``null`` \| `BigNumberish`, `escalator?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `newDomainId?`: ``null`` \| `BigNumberish`) => [`MotionEscalatedEventFilter`](../README.md#motionescalatedeventfilter) |
| `MotionEscalated(uint256,address,uint256,uint256)` | (`motionId?`: ``null`` \| `BigNumberish`, `escalator?`: ``null``, `domainId?`: ``null`` \| `BigNumberish`, `newDomainId?`: ``null`` \| `BigNumberish`) => [`MotionEscalatedEventFilter`](../README.md#motionescalatedeventfilter) |
| `MotionEventSet` | (`motionId?`: ``null`` \| `BigNumberish`, `eventIndex?`: ``null``) => [`MotionEventSetEventFilter`](../README.md#motioneventseteventfilter) |
| `MotionEventSet(uint256,uint256)` | (`motionId?`: ``null`` \| `BigNumberish`, `eventIndex?`: ``null``) => [`MotionEventSetEventFilter`](../README.md#motioneventseteventfilter) |
| `MotionFinalized` | (`motionId?`: ``null`` \| `BigNumberish`, `action?`: ``null``, `executed?`: ``null``) => [`MotionFinalizedEventFilter`](../README.md#motionfinalizedeventfilter) |
| `MotionFinalized(uint256,bytes,bool)` | (`motionId?`: ``null`` \| `BigNumberish`, `action?`: ``null``, `executed?`: ``null``) => [`MotionFinalizedEventFilter`](../README.md#motionfinalizedeventfilter) |
| `MotionRewardClaimed` | (`motionId?`: ``null`` \| `BigNumberish`, `staker?`: ``null`` \| `string`, `vote?`: ``null`` \| `BigNumberish`, `amount?`: ``null``) => [`MotionRewardClaimedEventFilter`](../README.md#motionrewardclaimedeventfilter) |
| `MotionRewardClaimed(uint256,address,uint256,uint256)` | (`motionId?`: ``null`` \| `BigNumberish`, `staker?`: ``null`` \| `string`, `vote?`: ``null`` \| `BigNumberish`, `amount?`: ``null``) => [`MotionRewardClaimedEventFilter`](../README.md#motionrewardclaimedeventfilter) |
| `MotionStaked` | (`motionId?`: ``null`` \| `BigNumberish`, `staker?`: ``null`` \| `string`, `vote?`: ``null`` \| `BigNumberish`, `amount?`: ``null``) => [`MotionStakedEventFilter`](../README.md#motionstakedeventfilter) |
| `MotionStaked(uint256,address,uint256,uint256)` | (`motionId?`: ``null`` \| `BigNumberish`, `staker?`: ``null`` \| `string`, `vote?`: ``null`` \| `BigNumberish`, `amount?`: ``null``) => [`MotionStakedEventFilter`](../README.md#motionstakedeventfilter) |
| `MotionVoteRevealed` | (`motionId?`: ``null`` \| `BigNumberish`, `voter?`: ``null`` \| `string`, `vote?`: ``null`` \| `BigNumberish`) => [`MotionVoteRevealedEventFilter`](../README.md#motionvoterevealedeventfilter) |
| `MotionVoteRevealed(uint256,address,uint256)` | (`motionId?`: ``null`` \| `BigNumberish`, `voter?`: ``null`` \| `string`, `vote?`: ``null`` \| `BigNumberish`) => [`MotionVoteRevealedEventFilter`](../README.md#motionvoterevealedeventfilter) |
| `MotionVoteSubmitted` | (`motionId?`: ``null`` \| `BigNumberish`, `voter?`: ``null`` \| `string`) => [`MotionVoteSubmittedEventFilter`](../README.md#motionvotesubmittedeventfilter) |
| `MotionVoteSubmitted(uint256,address)` | (`motionId?`: ``null`` \| `BigNumberish`, `voter?`: ``null`` \| `string`) => [`MotionVoteSubmittedEventFilter`](../README.md#motionvotesubmittedeventfilter) |

#### Overrides

BaseContract.filters

___

### functions

• **functions**: `Object`

#### Overrides

BaseContract.functions

___

### interface

• **interface**: [`VotingReputationEventsInterface`](VotingReputationEventsInterface.md)

#### Overrides

BaseContract.interface

___

### off

• **off**: `OnEvent`<[`VotingReputationEvents`](VotingReputationEvents.md)\>

#### Overrides

BaseContract.off

___

### on

• **on**: `OnEvent`<[`VotingReputationEvents`](VotingReputationEvents.md)\>

#### Overrides

BaseContract.on

___

### once

• **once**: `OnEvent`<[`VotingReputationEvents`](VotingReputationEvents.md)\>

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

• **removeListener**: `OnEvent`<[`VotingReputationEvents`](VotingReputationEvents.md)\>

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

▸ **attach**(`addressOrName`): [`VotingReputationEvents`](VotingReputationEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`VotingReputationEvents`](VotingReputationEvents.md)

#### Overrides

BaseContract.attach

___

### connect

▸ **connect**(`signerOrProvider`): [`VotingReputationEvents`](VotingReputationEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`VotingReputationEvents`](VotingReputationEvents.md)

#### Overrides

BaseContract.connect

___

### deployed

▸ **deployed**(): `Promise`<[`VotingReputationEvents`](VotingReputationEvents.md)\>

#### Returns

`Promise`<[`VotingReputationEvents`](VotingReputationEvents.md)\>

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

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`VotingReputationEvents`](VotingReputationEvents.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`VotingReputationEvents`](VotingReputationEvents.md)

#### Overrides

BaseContract.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`VotingReputationEvents`](VotingReputationEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`VotingReputationEvents`](VotingReputationEvents.md)

#### Overrides

BaseContract.removeAllListeners
