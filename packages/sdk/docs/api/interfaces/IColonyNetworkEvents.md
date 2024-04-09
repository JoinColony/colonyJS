# Interface: IColonyNetworkEvents

## Hierarchy

- `BaseContract`

  ↳ **`IColonyNetworkEvents`**

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
| `AuctionCreated` | (`auction?`: ``null``, `token?`: ``null``, `quantity?`: ``null``) => [`AuctionCreatedEventFilter`](../README.md#auctioncreatedeventfilter) |
| `AuctionCreated(address,address,uint256)` | (`auction?`: ``null``, `token?`: ``null``, `quantity?`: ``null``) => [`AuctionCreatedEventFilter`](../README.md#auctioncreatedeventfilter) |
| `BridgeSet` | (`bridgeAddress?`: ``null``) => [`BridgeSetEventFilter`](../README.md#bridgeseteventfilter) |
| `BridgeSet(address)` | (`bridgeAddress?`: ``null``) => [`BridgeSetEventFilter`](../README.md#bridgeseteventfilter) |
| `ColonyAdded` | (`colonyId?`: ``null`` \| `BigNumberish`, `colonyAddress?`: ``null`` \| `string`, `token?`: ``null``) => [`ColonyAddedEventFilter`](../README.md#colonyaddedeventfilter) |
| `ColonyAdded(uint256,address,address)` | (`colonyId?`: ``null`` \| `BigNumberish`, `colonyAddress?`: ``null`` \| `string`, `token?`: ``null``) => [`ColonyAddedEventFilter`](../README.md#colonyaddedeventfilter) |
| `ColonyLabelRegistered` | (`colony?`: ``null`` \| `string`, `label?`: ``null``) => [`ColonyLabelRegisteredEventFilter`](../README.md#colonylabelregisteredeventfilter) |
| `ColonyLabelRegistered(address,bytes32)` | (`colony?`: ``null`` \| `string`, `label?`: ``null``) => [`ColonyLabelRegisteredEventFilter`](../README.md#colonylabelregisteredeventfilter) |
| `ColonyNetworkInitialised` | (`resolver?`: ``null``) => [`ColonyNetworkInitialisedEventFilter`](../README.md#colonynetworkinitialisedeventfilter) |
| `ColonyNetworkInitialised(address)` | (`resolver?`: ``null``) => [`ColonyNetworkInitialisedEventFilter`](../README.md#colonynetworkinitialisedeventfilter) |
| `ColonyVersionAdded` | (`version?`: ``null``, `resolver?`: ``null``) => [`ColonyVersionAddedEventFilter`](../README.md#colonyversionaddedeventfilter) |
| `ColonyVersionAdded(uint256,address)` | (`version?`: ``null``, `resolver?`: ``null``) => [`ColonyVersionAddedEventFilter`](../README.md#colonyversionaddedeventfilter) |
| `ExtensionAddedToNetwork` | (`extensionId?`: ``null`` \| `BytesLike`, `version?`: ``null``) => [`ExtensionAddedToNetworkEventFilter`](../README.md#extensionaddedtonetworkeventfilter) |
| `ExtensionAddedToNetwork(bytes32,uint256)` | (`extensionId?`: ``null`` \| `BytesLike`, `version?`: ``null``) => [`ExtensionAddedToNetworkEventFilter`](../README.md#extensionaddedtonetworkeventfilter) |
| `ExtensionDeprecated` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`, `deprecated?`: ``null``) => [`ExtensionDeprecatedEventFilter`](../README.md#extensiondeprecatedeventfilter) |
| `ExtensionDeprecated(bytes32,address,bool)` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`, `deprecated?`: ``null``) => [`ExtensionDeprecatedEventFilter`](../README.md#extensiondeprecatedeventfilter) |
| `ExtensionInstalled` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`, `version?`: ``null``) => [`ExtensionInstalledEventFilter`](../README.md#extensioninstalledeventfilter) |
| `ExtensionInstalled(bytes32,address,uint256)` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`, `version?`: ``null``) => [`ExtensionInstalledEventFilter`](../README.md#extensioninstalledeventfilter) |
| `ExtensionUninstalled` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`) => [`ExtensionUninstalledEventFilter`](../README.md#extensionuninstalledeventfilter) |
| `ExtensionUninstalled(bytes32,address)` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`) => [`ExtensionUninstalledEventFilter`](../README.md#extensionuninstalledeventfilter) |
| `ExtensionUpgraded` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`, `version?`: ``null``) => [`ExtensionUpgradedEventFilter`](../README.md#extensionupgradedeventfilter) |
| `ExtensionUpgraded(bytes32,address,uint256)` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`, `version?`: ``null``) => [`ExtensionUpgradedEventFilter`](../README.md#extensionupgradedeventfilter) |
| `MetaColonyCreated` | (`metaColony?`: ``null``, `token?`: ``null``, `rootSkillId?`: ``null``) => [`MetaColonyCreatedEventFilter`](../README.md#metacolonycreatedeventfilter) |
| `MetaColonyCreated(address,address,uint256)` | (`metaColony?`: ``null``, `token?`: ``null``, `rootSkillId?`: ``null``) => [`MetaColonyCreatedEventFilter`](../README.md#metacolonycreatedeventfilter) |
| `MetaTransactionExecuted` | (`userAddress?`: ``null``, `relayerAddress?`: ``null``, `payload?`: ``null``) => [`MetaTransactionExecutedEventFilter`](../README.md#metatransactionexecutedeventfilter) |
| `MetaTransactionExecuted(address,address,bytes)` | (`userAddress?`: ``null``, `relayerAddress?`: ``null``, `payload?`: ``null``) => [`MetaTransactionExecutedEventFilter`](../README.md#metatransactionexecutedeventfilter) |
| `MiningCycleResolverSet` | (`miningCycleResolver?`: ``null``) => [`MiningCycleResolverSetEventFilter`](../README.md#miningcycleresolverseteventfilter) |
| `MiningCycleResolverSet(address)` | (`miningCycleResolver?`: ``null``) => [`MiningCycleResolverSetEventFilter`](../README.md#miningcycleresolverseteventfilter) |
| `NetworkFeeInverseSet` | (`feeInverse?`: ``null``) => [`NetworkFeeInverseSetEventFilter`](../README.md#networkfeeinverseseteventfilter) |
| `NetworkFeeInverseSet(uint256)` | (`feeInverse?`: ``null``) => [`NetworkFeeInverseSetEventFilter`](../README.md#networkfeeinverseseteventfilter) |
| `RecoveryModeEntered` | (`user?`: ``null``) => [`RecoveryModeEnteredEventFilter`](../README.md#recoverymodeenteredeventfilter) |
| `RecoveryModeEntered(address)` | (`user?`: ``null``) => [`RecoveryModeEnteredEventFilter`](../README.md#recoverymodeenteredeventfilter) |
| `RecoveryModeExitApproved` | (`user?`: ``null``) => [`RecoveryModeExitApprovedEventFilter`](../README.md#recoverymodeexitapprovedeventfilter) |
| `RecoveryModeExitApproved(address)` | (`user?`: ``null``) => [`RecoveryModeExitApprovedEventFilter`](../README.md#recoverymodeexitapprovedeventfilter) |
| `RecoveryModeExited` | (`user?`: ``null``) => [`RecoveryModeExitedEventFilter`](../README.md#recoverymodeexitedeventfilter) |
| `RecoveryModeExited(address)` | (`user?`: ``null``) => [`RecoveryModeExitedEventFilter`](../README.md#recoverymodeexitedeventfilter) |
| `RecoveryRoleSet` | (`user?`: ``null`` \| `string`, `setTo?`: ``null``) => [`RecoveryRoleSetEventFilter`](../README.md#recoveryroleseteventfilter) |
| `RecoveryRoleSet(address,bool)` | (`user?`: ``null`` \| `string`, `setTo?`: ``null``) => [`RecoveryRoleSetEventFilter`](../README.md#recoveryroleseteventfilter) |
| `RecoveryStorageSlotSet` | (`user?`: ``null``, `slot?`: ``null``, `fromValue?`: ``null``, `toValue?`: ``null``) => [`RecoveryStorageSlotSetEventFilter`](../README.md#recoverystorageslotseteventfilter) |
| `RecoveryStorageSlotSet(address,uint256,bytes32,bytes32)` | (`user?`: ``null``, `slot?`: ``null``, `fromValue?`: ``null``, `toValue?`: ``null``) => [`RecoveryStorageSlotSetEventFilter`](../README.md#recoverystorageslotseteventfilter) |
| `RegistrarInitialised` | (`ens?`: ``null``, `rootNode?`: ``null``) => [`RegistrarInitialisedEventFilter`](../README.md#registrarinitialisedeventfilter) |
| `RegistrarInitialised(address,bytes32)` | (`ens?`: ``null``, `rootNode?`: ``null``) => [`RegistrarInitialisedEventFilter`](../README.md#registrarinitialisedeventfilter) |
| `ReputationMinerPenalised` | (`miner?`: ``null``, `tokensLost?`: ``null``) => [`ReputationMinerPenalisedEventFilter`](../README.md#reputationminerpenalisedeventfilter) |
| `ReputationMinerPenalised(address,uint256)` | (`miner?`: ``null``, `tokensLost?`: ``null``) => [`ReputationMinerPenalisedEventFilter`](../README.md#reputationminerpenalisedeventfilter) |
| `ReputationMiningCycleComplete` | (`hash?`: ``null``, `nNodes?`: ``null``) => [`ReputationMiningCycleCompleteEventFilter`](../README.md#reputationminingcyclecompleteeventfilter) |
| `ReputationMiningCycleComplete(bytes32,uint256)` | (`hash?`: ``null``, `nNodes?`: ``null``) => [`ReputationMiningCycleCompleteEventFilter`](../README.md#reputationminingcyclecompleteeventfilter) |
| `ReputationMiningInitialised` | (`inactiveReputationMiningCycle?`: ``null``) => [`ReputationMiningInitialisedEventFilter`](../README.md#reputationmininginitialisedeventfilter) |
| `ReputationMiningInitialised(address)` | (`inactiveReputationMiningCycle?`: ``null``) => [`ReputationMiningInitialisedEventFilter`](../README.md#reputationmininginitialisedeventfilter) |
| `ReputationMiningRewardSet` | (`amount?`: ``null``) => [`ReputationMiningRewardSetEventFilter`](../README.md#reputationminingrewardseteventfilter) |
| `ReputationMiningRewardSet(uint256)` | (`amount?`: ``null``) => [`ReputationMiningRewardSetEventFilter`](../README.md#reputationminingrewardseteventfilter) |
| `ReputationRootHashSet` | (`newHash?`: ``null``, `newNNodes?`: ``null``, `stakers?`: ``null``, `reward?`: ``null``) => [`ReputationRootHashSetEventFilter`](../README.md#reputationroothashseteventfilter) |
| `ReputationRootHashSet(bytes32,uint256,address[],uint256)` | (`newHash?`: ``null``, `newNNodes?`: ``null``, `stakers?`: ``null``, `reward?`: ``null``) => [`ReputationRootHashSetEventFilter`](../README.md#reputationroothashseteventfilter) |
| `ReputationUpdateAddedFromBridge` | (`chainId?`: ``null``, `colony?`: ``null``, `updateNumber?`: ``null``) => [`ReputationUpdateAddedFromBridgeEventFilter`](../README.md#reputationupdateaddedfrombridgeeventfilter) |
| `ReputationUpdateAddedFromBridge(uint256,address,uint256)` | (`chainId?`: ``null``, `colony?`: ``null``, `updateNumber?`: ``null``) => [`ReputationUpdateAddedFromBridgeEventFilter`](../README.md#reputationupdateaddedfrombridgeeventfilter) |
| `ReputationUpdateSentToBridge` | (`colony?`: ``null``, `count?`: ``null``) => [`ReputationUpdateSentToBridgeEventFilter`](../README.md#reputationupdatesenttobridgeeventfilter) |
| `ReputationUpdateSentToBridge(address,uint256)` | (`colony?`: ``null``, `count?`: ``null``) => [`ReputationUpdateSentToBridgeEventFilter`](../README.md#reputationupdatesenttobridgeeventfilter) |
| `ReputationUpdateStored` | (`colony?`: ``null``, `count?`: ``null``) => [`ReputationUpdateStoredEventFilter`](../README.md#reputationupdatestoredeventfilter) |
| `ReputationUpdateStored(address,uint256)` | (`colony?`: ``null``, `count?`: ``null``) => [`ReputationUpdateStoredEventFilter`](../README.md#reputationupdatestoredeventfilter) |
| `ReputationUpdateStoredFromBridge` | (`chainId?`: ``null``, `colony?`: ``null``, `updateNumber?`: ``null``) => [`ReputationUpdateStoredFromBridgeEventFilter`](../README.md#reputationupdatestoredfrombridgeeventfilter) |
| `ReputationUpdateStoredFromBridge(uint256,address,uint256)` | (`chainId?`: ``null``, `colony?`: ``null``, `updateNumber?`: ``null``) => [`ReputationUpdateStoredFromBridgeEventFilter`](../README.md#reputationupdatestoredfrombridgeeventfilter) |
| `SkillAdded` | (`skillId?`: ``null``, `parentSkillId?`: ``null``) => [`SkillAddedEventFilter`](../README.md#skilladdedeventfilter) |
| `SkillAdded(uint256,uint256)` | (`skillId?`: ``null``, `parentSkillId?`: ``null``) => [`SkillAddedEventFilter`](../README.md#skilladdedeventfilter) |
| `SkillAddedFromBridge` | (`skillId?`: ``null``) => [`SkillAddedFromBridgeEventFilter`](../README.md#skilladdedfrombridgeeventfilter) |
| `SkillAddedFromBridge(uint256)` | (`skillId?`: ``null``) => [`SkillAddedFromBridgeEventFilter`](../README.md#skilladdedfrombridgeeventfilter) |
| `SkillCreationStored` | (`skillId?`: ``null``) => [`SkillCreationStoredEventFilter`](../README.md#skillcreationstoredeventfilter) |
| `SkillCreationStored(uint256)` | (`skillId?`: ``null``) => [`SkillCreationStoredEventFilter`](../README.md#skillcreationstoredeventfilter) |
| `SkillStoredFromBridge` | (`skillId?`: ``null``) => [`SkillStoredFromBridgeEventFilter`](../README.md#skillstoredfrombridgeeventfilter) |
| `SkillStoredFromBridge(uint256)` | (`skillId?`: ``null``) => [`SkillStoredFromBridgeEventFilter`](../README.md#skillstoredfrombridgeeventfilter) |
| `TokenAuthorityDeployed` | (`tokenAuthorityAddress?`: ``null``) => [`TokenAuthorityDeployedEventFilter`](../README.md#tokenauthoritydeployedeventfilter) |
| `TokenAuthorityDeployed(address)` | (`tokenAuthorityAddress?`: ``null``) => [`TokenAuthorityDeployedEventFilter`](../README.md#tokenauthoritydeployedeventfilter) |
| `TokenDeployed` | (`tokenAddress?`: ``null``) => [`TokenDeployedEventFilter`](../README.md#tokendeployedeventfilter) |
| `TokenDeployed(address)` | (`tokenAddress?`: ``null``) => [`TokenDeployedEventFilter`](../README.md#tokendeployedeventfilter) |
| `TokenLockingAddressSet` | (`tokenLocking?`: ``null``) => [`TokenLockingAddressSetEventFilter`](../README.md#tokenlockingaddressseteventfilter) |
| `TokenLockingAddressSet(address)` | (`tokenLocking?`: ``null``) => [`TokenLockingAddressSetEventFilter`](../README.md#tokenlockingaddressseteventfilter) |
| `TokenWhitelisted` | (`token?`: ``null``, `status?`: ``null``) => [`TokenWhitelistedEventFilter`](../README.md#tokenwhitelistedeventfilter) |
| `TokenWhitelisted(address,bool)` | (`token?`: ``null``, `status?`: ``null``) => [`TokenWhitelistedEventFilter`](../README.md#tokenwhitelistedeventfilter) |
| `UserLabelRegistered` | (`user?`: ``null`` \| `string`, `label?`: ``null``) => [`UserLabelRegisteredEventFilter`](../README.md#userlabelregisteredeventfilter) |
| `UserLabelRegistered(address,bytes32)` | (`user?`: ``null`` \| `string`, `label?`: ``null``) => [`UserLabelRegisteredEventFilter`](../README.md#userlabelregisteredeventfilter) |

#### Overrides

BaseContract.filters

___

### functions

• **functions**: `Object`

#### Overrides

BaseContract.functions

___

### interface

• **interface**: [`IColonyNetworkEventsInterface`](IColonyNetworkEventsInterface.md)

#### Overrides

BaseContract.interface

___

### off

• **off**: `OnEvent`<[`IColonyNetworkEvents`](IColonyNetworkEvents.md)\>

#### Overrides

BaseContract.off

___

### on

• **on**: `OnEvent`<[`IColonyNetworkEvents`](IColonyNetworkEvents.md)\>

#### Overrides

BaseContract.on

___

### once

• **once**: `OnEvent`<[`IColonyNetworkEvents`](IColonyNetworkEvents.md)\>

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

• **removeListener**: `OnEvent`<[`IColonyNetworkEvents`](IColonyNetworkEvents.md)\>

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

▸ **attach**(`addressOrName`): [`IColonyNetworkEvents`](IColonyNetworkEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IColonyNetworkEvents`](IColonyNetworkEvents.md)

#### Overrides

BaseContract.attach

___

### connect

▸ **connect**(`signerOrProvider`): [`IColonyNetworkEvents`](IColonyNetworkEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IColonyNetworkEvents`](IColonyNetworkEvents.md)

#### Overrides

BaseContract.connect

___

### deployed

▸ **deployed**(): `Promise`<[`IColonyNetworkEvents`](IColonyNetworkEvents.md)\>

#### Returns

`Promise`<[`IColonyNetworkEvents`](IColonyNetworkEvents.md)\>

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

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IColonyNetworkEvents`](IColonyNetworkEvents.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IColonyNetworkEvents`](IColonyNetworkEvents.md)

#### Overrides

BaseContract.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`IColonyNetworkEvents`](IColonyNetworkEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IColonyNetworkEvents`](IColonyNetworkEvents.md)

#### Overrides

BaseContract.removeAllListeners
