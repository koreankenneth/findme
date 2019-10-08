import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { getFindMePost, saveComment } from '../utils/api'
import Body from '../components/findme/detail/Body'
import Comment from '../components/findme/detail/Comment'
import CommentWriter from '../components/common/CommentWriter'
import { formatFindMeComment, genNewCommentID } from '../utils/helper'
import { setPost, addComment } from '../actions/findme'
import Colors from '../constants/Colors'

class FindMeDetailScreen extends Component {
  state = {
    ready: false,
  }

  onSubmit = (text) => {
    const { session, dispatch, postDetail } = this.props
    dispatch(addComment(formatFindMeComment(postDetail.comments, text, session, 'comment')))
  }

  componentDidMount() {
    const { id } = this.props.navigation.state.params
    const { dispatch } = this.props

    getFindMePost(id)
      .then((postDetail) => dispatch(setPost(postDetail)))
      .then(() => this.setState({ ready: true }))
  }

  render() {
    const { ready } = this.state

    if (ready === false) {
      return <AppLoading />
    }

    const { session, postDetail, navigation } = this.props

    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={styles.scrollView}
          scrollEnabled={true}
        >

          {/* 바디영역 */}
          <Body
            authorInfo={postDetail.authorInfo}
            prodInfo={postDetail.prodInfo}
            postInfo={postDetail.postInfo}
          />
          {/* 댓글영역 */}
          {
            postDetail.comments.map((comment) =>
              <Comment
                navigation={navigation}
                index={postDetail.comments.indexOf(comment)}
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
                childComments={comment.childComments}
              />
            )
          }

          {/* 댓글쓰기영역 */}
          <CommentWriter
            height={50}
            onSubmit={this.onSubmit}
          />
        </KeyboardAwareScrollView>
        <TouchableOpacity
          style={styles.offerButton}
          onPress={() => navigation.navigate(
            'FindMeOfferScreen',
          )}
        >
          <Text style={styles.offerText}>
            찾은 상품 올리기
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps({ session, findme }) {
  return {
    session: session,
    postDetail: findme.postDetail,
  }
}

export default connect(mapStateToProps)(FindMeDetailScreen)


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  offerButton: {
    height: 50,
    width: '100%',
    backgroundColor: '#a78563',
    justifyContent: 'center',
    alignItems: 'center',
  },
  offerText: {
    color: Colors.white,
    fontSize: 14,
  }
})
