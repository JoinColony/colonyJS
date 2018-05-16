---
title: Quickstart
section: Docs
order: 0
---

## Quickstart

```javascript
import ethers from 'ethers';
import ContractHttpLoader from '@colony/colony-js-contract-loader-http';
import EthersAdapter from '@colony/colony-js-adapter-ethers';
import ColonyNetworkClient from '@colony/colony-js-client';

const { providers, Wallet } = ethers;

// Use the trufflepig for contract loading!
const loader = new ContractHttpLoader({
  endpoint: `http://127.0.0.1:3030/contracts?name=%%NAME%%`,
  parser: 'truffle',
});

// Use with MetaMask!
const provider = new providers.Web3Provider(web3.currentProvider);
const signer = provider.getSigner();
const adapter = new EthersAdapter({ loader, provider, signer });

(async () => {
  // Connect to ColonyNetwork!
  const networkClient = await ColonyNetworkClient.createSelf(adapter);

  const colonyData = {
    name: 'Coolony',
    tokenName: 'COOL',
    tokenSymbol: '𝕔'
  };

  // Create a cool Colony!
  const { eventData: { colonyId }} = await networkClient.createColony.send(colonyData);

  // Congrats, you've created a Colony!
  console.log(colonyId);
})();
```
