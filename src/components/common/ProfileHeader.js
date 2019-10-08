import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'

export default function ProfileHeader({ author, authorPhoto, timestamp, height }) {
  return (

    <View style={[{height: height}, styles.profile]}>
      <Image
        style={[{height: height*0.7, width: height*0.7, borderRadius: height*0.7/2}, styles.photo]}
        source={{ url: authorPhoto }}
      />
      <Text style={styles.author}>
        {author}
      </Text>
      <Text style={styles.timing}>
        {timestamp}
      </Text>
    </View>
  )
}



const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: '#c8c8c8',
  },
  photo: {
  },
  author: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  timing: {
    color: '#9d9d9d'
  },
})