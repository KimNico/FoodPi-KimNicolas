import axios from "axios"
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_DETAIL = "GET_RECIPES_DETAIL"
export const GET_RECIPES_NAME="GET_RECIPES_NAME"
export const GET_DIET= "GET_DIET"
export const CREATE_RECIPES = "CREATE_RECIPES";
export const ORDER_BY_PUNTUATION="ORDER_BY_PUNTUATION"
export const ORDER_BY_NAME = "ORDER_BY_NAME"
export const FILTER_BY_TYPEDIET = "FILTER_BY_TYPEDIET"




export const getRecipes = () => async (dispatch) => {
    const response = await axios.get(`/recipes`);
    const recipeData = await response.data;
    dispatch({
      type: GET_RECIPES,
      payload: recipeData,
    });
  };


export const getRecipesDetail =(id) => {
    return async function(dispatch) {
        const response  = await axios.get(`/recipes/${id}`);
        const data  = await response.data
        dispatch({
            type: "GET_RECIPES_DETAIL",
            payload: data
        })
      };
};
export const getDiets = ()=>async (dispatch) => {
  const response = await axios.get("/diets");
  const data = await response.data
  dispatch({
    type: "GET_DIET",
    payload: data,
  });
};

export const getRecipesName =(name)=>{
 
  return async function(dispatch){
    const response = await axios.get(`/recipes?name=${name}`)
    const data = await response.data 
    dispatch({
      type:"GET_RECIPES_NAME",
      payload:data
    })
  }
}


export const createRecipe = (payload) => {
  console.log(payload);
  return async function () {
   let response = await axios.post(`/recipes`, payload);
          return response
  };
};

export const filterRecipesByTypeDiet =(payload)=>{
  return {
      type : FILTER_BY_TYPEDIET,
      payload
  }
}

export const orderByName = (payload)=>{
  return {
      type : ORDER_BY_NAME,
      payload
  }
}

export const orderByPuntuation = (payload)=>{
  return {
      type : ORDER_BY_PUNTUATION,
      payload
  }
}


