import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodos: (state, action) => {
            const newTodo = {
                id: Math.random(),
                text: action.payload,
                completed: false
            }
            state.push(newTodo)
        },

        deleteTodos: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    }
})

export const { addTodos, deleteTodos } = todosSlice.actions;
export default todosSlice.reducer;