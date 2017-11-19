import React from 'react';
import { Provider } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import DrawerNav from "./components/DrawerNav";
import store from './store/store'

/* todo:
    - add a deck DONE
    - list added decks DONE

    after clicking on deck:
      - show deck label DONE
      - number of cards in deck  DONE
      - add new card button DONE
      - remove deck button DONE
      - start quiz button only when cards exist DONE
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
