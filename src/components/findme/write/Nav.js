import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Colors from '../../../constants/Colors'

export default function Nav ({ page, goPage }) {
  return (
    <View style={styles.container}>
    <TouchableOpacity
      style={page === 1 ? styles.buttonActive : styles.buttonInactive}
      onPress={() => goPage(1)}
    >
      <Text style={page === 1 ? styles.buttonTextActive : styles.buttonTextInactive} >01</Text>
    </TouchableOpacity>
      <TouchableOpacity
        style={page === 2 ? styles.buttonActive : styles.buttonInactive}
        onPress={() => goPage(2)}
      >
        <Text style={page === 2 ? styles.buttonTextActive : styles.buttonTextInactive} >02</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={page === 3 ? styles.buttonActive : styles.buttonInactive}
        onPress={() => goPage(3)}
      >
        <Text style={page === 3 ? styles.buttonTextActive : styles.buttonTextInactive} >03</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={page === 4 ? styles.buttonActive : styles.buttonInactive}
        onPress={() => goPage(4)}
      >
        <Text style={page === 4 ? styles.buttonTextActive : styles.buttonTextInactive} >04</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonActive: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginLeft: 8,
    paddingBottom: 7,
    borderBottomWidth: 3,
    borderColor: Colors.buttonActive,
  },
  buttonInactive: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginLeft: 8,
    paddingBottom: 7,
    borderBottomWidth: 3,
    borderColor: '#f8f8f8',
  },
  buttonTextActive: {
    fontSize: 18,
    color: Colors.buttonActive,
  },
  buttonTextInactive: {
    fontSize: 18,
    color: Colors.buttonInactive,
  },
})