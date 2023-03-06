const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    Id:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Summary:{
      type: DataTypes.STRING,
      allowNull:false
    },
    Score:{
      type:DataTypes.FLOAT
    },
    Instructions:{
      type: DataTypes.STRING
    }

  });
};
