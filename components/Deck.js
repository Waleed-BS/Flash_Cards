import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation';
import { connect } from "react-redux";

import { deleteDeck } from '../actions/Decks_Action'
import { unmergeDeck } from '../utils/api'

class Deck extends React.Component {

  deleteDeck = (deckName) => {
    const { deleteDeckDispatch, navigation } = this.props
    deleteDeckDispatch(deckName)
    unmergeDeck(deckName)
    navigation.goBack()
  }

  redirectTo = (deckName, routeLabel) => {
    const { navigation } = this.props
    navigation.dispatch(NavigationActions.navigate({
      routeName: routeLabel,
      params: {deckName}
    }))
  };

  render() {
    const { navigation } = this.props
    const deckName = navigation.state.params.deckName
    const { decks } = this.props
    const deck = decks[deckName]
    console.log("\nDeck.js \n render() \n  decks[deckName]", deck)

    if (!deck) {
      return null;
    }

    return (

      <View>

        {/* <Text style={style.deck}> */}
          <Text style={style.deck}>
            {"\n" + deckName + "\n"}
            <Text style={style.numOfCards}>{deck.length + " cards"}</Text>
          </Text>
          {/* <Text style={style.numOfCards}>{ deck.length + " cards" }</Text> */}
        {/* </Text> */}

        <TouchableOpacity style={style.buttonsBox} onPress={ () => this.redirectTo(deckName, 'AddCard') }>
          <Text style={style.buttonsText} >Add Card</Text>
        </TouchableOpacity>

        {deck.length >= 1 &&
          <View>
            <TouchableOpacity style={style.buttonsBox} onPress={ () => this.redirectTo(deckName, 'StartQuiz') }>
              <Text style={style.buttonsText}>Start Quiz</Text>
            </TouchableOpacity>
          </View>
        }

        <TouchableHighlight style={style.buttonsBox} onPress={ () => this.deleteDeck(deckName) }>
          <Text style={style.buttonsText}>Remove Deck</Text>
        </TouchableHighlight>

      </View>

    )

  }

}

const style = StyleSheet.create({
  buttonsText: {
    fontSize: 24,

    textAlign: "center",
    color: "white",
    height:50,
    margin: 20,
    padding: 10,
    // paddingTop: ,
    // paddingBottom:
  },
  buttonsBox: {
    // color: 'white',
    backgroundColor: "black",
    // small = true when at Quiz
    margin: 20,
    padding: 10,
    height: 50,
    minWidth: 200,
    borderRadius: 50,
    borderWidth: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deck: {
  fontSize: 40,
    margin: 20,
    padding: 10,
    borderColor: "black",
    height: 200,

    minWidth: 300,
    borderWidth: 2,
    textAlign: 'center',
    // justifyContent: 'center',
    // lineHeight: 10,
    alignItems: 'center',
    shadowRadius: 11,
    shadowOpacity: 0.5,
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 1
    }
  },
  deckName: {
    fontSize: 40,
    // justifyContent: 'center',
  },
  numOfCards: {
    fontSize: 20,
    lineHeight: 47,
    // alignItems: "center",
    // alignSelf: "center",
  },
})

function mapStateToProps ( decks ) {
  return {
    decks,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deleteDeckDispatch: (data) => {dispatch(deleteDeck(data))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck)
