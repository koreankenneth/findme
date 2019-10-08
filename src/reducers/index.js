import { combineReducers } from 'redux'
import findme from './findme'
import session from './session'

export default combineReducers ({
  findme,
  session,
})