import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Colors from '../../../constants/Colors'

const TEXT_PUBLIC = `공개로 찾는 방법이에요.
찾은 물건은 다른 사람들도 같이 볼 수 있어요.
가격 경쟁이 가능해 현명하게 비교할 수 있어요.`

const TEXT_PRIVATE = `판매자가 물건을 찾아줄 때 비밀로 찾는 
방법이에요.
요청한 사람만 판매자가 찾은걸 올리면 볼 수 있어요.
서로 찾은 걸 볼 수 없기 때문에 요청자에게
파격적인 판매 금액을 제안할 수도 있어요.`

export default function Intro({ setDisplayType }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setDisplayType('public')}
        style={styles.boxButton}
      >
        <View style={styles.leftArea}>
          <Image source={require('../../../../assets/images/drawable-xxxhdpi/findme_write_ico_open.png')} style={styles.buttonIcon} />
        </View>
        <View style={styles.rightArea}>
          <Text style={styles.textTitle}>
            공개로 찾아주세요
            </Text>
          <Text style={styles.textBody}>
            {TEXT_PUBLIC}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setDisplayType('private')}
        style={styles.boxButton}
      >
        <View style={styles.leftArea}>
          <Image source={require('../../../../assets/images/drawable-xxxhdpi/findme_write_ico_secret.png')} style={styles.buttonIcon} />
        </View>
        <View style={styles.rightArea}>
          <Text style={styles.textTitle}>
            비밀로 찾아주세요
            </Text>
          <Text style={styles.textBody}>
            {TEXT_PRIVATE}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxButton: {
    width: '100%',
    height: 170,
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginBottom: 30,
    flexDirection: 'row',
    // 그림자관련
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  leftArea: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    width: 60,
    height: 60,
  },
  rightArea: {
    flex: 7,
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 19,
  },
  textBody: {
    marginTop: 10,
    fontSize: 12,
    color: '#a8a8a8',
  },
})
