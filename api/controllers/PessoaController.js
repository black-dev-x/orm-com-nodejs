const database = require('../models')

const pegaTodasAsPessoas = async (_, res) => {
  try {
    const pessoas = await database.Pessoa.findAll()
    res.status(200).json(pessoas)
  } catch (e) {
    res.status(500).json(e)
  }
}

const pegaUmaPessoa = async (req, res) => {
  try {
    const id = req.params.id
    const pessoa = await database.Pessoa.findOne({ where: { id } })
    res.status(200).json(pessoa)
  } catch (e) {
    res.status(500).json(e)
  }
}

const criaUmaPessoa = async (req, res) => {
  try {
    const pessoa = req.body
    const pessoaSalva = await database.Pessoa.create(pessoa)
    res.status(200).json(pessoaSalva)
  } catch (e) {
    res.status(500).json(e)
  }
}

const atualizaPessoa = async (req, res) => {
  try {
    const pessoaAtualizada = req.body
    const id = req.params.id
    await database.Pessoa.update(pessoaAtualizada, { where: { id } })
    const pessoaSalva = await database.Pessoa.findOne({ where: { id } })
    res.json(pessoaSalva)
  } catch (e) {
    res.status(500).json(e)
  }
}

const apagaPessoa = async (req, res) => {
  try {
    const id = req.params.id
    await database.Pessoa.destroy({ where: { id } })
    res.end()
  } catch (e) {
    res.status(500).json(e)
  }
}

const pegaUmaMatricula = async (req, res) => {
  const idEstudante = req.params.idEstudante
  const idMatricula = req.params.idMatricula
  const matricula = await database.Matriculas.findOne({
    where: {
      id: idMatricula,
      idEstudante
    }
  })
  res.json(matricula)
}

module.exports = {
  pegaTodasAsPessoas,
  pegaUmaPessoa,
  criaUmaPessoa,
  atualizaPessoa,
  apagaPessoa,
  pegaUmaMatricula
}
