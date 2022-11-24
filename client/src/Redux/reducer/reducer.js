import { CREATED_IN_DB, CREATE_RECIPE, FILTER_ALPHABETIC, FILTER_BY_DIETS, FILTER_BY_HEALTHSCORE, GET_ALL_RECIPES, GET_DIETS, GET_RECIPES_BY_NAME, GET_RECIPE_BY_ID  } from "../actions/index.js";

const initialState = {
    recipes: [],
    allrecipesState: [],
    recipeDetail:[],
    diets:[],
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                allrecipesState: action.payload
            }
        case FILTER_BY_DIETS:
            const allRecipes = state.allrecipesState
            const dietsFiltered = action.payload!=="Default"? allRecipes.filter((recipe) => recipe.diets.includes(action.payload) 
            ): allRecipes
            return {
                ...state,
                recipes: dietsFiltered
            }
            case FILTER_BY_HEALTHSCORE:
                const recipes_All= state.allrecipesState
                const sortedRecipes=action.payload==="min hc"? recipes_All.sort((a,b)=> {
                    if(a.health_score>b.health_score)return 1
                    if(a.health_score<b.health_score)return -1
                    return 0

             
                }) :
                action.payload==="max hc"?
               recipes_All.sort((a,b)=> {
                if(a.health_score>b.health_score)return -1
                if(a.health_score<b.health_score)return 1
                return 0
            }): action.payload==="health_score"?
             recipes_All: state.recipes
            
        

                return{
                    ...state,
                    recipes:sortedRecipes
                }
                case FILTER_ALPHABETIC:
                    const alphabetic= state.allrecipesState
            


                    const alphabeticRecipes=action.payload==="A-Z"? alphabetic.sort((a,b)=> {
                        if(a.name.toLowerCase()>b.name.toLowerCase())return 1
                        if(a.name.toLowerCase()<b.name.toLowerCase())return -1
                        return 0
                    }) :
                    alphabetic.sort((a,b)=> {
                        if(a.name.toLowerCase()>b.name.toLowerCase())return -1
                        if(a.name.toLowerCase()<b.name.toLowerCase())return 1
                        return 0
                    }) 
                    
                    console.log(alphabeticRecipes);
                    return{
                        ...state,
                        recipes:alphabeticRecipes

                    }
                    case GET_RECIPES_BY_NAME:
                        return {
                            ...state,
                            recipes:action.payload
                        }

                        case CREATE_RECIPE:{
                            return{...state}
                        }
                        case GET_DIETS:
                           return {
                            ...state,
                            diets:action.payload
                           }
                           case GET_RECIPE_BY_ID:
                    
                            return{
                                ...state,
                                recipeDetail:action.payload
                            }
                       
                     default:
            return state
    }

}
export default rootReducer