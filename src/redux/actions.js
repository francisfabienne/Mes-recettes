import {STORE_RECIPES, SINGLE_RECIPE} from './actionTypes'

//action = { type: NOM_ACTION, payload: result}
export const searchRecipes = (result) => ({
   type: STORE_RECIPES,
   payload: {
       result,
   }
})

export const singleRecipe = (result) => ({
    type: SINGLE_RECIPE,
    payload: {
        result
    }
})