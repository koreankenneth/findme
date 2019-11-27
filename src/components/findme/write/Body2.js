import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Colors from '../../../constants/Colors'
import { Feather, Ionicons } from '@expo/vector-icons'


export default function Body2({ brand, product, setProduct, setInnerPage }) {

  state = {
    product: '',
  }

  return (
    <View style={styles.container}>
      <View style={styles.subjectArea}>
        <Text style={styles.title}>브랜드 선택</Text>
        <Text style={styles.guide}>브랜드는 정하셨어요?</Text>
        <View style={styles.contents}>
          {
            <View style={styles.textArea}>
              <TextInput
                placeholder='발렌시아가'
                placeholderTextColor='#c2c2c2'
                style={styles.textInput}
                value={brand === 'undefined' ? '' : brand}
                onFocus={() => {
                  setInnerPage('brand')
                }}
              />
              <View style={styles.searchButtonArea}>
                <Feather style={styles.searchButton}
                  name='search'
                  size={21}
                  color={Colors.black}
                  onPress={() => setInnerPage('brand')}
                />
              </View>
            </View>
          }
        </View>
      </View>
      <View style={styles.subjectArea}>
        <Text style={styles.title}>제품명 입력</Text>
        <Text style={styles.guide}>정확한 제품 이름을 아세요?</Text>
        <View style={styles.contents}>
          <View style={styles.textArea}>
            <TextInput
              placeholder='예) 19/SS RX DD003'
              placeholderTextColor='#c2c2c2'
              style={styles.textInput}
              onChangeText={(product) => setProduct({ product: product })}
              value={product === 'undefined' ? '' : product}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  subjectArea: {
    marginTop: 30,
    marginBottom: 100,
  },
  title: {
    color: Colors.orange,
    fontSize: 14,
    marginBottom: 10,
  },
  guide: {
    fontSize: 25,
    fontWeight: '200',
    marginBottom: 20,
  },
  contents: {
  },
  selectedBrandArea: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: '#979797',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandNameArea: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textArea: {
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 2,
    width: '100%',
    padding: 10,
  },
  brandLabel: {
  },
  brandName: {
    fontSize: 23,
    fontWeight: '300',
  },
  textInput: {
    flex: 15,
    fontSize: 21,
  },
})