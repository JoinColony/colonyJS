# @colony/sdk

## 3.0.0-next.1

### Patch Changes

- 232993e: Actually export ContractConfig class, as well as the Address type from AbiType

## 3.0.0-next.0

### Major Changes

- e374bc2: Make Arbitrum One the default network in all cases. While this can be considered a breaking change it does not change any of the APIs.

### Minor Changes

- 6239827: Add support for the `imwss3` colonyNetwork release.
- 2bdfe0c: Add support for custom contracts

### Patch Changes

- c84bb1d: Introduce `tsx` instead of `ts-node` for esm compatibility reasons. This required some changes to how we import and export types from .ts files, so a lint rule was added for this.
- Updated dependencies [6239827]
- Updated dependencies [e374bc2]
- Updated dependencies [c84bb1d]
  - @colony/core@3.0.0-next.0
  - @colony/events@4.0.0-next.0
  - @colony/tokens@1.0.0-next.0

## 2.1.0

### Minor Changes

- 1645c03: Add Streaming Payments v5
- 1645c03: - Refactor events to namespace event object exports
  - Add support for MultisigPermissions in `colony-js`

### Patch Changes

- Updated dependencies [fefdd57]
- Updated dependencies [1645c03]
- Updated dependencies [1645c03]
- Updated dependencies [1645c03]
  - @colony/core@2.3.0
  - @colony/events@3.0.0
  - @colony/tokens@0.3.0

## 2.0.3

### Patch Changes

- 8dc948e: Namespace event package exports for improved compatibility
- Updated dependencies [8dc948e]
- Updated dependencies [f1093cc]
  - @colony/events@2.0.0
  - @colony/tokens@0.2.2
  - @colony/core@2.2.0

## 2.0.2

### Patch Changes

- 07d6863: Allow for nodeJS version 20 support
- Updated dependencies [07d6863]
  - @colony/events@1.0.1
  - @colony/tokens@0.2.1
  - @colony/core@2.0.1

## 2.0.1

### Patch Changes

- Updated dependencies [301493e]
  - @colony/events@1.0.0

## 2.0.0

### Major Changes

- 36f9df2: Calling `getBalance` on a Colony without specifying a `teamId` will now return the total balance of the specified token across the whole Colony (including not-yet-claimed funds)
- 3a87d0c: **`sdk`**

  - `getReputation` now returns reputation within a domain as a percentag of the whole reputation within the team
  - `getReputationPoints` can be used to get the previous behavior
  - Added an `initialize` function to the `VotingReputation` extension

- 029288c: This changes the way `colony-js` clients are typed. We retain only the types of the last 5 versions of the types, all older versions will go untyped. This will give us some breathing room, at least for the amount of extensions that we have now.

  Furthermore the most recent (upcoming) contract changes were included in ColonyJS.

  Some changes were made to fix builds.

- beb7608: Breaking: Change the transaction API to allow for just sending txns and not waiting for them to be mined

  This change adds the new Colony SDK transaction API. The following is now applicable for all transaction methods (motions and metatransactions included)

  ```ts
  // Send off the transaction and only wait for the transaction hash
  const [tx, mined] = await colony.oneTx.pay(/* args */).tx().send(); // you can call mined() later (will yield the same as the fn below)
  // Send off the transaction and wait for it to be mined. Gets receipt and event data
  const [eventData, receipt] = await colony.oneTx.pay(/* args */).tx().mined();
  // Same for metatransactions
  await colony.oneTx.pay(/* args */).metaTx().send();
  await colony.oneTx.pay(/* args */).metaTx().mined();
  await; // And motions
  await colony.oneTx.pay(/* args */).motion().send();
  await colony.oneTx.pay(/* args */).motion().mined();
  await; // And metatransaction motions
  await colony.oneTx.pay(/* args */).metaMotion().send();
  await colony.oneTx.pay(/* args */).metaMotion().mined();
  ```

  Furthermore one can now encode regular transactions and motions into raw strings:

  ```ts
  const encoded_str = await colony.oneTx.pay(/* args */).tx().encode();
  const encoded_motion_str = await colony.oneTx
    .pay(/* args */)
    .motion()
    .encode();
  ```

- d703cc6: All examples, docs and guides are now adjusted to the v2 API.
- c8f5f74: **`cross-fetch` was removed as a dependency.**

  Users of this library have to make sure that a fetch function exists in the global namespace (e.g. by using `node-fetch` and [adding it to the `globalThis`](https://github.com/node-fetch/node-fetch#providing-global-access)).

  It also adds another build target for Colony SDK which is a minified bundle of the library

- 3a1251c: - Adjusted docs, examples and guides to v2
  - Event sources for the `EventManger` can now be hot-plugged and are not hardcoded anymore.

### Minor Changes

- e931d0e: - `event-metadata` package was removed and all its functionality went into the `events` package

  - `ColonyEventManager` was moved to the `events` package as well
  - `sdk/graph` was removed and will be added back at a later point

  - There is now a `getMotionResult` method to get the result of a finalizeable motion.

- 245fc59: Add support for `glwss4` contracts in Colony SDK. No API changes were necessary.
  Contractor was bumped to v1.0.1 of the `@colony/abis` package
  In `core`, a guard was added to prevent trying to get permission proofs without an address.

### Patch Changes

- 8de9d9c: Upgrade TypeDoc to v0.24.8 and adjust link syntax style
- b3793fc: - Fix version incompatibility detection of the VotingReputation extension
  - Support version 3 of the OneTxPayment contract
- dd5e3c5: Use tsc for compilation in colony-js and sdk
- 415be09: Do not overwrite or delete build files
- 542ffad: Adjust import/export statements to be compatible with ESM only within node.js
- 50eefa9: Improve compatibility between ESM package.json generation and changesets:
  - Use template file for package.json stub files (for changeset compatibility)
  - Add .js extensions also for type imports and exports
  - Add type entries to all package.json files
  - Rename all .js config files to .cjs
- Updated dependencies [e931d0e]
- Updated dependencies [245fc59]
- Updated dependencies [8de9d9c]
- Updated dependencies [3a87d0c]
- Updated dependencies [029288c]
- Updated dependencies [c8f5f74]
- Updated dependencies [3439729]
- Updated dependencies [542ffad]
- Updated dependencies [50eefa9]
  - @colony/events@0.3.0
  - @colony/core@2.0.0
  - @colony/tokens@0.2.0

## 2.0.0-next.11

### Patch Changes

- dd5e3c57: Use tsc for compilation in colony-js and sdk

## 2.0.0-next.10

### Patch Changes

- 415be09e: Do not overwrite or delete build files

## 2.0.0-next.9

### Major Changes

- 029288cd: This changes the way `colony-js` clients are typed. We retain only the types of the last 5 versions of the types, all older versions will go untyped. This will give us some breathing room, at least for the amount of extensions that we have now.

  Furthermore the most recent (upcoming) contract changes were included in ColonyJS.

  Some changes were made to fix builds.

### Patch Changes

- Updated dependencies [029288cd]
  - @colony/core@2.0.0-next.4
  - @colony/events@0.3.0-next.4
  - @colony/tokens@0.2.0-next.2

## 2.0.0-next.8

### Major Changes

- c8f5f743: **`cross-fetch` was removed as a dependency.**

  Users of this library have to make sure that a fetch function exists in the global namespace (e.g. by using `node-fetch` and [adding it to the `globalThis`](https://github.com/node-fetch/node-fetch#providing-global-access)).

  It also adds another build target for Colony SDK which is a minified bundle of the library

### Patch Changes

- Updated dependencies [c8f5f743]
  - @colony/core@2.0.0-next.3
  - @colony/events@0.3.0-next.3

## 2.0.0-next.7

### Minor Changes

- e931d0e3: - `event-metadata` package was removed and all its functionality went into the `events` package

  - `ColonyEventManager` was moved to the `events` package as well
  - `sdk/graph` was removed and will be added back at a later point

  - There is now a `getMotionResult` method to get the result of a finalizeable motion.

### Patch Changes

- Updated dependencies [e931d0e3]
  - @colony/events@0.3.0-next.2

## 2.0.0-next.6

### Minor Changes

- 245fc594: Add support for `glwss4` contracts in Colony SDK. No API changes were necessary.
  Contractor was bumped to v1.0.1 of the `@colony/abis` package
  In `core`, a guard was added to prevent trying to get permission proofs without an address.

### Patch Changes

- Updated dependencies [245fc594]
  - @colony/core@1.2.0-next.2

## 2.0.0-next.5

### Patch Changes

- b3793fc8: - Fix version incompatibility detection of the VotingReputation extension
  - Support version 3 of the OneTxPayment contract

## 2.0.0-next.4

### Major Changes

- 36f9df23: Calling `getBalance` on a Colony without specifying a `teamId` will now return the total balance of the specified token across the whole Colony (including not-yet-claimed funds)
- 3a87d0cb: **`sdk`**

  - `getReputation` now returns reputation within a domain as a percentag of the whole reputation within the team
  - `getReputationPoints` can be used to get the previous behavior
  - Added an `initialize` function to the `VotingReputation` extension

### Patch Changes

- 50eefa91: Improve compatibility between ESM package.json generation and changesets:
  - Use template file for package.json stub files (for changeset compatibility)
  - Add .js extensions also for type imports and exports
  - Add type entries to all package.json files
  - Rename all .js config files to .cjs
- Updated dependencies [3a87d0cb]
- Updated dependencies [50eefa91]
  - @colony/core@1.2.0-next.1
  - @colony/event-metadata@3.0.1-next.1
  - @colony/tokens@0.1.3-next.1

## 2.0.0-next.3

### Patch Changes

- 8de9d9ca: Upgrade TypeDoc to v0.24.8 and adjust link syntax style
- 542ffad8: Adjust import/export statements to be compatible with ESM only within node.js
- Updated dependencies [8de9d9ca]
- Updated dependencies [542ffad8]
  - @colony/event-metadata@3.0.1-next.0
  - @colony/core@1.1.1-next.0
  - @colony/tokens@0.1.3-next.0

## 2.0.0-next.2

### Major Changes

- beb76081: Breaking: Change the transaction API to allow for just sending txns and not waiting for them to be mined

  This change adds the new Colony SDK transaction API. The following is now applicable for all transaction methods (motions and metatransactions included)

  ```ts
  // Send off the transaction and only wait for the transaction hash
  const [tx, mined] = await colony.oneTx.pay(/* args */).tx().send(); // you can call mined() later (will yield the same as the fn below)
  // Send off the transaction and wait for it to be mined. Gets receipt and event data
  const [eventData, receipt] = await colony.oneTx.pay(/* args */).tx().mined();
  // Same for metatransactions
  await colony.oneTx.pay(/* args */).metaTx().send();
  await colony.oneTx.pay(/* args */).metaTx().mined();
  await; // And motions
  await colony.oneTx.pay(/* args */).motion().send();
  await colony.oneTx.pay(/* args */).motion().mined();
  await; // And metatransaction motions
  await colony.oneTx.pay(/* args */).metaMotion().send();
  await colony.oneTx.pay(/* args */).metaMotion().mined();
  ```

  Furthermore one can now encode regular transactions and motions into raw strings:

  ```ts
  const encoded_str = await colony.oneTx.pay(/* args */).tx().encode();
  const encoded_motion_str = await colony.oneTx
    .pay(/* args */)
    .motion()
    .encode();
  ```

## 2.0.0-next.1

### Major Changes

- d703cc6b: All examples, docs and guides are now adjusted to the v2 API.
- - Adjusted docs, examples and guides to v2
  - Event sources for the `EventManger` can now be hot-plugged and are not hardcoded anymore.

## 2.0.0

### Patch Changes

- Updated dependencies
  - @colony/core@1.0.0
