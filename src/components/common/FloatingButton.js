import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

export default class FloatingButton extends React.Component {

  render() {
    return (
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => this.props.onPress()}
      >

        <Image
          source={require('../../../assets/images/icoMenuWrite.png')}
          style={{ marginBottom: 0, width: 25, height: 25, resizeMode: 'cover' }}
        />
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  floatingButton: {
    backgroundColor: 'white',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
    right: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
})