# Interface: IColonyNetworkEvents

[ColonyNetworkEvents](../modules/ColonyNetworkEvents.md).IColonyNetworkEvents

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
| `AuctionCreated` | (`auction?`: ``null``, `token?`: ``null``, `quantity?`: ``null``) => [`AuctionCreatedEventFilter`](../modules/ColonyNetworkEvents.md#auctioncreatedeventfilter) |
| `AuctionCreated(address,address,uint256)` | (`auction?`: ``null``, `token?`: ``null``, `quantity?`: ``null``) => [`AuctionCreatedEventFilter`](../modules/ColonyNetworkEvents.md#auctioncreatedeventfilter) |
| `BridgeSet` | (`bridgeAddress?`: ``null``) => [`BridgeSetEventFilter`](../modules/ColonyNetworkEvents.md#bridgeseteventfilter) |
| `BridgeSet(address)` | (`bridgeAddress?`: ``null``) => [`BridgeSetEventFilter`](../modules/ColonyNetworkEvents.md#bridgeseteventfilter) |
| `ColonyAdded` | (`colonyId?`: ``null`` \| `BigNumberish`, `colonyAddress?`: ``null`` \| `string`, `token?`: ``null``) => [`ColonyAddedEventFilter`](../modules/ColonyNetworkEvents.md#colonyaddedeventfilter) |
| `ColonyAdded(uint256,address,address)` | (`colonyId?`: ``null`` \| `BigNumberish`, `colonyAddress?`: ``null`` \| `string`, `token?`: ``null``) => [`ColonyAddedEventFilter`](../modules/ColonyNetworkEvents.md#colonyaddedeventfilter) |
| `ColonyLabelRegistered` | (`colony?`: ``null`` \| `string`, `label?`: ``null``) => [`ColonyLabelRegisteredEventFilter`](../modules/ColonyNetworkEvents.md#colonylabelregisteredeventfilter) |
| `ColonyLabelRegistered(address,bytes32)` | (`colony?`: ``null`` \| `string`, `label?`: ``null``) => [`ColonyLabelRegisteredEventFilter`](../modules/ColonyNetworkEvents.md#colonylabelregisteredeventfilter) |
| `ColonyNetworkInitialised` | (`resolver?`: ``null``) => [`ColonyNetworkInitialisedEventFilter`](../modules/ColonyNetworkEvents.md#colonynetworkinitialisedeventfilter) |
| `ColonyNetworkInitialised(address)` | (`resolver?`: ``null``) => [`ColonyNetworkInitialisedEventFilter`](../modules/ColonyNetworkEvents.md#colonynetworkinitialisedeventfilter) |
| `ColonyVersionAdded` | (`version?`: ``null``, `resolver?`: ``null``) => [`ColonyVersionAddedEventFilter`](../modules/ColonyNetworkEvents.md#colonyversionaddedeventfilter) |
| `ColonyVersionAdded(uint256,address)` | (`version?`: ``null``, `resolver?`: ``null``) => [`ColonyVersionAddedEventFilter`](../modules/ColonyNetworkEvents.md#colonyversionaddedeventfilter) |
| `ExtensionAddedToNetwork` | (`extensionId?`: ``null`` \| `BytesLike`, `version?`: ``null``) => [`ExtensionAddedToNetworkEventFilter`](../modules/ColonyNetworkEvents.md#extensionaddedtonetworkeventfilter) |
| `ExtensionAddedToNetwork(bytes32,uint256)` | (`extensionId?`: ``null`` \| `BytesLike`, `version?`: ``null``) => [`ExtensionAddedToNetworkEventFilter`](../modules/ColonyNetworkEvents.md#extensionaddedtonetworkeventfilter) |
| `ExtensionDeprecated` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`, `deprecated?`: ``null``) => [`ExtensionDeprecatedEventFilter`](../modules/ColonyNetworkEvents.md#extensiondeprecatedeventfilter) |
| `ExtensionDeprecated(bytes32,address,bool)` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`, `deprecated?`: ``null``) => [`ExtensionDeprecatedEventFilter`](../modules/ColonyNetworkEvents.md#extensiondeprecatedeventfilter) |
| `ExtensionInstalled` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`, `version?`: ``null``) => [`ExtensionInstalledEventFilter`](../modules/ColonyNetworkEvents.md#extensioninstalledeventfilter) |
| `ExtensionInstalled(bytes32,address,uint256)` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`, `version?`: ``null``) => [`ExtensionInstalledEventFilter`](../modules/ColonyNetworkEvents.md#extensioninstalledeventfilter) |
| `ExtensionUninstalled` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`) => [`ExtensionUninstalledEventFilter`](../modules/ColonyNetworkEvents.md#extensionuninstalledeventfilter) |
| `ExtensionUninstalled(bytes32,address)` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`) => [`ExtensionUninstalledEventFilter`](../modules/ColonyNetworkEvents.md#extensionuninstalledeventfilter) |
| `ExtensionUpgraded` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`, `version?`: ``null``) => [`ExtensionUpgradedEventFilter`](../modules/ColonyNetworkEvents.md#extensionupgradedeventfilter) |
| `ExtensionUpgraded(bytes32,address,uint256)` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`, `version?`: ``null``) => [`ExtensionUpgradedEventFilter`](../modules/ColonyNetworkEvents.md#extensionupgradedeventfilter) |
| `MetaColonyCreated` | (`metaColony?`: ``null``, `token?`: ``null``, `rootSkillId?`: ``null``) => [`MetaColonyCreatedEventFilter`](../modules/ColonyNetworkEvents.md#metacolonycreatedeventfilter) |
| `MetaColonyCreated(address,address,uint256)` | (`metaColony?`: ``null``, `token?`: ``null``, `rootSkillId?`: ``null``) => [`MetaColonyCreatedEventFilter`](../modules/ColonyNetworkEvents.md#metacolonycreatedeventfilter) |
| `MetaTransactionExecuted` | (`userAddress?`: ``null``, `relayerAddress?`: ``null``, `payload?`: ``null``) => [`MetaTransactionExecutedEventFilter`](../modules/ColonyNetworkEvents.md#metatransactionexecutedeventfilter) |
| `MetaTransactionExecuted(address,address,bytes)` | (`userAddress?`: ``null``, `relayerAddress?`: ``null``, `payload?`: ``null``) => [`MetaTransactionExecutedEventFilter`](../modules/ColonyNetworkEvents.md#metatransactionexecutedeventfilter) |
| `MiningCycleResolverSet` | (`miningCycleResolver?`: ``null``) => [`MiningCycleResolverSetEventFilter`](../modules/ColonyNetworkEvents.md#miningcycleresolverseteventfilter) |
| `MiningCycleResolverSet(address)` | (`miningCycleResolver?`: ``null``) => [`MiningCycleResolverSetEventFilter`](../modules/ColonyNetworkEvents.md#miningcycleresolverseteventfilter) |
| `NetworkFeeInverseSet` | (`feeInverse?`: ``null``) => [`NetworkFeeInverseSetEventFilter`](../modules/ColonyNetworkEvents.md#networkfeeinverseseteventfilter) |
| `NetworkFeeInverseSet(uint256)` | (`feeInverse?`: ``null``) => [`NetworkFeeInverseSetEventFilter`](../modules/ColonyNetworkEvents.md#networkfeeinverseseteventfilter) |
| `RecoveryModeEntered` | (`user?`: ``null``) => [`RecoveryModeEnteredEventFilter`](../modules/ColonyNetworkEvents.md#recoverymodeenteredeventfilter) |
| `RecoveryModeEntered(address)` | (`user?`: ``null``) => [`RecoveryModeEnteredEventFilter`](../modules/ColonyNetworkEvents.md#recoverymodeenteredeventfilter) |
| `RecoveryModeExitApproved` | (`user?`: ``null``) => [`RecoveryModeExitApprovedEventFilter`](../modules/ColonyNetworkEvents.md#recoverymodeexitapprovedeventfilter) |
| `RecoveryModeExitApproved(address)` | (`user?`: ``null``) => [`RecoveryModeExitApprovedEventFilter`](../modules/ColonyNetworkEvents.md#recoverymodeexitapprovedeventfilter) |
| `RecoveryModeExited` | (`user?`: ``null``) => [`RecoveryModeExitedEventFilter`](../modules/ColonyNetworkEvents.md#recoverymodeexitedeventfilter) |
| `RecoveryModeExited(address)` | (`user?`: ``null``) => [`RecoveryModeExitedEventFilter`](../modules/ColonyNetworkEvents.md#recoverymodeexitedeventfilter) |
| `RecoveryRoleSet` | (`user?`: ``null`` \| `string`, `setTo?`: ``null``) => [`RecoveryRoleSetEventFilter`](../modules/ColonyNetworkEvents.md#recoveryroleseteventfilter) |
| `RecoveryRoleSet(address,bool)` | (`user?`: ``null`` \| `string`, `setTo?`: ``null``) => [`RecoveryRoleSetEventFilter`](../modules/ColonyNetworkEvents.md#recoveryroleseteventfilter) |
| `RecoveryStorageSlotSet` | (`user?`: ``null``, `slot?`: ``null``, `fromValue?`: ``null``, `toValue?`: ``null``) => [`RecoveryStorageSlotSetEventFilter`](../modules/ColonyNetworkEvents.md#recoverystorageslotseteventfilter) |
| `RecoveryStorageSlotSet(address,uint256,bytes32,bytes32)` | (`user?`: ``null``, `slot?`: ``null``, `fromValue?`: ``null``, `toValue?`: ``null``) => [`RecoveryStorageSlotSetEventFilter`](../modules/ColonyNetworkEvents.md#recoverystorageslotseteventfilter) |
| `RegistrarInitialised` | (`ens?`: ``null``, `rootNode?`: ``null``) => [`RegistrarInitialisedEventFilter`](../modules/ColonyNetworkEvents.md#registrarinitialisedeventfilter) |
| `RegistrarInitialised(address,bytes32)` | (`ens?`: ``null``, `rootNode?`: ``null``) => [`RegistrarInitialisedEventFilter`](../modules/ColonyNetworkEvents.md#registrarinitialisedeventfilter) |
| `ReputationMinerPenalised` | (`miner?`: ``null``, `tokensLost?`: ``null``) => [`ReputationMinerPenalisedEventFilter`](../modules/ColonyNetworkEvents.md#reputationminerpenalisedeventfilter) |
| `ReputationMinerPenalised(address,uint256)` | (`miner?`: ``null``, `tokensLost?`: ``null``) => [`ReputationMinerPenalisedEventFilter`](../modules/ColonyNetworkEvents.md#reputationminerpenalisedeventfilter) |
| `ReputationMiningCycleComplete` | (`hash?`: ``null``, `nNodes?`: ``null``) => [`ReputationMiningCycleCompleteEventFilter`](../modules/ColonyNetworkEvents.md#reputationminingcyclecompleteeventfilter) |
| `ReputationMiningCycleComplete(bytes32,uint256)` | (`hash?`: ``null``, `nNodes?`: ``null``) => [`ReputationMiningCycleCompleteEventFilter`](../modules/ColonyNetworkEvents.md#reputationminingcyclecompleteeventfilter) |
| `ReputationMiningInitialised` | (`inactiveReputationMiningCycle?`: ``null``) => [`ReputationMiningInitialisedEventFilter`](../modules/ColonyNetworkEvents.md#reputationmininginitialisedeventfilter) |
| `ReputationMiningInitialised(address)` | (`inactiveReputationMiningCycle?`: ``null``) => [`ReputationMiningInitialisedEventFilter`](../modules/ColonyNetworkEvents.md#reputationmininginitialisedeventfilter) |
| `ReputationMiningRewardSet` | (`amount?`: ``null``) => [`ReputationMiningRewardSetEventFilter`](../modules/ColonyNetworkEvents.md#reputationminingrewardseteventfilter) |
| `ReputationMiningRewardSet(uint256)` | (`amount?`: ``null``) => [`ReputationMiningRewardSetEventFilter`](../modules/ColonyNetworkEvents.md#reputationminingrewardseteventfilter) |
| `ReputationRootHashSet` | (`newHash?`: ``null``, `newNNodes?`: ``null``, `stakers?`: ``null``, `reward?`: ``null``) => [`ReputationRootHashSetEventFilter`](../modules/ColonyNetworkEvents.md#reputationroothashseteventfilter) |
| `ReputationRootHashSet(bytes32,uint256,address[],uint256)` | (`newHash?`: ``null``, `newNNodes?`: ``null``, `stakers?`: ``null``, `reward?`: ``null``) => [`ReputationRootHashSetEventFilter`](../modules/ColonyNetworkEvents.md#reputationroothashseteventfilter) |
| `ReputationUpdateAddedFromBridge` | (`chainId?`: ``null``, `colony?`: ``null``, `updateNumber?`: ``null``) => [`ReputationUpdateAddedFromBridgeEventFilter`](../modules/ColonyNetworkEvents.md#reputationupdateaddedfrombridgeeventfilter) |
| `ReputationUpdateAddedFromBridge(uint256,address,uint256)` | (`chainId?`: ``null``, `colony?`: ``null``, `updateNumber?`: ``null``) => [`ReputationUpdateAddedFromBridgeEventFilter`](../modules/ColonyNetworkEvents.md#reputationupdateaddedfrombridgeeventfilter) |
| `ReputationUpdateSentToBridge` | (`colony?`: ``null``, `count?`: ``null``) => [`ReputationUpdateSentToBridgeEventFilter`](../modules/ColonyNetworkEvents.md#reputationupdatesenttobridgeeventfilter) |
| `ReputationUpdateSentToBridge(address,uint256)` | (`colony?`: ``null``, `count?`: ``null``) => [`ReputationUpdateSentToBridgeEventFilter`](../modules/ColonyNetworkEvents.md#reputationupdatesenttobridgeeventfilter) |
| `ReputationUpdateStored` | (`colony?`: ``null``, `count?`: ``null``) => [`ReputationUpdateStoredEventFilter`](../modules/ColonyNetworkEvents.md#reputationupdatestoredeventfilter) |
| `ReputationUpdateStored(address,uint256)` | (`colony?`: ``null``, `count?`: ``null``) => [`ReputationUpdateStoredEventFilter`](../modules/ColonyNetworkEvents.md#reputationupdatestoredeventfilter) |
| `ReputationUpdateStoredFromBridge` | (`chainId?`: ``null``, `colony?`: ``null``, `updateNumber?`: ``null``) => [`ReputationUpdateStoredFromBridgeEventFilter`](../modules/ColonyNetworkEvents.md#reputationupdatestoredfrombridgeeventfilter) |
| `ReputationUpdateStoredFromBridge(uint256,address,uint256)` | (`chainId?`: ``null``, `colony?`: ``null``, `updateNumber?`: ``null``) => [`ReputationUpdateStoredFromBridgeEventFilter`](../modules/ColonyNetworkEvents.md#reputationupdatestoredfrombridgeeventfilter) |
| `SkillAdded` | (`skillId?`: ``null``, `parentSkillId?`: ``null``) => [`SkillAddedEventFilter`](../modules/ColonyNetworkEvents.md#skilladdedeventfilter) |
| `SkillAdded(uint256,uint256)` | (`skillId?`: ``null``, `parentSkillId?`: ``null``) => [`SkillAddedEventFilter`](../modules/ColonyNetworkEvents.md#skilladdedeventfilter) |
| `SkillAddedFromBridge` | (`skillId?`: ``null``) => [`SkillAddedFromBridgeEventFilter`](../modules/ColonyNetworkEvents.md#skilladdedfrombridgeeventfilter) |
| `SkillAddedFromBridge(uint256)` | (`skillId?`: ``null``) => [`SkillAddedFromBridgeEventFilter`](../modules/ColonyNetworkEvents.md#skilladdedfrombridgeeventfilter) |
| `SkillCreationStored` | (`skillId?`: ``null``) => [`SkillCreationStoredEventFilter`](../modules/ColonyNetworkEvents.md#skillcreationstoredeventfilter) |
| `SkillCreationStored(uint256)` | (`skillId?`: ``null``) => [`SkillCreationStoredEventFilter`](../modules/ColonyNetworkEvents.md#skillcreationstoredeventfilter) |
| `SkillStoredFromBridge` | (`skillId?`: ``null``) => [`SkillStoredFromBridgeEventFilter`](../modules/ColonyNetworkEvents.md#skillstoredfrombridgeeventfilter) |
| `SkillStoredFromBridge(uint256)` | (`skillId?`: ``null``) => [`SkillStoredFromBridgeEventFilter`](../modules/ColonyNetworkEvents.md#skillstoredfrombridgeeventfilter) |
| `TokenAuthorityDeployed` | (`tokenAuthorityAddress?`: ``null``) => [`TokenAuthorityDeployedEventFilter`](../modules/ColonyNetworkEvents.md#tokenauthoritydeployedeventfilter) |
| `TokenAuthorityDeployed(address)` | (`tokenAuthorityAddress?`: ``null``) => [`TokenAuthorityDeployedEventFilter`](../modules/ColonyNetworkEvents.md#tokenauthoritydeployedeventfilter) |
| `TokenDeployed` | (`tokenAddress?`: ``null``) => [`TokenDeployedEventFilter`](../modules/ColonyNetworkEvents.md#tokendeployedeventfilter) |
| `TokenDeployed(address)` | (`tokenAddress?`: ``null``) => [`TokenDeployedEventFilter`](../modules/ColonyNetworkEvents.md#tokendeployedeventfilter) |
| `TokenLockingAddressSet` | (`tokenLocking?`: ``null``) => [`TokenLockingAddressSetEventFilter`](../modules/ColonyNetworkEvents.md#tokenlockingaddressseteventfilter) |
| `TokenLockingAddressSet(address)` | (`tokenLocking?`: ``null``) => [`TokenLockingAddressSetEventFilter`](../modules/ColonyNetworkEvents.md#tokenlockingaddressseteventfilter) |
| `TokenWhitelisted` | (`token?`: ``null``, `status?`: ``null``) => [`TokenWhitelistedEventFilter`](../modules/ColonyNetworkEvents.md#tokenwhitelistedeventfilter) |
| `TokenWhitelisted(address,bool)` | (`token?`: ``null``, `status?`: ``null``) => [`TokenWhitelistedEventFilter`](../modules/ColonyNetworkEvents.md#tokenwhitelistedeventfilter) |
| `UserLabelRegistered` | (`user?`: ``null`` \| `string`, `label?`: ``null``) => [`UserLabelRegisteredEventFilter`](../modules/ColonyNetworkEvents.md#userlabelregisteredeventfilter) |
| `UserLabelRegistered(address,bytes32)` | (`user?`: ``null`` \| `string`, `label?`: ``null``) => [`UserLabelRegisteredEventFilter`](../modules/ColonyNetworkEvents.md#userlabelregisteredeventfilter) |

#### Overrides

BaseContract.filters

___

### functions

• **functions**: `Object`

#### Overrides

BaseContract.functions

___

### interface

• **interface**: [`IColonyNetworkEventsInterface`](ColonyNetworkEvents.IColonyNetworkEventsInterface.md)

#### Overrides

BaseContract.interface

___

### off

• **off**: `OnEvent`<[`IColonyNetworkEvents`](ColonyNetworkEvents.IColonyNetworkEvents.md)\>

#### Overrides

BaseContract.off

___

### on

• **on**: `OnEvent`<[`IColonyNetworkEvents`](ColonyNetworkEvents.IColonyNetworkEvents.md)\>

#### Overrides

BaseContract.on

___

### once

• **once**: `OnEvent`<[`IColonyNetworkEvents`](ColonyNetworkEvents.IColonyNetworkEvents.md)\>

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

• **removeListener**: `OnEvent`<[`IColonyNetworkEvents`](ColonyNetworkEvents.IColonyNetworkEvents.md)\>

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

▸ **attach**(`addressOrName`): [`IColonyNetworkEvents`](ColonyNetworkEvents.IColonyNetworkEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IColonyNetworkEvents`](ColonyNetworkEvents.IColonyNetworkEvents.md)

#### Overrides

BaseContract.attach

___

### connect

▸ **connect**(`signerOrProvider`): [`IColonyNetworkEvents`](ColonyNetworkEvents.IColonyNetworkEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IColonyNetworkEvents`](ColonyNetworkEvents.IColonyNetworkEvents.md)

#### Overrides

BaseContract.connect

___

### deployed

▸ **deployed**(): `Promise`<[`IColonyNetworkEvents`](ColonyNetworkEvents.IColonyNetworkEvents.md)\>

#### Returns

`Promise`<[`IColonyNetworkEvents`](ColonyNetworkEvents.IColonyNetworkEvents.md)\>

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

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IColonyNetworkEvents`](ColonyNetworkEvents.IColonyNetworkEvents.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IColonyNetworkEvents`](ColonyNetworkEvents.IColonyNetworkEvents.md)

#### Overrides

BaseContract.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`IColonyNetworkEvents`](ColonyNetworkEvents.IColonyNetworkEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IColonyNetworkEvents`](ColonyNetworkEvents.IColonyNetworkEvents.md)

#### Overrides

BaseContract.removeAllListeners
