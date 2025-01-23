[**API**](../README.md)

***

# Function: formatColonyRoles()

> **formatColonyRoles**(`roleSetEvents`, `recoveryRoleSetEvents`): `Promise`\<[`ColonyRoles`](../type-aliases/ColonyRoles.md)\>

Format role events into an Array of all roles in the colony

E.g.:
```typescript
[{
 address: 0x5346D0f80e2816FaD329F2c140c870ffc3c3E2Ef // user address
 domains: [{                                         // all domains the user has a role in
   domainId: 1,                                      // domainId for the roles
   roles: [1, 2, 3]                                  // Array of `ColonyRole`
 }]
}]
```

## Parameters

### roleSetEvents

`LogDescription`[]

### recoveryRoleSetEvents

`LogDescription`[]

## Returns

`Promise`\<[`ColonyRoles`](../type-aliases/ColonyRoles.md)\>
