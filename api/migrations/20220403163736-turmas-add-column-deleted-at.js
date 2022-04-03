'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn('Turmas', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    })
  },

  async down(queryInterface) {
    queryInterface.removeColumn('Turmas', 'deletedAt')
  }
}
