import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import HomePage from './pages/Home'

const OnBoardingNavigator = createStackNavigator({
  Login: LoginPage,
  Register: RegisterPage
}, {
  headerMode: 'none',
  initialRouteName: 'Login'
})


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      title: 'Nombre de la app',
      headerTintColor: 'white',
      headerTransparent: true,
      headerShown: true
    }
  }
}, {
  initialRouteName: 'Home'
})

const RootStack = createStackNavigator({
  Main: AppNavigator,
},{
  headerMode: 'none'
})

const BaseStack = createSwitchNavigator({
  OnBoarding: OnBoardingNavigator,
  Root: RootStack
}, {
  initialRouteName: 'OnBoarding',
})

export default createAppContainer(BaseStack)