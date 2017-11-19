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

export function submitCard(question, answer, key) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((decks) => JSON.parse(decks))
    .then((decks) => {
      return AsyncStorage.mergeItem(DECK_STORAGE_KEY,
        JSON.stringify({ [key]: decks[key].concat({question, answer}) })
      )
    })
}
