import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../types";



export interface PokemonsState {
    loading: boolean;
    error: boolean;
    pokemons: Pokemon[];
}

const initialState: PokemonsState = {
    loading: false,
    error: false,
    pokemons: []
};

export const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction) => {
            state.loading = true;
        },
        setError: (state, action: PayloadAction) => {
            state.error = true;
        },
        setPokemons: (state, action: PayloadAction<Pokemon[]>) => {
            state.loading = false
            state.error = false
            state.pokemons = action.payload;
        },
    },
});

export const { setLoading, setError, setPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;