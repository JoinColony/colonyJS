[**API**](../README.md)

***

# Function: toWei()

> **toWei**(`num`): `BigNumber`

Convert any number to wei (add 18 zeros)

## Parameters

### num

`string`

## Returns

`BigNumber`

## Example

```typescript
import { toWei } from '@colony/sdk';

const oneEther = '1.0';
console.log(toWei(oneEther)); // { BigNumber: "1000000000000000000" }
```
