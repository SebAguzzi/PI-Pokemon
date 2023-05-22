import useGetPokemonByName from "../../hooks/useGetPokemonByName";
import style from "./SearchBar.module.css"

const SearchBar = () => {
    
  const [pokemon, handlePokemonChange] = useGetPokemonByName();

  const handlePokemonSelection = (event) => {
    handlePokemonChange(event);
  };

  return (
    <div>
      <input className={style.SearchBar}
        type="text"
        placeholder="Search pokemon"
        value={pokemon}
        onChange={handlePokemonSelection}
      />
      </div>
  );
};

export default SearchBar;
