import '@picocss/pico';

import { ColonyRpcEndpoint } from '../../../src/index.js';

const addColonyRPC = () => {
  // If MetaMask is installed there will be an `ethereum` object on the `window`
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [
      {
        chainId: '0xa4b1',
        chainName: 'Arbitrum One via Colony',
        nativeCurrency: {
          name: 'Ether',
          symbol: 'ETH',
          decimals: 18,
        },
        rpcUrls: [ColonyRpcEndpoint.ArbitrumOne],
        blockExplorerUrls: ['https://arbiscan.io/'],
      },
    ],
  });
};

document.querySelector('#add_rpc')?.addEventListener('click', addColonyRPC);
