const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      unique: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviewPlate: { 
      type: DataTypes.TEXT,
      allowNull: true,
    },
    punctuation: {
      type: DataTypes.INTEGER,      
    }, 
    healthLevel: {
      type: DataTypes.INTEGER,      
    },
    stepByStep: {
      type: DataTypes.TEXT,      
    }
  });
};
