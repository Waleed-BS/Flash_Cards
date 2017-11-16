import React from 'react'
import { DrawerItems, DrawerNavigator } from "react-navigation"

import { MaterialIcons } from "@expo/vector-icons/index"

import DeckNav from "./DeckNav"
import AddDeckNav from "./AddDeckNav"

const DrawerNav = DrawerNavigator({
  Home: {
    screen: DeckNav,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({tintColor}) => (
        <MaterialIcons name='home' size={30} color={tintColor}/>
      )
    }
  },
  NewDeck: {
    screen: AddDeckNav,
    navigationOptions: {
      drawerLabel: 'Add New Deck',
      drawerIcon: ({tintColor}) => (
        <MaterialIcons name='add' size={30} color={tintColor}/>
      )
    }
  }

} , {
    initialRouteName: 'Home',
    drawerPosition: 'right',
})

export default DrawerNav;
