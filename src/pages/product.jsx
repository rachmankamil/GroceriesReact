import React, { useState } from 'react';
import '../assets/product.css';

function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    console.log(`Adding ${quantity} to cart`);
  };

  return (
    <div className="product-page">
      <div className="product-image">
        <img src="https://via.placeholder.com/300x300" alt="Product Image" />
      </div>
      <div className="product-details">
        <h1 className="product-name">Product Name</h1>
        <p className="product-description">Product Description</p>
        <p className="product-price">$99.99</p>
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max="10"
          />
        </label>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
