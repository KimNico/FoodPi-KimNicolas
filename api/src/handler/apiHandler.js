require('dotenv').config();
const bodyParser = require('body-parser');
let fetch = require("node-fetch")
let {Recipe , Diets} = require("../db")
const {API_KEY} = process.env;

//Traigo las recetas de la api
const getRecipes = async()=>{
    const response =  await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    const data = await response.json()
    let db = await Recipe.findAll()
    let recipes = Object.values(data.results)
    let base = [...db,...recipes]
    let recipesInfo=[]
   
    
    for (let i = 0; i < base.length; i++) {
  
        recipesInfo.push({
            id:base[i]['id'],
            title:base[i]['title'],
            score:base[i]["healthScore"],
            score2:base[i]["cookingMinutes"],
            summary: base[i]["summary"],
            instructions:base[i]["analyzedInstructions"],
            diets:base[i]["diets"],
            img:base[i]["image"]
        })
    }
    console.log(data);
    return recipesInfo
}


// const getRecipeName = async(name)=>{


//     let db = await Recipe.findAll()

//     let recipes = await getAllRecipes()

//     let base = [...db,...recipes]
    
//     let recipesInfo=[]
   
//     for (let i = 0; i < base.length; i++) {
  
//         recipesInfo.push({
//             id:base[i]['id'],
//             title:base[i]['title'],
//             healthScore:base[i]["healthScore"],
//             summary: base[i]["summary"],
//             analyzedInstructions:base[i]["analyzedInstructions"],
//             diets:base[i]["diets"],
//             img:base[i]["image"]
//         })
//     }
//      const filteredRecipe = recipesInfo.filter((e)=> e.title===name )
//     return filteredRecipe
// }
//Traigo la informacion de recetas de la BBDD 
const getDbInfo = async () =>{
    return await Recipe.findAll({
        include:{
            model:Diets,
            attributes:['name'],
            trhough:{
                attributes:[],
            }
        }
    })
}


const getAllRecipes = async () => {
    const apiInfo = await getRecipes()
    const dbInfo = await getDbInfo()
    const allRecipes = [...apiInfo,...dbInfo]
    return allRecipes

}

let diets = [
    {name: 'gluten free'},
    {name: 'ketogenic'},
    {name: 'vegetarian'},
    {name: 'lacto-vegetarian'},
	{name: 'lacto ovo vegetarian'},
    {name: 'vegan'},
    {name: 'pescatarian'},
    {name: 'paleolithic'},
    {name: 'primal'},
	{name: 'whole 30'}];


module.exports={
    getRecipes,
    // getRecipeName,
    getDbInfo,
    getAllRecipes,
    diets
}

getAllRecipes()