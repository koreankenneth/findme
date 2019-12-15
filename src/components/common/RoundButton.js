import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors';

export default function RoundButton({ 
  children, 
  onPress, 
  height = 40, 
  width = '100%', 
  color = Colors.orange,
  backgroundColor = Colors.white,
  borderColor = Colors.gray,
}) {
  return (
    <TouchableOpacity 
      style={[styles.button, {
        height: height, 
        width: width, 
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        borderRadius: height/2
      }]}
      onPress={onPress}
    >
      <Text style={[styles.text, {color: color}]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
})