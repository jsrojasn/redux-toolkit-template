import axios from "axios";
import { AppDispatch } from "../app/store";
import { PokemonApiResults } from "../types";
import { setLoading, setError, setPokemons } from "./pokemonsSlice";


export const retrievePokemons =
    () => async (dispatch: AppDispatch) => {
        dispatch(setLoading());
        try {
            const { data } = await axios.get<PokemonApiResults>("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
            dispatch(setPokemons(data.results));
        } catch (error) {
            dispatch(setError());
        }
    };