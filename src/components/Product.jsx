import React from 'react'

const Product = ({products,setCart}) => {
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
            onClick={() => setCart((cart) => [...cart, product])}
          >
            Add to cart
          </button>

         
        </div>
      ))}
    </div>
  );
}

export default Product
