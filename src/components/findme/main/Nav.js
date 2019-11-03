import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import Colors from '../../../constants/Colors'
import Layout from '../../../constants/Layout'

const height = Layout.window.height * 0.05

export default function Nav({ page, goPage }) {

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => goPage('all')}
          style={[styles.navButton, page === 'all' && styles.navButtonSelected]}
        >
          <Text
            style={[styles.navButtonText, page === 'all' && styles.navButtonTextSelected]}
          >
            전체
            </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => goPage('find')}
          style={[styles.navButton, page === 'find' && styles.navButtonSelected]}
        >
          <Text
            style={[styles.navButtonText, page === 'find' && styles.navButtonTextSelected]}
          >
            찾아주세요
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => goPage('notfound')}
          style={[styles.navButton, page === 'notfound' && styles.navButtonSelected]}
        >
          <Text
            style={[styles.navButtonText, page === 'notfound' && styles.navButtonTextSelected]}
          >
            아직 못찾았어요
        </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => goPage('found')}
          style={[styles.navButton, page === 'found' && styles.navButtonSelected]}
        >
          <Text
            style={[styles.navButtonText, page === 'found' && styles.navButtonTextSelected]}
          >
            찾았어요
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: height,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 2.5,
    paddingRight: 10,
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButton: {
    padding: 5,
  },
  navButtonSelected: {
    borderBottomColor: Colors.black,
    borderBottomWidth: 2.5,
  },
  navButtonText: {
    fontSize: 14,
    color: '#121212',
    opacity: 0.6,
  },
  navButtonTextSelected: {
    fontSize: 15,
    fontWeight: '900',
    opacity: 1,
  },
});