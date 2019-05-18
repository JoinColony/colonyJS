---
title: Task Lifecycle
section: Topics
order: 4
---

One of the most useful abstractions within a colony is a task. Tasks are used to coordinate work and reward colony contributors with tokens and reputation. See [Tasks](/colonynetwork/docs-tasks/) as described in the colonyNetwork documentation for a complete description of what tasks are and how they function within a colony.

==TOC==

## Task Roles

There are three "task roles" that can be assigned to a task: `MANAGER`, `EVALUATOR`, and `WORKER`.

Each "task role" has permissions for calling and approving actions associated with the task. Actions that modify a task require approval from two "task roles" if those roles have already been assigned within the given task (see [Modify Task](/#modify-task) for more information).

### Permissions

|                          | Manager | Evaluator | Worker | Other                                        |
|--------------------------|---------|-----------|--------|----------------------------------------------|
| addTask                  |         |           |        | X (`ROOT` or `ADMINISTRATION`)               |
| cancelTask               | *       |           | *      |                                              |
| setTaskBrief             | *       |           | *      |                                              |
| setTaskDomain            | *       |           | *      |                                              |
| setTaskSkill             | *       |           | *      |                                              |
| setTaskDueDate           | *       |           | *      |                                              |
| setTaskManagerPayout     | *       |           | *      |                                              |
| setTaskEvaluatorPayout   | *       | *         |        |                                              |
| setTaskWorkerPayout      | *       |           | *      |                                              |
| setTaskManagerRole       | *       |           |        | * new `MANAGER` (`ROOT` or `ADMINISTRATION`) |
| setTaskEvaluatorRole     | *       |           |        | * new `EVALUATOR`                            |
| setTaskWorkerRole        | *       |           |        | * new `WORKER`                               |
| removeTaskWorkerRole     | *       |           | *      |                                              |
| removeTaskEvaluatorRole  | *       | *         |        |                                              |
| submitTaskDeliverable    |         |           | X      |                                              |
| submitTaskWorkRating     | X       | X         | X      |                                              |
| revealTaskWorkRating     | X       | X         | X      |                                              |
| claimPayout              | X       | X         | X      |                                              |
| finalizeTask             |         |           |        |                                              |

( X ) - Only this role can call the method. If there is no "X", any address can call the method.  
( * ) - If the task has been assigned to this role, the operation will require this role's signature.

## Task Methods

All methods associated with tasks can be called using a [ColonyClient](/colonyjs/api-colonyclient) instance. The examples below are ordered in a way that reflects a general flow of the task lifecycle from start to finish.

### Add Task

When adding a task, the task must be assigned a `specificationHash`.

```js

// Add a task
await colonyClient.addTask.send({
  specificationHash: 'Qm...',
});

```

The task specification, also known as "task brief", is a description or document that outlines the work required to be considered sufficient for a task payout. The `specificationHash` can be any arbitrary hash string (32 bytes) but the `specificationHash` was specially designed for a unique IPFS content hash. See [Using IPFS](/colonyjs/topics-using-ipfs/) for more information about using an IPFS content hash.

When creating a task, the task can also be assigned a `domainId`, `skillId` and `dueDate`.

```js

// Add a task
await colonyClient.addTask.send({
  specificationHash: 'Qm...',
  domainId: 1,
  skillId: 1,
  dueDate: new Date('...'),
});

```

An assigned domain is required for every task because reputation earned for completing a task is always earned within the context of domains. When a task is completed, each address assigned a task role, and a payout in tokens native to that colony, will earn reputation within that domain. The root domain of every colony is `1`, which is the default if the `domainId` is not specified.

An assigned skill is also required for every task. The `skillId` is optional when adding a task but it has no default value, therefore, the `skillId` must be provided before a `WORKER` can be assigned to a task. Like domains, reputation is earned within the context of skills.

The due date is when the completed task work is due. The task work cannot be submitted after the due date has passed. If the `dueDate` is not specified when creating a task, the default `dueDate` will be 90 days from the time that the task was created.

### View Task

Once a task has been created, we can view the task using the `getTask` method.

```js

// Get a task
await colonyClient.getTask.call({
  taskId: 1,
});

```

The object returned from the `getTask` method will look something like this:

```js

{
  specificationHash: 'QmWvM3isCmEY8bsixThuFeUJmE5MN2he1UxaPzMngLZ7Wq',
  deliverableHash: null,
  status: 'ACTIVE',
  dueDate: '2019-01-01T00:00:00.000Z',
  potId: 2,
  completionDate: null,
  domainId: 1,
  skillId: 1,
}

```

We already introduced `specificationHash`, `domainId`, `skillId` and `dueDate`. The `status` is the current status of the task, which will either be `ACTIVE`, `CANCELLED` or `FINALIZED` (see [Cancel Task](/#cancel-task) or [Finalize Task](/#finalize-task) for more information). We will further explain `potId` and `deliverableHash` in the sections below ([Fund Task](/#fund-task) and [Submit Work](/#submit-work)).

### Fund Task

Each time a task is added, a new "funding pot" is also created and assigned to the new task. Each "funding pot" assigned to a task is specific to that task, therefore, each task has a unique `potId`.

In order to fund a task, we will need the `potId` of the task (`toPot` in the example below) and the `potId` of the domain that we would like to move the funds from (`fromPot` in the example below).

```js

// Move funds between pots
await colonyClient.moveFundsBetweenPots.send({
  fromPot: 1,
  toPot: 2,
  amount: new BN('1000000000000000000'),
  token: '0x...',
});

```

The "funding pot" associated with our task must have enough allocated funds to distribute to each of the "task roles" that are assigned a payout. If the payouts total exceeds the amount of allocated funds in the "funding pot", the task cannot be finalized.

For more information about how funding works within a colony, check out [Tokens and Funding](/colonyjs/topics-tokens-and-funding).

### Modify Task

Modifying a task must be approved by multiple "task roles" with signatures before the modification will take affect (see [Using Multisignature](/colonyjs/topics-using-multisignature/) for more information).

Task modification methods and the required signatures for each are listed below.

Changing the task brief (`MANAGER` and `WORKER`):

```js

// Set the task brief
await colonyClient.setTaskBrief.startOperation({
  taskId: 1,
  specificationHash: 'Qm...',
});

```

Changing or setting the task domain (`MANAGER` and `WORKER`):

```js

// Set the task domain
await colonyClient.setTaskDomain.startOperation({
  taskId: 1,
  domainId: 1,
});

```

Changing or setting the task skill (`MANAGER` and `WORKER`):

```js

// Set the task skill
await colonyClient.setTaskSkill.startOperation({
  taskId: 1,
  skillId: 1,
});

```

Changing or setting the task due date (`MANAGER` and `WORKER`):

```js

// Set the task due date
await colonyClient.setTaskDueDate.startOperation({
  taskId: 1,
  dueDate: new Date('...'),
});

```

Changing or setting the task manager payout (`MANAGER` and `WORKER`):

```js

// Set the task manager payout
await colonyClient.setTaskManagerPayout.startOperation({
  taskId: 1,
  token: '0x0...',
  amount: new BN('1000000000000000000'),
});

```

Changing or setting the task evaluator payout (`MANAGER` and `EVALUATOR`):

```js

// Set the task evaluator payout
await colonyClient.setTaskEvaluatorPayout.startOperation({
  taskId: 1,
  token: '0x0...',
  amount: new BN('1000000000000000000'),
});

```

Changing or setting the task worker payout (`MANAGER` and `WORKER`):

```js

// Set the task worker payout
await colonyClient.setTaskWorkerPayout.startOperation({
  taskId: 1,
  token: '0x0...',
  amount: new BN('1000000000000000000'),
});

```

Changing the task manager role (`MANAGER` and proposed `MANAGER`):

```js

// Set the task manager role
await colonyClient.setTaskManagerRole.startOperation({
  taskId: 1,
  address: '0x0...',
});

```

Setting the task evaluator role (`MANAGER` and proposed `EVALUATOR`):

```js

// Set the task evaluator role
await colonyClient.setTaskEvaluatorRole.startOperation({
  taskId: 1,
  address: '0x0...',
});

```

Setting the task worker role (`MANAGER` and proposed `WORKER`):

```js

// Set the task worker role
await colonyClient.setTaskWorkerRole.startOperation({
  taskId: 1,
  address: '0x0...',
});

```

Removing the task evaluator role (`MANAGER` and `EVALUATOR`):

```js

// Remove the task evaluator role
await colonyClient.removeTaskEvaluatorRole.startOperation({
  taskId: 1,
  address: '0x0...',
});

```

Removing the task worker role (`MANAGER` and `WORKER`):

```js

// Remove the task worker role
await colonyClient.removeTaskWorkerRole.startOperation({
  taskId: 1,
  address: '0x0...',
});

```

Attempting to use these methods without `startOperation` will throw an error.

### Cancel Task

Any time before a task has been completed, the task can be cancelled, which allows for the funding to be returned to the colony and halts any further modification of the task. Cancelling a task must be approved by both the `MANAGER` and the `WORKER`.

```js

// Cancel a task
await colonyClient.cancelTask.startOperation({
  taskId: 1,
});

```

### Submit Work

Once a `WORKER` has been assigned a task, the assigned `WORKER` can submit the task deliverable (or "task work"). Like the `specificationHash`, the `deliverableHash` can be any arbitrary hash string (32 bytes) but the `deliverableHash` was specially designed for a unique IPFS content hash.

```js

// Submit the task work
await colonyClient.submitTaskDeliverable.send({
  taskId: 1,
  deliverableHash: 'Qm...',
});

```

### Rate and Reveal

After the task deliverable has been submitted (or the due date has passed), the work rating period begins. Task payouts are determined by work ratings based on a 3-star system.

* The `EVALUATOR` reviews the deliverable and submits a rating for the `WORKER`.
* The `WORKER` reviews the specification and submits a rating for the `MANAGER`.

Because work ratings are on-chain, they follow a "commit and reveal" pattern in which ratings are obscured in order to prevent ratings from influencing each other.

During the "commit period", ratings are submitted to the blockchain and hidden until they are later revealed. The commit period lasts 5 days or as long as it takes for both ratings to be submitted.

```js

// Generate secret
const { secret } = await colonyClient.generateSecret.call({
  salt: 'secret',
  value: 2,
});

// Submit work rating
await colonyClient.submitTaskWorkRating.send({
  taskId: 1,
  role: 'WORKER',
  secret,
});

```

During the "reveal period", users submit a transaction to reveal their rating. The reveal period lasts 5 days or as long as it takes for both ratings to be revealed.

```js

// Reveal work rating
await colonyClient.revealTaskWorkRating.send({
  taskId: 1,
  role: 'WORKER',
  rating: 2,
  salt: 'secret',
});

```

During the "rating period" (the "commit period" and "reveal period"), if either party fails to commit or reveal their rating within the given time, their counterpart is given the highest possible rating, and their own rating is given the lowest possible rating.

It's easy to check the status of a task during the "rating period":

```js

// Get work ratings
await colonyClient.getTaskWorkRatingSecretsInfo.call({
  taskId: 1,
});

```

### Finalize Task

After the "rating period" has finished (the `EVALUATOR` and `WORKER` have submitted and revealed their ratings), the task can be finalized, which prevents any further task modifications to the task.

```js

// Finalize task
await colonyClient.finalizeTask.send({
  taskId: 1,
});

```

### Claim Payout

Once a task is finalized, each "task role" can then claim their payout:

```js

// Claim payout
await colonyClient.claimTaskPayout.send({
  taskId: 1,
  role: 'WORKER',
  token: '0x0...',
});

```
