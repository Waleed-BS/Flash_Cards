import { AsyncStorage } from 'react-native';

export const DECK_STORAGE_KEY = 'Flash_Cards:DeckStorage';

export function fetchDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((decks) => JSON.parse(decks))
}

export function mergeDeck(deck, key) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY,
    JSON.stringify({ [key]: deck })
  )
}

export function unmergeDeck(key) {
  let filteredDeck;
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((decks) => JSON.parse(decks))
    .then((decks) => {
      filteredDeck = {...decks};
      // console.log("...decks\n ", filteredDeck)
      // console.log("decks \n ", decks)
      // console.log("filteredDeck[key] \n ", decks[key])
      delete filteredDeck[key];
      // delete decks[key]
      // console.log("unmergeDeck ...decks ", {...decks})
      // delete {...decks[key]}
      return AsyncStorage.removeItem(DECK_STORAGE_KEY)
    })
    .then(() => {
        AsyncStorage.mergeItem(
          DECK_STORAGE_KEY,
          JSON.stringify(filteredDeck)
        )
    })
}

export function submitCard(question, answer, key) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((decks) => JSON.parse(decks))
    .then((decks) => {
      return AsyncStorage.mergeItem(DECK_STORAGE_KEY,
        JSON.stringify({ [key]: decks[key].concat({question, answer}) })
      )
    })
}
