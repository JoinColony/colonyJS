import { BN } from 'web3-utils'

import { store } from '../index'
import * as actions from '../constants/actions'
import { getPots } from './fundingActions'

// addDomain

export const addDomain = (colonyClient) => ({
  type: actions.ADD_DOMAIN,
  payload: (async () => {

    // Add domain
    const tx = await colonyClient.addDomain.send({
      parentDomainId: 1,
    })

    // Check unsuccessful
    if (!tx.successful) {

      // Throw failed transaction error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // Get domain id
    const { count: domainId } = await colonyClient.getDomainCount.call()

    // Get domain
    const domain = await colonyClient.getDomain.call({ domainId })

    // Return domain
    return domain

  })()
  .then(domain => {
    store.dispatch(getDomains(colonyClient))
    store.dispatch(getPots(colonyClient))
    store.dispatch(addDomainSuccess(true))
  })
  .catch(error => {
    store.dispatch(addDomainError(error.message))
  }),
})

export const addDomainError = (error) => ({
  type: actions.ADD_DOMAIN_ERROR,
  payload: error,
})

export const addDomainSuccess = (success) => ({
  type: actions.ADD_DOMAIN_SUCCESS,
  payload: success,
})

// fundDomain

export const fundDomain = (colonyClient, domainId, amount) => ({
  type: actions.FUND_DOMAIN,
  payload: (async () => {

    // Set token
    const token = colonyClient.tokenClient.contract.address

    // Get domain
    const { potId } = await colonyClient.getDomain.call({ domainId })

    // Move funds between pots
    const tx = await colonyClient.moveFundsBetweenPots.send({
      fromPot: 1,
      toPot: potId,
      amount: new BN(amount),
      token,
    })

    // Check unsuccessful
    if (!tx.successful) {

      // Throw failed transaction error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // Return true
    return true

  })()
  .then(success => {
    store.dispatch(getPots(colonyClient))
    store.dispatch(fundDomainSuccess(true))
  })
  .catch(error => {
    store.dispatch(fundDomainError(error.message))
  }),
})

export const fundDomainError = (error) => ({
  type: actions.FUND_DOMAIN_ERROR,
  payload: error,
})

export const fundDomainSuccess = (success) => ({
  type: actions.FUND_DOMAIN_SUCCESS,
  payload: success,
})

// getDomains

export const getDomains = (colonyClient) => ({
  type: actions.GET_DOMAINS,
  payload: (async () => {

    // Get domain count
    const { count: domainCount} = await colonyClient.getDomainCount.call()

    // Set domain id
    let domainId = 1

    // Set domains
    let domains = []

    // Get domains
    while (domainId <= domainCount) {

      // Get domain
      const domain = await colonyClient.getDomain.call({ domainId })

      // Append domain id
      domain.id = domainId

      // Add domain to domains
      domains.push(domain)

      // Increment domain id
      domainId++

    }

    // Return domains
    return domains

  })()
  .then(domains => {
    store.dispatch(setStateDomains(domains))
    store.dispatch(getDomainsSuccess(true))
  })
  .catch(error => {
    store.dispatch(getDomainsError(error.message))
  }),
})

export const getDomainsError = (error) => ({
  type: actions.GET_DOMAINS_ERROR,
  payload: error,
})

export const getDomainsSuccess = (success) => ({
  type: actions.GET_DOMAINS_SUCCESS,
  payload: success,
})

// setStateDomains

export const setStateDomains = (domains) => ({
  type: actions.SET_STATE_DOMAINS,
  payload: domains,
})
