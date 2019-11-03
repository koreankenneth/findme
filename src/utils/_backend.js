
export const dummyFindMeList = {
  FMLS000000001: {
    id: 'FMLS000000001',
    imageURL: 'http://www.famousfootwear.com/ProductImages/shoes_ia92320.jpg',
    isSecret: true,
    author: 'Kenneth Kim',
    title: 'content title #1',
    timestamp: Date.parse(new Date()),
    order: 1,
  },
  FMLS000000002: {
    id: 'FMLS000000002',
    imageURL: 'http://www.famousfootwear.com/ProductImages/shoes_ia92320.jpg',
    isSecret: false,
    author: '김기훈',
    title: 'content title #2',
    timestamp: 1476518707000,
    order: 2,
  },
  FMLS000000003: {
    id: 'FMLS000000003',
    imageURL: 'http://www.famousfootwear.com/ProductImages/shoes_ia92320.jpg',
    isSecret: false,
    author: 'Chloe Park',
    title: 'content title #3',
    timestamp: 1476528607000,
    order: 3,
  },
  FMLS000000004: {
    id: 'FMLS000000004',
    imageURL: 'http://www.famousfootwear.com/ProductImages/shoes_ia92320.jpg',
    isSecret: true,
    author: 'Kenneth Cole',
    title: 'content title #4',
    timestamp: 1476538607000,
    order: 4,
  },
  FMLS000000005: {
    id: 'FMLS000000005',
    imageURL: 'http://www.famousfootwear.com/ProductImages/shoes_ia92320.jpg',
    isSecret: true,
    author: 'Keehoon Kim',
    title: 'content title #5',
    timestamp: 1476548607000,
    order: 5,
  },
  FMLS000000006: {
    id: 'FMLS000000006',
    imageURL: 'http://www.famousfootwear.com/ProductImages/shoes_ia92320.jpg',
    isSecret: true,
    author: 'Kenneth Cole',
    title: 'content title #6',
    timestamp: 1476558607000,
    order: 6,
  },
  FMLS000000007: {
    id: 'FMLS000000007',
    imageURL: 'http://www.famousfootwear.com/ProductImages/shoes_ia92320.jpg',
    isSecret: true,
    author: 'Kenneth Cole',
    title: 'content title #7',
    timestamp: 1476568607000,
    order: 7,
  },
  FMLS000000008: {
    id: 'FMLS000000008',
    imageURL: 'http://www.famousfootwear.com/ProductImages/shoes_ia92320.jpg',
    isSecret: true,
    author: 'Kenneth Cole',
    title: 'content title #8',
    timestamp: 1476578607000,
    order: 8,
  },
  FMLS000000009: {
    id: 'FMLS000000009',
    imageURL: 'http://www.famousfootwear.com/ProductImages/shoes_ia92320.jpg',
    isSecret: true,
    author: 'Kenneth Cole',
    title: 'content title #9',
    timestamp: 1476588607000,
    order: 9,
  },
  FMLS000000010: {
    id: 'FMLS000000010',
    imageURL: 'http://www.famousfootwear.com/ProductImages/shoes_ia92320.jpg',
    isSecret: true,
    author: 'Kenneth Cole',
    title: 'content title #10',
    timestamp: 1476598607000,
    order: 10,
  },
}

export const dummyFindMePost = (id) => {
  return {
    postInfo: {
      id: id,
      isSecret: dummyFindMeList[id].isSecret,
      title: dummyFindMeList[id].title,
      timestamp: dummyFindMeList[id].timestamp,
      content: '내용 없음',
      offerCount: 7,
      findTooCount: 10,
    },
    prodInfo: {
      images: [
        'https://www.famousfootwear.com/c/-/media/project/famousfootwear/brand-landing-pages/nike/2019/bts/hub/mobile-1/hero-desktop-air-max.jpg?h=452&w=750&la=en&hash=59022EE3D20D91DD7FB734112D560726BC7E6A87',
        'http://www.famousfootwear.com/ProductImages/shoes_ia92320.jpg',
        'https://image.goat.com/240/attachments/product_template_pictures/images/014/957/822/original/G33MS590_L26.png.png',
      ],
      brand: 'Nike',
      category: 'shoes',
      color: 'blue',
      size: 'XL',
    },
    authorInfo: {
      name: dummyFindMeList[id].author,
      photo: 'https://pbs.twimg.com/profile_images/716487122224439296/HWPluyjs_400x400.jpg',
    },
    comments: [
      {
        order: 1,
        grade: 'Platinum',
        rank: '1',
        trust: '100',
        comment: '아래와 같이 판매 중입니다. 연락주세요 ^^',
        timestamp: '2019-09-20 00:02:34',
        findTooCount: 7,
        isChild: false,
        isSecret: false,
        isOffer: true,
        images: [],
        offerPrice: 120000,
        authorInfo: {
          name: '케키샵',
          photo: 'https://pbs.twimg.com/profile_images/716487122224439296/HWPluyjs_400x400.jpg',
        },
        childComments:[],
      },
      {
        order: 2,
        grade: 'Bronze',
        rank: '1203',
        trust: '80',
        comment: '이미지 테스트',
        timestamp: '2019-09-17 00:02:34',
        findTooCount: 7,
        isChild: false,
        isSecret: false,
        isOffer: false,
        images: [
          'https://static.highsnobiety.com/thumbor/6bfRjeeStZrpCZLu_wbiEtDL0x8=/fit-in/480x320/smart/static.highsnobiety.com/wp-content/uploads/2019/02/26101638/best-nike-shoes-2019-martin-rose-monarch.jpg',
          'https://i.ytimg.com/vi/KXT_icAN77w/maxresdefault.jpg',
        ],
        offerPrice: '',
        authorInfo: {
          name: '김기훈',
          photo: 'https://pbs.twimg.com/profile_images/716487122224439296/HWPluyjs_400x400.jpg',
        },
        childComments:[],
      },
      {
        order: 3,
        grade: 'Bronze',
        rank: '1203',
        trust: '80',
        comment: '저도 사고싶네요',
        timestamp: '2019-09-17 00:02:34',
        findTooCount: 7,
        isChild: false,
        isSecret: false,
        isOffer: false,
        images: [],
        offerPrice: '',
        authorInfo: {
          name: '케네스',
          photo: 'https://pbs.twimg.com/profile_images/716487122224439296/HWPluyjs_400x400.jpg',
        },
        childComments: [
          {
            order: 1,
            grade: 'Bronze',
            rank: '1203',
            trust: '80',
            comment: '대댓글 테스트1',
            timestamp: '2019-09-17 00:02:34',
            isChild: true,
            images: [],
            authorInfo: {
              name: '김기훈',
              photo: 'https://pbs.twimg.com/profile_images/716487122224439296/HWPluyjs_400x400.jpg',
            },
          },
          {
            order: 2,
            grade: 'Bronze',
            rank: '1203',
            trust: '80',
            comment: '대댓글 이미지 테스트',
            timestamp: '2019-09-17 00:02:34',
            isChild: true,
            images: [
              'https://www.retrojordannew.com/wp-content/uploads/2018/10/mens-nike-air-jordan-1-retro-high-og-black-white-555088-010.jpg',
              'https://i.ytimg.com/vi/KXT_icAN77w/maxresdefault.jpg',
              'https://static.highsnobiety.com/thumbor/6bfRjeeStZrpCZLu_wbiEtDL0x8=/fit-in/480x320/smart/static.highsnobiety.com/wp-content/uploads/2019/02/26101638/best-nike-shoes-2019-martin-rose-monarch.jpg',
            ],
            authorInfo: {
              name: '김기훈',
              photo: 'https://pbs.twimg.com/profile_images/716487122224439296/HWPluyjs_400x400.jpg',
            },
          },
          {
            order: 3,
            grade: 'Silver',
            rank: '1203',
            trust: '90',
            comment: '대댓글 테스트3',
            timestamp: '2019-09-19 00:02:34',
            isChild: true,
            images: [],
            authorInfo: {
              name: '클로이',
              photo: 'https://pbs.twimg.com/profile_images/716487122224439296/HWPluyjs_400x400.jpg',
            },
          },
        ]
      },
      {
        order: 4,
        grade: 'Platinum',
        rank: '2',
        trust: '99',
        comment: '위에 샵보다 더 싸게 드릴게요! 쪽지주세요!!',
        timestamp: '2019-09-20 00:02:34',
        findTooCount: 7,
        isChild: false,
        isSecret: true,
        isOffer: true,
        images: [],
        offerPrice: 110000,
        authorInfo: {
          name: 'Chloe Shop',
          photo: 'https://pbs.twimg.com/profile_images/716487122224439296/HWPluyjs_400x400.jpg',
        },
        childComments: [
          {
            order: 1,
            grade: 'Bronze',
            rank: '1203',
            trust: '80',
            comment: '헐 대박..! 쪽지드렸습니다',
            timestamp: '2019-09-17 00:02:34',
            isChild: true,
            images: [],
            authorInfo: {
              name: '김기훈',
              photo: 'https://pbs.twimg.com/profile_images/716487122224439296/HWPluyjs_400x400.jpg',
            },
          },
        ]
      },
    ]
  }
}


export const dummySession = {
  id: 'nelo13',
  name: '김기훈',
  nickname: '르브론',
  grade: 'Gold',
  trust: '99',
  rank: '2',
  photo: 'https://pbs.twimg.com/profile_images/716487122224439296/HWPluyjs_400x400.jpg',
}