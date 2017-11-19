import {
	GET_DECKS, ADD_DECK, DELETE_DECK
} from '../actions/Decks_Action'
import { ADD_CARD }  from '../actions/Cards_Action'

const initialState = {}

export function decks (state = initialState, action) {
	const { deckData } = action;
	console.log("action.type ", action.type)
	// console.log("deckData = action ", deckData)

  switch (action.type) {

		case GET_DECKS:
			return deckData

		case ADD_DECK:
			return {
				...state,
				[deckData]: []
			}

		case ADD_CARD: {
			return {
        ...state,
        [deckData.deckName]: state[deckData.deckName].concat({

						question: deckData.question,
						answer: deckData.answer
				})
      }
		}

		case DELETE_DECK: {
			let temp = {...state};
      delete temp[deckData];
      return temp;
		}

    default:
      return{ ...state }

  }

}

export default decks
