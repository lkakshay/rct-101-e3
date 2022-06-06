import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
const Product = ({data}) => {

  const {change,setchange} =useContext(CartContext)
 
  
  const [count,setcount]=useState(0)
  const [id,setid]=useState()

  const addtocart=()=>{
    axios.post('http://localhost:8080/cartItems',{
      productId:data.id,
      count:1
    })
    .then(()=>{
      setchange(change+1)
    })

  }

  const editItem=(e)=>{
    if(count===1&& e===-1){
      deleteitem()
      return
    }
    
    axios.patch(`http://localhost:8080/cartItems/${id}/`,{
      count:count+e
    })
    .then(()=>{
      setchange(change+1)
    })
  }

  const deleteitem=()=>{
    axios.delete(`http://localhost:8080/cartItems/${id}/`)
    .then(()=>{
      setchange(change+1)
    })
  

  }
 
  useEffect(()=>{
    axios.get(`http://localhost:8080/cartItems?productId=${data.id}`)
    .then((res)=>{
      if(res.data.length!==0){
        setcount(res.data[0].count)
        setid(res.data[0].id)
      }
      else{
        setcount(0)
      }
    })
  },[data.id,change])



 
  return (
    <div data-cy={`product-${data.id}`}>
      <h3 data-cy="product-name">{data.name}</h3>
      <h6 data-cy="product-description">{data.description}</h6>
      {count!==0?(
         <div>
         <button onClick={()=>editItem(1)} data-cy="product-increment-cart-item-count-button">+</button>
         <span data-cy="product-count">
           {count}
         </span>
         <button onClick={()=>editItem(-1)} data-cy="product-decrement-cart-item-count-button">-</button>
         <button onClick={()=>{
        deleteitem()
      }} data-cy="product-remove-cart-item-button">remove</button>
       </div>
      ):<button onClick={()=>{
        addtocart()
      }} data-cy="product-add-item-to-cart-button">add to cart</button>}
    
     
    </div>
  );
};

export default Product;
