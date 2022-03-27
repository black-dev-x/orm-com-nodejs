const routerPessoas = require('./pessoas-route')

const configure = app => {
  app.get('/', (req, res) => res.send('ok'))
  app.use(routerPessoas)
}

module.exports = configure
