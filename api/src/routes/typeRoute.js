const { Router } = require('express');
const { getPokemonTypes } = require('../handlers/typeHandler')

const typeRoute = Router();

typeRoute.get('/', getPokemonTypes)

module.exports = typeRoute;