---
title: Task Lifecycle
section: Docs
order: 2
---

The most useful abstraction within a colony is the `task`. Tasks are used to coordinate work, track reputation, and ultimately the only way to get paid through a colony. See [tasks](/colonynetwork/docs-tasks/) for a complete description of what tasks are within a colony.

Tasks have 3 "roles" that may be assigned to addresses: manager, evaluator, and worker. Each role and its permissions are outlined in the table below:

|                          | Manager | Evaluator | Worker | Other                      |
|--------------------------|---------|-----------|--------|----------------------------|
| createTask               |         |           |        | X (admin)                  |
| cancelTask               | *       |           | *      |                            |
| setTaskBrief             | *       |           | *      |                            |
| setTaskDomain            | *       |           | *      |                            |
| setTaskSkill             | *       |           | *      |                            |
| setTaskDueDate           | *       |           | *      |                            |
| setTaskManagerPayout     | *       |           | *      |                            |
| setTaskEvaluatorPayout   | *       | *         |        |                            |
| setTaskWorkerPayout      | *       |           | *      |                            |
| setTaskManagerRole       | *       |           |        | * proposed manager (admin) |
| setTaskEvaluatorRole     | *       |           |        | * proposed evaluator       |
| setTaskWorkerRole        | *       |           |        | * proposed worker          |
| removeTaskWorkerRole     | *       |           | *      |                            |
| removeTaskEvaluatorRole  | *       | *         |        |                            |
| submitTaskDeliverable    |         |           | X      |                            |
| submitTaskWorkRating     | X       | X         | X      |                            |
| revealTaskWorkRating     | X       | X         | X      |                            |
| claimPayout              | X       | X         | X      |                            |
| finalizeTask             |         |           |        |                            |

( X ) - Only this role can call the method. If there is no X in the row, any address can call the method.
( * ) - If the task has already been assigned to this role, the operation requires this role's signature.


==TOC==


## Create Task

When creating a task, the task must be assigned a `specificationHash` and a `domainId`.

Also known as a "task brief", the task specification is a description of the work required in order to be considered sufficient for a task payout. The `specificationHash` can be any arbitrary hash string (32 bytes) but this is especially suited for a unique IPFS content hash. See [Using IPFS](/colonyjs/docs-using-ipfs/) for details.

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

In the initial version of Colony Network, only admins have permission to create new tasks. Eventually, permission to create tasks will be based on the reputation of the address within the colony.

## View Task

Once a task has been created, it can be viewed:

```js

// Get the task
await colonyClient.getTask.call({ taskId });

```

## Modify Task

Important changes to a task must be approved by multiple roles. Most of the methods that modify a task require multiple signatures before the modification will take affect (see [Multisgnature](/colonyjs/docs-multisignature-transactions/) for more details).

Task changes requiring multiple signatures are:

* Changing the task brief (manager and worker)
* Changing or setting the task domain (manager and worker)
* Changing or setting the task skill (manager and worker)
* Changing or setting the task due date (manager and worker)
* Changing or setting the managers's payout (manager and worker)
* Changing or setting the evaluator's payout (manager and evaluator)
* Changing or setting the worker's payout (manager and worker)
* Changing the manager's role (manager and proposed manager)
* Setting the evaluator's role (manager and proposed evaluator)
* Setting the worker's role (manager and proposed worker)
* Removing the evaluator's role (manager and evaluator)
* Removing the worker's role (manager and worker)

```js

// Set the task brief
await colonyClient.setTaskBrief.startOperation({
  taskId,
  specificationHash,
});

// Set the task domain
await colonyClient.setTaskDomain.startOperation({
  taskId,
  domainId,
});

// Set the task skill
await colonyClient.setTaskSkill.startOperation({
  taskId,
  skillId,
});

// Set the task due date
await colonyClient.setTaskDueDate.startOperation({
  taskId,
  dueDate,
});

// Set the task manager payout
await colonyClient.setTaskManagerPayout.startOperation({
  taskId,
  amount,
});

// Set the task evaluator payout
await colonyClient.setTaskEvaluatorPayout.startOperation({
  taskId,
  amount,
});

// Set the task worker payout
await colonyClient.setTaskWorkerPayout.startOperation({
  taskId,
  amount,
});

// Set the task manager role
await colonyClient.setTaskManagerRole.startOperation({
  taskId,
  user,
});

// Set the task evaluator role
await colonyClient.setTaskEvaluatorRole.startOperation({
  taskId,
  user,
});

// Set the task worker role
await colonyClient.setTaskWorkerRole.startOperation({
  taskId,
  user,
});

// Remove the task evaluator role
await colonyClient.removeTaskEvaluatorRole.startOperation({
  taskId,
  user,
});

// Remove the task worker role
await colonyClient.removeTaskWorkerRole.startOperation({
  taskId,
  user,
});

```

Attempting to use these methods without `startOperation` will throw an error.

## Cancel Task

Any time before a task is completed, the task can be cancelled, which allows any funding to be returned to the colony and halts any further modification of the task. Cancelling a task must be approved by both the manager and the worker.

```js

// Cancel the task
await colonyClient.cancelTask.startOperation({ taskId });

```

## Submit Work

Once a worker has been assigned to the task, the task deliverable (or "task work") can be submitted. Like the `specificationHash`, the `deliverableHash` can be any arbitrary hash string (32 bytes) but this is especially suited for a unique IPFS content hash. See [Using IPFS](/colonyjs/docs-using-ipfs/) for details.

```js

// Submit the task work
await colonyClient.submitTaskDeliverable.send({
  taskId,
  deliverableHash,
});

```

## Rate and Reveal

After the task work has been submitted (or the due date has passed), the work rating period begins.

Task payouts are determined by work rating based on a 3-star system.

* The Evaluator reviews the work done and submits a rating for the Worker.
* The Worker considers the task assignment and submits a rating for the Manager.

Because work ratings are on-chain, they follow a "commit and reveal" pattern in which ratings are obscured in order to prevent ratings from influencing each other.

* During the "commit period", ratings are submitted to the blockchain and hidden until they are later revealed. The commit period lasts 5 days or as long as it takes for both ratings to be submitted.

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

* During the "reveal period", users submit a transaction to reveal their rating. The reveal period lasts 5 days or as long as it takes for both ratings to be revealed.

```js

// Reveal work rating
await colonyClient.revealTaskWorkRating.send({
  taskId,
  role,
  rating,
  salt,
});

```

During the rating period, if either party fails to commit or reveal their rating within the given period, their counterpart is given the highest possible rating, and their own rating is given the lowest possible rating.

It's easy to check the status of a task during the rating period:

```js

// Get work ratings
await colonyClient.getTaskWorkRatings.call({
  taskId,
});

```

## Finalize Task

After the rating period has finished, the task may be finalized, which prevents any further task modifications and allows each task role to claim their payout.

```js

// Finalize task
await colonyClient.finalizeTask.send({
  taskId,
});

```

## Claim Payout

```js

// Claim payout
await colonyClient.claimPayout.send({
  taskId,
  role,
  token,
});

```
