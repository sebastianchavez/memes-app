/******* Dependencies *******/
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Feather } from '@expo/vector-icons'

/******* Screens *******/
import { Login, Register, Home, MyPosts, MyProfile } from './screens'

/******* Components *******/
import { SideBar } from './components'

import { ChangePassword, Post, NewPost } from './modals'

const OnBoardingNavigator = createStackNavigator({
  Login,
  Register
}, {
  headerMode: 'none',
  initialRouteName: 'Login',
})

const DrawerNavigator = createDrawerNavigator({
  MyProfile: {
    screen: MyProfile,
    navigationOptions: {
      title: 'Mi perfil',
      drawerIcon: ({tintColor}) => <Feather name='user' size={16} color={tintColor} />
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Inicio',
      drawerIcon: ({tintColor}) => <Feather name='home' size={16} color={tintColor} />
    }
  },
  MyPosts: {
    screen: MyPosts,
    navigationOptions: {
      title: 'Mis publicaciones',
      drawerIcon: ({tintColor}) => <Feather name='image' size={16} color={tintColor} />
    }
  }
},{
  contentComponent: props => <SideBar {...props} />
})

const RootStack = createStackNavigator({
  DrawerNavigator,
  Post,
  NewPost,
  ChangePassword
}, {
  headerMode: 'none',
  initialRouteName: 'DrawerNavigator',
  mode: 'modal'
})

const BaseStack = createSwitchNavigator({
  OnBoarding: OnBoardingNavigator,
  Root:RootStack
}, {
  initialRouteName: 'OnBoarding',
})


export default createAppContainer(BaseStack)