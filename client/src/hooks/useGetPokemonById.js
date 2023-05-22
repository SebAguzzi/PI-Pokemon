import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPokemonId, cleanDetail } from '../redux/actions';
import { useParams } from 'react-router-dom';


const useGetPokemonById = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const pokemon = useSelector(state => state.pokemonDetail);

    useEffect(() => {
        setTimeout(() => {
            dispatch(getPokemonId(id))
        },1000)
        return () => {
            dispatch(cleanDetail());
        }
    }, [dispatch, id]);

    return pokemon;
};

export default useGetPokemonById;