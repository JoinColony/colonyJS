import { combineReducers } from 'redux'
import accountReducer from './reducers/accountReducer'
import authorityReducer from './reducers/authorityReducer'
import colonyReducer from './reducers/colonyReducer'
import domainReducer from './reducers/domainReducer'
import fundingReducer from './reducers/fundingReducer'
import networkReducer from './reducers/networkReducer'
import taskReducer from './reducers/taskReducer'
import tokenReducer from './reducers/tokenReducer'

const reducers = combineReducers({
  account: accountReducer,
  authority: authorityReducer,
  colony: colonyReducer,
  domain: domainReducer,
  funding: fundingReducer,
  network: networkReducer,
  task: taskReducer,
  token: tokenReducer,
})

export default reducers
