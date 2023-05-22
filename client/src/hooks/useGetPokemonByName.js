import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getPokemonName } from "../redux/actions"


const useGetPokemonByName = () => {
    const dispatch = useDispatch();
    const [pokemon, setPokemon] = useState('');

    const handlePokemonChange = (event) => {
        setPokemon(event.target.value)
    }

    useEffect(() => {
        dispatch(getPokemonName(pokemon))
    }, [dispatch, pokemon])

    return [pokemon, handlePokemonChange]
};

export default useGetPokemonByName;