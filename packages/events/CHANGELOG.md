# @colony/events

## 1.0.1

### Patch Changes

- 07d6863: Allow for nodeJS version 20 support
- Updated dependencies [07d6863]
  - @colony/core@2.0.1

## 1.0.0

### Major Changes

- 301493e: Move all exports to main entrypoint

## 0.3.0

### Minor Changes

- e931d0e: - `event-metadata` package was removed and all its functionality went into the `events` package

  - `ColonyEventManager` was moved to the `events` package as well
  - `sdk/graph` was removed and will be added back at a later point

  - There is now a `getMotionResult` method to get the result of a finalizeable motion.

- 029288c: This changes the way `colony-js` clients are typed. We retain only the types of the last 5 versions of the types, all older versions will go untyped. This will give us some breathing room, at least for the amount of extensions that we have now.

  Furthermore the most recent (upcoming) contract changes were included in ColonyJS.

  Some changes were made to fix builds.

- c8f5f74: **`cross-fetch` was removed as a dependency.**

  Users of this library have to make sure that a fetch function exists in the global namespace (e.g. by using `node-fetch` and [adding it to the `globalThis`](https://github.com/node-fetch/node-fetch#providing-global-access)).

  It also adds another build target for Colony SDK which is a minified bundle of the library

- 3439729: colony-js gets support for the latest colonyNetwork release hmwss.

### Patch Changes

- 8de9d9c: Upgrade TypeDoc to v0.24.8 and adjust link syntax style
- 542ffad: Adjust import/export statements to be compatible with ESM only within node.js
- 50eefa9: Improve compatibility between ESM package.json generation and changesets:
  - Use template file for package.json stub files (for changeset compatibility)
  - Add .js extensions also for type imports and exports
  - Add type entries to all package.json files
  - Rename all .js config files to .cjs
- Updated dependencies [245fc59]
- Updated dependencies [8de9d9c]
- Updated dependencies [3a87d0c]
- Updated dependencies [029288c]
- Updated dependencies [c8f5f74]
- Updated dependencies [3439729]
- Updated dependencies [542ffad]
- Updated dependencies [50eefa9]
  - @colony/core@2.0.0

## 0.3.0-next.4

### Minor Changes

- 029288cd: This changes the way `colony-js` clients are typed. We retain only the types of the last 5 versions of the types, all older versions will go untyped. This will give us some breathing room, at least for the amount of extensions that we have now.

  Furthermore the most recent (upcoming) contract changes were included in ColonyJS.

  Some changes were made to fix builds.

### Patch Changes

- Updated dependencies [029288cd]
  - @colony/core@2.0.0-next.4

## 0.3.0-next.3

### Minor Changes

- c8f5f743: **`cross-fetch` was removed as a dependency.**

  Users of this library have to make sure that a fetch function exists in the global namespace (e.g. by using `node-fetch` and [adding it to the `globalThis`](https://github.com/node-fetch/node-fetch#providing-global-access)).

  It also adds another build target for Colony SDK which is a minified bundle of the library

### Patch Changes

- Updated dependencies [c8f5f743]
  - @colony/core@2.0.0-next.3

## 0.3.0-next.2

### Minor Changes

- e931d0e3: - `event-metadata` package was removed and all its functionality went into the `events` package

  - `ColonyEventManager` was moved to the `events` package as well
  - `sdk/graph` was removed and will be added back at a later point

  - There is now a `getMotionResult` method to get the result of a finalizeable motion.

## 0.2.1-next.1

### Patch Changes

- 50eefa91: Improve compatibility between ESM package.json generation and changesets:
  - Use template file for package.json stub files (for changeset compatibility)
  - Add .js extensions also for type imports and exports
  - Add type entries to all package.json files
  - Rename all .js config files to .cjs

## 0.2.1-next.0

### Patch Changes

- 542ffad8: Adjust import/export statements to be compatible with ESM only within node.js

## 0.2.0

### Minor Changes

- Export all event contracts
