import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Image, TextInput } from 'react-native'
import Layout from '../constants/Layout'
import Colors from '../constants/Colors'

const width = Layout.window.width * 0.9
const height = width * 0.3
const photoHeight = height * 0.8

const textPlaceholder = `50자 이내로 내용을 입력 해 주세요.
(예 : 이보다 더 좋은 가격은 없어요!)`

class FindMeOfferScreen extends Component {
  render() {
    const { postDetail, navigation } = this.props
    console.log('postDetail=', postDetail)
    const { postInfo, prodInfo, authorInfo } = postDetail
    return (
      <View style={styles.container}>
        <View style={styles.prodSummary}>
          <Image
            style={styles.prodImage}
            source={{ url: prodInfo.images[0] }}
          />
          <View style={styles.infoArea}>
            <Text style={styles.brand}>
              {prodInfo.brand}
            </Text>
            <Text style={styles.prod}>
              {postInfo.title}
            </Text>
          </View>
        </View>
        <Text style={styles.priceTitle}>
          제품 가격을 입력해주세요.
        </Text>
        <View style={styles.priceArea}>
        <TextInput
          style={styles.priceInput}
          placeholder='200,000'
        />
          <Text style={styles.currency}>
            원
          </Text>
        </View>
        <TextInput
          style={styles.comment}
          multiline={true}
          placeholder={textPlaceholder}
        />
      </View>
    )
  }
}


function mapStateToProps({ findme, session }) {
  return {
    postDetail: findme.postDetail,
    session,
  }
}

export default connect(mapStateToProps)(FindMeOfferScreen)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  prodSummary: {
    width: width,
    height: height,
    borderRadius: height * 0.1,
    flexDirection: 'row',
    padding: 10,
    marginTop: height * 0.3,

    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderColor: Colors.gray,
  },
  prodImage: {
    height: photoHeight,
    width: photoHeight,
    borderWidth: 0.5,
    borderRadius: photoHeight * 0.1,
    borderColor: '#d8d8d8',
    backgroundColor: '#d8d8d8',
  },
  infoArea: {
    justifyContent: 'center',
    padding: 20,
  },
  brand: {
    color: Colors.orange,
    fontWeight: '600',
    fontSize: 15,
  },
  prod: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
  },
  priceTitle: {
    width: width * 0.9,
    marginTop: height * 0.4,
    fontSize: 19,
  },
  priceArea: {
    width: width * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceInput: {
    flex: 20,
    borderBottomWidth: 2,
    fontSize: 22,
    padding: 15,
  },
  currency: {
    flex: 1,
    marginLeft: 10,
    fontSize: 19,
  },
  comment: {
    width: width * 0.9,
    height: 130,
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: Colors.gray,
  }
})
