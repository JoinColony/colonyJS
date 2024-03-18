🎪 Colony TypeScript libraries

[![Discord](https://img.shields.io/discord/562263648173555742)](https://discord.gg/feVZWwysqM)

# The Colony TypeScript libraries

We are providing the following packages in this monorepo:

* [`@colony/sdk`](packages/sdk) - The development kit to build on top of Colony
* [`@colony/colony-js`](packages/colony-js) - The Colony TypeScript reference implementation
* [`@colony/core`](packages/core) - Shared utilities, types and constants for all Colony TypeScript libraries
* [`@colony/contractor`](packages/contractor) - A nifty tool that creates Colony Network TypeScript bindings
* [`@colony/events`](packages/events) - All Colony event types in one! Parse and serialize Colony event metadata
* [`@colony/tokens`](packages/tokens) - Pre-built Colony token contract bindings

## Developing

To start development on any of the included libraries, make sure you have Node v16.x and [`pnpm`](https://pnpm.io) v8.x installed.

Run `pnpm run bootstrap` first

To install all required dependencies run `pnpm run bootstrap` (this is important!) the first time, later you can just do `pnpm install --frozen-lockfile` in the root directory of the repository.

You can run `pnpm lint`, `pnpm typecheck`, `pnpm test` and `pnpm build` in the root directory (will build all packages) or in the individual package directories.

**Please make sure to include a [changeset](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md) when submitting a PR.**

## Creating a release

From the main directory, run `pnpm run version`, then `pnpm run release`.

## Contributing

All contributions are welcome. Please read the [Contributing Guidelines](CONTRIBUTING.md) and review our [Code of Conduct](CODE_OF_CONDUCT.md) before submitting a PR.

## License

GPL-3.0
