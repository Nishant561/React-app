import React, { createContext, useEffect, useState } from 'react'

export const products = createContext()


function Utils(props) {

    const [product , setProduct] = useState([])

useEffect(()=>{
    const storedProduct = localStorage.getItem('myProduct');
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    }
    
    
},[])
  return   ( <products.Provider value={[product , setProduct]}>
    {props.children}
  </products.Provider>)
    
  
}

export default Utils
