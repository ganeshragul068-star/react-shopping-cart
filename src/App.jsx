
import { useState, useEffect } from 'react';

function Product({ productName, price }) {
  const [productPrice, setProductPrice] = useState(price);

  useEffect(() => {
    console.log("Shopping Cart System Loaded");
  }, []);

  const applyDiscount = () => {
    setProductPrice(p => Math.max(0, p - 200));
  };

  return (
    <div className="product-card">
      <h2>Product Details</h2>

      <p>
        Product Name: <strong>{productName}</strong>
      </p>

      <p className="price">
        Price: ₹{productPrice}
      </p>

      <button onClick={applyDiscount}>
        Apply ₹200 Discount
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Shopping Cart Management System</h1>
      <Product productName="Laptop" price={50000} />
    </div>
  );
}

export default App;

const style = document.createElement("style");
style.textContent = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f0f4f8;
  }

  .app {
    text-align: center;
    padding: 40px 15px;
  }

  .app h1 {
    color: #1e3a8a;
    font-size: 28px;
  }

  .product-card {
    background: white;
    width: 350px;
    max-width: 100%;
    margin: 30px auto;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 12px #0002;
  }

  .product-card h2 {
    color: #2563eb;
  }

  .product-card p {
    font-size: 17px;
    color: #333;
  }

  .product-card .price {
    font-size: 24px;
    font-weight: bold;
    color: #15803d;
  }

  .product-card button {
    background: #2563eb;
    color: white;
    border: none;
    padding: 12px 18px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 15px;
  }

  .product-card button:hover {
    background: #1d4ed8;
  }
`;

document.head.appendChild(style);
