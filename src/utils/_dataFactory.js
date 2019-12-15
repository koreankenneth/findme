
export async function _loadFindMeList(data) {
  let result = {}
  data.map((item) => {
    result = {
      ...result,
      [item.id]: {
        id: item.id,
        imageURL: item.images[0].link,
        isSecret: item.exposureType != 'PUBLIC',
        author: item.writer.name,
        title: item.title,
        timestamp: Date.parse(item.creationDateTime),
        order: 1,
      }
    }
  })
  return result
}

export async function _getFindMePost(data) {
  let result = {
    postInfo: {
      id: data.id,
      isSecret: data.exposureType != 'PUBLIC',
      title: data.title,
      timestamp: Date.parse(data.creationDateTime),
      content: data.content,
      offerCount: data.findmeTooCount,
      findTooCount: data.foundyouTooCount,
    },
    prodInfo: {
      images: data.images.map((item) => item.link),
      brand: data.product.productBrand,
      category: 'shoes',      //수정필요
      color: data.product.productColor,
      size: data.product.productSize,
    },
    authorInfo: {
      name: data.writer.name,
      photo: data.writer.profileImage,
    },
    comments: []
  }


  data.replies && data.replies.map((comment) => {
    result = {
      ...result,
      comments: [
        ...result.comments,
        {
          order: 1,             //수정필요
          grade: comment.writer.level,
          rank: '1',            //수정필요
          trust: '100',         //수정필요
          comment: comment.content,
          timestamp: comment.creationDateTime,
          findTooCount: 7,      //수정필요
          isChild: false,       //수정필요
          isSecret: false,      //수정필요
          isOffer: true,        //수정필요
          images: comment.images.map((item) => item.link),
          offerPrice: 120000,   //수정필요
          authorInfo: {
            name: comment.writer.name,
            photo: comment.writer.profileImage,
          },
          childComments: [],    //수정필요
        },
      ]
    }
  })



  return result
}

