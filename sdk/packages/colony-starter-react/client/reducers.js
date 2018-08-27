import { combineReducers } from 'redux'
import networkReducer from './reducers/networkReducer'

const reducers = combineReducers({
  network: networkReducer,
})

export default reducers
