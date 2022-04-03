'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn('Pessoas', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    })
  },

  async down(queryInterface) {
    queryInterface.removeColumn('Pessoas', 'deletedAt')
  }
}
