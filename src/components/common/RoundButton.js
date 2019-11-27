import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'

export default function RoundButton({ height, text, isActive, onPress }) {
  return (
      <TouchableOpacity
        style={[{height: height, borderRadius: height/2}, isActive ? styles.buttonActive : styles.buttonInactive]}
        disabled={!isActive}
        onPress={onPress}
      >
        <Text
          style={styles.buttonText}
        >
          {text}
        </Text>
      </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  buttonActive: {
    width: '105%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.buttonActive,
  },
  buttonInactive: {
    width: '105%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.buttonInactive,
  },
  buttonText: {
    color: Colors.tintColor,
    fontWeight: '600',
    fontSize: 15,
  }
})