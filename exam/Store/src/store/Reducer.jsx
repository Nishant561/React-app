import {createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos:[]
}

export const TodoSlice = createSlice({
    name:'nishant',
    initialState,
    reducers:{
        addTodo: (state , action)=>{
                const data = {
                    id: nanoid(),
                    text: 'hello ma chai nishant ho'
                }

                state.todos.push(data)
        }
    }
})


export const {addTodo} = TodoSlice.actions

export default TodoSlice.reducer

