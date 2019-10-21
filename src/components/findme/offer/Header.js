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
          style={styles.closeButton}
          onPress={() => {
            this.props.onClose()
          }}
        >
          <Feather
            name='x'
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
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  closeButton: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});