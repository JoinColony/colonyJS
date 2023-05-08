✒️ A nifty tool that creates Colony Network TypeScript bindings

[![Discord](https://img.shields.io/discord/562263648173555742)](https://discord.gg/feVZWwysqM)

# `@colony/contractor`

`contractor` can build all relevant TypeScript bindings for the [Colony Network contracts](https://github.com/JoinColony/colonyNetwork) in different versions, based off the [ABIs](https://github.com/JoinColony/abis).

Usage:

```bash
contractor --help # Show help
contractor colony # Builds ethers-v5 TypeChain bindings for the latest versions to the ./dist directory
contractor colony --help # Show help and available options for the `colony` command
contractor colony -p ethers-v6 # Build ethers-v6 bindings
contractor colony -t glider # Build bindings for the `glider` tag
contractor core # Build static core contract bindings
contractor tokens # Build event contract bindgins
contractor events # Build event contract bindings
```

## Building

To build this package, run `pnpm run build` in this directory. See the general [development instructions](../../README.md#Developing) for more information.

## Contributing

All contributions are welcome. Please read the [Contributing Guidelines](../../CONTRIBUTING.md) and review our [Code of Conduct](../../CODE_OF_CONDUCT.md) before submitting a PR.

## License

GPL-3.0
