// This is what will become a part of ColonyJS - The Extended Colony Protocol

// It will make the Colony Network more human usable with functionality for
// non-consensus-relevant contexts by enriching the data stored on chain with
// metadata (which might be too expensive to store on chain).
// It helps developers building on the Colony Network provide a web 2.0 like
// user experience, without compromising decentralisation.

const IPFS = require('ipfs')
const { Buffer } = require('buffer')

let node

const waitForIPFS = () => {
  node = new IPFS({ start: false })
  return new Promise((resolve, reject) => {
    node.on('ready', () => resolve(true))
    node.on('error', err => reject(err))
  })
}

exports.init = async () => {
  await waitForIPFS()
  return node.start()
}

exports.getTaskDeliverable = async (hash) => {
  const buf = await node.files.cat(`/ipfs/${hash}`)
  let spec
  try {
    spec = JSON.parse(buf.toString())
  } catch (e) {
    throw new Error(`Could not get task deliverable for hash ${hash}`)
  }
  return spec
}

exports.saveTaskDeliverable = async (spec) => {
  const data = Buffer.from(JSON.stringify(spec))
  const result = await node.files.add(data)
  return result[0].hash
}

exports.getTaskSpecification = async (hash) => {
  const buf = await node.files.cat(`/ipfs/${hash}`)
  let spec
  try {
    spec = JSON.parse(buf.toString())
  } catch (e) {
    throw new Error(`Could not get task specification for hash ${hash}`)
  }
  return spec
}

exports.saveTaskSpecification = async (spec) => {
  const data = Buffer.from(JSON.stringify(spec))
  const result = await node.files.add(data)
  return result[0].hash
}

exports.stop = () => node.stop()
