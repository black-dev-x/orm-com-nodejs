module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Turmas',
      [
        {
          dataInicio: '2020-02-01',
          idNivel: 1,
          idDocente: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          dataInicio: '2020-02-01',
          idNivel: 2,
          idDocente: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          dataInicio: '2020-02-01',
          idNivel: 3,
          idDocente: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          dataInicio: '2020-07-01',
          idNivel: 3,
          idDocente: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Turmas', null, {})
  }
}
