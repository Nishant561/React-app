import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../utils/Context";
import { Link, useLocation } from "react-router-dom";
import Loading from "./Loading";
import Nav from "./Nav";
import instance from "../utils/Axios";

function Home() {
  const { products } = useContext(productContext);

    const{search} =useLocation()
    const [filteredProducts , setfilteredProducts] = useState(null)
    let locate = decodeURIComponent(search.split("=")[1])
    

    const getByCategory = async()=>{
        try {
            const {data} = await instance.get(`/products/category/${locate}`)
            setfilteredProducts(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        if(!filteredProducts || locate ==='undefined') setfilteredProducts(products)
        if(locate !="undefined") getByCategory()
    },[locate,products])

  return filteredProducts ? (
    <>
      <Nav />

      <div className="w-[85%] h-[100%]  px-10 py-[50px] flex gap-4 flex-wrap overflow-x-hidden overflow-y-auto justify-between ">
        {
            filteredProducts? <>{filteredProducts.map((items, index) => (
                <Link
                  to={`/details/${items.id}`}
                  key={items.id}
                  className="w-[15vw] h-[20vw] border shadow-md flex flex-col items-center pt-6  "
                >
                  <div className="w-[80%] h-[70%]  hover:scale-[1.1] duration-300 ">
                    <img
                      className="w-full h-full object-contain object-center"
                      src={items.image}
                      alt=""
                    />
                  </div>
      
                  <div className="mt-3 px-3">
                    <h1 className="text-xs">{items.title}</h1>
                  </div>
                </Link>
              ))}</> : <Loading/>
        }
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
