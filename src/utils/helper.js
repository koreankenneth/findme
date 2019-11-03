
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

export function getTimeDiff(timestamp) {
  const creationDateTime = new Date(timestamp)
  const now = Date.now() + 36e5 * 9 //Timezone: + 9:00 (Seoul)
  const numberOfHours = Math.abs(now - creationDateTime) / 36e5;
  const Days = numberOfHours < 1 ? 0 : Math.floor(numberOfHours / 24)
  const Remainder = numberOfHours < 1 ? numberOfHours : numberOfHours % 24
  const Hours = Math.floor(Remainder)
  const Minutes = Math.floor(60 * (Remainder - Hours))

  return {
    days: Days,
    hours: Hours,
    Minutes: Minutes,
    toString: () => {
      if (Days > 2) {
        return `${Days}일`
      } else if (Days) {
        return `${Days}일 ${Hours}시간`
      } else if (Hours > 9) {
        return `${Hours}시간`
      } else if (Hours) {
        return `${Hours}시간 ${Minutes}분`
      } else {
        return `${Minutes}분`
      }
    }
  }
}

export function formatDateTime(formatType, timestamp) {
  const objDate = new Date(timestamp)
  const YYYY = objDate.getFullYear()
  const MM = _makeNumber2digits(objDate.getMonth() + 1)
  const DD = _makeNumber2digits(objDate.getDate())
  const HH = _makeNumber2digits(objDate.getHours())
  const MI = _makeNumber2digits(objDate.getMinutes())
  const SS = _makeNumber2digits(objDate.getSeconds())

  let result = ''

  switch (formatType) {
    case 'YYYY.MM.DD':
      result = `${YYYY}.${MM}.${DD}`
      break
    case 'YYYY-MM-DD':
      result = `${YYYY}-${MM}-${DD}`
    case 'YYYY-MM-DD HH:MI:SS':
      result = `${YYYY}-${MM}-${DD} ${HH}:${MI}:${SS}`
    default:
      result = creationDateTime.toString()
      break
  }
  return result
}

export function formatFindMeComment(comments, text, session, commentType, offerPrice) {
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
    offerPrice: offerPrice,
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