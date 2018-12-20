import { store } from '../index'
import * as actions from '../constants/actions'
import * as domainActions from '../../helpers/actions/domainActions'
import { getPots } from './fundingActions'

// addDomain

export const addDomain = (colonyClient) => ({
  type: actions.ADD_DOMAIN,
  payload: domainActions.addDomain(colonyClient)
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
  payload: domainActions.fundDomain(colonyClient, domainId, amount)
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
  payload: domainActions.getDomains(colonyClient)
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
