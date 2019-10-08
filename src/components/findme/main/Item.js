import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native'
import Layout from '../../../constants/Layout'
import Colors from '../../../constants/Colors'

const width = Layout.window.width * 0.9
const height = width * 0.3
const photoHeight = height * 0.8

export default function Item({ isSecret, author, title, date, imageURL, onPress }) {

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.photoContainer}>
        <Image
          style={styles.photo}
          source={{ url: imageURL }}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.additionalInfoArea}>
          <View style={styles.leftArea}>
            <Text style={styles.additionalInfoText}>{isSecret && 'Secret'}</Text>
          </View>
          <View style={styles.rightArea}>
            <Text style={styles.additionalInfoText}>{author}</Text>
          </View>
        </View>
        <View style={styles.titleArea}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.additionalInfoArea}>
          <Text style={styles.additionalInfoText}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    borderRadius: height * 0.1,
    flexDirection: 'row',
    padding: 10,
    marginTop: height*0.1,

    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderColor: Colors.gray,

    shadowRadius: 11,
    shadowOpacity: 0.3,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  photoContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    height: photoHeight,
    width: photoHeight,
    borderWidth: 0.5,
    borderRadius: photoHeight * 0.1,
    borderColor: '#d8d8d8',
    backgroundColor: '#d8d8d8',
  },
  infoContainer: {
    flex: 7,
    paddingLeft: 5,
  },
  additionalInfoArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  additionalInfoText: {
    fontSize: 11,
    color: Colors.gray,
  },
  titleArea: {
    flex: 3,
    paddingTop: 5,
  },
  titleText: {
    fontSize: 15,
    color: Colors.black,
    fontWeight: '400',
  },
  leftArea: {
    flex: 1,
    justifyContent: 'center',
  },
  rightArea: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
})
