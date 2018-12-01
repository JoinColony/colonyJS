// import prerequisites
const { providers, Wallet } = require('ethers')
const { default: EthersAdapter } = require('@colony/colony-js-adapter-ethers')
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http')
const { default: ColonyNetworkClient } = require('@colony/colony-js-client')

// instantiate TrufflepigLoader
const loader = new TrufflepigLoader()

// instantiate JsonRpcProvider
const provider = new providers.JsonRpcProvider('http://localhost:8545/')

// connectNetwork

export const connectNetwork = async (accountIndex) => {

  // get private key
  const { privateKey } = await loader.getAccount(accountIndex)

  // instantiate Wallet
  const wallet = new Wallet(privateKey, provider)

  // instantiate EthersAdapter
  const adapter = new EthersAdapter({
    loader,
    provider,
    wallet,
  })

  // instantiate ColonyNetworkClient
  const networkClient = new ColonyNetworkClient({ adapter })

  // initialize network client
  await networkClient.init()

  // return network client
  return networkClient

}
