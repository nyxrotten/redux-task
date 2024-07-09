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
        checkTodos: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodos: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    }
})

export const { addTodos, checkTodos, deleteTodos } = todosSlice.actions;
export default todosSlice.reducer;