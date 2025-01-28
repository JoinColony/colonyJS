# Function: getPermissionProofs()

> **getPermissionProofs**(`network`, `colony`, `domainId`, `roles`, `customAddress`?): `Promise`\<\[`BigNumber`, `BigNumber`, `string`\]\>

Get the permission proofs for a user address and a certain role

Certain methods on Colony contracts require so called "permission proofs". These are made up by
the `permissionDomainId` and the `childSkillIndex`. We shall attempt an explanation here.

Domains within a colony can be nested and all the permissions in a parent domain apply for all child domains.
Yet at the time of calling a domain-permissioned method the contracts are unaware of the parent domain
a certain user has the required permission in. So when we these methods are called we have to supply them
the id of the parent domain the user has the permission in (it could also be the very same domain id they
want to act in!). Furthermore for the contracts the unidirectional chain downwards we have to supply
the method wuth the index of the domains associated skill in its parents children array
(`childSkillIndex`, see [[`getChildIndex`]]).
The contracts are then able to verify the permissions (the role) claimed by the caller.

tl;dr:

* `permissionDomainId`: id of the parent domain of the required domain the user has the required permission in
* `childSkillIndex`: the child index for a domain inside its corresponding skills parent children array

## Parameters

### network

`CommonNetwork`

### colony

[`CommonColony`](../interfaces/CommonColony.md)

### domainId

`BigNumberish`

Domain id the method needs to act in

### roles

Permissioning role(s) that the methods needs to function

[`ColonyRole`](../enumerations/ColonyRole.md) | [`ColonyRole`](../enumerations/ColonyRole.md)[]

### customAddress?

`string`

A custom address to get the permission proofs for (defaults to the signer's address)

## Returns

`Promise`\<\[`BigNumber`, `BigNumber`, `string`\]\>

Tuple of `[permissionDomainId, childSkillIndex, permissionAddress]`
