import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors';

export default function RoundButton({ children, onPress, height = 40, width = '100%', color = Colors.orange }) {
  return (
    <TouchableOpacity 
      style={[styles.button, {height: height, width: width, borderRadius: height/2}]}
      onPress={onPress}
    >
      <Text style={[styles.text, {color: color}]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
})