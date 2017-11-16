import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native'
import { StackNavigator } from "react-navigation";
import Entypo from "@expo/vector-icons/Entypo";

import NewDeck from "./NewDeck";

handleMenuButton = ({navigation}) => {
  navigation.navigate('DrawerToggle')
}

const AddDeckNav = StackNavigator({
  NewDeck: {
    screen: NewDeck,
    navigationOptions: ({navigation}) => ({
      title: 'Add Deck',
      headerRight:
        <TouchableOpacity onPress={() => handleMenuButton({navigation})}>
          <Entypo style={styles.icon} name="dots-three-vertical" size={24}/>
        </TouchableOpacity>
    })
  }
}, { })

const styles = StyleSheet.create({
  icon: {
    marginLeft: 20,
    marginRight: 20
  }
})

export default AddDeckNav;
