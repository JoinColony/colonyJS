# Class: ColonyGraph

## Constructors

### constructor

• **new ColonyGraph**(`colony`)

Do not instantiate manually. Use the `graph` property on a Colony to access this class

#### Parameters

| Name | Type |
| :------ | :------ |
| `colony` | [`Colony`](Colony.md) |

## Methods

### getTeamsWithMetadata

▸ **getTeamsWithMetadata**(): `Promise`<``null`` \| [`GraphDomain`](../interfaces/GraphDomain.md)[]\>

Fetch all teams of a Colony including their Metadata

**`Deprecated`**

- will be replaced when new Colony GraphQL server is public

This queries the Colony graph database for all teams including their metadata. The metadata is fetched from IPFS

#### Returns

`Promise`<``null`` \| [`GraphDomain`](../interfaces/GraphDomain.md)[]\>
