import {
  FILTER_TYPE,
  FILTER_DATABASE,
  FILTER_API,
  FILTER_TYPE_TWO,
  GET_POKEMONS,
  GET_POKEMON_ID,
  GET_POKEMON_NAME,
  GET_TYPES,
  ORDER_BY_ATTACK,
  ORDER_BY_NAME,
  DELETE_POKEMON,
  CLEAN_DETAIL,
  POST_POKEMON,
} from "./actions";

const initialState = {
  pokemons: [],
  pokemonFilter: [],
  infoType: [],
  pokemonDetail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        pokemonFilter: action.payload,
      };

    case GET_POKEMON_ID:
      return { ...state, pokemonDetail: action.payload };

    case CLEAN_DETAIL:
      return { ...state, pokemonDetail: [] };

    case GET_POKEMON_NAME:
      let pokemonFounded =
        action.payload.length > 0 ? action.payload : [...state.pokemonFilter];
      return {
        ...state,
        pokemons: pokemonFounded,
      };

    case GET_TYPES:
      return { ...state, infoType: action.payload };

    case FILTER_TYPE:
      let filterType =
        action.payload === "all"
          ? [...state.pokemonFilter]
          : [...state.pokemonFilter].filter((t) =>
              t.types?.some((e) => e.name === action.payload)
            );
      return {
        ...state,
        pokemons: filterType,
      };

    case FILTER_TYPE_TWO:
      const { firstType, secondType } = action.payload;
      const filteredPokemonType = state.pokemons.filter(
        (pokemon) =>
          pokemon.type.includes(firstType) && pokemon.type.includes(secondType)
      );
      return {
        ...state,
        pokemonFilter: filteredPokemonType,
      };

    case FILTER_DATABASE:
      return {
        ...state,
        pokemons: action.payload,
      };

    case FILTER_API:
      return {
        ...state,
        pokemons: action.payload,
      };

    case ORDER_BY_ATTACK:
      const orderAttack =
        action.payload === "asc"
          ? state.pokemons.slice().sort((a, b) => {
              return b.attack - a.attack;
            })
          : state.pokemons.slice().sort((a, b) => {
              return a.attack - b.attack;
            });
      return {
        ...state,
        pokemons: orderAttack,
      };

    case ORDER_BY_NAME:
      const orderName =
        action.payload === "asc"
          ? state.pokemons.slice().sort((a, b) => {
              let first = a.name.toLowerCase();
              let second = b.name.toLowerCase();
              if (first > second) return 1;
              if (first < second) return -1;
              return 0;
            })
          : state.pokemons.slice().sort((a, b) => {
              let first = a.name.toLowerCase();
              let second = b.name.toLowerCase();
              if (first > second) return -1;
              if (first < second) return 1;
              return 0;
            });
      return {
        ...state,
        pokemons: orderName,
      };

    case DELETE_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
        pokemonFilter: action.payload,
      };

    case POST_POKEMON:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
