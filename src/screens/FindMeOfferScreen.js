import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native'
import Header from '../components/findme/offer/Header'
import Layout from '../constants/Layout'
import Colors from '../constants/Colors'
import { FontAwesome } from '@expo/vector-icons'
import { addComment } from '../actions/findme'
import { formatFindMeComment } from '../utils/helper'

const width = Layout.window.width * 0.9
const height = width * 0.3
const photoHeight = height * 0.8

const textPlaceholder = `50자 이내로 내용을 입력 해 주세요.
(예 : 이보다 더 좋은 가격은 없어요!)`
const warning = `찾은상품을 올릴 때, 직거래를 유도하거나, 
계좌이체를 통한 거래를 요청하는 경우 영구적으로 계정을 사용할 수 없습니다. 
사용자분들이나 운영자에게 신고 및 접수가 될 수 있으니 
각별히 주의 부탁 드립니다.`

class FindMeOfferScreen extends Component {
  state = {
    comment: '',
    price: '',
  }

  onPress = () => {
    if (!this.isReadyToSubmit()) {
      return false
    }

    const { session, dispatch, postDetail, onClose } = this.props
    const { comment, price } = this.state

    dispatch(addComment(formatFindMeComment(postDetail.comments, comment, session, 'offer', price)))

    onClose()
  }

  isReadyToSubmit = () => this.state.comment.length > 0 && this.state.price.length > 0

  render() {
    const { postDetail } = this.props
    const { postInfo, prodInfo, authorInfo } = postDetail
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Header 
            onClose={this.props.onClose}
          />
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
              value={this.state.price}
              onChangeText={(price) => this.setState({ price })}
              onBlur={Keyboard.dismiss}
              keyboardType='numeric'
            />
            <Text style={styles.currency}>
              원
          </Text>
          </View>
          <TextInput
            style={styles.comment}
            multiline={true}
            placeholder={textPlaceholder}
            value={this.state.comment}
            onChangeText={(comment) => this.setState({ comment })}
            onBlur={Keyboard.dismiss}
          />
          <View style={styles.warningArea}>
            <View style={styles.iconArea}>
              <FontAwesome
                name='warning'
                size={60}
                color={Colors.orange}
              />
            </View>
            <Text style={styles.warning}>
              {warning}
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.offerButton, { backgroundColor: this.isReadyToSubmit() ? Colors.brown : Colors.gray }]}
            onPress={this.onPress}
          >
            <Text style={styles.offerText}>
              찾은 상품 올리기
            </Text>
          </TouchableOpacity>
        </View>
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
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .5)',
    alignItems: 'center',
    
  },
  innerContainer: {
    width: '100%',
    height: '95%',
    backgroundColor: Colors.white,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderRadius: 20,
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
    width: width * 0.95,
    height: 130,
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: Colors.gray,
  },
  warningArea: {
    position: 'absolute',
    bottom: 80,
    width: width * 0.95,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning: {
    paddingLeft: width * 0.05,
    flex: 4,
    lineHeight: 18,
    color: Colors.gray,
    fontSize: 12,
  },
  offerButton: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  offerText: {
    color: Colors.white,
    fontSize: 14,
  }
})
