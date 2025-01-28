# Function: createMetadataFor()

> **createMetadataFor**\<`T`\>(`type`, `data`): [`MetadataTypeMap`](../interfaces/MetadataTypeMap.md)\[`T`\]

Create a valid Metadata object.

Validates the input.

## Type Parameters

• **T** *extends* [`MetadataType`](../enumerations/MetadataType.md)

## Parameters

### type

`T`

The metadata type

### data

[`DataTypeMap`](../interfaces/DataTypeMap.md)\[`T`\]

The actual data for the generated metadata object

## Returns

[`MetadataTypeMap`](../interfaces/MetadataTypeMap.md)\[`T`\]

The version number of the metadata

## Example

```typescript
import { createMetadataFor, MetadataType } from '@colony/event-metadata';

const result = createMetadataFor(MetadataType.Domain, {
  domainName: 'Cool team',
});

console.log(result.version); // 2
console.log(result.name); // 'domain'
console.log(result.data.domainName); // 'Cool team'
```
