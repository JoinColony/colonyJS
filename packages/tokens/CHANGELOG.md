# @colony/tokens

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
