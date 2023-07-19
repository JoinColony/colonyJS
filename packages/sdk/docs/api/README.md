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
- [IpfsMetadata](classes/IpfsMetadata.md)
- [MetaTxCreator](classes/MetaTxCreator.md)
- [OneTxPayment](classes/OneTxPayment.md)
- [PinataAdapter](classes/PinataAdapter.md)
- [ReputationClient](classes/ReputationClient.md)
- [TokenLocking](classes/TokenLocking.md)
- [TxCreator](classes/TxCreator.md)
- [VotingReputation](classes/VotingReputation.md)

## Interfaces

- [AnnotationData](interfaces/AnnotationData.md)
- [BaseContract](interfaces/BaseContract.md)
- [ColonyData](interfaces/ColonyData.md)
- [ColonyEvent](interfaces/ColonyEvent.md)
- [ColonyEventManagerOptions](interfaces/ColonyEventManagerOptions.md)
- [ColonyFilter](interfaces/ColonyFilter.md)
- [ColonyMetaTransaction](interfaces/ColonyMetaTransaction.md)
- [ColonyMultiFilter](interfaces/ColonyMultiFilter.md)
- [ColonyNetworkOptions](interfaces/ColonyNetworkOptions.md)
- [ColonyTopic](interfaces/ColonyTopic.md)
- [ColonyTransaction](interfaces/ColonyTransaction.md)
- [ContractReceipt](interfaces/ContractReceipt.md)
- [ContractTransaction](interfaces/ContractTransaction.md)
- [DecisionData](interfaces/DecisionData.md)
- [DomainData](interfaces/DomainData.md)
- [Ethers6Filter](interfaces/Ethers6Filter.md)
- [Ethers6FilterByBlockHash](interfaces/Ethers6FilterByBlockHash.md)
- [EventData](interfaces/EventData.md)
- [IpfsAdapter](interfaces/IpfsAdapter.md)
- [MetaTxBaseContract](interfaces/MetaTxBaseContract.md)
- [ParsedLogTransactionReceipt](interfaces/ParsedLogTransactionReceipt.md)
- [PermissionConfig](interfaces/PermissionConfig.md)
- [SafeInfo](interfaces/SafeInfo.md)
- [SupportedExtensions](interfaces/SupportedExtensions.md)
- [TokenData](interfaces/TokenData.md)
- [TransactionResponse](interfaces/TransactionResponse.md)
- [TxConfig](interfaces/TxConfig.md)
- [TxCreatorConfig](interfaces/TxCreatorConfig.md)

## Type Aliases

### Domain

Ƭ **Domain**: `ColonyDataTypes10.DomainStructOutput` \| `ColonyDataTypes11.DomainStructOutput` \| `ColonyDataTypes12.DomainStructOutput`

___

### EventSource

Ƭ **EventSource**: `BaseContract`

A valid eventsource (currently just an ethers.js [BaseContract](interfaces/BaseContract.md))

___

### Metadata

Ƭ **Metadata**: `AnnotationMetadata` \| `ColonyMetadata` \| `DecisionMetadata` \| `DomainMetadata` \| `MiscMetadata`

___

### MetadataEvent

Ƭ **MetadataEvent**<`K`\>: typeof [`IpfsMetadataEvents`](README.md#ipfsmetadataevents)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`MetadataType`](enums/MetadataType.md) |

___

### Motion

Ƭ **Motion**: `VotingReputationDataTypes7.MotionStructOutput` \| `VotingReputationDataTypes8.MotionStructOutput` \| `VotingReputationDataTypes9.MotionStructOutput`

___

### SignerOrProvider

Ƭ **SignerOrProvider**: `Signer` \| `Provider`

___

### SupportedColonyContract

Ƭ **SupportedColonyContract**: `ColonyContract11` \| `ColonyContract12` \| `ColonyContract13`

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
| `CoinMachine` | ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` |
| `EvaluatedExpenditure` | ``1`` \| ``2`` \| ``3`` \| ``4`` |
| `FundingQueue` | ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` |
| `IVotingReputation` | ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` |
| `OneTxPayment` | ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` |
| `ReputationBootstrapper` | ``1`` \| ``2`` |
| `StakedExpenditure` | ``1`` \| ``2`` \| ``3`` |
| `StreamingPayments` | ``1`` \| ``2`` |
| `TokenSupplier` | ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` |
| `VotingReputation` | ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` |
| `Whitelist` | ``1`` \| ``2`` \| ``3`` \| ``4`` |

___

### IpfsMetadataEvents

• `Const` **IpfsMetadataEvents**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `annotation` | ``"Annotation(address,bytes32,string)"`` |
| `colony` | ``"ColonyMetadata(address,string)"`` |
| `decision` | ``"Annotation(address,bytes32,string)"`` |
| `default` | ``""`` |
| `domain` | ``"DomainMetadata(address,uint256,string)"`` |
| `misc` | ``""`` |

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
| `colonyVersion` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` \| ``11`` \| ``12`` \| ``13`` | The version of the colony to check for |

#### Returns

`boolean`

indication whether extension in given version is compatible with colony at the given version

___

### parseLogs

▸ **parseLogs**(`logs`, `iface`): `LogDescription`[]

Try to parse an array of logs with a given interface

Will filter out logs that can't be parsed with the given interface

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `logs` | `Log`[] | Array of log entries (usually from a [ContractReceipt](interfaces/ContractReceipt.md)) |
| `iface` | `Interface` | Ethers compatible contract interface |

#### Returns

`LogDescription`[]

A list of parsed log entries (events)

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
