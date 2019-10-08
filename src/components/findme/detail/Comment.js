import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Colors from '../../../constants/Colors'
import RoundButton from '../../common/RoundButton'

export default function Comment({ navigation, index, authorInfo, grade, rank, trust, comment, images, timestamp, findTooCount, isChild, isSecret, isOffer, offerPrice, childComments }) {
  return (
    <View>
      <View style={[styles.container, isOffer && { backgroundColor: '#f9f7f4' }, isChild && { paddingLeft: 25 }]}>
        <View style={styles.commentArea}>
          <View style={styles.profile}>
            <View style={styles.leftArea}>

              <Image
                style={styles.photo}
                source={{ url: authorInfo.photo }}
              />
            </View>
            <View style={styles.middleArea}>
              <Text style={styles.name}>
                {authorInfo.name}
              </Text>
              <View style={styles.gradeContainer}>
                <Text style={styles.gradeText}>
                  {grade}
                </Text>
              </View>
              <View style={styles.roundLabelContainer}>
                <Text style={styles.roundLabelText}>
                  랭킹 {rank}
                </Text>
              </View>
              <View style={styles.roundLabelContainer}>
                <Text style={styles.roundLabelText}>
                  신뢰 {trust}%
            </Text>
              </View>
            </View>
            <View style={styles.rightArea}>
              <View style={styles.moreActionButtonContainer}>
                <TouchableOpacity>
                  <Feather style={styles.profileIcons}
                    name='more-vertical'
                    size={17.3}
                    color='#424242'
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.leftArea}>
            </View>
            <View style={styles.middleArea}>
              <Text style={styles.content}>
                {comment}
              </Text>
            </View>
            <View style={styles.rightArea}>
            </View>
          </View>

          {/* 사진영역 */}
          {
            images.length > 0 &&
            <View style={styles.imageArea}>
              <View style={styles.leftArea}>
              </View>
              <View style={styles.middleArea}>
                {
                  images.map((image) => {
                    return (
                      <Image
                        style={styles.image}
                        source={{ url: image }}
                        key={images.indexOf(image)} //iteration시, key값 없으면 렌더링 안됨
                      />
                    )
                  })
                }
              </View>
              <View style={styles.rightArea}>
              </View>
            </View>
          }


          <View style={styles.reaction}>
            <View style={styles.leftArea}>
            </View>
            <View style={styles.middleArea}>
              <Text style={styles.timestamp}>
                {timestamp}
              </Text>
              {
                !isChild &&
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textSpacer}>·</Text>
                  <TouchableOpacity
                    style={styles.commentButton}
                    onPress={() => navigation.navigate(
                      'FindMeCommentScreen',
                      { index }
                    )}
                  >
                    {/* <Image source={require('../../../assets/images/drawable-xxxhdpi/ico_reply.png')} style={styles.reactionIcons} /> */}
                    <Text style={styles.commentText}>댓글 달기</Text>
                  </TouchableOpacity>

                  <Text style={styles.textSpacer}>·</Text>
                  <View style={styles.followButton}>
                    {/* <Image source={require('../../../assets/images/drawable-xxxhdpi/ico_metoo.png')} style={styles.reactionIcons} /> */}
                    <Text style={styles.followText}>나도 찾아요</Text>
                    <Text style={styles.followNumberText}>{findTooCount}</Text>
                  </View>
                </View>
              }


            </View>
            <View style={styles.rightArea}>
            </View>
          </View>
        </View>
        {
          isOffer &&
          <View style={styles.additionalInfoArea}>
            {
              isSecret
                ?
                <View style={styles.offerInfoSecret}>

                  <RoundButton
                    height={40}
                    width={'90%'}
                    onPress={null}
                    color={Colors.black}
                  >
                    골든키로 보기
                  </RoundButton>
                </View>
                :
                <View style={styles.offerInfoPublic}>
                  <View style={styles.price}>
                    <Text style={styles.priceText}>
                      {offerPrice}
                    </Text>
                    <Text style={styles.currencyText}>원</Text>
                  </View>

                  <RoundButton
                    height={40}
                    width={110}
                    onPress={null}
                  >
                    결제하기
                  </RoundButton>
                </View>
            }
          </View>
        }

      </View>
      {
        childComments &&
        childComments.map((comment) =>
          <Comment
            key={comment.order}
            authorInfo={comment.authorInfo}
            grade={comment.grade}
            rank={comment.rank}
            trust={comment.trust}
            comment={comment.comment}
            images={comment.images}
            timestamp={comment.timestamp}
            findTooCount={comment.findTooCount}
            isChild={comment.isChild}
            isSecret={comment.isSecret}
            isOffer={comment.isOffer}
            offerPrice={comment.offerPrice}
          />
        )
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#c8c8c8',
    borderBottomWidth: 0.5,
  },
  commentArea: {
    padding: 15,
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftArea: {
    flex: 1,
  },
  middleArea: {
    flex: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  rightArea: {
    flex: 1,
    alignItems: 'flex-end',
  },
  photo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
  gradeContainer: {
    height: 16,
    borderRadius: 8,
    backgroundColor: '#d3ccc7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    paddingLeft: 6.7,
    paddingRight: 6.7,
  },
  gradeText: {
    fontSize: 8,
    color: '#ffffff',
  },
  roundLabelContainer: {
    height: 16,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#c5b4a4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    paddingLeft: 6.7,
    paddingRight: 6.7,
  },
  roundLabelText: {
    fontSize: 8,
    color: '#a78563',
  },
  moreActionButtonContainer: {
    justifyContent: 'flex-end',
  },
  body: {
    marginTop: 6,
    flex: 2,
    flexDirection: 'row',
  },
  content: {
    width: '100%',
    height: '100%',
    color: '#484848',
    fontSize: 14,
  },
  imageArea: {
    marginTop: 12,
    height: 80,
    flexDirection: 'row',
  },
  image: {
    height: 80,
    width: 80,
    marginRight: 10,
  },
  reaction: {
    flex: 1,
    height: 17.7,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  timestamp: {
    fontSize: 12,
    color: '#a5a5a5',

  },
  textSpacer: {
    width: 15,
    color: '#a5a5a5',
    textAlign: 'center',
  },
  commentButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    fontSize: 12,
    color: '#a5a5a5',

  },
  followButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  followText: {
    fontSize: 12,
    color: '#a5a5a5',

  },
  followNumberText: {
    marginLeft: 3,
    fontSize: 12,
    color: '#da5804',
  },
  reactionIcons: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  additionalInfoArea: {
    height: 50,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
  },
  offerInfoSecret: {
    alignItems: 'center',
  },
  goldenKeyButton: {
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  goldenKeyText: {
    fontSize: 15,
    fontWeight: '600',
  },
  offerInfoPublic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    marginLeft: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    color: Colors.orange,
    fontSize: 25,
    fontWeight: '600',
  },
  currencyText: {
    marginLeft: 3,
    fontSize: 15,
    fontWeight: '600',
    paddingTop: 5,
  },
  paymentButton: {
    height: 40,
    width: 110,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  paymentText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.orange,
  },
})