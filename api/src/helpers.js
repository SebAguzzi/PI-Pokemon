const axios = require('axios');
const { Pokemon, Types } = require('./db')

const getPokesApi = async () => {
    try {
        let pokeData = [];
        const pokeApi = await axios("https://pokeapi.co/api/v2/pokemon")
        
        // traigo los datos de cada pokemon
        let pokeInfo = pokeApi.data.results.map((pokemon) => axios(pokemon.url))

        // filtro solo los datos que necesito de cada pokemon
        let pokeResults = axios.all(pokeInfo).then((poke) => {
            poke.map((p) => {
                pokeData.push({
                    id: p.data.id,
                    name: p.data.name,
                    health: p.data.stats[0].base_stat,
                    attack: p.data.stats[1].base_stat,
                    defense: p.data.stats[2].base_stat,
                    speed: p.data.stats[5].base_stat,
                    height: p.data.height,
                    weight: p.data.weight,
                    types: p.data.types.map((t) => t.type.name),
                    image: p.data.sprites.other.home.front_default,
                })
            })
            return pokeData;
        })
        return pokeResults;
    } catch (error) {
        console.log('Ha habido un error en getPokesApi: ', error)
    }
}

const getPokesDB = async () => {
    const pokesDB = await Pokemon.findAll({
        include: Types,
    });
    return pokesDB;
}

module.exports = {
    getPokesApi,
    getPokesDB,
}