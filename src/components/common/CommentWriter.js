import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image, View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Colors from '../../constants/Colors'
import RoundButton from '../common/RoundButton'
import { AntDesign } from '@expo/vector-icons'


class CommentWriter extends Component {
  state = {
    comment: ''
  }

  onPress = () => {
    const { onSubmit } = this.props

    onSubmit(this.state.comment)

    this.setState({ comment: '' })
  }

  render() {
    const { height, session } = this.props

    return (
      <View style={[{ height: height }, styles.container]}>
        <Image
          style={[{ height: height * 0.7, width: height * 0.7, borderRadius: height * 0.7 / 2 }, styles.photo]}
          source={{ url: session.photo }}
        />
        <TextInput
          style={[{ height: height * 0.7, borderRadius: height * 0.7 / 2 }, styles.commentWriter]}
          placeholder='댓글쓰기...'
          placeholderTextColor={Colors.gray}
          value={this.state.comment}
          onChangeText={(comment) => this.setState({ comment })}
        />

        <View style={styles.buttonArea}>
          <RoundButton
            height={25}
            width={25}
            color={Colors.gray}
            onPress={this.onPress}
          >
            <AntDesign
              style={styles.headerIcons}
              name='arrowright'
              size={15}
            />
          </RoundButton>
        </View>

      </View>
    )
  }
}

function mapStateToProps({ session }, { height, onSubmit }) {
  return {
    session: session,
    height: height,
    onSubmit: onSubmit,
  }
}

export default connect(mapStateToProps)(CommentWriter)



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  photo: {
    flex: 1,
  },
  commentWriter: {
    height: 40,
    flex: 8,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#f3f3f3',
  },
  buttonArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})