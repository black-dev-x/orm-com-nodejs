'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoa.hasMany(models.Turmas, {
        foreignKey: 'idDocente'
      })
      Pessoa.hasMany(models.Matriculas, {
        foreignKey: 'idEstudante'
      })
    }
  }
  Pessoa.init(
    {
      nome: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
      role: DataTypes.STRING
    },
    {
      paranoid: true,
      sequelize,
      modelName: 'Pessoa'
    }
  )
  return Pessoa
}
