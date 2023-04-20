import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types";



export interface PokemonsState {
    todos: Todo[];
}

const initialState: PokemonsState = {
    todos: []
};

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(t => t.id !== action.payload);
        },
    },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;