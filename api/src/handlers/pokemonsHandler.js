const { getAllPokemons } = require('../controllers/controllers')
const { Pokemon, Types } = require('../db');


const getAllPokemonsHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const apiPokes = await getAllPokemons()
            const chosenPokemon = apiPokes.filter(
                (p) => p.name.toLowerCase() === name.toLowerCase()//comparar nombres siempre en minusculas
            )
            if (chosenPokemon) {
                return res.status(200).json(chosenPokemon)
            }
            return res.status(404).send('No pokemon found')
        } else {
            const allPokemons = await getAllPokemons();
            return res.status(200).json(allPokemons)
        }           
    } catch (error) {
        res.status(404).send({ error: error.message })        
    }    
}

const getPokemonHandlerById = async (req, res) => {
    const { id } = req.params;
    try {
        const allPokemons = await getAllPokemons();
        if(id) {
            const pokeFilters = allPokemons.filter(
                (p) => p.id == id)
                if(pokeFilters.length) {
                    return res.json(pokeFilters)
                }
        }    
    } catch (error) {
        res.status(404).send('There is no pokemon with that id')        
    }
}

const createPokemonHandler = async (req, res) => {
    try {
        const { name, image, health, attack, defense, speed, height, weight, types } = req.body;
        if (!name) {
            return res.status(404).send("Name not found");
        }
        const newPokemons = await Pokemon.create({
            name: name,
            health: health,
            attack: attack,
            defense: defense,
            speed: speed,
            height: height,
            weight: weight,
            image: image,
        });

        let typesDB = await Types.findAll({
            where: {
                name: types,
            },
        });

        await newPokemons.addTypes(typesDB);

        return res.status(200).json(newPokemons);

    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

const deletePokemon = async (req, res) => {
    const { id } = req.params;
    try {
        await Pokemon.destroy({
            where: {
                id: id
            }
        });
        res.status(200).send('Pokemon deleted');        
    } catch (error) {
        res.status(404).send({ error: error.message })        
    }
}

const updatePokemon = async (req, res) => {
    const { id } = req.params;
    let { name, health, attack, defense, speed, height, weight, img } = req.body;
    try {
        let updatedPokemon = await Pokemon.findOne({ where: { id: id } })
        if (updatedPokemon) {
            await Pokemon.update({
                name: name ? name : updatedPokemon.name,
                health: health ? health : updatedPokemon.health,
                attack: attack ? attack : updatedPokemon.attack,
                defense: defense ? defense : updatedPokemon.defense,
                speed: speed ? speed : updatedPokemon.speed,
                height: height ? height : updatedPokemon.height,
                weight: weight ? weight : updatedPokemon.weight,
                img: img ? img : updatedPokemon.img
            }, { where: { id: id } })

            return res.send({ msg: "Updated successfully" });
        }
        res.send({ msg: "This Pokemon doen't exist" });

    } catch (err) {
        console.log("This be the message", err.message)
        res.send({ msg: err.message })
    }
}

module.exports = {
    getAllPokemonsHandler,
    getPokemonHandlerById,
    createPokemonHandler,
    deletePokemon,
    updatePokemon,
};