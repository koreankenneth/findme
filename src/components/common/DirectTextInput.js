import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import Colors from '../../constants/Colors'

export default class DirectTextInput extends Component {
  state = {
    isOnWriting: false,
    text: '',
  }

  render() {
    const { isOnWriting, text } = this.state
    const { placeholder, labelTextColor, onPress, labelText } = this.props

    return (
      <View style={styles.container}>
        {
          isOnWriting
            ?
            <View style={styles.writingArea}>
              <TextInput
                placeholder={placeholder}
                placeholderTextColor='#c2c2c2'
                style={styles.writingInput}
                value={text}
                onChangeText={(text) => this.setState({ text: text })}
                onBlur={() => this.setState({ isOnWriting: false, text: '' })}
              />
              <TouchableOpacity
                style={styles.brandWritingButton}
                onPress={() => {
                  this.setState({ isOnWriting: false, text: '' })
                  onPress(text)
                }}
              >
                <Text>
                  입력
                </Text>
              </TouchableOpacity>
            </View>
            :
            <TouchableOpacity
              style={styles.brandInputButton}
              onPress={() => this.setState({ isOnWriting: true })}
            >
              <Text style={{ color: labelTextColor ? labelTextColor : '#000' }} >
                {labelText}
              </Text>
              <Image
                source={require('../../../assets/images/drawable-xxxhdpi/ico_menu_write.png')}
                style={styles.brandInputButtonIcon}
              />
            </TouchableOpacity>

        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  writingArea: {
    height: 36,
    width: '75%',
    borderRadius: 18,
    borderWidth: 0.5,
    borderColor: '#979797',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 15,
  },
  writingInput: {
    flex: 8,
  },
  brandWritingButton: {
    flex: 1,
  },
  brandInputButton: {
    height: 36,
    borderRadius: 18,
    borderWidth: 0.5,
    borderColor: '#979797',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 15,
  },
  brandInputButtonText: {

  },
  brandInputButtonIcon: {
    height: 13,
    width: 13,
    marginLeft: 5,
    opacity: 0.4,
  },
})