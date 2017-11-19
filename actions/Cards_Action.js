export const ADD_CARD = 'ADD_CARD'

export function addCard (deckName, question, answer) {
  return {
    type: ADD_CARD,
    deckData: {
      deckName,
      question,
      answer
    }
  }
}
