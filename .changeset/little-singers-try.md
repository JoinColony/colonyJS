---
"@colony/colony-js": patch
"@colony/events": patch
"@colony/tokens": patch
"@colony/core": patch
"@colony/sdk": patch
---

Introduce `tsx` instead of `ts-node` for esm compatibility reasons. This required some changes to how we import and export types from .ts files, so a lint rule was added for this.
