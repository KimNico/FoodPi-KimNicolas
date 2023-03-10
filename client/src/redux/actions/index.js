export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_DETAIL = "GET_RECIPES_DETAIL"
export const GET_RECIPES_NAME="GET_RECIPES_NAME"
export const GET_DIET= "GET_DIET"
export const CREATE_RECIPES = "CREATE_RECIPES";
export const ORDER_BY_PUNTUATION="ORDER_BY_PUNTUATION"
export const ORDER_BY_NAME = "ORDER_BY_NAME"
export const FILTER_BY_TYPEDIET = "FILTER_BY_TYPEDIET"



export const getRecipes = () => async (dispatch) => {
    const response = await fetch(`http://localhost:3001/recipes`);
    const data = await response.json();
    dispatch({
      type: GET_RECIPES,
      payload: data,
    });
  };


export const getRecipesDetail =(id) => {
    return async function(dispatch) {
        const response  = await fetch(`http://localhost:3001/recipes/${id}`);
        const data  = await response.json()
        dispatch({
            type: "GET_RECIPES_DETAIL",
            payload: data
        })
      };
};
export const getDiets = ()=>async (dispatch) => {
  const response = await fetch("http://localhost:3001/diets");
  const data = await response.json();
  dispatch({
    type: "GET_DIET",
    payload: data,
  });
};

export const getRecipesName =(name)=>{
 
  return async function(dispatch){
    const response = await fetch(`http://localhost:3001/recipes?name=${name}`)
    const data = await response.json()   
    dispatch({
      type:"GET_RECIPES_NAME",
      payload:data
    })
  }
}

export const createRecipe =(payload)=>{
  return async function(dispatch){
    const response =await fetch(`http://localhost:3001/recipes`,payload)
    const data  = response.json()
    dispatch({
      type:"CREATE_RECIPES",
      payload: data
    })
  }
}

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


