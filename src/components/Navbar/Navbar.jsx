import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

// use react-router Link or NavLink


const Navbar = () => {

  const [cart, setCart]= useState([]);

  // const [isAuth, logout]= useContext(AuthContext);
  // const navigate= useNavigate();

  // const handleLogin=()=>{
  //   // navigate("/login")
  //   if(isAuth){
  //     logout()
  //   }
  //   else{
  //     navigate("/login")
  //   }
  // }

  useEffect(()=>{
    fetch(`http://localhost:8080/cartItems`)
    .then((res)=>res.json())
    .then((dt)=>{
      setCart(dt)
    })
  }, [])


  return (
    <div data-cy="navbar" className={styles.navbar1}>
      <Link data-cy="navbar-home-link" to="" >Logo</Link>
      <span data-cy="navbar-cart-items-count">Cart : {cart.length}</span>
      <button data-cy="navbar-login-logout-button" >Logout</button>
      {/* onClick={handleLogin}> {isAuth ? "Logout" : "Login"}  */}
      
    </div>
  );
};

export default Navbar;
