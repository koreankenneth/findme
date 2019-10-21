import React, { useContext, Component } from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import Layout from '../../../constants/Layout'
import { Feather } from '@expo/vector-icons'
import { withNavigation } from 'react-navigation'

const width = Layout.window.width * 0.9

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            this.props.navigation.goBack()
          }}
        >
          <Feather
            name='arrow-left'
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.shareButton}
        >
          <Feather
            name='share'
            size={21}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.followButton}
        >
          <Feather
            name='heart'
            size={21}
          />
        </TouchableOpacity>
      </View >
    )
  }
}

export default withNavigation(Header)

const styles = StyleSheet.create({
  header: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  backButton: {
    flex: 8,
  },
  shareButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  followButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});