---
title: Task Lifecycle
section: Docs
order: 2
---

The most useful abstraction within a colony is the `task`. Tasks are used to coordinate work, track reputation, and ultimately the only way to get paid through a colony. See [tasks](/colonynetwork/docs-tasks/) for a complete description of what tasks are within a colony.

Tasks have 3 'roles' that may be assigned to addresses: manager, evaluator, and worker. Each role and its permissions are outlined in the table below:

|                          | Manager | Evaluator | Worker |
|--------------------------|---------|-----------|--------|
| setTaskBrief             | X       |           | *      |
| setTaskDomain            | X       |           |        |
| setTaskSkill             | X       |           | *      |
| setTaskDueDate           | X       |           | *      |
| setTaskManagerPayout     | X       |           | *      |
| setTaskEvaluatorPayout   | X       | *         |        |
| setTaskWorkerPayout      | X       |           | *      |
| setTaskManagerRole       | X       |           |        |
| setTaskEvaluatorRole     | X       |           |        |
| setTaskWorkerRole        | X       |           |        |
| removeTaskWorkerRole     | X       |           | *      |
| removeTaskEvaluatorRole  | X       | *         |        |
| submitTaskDeliverable    |         |           | X      |
| cancelTask               | X       |           |        |
| finalizeTask             | X       | X         | X      |

( * ) - If the task has been assigned to a role already, the operation requires this role's signature.


==TOC==


## Create

A newly created task must be assigned to a domain and must reference a `specificationHash` for the task's completion. Also known as a "Task Brief", the task specification is a description of the work to be done and how that work will be evaluated. This can be any arbitrary hash string (32 bytes), but is especially suited be a unique IPFS content hash. See [Using IPFS](#using-ipfs-for-a-task-specification) for details.

The "root domain" of any colony is `1`, and is the default value for `domainId` if unspecified.

```js
const { eventData: { taskId } } = await colonyClient.createTask.send({
  specificationHash,
  domainId,
});
```

Once a task has been created, it can be examined:

```js
await colonyClient.getTask.call({ taskId });
```

At any time before a task is finalized, the task can be canceled, which allows any funding to be returned to the colony and halts any further modification of the task.

```js
await colonyClient.cancelTask.send({ taskId });
```

## Modification

After the task has been created, the task domain can be modified.

```js
// Set the task domain
await colonyClient.setTaskDomain.send({
  taskId,
  domainId,
});
```

## Modification with Multisig Operations

Important changes to a task must be approved by multiple people. Task changes requiring two signatures are:

* Changing the task brief (Manager and Worker)
* Changing or setting the task skill (Manager and Worker)
* Changing or setting the task due date (Manager and Worker)
* Changing or setting the managers's payout (Manager and Worker)
* Changing or setting the evaluator's payout (Manager and Evaluator)
* Changing or setting the worker's payout (Manager and Worker)
* Removing the evaluator's role (Manager and Evaluator)
* Removing the worker's role (Manager and Worker)

```js
// Set the task brief
await colonyClient.setTaskBrief.startOperation({
  taskId,
  specificationHash,
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
```

Some changes can be made by an admin but still need be approved by the task manager. Task changes made by an admin that require the managers signature are:

* Changing or setting the managers's role (Manager)
* Changing or setting the evaluator's role (Manager)
* Changing or setting the workers's role (Manager)

```js
// Set the task manager role
await colonyClient.setTaskManagerRole.startOperation({
  taskId,
  user,
});

// Set the task worker role
await colonyClient.setTaskEvaluatorRole.startOperation({
  taskId,
  user,
});

// Set the task worker role
await colonyClient.setTaskWorkerRole.startOperation({
  taskId,
  user,
});
```

Attempting to use these methods without a MultisigOperation will throw an error. You can learn more about Multisignature transactions in colonyJS [here](/colonyjs/docs-multisignature-transactions/).

## Rate

After the work has been submitted (or the due date has passed), the work rating period begins.

Task payouts are determined by work rating based on a "3-star" system.

* The Evaluator reviews the work done and submits a rating for the Worker.
* The Worker considers the task assignment and submits a rating for the Manager.

Because work ratings are on-chain, they follow a _*Commit* and *Reveal*_ pattern in which ratings are obscured to prevent them from influencing each other.

* During the *Commit* period, hidden ratings are submitted to the blockchain. The commit period lasts 5 days or as long as it takes for all ratings to be submitted.

```js
const secret = await colonyClient.generateSecret.call({ salt, value });

await colonyClient.submitTaskWorkRating.send({
  taskId,
  role,
  secret,
});
```

* During the *Reveal* period, users submit a transaction to reveal their rating. The reveal period lasts 5 days or as long as it takes for all ratings to be revealed.

```js
await colonyClient.revealTaskWorkRating.send({
  taskId,
  role,
  rating,
  salt,
});
```

During the rating period, if either party fails to commit or reveal their rating within the given period, their counterpart is given the highest possible rating, and their own rating is penalized.

It's easy to check the status of a task during the rating period:

```js
const { count, timestamp } = await colonyClient.getTaskWorkRatings.call({
  taskId,
});
```

## Finalize

After the rating period has finished, the task may be finalized, which prevents any further task modifications and allows each role to claim their payout.

```js
await colonyClient.finalizeTask.send({
  taskId,
});

await colonyClient.claimPayout.send({
  taskId,
  role,
  token,
});
```

## Using IPFS for a Task Specification

The task specification is meant to be a description of work to be done that would be considered sufficient for a task payout. The exact format is left open; it could be a text file, .pdf, or other media.

A natural way to use the `specificationHash` field is to point to a file hosted on IPFS.

## Set up IPFS

For development with colonyJS, IPFS must be aded to your project

The easiest way to add ipfs is via npm:
```bash
yarn add ipfs
```

Then include it in your project's code:
```bash
const IPFS = require('ipfs');
const ipfs = new IPFS();
```

This will run a full IPFS node in node.js or your browser. Heads up! Running your IPFS node in browser will require you to install the [`Buffer` package](https://www.npmjs.com/package/buffer) seperately (while it's included in node.js by default).

#### Alternative IPFS setup

You can also run a go node and access it via [js-ipfs-api](https://github.com/ipfs/js-ipfs-api) which should conform to the [IPFS core interface specification](https://github.com/ipfs/interface-ipfs-core).

If you decided to use the go node approach, this should get you a running installation of go-ipfs:

1. Download ipfs-update for your platform [Install IPFS | IPFS Docs](https://ipfs.io/docs/install/#installing-with-ipfs-update) (for example `curl -O https://dist.ipfs.io/ipfs-update/v1.5.2/ipfs-update_v1.5.2_darwin-amd64.tar.gz` for MacOS
2. Unpack and install:
`tar -xvzf ipfs-update_v1.5.2_darwin-amd64.tar.gz`
`cd ipfs-update && ./install.sh`
4. Get the `latest` version of IPFS:
`ipfs-update install latest`
5. Check whether ipfs is installed properly
```
$ ipfs --version
ipfs version 0.4.15
```

## Set the `specificationHash`

The IPFS hash is returned after adding the file to IPFS. Use that return to pass the specificationHash value on to the `createTask` method.

IPFS requires that files be uploaded as a `Buffer`, which is a binary representation of the data to host.

To create that buffer, the specification must first be 'converted' to a JSON string.

```js
// Prepare our data by passing our spec object as a JSON string to `Buffer`
const data = Buffer.from(JSON.stringify(spec));
// upload your file to IPFS
const files = await ipfs.files.add(data)
// set the hash when it's returned after upload
const { hash } = files[0];

// Create a new task with your IPFS hash set as the specificationHash
colonyClient.createTask.send({ specificationHash });
```

You can also update the specificationHash by calling the `setTaskBrief` multisignature operation. See [multisignature transactions](/colonyjs/docs-multisignature-transactions/) for more details.

## Retrieve the task specification from IPFS

To retrieve the specification from IPFS for a task that's already been created, use the `getTask` method.

```js
const task = await colonyClient.getTask.call({ taskId })
// IPFS will provide a binary representation ('buffer') of our spec given the hash from our task
const buffer = await node.files.cat(`/ipfs/${task.specificationHash}`);
// You likely will want to parse the buffer back into a regular JS object:
const contents = JSON.parse(buffer.toString());
```
