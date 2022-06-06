import React, { useEffect, useState } from "react";
import styles from "./Products.module.css"

const Products = () => {
  const [item, setItem]= useState([]);

  useEffect(()=>{
    fetch(`http://localhost:8080/products`)
    .then((res)=>res.json())
    .then((dt)=>{
      setItem(dt)
    })
  },[])

const [count, setCount]= useState(1)

const handleCountplus=()=>{
      setCount(count+1)
}
const handleCountmin=()=>{
  if(count>1){
    setCount(count-1)
  }
}

const [cart, setCart]= useState([]);

useEffect(()=>{
  fetch(`http://localhost:8080/cartItems`)
  .then((res)=>res.json())
  .then((dt)=>{
    setCart(dt)
  })
}, [])

  return <div >
    <h1>Products</h1>
    <div className={styles.box} >
    {item.map((el)=>{
        return <div className={styles.smallBox} >
          <h3>{el.name}</h3>
          <p>{el.description}</p>
          <button onClick={handleCountplus}>+</button>
          <p>{count}</p>
          <button onClick={handleCountmin}>-</button>
          <button>Remove from Cart</button>
        </div>
    })}
    </div>
  </div>
};

export default Products;
