import React, { Component } from 'react';
import { connect } from "react-redux";
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation';

import { addDeck } from "../actions/Decks_Action"
import { submitDeck } from "../utils/api"

class NewDeck extends Component {

  state = {
    deckName: ''
  }

  handleInputChange = (input) => {
    this.setState({
      deckName: input
    })
  }

  handleSubmitButton = () => {
    const { deckName } = this.state;
    console.log('Will submit ' + deckName);
    if (deckName && deckName !== '') {
      this.setState({
        deckName: null
      })
      // dispatch(addDeck(deckName));
      submitDeck([], deckName)
      this.redirectToDeckList()
    }
  }

  redirectToDeckList = () => {
    this.props.navigation.dispatch(NavigationActions.back({
      key: 'NewDeck'
    }))
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
          onChangeText={this.handleInputChange}/>

        <TouchableOpacity
          onPress={this.handleSubmitButton}
          ><Text>Submit New Deck</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    )

  }

}

export default connect()(NewDeck)
