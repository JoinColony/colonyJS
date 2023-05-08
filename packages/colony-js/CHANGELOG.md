# @colony/colony-js

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
