import { addProducts } from "../reducers/ProductReducer";
import axios from 'axios'
export const getTheProducts = ()=> async(dispatch)=>{
    try {
        const response = await axios.get('https://fakestoreapi.com/products/')
       dispatch(addProducts(response.data))
    } catch (error) {
        console.log("no network connection" , error)
    }
}