import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { postPokemon } from "../redux/actions";


const usePostPokemon = ({ setSelectedType }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: "",
        image: "",
        health: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
    });

    const handleInputChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    };

    const handleSelectChange = (event) => {
        setInput({
            ...input,
            types: [...input.types, event.target.value]
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postPokemon(input))
        setInput({
            name: "",
            image: "",
            health: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            types: [],
        });
        setSelectedType([]);
        history.push('./home');        
    };

    return [input, handleInputChange, handleSelectChange, handleSubmit];

};

export default usePostPokemon;
