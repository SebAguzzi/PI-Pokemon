import { useDispatch } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { getPokemons } from '../../redux/actions';
import SearchBar from "../../components/SearchBar/SearchBar";


const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch])
    
    return (
        <>
        <SearchBar />
        <CardsContainer />  
        </>
    )
};

export default Home;