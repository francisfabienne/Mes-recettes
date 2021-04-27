import {STORE_RECIPES} from "../actionTypes"
const defaultState = [];

export const recipesList = (state = defaultState, action) => {
  switch (action.type) {
    case STORE_RECIPES:
      return action.payload.result
    default:
      return state;
  }
};
