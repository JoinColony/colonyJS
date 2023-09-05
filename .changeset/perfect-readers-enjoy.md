---
"@colony/core": major
"@colony/sdk": major
"@colony/events": minor
---

**`cross-fetch` was removed as a dependency.**

Users of this library have to make sure that a fetch function exists in the global namespace (e.g. by using `node-fetch` and [adding it to the `globalThis`](https://github.com/node-fetch/node-fetch#providing-global-access)).

It also adds another build target for Colony SDK which is a minified bundle of the library
