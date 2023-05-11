const { getTypes } = require('../controllers/controllers')
const { Type } = require('../db')

const getPokemonTypes = async (req, res) => {
    await getTypes();
    try {
        const findTypes = await Type.findAll()
        res.send(findTypes.map((type) => {
            return {
                id: type.id,
                name: type.name
            }
        }))
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}

module.exports = {getPokemonTypes};