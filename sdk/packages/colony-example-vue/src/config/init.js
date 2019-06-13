import { connect } from '@/api/network'
import { setNetwork } from '@/helpers/network-store'

import './error-handler'
import './components'

export default async function init() {
  const network = await connect()
  setNetwork(network)
}
