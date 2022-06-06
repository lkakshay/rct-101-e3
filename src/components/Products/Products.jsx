import React from "react";
import Product from "./Product/Product";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Products = () => {

  const{productData}=useContext(CartContext)
 
  return <div>

    {productData?.map((e)=>(
      <Product key={e.id} data={e}/>
    ))}
    
  </div>;
};

export default Products;
