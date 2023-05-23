import { useDispatch } from "react-redux";
import useGetPokemonById from "../../hooks/useGetPokemonById";
import style from "./Detail.module.css";
import { useHistory } from 'react-router-dom';
import { deletedPokemon } from "../../redux/actions";


const Detail = () => {
  const pokemonData = useGetPokemonById();
  const pokemon = pokemonData[0];
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = () => {
    dispatch(deletedPokemon(pokemon.id));
    history.push('/home');
  }
  

  return (
    <div>
      {pokemon ? (
        <div className={style.detail}>
          <h2>
            <strong>{pokemon.name.toUpperCase()}</strong>
          </h2>
          <img src={pokemon.image} alt="" />
          <p>
            <strong>HEALTH: {pokemon.health}</strong>
          </p>
          <p>
            <strong>ATTACK: {pokemon.attack}</strong>
          </p>
          <p>
            <strong>DEFENSE: {pokemon.defense}</strong>
          </p>
          {pokemon.speed && (
            <p>
              <strong>SPEED: {pokemon.speed}</strong>
            </p>
          )}
          {pokemon.height && (
            <p>
              <strong>HEIGHT: {pokemon.height}</strong>
            </p>
          )}
          {pokemon.weight && (
            <p>
              <strong>WEIGHT: {pokemon.weight}</strong>
            </p>
          )}
          <div style={{ marginBottom: "20px" }}>
            <strong>
              TYPES: {pokemon.types.map((v) => v.name).join(" / ")}
            </strong>
          </div>
          {typeof pokemon?.id === "string" ? (
        <button onClick={handleDelete}>Delete</button>
      ) : null}
        </div>
      ) : (
        <div className={style.loadingSpinner}></div>
      )}
    </div>
  );
};

export default Detail;
