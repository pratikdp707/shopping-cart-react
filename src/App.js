import Header from "./Component/Header";
import NavBar from "./Component/NavBar";
import ProductPage from "./Component/ProductPage";
import React, { useState } from 'react'


function App() {
  const [cartItem, setCartItem] = useState(0);

    const addToCart = () => {
        console.log(cartItem)
        let count = cartItem;
        setCartItem(count+1);
    }
  return (
    <>
      <NavBar cartItem ={cartItem}/>
      <Header/>
     <ProductPage addToCart ={addToCart}/>
    </>
  );
}

export default App;
