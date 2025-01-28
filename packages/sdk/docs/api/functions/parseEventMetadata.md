# Function: parseEventMetadata()

> **parseEventMetadata**\<`T`\>(`input`, `type`?): [`MetadataTypeMap`](../interfaces/MetadataTypeMap.md)\[`T`\]

Parses and validates event metadata

This will check the validity of an event metadata object.
You can pass in an optional type if you know what to expect.
It will also do a data version check.

If you don't know what the output will be you can use TypeScript's
Discriminated Unions to guard the correct types (see example).

## Type Parameters

• **T** *extends* [`MetadataType`](../enumerations/MetadataType.md) = [`DEFAULT`](../enumerations/MetadataType.md#default)

## Parameters

### input

`object`

JavaScript object (parsed, from IPFS)

### type?

`T`

Optional MetadataType to check against

## Returns

[`MetadataTypeMap`](../interfaces/MetadataTypeMap.md)\[`T`\]

The validated Metadata.

## Example

```typescript
import { parseEventMetadata, MetadataType } from '@colony/event-metadata';

// Get `input` from IPFS or other sources.

const result = parseEventMetadata(input);

if (result.type === MetadataType.Domain) {
  // Type is DomainMetadata
  console.log(result.data.domainName);
}
```
