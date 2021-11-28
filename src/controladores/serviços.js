const knex = require('../conexao');

const buscarServiços = async (req, res) => {
  const busca = await knex('servicos');
  res.status(200).json(busca);
};

const buscaPorCategoria = async (req, res) => {
  const { categoria } = req.params;
  const busca = await knex('servicos').where({ categoria });
  return res.status(200).json(busca);
};

module.exports = { buscarServiços, buscaPorCategoria };
