🚀 The Colony SDK. Get started with Colony quickly

<div align="center">
  <img src="https://raw.githack.com/JoinColony/colonySDK/main/img/colonySDK_color.svg" width="600" />
</div>

[![Discord](https://img.shields.io/discord/562263648173555742)](https://discord.gg/feVZWwysqM)

# Colony SDK

The Colony SDK is under heavy development by the community and will be an easy-to-use interface for the Colony Network contracts, providing simple functions that hide the dark magic going on under the hood of ColonyJS. It should cover the most common use cases and is constantly updated with new features.

Colony SDK also includes a variety of examples to get you up and building with Colony in no time!

## Running the examples

First, clone this repo: 
```bash
git clone https://github.com/JoinColony/colonySDK.git`
```

Then install all the required dependencies (this will install [ethers.js](https://docs.ethers.io/v5/) and [colonyJS](https://github.com/JoinColony/colonyJS) as well as some required development dependencies):

```bash
npm install
```

Then you can run the examples:

### Node.js

```bash
npm run example:node
```

### Browser (vanilla JS example)

```bash
npm run example:browser
```

### Some notes

These examples will run on Gnosis chain. If you'd like to make transactions, you will need some XDAI. Reach out to us in our [Discord](https://discord.gg/feVZWwysqM) if you're having trouble starting out.

## Development

### Prerequisites

- Node `>=16.0.0`

_You may find it helpful to use [Node Version Manager (`nvm`)](https://github.com/nvm-sh/nvm) to manage Node versions._

### Creating a new release

colonySDK is using [`release-it`](https://github.com/release-it/release-it) to create new releases. To create and publish a new release, commit your changes, then execute

```bash
npm run release -- SEMVER_TAG # SEMVER_TAG is major, minor, patch
```

If you don't supply a `GITHUB_TOKEN` environment variable, `release-it` will open a browser window and pre-populate the corresponding release input fields for you.

**Frequent commits and descriptive commit messages** will help when `release-it` tries to autogenerate the changelog.

### Contribute

_Are you interested in contributing?_ Check out the following document for more information:

- [Contributing](CONTRIBUTING.md)
