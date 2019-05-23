import colonyProxy from './colony-proxy'

let colony = null

export function setColony(colonyArg) {
  colony = colonyArg
}

export function getColonyProxy() {
  return colonyProxy(colony)
}

export function getColony() {
  return colony
}
