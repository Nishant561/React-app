import {createSlice , nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[]
}


export const TodoSlice = createSlice({
    name:'nishat',
    initialState,
    reducers:{
        addTodo: (state , action)=>{
                const data = {
                    id: nanoid(),
                    text: action.payload,
                    completed: false
                }

                state.todos.push(data)
        },

        deleteTodo: (state , action)=>{
            state.todos = state.todos.filter((items ,i)=> items.id !== action.payload.id)
        }
    }
})


export const {addTodo} = TodoSlice.actions

export default TodoSlice.reducer
