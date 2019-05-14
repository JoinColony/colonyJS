// This is what will become a part of ColonyJS - The Extended Colony Protocol

// It will make the Colony Network more human usable with functionality for
// non-consensus-relevant contexts by enriching the data stored on chain with
// metadata (which might be too expensive to store on chain).

// It helps developers building on the Colony Network provide a web 2.0 like
// user experience, without compromising decentralisation.

import IPFS from 'ipfs'
import { Buffer } from 'buffer'

let node

const waitForIPFS = () => {
  node = new IPFS({
    start: false,
    repo: './tmp/ipfs/data',
  })
  return new Promise((resolve, reject) => {
    node.on('ready', () => resolve(true))
    node.on('error', err => reject(err))
  })
}

export const init = async () => {
  await waitForIPFS()
  return node.start()
}

export const saveHash = async (obj) => {
  const data = Buffer.from(JSON.stringify(obj))
  const result = await node.files.add(data)
  return result[0].hash
}

export const getHash = async (hash) => {
  const buf = await node.files.cat(`/ipfs/${hash}`)
  let obj
  try {
    obj = JSON.parse(buf.toString())
  } catch (err) {
    throw new Error(`Could not get hash ${hash}`)
  }
  return obj
}

export const stop = () => node.stop()
