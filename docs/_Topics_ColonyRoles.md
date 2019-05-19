---
title: Colony Roles
section: Topics
order: 1
---

In the current implementation of the colonyNetwork smart contracts, certain actions within a colony can only be performed by addresses assigned specific "colony roles".

There are seven colony roles:

1. `RECOVERY`
2. `ROOT`
3. `ARBITRATION` (currently not in use)
4. `ARCHITECTURE`
5. `ARCHITECTURE_SUBDOMAIN`
6. `FUNDING`
7. `ADMINISTRATION`


*Note: In the future, colonyNetwork will support the option to mediate which addresses can perform which actions based on reputation as described in the [White Paper](https://colony.io/whitepaper.pdf).*

## Permissions

The permissions each colony role has for calling client methods are as follows.

### Colony Client

|                                   |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
|-----------------------------------|-----|-----|-----|-----|-----|-----|-----|
| addDomain                         |     |  X  |     |  X  |     |     |     |
| addPayment                        |     |  X  |     |     |     |     |  X  |
| addTask                           |     |  X  |     |     |     |     |  X  |
| approveExitRecovery               |  X  |  X  |     |     |     |     |     |
| bootstrapColony                   |     |  X  |     |     |     |     |     |
| enterRecoveryMode                 |  X  |  X  |     |     |     |     |     |
| exitRecoveryMode                  |  X  |  X  |     |     |     |     |     |
| finalizePayment                   |     |  X  |     |     |     |     |  X  |
| mintTokens                        |     |  X  |     |     |     |     |     |
| moveFundsBetweenPots              |     |  X  |     |     |     |  X  |     |
| registerColonyLabel               |     |  X  |     |     |     |     |     |
| removeRecoveryRole                |     |  X  |     |     |     |     |     |
| setAdministrationRole             |     |  X  |     |     |  X  |     |     |
| setArchitectureRole               |     |  X  |     |     |  X  |     |     |
| setFundingRole                    |     |  X  |     |     |  X  |     |     |
| setPaymentDomain                  |     |  X  |     |     |     |     |  X  |
| setPaymentPayout                  |     |  X  |     |     |     |     |  X  |
| setPaymentRecipient               |     |  X  |     |     |     |     |  X  |
| setPaymentSkill                   |     |  X  |     |     |     |     |  X  |
| setRecoveryRole                   |     |  X  |     |     |     |     |     |
| setRewardInverse                  |     |  X  |     |     |     |     |     |
| setRootRole                       |     |  X  |     |     |     |     |     |
| setStorageSlotRecovery            |  X  |  X  |     |     |     |     |     |
| setToken                          |     |  X  |     |     |     |     |     |
| startNextRewardPayout             |     |  X  |     |     |     |     |     |
| upgrade                           |     |  X  |     |     |     |     |     |

*See [ColonyClient](/colonyjs/api-colonyclient) for more information about each method.*

### Colony Client (Meta Colony)

|                                   |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
|-----------------------------------|-----|-----|-----|-----|-----|-----|-----|
| addGlobalSkill                    |     |  X  |     |     |     |     |     |
| addNetworkColonyVersion           |     |  X  |     |     |     |     |     |
| deprecateGlobalSkill              |     |  X  |     |     |     |     |     |
| setNetworkFeeInverse              |     |  X  |     |     |     |     |     |

*See [ColonyClient](/colonyjs/api-colonyclient) for more information about each method.*

### Colony Network Client

|                                   |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
|-----------------------------------|-----|-----|-----|-----|-----|-----|-----|
| approveExitRecovery               |  X  |  X  |     |     |     |     |     |
| enterRecoveryMode                 |  X  |  X  |     |     |     |     |     |
| exitRecoveryMode                  |  X  |  X  |     |     |     |     |     |
| removeRecoveryRole                |     |  X  |     |     |     |     |     |
| setRecoveryRole                   |     |  X  |     |     |     |     |     |
| setStorageSlotRecovery            |  X  |  X  |     |     |     |     |     |

*See [ColonyNetworkClient](/colonyjs/api-colonynetworkclient) for more information about each method.*

## Managing Permissions

Managing colony roles can be done with an instance of [ColonyClient](/colonyjs/api-colonyclient).

### Recovery Role

Assigning the `RECOVERY` role to an address:

```js

// Set recovery role
await colonyClient.setRecoveryRole.send({
  address: '0x0...',
});

```

Removing the `RECOVERY` role from an address:

```js

// Remove recovery role
await colonyClient.removeRecoveryRole.send({
  address: '0x0...',
});

```

### Root Role

Assigning the `ROOT` role to an address:

```js

// Set root role
await colonyClient.setRootRole.send({
  address: '0x0...',
  setTo: true,
});

```

Removing the `ROOT` role from an address:

```js

// Remove root role
await colonyClient.setRootRole.send({
  address: '0x0...',
  setTo: false,
});

```

### Architecture Roles

Assigning the `ARCHITECTURE` and `ARCHITECTURE_SUBDOMAIN` roles to an address:

```js

// Set architecture role
await colonyClient.setArchitectureRole.send({
  address: '0x0...',
  domainId: 1,
  setTo: true,
});

```

Removing the `ARCHITECTURE` and `ARCHITECTURE_SUBDOMAIN` roles from an address:

```js

// Remove architecture role
await colonyClient.setArchitectureRole.send({
  address: '0x0...',
  domainId: 1,
  setTo: false,
});

```

### Funding Role

Assigning the `FUNDING` role to an address:

```js

// Set funding role
await colonyClient.setFundingRole.send({
  address: '0x0...',
  domainId: 1,
  setTo: true,
});

```

Removing the `FUNDING` role from an address:

```js

// Remove funding role
await colonyClient.setFundingRole.send({
  address: '0x0...',
  domainId: 1,
  setTo: false,
});

```

### Administration Role

Assigning the `ADMINISTRATION` role to an address:

```js

// Set administration role
await colonyClient.setAdministrationRole.send({
  address: '0x0...',
  domainId: 1,
  setTo: true,
});

```

Removing the `ADMINISTRATION` role from an address:

```js

// Remove administration role
await colonyClient.setAdministrationRole.send({
  address: '0x0...',
  domainId: 1,
  setTo: false,
});

```

### Checking Roles

Checking whether an address is assigned a colony role:

```js

// Check colony role
await colonyClient.hasColonyRole.call({
  address: '0x0...',
  domainId: 1,
  role: 'ADMINISTRATION',
});

```
