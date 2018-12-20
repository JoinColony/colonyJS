// import TrufflepigLoader
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http')

// getAccounts

export const getAccounts = async () => {

  // instantiate TrufflepigLoader
  const loader = new TrufflepigLoader()

  // get ganache test accounts
  const accountsObject = await loader.getAccounts()

  // convert accounts object into an array of public keys
  const accounts = Object.keys(accountsObject)

  // return accounts
  return accounts

}
