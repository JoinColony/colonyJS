# @colony/colony-js

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
