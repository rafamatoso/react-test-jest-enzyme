import { actionsTypes } from "../actions";
import serverErrorReducer from "./serverErrorReducer";

test("returns default initial state of `false` when no action is passed", () => {
  const newState = serverErrorReducer(undefined, {});

  expect(newState).toBe(false);
});

test("returns state of `true` upon receiving an action of type `SERVER_ERROR`", () => {
  const newState = serverErrorReducer(undefined, {
    type: actionsTypes.SERVER_ERROR,
  });

  expect(newState).toBe(true);
});
