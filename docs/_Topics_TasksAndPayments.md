---
title: Tasks and Payments
section: Topics
order: 4
---

The most useful abstractions within a colony are tasks and payments. Tasks and payments are used to reward colony contributors with tokens and reputation.

## Task Roles

There are three "task roles" that can be assigned to a task: `MANAGER`, `EVALUATOR`, and `WORKER`.

Each "task role" has permissions for calling and approving actions associated with the task. Actions that modify a task require approval from two "task roles" if those roles have already been assigned within the given task (see [Modify Task](/#modify-task) for more information).

### Role Permissions

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

( X ) - This role can call the method. If there is no "X" in the row, any address can call the method.  
( * ) - If the task has been assigned to this role, the operation will require a signature from this role.

## Task Lifecycle

All methods associated with tasks can be called using a [ColonyClient](/colonyjs/api-colonyclient) instance. The examples below are ordered in a way that reflects a general flow of the task lifecycle from start to finish.

### Add Task

When adding a task, the task must be assigned a `specificationHash`.

```js

// Add a task
await colonyClient.addTask.send({
  specificationHash: 'Qm...',
});

```

The task specification, also known as "task brief", is a description or document that outlines the work required to be considered sufficient for a task payout. The `specificationHash` can be any arbitrary hash string (32 bytes) but the `specificationHash` was specially designed to support an IPFS content hash. See [Using IPFS](/colonyjs/topics-using-ipfs/) for more information about using an IPFS content hash.

When creating a task, the task can also be assigned a `domainId`, `skillId` and `dueDate`.

```js

// Add a task
await colonyClient.addTask.send({
  specificationHash: 'Qm...',
  domainId: 1,
  skillId: 2,
  dueDate: new Date('...'),
});

```

An assigned domain is required for every task because reputation earned for completing a task is always earned within the context of domains. The root domain of every colony is `1`, which is the default value if the `domainId` is not specified.

An assigned skill is also required for every task. The `skillId` is optional when adding a task but it has no default value, therefore, the `skillId` must be provided before a `WORKER` can be assigned to a task. Like domains, reputation is earned within the context of skills.

The due date is when the completed task work is due. The task work cannot be submitted after the due date has passed. If the `dueDate` is not specified when creating a task, the default `dueDate` will be 90 days from the time that the task was created.

### View Task

Once a task has been created, you can view the task using the `getTask` method.

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
  skillId: 2,
}

```

We already introduced `specificationHash`, `domainId`, `skillId` and `dueDate`. The `status` is the current status of the task, which will either be `ACTIVE`, `CANCELLED` or `FINALIZED` (see [Cancel Task](/#cancel-task) or [Finalize Task](/#finalize-task) for more information). We will further explain `potId` and `deliverableHash` in the sections below (`potId` in [Fund Task](/#fund-task) and `deliverableHash` in [Submit Work](/#submit-work)).

### Fund Task

Whenever a task is added, a "funding pot" is also added and assigned to the task. Each funding pot assigned to a task is specific to that task, therefore, each task has a unique `potId`.

In order to fund a task, you need the `potId` of the task (the `toPot` in the example below) and the `potId` of the domain from which the funds will be moved (the `fromPot` in the example below).

```js

// Move funds between pots
await colonyClient.moveFundsBetweenPots.send({
  fromPot: 1,
  toPot: 2,
  amount: new BN('1000000000000000000'),
  token: '0x...',
});

```

The funding pot associated with our task must have enough allocated funds to distribute to each of the task roles that are assigned a payout. If the total payout exceeds the amount of allocated funds in the funding pot, the task cannot be finalized.

You can use `getFundingPotInfo` and `getFundingPotBalance` to check the status of a funding pot and the current balance of a funding pot. See [Tokens and Funding](/colonyjs/topics-tokens-and-funding) for more information.

### Modify Task

Modifying a task must be approved by multiple "task roles" with signatures before the modification will take affect. See [Using Multisignature](/colonyjs/topics-using-multisignature/) for more information. Task modification methods and the required signatures for each are listed below.

Changing the task brief (`MANAGER` and `WORKER`):

```js

// Set task brief
await colonyClient.setTaskBrief.startOperation({
  taskId: 1,
  specificationHash: 'Qm...',
});

```

Changing or setting the task domain (`MANAGER` and `WORKER`):

```js

// Set task domain
await colonyClient.setTaskDomain.startOperation({
  taskId: 1,
  domainId: 1,
});

```

Changing or setting the task skill (`MANAGER` and `WORKER`):

```js

// Set task skill
await colonyClient.setTaskSkill.startOperation({
  taskId: 1,
  skillId: 2,
});

```

Changing or setting the task due date (`MANAGER` and `WORKER`):

```js

// Set task due date
await colonyClient.setTaskDueDate.startOperation({
  taskId: 1,
  dueDate: new Date('...'),
});

```

Changing or setting the task manager payout (`MANAGER` and `WORKER`):

```js

// Set task manager payout
await colonyClient.setTaskManagerPayout.startOperation({
  taskId: 1,
  token: '0x0...',
  amount: new BN('1000000000000000000'),
});

```

Changing or setting the task evaluator payout (`MANAGER` and `EVALUATOR`):

```js

// Set task evaluator payout
await colonyClient.setTaskEvaluatorPayout.startOperation({
  taskId: 1,
  token: '0x0...',
  amount: new BN('1000000000000000000'),
});

```

Changing or setting the task worker payout (`MANAGER` and `WORKER`):

```js

// Set task worker payout
await colonyClient.setTaskWorkerPayout.startOperation({
  taskId: 1,
  token: '0x0...',
  amount: new BN('1000000000000000000'),
});

```

Changing the task manager role (`MANAGER` and proposed `MANAGER`):

```js

// Set task manager role
await colonyClient.setTaskManagerRole.startOperation({
  taskId: 1,
  address: '0x0...',
});

```

Setting the task evaluator role (`MANAGER` and proposed `EVALUATOR`):

```js

// Set task evaluator role
await colonyClient.setTaskEvaluatorRole.startOperation({
  taskId: 1,
  address: '0x0...',
});

```

Setting the task worker role (`MANAGER` and proposed `WORKER`):

```js

// Set task worker role
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

*Note: Attempting to use these methods without `startOperation` will throw an error.*

### Cancel Task

Any time before a task has been completed, the task can be cancelled, which allows for the funding to be returned to the colony and halts any further modification of the task. Cancelling a task must be approved by both the `MANAGER` and the `WORKER`.

```js

// Cancel a task
await colonyClient.cancelTask.startOperation({
  taskId: 1,
});

```

### Submit Work

Once a `WORKER` has been assigned a task, the assigned `WORKER` can submit the task deliverable (or "task work"). Like the `specificationHash`, the `deliverableHash` can be any arbitrary hash string (32 bytes) but the `deliverableHash` was specially designed to support an IPFS content hash. See [Using IPFS](/colonyjs/topics-using-ipfs/) for more information about using an IPFS content hash.

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

During the "commit period", ratings that have been submitted remain hidden. The commit period will last until both ratings have been submitted or until the commit period has expired (5 days after the task deliverable has been submitted).

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

During the "reveal period", ratings must be revealed by each address that submitted a rating. The reveal period will last until both ratings have been revealed or until the reveal period has expired (5 days after both rating have been submitted or the commit period has expired).

```js

// Reveal work rating
await colonyClient.revealTaskWorkRating.send({
  taskId: 1,
  role: 'WORKER',
  rating: 2,
  salt: 'secret',
});

```

During the "rating period" (which includes both the "commit period" and "reveal period"), if either party fails to commit or reveal their rating within time, their counterpart is given the highest possible rating and they are given the lowest possible rating.

It's easy to check the status of submissions during the "rating period":

```js

// Get work rating secrets information
await colonyClient.getTaskWorkRatingSecretsInfo.call({
  taskId: 1,
});

```

### Finalize Task

After the "rating period" has finished (the `EVALUATOR` and `WORKER` have submitted and revealed their ratings), the task can be finalized, which prevents any further modifications to the task.

```js

// Finalize task
await colonyClient.finalizeTask.send({
  taskId: 1,
});

```

### Claim Payout

Once a task is finalized, each "task role" can then claim their payout:

```js

// Claim task payout
await colonyClient.claimTaskPayout.send({
  taskId: 1,
  role: 'WORKER',
  token: '0x0...',
});

```

## Payment Lifecycle

All methods associated with payments can be called using a [ColonyClient](/colonyjs/api-colonyclient) instance. The examples below are ordered in a way that reflects a general flow of the payment lifecycle from start to finish.

### Add Payment

When adding a payment, all payment properties must be assigned upon creation:

```js

// Add payment
await colonyClient.addPayment.send({
  recipient: '0x0...',
  token: '0x0...',
  amount: new BN('1000000000000000000'),
  domainId: 1,
  skillId: 2,
});

```

### View Payment

You can view information about a payment after it has been added:

```js

// Get payment
await colonyClient.getPayment.send({
  paymentId: 2,
});

```

### Fund Payment

Just like tasks, each time a payment is added, a funding pot is also added and assigned to the payment. Each funding pot assigned to a payment is specific to that payment, therefore, each payment has a unique `potId`.

In order to fund a payment, you need the `potId` of the payment (the `toPot` in the example below) and the `potId` of the domain from which the funds will be moved (the `fromPot` in the example below).

```js

// Move funds between pots
await colonyClient.moveFundsBetweenPots.send({
  fromPot: 1,
  toPot: 2,
  amount: new BN('1000000000000000000'),
  token: '0x...',
});

```

The "funding pot" associated with our payment must have enough allocated funds to make the payment assigned to the recipient. If the assigned payment amount exceeds the amount of allocated funds in the funding pot, the payment cannot be finalized.

For more information about how funding works within a colony, check out [Tokens and Funding](/colonyjs/topics-tokens-and-funding).

### Modify Payment

Unlike tasks, payments do not require signatures to be modified. A payment can be modified by an address assigned either the `ROOT` colony role or the `ADMINISTRATION` colony role.

```js

// Set payment domain
await colonyClient.setPaymentDomain.send({
  paymentId: 1,
  domainId: 1,
});

```

```js

// Set payment payout
await colonyClient.setPaymentPayout.send({
  paymentId: 1,
  token: '0x0...',
  amount: new BN('1000000000000000000'),
});
```

```js

// Set payment recipient
await colonyClient.setPaymentRecipient.send({
  paymentId: 1,
  recipient: '0x0...',
});

```

```js

// Set payment skill
await colonyClient.setPaymentSkill.send({
  paymentId: 1,
  skillId: 2,
});

```

### Finalize Payment

Once a payment has been added and funded, the payment can be finalized:

```js

// Finalize payment
await colonyClient.finalizePayment.send({
  paymentId: 1,
});

```

### Claim Payment

Once a payment has been finalized, the payment can be claimed:

```js

// Finalize payment
await colonyClient.claimPayment.send({
  paymentId: 1,
  token: '0x0...',
});

```
