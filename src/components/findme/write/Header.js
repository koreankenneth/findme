import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons'
import Colors from '../../../constants/Colors'

export default function Header({ title, goBack, close }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftArea}>
      {
        goBack && 
        <TouchableOpacity
          onPress={goBack}
        >
          <Feather
            name='arrow-left'
            size={23}
          />
        </TouchableOpacity>
      }
      </View>
      <View style={styles.midArea}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity 
        style={styles.rightArea}
        onPress={close}
      >
        <AntDesign style={styles.headerIcons}
          name='close'
          size={21}
        />
      </TouchableOpacity>
    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderColor: Colors.borderColor,
  },
  leftArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  midArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightArea: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  headerIcons: {
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 17,
  }
})