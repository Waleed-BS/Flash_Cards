import React from 'react';
import { View, TextInput, TouchableOpacity,
  Text, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation';
import { connect } from "react-redux";

import { submitCard } from "../utils/api";
import { addCard } from '../actions/Cards_Action'

class AddCard extends React.Component {

  state = {
    question: '',
    answer: '',
  }

  onChangeQuestion = (input) => {
    this.setState({question: input})
  }
  onChangeAnswer = (input) => {
    this.setState({answer: input})
  }

  submitCard = () => {
    const { navigation } = this.props
    const { question, answer } = this.state
    const deckName = navigation.state.params.deckName
    const { addCardDispatch } = this.props
    if (question !== '' && answer !== '') {
      console.log(this.props.decks)
      addCardDispatch(deckName, question, answer)
      submitCard(question, answer, deckName)
      navigation.goBack();
    }

  }

  render() {

    const { question, answer } = this.state

    return (

      <View>

        <TextInput
          style={style.inputField}
          placeholder="Question"
          value={question}
          multiline={true}
          autoGrow={true}
          onChangeText={this.onChangeQuestion}
        />

        <TextInput
          style={style.inputField}
          placeholder="Answer"
          value={answer}
          multiline={true}
          autoGrow={true}
          onChangeText={this.onChangeAnswer}
        />

        <TouchableOpacity style={style.submitButton} onPress={ this.submitCard }>
          <Text style={style.submitText}>Submit New Card</Text>
        </TouchableOpacity>

      </View>

    )

  }

}

const style = StyleSheet.create({
  inputField: {
    fontSize: 19,
    height: 70,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    marginTop: 40,
    padding: 40,
    borderStyle: "solid",
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    // justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
    // borderColor: "#FFFFFF",
  },
  submitText: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    height: 50,
    margin: 20,
    padding: 10,
    // paddingTop: ,
    // paddingBottom:
  },
  submitButton: {
    backgroundColor: "black",
    margin: 20,
    padding: 10,
    height: 50,
    minWidth: 200,
    borderRadius: 50,
    borderWidth: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

function mapStateToProps (decks) {
  return {decks}
}

function mapDispatchToProps (dispatch) {
  return {
    addCardDispatch: (deckName, question, answer) =>
      dispatch(addCard(deckName, question, answer))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)
