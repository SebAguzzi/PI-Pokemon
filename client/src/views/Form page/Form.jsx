import { useEffect, useState } from "react";
import usePostPokemon from "../../hooks/usePostPokemon";
import useGetTypes from "../../hooks/useGetTypes";
import validation from "./validation";
import style from "./Form.module.css";

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
  }, [input]);

  return (
    <div className={style.pageContainer}>
      <div className={style.createContainer}>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.formcontainer}>
            <label htmlFor="name">Name: </label>
            <input
              className={style.inputField}
              type="text"
              value={input.name}
              onChange={handleInputChange}
              name="name"
            />
            <div className={style.errors}>
              {errors.name && <span>{errors.name}</span>}
            </div>
          </div>

          <div className={style.formcontainer}>
            <label htmlFor="image">Image: </label>
            <input
              className={style.inputField}
              type="text"
              value={input.image}
              onChange={handleInputChange}
              name="image"
            />
            <div className={style.errors}>
              {errors.image && <span>{errors.image}</span>}
            </div>
          </div>

          <div className={style.formcontainer}>
            <label>Health: </label>
            <input
              className={style.inputField}
              type="number"
              value={input.health}
              onChange={handleInputChange}
              name="health"
            />
            <div className={style.errors}>
              {errors.health && <span>{errors.health}</span>}
            </div>
          </div>

          <div className={style.formcontainer}>
            <label>Attack: </label>
            <input
              className={style.inputField}
              type="number"
              value={input.attack}
              onChange={handleInputChange}
              name="attack"
            />
            <div className={style.errors}>
              {errors.attack && <span>{errors.attack}</span>}
            </div>
          </div>

          <div className={style.formcontainer}>
            <label>Defense: </label>
            <input
              className={style.inputField}
              type="number"
              value={input.defense}
              onChange={handleInputChange}
              name="defense"
            />
            <div className={style.errors}>
              {errors.defense && <span>{errors.defense}</span>}
            </div>
          </div>

          <div className={style.formcontainer}>
            <label>Speed: </label>
            <input
              className={style.inputField}
              type="number"
              value={input.speed}
              onChange={handleInputChange}
              name="speed"
            />
            <div className={style.errors}>
            {errors.speed && <span>{errors.speed}</span>}
            </div>
          </div>

          <div className={style.formcontainer}>
            <label>Height: </label>
            <input
              className={style.inputField}
              type="number"
              value={input.height}
              onChange={handleInputChange}
              name="height"
            />
            <div className={style.errors}>
              {errors.height && <span>{errors.height}</span>}
            </div>
          </div>

          <div className={style.formcontainer}>
            <label>Weight: </label>
            <input
              className={style.inputField}
              type="number"
              value={input.weight}
              onChange={handleInputChange}
              name="weight"
            />
            <div className={style.errors}>
              {errors.weight && <span>{errors.weight}</span>}
            </div>
          </div>

          <div>
            <label htmlFor="types">Types: </label>
            <select
              className={style.select}
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
          <button type="submit" disabled={Object.keys(errors).length > 0}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
