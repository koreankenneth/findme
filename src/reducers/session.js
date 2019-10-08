import { SET_SESSION } from '../actions/session'

export default function session (state = {}, action) {
  switch (action.type) {
    case SET_SESSION :
      return {
        ...state,
        ...action.session,
      }
    default :
      return state
  }
}