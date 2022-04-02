module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Niveis',
      [
        {
          descricao: 'básico',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descricao: 'intermediário',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descricao: 'avançado',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Niveis', null, {})
  }
}
