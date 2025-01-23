[**API**](../README.md)

***

# Function: w()

> **w**(`str`): `BigNumber`

Short-hand method to convert a number to wei using JS tagged template strings

See also here: http://tc39wiki.calculist.org/es6/template-strings/

## Parameters

### str

`TemplateStringsArray`

## Returns

`BigNumber`

## Remarks

This is only useful in contexts where the number is hard-coded (e.g. examples)

## Example

```typescript
import { w } from '@colony/sdk';

console.log(w`1.0`); // { BigNumber: "1000000000000000000" }
```
