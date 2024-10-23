🪙 Colony token contract bindings

[![Discord](https://img.shields.io/discord/562263648173555742)](https://discord.gg/feVZWwysqM)

# `@colony/tokens`

This package contains pre-compiled Colony token contract bindings. They can be used to take advantage of the extra functionality of the Colony Tokens (e.g. minting via the Colony or gasless transactions). The `getTokenClient` function will try to auto-detect the token type at the given address and instantiates the corresponding token class.

```ts
import { providers } from 'ethers';
import { getTokenClient } from '@colony/tokens';
import { Tokens } from '@colony/core';

const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.ArbitrumOne);

// Immediately executing async function
(async function() {
   // Pass in a Signer instead to do transactions
   const token = await getTokenClient(Tokens.ArbitrumOne.CLNY, provider);
   // Only tokens deployed with Colony have the `locked()` method
   const tokenIsLocked = await token.locked();
})();
```

## Building

To build this package, run `pnpm run build` in this directory. See the general [development instructions](../../README.md#Developing) for more information.

## Contributing

All contributions are welcome. Please read the [Contributing Guidelines](../../CONTRIBUTING.md) and review our [Code of Conduct](../../CODE_OF_CONDUCT.md) before submitting a PR.

## License

GPL-3.0
