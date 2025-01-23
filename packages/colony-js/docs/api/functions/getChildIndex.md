[**API**](../README.md)

***

# Function: getChildIndex()

> **getChildIndex**(`network`, `colony`, `parentDomainId`, `domainId`): `Promise`\<`BigNumber`\>

Get the child index for a domain inside its corresponding skills parent children array

E.g. (the values *will* differ for you!):
domainId = 1
corresponding skillId = 2
parent of skillId 2:
```
{
 // ...
 children: [2]
}
```
childSkillIndex would be 0 in this case (0-position in children array)

## Parameters

### network

`CommonNetwork`

A ColonyNetwork contract

### colony

[`CommonColony`](../interfaces/CommonColony.md)

A Colony contract

### parentDomainId

`BigNumberish`

id of parent domain

### domainId

`BigNumberish`

id of the domain

## Returns

`Promise`\<`BigNumber`\>

Index in the `children` array (see above)
