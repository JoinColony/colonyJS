# Interface: TokenEventsInterface

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

#### Approval(address,address,uint256)

> **Approval(address,address,uint256)**: `EventFragment`

#### Burn(address,uint256)

> **Burn(address,uint256)**: `EventFragment`

#### LogSetAuthority(address)

> **LogSetAuthority(address)**: `EventFragment`

#### LogSetOwner(address)

> **LogSetOwner(address)**: `EventFragment`

#### Mint(address,uint256)

> **Mint(address,uint256)**: `EventFragment`

#### Transfer(address,address,uint256)

> **Transfer(address,address,uint256)**: `EventFragment`

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

`"Mint"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"Mint(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"Burn"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"Burn(address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

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

`"Approval"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"Approval(address,address,uint256)"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"Transfer"`

##### Returns

`EventFragment`

##### Overrides

`utils.Interface.getEvent`

#### Call Signature

> **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

##### Parameters

###### nameOrSignatureOrTopic

`"Transfer(address,address,uint256)"`

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
