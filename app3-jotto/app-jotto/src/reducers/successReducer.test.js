import { actionsTypes } from "../actions";
import successReducer from "./successReducer";

test("returns default initial state of `false` when no action is passed", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test("returns state of true upon receiving an action of type `CORRECT_GUESS", () => {
  const newState = successReducer(undefined, {
    type: actionsTypes.CORRECT_GUESS,
  });
  expect(newState).toBe(true);
});

test("returns state of false upon receiving an action of type `RESET_GAME`", () => {
  // start with success true, since success is false by default
  const newState = successReducer(true, { type: actionsTypes.RESET_GAME });
  expect(newState).toBe(false);
});
