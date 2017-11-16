import React from 'react';
import { Provider } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import DrawerNav from "./components/DrawerNav";
import store from './store/store'

/* todo:
    - add a deck
    - list added decks

    after clicking on deck:
      - show deck label
      - number of cards in deck 
      - add new card button
      - remove deck button
      - start quiz button only when cards exist
*/

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <View style={style.flex}>
          <DrawerNav/>
        </View>
      </Provider>
    )
  }
}

const style = StyleSheet.create({
  flex: {
    flex: 1000
  }
})

export default App;
