[**API**](../README.md)

***

# Function: getPotDomain()

> **getPotDomain**(`colony`, `potId`): `Promise`\<`BigNumberish`\>

Get the associated domain for a pot id

## Parameters

### colony

[`CommonColony`](../interfaces/CommonColony.md)

### potId

`BigNumberish`

The funding pot id

## Returns

`Promise`\<`BigNumberish`\>

The associated domainId

## Remarks

pots can be associated with different types, like domains, payments or tasks
See [[`FundingPotAssociatedType`]] for details
