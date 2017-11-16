import {
	GET_DECKS, ADD_DECK
} from '../actions/Decks_Action'

const initialState = {}

function decks (state = initialState, action) {

	const { deckData, decks } = action

  switch (action.type) {

    case GET_DECKS:
      return {
        ...state,
        ...decks
      }

    case ADD_DECK:
      return {
        ...state,
        [deckData]: []
      }

    // case DELETE_DECK:

    default:
      return state

  }

}

export default decks
