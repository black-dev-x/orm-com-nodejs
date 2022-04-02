const database = require('../models')

const pegaTodasAsTurmas = async (_, res) => {
  try {
    const turmas = await database.Turmas.findAll()
    res.status(200).json(turmas)
  } catch (e) {
    res.status(500).json(e)
  }
}

const pegaUmaTurma = async (req, res) => {
  try {
    const id = req.params.id
    const turma = await database.Turmas.findOne({ where: { id } })
    res.status(200).json(turma)
  } catch (e) {
    res.status(500).json(e)
  }
}

const criaUmaTurma = async (req, res) => {
  try {
    const turma = req.body
    const turmaSalva = await database.Turmas.create(turma)
    res.status(200).json(turmaSalva)
  } catch (e) {
    res.status(500).json(e)
  }
}

const atualizaTurma = async (req, res) => {
  try {
    const turmaAtualizada = req.body
    const id = req.params.id
    await database.Turmas.update(turmaAtualizada, { where: { id } })
    const turmaSalva = await database.Turmas.findOne({ where: { id } })
    res.json(turmaSalva)
  } catch (e) {
    res.status(500).json(e)
  }
}

const apagaTurma = async (req, res) => {
  try {
    const id = req.params.id
    await database.Turmas.destroy({ where: { id } })
    res.end()
  } catch (e) {
    res.status(500).json(e)
  }
}
module.exports = {
  pegaTodasAsTurmas,
  pegaUmaTurma,
  criaUmaTurma,
  atualizaTurma,
  apagaTurma
}
