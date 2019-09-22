import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class FindMeMainScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>FindMeMainScreen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('FindMeDetailScreen')}
        />
      </View>
    )
  }
}