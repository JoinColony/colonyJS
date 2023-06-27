---
"@colony/colony-js": patch
"@colony/contractor": patch
"@colony/core": patch
"@colony/event-metadata": patch
"@colony/events": patch
"@colony/sdk": patch
"@colony/tokens": patch
---

Improve compatibility between ESM package.json generation and changesets:
- Use template file for package.json stub files (for changeset compatibility)
- Add .js extensions also for type imports and exports
- Add type entries to all package.json files
- Rename all .js config files to .cjs
