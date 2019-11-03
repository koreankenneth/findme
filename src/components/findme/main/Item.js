import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native'
import CountDownBar from '../../common/CountDownBar'
import Layout from '../../../constants/Layout'
import Colors from '../../../constants/Colors'
import { formatDateTime } from '../../../utils/helper'

const width = Layout.window.width * 0.9
const height = width * 0.4
const photoHeight = height * 0.6

export default function Item({ isSecret, author, title, timestamp, imageURL, onPress }) {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.prodInfoArea}>
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
            <Text style={styles.additionalInfoText}>{formatDateTime('YYYY.MM.DD', timestamp)}</Text>
          </View>
        </View>
      </View>
      <View style={styles.expirationArea}>
        <CountDownBar
          timestamp={timestamp}
          unit={'d'}
          duration={14}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    borderRadius: height * 0.1,
    padding: 12,
    marginTop: height * 0.1,

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
  prodInfoArea: {
    flex: 4,
    flexDirection: 'row',
  },
  photoContainer: {
    flex: 3,
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
  expirationArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
})
