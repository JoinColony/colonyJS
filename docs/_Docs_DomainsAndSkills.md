---
title: Domains and Skills
section: Docs
order: 4
---

As demonstrated in [Task Lifecycle](/colonyjs/docs-task-lifecycle/), a task must be assigned a domain. The domain is required when creating a task because reputation is earned within the context of domains. Upon the completion of a task, each role (assuming that the `MANAGER` and `WORKER` both received adequate ratings) will earn reputation within the domain that the task was assigned.

We also have the option of assigning a skill to our task. When completing a task that is assigned a skill, reputation is also earned within the context of that skill (in addition to the reputation earned within the context of the assigned domain). Skills are "global", meaning they are shared across the Colony Network.

Another way of looking at domains would be thinking of them as "local skills". This would be an oversimplification because each domain has a pot associated with it, which is used to receive and allocate funds to tasks that have been assigned to that domain, but domains can be thought of as "local skills" in the sense that reputation is earned within the context of domains like "skills".

Domains and skills can also have "sub-domains" and "sub-skills". When reputation is earned within a "sub-domain" or "sub-skill", reputation is also earned within the "parent domain" or "parent skill". As a matter of fact, each domain is already a "sub-domain" because the "parent domain" is the colony itself, also known as the "root domain".

Let's take a closer look at how to create and manage domains and skills using colonyJS. For more information about domains and skills, you can also check out [Domains and Skills](/colonynetwork/docs-domains-and-skills/) in the colonyNetwork documentation.

## Domains

In order to create a domain within a colony, you must be an `ADMIN` within the colony (in the future, this will either be based on reputation or a colony will have the option of making it based on reputation).

Creating a domain is simple using an instance of the [ColonyClient](/colonyjs/api-colonyclient):

```js

// Create a domain
await colonyClient.addDomain.send({ parentDomainId });

```

All domains that you create within a colony must have a "parent domain" assigned to it. If you are creating a domain for the first time, the `parentDomainId` will need to be `1` because the colony only has one domain, the "root domain".

## Skills

Remember, skills are "global", meaning they are shared across the Colony Network, therefore, the action of creating a new skill is only allowed by the `FOUNDER` of the [Meta Colony](/colonynetwork/docs-the-meta-colony-and-clny).

Creating a skill is simple using an instance of the [MetaColonyClient](/colonyjs/api-metacolonyclient):

```js

// Create a skill
await metaColonyClient.addGlobalSkill.send({ parentSkillId });

```

When you are creating a skill for the first time, you will need to set the `parentSkillId` to be `1` because the network only has one skill, the "root skill". Unlike how tasks can be assigned to the "root domain", tasks cannot be assigned to the "root skill".

### Parent Skill

Looking up the parent skill of a global skill is simple:

```js

await networkClient.getParentSkillId.call({
  skillId,
  parentSkillIndex,
});

```

The `parentSkillIndex` is the index of the parent skill in the array of parent skills associated with the given skill.

### Child Skill

Looking up the child skill of a global skill is simple:

```js

await networkClient.getParentSkillId.call({
  skillId,
  childSkillIndex,
});

```

The `childSkillIndex` is the index of the child skill in the array of child skills associated with the given skill.

*Note: It is not possible to look up the parent or child skill of a domain using the same methods introduced here. Even though domains have a `skillId` associated with them, they do not exist within the "skill tree", which only includes global skills.*
