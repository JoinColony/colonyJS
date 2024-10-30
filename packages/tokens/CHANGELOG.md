# @colony/tokens

## 1.0.0-next.0

### Major Changes

- e374bc2: Make Arbitrum One the default network in all cases. While this can be considered a breaking change it does not change any of the APIs.

### Patch Changes

- c84bb1d: Introduce `tsx` instead of `ts-node` for esm compatibility reasons. This required some changes to how we import and export types from .ts files, so a lint rule was added for this.

## 0.3.0

### Minor Changes

- 1645c03: Add Streaming Payments v5

## 0.2.2

### Patch Changes

- 8dc948e: Namespace event package exports for improved compatibility

## 0.2.1

### Patch Changes

- 07d6863: Allow for nodeJS version 20 support

## 0.2.0

### Minor Changes

- 029288c: This changes the way `colony-js` clients are typed. We retain only the types of the last 5 versions of the types, all older versions will go untyped. This will give us some breathing room, at least for the amount of extensions that we have now.

  Furthermore the most recent (upcoming) contract changes were included in ColonyJS.

  Some changes were made to fix builds.

- 3439729: colony-js gets support for the latest colonyNetwork release hmwss.

### Patch Changes

- 542ffad: Adjust import/export statements to be compatible with ESM only within node.js
- 50eefa9: Improve compatibility between ESM package.json generation and changesets:
  - Use template file for package.json stub files (for changeset compatibility)
  - Add .js extensions also for type imports and exports
  - Add type entries to all package.json files
  - Rename all .js config files to .cjs

## 0.2.0-next.2

### Minor Changes

- 029288cd: This changes the way `colony-js` clients are typed. We retain only the types of the last 5 versions of the types, all older versions will go untyped. This will give us some breathing room, at least for the amount of extensions that we have now.

  Furthermore the most recent (upcoming) contract changes were included in ColonyJS.

  Some changes were made to fix builds.

## 0.1.3-next.1

### Patch Changes

- 50eefa91: Improve compatibility between ESM package.json generation and changesets:
  - Use template file for package.json stub files (for changeset compatibility)
  - Add .js extensions also for type imports and exports
  - Add type entries to all package.json files
  - Rename all .js config files to .cjs

## 0.1.3-next.0

### Patch Changes

- 542ffad8: Adjust import/export statements to be compatible with ESM only within node.js
