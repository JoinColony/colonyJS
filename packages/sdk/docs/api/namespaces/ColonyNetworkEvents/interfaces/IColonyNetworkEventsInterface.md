[**API**](../../../README.md)

***

# Interface: IColonyNetworkEventsInterface

## Extends

- `Interface`

## Properties

### \_abiCoder

> `readonly` **\_abiCoder**: `AbiCoder`

#### Inherited from

`utils.Interface._abiCoder`

***

### \_isInterface

> `readonly` **\_isInterface**: `boolean`

#### Inherited from

`utils.Interface._isInterface`

***

### deploy

> `readonly` **deploy**: `ConstructorFragment`

#### Inherited from

`utils.Interface.deploy`

***

### errors

> `readonly` **errors**: `object`

#### Index Signature

\[`name`: `string`\]: `ErrorFragment`

#### Inherited from

`utils.Interface.errors`

***

### events

> **events**: `object`

#### AuctionCreated(address,address,uint256)

> **AuctionCreated(address,address,uint256)**: `EventFragment`

#### BridgeSet(address)

> **BridgeSet(address)**: `EventFragment`

#### ColonyAdded(uint256,address,address)

> **ColonyAdded(uint256,address,address)**: `EventFragment`

#### ColonyLabelRegistered(address,bytes32)

> **ColonyLabelRegistered(address,bytes32)**: `EventFragment`

#### ColonyNetworkInitialised(address)

> **ColonyNetworkInitialised(address)**: `EventFragment`

#### ColonyVersionAdded(uint256,address)

> **ColonyVersionAdded(uint256,address)**: `EventFragment`

#### ExtensionAddedToNetwork(bytes32,uint256)

> **ExtensionAddedToNetwork(bytes32,uint256)**: `EventFragment`

#### ExtensionDeprecated(bytes32,address,bool)

> **ExtensionDeprecated(bytes32,address,bool)**: `EventFragment`

#### ExtensionInstalled(bytes32,address,uint256)

> **ExtensionInstalled(bytes32,address,uint256)**: `EventFragment`

#### ExtensionUninstalled(bytes32,address)

> **ExtensionUninstalled(bytes32,address)**: `EventFragment`

#### ExtensionUpgraded(bytes32,address,uint256)

> **ExtensionUpgraded(bytes32,address,uint256)**: `EventFragment`

#### MetaColonyCreated(address,address,uint256)

> **MetaColonyCreated(address,address,uint256)**: `EventFragment`

#### MetaTransactionExecuted(address,address,bytes)

> **MetaTransactionExecuted(address,address,bytes)**: `EventFragment`

#### MiningCycleResolverSet(address)

> **MiningCycleResolverSet(address)**: `EventFragment`

#### NetworkFeeInverseSet(uint256)

> **NetworkFeeInverseSet(uint256)**: `EventFragment`

#### RecoveryModeEntered(address)

> **RecoveryModeEntered(address)**: `EventFragment`

#### RecoveryModeExitApproved(address)

> **RecoveryModeExitApproved(address)**: `EventFragment`

#### RecoveryModeExited(address)

> **RecoveryModeExited(address)**: `EventFragment`

#### RecoveryRoleSet(address,bool)

> **RecoveryRoleSet(address,bool)**: `EventFragment`

#### RecoveryStorageSlotSet(address,uint256,bytes32,bytes32)

> **RecoveryStorageSlotSet(address,uint256,bytes32,bytes32)**: `EventFragment`

#### RegistrarInitialised(address,bytes32)

> **RegistrarInitialised(address,bytes32)**: `EventFragment`

#### ReputationMinerPenalised(address,uint256)

> **ReputationMinerPenalised(address,uint256)**: `EventFragment`

#### ReputationMiningCycleComplete(bytes32,uint256)

> **ReputationMiningCycleComplete(bytes32,uint256)**: `EventFragment`

#### ReputationMiningInitialised(address)

> **ReputationMiningInitialised(address)**: `EventFragment`

#### ReputationMiningRewardSet(uint256)

> **ReputationMiningRewardSet(uint256)**: `EventFragment`

#### ReputationRootHashSet(bytes32,uint256,address\[\],uint256)

> **ReputationRootHashSet(bytes32,uint256,address\[\],uint256)**: `EventFragment`

#### ReputationUpdateAddedFromBridge(uint256,address,uint256)

> **ReputationUpdateAddedFromBridge(uint256,address,uint256)**: `EventFragment`

#### ReputationUpdateSentToBridge(address,uint256)

> **ReputationUpdateSentToBridge(address,uint256)**: `EventFragment`

#### ReputationUpdateStored(address,uint256)

> **ReputationUpdateStored(address,uint256)**: `EventFragment`

#### ReputationUpdateStoredFromBridge(uint256,address,uint256)

> **ReputationUpdateStoredFromBridge(uint256,address,uint256)**: `EventFragment`

#### SkillAdded(uint256,uint256)

> **SkillAdded(uint256,uint256)**: `EventFragment`

#### SkillAddedFromBridge(uint256)

> **SkillAddedFromBridge(uint256)**: `EventFragment`

#### SkillCreationStored(uint256)

> **SkillCreationStored(uint256)**: `EventFragment`

#### SkillStoredFromBridge(uint256)

> **SkillStoredFromBridge(uint256)**: `EventFragment`

#### TokenAuthorityDeployed(address)

> **TokenAuthorityDeployed(address)**: `EventFragment`

#### TokenDeployed(address)

> **TokenDeployed(address)**: `EventFragment`

#### TokenLockingAddressSet(address)

> **TokenLockingAddressSet(address)**: `EventFragment`

#### TokenWhitelisted(address,bool)

> **TokenWhitelisted(address,bool)**: `EventFragment`

#### UserLabelRegistered(address,bytes32)

> **UserLabelRegistered(address,bytes32)**: `EventFragment`

#### Overrides

`utils.Interface.events`

***

### fragments

> `readonly` **fragments**: readonly `Fragment`[]

#### Inherited from

`utils.Interface.fragments`

***

### functions

> **functions**: `object`

#### Overrides

`utils.Interface.functions`

***

### structs

> `readonly` **structs**: `object`

#### Index Signature

\[`name`: `string`\]: `any`

#### Inherited from

`utils.Interface.structs`

## Methods

### \_decodeParams()

> **\_decodeParams**(`params`, `data`): `Result`

#### Parameters

##### params

readonly `ParamType`[]

##### data

`BytesLike`

#### Returns

`Result`

#### Inherited from

`utils.Interface._decodeParams`

***

### \_encodeParams()

> **\_encodeParams**(`params`, `values`): `string`

#### Parameters

##### params

readonly `ParamType`[]

##### values

readonly `any`[]

#### Returns

`string`

#### Inherited from

`utils.Interface._encodeParams`

***

### decodeErrorResult()

> **decodeErrorResult**(`fragment`, `data`): `Result`

#### Parameters

##### fragment

`string` | `ErrorFragment`

##### data

`BytesLike`

#### Returns

`Result`

#### Inherited from

`utils.Interface.decodeErrorResult`

***

### decodeEventLog()

> **decodeEventLog**(`eventFragment`, `data`, `topics`?): `Result`

#### Parameters

##### eventFragment

`string` | `EventFragment`

##### data

`BytesLike`

##### topics?

readonly `string`[]

#### Returns

`Result`

#### Inherited from

`utils.Interface.decodeEventLog`

***

### decodeFunctionData()

> **decodeFunctionData**(`functionFragment`, `data`): `Result`

#### Parameters

##### functionFragment

`string` | `FunctionFragment`

##### data

`BytesLike`

#### Returns

`Result`

#### Inherited from

`utils.Interface.decodeFunctionData`

***

### decodeFunctionResult()

> **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

##### functionFragment

`string` | `FunctionFragment`

##### data

`BytesLike`

#### Returns

`Result`

#### Inherited from

`utils.Interface.decodeFunctionResult`

***

### encodeDeploy()

> **encodeDeploy**(`values`?): `string`

#### Parameters

##### values?

readonly `any`[]

#### Returns

`string`

#### Inherited from

`utils.Interface.encodeDeploy`

***

### encodeErrorResult()

> **encodeErrorResult**(`fragment`, `values`?): `string`

#### Parameters

##### fragment

`string` | `ErrorFragment`

##### values?

readonly `any`[]

#### Returns

`string`

#### Inherited from

`utils.Interface.encodeErrorResult`

***

### encodeEventLog()

> **encodeEventLog**(`eventFragment`, `values`): `object`

#### Parameters

##### eventFragment

`string` | `EventFragment`

##### values

readonly `any`[]

#### Returns

`object`

##### data

> **data**: `string`

##### topics

> **topics**: `string`[]

#### Inherited from

`utils.Interface.encodeEventLog`

***

### encodeFilterTopics()

> **encodeFilterTopics**(`eventFragment`, `values`): (`string` \| `string`[])[]

#### Parameters

##### eventFragment

`string` | `EventFragment`

##### values

readonly `any`[]

#### Returns

(`string` \| `string`[])[]

#### Inherited from

`utils.Interface.encodeFilterTopics`

***

### encodeFunctionData()

> **encodeFunctionData**(`functionFragment`, `values`?): `string`

#### Parameters

##### functionFragment

`string` | `FunctionFragment`

##### values?

readonly `any`[]

#### Returns

`string`

#### Inherited from

`utils.Interface.encodeFunctionData`

***

### encodeFunctionResult()

> **encodeFunctionResult**(`functionFragment`, `values`?): `string`

#### Parameters

##### functionFragment

`string` | `FunctionFragment`

##### values?

readonly `any`[]

#### Returns

`string`

#### Inherited from

`utils.Interface.encodeFunctionResult`

***

### format()

> **format**(`format`?): `string` \| `string`[]

#### Parameters

##### format?

`string`

#### Returns

`string` \| `string`[]

#### Inherited from

`utils.Interface.format`

***

### getError()

> **getError**(`nameOrSignatureOrSighash`): `ErrorFragment`

#### Parameters

##### nameOrSignatureOrSighash

`string`

#### Returns

`ErrorFragment`

#### Inherited from

`utils.Interface.getError`

***

### getEvent()

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyNetworkInitialised"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyNetworkInitialised(address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TokenLockingAddressSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TokenLockingAddressSet(address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"MiningCycleResolverSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"MiningCycleResolverSet(address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"NetworkFeeInverseSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"NetworkFeeInverseSet(uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyVersionAdded"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyVersionAdded(uint256,address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"MetaColonyCreated"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"MetaColonyCreated(address,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyAdded"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyAdded(uint256,address,address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"SkillAdded"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"SkillAdded(uint256,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"AuctionCreated"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"AuctionCreated(address,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ReputationMiningInitialised"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ReputationMiningInitialised(address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ReputationMiningCycleComplete"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ReputationMiningCycleComplete(bytes32,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ReputationRootHashSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ReputationRootHashSet(bytes32,uint256,address[],uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"UserLabelRegistered"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"UserLabelRegistered(address,bytes32)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyLabelRegistered"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyLabelRegistered(address,bytes32)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"RecoveryRoleSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"RecoveryRoleSet(address,bool)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExtensionAddedToNetwork"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExtensionAddedToNetwork(bytes32,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExtensionDeprecated"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExtensionDeprecated(bytes32,address,bool)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExtensionInstalled"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExtensionInstalled(bytes32,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExtensionUninstalled"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExtensionUninstalled(bytes32,address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExtensionUpgraded"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ExtensionUpgraded(bytes32,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"RecoveryModeEntered"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"RecoveryModeEntered(address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"RecoveryModeExitApproved"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"RecoveryModeExitApproved(address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"RecoveryModeExited"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"RecoveryModeExited(address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"RecoveryStorageSlotSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"RecoveryStorageSlotSet(address,uint256,bytes32,bytes32)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"RegistrarInitialised"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"RegistrarInitialised(address,bytes32)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ReputationMinerPenalised"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ReputationMinerPenalised(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ReputationMiningRewardSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ReputationMiningRewardSet(uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TokenWhitelisted"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TokenWhitelisted(address,bool)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"MetaTransactionExecuted"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"MetaTransactionExecuted(address,address,bytes)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TokenAuthorityDeployed"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TokenAuthorityDeployed(address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TokenDeployed"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TokenDeployed(address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"BridgeSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"BridgeSet(address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ReputationUpdateAddedFromBridge"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ReputationUpdateAddedFromBridge(uint256,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ReputationUpdateSentToBridge"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ReputationUpdateSentToBridge(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ReputationUpdateStored"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ReputationUpdateStored(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ReputationUpdateStoredFromBridge"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ReputationUpdateStoredFromBridge(uint256,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"SkillAddedFromBridge"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"SkillAddedFromBridge(uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"SkillCreationStored"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"SkillCreationStored(uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"SkillStoredFromBridge"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"SkillStoredFromBridge(uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

***

### getEventTopic()

> **getEventTopic**(`eventFragment`): `string`

#### Parameters

##### eventFragment

`string` | `EventFragment`

#### Returns

`string`

#### Inherited from

`utils.Interface.getEventTopic`

***

### getFunction()

> **getFunction**(`nameOrSignatureOrSighash`): `FunctionFragment`

#### Parameters

##### nameOrSignatureOrSighash

`string`

#### Returns

`FunctionFragment`

#### Inherited from

`utils.Interface.getFunction`

***

### getSighash()

> **getSighash**(`fragment`): `string`

#### Parameters

##### fragment

`string` | `FunctionFragment` | `ErrorFragment`

#### Returns

`string`

#### Inherited from

`utils.Interface.getSighash`

***

### parseError()

> **parseError**(`data`): `ErrorDescription`

#### Parameters

##### data

`BytesLike`

#### Returns

`ErrorDescription`

#### Inherited from

`utils.Interface.parseError`

***

### parseLog()

> **parseLog**(`log`): `LogDescription`

#### Parameters

##### log

###### data

`string`

###### topics

`string`[]

#### Returns

`LogDescription`

#### Inherited from

`utils.Interface.parseLog`

***

### parseTransaction()

> **parseTransaction**(`tx`): `TransactionDescription`

#### Parameters

##### tx

###### data

`string`

###### value

`BigNumberish`

#### Returns

`TransactionDescription`

#### Inherited from

`utils.Interface.parseTransaction`
