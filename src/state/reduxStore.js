import { combineReducers, createStore } from 'redux'
import conversationsReducer from './conversationsReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  conversationsPage: conversationsReducer,
  usersPage: usersReducer
})

let store = createStore(reducers)

export default store