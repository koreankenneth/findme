import React  from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Colors from '../../../constants/Colors'

const genders = {
  female: {
    line: 1,
    value: 'female',
    text: '여성',
  },
  male: {
    line: 1,
    value: 'male',
    text: '남성',
  },
  kids: {
    line: 1,
    value: 'kids',
    text: '키즈',
  },
}

const categories = {
  top: {
    line: 1,
    value: 'top',
    text: '상의, 자켓',
    uri: require('../../../../assets/images/drawable-xxxhdpi/findme_write_ico_shirts.png'),
  },
  blouse: {
    line: 1,
    value: 'blouse',
    text: '자켓, 블라우스',
    uri: require('../../../../assets/images/drawable-xxxhdpi/findme_write_ico_blouse.png'),
  },
  cap: {
    line: 1,
    value: 'cap',
    text: '모자',
    uri: require('../../../../assets/images/drawable-xxxhdpi/findme_write_ico_cap.png'),
  },
  bag: {
    line: 2,
    value: 'bag',
    text: '가방, 지갑',
    uri: require('../../../../assets/images/drawable-xxxhdpi/findme_write_ico_bag.png'),
  },
  jewel: {
    line: 2,
    value: 'jewel',
    text: '쥬얼리',
    uri: require('../../../../assets/images/drawable-xxxhdpi/findme_write_ico_jewer.png'),
  },
  bottom: {
    line: 2,
    value: 'bottom',
    text: '치마, 바지',
    uri: require('../../../../assets/images/drawable-xxxhdpi/findme_write_ico_skirt.png'),
  },
  glass: {
    line: 3,
    value: 'glass',
    text: '안경, 선글라스',
    uri: require('../../../../assets/images/drawable-xxxhdpi/findme_write_ico_glass.png'),
  },
  shoes: {
    line: 3,
    value: 'shoes',
    text: '운동화, 구두',
    uri: require('../../../../assets/images/drawable-xxxhdpi/findme_write_ico_shoes.png'),
  },
}

export default function Body1({ setGender, setCategory, gender, category }) {
  return (
    <View style={styles.container}>
      <View style={styles.subjectArea}>
        <Text style={styles.title}>성별 선택</Text>
        <Text style={styles.guide}>여성제품 찾으세요?</Text>
        <View style={styles.contents}>
          <View style={styles.contentsRow}>

            {
              Object.keys(genders).map((key) => {
                const { text, value } = genders[key]
                return (
                  <ShadowButton
                    key={key}
                    text={text}
                    area={'gender'}
                    value={value}
                    selectedValue={gender}
                    onPress={() => setGender(value)}
                  />
                )
              })
            }
          </View>
        </View>
      </View>

      <View style={styles.subjectArea}>
        <Text style={styles.title}>품목 선택</Text>
        <Text style={styles.guide}>혹시 가방 찾으세요?</Text>
        <View style={styles.contents}>
          <View style={styles.contentsRow}>

            {
              Object.keys(categories).map((key) => {
                const { uri, text, value } = categories[key]
                return (
                  <ShadowButton
                    key={key}
                    image={uri}
                    text={text}
                    area={'category'}
                    value={value}
                    selectedValue={category}
                    onPress={() => setCategory(value)}
                  />
                )
              })
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
      onPress={() => onPress('Body1', area, value)}
    >
      {
        image && <Image source={image} style={styles.buttonIcon} />
      }
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  subjectArea: {
    marginBottom: 60,
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
  contentsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
  buttonIcon: {
    width: 25,
    height: 25,
    marginRight: 6,
  },
})