---
title: Task Lifecycle
section: Topics
order: 4
---

The most useful abstraction within a colony is the task. Tasks are used to coordinate work and track reputation. They provide the only means to ultimately get paid through a colony. See [Tasks](/colonynetwork/docs-tasks/) as described in the colonyNetwork documentation for a complete description of what tasks are and how they function within a colony.

==TOC==

## Task Roles

There are three "task roles" that can be assigned to each task: `MANAGER`, `EVALUATOR`, and `WORKER`.

Each "task role" has specific permissions for calling and approving certain actions. Actions that modify a task may require approval from two "task roles" if those roles have already been assigned (see [Modify Task](/#modify-task) for more information).

### Permissions

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

## Task Methods

All methods associated with tasks can be called using an instance of the [ColonyClient](/colonyjs/api-colonyclient). The methods are listed below in an order that reflects the general flow of the task lifecycle from creating a task to claiming task payouts.

### Create Task

When creating a task, the task must be assigned a `specificationHash` and a `domainId`.

```js

// Create a task
await colonyClient.createTask.send({
  specificationHash,
  domainId,
});

```

Also known as the "task brief", the task specification is a description of the work required to be considered sufficient for a task payout. The `specificationHash` can be any arbitrary hash string (32 bytes) but this is especially suited for a unique IPFS content hash. See [Using IPFS](/colonyjs/topics-using-ipfs/) for more information about using an IPFS content hash.

The domain is required when creating a task because reputation is earned within the context of domains. Upon the completion of a task, each role will earn reputation that is associated with the domain. The "root domain" of every colony is `1`, which is the default value if the `domainId` is not specified when creating a task.

When creating a task, the task can also be assigned a `skillId` and a `dueDate`.

```js

// Create a task
await colonyClient.createTask.send({
  specificationHash,
  domainId,
  skillId,
  dueDate,
});

```

Skills are global, meaning they are shared across the Colony Network and only the Meta Colony can create new skills. When completing a task, reputation is also earned within the context of skills. There is no default value if the `skillId` is not specified and the `skillId` is not required when creating a task.

The due date determines the deadline for the task. The task work cannot be submitted after the due date has passed. If the `dueDate` is not specified when creating a task, the default `dueDate` will be 90 days from the time that the task was created.

### View Task

Once a task has been created, we can view the task using the `getTask` method.

```js

// Get the task
await colonyClient.getTask.call({ taskId });

```

Let's take a quick look at an example of the returned task object from the `getTask` method.

```

{
  specificationHash: 'QmWvM3isCmEY8bsixThuFeUJmE5MN2he1UxaPzMngLZ7Wq',
  deliverableHash: null,
  status: 'ACTIVE',
  dueDate: 2019-01-01T00:00:00.000Z,
  payoutsWeCannotMake: 0,
  potId: 2,
  completionDate: null,
  domainId: 1,
  skillId: 0,
  id: 1,
}

```

Several of these properties are pretty straight forward. The `id` is the `id` of the task, which we will need to include in the input for all methods that are specific to a task. The `status` is the current status of the task, which will either be `ACTIVE`, `CANCELLED` or `FINALIZED`. See [Cancel Task](/#cancel-task) or [Finalize Task](/#finalize-task) for more information.

We already introduced `specificationHash`, `domainId`, `skillId` and `dueDate` in [Create Task](/#create-task). Next, we will introduce `potId` and `payoutsWeCannotMake` below in [Fund Task](/#fund-task) and then `deliverableHash` a bit further down in [Submit Work](/#submit-work).

### Fund Task

Each time a new task is created, a new "pot" is also created and assigned to the new task. Each "pot" assigned to a task is specific to that task, therefore, each task has a unique `potId`.

In order to fund a task, we will need the `potId` of the task (which will be our `toPot` in the example below) and the `potId` of the domain or another task that we would like to move funds from (which will be our `fromPot` in the example below).

```js

// Move funds between pots
await colonyClient.moveFundsBetweenPots.send({
  fromPot,
  toPot,
  amount,
  token,
})

```

The "pot" associated with our task must have enough allocated funds to distribute to each of the "task roles" that have a positive payout assigned to it. If the total of each payout exceeds the amount of total allocated funds in the "pot" associated with the task, `payoutsWeCannotMake` will have a positive value.

How does `payoutsWeCannotMake` work? If the previous amount in the pot was enough to cover the payouts and the new amount in the pot is not enough to cover the payouts, then a value of `1` will be added to `payoutsWeCannotMake`. If the previous amount in the pot was not enough to cover the payouts and the new amount in the pot is enough to cover the payouts, then a value of `1` will be subtracted from `payoutsWeCannotMake`.

For more information about how funding works within a colony, check out [Tokens and Funding](/colonyjs/topics-tokens-and-funding).

### Modify Task

Important changes to a task must be approved by multiple "task roles". Most of the methods that modify a task require multiple signatures before the modification will take affect (see [Using Multisignature](/colonyjs/topics-using-multisignature/) for more information).

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
  token,
  amount,
});

```

Changing or setting the evaluator's payout (`MANAGER` and `EVALUATOR`):

```js

// Set the task evaluator payout
await colonyClient.setTaskEvaluatorPayout.startOperation({
  taskId,
  token,
  amount,
});

```

Changing or setting the worker's payout (`MANAGER` and `WORKER`):

```js

// Set the task worker payout
await colonyClient.setTaskWorkerPayout.startOperation({
  taskId,
  token,
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

### Cancel Task

Any time before a task is completed, the task can be cancelled, which allows any funding to be returned to the colony and halts any further modification of the task. Cancelling a task must be approved by both the `MANAGER` and the `WORKER`.

```js

// Cancel the task
await colonyClient.cancelTask.startOperation({ taskId });

```

### Submit Work

Once a `WORKER` has been assigned to the task, the task deliverable (or "task work") can be submitted.

Like the `specificationHash`, the `deliverableHash` can be any arbitrary hash string (32 bytes) but this is especially suited for a unique IPFS content hash. See [Using IPFS](/colonyjs/topics-using-ipfs/) for more information about using an IPFS content hash.

```js

// Submit the task work
await colonyClient.submitTaskDeliverable.send({
  taskId,
  deliverableHash,
});

```

### Rate and Reveal

After the task deliverable has been submitted (or the due date has passed), the work rating period begins.

Task payouts are determined by work rating based on a 3-star system.

* The `EVALUATOR` reviews the work done and submits a rating for the `WORKER`.
* The `WORKER` considers the task assignment and submits a rating for the `MANAGER`.

Because work ratings are on-chain, they follow a "commit and reveal" pattern in which ratings are obscured in order to prevent ratings from influencing each other.

During the "commit period", ratings are submitted to the blockchain and hidden until they are later revealed. The commit period lasts 5 days or as long as it takes for both ratings to be submitted.

```js

// Generate secret
const { secret } = await colonyClient.generateSecret.call({
  salt,
  value,
});

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

### Finalize Task

After the "rating period" has finished, the task may be finalized, which prevents any further task modifications.

```js

// Finalize task
await colonyClient.finalizeTask.send({ taskId });

```

### Claim Payout

Once a task is finalized, each "task role" can then claim their payout:

```js

// Claim payout
await colonyClient.claimPayout.send({
  taskId,
  role,
  token,
});

```
