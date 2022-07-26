# Module: utils

## Functions

### ▸ **addressesAreEqual**(`a`, `b`): `boolean`

Check if two addresses are equal

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `string` |

#### Returns

`boolean`

### ▸ **extractEvent**<`T`\>(`eventName`, `receipt`): `undefined` \| `T`

Extract event args from a contract receipt

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `receipt` | `ContractReceipt` |

#### Returns

`undefined` \| `T`

### ▸ **getLogs**(`filter`, `provider`): `Promise`<`Log`[]\>

Version of `getLogs` that also supports filtering for multiple addresses

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`Ethers6Filter`](../interfaces/types.Ethers6Filter.md) \| [`Ethers6FilterByBlockHash`](../interfaces/types.Ethers6FilterByBlockHash.md) \| `Promise`<[`Ethers6Filter`](../interfaces/types.Ethers6Filter.md) \| [`Ethers6FilterByBlockHash`](../interfaces/types.Ethers6FilterByBlockHash.md)\> |
| `provider` | `JsonRpcProvider` |

#### Returns

`Promise`<`Log`[]\>

### ▸ **nonNullable**<`T`\>(`value`): value is NonNullable<T\>

Use this to filter empty undefinied values from arrays in a type-safe way

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

value is NonNullable<T\>

### ▸ **toEth**(`num`): `string`

Convert any number to ETH (remove 18 zeros)

**`Example`**

```typescript
import { toEth } from '@colony/sdk';

const oneEther = BigNumber.from("1000000000000000000");
console.log(toEth(oneEther)); // 1.0
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `BigNumberish` |

#### Returns

`string`

### ▸ **toWei**(`num`): `BigNumber`

Convert any number to wei (add 18 zeros)

**`Example`**

```typescript
import { toWei } from '@colony/sdk';

const oneEther = '1.0';
console.log(toWei(oneEther)); // { BigNumber: "1000000000000000000" }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `string` |

#### Returns

`BigNumber`

### ▸ **w**(`str`): `BigNumber`

Short-hand method to convert a number to wei using JS tagged template strings

See also here: http://tc39wiki.calculist.org/es6/template-strings/

**`Remarks`**

This is only useful in contexts where the number is hard-coded (e.g. examples)

**`Example`**

```typescript
import { w } from '@colony/sdk';

console.log(w`1.0`); // { BigNumber: "1000000000000000000" }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string`[] |

#### Returns

`BigNumber`
