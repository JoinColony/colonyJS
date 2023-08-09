# @colony/events

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
