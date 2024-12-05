# @colony/core

## 3.0.0-next.1

### Minor Changes

- d03e0e1: Incorporate updates to the `imwss3` colonyNetwork release

## 3.0.0-next.0

### Major Changes

- e374bc2: Make Arbitrum One the default network in all cases. While this can be considered a breaking change it does not change any of the APIs.

### Minor Changes

- 6239827: Add support for the `imwss3` colonyNetwork release.

### Patch Changes

- c84bb1d: Introduce `tsx` instead of `ts-node` for esm compatibility reasons. This required some changes to how we import and export types from .ts files, so a lint rule was added for this.

## 2.3.1

### Patch Changes

- a666320: Fix: Empty extension incompatibility maps should allow any colony version

## 2.3.0

### Minor Changes

- 1645c03: Add Streaming Payments v5
- 1645c03: - Refactor events to namespace event object exports
  - Add support for MultisigPermissions in `colony-js`
- 1645c03: Add support for colonyNetwork's imwss2 and abis@1.5.0

### Patch Changes

- fefdd57: feat: Add helper to get extension required colony version

## 2.2.0

### Minor Changes

- f1093cc: This adds USDC token addresses and an enum with all supported network ids.

## 2.1.0

### Minor Changes

- 6a1d15d: Added support for the colonyNetwork `imwss` release.

  Removed the following extension clients (for now):

  - CoinMachine
  - EvaluatedExpenditure
  - Whitelist

## 2.0.1

### Patch Changes

- 07d6863: Allow for nodeJS version 20 support

## 2.0.0

### Major Changes

- 029288c: This changes the way `colony-js` clients are typed. We retain only the types of the last 5 versions of the types, all older versions will go untyped. This will give us some breathing room, at least for the amount of extensions that we have now.

  Furthermore the most recent (upcoming) contract changes were included in ColonyJS.

  Some changes were made to fix builds.

- c8f5f74: **`cross-fetch` was removed as a dependency.**

  Users of this library have to make sure that a fetch function exists in the global namespace (e.g. by using `node-fetch` and [adding it to the `globalThis`](https://github.com/node-fetch/node-fetch#providing-global-access)).

  It also adds another build target for Colony SDK which is a minified bundle of the library

### Minor Changes

- 245fc59: Add support for `glwss4` contracts in Colony SDK. No API changes were necessary.
  Contractor was bumped to v1.0.1 of the `@colony/abis` package
  In `core`, a guard was added to prevent trying to get permission proofs without an address.
- 3a87d0c: **`sdk`**

  - `getReputation` now returns reputation within a domain as a percentag of the whole reputation within the team
  - `getReputationPoints` can be used to get the previous behavior
  - Added an `initialize` function to the `VotingReputation` extension

- 3439729: colony-js gets support for the latest colonyNetwork release hmwss.

### Patch Changes

- 8de9d9c: Upgrade TypeDoc to v0.24.8 and adjust link syntax style
- 542ffad: Adjust import/export statements to be compatible with ESM only within node.js
- 50eefa9: Improve compatibility between ESM package.json generation and changesets:
  - Use template file for package.json stub files (for changeset compatibility)
  - Add .js extensions also for type imports and exports
  - Add type entries to all package.json files
  - Rename all .js config files to .cjs

## 2.0.0-next.4

### Major Changes

- 029288cd: This changes the way `colony-js` clients are typed. We retain only the types of the last 5 versions of the types, all older versions will go untyped. This will give us some breathing room, at least for the amount of extensions that we have now.

  Furthermore the most recent (upcoming) contract changes were included in ColonyJS.

  Some changes were made to fix builds.

## 2.0.0-next.3

### Major Changes

- c8f5f743: **`cross-fetch` was removed as a dependency.**

  Users of this library have to make sure that a fetch function exists in the global namespace (e.g. by using `node-fetch` and [adding it to the `globalThis`](https://github.com/node-fetch/node-fetch#providing-global-access)).

  It also adds another build target for Colony SDK which is a minified bundle of the library

## 1.2.0-next.2

### Minor Changes

- 245fc594: Add support for `glwss4` contracts in Colony SDK. No API changes were necessary.
  Contractor was bumped to v1.0.1 of the `@colony/abis` package
  In `core`, a guard was added to prevent trying to get permission proofs without an address.

## 1.2.0-next.1

### Minor Changes

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

## 1.1.1-next.0

### Patch Changes

- 8de9d9ca: Upgrade TypeDoc to v0.24.8 and adjust link syntax style
- 542ffad8: Adjust import/export statements to be compatible with ESM only within node.js

## 1.1.0

### Minor Changes

- d703cc6b: `@colony/core` does not export `RELEASES`, `LATEST_TAG` and `RELEASE_MAP` anymore. Thesse are now under `@colony/abis` in `releases`, `latest` and `releaseMap` respectively.

## 1.0.0

### Major Changes

- Polish up core package for initial release. Add comments and `utils` entrypoint
