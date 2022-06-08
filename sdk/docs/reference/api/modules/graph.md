[Colony SDK 🚀](../README.md) / [Modules](../modules.md) / graph

# Module: graph

## Table of contents

### Variables

- [colonySubgraph](graph.md#colonysubgraph)

### Functions

- [gql](graph.md#gql)

## Variables

### colonySubgraph

• `Const` **colonySubgraph**: `Client`

The Colony Subgraph client

The Colony Subgraph client is nothing else than a ready-to-use [`urql`](https://formidable.com/open-source/urql/) client connected to the Colony Subgraph with subscriptions enabled. Please refer to the following references if you'd like to know more about [The Graph](https://thegraph.com/) or [GraphQL](https://graphql.org/) in general.

The Colony Subgraph's schema and resolvers are kept up-to-date by the Colony team and can be explored here: https://thegraph.com/hosted-service/subgraph/joincolony/colony-xdai. There you can make test queries to the Colony Subgraph and explore it all the way down the rabbit hole :)

**`example`**
Retrieve the 10 most recent "DomainAdded" events across all Colonies
```typescript
import { colonySubgraph, gql } from '@colony/sdk/graph';
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

## Functions

### gql

▸ **gql**<`Data`, `Variables`\>(`strings`, ...`interpolations`): `TypedDocumentNode`<`Data`, `Variables`\>

The `gql` interpolation function

This is just the passed-down [`gql`](https://formidable.com/open-source/urql/docs/api/core/#gql) function from `urlq`. This function is used to parse GraphQL queries as strings and create query objects the GraphQL client can process. Please check out it's documentation to get to know more.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | `any` |
| `Variables` | `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | `TemplateStringsArray` |
| `...interpolations` | (`string` \| `TypedDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> \| `DocumentNode`)[] |

#### Returns

`TypedDocumentNode`<`Data`, `Variables`\>

▸ **gql**<`Data`, `Variables`\>(`string`): `TypedDocumentNode`<`Data`, `Variables`\>

The `gql` interpolation function

This is just the passed-down [`gql`](https://formidable.com/open-source/urql/docs/api/core/#gql) function from `urlq`. This function is used to parse GraphQL queries as strings and create query objects the GraphQL client can process. Please check out it's documentation to get to know more.

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
