# @colony/contractor

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
