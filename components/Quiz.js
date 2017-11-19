import React, { Component } from 'react';
import { connect } from "react-redux";
import { TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation';

import { addDeck } from "../actions/Decks_Action"
import { mergeDeck } from "../utils/api"

class Quiz extends Component {

  state = {
    deckName: ''
  }

  render() {

    const { deckName } = this.state
    return (

      <KeyboardAvoidingView>

        <Text>
          Name of New Deck
        </Text>

        <TextInput
          value={deckName}
          onChangeText={this.onDeckNameChange}/>

        <TouchableOpacity
          onPress={this.submitDeck}
          ><Text>Submit New Deck</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    )

  }


}

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 35,
    paddingBottom: 15

  },
})

function mapStateToProps() {
  return {

  }
}

function mapDispatchToProps (dispatch) {
  return {
    addDeckDispatch: (deckName) => {dispatch(addDeck(deckName))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
