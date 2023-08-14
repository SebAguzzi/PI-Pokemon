import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_ID = "GET_POKEMON_ID";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME";
export const GET_TYPES = "GET_TYPES";
export const FILTER_TYPE = "FILTER_TYPE";
export const FILTER_DATABASE = "FILTER_DATABASE";
export const FILTER_API = "FILTER_API";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const DELETE_POKEMON = "DELETE_POKEMON";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const POST_POKEMON = "POST_POKEMON";

export const getPokemons = () => {
  return async function (dispatch) {
    const apiData = await axios("http://localhost:3001/pokemon");
    const pokemons = apiData.data;
    dispatch({ type: GET_POKEMONS, payload: pokemons });
  };
};

export const getPokemonId = (id) => {
  return async function (dispatch) {
    const apiData = await axios(`http://localhost:3001/pokemon/${id}`);
    const pokemon = apiData.data;
    dispatch({ type: GET_POKEMON_ID, payload: pokemon });
  };
};

export const getPokemonName = (name) => {
  return async function (dispatch) {
    const apiData = await axios(`http://localhost:3001/pokemon?name=${name}`);
    const pokemon = apiData.data;
    dispatch({ type: GET_POKEMON_NAME, payload: pokemon });
  };
};

export const getTypes = () => {
  return async function (dispatch) {
    const apiData = await axios("http://localhost:3001/type");
    const type = apiData.data;
    dispatch({ type: GET_TYPES, payload: type });
  };
};

export const filterType = (type) => {
  return {
    type: FILTER_TYPE,
    payload: type,
  };
};

export const filterByDatabase = () => {
  return async function (dispatch) {
      const apiData = await axios("http://localhost:3001/pokemon")
      const pokemons = apiData.data
      const pokemonsDb = pokemons.filter((pokemon) => typeof  pokemon.id === 'string')
      dispatch({ type: 'FILTER_DATABASE', payload: pokemonsDb })
  }
};

export const filterByApi = () => {
  return async function (dispatch) {
      const apiData = await axios("http://localhost:3001/pokemon")
      const pokemons = apiData.data
      const pokemonsApi = pokemons.filter((pokemon) => typeof  pokemon.id === 'number')
      dispatch({ type: 'FILTER_API', payload: pokemonsApi })
  }
};

export const sortByAttack = (method) => {
  return {
    type: ORDER_BY_ATTACK,
    payload: method,
  };
};

export const sortByName = (method) => {
  return {
    type: ORDER_BY_NAME,
    payload: method,
  };
};

export const deletedPokemon = (id) => {
  return async function (dispatch) {
    const apiData = await axios.delete(`http://localhost:3001/pokemon/${id}`);
    const pokemon = apiData.data;
    dispatch({ type: DELETE_POKEMON, payload: pokemon });
  };
};

export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
  }
};

export const postPokemon = (pokemon) => {
  return async (dispatch) => {
    const apiData = await axios.post("http://localhost:3001/pokemon", pokemon)
    const poke = apiData.data;
    dispatch({
      type: POST_POKEMON,
      paylaod: poke,
    })
  }
};
