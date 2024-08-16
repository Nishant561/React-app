import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo: []
}


export const todoSlice = createSlice({
    name:'todo',
     initialState,
     reducers:{
        addTodo: (state , action)=>{
            const todos = {
                id:nanoid(),
                text: 'hello ma chai todo ho hae',
            }
            state.todo.push(todos)
        }
     }
})

export const {addTodo} = todoSlice.actions

export default todoSlice.reducer