const { Router } = require('express')
const PessoaControllers = require('../controllers/PessoaController')

const routerPessoas = Router()
routerPessoas.get('/pessoas', PessoaControllers.pegaTodasAsPessoas)
routerPessoas.get('/pessoas/:id', PessoaControllers.pegaUmaPessoa)
routerPessoas.post('/pessoas', PessoaControllers.criaUmaPessoa)
routerPessoas.put('/pessoas/:id', PessoaControllers.atualizaPessoa)
routerPessoas.delete('/pessoas/:id', PessoaControllers.apagaPessoa)
routerPessoas.get('/pessoas/:idEstudante/matricula/:idMatricula', PessoaControllers.pegaUmaMatricula)

module.exports = routerPessoas
