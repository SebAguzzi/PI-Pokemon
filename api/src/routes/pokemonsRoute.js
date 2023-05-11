const { Router } = require('express')
const { 
    getAllPokemonsHandler, 
    getPokemonHandlerById, 
    createPokemonHandler,
    deletePokemon,
    updatePokemon,
} = require('../handlers/pokemonsHandler')

const pokemonsRoute = Router();

pokemonsRoute.get('/', getAllPokemonsHandler);
pokemonsRoute.get('/:id', getPokemonHandlerById);
pokemonsRoute.post('/', createPokemonHandler);
pokemonsRoute.delete('/:id', deletePokemon);
pokemonsRoute.put('/:id', updatePokemon);



module.exports = pokemonsRoute;