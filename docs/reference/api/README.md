ColonyJS / [Exports](modules.md)

<div align="center">
  <img src="https://rawcdn.githack.com/JoinColony/colonyJS/a9048856c3fd4b5e97d3f59f5f24dee20d4de747/media/colonyJS_color.svg" width="600" />
</div>

# colonyJS

colonyJS is a JavaScript library with a simple and predictable interface for application-layer integrations with the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts. To learn more about Colony, you can visit [colony.io](https://colony.io/) or read the [White Paper](https://colony.io/whitepaper.pdf).

## Documentation

The documentation is automatically generated using [TypeDoc](https://github.com/TypeStrong/typedoc) and can be found [here](https://joincolony.github.io/colonyJS). You should check out the `getColonyNetworkClient` function in `ColonyNetworkClient` and the docs for the extended colony contracts `clients/Colony/ColonyClientVX`.

## Get Started

```ts
import { providers, utils, Wallet } from 'ethers';
import { getColonyNetworkClient, Id, Network, Tokens } from '@colony/colony-js';

const { formatEther } = utils;

const provider = new providers.JsonRpcProvider('https://xdai.colony.io/rpc2/');

const start = async () => {
  // Get a wallet instance
  const wallet = new Wallet(
    // This is a random private key (don't use this one for anything else and _definitely_ do not send valuables to the corresponding address)
    '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae',
    provider,
  );

  // Check out the logs to see the wallet address
  console.log('Wallet Address:', wallet.address);

  // Get a network client instance for Gnosis Chain
  const networkClient = await getColonyNetworkClient(
    Network.Gnosis,
    wallet,
  );

  // Let's connect to the Meta Colony
  const metaColonyClient = await networkClient.getMetaColonyClient()
  // And check out it's CLNY funding
  const funding = await metaColonyClient.getFundingPotBalance(Id.RootPot, Tokens.Gnosis.CLNY);
  // We can also see its address
  const { address } = metaColonyClient;
  console.info(`${formatEther(funding)} CLNY in root domain of MetaColony with address: ${address}`);
};

start();
```

## Too complicated? Need more guidance?

Try [colonySDK](https://github.com/JoinColony/colonySDK).

## Contributing

We welcome all contributions to colonyJS! See [Contributing](https://github.com/JoinColony/colonyJS/blob/master/CONTRIBUTING.md) for more information.

## Development

### Local development

Using just `npm` you can _link_ the built colonyJS files to your Dapp when developing new features in colonyJS while trying them out immediately in your dev-environment.

To do that:

1) Make sure you are using **the exact same node version in colonyJS and the Dapp**. Use nvm if possible

2) Update the required submodules:

```shell
git submodule update --init --recursive
```

3) Build colonyJS. In the colonyJS directory do:

```shell
npm run build
```

4) Create an `npm link` in the colonyJS directory:

```shell
npm link
```

5) Link to it in the **Dapp** directory:

```shell
npm link @colony/colony-js
```

6) Then do a regular install in the Dapp directory:

```shell
npm install
```

To overwrite the link again just specify a version that exists on npm:

```shell
npm install @colony/colony-js@^5.0.6
```

If that doesn't remove it, just remove the folder in `node_modules`

### To release a new version

colonyJS is using [`release-it`](https://github.com/release-it/release-it) to create new releases. To create and publish a new release, commit your changes, then execute

```bash
npm run release -- SEMVER_TAG # SEMVER_TAG is major, minor, patch
```

If you don't supply a `GITHUB_TOKEN` environment variable, `release-it` will open a browser window and pre-populate the corresponding release input fields for you.

**Frequent commits and descriptive commit messages** will help when `release-it` tries to autogenerate the changelog.

### To upgrade to a new colonyNetwork version

Take a look at [this guide](https://colony.gitbook.io/colonyjs/guides/upgrading-the-colonynetwork-version).

## License

GPL-3.0
