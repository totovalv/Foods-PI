import axios from "axios"
export  const GET_ALL_RECIPES="GET_ALL_RECIPES"
export const GET_RECIPES_BY_NAME="GET_RECIPES_BY_NAME"
export const GET_RECIPE_BY_ID="GET_RECIPE_BY_ID"
export const CREATE_RECIPE="CREATE_RECIPE"

export const GET_DIETS="GET_DIETS"
export const CREATED_IN_DB="CREATED_IN_DB"
export const FILTER_BY_DIETS="FILTER_BY_DIETS"
export const FILTER_BY_HEALTHSCORE="FILTER_BY_HEALTHSCORE"
export const FILTER_ALPHABETIC="FILTER_ALPHABETIC"
export const SHOW_LOADER="SHOW_LOADER"
export const HIDE_LOADER="HIDE_LOADER"



export function getAllRecipes(){
    return async function (dispatch){
        var json =await axios.get("http://localhost:3001/recipes");
        return dispatch({
            type: GET_ALL_RECIPES,
            payload:json.data
        })  
    }
} 


export function getRecipeDetail(id){
  return  function (dispatch) {
     fetch(`http://localhost:3001/recipes/`+ id)
    .then((response) => response.json())
    .then((data)=> dispatch({type: GET_RECIPE_BY_ID, payload: data}))
    .catch(err => console.log("error" + err))
  };
}   

export function filterRecipesByDiets (payload){
return{
    type:FILTER_BY_DIETS,
    payload
}
}

export function filterRecipesByHealthScore (payload){
    return{
        type:FILTER_BY_HEALTHSCORE,
        payload
    }
    }


    export function filterRecipesByName(payload){
        return{
            type:FILTER_ALPHABETIC,
            payload
        }

    }

    export function getRecipesByName(name){
        return async function(dispatch){
            try {
                var json= await axios.get(`http://localhost:3001/recipes?name=${name}`)
                return dispatch({
                    type: GET_RECIPES_BY_NAME,
                    payload:json.data
                })
            } catch (error) {
                console.log(error);
            }
        }
    }

    // export function getDiets(){
    //     return async function(dispatch){
    //         const json = await axios(`http://localhost:3001/diets`)
    //         return dispatch({
    //             type:GET_DIETS,
    //             payload:json.data
    //         })
    //     }
    // }
    export function getDiets(){
        return function (dispatch){
            fetch(`http://localhost:3001/diets`)
            .then((response)=>response.json())
            .then((data=> dispatch({
                type:GET_DIETS,
                payload:data
            })))
        }
    }


    export function createRecipe(payload){
       return async function(dispatch){
        const json = await axios.post(`http://localhost:3001/recipes`,payload)
        return json
    
    } 
    }

    // export function createRecipe (payload){
    //     return function(dispatch){
    //         fetch(`http://localhost:3001/recipes`, {
    //             method: 'POST',
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(payload)
    //         })
    //         .then(res => res.json())
    //         .then(data=> dispatch({
    //             type:CREATE_RECIPE,
    //             payload
    //         })
    //         );
    //     }
    // }