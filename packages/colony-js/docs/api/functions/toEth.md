[**API**](../README.md)

***

# Function: toEth()

> **toEth**(`num`): `string`

Convert any number to ETH (remove 18 zeros)

## Parameters

### num

`BigNumberish`

## Returns

`string`

## Example

```typescript
import { toEth } from '@colony/sdk';

const oneEther = BigNumber.from("1000000000000000000");
console.log(toEth(oneEther)); // 1.0
```
