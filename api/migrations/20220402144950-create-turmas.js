'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Turmas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dataInicio: {
        type: Sequelize.DATEONLY
      },
      idDocente: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Pessoas',
          key: 'id'
        }
      },
      idNivel: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Niveis',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Turmas')
  }
}
