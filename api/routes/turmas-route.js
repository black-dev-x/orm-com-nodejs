const { Router } = require('express')
const TurmasController = require('../controllers/TurmasController')

const routerTurmas = Router()
routerTurmas.get('/turmas', TurmasController.pegaTodasAsTurmas)
routerTurmas.get('/turmas/:id', TurmasController.pegaUmaTurma)
routerTurmas.post('/turmas', TurmasController.criaUmaTurma)
routerTurmas.put('/turmas/:id', TurmasController.atualizaTurma)
routerTurmas.delete('/turmas/:id', TurmasController.apagaTurma)

module.exports = routerTurmas
