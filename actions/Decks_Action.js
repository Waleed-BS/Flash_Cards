export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'

export const getDecks = decks => ({
  type: GET_DECKS,
  deckData: decks
});


export const addDeck = deckName => ({
  type: ADD_DECK,
  deckData: deckName
});

export const deleteDeck = deckName => ({
  type: DELETE_DECK,
  deckData: deckName
});
