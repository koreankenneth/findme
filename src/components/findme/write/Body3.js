import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../../../constants/Colors'
import DirectTextInput from '../../common/DirectTextInput'

const colorPalletLine1 = [
  Colors.red,
  Colors.goldDrop,
  Colors.candleLight,
  Colors.birdFlower,
  Colors.green,
  Colors.scooter,
  Colors.white,
]

const colorPalletLine2 = [
  Colors.lavenderRose,
  Colors.mediumPurple,
  Colors.brandyPunch,
  Colors.paarl,
  Colors.deepCelurean,
  Colors.fernGreen,
  Colors.black,
]

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

export default function Body3({ color, size, setColor, setSize }) {
  state = {
    color: 'undefined',
  }

  const selectedColor = color
  const selectedSize = size
  const index = [...colorPalletLine1, ...colorPalletLine2, 'undefined'].indexOf(selectedColor)

  return (
    <View style={styles.container}>
      <View style={styles.subjectArea}>
        <Text style={styles.title}>컬러 선택</Text>
        <Text style={styles.guide}>어떤 컬러 찾으세요?</Text>
        <View style={styles.colorPallet}>
          <View style={styles.contentsRow}>
            {
              colorPalletLine1.map((color) =>
                <ColorCircle
                  key={color}
                  color={color}
                  area='color'
                  value={color}
                  selectedValue={selectedColor}
                  onPress={setColor}
                />
              )
            }
          </View>
          <View style={styles.contentsRow}>
            {
              colorPalletLine2.map((color) =>
                <ColorCircle
                  key={color}
                  color={color}
                  area='color'
                  value={color}
                  selectedValue={selectedColor}
                  onPress={setColor}
                />
              )
            }
          </View>
          <View style={styles.colorManualInputArea}>
            <DirectTextInput
              placeholder={'최대 16자로 입력해주세요'}
              onPress={(value) => setColor(value)}
              labelText={index === -1 ? selectedColor : '텍스트로 컬러 입력'}
            />
          </View>
        </View>
      </View>
      <View style={styles.subjectArea}>
        <Text style={styles.title}>사이즈 선택</Text>
        <Text style={styles.guide}>사이즈는 어떻게 되나요?</Text>
        <View style={styles.contents}>
          <View style={styles.contentsRow}>
            {
              sizes.map((size) =>
                <ShadowButton
                  key={size}
                  text={size}
                  area={'size'}
                  value={size}
                  selectedValue={selectedSize}
                  onPress={setSize}
                />
              )
            }
          </View>
        </View>
      </View>
    </View>
  )
}


function ShadowButton({ image, text, area, value, selectedValue, onPress }) {
  return (
    <TouchableOpacity
      style={value === selectedValue ? [styles.shadowButton, styles.buttonSelected] : styles.shadowButton}
      onPress={() => onPress(value)}
    >
      {
        image && <Image source={image} style={styles.buttonIcon} />
      }
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

function ColorCircle({ color, area, value, selectedValue, onPress }) {
  const borderColor = color === selectedValue ? Colors.black : Colors.tintColor
  
  return (
    <TouchableOpacity
      style={[styles.colorCircleBorder, { borderColor: borderColor }]}
      onPress={() => onPress(value)}
    >
      <View style={[styles.colorCircle, { backgroundColor: color }]} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  subjectArea: {
    marginTop: 30,
    marginBottom: 80,
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
  colorPallet: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contents: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentsRow: {
    flexDirection: 'row',
  },
  colorCircleBorder: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 7,
  },
  colorCircle: {
    flex: 1,
    width: 22,
    height: 22,
    borderRadius: 11,
  },
  colorManualInputArea: {
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  shadowButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.20,
    shadowRadius: 3.84,
    elevation: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  buttonSelected: {
    borderWidth: 2,
    borderColor: Colors.black,
  },
})