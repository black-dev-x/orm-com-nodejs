const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const routerNiveis = Router()
routerNiveis.get('/niveis', NivelController.pegaTodosOsNiveis)
routerNiveis.get('/niveis/:id', NivelController.pegaUmNivel)
routerNiveis.post('/niveis', NivelController.criaUmNivel)
routerNiveis.put('/niveis/:id', NivelController.atualizaNivel)
routerNiveis.delete('/niveis/:id', NivelController.apagaNivel)

module.exports = routerNiveis
