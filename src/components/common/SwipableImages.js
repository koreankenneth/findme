import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'

export default function SwipableImages({ images, height }) {
  let key = 0

  return (

    <View style={[{ height: height }, styles.itemDisplay]}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        autoplay={false}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      >
        {
          images.map((image) => {
            key++
            return (
              <Image
                style={[{ height: height * 0.9 }, styles.itemPhoto]}
                source={{ url: image }}
                key={key} //iteration시, key값 없으면 렌더링 안됨
              />
            )
          })
        }
      </Swiper>

    </View>

  )
}



const styles = StyleSheet.create({
  itemDisplay: {
  },
  wrapper: {
    backgroundColor: '#ffffff',
  },
  itemPhoto: {
    resizeMode: 'contain',
  },
  dotStyle: {
    backgroundColor: '#d8d8d8',
    width: 7,
    height: 7,
    borderRadius: 3.5,
    marginLeft: 2,
    marginRight: 2,
  },
  activeDotStyle: {
    backgroundColor: '#ea9c0c',
    width: 7,
    height: 7,
    borderRadius: 3.5,
    marginLeft: 2,
    marginRight: 2,
  },
  slide: {
    flex: 1,
  },
})