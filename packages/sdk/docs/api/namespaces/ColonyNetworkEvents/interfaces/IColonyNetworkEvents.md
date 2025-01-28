# Interface: IColonyNetworkEvents

## Extends

- `BaseContract`

## Properties

### \_deployedPromise

> **\_deployedPromise**: `Promise`\<`Contract`\>

#### Inherited from

`BaseContract._deployedPromise`

***

### \_runningEvents

> **\_runningEvents**: `object`

#### Index Signature

\[`eventTag`: `string`\]: `RunningEvent`

#### Inherited from

`BaseContract._runningEvents`

***

### \_wrappedEmits

> **\_wrappedEmits**: `object`

#### Index Signature

\[`eventTag`: `string`\]: (...`args`) => `void`

#### Inherited from

`BaseContract._wrappedEmits`

***

### address

> `readonly` **address**: `string`

#### Inherited from

`BaseContract.address`

***

### callStatic

> **callStatic**: `object`

#### Overrides

`BaseContract.callStatic`

***

### deployTransaction

> `readonly` **deployTransaction**: [`TransactionResponse`](../../../interfaces/TransactionResponse.md)

#### Inherited from

`BaseContract.deployTransaction`

***

### estimateGas

> **estimateGas**: `object`

#### Overrides

`BaseContract.estimateGas`

***

### filters

> **filters**: `object`

#### AuctionCreated()

##### Parameters

###### auction?

`null`

###### token?

`null`

###### quantity?

`null`

##### Returns

[`AuctionCreatedEventFilter`](../type-aliases/AuctionCreatedEventFilter.md)

#### AuctionCreated(address,address,uint256)()

##### Parameters

###### auction?

`null`

###### token?

`null`

###### quantity?

`null`

##### Returns

[`AuctionCreatedEventFilter`](../type-aliases/AuctionCreatedEventFilter.md)

#### BridgeSet()

##### Parameters

###### bridgeAddress?

`null`

##### Returns

[`BridgeSetEventFilter`](../type-aliases/BridgeSetEventFilter.md)

#### BridgeSet(address)()

##### Parameters

###### bridgeAddress?

`null`

##### Returns

[`BridgeSetEventFilter`](../type-aliases/BridgeSetEventFilter.md)

#### ColonyAdded()

##### Parameters

###### colonyId?

`null` | `BigNumberish`

###### colonyAddress?

`null` | `string`

###### token?

`null`

##### Returns

[`ColonyAddedEventFilter`](../type-aliases/ColonyAddedEventFilter.md)

#### ColonyAdded(uint256,address,address)()

##### Parameters

###### colonyId?

`null` | `BigNumberish`

###### colonyAddress?

`null` | `string`

###### token?

`null`

##### Returns

[`ColonyAddedEventFilter`](../type-aliases/ColonyAddedEventFilter.md)

#### ColonyLabelRegistered()

##### Parameters

###### colony?

`null` | `string`

###### label?

`null`

##### Returns

[`ColonyLabelRegisteredEventFilter`](../type-aliases/ColonyLabelRegisteredEventFilter.md)

#### ColonyLabelRegistered(address,bytes32)()

##### Parameters

###### colony?

`null` | `string`

###### label?

`null`

##### Returns

[`ColonyLabelRegisteredEventFilter`](../type-aliases/ColonyLabelRegisteredEventFilter.md)

#### ColonyNetworkInitialised()

##### Parameters

###### resolver?

`null`

##### Returns

[`ColonyNetworkInitialisedEventFilter`](../type-aliases/ColonyNetworkInitialisedEventFilter.md)

#### ColonyNetworkInitialised(address)()

##### Parameters

###### resolver?

`null`

##### Returns

[`ColonyNetworkInitialisedEventFilter`](../type-aliases/ColonyNetworkInitialisedEventFilter.md)

#### ColonyVersionAdded()

##### Parameters

###### version?

`null`

###### resolver?

`null`

##### Returns

[`ColonyVersionAddedEventFilter`](../type-aliases/ColonyVersionAddedEventFilter.md)

#### ColonyVersionAdded(uint256,address)()

##### Parameters

###### version?

`null`

###### resolver?

`null`

##### Returns

[`ColonyVersionAddedEventFilter`](../type-aliases/ColonyVersionAddedEventFilter.md)

#### ExtensionAddedToNetwork()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### version?

`null`

##### Returns

[`ExtensionAddedToNetworkEventFilter`](../type-aliases/ExtensionAddedToNetworkEventFilter.md)

#### ExtensionAddedToNetwork(bytes32,uint256)()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### version?

`null`

##### Returns

[`ExtensionAddedToNetworkEventFilter`](../type-aliases/ExtensionAddedToNetworkEventFilter.md)

#### ExtensionDeprecated()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### colony?

`null` | `string`

###### deprecated?

`null`

##### Returns

[`ExtensionDeprecatedEventFilter`](../type-aliases/ExtensionDeprecatedEventFilter.md)

#### ExtensionDeprecated(bytes32,address,bool)()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### colony?

`null` | `string`

###### deprecated?

`null`

##### Returns

[`ExtensionDeprecatedEventFilter`](../type-aliases/ExtensionDeprecatedEventFilter.md)

#### ExtensionInstalled()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### colony?

`null` | `string`

###### version?

`null`

##### Returns

[`ExtensionInstalledEventFilter`](../type-aliases/ExtensionInstalledEventFilter.md)

#### ExtensionInstalled(bytes32,address,uint256)()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### colony?

`null` | `string`

###### version?

`null`

##### Returns

[`ExtensionInstalledEventFilter`](../type-aliases/ExtensionInstalledEventFilter.md)

#### ExtensionUninstalled()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### colony?

`null` | `string`

##### Returns

[`ExtensionUninstalledEventFilter`](../type-aliases/ExtensionUninstalledEventFilter.md)

#### ExtensionUninstalled(bytes32,address)()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### colony?

`null` | `string`

##### Returns

[`ExtensionUninstalledEventFilter`](../type-aliases/ExtensionUninstalledEventFilter.md)

#### ExtensionUpgraded()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### colony?

`null` | `string`

###### version?

`null`

##### Returns

[`ExtensionUpgradedEventFilter`](../type-aliases/ExtensionUpgradedEventFilter.md)

#### ExtensionUpgraded(bytes32,address,uint256)()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### colony?

`null` | `string`

###### version?

`null`

##### Returns

[`ExtensionUpgradedEventFilter`](../type-aliases/ExtensionUpgradedEventFilter.md)

#### MetaColonyCreated()

##### Parameters

###### metaColony?

`null`

###### token?

`null`

###### rootSkillId?

`null`

##### Returns

[`MetaColonyCreatedEventFilter`](../type-aliases/MetaColonyCreatedEventFilter.md)

#### MetaColonyCreated(address,address,uint256)()

##### Parameters

###### metaColony?

`null`

###### token?

`null`

###### rootSkillId?

`null`

##### Returns

[`MetaColonyCreatedEventFilter`](../type-aliases/MetaColonyCreatedEventFilter.md)

#### MetaTransactionExecuted()

##### Parameters

###### userAddress?

`null`

###### relayerAddress?

`null`

###### payload?

`null`

##### Returns

[`MetaTransactionExecutedEventFilter`](../type-aliases/MetaTransactionExecutedEventFilter.md)

#### MetaTransactionExecuted(address,address,bytes)()

##### Parameters

###### userAddress?

`null`

###### relayerAddress?

`null`

###### payload?

`null`

##### Returns

[`MetaTransactionExecutedEventFilter`](../type-aliases/MetaTransactionExecutedEventFilter.md)

#### MiningCycleResolverSet()

##### Parameters

###### miningCycleResolver?

`null`

##### Returns

[`MiningCycleResolverSetEventFilter`](../type-aliases/MiningCycleResolverSetEventFilter.md)

#### MiningCycleResolverSet(address)()

##### Parameters

###### miningCycleResolver?

`null`

##### Returns

[`MiningCycleResolverSetEventFilter`](../type-aliases/MiningCycleResolverSetEventFilter.md)

#### NetworkFeeInverseSet()

##### Parameters

###### feeInverse?

`null`

##### Returns

[`NetworkFeeInverseSetEventFilter`](../type-aliases/NetworkFeeInverseSetEventFilter.md)

#### NetworkFeeInverseSet(uint256)()

##### Parameters

###### feeInverse?

`null`

##### Returns

[`NetworkFeeInverseSetEventFilter`](../type-aliases/NetworkFeeInverseSetEventFilter.md)

#### RecoveryModeEntered()

##### Parameters

###### user?

`null`

##### Returns

[`RecoveryModeEnteredEventFilter`](../type-aliases/RecoveryModeEnteredEventFilter.md)

#### RecoveryModeEntered(address)()

##### Parameters

###### user?

`null`

##### Returns

[`RecoveryModeEnteredEventFilter`](../type-aliases/RecoveryModeEnteredEventFilter.md)

#### RecoveryModeExitApproved()

##### Parameters

###### user?

`null`

##### Returns

[`RecoveryModeExitApprovedEventFilter`](../type-aliases/RecoveryModeExitApprovedEventFilter.md)

#### RecoveryModeExitApproved(address)()

##### Parameters

###### user?

`null`

##### Returns

[`RecoveryModeExitApprovedEventFilter`](../type-aliases/RecoveryModeExitApprovedEventFilter.md)

#### RecoveryModeExited()

##### Parameters

###### user?

`null`

##### Returns

[`RecoveryModeExitedEventFilter`](../type-aliases/RecoveryModeExitedEventFilter.md)

#### RecoveryModeExited(address)()

##### Parameters

###### user?

`null`

##### Returns

[`RecoveryModeExitedEventFilter`](../type-aliases/RecoveryModeExitedEventFilter.md)

#### RecoveryRoleSet()

##### Parameters

###### user?

`null` | `string`

###### setTo?

`null`

##### Returns

[`RecoveryRoleSetEventFilter`](../type-aliases/RecoveryRoleSetEventFilter.md)

#### RecoveryRoleSet(address,bool)()

##### Parameters

###### user?

`null` | `string`

###### setTo?

`null`

##### Returns

[`RecoveryRoleSetEventFilter`](../type-aliases/RecoveryRoleSetEventFilter.md)

#### RecoveryStorageSlotSet()

##### Parameters

###### user?

`null`

###### slot?

`null`

###### fromValue?

`null`

###### toValue?

`null`

##### Returns

[`RecoveryStorageSlotSetEventFilter`](../type-aliases/RecoveryStorageSlotSetEventFilter.md)

#### RecoveryStorageSlotSet(address,uint256,bytes32,bytes32)()

##### Parameters

###### user?

`null`

###### slot?

`null`

###### fromValue?

`null`

###### toValue?

`null`

##### Returns

[`RecoveryStorageSlotSetEventFilter`](../type-aliases/RecoveryStorageSlotSetEventFilter.md)

#### RegistrarInitialised()

##### Parameters

###### ens?

`null`

###### rootNode?

`null`

##### Returns

[`RegistrarInitialisedEventFilter`](../type-aliases/RegistrarInitialisedEventFilter.md)

#### RegistrarInitialised(address,bytes32)()

##### Parameters

###### ens?

`null`

###### rootNode?

`null`

##### Returns

[`RegistrarInitialisedEventFilter`](../type-aliases/RegistrarInitialisedEventFilter.md)

#### ReputationMinerPenalised()

##### Parameters

###### miner?

`null`

###### tokensLost?

`null`

##### Returns

[`ReputationMinerPenalisedEventFilter`](../type-aliases/ReputationMinerPenalisedEventFilter.md)

#### ReputationMinerPenalised(address,uint256)()

##### Parameters

###### miner?

`null`

###### tokensLost?

`null`

##### Returns

[`ReputationMinerPenalisedEventFilter`](../type-aliases/ReputationMinerPenalisedEventFilter.md)

#### ReputationMiningCycleComplete()

##### Parameters

###### hash?

`null`

###### nNodes?

`null`

##### Returns

[`ReputationMiningCycleCompleteEventFilter`](../type-aliases/ReputationMiningCycleCompleteEventFilter.md)

#### ReputationMiningCycleComplete(bytes32,uint256)()

##### Parameters

###### hash?

`null`

###### nNodes?

`null`

##### Returns

[`ReputationMiningCycleCompleteEventFilter`](../type-aliases/ReputationMiningCycleCompleteEventFilter.md)

#### ReputationMiningInitialised()

##### Parameters

###### inactiveReputationMiningCycle?

`null`

##### Returns

[`ReputationMiningInitialisedEventFilter`](../type-aliases/ReputationMiningInitialisedEventFilter.md)

#### ReputationMiningInitialised(address)()

##### Parameters

###### inactiveReputationMiningCycle?

`null`

##### Returns

[`ReputationMiningInitialisedEventFilter`](../type-aliases/ReputationMiningInitialisedEventFilter.md)

#### ReputationMiningRewardSet()

##### Parameters

###### amount?

`null`

##### Returns

[`ReputationMiningRewardSetEventFilter`](../type-aliases/ReputationMiningRewardSetEventFilter.md)

#### ReputationMiningRewardSet(uint256)()

##### Parameters

###### amount?

`null`

##### Returns

[`ReputationMiningRewardSetEventFilter`](../type-aliases/ReputationMiningRewardSetEventFilter.md)

#### ReputationRootHashSet()

##### Parameters

###### newHash?

`null`

###### newNNodes?

`null`

###### stakers?

`null`

###### reward?

`null`

##### Returns

[`ReputationRootHashSetEventFilter`](../type-aliases/ReputationRootHashSetEventFilter.md)

#### ReputationRootHashSet(bytes32,uint256,address\[\],uint256)()

##### Parameters

###### newHash?

`null`

###### newNNodes?

`null`

###### stakers?

`null`

###### reward?

`null`

##### Returns

[`ReputationRootHashSetEventFilter`](../type-aliases/ReputationRootHashSetEventFilter.md)

#### ReputationUpdateAddedFromBridge()

##### Parameters

###### chainId?

`null`

###### colony?

`null`

###### updateNumber?

`null`

##### Returns

[`ReputationUpdateAddedFromBridgeEventFilter`](../type-aliases/ReputationUpdateAddedFromBridgeEventFilter.md)

#### ReputationUpdateAddedFromBridge(uint256,address,uint256)()

##### Parameters

###### chainId?

`null`

###### colony?

`null`

###### updateNumber?

`null`

##### Returns

[`ReputationUpdateAddedFromBridgeEventFilter`](../type-aliases/ReputationUpdateAddedFromBridgeEventFilter.md)

#### ReputationUpdateSentToBridge()

##### Parameters

###### colony?

`null`

###### count?

`null`

##### Returns

[`ReputationUpdateSentToBridgeEventFilter`](../type-aliases/ReputationUpdateSentToBridgeEventFilter.md)

#### ReputationUpdateSentToBridge(address,uint256)()

##### Parameters

###### colony?

`null`

###### count?

`null`

##### Returns

[`ReputationUpdateSentToBridgeEventFilter`](../type-aliases/ReputationUpdateSentToBridgeEventFilter.md)

#### ReputationUpdateStored()

##### Parameters

###### colony?

`null`

###### count?

`null`

##### Returns

[`ReputationUpdateStoredEventFilter`](../type-aliases/ReputationUpdateStoredEventFilter.md)

#### ReputationUpdateStored(address,uint256)()

##### Parameters

###### colony?

`null`

###### count?

`null`

##### Returns

[`ReputationUpdateStoredEventFilter`](../type-aliases/ReputationUpdateStoredEventFilter.md)

#### ReputationUpdateStoredFromBridge()

##### Parameters

###### chainId?

`null`

###### colony?

`null`

###### updateNumber?

`null`

##### Returns

[`ReputationUpdateStoredFromBridgeEventFilter`](../type-aliases/ReputationUpdateStoredFromBridgeEventFilter.md)

#### ReputationUpdateStoredFromBridge(uint256,address,uint256)()

##### Parameters

###### chainId?

`null`

###### colony?

`null`

###### updateNumber?

`null`

##### Returns

[`ReputationUpdateStoredFromBridgeEventFilter`](../type-aliases/ReputationUpdateStoredFromBridgeEventFilter.md)

#### SkillAdded()

##### Parameters

###### skillId?

`null`

###### parentSkillId?

`null`

##### Returns

[`SkillAddedEventFilter`](../type-aliases/SkillAddedEventFilter.md)

#### SkillAdded(uint256,uint256)()

##### Parameters

###### skillId?

`null`

###### parentSkillId?

`null`

##### Returns

[`SkillAddedEventFilter`](../type-aliases/SkillAddedEventFilter.md)

#### SkillAddedFromBridge()

##### Parameters

###### skillId?

`null`

##### Returns

[`SkillAddedFromBridgeEventFilter`](../type-aliases/SkillAddedFromBridgeEventFilter.md)

#### SkillAddedFromBridge(uint256)()

##### Parameters

###### skillId?

`null`

##### Returns

[`SkillAddedFromBridgeEventFilter`](../type-aliases/SkillAddedFromBridgeEventFilter.md)

#### SkillCreationStored()

##### Parameters

###### skillId?

`null`

##### Returns

[`SkillCreationStoredEventFilter`](../type-aliases/SkillCreationStoredEventFilter.md)

#### SkillCreationStored(uint256)()

##### Parameters

###### skillId?

`null`

##### Returns

[`SkillCreationStoredEventFilter`](../type-aliases/SkillCreationStoredEventFilter.md)

#### SkillStoredFromBridge()

##### Parameters

###### skillId?

`null`

##### Returns

[`SkillStoredFromBridgeEventFilter`](../type-aliases/SkillStoredFromBridgeEventFilter.md)

#### SkillStoredFromBridge(uint256)()

##### Parameters

###### skillId?

`null`

##### Returns

[`SkillStoredFromBridgeEventFilter`](../type-aliases/SkillStoredFromBridgeEventFilter.md)

#### TokenAuthorityDeployed()

##### Parameters

###### tokenAuthorityAddress?

`null`

##### Returns

[`TokenAuthorityDeployedEventFilter`](../type-aliases/TokenAuthorityDeployedEventFilter.md)

#### TokenAuthorityDeployed(address)()

##### Parameters

###### tokenAuthorityAddress?

`null`

##### Returns

[`TokenAuthorityDeployedEventFilter`](../type-aliases/TokenAuthorityDeployedEventFilter.md)

#### TokenDeployed()

##### Parameters

###### tokenAddress?

`null`

##### Returns

[`TokenDeployedEventFilter`](../type-aliases/TokenDeployedEventFilter.md)

#### TokenDeployed(address)()

##### Parameters

###### tokenAddress?

`null`

##### Returns

[`TokenDeployedEventFilter`](../type-aliases/TokenDeployedEventFilter.md)

#### TokenLockingAddressSet()

##### Parameters

###### tokenLocking?

`null`

##### Returns

[`TokenLockingAddressSetEventFilter`](../type-aliases/TokenLockingAddressSetEventFilter.md)

#### TokenLockingAddressSet(address)()

##### Parameters

###### tokenLocking?

`null`

##### Returns

[`TokenLockingAddressSetEventFilter`](../type-aliases/TokenLockingAddressSetEventFilter.md)

#### TokenWhitelisted()

##### Parameters

###### token?

`null`

###### status?

`null`

##### Returns

[`TokenWhitelistedEventFilter`](../type-aliases/TokenWhitelistedEventFilter.md)

#### TokenWhitelisted(address,bool)()

##### Parameters

###### token?

`null`

###### status?

`null`

##### Returns

[`TokenWhitelistedEventFilter`](../type-aliases/TokenWhitelistedEventFilter.md)

#### UserLabelRegistered()

##### Parameters

###### user?

`null` | `string`

###### label?

`null`

##### Returns

[`UserLabelRegisteredEventFilter`](../type-aliases/UserLabelRegisteredEventFilter.md)

#### UserLabelRegistered(address,bytes32)()

##### Parameters

###### user?

`null` | `string`

###### label?

`null`

##### Returns

[`UserLabelRegisteredEventFilter`](../type-aliases/UserLabelRegisteredEventFilter.md)

#### Overrides

`BaseContract.filters`

***

### functions

> **functions**: `object`

#### Overrides

`BaseContract.functions`

***

### interface

> **interface**: [`IColonyNetworkEventsInterface`](IColonyNetworkEventsInterface.md)

#### Overrides

`BaseContract.interface`

***

### off

> **off**: `OnEvent`\<[`IColonyNetworkEvents`](IColonyNetworkEvents.md)\>

#### Overrides

`BaseContract.off`

***

### on

> **on**: `OnEvent`\<[`IColonyNetworkEvents`](IColonyNetworkEvents.md)\>

#### Overrides

`BaseContract.on`

***

### once

> **once**: `OnEvent`\<[`IColonyNetworkEvents`](IColonyNetworkEvents.md)\>

#### Overrides

`BaseContract.once`

***

### populateTransaction

> **populateTransaction**: `object`

#### Overrides

`BaseContract.populateTransaction`

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

`BaseContract.provider`

***

### removeListener

> **removeListener**: `OnEvent`\<[`IColonyNetworkEvents`](IColonyNetworkEvents.md)\>

#### Overrides

`BaseContract.removeListener`

***

### resolvedAddress

> `readonly` **resolvedAddress**: `Promise`\<`string`\>

#### Inherited from

`BaseContract.resolvedAddress`

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

`BaseContract.signer`

## Methods

### \_checkRunningEvents()

> **\_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

##### runningEvent

`RunningEvent`

#### Returns

`void`

#### Inherited from

`BaseContract._checkRunningEvents`

***

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<`Contract`\>

#### Parameters

##### blockTag?

`BlockTag`

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`BaseContract._deployed`

***

### \_wrapEvent()

> **\_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

##### runningEvent

`RunningEvent`

##### log

`Log`

##### listener

`Listener`

#### Returns

`Event`

#### Inherited from

`BaseContract._wrapEvent`

***

### attach()

> **attach**(`addressOrName`): `this`

#### Parameters

##### addressOrName

`string`

#### Returns

`this`

#### Overrides

`BaseContract.attach`

***

### connect()

> **connect**(`signerOrProvider`): `this`

#### Parameters

##### signerOrProvider

`string` | `Signer` | `Provider`

#### Returns

`this`

#### Overrides

`BaseContract.connect`

***

### deployed()

> **deployed**(): `Promise`\<[`IColonyNetworkEvents`](IColonyNetworkEvents.md)\>

#### Returns

`Promise`\<[`IColonyNetworkEvents`](IColonyNetworkEvents.md)\>

#### Overrides

`BaseContract.deployed`

***

### emit()

> **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

##### eventName

`string` | `EventFilter`

##### args

...`any`[]

#### Returns

`boolean`

#### Inherited from

`BaseContract.emit`

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<[`TransactionResponse`](../../../interfaces/TransactionResponse.md)\>

#### Parameters

##### overrides?

`TransactionRequest`

#### Returns

`Promise`\<[`TransactionResponse`](../../../interfaces/TransactionResponse.md)\>

#### Inherited from

`BaseContract.fallback`

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

##### eventName?

`string` | `EventFilter`

#### Returns

`number`

#### Inherited from

`BaseContract.listenerCount`

***

### listeners()

#### Call Signature

> **listeners**\<`TEvent`\>(`eventFilter`?): `TypedListener`\<`TEvent`\>[]

##### Type Parameters

• **TEvent** *extends* `TypedEvent`

##### Parameters

###### eventFilter?

`TypedEventFilter`\<`TEvent`\>

##### Returns

`TypedListener`\<`TEvent`\>[]

##### Overrides

`BaseContract.listeners`

#### Call Signature

> **listeners**(`eventName`?): `Listener`[]

##### Parameters

###### eventName?

`string`

##### Returns

`Listener`[]

##### Overrides

`BaseContract.listeners`

***

### queryFilter()

> **queryFilter**\<`TEvent`\>(`event`, `fromBlockOrBlockhash`?, `toBlock`?): `Promise`\<`TEvent`[]\>

#### Type Parameters

• **TEvent** *extends* `TypedEvent`

#### Parameters

##### event

`TypedEventFilter`\<`TEvent`\>

##### fromBlockOrBlockhash?

`string` | `number`

##### toBlock?

`string` | `number`

#### Returns

`Promise`\<`TEvent`[]\>

#### Overrides

`BaseContract.queryFilter`

***

### removeAllListeners()

#### Call Signature

> **removeAllListeners**\<`TEvent`\>(`eventFilter`): `this`

##### Type Parameters

• **TEvent** *extends* `TypedEvent`

##### Parameters

###### eventFilter

`TypedEventFilter`\<`TEvent`\>

##### Returns

`this`

##### Overrides

`BaseContract.removeAllListeners`

#### Call Signature

> **removeAllListeners**(`eventName`?): `this`

##### Parameters

###### eventName?

`string`

##### Returns

`this`

##### Overrides

`BaseContract.removeAllListeners`
