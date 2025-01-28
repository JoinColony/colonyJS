# Function: colonyRoles2Hex()

> **colonyRoles2Hex**(`roles`): `string`

Converts Colony Roles to hex. Result is a binary number where the bits are one and the place of the role index. Then converted to hexadecimal, then padded with zeros to a lenghtof 64

## Parameters

### roles

[`ColonyRole`](../enumerations/ColonyRole.md)[]

An array of Colony roles

## Returns

`string`

A hexadecimal string

## Example

```typescript
// Binary representation: 0b000101010
const roles = colonyRoles2Hex([ColonyRole.Root, ColonyRole.Architecture, ColonyRole.Funding]); // '0x000000000000000000000000000000000000000000000000000000000000002a'
```
