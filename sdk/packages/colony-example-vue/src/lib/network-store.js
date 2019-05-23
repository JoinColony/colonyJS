import networkProxy from './network-proxy'

let network

export function setNetwork(networkArg) {
  network = networkArg
}

export function getNetworkProxy() {
  return networkProxy(network)
}

export function getNetwork() {
  return network
}
