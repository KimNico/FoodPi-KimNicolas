const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
let {getAllRecipes} = require("../handler/apiHandler")
let {Recipe , Diets} = require("../db")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




router.get('/',async(req,res)=>{
    const {name} = req.query
  try {
    if(!name){
        const allRecipes = await getAllRecipes()
        res.send(allRecipes)
    }else{
        const allRecipes = await getAllRecipes()
        const query = name.toLowerCase()
        const nameRecipe = allRecipes.filter((e)=>{
            if(e.title.toLowerCase().includes(query)){
                return e
            }
        })
        res.send(nameRecipe)
    }
  } catch (error) {
    res.send(error)
  }
    
   

})
router.get("/:id",async(req,res)=>{
    const {id} = req.params
    let recipes = await getAllRecipes()
    let recipesID = recipes.filter(e=>e.id==id)
    if(recipesID.length){
        res.json(recipesID)
    }
})

router.post('/', async (req,res,next) => {
    const {
        title,
        summary,
        spoonacularScore,
        healthScore,
        analyzedInstructions,
        createdInDb,
        typeDiets
    } = req.body;
    if(!title || !summary) {
        return res.status(400).send('Please, insert a title and a summary to continue!');
    }
    console.log(title);
try{let createRecipe = await Recipe.create({
       
        title,
        summary,
        healthScore,
        analyzedInstructions,
        createdInDb
})
let dietTypeDb = await Diets.findAll({ where:{ name:typeDiets } })
    createRecipe.addTypeDiet(dietTypeDb)
    res.status(200).send('receta creada')   

}catch(e){
    next(e)
}
});
module.exports = router;

