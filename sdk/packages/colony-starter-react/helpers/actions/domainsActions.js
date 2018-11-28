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
