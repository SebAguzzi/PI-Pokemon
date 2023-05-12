const axios = require("axios");
const { Types } = require("../db");
const { getPokesApi, getPokesDB } = require('../helpers');


const getAllPokemons = async () => {
  const pokeApi = await getPokesApi();
  const pokeDB = await getPokesDB();
  const allPokes = [...pokeApi, ...pokeDB];
  return allPokes;  
}

const getTypes = async () => {
  const types = await axios('https://pokeapi.co/api/v2/type');
  const mapTypes = types.data.results.map((type) => type.name);

  // Creo todos los tipos en mi base de datos
  mapTypes.forEach((types) => {
    Types.findOrCreate({where: {name: types}})
  })

  const typeDB = await Types.findAll();

  return typeDB;  
}

module.exports = {
  getTypes,
  getAllPokemons,
};
