---
title: Task Lifecycle
section: Docs
order: 3
---

The most useful abstraction within a colony is the task. Tasks are used to coordinate work and track reputation. They provide the only means to ultimately get paid through a colony. See [Tasks](/colonynetwork/docs-tasks/) as described in the colonyNetwork documentation for a complete description of what tasks are and how they function within a colony.

==TOC==

## Task Roles

There are three "task roles" that can be assigned to each task: `MANAGER`, `EVALUATOR`, and `WORKER`.

Each "task role" has specific permissions for calling and approving certain actions. Actions that modify a task may require approval from two "task roles" if those roles have already been assigned (see [Modify Task](/colonyjs/docs-task-lifecycle#modify-task) for more information).

The permission for each "task role" are outlined in the table below:

|                          | Manager | Evaluator | Worker | Other                                  |
|--------------------------|---------|-----------|--------|----------------------------------------|
| createTask               |         |           |        | X (`FOUNDER` or `ADMIN`)               |
| cancelTask               | *       |           | *      |                                        |
| setTaskBrief             | *       |           | *      |                                        |
| setTaskDomain            | *       |           | *      |                                        |
| setTaskSkill             | *       |           | *      |                                        |
| setTaskDueDate           | *       |           | *      |                                        |
| setTaskManagerPayout     | *       |           | *      |                                        |
| setTaskEvaluatorPayout   | *       | *         |        |                                        |
| setTaskWorkerPayout      | *       |           | *      |                                        |
| setTaskManagerRole       | *       |           |        | * new `MANAGER` (`FOUNDER` or `ADMIN`) |
| setTaskEvaluatorRole     | *       |           |        | * new `EVALUATOR`                      |
| setTaskWorkerRole        | *       |           |        | * new `WORKER`                         |
| removeTaskWorkerRole     | *       |           | *      |                                        |
| removeTaskEvaluatorRole  | *       | *         |        |                                        |
| submitTaskDeliverable    |         |           | X      |                                        |
| submitTaskWorkRating     | X       | X         | X      |                                        |
| revealTaskWorkRating     | X       | X         | X      |                                        |
| claimPayout              | X       | X         | X      |                                        |
| finalizeTask             |         |           |        |                                        |

( * ) - If the task has already been assigned to this role, the operation requires this role's signature.  
( X ) - Only this role can call the method. If there is no "X" in the row, any address can call the method.

## Create Task

When creating a task, the task must be assigned a `specificationHash` and a `domainId`.

Also known as the "task brief", the task specification is a description of the work required to be considered sufficient for a task payout. The `specificationHash` can be any arbitrary hash string (32 bytes) but this is especially suited for a unique IPFS content hash. See [Using IPFS](/colonyjs/docs-using-ipfs/) for more information about using an IPFS content hash.

The domain is required when creating a task because reputation is earned within the context of domains. Upon the completion of a task, each role will earn reputation that is associated with the domain. The "root domain" of every colony is `1`, which is the default value if the `domainId` is not specified when creating a task.

```js

// Create a task
await colonyClient.createTask.send({
  specificationHash,
  domainId,
});

```

When creating a task, the task can also be assigned a `skillId` and a `dueDate`.

Skills are global, meaning they are shared across the Colony Network and only the Meta Colony can create new skills. When completing a task, reputation is also earned within the context of skills. There is no default value if the `skillId` is not specified and the `skillId` is not required when creating a task.

The due date determines the deadline for the task. The task work cannot be submitted after the due date has passed. If the `dueDate` is not specified when creating a task, the default `dueDate` will be 90 days from the time that the task was created.

```js

// Create a task
await colonyClient.createTask.send({
  specificationHash,
  domainId,
  skillId,
  dueDate,
});

```

## View Task

Once a task has been created, it can be viewed:

```js

// Get the task
await colonyClient.getTask.call({ taskId });

```

## Modify Task

Important changes to a task must be approved by multiple "task roles". Most of the methods that modify a task require multiple signatures before the modification will take affect (see [Multisgnature](/colonyjs/docs-multisignature-transactions/) for more information).

Task modification methods and the required signatures for each are listed below.

Changing the task brief (`MANAGER` and `WORKER`):

```js

// Set the task brief
await colonyClient.setTaskBrief.startOperation({
  taskId,
  specificationHash,
});

```

Changing or setting the task domain (`MANAGER` and `WORKER`):

```js

// Set the task domain
await colonyClient.setTaskDomain.startOperation({
  taskId,
  domainId,
});

```

Changing or setting the task skill (`MANAGER` and `WORKER`):

```js

// Set the task skill
await colonyClient.setTaskSkill.startOperation({
  taskId,
  skillId,
});

```

Changing or setting the task due date (`MANAGER` and `WORKER`):

```js

// Set the task due date
await colonyClient.setTaskDueDate.startOperation({
  taskId,
  dueDate,
});

```

Changing or setting the managers's payout (`MANAGER` and `WORKER`):

```js

// Set the task manager payout
await colonyClient.setTaskManagerPayout.startOperation({
  taskId,
  amount,
});

```

Changing or setting the evaluator's payout (`MANAGER` and `EVALUATOR`):

```js

// Set the task evaluator payout
await colonyClient.setTaskEvaluatorPayout.startOperation({
  taskId,
  amount,
});

```

Changing or setting the worker's payout (`MANAGER` and `WORKER`):

```js

// Set the task worker payout
await colonyClient.setTaskWorkerPayout.startOperation({
  taskId,
  amount,
});

```

Changing the manager's role (`MANAGER` and proposed `MANAGER`):

```js

// Set the task manager role
await colonyClient.setTaskManagerRole.startOperation({
  taskId,
  user,
});

```

Setting the evaluator's role (`MANAGER` and proposed `EVALUATOR`):

```js

// Set the task evaluator role
await colonyClient.setTaskEvaluatorRole.startOperation({
  taskId,
  user,
});

```

Setting the worker's role (`MANAGER` and proposed `WORKER`):

```js

// Set the task worker role
await colonyClient.setTaskWorkerRole.startOperation({
  taskId,
  user,
});

```

Removing the evaluator's role (`MANAGER` and `EVALUATOR`):

```js

// Remove the task evaluator role
await colonyClient.removeTaskEvaluatorRole.startOperation({
  taskId,
  user,
});

```

Removing the worker's role (`MANAGER` and `WORKER`):

```js

// Remove the task worker role
await colonyClient.removeTaskWorkerRole.startOperation({
  taskId,
  user,
});

```

Attempting to use these methods without `startOperation` will throw an error.

## Cancel Task

Any time before a task is completed, the task can be cancelled, which allows any funding to be returned to the colony and halts any further modification of the task. Cancelling a task must be approved by both the `MANAGER` and the `WORKER`.

```js

// Cancel the task
await colonyClient.cancelTask.startOperation({ taskId });

```

## Submit Work

Once a `WORKER` has been assigned to the task, the task deliverable (or "task work") can be submitted.

Like the `specificationHash`, the `deliverableHash` can be any arbitrary hash string (32 bytes) but this is especially suited for a unique IPFS content hash. See [Using IPFS](/colonyjs/docs-using-ipfs/) for more information about using an IPFS content hash.

```js

// Submit the task work
await colonyClient.submitTaskDeliverable.send({
  taskId,
  deliverableHash,
});

```

## Rate and Reveal

After the task deliverable has been submitted (or the due date has passed), the work rating period begins.

Task payouts are determined by work rating based on a 3-star system.

* The `EVALUATOR` reviews the work done and submits a rating for the `WORKER`.
* The `WORKER` considers the task assignment and submits a rating for the `MANAGER`.

Because work ratings are on-chain, they follow a "commit and reveal" pattern in which ratings are obscured in order to prevent ratings from influencing each other.

During the "commit period", ratings are submitted to the blockchain and hidden until they are later revealed. The commit period lasts 5 days or as long as it takes for both ratings to be submitted.

```js

// Generate secret
const { secret } = await colonyClient.generateSecret.call({ salt, value });

// Submit work rating
await colonyClient.submitTaskWorkRating.send({
  taskId,
  role,
  secret,
});

```

During the "reveal period", users submit a transaction to reveal their rating. The reveal period lasts 5 days or as long as it takes for both ratings to be revealed.

```js

// Reveal work rating
await colonyClient.revealTaskWorkRating.send({
  taskId,
  role,
  rating,
  salt,
});

```

During the "rating period" (the "commit period" and "reveal period"), if either party fails to commit or reveal their rating within the given time, their counterpart is given the highest possible rating, and their own rating is given the lowest possible rating.

It's easy to check the status of a task during the "rating period":

```js

// Get work ratings
await colonyClient.getTaskWorkRatings.call({ taskId });

```

## Finalize Task

After the "rating period" has finished, the task may be finalized, which prevents any further task modifications.

```js

// Finalize task
await colonyClient.finalizeTask.send({ taskId });

```

## Claim Payout

Once a task is finalized, each "task role" can then claim their payout:

```js

// Claim payout
await colonyClient.claimPayout.send({
  taskId,
  role,
  token,
});

```
