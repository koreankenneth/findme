export const SET_LIST = 'SET_LIST'
export const SET_POST = 'SET_POST'
export const ADD_POST = 'ADD_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const ADD_SUB_COMMENT = 'ADD_SUB_COMMENT'

export function setList (list) {
  return {
    type: SET_LIST,
    list,
  }
}

export function setPost (postDetail) {
  return {
    type: SET_POST,
    postDetail,
  }
}

export function addPost (post) {
  return {
    type: SET_ADD_POSTPOST,
    post,
  }
}

export function addComment (comment) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}

export function addSubComment (index, comment) {
  return {
    type: ADD_SUB_COMMENT,
    index,
    comment,
  }
}
