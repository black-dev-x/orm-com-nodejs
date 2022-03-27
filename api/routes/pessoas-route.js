const { Router } = require('express')
const PessoaControllers = require('../controllers/PessoaController')

const routerPessoas = Router()
routerPessoas.get('/pessoas', PessoaControllers.pegaTodasAsPessoas)

module.exports = routerPessoas
