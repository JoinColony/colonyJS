# Function: hex2ColonyRoles()

> **hex2ColonyRoles**(`hexStr`): [`ColonyRole`](../enumerations/ColonyRole.md)[]

Converts a role hex string (typically returned by a Colony contract) to Colony Roles.

## Parameters

### hexStr

`string`

A (probably padded) hexadecimal string

## Returns

[`ColonyRole`](../enumerations/ColonyRole.md)[]

An array of Colony roles

## Example

```typescript
// Binary representation: 0b000101010
const roles = hex2ColonyRoles('0x2a'); // [1, 3, 5]
```
