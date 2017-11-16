import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation';
import { connect } from "react-redux";

import { fetchDecks } from "../utils/api";
import { getDecks } from '../actions/Decks_Action'

class ListDecks extends React.Component {

  componentDidMount() {

    const { getDecksDispatch } = this.props

    fetchDecks().then((decks) => {
      getDecksDispatch(decks)})

  }

  redirectToDeck = (deckKey) => {
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: 'Deck',
      params: {deckKey}
    }))
  }

  render() {

    const { decks } = this.props
    console.log("decks ", decks)
    return (

      <View style={style.flex}>

        <ScrollView>

          { decks && Object.keys(decks).length > 0
            ? Object.keys(decks).map( (deckKey) => {
              return (
                <TouchableOpacity onPress={() => {this.redirectToDeck(deckKey)}}>
                  {/* deck name */}
                  <Text >{deckKey}</Text>
                  {/* number of cards */}
                  <Text>{decks[deckKey].length} cards</Text>
                </TouchableOpacity>
              ) // end of return map function

            }) // end of map function
            : <View>

              <Text>
                There is no deck yet. You can create a new deck
                or you can some default data via settings.</Text>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('NewDeck')}
              ><Text>Submit New</Text>
              </TouchableOpacity>

            </View> // end of if deck is empty

          }

        </ScrollView>

      </View>

    )

  }

}

const style = StyleSheet.create({
  flex: {
    flex: 1000
  }
})

function mapStateToProps ({ decks }) {
  return {
    decks,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getDecksDispatch: (data) => dispatch(getDecks({decks: data}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDecks)
