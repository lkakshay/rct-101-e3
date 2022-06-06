import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {



  const [productData,setproductData]=useState([])
  const [cartData,setcartData]=useState(0)

  useEffect(()=>{
    axios.get('http://localhost:8080/products')
    .then((res)=>{
      setproductData(res.data)
    })
    axios.get('http://localhost:8080/cartItems')
    .then((res)=>{
      setcartData(res.data.length)
    })
  },[])





 
  return <CartContext.Provider value={{productData,cartData}}>{children}</CartContext.Provider>;
};
