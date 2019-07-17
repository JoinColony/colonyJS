import purserMetamask from '@colony/purser-metamask'
import purserSoftware from '@colony/purser-software'

import { getAccounts } from '@/api/accounts'

const { NODE_ENV } = process.env
const testOrDevelopment = NODE_ENV === 'test' || NODE_ENV === 'development'
const purser = testOrDevelopment ? purserSoftware : purserMetamask

export async function open() {
  if (testOrDevelopment) {
    const privateKeyCustom = process.env.VUE_APP_PURSER_PRIVATE_KEY
    const privateKey = privateKeyCustom || (await getAccounts())[0][1]
    return purser.open({ privateKey })
  }
  return purser.open()
}
