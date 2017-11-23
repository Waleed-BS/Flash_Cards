import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { setLocalNotification, clearLocalNotification } from "../utils/notification"

class Quiz extends Component {

  state = {
    index: 0,
    displayAnswer: false,
    correctAnswers: 0,
    wrongAnswers: 0,
    deck: [],
  }

  componentDidMount() {
    clearLocalNotification().then(setLocalNotification)
  }

  isCorrect = (choice) => {
    const { index, correctAnswers, wrongAnswers, deck } = this.state
    this.setState({
      index: index + 1,
      correctAnswers: choice ? correctAnswers + 1 : correctAnswers,
      wrongAnswers: choice ? wrongAnswers : wrongAnswers + 1,
      displayAnswer: false,
    })
  }

  resetQuiz = () => {
    this.setState({
      index: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    })
  }

  render() {

    const { decks, navigation } = this.props
    const deckName = navigation.state.params.deckName
    const { index , displayAnswer, correctAnswers, wrongAnswers } = this.state
    const deck = decks[deckName]

    return (

      <View>
        {index != deck.length
          ? <View>
              <Text style={style.text}>{index + 1 + " / " + deck.length + " Card(s)"}</Text>

              <Text style={style.deck}>
                {deck[index].question + "\n"}

                {displayAnswer && deck[index].answer}

              </Text>

              <TouchableOpacity onPress={ () => this.setState({ displayAnswer: true }) }>
                {/* <Text>{displayAnswer ? deck[index].answer : "Show Answer" }</Text> */}
                <Text style={style.normalText}> Show Answer </Text>
              </TouchableOpacity>

              <TouchableOpacity style={style.correctButtonBox} onPress={() => this.isCorrect(true)}>
                <Text style={style.buttonsText}> Correct </Text>

              </TouchableOpacity>

              <TouchableOpacity style={style.wrongButtonBox} onPress={() => this.isCorrect(false)}>
                <Text style={style.buttonsText}> Wrong </Text>

              </TouchableOpacity>
            </View>

          : <View>
              <Text style={style.normalText}>Your Result:</Text>
              <Text style={style.normalText}>{"Correct Answers: " + correctAnswers}</Text>
              <Text style={style.normalText}>{"Wrong Answers: " + wrongAnswers}</Text>
              <Text style={style.normalText}>{"Grade: " + Math.round(( correctAnswers / deck.length ) * 100) + "%"}</Text>
              <TouchableOpacity style={style.buttonsBox} onPress={ () => this.resetQuiz()}>
                <Text style={style.buttonsText}>Restart Quiz</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.buttonsBox} onPress={ () => navigation.goBack() }>
                <Text style={style.buttonsText}>Back To Deck</Text>
              </TouchableOpacity>
            </View>
        }
      </View>
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
  deck: {

    fontSize: 25,
    margin: 20,
    padding: 10,
    borderColor: "black",
    height: 200,
    // lineHeight: 140,
    minWidth: 300,
    borderWidth: 2,
    textAlign: 'center',
    justifyContent: 'center',
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
  buttonsText: {
    fontSize: 24,
    textAlign: "center",
    color: "white",
    height:50,
    margin: 20,
    padding: 10,
  },
  correctButtonBox: {
    backgroundColor: "green",
    margin: 20,
    padding: 10,
    height: 50,
    minWidth: 200,
    borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrongButtonBox: {
    backgroundColor: "red",
    margin: 20,
    padding: 10,
    height: 50,
    minWidth: 200,
    borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalText: {
    fontSize: 24,
    textAlign: "center",
    color: "black",
    height:50,
    margin: 20,
    padding: 10,

  },
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
})

function mapStateToProps (decks) {
  return {
    decks
  }
}


export default connect(mapStateToProps, null)(Quiz)
