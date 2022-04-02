const routerTurmas = require('./turmas-route')
const routerNiveis = require('./niveis-route')
const routerPessoas = require('./pessoas-route')

const configure = app => {
  app.get('/', (req, res) => res.send('ok'))
  app.use(routerPessoas)
  app.use(routerTurmas)
  app.use(routerNiveis)
}

module.exports = configure
