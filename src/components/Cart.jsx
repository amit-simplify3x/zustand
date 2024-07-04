import React from 'react'
import {useCartStore} from '../store/cart-store'

const Cart = () => {
  
    const {cart,removeFromCart,clearCart}=useCartStore((state)=>({
     cart:state.cart,
     removeFromCart:state.removeFromCart,
     clearCart:state
    
    }))

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span>
          <button
            style={{
              backgroundColor: "Red",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() =>
             removeFromCart(product.id)
            }
          >
            Remove
          </button>
        </div>
      ))}
      {cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
    </div>
  );
}

export default Cart
