import {createSlice}from '@reduxjs/toolkit'

const initialState = {
    product:[],
}


const ProductSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        addProducts: (state , action)=>{
            state.product = action.payload
        },

        removeProduct: (state , action)=>{
            state.product = state.product.filter((item,index)=> action.payload !== item.id)
        }

    }

})

export const {addProducts ,removeProduct} = ProductSlice.actions
export default ProductSlice.reducer