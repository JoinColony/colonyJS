# Class: CustomContract\<A\>

## Type Parameters

• **A** *extends* [`Abi`](../type-aliases/Abi.md)

## Constructors

### new CustomContract()

> **new CustomContract**\<`A`\>(`address`, `abi`, `config`): [`CustomContract`](CustomContract.md)\<`A`\>

Creates a new instance of a custom contract

This is your main entry point to talk to the Colony Network Smart Contracts.
From here you should be able to instantiate all the required instances for Colonies and their extensions.

#### Parameters

##### address

`` `0x${string}` ``

Address of the deployed contract

##### abi

`A`

JSON ABI of the contract

##### config

`ContractConfig`

An instance of a ContractConfig (mind: _not_ ContractOptions!)

#### Returns

[`CustomContract`](CustomContract.md)\<`A`\>

A CustomContract instance

## Properties

### address

> **address**: `` `0x${string}` ``

***

### config

> **config**: `ContractConfig`

## Methods

### createTxCreator()

> **createTxCreator**\<`M`, `E`\>(`method`, `args`, `eventData`?, `txConfig`?): `CustomTxCreator`\<`A`, `M`, `E`\>

Creates a new CustomTxCreator for custom, permissioned transactions or metatransactions

#### Type Parameters

• **M** *extends* `string`

• **E** *extends* [`EventData`](../interfaces/EventData.md)

#### Parameters

##### method

`M`

The transaction method to execute on the contract

##### args

\{ \[key in string \| number \| symbol\]: \{ \[key in string \| number \| symbol\]: AbiParameterToPrimitiveType\<Extract\<Extract\<A\[number\], \{ stateMutability: AbiStateMutability; type: "function" \}\>, \{ name: M \}\>\["inputs"\]\[key\<key\>\], "inputs"\> \}\[key\] \}

The arguments for the method

##### eventData?

(`receipt`) => `Promise`\<`E`\>

A function that extracts the relevant event data from the [ContractReceipt](../interfaces/ContractReceipt.md)

##### txConfig?

[`TxConfig`](../interfaces/TxConfig.md)

More configuration options, like [MetadataType](../enumerations/MetadataType.md) if the event contains metadata or if methods are unsupported

#### Returns

`CustomTxCreator`\<`A`, `M`, `E`\>

A CustomTxCreator

***

### read()

> **read**\<`M`\>(`method`, `args`): `Promise`\<\{ \[key in string \| number \| symbol\]: \{ \[key in string \| number \| symbol\]: AbiParameterToPrimitiveType\<ExtractAbiFunction\<A, M\>\["outputs"\]\[key\<key\>\], "outputs"\> \}\[key\] \}\[`0`\]\>

Read a contract value

#### Type Parameters

• **M** *extends* `string`

#### Parameters

##### method

`M`

The pure/view method to read from the contract

##### args

\{ \[key in string \| number \| symbol\]: \{ \[key in string \| number \| symbol\]: AbiParameterToPrimitiveType\<ExtractAbiFunction\<A, M\>\["inputs"\]\[key\<key\>\], "inputs"\> \}\[key\] \}

The arguments for the method

#### Returns

`Promise`\<\{ \[key in string \| number \| symbol\]: \{ \[key in string \| number \| symbol\]: AbiParameterToPrimitiveType\<ExtractAbiFunction\<A, M\>\["outputs"\]\[key\<key\>\], "outputs"\> \}\[key\] \}\[`0`\]\>

A promise resolving into the specific type for the contract return value
