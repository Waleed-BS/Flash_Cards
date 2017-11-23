import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation';
import { connect } from "react-redux";

import { fetchDecks } from "../utils/api";
import { getDecks } from '../actions/Decks_Action'
import { setLocalNotification } from '../utils/notification'

class ListDecks extends React.Component {

  componentDidMount() {
    console.log("componentDidMount");
    const {getDecksDispatch} = this.props;

    fetchDecks()
      .then( (decks) => {
        getDecksDispatch(decks)
        // console.log("fetchDecks().then((data)) ", decks)
      })
      .then(() => {
        setLocalNotification();
      })

  }

  redirectToDeck = (deckName) => {
    const { navigation } = this.props
    navigation.dispatch(NavigationActions.navigate({
      routeName: 'Deck',
      params: {deckName}
    }))
  }

  render() {

    const {decks} = this.props

    console.log("render() decks ", decks)

    return (

      <View style={style.flex}>

        <ScrollView>
          { decks && Object.keys(decks).length > 0
            ? Object.keys(decks).map( (deckKey) => {
              return (
                <TouchableOpacity style={style.deck} key={deckKey} onPress={() => {this.redirectToDeck(deckKey)}}>
                  {/* deck name */}
                  <Text style={style.deckName}>{deckKey}</Text>
                  {/* number of cards */}
                  <Text style={style.numOfCards}>{decks[deckKey].length} cards</Text>
                </TouchableOpacity>
              )

            })
            : <View>
              <Text style={style.deckName}>Deck is Empty</Text>
              <TouchableOpacity
                style={style.submitButton}
                onPress={() => this.props.navigation.navigate('NewDeck')}
              ><Text style={style.submitText}>Add New Deck</Text>
              </TouchableOpacity>

            </View>

          }
        </ScrollView>

      </View>

    )

  }

}

const style = StyleSheet.create({
  deckName: {
    fontSize: 40,

    textAlign: "center",
    // color: "black",
    paddingTop: 15,
    paddingBottom: 15,

    // height:50,
    // margin: 20,
    // padding: 10,
    // paddingTop: ,
    // paddingBottom:
  },
  deck: {
    // color: 'black',
    // backgroundColor: "black",
    // small = true when at Quiz
    margin: 20,
    padding: 10,
    borderColor: "black",
    height: 200,
    minWidth: 300,
    borderWidth: 2,
    // alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // fontSize: 18,x
    // textAlign: 'center',
    shadowRadius: 11,
    shadowOpacity: 0.5,
    // shadowOpacity: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 1
    }
  },
  numOfCards: {
    fontSize: 20,
  },
  submitText: {
    fontSize: 24,

    textAlign: "center",
    color: "white",
    height:50,
    margin: 20,
    padding: 10,
    // paddingTop: ,
    // paddingBottom:
  },
  submitButton: {
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
    // fontSize: 18,
    // textAlign: 'center'

  }

})

function mapStateToProps (decks) {
  return {
    decks
  }
};

function mapDispatchToProps (dispatch) {
  return {
    getDecksDispatch: (decks) => {dispatch(getDecks(decks))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDecks)
