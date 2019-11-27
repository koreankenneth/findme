import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import Colors from '../../../constants/Colors'
import { Feather } from '@expo/vector-icons'
import { AppLoading } from 'expo'
import { loadBrands } from '../../../utils/api'
import DirectTextInput from '../../common/DirectTextInput'

export default class BrandSearch extends Component {
  state = {
    ready: false,
    searchText: '',
    manualBrand: '',
    brands: [],
    isOnWriting: false,
  }

  componentDidMount() {
    loadBrands()
      .then((brands) =>
        this.setState({
          brands: brands,
          ready: true,
        })
      )
  }

  onChangeSearch = (searchText) => {
    this.setState({
      searchText,
    })
  }
  onChangeBrand = (manualBrand) => {
    this.setState({
      manualBrand,
    })
  }

  submit = (brand) => {
    const { setBrand, goBack } = this.props
    setBrand(brand)
    goBack()
  }

  render() {
    const { brands, ready, searchText, manualBrand, isOnWriting } = this.state

    if (ready === false) {
      return <AppLoading />
    }

    return (
      <View style={styles.container}>
        <View style={styles.textarea}>
          <TextInput
            placeholder='발렌시아가'
            placeholderTextColor='#c2c2c2'
            style={styles.textinput}
            value={this.state.searchText}
            onChangeText={(text) => this.onChangeSearch(text)}
          />
          <View style={styles.searchButtonArea}>
            <Feather style={styles.searchButton}
              name='search'
              size={21}
              color={Colors.black}
            />
          </View>
        </View>
        <View style={styles.brandList}>
          {
            brands.filter((brand) =>
              brand.keyWords.toLowerCase().includes(searchText.toLowerCase())
            ).length === 0
              ?

              <View style={styles.brandNotFound}>
                <View style={styles.brandItem}>
                  <Text style={styles.brandNameEnglish}>
                    브랜드 정보가 없습니다.
                </Text>
                </View>
                <View style={styles.brandManualInputArea}>
                  <DirectTextInput
                    placeholder={'최대 16자로 입력해주세요'}
                    onPress={this.submit}
                    labelText={'브랜드 직접 입력'}
                  />
                </View>
              </View>
              :
              brands.filter((brand) =>
                brand.keyWords.toLowerCase().includes(searchText.toLowerCase())
              )
                .map((brand) =>
                  < View style={styles.brandItem} >
                    <TouchableOpacity
                      style={styles.brandButton}
                      onPress={() => this.submit(brand.englishName)}
                    >
                      <Text style={styles.brandNameKorean}>
                        {brand.koreanName}
                      </Text>
                      <Text style={styles.brandNameEnglish}>
                        {brand.englishName}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )
          }
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  textarea: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 2,
    width: '100%',
    padding: 10,
    marginBottom: 20,
  },
  textinput: {
    flex: 15,
    fontSize: 18,
  },
  searchButtonArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandItem: {
    height: 42,
    justifyContent: 'center',
    borderTopWidth: 0.8,
    borderColor: '#eaeaea',
  },
  brandButton: {
    flexDirection: 'row',
  },
  brandNameKorean: {
    color: '#3e3e3e',
    fontSize: 14,
    marginLeft: 5,
  },
  brandNameEnglish: {
    color: '#a6a6a6',
    fontSize: 14,
    marginLeft: 5,
  },
  brandManualInputArea: {
    height: 80,
    borderTopWidth: 0.8,
    borderColor: '#eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
  },
})