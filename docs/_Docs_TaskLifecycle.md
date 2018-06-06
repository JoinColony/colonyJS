---
title: Task Lifecycle
section: Docs
order: 2
---

The most useful abstraction within a colony is the `task`. Tasks are used to coordinate work, track reputation, and ultimately the only way to get paid through a colony. See [tasks](/colonynetwork/docs-tasks/) for a complete description of what tasks are within a colony.

==TOC==


## Create
A newly created task must be assigned to a domain and must reference a `specificationHash` for the task's completion. Also known as a "Task Brief", the task specification is a description of the work to be done and how that work will be evaluated. This can be any arbitrary hash string (32 bytes), but is especially suited be a unique IPFS content hash. See [Using IPFS](#using-ipfs-for-a-task-specification) for details.

The "root domain" of any colony is `1`, and is the default value for `domainId` if unspecified.

```js
const { eventData: { taskId } } = await colonyClient.createTask.send({
  specificationHash: 'specification hash goes here',
  domainId: 1,
});
```

Once a task has been created, it can be examined:

```js
const task = await colonyClient.getTask.call({ taskId: 1 });

```

At any time before a task is finalized, the task can be canceled, which allows any funding to be returned to the colony and halts any further modification of the task.

```js
await colonyClient.cancelTask.send({ taskId: 1 });
```

## Modify
After the task has been created, the task may be modified to include additional data. This could be setting the task's worker or manager, or skill tag(s).

```js
// Set the manager
await colonyClient.setTaskRoleUser.send({
  taskId: 1,
  role: 'MANAGER',
  user: 'wallet address of manager',
});

// Set the worker
await colonyClient.setTaskRoleUser.send({
  taskId: 1,
  role: 'WORKER',
  user: 'wallet address of worker',
});

// Set the task Domain
await colonyClient.setTaskDomain.send({
  taskId: 1,
  domainId: 2,
});

// Set the task Skill
await colonyClient.setTaskSkill.send({
  taskId: 1,
  skillId: 5,
});
```
## Modification with Multi-sig Operations
Important changes to a task must be approved by multiple people. Task changes requiring two signatures are:

* Changing the task Brief (Manager and Worker)
* Changing or setting the task Due Date (Manager and Worker)
* Changing or setting the Worker's payout (Manager and Worker)
* Changing or setting the Evaluator's payout (Manager and Evaluator)

Attempting to use these methods without a MultisigOperation will throw an error. You can learn more about Multisignature transactions in colonyJS [here](/colonyjs/docs-multisignature).

## Rate
After the work has been submitted (or the due date has passed), the work rating period begins.

Task payouts are determined by work rating, which is currently implemented as "5-star" system, but which will change to a "3-star" system in the future.

* The Evaluator reviews the work done and submits a rating for the Worker.
* The Worker considers the task assignment and submits a rating for the Manager.

Because work ratings are on-chain, they follow a _*Commit* and *Reveal*_ pattern in which ratings are obscured to prevent them from influencing each other.


* During the *Commit* period, hidden ratings are submitted to the blockchain. The commit period lasts 5 days.

```js
const ratingSecret = await colonyClient.generateSecret.call({ salt, rating });

await colonyClient.submitTaskWorkRating.send({
  taskId: 1
  role: 'WORKER',
  ratingSecret,
});
```

* During the *Reveal* period, users submit a transaction to reveal their rating.

```js
await colonyClient.revealTaskWorkRating.send({
  taskId: 1,
  role: 'WORKER',
  rating,
  salt,
});
```

During the rating period, if either party fails to commit or reveal their rating, their counterpart is given the highest possible rating, and their own rating is penalized.

It's easy to check the status of a task during the rating period:

```js
const { count, timestamp } = await colonyClient.getTaskWorkRatings.call({
  taskId: 1,
});
```

## Finalize

After the rating period has finished, the task may be finalized, which prevents any further task modifications and allows each role to claim their payout.

```js
await colonyClient.finalizeTask.send({
  taskId: 1,
});

await colonyClient.claimPayout.send({
  taskId: 1,
  role: 'WORKER',
  token: 'token contract address',
});
```


## Using IPFS for a Task Specification
The task specification is meant to be a description of work to be done that would be considered sufficient for a task payout. The exact format is left open; it could be a text file, .pdf, or other media.

A natural way to use the `specificationHash` field is to point to a file hosted on IPFS.

## Set up IPFS
For development with colonyJS, IPFS must be aded to your project

The easiest way to add ipfs is via npm:
```
yarn add ipfs
```

Then include it in your project's code:
```
const IPFS = require('ipfs');
const ipfs = new IPFS();
```

This will run a full IPFS node in node.js or your browser. Heads up! Running your IPFS node in browser will require you to install the [`Buffer` package](https://www.npmjs.com/package/buffer).


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
The IPFS hash is returned after adding the file to IPFS. Use that return to pass the specificationHash value on to the `createTask` method. This example uses a specification in JSON format:

```
const data = Buffer.from(JSON.stringify(spec));
const files = await ipfs.files.add(data)
const { hash } = files[0];

colonyClient.createTask.send({ specificationHash: hash });
```

## Retrieve the task specification from IPFS
To retrieve the specification from IPFS for a task that's already been created, use the `getTask` method:

```
const task = await colonyClient.getTask.call({ taskId })
const buffer = await node.files.cat(`/ipfs/${task.specificationHash}`);
// If you used json you probably want to parse it back
const contents = JSON.parse(buf.toString());
```

You can always update the specificationHash by calling the `setTaskBrief` multisignature operation. See [multisignature transactions](/colonyjs/docs-multisignature-transactions/) for more details.
