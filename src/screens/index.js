
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FindMeMainScreen   from './FindMeMainScreen'
import FindMeDetailScreen from './FindMeDetailScreen'
import FindMeCommentScreen from './FindMeCommentScreen'
import FindMeOfferScreen from './FindMeOfferScreen'
import MyPageMainScreen   from './MyPageMainScreen'
import MyPageDetailScreen from './MyPageDetailScreen'
import Colors from '../constants/Colors'

const FindMeStacks = createStackNavigator({
  FindMeMainScreen: {
    screen: FindMeMainScreen,
  },
  FindMeDetailScreen: {
    screen: FindMeDetailScreen,
  },
  FindMeCommentScreen: { 
    screen: FindMeCommentScreen,
  },
  FindMeOfferScreen: { 
    screen: FindMeOfferScreen,
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
