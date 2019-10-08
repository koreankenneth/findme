import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers'
import middleware from './src/middlewares'
import AppNavigator from './src/screens'
import { StyleSheet } from 'react-native'

const store = createStore(reducer, middleware)

export default class App extends Component {
  render() {
    return (
      <Provider
        store={store}
        style={styles.container}
      >
        <AppNavigator />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})