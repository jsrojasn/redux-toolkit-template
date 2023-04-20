import { configureStore } from '@reduxjs/toolkit'
import pokemonsSlice from "../feature/pokemonsSlice"
import todosSlice from "../feature/todosSlice"


export const store = configureStore({
    reducer: {
        pokemonsState: pokemonsSlice,
        todosState: todosSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch