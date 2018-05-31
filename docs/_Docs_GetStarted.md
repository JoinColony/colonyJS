---
title: Get Started
section: Docs
order: 2
---

The task lifecycle is a great way to get a complete picture of how colonyJS works with the Colony Network. If you're a seasoned developer, or more of an "I'll just figure it out myself" type, you might want to jump to the [Quickstart](/colonyjs/docs-quickstart/).

The most useful tool within a colony is the `task` method. Tasks are used to coordinate work, track reputation, and ultimately the only way to get paid through a colony. See [tasks](/colonynetwork/docs-tasks/) for a complete description of what tasks are within a colony.

Using colonyJS, you can query the blockchain for information about tasks, create new tasks, modify them, commit and reveal ratings, and finalize them to trigger payouts -- all from within your application.

## Getting Started
First of all, we will need to set up some prerequisites (clients for the Colony Network and for a specific Colony).

### Colony Network

You can learn about how to install the Colony Network contracts [here](/colonynetwork/docs-get-started/). It's important to note that the recommended commit to clone is currently [`ce9811a`](https://github.com/JoinColony/colonyNetwork/commit/ce9811a9f0fca53d9ab417d5fc24bbcf29c351c8). Once the contracts are compiled and running with e.g. Ganache, you should be good to go for this guide.

### Libraries

If you haven't done so already, add the required libraries to your project with `yarn`:

```bash
yarn add @colony/colony-js-client @colony/colony-js-adapter-ethers @colony/colony-js-contract-loader-http ethers
```

### Tooling

You will need some means of loading the contract definitions into your app. This is easy to do with [TrufflePig](https://github.com/JoinColony/trufflepig). See our guide to [starting TrufflePig](/colonynetwork/docs-get-started/#install-and-configure-a-contract-loader-like-trufflepig).

It's also beneficial to have a JavaScript environment that supports `async`/`await`, since colonyJS uses Promises extensively. Recent versions of Node and Chrome support Promises out of the box, but you may want to consider using [webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/) for better support.

### Example

For your application to be able to communicate with colony, you'll need to configure a [Loader](/colonyjs/docs-loaders/) to read contracts, an [Adapter](/colonyjs/docs-adapters/) to communicate with the blockchain, and a wallet to be able to send transactions that require a signature.

```js
// Import the prerequisites
const { providers, Wallet } = require('ethers');
const { default: EthersAdapter } = require('@colony/colony-js-adapter-ethers');
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http');

// Import the ColonyNetworkClient
const { default: ColonyNetworkClient } = require('@colony/colony-js-client');

// Create an instance of the Trufflepig contract loader
const loader = new TrufflepigLoader();

// Create a provider for local TestRPC (Ganache)
const provider = new providers.JsonRpcProvider('http://localhost:8545/');

// The following methods use Promises
(async () => {
  // Get the private key from the first account from the Truffle config
  const { privateKey } = await loader.getAccount(0);

  // Create a wallet with the private key (so we have a balance we can use)
  const wallet = new Wallet(privateKey, provider);

  // Create an adapter (powered by ethers)
  const adapter = new EthersAdapter({
    loader,
    provider,
    wallet,
  });

  // Connect to ColonyNetwork with the adapter!
  const networkClient = new ColonyNetworkClient({ adapter });
  await networkClient.init();

  // You'll need to either create a new colony or talk to an existing one.

  // To create a new cool colony:
  const colonyData = {
    tokenAddress: '0xf000000000000000000000000000000000000000', // Address of the colony's native token
  };

  // Create a cool Colony!
  const { eventData: { colonyId, colonyAddress }} = await networkClient.createColony.send(colonyData);

  // Congrats, you've created a Colony!
  console.log(colonyId, colonyAddress);

  // For a colony that exists already, you just need its ID:
  const colonyClient = await networkClient.getColonyClient(colonyId);

  // Or alternatively, just its address:
  // const colonyClient = await networkClient.getColonyClientByAddress(colonyAddress);

  // You can also get the Meta Colony:
  const metaColonyClient = await networkClient.getMetaColonyClient();

})();
```


## Task Life-cycle
Once the colony is configured and everything has been initialized, you can start the task workflow.

### Create
A newly created task must be assigned to a domain and must reference a `specificationHash` for the task's completion. Also known as a "Task Brief", the task specification is a description of the work to be done and how that work will be evaluated.

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

### Modify
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
### Modification with Multi-sig Operations
Important changes to a task must be approved by multiple people. Task changes requiring two signatures are:

* Changing the task Brief (Manager and Worker)
* Changing or setting the task Due Date (Manager and Worker)
* Changing or setting the Worker's payout (Manager and Worker)
* Changing or setting the Evaluator's payout (Manager and Evaluator)

Attempting to use these methods without a MultisigOperation will throw an error. You can learn more about Multisignature transactions in colonyJS [here](/colonyjs/docs-multisignature).

### Rate
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

### Finalize

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
