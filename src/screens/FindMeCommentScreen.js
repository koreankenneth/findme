import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Comment from '../components/findme/detail/Comment'
import CommentWriter from '../components/common/CommentWriter'
import { formatFindMeComment } from '../utils/helper'
import { addSubComment } from '../actions/findme'

class FindMeCommentScreen extends Component {
  
  onSubmit = (text) => {
    const { session, dispatch, comments } = this.props
    const { index } = this.props.navigation.state.params
    const comment = comments[index]
    const test = formatFindMeComment(comment.childComments, text, session, 'subcomment')
    dispatch(addSubComment(index, test))
  }

  render() {
    const { index } = this.props.navigation.state.params
    const comment = this.props.comments[index]
    
    return (
      <View
        style={styles.container}
      >
        <KeyboardAwareScrollView
          scrollEnabled={true}
        >
          {/* 댓글영역 */}
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
            childComments={comment.childComments}
          />

        </KeyboardAwareScrollView>
        {/* 댓글쓰기영역 */}
        <CommentWriter
          height={50}
          onSubmit={this.onSubmit}
        />
      </View>
    )
  }
}
function mapStateToProps({ findme, session }) {
  return {
    comments: findme.postDetail.comments,
    session,
  }
}

export default connect(mapStateToProps)(FindMeCommentScreen)


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
