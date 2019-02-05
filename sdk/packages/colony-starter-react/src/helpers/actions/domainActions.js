// import big number
import BN from 'bn.js'

// addDomain

export const addDomain = async (colonyClient) => {

  // add domain
  const tx = await colonyClient.addDomain.send({
    parentDomainId: 1,
  })

  // check unsuccessful
  if (!tx.successful) {

    // throw error
    throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

  }

  // get domain id
  const { count: domainId } = await colonyClient.getDomainCount.call()

  // get domain
  const domain = getDomain(colonyClient, domainId)

  // return domain
  return domain

}

// fundDomain

export const fundDomain = async (colonyClient, domainId, amount) => {

  // set token
  const token = colonyClient.tokenClient.contract.address

  // get domain
  const { potId } = await colonyClient.getDomain.call({ domainId })

  // move funds between pots
  const tx = await colonyClient.moveFundsBetweenPots.send({
    fromPot: 1,
    toPot: potId,
    amount: new BN(amount),
    token,
  })

  // check unsuccessful
  if (!tx.successful) {

    // throw error
    throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

  }

  // return true
  return true

}

// getDomain

export const getDomain = async (colonyClient, domainId) => {

  // get domain
  const domain = await colonyClient.getDomain.call({ domainId })

  // return domain
  return domain

}

// getDomains

export const getDomains = async (colonyClient) => {

  // get domain count
  const { count: domainCount} = await colonyClient.getDomainCount.call()

  // set domain id
  let domainId = 1

  // set domains
  let domains = []

  // get domains
  while (domainId <= domainCount) {

    // get domain
    let domain = await getDomain(colonyClient, domainId)

    // append domain id
    domain.id = domainId

    // push domain to domains
    domains.push(domain)

    // increment domain id
    domainId++

  }

  // return domains
  return domains

}
