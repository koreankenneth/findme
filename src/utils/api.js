import { dummyFindMeList, dummyFindMePost, dummySession, brands } from './_backend'

const isDevMode = true

export async function loadFindMeList(filter) {
  return isDevMode ? dummyFindMeList : null
}

export async function getFindMePost(id) {
  return isDevMode ? dummyFindMePost(id) : null
}

export async function getSession(id) {
  return isDevMode ? dummySession : null
}

export async function saveComment(id, comment) {
  return isDevMode ? 1 : 1
}

export async function loadBrands() {
  return brands
}