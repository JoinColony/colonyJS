# @colony/colony-js

## 7.0.2

### Patch Changes

- Updated dependencies [301493e]
  - @colony/events@1.0.0

## 7.0.1

### Patch Changes

- 9de57ee: Fix some exports related to hmwss. W still export `VotingReputationFactory` but this will be removed soon.

## 7.0.0

### Major Changes

- 029288c: This changes the way `colony-js` clients are typed. We retain only the types of the last 5 versions of the types, all older versions will go untyped. This will give us some breathing room, at least for the amount of extensions that we have now.

  Furthermore the most recent (upcoming) contract changes were included in ColonyJS.

  Some changes were made to fix builds.

- 7e5d60d: The latest update in the ColonyJS series. While most of the changes were done to the internal structure of ColonyJS, this release _does_ include some breaking changes. The bundle-size of ColonyJS was reduced in this release.

  # Breaking

  - All the sub-entrypoints were removed (`extras`, `tokens`, `events`)
    - Most of the `extra`s are now in the main entrypoint (`@colony/colony-js`)
    - The `tokens` are now in `@colony/tokens` (needs to be installed separately)
    - The `events` are now in `@colony/events` (needs to be installed separately)
  - `getExtensionHash` now takes an `Extension` enum value and not a string anymore
    ```typescript
    import { getExtensionId, Extension } from "@colony/colony-js";
    // When extension is unknown:
    const extensionHash = getExtensionHash(extensionId as Extension);
    // Or, to get a hash for a specific extension
    const extensionHash = getExtensionHash(Extension.VotingReputation);
    ```
  - `deployTokenAuthority` on the token client was removed. Use `colonyNetwork.deployTokenAuthority` instead (also for non metatransactions)
  - `getTokenInfo` function was removed
  - `TokenClientType` is now now also in `@colony/tokens`

  # New

  - All helper functions and most constants that are used in ColonyJS are now available in `@colony/core` and are also exported from `@colony/colony-js`.

  # Maintenance

  - ColonyJS is now a package in the ColonyJS monorepo: `@colony/colony-js`
  - We are using [changesets](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md) for versioning now
  - The contract build script is now an own package: `@colony/contractor`. The entry in the `scripts` section in the `package.json` was adjusted accordingly.
  - The contracts are not part of the repository anymore but will always be generated on installation or publishing of the package
  - TypeScript settings were upgraded, target is now es2018.
  - ColonyJS should now be able to be included in current CJS and ESM projects properly

### Minor Changes

- 3a87d0c: **`sdk`**

  - `getReputation` now returns reputation within a domain as a percentag of the whole reputation within the team
  - `getReputationPoints` can be used to get the previous behavior
  - Added an `initialize` function to the `VotingReputation` extension

- 83d7828: Add some more exports to the entry point. Now we have

  - `ColonyTokenFactory` (the `MetaTxToken`)
  - `ColonyFactory` (the `IColony` of the latest version)
  - `ColonyNetworkFactory` (`IColonyNetwork`)

- 0ebb76a: Exported VotingReputationFactory
- 3439729: colony-js gets support for the latest colonyNetwork release hmwss.

### Patch Changes

- 8de9d9c: Upgrade TypeDoc to v0.24.8 and adjust link syntax style
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

## 7.0.0-next.10

### Minor Changes

- 0ebb76ab: Exported VotingReputationFactory

## 7.0.0-next.9

### Minor Changes

- 83d7828e: Add some more exports to the entry point. Now we have

  - `ColonyTokenFactory` (the `MetaTxToken`)
  - `ColonyFactory` (the `IColony` of the latest version)
  - `ColonyNetworkFactory` (`IColonyNetwork`)

## 7.0.0-next.8

### Patch Changes

- dd5e3c57: Use tsc for compilation in colony-js and sdk

## 7.0.0-next.7

### Patch Changes

- 415be09e: Do not overwrite or delete build files

## 7.0.0-next.6

### Major Changes

- 029288cd: This changes the way `colony-js` clients are typed. We retain only the types of the last 5 versions of the types, all older versions will go untyped. This will give us some breathing room, at least for the amount of extensions that we have now.

  Furthermore the most recent (upcoming) contract changes were included in ColonyJS.

  Some changes were made to fix builds.

### Patch Changes

- Updated dependencies [029288cd]
  - @colony/core@2.0.0-next.4
  - @colony/events@0.3.0-next.4
  - @colony/tokens@0.2.0-next.2

## 7.0.0-next.5

### Patch Changes

- Updated dependencies [c8f5f743]
  - @colony/core@2.0.0-next.3
  - @colony/events@0.3.0-next.3

## 7.0.0-next.4

### Patch Changes

- Updated dependencies [e931d0e3]
  - @colony/events@0.3.0-next.2

## 7.0.0-next.3

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
- Updated dependencies [3a87d0cb]
- Updated dependencies [50eefa91]
  - @colony/core@1.2.0-next.1
  - @colony/events@0.2.1-next.1
  - @colony/tokens@0.1.3-next.1

## 7.0.0-next.2

### Patch Changes

- 8de9d9ca: Upgrade TypeDoc to v0.24.8 and adjust link syntax style
- 542ffad8: Adjust import/export statements to be compatible with ESM only within node.js
- Updated dependencies [8de9d9ca]
- Updated dependencies [542ffad8]
  - @colony/core@1.1.1-next.0
  - @colony/events@0.2.1-next.0
  - @colony/tokens@0.1.3-next.0

## 7.0.0-next.0

### Major Changes

- 7e5d60db: The latest update in the ColonyJS series. While most of the changes were done to the internal structure of ColonyJS, this release _does_ include some breaking changes. The bundle-size of ColonyJS was reduced in this release.

  # Breaking

  - All the sub-entrypoints were removed (`extras`, `tokens`, `events`)
    - Most of the `extra`s are now in the main entrypoint (`@colony/colony-js`)
    - The `tokens` are now in `@colony/tokens` (needs to be installed separately)
    - The `events` are now in `@colony/events` (needs to be installed separately)
  - `getExtensionHash` now takes an `Extension` enum value and not a string anymore
    ```typescript
    import { getExtensionId, Extension } from "@colony/colony-js";
    // When extension is unknown:
    const extensionHash = getExtensionHash(extensionId as Extension);
    // Or, to get a hash for a specific extension
    const extensionHash = getExtensionHash(Extension.VotingReputation);
    ```
  - `deployTokenAuthority` on the token client was removed. Use `colonyNetwork.deployTokenAuthority` instead (also for non metatransactions)
  - `getTokenInfo` function was removed
  - `TokenClientType` is now now also in `@colony/tokens`

  # New

  - All helper functions and most constants that are used in ColonyJS are now available in `@colony/core` and are also exported from `@colony/colony-js`.

  # Maintenance

  - ColonyJS is now a package in the ColonyJS monorepo: `@colony/colony-js`
  - We are using [changesets](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md) for versioning now
  - The contract build script is now an own package: `@colony/contractor`. The entry in the `scripts` section in the `package.json` was adjusted accordingly.
  - The contracts are not part of the repository anymore but will always be generated on installation or publishing of the package
  - TypeScript settings were upgraded, target is now es2018.
  - ColonyJS should now be able to be included in current CJS and ESM projects properly
