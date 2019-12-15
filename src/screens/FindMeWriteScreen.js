import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Alert } from 'react-native'
import Layout from '../constants/Layout'
import Intro from '../components/findme/write/Intro'
import Body1 from '../components/findme/write/Body1'
import Body2 from '../components/findme/write/Body2'
import Body3 from '../components/findme/write/Body3'
import Body4 from '../components/findme/write/Body4'
import Header from '../components/findme/write/Header'
import Footer from '../components/findme/write/Footer'
import Nav from '../components/findme/write/Nav'
import BrandSearch from '../components/findme/write/BrandSearch'
import { saveFindMePost } from '../utils/api'
import { uploadImage } from '../utils/cloudapi'

const width = Layout.window.width * 0.9
const uuid = require('uuid/v4')

class FindMeWriteScreen extends Component {
  state = {
    page: 0,
    innerPage: 'main',
    displayType: 'undefined',
    gender: 'undefined',
    category: 'undefined',
    brand: 'undefined',
    product: 'undefined',
    color: 'undefined',
    size: 'undefined',
    text: 'undefined',
    images: [],
  }

  goBack = () => this.goPage(this.state.page - 1)
  goNext = () => this.goPage(this.state.page + 1)
  goPage = (page) => {
    const currentPage = this.state.page

    if (page <= currentPage) {
    this.setState({ page: page })
    }
    else {
      this.validateData(page)
        ? this.setState({ page: page })
        : Alert.alert('Error', 'Please select all.')
    }
  }

  setDisplayType = (displayType) => {
    this.setState({ displayType: displayType }, () => this.goNext())
  }

  setInnerPage = (innerPage) => {
    this.setState({ innerPage: innerPage })
  }

  submit = (post) => {
    let imageURLs = []
    Promise.all(
      post.images.map(async (image) => {
        await uploadImage(image, uuid())
          .then((result) => {
            result.isOK && imageURLs.push(result.url)
          })
      })
    ).then(() => {
      post.images = imageURLs
      saveFindMePost(post)
        .then((result) => {
          console.log('result=', result)
        })
    })

    this.props.onClose()
  }

  validateData = (page) => {
    const {
      displayType,
      gender,
      category,
      brand,
      product,
      color,
      size,
      text,
      images,
    } = this.state

    switch (page) {
      case 1:
        return displayType != 'undefined'
      case 2:
        return (
          displayType != 'undefined' &&
          gender != 'undefined' &&
          category != 'undefined'
        )
      case 3:
        return (
          displayType != 'undefined' &&
          gender != 'undefined' &&
          category != 'undefined' &&
          brand != 'undefined' &&
          product != 'undefined'
        )
      case 4:
        return (
          displayType != 'undefined' &&
          gender != 'undefined' &&
          category != 'undefined' &&
          brand != 'undefined' &&
          product != 'undefined' &&
          color != 'undefined' &&
          size != 'undefined'
        )
      case 5:
      return (
        displayType != 'undefined' &&
        gender != 'undefined' &&
        category != 'undefined' &&
        brand != 'undefined' &&
        product != 'undefined' &&
        color != 'undefined' &&
        size != 'undefined' &&
        text != 'undefined' &&
        images.length > 0
      )
      default:
        return false
    }
  }

  renderBody = (page) => {
    const { gender, category, brand, product, color, size, text, images, innerPage } = this.state
    switch (page) {
      case 0:
        return <Intro setDisplayType={this.setDisplayType} />
      case 1:
        return <Body1
          setGender={this.setGender}
          setCategory={this.setCategory}
          gender={gender}
          category={category}
        />
      case 2:
        return innerPage == 'main'
          ? <Body2
            brand={brand}
            product={product}
            setProduct={this.setProduct}
            setInnerPage={this.setInnerPage}
          />
          : <BrandSearch
            brand={brand}
            setBrand={this.setBrand}
            goBack={() => this.setInnerPage('main')}
          />
      case 3:
        return <Body3
          color={color}
          size={size}
          setColor={this.setColor}
          setSize={this.setSize}
        />
      case 4:
        return <Body4
          text={text}
          images={images}
          setText={this.setText}
          setImages={this.setImages}
        />
      default:
        return <Intro setDisplayType={this.setDisplayType} />
    }
  }

  setGender = (gender) => this.setState({ gender: gender })
  setCategory = (category) => this.setState({ category: category })
  setBrand = (brand) => this.setState({ brand: brand })
  setProduct = (product) => this.setState({ product: product })
  setColor = (color) => this.setState({ color: color })
  setSize = (size) => this.setState({ size: size })
  setText = (text) => this.setState({ text: text })
  setImages = (images) => this.setState({ images: images })

  render() {
    const { page, images } = this.state
    const isActive = this.validateData(page + 1)

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header
            title={'찾아주세요'}
            goBack={this.state.page != 0 && this.state.page != 0 && this.goBack}
            close={this.props.onClose}
          />
        </View>
        <View style={styles.nav}>
          {
            this.state.page != 0 &&
            <Nav
              page={page}
              goPage={this.goPage}
            />
          }
        </View>
        <View style={styles.body}>
          {this.renderBody(page)}
        </View>
        <View style={styles.footer}>
          {
            this.state.page != 0 &&
            <Footer
              goNext={this.goNext}
              isActive={isActive}
              isFinal={page === 4}
              submit={() => this.submit(this.state)}
            />
          }
        </View>
      </View>
    )
  }
}
function mapStateToProps({ findme, session }) {
  return {
    session,
  }
}

export default connect(mapStateToProps)(FindMeWriteScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flex: 1,
  },
  nav: {
    flex: 1,
  },
  body: {
    flex: 10,
  },
  footer: {
    flex: 1,
  },
})