import { combineReducers } from 'redux'
import accountReducer from './reducers/accountReducer'
import networkReducer from './reducers/networkReducer'

const reducers = combineReducers({
  account: accountReducer,
  network: networkReducer,
})

export default reducers
