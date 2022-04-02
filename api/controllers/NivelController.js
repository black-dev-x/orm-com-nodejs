const database = require('../models')

const pegaTodosOsNiveis = async (_, res) => {
  try {
    const niveis = await database.Niveis.findAll()
    res.status(200).json(niveis)
  } catch (e) {
    res.status(500).json(e)
  }
}

const pegaUmNivel = async (req, res) => {
  try {
    const id = req.params.id
    const nivel = await database.Niveis.findOne({ where: { id } })
    res.status(200).json(nivel)
  } catch (e) {
    res.status(500).json(e)
  }
}

const criaUmNivel = async (req, res) => {
  try {
    const nivel = req.body
    const nivelSalvo = await database.Niveis.create(nivel)
    res.status(200).json(nivelSalvo)
  } catch (e) {
    res.status(500).json(e)
  }
}

const atualizaNivel = async (req, res) => {
  try {
    const nivelAtualizado = req.body
    const id = req.params.id
    await database.Niveis.update(nivelAtualizado, { where: { id } })
    const nivelSalvo = await database.Niveis.findOne({ where: { id } })
    res.json(nivelSalvo)
  } catch (e) {
    res.status(500).json(e)
  }
}

const apagaNivel = async (req, res) => {
  try {
    const id = req.params.id
    await database.Niveis.destroy({ where: { id } })
    res.end()
  } catch (e) {
    res.status(500).json(e)
  }
}
module.exports = {
  pegaTodosOsNiveis,
  pegaUmNivel,
  criaUmNivel,
  atualizaNivel,
  apagaNivel
}
