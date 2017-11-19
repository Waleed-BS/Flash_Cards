import React from 'react'
import { TabNavigator } from "react-navigation"

import { MaterialIcons } from "@expo/vector-icons/index"

import NewDeck from './NewDeck'
import DeckNav from "./DeckNav"
// import AddDeckNav from "./AddDeckNav"

const TabNav = TabNavigator({
  Home: {
    screen: DeckNav,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <MaterialIcons name='home' size={30} color={tintColor}/>
      )
    })
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Add New Deck',
      tabBarIcon: ({tintColor}) => (
        <MaterialIcons name='add' size={30} color={tintColor} />
      )
    })
  }

} , {
    // initialRouteName: 'Home',
    tabBarPosition: 'top',
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
      activeTintColor: 'black',
    },

})

export default TabNav;
