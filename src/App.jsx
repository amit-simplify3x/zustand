import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Product from './components/Product'
import { PRODUCTS } from './components/ProductList';

function App() {
const [cart,setCart]=useState([]);

  return (
    <>
      <h3>Welcome to sotre</h3>
      <Product products={PRODUCTS}  />

      <Cart/>
    </>
  );
}

export default App
