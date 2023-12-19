const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    surname: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    description: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    image: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    nationality: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    dob: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },{ timestamps: false });
};