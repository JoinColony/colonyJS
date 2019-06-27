---
title: Registering ENS Labels
section: Topics
order: 9
---

Register a custom ENS label for your colony and wallet address.

## Register Colony Label

You can register a colony label using an instance of [ColonyClient](/colonyjs/api-colonyclient):

```js

// Register a colony label
await colonyClient.registerColonyLabel.send({
  colonyName: 'mycolony',
});

```

You can also set an OrbitDBPath when you register a colony label:

```js

// Register a colony label
await colonyClient.registerColonyLabel.send({
  colonyName: 'mycolony',
  orbitDBPath: 'Qm...'
});

```

*Note: The `orbitDBPath` will link your colony with your colony profile within our dApp. Updating the `orbitDBPath` is currently not possible but it will be in a future version of colonyNetwork, therefore, if you register a colony label outside of the dApp without setting an `orbitDBPath`, you will not be able to update the `orbitDBPath` until a future release of colonyNetwork.*

## Register User Label

You can register a user label using an instance of [ColonyNetworkClient](/colonyjs/api-colonynetworkclient):

```js

// Register a user label
await networkClient.registerUserLabel.send({
  username: 'colonyuser',
});

```

You can also set an OrbitDBPath when you register a user label:

```js

// Register a user label
await networkClient.registerUserLabel.send({
  username: 'colonyuser',
  orbitDBPath: 'Qm...'
});

```

*Note: The `orbitDBPath` will link your wallet with your user profile within our dApp. Updating the `orbitDBPath` is currently not possible but it will be in a future version of colonyNetwork, therefore, if you register a user label outside of the dApp without setting an `orbitDBPath`, you will not be able to update the `orbitDBPath` until a future release of colonyNetwork.*
