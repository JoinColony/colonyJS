# Interface: TokenLockingEventsInterface

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

#### ColonyNetworkSet(address)

> **ColonyNetworkSet(address)**: `EventFragment`

#### LogSetAuthority(address)

> **LogSetAuthority(address)**: `EventFragment`

#### LogSetOwner(address)

> **LogSetOwner(address)**: `EventFragment`

#### MetaTransactionExecuted(address,address,bytes)

> **MetaTransactionExecuted(address,address,bytes)**: `EventFragment`

#### ReputationMinerPenalised(address,address,uint256)

> **ReputationMinerPenalised(address,address,uint256)**: `EventFragment`

#### StakeTransferred(address,address,address,address,uint256)

> **StakeTransferred(address,address,address,address,uint256)**: `EventFragment`

#### TokenLocked(address,address,uint256)

> **TokenLocked(address,address,uint256)**: `EventFragment`

#### TokenLocked(address,uint256)

> **TokenLocked(address,uint256)**: `EventFragment`

#### UserTokenApproved(address,address,address,uint256)

> **UserTokenApproved(address,address,address,uint256)**: `EventFragment`

#### UserTokenClaimed(address,address,uint256)

> **UserTokenClaimed(address,address,uint256)**: `EventFragment`

#### UserTokenDeobligated(address,address,address,uint256)

> **UserTokenDeobligated(address,address,address,uint256)**: `EventFragment`

#### UserTokenDeposited(address,address,uint256,uint256)

> **UserTokenDeposited(address,address,uint256,uint256)**: `EventFragment`

#### UserTokenDeposited(address,address,uint256)

> **UserTokenDeposited(address,address,uint256)**: `EventFragment`

#### UserTokenObligated(address,address,address,uint256)

> **UserTokenObligated(address,address,address,uint256)**: `EventFragment`

#### UserTokenTransferred(address,address,address,uint256)

> **UserTokenTransferred(address,address,address,uint256)**: `EventFragment`

#### UserTokenUnlocked(address,address,uint256)

> **UserTokenUnlocked(address,address,uint256)**: `EventFragment`

#### UserTokenWithdrawn(address,address,uint256)

> **UserTokenWithdrawn(address,address,uint256)**: `EventFragment`

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

`"LogSetAuthority"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"LogSetAuthority(address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"LogSetOwner"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"LogSetOwner(address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyNetworkSet"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"ColonyNetworkSet(address)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TokenLocked(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"TokenLocked(address,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"UserTokenUnlocked"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"UserTokenUnlocked(address,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"UserTokenDeposited(address,address,uint256,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"UserTokenDeposited(address,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"UserTokenWithdrawn"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"UserTokenWithdrawn(address,address,uint256)"`

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

`"ReputationMinerPenalised(address,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"UserTokenClaimed"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"UserTokenClaimed(address,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"UserTokenTransferred"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"UserTokenTransferred(address,address,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"StakeTransferred"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"StakeTransferred(address,address,address,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"UserTokenApproved"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"UserTokenApproved(address,address,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"UserTokenDeobligated"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"UserTokenDeobligated(address,address,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"UserTokenObligated"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"UserTokenObligated(address,address,address,uint256)"`

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
