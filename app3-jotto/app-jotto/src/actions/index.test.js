import { correctGuess, actionsTypes } from "./";

describe("correctGuess", () => {
  test("returns an action with type `CORRECT_GUESS`", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionsTypes.CORRECT_GUESS });
  });
});
