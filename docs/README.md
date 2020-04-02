[@colony/colony-js](README.md) › [Globals](globals.md)

# @colony/colony-js

<div align="center">
  <img src="/docs/img/colonyJS_color.svg" width="600" />
</div>
<div align="center">
  <a href="https://circleci.com/gh/JoinColony/colonyJS">
    <img src="https://circleci.com/gh/JoinColony/colonyJS.svg?style=shield" />
  </a>
  <a href="https://greenkeeper.io/">
    <img src="https://badges.greenkeeper.io/JoinColony/colonyJS.svg" />
  </a>
  <a href="https://gitter.im/JoinColony/colonyJS">
    <img src="https://img.shields.io/gitter/room/TechnologyAdvice/Stardust.svg" />
  </a>
  <a href="https://build.colony.io/">
    <img src="https://img.shields.io/discourse/https/build.colony.io/status.svg" />
  </a>
</div>

# colonyJS

colonyJS is a JavaScript library with a simple and predictable interface for application-layer integrations with the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts. To learn more about Colony, you can visit [colony.io](https://colony.io/) or read the [White Paper](https://colony.io/whitepaper.pdf).

## Documentation

See [colonyJS Documentation](https://docs.colony.io/colonyjs/intro-welcome/) for detailed examples and explanations.

## Get Started

```js

const { getNetworkClient } = require('@colony/colony-js-client');
const { open } = require('@colony/purser-software');

(async () => {

  // Get a wallet instance
  const wallet = await open({
    privateKey: process.env.PRIVATE_KEY,
  });

  // Check out the logs to see the wallet address
  console.log('Wallet Address:', wallet.address);

  // Get a network client instance
  const networkClient = await getNetworkClient('goerli', wallet);

  // Check out the logs to see the network address
  console.log('Network Address:', networkClient.contract.address);

})()
  .then(() => process.exit())
  .catch(error => console.error(error));

```

## colonyStarter

Another helpful tool for learning how to use colonyJS is [colonyStarter](https://github.com/JoinColony/colonyNetwork), which provides boilerplates, examples, and a simple command line tool to make local development easier.

## Contributing

We welcome all contributions to colonyJS! See [Contributing](https://github.com/JoinColony/colonyJS/blob/master/CONTRIBUTING.md) for more information.

## Development

If you are a developer contributing to colonyJS, see [Development](https://github.com/JoinColony/colonyJS/blob/master/DEVELOPMENT.md).
