import { SINGLE_RECIPE } from "../actionTypes";


const initialState = []

const singleRecipeInfo = (state = initialState, action) => {
    switch (action.type) {
        case SINGLE_RECIPE:
            return action.payload.result
    
        default:
            return state
    }
}

export default singleRecipeInfo;