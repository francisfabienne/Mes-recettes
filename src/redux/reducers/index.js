import { combineReducers } from "redux";

import { recipesList } from "./recipesList";
import singleRecipeInfo from './singleRecipeInfo'

export default combineReducers({
  recipesList,
  singleRecipeInfo
});
