export const SET_SESSION = 'SET_SESSION'

export function setSession (session) {
  return {
    type: SET_SESSION,
    session,
  }
}
