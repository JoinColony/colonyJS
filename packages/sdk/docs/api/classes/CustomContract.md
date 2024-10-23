# Class: CustomContract<A\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `Abi` |

## Constructors

### constructor

• **new CustomContract**<`A`\>(`colonyNetwork`, `address`, `abi`)

Creates a new instance of a custom contract

This is your main entry point to talk to the Colony Network Smart Contracts.
From here you should be able to instantiate all the required instances for Colonies and their extensions.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `Abi` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colonyNetwork` | [`ColonyNetwork`](ColonyNetwork.md) \| [`CustomColonyNetwork`](CustomColonyNetwork.md) | [ColonyNetwork](ColonyNetwork.md) instance |
| `address` | \`0x${string}\` | Address of the deployed contract |
| `abi` | `A` | JSON ABI of the contract |

## Properties

### address

• **address**: \`0x${string}\`

## Methods

### createTxCreator

▸ **createTxCreator**<`M`, `E`\>(`method`, `args`, `eventData?`, `txConfig?`): `CustomTxCreator`<`A`, `M`, `E`\>

Creates a new CustomTxCreator for custom, permissioned transactions or metatransactions

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `string` |
| `E` | extends [`EventData`](../interfaces/EventData.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | `M` | The transaction method to execute on the contract |
| `args` | { [key in string \| number \| symbol]: { [key in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<A[number], Object\>, Object\>["inputs"][key], "inputs"\> }[key] } | The arguments for the method |
| `eventData?` | (`receipt`: [`ContractReceipt`](../interfaces/ContractReceipt.md)) => `Promise`<`E`\> | A function that extracts the relevant event data from the [ContractReceipt](../interfaces/ContractReceipt.md) |
| `txConfig?` | [`TxConfig`](../interfaces/TxConfig.md)<[`DEFAULT`](../enums/MetadataType.md#default)\> | More configuration options, like [MetadataType](../enums/MetadataType.md) if the event contains metadata or if methods are unsupported |

#### Returns

`CustomTxCreator`<`A`, `M`, `E`\>

A CustomTxCreator

___

### read

▸ **read**<`M`\>(`method`, `args`): `Promise`<{ [key in string \| number \| symbol]: { [key in string \| number \| symbol]: AbiParameterToPrimitiveType<ExtractAbiFunction<A, M\>["outputs"][key], "outputs"\> }[key] }[``0``]\>

Read a contract value

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | `M` | The pure/view method to read from the contract |
| `args` | { [key in string \| number \| symbol]: { [key in string \| number \| symbol]: AbiParameterToPrimitiveType<ExtractAbiFunction<A, M\>["inputs"][key], "inputs"\> }[key] } | The arguments for the method |

#### Returns

`Promise`<{ [key in string \| number \| symbol]: { [key in string \| number \| symbol]: AbiParameterToPrimitiveType<ExtractAbiFunction<A, M\>["outputs"][key], "outputs"\> }[key] }[``0``]\>

A promise resolving into the specific type for the contract return value
