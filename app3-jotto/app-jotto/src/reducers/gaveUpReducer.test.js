import { actionsTypes } from "../actions";
import gaveUpReducer from "./gaveUpReducer";

test("returns default initial state of `false` when no action is passed", () => {
  const newState = gaveUpReducer(undefined, {});

  expect(newState).toBe(false);
});

test("returns state of true upon receiving an action of type `GIVE_UP`", () => {
  const newState = gaveUpReducer(false, { type: actionsTypes.GIVE_UP });

  expect(newState).toBe(true);
});

test("returns state of false upon receiving an action of type `RESET_GAME`", () => {
  const newState = gaveUpReducer(true, { type: actionsTypes.RESET_GAME });

  expect(newState).toBe(false);
});
