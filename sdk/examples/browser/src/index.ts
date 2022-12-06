const addColonyRPC = () => {
  // If MetaMask is installed there will be an `ethereum` object on the `window`
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [
      {
        chainId: '0x64',
        chainName: 'Gnosis Chain via Colony',
        nativeCurrency: {
          name: 'xDAI',
          symbol: 'XDAI',
          decimals: 18,
        },
        rpcUrls: ['https://xdai.colony.io/rpc2/'],
        blockExplorerUrls: ['https://blockscout.com/xdai/mainnet'],
      },
    ],
  });
};

document.querySelector('#add_rpc')?.addEventListener('click', addColonyRPC);
