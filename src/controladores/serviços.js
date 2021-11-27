const knex = require('../conexao');

const buscarServiços = async (req, res) => {
  const serviços = await knex('serviços');
  res.status(200).json(serviços);
};

const buscaPorCategoria = async (req, res) => {
  const { categoria } = req.params;
  const busca = await knex('usuarios').where({ categoria });
  return res.status(200).json(busca);
};

module.exports = { buscarServiços, buscaPorCategoria };
