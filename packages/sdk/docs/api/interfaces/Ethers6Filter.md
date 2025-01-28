# Interface: Ethers6Filter

Ethers 6 supports mulitple addresses in a filter. Until then we have this

## Extends

- `Omit`\<`Filter`, `"address"`\>

## Extended by

- [`ColonyFilter`](ColonyFilter.md)

## Properties

### address?

> `optional` **address**: `string` \| `string`[]

***

### fromBlock?

> `optional` **fromBlock**: `BlockTag`

#### Inherited from

`Omit.fromBlock`

***

### toBlock?

> `optional` **toBlock**: `BlockTag`

#### Inherited from

`Omit.toBlock`

***

### topics?

> `optional` **topics**: (`null` \| `string` \| `string`[])[]

#### Inherited from

`Omit.topics`
