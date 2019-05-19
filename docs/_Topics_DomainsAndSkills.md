---
title: Domains and Skills
section: Topics
order: 3
---

Domains and skills are concepts that define a colony's organizational structure in a decentralized context, allowing for the division of labor without a strict management hierarchy. Within a colony, reputation is rewarded within the context of domains and skills, therefore, adding payments and tasks will require a domain assignment and include an optional skill assignment.

Domains are a structure for compartmentalizing the work and shared resources of a colony into smaller, more specialized sub-groups which are analogous to the departments of a traditional company. Skills are a similar structure that categorize the type of work done, independent of the domain or colony in which the work took place.

For more information, see [Domains and Skills](/colonynetwork/whitepaper-tldr-domains-and-skills) in the colonyNetwork documentation.

## Domain Methods

### Add Domain

You can add a domain using an instance of [ColonyClient](/colonyjs/api-colonyclient):

```js

// Add a domain
await colonyClient.addDomain.send({
  parentDomainId: 1,
});

```

*Note: You must be assigned the `ROOT` or `ARCHITECTURE` role to call this method.*

### Get Domain

You can get information about a domain using an instance of [ColonyClient](/colonyjs/api-colonyclient):

```js

// Get domain info
await colonyClient.getDomain.call({
  domainId: 1,
});

```

### Get Domain Count

You can get the total number of domains within a colony using an instance of [ColonyClient](/colonyjs/api-colonyclient):

```js

// Get domain count
await colonyClient.getDomainCount.call();

```

## Skill Methods

### Add Skill

You can add a skill using an instance of [ColonyClient](/colonyjs/api-colonyclient) for the Meta Colony:

```js

// Add a global skill
await metaColonyClient.addGlobalSkill.send();

```

*Note: You must be assigned the `ROOT` role within the Meta Colony to call this method.*

Alternatively, you can add a skill using an instance of [ColonyNetworkClient](/colonyjs/api-colonynetworkclient):

```js

// Add a skill
await networkClient.addSkill.send();

```

*Note: You must be assigned the `ROOT` role within the Meta Colony to call this method.*

### Deprecate Skill

You can deprecate a skill using an instance of [ColonyNetworkClient](/colonyjs/api-colonynetworkclient):

```js

// Deprecate a skill
await networkClient.deprecateSkill.send({
  skillId: 1,
});

```

*Note: You must be assigned the `ROOT` role within the Meta Colony to call this method.*

### Get Skill

You can get information about a domain using an instance of [ColonyNetworkClient](/colonyjs/api-colonynetworkclient):

```js

// Get skill info
await networkClient.getSkill.call({
  skillId: 1,
});

```
