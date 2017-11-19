import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native'
import { StackNavigator } from "react-navigation"
import Entypo from "@expo/vector-icons/Entypo"

import ListDecks from './ListDecks'
import Deck from './Deck'
import AddCard from './AddCard'
// import Quiz from './Quiz'

const DeckNav = StackNavigator({
  ListDecks: {
    screen: ListDecks,
    navigationOptions: ({navigation}) => ({
      title: 'Decks',

    })
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.deckName,

    })
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({navigation}) => ({
      title: `Add Card to \'${navigation.state.params.deckName}\'`,


    })
  },
  // Quiz: {
  //   screen: RemoveDeck,
  //
  // }

})

const styles = StyleSheet.create({
  icon: {
    marginLeft: 15,
    marginRight: 15
  }
})

export default DeckNav
