import React from "react";
import { useDispatch } from "react-redux";
import {
  filterByApi,
  filterByDatabase,
  filterType,
  getPokemons,
  sortByAttack,
  sortByName,
} from "../../redux/actions";
import style from "./Filter.module.css";

const Filter = ({ setPage }) => {
  const dispatch = useDispatch();

  const clickHandlerDb = () => {
    dispatch(filterByDatabase());
  };

  const clickHandlerApi = () => {
    dispatch(filterByApi());
  };

  const clickHandlerAttack = (e) => {
    dispatch(sortByAttack(e.target.value));
  };

  const clickHandlerName = (e) => {
    dispatch(sortByName(e.target.value));
  };

  const handleTypeFilter = (e) => {
    const selectedType = e.target.value;
    dispatch(filterType(selectedType));
    setPage(1);
  };

  const types = [
    "all",
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "shadow",
    "steel",
    "unknown",
    "water",
  ];

  return (
    <div className={style.container}>
      <select className={style.select} onChange={handleTypeFilter}>
        {types.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
      <button onClick={clickHandlerApi}>Api pokemons</button>
      <button onClick={clickHandlerDb}>Created pokemons</button>
      <button value="desc" onClick={clickHandlerAttack}>
        -ATT
      </button>
      <button value="asc" onClick={clickHandlerAttack}>
        +ATT
      </button>
      <button value="asc" onClick={clickHandlerName}>
        A-Z
      </button>
      <button value="desc" onClick={clickHandlerName}>
        Z-A
      </button>
      <button onClick={() => {
        setPage(1)
        dispatch(filterType())
        dispatch(getPokemons())
      }}>Reset</button>
    </div>
  );
};

export default Filter;
