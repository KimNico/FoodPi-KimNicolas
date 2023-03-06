const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
let { Diets } = require("../db")
const { diets } = require('../handler/apiHandler')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/', async (req,res) => {
    //console.log(diets);
        diets.forEach(e => {
            Diets.findOrCreate({
                where: {name:e.name}
            })
        })

         const allTheTypes = await Diets.findAll();
        res.send(allTheTypes.map(e => e.name))
})

module.exports= router;
module.exports = router;
