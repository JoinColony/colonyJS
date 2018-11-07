# Changelog

## v.NEXT

**Bug fixes**

* Fix the function called by `ColonyNetworkClient.lookupRegisteredENSDomain` (`@colony/colony-js-client`)

## v1.7.1

**Bug fixes**

* Events from the colony token are now not supported if the `ColonyClient` was instantiated without a `TokenClient`.

## v1.7.0

**Breaking changes**

* The `createToken` method now works as a regular `Sender`, i.e. `networkClient.createToken({ name, symbol })` is now `networkClient.createToken.send({ name, symbol }, options)`.

**Bug fixes**

* The return value of `ColonyClient.getTaskRole` has been changed from `rated` to `rateFail`, properly reflecting the contract.
* The parameters of the `Transfer` event in `TokenClient` now reflect the contract properly.
* Added support for `Mint` and `Transfer` events in `ColonyClient`.

## v1.6.4

**Bug fixes**

* Ensure that the `SkillAdded` event is parsed correctly when logged in transactions from `ColonyClient` (`@colony/colony-js-client` / `@colony/colony-js-contract-client`)

**Maintenance**

* Export additional flow types: `{ ContractClientConstructorArgs, ContractResponse, MultisigOperationConstructorArgs, SendOptions } (`@colony/colony-js-client` / `@colony/colony-js-contract-client`)
`
* Add support for [`ColonyNetworkENS`](https://github.com/JoinColony/colonyNetwork/blob/102ec5ec9b36645a2d6893fe6b775c155a226a6f/contracts/ColonyNetworkENS.sol)-based functionality in `ColonyNetworkClient` (`@colony/colony-js-client`)

## v1.6.3

**Maintenance**

* Fixes to Flow types, handling of types (`@colony/colony-js-contract-client`)

## v1.6.2

**Bug fixes**

* EtherscanLoader now removes anything other than `contractAddress` passed as a query to `.load()`  (`@colony/colony-js-contract-loader-http`)
* Parse the result (ABI) of Etherscan responses as JSON, as the Etherscan API has changed (`@colony/colony-js-contract-loader-http`)


**New features**

* Add `getReputation` methods to `ColonyClient` and `ColonyNetworkClient` (currently only availble for Rinkeby) (`@colony/colony-js-client`)

## v1.6.1

**Bug fixes**

* Increase the default gas limit for colony creation.
* Define `ColonyClient.setTaskSkill` as a `MultisigSender` (`@colony/colony-js-client`)

**Documentation**

* Improve documentation for `ColonyClient.setTaskManagerPayout` (`@colony/colony-js-client`)

## v1.6.0

**Maintenance**

* General updates for interacting with ColonyNetwork contracts.

**Enhancements**

* All events logged during method calls are now parsed according to their specifications on the `ContractClient`, without specifying event handlers (`@colony/colony-js-adapter-ethers`, `@colony/colony-js-contract-client`, `@colony/colony-js-client`)
* Event data in method responses is now provided in a flat format (where property names might collide) and in a format nested under the event name; e.g. `{ taskId: 1, potId: 2 }` becomes `{ taskId: 1, potId: 2, TaskAdded: { taskId: 1 }, PotAdded: { potId: 2 } }`.
* Event property names are now more specific (e.g. `taskId` rather than `id`) (`@colony/colony-js-client`)

**Documentation**
* The documentation has been updated to include more information about contract events, and the event data available in method calls.

## v1.5.4

*Released Thu, 05 Jul 2018 13:07:42 GMT*

**Features**

* `Adapter.getTransactionReceipt` now waits for an in-progress transaction to be mined before attempting to get the receipt (`@colony/colony-js-adapter-ethers`, `@colony/colony-js-client`)
* `Adapter.getTransactionReceipt` and `Adapter.waitForTransaction` now accept a timeout argument (default: 5 minutes) (`@colony/colony-js-adapter-ethers`)

**Bug fixes**

* Partial empty hex strings (e.g. `0x0`) are now padded to full-length, which resolves an issue with `EthersAdapter` (`@colony/colony-js-contract-client`)
* The `isEmptyHexString` utility function now evaluates the input type (`@colony/colony-js-utils`)

**Maintenance**

* Add extra validation for `ColonyClient.createTask`; the given domain ID for the task is now confirmed to exist before proceeding (`@colony/colony-js-client`)
* Default values for methods are now specified separately from the parameters; this simplfies the parameter conversion (`@colony/colony-js-contract-client`)
* Add a `DomainAdded` event, which is emitted when calling `ColonyClient.addDomain` (`@colony/colony-js-client`)
* Add a `PotAdded` event, which is emitted when calling `ColonyClient.addDomain` and `ColonyClient.createTask` (`@colony/colony-js-client`)
* Add the `TaskDeliverableSubmitted` and `TaskWorkRatingRevealed` events, which are available to listen on via `ColonyClient.events` (`@colony/colony-js-client`)

## v1.5.3

**Bug fixes**

* Remove the `address` property of the `Wallet` interface, because it is not universal (`@colony/colony-js-adapter`)
* Clarify that the `getAddress` method of the `Wallet` interface is asynchronous
* Use the `getAddress` method to get the current address when signing multisig operations (`@colony/colony-js-contract-client`)
* Add a `hexString` type to fix the type conversion of the secret created by `generateSecret` (`@colony/colony-js-contract-client`, `@colony/colony-js-client`)

## v1.5.2

*Released Tue, 21 June 2018 15:36:06 GMT*

**Bug fixes**
* `getTokenInfo` won't throw anymore if one of the properties `symbol`, `name` or `decimals` is not implemented on the token contract. Instead it will just report `null` for the values which are not defined (`@colony/colony-js-client`)
* Fix a bug where `authority.getUserRole` would only report `null` for every role by converting the output values from hex numbers first (`@colony/colony-js-client`)

**Documentation**

* Clarified the naming of parameters involving token addresses (`@colony/colony-js-contract-client`, `@colony/colony-js-client`)

## v1.5.1

**Bug fixes**

* Actually wait for transaction receipt in Token contract deployment. This fixes issues with real-life environments like testnets or mainnet (`@colony/colony-js-client`)

## v1.5.0

*Released Tue, 19 June 2018 12:01:38 GMT*

**New features**

* Add `getTokenInfo` caller to `TokenClient` to get the token's `name`, `symbol` and `decimals` (`@colony/colony-js-contract-client`, `@colony/colony-js-client`)

**Enhancements**

* Wait for in-progress transactions when getting the transaction receipt (`@colony/colony-js-contract-client`, `@colony/colony-js-adapter-ethers`)
* Made the default timeout for sending transactions dependent on the network: 1 hour for mainnet, 5 minutes otherwise (`@colony/colony-js-contract-client`)

## v1.4.1

**Bug fixes**

* Enabled the `networkId` to be passed from the contract loading query through to the loader transform function; reintroduced support for specifying the `networkId` in `truffleTransform` (`@colony/colony-js-contract-loader`)

## v1.4.0

**New features**

* Added new `ContractEvent` events subscription to `ContractClient`, allowing for simple events subscription (`@colony/colony-js-contract-client`)
* Added new task lifecycle events to `ColonyClient`, using new event subscriptions (`@colony/colony-js-contract-client`)
* Added support for sending multisig operations for tasks with one signature alone (when no other signatures are required) (`@colony/colony-js-client`)
* Added support for per-task nonce values for multisig operations; multisig operations can now be run in parallel (for different tasks) (`@colony/colony-js-client`)
* Added `TokenClient`, a means of interacting with a colony's token contract (`@colony/colony-js-client`)
* Added `AuthorityClient`, a means of interacting with a colony's authority contract (`@colony/colony-js-client`)
* Get `token` and `authority` when initializing a `ColonyClient` (`@colony/colony-js-client`)

**Enhancements**
* Refactored contract parameter validation and conversion to allow for events subscriptions (`@colony/colony-js-contract-client`)
* Refactored the contracts interface and `EthersContract` to allow for events subscription with optional transaction hashes (`@colony/colony-js-adapter`, `@colony/colony-js-adapter-ethers`)
* Ignore parameters that aren't in the spec when validating parameters (`@colony/colony-js-contract-client`)

**Documentation**
* Specify which users can call `addGlobalSkill`, `addDomain`, `setTaskRoleUser`, `setTaskDomain` and `setTaskSkill` (`@colony/colony-js-client`)

## v1.3.0

**New features**

Added `colony-js-contract-loader-fs`: load contracts from the local file-system in node.

## v1.2.1

**Documentation**

* Updated 'Getting Started', removed 'Quickstart' and reordered sections

**Enhancements**

* Validation errors in contract methods now contain the method name (`@colony/colony-js-contract-client`)
* Add a `release` command for the project, streamlined prepublish hooks, simplified and improved babel config

**Bug fixes**

* Fixed a bug where methods with default values were not validated properly (`@colony/colony-js-contract-client`)
* Fixed a bug where timestamps were not converted correctly (`@colony/colony-js-contract-client`)

## v1.2.0

**Enhancements**

* New `ipfsHash` parameter type, to more easily store/retrieve IPFS hashes from the contracts (`@colony/colony-js-contract-client`)
* Implement the `ipfsHash` type in `ColonyClient`: `getTask`, `createTask`, `submitTaskDeliverable`, `setTaskBrief` (`@colony/colony-js-client`)
* Add a `date` parameter type and implement it in `ColonyClient`: `getTask`, `getTaskWorkRatings`, `setTaskDueDate` (`@colony/colony-js-client`)
* Add a default value (1) for `ColonyClient.createTask` (`@colony/colony-js-client`)

**Bug fixes**

* Ensure that the returned values in `ColonyClient.getTask` were handled properly (`@colony/colony-js-client`)
* Clean 'empty' hex strings for IPFS hash output validation (`@colony/colony-js-contract-client`)

## v1.1.4

**Documentation**

* Updated the Quickstart and Get Started documentation; these guides now show how to use an `ethers` wallet, use `require` statements over `import`, and provide some additional information about prerequisites.

**Bug fixes**

* Define the `defaultGasLimit` property of Senders as a number as opposed to a `BigNumber` (`@colony/colony-js-contract-client`)

## v1.1.3

**Enhancements**

* The nonce value is now carried through when serializing and restoring MultisigOperations (`@colony/colony-js-contract-client)`

**Maintenance**

* Update `ethers` to `3.0.17` (`@colony/colony-js-adapter-ethers)`
* Use `fixed` mode in `lerna.json` (see [here](https://github.com/lerna/lerna#fixedlocked-mode-default))

**Bug fixes**

* Fix `ROLES` values to reflect contracts (`@colony/colony-js-client`)
* Fixed a bug where `MultisigOperation`s erroneously had required signees reset upon restoring an operation (`@colony/colony-js-contract-client)`

## v1.1.2

* Bumped versions of packages/interdependencies

## v1.1.1

**Bug fixes**

* Fixed the documentation site link in the `README`
* Fixed a bug where string input values were not converted properly (`@colony/colony-js-contract-client`)

## v1.1.0

**Documentation**

* General documentation updates
* Added automatic documentation generation for `@colony/colony-js-client` (`yarn build:docs`, also runs on precommit hook)

**New features**

* Added method `ColonyNetworkClient.getMetaColonyClient`
* Added Caller `ColonyClient.getDomain`
* Added `bignumber` parameter type for contract methods
* Added `role` parameter type for contract methods
* Added declarative parameter type mapping for contract methods, and `addParamType` method

**Enhancements**

* Better handling for empty values from contracts; e.g. addresses reported as '0x000...0' are cleaned as `null`
* Failed validation reasons are now added to error messages
* Updated `ColonyNetworkClient`/`ColonyClient` to match `colonyNetwork`
* Upon starting or restoring a `MultisigOperation`, the operation is refreshed to get the latest values
* Removed separate error/success contract event handling

**Bug fixes**

* Fixed a bug where the isBigNumber utility function didn't look for the correct property in ethers-ified BigNumbers
* Add `babel-runtime dependency`


## v1.0.0

*Released Tue, 22 May 2018 17:19:06 GMT*

* First release.
