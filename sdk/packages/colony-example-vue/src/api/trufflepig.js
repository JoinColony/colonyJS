import { TrufflepigLoader } from '@colony/colony-js-contract-loader-http'

// An example action using TrufflepigLoader to get test accounts
export async function getAccounts() {
  const loader = new TrufflepigLoader()
  const accounts = Object.entries(await loader.getAccounts())
  return accounts
}
