import { SET_LIST, SET_POST, ADD_POST, ADD_COMMENT, ADD_SUB_COMMENT } from '../actions/findme'

export default function findme(state = {}, action) {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        list: { ...action.list },
      }
    case SET_POST:
      return {
        ...state,
        postDetail: { ...action.postDetail },
      }
    case ADD_POST:
      return {
        ...state,
        list: {
          ...state.list,
          [action.post.id]: action.post,
        },
      }
    case ADD_COMMENT:
      return {
        ...state,
        postDetail: {
          ...state.postDetail,
          comments: [
            ...state.postDetail.comments,
            action.comment,
          ]
        }
      }
    case ADD_SUB_COMMENT:
      const comments = state.postDetail.comments
      const comment = comments[action.index]
      const newChildComments = [...comment.childComments, action.comment]
      const newComment = {
        ...comment,
        childComments: [...newChildComments],
      }
      const newComments = comments.map((item) => {
        if (comments.indexOf(item) === action.index) {
          return newComment
        } else {
          return item
        }
      })

      return {
        ...state,
        postDetail: {
          ...state.postDetail,
          comments: newComments,
        }
      }
    default:
      return state
  }
}