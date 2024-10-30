# @colony/contractor

## 2.3.0-next.0

### Minor Changes

- 6239827: Add support for the `imwss3` colonyNetwork release.

## 2.2.0

### Minor Changes

- 1645c03: Add Streaming Payments v5
- 1645c03: - Refactor events to namespace event object exports
  - Add support for MultisigPermissions in `colony-js`
- 1645c03: Add support for colonyNetwork's imwss2 and abis@1.5.0

## 2.1.1

### Patch Changes

- 8dc948e: Namespace event package exports for improved compatibility

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

### Minor Changes

- 245fc59: Add support for `glwss4` contracts in Colony SDK. No API changes were necessary.
  Contractor was bumped to v1.0.1 of the `@colony/abis` package
  In `core`, a guard was added to prevent trying to get permission proofs without an address.
- 3439729: colony-js gets support for the latest colonyNetwork release hmwss.

### Patch Changes

- 542ffad: Adjust import/export statements to be compatible with ESM only within node.js
- 50eefa9: Improve compatibility between ESM package.json generation and changesets:
  - Use template file for package.json stub files (for changeset compatibility)
  - Add .js extensions also for type imports and exports
  - Add type entries to all package.json files
  - Rename all .js config files to .cjs

## 2.0.0-next.3

### Major Changes

- 029288cd: This changes the way `colony-js` clients are typed. We retain only the types of the last 5 versions of the types, all older versions will go untyped. This will give us some breathing room, at least for the amount of extensions that we have now.

  Furthermore the most recent (upcoming) contract changes were included in ColonyJS.

  Some changes were made to fix builds.

## 1.1.0-next.2

### Minor Changes

- 245fc594: Add support for `glwss4` contracts in Colony SDK. No API changes were necessary.
  Contractor was bumped to v1.0.1 of the `@colony/abis` package
  In `core`, a guard was added to prevent trying to get permission proofs without an address.

## 1.0.1-next.1

### Patch Changes

- 50eefa91: Improve compatibility between ESM package.json generation and changesets:
  - Use template file for package.json stub files (for changeset compatibility)
  - Add .js extensions also for type imports and exports
  - Add type entries to all package.json files
  - Rename all .js config files to .cjs

## 1.0.1-next.0

### Patch Changes

- 542ffad8: Adjust import/export statements to be compatible with ESM only within node.js

## 1.0.0

### Major Changes

- 3306ac56: `contractor` can now create `colony` (Colony versioned contracts - all, latest or a custom one), `tokens` (All relevant token contracts) and `events` (All events contracts)

  Run `contractor --help` for more information.

## 0.1.1

### Patch Changes

- Updated dependencies
  - @colony/core@1.0.0
