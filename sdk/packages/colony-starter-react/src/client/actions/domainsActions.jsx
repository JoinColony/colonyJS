import { store } from '../index'
import * as actions from '../constants/actions'
import * as domainsActions from '../../helpers/actions/domainsActions'
import { getPots } from './fundingActions'

// addDomain

export const addDomain = (colonyClient) => ({
  type: actions.ADD_DOMAIN,
  payload: domainsActions.addDomain(colonyClient)
    .then(domain => {
      store.dispatch(getDomains(colonyClient))
      store.dispatch(addDomainSuccess())
    })
    .catch(error => {
      store.dispatch(addDomainError(error.message))
    }),
})

export const addDomainError = (message) => ({
  type: actions.ADD_DOMAIN_ERROR,
  payload: message,
})

export const addDomainSuccess = (message) => ({
  type: actions.ADD_DOMAIN_SUCCESS,
  payload: message,
})

// fundDomain

export const fundDomain = (colonyClient, domainId, amount) => ({
  type: actions.FUND_DOMAIN,
  payload: domainsActions.fundDomain(colonyClient, domainId, amount)
    .then(pots => {
      store.dispatch(getPots(colonyClient))
      store.dispatch(fundDomainSuccess())
    })
    .catch(error => {
      store.dispatch(fundDomainError(error.message))
    }),
})

export const fundDomainError = (message) => ({
  type: actions.FUND_DOMAIN_ERROR,
  payload: message,
})

export const fundDomainSuccess = (message) => ({
  type: actions.FUND_DOMAIN_SUCCESS,
  payload: message,
})

// getDomains

export const getDomains = (colonyClient) => ({
  type: actions.GET_DOMAINS,
  payload: domainsActions.getDomains(colonyClient)
    .then(domains => {
      store.dispatch(setStateDomains(domains))
      store.dispatch(getDomainsSuccess())
    })
    .catch(error => {
      store.dispatch(getDomainsError(error.message))
    }),
})

export const getDomainsError = (message) => ({
  type: actions.GET_DOMAINS_ERROR,
  payload: message,
})

export const getDomainsSuccess = (message) => ({
  type: actions.GET_DOMAINS_SUCCESS,
  payload: message,
})

// setStateDomains

export const setStateDomains = (domains) => ({
  type: actions.SET_STATE_DOMAINS,
  payload: domains,
})
