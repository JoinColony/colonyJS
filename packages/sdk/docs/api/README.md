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
- [SupportedExtension](enums/SupportedExtension.md)
- [TeamColor](enums/TeamColor.md)
- [Vote](enums/Vote.md)

## Classes

- [CloudflareReadonlyAdapter](classes/CloudflareReadonlyAdapter.md)
- [Colony](classes/Colony.md)
- [ColonyEventManager](classes/ColonyEventManager.md)
- [ColonyGraph](classes/ColonyGraph.md)
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

- [AnnotationMetadata](interfaces/AnnotationMetadata.md)
- [BaseContract](interfaces/BaseContract.md)
- [ColonyEvent](interfaces/ColonyEvent.md)
- [ColonyEventManagerOptions](interfaces/ColonyEventManagerOptions.md)
- [ColonyFilter](interfaces/ColonyFilter.md)
- [ColonyMetadata](interfaces/ColonyMetadata.md)
- [ColonyMultiFilter](interfaces/ColonyMultiFilter.md)
- [ColonyNetworkOptions](interfaces/ColonyNetworkOptions.md)
- [ColonyTopic](interfaces/ColonyTopic.md)
- [DecisionMetadata](interfaces/DecisionMetadata.md)
- [DomainMetadata](interfaces/DomainMetadata.md)
- [Ethers6Filter](interfaces/Ethers6Filter.md)
- [Ethers6FilterByBlockHash](interfaces/Ethers6FilterByBlockHash.md)
- [EventSources](interfaces/EventSources.md)
- [GraphDomain](interfaces/GraphDomain.md)
- [IpfsAdapter](interfaces/IpfsAdapter.md)
- [MetaTxBaseContract](interfaces/MetaTxBaseContract.md)
- [ParsedLogTransactionReceipt](interfaces/ParsedLogTransactionReceipt.md)
- [PermissionConfig](interfaces/PermissionConfig.md)
- [SubgraphClientOptions](interfaces/SubgraphClientOptions.md)
- [SupportedExtensions](interfaces/SupportedExtensions.md)
- [TxConfig](interfaces/TxConfig.md)
- [TxCreatorConfig](interfaces/TxCreatorConfig.md)

## Type Aliases

### EventSource

Ƭ **EventSource**: [`EventSources`](interfaces/EventSources.md)[keyof [`EventSources`](interfaces/EventSources.md)]

An EventSource is essentially an _ethers_ contract, that we can keep track of

___

### MetadataEvent

Ƭ **MetadataEvent**<`K`\>: typeof `IPFS_METADATA_EVENTS`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`MetadataType`](enums/MetadataType.md) |

___

### MetadataValue

Ƭ **MetadataValue**<`K`\>: `ReturnType`<typeof `IPFS_METADATA_PARSERS`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`MetadataType`](enums/MetadataType.md) |

___

### Token

Ƭ **Token**: [`ColonyToken`](classes/ColonyToken.md) \| [`ERC20Token`](classes/ERC20Token.md) \| [`ERC2612Token`](classes/ERC2612Token.md)

## Variables

### ExtensionVersions

• `Const` **ExtensionVersions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CoinMachine` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` |
| `EvaluatedExpenditure` | ``2`` \| ``1`` \| ``3`` |
| `FundingQueue` | ``2`` \| ``1`` \| ``3`` \| ``4`` |
| `IVotingReputation` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``8`` \| ``5`` \| ``6`` \| ``7`` |
| `OneTxPayment` | ``2`` \| ``1`` \| ``3`` \| ``4`` |
| `ReputationBootstrapper` | ``1`` |
| `StakedExpenditure` | ``2`` \| ``1`` |
| `StreamingPayments` | ``2`` \| ``1`` |
| `TokenSupplier` | ``2`` \| ``1`` \| ``3`` \| ``4`` |
| `VotingReputation` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``8`` \| ``5`` \| ``6`` \| ``7`` |
| `Whitelist` | ``2`` \| ``1`` \| ``3`` |

## Functions

### addressesAreEqual

▸ **addressesAreEqual**(`a`, `b`): `boolean`

Check if two addresses are equal

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `string` |

#### Returns

`boolean`

___

### createSubgraphClient

▸ **createSubgraphClient**(`options?`): `Client`

Creates a Colony Subgraph client

The Colony Subgraph client is nothing else than a ready-to-use [`urql`](https://formidable.com/open-source/urql/) client connected to the Colony Subgraph with subscriptions enabled. Please refer to the following references if you'd like to know more about [The Graph](https://thegraph.com/) or [GraphQL](https://graphql.org/) in general.

The Colony Subgraph's schema and resolvers are kept up-to-date by the Colony team and can be explored here: [Colony Subgraph](https://thegraph.com/hosted-service/subgraph/joincolony/colony-xdai). There you can make test queries to the Colony Subgraph and explore it all the way down the rabbit hole :)

**`Example`**

Retrieve the 10 most recent "DomainAdded" events across all Colonies
```typescript
import { createSubgraphClient, gql } from '@colony/sdk/graph';

const colonySubgraph = createSubgraphClient();

const QUERY = gql`
  query DomainAddedEvents {
    events(
      first: 10
      orderBy: timestamp
      orderDirection: desc
      where: { name_contains: "DomainAdded" }
    ) {
      id
      address
      associatedColony {
        colonyAddress: id
      }
      name
      args
      timestamp
    }
  }
`;

colonySubgraph
  .query(QUERY)
  .toPromise()
  .then((result) => {
    console.info(result.data.events[0]);
  });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`SubgraphClientOptions`](interfaces/SubgraphClientOptions.md) | Define configuration options to instantiate the client with |

#### Returns

`Client`

A ready-to-use `urql` GraphQL client instance

___

### getToken

▸ **getToken**(`colonyNetwork`, `address`): `Promise`<[`ERC20Token`](classes/ERC20Token.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `colonyNetwork` | [`ColonyNetwork`](classes/ColonyNetwork.md) |
| `address` | `string` |

#### Returns

`Promise`<[`ERC20Token`](classes/ERC20Token.md)\>

___

### gql

▸ **gql**<`Data`, `Variables`\>(`strings`, ...`interpolations`): `TypedDocumentNode`<`Data`, `Variables`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | `any` |
| `Variables` | `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | `TemplateStringsArray` |
| `...interpolations` | (`string` \| `DocumentNode` \| `TypedDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\>)[] |

#### Returns

`TypedDocumentNode`<`Data`, `Variables`\>

▸ **gql**<`Data`, `Variables`\>(`string`): `TypedDocumentNode`<`Data`, `Variables`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | `any` |
| `Variables` | `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`TypedDocumentNode`<`Data`, `Variables`\>

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
