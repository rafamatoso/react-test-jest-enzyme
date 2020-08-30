import { actionsTypes } from "../actions";

/**
 * @function guessedWordsReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @returns {array} - new guessedWords state.
 */
export default (state = [], action) => {
  switch (action.type) {
    case actionsTypes.GUESS_WORD:
      return [...state, action.payload];

    case actionsTypes.RESET_GAME:
      return [];

    default:
      return state;
  }
};
