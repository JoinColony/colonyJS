# API

## Namespaces

- [Tokens](modules/Tokens.md)

## Enumerations

- [ColonyRole](enums/ColonyRole.md)
- [ColonyRpcEndpoint](enums/ColonyRpcEndpoint.md)
- [Extension](enums/Extension.md)
- [Id](enums/Id.md)
- [MetadataType](enums/MetadataType.md)
- [MotionState](enums/MotionState.md)
- [Network](enums/Network.md)
- [SupportedExtension](enums/SupportedExtension.md)
- [TeamColor](enums/TeamColor.md)
- [Vote](enums/Vote.md)

## Classes

- [CloudflareReadonlyAdapter](classes/CloudflareReadonlyAdapter.md)
- [Colony](classes/Colony.md)
- [ColonyEventManager](classes/ColonyEventManager.md)
- [ColonyNetwork](classes/ColonyNetwork.md)
- [ColonyToken](classes/ColonyToken.md)
- [ColonyTxCreator](classes/ColonyTxCreator.md)
- [ERC20Token](classes/ERC20Token.md)
- [ERC2612Token](classes/ERC2612Token.md)
- [MetaTxCreator](classes/MetaTxCreator.md)
- [OneTxPayment](classes/OneTxPayment.md)
- [PinataAdapter](classes/PinataAdapter.md)
- [TxCreator](classes/TxCreator.md)
- [VotingReputation](classes/VotingReputation.md)

## Interfaces

- [BaseContract](interfaces/BaseContract.md)
- [ColonyEvent](interfaces/ColonyEvent.md)
- [ColonyEventManagerOptions](interfaces/ColonyEventManagerOptions.md)
- [ColonyFilter](interfaces/ColonyFilter.md)
- [ColonyMultiFilter](interfaces/ColonyMultiFilter.md)
- [ColonyNetworkOptions](interfaces/ColonyNetworkOptions.md)
- [ColonyTopic](interfaces/ColonyTopic.md)
- [Ethers6Filter](interfaces/Ethers6Filter.md)
- [Ethers6FilterByBlockHash](interfaces/Ethers6FilterByBlockHash.md)
- [IpfsAdapter](interfaces/IpfsAdapter.md)
- [MetaTxBaseContract](interfaces/MetaTxBaseContract.md)
- [ParsedLogTransactionReceipt](interfaces/ParsedLogTransactionReceipt.md)
- [PermissionConfig](interfaces/PermissionConfig.md)
- [SupportedExtensions](interfaces/SupportedExtensions.md)
- [TxConfig](interfaces/TxConfig.md)
- [TxCreatorConfig](interfaces/TxCreatorConfig.md)

## Type Aliases

### MetadataEvent

Ƭ **MetadataEvent**<`K`\>: typeof `IPFS_METADATA_EVENTS`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`MetadataType`](enums/MetadataType.md) |

___

### Token

Ƭ **Token**: [`ColonyToken`](classes/ColonyToken.md) \| [`ERC20Token`](classes/ERC20Token.md) \| [`ERC2612Token`](classes/ERC2612Token.md)

## Variables

### ERC20Interface

• `Const` **ERC20Interface**: `TokenERC20Interface`

___

### ERC2612Interface

• `Const` **ERC2612Interface**: `TokenERC2612Interface`

___

### ERC721Interface

• `Const` **ERC721Interface**: `TokenERC721Interface`

___

### ExtensionVersions

• `Const` **ExtensionVersions**: `Object`

Latest versions of all extension contracts

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CoinMachine` | ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` |
| `EvaluatedExpenditure` | ``1`` \| ``2`` \| ``3`` |
| `FundingQueue` | ``1`` \| ``2`` \| ``3`` \| ``4`` |
| `IVotingReputation` | ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` |
| `OneTxPayment` | ``1`` \| ``2`` \| ``3`` \| ``4`` |
| `ReputationBootstrapper` | ``1`` |
| `StakedExpenditure` | ``1`` \| ``2`` |
| `StreamingPayments` | ``1`` \| ``2`` |
| `TokenSupplier` | ``1`` \| ``2`` \| ``3`` \| ``4`` |
| `VotingReputation` | ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` |
| `Whitelist` | ``1`` \| ``2`` \| ``3`` |

## Functions

### addressesAreEqual

▸ **addressesAreEqual**(`a`, `b`): `boolean`

Check if two addresses are equal

Addresses can be displayed using a checksum format which contains uppercase and lowercase characters.
This function can compare addresses in either format

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | Left hand side address |
| `b` | `string` | Right hand side address |

#### Returns

`boolean`

Whether a and b are the same address

___

### getToken

▸ **getToken**(`colonyNetwork`, `address`): `Promise`<[`ERC20Token`](classes/ERC20Token.md)\>

Get a properly instantiated Token contract client

This method tries to auto-detect the type of the token under the given address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colonyNetwork` | [`ColonyNetwork`](classes/ColonyNetwork.md) | A [ColonyNetwork](classes/ColonyNetwork.md) instance |
| `address` | `string` | The token's address |

#### Returns

`Promise`<[`ERC20Token`](classes/ERC20Token.md)\>

A Token contract client

___

### isExtensionCompatible

▸ **isExtensionCompatible**(`extension`, `extensionVersion`, `colonyVersion`): `boolean`

Checks the compatibility of an extension version with a colony version it requests to be installed in
Returns `true` if an extension version is compatible with the given colony version

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extension` | [`Extension`](enums/Extension.md) | A valid `Extension` contract name |
| `extensionVersion` | `ExtensionVersion` | The version of the extension to check against the colony |
| `colonyVersion` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` \| ``11`` \| ``12`` | The version of the colony to check for |

#### Returns

`boolean`

indication whether extension in given version is compatible with colony at the given version

___

### toEth

▸ **toEth**(`num`): `string`

Convert any number to ETH (remove 18 zeros)

**`Example`**

```typescript
import { toEth } from '@colony/sdk';

const oneEther = BigNumber.from("1000000000000000000");
console.log(toEth(oneEther)); // 1.0
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `BigNumberish` |

#### Returns

`string`

___

### toWei

▸ **toWei**(`num`): `BigNumber`

Convert any number to wei (add 18 zeros)

**`Example`**

```typescript
import { toWei } from '@colony/sdk';

const oneEther = '1.0';
console.log(toWei(oneEther)); // { BigNumber: "1000000000000000000" }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `string` |

#### Returns

`BigNumber`

___

### w

▸ **w**(`str`): `BigNumber`

Short-hand method to convert a number to wei using JS tagged template strings

See also here: http://tc39wiki.calculist.org/es6/template-strings/

**`Remarks`**

This is only useful in contexts where the number is hard-coded (e.g. examples)

**`Example`**

```typescript
import { w } from '@colony/sdk';

console.log(w`1.0`); // { BigNumber: "1000000000000000000" }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `TemplateStringsArray` |

#### Returns

`BigNumber`
