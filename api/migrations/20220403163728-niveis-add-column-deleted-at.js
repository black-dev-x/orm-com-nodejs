'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn('Niveis', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    })
  },

  async down(queryInterface) {
    queryInterface.removeColumn('Niveis', 'deletedAt')
  }
}
