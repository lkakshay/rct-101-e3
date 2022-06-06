import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

// use react-router Link or NavLink


const Navbar = () => {

  const {cartData}=useContext(CartContext)

  const {auth,setauth}=useContext(AuthContext)
  return (
    <div data-cy="navbar">
      <div>LK</div>
      <Link  to={"/"} data-cy="navbar-home-link">HOME</Link>
      <span data-cy="navbar-cart-items-count">{auth?cartData:0}</span>
      <button  onClick={()=>{if(auth===true){
        setauth(false)
      }}} data-cy="navbar-login-logout-button">{auth?"Logout":"Login"}</button>
    </div>
  );
};

export default Navbar;
