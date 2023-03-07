const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id:{
      type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    healthScore:{
      type:DataTypes.FLOAT,
      allowNull: false,
    },
    analyzedInstructions:{
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
    diets:{
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
    createdInDb:{
      type : DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }

  });
};
