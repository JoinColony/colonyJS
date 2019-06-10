# colony-example-vue

## Setup
```
yarn install
```

## Development

### Start Network

Open a new terminal window and start [Ganache](https://github.com/trufflesuite/ganache-cli):

```
yarn start-ganache
```

### Deploy Contracts

Open a new terminal window and deploy the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) contracts:

```
yarn deploy-contracts
```

### Start TrufflePig

Once the contracts have been deployed, start [TrufflePig](https://github.com/JoinColony/trufflepig):

```
yarn start-trufflepig
```

### Seed Network

Open a new terminal window and run the seed network script:

```
yarn seed-network
```

### Save purser private key

`colony-example-vue` uses "@colony/purser-software" when running in `'development'` mode.  
Pick a private key output by `ganache`, and include it in an [.env.local](https://cli.vuejs.org/guide/mode-and-env.html#environment-variables) file at the root of the project like this.
```
VUE_APP_PURSER_PRIVATE_KEY=<ganache private key>
```
(This will be used by `purser-software`)

## Testing

1) Follow all the steps in Development.
2) Create a cypress.env.json in this format:

```json
{
  "VUE_APP_COLONY_ADDRESS": "<colony address>"
}
```
3) Run `yarn test:e2e:dev`
(You might need to create a colony before hand, the `home` test creates one and logs it)
