const { providers, Wallet } = require('ethers')
const { default: EthersAdapter } = require('@colony/colony-js-adapter-ethers')
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http')
const { default: ColonyNetworkClient } = require('@colony/colony-js-client')

const loader = new TrufflepigLoader()
const provider = new providers.JsonRpcProvider('http://localhost:8545/')

export const connectNetwork = async (accountIndex) => {
  const { privateKey } = await loader.getAccount(accountIndex)
  const wallet = new Wallet(privateKey, provider)
  const adapter = new EthersAdapter({
    loader,
    provider,
    wallet,
  })
  const networkClient = new ColonyNetworkClient({ adapter })
  await networkClient.init()
  return networkClient
}
