import { useEffect, useState } from "react";
import usePostPokemon from "../../hooks/usePostPokemon";
import useGetTypes from "../../hooks/useGetTypes";
import validation from "./validation";

const Form = () => {
  const [selectedType, setSelectedType] = useState([]);
  const [input, handleInputChange, handleSelectChange, handleSubmit] =
    usePostPokemon({ setSelectedType });
  const types = useGetTypes();

  const handleTypeSelection = (event) => {
    const selectedTypesName = event.target.value;
    const selectedTypes = types.find((t) => t.name === selectedTypesName);
    if (selectedType) {
      setSelectedType([...selectedType, selectedTypes]);
    }
  };

  const handleTypeRemoval = (typeName) => {
    const updatedSelectedTypes = selectedType.filter(
      (type) => type.name !== typeName
    );
    setSelectedType(updatedSelectedTypes);
  };

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(validation(input));
  }, [input])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          value={input.name}
          onChange={handleInputChange}
          name="name"
        />
         <div>
          {errors.name && <span>{errors.name}</span>}
        </div>
      </div>

      <div>
        <label htmlFor="image">Image: </label>
        <input
          type="text"
          value={input.image}
          onChange={handleInputChange}
          name="image"
        />
         <div>
          {errors.image && <span>{errors.image}</span>}
        </div>
      </div>

      <div>
        <label>Health: </label>
        <input
          type="number"
          value={input.health}
          onChange={handleInputChange}
          name="health"
        />
          <div>
          {errors.health && <span>{errors.health}</span>}
        </div>
      </div>

      <div>
        <label>Attack: </label>
        <input
          type="number"
          value={input.attack}
          onChange={handleInputChange}
          name="attack"
        />
        <div>
          {errors.attack && <span>{errors.attack}</span>}
        </div>
      </div>

      <div>
        <label>Defense: </label>
        <input
          type="number"
          value={input.defense}
          onChange={handleInputChange}
          name="defense"
        />
        <div>
          {errors.defense && <span>{errors.defense}</span>}
        </div>
      </div>

      <div>
        <label>Speed: </label>
        <input
          type="number"
          value={input.speed}
          onChange={handleInputChange}
          name="speed"
        />
         <div>
          {errors.speed && <span>{errors.speed}</span>}
        </div>
      </div>

      <div>
        <label>Height: </label>
        <input
          type="number"
          value={input.height}
          onChange={handleInputChange}
          name="height"
        />
          <div>
          {errors.height && <span>{errors.height}</span>}
        </div>
      </div>

      <div>
        <label>Weight: </label>
        <input
          type="number"
          value={input.weight}
          onChange={handleInputChange}
          name="weight"
        />
        <div>
          {errors.weight && <span>{errors.weight}</span>}
        </div>
      </div>

      <div>
        <label htmlFor="types">Types: </label>
        <select
          name="types"
          onChange={(e) => {
            handleSelectChange(e);
            handleTypeSelection(e);
          }}
          multiple
        >
          
          {types.map((t, i) => (
            <option key={i} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
      {selectedType.map((type, index) => (
        <li key={index}>
          {type.name}
          <span onClick={() => handleTypeRemoval(type.name)}>❌</span>
        </li>
      ))}
      <button type="submit" disabled={Object.keys(errors).length > 0}>SUBMIT</button>
    </form>
  );
};

export default Form;
