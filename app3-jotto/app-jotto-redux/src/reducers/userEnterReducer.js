import { actionsTypes } from "../actions";

/**
 * @function userEnterReducer
 * @param {string} state - State before reducer.
 * @param {object} action - Action sent to reducer.
 * @returns {string} - New state (depending on action type).
 */
export default (state = null, action) => {
  switch (action.type) {
    case actionsTypes.USER_ENTERING:
      return "inProgress";

    case actionsTypes.USER_ENTERED:
      return "done";

    case actionsTypes.RESET_GAME:
      return null;

    default:
      return state;
  }
};
