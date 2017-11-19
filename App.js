import React from 'react';
import { Provider } from 'react-redux';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import TabNav from "./components/TabNav";
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

    make above buttons work
      - add new cards
      - remove deck
      - start quiz
*/

class App extends React.Component {

  render() {
    return (

      <Provider store={store}>
        <View style={style.flex}>
          <View style={{backgroundColor: "gray", height: Constants.statusBarHeight}}></View>
          <TabNav/>
        </View>
      </Provider>

    )
  }
}

const style = StyleSheet.create({
  flex: {
    flex: 1,
  }
})

export default App;
