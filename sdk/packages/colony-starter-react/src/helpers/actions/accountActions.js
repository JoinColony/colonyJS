const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http')

const loader = new TrufflepigLoader()

export const getAccounts = async () => {
  let accounts = []
  for (let i = 0; i < 10; i++) {
    const { address } = await loader.getAccount(i)
    accounts.push(address);
  }
  return accounts
}
