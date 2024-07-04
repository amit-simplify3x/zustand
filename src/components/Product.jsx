import React from 'react'
import { useCartStore } from "../store/cart-store";

const Product = ({products}) => {
    const addToCart=useCartStore((state)=>state.addToCart)
  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>

         
        </div>
      ))}
    </div>
  );
}

export default Product
