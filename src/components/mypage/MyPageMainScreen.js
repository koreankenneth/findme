import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class MyPageMainScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>MyPageMainScreen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('MyPageDetailScreen')}
        />
      </View>
    )
  }
}