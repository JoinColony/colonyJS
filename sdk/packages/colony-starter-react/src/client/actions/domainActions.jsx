import BN from 'bn.js'
import { store } from '../index'
import * as actions from '../constants/actions'
import { getPots } from './fundingActions'

// addDomain

export const addDomain = (colonyClient) => ({
  type: actions.ADD_DOMAIN,
  payload: (async () => {

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
    const domain = await colonyClient.getDomain.call({ domainId })

    // return domain
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

    // get domain count
    const { count: domainCount} = await colonyClient.getDomainCount.call()

    // set domain id
    let domainId = 1

    // set domains
    let domains = []

    // get domains
    while (domainId <= domainCount) {

      // get domain
      const domain = await colonyClient.getDomain.call({ domainId })

      // append domain id
      domain.id = domainId

      // push domain to domains
      domains.push(domain)

      // increment domain id
      domainId++

    }

    // return domains
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
