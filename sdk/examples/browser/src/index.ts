const addColonyRPC = () => {
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

document.querySelector('#add_rpc').addEventListener('click', addColonyRPC);
