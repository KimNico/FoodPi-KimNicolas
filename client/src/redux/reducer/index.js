import { GET_RECIPES } from "../actions";
import { GET_RECIPES_DETAIL } from "../actions";
import { CREATE_RECIPES } from "../actions";
import { GET_DIET } from "../actions" 
import { GET_RECIPES_NAME } from "../actions";
import { ORDER_BY_PUNTUATION } from "../actions"
import { ORDER_BY_NAME } from "../actions"
import { FILTER_BY_TYPEDIET } from "../actions"



const initialState = {
  recipes: [],
  diets:[],
  recipesDetail: [],
  recipesByName:[]
};

const rootReducer = (state =  initialState, action) => {
  switch (action.type) {
   case GET_RECIPES:
    return{
      ...state,
      recipes:action.payload

    }
    case GET_DIET:{
      return{
        ...state,
        diets:action.payload
      }
    }
    case GET_RECIPES_DETAIL:
    return{
      ...state,
      recipesDetail: action.payload
    }
    case GET_RECIPES_NAME:
      return{
        ...state,
        recipes:action.payload
      }
    case CREATE_RECIPES:
    return{
      ...state,
    }
    case ORDER_BY_PUNTUATION:
      let orderpunt = action.payload === 'menormayor' ? 
      state.recipes.sort(function(a,b) {
          if(a.score > b.score) {
              return 1
          }
          if( b.score > a.score){
              return -1
          }
          return 0
      }) : 
      state.recipes.sort(function(a,b) {
          if(a.score > b.score) {
              return -1
          }
          if( b.score > a.score){
              return 1
          }
          return 0
      })
      return{
          ...state ,
          recipes : orderpunt
  }
    case ORDER_BY_NAME:
      let order = action.payload === 'asc' ? 
      state.recipes.sort(function(a,b) {
          
          if(a.title.toLowerCase() > b.title.toLowerCase()) {
            
              return 1
          }
          if( b.title.toLowerCase() > a.title.toLowerCase()){
              return -1
          }
          return 0
      }) : 
      state.recipes.sort(function(a,b) {
          if(a.title.toLowerCase() > b.title.toLowerCase()) {
              return -1
          }
          if( b.title.toLowerCase() > a.title.toLowerCase()){
              return 1
          }
          return 0
      })
      return{
          ...state ,
          recipes : order
          
        }
    case FILTER_BY_TYPEDIET:
      const recipes = state.recipes
      
      const typeDietFilter = action.payload === 'All' ? recipes : recipes.filter(t => t.diets.find(e => e === action.payload ) )   
      console.log(typeDietFilter);
      // const typeDietFilter = action.payload === 'All' ? recipes : recipes.filter(t => t.diets[0] === action.payload )  
      return{
              ...state ,
              recipes : typeDietFilter
      }

    default:
  }
  
  return state
};

export default rootReducer;