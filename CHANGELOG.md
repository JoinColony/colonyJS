# Changelog

## next

This release implements a lot of changes and additions in preparation for the upcoming deployment of the colonyNetwork contracts on `rinkeby` and `mainnet`. This release currently supports the colonyNetwork smart contracts at commit `5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce`.

Also, please note that colonyJS is currently using `ethers` version `3.0.27`.

**New Features**

* Added `createTokenAuthority`method (`@colony/colony-js-client`)

**Types**

* Added `[number]` param type (`@colony/colony-js-contract-client`)
* Renamed `tokenAddress` param type to `anyAddress` to better reflect its uses (`@colony/colony-js-contract-client`)

**Maintenance**

* Updated constants (`@colony/colony-js-client`)
  * Added `COLONY_ROLE_ADMINISTRATION`
  * Added `COLONY_ROLE_ARBITRATION`
  * Added `COLONY_ROLE_ARCHITECTURE`
  * Added `COLONY_ROLE_ARCHITECTURE_SUBDOMAIN`
  * Added `COLONY_ROLE_FUNDING`
  * Added `COLONY_ROLE_RECOVERY`
  * Added `COLONY_ROLE_ROOT`
  * Added `COLONY_ROLES`
  * Added `ETHER_ADDRESS`
  * Added `FUNDING_POT_TYPE_DOMAIN`
  * Added `FUNDING_POT_TYPE_PAYMENT`
  * Added `FUNDING_POT_TYPE_TASK`
  * Added `FUNDING_POT_TYPE_UNASSIGNED`
  * Added `FUNDING_POT_TYPES`
  * Added `TASK_RATING_NONE`
  * Added `TASK_RATING_UNSATISFACTORY`
  * Added `TASK_RATING_SATISFACTORY`
  * Added `TASK_RATING_EXCELLENT`
  * Added `TASK_RATINGS`
  * Added `TASK_ROLE_EVALUATOR`
  * Added `TASK_ROLE_MANAGER`
  * Added `TASK_ROLE_WORKER`
  * Added `TASK_ROLES`
  * Removed `FOUNDER_ROLE`
    * `FOUNDER_ROLE` has been deprecated in favor of the new colony roles. When using the `setFounderRole` method provided by the `OldRoles.sol` extension contract, the following colony roles will be applied:
      * `COLONY_ROLE_ROOT`
      * `COLONY_ROLE_ARCHITECTURE`
      * `COLONY_ROLE_FUNDING`
      * `COLONY_ROLE_ADMINISTRATION`
  * Removed `ADMIN_ROLE`
    * `ADMIN_ROLE` has been deprecated in favor of the new colony roles. When using the `setAdminRole` method provided by the `OldRoles.sol` extension contract, the following colony roles will be applied:
      * `COLONY_ROLE_ARCHITECTURE`
      * `COLONY_ROLE_FUNDING`
      * `COLONY_ROLE_ADMINISTRATION`
  * Removed `AUTHORITY_ROLES`
    * `AUTHORITY_ROLES` has been replaced by `COLONY_ROLES`
  * Removed `MANAGER_ROLE`
    * `MANAGER_ROLE` has been replaced with `TASK_ROLE_MANAGER`
  * Removed `EVALUATOR_ROLE`
    * `EVALUATOR_ROLE` has been replaced with `TASK_ROLE_EVALUATOR`
  * Removed `WORKER_ROLE`
    * `WORKER_ROLE` has been replaced with `TASK_ROLE_WORKER`
  * Removed `ACTIVE_TASK_STATUS`
    * `ACTIVE_TASK_STATUS` has been replaced with `TASK_STATUS_ACTIVE`
  * Removed `CANCELLED_TASK_STATUS`
    * `CANCELLED_TASK_STATUS` has been replaced with `TASK_STATUS_CANCELLED`
  * Removed `FINALIZED_TASK_STATUS`
    * `FINALIZED_TASK_STATUS` has been replaced with `TASK_STATUS_FINALIZED`
  * Updated `TASK_ROLES`
    * `TASK_ROLES` has been updated to use the following reformatted constants:
      * `TASK_ROLE_MANAGER`
      * `TASK_ROLE_EVALUATOR`
      * `TASK_ROLE_WORKER`

* Updated caller methods in `ColonyClient` (`@colony/colony-js-client`)
  * Added `getAuthorityAddress`
  * Added `getColonyNetworkAddress`
  * Added `getExtensionAddress`
  * Added `getFundingPotPayout`
  * Added `getOwnerAddress`
  * Added `getPayment`
  * Added `getPaymentCount`
  * Added `getTaskWorkRatingSecretsInfo`
  * Added `getTokenAddress`
  * Added `hasColonyRole`
  * Added `verifyReputationProof`
  * Removed `getAuthority`
    * `getAuthorityAddress` has replaced `getAuthority`.
  * Removed `getTaskWorkRatings`
    * `getTaskWorkRatingSecretsInfo` has replaced `getTaskWorkRatings`.
  * Removed `getToken`
    * `getTokenAddress` has replaced `getToken`.
  * Removed `getTotalTaskPayout`
    * `getFundingPotPayout` has replaced `getTotalTaskPayout`.
  * Removed `hasUserRole`
    * `hasColonyRole` has replaced `hasUserRole`. `hasColonyRole` uses `address` instead of `user` as an input parameter and adds `domainId`.
  * Updated `getDomain`
    * Changed `localSkillId` output parameter to `skillId`.
  * Updated `getFundingPot`
    * Changed `associatedType` output parameter to `type`.
    * Changed `associatedTypeId` output parameter to `typeId`.
    * Added `payoutsWeCannotMake` output parameter.
  * Updated `getRewardPayoutInfo`
    * Updated output parameters based on the new `RewardPayoutCycle` struct.
  * Updated `getTask`
    * Removed `payoutsWeCannotMake` output parameter.

* Updated sender methods in `ColonyClient` (`@colony/colony-js-client`)
  * Added `addExtension`
  * Added `addNetworkColonyVersion` (MetaColony)
  * Added `addPayment`
  * Added `addTask`
  * Added `claimPayment`
  * Added `claimTaskPayout`
  * Added `claimRewardPayout`
  * Added `deprecateGlobalSkill` (MetaColony)
  * Added `finalizePayment`
  * Added `removeExtension`
  * Added `setAdministrationRole`
  * Added `setArchitectureRole`
  * Added `setFundingRole`
  * Added `setPaymentDomain`
  * Added `setPaymentPayout`
  * Added `setPaymentRecipient`
  * Added `setPaymentSkill`
  * Added `setRootRole`
  * Removed `claimPayout`
    * See `claimPayment` and `claimTaskPayout` for more information.
  * Removed `createTask`
    * `addTask` has replaced `createTask` for consistency.
  * Removed `removeAdminRole` (See `setAdminRole`)
  * Updated `addGlobalSkill`
    * Removed `parentSkillId` as an input parameter. Global skills no longer exist within a skills tree and always use `0` for the `parentSkillId`.
  * Updated `bootstrapColony`
    * Changed `users` input parameter to `addresses`.
  * Updated `makePayment`
    * Changed `worker` input parameter to `recipient`.
  * Updated `removeRecoveryRole`
    * Changed `user` input parameter to `address`.
  * Updated `setRecoveryRole`
    * Changed `user` input parameter to `address`.
  * Updated `setAdminRole`
    * `setAdminRole` is now connected to the `OldRoles` extension contract.
    * Changed `user` input parameter to `address`.
    * Added `setTo` input parameter.
  * Updated `setFounderRole`
    * `setAdminRole` is now connected to the `OldRoles` extension contract.
    * Changed `user` input parameter to `address`.
  * Updated `setTaskEvaluatorRole`
    * Changed `user` input parameter to `address`.
  * Updated `setTaskManagerRole`
    * Changed `user` input parameter to `address`.
  * Updated `setTaskWorkerRole`
    * Changed `user` input parameter to `address`.
  * Updated `startNextRewardPayout`
    * Added `key` input parameter.
    * Added `value` input parameter.
    * Added `branchMask` input parameter.
    * Added `siblings` input parameter.

* Updated events in `ColonyClient` (`@colony/colony-js-client`)
  * Added `ColonyAdministrationRoleSet`
  * Added `ColonyArchitectureRoleSet`
  * Added `ColonyFundingRoleSet`
  * Added `ColonyRootRoleSet`
  * Added `ColonyVersionAdded`
  * Added `PaymentAdded`
  * Added `PayoutClaimed`
  * Removed `ColonyAdminRoleRemoved`
    * `ColonyAdministrationRoleSet` has replaced `ColonyAdminRoleRemoved`.
    * `ColonyAdministrationRoleSet` changes `user` parameter to `address`.
    * `ColonyAdministrationRoleSet` adds `setTo` parameter.
  * Removed `ColonyAdminRoleSet`
    * `ColonyAdministrationRoleSet` has replaced `ColonyAdminRoleRemoved`.
    * `ColonyAdministrationRoleSet` changes `user` parameter to `address`.
    * `ColonyAdministrationRoleSet` adds `setTo` parameter.
  * Removed `ColonyFounderRoleSet`
    * `ColonyRootRoleSet` has replaced `ColonyFounderRoleSet`.
    * `ColonyRootRoleSet` changes `user` parameter to `address`.
    * `ColonyRootRoleSet` adds `setTo` parameter.
  * Removed `TaskPayoutClaimed`
    * `PayoutClaimed` has replaced `TaskPayoutClaimed`.
  * Updated `ColonyBootstrapped`
    * Changed `users` parameter to `addresses`.
  * Updated `ColonyInitialised`
    * Added `token` parameter.

* Updated caller methods in `ColonyNetworkClient` (`@colony/colony-js-client`)
  * Added `calculateMinerWeight`
  * Added `getENSRegistrarAddress`
  * Added `getMiningResolverAddress`
  * Added `getReplacementReputationUpdateLogEntry`
  * Added `getReputationMiningCycle`
  * Added `getReputationMiningSkillId`
  * Added `getReputationRootHash`
  * Added `getReputationRootHashNodeCount`
  * Added `getTokenLockingAddress`
  * Removed `getRootGlobalSkillId`
    * `getReputationMiningSkillId` has replaced `getRootGlobalSkillId`.
  * Removed `getTokenLocking`
    * `getTokenLockingAddress` has replaced `getTokenLocking`.
    * `getTokenLockingAddress` changes `lockingAddress` parameter to `address`.
  * Updated `getSkill`
    * Added `parents` output parameter.
    * Added `children` output parameter.

* Updated sender methods in `ColonyNetworkClient` (`@colony/colony-js-client`)
  * Added `appendReputationUpdateLog`
  * Added `deprecateSkill`
  * Added `initialiseReputationMining`
  * Added `registerColonyLabel`
  * Added `setMiningResolver`
  * Added `setReplacementReputationUpdateLogEntry`
  * Added `setReputationRootHash`
  * Added `startNextMiningCycle`
  * Updated `addSkill`
    * Removed `globalSkill` input parameter.
  * Updated `removeRecoveryRole`
    * Changed `user` input parameter to `address`.
  * Updated `setRecoveryRole`
    * Changed `user` input parameter to `address`.

* Updated events in `ColonyNetworkClient` (`@colony/colony-js-client`)
  * Added `ColonyVersionAdded`

* Updated `TokenClient` to reflect `colonyToken` contract (`@colony/colony-js-client`)

## v1.11.2

**Bug Fixes**

* Fix transaction retrieval after sending in `EthersWrappedWallet` (`@colony/colony-js-client`)

**Types**

* Add missing event definitions to `ColonyClient` (`@colony/colony-js-client`)
  * `ColonyAdminRoleSet`
  * `ColonyFounderRoleSet`

## v1.11.1

**Bug Fixes**

* Fix `ethers` wallet being passed to `getNetworkClient` (`@colony/colony-js-client`)
* Fix `address` depth when using `EthersWrappedWallet` (`@colony/colony-js-client`)
* Fix `gasLimit` based on estimate in `EthersWrappedWallet` (`@colony/colony-js-client`)
* Fix `amount` type for `send` in `EthersWrappedWallet` (`@colony/colony-js-client`)

## v1.11.0

**New Features**

* Add `getNetworkClient` method (`@colony/colony-js-client`)
* Add `getFundingPot` and `getFundingPotCount` (`@colony/colony-js-client`)
* Add temporary `makePayment` method (`@colony/colony-js-client`)
* Add versioned contracts for `rinkeby-v3` (`@colony/colony-js-contract-loader-network`)

**Maintenance**

* Update `TokenClient` to use `DSToken` contract (`@colony/colony-js-client`)
* Update `getPotBalance` to `getFundingPotBalance` (`@colony/colony-js-client`)
* Update `PotAdded` to `FundingPotAdded` (`@colony/colony-js-client`)

## v1.10.0

**Bug fixes**

* Use BigNumber for token amount in `TaskPayoutSet` and `TaskPayoutClaimed` (`@colony/colony-js-client`)

**New Features**

* Add `[address]` and `[bigNumber]` param type and validation (`@colony/colony-js-contract-client`)
* Add `ContractData` to `ContractClient` classes (`@colony/colony-js-contract-client`)
* Add `ColonyClient` methods and events (`@colony/colony-js-client`)
  * `ColonyBootstrapped`
  * `bootstrapColony`
  * `getNetworkFee`
  * `setNetworkFee`
  * `setNetworkFeeInverse`
  * `setRewardInverse`
* Extend `ColonyClient` with MetaColony methods and events (`@colony/colony-js-client`)
  * Add `addMetaColonySender` to add when `IMetaColony` contract
  * Update `getMetaColonyClient` to query `IMetaColony` contract
* Add `TokenLockingClient` and methods and events (`@colony/colony-js-client`)
  * `TokenLocked`
  * `UserTokenDeposited`
  * `UserTokenUnlocked`
  * `UserTokenWithdrawn`
  * `deposit`
  * `getTotalLockCount`
  * `getUserLock`
  * `lockToken`
  * `incrementLockCounterTo`
  * `unlockTokenForUser`
  * `withdraw`

**Maintenance**

* Update `token` to `tokenClient` (`@colony/colony-js-client`)
* Remove methods from `ColonyClient` (`@colony/colony-js-client`)
  * `ColonyTokenSet`
  * `assignWorkRating`
  * `initialise`
  * `getTransactionCount`
  * `setToken`
* Update methods in `ColonyClient` (`@colony/colony-js-client`)
  * Update `getGlobalRewardPayoutCount` to `getTotalLockCount`
  * Update `getUserRewardPayoutCount` to `getUserLock`
  * Update `waiveRewardPayouts` to `incrementLockCounterTo`

## v1.9.0

**Bug fixes**

* The `ColonyFounderRoleSet` event is now named correctly (`@colony/colony-js-client`)
* Initialize `MetaColonyClient` and `ColonyClient` before returning them (`@colony/colony-js-client`)

**New features**

* Add `getAccounts` method to `TrufflepigLoader` (`@colony/colony-js-contract-loader-http`)
* Add event log parsing with `ContractEvent.parseLogs` (`@colony/colony-js-contract-client`)
* Add historical log fetching with `ContractClient.getLogs`, and optionally also parsing with `.getEvents` (`@colony/colony-js-contract-client`)

## v1.8.1

**Bug fixes**

* Define `ColonyClient.addDomain` as a `MultisigSender` (`@colony/colony-js-client`)
* Define `ColonyClient.cancelTask` as a `MultisigSender` (`@colony/colony-js-client`)

**Maintenance**

* Removed `engines -> yarn` requirement

## v1.8.0

**Maintenance**

* Add `ColonyClient` events:
  * `ColonyAdminRoleRemoved`
  * `ColonyAdminRoleSet`
  * `ColonyFounderRoleSet`
  * `ColonyFundsClaimed`
  * `ColonyFundsMovedBetweenFundingPots`
  * `ColonyInitialised`
  * `ColonyRewardInverseSet`
  * `ColonyUpgraded`
  * `RewardPayoutClaimed`
* Add `ColonyNetworkClient` events:
  * `ColonyNetworkInitialised`
  * `ColonyVersionAdded`
  * `MetaColonyCreated`
  * `MiningCycleResolverSet`
  * `NetworkFeeInverseSet`
  * `ReputationMiningCycleComplete`
  * `ReputationMiningInitialised`
  * `ReputationRootHashSet`
  * `TokenLockingAddressSet`
* Add recovery methods to `ColonyNetworkClient`/`ColonyClient`:
  * `approveExitRecovery`
  * `enterRecoveryMode`
  * `exitRecoveryMode`
  * `getRecoveryRolesCount`
  * `isInRecoveryMode`
  * `removeRecoveryRole`
  * `setRecoveryRole`
  * `setStorageSlotRecovery`
* Add `hasUserRole` caller to `ColonyClient`
* Remove `AuthorityClient` as it is no longer needed.
* Rename `OWNER` role to `FOUNDER`.

**Bug fixes**

* Improved handling of invalid UTF8 hex strings

## v1.7.5

**Bug fixes**

* Update `contractName` for `AuthorityClient` from `Authority` to `ColonyAuthority` (`@colony/colony-js-client`)
* Add `MetaColonyClient` and move corresponding methods over from `ColonyClient` (`@colony/colony-js-client`)
* Fix expected `Buffer` type when converting the output for param type `ipfsHash` (`@colony/colony-js-client`)
* Add the event `TaskPayoutClaimed` to the `claimPayout` method (`@colony/colony-js-client`)
* Add missing `Transfer` event to the `mintTokens` method (`@colony/colony-js-client`)

## v1.7.4

**Bug fixes**

* Add `colonyName` and `orbitDBPath` parameters to `ColonyClient.registerColonyLabel` (`@colony/colony-js-client`)

## v1.7.3

**Bug fixes**

* Set a default gas limit for `ColonyNetworkClient.registerUserLabel` (`@colony/colony-js-client`)
* Make the `SendOptions` flow type properties all optional (e.g. `gasLimit`) (`@colony/colony-js-client`, `@colony/colony-js-contract-client`)
* Do not convert basic string inputs to hex (`@colony/colony-js-client`)

## v1.7.2

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
