import {
  FILTER_TYPE,
  FILTER_DATABASE,
  FILTER_API,
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
  pokemons: [], // lo muestra CardsContainer, si se modifica
  pokemonFilter: [], // no se modifica
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
          ? [...state.pokemons]
          : [...state.pokemons].filter((t) =>
              t.types?.some((e) => e.name === action.payload)
            );
      return {
        ...state,
        pokemons: filterType,
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
            // los metodos de ordenamiento se aplican sobre mi estado pokemons
            // el cual ya puede tener algun filtro aplicado
            // por lo que permite aplicar filtros sin descartar el anterior
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
