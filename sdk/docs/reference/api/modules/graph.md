# Module: graph

## Interfaces

- [SubgraphClientOptions](../interfaces/graph.SubgraphClientOptions.md)

## Functions

### ▸ **createSubgraphClient**(`options?`): `Client`

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
| `options?` | [`SubgraphClientOptions`](../interfaces/graph.SubgraphClientOptions.md) | Define configuration options to instantiate the client with |

#### Returns

`Client`

A ready-to-use `urql` GraphQL client instance

### ▸ **gql**<`Data`, `Variables`\>(`strings`, ...`interpolations`): `TypedDocumentNode`<`Data`, `Variables`\>

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

### ▸ **gql**<`Data`, `Variables`\>(`string`): `TypedDocumentNode`<`Data`, `Variables`\>

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
