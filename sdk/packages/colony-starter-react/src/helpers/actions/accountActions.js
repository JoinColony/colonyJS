// import TrufflepigLoader
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http')

// instantiate TrufflepigLoader
const loader = new TrufflepigLoader()

// getAccounts

export const getAccounts = async () => {

  // set accounts
  let accounts = []

  // get first 10 accounts
  for (let i = 0; i < 10; i++) {

    // get account
    const { address } = await loader.getAccount(i)

    // push account
    accounts.push(address)

  }

  // return accounts
  return accounts

}
