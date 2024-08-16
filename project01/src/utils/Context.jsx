import instance from './Axios'
import React, { createContext, useEffect, useState } from 'react'

 export const productContext = createContext()

function Context(props) {
    const [products,setProducts] = useState(null)

    const getProducts = async ()=>{
        try {
            const {data} = await instance.get("/products")
            setProducts(data)
           
           
        } catch (error) {
            console.error('no network ',error)
        }
    }

    useEffect(()=>{getProducts()},[])


  return (
    <productContext.Provider value={{products,setProducts}}>
      {props.children}
    </productContext.Provider>
  )
}



export default Context
