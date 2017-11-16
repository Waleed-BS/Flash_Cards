import { createStore } from 'redux'
import reducer from '../reducers/Decks_Reducer'

const store = createStore(
  reducer,
)

export default store
