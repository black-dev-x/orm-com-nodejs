'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Turmas.hasMany(models.Matriculas, {
        foreignKey: 'idTurma'
      })
      Turmas.belongsTo(models.Pessoa, {
        foreignKey: 'idDocente'
      })
      Turmas.belongsTo(models.Niveis, {
        foreignKey: 'idNivel'
      })
    }
  }
  Turmas.init(
    {
      dataInicio: DataTypes.DATEONLY
    },
    {
      sequelize,
      modelName: 'Turmas'
    }
  )
  return Turmas
}
