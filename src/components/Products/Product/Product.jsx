import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = ({data}) => {

  const [count,setcount]=useState(1)
 
  useEffect(()=>{
    axios.get(`http://localhost:8080/cartItems?productId=${data.id}`)
    .then((res)=>{
      if(res.data.length!=0){
        console.log(res.data)
        setcount(res.data[0].count)
      }
    })
  },[])



 
  return (
    <div data-cy={`product-${data.id}`}>
      <h3 data-cy="product-name">{data.name}</h3>
      <h6 data-cy="product-description">{data.description}</h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {count}
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">remove</button>
      </div>
    </div>
  );
};

export default Product;
