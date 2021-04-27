import {searchRecipes, singleRecipe} from '../../redux/actions'
import axios from 'axios'
import { RECIPES_URL, apiKey, TOTAL_RECIPE, RECIPES_INFO_URL } from '../../config/keys';



export const recipes = async (actionDispatch ,query) => {
    try {
        
        const result = await axios.get(RECIPES_URL, {
            params: {
                apiKey,
                number: TOTAL_RECIPE
            }
        });
        // put data on the store by dispatch
        // const actionDispatch = useDispatch()
        actionDispatch(searchRecipes(result.data.results))

    } catch (error) {
        console.log("fail to fetch recipes", error);
    }
    
}


export const singleRecipeDetail = async(actionDispatch, id) => {
    try {
        console.log('try')
       const result = await axios.get('https://api.spoonacular.com/recipes/' + id +'/information', {
           params: {
               apiKey
           }
       })
       console.log(result.data)
       actionDispatch (singleRecipe(result.data))
    } catch (error) {
        console.log(error)
    }
}






