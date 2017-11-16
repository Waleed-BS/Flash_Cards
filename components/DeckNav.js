import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native'
import { StackNavigator } from "react-navigation"
import Entypo from "@expo/vector-icons/Entypo"

import ListDecks from './ListDecks'

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
  }

})

const styles = StyleSheet.create({
  icon: {
    marginLeft: 15,
    marginRight: 15
  }
})

export default DeckNav
