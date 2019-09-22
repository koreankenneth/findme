import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {
  createAppContainer,
  getActiveChildNavigationOptions,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FindMeMainScreen from './src/components/findme/FindMeMainScreen'
import FindMeDetailScreen from './src/components/findme/FindMeDetailScreen'
import MyPageMainScreen from './src/components/mypage/MyPageMainScreen'
import MyPageDetailScreen from './src/components/mypage/MyPageDetailScreen'
import Colors from './src/constants/Colors'

const FindMeStacks = createStackNavigator({
  FindMeMainScreen: {
    screen: FindMeMainScreen,
  },
  FindMeDetailScreen: {
    screen: FindMeDetailScreen,
  },
}, {
  initialRouteName: 'FindMeMainScreen',
})

const MyPageStacks = createStackNavigator({
  MyPageMainScreen: {
    screen: MyPageMainScreen,
  },
  MyPageDetailScreen: {
    screen: MyPageDetailScreen,
  },
}, {
  initialRouteName: 'MyPageMainScreen',
})

const TabNavigator = createBottomTabNavigator({
  FindMeStacks,
  MyPageStacks,
},
{
  tabBarOptions: {
    style: {
      backgroundColor: Colors.black,
    },
  }
})

export default createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})