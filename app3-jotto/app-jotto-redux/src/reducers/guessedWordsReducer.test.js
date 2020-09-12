import { actionsTypes } from "../actions";
import guessedWordsReducer from "./guessedWordsReducer";

test("returns state of `[]` upon receiving an action of type `RESET_GAME`", () => {
  // start with non-zero guessed words
  const initialState = [{ guessedWord: "train", letterMatchCount: 3 }];

  const newState = guessedWordsReducer(initialState, {
    type: actionsTypes.RESET_GAME,
  });

  expect(newState).toEqual([]);
});
