const database = require('../models')

const pegaTodasAsPessoas = async (_, res) => {
  try {
    const pessoas = await database.Pessoa.findAll()
    res.status(200).json(pessoas)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports = {
  pegaTodasAsPessoas
}
