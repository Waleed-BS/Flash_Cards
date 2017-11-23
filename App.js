import React from 'react';
import { Provider } from 'react-redux';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import TabNav from "./components/TabNav";
import store from './store/store'


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
