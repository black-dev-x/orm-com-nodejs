'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn('Matriculas', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    })
  },

  async down(queryInterface) {
    queryInterface.removeColumn('Matriculas', 'deletedAt')
  }
}
