import { useState } from "react";
import style from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getPokemonName } from "../../redux/actions";


const SearchBar = () => {
    
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");  

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleSearch = () => {
    dispatch(getPokemonName(searchTerm));   
  };

  return (
    <div>
      <input className={style.SearchBar}
        type="text"
        placeholder="Search pokemon"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      </div>
  );
};

export default SearchBar;
