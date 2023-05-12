const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { getPokesApi, getPokesDB } = require('../helpers')


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
  mapTypes.forEach((type) => {
    Type.findOrCreate({where: {name: type}})
  })

  const typeDB = await Type.findAll();

  return typeDB;  
}

module.exports = {
  getTypes,
  getAllPokemons,
};
