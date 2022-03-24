<div align="center">
  <img src="media/colonyJS_color.svg" width="600" />
</div>

# colonyJS

colonyJS is a JavaScript library with a simple and predictable interface for application-layer integrations with the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts. To learn more about Colony, you can visit [colony.io](https://colony.io/) or read the [White Paper](https://colony.io/whitepaper.pdf).

This software is currently in BETA state. The v5 API should be pretty stable.

## Documentation

The documentation is automatically generated using [TypeDoc](https://github.com/TypeStrong/typedoc) and can be found [here](https://joincolony.github.io/colonyJS/v5/). You should check out the `getColonyNetworkClient` function in `ColonyNetworkClient` and the docs for the extended colony contracts `clients/Colony/ColonyClientVX`.

## Get Started

```ts
import { providers, utils, Wallet } from 'ethers';
import { CLNY, getColonyNetworkClient, Network, ROOT_POT_ID } from '@colony/colony-js';

const { formatEther } = utils;

const provider = new providers.JsonRpcProvider('https://rpc.gnosischain.com/');

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
    Network.Xdai,
    wallet,
  );

  // Let's connect to the Meta Colony
  const metaColonyClient = await networkClient.getMetaColonyClient()
  // And check out is XDAI funding
  const funding = await metaColonyClient.getFundingPotBalance(ROOT_POT_ID, CLNY.Xdai);
  // We can also see its address
  const { address } = metaColonyClient;
  console.info(`${formatEther(funding)} XDAI in root domain of MetaColony with address: ${address}`);
};

start();
```

Check out [colonyStarter](https://github.com/JoinColony/colonyStarter) for a full example.

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
npm install @colony/colony-js@^3.0.0
```

If that doesn't remove it, just remove the folder in `node_modules`

### To release a new version

1) First, commit all your changes. Then run the tests:

```shell
npm test #just to be sure
```

2) Adjust the version in `package.json`

3) Let npm adjust the version in `package-lock.json`:

```shell
npm install
```

4) Commit the npm package files. Use the version set in the package.json (**make sure to follow the version pattern**):

```shell
git add pack*
git commit -m '2.0.1' # no `v`!
```

5) Tag the commit:

```shell
git tag v2.0.1 # here we use the `v`!
```

6) Push the changes and tags:

```shell
git push && git push --tags
```

7) Publish on npm:

```
npm publish --access=public
```

Done 🎊

### To upgrade to a new colonyNetwork version

1) Add the version to `versions.ts` in `ColonyVersion` as well as the network git tag to `releaseMaps`
3) Add the git tag to `src/constants.ts` release map
4) _Optional:_ If you are tracking a development branch instead of a static tag or commit, make sure to pull the latest changes, otherwise the contracts generated will be exactly the same as your last ones -- _this is a step often forgotten when using a dev version_
5) In the `vendor/colonyNetwork` directory, check out the correct git tag and build the contracts according to the docs - most likely it'll be:
```shell
git checkout [GIT_TAG] # e.g lwss
git submodule update --recursive
rm -rf build/contracts/*.json # to remove any prior builds
yarn # make sure you're running the correct node version (with nvm)
yarn truffle compile
```
6) In the `vendor/colonyNetwork/lib/colonyToken` directory, do the following:
```shell
rm -rf build/contracts/*.json # to remove any prior builds
git reset --hard # to recover the pinned (checked in) contracts
yarn # make sure you're running the correct node version (with nvm)
yarn truffle compile
```
7) Back in the `colonyJS` main directory run
```shell
npm run extact-contract-abis -- -t=[GIT_TAG]
```
to extract the contract ABIs and store them in the colonyJS repository
8) If needed: add new contracts that need clients to the `contractsToBuild` array in `scripts/build-contracts.ts`
9) Run
```shell
npm run build-contracts
```
This will create a new folder: `src/contracts/X` containing all the type definitions you'll need to implement the new colony client.
10) Update the following lines in `ColonyNetworkClient.ts` to reflect the new version:
```ts
import { IColonyNetworkFactory } from '../contracts/X/IColonyNetworkFactory';
import { IColonyNetwork } from '../contracts/X/IColonyNetwork';
```
11) Update all the other contract imports in the non-colony clients, even if they haven't been upgraded (just in case). Then make adjustments to the clients to reflect the contract changes (typescript will tell you, where to make changes). Also add necessary helper functions (e.g. `withProofs` functions) for newly added methods. The newly added methods and their required roles can be found in [this file](https://github.com/JoinColony/colonyNetwork/blob/develop/contracts/colony/ColonyAuthority.sol) (and by diffing the generated interface files).


### To add new extension contract versions:
1. Add the new version and corresponding git tag for one or more extesions inside `versions.ts`
2. Run `npm run build-contracts` _-- this will build the network contracts for the extensions using `typechain`_
3. Run `npm run build-clients` _-- this will build basic clients and addon files for your new extension versions_
4. If you need extra methods added to your client _(helpers like `withProofs`)_, add them inside the `Addon` file that you'll find in the client's folder _(don't forget to also add the estimate method)_

Eg:
```js
'/src/clients/Extensions/OneTxPayment/1/OneTxPaymentClient.ts' // the OneTxPayment extension client
'/src/clients/Extensions/OneTxPayment/1/OneTxPaymentClientAddons.ts' // the OneTxPayment extension client addons
```

## License

GPL-3.0
