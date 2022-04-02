module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Matriculas',
      [
        {
          status: 'confirmado',
          idEstudante: 1,
          idTurma: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: 'confirmado',
          idEstudante: 2,
          idTurma: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: 'confirmado',
          idEstudante: 3,
          idTurma: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: 'confirmado',
          idEstudante: 4,
          idTurma: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: 'cancelado',
          idEstudante: 1,
          idTurma: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: 'cancelado',
          idEstudante: 2,
          idTurma: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Matriculas', null, {})
  }
}
