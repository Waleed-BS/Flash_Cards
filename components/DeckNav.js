import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native'
import { StackNavigator } from "react-navigation"
import Entypo from "@expo/vector-icons/Entypo"

import ListDecks from './ListDecks'
import Deck from './Deck'
import AddCard from './AddCard'

handleMenuPress = ({navigation}) => {
  navigation.navigate('DrawerToggle')
};

const DeckNav = StackNavigator({
  ListDecks: {
    screen: ListDecks,
    navigationOptions: ({navigation}) => ({
      title: 'Decks',
      headerRight:
        <TouchableOpacity onPress={() => handleMenuPress({navigation})} >
          <Entypo style={styles.icon} name="dots-three-vertical" size={24}/>
        </TouchableOpacity>
    })
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.deckName,
      headerRight:
        <TouchableOpacity onPress={() => handleMenuPress({navigation})} >
          <Entypo style={styles.icon} name="dots-three-vertical" size={24}/>
        </TouchableOpacity>
    })
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({navigation}) => ({
      title: `Add Card to \'${navigation.state.params.deckName}\'`,
      headerRight:
        <TouchableOpacity onPress={() => handleMenuPress({navigation})} >
          <Entypo style={styles.icon} name="dots-three-vertical" size={24}/>
        </TouchableOpacity>
    })
  },

})

const styles = StyleSheet.create({
  icon: {
    marginLeft: 15,
    marginRight: 15
  }
})

export default DeckNav
