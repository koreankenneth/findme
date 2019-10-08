
export function getTimestamp() {
  const objDate = new Date()
  const YYYY = objDate.getFullYear()
  const MM = _makeNumber2digits(objDate.getMonth() + 1)
  const DD = _makeNumber2digits(objDate.getDate())
  const HH = _makeNumber2digits(objDate.getHours())
  const MI = _makeNumber2digits(objDate.getMinutes())
  const SS = _makeNumber2digits(objDate.getSeconds())

  return `${YYYY}-${MM}-${DD} ${HH}:${MI}:${SS}`
}

export function formatFindMeComment(comments, text, session, commentType) {
  let result = {
    order: genNewCommentNo(comments),
    grade: session.grade,
    rank: session.rank,
    trust: session.trust,
    comment: text,
    timestamp: getTimestamp(),
    findTooCount: 0,
    isChild: commentType === 'subcomment',
    isSecret: false,
    isOffer: commentType === 'offer',
    images: [
    ],
    authorInfo: {
      name: session.name,
      photo: session.photo,
    },
  }

  if (commentType !== 'subcomment') {
    result = {
      ...result,
      childComments: [],
    }
  }
  
  return result
}

export function genNewCommentNo(comments) {
  if (comments.length > 0) {
    const arrCommentNo = comments.map((comment) => comment.order)
    return arrCommentNo[arrCommentNo.length - 1] + 1
  } else {
    return 1
  }
}

function _makeNumber2digits(number) {
  return ("0" + number).slice(-2);
}