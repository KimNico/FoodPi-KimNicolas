const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    Id:{
      type: DataTypes.INTEGER,
     
    },
    title: {
      type: DataTypes.STRING,

    },
    Summary:{
      type: DataTypes.STRING,
   
    },
    Score:{
      type:DataTypes.FLOAT
    },
    Instructions:{
      type: DataTypes.STRING
    }

  });
};