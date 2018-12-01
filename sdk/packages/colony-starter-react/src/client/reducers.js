import { combineReducers } from 'redux'
import accountReducer from './reducers/accountReducer'
import adminsReducer from './reducers/adminsReducer'
import colonyReducer from './reducers/colonyReducer'
import domainsReducer from './reducers/domainsReducer'
import fundingReducer from './reducers/fundingReducer'
import networkReducer from './reducers/networkReducer'
import skillsReducer from './reducers/skillsReducer'
import tasksReducer from './reducers/tasksReducer'
import tokenReducer from './reducers/tokenReducer'

const reducers = combineReducers({
  account: accountReducer,
  admins: adminsReducer,
  colony: colonyReducer,
  domains: domainsReducer,
  funds: fundingReducer,
  network: networkReducer,
  skills: skillsReducer,
  tasks: tasksReducer,
  token: tokenReducer,
})

export default reducers
