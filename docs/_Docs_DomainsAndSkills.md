---
title: Domains and Skills
section: Docs
order: 4
---

As demonstrated in [Task Lifecycle](/colonyjs/docs-task-lifecycle/), a task must be assigned a domain. The domain is required when creating a task because reputation is earned within the context of domains. Upon the completion of a task, each role (assuming the manager and worker both received adequate ratings) will earn reputation within the domain that the task was assigned.

We also have the option of assigning a skill to our task. When completing a task that is assigned a skill, reputation is earned within the context of that skill. Skills are "global", meaning they are shared across the Colony Network, whereas domains are "local", meaning they only exist within the context of a colony.

Another way of looking at domains would be thinking of them as "local skills". This would be an oversimplification because each domain has a pot associated with it, which is used to receive and allocate funds to tasks that have been assigned to that domain, but the idea is that domains are "local" and reputation is earned within the context of domains like "skills".

Domains and skills can also have "sub-domains" and "sub-skills". When reputation is earned within a "sub-domain" or "sub-skill", reputation is also earned within the parent domains or parent skills. As a matter of fact, domains are already "sub-domains" because the parent domain is the colony itself, also known as the "root domain". When reputation is earned within a domain, reputation is also earned within the colony.

Let's take a closer look at how to create and manage domains and skills within colonyJS. For more information about domains and skills, you can also check out [Domains and Skills](/colonynetwork/docs-domains-and-skills/) in the Colony Network documentation.

==TOC==

## Domains

In order to create a domain within a colony, you must be an admin within the colony (in the future, this will either be based on reputation or a colony will have the option of making it based on reputation).

Creating a domain is simple using the [ColonyClient](/colonyjs/api-colonyclient).

```js

// Create a domain
await colonyClient.addDomain.send({
  parentDomainId,
});

```

All domains that you create within a colony must have a parent domain. If you are creating a domain for the first time, the `parentDomainId` must be `1` because the colony only has one domain, the "root domain", which represents the colony itself.

## Skills

Remember, skills are "global", meaning they are shared across the Colony Network, therefore, the action of creating a new skill is only allowed by the owners of the [Meta Colony](/colonynetwork/docs-the-meta-colony-and-clny).

Creating a skill is simple using the [MetaColonyClient](/colonyjs/api-metacolonyclient).

```js

// Create a skill
await metaColonyClient.addGlobalSkill.send({
  parentSkillId,
});

```

When you are creating a skill for the first time, you will need to set the `parentSkillId` to be `1` because the network only has one skill, the "root skill". Unlike how tasks can be assigned to the "root domain", tasks cannot be assigned to the "root skill".
